## React Chrome extension Boilerplate

This project is a Boilerplate of a Chrome extension using React and Webpack.

## Install dependencies

```
npm install
```

## Generate Chrome build files using webpack and babel

```
npm run build 
```

## Load extension to Chrome

When the build command is executed, it will appear dist folder, this is the bin of our extension.
Go to chrome://extensions/, then enable the 'Developer Mode' check, press the 'Load unpacked' button,
search and select the dist folder and press the ok button.

Our extension will be added to our extensions.
Now press the Extensions button on the Chrome bar, and pin the extension to the Chrome bar.

we can run our extension like an HTML page accessing 
chrome-extension://extension-ID/default-page
for example:

![image](https://github.com/AngelGuante/Boilerplate_React_Chome-Extension/assets/49294128/fe0f4107-4baf-4cdc-b736-79965012fa68)

For this extension, the path will be:
chrome-extension://illgdlhnehkohphhlpigmhimphmmmdap/popup.html

![image](https://github.com/AngelGuante/Boilerplate_React_Chome-Extension/assets/49294128/a39ac847-4e2e-4506-85b2-94fc15d834ac)

## Test Content Scripts
* Go to https://www.google.com/

  Or click on the popup Chrome extension to test Chrome Tabs API
  
  ![image](https://github.com/AngelGuante/Boilerplate_React_Chome-Extension/assets/49294128/1f817a9b-0450-411d-87b2-15451758f757)
* You will see the next message under the Google logo:
  ![image](https://github.com/AngelGuante/Boilerplate_React_Chome-Extension/assets/49294128/8001f79b-afe7-4c4c-9dd8-5cbef798cf40)

