
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurBusinesses from "./pages/OurBusinesses";
import AudiovisualNetworking from "./pages/AudiovisualNetworking";
import OilGas from "./pages/OilGas";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhatsAppWidget from "./components/WhatsAppWidget";
import { useEffect } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px 0px',
    });

    const initializeAnimations = () => {
      try {
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach((el) => {
          el.classList.remove('in-view');
          observer.observe(el);
        });
        setTimeout(() => {
          const stillHiddenElements = document.querySelectorAll('.animate-on-scroll:not(.in-view)');
          stillHiddenElements.forEach((el) => el.classList.add('in-view'));
        }, 1000);
      } catch (error) {
        console.warn('Animation observer failed, making all elements visible:', error);
        document.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('in-view'));
      }
    };

    const timeoutId = setTimeout(initializeAnimations, 150);

    return () => {
      clearTimeout(timeoutId);
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        try { observer.unobserve(el); } catch { /* ignore */ }
      });
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-businesses" element={<OurBusinesses />} />
          <Route path="/audiovisual-networking" element={<AudiovisualNetworking />} />
          <Route path="/oil-gas" element={<OilGas />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
