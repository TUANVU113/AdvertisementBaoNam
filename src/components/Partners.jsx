import React from 'react';

export default function Partners() {
  const partners = ['PHUCLONG', 'STARBUCKS', 'NAGARI', 'CHEESE', 'CHANGGE'];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1280px] mx-auto px-8">
        <p className="text-center font-label-caps text-[10px] md:text-xs text-slate-500 mb-8 uppercase tracking-widest font-extrabold">
          Dự Án Được Tin Tưởng Bởi Các Đối Tác
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-500">
          {partners.map((partner, index) => (
            <span
              key={index}
              className="text-xl md:text-3xl font-black tracking-widest text-[#0B264B] font-h1 select-none hover:text-primary transition-colors duration-200"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
