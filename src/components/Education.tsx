import { Card } from "@/components/ui/card";
import { GraduationCap, Award, ExternalLink, School } from "lucide-react";

const Education = () => {
  const schools = [
    {
      name: "Sri Vignesh Vidhyalaya Mat. Hr. Sec. School",
      location: "Chrompet, Chennai",
      degree: "Higher Secondary (XII)",
      period: "2020 - 2022",
      percentage: "94.5%"
    },
    {
      name: "Sri Vignesh Vidhyalaya Mat. Hr. Sec. School",
      location: "Chrompet, Chennai",
      degree: "Secondary (X)",
      period: "2019 - 2020",
      percentage: "95.8%"
    }
  ];

  const certifications = [
    {
      category: "NPTEL (Honors)",
      courses: [
        "Database Management System",
        "Deep Learning",
        "Computer Vision",
        "Blockchain & its Applications",
        "Natural Language Processing",
        "Ethical Hacking",
        "Machine Learning",
        "Software Testing",
        "Internet of Things",
      ],
    },
    {
      category: "Coursera",
      courses: [
        "Data Science (IBM)",
        "Deep Learning AI (TensorFlow Developer)",
        "Git & GitHub",
        "Google Cloud Computing Fundamentals",
      ],
    },
    {
      category: "Other Certifications",
      courses: [
        "CCNA Modules 1–3",
        "Introduction to Cybersecurity",
        "Python Essentials 1-2 (Cisco)",
        "AI, ML & Data Analytics (NASSCOM)",
        "Cyber Security and Ethical Hacking (Quantum)",
        "C/C++ Training (IIT Bombay)",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <Card className="p-8 gradient-card transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group glow-effect">
            <div className="flex items-start gap-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 flex-shrink-0 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12">
                <GraduationCap className="text-primary transition-transform duration-500" size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-lg text-muted-foreground mb-1 transition-all duration-300 group-hover:text-foreground">
                  Sri Sairam Engineering College, West Tambaram, Chennai
                </p>
                <p className="text-sm text-muted-foreground mb-4 transition-all duration-300 group-hover:text-primary">
                  Graduating March 2026
                </p>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                  <span className="text-2xl font-bold text-primary">
                    8.74 / 10.0
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    CGPA
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {schools.map((school, index) => (
            <Card 
              key={index} 
              className="p-6 gradient-card transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:shadow-primary/20 group animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12">
                  <School className="text-primary transition-transform duration-500" size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-heading font-bold mb-1 transition-colors duration-300 group-hover:text-primary">
                    {school.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 transition-all duration-300 group-hover:text-foreground">
                    {school.location}
                  </p>
                  <p className="text-sm font-semibold text-foreground mb-2 transition-all duration-300 group-hover:text-primary">
                    {school.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="transition-all duration-300 group-hover:text-primary">{school.period}</span>
                    <span>•</span>
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-md transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                      <span className="font-bold text-primary">
                        {school.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href="https://drive.google.com/drive/folders/1EnIqMWUk_luYC-ye7aqnMtOmcyKdmOiO?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 glass-effect transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Award className="text-primary transition-transform duration-300 group-hover:rotate-12" size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {cert.category}
                  </h3>
                  <ul className="space-y-2">
                    {cert.courses.map((course, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start group-hover:text-foreground transition-colors duration-300"
                      >
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-primary rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    <ExternalLink size={12} />
                    <span>View certificates</span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
