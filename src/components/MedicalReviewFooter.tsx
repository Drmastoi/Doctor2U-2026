import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function MedicalReviewFooter() {
  return (
    <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
      <div className="flex items-center gap-2">
        <ShieldCheck size={16} className="text-teal-600" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          Last reviewed by Dr Ahmed Iqbal, GMC 7041470 — May 2026
        </span>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[0.2em]">
        Verified Clinical Standards
      </div>
    </div>
  );
}
