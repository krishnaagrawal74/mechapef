import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Instagram, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mb-8 animate-fade-in">Contact Us</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Have questions, ideas, or collaborations in mind? We’d love to connect with you.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Reach out to the MechaPEF team through any of the following channels.  
                We’re always open to discussions, partnerships, or helping you learn more about our initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-mechapef flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:mechapef@mnnit.ac.in"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mechapef@mnnit.ac.in
                  </a>
                </div>
              </div>

              <div className="card-mechapef flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/mechapef_mnnit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @mechapef_mnnit
                  </a>
                </div>
              </div>

              <div className="card-mechapef flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/company/mechanical-engineering-forum-mnnit-allahabad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mechanical and Production Engineering Forum- MNNIT Allahabad
                  </a>
                </div>
              </div>

              <div className="card-mechapef flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Department of Mechanical Engineering
                    <br />
                    MNNIT Allahabad, Prayagraj
                    <br />
                    Uttar Pradesh – 211004
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
