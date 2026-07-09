import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { products } from '../data/HopDen';

export default function HopDenPage() {
    const [selectedImage, setSelectedImage] = useState(null);


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
                        <span className="text-primary font-semibold">Hộp Đèn</span>
                    </nav>

                    {/* Page Title */}
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-[#FFC20F] font-bold text-xs uppercase tracking-widest block mb-2">Lĩnh Vực Hoạt Động</span>
                        <h1 className="font-h1 text-primary text-3xl md:text-5xl mb-4 leading-tight">
                            Hộp Đèn Quảng Cáo
                        </h1>
                        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            Các giải pháp hộp đèn quảng cáo hiện đại, tinh tế giúp thương hiệu của bạn tỏa sáng bất kể ngày hay đêm. Thiết kế bắt mắt, độ bền cao và tiết kiệm điện năng.
                        </p>
                        <div className="h-1 w-24 bg-primary mx-auto rounded mt-6"></div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                {/* Product Image */}
                                <div
                                    className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer"
                                    onClick={() => setSelectedImage(product.image)}
                                >
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt={product.title}
                                        src={product.image}
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] px-3 py-1 uppercase font-extrabold tracking-wider rounded-sm">
                                            Hộp Đèn
                                        </span>
                                    </div>
                                    {/* Hover Overlay - Only visible on desktop/hover */}
                                    <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#0B264B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-6">
                                        <a
                                            href="https://zalo.me/0976970515"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#FFC20F] text-[#0B264B] px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-[#eab10d] transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="material-symbols-outlined !text-sm">chat</span>
                                            Báo giá qua Zalo
                                        </a>
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

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
                        <button
                            className="absolute top-0 right-0 m-4 md:-top-12 md:-right-12 text-white hover:text-[#FFC20F] transition-colors bg-black/50 md:bg-transparent p-2 rounded-full flex items-center justify-center"
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <span className="material-symbols-outlined !text-3xl">close</span>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
