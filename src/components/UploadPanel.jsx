import React, { useRef, useState } from 'react';
import { FileUp, CheckCircle2 } from 'lucide-react';

const UploadPanel = () => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const onPick = () => inputRef.current?.click();

  const onChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // Placeholder UX only — backend will be wired later
      setUploaded(true);
      setTimeout(() => setUploaded(false), 2000);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mt-10">
      <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 p-6 md:p-8 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Upload Resume</h3>
            <p className="text-neutral-600 mt-1">PDF or DOCX up to 10MB</p>
            {fileName && (
              <p className="text-sm text-neutral-500 mt-2">Selected: {fileName}</p>
            )}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={onChange}
            />
            <button onClick={onPick} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition">
              <FileUp size={18} />
              Choose File
            </button>
            {uploaded && (
              <span className="inline-flex items-center gap-1 text-green-600 text-sm">
                <CheckCircle2 size={18} /> Uploaded
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadPanel;
