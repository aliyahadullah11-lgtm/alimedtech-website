
import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Float, Stars } from '@react-three/drei';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Cpu, 
  Database, 
  Cloud, 
  Zap, 
  ShieldCheck, 
  Rocket, 
  BarChart3, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Brain,
  Activity,
  Layers,
  Megaphone,
  Search,
  Share2,
  MousePointerClick
} from 'lucide-react';
import Navbar from './components/Navbar';
import Logo3D from './components/Logo3D';
import BackgroundScene from './components/BackgroundScene';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const services = [
    { title: 'AI & Automation', desc: 'Implementing intelligent algorithms and automated workflows to revolutionize efficiency.', icon: <Brain /> },
    { title: 'Healthcare Software', desc: 'Building secure, HIPAA-compliant digital solutions for modern healthcare providers.', icon: <Activity /> },
    { title: '.NET Development', desc: 'Specialized expertise in .NET (formerly .NET Core) for robust enterprise-grade applications.', icon: <Layers /> },
    { title: 'Digital Marketing', desc: 'Strategic online growth through data-driven campaigns and brand positioning.', icon: <Megaphone /> },
    { title: 'SEO', desc: 'Search Engine Optimization to boost organic visibility and drive high-quality traffic.', icon: <Search /> },
    { title: 'Social Media Marketing', desc: 'Engaging content strategies to build communities across all major social platforms.', icon: <Share2 /> },
    { title: 'Ads & Paid Media', desc: 'High-ROI management of Google Ads and Facebook Ads to accelerate growth.', icon: <MousePointerClick /> },
    { title: 'Web Development', desc: 'Crafting responsive, high-performance web applications using modern frameworks.', icon: <Code2 /> },
    { title: 'Mobile Solutions', desc: 'Developing native and cross-platform mobile apps for iOS and Android.', icon: <Smartphone /> },
    { title: 'Enterprise Systems', desc: 'Building robust software infrastructures for complex business operations.', icon: <Cpu /> },
    { title: 'Cloud Infrastructure', desc: 'Designing scalable cloud architecture for seamless deployments.', icon: <Cloud /> },
    { title: 'API Integration', desc: 'Seamlessly connecting services with high-security RESTful & GraphQL APIs.', icon: <Database /> },
    { title: 'Security Audits', desc: 'Ensuring your digital assets are protected with next-gen security measures.', icon: <ShieldCheck /> },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* 3D Background - Persistent across sections */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
          <Suspense fallback={null}>
            <BackgroundScene />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent text-glow">
              Engineering Scalable Software for the Digital Future
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0">
              AliMedTech Solutions delivers modern, secure, and scalable software solutions tailored for your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 text-center">
                Get in Touch
              </a>
              <a href="#services" className="px-8 py-4 glass hover:bg-white/10 rounded-full font-bold transition-all transform hover:scale-105 text-center">
                View Services
              </a>
            </div>
          </motion.div>

          <div className="hidden lg:block h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <Logo3D size={1.2} showText={false} />
            </Canvas>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
              <h2 className="text-4xl font-bold mb-6 text-white">Innovation Through Precision</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                AliMedTech Solutions is a modern software engineering company focused on building scalable, secure, and high-performance digital products.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We follow clean architecture, modern development practices, and future-ready technologies to help businesses grow in an increasingly digital landscape.
              </p>
            </motion.div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { label: 'Clean Code', icon: <Code2 className="text-blue-400" /> },
                { label: 'Scalable Ops', icon: <Rocket className="text-purple-400" /> },
                { label: 'Architecture', icon: <Cpu className="text-blue-400" /> },
                { label: 'Global Reach', icon: <Zap className="text-purple-400" /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-xl">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">Our Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-grow">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="technologies" className="relative py-32 bg-slate-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Powering the Future With</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {['React.js', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Git', 'TypeScript', '.NET', 'Google Ads', 'Meta Ads'].map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-2xl font-heading font-medium tracking-widest text-slate-500 hover:text-blue-400 cursor-default transition-colors"
              >
                {tech.toUpperCase()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Why AliMedTech Solutions?</h2>
            <div className="space-y-12">
              {[
                { title: 'Clean & Scalable Code', desc: 'We write future-proof code that grows with your business needs.' },
                { title: 'Modern Architecture', desc: 'Utilizing microservices and serverless patterns for maximum efficiency.' },
                { title: 'Secure Development', desc: 'Security is not an afterthought; it is built into every layer of our SDLC.' },
                { title: 'Performance First', desc: 'Optimizing for speed and reliability from day one.' },
                { title: 'Startup-Friendly', desc: 'Flexible, agile, and focused on delivering high value quickly.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full glass flex items-center justify-center font-bold text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-transparent to-slate-950">
        <div className="container mx-auto px-6">
          <div className="glass max-w-5xl mx-auto rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-8">Ready to Build Something Extraordinary?</h2>
                <p className="text-slate-400 mb-8 text-lg">
                  Let's discuss your next project. Our team is ready to transform your ideas into scalable reality.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="p-3 glass rounded-xl"><Mail className="w-5 h-5" /></div>
                    <span>hello@alimedtech.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="p-3 glass rounded-xl"><BarChart3 className="w-5 h-5" /></div>
                    <span>Available for Projects 2024-2025</span>
                  </div>
                </div>
                
                <div className="mt-12 flex gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="p-3 glass rounded-xl hover:bg-white/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully!"); }}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none transition-all"
                  />
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
              <span className="text-blue-400 font-bold">A</span>
            </div>
          </div>
          <p className="text-slate-500">&copy; 2024 AliMedTech Solutions. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-8 text-sm text-slate-600">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
