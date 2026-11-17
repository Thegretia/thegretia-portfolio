// Contenu du portfolio, repris du CV « CV_MBONJO_ETIA_Patrick_Thomas.pdf ».
// Pour mettre le site à jour, modifier ce fichier : toutes les sections s'en servent.
import type { ImageMetadata } from 'astro';
import kiyanzaOsc from '../assets/images/kiyanza-osc2026.webp';
import atlas from '../assets/gemula/atlas-dashboard.webp';
import gemulaLearn from '../assets/gemula/gemula-learn.webp';
import gemulaMailer from '../assets/gemula/gemula-mailer.webp';

const GH = 'https://github.com/Thegretia';

export const identity = {
  firstName: 'Patrick Thomas',
  lastName: 'MBONJO ETIA',
  fullName: 'MBONJO ETIA Patrick Thomas',
  initials: 'ME',
  title: 'Ingénieur Données & Intelligence Artificielle (Data & AI Engineer)',
  role: 'AI Solutions & Data Engineer chez Gemula',
  location: 'Douala, Cameroun',
  email: 'thomsp2001@gmail.com',
  phones: [
    { label: '+237 6 94 41 60 81', href: 'tel:+237694416081' },
  ],
  linkedin: 'https://www.linkedin.com/in/patrick-mbonjo-etia-46b99b328/',
  github: GH,
  gemula: 'https://gemula.org',
  cv: '/documents/CV_MBONJO_ETIA_Patrick_Thomas.pdf',
  summary:
    "Élève-Ingénieur en Master Recherche Data Science & IA (ENSPD), spécialisé en pipelines de données, modèles prédictifs et agents IA générative. Fort d'expériences chez Orange Cameroun (Lead Data & IA - projet primé Kiyanza), sur le projet IEGB et à l'Hôpital Général de Douala, j'allie rigueur scientifique et vision opérationnelle pour concevoir des architectures data scalables.",
  seeking:
    "En quête d'un stage professionnel en Data Science, ingénierie des données ou intelligence artificielle.",
};

export const stats = [
  { value: '1er Prix', label: 'Orange Summer Challenge 2026' },
  { value: '15+', label: 'démonstrations techniques (PoC)' },
  { value: '10+', label: 'flux de données multi-canaux (ETL/ELT)' },
  { value: '15 000+', label: 'dossiers médicaux sécurisés gérés' },
];

export const gemula = {
  tagline: 'Là où le talent devient un impact.',
  roleLabel: 'AI Solutions & Data Engineer · Architecte Solutions & Solution Trainer · depuis avril 2026',
  intro:
    "Membre actif du collectif d'élèves ingénieurs et de chercheurs Gemula basé à Douala, j'y conçois des architectures logicielles et data scalables, réalise les démonstrations techniques (PoC) et pilote les programmes de formation en IA générative, automatisation et ingénierie des données.",
  domains: [
    'Intelligence Artificielle',
    'Data Engineering',
    'Solutions IA',
    'Architecture logicielle & Data',
    'Formation technique',
  ],
  highlights: [
    {
      icon: 'layers',
      title: 'Architecture Solutions & Data',
      text: "Conception de l'architecture technique globale de solutions logicielles et data pour aligner contraintes métier et scalabilité.",
    },
    {
      icon: 'bolt',
      title: '15+ démonstrations (PoC) & Stratégie',
      text: 'Réalisation de plus de 15 démonstrations techniques auprès de parties prenantes et participation aux décisions technologiques stratégiques.',
    },
    {
      icon: 'school',
      title: '6 programmes & 20+ exercices',
      text: 'Élaboration de 6 programmes de formation technique et conception de plus de 20 exercices pratiques, guides et tutoriels opérationnels.',
    },
    {
      icon: 'sparkles',
      title: 'IA générative & Ingénierie Data',
      text: 'Formateur référent du collectif en IA générative (LLMs, RAG, prompting), automatisation et ingénierie des données.',
    },
  ],
};

