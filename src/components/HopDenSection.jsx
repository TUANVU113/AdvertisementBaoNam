import React, { useState } from 'react';
import { products } from '../data/HopDen';
import { Link } from 'react-router-dom';

export default function HopDenSection() {
    const listProducts = products.slice(0, 6);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="hop-den" className="py-16 md:py-24 bg-white border-b border-slate-100">
            <div className="max-w-[1280px] mx-auto px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-h1 text-primary text-3xl md:text-5xl mb-4 leading-tight">
                        Hộp Đèn Quảng Cáo
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded mt-6"></div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
                    {listProducts.map((product) => (
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
                                <div className="absolute top-4 left-4 z-10 flex gap-2 flex-col items-start">
                                    <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] px-3 py-1 uppercase font-extrabold tracking-wider rounded-sm shadow-sm">
                                        Hộp Đèn
                                    </span>
                                </div>
                                {/* Hover Overlay */}
                                <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#0B264B]/80 via-[#0B264B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-end p-6">
                                    <div className="w-full">
                                        <p className="text-white text-xs mb-3 font-semibold flex items-center gap-1">
                                            <span className="material-symbols-outlined !text-sm">visibility</span>
                                            Xem hình ảnh phóng to
                                        </p>
                                        <a
                                            href="https://zalo.me/0976970515"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#FFC20F] text-[#0B264B] px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-[#eab10d] hover:scale-105 transition-all shadow-lg w-full justify-center"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="material-symbols-outlined !text-sm">chat</span>
                                            Tư Vấn Ngay
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-4 md:p-6 flex flex-col flex-grow">
                                <h3 className="font-h3 text-[13px] md:text-lg font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2 md:line-clamp-none leading-snug">
                                    {product.title}
                                </h3>
                                <p className="text-slate-600 text-[11px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-4">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/hop-den"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-[#FFC20F] transition-colors group bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm"
                    >
                        Xem thêm tất cả hộp đèn quảng cáo
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </Link>
                </div>
            </div>

            {/* Simple Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full flex items-center justify-center h-full max-h-screen py-8">
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-[#FFC20F] transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <span className="material-symbols-outlined !text-2xl">close</span>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Phóng to"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
