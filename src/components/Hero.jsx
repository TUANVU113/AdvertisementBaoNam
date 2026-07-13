import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-[550px] overflow-hidden bg-gradient-to-r from-[#0B264B] via-[#0B264B]/95 to-[#1c3f6e] flex items-center">
      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full text-white">
        <span className="text-[#FFC20F] font-bold text-sm md:text-base uppercase tracking-widest block mb-4">
          QUẢNG CÁO - THIẾT KẾ - IN ẤN
        </span>

        <h1 className="font-h1 text-white max-w-3xl mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight">
          Kỹ Thuật Chính Xác Cho Biển Hiệu Công Nghiệp
        </h1>

        <p className="font-body-lg text-slate-200 max-w-2xl mb-8 leading-relaxed text-sm md:text-base">
          Từ những bộ chữ khổng lồ trên tòa chọc trời đến hệ thống biển chỉ dẫn an toàn trên đường phố, BAO NAM mang đến sự bền vững về cấu trúc và sự rõ nét cho thương hiệu trên toàn quốc.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:0976970515"
            className="bg-[#FFC20F] text-[#0B264B] px-8 py-4 font-button uppercase rounded font-extrabold hover:bg-[#eab10d] active:scale-95 transition-all text-center"
          >
            Gọi: 0976970515
          </a>
          <a
            href="https://zalo.me/0976970515"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#FFC20F] text-[#FFC20F] hover:bg-[#FFC20F] hover:text-[#0B264B] px-8 py-4 font-button uppercase rounded font-extrabold active:scale-95 transition-all text-center"
          >
            Liên Hệ Zalo
          </a>
        </div>
      </div>
    </section>
  );
}
