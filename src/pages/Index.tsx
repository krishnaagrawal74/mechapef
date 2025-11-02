import { ArrowRight, Calendar, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="MechaPEF Club at MNNIT Allahabad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        {/* Animated Gear Decoration */}
        <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary/20 rounded-full animate-spin-slow hidden lg:block">
          <div className="absolute inset-4 border-4 border-primary/30 rounded-full"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Inspiring Growth, Innovation and Togetherness
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            The Official Club of Mechanical and Production & Industrial Engineering at MNNIT Allahabad
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/events" className="btn-hero inline-flex items-center gap-2">
              Explore Events
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/team" className="btn-secondary inline-flex items-center gap-2">
              Meet the Team
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 card-mechapef animate-scale-in">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Workshops & Meets</h3>
              <p className="text-muted-foreground">
                From professional development to alumni interactions, we create opportunities for learning and growth.
              </p>
            </div>

            <div className="text-center p-8 card-mechapef animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Collaborative Community</h3>
              <p className="text-muted-foreground">
                A vibrant network of students united by curiosity, teamwork, and the spirit of mechanical engineering.
              </p>
            </div>

            <div className="text-center p-8 card-mechapef animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Legacy of Learning</h3>
              <p className="text-muted-foreground">
                Continuing a tradition of knowledge sharing, mentorship, and departmental unity across batches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Celebrating the Spirit of Mechanical Engineering</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            MechaPEF continues to bridge knowledge, ideas, and people fostering a culture of innovation and belonging within the department.
          </p>
          <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
