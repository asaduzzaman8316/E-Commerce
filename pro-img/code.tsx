"use client";

import { useState } from "react";
import { Button } from "/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Briefcase,
  Code,
  Palette,
  Database,
  Cloud,
  Menu,
  X,
  ArrowRight,
  Send,
  Download,
} from "lucide-react";

export default function PortfolioWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      category: "Full Stack",
    },
    {
      title: "Task Management App",
      description: "Productivity application with real-time collaboration features",
      category: "Web App",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio design with modern UI/UX principles",
      category: "Web Design",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing business metrics",
      category: "Data Visualization",
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      category: "Mobile Development",
    },
    {
      title: "API Integration Service",
      description: "Middleware for seamless third-party API integrations",
      category: "Backend Development",
    },
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, items: ["React", "Vue", "Angular", "TypeScript"] },
    { name: "UI/UX Design", icon: Palette, items: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS"] },
    { name: "Backend Development", icon: Database, items: ["Node.js", "Python", "Ruby", "PHP"] },
    { name: "Cloud & DevOps", icon: Cloud, items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  ];

  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Led frontend development for multiple client projects using React and TypeScript"
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2020 - 2022",
      description: "Developed end-to-end web applications with modern frameworks and technologies"
    },
    {
      role: "UI/UX Designer",
      company: "Creative Minds Agency",
      period: "2018 - 2020",
      description: "Created user-centered designs and prototypes for various digital products"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">John.Doe</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className={`text-foreground transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary font-medium' : ''}`}
                  onClick={() => setActiveSection('home')}
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className={`text-foreground transition-colors hover:text-primary ${activeSection === 'projects' ? 'text-primary font-medium' : ''}`}
                  onClick={() => setActiveSection('projects')}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className={`text-foreground transition-colors hover:text-primary ${activeSection === 'skills' ? 'text-primary font-medium' : ''}`}
                  onClick={() => setActiveSection('skills')}
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className={`text-foreground transition-colors hover:text-primary ${activeSection === 'experience' ? 'text-primary font-medium' : ''}`}
                  onClick={() => setActiveSection('experience')}
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className={`text-foreground transition-colors hover:text-primary ${activeSection === 'contact' ? 'text-primary font-medium' : ''}`}
                  onClick={() => setActiveSection('contact')}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="space-y-2 px-2 pt-2">
                <a
                  href="#home"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md"
                  onClick={() => {setActiveSection('home'); setIsMenuOpen(false);}}
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md"
                  onClick={() => {setActiveSection('projects'); setIsMenuOpen(false);}}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md"
                  onClick={() => {setActiveSection('skills'); setIsMenuOpen(false);}}
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md"
                  onClick={() => {setActiveSection('experience'); setIsMenuOpen(false);}}
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md"
                  onClick={() => {setActiveSection('contact'); setIsMenuOpen(false);}}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I create beautiful, functional, and user-centered digital experiences. 
                With over 5 years of experience in web development and design, 
                I bring ideas to life through code and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-primary/10 rounded-full flex items-center justify-center">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/300x300?prompt=Professional%20headshot%20of%20a%20software%20developer%20with%20a%20friendly%20smile%20and%20modern%20style&id=8be9c2b5-c44f-462d-b7dc-25352654364a" 
                    alt="Professional headshot of John Doe, a software developer with a friendly smile and modern style" 
                    className="w-60 h-60 sm:w-72 sm:h-72 rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Available for freelance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://placeholder-image-service.onrender.com/image/400x300?prompt=Modern%20${encodeURIComponent(project.category)}%20project%20showcasing%20clean%20design%20and%20functionality&id=project-${index}`} 
                    alt={`Screenshot of ${project.title} project showing clean interface and modern design`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I work with a wide range of technologies and tools to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{skill.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Work Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the roles I've taken on throughout my career
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="flex mb-12">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  {index < experience.length - 1 && (
                    <div className="w-1 bg-border h-full my-2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span className="mr-4">{exp.company}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-accent rounded-lg text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-2 bg-accent rounded-lg text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-2 bg-accent rounded-lg text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Subject of your message" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-primary">John.Doe</h3>
              <p className="text-muted-foreground">Full Stack Developer & UI/UX Designer</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
