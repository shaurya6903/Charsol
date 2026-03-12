import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/articles/surfing.jpg";
import img2 from "@/assets/articles/fashion-style.jpg";
import img3 from "@/assets/articles/rock-climbing.jpg";
import img4 from "@/assets/articles/museum.jpg";
import img5 from "@/assets/articles/designer-bag.jpg";
import img6 from "@/assets/articles/fine-dining.jpg";
import img7 from "@/assets/articles/symphony-hall.jpg";
import img8 from "@/assets/articles/rare-books.jpg";
import img9 from "@/assets/articles/eclipse.jpg";

const sliderImages = [img1, img2, img3, img4];
const hoverImages = [img5, img6, img7];
const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [hoverIdx, setHoverIdx] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Title bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <h2 className="text-3xl font-serif italic text-foreground">Gallery</h2>
          <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>›</span>
            <span className="text-foreground font-semibold">Gallery</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Slider + Hover Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Slider */}
          <div>
            <h3 className="text-xl font-serif text-foreground mb-5">Slider</h3>
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {sliderImages.map((src, i) => (
                    <div key={i} className="flex-[0_0_100%] min-w-0">
                      <img src={src} alt={`Slide ${i + 1}`} className="w-full aspect-[4/3] object-cover grayscale" />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border rounded-full p-1.5 hover:bg-background transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} className="text-foreground" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border rounded-full p-1.5 hover:bg-background transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} className="text-foreground" />
              </button>
            </div>
          </div>

          {/* Hover Slider */}
          <div>
            <h3 className="text-xl font-serif text-foreground mb-5">Hover Slider</h3>
            <img
              src={hoverImages[hoverIdx]}
              alt="Hover slider main"
              className="w-full aspect-[4/3] object-cover grayscale mb-3"
            />
            <div className="flex gap-2">
              {hoverImages.map((src, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setHoverIdx(i)}
                  onClick={() => setHoverIdx(i)}
                  className={`flex-1 overflow-hidden border-2 transition-colors ${i === hoverIdx ? "border-foreground" : "border-transparent"}`}
                >
                  <img src={src} alt={`Thumb ${i + 1}`} className="w-full aspect-square object-cover grayscale" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-4xl mx-auto mt-14 pt-10 border-t border-border">
          <h3 className="text-xl font-serif text-foreground mb-6">Image Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((src, i) => (
              <img key={i} src={src} alt={`Gallery ${i + 1}`} className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Gallery;
