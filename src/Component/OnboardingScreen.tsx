import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Step = 0 | 1 | 2;

type FormData = {
  learnedBefore: string;
  interests: string[];
  orgStatus: "" | "yes" | "no";
  organization: string;
  experienceYears: string;
  skills: Record<string, number>; // e.g. { React: 40 }
  learningStyle: "" | "video" | "reading" | "project" | "live";
  availability: string;
  goals: string;
};

const INTERESTS = [
  "Web Dev",
  "Mobile",
  "Data Science",
  "AI/ML",
  "Cloud",
  "Cybersecurity",
  "DevOps",
  "UI/UX",
];

const SKILL_KEYS = ["HTML/CSS", "JavaScript", "React", "DS & Algos"] as const;

const defaultData: FormData = {
  learnedBefore: "",
  interests: [],
  orgStatus: "",
  organization: "",
  experienceYears: "",
  skills: Object.fromEntries(SKILL_KEYS.map((k) => [k, 0])) as Record<string, number>,
  learningStyle: "",
  availability: "",
  goals: "",
};

const STORAGE_KEY = "onboardingForm.v1";

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(0);
  const [data, setData] = useState<FormData>(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultData, ...JSON.parse(raw) } : defaultData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const stepValid = useMemo(() => {
    if (step === 0) {
      const orgOk = data.orgStatus === "no" || (data.orgStatus === "yes" && data.organization.trim().length > 1);
      return data.learnedBefore.trim().length > 2 && data.interests.length >= 1 && data.orgStatus !== "" && orgOk;
    }
    if (step === 1) {
      // at least one skill > 30 and experience filled
      const someSkill = Object.values(data.skills).some((v) => v >= 30);
      return data.experienceYears.trim().length > 0 && someSkill;
    }
    if (step === 2) {
      return data.learningStyle !== "" && data.availability.trim().length > 0 && data.goals.trim().length > 4;
    }
    return false;
  }, [step, data]);

  const progress = useMemo(() => {
    const parts = [0, 1, 2].map((s) => {
    //   const prev = step;
      
      if (s < step) return 1;
      if (s === step) return stepValid ? 1 : 0.5;
      return 0;
    });
    const pct = (parts.reduce((a, b) => a + b, 0 as number) / parts.length) * 100;
    return Math.round(pct);
  }, [step, stepValid]);

  const next = () => setStep((s) => Math.min(s + 1, 2) as Step);
  const back = () => setStep((s) => Math.max(s - 1, 0) as Step);
  const finish = () => {
    // TODO: send `data` to API if needed
    localStorage.removeItem(STORAGE_KEY);
    navigate("/dashboard");
  };

  const toggleInterest = (tag: string) =>
    setData((d) => ({
      ...d,
      interests: d.interests.includes(tag)
        ? d.interests.filter((t) => t !== tag)
        : [...d.interests, tag],
    }));

  const setSkill = (k: string, v: number) =>
    setData((d) => ({ ...d, skills: { ...d.skills, [k]: v } }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header with stepper */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            {["Background", "Skills", "Preferences"].map((label, i) => {
              const active = step === i;
              const done = step > i;
              return (
                <div key={label} className="flex-1 flex items-center">
                  <div
                    className={[
                      "w-10 h-10 rounded-full flex items-center justify-center font-semibold shadow",
                      done
                        ? "bg-green-500"
                        : active
                        ? "bg-blue-500"
                        : "bg-slate-700",
                    ].join(" ")}
                  >
                    {done ? "✓" : i + 1}
                  </div>
                  {i < 2 && (
                    <div
                      className={[
                        "h-1 flex-1 mx-3 rounded",
                        step > i ? "bg-green-500" : "bg-slate-600",
                      ].join(" ")}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-4 w-full bg-slate-700 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur rounded-2xl shadow-2xl border border-white/10 p-6">
          {step === 0 && (
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Your Background</h2>
                <p className="text-slate-300 text-sm">
                  Tell us what you already know and what excites you.
                </p>
              </div>

              <label className="block">
                <span className="text-sm text-slate-200">What have you learned before joining us?</span>
                <textarea
                  className="mt-2 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
                  rows={3}
                  value={data.learnedBefore}
                  onChange={(e) => setData({ ...data, learnedBefore: e.target.value })}
                  placeholder="e.g., HTML, CSS, basic React, Python..."
                />
              </label>

              <div>
                <span className="text-sm text-slate-200">Areas of interest</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {INTERESTS.map((tag) => {
                    const active = data.interests.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleInterest(tag)}
                        className={[
                          "px-3 py-1.5 rounded-full text-sm border transition",
                          active
                            ? "bg-blue-500 border-blue-400"
                            : "bg-slate-800 border-slate-600 hover:border-slate-400",
                        ].join(" ")}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <span className="block text-sm text-slate-200 mb-2">Are you from an organization?</span>
                  <div className="flex gap-2">
                    {(["yes", "no"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setData({ ...data, orgStatus: opt })}
                        className={[
                          "flex-1 px-3 py-2 rounded-xl border text-sm transition",
                          data.orgStatus === opt
                            ? "bg-blue-500 border-blue-400"
                            : "bg-slate-800 border-slate-600 hover:border-slate-400",
                        ].join(" ")}
                      >
                        {opt.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="text-sm text-slate-200">Organization name (optional if No)</span>
                    <input
                      className="mt-2 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
                      placeholder="e.g., College/Company name"
                      value={data.organization}
                      onChange={(e) => setData({ ...data, organization: e.target.value })}
                      disabled={data.orgStatus === "no"}
                    />
                  </label>
                </div>
              </div>
            </section>
          )}

          {step === 1 && (
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Skill Snapshot</h2>
                <p className="text-slate-300 text-sm">
                  Be honest—this helps tailor your path.
                </p>
              </div>

              <label className="block">
                <span className="text-sm text-slate-200">Years of experience (total)</span>
                <input
                  className="mt-2 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="e.g., 0, 1, 2..."
                  value={data.experienceYears}
                  onChange={(e) => setData({ ...data, experienceYears: e.target.value })}
                />
              </label>

              <div className="grid sm:grid-cols-2 gap-6">
                {SKILL_KEYS.map((k) => (
                  <div key={k}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-200">{k}</span>
                      <span className="text-xs text-slate-300">{data.skills[k]}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={data.skills[k]}
                      onChange={(e) => setSkill(k, Number(e.target.value))}
                      className="w-full accent-blue-500"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>New</span>
                      <span>Pro</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Preferences</h2>
                <p className="text-slate-300 text-sm">
                  We’ll customize your roadmap & reminders.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <span className="block text-sm text-slate-200 mb-2">Preferred learning style</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { v: "video", label: "Video tutorials" },
                      { v: "reading", label: "Reading material" },
                      { v: "project", label: "Project-based" },
                      { v: "live", label: "Live/mentor" },
                    ].map((opt) => (
                      <button
                        key={opt.v}
                        type="button"
                        onClick={() => setData({ ...data, learningStyle: opt.v as FormData["learningStyle"] })}
                        className={[
                          "px-3 py-2 rounded-xl border text-left text-sm transition",
                          data.learningStyle === opt.v
                            ? "bg-blue-500 border-blue-400"
                            : "bg-slate-800 border-slate-600 hover:border-slate-400",
                        ].join(" ")}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block">
                    <span className="text-sm text-slate-200">Availability (days/time)</span>
                    <input
                      className="mt-2 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
                      placeholder="e.g., Mon–Fri, 7–9 PM"
                      value={data.availability}
                      onChange={(e) => setData({ ...data, availability: e.target.value })}
                    />
                  </label>
                </div>
              </div>

              <label className="block">
                <span className="text-sm text-slate-200">Your primary goal</span>
                <textarea
                  className="mt-2 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
                  rows={3}
                  placeholder="e.g., Become a full-stack dev in 6 months…"
                  value={data.goals}
                  onChange={(e) => setData({ ...data, goals: e.target.value })}
                />
              </label>
            </section>
          )}

          {/* Footer actions */}
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={step === 0 ? () => navigate("/dashboard") : back}
              className="px-4 py-2 rounded-xl border border-slate-600 bg-slate-800 hover:bg-slate-700"
            >
              {step === 0 ? "Skip for now" : "Back"}
            </button>

            <div className="flex items-center gap-3">
              {step < 2 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!stepValid}
                  className={[
                    "px-5 py-2 rounded-xl font-semibold transition",
                    stepValid
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-slate-700 cursor-not-allowed opacity-60",
                  ].join(" ")}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={finish}
                  disabled={!stepValid}
                  className={[
                    "px-5 py-2 rounded-xl font-semibold transition",
                    stepValid
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-slate-700 cursor-not-allowed opacity-60",
                  ].join(" ")}
                >
                  Finish & Go to Dashboard
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tiny helper summary */}
        <div className="mt-4 text-xs text-slate-300">
          <span className="opacity-70">Tip:</span> Your progress is saved locally. You can resume later.
        </div>
      </div>
    </div>
  );
}
