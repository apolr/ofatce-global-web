
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
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

const App = () => {
  useEffect(() => {
    // Enhanced scroll animation observer with better error handling
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

    // Add a small delay to ensure DOM is ready
    const initializeAnimations = () => {
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((el) => {
        observer.observe(el);
      });
    };

    // Initialize after a brief delay
    const timeoutId = setTimeout(initializeAnimations, 100);

    return () => {
      clearTimeout(timeoutId);
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-background">
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
