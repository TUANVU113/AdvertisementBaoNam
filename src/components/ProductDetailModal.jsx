import React, { useState } from 'react';

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  // Chuẩn hóa danh sách hình ảnh (nếu là image đơn hoặc images mảng)
  const imageList = product.images && product.images.length > 0 
    ? product.images 
    : (product.image ? [product.image] : []);

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [viewMode, setViewMode] = useState('split'); // 'split' (Chi tiết) hoặc 'grid' (Tất cả ảnh trên màn hình)

  const nextImage = (e) => {
    e?.stopPropagation();
    if (imageList.length > 1) {
      setActiveImageIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (imageList.length > 1) {
      setActiveImageIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 md:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh] border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <span className="bg-[#0B264B] text-[#FFC20F] text-xs px-3 py-1 font-extrabold uppercase tracking-wider rounded-md shadow-sm">
              {product.categoryName || 'Chi Tiết Sản Phẩm'}
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline-block">|</span>
            <span className="text-slate-500 text-xs font-medium hidden sm:inline-block">
              {imageList.length} hình ảnh thực tế
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle if multiple images exist */}
            {imageList.length > 1 && (
              <button
                onClick={() => setViewMode(viewMode === 'split' ? 'grid' : 'split')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-primary shadow-sm"
                title="Đổi chế độ xem tất cả ảnh cùng lúc"
              >
                <span className="material-symbols-outlined !text-base">
                  {viewMode === 'split' ? 'grid_view' : 'space_dashboard'}
                </span>
                {viewMode === 'split' ? 'Xem nhiều ảnh cùng lúc' : 'Xem dạng chi tiết'}
              </button>
            )}

            <button
              className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all flex items-center justify-center"
              onClick={onClose}
              aria-label="Đóng"
            >
              <span className="material-symbols-outlined !text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* View Mode Switcher for Mobile */}
        {imageList.length > 1 && (
          <div className="flex sm:hidden border-b border-slate-100 bg-slate-100/70 p-1">
            <button
              onClick={() => setViewMode('split')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1 ${
                viewMode === 'split' ? 'bg-white text-primary shadow-sm' : 'text-slate-600'
              }`}
            >
              <span className="material-symbols-outlined !text-sm">info</span>
              Thông tin & Ảnh
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1 ${
                viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-slate-600'
              }`}
            >
              <span className="material-symbols-outlined !text-sm">grid_view</span>
              Tất cả {imageList.length} ảnh
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="overflow-y-auto flex-grow">
          {viewMode === 'grid' ? (
            /* ALL PHOTOS GRID VIEW (Hiển thị tất cả ảnh trên màn hình) */
            <div className="p-6 bg-slate-50">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Hiển thị tất cả {imageList.length} hình ảnh thực tế công trình / sản phẩm
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('split')}
                  className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm"
                >
                  Quay lại xem mô tả chi tiết
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {imageList.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 shadow-md border border-slate-200 cursor-pointer"
                    onClick={() => {
                      setActiveImageIdx(idx);
                      setViewMode('split');
                    }}
                  >
                    <img
                      src={img}
                      alt={`${product.title} - ảnh ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow flex items-center gap-1">
                        <span className="material-symbols-outlined !text-sm">visibility</span> Xem ảnh lớn #{idx + 1}
                      </span>
                    </div>
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Ảnh {idx + 1} / {imageList.length}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* SPLIT DETAILS VIEW (Main Image + Thumbnail Strip + Rich Description) */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 min-h-[500px]">
              
              {/* Left Column: Image Gallery */}
              <div className="lg:col-span-7 p-4 sm:p-6 bg-slate-50/70 flex flex-col justify-between">
                <div>
                  {/* Featured Main Image */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200/80 group">
                    <img
                      src={imageList[activeImageIdx]}
                      alt={`${product.title} - ảnh ${activeImageIdx + 1}`}
                      className="w-full h-full object-contain bg-slate-950 transition-all duration-300"
                    />

                    {/* Navigation Buttons */}
                    {imageList.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#FFC20F] text-white hover:text-[#0B264B] p-2 sm:p-2.5 rounded-full backdrop-blur-sm transition-all shadow-md flex items-center justify-center"
                          aria-label="Ảnh trước"
                        >
                          <span className="material-symbols-outlined !text-xl sm:!text-2xl">chevron_left</span>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#FFC20F] text-white hover:text-[#0B264B] p-2 sm:p-2.5 rounded-full backdrop-blur-sm transition-all shadow-md flex items-center justify-center"
                          aria-label="Ảnh tiếp"
                        >
                          <span className="material-symbols-outlined !text-xl sm:!text-2xl">chevron_right</span>
                        </button>

                        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold tracking-wide">
                          {activeImageIdx + 1} / {imageList.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Multiple Photos Thumbnails Grid on Screen */}
                  {imageList.length > 1 && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                          <span className="material-symbols-outlined !text-sm text-primary">photo_library</span>
                          Tất cả ảnh sản phẩm ({imageList.length})
                        </span>
                        <button
                          onClick={() => setViewMode('grid')}
                          className="text-xs font-semibold text-primary hover:underline flex items-center gap-0.5"
                        >
                          Xem tất cả dạng lưới →
                        </button>
                      </div>

                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                        {imageList.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIdx(idx)}
                            className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                              activeImageIdx === idx
                                ? 'border-[#0B264B] ring-2 ring-[#FFC20F] scale-[1.03] shadow-md'
                                : 'border-transparent opacity-70 hover:opacity-100 hover:scale-[1.02]'
                            }`}
                          >
                            <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Guarantee Banner */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold text-slate-600">
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-primary !text-lg">verified</span>
                    <span>Chất lượng cao</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-primary !text-lg">precision_manufacturing</span>
                    <span>Giá tại xưởng</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-primary !text-lg">local_shipping</span>
                    <span>Thi công tận nơi</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Product Information & Actions */}
              <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  {/* Category Tag */}
                  {product.categoryName && (
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-primary/10 text-primary uppercase tracking-wider mb-3">
                      {product.categoryName}
                    </span>
                  )}

                  {/* Product Title (Tên sản phẩm) */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B264B] leading-tight mb-4">
                    {product.title}
                  </h2>

                  {/* Divider */}
                  <div className="h-1 w-16 bg-[#FFC20F] rounded mb-5"></div>

                  {/* Product Description Section with LARGER Text */}
                  <div className="mb-6">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                      <span className="material-symbols-outlined !text-base text-primary">description</span>
                      Mô Tả Sản Phẩm & Quy Cách
                    </h3>
                    <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm whitespace-pre-line">
                      {product.description}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-500 !text-lg shrink-0 mt-0.5">check_circle</span>
                      <span>Thiết kế mẫu mã 2D/3D theo yêu cầu hoàn toàn miễn phí</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-500 !text-lg shrink-0 mt-0.5">check_circle</span>
                      <span>Chất liệu đạt chuẩn, độ bền màu cao chịu nắng mưa tốt</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-500 !text-lg shrink-0 mt-0.5">check_circle</span>
                      <span>Đội ngũ thợ thi công lành nghề, tư vấn tận tâm 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href="https://zalo.me/0976970515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#FFC20F] hover:bg-[#eab10d] text-[#0B264B] py-3.5 px-6 rounded-xl font-extrabold text-sm md:text-base flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg hover:scale-[1.01]"
                  >
                    <span className="material-symbols-outlined !text-xl">chat</span>
                    Tư Vấn & Báo Giá Zalo (0976.970.515)
                  </a>

                  <a
                    href="tel:0976970515"
                    className="w-full bg-[#0B264B] hover:bg-[#071933] text-white py-3.5 px-6 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5 transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined !text-xl">call</span>
                    Gọi Hotline Trực Tiếp
                  </a>
                </div>

              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
