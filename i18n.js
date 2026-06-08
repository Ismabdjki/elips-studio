/* ============================================
   I18N — FR / EN
   Elips Studio — bilingue côté client
   ============================================ */

const TRANSLATIONS = {
  fr: {
    'meta.title': 'Elips Studio — Visuels & vidéos IA pour marques e-commerce',

    /* Navbar */
    'nav.avantages': 'Avantages',
    'nav.projets': 'Projets',
    'nav.apropos': 'À propos',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.cta': 'Je suis intéressé',

    /* Hero */
    'hero.status': 'Disponible pour travailler',
    'hero.title.html': 'Des visuels & vidéos IA <em>premium.</em><br>Sans studio. Livrés en 7 jours.',
    'hero.btn': 'Je suis intéressé',

    /* Bento */
    'bento.label': 'Pourquoi l’IA',
    'bento.title.html': 'L’<em class="accent">alternative</em> aux productions traditionnelles',
    'bento.subtitle.html': 'Tout ce qu’une production studio vous apporte.<br>Sans les contraintes qui vont avec.',
    'bento.main.text': 'Vos visuels et vidéos méritent mieux qu’un studio loué à la journée. Je les produis à partir de votre direction artistique, en 7 jours.',
    'bento.main.btn': 'Démarrer un projet →',
    'bento.left.title.html': 'Un brief. Sept jours. <em>Visuels & vidéos livrés.</em>',
    'bento.left.text': 'Vous arrivez avec un brief, vous repartez avec 30 visuels et vidéos prêts à publier — et autant d’itérations que vous voulez ensuite. Sans studio à louer, sans logistique à coordonner, sans pression du jour J.',

    /* Bento cards (labels + texts of the 4 mockup cards) */
    'bento.card1.label': 'DÉLAIS',
    'bento.card1.pill': '−75%',
    'bento.card1.row1.name': 'Shooting trad.',
    'bento.card1.row1.value': '28 j',
    'bento.card1.row2.name': 'Avec moi',
    'bento.card1.row2.value': '7 j',
    'bento.card1.title': 'Livraison express',
    'bento.card1.desc': '7 jours du brief à la livraison finale. Là où un shooting ou un tournage traditionnel prend 3 à 4 semaines.',

    'bento.card2.label': 'MESSAGE CLIENT',
    'bento.card2.pill': '✓ Reçu',
    'bento.card2.chat.name': 'Léa · Wellness brand',
    'bento.card2.chat.bubble.html': 'Sérieusement c’est dingue le rendu,<br>on fonce sur la suite !',
    'bento.card2.chat.time': '09:42 · Vu',
    'bento.card2.title': 'Qualité studio pro',
    'bento.card2.desc': 'Des visuels et vidéos photoréalistes indiscernables d’une production studio. Aucun compromis sur le rendu.',

    'bento.card3.label': 'DIRECTION ARTISTIQUE',
    'bento.card3.pill': '✓ Sync',
    'bento.card3.brand.colors': 'Couleurs',
    'bento.card3.brand.mood': 'Ambiance',
    'bento.card3.brand.light': 'Lumière',
    'bento.card3.tag.editorial': 'éditorial',
    'bento.card3.tag.luxe': 'luxe',
    'bento.card3.tag.intime': 'intime',
    'bento.card3.tag.dore': 'doré',
    'bento.card3.tag.soft': 'soft',
    'bento.card3.title': 'Votre DA respectée',
    'bento.card3.desc': 'Je travaille à partir de votre charte, vos codes visuels, vos inspirations. L’IA s’adapte à votre marque, pas l’inverse.',

    'bento.card4.label': 'DEVIS COMPARATIF',
    'bento.card4.pill': '−85%',
    'bento.card4.quote1.name': 'Shooting traditionnel',
    'bento.card4.quote1.price': '12 000 €',
    'bento.card4.quote2.name': 'Elips Studio',
    'bento.card4.quote2.price': '1 800 €',
    'bento.card4.title': 'Fraction du coût',
    'bento.card4.desc': 'Plus de studio à 2 000€ la journée, de photographe ou vidéaste à briefer, de modèle à caster. Le budget va où ça compte vraiment.',

    /* Projects */
    'projects.label': 'Projets',
    'projects.title.html': 'Mes dernières<br><em>créations.</em>',
    'projects.view': 'Voir le projet →',
    'projects.author': 'by Elips Studio',

    /* Marquee */
    'marquee.shootings_ia': 'Shootings IA',
    'marquee.videos_ia': 'Vidéos IA',
    'marquee.ecommerce': 'E-commerce',
    'marquee.visuels_ia': 'Visuels IA',
    'marquee.da': 'Direction Artistique',

    /* About */
    'about.label': 'À propos',
    'about.title.html': 'Ismaël, fondateur<br>d’<em>Elips Studio</em>',
    'about.lead': 'Je suis directeur artistique pour les marques e-commerce. L’IA est mon outil pour produire plus vite, sans jamais compromettre la qualité d’un shooting ou d’un tournage pro.',
    'about.text': 'À partir de votre identité de marque, de votre moodboard et de vos produits, je dirige la production de A à Z — visuels comme vidéos. Composition, lumière, ambiance, cohérence : ce qui prenait 3 semaines en studio se livre désormais en 7 jours, sans sacrifier l’exigence éditoriale.',
    'about.stat1.title': '50+ Projets',
    'about.stat1.label': 'Visuels et vidéos livrés clé en main',
    'about.stat2.title': '20+ Clients',
    'about.stat2.label': 'Marques e-commerce accompagnées',
    'about.stat3.title': '100% Satisfaits',
    'about.stat3.label': 'Clients qui recommandent nos services',
    'about.btn': 'Me contacter →',

    /* FAQ */
    'faq.label': 'FAQ',
    'faq.title.html': 'Questions<br><em>fréquentes</em>',
    'faq.q1': 'Comment l’IA génère mes visuels et vidéos ?',
    'faq.a1': 'Je travaille à partir de votre identité de marque et de votre moodboard. Je rédige les prompts, pilote chaque génération, retravaille visuels et vidéos un par un. L’IA est mon outil — votre direction artistique est mon cahier des charges.',
    'faq.q2': 'Les visuels et vidéos sont-ils réalistes ?',
    'faq.a2': 'Oui, les technologies actuelles permettent de produire des visuels et des vidéos photoréalistes. Nous affinons chaque rendu manuellement pour garantir un résultat professionnel indiscernable d’une production traditionnelle.',
    'faq.q3': 'Quels sont les délais de livraison ?',
    'faq.a3': 'En moyenne, un projet de visuels IA est livré en 7 jours ouvrés. Les vidéos IA peuvent prendre jusqu’à 14 jours selon la complexité. Nous proposons aussi des options express.',
    'faq.q4': 'Dois-je fournir des photos ?',
    'faq.a4': 'Idéalement oui, quelques photos de référence suffisent. Mais nous pouvons aussi travailler à partir de moodboards, de descriptions ou même de croquis pour générer vos visuels.',
    'faq.q5': 'Les visuels et vidéos sont-ils libres de droits ?',
    'faq.a5': 'Absolument. Tous les visuels et vidéos que nous créons vous appartiennent entièrement. Vous pouvez les utiliser sur vos réseaux, votre site, vos publicités et vos supports print sans restriction.',
    'faq.q6': 'Quelle différence avec un shooting ou un tournage ?',
    'faq.a6': 'Pas de studio à louer, pas de modèle à caster, pas de logistique produit. Vous obtenez des visuels et des vidéos de même qualité qu’une production studio, livrés en 7 jours, pour une fraction du coût. Et surtout : avec votre direction artistique respectée à la lettre.',
    'faq.contact': 'Contactez-nous :',

    /* Footer */
    'footer.address': 'Elips Studio<br>Paris, France',
    'footer.status': 'Disponible pour travailler',
    'footer.col1.title': 'Navigation',
    'footer.col1.accueil': 'Accueil',
    'footer.col1.projets': 'Projets',
    'footer.col1.apropos': 'À propos',
    'footer.col1.contact': 'Contact',
    'footer.col2.title': 'Études de cas',
    'footer.col3.title': 'Légal',
    'footer.col3.mentions': 'Mentions légales',
    'footer.col3.politique': 'Politique de confidentialité',
    'footer.col3.cgv': 'CGV',
    'footer.copyright': '© 2026 Elips Studio. Tous droits réservés.',
  },

  en: {
    'meta.title': 'Elips Studio — AI visuals & videos for e-commerce brands',

    /* Navbar */
    'nav.avantages': 'Benefits',
    'nav.projets': 'Projects',
    'nav.apropos': 'About',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.cta': 'Get in touch',

    /* Hero */
    'hero.status': 'Available for work',
    'hero.title.html': '<em>Premium</em> AI visuals & videos.<br>No studio. Delivered in 7 days.',
    'hero.btn': 'Get in touch',

    /* Bento */
    'bento.label': 'Why AI',
    'bento.title.html': 'The <em class="accent">alternative</em> to traditional productions',
    'bento.subtitle.html': 'Everything a studio production delivers.<br>Without the constraints that come with it.',
    'bento.main.text': 'Your visuals and videos deserve more than a studio rented by the day. I produce them based on your art direction, in 7 days.',
    'bento.main.btn': 'Start a project →',
    'bento.left.title.html': 'One brief. Seven days. <em>Visuals & videos delivered.</em>',
    'bento.left.text': 'You come in with a brief, you walk out with 30 visuals and videos ready to publish — and as many iterations as you want after. No studio to book, no logistics to coordinate, no D-day pressure.',

    /* Bento cards */
    'bento.card1.label': 'TIMELINE',
    'bento.card1.pill': '−75%',
    'bento.card1.row1.name': 'Trad. shoot',
    'bento.card1.row1.value': '28 d',
    'bento.card1.row2.name': 'With me',
    'bento.card1.row2.value': '7 d',
    'bento.card1.title': 'Express delivery',
    'bento.card1.desc': '7 days from brief to final delivery. Where a traditional shoot or video production takes 3 to 4 weeks.',

    'bento.card2.label': 'CLIENT MESSAGE',
    'bento.card2.pill': '✓ Received',
    'bento.card2.chat.name': 'Léa · Wellness brand',
    'bento.card2.chat.bubble.html': 'Honestly the render is insane,<br>can’t wait for the rest!',
    'bento.card2.chat.time': '09:42 · Read',
    'bento.card2.title': 'Studio-grade quality',
    'bento.card2.desc': 'Photorealistic visuals and videos indistinguishable from a studio production. No compromise on the render.',

    'bento.card3.label': 'ART DIRECTION',
    'bento.card3.pill': '✓ Sync',
    'bento.card3.brand.colors': 'Colors',
    'bento.card3.brand.mood': 'Mood',
    'bento.card3.brand.light': 'Lighting',
    'bento.card3.tag.editorial': 'editorial',
    'bento.card3.tag.luxe': 'luxury',
    'bento.card3.tag.intime': 'intimate',
    'bento.card3.tag.dore': 'golden',
    'bento.card3.tag.soft': 'soft',
    'bento.card3.title': 'Your AD respected',
    'bento.card3.desc': 'I work from your brand guidelines, your visual codes, your references. AI adapts to your brand, not the other way around.',

    'bento.card4.label': 'QUOTE COMPARISON',
    'bento.card4.pill': '−85%',
    'bento.card4.quote1.name': 'Traditional shoot',
    'bento.card4.quote1.price': '€12,000',
    'bento.card4.quote2.name': 'Elips Studio',
    'bento.card4.quote2.price': '€1,800',
    'bento.card4.title': 'Fraction of the cost',
    'bento.card4.desc': 'No more €2,000/day studios, photographers or videographers to brief, models to cast. Budget goes where it really counts.',

    /* Projects */
    'projects.label': 'Projects',
    'projects.title.html': 'My latest<br><em>work.</em>',
    'projects.view': 'View project →',
    'projects.author': 'by Elips Studio',

    /* Marquee */
    'marquee.shootings_ia': 'AI Shoots',
    'marquee.videos_ia': 'AI Videos',
    'marquee.ecommerce': 'E-commerce',
    'marquee.visuels_ia': 'AI Visuals',
    'marquee.da': 'Art Direction',

    /* About */
    'about.label': 'About',
    'about.title.html': 'Ismaël, founder<br>of <em>Elips Studio</em>',
    'about.lead': 'I’m an art director for e-commerce brands. AI is my tool to produce faster, without ever compromising on the quality of a pro shoot or video production.',
    'about.text': 'Starting from your brand identity, your moodboard and your products, I direct production end to end — both visuals and videos. Composition, lighting, mood, consistency: what used to take 3 weeks in studio is now delivered in 7 days, without sacrificing editorial standards.',
    'about.stat1.title': '50+ Projects',
    'about.stat1.label': 'Visuals and videos delivered turnkey',
    'about.stat2.title': '20+ Clients',
    'about.stat2.label': 'E-commerce brands worked with',
    'about.stat3.title': '100% Happy',
    'about.stat3.label': 'Clients who recommend our services',
    'about.btn': 'Contact me →',

    /* FAQ */
    'faq.label': 'FAQ',
    'faq.title.html': 'Frequently<br><em>asked</em>',
    'faq.q1': 'How does AI generate my visuals and videos?',
    'faq.a1': 'I work from your brand identity and your moodboard. I write the prompts, pilot each generation, rework visuals and videos one by one. AI is my tool — your art direction is my brief.',
    'faq.q2': 'Are the visuals and videos realistic?',
    'faq.a2': 'Yes, current technologies produce photorealistic visuals and videos. We refine each render manually to deliver a professional result indistinguishable from a traditional production.',
    'faq.q3': 'What are the delivery times?',
    'faq.a3': 'On average, an AI visual project is delivered in 7 working days. AI videos can take up to 14 days depending on complexity. Express options available.',
    'faq.q4': 'Do I have to provide photos?',
    'faq.a4': 'Ideally yes, a few reference photos are enough. But we can also work from moodboards, descriptions, or even sketches.',
    'faq.q5': 'Are the visuals and videos royalty-free?',
    'faq.a5': 'Absolutely. All visuals and videos we create belong entirely to you. You can use them on socials, your website, ads and print without restriction.',
    'faq.q6': 'What’s the difference with a shoot or video production?',
    'faq.a6': 'No studio to rent, no model to cast, no product logistics. You get visuals and videos of the same quality as a studio production, delivered in 7 days, for a fraction of the cost. And above all: with your art direction respected to the letter.',
    'faq.contact': 'Contact us:',

    /* Footer */
    'footer.address': 'Elips Studio<br>Paris, France',
    'footer.status': 'Available for work',
    'footer.col1.title': 'Navigation',
    'footer.col1.accueil': 'Home',
    'footer.col1.projets': 'Projects',
    'footer.col1.apropos': 'About',
    'footer.col1.contact': 'Contact',
    'footer.col2.title': 'Case studies',
    'footer.col3.title': 'Legal',
    'footer.col3.mentions': 'Legal notice',
    'footer.col3.politique': 'Privacy policy',
    'footer.col3.cgv': 'Terms',
    'footer.copyright': '© 2026 Elips Studio. All rights reserved.',
  },
};

(function () {
  const STORAGE_KEY = 'elips_lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || ((navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr');
  }

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        document.title = dict[key];
      }
    });

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang-switch') === lang);
    });

    document.dispatchEvent(new CustomEvent('langchanged', { detail: { lang } }));
  }

  function init() {
    const initial = getLang();
    applyTranslations(initial);

    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        applyTranslations(btn.getAttribute('data-lang-switch'));
      });
    });
  }

  // Public API for late-loaded dynamic content (Supabase, modals, etc.)
  window.Elipsi18n = {
    refresh: function () { applyTranslations(getLang()); },
    setLang: function (lang) { applyTranslations(lang); },
    getLang: getLang,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
