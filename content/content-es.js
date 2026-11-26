/* =====================================================================
   VERSIÓN EN ESPAÑOL — solo lo que cambia respecto a `en`.
   Lo demás (iconos, logos, ids, enlaces) se hereda del inglés.
   Para editar un texto en español, cámbialo aquí.
   ===================================================================== */
(function () {
  var en = window.CONTENT.en;
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function merge(b, o) {
    if (Array.isArray(o)) { return o.map(function (v, i) { return (v && typeof v === "object" && b && b[i] !== undefined) ? merge(b[i], v) : v; }); }
    if (o && typeof o === "object") { var r = b && typeof b === "object" ? b : {}; Object.keys(o).forEach(function (k) { r[k] = (o[k] && typeof o[k] === "object" && r[k] !== undefined) ? merge(r[k], o[k]) : o[k]; }); return r; }
    return o;
  }

  var T = {
    meta: {
      title: "Sofía Ramos Quintás · Data & IA para negocio",
      description: "Construyendo el puente entre la IA y el negocio. Máster en Data Analysis & AI (ISDI) · Doble titulación ESSEC × ESIC."
    },
    person: { eyebrow: "Data & IA × Negocio", role: "Máster en Data Analysis & AI", sub: "Graduada en Business & Marketing" },
    contact: { cv: "assets/cv/Sofia-Ramos-CV-ES.pdf", emailSubject: "Hola Sofía, nos conocimos en el Talent Day de ISDI" },
    fromCard: "Nos conocimos en el <b>Talent Day de ISDI</b>. Gracias por pasarte.",
    ui: {
      tabs: { overview: "Resumen", skills: "Skills", projects: "Proyectos" },
      cv: "Descargar CV", linkedin: "LinkedIn", email: "Email",
      applied: "Aplicadas", ongoing: "En curso en el máster", legend: "aplicadas", legend2: "en curso", ongoingBadge: "En curso",
      inProgressH: "En curso", completedH: "Completadas", tapHint: "Toca una skill para ver de dónde viene.", certified: "Certificada",
      completed: "Completada", inProgress: "En curso",
      problem: "Problema", approach: "Enfoque", application: "Aplicación al negocio", result: "Resultado",
      explore: "Explora mi perfil",
      end: { overview: { b: "Explora mis skills", to: "skills" }, skills: { b: "Descubre mis proyectos", to: "projects" }, projects: { b: "Volver al resumen", to: "overview" } },
      seeProject: "Ver proyecto", visit: "Visitar web", langSwitch: "EN", langName: "English", click: "Ver"
    },
    hero: {
      tagline: "Construyendo el puente entre la <em>IA</em> y el <em>negocio.</em>",
      line: "Quiero conectar los <b>datos y la IA</b> con <b>necesidades reales de negocio.</b>",
      bridge: { left: "DATA & IA", center: "EL PUENTE", right: "VALOR DE NEGOCIO" }
    },
    focus: {
      eyebrow: "Foco actual",
      statusSub: "En curso",
      developing: "Desarrollando",
      title: "Máster en Data Analysis & Artificial Intelligence",
      line: "Convertir los datos en decisiones de negocio.",
      more: "Ver lo que estoy aprendiendo",
      skills: [
        { ev: "Las consultas a bases de datos forman parte del máster. Ya certificada: Introduction to SQL, DataCamp (2026)." },
        { ev: "Modelos predictivos en el Eco-Beauty Hub (L'Oréal Brandstorm). Profundizando en el máster y en CS50P de Harvard." },
        { n: "Machine learning", ev: "Núcleo de mi concepto de Brandstorm y base de mi TFG sobre hiperpersonalización con IA." },
        { n: "IA generativa", ev: "Lideré la introducción de herramientas de IA en un departamento: investigación, desarrollo creativo y optimización de flujos de trabajo (Farlabo). Certificada: ChatGPT & AI, Growit School." },
        { ev: "Una de las tecnologías clave del máster, en curso." },
        { ev: "Certificada: Microsoft Office Specialist: Excel (Office 2019), 2025." },
        { ev: "Arquitectura de datos y ecosistema cloud. Módulo del máster, en curso." },
        { ev: "Plataforma cloud del toolkit del máster, en curso." },
        { ev: "Preparación de datos y análisis exploratorio con Python. Módulo del máster, en curso." },
        { ev: "Exploración y visualización BI. Módulo del máster, en curso." },
        { n: "Agile / Scrum", ev: "MAWDY (MAPFRE Group): equipo de 7, sprints ágiles, Product Owner. Scrum Master en el Sprint 1 (el rol rota)." }
      ],
      mawdy: {
        tag: "Trabajo real con cliente", status: "En curso",
        line: "Proyecto troncal del máster: un reto real de negocio asegurador, resuelto con datos en un equipo de 7."
      }
    },
    community: {
      eyebrow: "Comunidad de IA",
      kind: "Miembro activa · Voluntariado",
      facts: [
        { t: "Comunidad liderada por jóvenes que usa la IA de forma responsable para generar impacto social positivo" },
        { t: "Hackathones y formación en IA para ONG" }
      ],
      cta: "Visitar web"
    },
    highlights: {
      eyebrow: "Formación y logros",
      education: {
        title: "Doble titulación en Business Administration & Marketing",
        subtitle: "ESIC University (Madrid) × ESSEC Business School (París)",
        globe: { from: "Madrid", to: "París" },
        prestige: "1 de solo 3 estudiantes seleccionados para el programa de doble titulación de ESSEC.",
        legs: [
          { deg: "Grado 01 · Marketing", tag: "Madrid", y: "2021–2025", org: "ESIC University", b: "Grado en Marketing (BDM),", d: " más un <em>Diploma en Multimedia & Digital Tools</em> integrado en el programa de cuatro años." },
          { deg: "Grado 02 · Business Administration", tag: "París", org: "ESSEC Business School", y: "3.er curso", b: "Grado en Global Business Administration (GBBA)", d: " a través del programa conjunto ESIC–ESSEC, con doble titulación oficial." }
        ],
        langs: ["Español · nativo", "Inglés · profesional completo", "Francés · profesional limitado"]
      },
      rows: [
        { t: "Beca de Excelencia", d: "4 años" },
        { t: "Delegada de clase", d: "2021–23" },
        { t: "L'Oréal Brandstorm", hl: "Semifinalista", d: "Concepto de machine learning aplicado a la innovación de negocio." }
      ]
    },
    skills: {
      eyebrow: "Skills que aplico",
      applied: [
        { ev: "Modelos predictivos en el Eco-Beauty Hub (L'Oréal Brandstorm). Profundizando en el máster y en CS50P de Harvard." },
        { n: "Machine learning", ev: "Núcleo de mi concepto de Brandstorm y base de mi TFG sobre hiperpersonalización con IA." },
        { n: "IA generativa", ev: "Lideré la introducción de herramientas de IA en un departamento: investigación, desarrollo creativo y optimización de flujos de trabajo (Farlabo). Certificada: ChatGPT & AI, Growit School." },
        { ev: "Certificada: Microsoft Office Specialist: Excel (Office 2019), 2025." },
        { n: "Agile / Scrum", ev: "MAWDY (MAPFRE Group): equipo de 7, sprints ágiles, Product Owner. Scrum Master en el Sprint 1 (el rol rota)." },
        { ev: "Las consultas a bases de datos forman parte del máster. Ya certificada: Introduction to SQL, DataCamp (2026)." }
      ],
      ongoing: [
        { ev: "Preparación de datos y análisis exploratorio con Python. Módulo del máster, en curso." },
        { ev: "Exploración y visualización BI. Módulo del máster, en curso." },
        { ev: "Una de las tecnologías clave del máster, en curso." },
        { ev: "Arquitectura de datos y ecosistema cloud. Módulo del máster, en curso." },
        { n: "Forecasting y clustering", ev: "Series temporales, previsión y segmentación con machine learning. En el máster, en curso." },
        { n: "NLP y sistemas de recomendación", ev: "Procesamiento del lenguaje natural y sistemas de recomendación. En el máster, en curso." },
        { n: "Data storytelling", ev: "Comunicar el análisis para impulsar decisiones. En el máster, en curso." },
        { n: "IA responsable", ev: "Ética y responsabilidad en el análisis de datos. En el máster, en curso." }
      ]
    },
    certs: {
      eyebrow: "Certificaciones",
      items: [
        { skill: "Excel" }, { skill: "SQL" },
        { n: "ChatGPT e Inteligencia Artificial", skill: "IA generativa" },
        { n: "CS50: Introducción a la programación con Python", skill: "Python" },
        { n: "Programa intensivo de Inteligencia Artificial aplicada", skill: "IA aplicada" }
      ]
    },
    curriculum: {
      eyebrow: "Dentro del máster",
      title: "Lo que aprendo en el máster",
      toolsLabel: "Toolkit del programa",
      blocks: [
        { t: "Negocio, datos e IA", s: "Cómo los datos generan valor", topics: ["Cómo los datos generan valor", "Panorama de la IA", "Ecosistema tecnológico de datos y cloud", "Toma de decisiones analítica"] },
        { t: "Herramientas de análisis", s: "SQL · Python · Looker", topics: ["Consultas SQL", "Análisis exploratorio en Python", "Preparación de datos en Python", "Visualización BI (Looker)", "Analítica conversacional con IA generativa"] },
        { t: "Problemas resueltos con datos", s: "ML · forecasting · NLP", topics: ["Análisis descriptivo y diagnóstico", "Experimentación y causalidad", "ML: clasificación y regresión", "Clustering", "Series temporales y forecasting", "NLP", "Sistemas de recomendación", "AI engineering con LLM"] },
        { t: "Impacto con analítica", s: "Storytelling · ética", topics: ["Data storytelling", "Integrar el análisis en las decisiones", "Gestión de proyectos de analítica", "Ética y responsabilidad"] }
      ]
    },
    gfxLabels: { sus: "SOSTENIBILIDAD", pred: "IA PREDICTIVA", inno: "INNOVACIÓN", lux: "RETAIL DE LUJO", ais: "ESTRATEGIA DE IA", val: "VALOR DE NEGOCIO", mass: "MERCADO MASIVO", one: "SEGMENTO DE UNO" },
    projects: {
      title: "Tecnología aplicada al negocio",
      detailsLabel: "Detalles del proyecto",
      groups: [
        {
          eyebrow: "Proyectos de Data & IA",
          items: [
            {
              type: "Proyecto troncal del máster", status: "En curso", sub: "(MAPFRE Group)",
              desc: "Resolver un reto real de negocio asegurador mediante analítica de datos.",
              caption: "Cliente real · Equipo de 7",
              tags: ["Análisis de datos", "Agile", "Seguros"],
              problem: "Un reto real de negocio asegurador planteado por MAPFRE Group. Los detalles son confidenciales.",
              approach: "Análisis de datos en un equipo de 7 personas, con sprints ágiles y un Product Owner. Fui Scrum Master en el Sprint 1; el rol rota.",
              application: "Convertir una pregunta de negocio de una aseguradora en una respuesta basada en datos que un decisor pueda usar."
            },
            {
              type: "Competición de innovación", sub: "Francia",
              award: { t: "Semifinalista nacional", s: "Top 40 de más de 5.000 participantes" },
              desc: "Desarrollo de un sistema sostenible de recarga de productos de belleza con modelos predictivos y analítica en la nube.",
              tags: ["Python", "Machine learning", "Analítica cloud", "Sostenibilidad"],
              problem: "La competición de innovación en belleza de L'Oréal.",
              approach: "Un sistema sostenible de recarga en salón, apoyado en analítica cloud y modelos predictivos creados en Python.",
              application: "Conectar una idea de sostenibilidad con un caso de negocio medible.",
              result: "ROI proyectado de aproximadamente el 18%."
            },
            {
              type: "TFG", sub: "Del mercado masivo al segmento de uno",
              title: "Hiperpersonalización con IA",
              desc: "Cómo la IA transforma la personalización del consumidor en moda.",
              tags: ["Machine learning", "NLP", "Visión por computador", "Sistemas de recomendación"],
              problem: "¿Cómo puede la IA llevar la experiencia de consumidor del mercado masivo al individuo, tomando la moda como caso de estudio?",
              approach: "Investigación primaria y análisis estadístico sobre machine learning, NLP, visión por computador, sistemas de recomendación y analítica del comportamiento del consumidor.",
              application: "Evaluar el impacto de la IA en la personalización en el sector moda."
            }
          ]
        },
        {
          eyebrow: "Universidad × industria",
          items: [
            {
              type: "Proyecto universidad × marca", sub: "Grandes almacenes de lujo (LVMH Group)",
              award: { t: "Proyecto n.º 1" },
              desc: "Análisis digital para orientar decisiones de negocio en el retail de lujo.",
              tags: ["Analítica digital", "Retail"],
              problem: "Un encargo de análisis digital para Le Bon Marché.",
              approach: "Trabajo analítico sobre la presencia digital de la marca dentro de la doble titulación.",
              application: "Usar datos digitales para orientar decisiones en el retail de lujo.",
              result: "Clasificado n.º 1 entre los proyectos."
            },
            {
              type: "Proyecto universidad × marca",
              award: { t: "Máxima nota" },
              desc: "Desarrollo de una estrategia de retail a través de la inteligencia artificial.",
              tags: ["Estrategia de IA", "Retail", "Lujo"],
              problem: "Un encargo de estrategia de retail para Loewe.",
              approach: "Una estrategia de retail construida en torno al uso de la inteligencia artificial.",
              application: "Aplicar la IA a decisiones de retail en el sector del lujo.",
              result: "Máxima nota otorgada."
            }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "Experiencia profesional",
      main: {
        role: "Marketing de marcas propias", period: "Ene 2025 – May 2026",
        big: "1,5 años", sub: "desarrollando negocio",
        points: [
          { t: "Desarrollo de producto y lanzamientos", d: "Desarrollo y lanzamiento de fragancias para Aristocrazy y Hoss Intropia." },
          { t: "Adopción de IA", d: "Lideré la adopción de IA en el departamento para optimizar los flujos de trabajo." },
          { t: "Expansión internacional", d: "Coordiné la entrada en el mercado alemán mediante análisis y benchmarking." }
        ]
      },
      earlier: [
        { role: "Becaria", period: "2024–25", d: "Análisis del rendimiento de campañas y de la audiencia para mejorar el alcance orgánico." },
        { org: "Sarayü Consulting · París", role: "Becaria", period: "2023–24", d: "Modelo de negocio, pricing y posicionamiento para una nueva marca de moda infantil de lujo, desde cero." },
        { role: "Especialista de Marketing", period: "2023", d: "Estrategia de marketing digital dentro de un ecosistema de innovación que conecta startups, inversores y líderes tecnológicos." },
        { role: "Fundadora", period: "2022–23", d: "E-commerce de accesorios de moda: web, marca, captación y análisis de conversión." }
      ]
    }
  };

  window.CONTENT.es = merge(clone(en), T);
})();
