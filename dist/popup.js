/* eslint-disable no-undef */
// Camera and mic toggle buttons
const cameraToggle = document.getElementById('cameraToggle');
const micToggle = document.getElementById('micToggle');

cameraToggle.addEventListener('click', () => {
  cameraToggle.classList.toggle('active');

  // Check if the camera button is active and perform actions accordingly
  if (cameraToggle.classList.contains('active')) {
    navigator.mediaDevices.getUserMedia({ video: true });
  } else {
    // disable cam
  }
});

micToggle.addEventListener('click', () => {
  micToggle.classList.toggle('active');

  // Check if the mic button is active and perform actions accordingly
  if (micToggle.classList.contains('active')) {
    navigator.mediaDevices.getUserMedia({ audio: true });
  } else {
    // Microphone is off
  }
});

// Event listener to start recording when the button is clicked
const startRecordingButton = document.getElementById('startRecording');

startRecordingButton.addEventListener('click', () => {
  // Check if the camera and microphone are active before starting recording
  if (
    cameraToggle.classList.contains('active') &&
    micToggle.classList.contains('active')
  ) {
    // Start recording
    const startRecording = () => {
      chrome.runtime.sendMessage({ name: 'startRecording' });
    };

    document.addEventListener('DOMContentLoaded', () => {
      document
        .getElementById('startRecordingButton')
        .addEventListener('click', startRecording);
    });
    alert('Recording started');
  } else {
    alert('Please enable both camera and microphone to start recording.');
  }
});
