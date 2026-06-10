import React, { useState } from "react";
import LiquidEtherBackground from "../components/LiquidEther";

const Project10: React.FC = () => {
  const [lang, setLang] = useState<"en" | "fr">("en");

  const translations = {
    fr: {
      projet_type: "Développement Plugin WordPress / Sécurité",
      language_used_h3: "Technologies utilisées",
      language_used_h2: "PHP, WordPress API, JavaScript",
      name: "PentestIT - Plugin de Cyber-Maturité",
      header_title: "Retour",
      description: `PentestIT est un plugin WordPress innovant conçu pour évaluer et améliorer la maturité cyber des sites web. 
      Il permet aux administrateurs de gérer les aspects critiques de la sécurité au niveau utilisateur et système :
      - Évaluation de la maturité cyber via un score dynamique.
      - Gestion centralisée des mises à jour des plugins et thèmes.
      - Renforcement de la politique de mots de passe.
      - Monitoring des activités suspectes et alertes de sécurité.`,
    },
    en: {
      projet_type: "WordPress Plugin Development / Security",
      language_used_h3: "Technologies used",
      language_used_h2: "PHP, WordPress API, JavaScript",
      name: "PentestIT - Cyber-Maturity Plugin",
      header_title: "Back",
      description: `PentestIT is an innovative WordPress plugin designed to assess and improve the cyber maturity of websites. 
      It allows administrators to manage critical security aspects at both the user and system levels:
      - Cyber maturity assessment via a dynamic score.
      - Centralized management of plugin and theme updates.
      - Hardening of password policies.
      - Monitoring of suspicious activities and security alerts.`,
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

export default Project10;
