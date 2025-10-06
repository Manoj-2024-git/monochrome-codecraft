import { Card } from "@/components/ui/card";
import { Code, Database, Palette, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "C++", "JavaScript", "Dart"],
    },
    {
      icon: Database,
      title: "Data Science & ML",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "Langchain",
        "NLTK",
        "RAG",
        "Tableau",
        "Power BI",
      ],
    },
    {
      icon: Palette,
      title: "Web & Mobile",
      skills: [
        "HTML/CSS",
        "MERN Stack",
        "Flutter",
        "Flask",
        "REST APIs",
      ],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technology stack and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 glass-effect transition-smooth hover:scale-105 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <category.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-secondary/20 rounded-full transition-smooth hover:bg-secondary/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 glass-effect">
            <h3 className="text-lg font-heading font-semibold mb-3">
              Additional Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
              {[
                "Git",
                "GitHub",
                "Docker",
                "AWS",
                "Google Cloud",
                "Prefect",
                "CCNA",
                "Cybersecurity",
                "Blockchain",
                "IoT",
                "Computer Vision",
                "NLP",
              ].map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-accent/20 rounded-full transition-smooth hover:bg-accent/40"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
