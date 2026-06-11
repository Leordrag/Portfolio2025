import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Particles from './components/Particles';
// import PixelTransition from './components/PixelTransition'; // Not used in current layout
import LogoLoop from './components/LogoLoop';
import LightRays from './components/LightRays';
import GlareHover from './components/GlareHover'
import { Routes, Route } from "react-router-dom"; 
import Project1 from "./pages_projets/project1"; 
import Project2 from "./pages_projets/project2"; 
import Project3 from "./pages_projets/project3"; 
import Project4 from "./pages_projets/project4"; 
import Project5 from "./pages_projets/project5"; 
import Project6 from "./pages_projets/project6"; 
import Project7 from "./pages_projets/project7"; 
import Project8 from "./pages_projets/project8";
import Project9 from "./pages_projets/project9";
import Project10 from "./pages_projets/project10";
import Project11 from "./pages_projets/project11";

const Home: React.FC = () => {
  const [lang, setLang] = useState<"en" | "fr">("en");

  const translations = {
    fr: {
      header_title: "Portfolio Radolaza Leondaris",
      aboutText: `Bonjour, je m'appelle Radolaza.
                💼
                Ingénieur Réseaux de formation avec 2 ans d'expérience chez Orange, j'y ai découvert ma véritable passion pour la cybersécurité. 
                C'est en travaillant sur des infrastructures critiques que j'ai réalisé à quel point le moindre détail peut être décisif pour la sécurité d'un système.
                Actuellement en Master Cybersécurité, je suis orienté Blue Team avec une forte aspiration pour la Gouvernance (GRC).
                🌎 
                Passionné par la défense des systèmes et la mise en conformité stratégique.
                `,
      projectTitles: [
        "Projet Nginx",
        "Projet Supervision",
        "Projet Sécurité des Réseaux & Pare-feu",
        "Airbnb Paris Project",
        "TheLook eCommerce Project",
        "Troisième place mondiale pour la compétition de robotique First Global Challenge 2020",
        "Elden Ring Optimisation via l'analyse de données",
        "Site web de ma startup HearMe",
        "Site web de ma startup TechCare",
        "PentestIT - Plugin WordPress de Cyber-Maturité",
        "Cyber Lab Interne - Infrastructure SOC & Pentest",
      ],
      certifications: [
        "CISCO CCNA",
        "CISCO Introduction to cybersecurity",
        "Google cloud cybersecurity certificate",
        "AWS Cloud practitioner",
        "DALF C1 (Français)",
        "Advanced level certificate (English)",
      ],
      achievements: [
        { platform: "Root-Me", detail: "Expert en exploitation et web" },
        { platform: "TryHackMe", detail: "Spécialisation SOC & Blue Team" },
      ],
      cert_title: "Mes Certifications",
      achieve_title: "Achevèment & Rankings",
      email_label: "Contactez-moi :",
      email: "radolazaleondaris@gmail.com",
      skills_title: "Compétences Techniques",
      skills: [
        { category: "SOC & Détection", items: ["SIEM (Wazuh, ELK Stack)", "EDR (Bitdefender)", "Sigma, YARA", "Qualification d’alertes", "Analyse de logs", "MITRE ATT&CK"] },
        { category: "Normes & Réglementations", items: ["NIS2", "ISO 27001", "EBIOS", "RGPD", "CIS"] },
        { category: "Réponse à Incident & SOAR", items: ["Playbooks (n8n, Ansible)", "Fiches réflexes", "Orchestration"] },
        { category: "Threat Hunting & CTI", items: ["Analyse de TTPs", "Extraction d’indicateurs", "Veille CVE", "Dark web monitoring"] },
        { category: "Scripting & Automatisation", items: ["Python, Bash, PowerShell", "Automatisation de contrôles", "AWS Lambda"] },
        { category: "Réseaux & Sécurité", items: ["Cisco, VLAN, VPN", "pfSense, SD-WAN", "Palo Alto/Stormshield"] },
        { category: "Systèmes", items: ["Linux", "Windows Server", "macOS"] },
      ],
    },
    en: {
      header_title: "Radolaza Leondaris Portfolio",
      aboutText: `Hi, I’m Radolaza.
                  💼
                  Formerly a Network Engineer with 2 years of experience at Orange, I discovered my true passion for cybersecurity there. 
                  Working on critical infrastructures made me realize how even the smallest detail can be decisive for system security.
                  Currently a Cybersecurity Master's student, I am Blue Team oriented with a strong focus on Governance, Risk, and Compliance (GRC).
                  🌎 
                  Passionate about defending systems and strategic security compliance.
                  `,
      projectTitles: [
        "Nginx Project",
        "Monitoring Project",
        "Network Security & Firewall Project",
        "Airbnb Paris Project",
        "TheLook eCommerce Project",
        "Third Place Worldwide in the First Global Challenge 2020 Robotics Competition",
        "Elden Ring Optimization via Data Analysis",
        "Website for my startup HearMe",
        "Website for my startup TechCare",
        "PentestIT - WordPress Cyber-Maturity Plugin",
        "Internal Cyber Lab - SOC & Pentest Infrastructure",
      ],
      certifications: [
        "CISCO CCNA",
        "CISCO Introduction to cybersecurity",
        "Google cloud cybersecurity certificate",
        "AWS Cloud practitioner",
        "DALF C1 (French)",
        "Advanced level certificate (English)",
      ],
      achievements: [
        { platform: "Root-Me", detail: "Expert in exploitation and web" },
        { platform: "TryHackMe", detail: "SOC & Blue Team specialization" },
      ],
      cert_title: "My Certifications",
      achieve_title: "Achievements & Rankings",
      email_label: "Contact me:",
      email: "radolazaleondaris@gmail.com",
      skills_title: "Technical Skills",
      skills: [
        { category: "SOC & Detection", items: ["SIEM (Wazuh, ELK Stack)", "EDR (Bitdefender)", "Sigma, YARA", "Alert qualification", "Log analysis", "MITRE ATT&CK"] },
        { category: "Standards & Regulations", items: ["NIS2", "ISO 27001", "EBIOS", "GDPR", "CIS"] },
        { category: "Incident Response & SOAR", items: ["Playbooks (n8n, Ansible)", "Response sheets", "Orchestration"] },
        { category: "Threat Hunting & CTI", items: ["TTPs analysis", "IOC extraction", "CVE monitoring", "Dark web monitoring"] },
        { category: "Scripting & Automation", items: ["Python, Bash, PowerShell", "Control automation", "AWS Lambda"] },
        { category: "Networks & Security", items: ["Cisco, VLAN, VPN", "pfSense, SD-WAN", "Palo Alto/Stormshield"] },
        { category: "Systems", items: ["Linux", "Windows Server", "macOS"] },
      ],
    },
  };

  const t = translations[lang];

  const projectImages = [
    '/img/project1.png',
    '/img/project2.png',
    '/img/project3.png',
    '/img/project4.png',
    '/img/project5.png',
    '/img/project6.png',
    '/img/project7.png',
    '/img/wip.png',
    '/img/wip.png',
    '/img/wip.png',
    '/img/wip.png',
  ];

  const demoItems = t.projectTitles.map((title, i) => ({
    link: `/project${i + 1}`,
    text: title,
    image: projectImages[i] || '/img/wip.png'
  }));

  const techLogos = [
    { src: "/icons/ansible.png", alt: "Ansible", href: "https://docs.ansible.com/" },
    { src: "/icons/c-gnu.png", alt: "C/C++", href: "https://gcc.gnu.org/" },
    { src: "/icons/ciscopt.png", alt: "Cisco Packet Tracer", href: "https://www.credly.com/badges/c2f28803-32d1-49fc-b09b-7dac27634f99/linked_in_profile" },
    { src: "/icons/docker.png", alt: "Docker", href: "https://www.docker.com/" },
    { src: "/icons/git.png", alt: "Git", href: "https://git-scm.com/" },
    { src: "/icons/github.png", alt: "GitHub", href: "https://github.com/" },
    { src: "/icons/gsheet.png", alt: "Google Sheets", href: "https://workspace.google.com/products/sheets/" },
    { src: "/icons/jenkins.png", alt: "Jenkins", href: "https://www.jenkins.io/" },
    { src: "/icons/JS.png", alt: "JavaScript", href: "https://www.javascript.com/" },
    { src: "/icons/jupnb.png", alt: "Jupyter Notebook", href: "https://jupyter.org/" },
    { src: "/icons/kali.png", alt: "Kali Linux", href: "https://www.kali.org/" },
    { src: "/icons/kubernetes.png", alt: "Kubernetes", href: "https://kubernetes.io/" },
    { src: "/icons/nginx.png", alt: "nginx", href: "https://nginx.org/" },
    { src: "/icons/o365.png", alt: "Office 365", href: "https://www.office.com/" },
    { src: "/icons/parrot.png", alt: "Parrot", href: "https://parrotsec.org/" },
    { src: "/icons/pfsense.png", alt: "pfSense", href: "https://www.pfsense.org/" },
    { src: "/icons/PHP.png", alt: "PHP", href: "https://www.php.net/" },
    { src: "/icons/powerbi.png", alt: "Power BI", href: "https://www.microsoft.com/fr-fr/power-platform/products/power-bi" },
    { src: "/icons/powershell.png", alt: "PowerShell", href: "https://learn.microsoft.com/en-us/powershell/" },
    { src: "/icons/PY.png", alt: "Python", href: "https://www.python.org/" },
    { src: "/icons/react.png", alt: "React", href: "https://react.dev/" },
    { src: "/icons/rebits.png", alt: "React Bits", href: "https://reactbits.dev/" },
    { src: "/icons/SQL.png", alt: "SQL", href: "https://www.mysql.com/" },
    { src: "/icons/TS.png", alt: "TypeScript", href: "https://www.typescriptlang.org/" },
    { src: "/icons/vbox.png", alt: "Virtual Box", href: "https://www.virtualbox.org/" },
    { src: "/icons/vmware.png", alt: "VMware", href: "https://www.vmware.com/" },
    { src: "/icons/vscode.png", alt: "Visual Studio Code", href: "https://code.visualstudio.com/" },
    { src: "/icons/zapier.png", alt: "Zapier", href: "https://zapier.com/" },
  ];

  return (
    <div>
      <header style={{backgroundColor: "transparent"}}>
        <h1>{t.header_title}</h1>
        <div className="settings">
          <span
            className="header-flag"
            style={{
              display: "inline-block",
              width: "24px",
              height: "16px",
              marginRight: "8px",
              backgroundImage: `url(${lang === "fr" ? "https://flagcdn.com/24x18/fr.png" : "https://flagcdn.com/24x18/us.png"})`,
              backgroundSize: "cover",
              verticalAlign: "middle",
            }}
          ></span>
          <select
            className="language-dropdown"
            value={lang}
            onChange={(e) => setLang(e.target.value as "en" | "fr")}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </header>

      <main>
        <div style={{ width: '100%', minHeight: '600px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          <div style={{ zIndex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem', maxWidth: '1200px' }}>
            <div style={{ width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden', border: '4px solid white', boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
              <img src="./img/pp.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ flex: '1', minWidth: '300px', color: 'white', textAlign: 'left' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold', borderBottom: '2px solid red', display: 'inline-block' }}>BIO</h2>
              <div style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {t.aboutText.split("\n").map((line, index) => (
                  <p key={index} style={{ margin: '0.5rem 0' }}>{line}</p>
                ))}
              </div>
              
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ff0000' }}>{t.email_label}</h3>
                <a href={`mailto:${t.email}`} style={{ fontSize: '1.3rem', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "white", height: "200px", position: "relative", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)", maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)" }}>
          <LogoLoop logos={techLogos} speed={120} direction="left" logoHeight={48} gap={40} pauseOnHover scaleOnHover />
        </div>

        <section id="skills" style={{ padding: "4rem 2rem", color: "white", textAlign: "center", backgroundColor: "rgba(0,0,0,0.3)" }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "3rem", textTransform: 'uppercase', letterSpacing: '4px' }}>{t.skills_title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
            {t.skills.map((skill, index) => (
              <div key={index} style={{ padding: "2rem", border: "1px solid rgba(255,0,0,0.3)", borderRadius: "15px", backgroundColor: "rgba(255,255,255,0.05)", textAlign: 'left', transition: 'transform 0.3s ease', cursor: 'default' }}>
                <h3 style={{ fontSize: "1.4rem", color: "#ff0000", marginBottom: "1.5rem", borderLeft: '4px solid #ff0000', paddingLeft: '1rem' }}>{skill.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {skill.items.map((item, i) => (
                    <li key={i} style={{ fontSize: "1.1rem", marginBottom: "0.5rem", display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#ff0000', marginRight: '10px' }}>▹</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" style={{ padding: "2rem", color: "white", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textDecoration: "underline" }}>{t.cert_title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
            {t.certifications.map((cert, index) => (
              <div key={index} style={{ padding: "1.5rem", border: "1px solid #ffffff", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.1)" }}>
                <h3 style={{ fontSize: "1.2rem" }}>{cert}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" style={{ padding: "2rem", color: "white", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textDecoration: "underline" }}>{t.achieve_title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
            {t.achievements.map((ach, index) => (
              <div key={index} style={{ padding: "1.5rem", border: "1px solid #ffffff", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.5rem", color: "#ff0000" }}>{ach.platform}</h3>
                <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>{ach.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" style={{ padding: '4rem 2rem', color: 'white' }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "3rem", textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px' }}>{lang === 'fr' ? 'Mes Projets' : 'My Projects'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
            {demoItems.map((item, i) => (
              <a key={i} href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <GlareHover width="100%" height="450px" background={`url(${item.image}) center/cover no-repeat`} borderRadius="20px" glareColor="#ffffff" glareOpacity={0.2} transitionDuration={800}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem', borderRadius: '20px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>{item.text}</h3>
                    <div style={{ width: '40px', height: '4px', backgroundColor: '#ff0000' }}></div>
                  </div>
                </GlareHover>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" style={{ position: 'relative', width: '100%', height: '600px' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <LightRays raysOrigin="top-center" raysColor="#ffffff" raysSpeed={1.5} lightSpread={0.8} rayLength={1.2} followMouse mouseInfluence={0.1} noiseAmount={0.1} distortion={0.05} />
          </div>
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem', zIndex: 1 }}>
            <a href="https://www.linkedin.com/in/radolaza-leondaris/" target="_blank" rel="noopener noreferrer">
              <GlareHover width="200px" height="200px" background="transparent" borderRadius="16px" glareColor="#ffffff" glareOpacity={0.3} transitionDuration={1200}>
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '4rem', color: '#ffffff' }} />
              </GlareHover>
            </a>
            <a href={`mailto:${t.email}`} target="_blank" rel="noopener noreferrer">
              <GlareHover width="200px" height="200px" background="transparent" borderRadius="16px" glareColor="#ffffff" glareOpacity={0.3} transitionDuration={1200}>
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '4rem', color: '#ffffff' }} />
              </GlareHover>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
      <Route path="/project4" element={<Project4 />} />
      <Route path="/project5" element={<Project5 />} />
      <Route path="/project6" element={<Project6 />} />
      <Route path="/project7" element={<Project7 />} />
      <Route path="/project8" element={<Project8 />} />
      <Route path="/project9" element={<Project9 />} />
      <Route path="/project10" element={<Project10 />} />
      <Route path="/project11" element={<Project11 />} />
    </Routes>
  );
};

export default App;
