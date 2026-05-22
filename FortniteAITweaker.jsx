import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Gauge, Monitor, Zap } from 'lucide-react';

export default function FortniteAITweaker() {
  const profiles = {
    Competitive: {
      fps: 'Max FPS',
      shadows: 'Off',
      textures: 'Low',
      rendering: 'Performance Mode',
      aiTip: 'Prioritize stable frame pacing and low input delay.'
    },
    Balanced: {
      fps: '120 FPS Cap',
      shadows: 'Medium',
      textures: 'Medium',
      rendering: 'DirectX 12',
      aiTip: 'Good visuals with responsive gameplay.'
    },
    Visual: {
      fps: 'Unlimited',
      shadows: 'High',
      textures: 'Epic',
      rendering: 'DirectX 12 + Nanite',
      aiTip: 'Best graphics for high-end systems.'
    }
  };

  const [systemRam, setSystemRam] = React.useState(16);
  const [gpuTier, setGpuTier] = React.useState('Mid Range');
  const [profile, setProfile] = React.useState('Competitive');

  const current = profiles[profile];

  const aiRecommendation = () => {
    if (gpuTier === 'Low End') {
      return 'AI Recommendation: Enable Performance Mode, disable background apps, and reduce view distance.';
    }

    if (gpuTier === 'High End' && systemRam >= 32) {
      return 'AI Recommendation: Use DirectX 12, high textures, and high render distance for smoother visuals.';
    }

    return 'AI Recommendation: Keep textures medium and cap FPS slightly below monitor refresh rate for stability.';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
          <h1 className="text-4xl font-bold mb-2">Fortnite AI Tweaking Utility</h1>
          <p className="text-zinc-400">
            A safe optimization dashboard for improving Fortnite performance and graphics settings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-zinc-900 rounded-3xl p-4 border border-zinc-800">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="w-5 h-5" />
              <p className="text-zinc-400 text-sm">CPU Status</p>
            </div>
            <p className="text-2xl font-bold">Optimized</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-4 border border-zinc-800">
            <div className="flex items-center gap-3 mb-2">
              <Gauge className="w-5 h-5" />
              <p className="text-zinc-400 text-sm">Estimated FPS</p>
            </div>
            <p className="text-2xl font-bold">
              {gpuTier === 'Low End' ? '90+' : gpuTier === 'Mid Range' ? '160+' : '240+'}
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-4 border border-zinc-800">
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="w-5 h-5" />
              <p className="text-zinc-400 text-sm">Render API</p>
            </div>
            <p className="text-2xl font-bold">{current.rendering}</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-4 border border-zinc-800">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5" />
              <p className="text-zinc-400 text-sm">Latency Mode</p>
            </div>
            <p className="text-2xl font-bold">Boosted</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">System Analyzer</h2>

            <div className="mb-4">
              <label className="block mb-2 text-sm text-zinc-400">System RAM</label>
              <input
                type="range"
                min="8"
                max="64"
                step="8"
                value={systemRam}
                onChange={(e) => setSystemRam(Number(e.target.value))}
                className="w-full"
              />
              <p className="mt-1">{systemRam} GB</p>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm text-zinc-400">GPU Tier</label>
              <select
                value={gpuTier}
                onChange={(e) => setGpuTier(e.target.value)}
                className="w-full bg-zinc-800 rounded-xl p-3"
              >
                <option>Low End</option>
                <option>Mid Range</option>
                <option>High End</option>
              </select>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-4 text-sm text-zinc-200">
              {aiRecommendation()}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Optimization Profiles</h2>

            <div className="flex gap-2 mb-6 flex-wrap">
              {Object.keys(profiles).map((p) => (
                <button
                  key={p}
                  onClick={() => setProfile(p)}
                  className={`px-4 py-2 rounded-2xl transition ${
                    profile === p
                      ? 'bg-blue-500 text-white'
                      : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-400 text-sm">FPS Setting</p>
                <p className="text-lg font-medium">{current.fps}</p>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-400 text-sm">Shadows</p>
                <p className="text-lg font-medium">{current.shadows}</p>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-400 text-sm">Textures</p>
                <p className="text-lg font-medium">{current.textures}</p>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-400 text-sm">Rendering API</p>
                <p className="text-lg font-medium">{current.rendering}</p>
              </div>
            </div>

            <div className="mt-6 bg-blue-500/20 border border-blue-500 rounded-2xl p-4">
              <p className="text-sm text-blue-100">{current.aiTip}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">One-Click Actions</h2>

            <div className="grid gap-3">
              <button className="bg-blue-600 hover:bg-blue-500 transition rounded-2xl p-4 text-left">
                Apply Competitive Tweaks
              </button>

              <button className="bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl p-4 text-left">
                Clear Shader Cache
              </button>

              <button className="bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl p-4 text-left">
                Optimize Background Apps
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Live AI Assistant</h2>

            <div className="bg-zinc-800 rounded-2xl p-4 min-h-[180px] flex flex-col justify-between">
              <div>
                <p className="text-zinc-300 mb-3">
                  Your system is currently tuned for {profile.toLowerCase()} gameplay.
                </p>

                <p className="text-sm text-zinc-400">
                  AI suggests keeping GPU drivers updated and using fullscreen mode for lower latency.
                </p>
              </div>

              <button className="mt-4 bg-blue-600 hover:bg-blue-500 transition rounded-2xl py-3">
                Run Smart Scan
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-zinc-900 rounded-3xl p-6 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-4">AI Auto-Tweak Suggestions</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-zinc-800 rounded-2xl p-4">
              <h3 className="font-semibold mb-2">Startup Optimization</h3>
              <p className="text-sm text-zinc-400">
                Disable unnecessary startup applications before launching Fortnite.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-4">
              <h3 className="font-semibold mb-2">Latency Tuning</h3>
              <p className="text-sm text-zinc-400">
                Enable low latency mode in GPU control panel for faster response times.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-4">
              <h3 className="font-semibold mb-2">Thermal Monitoring</h3>
              <p className="text-sm text-zinc-400">
                Monitor CPU and GPU temperatures to prevent FPS drops caused by throttling.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
