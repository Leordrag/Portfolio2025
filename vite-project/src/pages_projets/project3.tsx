import React, { useState } from "react";
import LiquidEtherBackground from "../components/LiquidEther";

const App: React.FC = () => {
  const [lang, setLang] = useState<"en" | "fr">("en");

  const translations = {
    fr: {
      projet_type: "Sécurité des Réseaux",
      language_used_h3: "Langage utilisé",
      language_used_h2: "Français",
      name: "Projet Sécurité des Réseaux & Pare-feu",
      header_title: "Retour",
    },
    en: {
      projet_type: "Network Security",
      language_used_h3: "Language used",
      language_used_h2: "French",
      name: "Network Security & Firewall Project",
      header_title: "Back",
    },
  };

  const t = translations[lang];

  return (
    <div>
      {/* Background fixé derrière */}
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

      {/* Header */}
      <header>
        <a href="/"><h1>{t.header_title}</h1></a>
        <div className="settings">
          {/* Drapeau actuel */}
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

          {/* Sélecteur de langue */}
          <select
            className="language-dropdown"
            value={lang}
            onChange={(e) => setLang(e.target.value as "en" | "fr")}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>

        </div>
      </header>

      {/* Contenu principal */}
      <main style={{ paddingTop: "80px" }}>
        <h3 id="projet_type">{t.projet_type}</h3>
        <h2 id="name">{t.name}</h2>

        <div className="container_p">
          <div className="bloc_1">
            <h3 id="language_used_h3">{t.language_used_h3}</h3>
            <h2 id="language_used_h2">{t.language_used_h2}</h2>
          </div>
        </div>

        {/* PDF responsive */}
        <div style={{ width: "100%", maxWidth: "900px", margin: "2rem auto" }}>
          <iframe
            src="/projets/projet_securite_reseaux_parefeu.pdf"
            title="Network Security & Firewall Project PDF"
            style={{ width: "100%", height: "90vh", border: "none" }}
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default App;
