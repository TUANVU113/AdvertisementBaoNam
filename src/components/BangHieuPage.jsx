import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products2D, productsChuNoi } from '../data/BangHieu';

export default function BangHieuPage() {
  const [activeTab, setActiveTab] = useState('2d');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProduct) {
      setCurrentImageIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProduct) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1));
    }
  };



  const activeProducts = activeTab === '2d' ? products2D : productsChuNoi;

  return (
    <>
      <section className="py-12 md:py-20 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-primary transition-colors cursor-pointer font-medium">
              Trang Chủ
            </Link>
            <span className="material-symbols-outlined !text-sm">chevron_right</span>
            <span className="text-primary font-semibold">Bảng Hiệu</span>
          </nav>

          {/* Page Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#FFC20F] font-bold text-xs uppercase tracking-widest block mb-2">Lĩnh Vực Hoạt Động</span>
            <h1 className="font-h1 text-primary text-3xl md:text-5xl mb-4 leading-tight">
              Bảng Hiệu Quảng Cáo
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              BAO NAM cung cấp đa dạng giải pháp bảng hiệu quảng cáo từ bảng hiệu 2D truyền thống đến chữ nổi Inox, Mica LED cao cấp. Mỗi sản phẩm đều được gia công chính xác và lắp đặt chuyên nghiệp.
            </p>
            <div className="h-1 w-24 bg-primary mx-auto rounded mt-6"></div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            <button
              onClick={() => setActiveTab('2d')}
              className={`px-6 md:px-8 py-3 md:py-4 font-button text-sm md:text-base uppercase tracking-wider rounded-lg font-bold transition-all duration-300 cursor-pointer ${activeTab === '2d'
                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:shadow-md'
                }`}
            >
              <span className="material-symbols-outlined !text-lg align-middle mr-2">view_in_ar</span>
              Bảng hiệu 2D
            </button>
            <button
              onClick={() => setActiveTab('chunoi')}
              className={`px-6 md:px-8 py-3 md:py-4 font-button text-sm md:text-base uppercase tracking-wider rounded-lg font-bold transition-all duration-300 cursor-pointer ${activeTab === 'chunoi'
                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:shadow-md'
                }`}
            >
              <span className="material-symbols-outlined !text-lg align-middle mr-2">title</span>
              Bảng hiệu chữ nổi
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
            {activeProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={product.title}
                    src={product.images[0]}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] px-3 py-1 uppercase font-extrabold tracking-wider rounded-sm">
                      {activeTab === '2d' ? 'Bảng hiệu 2D' : 'Chữ nổi'}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    {product.images.length > 1 && (
                      <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-sm shadow-sm flex items-center gap-1 font-bold">
                        <span className="material-symbols-outlined !text-[12px]">photo_library</span>
                        {product.images.length}
                      </span>
                    )}
                  </div>
                  {/* Hover Overlay - Only visible on desktop/hover */}
                  <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#0B264B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-6">\n
                    <div className="w-full">
                      {product.images.length > 1 && (
                        <p className="text-white text-xs mb-3 font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined !text-sm">visibility</span>
                          Xem {product.images.length} hình ảnh
                        </p>
                      )}
                      <a
                        href="https://zalo.me/0976970515"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FFC20F] text-[#0B264B] px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-[#eab10d] transition-colors"
                      >
                        <span className="material-symbols-outlined !text-sm">chat</span>
                        Báo giá qua Zalo
                      </a>\n                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 md:p-6 flex flex-col flex-grow">
                  <h3 className="font-h3 text-[13px] md:text-lg font-bold text-slate-900 mb-1.5 md:mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2 md:line-clamp-none">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-[11px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://zalo.me/0976970515"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFC20F] text-[#0B264B] px-10 py-4 font-button text-base uppercase rounded-lg font-bold shadow-lg hover:bg-[#eab10d] hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Liên hệ tư vấn miễn phí
            </a>
          </div>
        </div>
      </section>


      {/* Image Gallery Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full flex flex-col items-center justify-center h-full max-h-screen py-4 md:py-8">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-[#FFC20F] transition-colors bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full flex items-center justify-center backdrop-blur-md z-10"
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
            >
              <span className="material-symbols-outlined !text-2xl md:!text-3xl">close</span>
            </button>

            {/* Title inside Modal */}
            <div className="text-white text-center mb-4 md:mb-6 px-12">
              <h3 className="font-bold text-lg md:text-2xl">{selectedProduct.title}</h3>
              {selectedProduct.images.length > 1 && (
                <p className="text-slate-400 text-sm mt-1">Hình ảnh {currentImageIndex + 1} / {selectedProduct.images.length}</p>
              )}
            </div>

            {/* Main Image Container */}
            <div className="relative flex-grow w-full flex items-center justify-center min-h-[40vh] max-h-[70vh] mb-4">
              {/* Previous Button */}
              {selectedProduct.images.length > 1 && (
                <button
                  className="absolute left-2 md:left-8 text-white/70 hover:text-[#FFC20F] transition-colors bg-black/50 hover:bg-black/80 p-2 md:p-4 rounded-full flex items-center justify-center backdrop-blur-md z-10 shadow-lg"
                  onClick={prevImage}
                >
                  <span className="material-symbols-outlined !text-2xl md:!text-4xl">chevron_left</span>
                </button>
              )}

              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={`${selectedProduct.title} - ảnh ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next Button */}
              {selectedProduct.images.length > 1 && (
                <button
                  className="absolute right-2 md:right-8 text-white/70 hover:text-[#FFC20F] transition-colors bg-black/50 hover:bg-black/80 p-2 md:p-4 rounded-full flex items-center justify-center backdrop-blur-md z-10 shadow-lg"
                  onClick={nextImage}
                >
                  <span className="material-symbols-outlined !text-2xl md:!text-4xl">chevron_right</span>
                </button>
              )}
            </div>

            {/* Thumbnails row */}
            {selectedProduct.images.length > 1 && (
              <div className="flex gap-2 md:gap-4 overflow-x-auto max-w-full px-4 py-2 mt-auto" onClick={(e) => e.stopPropagation()}>
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-16 md:h-24 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${currentImageIndex === idx ? 'border-[#FFC20F] scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
