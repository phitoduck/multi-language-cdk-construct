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

## Pushing to private NPM and PyPI server

I created a private PyPI server here:

eric-private-pypi-785465075102.d.codeartifact.us-east-1.amazonaws.com

Hmm... actually, I named it `eric-private-pypi`, but I suspect that is a bad
name because I think both python *and* TypeScript packages will go there.

![](./images/pypi-repo.png)

## My reaction to `projen` and TypeScript

I'm pleased to see that this projen template includes:

- linting and its enforcement
- tests and enforcement that they pass
- an `npx projen build` command that 

