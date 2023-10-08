import React from 'react';
import Controls from '../components/Popup/Controls';
import MediaRecorder from '../components/Popup/MediaRecorder';

const ScreenRecoder = () => {
  return (
    <main
      className="flex gap-4 "
      style={{
        width: '1500px',
      }}
    >
      <MediaRecorder />
      <Controls />
    </main>
  );
};

export default ScreenRecoder;
