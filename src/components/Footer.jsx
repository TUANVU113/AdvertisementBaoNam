import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <footer id="contact" className="bg-[#0B264B] text-white border-t border-slate-700">
      <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1: About */}
        <div className="space-y-6">
          <div className="text-xl font-bold tracking-tight text-white uppercase">Bảo Nam</div>
          <p className="text-sm leading-relaxed text-slate-300">
            Đơn vị hàng đầu về biển hiệu kết cấu, gia công hộp đèn cao cấp và các giải pháp truyền thông công nghiệp. Đảm bảo sự chính xác, an toàn và xuất sắc trong mọi công trình.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#FFC20F] hover:text-[#0B264B] hover:border-[#FFC20F] transition-colors duration-200"
              aria-label="Share"
            >
              <span className="material-symbols-outlined !text-sm">share</span>
            </a>
            <a
              href="mailto:contact@baonam.vn"
              className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#FFC20F] hover:text-[#0B264B] hover:border-[#FFC20F] transition-colors duration-200"
              aria-label="Mail"
            >
              <span className="material-symbols-outlined !text-sm">mail</span>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#FFC20F] hover:text-[#0B264B] hover:border-[#FFC20F] transition-colors duration-200"
              aria-label="Location"
            >
              <span className="material-symbols-outlined !text-sm">location_on</span>
            </a>
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#FFC20F] uppercase tracking-wider text-sm">Dịch Vụ</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#bang-hieu">
              Dịch Vụ Bảng Hiệu
            </a>
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#in-an">
              Dịch Vụ In Ấn
            </a>
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#hop-den">
              Dịch Vụ Hộp Đèn
            </a>
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#bang-bien">
              Dịch Vụ Bảng Biển
            </a>
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#thi-cong">
              Dịch Vụ Thi Công
            </a>
          </nav>
        </div>

        {/* Col 3: Company */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#FFC20F] uppercase tracking-wider text-sm">Doanh Nghiệp</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#">
              Chính Sách Bảo Mật
            </a>
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#">
              Điều Khoản Dịch Vụ
            </a>
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#">
              Tiêu Chuẩn An Toàn
            </a>
            <a className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm" href="#">
              Tuyển Dụng
            </a>
          </nav>
        </div>

        {/* Col 4: Contact & Newsletter */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#FFC20F] uppercase tracking-wider text-sm">Liên Hệ</h4>
          <div className="text-slate-300 text-sm leading-relaxed space-y-1">
            <p>Trụ sở: 60/17/63/16 Lô ô, Khu Phố Nội Hóa 1, Phường Đông Hòa, TP. HCM</p>
            <p>Hotline: 0976970515</p>
            <p>Email: tuquangcao2015@gmail.com</p>
            <p>MST: 3703357249</p>
          </div>

          <div className="mt-4 p-4 border border-slate-700 bg-slate-900/50 rounded">
            <p className="text-xs text-[#FFC20F] font-bold uppercase mb-2">Đăng ký nhận báo giá mới nhất</p>
            {isSubmitted ? (
              <p className="text-xs text-green-400 font-bold animate-pulse">✓ Đăng ký thành công! Cảm ơn bạn.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  className="bg-transparent border border-slate-600 text-xs w-full px-3 py-2 text-white focus:outline-none focus:border-[#FFC20F] focus:ring-1 focus:ring-[#FFC20F] rounded-l"
                  placeholder="Nhập Email của bạn"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#FFC20F] text-[#0B264B] px-4 rounded-r hover:bg-[#eab10d] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined !text-sm">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1280px] mx-auto px-8 py-8 border-t border-slate-700 text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Quảng Cáo Bảo Nam. Sự Chính Xác Trong Từng Biển Hiệu.
        </p>
      </div>
    </footer>
  );
}
