import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnterDropdown = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  // Điều hướng tới section trên trang chủ (thi công, liên hệ, giới thiệu)
  const handleSectionClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dropdown sub-items for "lĩnh vực hoạt động"
  const dropdownItems = [
    {
      name: 'Bảng hiệu',
      icon: 'branding_watermark',
      to: '/bang-hieu',
    },
    {
      name: 'Hộp đèn',
      icon: 'light_mode',
      to: '/hop-den'
    },
    {
      name: 'Bảng biển',
      icon: 'storefront',
      to: '/bang-bien'
    },
    {
      name: 'In ấn',
      icon: 'print',
      to: '/in-an'
    },
    {
      name: 'Thi công',
      icon: 'build',
      to: '/thi-cong'
    },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-16 md:h-20 flex justify-between items-center relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-primary focus:outline-none flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Brand Logo */}
        <div className="flex items-center gap-8 absolute md:relative left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0">
          <Link
            to="/"
            onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}
            className="text-2xl font-black tracking-tighter text-primary hover:opacity-90 transition-opacity cursor-pointer"
          >
            BẢO NAM
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {/* Trang Chủ */}
            <Link
              to="/"
              className={`font-h3 text-xs lg:text-sm font-semibold uppercase tracking-wider transition-colors duration-200 pb-1 cursor-pointer ${currentPage === 'home'
                ? 'text-primary border-b-2 border-primary'
                : 'text-slate-600 hover:text-primary'
                }`}
            >
              Trang Chủ
            </Link>

            {/* Lĩnh vực hoạt động - with Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`font-h3 text-xs lg:text-sm font-semibold uppercase tracking-wider transition-colors duration-200 pb-1 cursor-pointer flex items-center gap-1 ${currentPage === 'bang-hieu'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-slate-600 hover:text-primary'
                  }`}
              >
                lĩnh vực hoạt động
                <span className={`material-symbols-outlined !text-base transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {/* Desktop Dropdown Panel */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden animate-fade-in z-50">
                  <div className="py-2">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setIsDropdownOpen(false)}
                        className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-primary/5 hover:text-primary transition-colors duration-200 group cursor-pointer"
                      >
                        <span className="material-symbols-outlined !text-xl text-primary/70 group-hover:text-primary transition-colors">
                          {item.icon}
                        </span>
                        <span className="font-h3 text-sm font-semibold uppercase tracking-wider text-slate-700 group-hover:text-primary">
                          {item.name}
                        </span>
                        <span className="material-symbols-outlined !text-base text-slate-300 ml-auto group-hover:text-primary transition-colors">
                          arrow_forward
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Sắp ra mắt: Hộp đèn, Quảng cáo...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Thi công */}
            <Link
              to="/thi-cong"
              onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}
              className={`font-h3 text-xs lg:text-sm font-semibold uppercase tracking-wider transition-colors duration-200 pb-1 cursor-pointer ${currentPage === 'thi-cong'
                ? 'text-primary border-b-2 border-primary'
                : 'text-slate-600 hover:text-primary'
                }`}
            >
              thi công
            </Link>

            {/* Liên hệ */}
            <button
              onClick={() => handleSectionClick('contact')}
              className="font-h3 text-xs lg:text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-primary transition-colors duration-200 pb-1 cursor-pointer"
            >
              liên hệ
            </button>

            {/* Giới thiệu */}
            <button
              onClick={() => handleSectionClick('about')}
              className="font-h3 text-xs lg:text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-primary transition-colors duration-200 pb-1 cursor-pointer"
            >
              Giới Thiệu
            </button>
          </nav>
        </div>

        {/* Action Elements */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Hotline 24/7</span>
            <a href="tel:0976970515" className="text-primary font-extrabold hover:underline">
              0976970515
            </a>
          </div>


          <a
            href="https://zalo.me/0976970515"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-[#FFC20F] text-[#0B264B] font-button text-sm uppercase px-5 py-3 rounded-lg font-extrabold hover:bg-[#eab10d] active:scale-95 transition-all text-center"
          >
            Liên hệ Zalo
          </a>

          {/* Mobile Hotline Button */}
          <a
            href="tel:0976970515"
            className="md:hidden bg-[#FFC20F] text-[#0B264B] px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold hover:bg-[#eab10d] transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>Hotline</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 px-8 py-6 flex flex-col gap-2 shadow-lg z-50">
          {/* Trang Chủ */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-h3 text-sm font-semibold uppercase tracking-wider py-3 border-b border-slate-100 text-left cursor-pointer ${currentPage === 'home' ? 'text-primary pl-2 border-l-4 border-l-primary' : 'text-slate-600'
              }`}
          >
            Trang Chủ
          </Link>

          {/* Lĩnh vực hoạt động - Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className={`w-full font-h3 text-sm font-semibold uppercase tracking-wider py-3 border-b border-slate-100 text-left flex items-center justify-between cursor-pointer ${currentPage === 'bang-hieu' ? 'text-primary pl-2 border-l-4 border-l-primary' : 'text-slate-600'
                }`}
            >
              lĩnh vực hoạt động
              <span className={`material-symbols-outlined !text-base transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {isMobileDropdownOpen && (
              <div className="bg-slate-50 border-b border-slate-100">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined !text-lg text-primary/70">
                      {item.icon}
                    </span>
                    <span className="font-h3 text-sm font-semibold uppercase tracking-wider text-slate-600">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Thi công */}
          <Link
            to="/thi-cong"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-h3 text-sm font-semibold uppercase tracking-wider py-3 border-b border-slate-100 text-left cursor-pointer ${currentPage === 'thi-cong' ? 'text-primary pl-2 border-l-4 border-l-primary' : 'text-slate-600'
              }`}
          >
            thi công
          </Link>

          {/* Liên hệ */}
          <button
            onClick={() => handleSectionClick('contact')}
            className="font-h3 text-sm font-semibold uppercase tracking-wider py-3 border-b border-slate-100 text-left text-slate-600 cursor-pointer"
          >
            liên hệ
          </button>

          {/* Giới Thiệu */}
          <button
            onClick={() => handleSectionClick('about')}
            className="font-h3 text-sm font-semibold uppercase tracking-wider py-3 border-b border-slate-100 text-left text-slate-600 cursor-pointer"
          >
            Giới Thiệu
          </button>

          {/* Mobile Hotline */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">Hotline 24/7</span>
              <a href="tel:0976970515" className="text-primary font-bold">
                0976970515
              </a>
            </div>
            <a
              href="https://zalo.me/0976970515"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFC20F] text-[#0B264B] font-button text-xs uppercase px-4 py-2 rounded-lg font-extrabold hover:bg-[#eab10d] active:scale-95 transition-all"
            >
              Zalo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
