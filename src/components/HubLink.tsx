import React from 'react';
import { Link } from 'react-router-dom';

const ANCHORS = [
  "home visit GP Manchester",
  "GP home visit Manchester",
  "doctor at home Manchester",
  "private GP home visit Manchester",
  "home doctor Manchester"
];

interface HubLinkProps {
  index?: number;
}

export default function HubLink({ index = 0 }: HubLinkProps) {
  const anchor = ANCHORS[index % ANCHORS.length];
  
  return (
    <div className="py-6 border-t border-slate-100 mt-12">
      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-2 px-1">Authority Link</p>
      <Link 
        to="/services/home-visit"
        className="text-teal-700 font-bold hover:underline px-1 text-sm text-left block"
      >
        {anchor}
      </Link>
    </div>
  );
}
