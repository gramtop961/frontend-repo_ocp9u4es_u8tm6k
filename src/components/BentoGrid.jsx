import React from 'react';
import { Rocket, FileText, BarChart3, MessageSquare } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`group relative rounded-xl bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-white/30 dark:border-white/5 shadow-sm overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:via-orange-500/5 transition" />
    <div className="relative p-5 md:p-6 h-full">
      {children}
    </div>
  </div>
);

const Stat = ({ label, value }) => (
  <div>
    <p className="text-xs uppercase tracking-wide text-neutral-500">{label}</p>
    <p className="text-xl font-semibold mt-1">{value}</p>
  </div>
);

const BentoGrid = () => {
  return (
    <section className="relative -mt-16 z-[3]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-6">
          {/* Start Practice (tall) */}
          <Card className="lg:col-span-2 row-span-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Start Practice</h3>
                <p className="text-neutral-500 mt-1">Quick session with AI interview coach</p>
              </div>
              <Rocket className="text-orange-500" />
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Stat label="Last score" value="86%" />
              <Stat label="Streak" value="3 days" />
              <Stat label="Sessions" value="12" />
            </div>
            <button className="mt-6 px-4 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition">
              Launch Practice
            </button>
          </Card>

          {/* Resume Analysis */}
          <Card className="lg:col-span-1 row-span-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Resume Analysis</h3>
                <p className="text-neutral-500 mt-1">Upload and get instant insights</p>
              </div>
              <FileText className="text-orange-500" />
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-sm text-neutral-600">Highlights</p>
              <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
                <li>Role fit suggestions</li>
                <li>Impact statements</li>
                <li>ATS keyword coverage</li>
              </ul>
            </div>
            <button className="mt-6 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition">
              Analyze Resume
            </button>
          </Card>

          {/* Recent Scores */}
          <Card className="lg:col-span-1 row-span-1">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Recent Scores</h3>
              <BarChart3 className="text-orange-500" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-xs text-neutral-500">UI</p>
                <p className="text-lg font-semibold">88</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">BE</p>
                <p className="text-lg font-semibold">82</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">DSA</p>
                <p className="text-lg font-semibold">90</p>
              </div>
            </div>
          </Card>

          {/* Tips */}
          <Card className="lg:col-span-1 row-span-1">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Quick Tips</h3>
              <MessageSquare className="text-orange-500" />
            </div>
            <ul className="mt-3 text-sm text-neutral-700 space-y-1 list-disc list-inside">
              <li>Use STAR for behavioral answers</li>
              <li>Quantify impact with metrics</li>
              <li>Pause, then respond concisely</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
