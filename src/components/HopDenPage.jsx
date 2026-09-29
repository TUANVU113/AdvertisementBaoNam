import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/HopDen';
import ProductDetailModal from './ProductDetailModal';

export default function HopDenPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {products.map((product) => {
                            const firstImg = product.images?.[0] || product.image;
                            const imgCount = product.images?.length || 1;
                            return (
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    {/* Product Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            alt={product.title}
                                            src={firstImg}
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className="bg-primary/90 backdrop-blur-sm text-white text-[11px] px-3 py-1 uppercase font-bold tracking-wider rounded-md">
                                                Hộp Đèn
                                            </span>
                                        </div>
                                        <div className="absolute top-3 right-3 z-10">
                                            {imgCount > 1 && (
                                                <span className="bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 font-bold">
                                                    <span className="material-symbols-outlined !text-sm text-[#FFC20F]">photo_library</span>
                                                    {imgCount} ảnh
                                                </span>
                                            )}
                                        </div>
                                        {/* Hover Overlay */}
                                        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#0B264B]/80 via-[#0B264B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-end p-5">
                                            <span className="bg-[#FFC20F] text-[#0B264B] px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-md w-full justify-center">
                                                <span className="material-symbols-outlined !text-sm">visibility</span>
                                                Xem Chi Tiết & Ảnh Phóng To
                                            </span>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-5 flex flex-col flex-grow justify-between">
                                        <div>
                                            <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3 font-normal">
                                                {product.description}
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
                                            <span className="flex items-center gap-1">
                                                <span className="material-symbols-outlined !text-sm">info</span>
                                                Xem chi tiết sản phẩm
                                            </span>
                                            <span className="material-symbols-outlined !text-base group-hover:translate-x-1 transition-transform text-[#FFC20F]">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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

            {/* Product Detail Modal */}
            <ProductDetailModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </>
    );
}

