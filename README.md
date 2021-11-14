<h1 align="center">
  :syringe: VSCode Custom CSS Injector
</h1>

<p align="center">
  <strong>Inject CSS inside vscode to allow deep customisation.</strong>
</p>

<p align="center">
  <img src="https://github.com/gcholette/vscode-custom-css-injector/blob/main/examples/example-css-1-0.PNG?raw=true">

## How to use

1. Copy the file `custom-css-injector.js` inside `C:\Users\<User>\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-browser\workbench\` on Windows 10.

2. Inside this same directory, add this line of code to the existing file `workbench.html`

```
<script src="custom-css-injector.js"></script>
```

To modify the CSS simply modify custom-css-injector.js

Use the dev tools inside vscode to debug and find css classes with Help -> Toggle Developer Tools

Note: vscode will say that it's installation is corrupt.
  
Note 2: VScode will wipe the directory with every update, so make sure if you have motifications that it's backed up somewhere.

Tested w/ VSCode version 1.62.0 & Electron 13.5.1 on Windows.

## Credits

Inspired by the "Neon Dreams" feature in the extension [Synthwave '84](https://github.com/robb0wen/synthwave-vscode). It's basically a reworked version of [this file](https://github.com/robb0wen/synthwave-vscode/blob/master/src/js/theme_template.js) for modularity.

Feel free to send PRs and create issues!
