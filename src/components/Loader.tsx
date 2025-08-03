import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 font-mono">
      <div className="text-center">
        <pre className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight text-amber-900/80 dark:text-amber-100/80 select-none">
{`╦╔╗╔╔╦╗╔═╗╔╗╔╔╦╗   ╔═╗ ╦
║║║║ ║ ║╣ ║║║ ║ ───║ ║ ║
╩╝╚╝ ╩ ╚═╝╝╚╝ ╩    ╚═╝ ╩`}
        </pre>
        
        <div className="mt-6 text-sm sm:text-base md:text-lg text-amber-800/70 dark:text-amber-200/70">
          <span className="font-semibold">v0.1.0</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
