import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, Code, Database, Brain, Award, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Secure University Portal System",
      description: "Engineered secure user authentication using JWT and bcrypt with role-based login for students and admins. Implemented a dynamic MERN stack dashboard for real-time application status tracking.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/shravyashetty04/University-Application-Status-Tracker",
      highlights: ["90% faster authentication", "Role-based access control", "Real-time updates"]
    },
    {
      title: "YouTube Spam Comment Detection",
      description: "Built a spam detection system using NLP achieving 90% accuracy in comment classification, significantly improving content moderation efficiency.",
      tech: ["Python", "Scikit-learn", "NLP", "HTML", "CSS"],
      github: "https://github.com/shravyashetty04/youtube-spam-detector",
      highlights: ["90% accuracy", "NLP-powered", "Real-time detection"]
    },
    {
      title: "Crop Yield Prediction Tool",
      description: "Improved ML model to predict crop yield using rainfall, temperature, and pesticide data with preprocessed multi-source datasets.",
      tech: ["Python", "Pandas", "Scikit-learn", "ML"],
      github: "https://github.com/shravyashetty04/crop.yield",
      highlights: ["Data preprocessing", "Multi-source integration", "Predictive analytics"]
    }
  ];

  const skills = {
    "Programming": [
      { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" }
    ],
    "Web Development": [
      { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
      { name: "React.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" }
    ],
    "Databases": [
      { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" }
    ],
    "Data Science & ML": [
      { name: "NumPy", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
    ],
    "Tools": [
      { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      { name: "Github", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
      { name: "Tableau", icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
      { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" }
    ]
  };

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} min-h-screen relative overflow-hidden transition-colors duration-500`}>
      {/* Animated gradient background */}
      <div 
        className={`fixed inset-0 ${isDark ? 'opacity-30' : 'opacity-20'} pointer-events-none transition-opacity duration-500`}
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${isDark ? 'rgba(124, 58, 237, 0.15)' : 'rgba(147, 51, 234, 0.2)'}, transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-purple-900/20' : 'border-purple-200'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SS
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors duration-300`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-purple-900/30 border-purple-500/50' : 'bg-purple-100 border-purple-300'} border hover:scale-110 transition-all duration-300`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-purple-900/30 border-purple-500/50' : 'bg-purple-100 border-purple-300'} border`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-40 ${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-lg md:hidden transition-colors duration-500`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors`}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveSection(item.toLowerCase());
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <span className={`px-4 py-2 ${isDark ? 'bg-purple-900/30 border-purple-500/50' : 'bg-purple-100 border-purple-300'} border rounded-full text-sm transition-colors duration-500`}>
              Available for opportunities
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Shravya Shetty
          </h1>
          
          <h2 className={`text-xl md:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6 transition-colors duration-500`}>
            Software Engineer | MERN Stack Developer
          </h2>
          
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-2xl mx-auto transition-colors duration-500`}>
            Result-oriented engineer with expertise in building scalable applications and delivering data-driven solutions. 
            Passionate about creating impactful technology that solves real-world problems.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com/shravyashetty04" target="_blank" rel="noopener noreferrer" 
               className={`p-3 ${isDark ? 'bg-purple-900/30 border-purple-500/50' : 'bg-purple-100 border-purple-300'} border rounded-lg ${isDark ? 'hover:bg-purple-900/50' : 'hover:bg-purple-200'} transition-all duration-300 hover:scale-110`}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/shravya-shetty-064079244" target="_blank" rel="noopener noreferrer"
               className={`p-3 ${isDark ? 'bg-purple-900/30 border-purple-500/50' : 'bg-purple-100 border-purple-300'} border rounded-lg ${isDark ? 'hover:bg-purple-900/50' : 'hover:bg-purple-200'} transition-all duration-300 hover:scale-110`}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:shravyashetty415@gmail.com"
               className={`p-3 ${isDark ? 'bg-purple-900/30 border-purple-500/50' : 'bg-purple-100 border-purple-300'} border rounded-lg ${isDark ? 'hover:bg-purple-900/50' : 'hover:bg-purple-200'} transition-all duration-300 hover:scale-110`}>
              <Mail size={24} />
            </a>
          </div>

          <a href="#projects" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 text-white">
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-8 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 shadow-lg`}>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold">Bachelor of Engineering</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Global Academy of Technology, Bengaluru</p>
                  <p className="text-purple-400">CGPA: 8.94 | 2022-2026</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">2nd PUC in PCMS</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Sri Venkatramana PU College, Udupi</p>
                  <p className="text-purple-400">95% | 2020-2022</p>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-8 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 shadow-lg`}>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Award className="mr-3 mt-1 text-purple-400 flex-shrink-0" size={20} />
                  <p>Web Development using HTML and CSS - Infosys Springboard</p>
                </div>
                <div className="flex items-start">
                  <Award className="mr-3 mt-1 text-purple-400 flex-shrink-0" size={20} />
                  <p>Data Science, Machine Learning, and NLP Bootcamp - Udemy</p>
                </div>
              </div>
            </div>

            <div className={`md:col-span-2 ${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-8 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 shadow-lg`}>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Community Involvement</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Inspire Club - Active Member</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Organized and led technical workshops and community-building events</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Adamya Chetana - Volunteer</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Participated in food distribution drives to underserved communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects & Achievements
          </h2>
          
          {/* LeetCode Tracker */}
          <div className={`mb-12 ${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-8 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 shadow-lg`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">LeetCode Progress</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                  Track my coding journey and problem-solving skills
                </p>
                <a 
                  href="https://leetcode.com/u/shravyaaaaa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                  View Profile
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className={`${isDark ? 'bg-purple-900/20' : 'bg-purple-50'} p-4 rounded-lg`}>
                  <div className="text-lg font-bold text-green-400">Easy</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Problems</div>
                </div>
                <div className={`${isDark ? 'bg-purple-900/20' : 'bg-purple-50'} p-4 rounded-lg`}>
                  <div className="text-lg font-bold text-yellow-400">Medium</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Problems</div>
                </div>
                <div className={`${isDark ? 'bg-purple-900/20' : 'bg-purple-50'} p-4 rounded-lg`}>
                  <div className="text-lg font-bold text-red-400">Hard</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Problems</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects Title */}
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-8 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 hover:transform hover:scale-105 shadow-lg`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className={`px-3 py-1 ${isDark ? 'bg-purple-900/30 border-purple-500/50' : 'bg-purple-100 border-purple-300'} border rounded-full text-sm`}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 ${isDark ? 'bg-pink-900/30 border-pink-500/50' : 'bg-pink-100 border-pink-300'} border rounded-full text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-4 text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tech Stack I Use
            </h3>
            <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              Tools and technologies I work with to ship meaningful products
            </p>
            
            {/* Scrolling Tech Stack */}
            <div className="relative overflow-hidden py-8">
              <div className="flex animate-scroll-fast whitespace-nowrap">
                {[...Object.values(skills).flat(), ...Object.values(skills).flat(), ...Object.values(skills).flat()].map((tech, i) => (
                  <div
                    key={i}
                    className={`flex-shrink-0 mx-3 px-6 py-4 ${isDark ? 'bg-purple-900/20 border-purple-500/40' : 'bg-white border-purple-300'} border rounded-xl inline-flex items-center justify-center shadow-lg hover:scale-110 transition-transform min-w-[160px]`}
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-8 h-8 object-contain flex-shrink-0"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="ml-3 text-lg font-semibold whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div 
                key={index}
                className={`${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-6 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  {category.includes('Programming') && <Code className="mr-2 text-purple-400" />}
                  {category.includes('Database') && <Database className="mr-2 text-purple-400" />}
                  {category.includes('Data Science') && <Brain className="mr-2 text-purple-400" />}
                  <h3 className="text-xl font-bold text-purple-400">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className={`px-3 py-2 ${isDark ? 'bg-purple-900/30 border-purple-500/50 hover:bg-purple-900/50' : 'bg-purple-100 border-purple-300 hover:bg-purple-200'} border rounded-full text-sm transition-colors flex items-center`}>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-4 h-4 mr-2"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll-fast {
          animation: scroll 5s linear infinite;
        }
        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Call to Action */}
          <div className="mb-20">
            <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              If you've read this far, you might be interested in what I do.
            </p>
            <a 
              href="mailto:shravyashetty415@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span className="mr-2 text-2xl">👋</span>
              Book a Free Call
            </a>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-12 transition-colors duration-500`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:shravyashetty415@gmail.com" className={`${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-6 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 hover:transform hover:scale-105 shadow-lg`}>
              <Mail className="mx-auto mb-4 text-purple-400" size={40} />
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>shravyashetty415@gmail.com</p>
            </a>
            
            <a href="tel:+918951371623" className={`${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-6 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 hover:transform hover:scale-105 shadow-lg`}>
              <Phone className="mx-auto mb-4 text-purple-400" size={40} />
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>+91-89513 71623</p>
            </a>
            
            <a href="https://linkedin.com/in/shravya-shetty-064079244" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'bg-purple-900/10 border-purple-500/30' : 'bg-white border-purple-200'} border rounded-xl p-6 ${isDark ? 'hover:border-purple-500/60' : 'hover:border-purple-400'} transition-all duration-300 hover:transform hover:scale-105 shadow-lg`}>
              <Linkedin className="mx-auto mb-4 text-purple-400" size={40} />
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Connect on LinkedIn</p>
            </a>
          </div>

          <a href="mailto:shravyashetty415@gmail.com" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 text-white">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDark ? 'border-purple-900/20' : 'border-purple-200'} py-8 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>© 2025 Shravya Shetty. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}