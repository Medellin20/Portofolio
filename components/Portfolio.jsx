"use client";

import { useState, useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  DONNÉES                                                            */
/* ------------------------------------------------------------------ */

const ME = {
  prenom: "Zola-Zéric",
  nom: "WENDEOU",
  handle: "zwendeou",
  role: "Ingénieur en architecture des SI",
  sousRole: "AMOA · Audit du parc IT · Cybersécurité",
  ville: "Cotonou, Bénin",
  email: "wendeouz@gmail.com",
  emailEcole: "zola-eric.wendeou@epitech.eu",
  tel: "+229 01 62 56 59 42",
  telRaw: "+2290162565942",
  linkedin: "https://www.linkedin.com/in/zola-z%C3%A9ric-wendeou-79bb55253/",
  github: "https://github.com/Medellin20",
};

const BOOT = [
  "$ ./init --profile zwendeou",
  "[ ok ] chargement du profil ................ OK",
  "[ ok ] habilitations MSc Cybersécurité ..... OK",
  "[ ok ] certification RNCP niv.7 (AMOA) ..... OK",
  "[scan] audit du parc ....................... 25 modules",
  "[ ok ] session sécurisée ................... établie",
];

const STATS = [
  { k: "Années d'expérience", v: 5, suf: "+" },
  { k: "Modules maîtrisés", v: 25, suf: "" },
  { k: "Missions d'audit / AMOA", v: 3, suf: "" },
  { k: "Niveau certification", v: 7, suf: " RNCP" },
];

const DOMAINES = ["Tout", "Front", "Back", "Données", "Infra & Cloud", "Sécurité", "Outils"];

const PARC = [
  { n: "React JS", d: "Front", lvl: 3 },
  { n: "Next JS", d: "Front", lvl: 2 },
  { n: "JavaScript", d: "Front", lvl: 3 },
  { n: "HTML / CSS", d: "Front", lvl: 3 },
  { n: "jQuery", d: "Front", lvl: 2 },
  { n: "Node JS", d: "Back", lvl: 3 },
  { n: "Express JS", d: "Back", lvl: 3 },
  { n: "Symfony", d: "Back", lvl: 2 },
  { n: "MySQL", d: "Données", lvl: 3 },
  { n: "MongoDB", d: "Données", lvl: 3 },
  { n: "Microsoft Access", d: "Données", lvl: 2 },
  { n: "Docker", d: "Infra & Cloud", lvl: 2 },
  { n: "Azure", d: "Infra & Cloud", lvl: 2 },
  { n: "Réseaux CISCO", d: "Infra & Cloud", lvl: 3 },
  { n: "Maintenance de parc", d: "Infra & Cloud", lvl: 3 },
  { n: "Audit du parc IT", d: "Sécurité", lvl: 3 },
  { n: "AMOA", d: "Sécurité", lvl: 3 },
  { n: "Pentest", d: "Sécurité", lvl: 2 },
  { n: "Keycloak", d: "Sécurité", lvl: 3 },
  { n: "Git / GitHub", d: "Outils", lvl: 3 },
  { n: "GitLab", d: "Outils", lvl: 3 },
  { n: "Figma", d: "Outils", lvl: 3 },
  { n: "Canva", d: "Outils", lvl: 3 },
  { n: "Documentation", d: "Outils", lvl: 3 },
  { n: "Outils IA", d: "Outils", lvl: 2 },
];

const PARCOURS = [
  {
    periode: "Janv. 2026 — Avr. 2026",
    poste: "Développeur web",
    org: "Application éducative MALAM",
    lieu: "Cotonou",
    tag: "PRODUIT",
    points: [
      "Intégration et mise en ligne des contenus pédagogiques de la plateforme.",
      "Développement des fonctionnalités de gestion et d'affichage des cours.",
      "Contrôle qualité, accessibilité et bon fonctionnement des contenus publiés.",
    ],
  },
  {
    periode: "Avr. 2025 — Nov. 2025",
    poste: "Audit du parc IT — AMOA",
    org: "2SND Technologies",
    lieu: "Cotonou",
    tag: "AUDIT",
    points: [
      "Missions d'audit du parc informatique chez des entreprises clientes.",
      "Assistance à maîtrise d'ouvrage sur un projet de développement d'application web.",
    ],
  },
  {
    periode: "Nov. 2024 — Janv. 2025",
    poste: "Développeur & designer Figma",
    org: "Technoserve",
    lieu: "Cotonou",
    tag: "PRODUIT",
    points: [
      "Solution numérique pour le secteur vert : rassembler les acteurs d'un écosystème, partager leur travail avec les citoyens et valoriser la filière verte au Bénin.",
    ],
  },
  {
    periode: "Févr. 2024 — Avr. 2024",
    poste: "Développeur web front",
    org: "Service Sécurité-Surveillance",
    lieu: "Cotonou",
    tag: "PRODUIT",
    points: [
      "Application de suivi de la progression des cours par trimestre et semestre, pour un rapport fiable en fin d'année.",
    ],
  },
  {
    periode: "Mai 2023 — Juil. 2023",
    poste: "Assistant développeur web",
    org: "NSIA Banque",
    lieu: "Cotonou",
    tag: "BANQUE",
    points: [
      "Refonte de la page d'accueil d'un webmail en React pour améliorer l'expérience utilisateur.",
      "Mise en place de l'identification et de l'authentification via Keycloak.",
    ],
  },
  {
    periode: "Janv. 2023 — Avr. 2023",
    poste: "Développeur web front",
    org: "Service Sécurité-Surveillance",
    lieu: "Cotonou",
    tag: "PRODUIT",
    points: [
      "Mise à jour d'un site web développé en React et Symfony.",
      "Création et maintenance des pages web de l'entreprise.",
    ],
  },
  {
    periode: "Août 2021 — Juil. 2022",
    poste: "Maintenance des infrastructures",
    org: "DGTCP",
    lieu: "Cotonou",
    tag: "INFRA",
    points: [
      "Gestion des incidents matériels et résolution de pannes sur l'ensemble du parc.",
      "Mise à jour des équipements et des logiciels.",
    ],
  },
];

const REALISATIONS = [
  {
    id: "APP-01",
    titre: "Plateforme collaborative — appels d'offres",
    resume:
      "Suivi et gestion en temps réel des dossiers d'appel d'offres : automatisation des étapes, tableaux de bord interactifs et accès sécurisé, déployée en interne.",
    stack: ["React", "Node JS", "MongoDB", "Keycloak"],
  },
  {
    id: "APP-02",
    titre: "Gestion de présence des employés",
    resume:
      "Application de pointage et de suivi des présences : saisie quotidienne, historique par employé et restitution pour les équipes RH.",
    stack: ["React", "Express", "MySQL"],
  },
];

const FORMATION = [
  { d: "2023 — 2025", t: "Master of Science Pro — Cybersécurité", e: "Epitech Bénin, Cotonou" },
  { d: "2022 — 2023", t: "Année préparatoire au Master", e: "Epitech Bénin, Cotonou" },
  { d: "2019 — 2022", t: "Licence Réseaux et Génie Logiciel", e: "Pigier Bénin, Cotonou" },
  { d: "2018", t: "Baccalauréat série D", e: "CS La Merveilleuse, Porto-Novo" },
];

const CERTIFS = [
  {
    d: "Juin 2025",
    t: "Certification professionnelle RNCP niveau 7",
    p: "Gestion et suivi de projets en AMOA dans le secteur IT. Audit des infrastructures pour garantir la conformité et la sécurité des SI.",
  },
  { d: "2025", t: "Certificat MSc Sécurité", p: "Epitech Bénin." },
];

const QUALITES = ["Créativité", "Ponctualité", "Régularité", "Esprit d'équipe", "Capacité d'écoute", "Ouverture d'esprit", "Esprit critique"];
const HOBBIES = ["Jeux vidéo (COD, Genshin Impact)", "Basketball", "Musique", "Lecture"];

/* ------------------------------------------------------------------ */
/*  HOOKS / UTILITAIRES                                                */
/* ------------------------------------------------------------------ */

function useReduced() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(m.matches);
    const h = (e) => setR(e.matches);
    m.addEventListener?.("change", h);
    return () => m.removeEventListener?.("change", h);
  }, []);
  return r;
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [vu, setVu] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setVu(true)),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`rv ${vu ? "rv-on" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Décrypte un texte : glyphes aléatoires -> texte final */
function Decrypt({ text, className = "", speed = 26 }) {
  const reduced = useReduced();
  const [out, setOut] = useState(reduced ? text : "");
  const done = useRef(false);
  useEffect(() => {
    if (reduced) { setOut(text); return; }
    if (done.current) return;
    done.current = true;
    const glyph = "!<>-_\\/[]{}=+*^?#01ABCDEF";
    let frame = 0;
    const total = text.length;
    let timer;
    const step = () => {
      frame++;
      const revealed = Math.floor(frame / 2);
      let s = "";
      for (let i = 0; i < total; i++) {
        if (text[i] === " ") { s += " "; continue; }
        s += i < revealed ? text[i] : glyph[Math.floor(Math.random() * glyph.length)];
      }
      setOut(s);
      if (revealed <= total) timer = setTimeout(() => requestAnimationFrame(step), speed);
      else setOut(text);
    };
    step();
    return () => clearTimeout(timer);
  }, [text, reduced, speed]);
  return <span className={className}>{out}</span>;
}

/* Compteur animé au scroll */
function Count({ to, suffix = "" }) {
  const reduced = useReduced();
  const ref = useRef(null);
  const [n, setN] = useState(reduced ? to : 0);
  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / 1100);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, reduced]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* Canvas pluie de code (Matrix) discret en fond de hero */
function CodeRain() {
  const ref = useRef(null);
  const reduced = useReduced();
  useEffect(() => {
    if (reduced) return;
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    let w, h, cols, drops, raf, last = 0;
    const glyphs = "01<>[]{}#$/\\=+*ABCDEF01".split("");
    const font = 14;
    const resize = () => {
      const p = cvs.parentElement;
      w = cvs.width = p.offsetWidth;
      h = cvs.height = p.offsetHeight;
      cols = Math.max(1, Math.floor(w / font));
      drops = Array(cols).fill(0).map(() => Math.random() * -(h / font));
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 55) return;
      last = t;
      ctx.fillStyle = "rgba(4,10,14,0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${font}px 'JetBrains Mono', monospace`;
      for (let i = 0; i < cols; i++) {
        const txt = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * font;
        const y = drops[i] * font;
        ctx.fillStyle = Math.random() > 0.96 ? "rgba(80,255,190,0.9)" : "rgba(0,224,168,0.32)";
        ctx.fillText(txt, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.5;
      }
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [reduced]);
  return <canvas ref={ref} className="rain" aria-hidden="true" />;
}

