import React from 'react';

const FooterBar = () => {
  return (
    <footer className="mt-14 md:mt-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Interview Buddy. Built with care.</p>
        <div className="text-sm text-neutral-500">Made for focused, confident interviews.</div>
      </div>
    </footer>
  );
};

export default FooterBar;