export interface Experience {
  title: string;
  org: string;
  date: string;
  place: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Lead Data & AI Engineer',
    org: 'Orange Cameroun - Orange Digital Center',
    date: 'Depuis juin 2026',
    place: 'Douala, Cameroun',
    bullets: [
      "Pilotage technique de l'architecture Data & IA d'une solution primée (1ère Place Nationale – Orange Summer Challenge 2026).",
      'Conception et déploiement de pipelines de données (ETL/ELT) ingérant plus de 10 flux de données multi-canaux sous environnement Cloud et Git.',
      "Intégration d'algorithmes prédictifs pour l'optimisation de campagnes, permettant une hausse de 25 % de l'efficacité du ciblage analytique.",
      "Coordination d'une équipe pluridisciplinaire de 8 ingénieurs et designers pour intégrer la couche analytique au cœur du produit.",
    ],
  },
  {
    title: 'Architecte Solutions & Solution Trainer',
    org: 'Gemula',
    date: 'Depuis avr. 2026',
    place: 'Douala, Cameroun',
    bullets: [
      "Conception de l'architecture technique globale de solutions logicielles et data pour aligner contraintes métier et scalabilité.",
      'Réalisation de plus de 15 démonstrations techniques (PoC) auprès de parties prenantes et participation aux décisions technologiques stratégiques.',
      'Élaboration de 6 programmes de formation technique et conception de plus de 20 exercices pratiques, guides et tutoriels opérationnels.',
    ],
  },
  {
    title: 'Ingénieur Bases de Données',
    org: 'Hôpital Général de Douala',
    date: 'De mai 2024 à sept. 2024',
    place: 'Douala, Cameroun',
    bullets: [
      "Modélisation et administration d'un schéma relationnel structuré gérant plus de 40 tables et les données sécurisées de plus de 15 000 dossiers médicaux.",
      "Réécriture et indexation de plus de 30 requêtes SQL complexes, réduisant le temps d'exécution des rapports médicaux critiques de 35 %.",
      "Automatisation de 5 procédures d'extraction de données et mise en conformité des accès pour assurer l'intégrité et la confidentialité des dossiers patients.",
    ],
  },
];

export type Domain = 'ia' | 'data' | 'logiciel';

export const domains: { id: Domain | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'ia', label: 'IA & Machine Learning' },
  { id: 'data', label: 'Ingénierie & Bases de données' },
  { id: 'logiciel', label: 'Architectures & Solutions' },
];

export interface Project {
  name: string;
  kind: string;
  domain: Domain;
  desc: string;
  stack: string[];
  image?: ImageMetadata;
  icon: string;
  repo?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Kiyanza',
    kind: 'Intelligence marketing & monitoring acoustique · 1er Prix OSC 2026',
    domain: 'ia',
    image: kiyanzaOsc,
    icon: 'trophy',
    featured: true,
    live: 'https://gemula.org/journal/kiyanza-orange-summer-challenge-2026',
    desc: "Solution d'intelligence marketing et de monitoring acoustique primée (1ère Place Nationale – Orange Summer Challenge 2026). Conception et pilotage de l'architecture Data & IA : pipelines ETL/ELT ingérant plus de 10 flux multi-canaux, algorithmes prédictifs d'optimisation de campagnes (+25 % d'efficacité du ciblage analytique) et coordination d'une équipe de 8 ingénieurs et designers.",
    stack: ['Python', 'SQL', 'ETL/ELT', 'Modèles prédictifs', 'Cloud', 'Git'],
  },
  {
    name: 'Projet IEGB',
    kind: "Technologie d'assistance & accessibilité numérique",
    domain: 'ia',
    icon: 'memory',
    featured: true,
    desc: "Développement d'une solution d'assistance technologique et d'accessibilité numérique pour personnes malvoyantes (Intelligent Eyeglass for the Blind), alliant intelligence artificielle, traitement de données et vision produit opérationnelle.",
    stack: ['Python', 'Intelligence Artificielle', 'Machine Learning', 'Cloud', 'Accessibilité'],
  },
  {
    name: 'Architecture SGBD — Hôpital Général de Douala',
    kind: 'Modélisation relationnelle & optimisation SQL',
    domain: 'data',
    icon: 'database',
    featured: true,
    desc: "Modélisation et administration d'un schéma relationnel structuré de plus de 40 tables gérant les données sécurisées de plus de 15 000 dossiers médicaux. Réécriture et indexation de plus de 30 requêtes SQL complexes (-35 % sur le temps d'exécution des rapports critiques) et automatisation de 5 procédures d'extraction conformes.",
    stack: ['SQL', 'PostgreSQL', 'Modélisation relationnelle', 'Indexation', 'Sécurité des données'],
  },
  {
    name: 'Architectures Solutions & PoC — Gemula',
    kind: 'Architecture technique, démonstrations & formation',
    domain: 'logiciel',
    image: atlas,
    icon: 'layers',
    live: 'https://gemula.org/projets',
    desc: "Conception de l'architecture technique globale de solutions logicielles et data scalables au sein de Gemula. Réalisation de plus de 15 démonstrations techniques (PoC) auprès des parties prenantes et élaboration de 6 programmes de formation accompagnés de plus de 20 exercices pratiques et guides.",
    stack: ['Architecture Data & IA', 'Python', 'SQL', 'RAG & LLMs', 'Cloud'],
  },
  {
    name: 'E-Commerce Churn & KPIs Pipeline',
    kind: 'Pipeline ETL/ELT & modélisation prédictive',
    domain: 'data',
    icon: 'chart',
    repo: `${GH}/ecommerce-churn-pipeline`,
    desc: "Pipeline de données de bout en bout structuré selon l'architecture Medallion : ingestion de données brutes, nettoyage, calcul de KPIs métiers (segmentation RFM, prédiction du churn), stockage relationnel PostgreSQL et tableau de bord interactif.",
    stack: ['Python', 'Spark', 'PostgreSQL', 'ETL/ELT', 'Streamlit'],
  },
  {
    name: 'TransfoDiag Pro',
    kind: 'Application locale & PWA de diagnostic industriel',
    domain: 'logiciel',
    icon: 'bolt',
    repo: `${GH}/transfodiag-huiles-transformateurs`,
    desc: "Application offline-first (PWA et backend local) permettant d'ingérer, nettoyer, analyser et diagnostiquer les données physico-chimiques et gaz dissous (DGA) d'un parc de transformateurs, avec génération de rapports multi-formats.",
    stack: ['Python', 'FastAPI', 'SQLite', 'PWA', 'Reporting'],
  },
];

