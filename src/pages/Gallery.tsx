import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // ✅ Local gallery images from your folders
  const galleryImages = [
    // Departmental Meets (2029 + 2028)
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `depmeet29-${i + 1}`,
      url: `/depmeet29/${i + 1}.jpg`,
      category: "department_meet",
      alt: `Departmental Meet 2029 - ${i + 1}`,
    })),
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `depmeet28-${i + 1}`,
      url: `/depmeet28/${i + 1}.jpg`,
      category: "department_meet",
      alt: `Departmental Meet 2028 - ${i + 1}`,
    })),

    // Workshops & Competitions
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `designdynamo25-${i + 1}`,
      url: `/designdynamo25/${i + 1}.jpg`,
      category: "workshop_competition",
      alt: `Design Dynamo 2025 - ${i + 1}`,
    })),
    ...Array.from({ length: 1 }, (_, i) => ({
      id: `linkedin-${i + 1}`,
      url: `/linkedin/${i + 1}.jpg`,
      category: "workshop_competition",
      alt: `LinkedIn Workshop - ${i + 1}`,
    })),
    // ✅ Added PDCSE Workshop (1–18)
    ...Array.from({ length: 18 }, (_, i) => ({
      id: `pdcse-${i + 1}`,
      url: `/pdcse/${i + 1}.jpg`,
      category: "workshop_competition",
      alt: `PDCSE Workshop - ${i + 1}`,
    })),

    // Industrial Visit (mixed extensions)
    ...Array.from({ length: 4 }, (_, i) => ({
      id: `industrialvisit25-${i + 1}`,
      url: `/industrialvisit25/${i + 1}.jpeg`,
      category: "industrial_visit",
      alt: `Industrial Visit 2025 - ${i + 1}`,
    })),
    ...Array.from({ length: 2 }, (_, i) => ({
      id: `industrialvisit25-${i + 5}`,
      url: `/industrialvisit25/${i + 5}.jpg`,
      category: "industrial_visit",
      alt: `Industrial Visit 2025 - ${i + 5}`,
    })),

    // Alumni Interaction (Pathspell)
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `pathspell-${i + 1}`,
      url: `/pathspell/${i + 1}.jpeg`,
      category: "alumni_interaction",
      alt: `Pathspell Alumni Interaction - ${i + 1}`,
    })),
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "department_meet", label: "Departmental Meets" },
    { id: "workshop_competition", label: "Workshops & Competitions" },
    { id: "industrial_visit", label: "Industrial Visits" },
    { id: "alumni_interaction", label: "Alumni Interaction" },
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mb-8 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Glimpses from our departmental meets, workshops, industrial visits, and alumni interactions
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-red)]"
                    : "bg-card text-foreground hover:border-primary border border-border"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Layout */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg cursor-pointer group break-inside-avoid border-2 border-transparent hover:border-primary transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.03}s` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 bg-card rounded-full hover:bg-primary transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
