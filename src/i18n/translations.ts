export type Lang = "pt" | "es" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "PT-BR", flag: "🇧🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "en", label: "EN", flag: "🇺🇸" },
];

export type CropKey =
  | "maca"
  | "tomate"
  | "uva"
  | "morango"
  | "citros"
  | "manga"
  | "cevada"
  | "trigo";

export type Crop = {
  key: CropKey;
  name: string;
  stat: string;
  statLabel: string;
  results: string;
  environment: string;
  conclusion: string;
};

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    mechanism: string;
    results: string;
    lines: string;
    sustainability: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  mechanism: {
    eyebrow: string;
    title: string;
    lead: string;
    punch: string;
    body: string;
    cards: { title: string; text: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { year: string; title: string; text: string }[];
  };
  crops: {
    eyebrow: string;
    title: string;
    lead: string;
    labels: { results: string; environment: string; conclusion: string };
    items: Crop[];
  };
  lines: {
    eyebrow: string;
    title: string;
    items: { name: string; text: string; bullets: string[] }[];
  };
  sustainability: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    name: string;
    company: string;
    crop: string;
    message: string;
    submit: string;
    success: string;
    units: { label: string; value: string }[];
  };
  footer: { rights: string; partners: string };
};

const pt: Dict = {
  meta: {
    title: "SteriClean — Sanitizante agrícola de tecnologia húngara no Brasil",
    description:
      "SteriClean é um sanitizante e condicionador à base de água que oxida fungos e bactérias sem resíduo químico e sem gerar resistência. Resultados comprovados em maçã, tomate, uva, morango, citros, manga, cevada e trigo.",
  },
  nav: {
    mechanism: "Como funciona",
    results: "Resultados",
    lines: "Linhas",
    sustainability: "Sustentabilidade",
    contact: "Contato",
  },
  hero: {
    eyebrow: "Tecnologia húngara · Produção no Paraná",
    title: "O fim da resistência aos fungicidas",
    highlight: "começa com oxidação direta",
    subtitle:
      "SteriClean não envenena o fungo — rompe a parede celular por oxidação, como fazem os leucócitos no corpo humano. Sem resíduo, sem carência, sem resistência microbiana.",
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver resultados",
    stats: [
      { value: "88,7%", label: "redução de esporos em maçã Fuji" },
      { value: "31 dias", label: "vida de prateleira do morango (era 14)" },
      { value: "90–100%", label: "redução fúngica em manga · Embrapa" },
    ],
  },
  mechanism: {
    eyebrow: "Mecanismo de ação",
    title: "Oxidação direta, não química sistêmica",
    lead:
      "A molécula ativa do SteriClean é gerada a partir da água e age por contato: oxida a membrana do microrganismo em segundos.",
    punch: "Não envenena o fungo. Rasga a pele do fungo.",
    body:
      "Por atuar fisicamente, e não por rota bioquímica, o patógeno não desenvolve resistência ao longo das safras — diferente dos fungicidas convencionais, que perdem eficácia a cada ciclo de uso.",
    cards: [
      {
        title: "Base água",
        text: "Formulação aquosa, sem solvente e sem resíduo químico no fruto.",
      },
      {
        title: "Ação por contato",
        text: "Oxidação imediata de fungos, bactérias e vírus na superfície tratada.",
      },
      {
        title: "Zero resistência",
        text: "Modo de ação físico: não há pressão de seleção sobre o patógeno.",
      },
      {
        title: "Compatível",
        text: "Uso em campo, pós-colheita, câmara fria e sanitização de ambientes.",
      },
    ],
  },
  timeline: {
    eyebrow: "Trajetória institucional",
    title: "Da Hungria ao Paraná",
    lead:
      "A chegada do SteriClean ao Brasil foi construída com respaldo público e científico.",
    items: [
      {
        year: "2023",
        title: "Palácio Iguaçu, Curitiba",
        text: "Assinatura do acordo com o Governo do Paraná e o Consulado da Hungria.",
      },
      {
        year: "2025",
        title: "Agroleite, Castro/PR",
        text: "Anúncio da fábrica Sanfer para produção nacional do SteriClean.",
      },
      {
        year: "2026",
        title: "Biopark, Toledo/PR",
        text: "Inauguração da unidade em 31/03/2026, dentro do parque de inovação.",
      },
    ],
  },
  crops: {
    eyebrow: "Prova de campo",
    title: "Resultados por cultura",
    lead: "Dados de ensaios conduzidos com produtores, cooperativas e instituições de pesquisa.",
    labels: {
      results: "Resultados técnicos",
      environment: "Ambiente",
      conclusion: "Conclusão",
    },
    items: [
      {
        key: "maca",
        name: "Maçã Fuji",
        stat: "88,7%",
        statLabel: "menos esporos nos frutos",
        results:
          "Redução de 84,8% de Penicillium expansum no ar e de 88,7% nos esporos presentes nos frutos.",
        environment: "Câmaras frias de armazenamento pós-colheita.",
        conclusion:
          "Queda expressiva da pressão de inóculo no armazenamento, reduzindo perdas por podridão azul.",
      },
      {
        key: "tomate",
        name: "Tomate",
        stat: "+13%",
        statLabel: "licopeno (7,04 → 7,96 mg/kg)",
        results: "°Brix de 3,63 para 4,10; licopeno de 7,04 para 7,96 mg/kg; +9% no peso médio do fruto.",
        environment: "Cultivo comercial com aplicação foliar programada.",
        conclusion: "Ganho simultâneo de qualidade sensorial, valor nutricional e produtividade.",
      },
      {
        key: "uva",
        name: "Uva / Videira",
        stat: "0",
        statLabel: "sinais de fitotoxicidade",
        results: "Controle de míldio com eficiência comparável ao padrão adotado pelo produtor.",
        environment: "Parreirais comerciais em ciclo completo.",
        conclusion:
          "Substituição parcial do programa químico sem perda de controle e sem dano à planta.",
      },
      {
        key: "morango",
        name: "Morango",
        stat: "31 dias",
        statLabel: "de vida de prateleira (era 14)",
        results: "Vida de prateleira ampliada de 14 para 31 dias após tratamento.",
        environment: "Pós-colheita, bandejas em condição comercial.",
        conclusion: "Mais que o dobro de janela de comercialização e queda direta no descarte.",
      },
      {
        key: "citros",
        name: "Citros",
        stat: "↑",
        statLabel: "mortalidade do psilídeo asiático",
        results: "Melhor mortalidade do psilídeo asiático com SteriClean associado a óleo de laranja.",
        environment: "Ensaio Coacipar, Paranavaí/PR.",
        conclusion: "Ferramenta adicional no manejo do vetor do greening, com baixo impacto residual.",
      },
      {
        key: "manga",
        name: "Manga",
        stat: "90–100%",
        statLabel: "redução da população fúngica",
        results:
          "Redução de 90% a 100% de Aspergillus niger e Glomerella sp., sem dano à epiderme do fruto.",
        environment: "Ensaio Embrapa Semiárido, Petrolina/PE — linha de beneficiamento.",
        conclusion: "Sanitização eficaz na esteira de processamento, preservando a aparência comercial.",
      },
      {
        key: "cevada",
        name: "Cevada",
        stat: "93,2%",
        statLabel: "de brotação (pico observado)",
        results: "Brotação de 87,4% a 93,2%; perdas da cadeia caíram de 25% para 8%.",
        environment: "Cadeia maltadora em Guarapuava/PR.",
        conclusion: "Menos perda entre lavoura e maltaria, com grão mais uniforme.",
      },
      {
        key: "trigo",
        name: "Trigo",
        stat: "↓",
        statLabel: "podridão interna por giberela",
        results:
          "Redução da podridão interna causada por Fusarium graminearum, sem impacto sobre a floração.",
        environment: "Aplicação em janela de floração.",
        conclusion: "Proteção do grão em um dos períodos mais críticos da cultura.",
      },
    ],
  },
  lines: {
    eyebrow: "Linhas de produto",
    title: "Uma tecnologia, duas frentes",
    items: [
      {
        name: "SteriClean Agro",
        text: "Para lavoura, pós-colheita e armazenamento.",
        bullets: [
          "Controle de fungos e bactérias",
          "Apoio no manejo de pragas",
          "Qualidade e vida de prateleira",
          "Produtividade e uniformidade",
        ],
      },
      {
        name: "SteriClean Vet",
        text: "Para sanitização de ambientes de produção animal.",
        bullets: [
          "Salmonella em aviários",
          "Vírus Seneca em suinocultura",
          "Mastite bovina",
          "Higienização de instalações e equipamentos",
        ],
      },
    ],
  },
  sustainability: {
    eyebrow: "Sustentabilidade",
    title: "Eficiência sem passivo ambiental",
    lead: "Comparado ao programa químico tradicional, o SteriClean muda a equação.",
    items: [
      { title: "Sem resíduo químico", text: "Produto à base de água: nada de resíduo no fruto ou no solo." },
      { title: "Sem resistência", text: "O modo de ação físico não seleciona populações resistentes." },
      { title: "Sem carência", text: "Compatível com colheita e beneficiamento imediatos." },
      { title: "Menos descarte", text: "Vida de prateleira maior reduz perda de alimento na cadeia." },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Fale com um especialista",
    lead: "Conte a sua cultura e o seu desafio — retornamos com um protocolo de aplicação.",
    name: "Nome",
    company: "Empresa",
    crop: "Cultura / segmento",
    message: "Mensagem",
    submit: "Enviar mensagem",
    success: "Mensagem registrada. Entraremos em contato em breve.",
    units: [
      { label: "Unidade de tecnologia", value: "Tijucas / SC" },
      { label: "Comercial", value: "Curitiba / PR" },
      { label: "Fábrica", value: "Biopark — Toledo / PR" },
    ],
  },
  footer: { rights: "Todos os direitos reservados.", partners: "Parceiros" },
};

const es: Dict = {
  meta: {
    title: "SteriClean — Sanitizante agrícola de tecnología húngara en Brasil",
    description:
      "SteriClean es un sanitizante y acondicionador a base de agua que oxida hongos y bacterias sin residuo químico y sin generar resistencia. Resultados comprobados en manzana, tomate, uva, frutilla, cítricos, mango, cebada y trigo.",
  },
  nav: {
    mechanism: "Cómo funciona",
    results: "Resultados",
    lines: "Líneas",
    sustainability: "Sostenibilidad",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "Tecnología húngara · Producción en Paraná",
    title: "El fin de la resistencia a los fungicidas",
    highlight: "empieza con oxidación directa",
    subtitle:
      "SteriClean no envenena al hongo: rompe la pared celular por oxidación, como hacen los leucocitos en el cuerpo humano. Sin residuo, sin carencia, sin resistencia microbiana.",
    ctaPrimary: "Hablar con un especialista",
    ctaSecondary: "Ver resultados",
    stats: [
      { value: "88,7%", label: "menos esporas en manzana Fuji" },
      { value: "31 días", label: "vida útil de la frutilla (antes 14)" },
      { value: "90–100%", label: "reducción fúngica en mango · Embrapa" },
    ],
  },
  mechanism: {
    eyebrow: "Mecanismo de acción",
    title: "Oxidación directa, no química sistémica",
    lead:
      "La molécula activa de SteriClean se genera a partir del agua y actúa por contacto: oxida la membrana del microorganismo en segundos.",
    punch: "No envenena al hongo. Rompe la piel del hongo.",
    body:
      "Al actuar físicamente y no por ruta bioquímica, el patógeno no desarrolla resistencia a lo largo de las zafras, a diferencia de los fungicidas convencionales, que pierden eficacia en cada ciclo.",
    cards: [
      { title: "Base agua", text: "Formulación acuosa, sin solvente y sin residuo químico en el fruto." },
      { title: "Acción por contacto", text: "Oxidación inmediata de hongos, bacterias y virus en la superficie tratada." },
      { title: "Cero resistencia", text: "Modo de acción físico: no hay presión de selección sobre el patógeno." },
      { title: "Compatible", text: "Uso en campo, poscosecha, cámara fría y sanitización de ambientes." },
    ],
  },
  timeline: {
    eyebrow: "Trayectoria institucional",
    title: "De Hungría a Paraná",
    lead: "La llegada de SteriClean a Brasil se construyó con respaldo público y científico.",
    items: [
      { year: "2023", title: "Palacio Iguaçu, Curitiba", text: "Firma del acuerdo con el Gobierno de Paraná y el Consulado de Hungría." },
      { year: "2025", title: "Agroleite, Castro/PR", text: "Anuncio de la planta Sanfer para producción nacional de SteriClean." },
      { year: "2026", title: "Biopark, Toledo/PR", text: "Inauguración de la unidad el 31/03/2026, dentro del parque de innovación." },
    ],
  },
  crops: {
    eyebrow: "Prueba de campo",
    title: "Resultados por cultivo",
    lead: "Datos de ensayos con productores, cooperativas e instituciones de investigación.",
    labels: { results: "Resultados técnicos", environment: "Ambiente", conclusion: "Conclusión" },
    items: [
      {
        key: "maca",
        name: "Manzana Fuji",
        stat: "88,7%",
        statLabel: "menos esporas en los frutos",
        results: "Reducción del 84,8% de Penicillium expansum en el aire y del 88,7% en las esporas de los frutos.",
        environment: "Cámaras frías de almacenamiento poscosecha.",
        conclusion: "Fuerte caída de la presión de inóculo, reduciendo pérdidas por moho azul.",
      },
      {
        key: "tomate",
        name: "Tomate",
        stat: "+13%",
        statLabel: "licopeno (7,04 → 7,96 mg/kg)",
        results: "°Brix de 3,63 a 4,10; licopeno de 7,04 a 7,96 mg/kg; +9% en el peso medio del fruto.",
        environment: "Cultivo comercial con aplicación foliar programada.",
        conclusion: "Ganancia simultánea de calidad sensorial, valor nutricional y productividad.",
      },
      {
        key: "uva",
        name: "Uva / Vid",
        stat: "0",
        statLabel: "señales de fitotoxicidad",
        results: "Control de mildiu con eficiencia comparable al estándar del productor.",
        environment: "Viñedos comerciales en ciclo completo.",
        conclusion: "Sustitución parcial del programa químico sin pérdida de control ni daño a la planta.",
      },
      {
        key: "morango",
        name: "Frutilla",
        stat: "31 días",
        statLabel: "de vida útil (antes 14)",
        results: "Vida útil ampliada de 14 a 31 días tras el tratamiento.",
        environment: "Poscosecha, bandejas en condición comercial.",
        conclusion: "Más del doble de ventana comercial y caída directa del descarte.",
      },
      {
        key: "citros",
        name: "Cítricos",
        stat: "↑",
        statLabel: "mortalidad del psílido asiático",
        results: "Mejor mortalidad del psílido asiático con SteriClean asociado a aceite de naranja.",
        environment: "Ensayo Coacipar, Paranavaí/PR.",
        conclusion: "Herramienta adicional en el manejo del vector del HLB, con bajo impacto residual.",
      },
      {
        key: "manga",
        name: "Mango",
        stat: "90–100%",
        statLabel: "reducción de la población fúngica",
        results: "Reducción del 90% al 100% de Aspergillus niger y Glomerella sp., sin daño a la epidermis.",
        environment: "Ensayo Embrapa Semiárido, Petrolina/PE — línea de empaque.",
        conclusion: "Sanitización eficaz en la cinta de procesamiento, preservando la apariencia comercial.",
      },
      {
        key: "cevada",
        name: "Cebada",
        stat: "93,2%",
        statLabel: "de germinación (pico observado)",
        results: "Germinación del 87,4% al 93,2%; pérdidas de la cadena bajaron del 25% al 8%.",
        environment: "Cadena maltera en Guarapuava/PR.",
        conclusion: "Menos pérdida entre campo y maltería, con grano más uniforme.",
      },
      {
        key: "trigo",
        name: "Trigo",
        stat: "↓",
        statLabel: "pudrición interna por fusariosis",
        results: "Reducción de la pudrición interna causada por Fusarium graminearum, sin impacto en la floración.",
        environment: "Aplicación en ventana de floración.",
        conclusion: "Protección del grano en uno de los períodos más críticos del cultivo.",
      },
    ],
  },
  lines: {
    eyebrow: "Líneas de producto",
    title: "Una tecnología, dos frentes",
    items: [
      {
        name: "SteriClean Agro",
        text: "Para campo, poscosecha y almacenamiento.",
        bullets: ["Control de hongos y bacterias", "Apoyo en el manejo de plagas", "Calidad y vida útil", "Productividad y uniformidad"],
      },
      {
        name: "SteriClean Vet",
        text: "Para sanitización de ambientes de producción animal.",
        bullets: ["Salmonella en avicultura", "Virus Seneca en porcinos", "Mastitis bovina", "Higienización de instalaciones y equipos"],
      },
    ],
  },
  sustainability: {
    eyebrow: "Sostenibilidad",
    title: "Eficiencia sin pasivo ambiental",
    lead: "Comparado con el programa químico tradicional, SteriClean cambia la ecuación.",
    items: [
      { title: "Sin residuo químico", text: "Producto a base de agua: sin residuo en el fruto ni en el suelo." },
      { title: "Sin resistencia", text: "El modo de acción físico no selecciona poblaciones resistentes." },
      { title: "Sin carencia", text: "Compatible con cosecha y procesamiento inmediatos." },
      { title: "Menos descarte", text: "Mayor vida útil reduce la pérdida de alimento en la cadena." },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hable con un especialista",
    lead: "Cuéntenos su cultivo y su desafío: respondemos con un protocolo de aplicación.",
    name: "Nombre",
    company: "Empresa",
    crop: "Cultivo / segmento",
    message: "Mensaje",
    submit: "Enviar mensaje",
    success: "Mensaje registrado. Nos pondremos en contacto pronto.",
    units: [
      { label: "Unidad de tecnología", value: "Tijucas / SC" },
      { label: "Comercial", value: "Curitiba / PR" },
      { label: "Planta", value: "Biopark — Toledo / PR" },
    ],
  },
  footer: { rights: "Todos los derechos reservados.", partners: "Socios" },
};

const en: Dict = {
  meta: {
    title: "SteriClean — Hungarian sanitizing technology for Brazilian agriculture",
    description:
      "SteriClean is a water-based sanitizer and conditioner that oxidizes fungi and bacteria with no chemical residue and no microbial resistance. Proven results in apple, tomato, grape, strawberry, citrus, mango, barley and wheat.",
  },
  nav: {
    mechanism: "How it works",
    results: "Results",
    lines: "Product lines",
    sustainability: "Sustainability",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Hungarian technology · Made in Paraná",
    title: "The end of fungicide resistance",
    highlight: "starts with direct oxidation",
    subtitle:
      "SteriClean doesn't poison the fungus — it ruptures the cell wall by oxidation, the way leukocytes do in the human body. No residue, no pre-harvest interval, no microbial resistance.",
    ctaPrimary: "Talk to a specialist",
    ctaSecondary: "See results",
    stats: [
      { value: "88.7%", label: "spore reduction in Fuji apple" },
      { value: "31 days", label: "strawberry shelf life (was 14)" },
      { value: "90–100%", label: "fungal reduction in mango · Embrapa" },
    ],
  },
  mechanism: {
    eyebrow: "Mode of action",
    title: "Direct oxidation, not systemic chemistry",
    lead:
      "SteriClean's active molecule is generated from water and acts on contact: it oxidizes the microorganism's membrane in seconds.",
    punch: "It doesn't poison the fungus. It tears the fungus open.",
    body:
      "Because the action is physical rather than biochemical, pathogens don't build resistance season after season — unlike conventional fungicides, which lose efficacy with every cycle of use.",
    cards: [
      { title: "Water-based", text: "Aqueous formulation, solvent-free and residue-free on the fruit." },
      { title: "Contact action", text: "Immediate oxidation of fungi, bacteria and viruses on the treated surface." },
      { title: "Zero resistance", text: "Physical mode of action means no selection pressure on the pathogen." },
      { title: "Versatile", text: "Field, post-harvest, cold storage and facility sanitation." },
    ],
  },
  timeline: {
    eyebrow: "Institutional track record",
    title: "From Hungary to Paraná",
    lead: "SteriClean's arrival in Brazil was built on public and scientific backing.",
    items: [
      { year: "2023", title: "Iguaçu Palace, Curitiba", text: "Agreement signed with the Government of Paraná and the Consulate of Hungary." },
      { year: "2025", title: "Agroleite, Castro/PR", text: "Announcement of the Sanfer plant for domestic SteriClean production." },
      { year: "2026", title: "Biopark, Toledo/PR", text: "Facility inaugurated on 03/31/2026 inside the innovation park." },
    ],
  },
  crops: {
    eyebrow: "Field evidence",
    title: "Results by crop",
    lead: "Data from trials run with growers, cooperatives and research institutions.",
    labels: { results: "Technical results", environment: "Setting", conclusion: "Takeaway" },
    items: [
      {
        key: "maca",
        name: "Fuji apple",
        stat: "88.7%",
        statLabel: "fewer spores on the fruit",
        results: "84.8% reduction of airborne Penicillium expansum and 88.7% of spores on the fruit.",
        environment: "Post-harvest cold storage chambers.",
        conclusion: "Sharp drop in inoculum pressure during storage, cutting blue mold losses.",
      },
      {
        key: "tomate",
        name: "Tomato",
        stat: "+13%",
        statLabel: "lycopene (7.04 → 7.96 mg/kg)",
        results: "Brix from 3.63 to 4.10; lycopene from 7.04 to 7.96 mg/kg; +9% average fruit weight.",
        environment: "Commercial crop with scheduled foliar application.",
        conclusion: "Simultaneous gains in flavor quality, nutrition and yield.",
      },
      {
        key: "uva",
        name: "Grape / Vine",
        stat: "0",
        statLabel: "signs of phytotoxicity",
        results: "Downy mildew control on par with the grower's standard program.",
        environment: "Commercial vineyards over a full cycle.",
        conclusion: "Partial replacement of the chemical program with no loss of control and no plant damage.",
      },
      {
        key: "morango",
        name: "Strawberry",
        stat: "31 days",
        statLabel: "shelf life (was 14)",
        results: "Shelf life extended from 14 to 31 days after treatment.",
        environment: "Post-harvest, trays under commercial conditions.",
        conclusion: "More than double the selling window and a direct drop in waste.",
      },
      {
        key: "citros",
        name: "Citrus",
        stat: "↑",
        statLabel: "Asian citrus psyllid mortality",
        results: "Higher psyllid mortality with SteriClean combined with orange oil.",
        environment: "Coacipar trial, Paranavaí/PR.",
        conclusion: "An added tool for greening vector management with low residual impact.",
      },
      {
        key: "manga",
        name: "Mango",
        stat: "90–100%",
        statLabel: "fungal population reduction",
        results: "90–100% reduction of Aspergillus niger and Glomerella sp., with no skin damage.",
        environment: "Embrapa Semiárido trial, Petrolina/PE — packing line.",
        conclusion: "Effective sanitation on the processing belt while preserving commercial appearance.",
      },
      {
        key: "cevada",
        name: "Barley",
        stat: "93.2%",
        statLabel: "germination (observed peak)",
        results: "Germination from 87.4% to 93.2%; chain losses down from 25% to 8%.",
        environment: "Malting chain in Guarapuava/PR.",
        conclusion: "Less loss between field and maltings, with more uniform grain.",
      },
      {
        key: "trigo",
        name: "Wheat",
        stat: "↓",
        statLabel: "internal rot from head blight",
        results: "Reduced internal rot caused by Fusarium graminearum, with no impact on flowering.",
        environment: "Applied during the flowering window.",
        conclusion: "Grain protection during one of the crop's most critical periods.",
      },
    ],
  },
  lines: {
    eyebrow: "Product lines",
    title: "One technology, two fronts",
    items: [
      {
        name: "SteriClean Agro",
        text: "For field, post-harvest and storage.",
        bullets: ["Fungal and bacterial control", "Support in pest management", "Quality and shelf life", "Yield and uniformity"],
      },
      {
        name: "SteriClean Vet",
        text: "For sanitation of animal production environments.",
        bullets: ["Salmonella in poultry houses", "Seneca virus in swine", "Bovine mastitis", "Facility and equipment hygiene"],
      },
    ],
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Efficiency without environmental debt",
    lead: "Compared with a conventional chemical program, SteriClean changes the equation.",
    items: [
      { title: "No chemical residue", text: "Water-based product: nothing left behind on fruit or soil." },
      { title: "No resistance", text: "A physical mode of action selects no resistant populations." },
      { title: "No waiting period", text: "Compatible with immediate harvest and processing." },
      { title: "Less waste", text: "Longer shelf life cuts food loss across the chain." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Talk to a specialist",
    lead: "Tell us your crop and your challenge — we'll come back with an application protocol.",
    name: "Name",
    company: "Company",
    crop: "Crop / segment",
    message: "Message",
    submit: "Send message",
    success: "Message received. We'll be in touch shortly.",
    units: [
      { label: "Technology unit", value: "Tijucas / SC" },
      { label: "Sales", value: "Curitiba / PR" },
      { label: "Plant", value: "Biopark — Toledo / PR" },
    ],
  },
  footer: { rights: "All rights reserved.", partners: "Partners" },
};

export const translations: Record<Lang, Dict> = { pt, es, en };
