
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Enhanced scroll animation observer that reinitializes on route changes
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

    // Initialize animations with error handling
    const initializeAnimations = () => {
      try {
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        // Ensure elements are visible by default if observer fails
        animateElements.forEach((el) => {
          // Reset any previous state
          el.classList.remove('in-view');
          // Add to observer
          observer.observe(el);
        });

        // Fallback: make elements visible after a delay if observer doesn't work
        setTimeout(() => {
          const stillHiddenElements = document.querySelectorAll('.animate-on-scroll:not(.in-view)');
          stillHiddenElements.forEach((el) => {
            el.classList.add('in-view');
          });
        }, 1000);

      } catch (error) {
        console.warn('Animation observer failed, making all elements visible:', error);
        // Fallback: make all elements visible immediately
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach((el) => {
          el.classList.add('in-view');
        });
      }
    };

    // Initialize after DOM is ready and route has changed
    const timeoutId = setTimeout(initializeAnimations, 150);

    return () => {
      clearTimeout(timeoutId);
      // Clean up observer
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((el) => {
        try {
          observer.unobserve(el);
        } catch (error) {
          // Ignore cleanup errors
        }
      });
    };
  }, [location.pathname]); // Re-run when route changes

  return (
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
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
