# HelpMeOut - Google Chrome Video Recorder Extension

This repository provides a minimal example of how to create a Chrome extension that records the user's screen and webcam, allowing navigation or URL changes on the current tab.

## What is being solved

- Screen recording is not possible using the new offscreen API in Manifest V3, as discussed in [this Stack Overflow post](https://stackoverflow.com/questions/74773408/chrome-tabcapture-unavailable-in-mv3s-new-offscreen-api).
- Previous methods of screen recording, such as `chrome.desktopCapture.chooseDesktopMedia()`, no longer work in Manifest V3, as discussed in [this Stack Overflow post](https://stackoverflow.com/questions/30906689/capture-screen-chrome-desktopcapture-choosedesktopmedia-fails-pnacl-extens) and [this GitHub issue](https://github.com/GoogleChrome/chrome-extensions-samples/issues/627).
- All existing video recording extensions currently use Manifest V2, as noted in the above issues.

## Installation

1. Clone this repository to your local machine
2. Open the Google Chrome browser and go to `chrome://extensions/`.
3. Turn on the "Developer mode" toggle in the top right corner.
4. Click on the "Load unpacked" button and select the directory where you cloned this repository.
5. The extension should now be loaded and ready to use.

## Usage

1. Click on the extension icon in the top right corner of the browser.
2. Click on the "Start Recording" button to start recording your screen.
3. It will open a new extension tab that is pinned and without a title. Select any screen.
4. Click on the "Stop Recording" button to stop the recording.
5. The recorded video will be displayed on screen (you can do anything you want in `content.js` file).

## 👥 Author

👤 **Charlian Imoisili**

- GitHub: [@CharlyAnne](https://github.com/CharlyAnne)
- Twitter: [@Imoisiliii](https://twitter.com/Imoisiliii)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/charlian-imoisili)
