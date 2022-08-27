AWS_PROFILE := "ben-ai-sandbox"
CODE_ARTIFACT_DOMAIN := "ai-package-index"
CODE_ARTIFACT_REPOSITORY := "ai-package-index"

# build:
#     npx projen build

install:
    yarn install

build:
    npm run build

# use "feat: ..." and "fix: ..." in commit messages to have
# this recipe bump the version and update the changelog properly
bump-version:
    npx projen bump

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

publish-js-local:
    #!/bin/bash
    export AWS_ACCESS_KEY_ID=`aws configure get {{AWS_PROFILE}}.aws_access_key_id`
    export AWS_SECRET_ACCESS_KEY=`aws configure get {{AWS_PROFILE}}.aws_secret_access_key`

    AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
    AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
        aws codeartifact login --tool npm --repository ai-package-index --domain ai-package-index --domain-owner 785465075102 --profile ben-ai-sandbox \
    && npm publish dist/js/*


# I can't get this one to work
publish-js-local-publib:
    #!/bin/bash
    export AWS_ACCESS_KEY_ID=`aws configure get {{AWS_PROFILE}}.aws_access_key_id`
    export AWS_SECRET_ACCESS_KEY=`aws configure get {{AWS_PROFILE}}.aws_secret_access_key`

    AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
    AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
        npx -p publib@latest publib-npm

publish-python-local: install-twine
    #!/bin/bash

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
        --repository {{CODE_ARTIFACT_REPOSITORY}} \
        --format pypi \
        --query repositoryEndpoint \
        --output text`

    twine upload ./dist/python/*
    
publish-local: publish-python-local publish-js-local

clean-pre-build:
    rm -rf lib/ dist/ coverage/ cdk.out/ test-reports/

build-and-publish: clean-pre-build build publish-local

# untested; probably doesn't work
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