export const otherWork = [
  {
    name: 'DiagCardio',
    text: 'Outil éducatif évaluant le risque cardiaque par régression logistique à partir de 13 paramètres cliniques.',
    href: `${GH}/DiagCardio`,
  },
  {
    name: 'Optimisation Différentiable',
    text: 'Implémentation from scratch en Python pur des algorithmes de Newton, quasi-Newton (BFGS) et descente de gradient.',
    href: `${GH}/Optimisation_Differentiable`,
  },
  {
    name: 'Sales Analytics (SQL + Python)',
    text: 'Analyse exploratoire des tendances de ventes mensuelles et par pays avec requêtes SQL, Pandas et Matplotlib.',
    href: `${GH}/sales-analytics-sql`,
  },
  {
    name: 'AFC — Analyse Factorielle des Correspondances',
    text: 'Analyse statistique exploratoire et réduction de dimensionnalité sur des données financières qualitatives.',
    href: `${GH}/AFC-Analyses-de-donnees`,
  },
  {
    name: 'Gemula Learn',
    text: 'Outil web du collectif Gemula pour structurer, chiffrer, simuler et exporter un projet en dossier professionnel.',
    href: 'https://gemula.org/projets/gemula-learn',
    image: gemulaLearn,
  },
  {
    name: 'Gemula Mailer',
    text: 'Plateforme interne Gemula d’envoi programmé et personnalisé de campagnes de communication.',
    href: 'https://gemula.org/projets/gemula-mailer',
    image: gemulaMailer,
  },
];

export const skills = [
  {
    group: 'Contrôle de version & Bonnes pratiques logicielles',
    items: ['Git', 'GitHub', 'CI/CD', 'Clean Code'],
  },
  {
    group: 'Langages de programmation',
    items: ['Python', 'SQL'],
  },
  {
    group: 'Bases de données & Systèmes relationnels',
    items: ['SQL', 'PostgreSQL', 'Modélisation relationnelle', 'Modélisation NoSQL'],
  },
  {
    group: 'Cloud Data & Plateformes analytiques',
    items: ['Azure Databricks', 'Microsoft Fabric', 'AWS'],
  },
  {
    group: 'IA Générative & LLMs',
    items: ['RAG', 'Agents autonomes', 'Prompt engineering', 'LLMs'],
  },
  {
    group: 'Ingénierie & Pipelines de données',
    items: ['ETL / ELT', 'Architectures Big Data', 'Streaming'],
  },
  {
    group: 'Machine Learning & Modélisation prédictive',
    items: ['Scikit-Learn', 'Séries temporelles', 'Classification', 'Régression', 'Modélisation statistique', 'Optimisation'],
  },
];

export const education = [
  {
    title: "Master en Sciences de l'Ingénieur – Sciences des Données & IA",
    school: 'École Nationale Supérieure Polytechnique de Douala (ENSPD)',
    date: 'De sept. 2026 à sept. 2028',
    current: true,
    details: [
      'Spécialisations : Pipelines de données & Big Data, Machine Learning avancé, IA Générative (LLMs, RAG), Cloud Computing, Séries temporelles, Optimisation.',
    ],
  },
  {
    title: 'Licence en Sciences des données et Intelligence Artificielle',
    school: 'École Nationale Supérieure Polytechnique de Douala (ENSPD)',
    date: "D'oct. 2023 à juin 2026",
    details: [
      'Spécialisations : Algorithmique avancée, Programmation Python/SQL, Bases de données relationnelles, Modélisation statistique, Traitement du signal.',
    ],
  },
];

