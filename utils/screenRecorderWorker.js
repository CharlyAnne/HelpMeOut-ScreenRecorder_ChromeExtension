/* eslint-disable no-restricted-globals */
import RecordRTC from 'recordrtc';

let recorder;

self.onmessage = function (e) {
  const { action, stream } = e.data;

  if (action === 'start') {
    recorder = new RecordRTC(stream, {
      type: 'video',
      mimeType: 'video/webm',
    });

    recorder.startRecording();
  } else if (action === 'stop') {
    recorder.stopRecording(function (videoURL) {
      self.postMessage({ videoURL });
    });
  }
};
