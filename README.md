
## Install

```
nvm use
npm install
```

## Start server

```
npm start
```

## Learnings

- SystemJS is currently included as a script tag.  These seems to be because it doesn't have an ES Module export.  This might warrant more investigation.
- SystemJS will not load a script as a global url (absolute) unless a protocol-dependent url (staring with "//") is given.  Otherwise, it will see it as a bare specifier (ie, named).
- To get the /skills app code available, this code is designed to work with the [hello-systemjs](https://github.com/jaketrent/hello-systemjs) project.  Download and start that before you start this project server.
- If a single-spa app that is already mounted at route change time and that app has its own client routing, those routes won't be triggered to change.  There might be a way to do this programmatically.  The only successful method of change that I have gotten to work is by using `href="#"`.
