import React from 'react';

export default function PrintingServices() {
  return (
    <section id="printing" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">
        {/* Image side */}
        <div className="w-full lg:w-1/2">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Máy in phẳng chuyên nghiệp khổ lớn in đồ họa độ phân giải cao trên tấm cứng"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeYTzRAdnaGK25_v5HA7cxgEfMxeenYcQUcFsH9_za11JUQWI6ldjjeX0nbwRzvRR2u-9W1IkSbZCDSdcJZiv8isx1b7UJxRN50JoaFB8Mpjg3mdzDMQ8DiCK02c-hcKbCRne3grW50W3N-zXyVUXjIhebZYOVAyr9JFN5guMDTfeHZkGZl_xfani0kfZkpXCwgST_SJnVQmsuWmVhOtGFNJEtTMaWLKj-yKWflWHT0_K5cEIzz2whWKCT7Ecf8x2FCqB287GC5KZI"
            />
          </div>
        </div>

        {/* Content side */}
        <div className="w-full lg:w-1/2">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Đầu Tư Công Nghệ</span>
          <h2 className="font-h2 text-primary mb-6 text-3xl md:text-4xl leading-tight">
            Giải Pháp In Ấn Công Nghiệp
          </h2>
          <p className="font-body-lg text-slate-700 mb-8 leading-relaxed">
            Cơ sở in ấn của Bảo Nam sử dụng hệ thống máy in UV cuộn, in UV phẳng và máy in dung môi hiện đại bậc nhất. Chúng tôi cam kết tạo ra các bản in sắc nét, trung thực về màu sắc và có độ bền ngoài trời tối đa trước nắng mưa khắc nghiệt.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-lg hover:border-primary/20 transition-all">
              <span className="font-bold text-primary block mb-2 text-sm md:text-base">Canvas & Decal Bền Bỉ</span>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Giải pháp in decal sữa, decal trong, decal lưới dán phương tiện giao thông và vách kính văn phòng chất lượng cao.
              </p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-lg hover:border-primary/20 transition-all">
              <span className="font-bold text-primary block mb-2 text-sm md:text-base">In Trên Vật Liệu Cứng</span>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                In phẳng UV trực tiếp trên Alu, Foam, PVC, Acrylic (Mica), Gỗ, Kính và Kim loại với độ bám dính mực tuyệt đối.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
