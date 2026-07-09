import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ServicePackages from './components/ServicePackages';
import Process from './components/Process';
import Partners from './components/Partners';
import Footer from './components/Footer';
import QuickActions from './components/QuickActions';
import BangHieuPage from './components/BangHieuPage';
import BottomNavBar from './components/BottomNavBar';
import HopDenPage from './components/HopDenPage';
import BangBienPage from './components/BangBienPage';
import InAnPage from './components/InAnPage';
import ThiCongPage from './components/ThiCongPage';
import ThiCongMatDungSection from './components/ThiCongMatDungSection';
import ThiCongTronGoiSection from './components/ThiCongTronGoiSection';
import BangHieuSection from './components/BangHieuSection';
import HopDenSection from './components/HopDenSection';
import BangBienSection from './components/BangBienSection';
import InAnSection from './components/InAnSection';


function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ServicePackages />
      <ThiCongTronGoiSection />
      <BangHieuSection />
      <HopDenSection />
      <BangBienSection />
      <InAnSection />
      <ThiCongMatDungSection />
      <Process />
      <Partners />
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-[#FFC20F] selection:text-[#0B264B]">
      <Header />

      <main className="flex-grow pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bang-hieu" element={<BangHieuPage />} />
          <Route path="/hop-den" element={<HopDenPage />} />
          <Route path="/bang-bien" element={<BangBienPage />} />
          <Route path="/in-an" element={<InAnPage />} />
          <Route path="/thi-cong" element={<ThiCongPage />} />
        </Routes>
      </main>

      <Footer />
      <QuickActions />
      <BottomNavBar />
    </div>
  );
}
