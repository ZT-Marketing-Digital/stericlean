export type Lang = "pt" | "es" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "PT-BR", flag: "🇧🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "en", label: "EN", flag: "🇺🇸" },
];

export type CropKey =
  "maca" | "tomate" | "uva" | "morango" | "citros" | "manga" | "cevada" | "trigo";

export type Crop = {
  key: CropKey;
  name: string;
  stage: string;
  application: string;
  environment: string;
  note: string;
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
    figureTitle: string;
    figureCaption: string;
    body: string;
    cards: { title: string; text: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { year: string; title: string; text: string }[];
    note: string;
  };
  crops: {
    eyebrow: string;
    title: string;
    lead: string;
    labels: { application: string; environment: string; note: string };
    items: Crop[];
  };
  lines: {
    eyebrow: string;
    title: string;
    items: { name: string; text: string; bullets: string[] }[];
    disclaimer: string;
  };
  sustainability: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  location: {
    eyebrow: string;
    title: string;
    lead: string;
    addressLabel: string;
    address: string;
    cityLabel: string;
    city: string;
    parkLabel: string;
    park: string;
    ctaRoute: string;
    ctaMaps: string;
    mapCta: string;
    mapNote: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    phoneOptional: string;
    crop: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    units: { label: string; value: string }[];
  };
  footer: {
    tagline: string;
    navTitle: string;
    cropsLabel: string;
    unitsTitle: string;
    contactTitle: string;
    contactCta: string;
    partners: string;
    rights: string;
    badge: string;
    disclaimer: string;
  };
};

