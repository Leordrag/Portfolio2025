import React, { useState } from "react";
import FlowingMenu from './components/FlowingMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Particles from './components/Particles';
import PixelTransition from './components/PixelTransition';
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

const App: React.FC = () => {
  const Home: React.FC = () => {
    const [lang, setLang] = useState<"en" | "fr">("en");

    const translations = {
      fr: {
        header_title: "Radolaza Leondaris Portfolio",
        aboutText: `Bonjour, je m'appelle Leo.
                  💼
                  Je suis spécialisé en reseau et cybersécurité et j'aime relever des défis technologiques complexes.
                  🌎 
                  Ouvert aux opportunités d'alternance et de stage en cyberecurité.
                  `,
        projectTitles: [
          "Projet Nginx",
          "Projet Supervision",
          "Projet Sécurité des Réseaux & Pare-feu",
          "Airbnb Paris Project",
          "TheLook eCommerce Project",
          "Troisieme place mondiale pour la competition de robotique First Global Challenge 2020",
          "Elden Ring Optimisation via l'analyse de données",
          "Site web de ma startup HearMe",
          "Site web de ma startup TechCare",
        ],
      },
      en: {
        header_title: "Radolaza Leondaris Portfolio",
        aboutText: `Hi, I’m Leo.
                    💼
                    I specialize in network and Cybersecurity and thrive on tackling complex tech challenges.
                    🌎 
                    Open to opportunities of internship and aprentship.
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
        ],
      },
    };

    const t = translations[lang];

  // Liste d'images des projets
  const projectImages = [
    '/img/project1.png',
    '/img/project2.png',
    '/img/project3.png',
    '/img/project4.png',
    '/img/project5.png',
    '/img/project6.png',
    '/img/project7.png',
  ];

  // Génération des liens des projets pour le menu projets 
  const demoItems = t.projectTitles.map((title, i) => ({
    link: `/project${i + 1}`,     // React Router path
    text: title,
    image: projectImages[i]         // Image
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
        {/* Header */}
        <header style={{backgroundColor: "transparent"}}>
          <h1>{t.header_title}</h1>
          <div className="settings">
            {/* Drapeaux */}
            <span
              className="header-flag"
              style={{
                display: "inline-block",
                width: "24px",
                height: "16px",
                marginRight: "8px",
                backgroundImage: `url(${
                  lang === "fr"
                    ? "https://flagcdn.com/24x18/fr.png"
                    : "https://flagcdn.com/24x18/us.png"
                })`,
                backgroundSize: "cover",
                verticalAlign: "middle",
              }}
            ></span>

            {/* Sélecteur de langue */}
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
<div
  style={{
    width: '100%',
    height: '600px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  {/* Particles en background */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    }}
  >
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

  {/* Conteneur PixelTransition */}
  <div
    style={{
      position: 'relative',
      zIndex: 1,
      width: '300px',
      height: '300px',
    }}
  >
    {/* Texte BIO centré sur l'image */}
<h2
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#ffffff',
    fontSize: '2rem',
    fontWeight: 'bold',
    WebkitTextStroke: '2px red',
    textShadow:
      '2px 2px 0rgb(43, 0, 255), -2px 2px 0rgb(0, 26, 255), 2px -2px 0 #ff0000, -2px -2px 0 #ff0000',
    zIndex: 2,
    pointerEvents: 'none',
    cursor: 'default',
  }}
  className="bio-text-animated"
>
  BIO
</h2>

    {/* PixelTransition */}
    <PixelTransition
      firstContent={
        <img
          src="./img/pp.png"
          alt="Profile Picture"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      }
      secondContent={
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "grid",
      placeItems: "center",
      backgroundColor: "black",
      padding: "1rem",
    }}
  >
    <div
      style={{
        fontWeight: 900,
        fontSize: "1rem",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      {t.aboutText.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </div>
}
      gridSize={12}
      pixelColor="#ffffff"
      animationStepDuration={0.4}
      className="custom-pixel-card"
    />
  </div>
</div>

<br />

<div
  style={{
    backgroundColor: "white",
    height: "200px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
    maskRepeat: "no-repeat",
    maskSize: "100% 100%",
  }}
>
  <LogoLoop
    logos={techLogos}
    speed={120}
    direction="left"
    logoHeight={48}
    gap={40}
    pauseOnHover
    scaleOnHover
  />
</div>



<br />
<br />


{/*
  ---section des MISSIONS/SERVICES proposés aux clients---
  <section id="forclients" style={{ position: 'relative', width: '100%', height: '600px' }}>
    Background PixelBlast
    <PixelBlast
      variant="circle"
      pixelSize={6}
      color="#FFFFFF"
      patternScale={3}
      patternDensity={1.2}
      pixelSizeJitter={0.5}
      enableRipples
      rippleSpeed={0.4}
      rippleThickness={0.12}
      rippleIntensityScale={1.5}
      liquid
      liquidStrength={0.1}
      liquidRadius={0.5}
      liquidWobbleSpeed={1}
      speed={0.3}
      edgeFade={0.25}
      transparent
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />

    ---Texte centré---
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        zIndex: 1,                
      }}
    >
      <h1 style={{ color: '#ffffff', fontSize: '3rem', fontWeight: 'bold' }}>test</h1>
    </div>
  </section>
*/}

          {/* section projets avec FlowingMenu */}
          <section id="projects">
            <div style={{ height: '600px', position: 'relative' }}>
              <FlowingMenu items={demoItems} />
            </div>
          </section>

<br />
<br />


{/* section contact */}
<section id="contact" style={{ position: 'relative', width: '100%', height: '600px' }}>
  {/* LightRays Background */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    }}
  >
    <LightRays
      raysOrigin="top-center"
      raysColor="#ffffff"
      raysSpeed={1.5}
      lightSpread={0.8}
      rayLength={1.2}
      followMouse
      mouseInfluence={0.1}
      noiseAmount={0.1}
      distortion={0.05}
    />
  </div>

  {/* Contenu centré */}
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4rem',
      zIndex: 1,
    }}
  >
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/radolaza-leondaris/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'flex' }}
    >
      <GlareHover
        width="200px"
        height="200px"
        background="transparent"
        borderRadius="16px"
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1200}
        playOnce={true}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '4rem', color: '#ffffff' }} />
      </GlareHover>
    </a>

    {/* Email */}
    <a
      href="mailto:radolazaleondaris@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'flex' }}
    >
      <GlareHover
        width="200px"
        height="200px"
        background="transparent"
        borderRadius="16px"
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1200}
        playOnce={true}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '4rem', color: '#ffffff' }} />
      </GlareHover>
    </a>
  </div>
</section>

                </main>
              </div>
            );
          };

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
      </Routes>
    );
  };

export default App;