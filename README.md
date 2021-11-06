# vscode-custom-css-injector
A little hack that edits the css inside vscode

### How to use

Copy the file `custom-css-injector.js` inside `C:\Users\<User>\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-browser\workbench\` on Windows by default (path subject to change).

Inside this same repository, add this code to the existing file `workbench.html`

```
<script src="custom-css-injector.js"></script>
```

To modify the CSS simply modify it inside custom-css-injector.js

Use the dev tools inside vscode to debug and find css classes with Help -> Toggle Developer Tools