function Eyebrow({ children, num }) {
  return (
    <div className="eyebrow mono">
      <span className="eyebrow-num">{num}</span>
      <span className="eyebrow-caret">&gt;</span>
      <span>{children}</span>
      <span className="eyebrow-rule" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Portfolio({ photo = null }) {
  const reduced = useReduced();
  const [filtre, setFiltre] = useState("Tout");
  const [scan, setScan] = useState(0);
  const [bootN, setBootN] = useState(0);

  useEffect(() => {
    if (reduced) { setBootN(BOOT.length); return; }
    let i = 0;
    const id = setInterval(() => {
      i++; setBootN(i);
      if (i >= BOOT.length) clearInterval(id);
    }, 420);
    return () => clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    if (reduced) { setScan(100); return; }
    let raf; const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1600);
      setScan(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const liste = filtre === "Tout" ? PARC : PARC.filter((s) => s.d === filtre);
  const nbDomaines = new Set(PARC.map((s) => s.d)).size;

  return (
    <div className="pf">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&family=JetBrains+Mono:wght@400;500;700&display=swap');

.pf{
  --bg:#05090D; --bg2:#0A121A; --panel:#0E1922; --panel2:#12222D;
  --line:rgba(0,224,168,.16); --line-soft:rgba(120,160,175,.12);
  --txt:#D7E6E4; --muted:#6F8A92;
  --neon:#00E0A8; --neon-2:#39F5C4; --cyan:#22D3EE;
  --danger:#FF5C7A; --amber:#FFC24B;
  background:var(--bg); color:var(--txt);
  font-family:'Montserrat',system-ui,sans-serif;
  font-size:16px; line-height:1.6; font-weight:400;
  -webkit-font-smoothing:antialiased; min-height:100%;
  position:relative; overflow-x:hidden;
}
.pf .mono{font-family:'JetBrains Mono',ui-monospace,monospace}
.pf .display{font-family:'Montserrat',sans-serif;font-weight:900;letter-spacing:-.03em;line-height:.9}

.pf::before{content:'';position:fixed;inset:0;z-index:0;pointer-events:none;
  background:
    linear-gradient(rgba(0,224,168,.05) 1px, transparent 1px) 0 0/44px 44px,
    linear-gradient(90deg, rgba(0,224,168,.05) 1px, transparent 1px) 0 0/44px 44px;
  -webkit-mask:radial-gradient(circle at 50% 0%, #000 0%, transparent 78%);
  mask:radial-gradient(circle at 50% 0%, #000 0%, transparent 78%);}
.pf::after{content:'';position:fixed;inset:0;z-index:0;pointer-events:none;
  background:radial-gradient(120% 80% at 50% -10%, rgba(0,224,168,.10), transparent 60%);}
.pf > *{position:relative;z-index:1}

.pf a{color:inherit;text-decoration:none}
.pf a:focus-visible,.pf button:focus-visible{outline:2px solid var(--neon);outline-offset:3px;border-radius:2px}
.pf .wrap{width:100%;max-width:1140px;margin:0 auto;padding-inline:clamp(16px,4vw,22px)}

.pf .status{position:sticky;top:0;z-index:40;background:rgba(5,9,13,.82);backdrop-filter:blur(10px);border-bottom:1px solid var(--line);font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase}
.pf .status .bar{display:flex;align-items:center;justify-content:space-between;gap:16px;height:46px}
.pf .brand{color:var(--neon);font-weight:700}
.pf .dot{width:8px;height:8px;border-radius:99px;background:var(--neon);display:inline-block;box-shadow:0 0 10px var(--neon);animation:pulse 2.4s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,224,168,.5)}70%{box-shadow:0 0 0 8px rgba(0,224,168,0)}100%{box-shadow:0 0 0 0 rgba(0,224,168,0)}}
.pf .navlink{color:var(--muted);transition:color .2s,text-shadow .2s}
.pf .navlink:hover{color:var(--neon);text-shadow:0 0 12px rgba(0,224,168,.6)}

.pf .eyebrow{display:flex;align-items:center;gap:12px;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);margin-bottom:28px}
.pf .eyebrow-num{color:var(--neon);font-weight:700}
.pf .eyebrow-caret{color:var(--neon)}
.pf .eyebrow-rule{flex:1;height:1px;background:linear-gradient(90deg,var(--line),transparent)}

.pf .hero{position:relative;padding:60px 0 92px;overflow:hidden}
.pf .rain{position:absolute;inset:0;width:100%;height:100%;opacity:.5;z-index:0;pointer-events:none;-webkit-mask:linear-gradient(180deg,#000 0%,transparent 85%);mask:linear-gradient(180deg,#000 0%,transparent 85%)}
.pf .hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,340px);gap:clamp(28px,4vw,40px);align-items:center}
.pf .hero-grid > *{min-width:0}
.pf .name{width:100%;margin-inline:auto;font-size:clamp(48px,8vw,105px);text-align:center;text-transform:uppercase}
.pf .name .l1{display:block;text-align:center}
.pf .name .l2{display:block;text-align:center;color:transparent;-webkit-text-stroke:2px var(--neon);text-shadow:0 0 30px rgba(0,224,168,.4)}
.pf .thesis{font-size:clamp(16px,2vw,21px);max-width:40ch;color:var(--txt);line-height:1.5;margin-top:26px;font-weight:500}
.pf .thesis b{color:var(--neon);font-weight:700}
.pf .role-line{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
.pf .role-line .on{color:var(--neon)}

.pf .btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}
.pf .btn{font-family:'JetBrains Mono',monospace;display:inline-flex;align-items:center;gap:10px;padding:14px 22px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:500;border:1px solid var(--neon);transition:.18s;position:relative;overflow:hidden}
.pf .btn-solid{background:var(--neon);color:#04120D;font-weight:700}
.pf .btn-solid:hover{box-shadow:0 0 24px rgba(0,224,168,.55);transform:translateY(-2px)}
.pf .btn-ghost{color:var(--neon);background:transparent}
.pf .btn-ghost:hover{background:rgba(0,224,168,.1);box-shadow:0 0 20px rgba(0,224,168,.25);transform:translateY(-2px)}

.pf .terminal{background:linear-gradient(180deg,var(--panel),var(--bg2));border:1px solid var(--line);box-shadow:0 0 40px rgba(0,224,168,.08),inset 0 0 60px rgba(0,224,168,.03)}
.pf .term-bar{display:flex;align-items:center;gap:8px;padding:11px 14px;border-bottom:1px solid var(--line);font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted)}
.pf .term-dot{width:11px;height:11px;border-radius:99px}
.pf .portrait{position:relative;aspect-ratio:1/1;overflow:hidden;border-bottom:1px solid var(--line);background:#0A1319}
.pf .portrait img{width:100%;height:100%;object-fit:cover;object-position:center 15%;filter:grayscale(.2) contrast(1.08) brightness(.95)}
.pf .portrait::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(5,9,13,.65));mix-blend-mode:multiply}
.pf .scanline{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--neon),transparent);box-shadow:0 0 14px var(--neon);animation:scanmove 3.2s linear infinite;z-index:2}
@keyframes scanmove{0%{top:-4%}100%{top:104%}}
.pf .id-badge{position:absolute;left:12px;bottom:12px;z-index:3;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--neon);border:1px solid var(--line);padding:4px 9px;background:rgba(5,9,13,.6);backdrop-filter:blur(4px)}
.pf .term-body{padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:12px;line-height:1.9}
.pf .term-line{white-space:nowrap;overflow:hidden;text-overflow:clip}
.pf .term-line .ok{color:var(--neon)}
.pf .term-line .lbl{color:var(--cyan)}
.pf .term-line .scn{color:var(--amber)}
.pf .cursor{display:inline-block;width:8px;height:14px;background:var(--neon);margin-left:2px;vertical-align:middle;animation:blink 1s steps(2) infinite}
@keyframes blink{0%,50%{opacity:1}50.01%,100%{opacity:0}}

.pf .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.pf .stat{background:var(--bg);padding:26px 20px;transition:background .2s}
.pf .stat:hover{background:var(--panel)}
.pf .stat-v{font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(34px,5vw,52px);color:var(--neon);letter-spacing:-.03em;line-height:1;text-shadow:0 0 26px rgba(0,224,168,.35)}
.pf .stat-k{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-top:10px}

.pf .inv{border:1px solid var(--line);background:linear-gradient(180deg,var(--panel),var(--bg2));box-shadow:0 0 40px rgba(0,224,168,.06)}
.pf .inv-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:13px 16px;border-bottom:1px solid var(--line);font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;flex-wrap:wrap}
.pf .inv-head .st{color:var(--neon)}
.pf .scanbar{height:3px;background:rgba(0,224,168,.1)}
.pf .scanbar i{display:block;height:100%;background:linear-gradient(90deg,var(--neon),var(--cyan));box-shadow:0 0 12px var(--neon)}
.pf .chips{display:flex;flex-wrap:wrap;gap:8px;padding:15px 16px;border-bottom:1px solid var(--line-soft)}
.pf .chip{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;padding:7px 13px;border:1px solid var(--line-soft);background:transparent;color:var(--muted);cursor:pointer;transition:.16s}
.pf .chip:hover{border-color:var(--neon);color:var(--txt)}
.pf .chip-on{background:rgba(0,224,168,.12);border-color:var(--neon);color:var(--neon);box-shadow:0 0 14px rgba(0,224,168,.2)}
.pf .row{display:grid;grid-template-columns:30px 1fr 116px 92px;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--line-soft);font-size:14px;animation:rowin .4s ease both}
.pf .row:last-child{border-bottom:0}
.pf .row:hover{background:rgba(0,224,168,.05)}
@keyframes rowin{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}
.pf .row-i{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--neon)}
.pf .row-n{font-weight:600}
.pf .row-d{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.pf .gauge{display:flex;gap:4px}
.pf .gauge span{flex:1;height:7px;background:rgba(120,160,175,.14);transition:.2s}
.pf .gauge span.on{background:var(--neon);box-shadow:0 0 8px rgba(0,224,168,.6)}
.pf .inv-foot{padding:12px 16px;border-top:1px solid var(--line);font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}

.pf .job{display:grid;grid-template-columns:220px 1fr;gap:28px;padding:28px 0;border-top:1px solid var(--line-soft)}
.pf .job:hover .job-title{color:var(--neon);text-shadow:0 0 18px rgba(0,224,168,.4)}
.pf .job-date{font-family:'JetBrains Mono',monospace;font-size:11.5px;letter-spacing:.05em;color:var(--muted);text-transform:uppercase}
.pf .tag{display:inline-block;margin-top:10px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.14em;border:1px solid var(--line);padding:3px 9px;color:var(--neon)}
.pf .job-title{font-family:'Montserrat',sans-serif;font-weight:800;font-size:clamp(20px,2.6vw,27px);letter-spacing:-.02em;line-height:1.15;transition:.2s}
.pf .job-org{color:var(--cyan);font-weight:600;font-size:14px;margin-top:2px}
.pf .job-pts{margin:14px 0 0;padding:0;list-style:none;max-width:64ch}
.pf .job-pts li{position:relative;padding-left:22px;margin-bottom:8px;color:var(--muted);font-size:14.5px}
.pf .job-pts li::before{content:'▸';position:absolute;left:0;top:0;color:var(--neon)}

.pf .proj{border:1px solid var(--line-soft);background:linear-gradient(180deg,var(--panel),var(--bg2));padding:28px;transition:.22s;position:relative;overflow:hidden}
.pf .proj::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:1px;background:linear-gradient(90deg,transparent,var(--neon),transparent);transition:left .6s}
.pf .proj:hover{transform:translateY(-4px);border-color:var(--neon);box-shadow:0 0 34px rgba(0,224,168,.12)}
.pf .proj:hover::after{left:100%}
.pf .proj-id{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.14em;color:var(--neon);margin-bottom:10px}
.pf .proj h3{font-family:'Montserrat',sans-serif;font-weight:800;font-size:21px;letter-spacing:-.02em;margin:0 0 10px}
.pf .stack{display:flex;flex-wrap:wrap;gap:6px;margin-top:18px}
.pf .stack span{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.06em;color:var(--muted);border:1px solid var(--line-soft);padding:4px 10px}

