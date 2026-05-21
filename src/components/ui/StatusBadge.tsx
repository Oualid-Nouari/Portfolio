"use client";

export default function StatusBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#017E84] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#017E84]"></span>
      </span>
      <span className="text-foreground/70 uppercase tracking-wider text-xs">
        Tétouan, Maroc
      </span>
    </div>
  );
}
