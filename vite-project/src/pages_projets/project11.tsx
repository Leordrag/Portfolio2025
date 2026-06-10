import React, { useState } from "react";
import LiquidEtherBackground from "../components/LiquidEther";

const Project11: React.FC = () => {
  const [lang, setLang] = useState<"en" | "fr">("en");

  const translations = {
    fr: {
      projet_type: "Infrastructure & Sécurité",
      language_used_h3: "Outils & Environnement",
      language_used_h2: "Proxmox, pfSense, Wazuh, Kali Linux",
      name: "Cyber Lab Interne - Infrastructure SOC & Pentest",
      header_title: "Retour",
      description: `Conception et déploiement d'un laboratoire de cybersécurité complet pour l'entraînement à la Blue Team et au Pentest :
      - Virtualisation sous Proxmox avec segmentation réseau via pfSense.
      - Déploiement d'une stack SIEM (Wazuh) pour le monitoring et la détection d'intrusions.
      - Mise en place de cibles vulnérables (Active Directory, Web Apps) pour la pratique du Pentest.
      - Automatisation du déploiement via Ansible pour une reconstruction rapide des environnements.`,
    },
    en: {
      projet_type: "Infrastructure & Security",
      language_used_h3: "Tools & Environment",
      language_used_h2: "Proxmox, pfSense, Wazuh, Kali Linux",
      name: "Internal Cyber Lab - SOC & Pentest Infrastructure",
      header_title: "Back",
      description: `Design and deployment of a comprehensive cybersecurity laboratory for Blue Team and Pentest training:
      - Virtualization on Proxmox with network segmentation via pfSense.
      - Deployment of a SIEM stack (Wazuh) for monitoring and intrusion detection.
      - Setup of vulnerable targets (Active Directory, Web Apps) for Pentest practice.
      - Automated deployment via Ansible for rapid environment rebuilding.`,
    },
  };

  const t = translations[lang];

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <LiquidEtherBackground />
      </div>

      <header>
        <a href="/"><h1>{t.header_title}</h1></a>
        <div className="settings">
          <span
            className="header-flag"
            style={{
              display: "inline-block",
              width: "24px",
              height: "16px",
              marginRight: "8px",
              backgroundImage: `url(${lang === "fr" ? "https://flagcdn.com/fr.svg" : "https://flagcdn.com/us.svg"})`,
              backgroundSize: "cover",
              verticalAlign: "middle",
            }}
          ></span>

          <select
            className="language-dropdown"
            value={lang}
            onChange={(e) => setLang(e.target.value as "en" | "fr")}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </header>

      <main style={{ paddingTop: "80px", color: "white", padding: "2rem" }}>
        <h3 id="projet_type">{t.projet_type}</h3>
        <h2 id="name">{t.name}</h2>

        <div className="container_p" style={{ marginBottom: "2rem" }}>
          <div className="bloc_1">
            <h3 id="language_used_h3">{t.language_used_h3}</h3>
            <h2 id="language_used_h2">{t.language_used_h2}</h2>
          </div>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.2rem", backgroundColor: "rgba(0,0,0,0.5)", padding: "2rem", borderRadius: "10px" }}>
          {t.description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Project11;
