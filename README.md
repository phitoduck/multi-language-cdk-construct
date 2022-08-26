# Eric's first multi-language construct

This project was created using

```bash
mkdir multi-language-construct
npm -g install yarn
npx projen new awscdk-construct
```

Then I edited values in `.projenrc.js` using autocompletion. I set items such as project
dependencies and the fact that I want this to be ported to python.

```bash
# update the projen project to reflect the configurations in .projenrc.js
npx projen
```

I filled out a basic construct, then I wired the project up to be a valid CDK project:

```bash
mkdir ./bin
touch ./bin/app.ts
# ... filled out this file based on the boilerplate typescript template
```
