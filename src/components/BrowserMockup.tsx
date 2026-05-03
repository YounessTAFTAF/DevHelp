import { motion } from "framer-motion";

export const BrowserMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 20 }}
      className="relative w-full max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0c]/80 backdrop-blur-xl group"
    >
      {/* Browser Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white/5 rounded-md px-4 py-1 text-xs text-white/40 text-center truncate">
            antigravity.devhelp.ai — Advanced Agentic Coding
          </div>
        </div>
        <div className="flex space-x-1 opacity-40">
          <div className="w-4 h-0.5 bg-white rounded-full" />
          <div className="w-4 h-0.5 bg-white rounded-full" />
        </div>
      </div>

      {/* Browser Body */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center border border-brand-blue/30 group-hover:bg-brand-blue/30 smooth-transition">
            <div className="w-6 h-6 rounded-sm border-2 border-brand-blue animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-48 bg-white/10 rounded-full animate-pulse" />
            <div className="h-3 w-32 bg-white/5 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-16 bg-brand-orange/40 rounded-full" />
              <div className="h-4 w-4 rounded-full bg-brand-orange/20 animate-ping" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-white/5 rounded-full" />
              <div className="h-2 w-[90%] bg-white/5 rounded-full" />
              <div className="h-2 w-[70%] bg-white/5 rounded-full" />
            </div>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-16 bg-brand-blue/40 rounded-full" />
              <div className="h-4 w-4 rounded-full bg-brand-blue/20 animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-white/5 rounded-full" />
              <div className="h-2 w-[85%] bg-white/5 rounded-full" />
              <div className="h-2 w-[60%] bg-white/5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Code Snippet / Terminal Mockup */}
        <div className="mt-4 p-4 rounded-lg bg-black/40 font-mono text-sm border border-brand-blue/20 overflow-hidden">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-400">➜</span>
            <span className="text-brand-blue">antigravity</span>
            <span className="text-white/60">optimize-growth --target="all"</span>
          </div>
          <div className="space-y-1">
            <p className="text-white/40 animate-pulse">Analyzing codebase...</p>
            <p className="text-brand-orange/80">✔ Applying high-conversion patterns</p>
            <p className="text-brand-blue/80">✔ Integrating AI-driven analytics</p>
            <div className="flex items-center space-x-2">
              <p className="text-white/80">Finalizing deployment</p>
              <span className="inline-block w-2 h-4 bg-brand-blue animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-orange/20 rounded-full blur-[80px]" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-blue/20 rounded-full blur-[80px]" />
    </motion.div>
  );
};
