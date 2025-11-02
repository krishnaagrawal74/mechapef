import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-team.jpg";
import { Target, Zap, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mb-8 animate-fade-in">
            About MechaPEF
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed">
            MechaPEF — the official Mechanical Engineering club of MNNIT Allahabad — is more than just an organization;
            it’s a thriving community where ideas take shape, innovation meets passion, and engineers learn to lead
            with creativity, confidence, and compassion. Our mission is to bring together bright mechanical minds who
            are driven by curiosity and the desire to make an impact — within the campus and beyond.
          </p>
          
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={aboutImage}
                alt="MechaPEF Team"
                className="rounded-lg shadow-[var(--shadow-card)] border border-border"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At its core, MechaPEF believes that true engineering education goes beyond classrooms and textbooks.
                We aim to cultivate a culture of learning through doing — where students get hands-on exposure,
                develop innovative thinking, and learn the values of teamwork, discipline, and leadership.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our initiatives — from technical workshops, competitions, and industrial visits to personality
                development programs and community events — are designed to empower mechanical students to grow
                holistically. MechaPEF acts as a platform where curiosity is nurtured, ideas are celebrated,
                and each member contributes to the collective progress of the department.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision every MechaPEF member evolving into a confident, competent, and compassionate engineer
                — someone ready to innovate responsibly, lead effectively, and represent the values of MNNIT with pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-mechapef text-center animate-scale-in">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Inspiring curiosity and creative thinking to find practical solutions to real-world problems.
              </p>
            </div>
            <div
              className="card-mechapef text-center animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Striving to achieve the highest standards in learning, projects, and personal growth.
              </p>
            </div>
            <div
              className="card-mechapef text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                Building a culture of teamwork that connects students, mentors, and alumni through shared goals.
              </p>
            </div>
            <div
              className="card-mechapef text-center animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Leadership</h3>
              <p className="text-muted-foreground">
                Encouraging responsibility, initiative, and the ability to inspire others through action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">About the Department</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              The Department of Mechanical Engineering at MNNIT Allahabad is one of the most dynamic and
              historic branches of the institute. Known for its academic strength and culture of innovation,
              the department continues to shape engineers who contribute meaningfully to industry and research.
            </p>
            <p>
              With experienced faculty and well-equipped laboratories, the department blends theoretical depth
              with practical exposure. It offers a balanced approach to core mechanical concepts along with
              emerging areas like CAD/CAM, renewable energy, and design optimization.
            </p>
            <p>
              The Production and Industrial Engineering (PIE) branch extends this vision by emphasizing
              process efficiency, management principles, and sustainable manufacturing — ensuring that students
              are prepared to meet the evolving needs of the modern world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
