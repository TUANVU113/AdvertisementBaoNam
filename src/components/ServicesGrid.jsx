import React from 'react';

export default function ServicesGrid() {
  const services = [
    { name: 'Bảng hiệu', icon: 'branding_watermark', href: '#bang-hieu' },
    { name: 'Hộp đèn', icon: 'light_mode', href: '#hop-den' },
    { name: 'Quảng cáo', icon: 'ads_click', href: '#contact' },
    { name: 'Chữ nổi', icon: 'title', href: '#bang-hieu' },
    { name: 'In Ấn', icon: 'print', href: '#in-an' },
    { name: 'Thi Công', icon: 'construction', href: '#thi-cong' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-h2 text-slate-900 mb-4">Lĩnh Vực Chuyên Môn</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="flex flex-col items-center text-center p-6 border border-slate-100 rounded-lg hover:border-primary/20 hover:bg-slate-50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined !text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-h3 text-sm font-semibold uppercase tracking-wider text-slate-800 group-hover:text-primary transition-colors duration-200">
                {service.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
