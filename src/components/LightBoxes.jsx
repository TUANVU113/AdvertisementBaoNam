import React, { useState } from 'react';

export default function LightBoxes() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Hộp Đèn Siêu Mỏng',
      description: 'Tiết kiệm điện, độ sáng cao, thiết kế siêu mỏng tinh tế phù hợp cho showroom cao cấp, rạp phim.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATjYpjdWiWWdF6s7vKgLPxLD4SSPe9t4HFkQWIjs3RhR4DE8Q5piHdno_lXjw4GmdO-LeYVX1W0HdeghtzBHg5Scy4wttL-SJmOhoPM0-G1RylhoRMXmDI_ZTKjxHbvfFkl_o7lluG0lloI7pzcaHObhxj59JNrhwQ7WwGf4JncJxUcyveOCyVomjsufahnWnYe0Py93hWnPJE7vBHcNkgODF0eEvVXSXRZAx-XOb7stYU4zz-wFnL-uPARvZlIy3Y7tT9vx1Izodq',
      specs: [
        { label: 'Khung viền', value: 'Hợp kim nhôm định hình cao cấp 20mm' },
        { label: 'Nguồn sáng', value: 'LED thanh siêu sáng SMD 2835 tản nhiệt tốt' },
        { label: 'Mặt biển', value: 'Mica Đài Loan trong suốt dày 3mm' },
        { label: 'Độ dày hộp', value: 'Cực mỏng từ 15mm đến 25mm' },
        { label: 'Điện áp', value: '12V DC an toàn và tiết kiệm điện' },
      ],
    },
    {
      id: 2,
      name: 'Hộp Đèn Bạt Hiflex',
      description: 'Giải pháp tối ưu chi phí cho biển hiệu quảng cáo ngoài trời quy mô lớn, cửa hàng bán lẻ.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxlWtN8J10nouXntEcMXKaG7_JzwJvBItlL5c425ioE-bJf3f56VY0nt-pKw7Kd-dE7Own6NiQo5XKVXBbjXfY8pzWEgitu7fpDx8NnG3E6PjFDinAMWhLnmfROhQ4diOV29NlxoT7R-sJLS5ZnIa8ApIr8UyLL0ai5LKnJcsTrYTC0Q5hvWi79tdMQRgiF8yKGvrWnizsQbPNsrHY59m1sQcMYQ5SwB7xpr24JwDKc-tmHT4KOIKQUnCuz_UBujli-nMEoEqQfdtB',
      specs: [
        { label: 'Khung xương', value: 'Sắt hộp mạ kẽm chống rỉ sét 20x20mm' },
        { label: 'Bề mặt bạt', value: 'Bạt Hiflex xuyên sáng in kỹ thuật số sắc nét' },
        { label: 'Chiếu sáng', value: 'Hệ thống LED tuýp siêu tiết kiệm điện năng' },
        { label: 'Nẹp viền', value: 'Nhôm V định hình bo góc bảo vệ kết cấu' },
        { label: 'Độ bền ngoài trời', value: 'Từ 2 đến 3 năm trong mọi thời tiết' },
      ],
    },
    {
      id: 3,
      name: 'Biển Hộp Đèn Xoay',
      description: 'Tầm nhìn hai chiều cho các vị trí vỉa hè, mặt phố đông đúc, kích thích chú ý từ xa.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQuI26YM9uXZBSlvVG0RBaxCyiQSjkNLEH4XvEOMEuUelGIqGZKSVk4VG4p0Z8SwT0FUg_Etjx38WbknJ0l2VWsMyvrPULdFBJr-cItzzdiq9hrwcIzrHcPr29tBbCy0xjPQbwrXO9NuN7NfB-Yy_GDpogjyXYKCjLmFRAwutyETvyzdjRhfAscpm5XcOwE2Hm354qRKxuwkAKNieDpovOhjQ665P0QxJMqwdswATYdhHI-3cHias_z-ohQvCMrK_q-MBjW9IfXEP_',
      specs: [
        { label: 'Hình dạng', value: 'Tròn, Hộp vuông hoặc Chữ nhật hút nổi' },
        { label: 'Mặt biển', value: 'Mica ép nổi 3D bóng lồi sang trọng' },
        { label: 'Hệ motor', value: 'Động cơ xoay khép kín chống ẩm nước' },
        { label: 'Chân đế', value: 'Trụ sắt đặc sơn tĩnh điện kiên cố' },
        { label: 'Đèn chiếu', value: 'LED module mắt trâu độ bền cao' },
      ],
    },
    {
      id: 4,
      name: 'Hộp Đèn 3M / Vải UV',
      description: 'Ánh sáng mịn, không đổ bóng, sang trọng bậc nhất, chuẩn mực cho showroom xa xỉ, ngân hàng.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz0hTwznFASuZ8zy_HudyokEEZNLbM3N4WECcJvtGCeSBjvWP8CSEB8vmxHHuvtL7Ii2NpP7VUSDlgOIYO57vSrTdaRrMjex0jM0cvWPj9qPx0-bQNwFJcdrKPCgYuo-E72ex4rUxo04-LQrEfxl6VAwONfGhclQi2t0R60TH2gMvRux3gCSt9ZmbBojK1Xl0wlyzFbPKKz6ATEgDt30_bYotTeJk5vdwGcnhYt7IMcD5s6CwLTY1M-kmaCCFr9W8oaI0eUpVVO1yx',
      specs: [
        { label: 'Chất liệu bạt', value: 'Bạt 3M USA / Vải xuyên sáng in UV sắc nét' },
        { label: 'Khung viền', value: 'Nhôm nhét cạnh không viền thời thượng' },
        { label: 'Mạch LED', value: 'LED module mắt trâu Hàn Quốc/Đài Loan' },
        { label: 'Độ sáng', value: 'Đều màu tuyệt đối, không lộ bóng LED' },
        { label: 'Tuổi thọ LED', value: 'Trên 50.000 giờ thắp sáng liên tục' },
      ],
    },
  ];

  return (
    <section id="lightboxes" className="py-20 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Sản Phẩm Trọng Tâm</span>
          <h2 className="font-h2 text-slate-900 mb-4">Hộp Đèn Quảng Cáo Cao Cấp</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex flex-col group">
              {/* Image */}
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={product.name}
                  src={product.image}
                />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-h3 text-base font-bold text-slate-900 mb-2">
                  {product.name}
                </h4>
                <p className="text-slate-600 text-xs md:text-sm mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="text-primary font-bold text-xs flex items-center gap-1 hover:text-[#FFC20F] transition-colors self-start cursor-pointer"
                >
                  Thông Số Kỹ Thuật
                  <span className="material-symbols-outlined !text-sm align-middle">download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-md w-full shadow-2xl overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="bg-[#0B264B] text-white px-6 py-4 flex justify-between items-center">
              <h3 className="font-h3 text-base md:text-lg font-bold uppercase tracking-wider">
                Thông số: {selectedProduct.name}
              </h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-slate-600 text-xs md:text-sm mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Spec Sheet List */}
              <div className="space-y-4">
                <h5 className="font-label-caps text-xs text-slate-500 tracking-wider uppercase border-b border-slate-100 pb-2">
                  Bảng chi tiết kỹ thuật
                </h5>
                <ul className="space-y-3">
                  {selectedProduct.specs.map((spec, idx) => (
                    <li key={idx} className="flex justify-between items-start gap-4 text-xs md:text-sm border-b border-slate-50 pb-2">
                      <span className="font-bold text-[#0B264B] whitespace-nowrap">{spec.label}:</span>
                      <span className="text-slate-700 text-right">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded transition-colors uppercase tracking-wider"
              >
                Đóng
              </button>
              <a
                href="https://zalo.me/0976970515"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFC20F] text-[#0B264B] px-4 py-2 text-xs font-bold rounded hover:bg-[#eab10d] transition-colors uppercase tracking-wider flex items-center gap-1"
              >
                Yêu cầu báo giá
                <span className="material-symbols-outlined !text-sm">mail</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
