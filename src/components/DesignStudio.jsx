import React from 'react';

export default function DesignStudio() {
  const designServices = [
    {
      title: 'Logo & Nhận Diện',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO_aZ2rCc_cI_qRMFvq8Fs-x8yrkc7vebAaSCaSLfAzyBrFFAM1Nths9c58a5UNOle9vYDqXBtKEEH60iSZJdixlcf6j3iKQ1ycLHfEHgaS3U5fJc_ldfPjGY4IHZvVNQUSyV1sF7xkeTBprrLRSM3tl72t1JE-_k7PnuYmxrphuZIY3iVAcbgS9wb1nARABNFuNLBjzSQMsOELMSYcKPp4F4vkAeeeHPk8llI11UBUiAH64pTE2HErqJIRLH2-sM9KlVEduOXnz5l',
    },
    {
      title: 'Standee & Băng Rôn',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt-6xkvAweCoq7LmIkTq5MeT-gj7Yy-kpahEkwMcYS1TLooc4vX5R8rgB8fzjHEavIyJU_UkzX7ZebkPytdmGlLwghqiY4RJmwys4JJOZd7za03UEVGzYKUXHjI39dB07ZYTrhJeBHwyw8Gfk5lJMMu1k_RjrFV22FgNUBhNTJtI4Y8Y45Emj3edsiT3bGkeMHoPwig5atnq_SvF515m8LI5zsode2I1in9lGXhn6UD43CSbTSpq1IbFn-gqmf3fe9gxBPu3PfaFFh',
    },
    {
      title: 'Catalogue & Brochure',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMZJJ0JPahsWwDdQ7jXEY1xLVWqg_paXma0OVTKI4tNqpFmAfowP-CP455PGh5lZ5m75ZwEi6kJytiM30_BQ5gxYk0z2ZtV76CbzwL1W0pK1qzB6GKT0WhF_vF9gy2UjjKFxdpobWEx44qEEoLEX2jgCNjCqgSOun-wb6sPdsGEAr8R4jdaOorh3yCsVy5xLhEMvgHlVc3HoKPZCuXfvNbXi5t4mvRnMqcC0JuGXQFAF0uY1ldLpwqpXfYM5bgXAKSoJALUbUxEm0-',
    },
    {
      title: 'UX Biển Hiệu Số',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfGZJbAOxo_XqSY8KG1hDDbdLNA_eEsggr2qAJD25AYvaympZtDBOr5XMm0qwRHmDWsa6oTE4YZK3h09t2QXbDVJRj2lOfo7Jr6mlfYYUPHp7gjuBDE7CIDJ2-vYAjPZH2G08JxaUKx6XzJklBUvL-EDZbVpHSVoXg77MxYYpFwGz7xelAP0txfq-vMFOQb0Iy5XRcGG5cQ-Lw2vwhHPnbeoLYXaf_pN-Pk_LHzKHYSSX8Tfd7Pw2gaz5A7tsAe1G_xeB4pJrTibMX',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0B264B] text-white">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#FFC20F] font-bold text-xs uppercase tracking-widest block mb-2">Tư Duy Sáng Tạo</span>
          <h2 className="font-h2 text-white">Studio Thiết Kế Toàn Diện</h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Từ bộ nhận diện thương hiệu ngoài trời đến các bản vẽ kỹ thuật CAD/3D chi tiết bóc tách kết cấu, đội ngũ thiết kế của chúng tôi kết nối trơn tru tầm nhìn sáng tạo với khả năng sản xuất công nghiệp thực tế.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {designServices.map((service, index) => (
            <div key={index} className="space-y-4 group">
              <div className="aspect-square bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shadow-lg relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={service.title}
                  src={service.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-white/90">Xem chi tiết thiết kế</span>
                </div>
              </div>
              <p className="font-h3 text-sm text-center font-bold tracking-wide uppercase text-slate-200 group-hover:text-[#FFC20F] transition-colors duration-200">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
