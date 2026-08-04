# SteriClean — Landing Page Institucional

Briefing registrado. Este plano fica em espera até você enviar os arquivos restantes (conteúdo de "Produto" e "Notícias" da Ferticerto, fotos dos eventos e das culturas).

## Identidade visual
- Verde primário `#76C58C`, verde escuro `#3E8F5C` (CTAs/contraste), verde claro `#EAF7EE` (fundos de seção), grafite `#1F2A24` (textos e dados), branco para respiro.
- Motivo gráfico recorrente: gota d'água + ondas concêntricas do logo — divisores de seção em curva, ícones de gota, blobs orgânicos de fundo.
- Tipografia sans-serif moderna, bold levemente arredondada; números de resultado em escala tipográfica grande, estilo "estatística".
- Estética agrotech científica: clean, respirada, fotos reais de lavoura/fruta/laboratório. Sem clichê orgânico rústico.

## Estrutura da página
1. **Hero** — foto full-bleed (mão na terra) com overlay escuro, logo SteriClean, headline "Tecnologia húngara agora disponível no Brasil", CTA duplo: "Falar com especialista" (primário) e "Ver resultados" (secundário).
2. **O que é o SteriClean** — mecanismo de oxidação direta com analogia aos leucócitos humanos, ao lado de ícone estilizado da molécula ativa. Abaixo, bloco institucional em linha do tempo: 2023 Palácio Iguaçu (Governo do PR + Consulado da Hungria) → 2025 Agroleite/Castro (anúncio da fábrica Sanfer) → 31/03/2026 inauguração no Biopark, Toledo/PR. Com fotos dos eventos e mapa do Brasil destacando o Paraná.
3. **Resultados por cultura** — um bloco por cultura, com 2 fotos + Resultados Técnicos / Ambiente / Conclusão e números grandes em destaque:
   - Maçã Fuji: redução de 84,8% (ar) e 88,7% (esporos nos frutos) de *Penicillium expansum* em câmaras frias.
   - Tomate: °Brix 3,63 → 4,10; licopeno 7,04 → 7,96 mg/kg; +9% de peso médio do fruto.
   - Uva/Videira: míldio controlado com eficiência comparável ao padrão do produtor, sem fitotoxicidade.
   - Morango: vida de prateleira de 14 → 31 dias.
   - Citros: melhor mortalidade do psilídeo asiático com SteriClean + óleo de laranja (Coacipar-Paranavaí).
   - Manga: redução de 90–100% da população fúngica (*Aspergillus niger*, *Glomerella sp.*), sem dano à epiderme — Embrapa Petrolina.
   - Cevada: brotação +87,4% a 93,2%; perdas da cadeia de 25% → 8% (Guarapuava/PR).
   - Trigo: redução da podridão interna por giberela (*Fusarium graminearum*), sem impacto na floração.
4. **Linhas de produto** — SteriClean Agro (fungos, pragas, qualidade e produtividade) e SteriClean Vet (sanitização de ambientes contra salmonella, vírus sêneca e mastite bovina).
5. **Sustentabilidade** — produto à base de água, sem resíduo químico e sem geração de resistência microbiana; comparação com defensivos tradicionais.
6. **Contato** — formulário (nome, empresa, cultura/segmento, mensagem), unidade de tecnologia em Tijucas/SC e comercial em Curitiba/PR, telefones.

## Tom de voz
Técnico-científico e direto. Frases de impacto curtas ao lado dos dados ("não envenena o fungo, rasga a pele do fungo"), tradução do resultado em ganho financeiro para o produtor, e credibilidade institucional (Governo do Paraná, Consulado da Hungria, Embrapa, Biopark) como prova social.

## Detalhes técnicos
- TanStack Start + Tailwind v4. Tokens da marca definidos em `src/styles.css` (`@theme inline`, valores em oklch) — nada de cor hardcoded nos componentes.
- Página única em `src/routes/index.tsx`, composta por componentes de seção em `src/components/sections/` (Hero, Mecanismo, Timeline, ResultadosCultura, LinhasProduto, Sustentabilidade, Contato).
- Dados das culturas em um único arquivo de conteúdo tipado, renderizado pelo componente de bloco repetido.
- Logo entregue como PDF: será convertido/embarcado como asset; se necessário, recriado em SVG para nitidez e para uso do motivo gota+ondas nos divisores.
- Formulário de contato: sem backend por enquanto (validação client-side). Se você quiser receber os leads por e-mail ou salvar em banco, ativamos o Lovable Cloud.
- SEO em pt-BR: title/description próprios, JSON-LD de Organization, alt em todas as imagens.

## Pendências antes de construir
- Conteúdo das seções **Produto** e **Notícias** (do site da Ferticerto).
- Fotos: eventos (Palácio Iguaçu 2023, Agroleite 2025, Biopark 2026), lavouras/frutos por cultura, imagem do hero.
- Telefones e endereços completos.
