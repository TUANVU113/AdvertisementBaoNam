import React from 'react';

export default function QuickActions() {
  return (
    <div className="hidden md:flex fixed right-6 bottom-8 z-40 flex-col gap-4">
      {/* Zalo Floating Button */}
      <a
        href="https://zalo.me/0976970515"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Liên hệ qua Zalo"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping -z-10"></span>
        <span className="material-symbols-outlined text-2xl">chat</span>
        
        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0B264B] text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Nhắn Zalo Tư Vấn
        </span>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href="tel:0917644536"
        className="w-14 h-14 bg-[#FFC20F] text-[#0B264B] rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Gọi điện trực tiếp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#FFC20F]/45 animate-ping -z-10"></span>
        <span className="material-symbols-outlined text-2xl">call</span>
        
        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0B264B] text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Gọi Điện Ngay
        </span>
      </a>
    </div>
  );
}
