import React from 'react';
import ExtensionModal from '../components/Extensions/ExtensionModal';
import RecordModal from '../components/Recorder/RecordModal';

const ScreenRecoder = () => {
  return (
    <main className="flex gap-4">
      <ExtensionModal />
      <RecordModal />
    </main>
  );
};

export default ScreenRecoder;
