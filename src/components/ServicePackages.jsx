import React from 'react';

import Panner1 from '../assets/Khac/Panner1.jpg';
import Panner2 from '../assets/Khac/Panner2.jpg';


export default function ServicePackages() {
  const packageFeatures = [
    'Khảo Sát Hiện Trạng & Xin Phép Xây Dựng',
    'Tính Toán Kết Cấu & Tải Trọng Gió',
    'Vật Liệu Cao Cấp (Mica, Alu, LED)',
    'Thi Công Hoàn Thiện & Bảo Hành Lâu Dài',
  ];

  return (
    <section className="relative py-20 bg-slate-100 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          className="w-full h-full object-cover opacity-10"
          alt="Xưởng công nghiệp với máy cắt chính xác"
          src=""
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Package Description */}
        <div>
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Dịch Vụ Toàn Diện</span>
          <h2 className="font-h1 text-primary mb-6 text-3xl md:text-4xl leading-tight">
            Giải Pháp Biển Hiệu Trọn Gói
          </h2>
          <p className="font-body-lg text-slate-700 mb-8 leading-relaxed">
            Chúng tôi đồng hành cùng khách hàng từ khâu lên ý tưởng thiết kế, hoàn thiện thủ tục pháp lý, tính toán tải trọng kỹ thuật cho đến sản xuất và lắp đặt tại hiện trường. Đảm bảo tính an toàn cao nhất và tiến độ thi công chính xác.
          </p>

          <ul className="space-y-4 mb-10">
            {packageFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-primary font-bold">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <span className="text-slate-800 font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block bg-[#FFC20F] text-[#0B264B] px-10 py-5 font-button text-base rounded-lg uppercase font-bold shadow-xl hover:bg-[#eab10d] hover:translate-y-[-2px] active:translate-y-0 active:scale-95 transition-all text-center"
          >
            Yêu Cầu Báo Giá Trọn Gói
          </a>
        </div>

        {/* Staggered Images */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-48 md:h-64 object-cover rounded"
              alt="Cận cảnh biển hiệu văn phòng chất lượng cao với cắt laser chính xác"
              src={Panner1}
            />
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md translate-y-12 hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-48 md:h-64 object-cover rounded"
              alt="Ngoại thất tòa nhà doanh nghiệp hiện đại với chữ kiến trúc chiếu sáng"
              src={Panner2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
