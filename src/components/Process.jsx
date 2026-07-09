import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Khảo Sát',
      desc: 'Thực hiện đo đạc thực tế, phân tích nền móng và khảo sát tải trọng kỹ thuật tại công trình.',
    },
    {
      num: '02',
      title: 'Thiết Kế',
      desc: 'Lên phối cảnh 3D và bóc tách các bản vẽ kỹ thuật lắp ráp cơ khí phục vụ gia công xưởng.',
    },
    {
      num: '03',
      title: 'Sản Xuất',
      desc: 'Gia công chính xác biên dạng bằng CNC, laser trên kim loại tại xưởng máy móc hiện đại.',
    },
    {
      num: '04',
      title: 'Lắp Đặt',
      desc: 'Thi công lắp đặt an toàn trên cao, nghiệm thu đảm bảo tiêu chuẩn chống gió bão và thẩm mỹ.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Quy Chuẩn Chuyên Nghiệp</span>
          <h2 className="font-h2 text-slate-900 mb-4">Quy Trình Làm Việc Tiêu Chuẩn</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Horizontal line connector for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-100 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-slate-100 rounded-lg text-center flex flex-col items-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6 ring-8 ring-slate-50 group-hover:bg-[#FFC20F] group-hover:text-[#0B264B] transition-all duration-300">
                  {step.num}
                </div>
                
                <h4 className="font-h3 text-lg font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
