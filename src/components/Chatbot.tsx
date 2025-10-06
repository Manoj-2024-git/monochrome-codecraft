import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! I'm Manoj's AI assistant. Ask me anything about his experience, skills, or projects!", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const resumeData = {
    skills: "Python, Java, C, C++, TensorFlow, PyTorch, Scikit-Learn, Langchain, NLTK, RAG, Tableau, Power BI, HTML, CSS, JavaScript, MERN Stack, Flutter, Dart, Flask, SQL (PostgreSQL, MySQL), MongoDB",
    internships: "Data Science Intern at EPIC Groups (June-July 2025) and Web Development Intern at International Campus Masters (June-July 2024)",
    projects: "Phonetic Health Assessment System, AI Agent Management System, Football Match Analytics Engine, SkinScan AI",
    education: "Bachelor of Engineering in Computer Science from Sri Sairam Engineering College with CGPA 8.74/10.0, graduating March 2026. Completed higher secondary from Sri Vignesh Vidhyalaya with 94.5% and secondary with 95.8%",
    contact: "Email: manojindira2004@gmail.com, Phone: 7305253038",
    certifications: "NPTEL courses in DBMS, Deep Learning, Computer Vision, Blockchain, NLP, Ethical Hacking, ML, Software Testing, IoT. Coursera certifications in Data Science, Deep Learning AI, Git & GitHub, Google Cloud Computing"
  };

  const getResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("skill") || q.includes("technology") || q.includes("language")) {
      return `Manoj's technical skills include: ${resumeData.skills}`;
    } else if (q.includes("internship") || q.includes("experience") || q.includes("work")) {
      return `Here are Manoj's internships: ${resumeData.internships}`;
    } else if (q.includes("project")) {
      return `Manoj has worked on several projects: ${resumeData.projects}`;
    } else if (q.includes("education") || q.includes("college") || q.includes("school") || q.includes("degree")) {
      return `Education background: ${resumeData.education}`;
    } else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach")) {
      return `You can contact Manoj at: ${resumeData.contact}`;
    } else if (q.includes("certification") || q.includes("course")) {
      return `Manoj has completed: ${resumeData.certifications}`;
    } else if (q.includes("hi") || q.includes("hello") || q.includes("hey")) {
      return "Hello! How can I help you learn more about Manoj's experience and qualifications?";
    } else {
      return "I can help you with information about Manoj's skills, projects, internships, education, certifications, or contact details. What would you like to know?";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    const botResponse = { text: getResponse(input), isUser: false };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl glow-effect z-50 transition-all duration-500 hover:scale-110 hover:rotate-12"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="h-6 w-6 transition-transform duration-300 animate-pulse" />
        )}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-2xl glow-effect z-50 flex flex-col animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <MessageCircle className="h-6 w-6 animate-pulse" />
            <div>
              <h3 className="font-bold">AI Assistant</h3>
              <p className="text-xs opacity-90">Ask about Manoj's resume</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"} animate-slide-up`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    message.isUser
                      ? "bg-primary text-primary-foreground ml-4"
                      : "bg-card text-card-foreground shadow-md mr-4"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="transition-all duration-300 focus:scale-[1.02]"
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                className="transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
