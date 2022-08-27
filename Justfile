AWS_PROFILE := "ben-ai-sandbox"
CODE_ARTIFACT_DOMAIN := "ai-package-index"

# build:
#     npx projen build

build:
    npm run build

unzip-python-wheel:
    cd dist/python/ && unzip -o *.whl

unzip-python: unzip-python-wheel
    cd dist/python/multi_language_construct_eric/_jsii/ \
    && TAR_FNAME=`echo *.tgz` \
    && echo $TAR_FNAME \
    && echo "/usr/bin/tar –xvzf $TAR_FNAME" \
    && /usr/bin/tar –xvzf "$TAR_FNAME"

install-twine:
    which twine || python -m pip install twine

publish-from-local-machine: install-twine
    #!/bin/bash

    export TWINE_USERNAME="aws"
    # aws codeartifact login \
    #     --profile {{AWS_PROFILE}} \
    #     --tool twine \
    #     --repository ai-package-index \
    #     --domain ai-package-index \
    #     --domain-owner $AWS_ACCOUNT_ID

    AWS_ACCOUNT_ID=`aws sts get-caller-identity \
        --query 'Account' \
        --output text \
        --profile ben-ai-sandbox`

    export TWINE_USERNAME=aws
    export TWINE_PASSWORD=`aws codeartifact get-authorization-token \
        --profile {{AWS_PROFILE}} \
        --domain {{CODE_ARTIFACT_DOMAIN}} \
        --domain-owner $AWS_ACCOUNT_ID \
        --query authorizationToken \
        --output text`
    export TWINE_REPOSITORY_URL=`aws codeartifact get-repository-endpoint \
        --profile {{AWS_PROFILE}} \
        --domain {{CODE_ARTIFACT_DOMAIN}} \
        --domain-owner $AWS_ACCOUNT_ID \
        --repository ai-package-index \
        --format pypi \
        --query repositoryEndpoint \
        --output text`

    twine upload ./dist/python/*
    

publish-ci: install-twine
    #!/bin/bash
    export TWINE_USERNAME="aws"
    aws codeartifact login \
        --tool twine \
        --repository ai-package-index \
        --domain ai-package-index \
        --domain-owner 785465075102
    export TWINE_REPOSITORY_URL=`aws codeartifact get-repository-endpoint \
        --domain ai-package-index \
        --domain-owner 785465075102 \
        --repository ai-package-index \
        --format pypi \
        --query repositoryEndpoint \
        --output text`

    
    