.pf .li{padding:18px 0;border-top:1px solid var(--line-soft)}
.pf .li:first-child{border-top:0}
.pf .li-d{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;color:var(--neon);text-transform:uppercase}
.pf .li-t{font-weight:700;font-size:15.5px;line-height:1.3;margin-top:3px}
.pf .li-e{color:var(--cyan);font-size:13.5px}

.pf .pill{font-family:'JetBrains Mono',monospace;font-size:11.5px;letter-spacing:.05em;border:1px solid var(--line-soft);padding:8px 14px;color:var(--muted);transition:.16s}
.pf .pill:hover{border-color:var(--neon);color:var(--txt)}

.pf .foot{border-top:1px solid var(--line);margin-top:96px;background:linear-gradient(180deg,var(--bg),#04100C)}
.pf .foot .big{display:inline-block;max-width:100%;font-family:'Montserrat',sans-serif;font-weight:800;letter-spacing:-.02em;font-size:clamp(21px,5vw,54px);line-height:1.05;overflow-wrap:anywhere;color:var(--neon);text-shadow:0 0 30px rgba(0,224,168,.3)}
.pf .foot .big:hover{color:var(--neon-2)}
.pf .k{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}

.pf .rv{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.3,1),transform .6s cubic-bezier(.2,.7,.3,1)}
.pf .rv-on{opacity:1;transform:none}

@media (max-width:1024px){
  .pf .hero{padding-top:48px}
  .pf .hero-grid{grid-template-columns:minmax(0,1fr) minmax(260px,310px);gap:28px}
  .pf .name{font-size:clamp(48px,10vw,96px)}
}
@media (max-width:860px){
  .pf .hero-grid{grid-template-columns:1fr}
  .pf .terminal{width:min(100%,560px);margin-inline:auto}
  .pf .stats{grid-template-columns:repeat(2,1fr)}
  .pf .job{grid-template-columns:1fr;gap:10px}
  .pf .row{grid-template-columns:24px 1fr 74px}
  .pf .row .row-d{display:none}
}
@media (max-width:640px){
  .pf{font-size:15px}
  .pf .status .bar{height:42px;gap:10px}
  .pf .brand{max-width:48vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .pf .hero{padding:38px 0 64px}
  .pf .name{font-size:clamp(42px,17.5vw,76px);line-height:.92;overflow-wrap:anywhere}
  .pf .name .l2{-webkit-text-stroke-width:1.5px}
  .pf .role-line{font-size:10px;line-height:1.65;letter-spacing:.11em}
  .pf .thesis{font-size:16px;margin-top:22px}
  .pf .btns{margin-top:26px}
  .pf .btn{min-height:44px;justify-content:center;padding:12px 16px}
  .pf .term-body{padding:12px;font-size:clamp(9px,2.65vw,12px);line-height:1.8;overflow:hidden}
  .pf .term-bar{min-width:0;padding:10px 12px;font-size:10px}
  .pf .term-bar > :last-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .pf .stats{grid-template-columns:1fr 1fr}
  .pf .stat{padding:20px 14px;min-width:0}
  .pf .stat-v{font-size:clamp(30px,11vw,44px)}
  .pf .stat-k{font-size:9px;letter-spacing:.08em}
  .pf .eyebrow{gap:8px;margin-bottom:20px;letter-spacing:.14em;line-height:1.5}
  .pf .eyebrow-rule{min-width:16px}
  .pf .inv-head{align-items:flex-start;font-size:9.5px;letter-spacing:.08em}
  .pf .inv-head > span{overflow-wrap:anywhere}
  .pf .chips{gap:7px;padding:12px}
  .pf .chip{min-height:40px;padding:7px 10px;font-size:10px}
  .pf .row{grid-template-columns:22px minmax(0,1fr) 62px;gap:8px;padding:11px 12px;font-size:13px}
  .pf .row-n{overflow-wrap:anywhere}
  .pf .inv-foot{font-size:9px;letter-spacing:.05em}
  .pf .job{padding:23px 0}
  .pf .job-title{font-size:20px}
  .pf .job-pts li{font-size:13.5px;padding-left:18px}
  .pf .proj{padding:22px 18px}
  .pf .proj h3{font-size:19px}
  .pf .pill{font-size:10.5px;padding:7px 10px}
  .pf .foot{margin-top:68px}
}
@media (max-width:420px){
  .pf .status{font-size:10px;letter-spacing:.06em}
  .pf .status .bar{padding-inline:12px}
  .pf .status nav{gap:10px}
  .pf .hero{padding-top:30px}
  .pf .name{font-size:clamp(38px,17vw,64px)}
  .pf .btns{display:grid;grid-template-columns:1fr}
  .pf .btn{width:100%;font-size:10.5px;letter-spacing:.08em}
  .pf .stats{grid-template-columns:1fr}
  .pf .stat{display:grid;grid-template-columns:minmax(92px,auto) 1fr;align-items:center;gap:14px}
  .pf .stat-k{margin-top:0}
  .pf .portrait{aspect-ratio:4/3}
  .pf .row{grid-template-columns:20px minmax(0,1fr) 54px}
  .pf .gauge{gap:3px}
  .pf .inv-foot{display:block}
  .pf .inv-foot span{display:block}
  .pf .inv-foot span + span{margin-top:5px}
}
@media (max-width:320px){
  .pf .wrap{padding-inline:12px}
  .pf .name{font-size:36px}
  .pf .term-body{font-size:8.5px;padding-inline:8px}
  .pf .row{grid-template-columns:18px minmax(0,1fr) 48px;padding-inline:8px}
}
@media (min-width:1440px){
  .pf .wrap{max-width:1240px}
  .pf .hero-grid{grid-template-columns:minmax(0,1fr) 360px}
}
@media (hover:none){
  .pf .btn:hover,.pf .proj:hover{transform:none}
}
@media (prefers-reduced-motion:reduce){
  .pf *,.pf *::before,.pf *::after{animation:none!important;transition:none!important}
  .pf .rv{opacity:1;transform:none}
  .pf .scanline,.pf .rain{display:none}
}
      `}</style>

      <header className="status">
        <div className="wrap bar">
          <div className="flex items-center gap-2">
            <span className="dot" />
            <span className="brand">{ME.handle}@secure</span>
            <span className="hidden md:inline" style={{ color: "var(--muted)" }}>· session chiffrée</span>
          </div>
          <nav className="flex items-center gap-5">
            <a className="navlink hidden md:inline" href="#parc">./parc</a>
            <a className="navlink hidden md:inline" href="#parcours">./parcours</a>
            <a className="navlink hidden md:inline" href="#realisations">./realisations</a>
            <a className="navlink" href="#contact">./contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <CodeRain />
        <div className="wrap hero-grid">
          <div>
            <div className="role-line mono">
              <span className="on">[SEC]</span> {ME.role} · {ME.ville}
            </div>
            <h1 className="display name">
              <span className="l1"><Decrypt text={ME.prenom} speed={40} /></span>
              <span className="l2"><Decrypt text={ME.nom} speed={30} /></span>
            </h1>
            <p className="thesis">
              J'<b>audite les parcs informatiques</b>, je cadre les projets en <b>AMOA</b>,
              puis je construis l'application sécurisée qui va avec.
            </p>
            <div className="btns">
              <a className="btn btn-solid" href={`mailto:${ME.email}`}>&gt; établir le contact</a>
              <a className="btn btn-ghost" href={`tel:${ME.telRaw}`}>{ME.tel}</a>
            </div>
          </div>

          <div className="terminal">
            <div className="term-bar">
              <span className="term-dot" style={{ background: "#FF5C7A" }} />
              <span className="term-dot" style={{ background: "#FFC24B" }} />
              <span className="term-dot" style={{ background: "#00E0A8" }} />
              <span style={{ marginLeft: 8 }}>~/profil/{ME.handle}</span>
            </div>
            <div className="portrait">
              {photo ? (
                <img src={photo} alt={`${ME.prenom} ${ME.nom}`} />
              ) : (
                <svg viewBox="0 0 200 200" width="100%" height="100%" aria-hidden="true">
                  <rect width="200" height="200" fill="#0A1319" />
                  <circle cx="100" cy="78" r="32" fill="#00E0A8" opacity=".25" />
                  <path d="M36 200c0-38 28-62 64-62s64 24 64 62z" fill="#00E0A8" opacity=".25" />
                  <text x="100" y="186" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="3" fill="#00E0A8">ZW</text>
                </svg>
              )}
              {!reduced && <div className="scanline" />}
              <span className="id-badge mono">ID · {ME.handle}</span>
            </div>
            <div className="term-body">
              {BOOT.slice(0, bootN).map((l, i) => (
                <div className="term-line" key={i}>
                  {l.startsWith("[ ok ]") ? (
                    <><span className="ok">[ ok ]</span>{l.slice(6)}</>
                  ) : l.startsWith("[scan]") ? (
                    <><span className="scn">[scan]</span>{l.slice(6)}</>
                  ) : (
                    <span className="lbl">{l}</span>
                  )}
                </div>
              ))}
              {bootN >= BOOT.length && (
                <div className="term-line"><span className="ok">$</span><span className="cursor" /></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 92 }}>
        <Reveal>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.k}>
                <div className="stat-v"><Count to={s.v} suffix={s.suf} /></div>
                <div className="stat-k">{s.k}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="wrap" id="parc" style={{ paddingBottom: 92 }}>
        <Reveal>
          <Eyebrow num="01">Scan du parc — compétences</Eyebrow>
          <div className="inv">
            <div className="inv-head">
              <span>relevé_technique :: {ME.handle}</span>
              <span className="st">{scan < 100 ? `analyse ${scan}%` : `${PARC.length} modules vérifiés`}</span>
            </div>
            <div className="scanbar"><i style={{ width: `${scan}%` }} /></div>
            <div className="chips">
              {DOMAINES.map((d) => (
                <button key={d} className={`chip ${filtre === d ? "chip-on" : ""}`} aria-pressed={filtre === d} onClick={() => setFiltre(d)}>
                  {d}
                </button>
              ))}
            </div>
            <div>
              {liste.map((s, i) => (
                <div className="row" key={s.n} style={{ animationDelay: `${i * 30}ms` }}>
                  <span className="row-i">{String(i + 1).padStart(2, "0")}</span>
                  <span className="row-n">{s.n}</span>
                  <span className="row-d">{s.d}</span>
                  <span className="gauge" aria-label={`niveau ${s.lvl} sur 3`}>
                    {[1, 2, 3].map((k) => <span key={k} className={k <= s.lvl ? "on" : ""} />)}
                  </span>
                </div>
              ))}
            </div>
            <div className="inv-foot">
              <span>{liste.length} / {PARC.length} modules · {nbDomaines} domaines</span>
              <span>jauge : notions · solide · courant</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="wrap" id="parcours" style={{ paddingBottom: 92 }}>
        <Reveal><Eyebrow num="02">Journal — parcours professionnel</Eyebrow></Reveal>
        {PARCOURS.map((j) => (
          <Reveal key={j.periode + j.poste}>
            <article className="job">
              <div>
                <div className="job-date">{j.periode}</div>
                <span className="tag">{j.tag}</span>
              </div>
              <div>
                <h3 className="job-title">{j.poste}</h3>
                <div className="job-org">{j.org} — {j.lieu}</div>
                <ul className="job-pts">{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="wrap" id="realisations" style={{ paddingBottom: 92 }}>
        <Reveal><Eyebrow num="03">Déploiements — réalisations</Eyebrow></Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {REALISATIONS.map((p) => (
            <Reveal key={p.id}>
              <article className="proj">
                <div className="proj-id mono">// {p.id}</div>
                <h3>{p.titre}</h3>
                <p style={{ color: "var(--muted)", fontSize: "14.5px", margin: 0 }}>{p.resume}</p>
                <div className="stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 92 }}>
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <Eyebrow num="04">Habilitations — formation</Eyebrow>
            {FORMATION.map((f) => (
              <div className="li" key={f.t}>
                <div className="li-d">{f.d}</div>
                <div className="li-t">{f.t}</div>
                <div className="li-e">{f.e}</div>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <Eyebrow num="05">Certifications</Eyebrow>
            {CERTIFS.map((c) => (
              <div className="li" key={c.t}>
                <div className="li-d">{c.d}</div>
                <div className="li-t">{c.t}</div>
                <p style={{ color: "var(--muted)", fontSize: "14px", margin: "6px 0 0" }}>{c.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 20 }}>
        <Reveal>
          <Eyebrow num="06">Signature — hors écran</Eyebrow>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="k" style={{ marginBottom: 12 }}>Manière de travailler</div>
              <div className="flex flex-wrap gap-2">{QUALITES.map((q) => <span className="pill" key={q}>{q}</span>)}</div>
            </div>
            <div>
              <div className="k" style={{ marginBottom: 12 }}>Centres d'intérêt</div>
              <div className="flex flex-wrap gap-2">{HOBBIES.map((h) => <span className="pill" key={h}>{h}</span>)}</div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="foot" id="contact">
        <div className="wrap" style={{ paddingTop: 72, paddingBottom: 48 }}>
          <div className="k" style={{ marginBottom: 22 }}>07 — &gt; établir le contact</div>
          <a className="big" href={`mailto:${ME.email}`}>{ME.email}</a>
          <div className="grid md:grid-cols-2 gap-8" style={{ marginTop: 52 }}>
            <div>
              <div className="k">Téléphone</div>
              <a href={`tel:${ME.telRaw}`} style={{ fontSize: 15, color: "var(--txt)" }}>{ME.tel}</a>
            </div>
            <div>
              <div className="k">Email école</div>
              <a href={`mailto:${ME.emailEcole}`} style={{ fontSize: 15, color: "var(--txt)", wordBreak: "break-all" }}>{ME.emailEcole}</a>
            </div>
            <div>
              <div className="k">LinkedIn</div>
              <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: "var(--txt)", wordBreak: "break-all" }}>linkedin.com/in/zola-zéric-wendeou-79bb55253/</a>
            </div>
            <div>
              <div className="k">GitHub</div>
              <a href={ME.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: "var(--txt)" }}>github.com/Medellin20</a>
            </div>
          </div>
          <div className="k" style={{ marginTop: 56, borderTop: "1px solid var(--line)", paddingTop: 18 }}>
            © {new Date().getFullYear()} {ME.prenom} {ME.nom} — connexion terminée.
          </div>
        </div>
      </footer>
    </div>
  );
}
