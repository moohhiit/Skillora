import React, { useState } from "react";
import { X } from "lucide-react";

export function IssueModal({ onClose }: { onClose: () => void }) {
  const [issue, setIssue] = useState("");

  const handleSubmit = () => {
    console.log("New Issue:", issue);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute right-3 top-3">
          <X />
        </button>
        <h2 className="text-xl font-bold mb-4">Report an Issue</h2>
        <textarea
          className="w-full border rounded-lg p-2 mb-4"
          placeholder="Describe the issue..."
          rows={4}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
