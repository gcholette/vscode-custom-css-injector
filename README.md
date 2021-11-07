# vscode-custom-css-injector
Inject CSS inside vscode to allow deep customisation.

Tested w/ VSCode version 1.62.0 & Electron 13.5.1 on Windows.

### How to use

1. Copy the file `custom-css-injector.js` inside `C:\Users\<User>\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-browser\workbench\` on Windows 10.

2. Inside this same directory, add this line of code to the existing file `workbench.html`

```
<script src="custom-css-injector.js"></script>
```

To modify the CSS simply modify custom-css-injector.js

Use the dev tools inside vscode to debug and find css classes with Help -> Toggle Developer Tools

Note: vscode will say that it's installation is corrupt.

<img src="https://github.com/gcholette/vscode-custom-css-injector/blob/main/examples/example-css-1.PNG?raw=true" width="75%" height="75%">
