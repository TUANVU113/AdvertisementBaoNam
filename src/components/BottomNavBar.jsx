import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNavBar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownItems = [
    { name: 'Bảng hiệu', icon: 'branding_watermark', to: '/bang-hieu' },
    { name: 'Hộp đèn', icon: 'light_mode', to: '/hop-den' },
    { name: 'Bảng biển', icon: 'storefront', to: '/bang-bien' },
    { name: 'In ấn', icon: 'print', to: '/in-an' },
    { name: 'Thi công', icon: 'build', to: '/thi-cong' },
  ];

  return (
    <>
      {/* Overlay when menu is open */}
      {isCategoryOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 z-[90]" onClick={() => setIsCategoryOpen(false)} />
      )}
      
      {/* Category Menu popup */}
      <div 
        ref={menuRef}
        className={`md:hidden fixed bottom-16 left-0 right-0 bg-white rounded-t-2xl shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-[95] transition-transform duration-300 transform ${isCategoryOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-h3 text-sm font-bold uppercase tracking-wider text-slate-800">Lĩnh vực hoạt động</h3>
            <button onClick={() => setIsCategoryOpen(false)} className="text-slate-500 hover:text-primary">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex flex-col">
            {dropdownItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsCategoryOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors ${location.pathname === item.to ? 'bg-primary/10 text-primary' : 'text-slate-600'}`}
              >
                <span className={`material-symbols-outlined !text-xl ${location.pathname === item.to ? 'text-primary' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
                <span className="font-h3 font-semibold text-sm uppercase tracking-wider">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full z-[100] shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-slate-200 bg-white h-16 flex justify-around items-end pb-2 pt-1">
        <Link className="flex flex-col items-center justify-center text-slate-500 hover:text-primary" to="/">
          <span className="material-symbols-outlined text-[24px]">home</span>
          <span className="text-[10px] font-medium mt-0.5">Trang chủ</span>
        </Link>
        <a className="flex flex-col items-center justify-center text-slate-500 hover:text-primary" href="https://zalo.me/0976970515" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined text-[24px]">chat</span>
          <span className="text-[10px] font-medium mt-0.5">Zalo</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#0B264B] font-bold bg-[#FFC20F] rounded-full w-14 h-14 shadow-lg -translate-y-3 hover:-translate-y-4 hover:shadow-xl transition-all active:scale-95" href="https://zalo.me/0976970515" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>request_quote</span>
          <span className="text-[9px] uppercase tracking-tighter mt-0.5">Báo giá</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-500 hover:text-primary" href="tel:0976970515">
          <span className="material-symbols-outlined text-[24px]">call</span>
          <span className="text-[10px] font-medium mt-0.5">Gọi ngay</span>
        </a>
        <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className={`flex flex-col items-center justify-center hover:text-primary ${isCategoryOpen ? 'text-primary' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined text-[24px]">grid_view</span>
          <span className="text-[10px] font-medium mt-0.5">Danh mục</span>
        </button>
      </nav>
    </>
  );
}