export const certifications = [
  { title: 'Effective Communication and Teamwork', org: 'N-EU-SAIL', date: '2026' },
  { title: 'Cybercriminalité (Cybercrime eLearning Course)', org: 'UNODC', date: '2026' },
  { title: '5 bonnes pratiques pour obtenir un code propre (Clean Code)', org: 'LinkedIn Learning', date: '2026' },
  { title: "L'essentiel des séries temporelles", org: 'LinkedIn Learning', date: '2026' },
  { title: 'Python pour la Data Science', org: 'LinkedIn Learning', date: '2026' },
  { title: 'AWS Educate Introduction to Cloud 101', org: 'Amazon Web Services (AWS)', date: '2025' },
  { title: 'AWS Educate Machine Learning Foundations', org: 'Amazon Web Services (AWS)', date: '2025' },
  { title: 'AWS Educate Introduction to Generative AI', org: 'Amazon Web Services (AWS)', date: '2025' },
];

export const engagement = [
  {
    icon: 'trophy',
    title: '1ère Place Nationale – Orange Summer Challenge 2026',
    meta: 'Orange Digital Center · Octobre 2026',
    bullets: [
      "Lauréat national avec le projet Kiyanza : conception et lead technique de la solution d'intelligence marketing et de monitoring acoustique.",
      "Pilotage de l'architecture Data & IA et coordination d'une équipe pluridisciplinaire de 8 ingénieurs et designers.",
    ],
  },
  {
    icon: 'trophy',
    title: '2e Place – Concours ÉPI (Un Étudiant, un Projet, une Innovation)',
    meta: 'École Nationale Supérieure Polytechnique de Douala · Février 2025',
    bullets: [
      'Distinction académique et entrepreneuriale récompensant un projet à fort impact technologique et sociétal.',
    ],
  },
  {
    icon: 'school',
    title: 'Formation technique, PoC & Transmission',
    meta: 'Gemula · Depuis avril 2026',
    bullets: [
      'Élaboration de 6 programmes de formation technique et conception de plus de 20 exercices pratiques, guides et tutoriels opérationnels.',
      'Réalisation de plus de 15 démonstrations techniques (PoC) auprès de parties prenantes et accompagnement en IA générative, automatisation et data.',
    ],
  },
];

export const strengths = [
  {
    icon: 'book',
    title: 'Communication technique & Pédagogie',
    text: "Expérience réussie dans l'animation de formations techniques, la rédaction de documentations claires et la présentation de démonstrations (PoC) auprès de décideurs.",
  },
  {
    icon: 'groups',
    title: "Leadership & Gestion d'équipe pluridisciplinaire",
    text: 'Capacité démontrée à piloter des équipes techniques (développeurs, designers) et à coordonner les livrables dans des délais serrés (lauréat Orange Summer Challenge).',
  },
  {
    icon: 'chart',
    title: 'Rigueur scientifique & Résolution de problèmes complexes',
    text: "Solide bagage mathématique et algorithmique issu du cursus d'ingénieur, appliqué à l'optimisation des flux de données et des architectures IA.",
  },
  {
    icon: 'layers',
    title: 'Vision produit & Sens opérationnel',
    text: 'Aptitude à traduire un besoin métier ou une contrainte utilisateur en spécifications techniques et en solutions data scalables.',
  },
];

export const languages = [
  { name: 'Français', level: 'Langue natale' },
  { name: 'Anglais', level: 'Capacité professionnelle complète · TOEIC : 920/990' },
];

export const interests = [
  {
    title: 'Veille technologique & Open Source',
    text: 'Suivi actif des avancées en IA générative, architectures distribuées, frameworks LLM et contribution à des projets sur GitHub.',
  },
  {
    title: 'Recherche & Économie de la donnée',
    text: "Intérêt poussé pour les architectures logicielles légères, l'optimisation de l'empreinte calcul des modèles et l'IA frugale.",
  },
  {
    title: 'Projets à impact sociétal',
    text: "Développement de solutions d'assistance technologique et d'accessibilité numérique (ex. technologies d'assistance pour personnes malvoyantes).",
  },
  {
    title: 'Littérature & Essais',
    text: "Lecture d'essais socio-économiques, historiques et scientifiques.",
  },
];
