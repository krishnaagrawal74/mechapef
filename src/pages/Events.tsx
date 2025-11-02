import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  description: JSX.Element;
  image: string;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Annual Departmental Meet 2024",
      date: "October 2024",
      venue: "MP Hall",
      image: "events/dep28.jpg",
      description: (
        <div className="space-y-4 text-muted-foreground">
          <h4 className="font-semibold text-primary mb-1">Overview</h4>
          <p>
            The Annual Departmental Meet 2024 was a celebration of unity, creativity, and
            departmental pride. It marked the official welcome of freshers into the Mechanical
            Engineering family and served as a platform for students to interact, express, and
            showcase their diverse talents. The event began with Sarasvati Vandana and a
            motivational address by the Head of Department, followed by an evening filled with
            joy, laughter, and performances.
          </p>

          <h4 className="font-semibold text-primary mb-1">Highlights</h4>
          <p>
            The program featured engaging games, solo and group performances, and fun
            activities that strengthened bonds across batches. Students participated enthusiastically
            in quizzes, musical chairs, and impromptu challenges, setting a cheerful and inclusive
            tone for the evening.
          </p>

          <h4 className="font-semibold text-primary mb-1">Winners</h4>
          <ul className="list-disc list-inside">
            <li><strong>Mr. Mechanical:</strong> Shaurya Pratap Singh (20246133)</li>
            <li><strong>Ms. Mechanical:</strong> Sudipta Guha (20246145)</li>
            <li><strong>Winner – Musical Chairs:</strong> Mahendra Jangid (20246092)</li>
            <li><strong>Capture the Moment:</strong> Vanshika Gola, Tanmay Anand, and Mahendra Kumar</li>
            <li><strong>Quiz Round:</strong> Vanshika Gola and Tanmay Anand</li>
          </ul>

          <h4 className="font-semibold text-primary mb-1">Takeaway</h4>
          <p>
            The meet concluded with an atmosphere of warmth and camaraderie, followed by
            dinner and prize distribution. The evening not only celebrated talent and teamwork but
            also reinforced the sense of belonging that defines the MechaPEF community.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "LinkedIn Optimization Workshop",
      date: "September 2024",
      venue: "Online",
      image: "events/linkedin.jpg",
      description: (
        <div className="space-y-4 text-muted-foreground">
          <h4 className="font-semibold text-primary mb-1">Overview</h4>
          <p>
            In an era where professional networking plays a vital role, the LinkedIn Optimization
            Workshop was organized to help students build strong, appealing online profiles. The
            session guided participants through optimizing their profiles, improving digital visibility,
            and showcasing professional achievements effectively.
          </p>

          <h4 className="font-semibold text-primary mb-1">Highlights</h4>
          <p>
            The workshop witnessed over 120 participants who learned how to craft impactful
            headlines, structure project experiences, and engage meaningfully with industry
            professionals. Students were encouraged to develop personal brands aligned with
            their career aspirations.
          </p>

          <h4 className="font-semibold text-primary mb-1">Winners</h4>
          <ul className="list-disc list-inside">
            <li><strong>First Year:</strong> Abhay Agrahari (20246001), Divyanshu Kannaujiya (20247021)</li>
            <li><strong>Second Year:</strong> Krishna Raj Agrawal (20236069)</li>
          </ul>

          <h4 className="font-semibold text-primary mb-1">Takeaway</h4>
          <p>
            The workshop emphasized the importance of being technically skilled and digitally
            present. It left participants with a deeper understanding of how to leverage LinkedIn
            for career growth and networking.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Personality Development cum Communication Skill Enhancement Workshop",
      date: "November 2025",
      venue: "FN and FE Rooms",
      image: "events/pdcse.jpg",
      description: (
        <div className="space-y-4 text-muted-foreground">
          <h4 className="font-semibold text-primary mb-1">Overview</h4>
          <p>
            The Personality Development cum Communication Skill Enhancement (PDCSE)
            Workshop was designed to help students refine their public speaking, writing, and
            teamwork skills. It included four interactive modules — Group Discussion, Debate,
            Essay Writing, and Extempore — each encouraging clarity, confidence, and creativity.
          </p>

          <h4 className="font-semibold text-primary mb-1">Highlights</h4>
          <p>
            With participation from over 150 students, the workshop fostered a positive learning
            environment that balanced competition and collaboration. Each round tested
            analytical thinking, articulation, and confidence under pressure, helping participants
            build communication skills vital for professional success.
          </p>

          <h4 className="font-semibold text-primary mb-1">Winners</h4>
          <ul className="list-disc list-inside">
            <li><strong>Essay Writing (English):</strong> Ankita Agarwal (20246025), Anshuman Singh (20247014)</li>
            <li><strong>Essay Writing (Hindi):</strong> Pratiksha Khobare (20246080), Harshit (20246065), Gauransh Mishra (20236060)</li>
            <li><strong>Debate (English):</strong> Abhigyan Shukla (20246002), Yatin Sai Chaitanya (20246163), M. Srikara Badrinath (20246090)</li>
            <li><strong>Debate (Hindi):</strong> Pratiksha Khobare, Harshit, Gauransh Mishra</li>
            <li><strong>Group Discussion (English):</strong> Saumya Gupta (20247045), Parth Singh (20247034)</li>
            <li><strong>Group Discussion (Hindi):</strong> Khushi Singh (20246082), Shubham Saini (20247049)</li>
            <li><strong>Extempore (English):</strong> Anshu Raj (20246031), Anuj Parihar (20247015)</li>
            <li><strong>Extempore (Hindi):</strong> Gauransh Mishra (20246060)</li>
          </ul>

          <h4 className="font-semibold text-primary mb-1">Takeaway</h4>
          <p>
            The workshop successfully bridged the gap between technical proficiency and
            communication excellence, preparing students for interviews, leadership, and
            teamwork scenarios in their careers.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Industrial Visits",
      date: "March 2025",
      venue: "SSE Naini & Veekay Connectors Pvt. Ltd.",
      image: "events/industrial.jpg",
      description: (
        <div className="space-y-4 text-muted-foreground">
          <h4 className="font-semibold text-primary mb-1">Overview</h4>
          <p>
            Industrial visits are an integral part of MechaPEF’s efforts to connect classroom learning
            with real-world applications. The 2025 industrial tours offered Mechanical and PIE
            students direct exposure to large-scale manufacturing environments.
          </p>

          <h4 className="font-semibold text-primary mb-1">Highlights</h4>
          <p>
            Students visited Shirdi Sai Electricals Ltd. (SSE), Naini, and Veekay Connectors Pvt. Ltd.,
            witnessing live production of power transformers and precision components. They
            interacted with industry engineers, learning about quality assurance, assembly
            processes, and automation systems.
          </p>

          <h4 className="font-semibold text-primary mb-1">Takeaway</h4>
          <p>
            The visits enhanced students’ understanding of manufacturing workflows, safety
            protocols, and sustainable practices, helping them appreciate how academic concepts
            translate into practical engineering challenges.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Design Dynamo 2K25",
      date: "June 2025",
      venue: "Online",
      image: "events/design.jpg",
      description: (
        <div className="space-y-4 text-muted-foreground">
          <h4 className="font-semibold text-primary mb-1">Overview</h4>
          <p>
            Design Dynamo 2K25 was a technical design competition focused on enhancing CAD
            proficiency among Mechanical and Production Engineering students. It encouraged
            problem-solving and creative visualization through practical design tasks.
          </p>

          <h4 className="font-semibold text-primary mb-1">Highlights</h4>
          <p>
            The event had two rounds — a 2D drafting and visualization task on AutoCAD, followed
            by a 3D modeling challenge emphasizing assembly logic and mechanical fitment.
            Participants demonstrated strong fundamentals, precision, and creativity in their
            submissions.
          </p>

          <h4 className="font-semibold text-primary mb-1">Winners</h4>
          <ul className="list-disc list-inside">
            <li><strong>1st Place:</strong> Team Solid Sketchers (Yatin Sai Chaitanya & Vanshika Gola)</li>
            <li><strong>2nd Place:</strong> Team CADers (Daksh Kumar Verma & Rajendra Piri)</li>
            <li><strong>3rd Place:</strong> Team Teammates (Aditya & Aditi Singh)</li>
          </ul>

          <h4 className="font-semibold text-primary mb-1">Takeaway</h4>
          <p>
            The competition bridged academic theory and industry-oriented design thinking,
            motivating students to strengthen their CAD skills for future professional applications.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Path Spell 2025",
      date: "August 2025",
      venue: "NLHC",
      image: "events/pathspell.jpg",
      description: (
        <div className="space-y-4 text-muted-foreground">
          <h4 className="font-semibold text-primary mb-1">Overview</h4>
          <p>
            Path Spell 2025 was a comprehensive guidance and mentorship session focusing on
            placements, career clarity, and professional growth. The event aimed to help students
            bridge the transition from academics to careers through real-life experiences shared by
            distinguished alumni.
          </p>

          <h4 className="font-semibold text-primary mb-1">Highlights</h4>
          <p>
            The session featured Mr. Raj Krishna Jha (ME ’18, UPSC AIR 8) as the chief speaker,
            whose inspiring journey motivated students to pursue excellence with discipline and
            purpose. Alumni from diverse domains — Prashant Gupta, Yash Sahu, Anupam Singh,
            and Moupiya Saha — shared valuable insights on placements, internships, and
            professional mindset.
          </p>

          <h4 className="font-semibold text-primary mb-1">Takeaway</h4>
          <p>
            The event concluded as an inspiring platform of shared experiences, guiding students
            to approach their future with confidence, preparedness, and purpose.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: "Annual Departmental Meet 2025",
      date: "October 2025",
      venue: "MP Hall",
      image: "events/dep29.jpg",
      description: (
        <div className="space-y-4 text-muted-foreground">
          <h4 className="font-semibold text-primary mb-1">Overview</h4>
          <p>
            The Mechanical Engineering Department, MNNIT Allahabad, hosted its much-awaited{" "}
            <strong>Departmental Meet 2025</strong> — a day dedicated to welcoming the freshers into the
            rich legacy, values, and vibrant culture of the department. The event was a perfect blend of
            tradition, inspiration, and celebration, uniting students and faculty alike.
          </p>

          <h4 className="font-semibold text-primary mb-1">Highlights</h4>
          <p>
            The celebration began with <strong>Deep Prajwalan</strong> and <strong>Saraswati Vandana</strong>,
            invoking the spirit of knowledge and tradition. It was followed by inspiring addresses from{" "}
            <strong>Prof. Mukul Shukla</strong> (Head, MED), <strong>Dr. Rahul Dev</strong> (Convener, DUGC, MED),
            and other esteemed faculty members, who introduced students to the department’s curriculum,
            research avenues, and academic ethos.
          </p>
          <p>
            Beyond formal proceedings, the event transformed into a vibrant showcase of creativity and
            energy. Students participated enthusiastically in{" "}
            <strong>solo and group performances</strong>, the spirited{" "}
            <strong>Mr. &amp; Miss Mechanical contest</strong>, and an impressive{" "}
            <strong>Project Showcasing</strong> session that reflected innovation and teamwork. The{" "}
            <strong>“Capture the Moment” photography contest📸</strong> beautifully portrayed the essence of
            Mechanical life at MNNIT.
          </p>

          <h4 className="font-semibold text-primary mb-1">Winners</h4>
          <ul className="list-disc list-inside">
            <li><strong>Mr. Mechanical:</strong> Adarsh Kumar Singh (20256012)</li>
            <li><strong>Ms. Mechanical:</strong> Shreya Mishra (20256132)</li>
            <li><strong>Solo Performances:</strong> Karanjeet Mipun (20256071), Maahika Verma (20256078)</li>
            <li><strong>Group Performance:</strong> Tanishka Singh & Team</li>
            <li><strong>Project Showcasing:</strong> Aravind S. Rao – Car Lighting System; Anshul Kumar Meena – Line Follower Bot; Harsh Choudhary – Next-Gen Cleaning Website</li>
            <li><strong>Capture the Moment:</strong> Divyaraj Rastogi (20256054), Nishita Choudhary (20256092), Kartik Kumawat (20256072)</li>
            <li><strong>Special Mentions:</strong> Pragya Singh (20256100), Ridham Gupta (20257034)</li>
          </ul>

          <h4 className="font-semibold text-primary mb-1">Takeaway</h4>
          <p>
            The event concluded on a high note with an engaging <strong>DJ Night</strong>, wrapping up a day
            that truly reflected the energy, unity, and pride of the Mechanical fraternity. Its success
            stands as a testament to the collaborative efforts of the faculty, seniors, and the{" "}
            <strong>MechaPEF</strong> organizing team, who continue to foster the spirit of togetherness,
            learning, and inspiration within the department.
          </p>
        </div>
      ),

    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mb-8 animate-fade-in">Our Events</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            A glimpse into the flagship events, workshops, and celebrations that define the MechaPEF experience.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="card-mechapef cursor-pointer group animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {event.venue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-card border-2 border-primary rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">{selectedEvent.title}</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                {selectedEvent.date}
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                {selectedEvent.venue}
              </div>
            </div>
            <div className="text-lg leading-relaxed">{selectedEvent.description}</div>
            <button onClick={() => setSelectedEvent(null)} className="btn-hero w-full mt-6">
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Events;
