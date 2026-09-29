import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { matDungProducts, quangCaoNgoaiTroiProducts, thiCongKhacProducts } from '../data/thiCongData';
import ProductDetailModal from './ProductDetailModal';

export default function ThiCongPage() {
    const [activeTab, setActiveTab] = useState('mat-dung');
    const [selectedProduct, setSelectedProduct] = useState(null);

    let currentProducts = matDungProducts;
    let catName = 'Thi Công Mặt Dựng';
    if (activeTab === 'ngoai-troi') {
        currentProducts = quangCaoNgoaiTroiProducts;
        catName = 'Quảng Cáo Ngoài Trời';
    }
    if (activeTab === 'khac') {
        currentProducts = thiCongKhacProducts;
        catName = 'Thi Công Quảng Cáo';
    }

    const formattedProducts = currentProducts.map(p => ({
        ...p,
        categoryName: catName
    }));

    const renderTabs = () => (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
            <button
                onClick={() => setActiveTab('mat-dung')}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-h3 text-[11px] md:text-sm uppercase tracking-wider font-bold transition-all duration-300 ${activeTab === 'mat-dung'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-primary'
                    }`}
            >
                Thi Công Mặt Dựng
            </button>
            <button
                onClick={() => setActiveTab('ngoai-troi')}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-h3 text-[11px] md:text-sm uppercase tracking-wider font-bold transition-all duration-300 ${activeTab === 'ngoai-troi'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-primary'
                    }`}
            >
                Quảng Cáo Ngoài Trời
            </button>
            <button
                onClick={() => setActiveTab('khac')}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-h3 text-[11px] md:text-sm uppercase tracking-wider font-bold transition-all duration-300 ${activeTab === 'khac'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-primary'
                    }`}
            >
                Thi Công Khác
            </button>
        </div>
    );

    return (
        <>
            <section className="py-12 md:py-20 bg-slate-50 min-h-screen">
                <div className="max-w-[1280px] mx-auto px-6 md:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8">
                        <Link to="/" className="hover:text-primary transition-colors cursor-pointer font-medium">
                            Trang Chủ
                        </Link>
                        <span className="material-symbols-outlined !text-sm">chevron_right</span>
                        <span className="text-primary font-semibold">Thi Công</span>
                    </nav>

                    {/* Page Title */}
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-[#FFC20F] font-bold text-xs uppercase tracking-widest block mb-2">Giải Pháp Toàn Diện</span>
                        <h1 className="font-h1 text-primary text-3xl md:text-5xl mb-4 leading-tight">
                            Hạng Mục Thi Công
                        </h1>
                        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            Cung cấp các giải pháp thi công chuyên nghiệp, từ ốp mặt dựng Alu, pano quảng cáo ngoài trời đến thi công sự kiện và nội thất, cam kết chất lượng và tính thẩm mỹ cao nhất.
                        </p>
                        <div className="h-1 w-24 bg-primary mx-auto rounded mt-6"></div>
                    </div>

                    {/* Tabs */}
                    {renderTabs()}

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in">
                        {formattedProducts.map((product) => (
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
                                        src={product.images[0]}
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3 z-10">
                                        <span className="bg-primary/90 backdrop-blur-sm text-white text-[11px] px-3 py-1 uppercase font-bold tracking-wider rounded-md">
                                            {activeTab === 'mat-dung' && 'Mặt Dựng'}
                                            {activeTab === 'ngoai-troi' && 'Ngoài Trời'}
                                            {activeTab === 'khac' && 'Thi Công'}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3 z-10">
                                        {product.images.length > 1 && (
                                            <span className="bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 font-bold">
                                                <span className="material-symbols-outlined !text-sm text-[#FFC20F]">photo_library</span>
                                                {product.images.length} ảnh
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
                                            Xem chi tiết công trình
                                        </span>
                                        <span className="material-symbols-outlined !text-base group-hover:translate-x-1 transition-transform text-[#FFC20F]">
                                            arrow_forward
                                        </span>
                                    </div>
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
                            className="inline-flex items-center gap-2 bg-[#FFC20F] text-[#0B264B] px-8 md:px-10 py-3 md:py-4 font-button text-sm md:text-base uppercase rounded-lg font-bold shadow-lg hover:bg-[#eab10d] hover:-translate-y-0.5 active:scale-95 transition-all"
                        >
                            <span className="material-symbols-outlined">design_services</span>
                            Nhận Báo Giá Thi Công
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

