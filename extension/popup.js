/* eslint-disable no-undef */
//Close modal
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', () => {
  window.close();
});

// // Camera and mic toggle buttons
// const cameraToggle = document.getElementById('cameraToggle');
// const micToggle = document.getElementById('micToggle');

// cameraToggle.addEventListener('click', () => {
//   cameraToggle.classList.toggle('active');
//   // Check if the camera button is active and perform actions accordingly
//   if (cameraToggle.classList.contains('active')) {
//     navigator.mediaDevices.getUserMedia({ video: true });
//   } else {
//     console.log(error);
//   }
// });

// micToggle.addEventListener('click', () => {
//   micToggle.classList.toggle('active');
//   // Check if the mic button is active and perform actions accordingly
//   if (micToggle.classList.contains('active')) {
//     navigator.mediaDevices.getUserMedia({ audio: true });
//   } else {
//     console.log('error');
//   }
// });

// const startRecording = () => {
//   chrome.runtime.sendMessage({
//     name: 'startRecording',
//   });
// };
// const startRecord = document.getElementById('startRecording');

// document.addEventListener('DOMContentLoaded', () => {
//   if (
//     cameraToggle.classList.contains('active') ||
//     micToggle.classList.contains('active')
//   ) {
//     startRecord.addEventListener('click', startRecording);
//   } else {
//     alert('Please enable either camera and microphone to start recording.');
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const startRecord = document.querySelector('.record-btn');

  startRecord.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'request_recording' },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, 'err line 10');
            console.log(response);
          }
        }
      );
    });
  });
});
