import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  image: string;
}

const Team = () => {
  const facultyAdvisors: TeamMember[] = [
    { name: "Prof. Mukul Shukla", image: "/team/faculty/mukul.jpg" },
    { name: "Prof. K. N. Pandey", image: "/team/faculty/kn.jpg" },
    { name: "Dr. Bireswar Paul", image: "/team/faculty/bireswar.jpg" },
    { name: "Dr. J. N. Gangwar", image: "/team/faculty/jn.jpg" },
    { name: "Dr. Vandana Agarwal", image: "/team/faculty/vandana.jpg" },
    { name: "Dr. V. B. Pandey", image: "/team/faculty/vibhuti.jpg" },
  ];

  const batch2026: TeamMember[] = [
    { name: "Anmol Kumar", image: "/team/2026/anmol.jpg" },
    { name: "Nikhil Kumar", image: "/team/2026/nikhil.jpg" },
    { name: "Priyanshu Agarwal", image: "/team/2026/priyanshu.jpg" },
    { name: "Raghav Patel", image: "/team/2026/raghav.jpg" },
    { name: "Shivansh Pandey", image: "/team/2026/shivansh.png" },
  ];

  const batch2027: TeamMember[] = [
    { name: "Abhishek Kumar Singh", image: "/team/2027/abhishek.jpg" },
    { name: "Aman Goyal", image: "/team/2027/aman.jpg" },
    { name: "Ayush Gupta", image: "/team/2027/ayush.jpg" },
    { name: "Hardik Agarwal", image: "/team/2027/hardik.jpg" },
    { name: "Jai Verma", image: "/team/2027/jai.jpg" },
    { name: "Koli Saha", image: "/team/2027/koli.jpg" },
    { name: "Krish Kumar", image: "/team/2027/krish.jpg" },
    { name: "Krishna Raj Agrawal", image: "/team/2027/krishna.png" },
    { name: "Kumar Anubhav", image: "/team/2027/kumar.jpg" },
    { name: "Neha Verma", image: "/team/2027/neha.jpg" },
    { name: "Ojaswi Shukla", image: "/team/2027/ojaswi.jpg" },
    { name: "Prashansa Nandan", image: "/team/2027/prashansa.jpg" },
    { name: "Richa Dubey", image: "/team/2027/richa.jpeg" },
    { name: "Sanskar Soni", image: "/team/2027/sanskar.jpg" },
    { name: "Saumitra Raj Trivedi", image: "/team/2027/saumitra.jpg" },
    { name: "Shokhee Gupta", image: "/team/2027/shokee.jpg" },
    { name: "Shikha Verma", image: "/team/2027/shikha.jpg" },
    { name: "Shiv Sharan Shukla", image: "/team/2027/shiv.jpg" },
    { name: "Shreyansh Rathi", image: "/team/2027/shreyansh.png" },
    { name: "Supriya Singh", image: "/team/2027/supriya.jpeg" },
    { name: "Vaibhav Aswale", image: "/team/2027/vaibhav.jpeg" },
    { name: "Vinay Sunil Funde", image: "/team/2027/vinay.jpg" },
  ];

  const batch2028: TeamMember[] = [
    { name: "Aditi Singh", image: "/team/2028/aditi.jpg" },
    { name: "Aditya Vinayak Kakad", image: "/team/2028/aditya.jpg" },
    { name: "Amitoj Singh Arora", image: "/team/2028/amitoj.jpg" },
    { name: "Ankita Agarwal", image: "/team/2028/ankita.jpg" },
    { name: "Bhavya Jain", image: "/team/2028/bhavya.jpg" },
    { name: "Daksh Kumar Verma", image: "/team/2028/daksh.jpg" },
    { name: "Dhairya Gupta", image: "/team/2028/dhairya.jpg" },
    { name: "Divyanshu Singh", image: "/team/2028/divyanshu.jpg" },
    { name: "Gauransh Mishra", image: "/team/2028/gauransh.jpg" },
    { name: "Hardik Jain", image: "/team/2028/hardik.jpg" },
    { name: "Harshit Tiwari", image: "/team/2028/harshit.jpg" },
    { name: "Karishma", image: "/team/2028/karishma.jpg" },
    { name: "Khushi Singh", image: "/team/2028/khushi.jpg" },
    { name: "Namitha Pradeep", image: "/team/2028/namitha.jpg" },
    { name: "P Prithvi", image: "/team/2028/prithvi.jpg" },
    { name: "Prem Kumar Prince", image: "/team/2028/prem.jpg" },
    { name: "Rishab Ranjan", image: "/team/2028/rishabh.jpg" },
    { name: "Satyam Kumar", image: "/team/2028/satyam.jpg" },
    { name: "Shaurya Gupta", image: "/team/2028/shaurya.jpg" },
    { name: "Srikara Badrinath M", image: "/team/2028/srikar.jpg" },
    { name: "Yatin Sai Chaitanya", image: "/team/2028/yatin.jpg" },
  ];

  const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <div
      className="card-mechapef text-center animate-scale-in flex flex-col items-center justify-between p-6 w-60 h-64 bg-card rounded-2xl"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative w-40 h-40 mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-xl border-4 border-primary shadow-lg"
        />
      </div>
      <h3 className="text-lg font-bold mb-2 text-white">{member.name}</h3>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mb-8 animate-fade-in">Our Team</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Meet the passionate individuals who form the heart of MechaPEF, from the guiding faculty who inspire innovation to the dedicated student leaders who bring ideas to life and strengthen the spirit of our mechanical community.
          </p>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Faculty Advisors</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {facultyAdvisors.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Batch 2026 */}
      <section className="py-20 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Club Coordinators <span className="glow-text">– Batch 2026</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {batch2026.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Batch 2027 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Team <span className="glow-text">– Batch 2027</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {batch2027.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Batch 2028 */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Members <span className="glow-text">– Batch 2028</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {batch2028.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
