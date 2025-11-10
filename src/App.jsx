import React from 'react';
import HeroCover from './components/HeroCover';
import BentoGrid from './components/BentoGrid';
import UploadPanel from './components/UploadPanel';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-50 text-neutral-900">
      <HeroCover />
      <BentoGrid />
      <UploadPanel />
      <FooterBar />
    </div>
  );
}

export default App;
