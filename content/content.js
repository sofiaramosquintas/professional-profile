/* =====================================================================
   CONTENIDO DEL PORTFOLIO — aquí editas TODO.
   · Textos, proyectos, skills, certificaciones, enlaces y analítica.
   · Foto:  assets/img/photo.jpg      · CV:  assets/cv/Sofia-Ramos-CV.pdf
   · Logos: assets/logos/<clave>.png (o .svg). Claves: ver `logos` abajo.
     Si falta un logo, la web muestra el nombre en un recuadro.
   · Versión en español: rellena `es` con la misma estructura que `en`.
   ===================================================================== */
window.CONTENT = {
  en: {
    meta: {
      title: "Sofía Ramos Quintás · Data & AI for business",
      description: "Building the bridge between AI and business. Master in Data Analysis & AI (ISDI) · Double degree ESSEC × ESIC."
    },

    person: {
      name: "Sofía Ramos Quintás", short: "Sofía Ramos", initials: "SR", brand: "srq",
      photo: "assets/img/photo.jpg",
      eyebrow: "Data & AI × Business",
      role: "Master in Data Analysis & AI", roleTag: "(ISDI)",
      sub: "Business & Marketing Graduate", subTag: "(ESSEC × ESIC)"
    },

    contact: {
      email: "emailofsofiaramos@gmail.com",
      linkedin: "https://www.linkedin.com/in/wowsofii",
      cv: "assets/cv/Sofia-Ramos-CV.pdf",
      emailSubject: "Hi Sofía, we met at the ISDI Talent Day"
    },

    // Analítica opcional: código de tu cuenta GoatCounter (p. ej. "sofiaramos")
    analytics: { goatcounter: "" },

    fromCard: "We met at the <b>ISDI Talent Day</b>. Thanks for stopping by.",

    // Logos: clave -> nombre que se muestra si no hay archivo en assets/logos/
    logos: {
      isdi: "ISDI", mapfre: "MAPFRE", mawdy: "MAWDY", loreal: "L'ORÉAL", lebonmarche: "Le Bon Marché", loewe: "LOEWE",
      essec: "ESSEC", esic: "ESIC", farlabo: "FARLABO", okiko: "OKIKO", sarayu: "SARAYÜ", southsummit: "SOUTH SUMMIT", wow: "WOW",
      aimpacto: "AImpacto", microsoft: "Microsoft", datacamp: "DataCamp", growit: "Growit", harvard: "Harvard", ironhack: "Ironhack"
    },

    ui: {
      tabs: { overview: "Overview", skills: "Skills", projects: "Projects" },
      cv: "Download CV", linkedin: "LinkedIn", email: "Email",
      applied: "Applied", ongoing: "Ongoing in the master", legend: "applied", legend2: "in progress", ongoingBadge: "Ongoing", inProgressH: "In progress", completedH: "Completed", tapHint: "Tap a skill to see where it comes from.", certified: "Certified",
      completed: "Completed", inProgress: "In progress",
      problem: "Problem", approach: "Approach", application: "Business application", result: "Result",
      explore: "Explore my profile",
      end: { overview: { b: "Explore my skills", to: "skills" }, skills: { b: "Discover my projects", to: "projects" }, projects: { b: "Back to overview", to: "overview" } }, exploreSub: "Choose a section to explore", seeProject: "See project", visit: "Visit website", langSwitch: "ES"
    },

    hero: {
      tagline: "Building the bridge between <em>AI</em> and <em>business.</em>",
      line: "I want to connect <b>data and AI</b> with real <b>business needs.</b>",
      bridge: { left: "DATA & AI", center: "THE BRIDGE", right: "BUSINESS VALUE" }
    },

    // ---------- OVERVIEW ----------
    focus: {
      eyebrow: "01 / Current focus",
      logo: "isdi",
      status: "ISDI · 2026–27",
      statusSub: "In progress",
      developing: "Developing",
      title: "Master in Data Analysis & Artificial Intelligence",
      line: "Turning data into business decisions.",
      more: "View what I'm learning",
      skills: [
        { n: "SQL", icon: "sql", ev: "Database queries are part of the master's. Already certified: Introduction to SQL, DataCamp (2026)." },
        { n: "Python", icon: "python", ev: "Predictive models in the Eco-Beauty Hub (L'Oréal Brandstorm). Going deeper in the master's and in Harvard's CS50P." },
        { n: "Machine learning", icon: "ml", ev: "Core of my Brandstorm concept and the basis of my thesis on AI-powered hyperpersonalization." },
        { n: "Generative AI", icon: "genai", ev: "Led the introduction of AI tools across a department: research, creative development and workflow optimization (Farlabo). Certified: ChatGPT & AI, Growit School." },
        { n: "Power BI", icon: "powerbi", ev: "One of the key technologies of the master's, in progress." },
        { n: "Excel", icon: "excel", ev: "Certified: Microsoft Office Specialist: Excel (Office 2019), 2025." },
        { n: "Google Cloud", icon: "googlecloud", ev: "Data architecture and cloud ecosystem. Module in the master's, in progress." },
        { n: "AWS", icon: "aws", ev: "Cloud platform in the master's toolkit, in progress." },
        { n: "Pandas", icon: "pandas", ev: "Data preparation and exploratory analysis with Python. Module in the master's, in progress." },
        { n: "Looker", icon: "looker", ev: "BI exploration and visualization. Module in the master's, in progress." },
        { n: "Agile / Scrum", icon: "agile", ev: "MAWDY (MAPFRE Group): team of 7, agile sprints, Product Owner. Scrum Master in Sprint 1 (the role rotates)." }
      ],
      mawdy: {
        logo: "mawdy", tag: "Real client work", title: "MAWDY", client: "MAPFRE Group", status: "Ongoing",
        line: "Core project of the master's: a real insurance business challenge, solved with data in a team of 7.",
        goto: "projects"
      }
    },

    community: {
      eyebrow: "02 / AI community",
      img: "assets/img/aimpacto.png",
      kind: "Active member · Volunteer",
      name: "AImpacto Madrid Rotaract",
      facts: [
        { icon: "users", t: "Youth-led community using responsible AI to create positive social impact" },
        { icon: "spark", t: "Hackathons & AI training for NGOs" }
      ],
      url: "https://aimpactorotaract.com/",
      cta: "Visit website"
    },

    highlights: {
      eyebrow: "04 / Education & highlights",
      education: {
        title: "Double degree in Business Administration and Marketing",
        globe: { from: "Madrid", to: "Paris" },
        prestige: "1 of 3 students in my cohort selected to study at ESSEC, Paris",
        legs: [
          { logo: "esic", tag: "Home campus · Madrid", org: "ESIC University", y: "2021–25", b: "Bachelor's in Marketing (BDM),", d: " plus a Diploma in Multimedia & Digital Tools built into the four-year programme." },
          { logo: "essec", tag: "Selected · Paris", org: "ESSEC Business School", y: "3rd year", b: "Bachelor's in Global Business Administration (GBBA)", d: " through the joint ESIC–ESSEC programme, with an official double degree." }
        ],
        langs: ["Spanish · native", "English · full professional", "French · limited working"]
      },
      rows: [
        { icon: "medal", t: "Excellence Scholarship", d: "4 years" },
        { icon: "users", t: "Class Delegate", d: "2021–23" },
        { icon: "trophy", t: "L'Oréal Brandstorm", hl: "Semifinalist", d: "Machine learning concept applied to business innovation.", on: true }
      ]
    },

    // ---------- SKILLS ----------
    skills: {
      eyebrow: "02 / Skills I apply",
      applied: [
        { n: "Python", icon: "python", ev: "Predictive models in the Eco-Beauty Hub (L'Oréal Brandstorm). Going deeper in the master's and in Harvard's CS50P." },
        { n: "Machine learning", ev: "Core of my Brandstorm concept and the basis of my thesis on AI-powered hyperpersonalization." },
        { n: "Generative AI", cert: true, ev: "Led the introduction of AI tools across a department: research, creative development and workflow optimization (Farlabo). Certified: ChatGPT & AI, Growit School." },
        { n: "Excel", cert: true, ev: "Certified: Microsoft Office Specialist: Excel (Office 2019), 2025." },
        { n: "Agile / Scrum", ev: "MAWDY (MAPFRE Group): team of 7, agile sprints, Product Owner. Scrum Master in Sprint 1 (the role rotates)." },
        { n: "SQL", cert: true, ev: "Database queries are part of the master's. Already certified: Introduction to SQL, DataCamp (2026)." }
      ],
      ongoing: [
        { n: "Pandas", icon: "pandas", ev: "Data preparation and exploratory analysis with Python. Module in the master's, in progress." },
        { n: "Looker", icon: "looker", ev: "BI exploration and visualization. Module in the master's, in progress." },
        { n: "Power BI", ev: "One of the key technologies of the master's, in progress." },
        { n: "Google Cloud", icon: "googlecloud", ev: "Data architecture and cloud ecosystem. Module in the master's, in progress." },
        { n: "Forecasting & clustering", ev: "Time series, forecasting and segmentation with machine learning. In the master's, in progress." },
        { n: "NLP & recommenders", ev: "Natural language processing and recommender systems. In the master's, in progress." },
        { n: "Data storytelling", ev: "Communicating analysis to drive decisions. In the master's, in progress." },
        { n: "Responsible AI", ev: "Ethics and responsibility in analytics. In the master's, in progress." }
      ]
    },

    certs: {
      eyebrow: "Certifications",
      items: [
        { logo: "microsoft", n: "Microsoft Office Specialist: Excel", org: "Microsoft / Certiport", skill: "Excel", y: "2025", done: true },
        { logo: "datacamp", n: "Introduction to SQL", org: "DataCamp", skill: "SQL", y: "2026", done: true },
        { logo: "growit", n: "ChatGPT & Artificial Intelligence", org: "Growit School", skill: "Generative AI", y: "2026", done: true },
        { logo: "harvard", n: "CS50's Introduction to Programming with Python", org: "Harvard University", skill: "Python", done: false },
        { logo: "ironhack", n: "Applied Artificial Intelligence Intensive Program", org: "Ironhack", skill: "Applied AI", done: false }
      ]
    },

    curriculum: {
      eyebrow: "Inside the master",
      title: "What I'm learning in the master",
      toolsLabel: "Programme toolkit",
      tools: [
        { n: "Python", icon: "python" }, { n: "SQL", icon: "sql" }, { n: "Looker", icon: "looker" },
        { n: "Google Cloud", icon: "googlecloud" }, { n: "Power BI", icon: "powerbi" }, { n: "Google Analytics 4", icon: "ga4" }, { n: "AWS", icon: "aws" },
        { n: "Vertex AI", icon: "ml" }, { n: "ChatGPT", icon: "chatgpt" }, { n: "Excel", icon: "excel" }
      ],
      blocks: [
        { n: "01", t: "Business, data & AI", s: "How data creates value", topics: ["How data creates value", "AI landscape", "Data tech ecosystem & cloud", "Analytical decision-making"] },
        { n: "02", t: "Analysis tools", s: "SQL · Python · Looker", topics: ["SQL queries", "Exploratory analysis in Python", "Data preparation in Python", "BI visualization (Looker)", "Conversational analytics with Gen-AI"] },
        { n: "03", t: "Problems solved with data", s: "ML · forecasting · NLP", topics: ["Descriptive & diagnostic analysis", "Experimentation & causality", "ML: classification & regression", "Clustering", "Time series & forecasting", "NLP", "Recommender systems", "AI engineering with LLMs"] },
        { n: "04", t: "Impact with analytics", s: "Storytelling · ethics", topics: ["Data storytelling", "Integrating analysis into decisions", "Managing analytics projects", "Ethics & responsibility"] }
      ]
    },

    // ---------- PROJECTS ----------
    projects: {
      title: "Technology applied to business",
      detailsLabel: "Project details",
      groups: [
        {
          eyebrow: "Data & AI projects",
          items: [
            {
              id: "mawdy", logo: "mawdy", gfx: "mawdy", type: "Master's core project", status: "In progress",
              title: "MAWDY", sub: "(MAPFRE Group)",
              desc: "Solving a real insurance business challenge through data analytics.",
              caption: "Real client · Team of 7",
              tags: ["Data analysis", "Agile", "Insurance"],
              problem: "A real insurance business challenge posed by MAPFRE Group. Details are confidential.",
              approach: "Data analysis in a 7-person team, working in agile sprints with a Product Owner. I was Scrum Master in Sprint 1; the role rotates.",
              application: "Turning an insurer's business question into a data-driven answer a decision-maker can use."
            },
            {
              id: "brandstorm", logo: "loreal", gfx: "brandstorm", type: "Innovation competition", status: "2024",
              title: "L'Oréal Brandstorm Competition", sub: "France",
              award: { t: "National Semifinalist", s: "Top 40 of 5,000+ participants", icon: "trophy" },
              desc: "Developing a sustainable beauty refill system powered by predictive models and cloud analytics.",
              tags: ["Python", "Machine learning", "Cloud analytics", "Sustainability"],
              problem: "L'Oréal's beauty innovation competition.",
              approach: "A sustainable in-salon refill system backed by cloud analytics and predictive models built in Python.",
              application: "Connecting a sustainability idea to a business case that can be measured.",
              result: "Projected ROI of approximately 18%."
            },
            {
              id: "thesis", logo: "esic", gfx: "thesis", type: "Bachelor's thesis", status: "2025",
              title: "AI-Powered Hyperpersonalization", sub: "From Mass Market to Segment of One",
              desc: "Exploring how AI transforms consumer personalization in fashion.",
              tags: ["Machine learning", "NLP", "Computer vision", "Recommender systems"],
              problem: "How can AI move consumer experience from mass market to the individual, using fashion as the case study?",
              approach: "Primary research and statistical analysis, covering machine learning, NLP, computer vision, recommender systems and consumer-behaviour analytics.",
              application: "Evaluating the impact of AI on personalization in fashion."
            }
          ]
        },
        {
          eyebrow: "University × industry",
          items: [
            {
              id: "lbm", logo: "lebonmarche", gfx: "lbm", type: "University × brand project", status: "2024",
              title: "Le Bon Marché", sub: "Luxury department store (LVMH Group)",
              award: { t: "#1 Ranked Project", icon: "trophy" },
              desc: "Digital analysis to inform business decisions in luxury retail.",
              tags: ["Digital analytics", "Retail"],
              problem: "A digital analysis brief for Le Bon Marché.",
              approach: "Analytical work on the brand's digital presence as part of the double degree.",
              application: "Using digital data to inform decisions in luxury retail.",
              result: "Ranked #1 among the projects."
            },
            {
              id: "loewe", logo: "loewe", gfx: "loewe", type: "University × brand project", status: "2024",
              title: "LOEWE",
              award: { t: "Highest Grade Awarded", icon: "medal" },
              desc: "Developing a retail strategy through artificial intelligence.",
              tags: ["AI strategy", "Retail", "Luxury"],
              problem: "A retail strategy brief for Loewe.",
              approach: "A retail strategy built around the use of artificial intelligence.",
              application: "Applying AI to retail decisions in luxury.",
              result: "Highest grade awarded."
            }
          ]
        }
      ]
    },

    // ---------- BACKGROUND ----------
    experience: {
      eyebrow: "03 / Business experience",
      main: {
        logo: "farlabo", org: "Farlabo", role: "In-house brands marketing", period: "Jan 2025 – May 2026",
        big: "1.5 years", sub: "developing business",
        points: [
          { icon: "rocket", t: "Product Development & Launches", d: "Fragrance development and launches for Aristocrazy and Hoss Intropia." },
          { icon: "spark", t: "AI Adoption", d: "Led AI adoption across the department to optimize workflows." },
          { icon: "globe", t: "International Expansion", d: "Coordinated German market entry through analysis and benchmarking." }
        ]
      },
      earlier: [
        { logo: "okiko", org: "Okiko Creatives", role: "Intern", period: "2024–25", d: "Campaign performance and audience analysis to improve organic reach." },
        { logo: "sarayu", org: "Sarayü Consulting · Paris", role: "Intern", period: "2023–24", d: "Business model, pricing and positioning for a luxury childrenswear brand, from scratch." },
        { logo: "southsummit", org: "South Summit", role: "Marketing Specialist", period: "2023", d: "Digital marketing strategy within an innovation ecosystem connecting startups, investors and technology leaders." },
        { logo: "wow", org: "WOW Studio", role: "Founder", period: "2022–23", d: "Fashion-accessories e-commerce: website, brand, acquisition and conversion analysis." }
      ]
    }
  },

  es: null
};