const pt: Dict = {
  meta: {
    title: "SteriClean — Adjuvante para uso agrícola produzido por eletrólise",
    description:
      "SteriClean é um adjuvante para uso agrícola, obtido a partir de água e sal por processo eletroquímico de eletrólise. O credenciamento junto ao MAPA está em andamento.",
  },
  nav: {
    mechanism: "Tecnologia",
    results: "Culturas",
    lines: "Linhas",
    sustainability: "Boas práticas",
    contact: "Contato",
  },
  hero: {
    eyebrow: "Tecnologia húngara · Produção no Paraná",
    title: "Tecnologia de água eletrolisada",
    highlight: "para o manejo agrícola",
    subtitle:
      "SteriClean é um adjuvante para uso agrícola, produzido a partir de água e sal por processo de eletrólise, desenvolvido em parceria com a Ferticerto. O credenciamento junto ao MAPA está em andamento.",
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver culturas",
    stats: [
      { value: "Água + sal", label: "insumos do processo eletroquímico" },
      { value: "Eletrólise", label: "tecnologia de água eletrolisada" },
      {
        value: "Uso agrícola",
        label: "adjuvante — credenciamento junto ao MAPA em andamento",
      },
    ],
  },
  mechanism: {
    eyebrow: "A tecnologia",
    title: "Água eletrolisada, obtida de água e sal",
    lead: "A solução do SteriClean é produzida por eletrólise: uma corrente elétrica aplicada a uma solução de água e sal transforma esses insumos em um líquido pronto para diluição e uso, sem adição de solventes.",
    punch: "Água e sal, transformados por corrente elétrica.",
    figureTitle: "Eletrólise — corrente elétrica aplicada à solução",
    figureCaption:
      "Imagem ilustrativa do processo. É a corrente elétrica aplicada à solução de água e sal que transforma esses insumos no líquido fornecido. Consulte a ficha técnica para diluição, modo de uso, armazenamento e validade.",
    body: "Esta página descreve o processo de obtenção do produto e o seu uso pretendido. Ela não atribui ao SteriClean registro, validação ou aprovação por órgão público, nem alegação de eficácia biocida, sanitizante ou desinfetante.",
    cards: [
      {
        title: "Base água",
        text: "Formulação aquosa obtida de água e sal, sem solvente adicionado.",
      },
      {
        title: "Processo eletroquímico",
        text: "Produzido por eletrólise da água, com controle de processo na fábrica.",
      },
      {
        title: "Pronto para diluir",
        text: "Diluição, aplicação e armazenamento conforme a orientação técnica.",
      },
      {
        title: "Uso pretendido",
        text: "Adjuvante para uso agrícola — credenciamento junto ao MAPA em andamento.",
      },
    ],
  },
  timeline: {
    eyebrow: "Trajetória institucional",
    title: "Da Hungria ao Paraná",
    lead: "Marcos da implantação da tecnologia e da produção no Brasil.",
    items: [
      {
        year: "2023",
        title: "Palácio Iguaçu, Curitiba",
        text: "Encontro com representantes do Governo do Paraná e do Consulado da Hungria sobre a vinda da tecnologia e do investimento industrial para o estado.",
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
    note: "Os marcos acima referem-se ao projeto industrial e à presença da empresa no estado. Não constituem validação, aprovação ou chancela do produto por órgão público.",
  },
  crops: {
    eyebrow: "Aplicação",
    title: "Culturas e contextos de uso",
    lead: "Onde o SteriClean é aplicado e em que etapa do processo, sempre conforme a orientação técnica definida para cada cultura.",
    labels: {
      application: "Modo de uso",
      environment: "Ambiente",
      note: "Observação",
    },
    items: [
      {
        key: "maca",
        name: "Maçã Fuji",
        stage: "Pós-colheita",
        application:
          "Aplicação na etapa de pós-colheita, com diluição e frequência definidas na orientação técnica.",
        environment: "Câmaras frias de armazenamento.",
        note: "Uso integrado às rotinas de higienização e manejo do armazenamento.",
      },
      {
        key: "tomate",
        name: "Tomate",
        stage: "Campo",
        application: "Aplicação foliar programada ao longo do ciclo da cultura.",
        environment: "Cultivo comercial.",
        note: "Uso como adjuvante dentro do programa de manejo adotado pelo produtor.",
      },
      {
        key: "uva",
        name: "Uva / Videira",
        stage: "Campo",
        application: "Aplicação no parreiral ao longo do ciclo, conforme a orientação técnica.",
        environment: "Parreirais comerciais.",
        note: "Uso como adjuvante, sem substituição do programa fitossanitário do produtor.",
      },
      {
        key: "morango",
        name: "Morango",
        stage: "Pós-colheita",
        application: "Aplicação em pós-colheita, antes do acondicionamento em bandejas.",
        environment: "Pós-colheita, em condição comercial.",
        note: "Uso integrado às boas práticas de higienização e conservação.",
      },
      {
        key: "citros",
        name: "Citros",
        stage: "Campo",
        application:
          "Aplicação em campo, isolada ou em calda com outros insumos, conforme a orientação técnica.",
        environment: "Pomares comerciais no Paraná.",
        note: "Uso como adjuvante no programa de manejo do pomar.",
      },
      {
        key: "manga",
        name: "Manga",
        stage: "Beneficiamento",
        application: "Aplicação na linha de beneficiamento, na etapa de lavagem dos frutos.",
        environment: "Packing house — esteira de processamento.",
        note: "Uso integrado às rotinas de limpeza da linha de processamento.",
      },
      {
        key: "cevada",
        name: "Grãos",
        stage: "Pós-colheita",
        application: "Tratamento do grão nas etapas entre a lavoura e o beneficiamento.",
        environment: "Armazenagem e beneficiamento no Paraná.",
        note: "Uso integrado às rotinas de manejo e armazenagem do grão.",
      },
      {
        key: "trigo",
        name: "Trigo",
        stage: "Campo",
        application: "Aplicação na janela de floração, conforme a orientação técnica.",
        environment: "Lavoura comercial.",
        note: "Uso como adjuvante dentro do programa de manejo da cultura.",
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
          "Adjuvante para uso agrícola",
          "Aplicação em campo, pós-colheita e armazenamento",
          "Diluição e manejo conforme orientação técnica",
          "Credenciamento junto ao MAPA em andamento",
        ],
      },
      {
        name: "SteriClean Vet",
        text: "Para rotinas de limpeza em ambientes de produção animal.",
        bullets: [
          "Limpeza de instalações",
          "Higienização de equipamentos e superfícies",
          "Apoio às rotinas de manejo e boas práticas",
          "Uso conforme orientação técnica",
        ],
      },
    ],
    disclaimer:
      "As descrições acima referem-se ao uso pretendido do produto. O SteriClean não possui registro como saneante com ação antimicrobiana e não é apresentado como sanitizante, desinfetante ou substituto de defensivo agrícola registrado.",
  },
  sustainability: {
    eyebrow: "Boas práticas",
    title: "Insumos simples, uso orientado",
    lead: "O que se pode afirmar hoje sobre o produto: a sua origem, o seu processo de fabricação e o seu modo de uso.",
    items: [
      {
        title: "Água e sal",
        text: "Obtido a partir de água e sal, por processo eletroquímico.",
      },
      {
        title: "Sem solvente adicionado",
        text: "Formulação aquosa, sem adição de solventes à solução.",
      },
      {
        title: "Modo de uso definido",
        text: "Diluição, aplicação, armazenamento e validade descritos na ficha técnica.",
      },
      {
        title: "Produção nacional",
        text: "Fabricado no Paraná, na unidade instalada no Biopark, em Toledo.",
      },
    ],
  },
  location: {
    eyebrow: "Localização",
    title: "A fábrica fica no Biopark, em Toledo",
    lead: "A produção nacional do SteriClean acontece dentro do parque de inovação do Biopark, no oeste do Paraná.",
    addressLabel: "Endereço",
    address: "Rua dos Manacás-da-Serra, 354",
    cityLabel: "Cidade",
    city: "Toledo / PR — CEP 85920-268",
    parkLabel: "Local",
    park: "Biopark — parque de inovação",
    ctaRoute: "Como chegar",
    ctaMaps: "Abrir no Google Maps",
    mapCta: "Ver mapa",
    mapNote: "O mapa é carregado pelo Google ao clicar.",
  },
  contact: {
    eyebrow: "Contato",
    title: "Fale com um especialista",
    lead: "Conte a sua cultura e o seu desafio — retornamos com um protocolo de aplicação.",
    name: "Nome",
    company: "Empresa",
    email: "E-mail",
    phone: "Telefone",
    phoneOptional: "opcional",
    crop: "Cultura / segmento",
    message: "Mensagem",
    submit: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada. Entraremos em contato em breve.",
    error:
      "Não foi possível enviar agora. Tente novamente em instantes ou escreva para contato@stericleanbrasil.com.br.",
    units: [{ label: "Fábrica", value: "Biopark — Toledo / PR" }],
  },
  footer: {
    tagline:
      "Adjuvante para uso agrícola, produzido a partir de água e sal por processo de eletrólise.",
    navTitle: "Navegação",
    cropsLabel: "Culturas atendidas",
    unitsTitle: "Unidades",
    contactTitle: "Fale conosco",
    contactCta: "Falar com um especialista",
    partners: "Parceiros",
    rights: "Todos os direitos reservados.",
    badge: "Credenciamento MAPA em andamento",
    disclaimer:
      "SteriClean é um adjuvante para uso agrícola, produzido a partir de água e sal por processo de eletrólise, desenvolvido em parceria com a Ferticerto. O credenciamento junto ao MAPA está em andamento. Este site não atribui ao produto registro, validação ou aprovação por órgão público, nem alegação de eficácia biocida, sanitizante ou desinfetante.",
  },
};

const es: Dict = {
  meta: {
    title: "SteriClean — Adyuvante de uso agrícola producido por electrólisis",
    description:
      "SteriClean es un adyuvante de uso agrícola obtenido a partir de agua y sal mediante un proceso electroquímico de electrólisis. La habilitación ante el MAPA está en trámite.",
  },
  nav: {
    mechanism: "Tecnología",
    results: "Cultivos",
    lines: "Líneas",
    sustainability: "Buenas prácticas",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "Tecnología húngara · Producción en Paraná",
    title: "Tecnología de agua electrolizada",
    highlight: "para el manejo agrícola",
    subtitle:
      "SteriClean es un adyuvante de uso agrícola, producido a partir de agua y sal mediante un proceso de electrólisis, desarrollado en alianza con Ferticerto. La habilitación ante el MAPA está en trámite.",
    ctaPrimary: "Hablar con un especialista",
    ctaSecondary: "Ver cultivos",
    stats: [
      { value: "Agua + sal", label: "insumos del proceso electroquímico" },
      { value: "Electrólisis", label: "tecnología de agua electrolizada" },
      {
        value: "Uso agrícola",
        label: "adyuvante — habilitación ante el MAPA en trámite",
      },
    ],
  },
  mechanism: {
    eyebrow: "La tecnología",
    title: "Agua electrolizada, obtenida de agua y sal",
    lead: "La solución de SteriClean se produce por electrólisis: una corriente eléctrica aplicada a una solución de agua y sal transforma esos insumos en un líquido listo para diluir y usar, sin agregado de solventes.",
    punch: "Agua y sal, transformados por corriente eléctrica.",
    figureTitle: "Electrólisis — corriente eléctrica aplicada a la solución",
    figureCaption:
      "Imagen ilustrativa del proceso. Es la corriente eléctrica aplicada a la solución de agua y sal la que transforma esos insumos en el líquido suministrado. Consulte la ficha técnica para dilución, modo de uso, almacenamiento y vencimiento.",
    body: "Esta página describe el proceso de obtención del producto y su uso previsto. No le atribuye registro, validación ni aprobación por parte de organismos públicos, ni alegación de eficacia biocida, sanitizante o desinfectante.",
    cards: [
      {
        title: "Base agua",
        text: "Formulación acuosa obtenida de agua y sal, sin solvente agregado.",
      },
      {
        title: "Proceso electroquímico",
        text: "Producido por electrólisis del agua, con control de proceso en la planta.",
      },
      {
        title: "Listo para diluir",
        text: "Dilución, aplicación y almacenamiento según la orientación técnica.",
      },
      {
        title: "Uso previsto",
        text: "Adyuvante de uso agrícola — habilitación ante el MAPA en trámite.",
      },
    ],
  },
  timeline: {
    eyebrow: "Trayectoria institucional",
    title: "De Hungría a Paraná",
    lead: "Hitos de la implantación de la tecnología y de la producción en Brasil.",
    items: [
      {
        year: "2023",
        title: "Palacio Iguaçu, Curitiba",
        text: "Encuentro con representantes del Gobierno de Paraná y del Consulado de Hungría sobre la llegada de la tecnología y de la inversión industrial al estado.",
      },
      {
        year: "2025",
        title: "Agroleite, Castro/PR",
        text: "Anuncio de la planta Sanfer para la producción nacional de SteriClean.",
      },
      {
        year: "2026",
        title: "Biopark, Toledo/PR",
        text: "Inauguración de la unidad el 31/03/2026, dentro del parque de innovación.",
      },
    ],
    note: "Los hitos anteriores se refieren al proyecto industrial y a la presencia de la empresa en el estado. No constituyen validación, aprobación ni aval del producto por parte de organismos públicos.",
  },
  crops: {
    eyebrow: "Aplicación",
    title: "Cultivos y contextos de uso",
    lead: "Dónde se aplica SteriClean y en qué etapa del proceso, siempre según la orientación técnica definida para cada cultivo.",
    labels: {
      application: "Modo de uso",
      environment: "Ambiente",
      note: "Observación",
    },
    items: [
      {
        key: "maca",
        name: "Manzana Fuji",
        stage: "Poscosecha",
        application:
          "Aplicación en la etapa de poscosecha, con dilución y frecuencia definidas en la orientación técnica.",
        environment: "Cámaras frías de almacenamiento.",
        note: "Uso integrado a las rutinas de higienización y manejo del almacenamiento.",
      },
      {
        key: "tomate",
        name: "Tomate",
        stage: "Campo",
        application: "Aplicación foliar programada a lo largo del ciclo del cultivo.",
        environment: "Cultivo comercial.",
        note: "Uso como adyuvante dentro del programa de manejo del productor.",
      },
      {
        key: "uva",
        name: "Uva / Vid",
        stage: "Campo",
        application: "Aplicación en el viñedo a lo largo del ciclo, según la orientación técnica.",
        environment: "Viñedos comerciales.",
        note: "Uso como adyuvante, sin sustituir el programa fitosanitario del productor.",
      },
      {
        key: "morango",
        name: "Frutilla",
        stage: "Poscosecha",
        application: "Aplicación en poscosecha, antes del acondicionamiento en bandejas.",
        environment: "Poscosecha, en condición comercial.",
        note: "Uso integrado a las buenas prácticas de higienización y conservación.",
      },
      {
        key: "citros",
        name: "Cítricos",
        stage: "Campo",
        application:
          "Aplicación en campo, sola o en caldo con otros insumos, según la orientación técnica.",
        environment: "Huertos comerciales en Paraná.",
        note: "Uso como adyuvante en el programa de manejo del huerto.",
      },
      {
        key: "manga",
        name: "Mango",
        stage: "Empaque",
        application: "Aplicación en la línea de empaque, en la etapa de lavado de los frutos.",
        environment: "Packing house — cinta de procesamiento.",
        note: "Uso integrado a las rutinas de limpieza de la línea de procesamiento.",
      },
      {
        key: "cevada",
        name: "Granos",
        stage: "Poscosecha",
        application: "Tratamiento del grano en las etapas entre el campo y el procesamiento.",
        environment: "Almacenamiento y procesamiento en Paraná.",
        note: "Uso integrado a las rutinas de manejo y almacenamiento del grano.",
      },
      {
        key: "trigo",
        name: "Trigo",
        stage: "Campo",
        application: "Aplicación en la ventana de floración, según la orientación técnica.",
        environment: "Cultivo comercial.",
        note: "Uso como adyuvante dentro del programa de manejo del cultivo.",
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
        bullets: [
          "Adyuvante de uso agrícola",
          "Aplicación en campo, poscosecha y almacenamiento",
          "Dilución y manejo según orientación técnica",
          "Habilitación ante el MAPA en trámite",
        ],
      },
      {
        name: "SteriClean Vet",
        text: "Para rutinas de limpieza en ambientes de producción animal.",
        bullets: [
          "Limpieza de instalaciones",
          "Higienización de equipos y superficies",
          "Apoyo a las rutinas de manejo y buenas prácticas",
          "Uso según orientación técnica",
        ],
      },
    ],
    disclaimer:
      "Las descripciones anteriores se refieren al uso previsto del producto. SteriClean no cuenta con registro como saneante con acción antimicrobiana y no se presenta como sanitizante, desinfectante ni sustituto de un fitosanitario registrado.",
  },
  sustainability: {
    eyebrow: "Buenas prácticas",
    title: "Insumos simples, uso orientado",
    lead: "Lo que se puede afirmar hoy sobre el producto: su origen, su proceso de fabricación y su modo de uso.",
    items: [
      {
        title: "Agua y sal",
        text: "Obtenido a partir de agua y sal, por proceso electroquímico.",
      },
      {
        title: "Sin solvente agregado",
        text: "Formulación acuosa, sin agregado de solventes a la solución.",
      },
      {
        title: "Modo de uso definido",
        text: "Dilución, aplicación, almacenamiento y vencimiento descritos en la ficha técnica.",
      },
      {
        title: "Producción nacional",
        text: "Fabricado en Paraná, en la unidad instalada en el Biopark, en Toledo.",
      },
    ],
  },
  location: {
    eyebrow: "Ubicación",
    title: "La planta está en el Biopark, en Toledo",
    lead: "La producción nacional de SteriClean ocurre dentro del parque de innovación Biopark, en el oeste de Paraná.",
    addressLabel: "Dirección",
    address: "Rua dos Manacás-da-Serra, 354",
    cityLabel: "Ciudad",
    city: "Toledo / PR — CEP 85920-268",
    parkLabel: "Lugar",
    park: "Biopark — parque de innovación",
    ctaRoute: "Cómo llegar",
    ctaMaps: "Abrir en Google Maps",
    mapCta: "Ver mapa",
    mapNote: "El mapa lo carga Google al hacer clic.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hable con un especialista",
    lead: "Cuéntenos su cultivo y su desafío: respondemos con un protocolo de aplicación.",
    name: "Nombre",
    company: "Empresa",
    email: "Correo electrónico",
    phone: "Teléfono",
    phoneOptional: "opcional",
    crop: "Cultivo / segmento",
    message: "Mensaje",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado. Nos pondremos en contacto pronto.",
    error:
      "No fue posible enviar ahora. Inténtelo de nuevo en unos instantes o escriba a contato@stericleanbrasil.com.br.",
    units: [{ label: "Planta", value: "Biopark — Toledo / PR" }],
  },
  footer: {
    tagline:
      "Adyuvante de uso agrícola, producido a partir de agua y sal mediante un proceso de electrólisis.",
    navTitle: "Navegación",
    cropsLabel: "Cultivos atendidos",
    unitsTitle: "Unidades",
    contactTitle: "Contáctenos",
    contactCta: "Hablar con un especialista",
    partners: "Socios",
    rights: "Todos los derechos reservados.",
    badge: "Habilitación MAPA en trámite",
    disclaimer:
      "SteriClean es un adyuvante de uso agrícola, producido a partir de agua y sal mediante un proceso de electrólisis, desarrollado en alianza con Ferticerto. La habilitación ante el MAPA está en trámite. Este sitio no le atribuye al producto registro, validación ni aprobación por parte de organismos públicos, ni alegación de eficacia biocida, sanitizante o desinfectante.",
  },
};

const en: Dict = {
  meta: {
    title: "SteriClean — Agricultural adjuvant produced by electrolysis",
    description:
      "SteriClean is an agricultural adjuvant obtained from water and salt through an electrochemical electrolysis process. Accreditation with Brazil's MAPA is in progress.",
  },
  nav: {
    mechanism: "Technology",
    results: "Crops",
    lines: "Product lines",
    sustainability: "Good practice",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Hungarian technology · Made in Paraná",
    title: "Electrolyzed water technology",
    highlight: "for agricultural management",
    subtitle:
      "SteriClean is an agricultural adjuvant, produced from water and salt through an electrolysis process, developed in partnership with Ferticerto. Accreditation with Brazil's MAPA is in progress.",
    ctaPrimary: "Talk to a specialist",
    ctaSecondary: "See crops",
    stats: [
      { value: "Water + salt", label: "inputs of the electrochemical process" },
      { value: "Electrolysis", label: "electrolyzed water technology" },
      {
        value: "Agricultural use",
        label: "adjuvant — MAPA accreditation in progress",
      },
    ],
  },
  mechanism: {
    eyebrow: "The technology",
    title: "Electrolyzed water, obtained from water and salt",
    lead: "SteriClean's solution is produced by electrolysis: an electric current applied to a water-and-salt solution turns those inputs into a liquid ready for dilution and use, with no solvents added.",
    punch: "Water and salt, transformed by electric current.",
    figureTitle: "Electrolysis — electric current applied to the solution",
    figureCaption:
      "Illustrative image of the process. It is the electric current applied to the water-and-salt solution that turns those inputs into the liquid supplied. See the technical data sheet for dilution, use, storage and shelf life.",
    body: "This page describes how the product is obtained and its intended use. It does not attribute to SteriClean any registration, validation or approval by a public body, nor any biocidal, sanitizing or disinfectant efficacy claim.",
    cards: [
      {
        title: "Water-based",
        text: "Aqueous formulation obtained from water and salt, with no solvent added.",
      },
      {
        title: "Electrochemical process",
        text: "Produced by electrolysis of water, with process control at the plant.",
      },
      {
        title: "Ready to dilute",
        text: "Dilution, application and storage according to technical guidance.",
      },
      {
        title: "Intended use",
        text: "Agricultural adjuvant — MAPA accreditation in progress.",
      },
    ],
  },
  timeline: {
    eyebrow: "Institutional track record",
    title: "From Hungary to Paraná",
    lead: "Milestones in bringing the technology and its production to Brazil.",
    items: [
      {
        year: "2023",
        title: "Iguaçu Palace, Curitiba",
        text: "Meeting with representatives of the Government of Paraná and the Consulate of Hungary about bringing the technology and the industrial investment to the state.",
      },
      {
        year: "2025",
        title: "Agroleite, Castro/PR",
        text: "Announcement of the Sanfer plant for domestic SteriClean production.",
      },
      {
        year: "2026",
        title: "Biopark, Toledo/PR",
        text: "Facility inaugurated on 03/31/2026 inside the innovation park.",
      },
    ],
    note: "The milestones above refer to the industrial project and the company's presence in the state. They do not constitute validation, approval or endorsement of the product by any public body.",
  },
  crops: {
    eyebrow: "Application",
    title: "Crops and use contexts",
    lead: "Where SteriClean is applied and at which stage of the process, always according to the technical guidance defined for each crop.",
    labels: {
      application: "How it is used",
      environment: "Setting",
      note: "Note",
    },
    items: [
      {
        key: "maca",
        name: "Fuji apple",
        stage: "Post-harvest",
        application:
          "Applied at the post-harvest stage, with dilution and frequency set by the technical guidance.",
        environment: "Cold storage chambers.",
        note: "Used as part of storage hygiene and management routines.",
      },
      {
        key: "tomate",
        name: "Tomato",
        stage: "Field",
        application: "Scheduled foliar application through the crop cycle.",
        environment: "Commercial crop.",
        note: "Used as an adjuvant within the grower's management program.",
      },
      {
        key: "uva",
        name: "Grape / Vine",
        stage: "Field",
        application: "Applied in the vineyard through the cycle, according to technical guidance.",
        environment: "Commercial vineyards.",
        note: "Used as an adjuvant, without replacing the grower's crop protection program.",
      },
      {
        key: "morango",
        name: "Strawberry",
        stage: "Post-harvest",
        application: "Applied post-harvest, before packing into trays.",
        environment: "Post-harvest, commercial conditions.",
        note: "Used as part of hygiene and conservation good practice.",
      },
      {
        key: "citros",
        name: "Citrus",
        stage: "Field",
        application:
          "Applied in the field, alone or in tank mix with other inputs, according to technical guidance.",
        environment: "Commercial groves in Paraná.",
        note: "Used as an adjuvant within the grove's management program.",
      },
      {
        key: "manga",
        name: "Mango",
        stage: "Packing",
        application: "Applied on the packing line, at the fruit washing stage.",
        environment: "Packing house — processing belt.",
        note: "Used as part of the processing line's cleaning routines.",
      },
      {
        key: "cevada",
        name: "Grains",
        stage: "Post-harvest",
        application: "Grain treatment in the stages between field and processing.",
        environment: "Storage and processing in Paraná.",
        note: "Used as part of grain handling and storage routines.",
      },
      {
        key: "trigo",
        name: "Wheat",
        stage: "Field",
        application: "Applied during the flowering window, according to technical guidance.",
        environment: "Commercial crop.",
        note: "Used as an adjuvant within the crop's management program.",
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
        bullets: [
          "Agricultural adjuvant",
          "Application in field, post-harvest and storage",
          "Dilution and handling according to technical guidance",
          "MAPA accreditation in progress",
        ],
      },
      {
        name: "SteriClean Vet",
        text: "For cleaning routines in animal production environments.",
        bullets: [
          "Facility cleaning",
          "Equipment and surface hygiene",
          "Support for handling routines and good practice",
          "Use according to technical guidance",
        ],
      },
    ],
    disclaimer:
      "The descriptions above refer to the product's intended use. SteriClean holds no registration as a sanitizing agent with antimicrobial action and is not presented as a sanitizer, disinfectant or replacement for any registered crop protection product.",
  },
  sustainability: {
    eyebrow: "Good practice",
    title: "Simple inputs, guided use",
    lead: "What can be stated about the product today: its origin, its manufacturing process and how it is used.",
    items: [
      {
        title: "Water and salt",
        text: "Obtained from water and salt through an electrochemical process.",
      },
      {
        title: "No solvent added",
        text: "Aqueous formulation, with no solvents added to the solution.",
      },
      {
        title: "Defined use",
        text: "Dilution, application, storage and shelf life set out in the technical data sheet.",
      },
      {
        title: "Made in Brazil",
        text: "Manufactured in Paraná, at the facility inside Biopark, in Toledo.",
      },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "The plant sits inside Biopark, in Toledo",
    lead: "SteriClean's domestic production runs inside the Biopark innovation park, in western Paraná, Brazil.",
    addressLabel: "Address",
    address: "Rua dos Manacás-da-Serra, 354",
    cityLabel: "City",
    city: "Toledo / PR — 85920-268, Brazil",
    parkLabel: "Site",
    park: "Biopark innovation park",
    ctaRoute: "Get directions",
    ctaMaps: "Open in Google Maps",
    mapCta: "View map",
    mapNote: "The map is loaded by Google when you click.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Talk to a specialist",
    lead: "Tell us your crop and your challenge — we'll come back with an application protocol.",
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    phoneOptional: "optional",
    crop: "Crop / segment",
    message: "Message",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent. We'll be in touch shortly.",
    error:
      "We couldn't send it right now. Please try again shortly or write to contato@stericleanbrasil.com.br.",
    units: [{ label: "Plant", value: "Biopark — Toledo / PR" }],
  },
  footer: {
    tagline: "Agricultural adjuvant, produced from water and salt through an electrolysis process.",
    navTitle: "Navigation",
    cropsLabel: "Crops covered",
    unitsTitle: "Locations",
    contactTitle: "Get in touch",
    contactCta: "Talk to a specialist",
    partners: "Partners",
    rights: "All rights reserved.",
    badge: "MAPA accreditation in progress",
    disclaimer:
      "SteriClean is an agricultural adjuvant, produced from water and salt through an electrolysis process, developed in partnership with Ferticerto. Accreditation with Brazil's MAPA is in progress. This site does not attribute to the product any registration, validation or approval by a public body, nor any biocidal, sanitizing or disinfectant efficacy claim.",
  },
};

export const translations: Record<Lang, Dict> = { pt, es, en };
