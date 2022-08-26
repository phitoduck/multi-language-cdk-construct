AWS_PROFILE := "ben-ai-sandbox"

build:
    npx projen build

unzip-python-wheel:
    cd dist/python/ && unzip -o *.whl

unzip-python: unzip-python-wheel
    cd dist/python/multi_language_construct_eric/_jsii/ \
    && TAR_FNAME=`echo *.tgz` \
    && echo $TAR_FNAME \
    && echo "/usr/bin/tar –xvzf $TAR_FNAME" \
    && /usr/bin/tar –xvzf "$TAR_FNAME"

publish-from-local-machine:
    #!/bin/bash
    export TWINE_USERNAME="aws"
    export TWINE_PASSWORD=`aws codeartifact login \
        --profile {{AWS_PROFILE}} \
        --tool twine \
        --repository ai-package-index \
        --domain ai-package-index \
        --domain-owner 785465075102`
    export TWINE_REPOSITORY_URL=`aws codeartifact get-repository-endpoint \
        --profile {{AWS_PROFILE}} \
        --domain ai-package-index \
        --domain-owner 785465075102 \
        --repository ai-package-index \
        --format pypi \
        --query repositoryEndpoint \
        --output text`
    

publish-ci:
    #!/bin/bash
    export TWINE_USERNAME="aws"
    export TWINE_PASSWORD=`aws codeartifact login \
        --tool twine \
        --repository ai-package-index \
        --domain ai-package-index \
        --domain-owner 785465075102`
    export TWINE_REPOSITORY_URL=`aws codeartifact get-repository-endpoint \
        --domain ai-package-index \
        --domain-owner 785465075102 \
        --repository ai-package-index \
        --format pypi \
        --query repositoryEndpoint \
        --output text`
    