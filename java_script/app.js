/* ============================================================
   VOCES AL PODER — app.js
   SPA Navigation | Carousels | Scroll Animations | Comments
   ============================================================ */

/* ── Data: Alliance logos ────────────────────────────────── */
const ALIANZAS = [
  { name: 'Flora-Tristan',    emoji: '♀️' },
  { name: 'JEAN', emoji: '🤲' },
  { name: 'Paramedicos del Peru',  emoji: '💙' },
  { name: 'Tecsup',          emoji: '🤝' },
  { name: 'Stereo Villa 101.7 FM', emoji: '📻'},
  { name: 'Fundacion adsis', emoji: '💚'},
  { name: 'Generalitat valenciana', emoji: '🤲'},
  { name: 'Voz Viva de Mujer', emoji: '♀️'},

];

/* ── Data: Team members ──────────────────────────────────── */
const JUNTA = [
  { nombre: 'Yadira',     rol: 'Presidenta',                       emoji: '👩‍💼', presentacion: 'Ejemplo:.',      objetivos: 'Ejemplo:.',              hobbies: 'ejemplo' },
  { nombre: 'Jhoseth',   rol: 'Vicepresidente',                   emoji: '👨‍💼', presentacion: 'Ejemplo:.',        objetivos: 'Ejemplo:.',                    hobbies: 'ejemplo' },
  { nombre: 'Daniel',   rol: 'Secretaria General',               emoji: '👩‍💻', presentacion: 'Ejemplo:.',        objetivos: 'Ejemplo:.',                   hobbies: 'ejemplo' },
  { nombre: 'Alexandra',  rol: 'Tesorero',                         emoji: '👨‍💰', presentacion: 'Ejemplo:.',       objetivos: 'Ejemplo:.',                    hobbies: 'ejemplo' },
  { nombre: 'Name',  rol: 'Coord. de Comunicaciones',         emoji: '👩‍💻', presentacion: 'Ejemplo:.',           objetivos: 'Ejemplo:.',                    hobbies: 'ejemplo' },
  { nombre: 'Name',    rol: 'Coord. de Relaciones Institucionales', emoji: '👩‍💻', presentacion: 'Ejemplo:.',     objetivos: 'Ejemplo:.',                   hobbies: 'ejemplo' },
  { nombre: 'Name', rol: 'Coord. de Emprendimiento y Autogestión', emoji: '👩‍💻', presentacion: 'Ejemplo:.',           objetivos: 'Ejemplos.',          hobbies: 'ejemplo' },
];

const VOLUNTARIOS = [
  { nombre: 'Nombre',   rol: 'Voluntaria',  emoji: '👩‍💻', presentacion: 'Soy si a todoo.', objetivos: 'Ejemplo:.', hobbies: 'Hobbies' },
  { nombre: 'Nombre',      rol: 'Voluntario', emoji: '👩‍💻', presentacion: 'Soy si a todoo.',       objetivos: 'Ejemplo:.', hobbies: 'Hobbies' },
  { nombre: 'Nombre',     rol: 'Voluntaria',  emoji: '👩‍💻', presentacion: 'Soy si a todoo.',    objetivos: 'Ejemplo:.',  hobbies: 'Hobbies' },
  { nombre: 'Nombre',    rol: 'Voluntario', emoji: '👩‍💻',  presentacion: 'Soy si a todoo.',    objetivos: 'Ejemplo:.', hobbies: 'Hobbies' },
  { nombre: 'Nombre',   rol: 'Voluntaria', emoji: '👩‍💻', presentacion: 'Soy si a todoo.', objetivos: 'Ejemplo:.',   hobbies: 'Hobbies' },
  { nombre: 'Nombre',    rol: 'Voluntario', emoji: '👩‍💻', presentacion: 'Soy si a todoo.',     objetivos: 'Ejemplo:.', hobbies: 'Hobbies' },
  { nombre: 'Nombre',  rol: 'Voluntaria', emoji: '👩‍💻', presentacion: 'Soy si a todoo.',      objetivos: 'Ejemplo:.', hobbies: 'Hobbies' },
  { nombre: 'Nombre',  rol: 'Voluntario', emoji: '👩‍💻', presentacion: 'Soy si a todoo.', objetivos: 'Ejemplo:.',   hobbies: 'Hobbies' },
  { nombre: 'Nombre', rol: 'Voluntaria', emoji: '👩‍💻', presentacion: 'Soy si a todoo.',  objetivos: 'Ejemplo:.',           hobbies: 'Hobbies' },
  { nombre: 'Nombre',   rol: 'Voluntario', emoji: '👩‍💻', presentacion: 'Soy si a todoo.',    objetivos: 'Ejemplo.', hobbies: 'Hobbies' },
];

/* ── Data: Events / Actions ──────────────────────────────── */
const EVENTOS = [
  { emoji: '🎤', titulo: 'III Encuentro de Lima Sur',    desc: 'Estuvimos presente en el lll encuentro Lima sur, para dialogar sobre el acciones concretas para el cuidado del medio ambiente y el fortalecimiento de los derechos de los adolescentes.', img: '../img/eventos_1.jpg' },
  { emoji: '🎨', titulo: 'Participacion activa en el dialogo politico',  desc: 'Participación de VOCES AL PODER en la actividad de dialogo de participación ciudadana con candidatos organizada por "federación de mujeres"', img: '../img/eventos_2.jpg' },
];

/* ── Data: Colegios / Schools ──────────────────────────────── */
const COLEGIOS = [
  { emoji: '🏫', titulo: 'Desarrollo de espacios "Escucha Adolescente"',   desc: 'Inauguramos colaborativamente el Módulo de Escucha Adolescente en la I.E. Pachacútec, para que las y los adolescentes puedan expresarse, recibir orientación y sentirse acompañados.', img: '../img/colegio_1.jpg' },
  { emoji: '📚', titulo: 'Mente Sana Cuerpo Sano',     desc: 'Feria "Mente Sana Cuerpo Sano" de educación sexual integral!, contamos con el apoyo y colaboración del CMI San José. ¡Por una Educación Sexual Integral libre y segura en todas las escuelas!.', img: '../img/colegio_2(1).jpg' },
];

/* ── Data: Ciudadanía / Community ───────────────────────────── */
const CIUDADANIA = [
  { emoji: '🏘️', titulo: 'Campaña educativa sobre la importancia del uso del Condon',               desc: 'Realizamos nuestra campaña sensibilizadora sobre la importancia del uso del Condón y sobre su real impacto en la salud de jovenes y adolescentes.', img: '../img/comunidad_1.jpg' },
  { emoji: '📢', titulo: 'Encuentro de 5 Instituciones comprometidas',          desc: 'Encuentro de Adolescentes de 5 instituciones educativas y colectivas de Villa El Salvador para fortalecer acciones por la Educación Sexual Integral.', img: '../img/comunidad_2(1).jpg' },
  { emoji: '🤲', titulo: 'Voluntariado Social activa 💪',                  desc: 'Colectivas de adolescentes y jóvenes de Villa El Salvador, por un objetivo común: la defensa de los derechos sexuales y reproductivos y una vida libre de violencia basada en género.', img: '../img/comunidad_3.jpg' },
];

/* ── Data: Donations catalog ─────────────────────────────── */
const CATALOG = [
  {
    categoria: 'Polos',
    emoji_cat: '👕',
    productos: [
      { nombre: 'Polo Negro - Masculino',   desc: 'Talla S-M. 100% algodón, comodo, suave, lavado garantizado con logo bordado.',    emoji: '👕', img: '../img/polo_negro_masculino.png' },
      { nombre: 'Polo Blanco - Femenino', desc: 'Talla S-M. 100% algodón, comodo, suave, lavado garantizado.', emoji: '🤍', img: '../img/polo_blanco_femenino.png' },
      { nombre: 'Polo Blanco - Niño', desc: 'Tallas para niños. Con logo bordado, suave y cómodo.', emoji: '👦', img: '../img/polo_blanco_niño.png' },
    ],
  },
  {
    categoria: 'Gorros',
    emoji_cat: '🧢',
    productos: [
      { nombre: 'Gorro Voces VAP',   desc: 'Bordado 3D del logo. Talla única ajustable.',             emoji: '🧢', img: '../img/gorro_voces_vap.png' },
      { nombre: 'Gorro V.A.P',    desc: 'Bordado profesional, 100% de calidad.',        emoji: '🎩', img: '../img/gorro_v_a_p.png' },
      { nombre: 'Gorro de Lana',    desc: 'Lana suave, ideal para invierno. Logo tejido.',        emoji: '🧶', img: '../img/gorro_lana.png' },
    ],
  },
  {
    categoria: 'Llaveros',
    emoji_cat: '🗝️',
    productos: [
      { nombre: 'Llavero VAP', desc: 'Diseño exclusivo, doble cara, argolla anti-oxido.',            emoji: '🗝️', img: '../img/llavero_vap.png' },
      { nombre: 'Llavero Voces Exclusivo', desc: 'Diseño especial edition, material premium.',        emoji: '🔑', img: '../img/llavero_voces_exclusivo.png' },
    ],
  },
];

/* ── Carousel slides ─────────────────────────────────────── */
const CAROUSEL_VOCES = [
  { overlay: { title: '¡Bienvenidos a Voces al Poder!', text: 'Juntos transformamos realidades.' }, bg: '../img/carrusel_!.jpeg' },
  { overlay: { title: 'Derechos que se defienden',       text: 'Por la equidad de género y la infancia.' }, bg: '../img/corrusel_2.jpeg' },
  { overlay: { title: 'Activismo ambiental escolar',     text: 'Cuidamos el planeta desde las aulas.' }, bg: '../img/carrousel_3(1).jpg' },
];

const CAROUSEL_SOBRE = [
  { overlay: { title: 'Nuestra historia comienza contigo',  text: 'Una organización horizontal y valiente.' }, bg: '../img/carrusel_1_sobre_nosotros.jpg' },
  { overlay: { title: 'Comprometidos con la juventud',      text: 'Más de 3 años de impacto social.' }, bg: '../img/carrusel_2_sobre_nosotros.jpg' },
  { overlay: { title: 'Diversidad que nos une',             text: 'Cada voz importa en nuestra comunidad.' }, bg: '../img/carrusel_3_sobre_nosotros.jpg' },
];

const CAROUSEL_ACCION = [
  { overlay: { title: 'Acción que transforma',  text: 'Presencia activa en colegios y comunidades.' }, bg: '../img/carrusel_accion_social_1.jpg' },
  { overlay: { title: 'Talleres de impacto',    text: 'Pares que enseñan a pares, sin jerarquías.' }, bg: '../img/carrusel_accion_social_2.jpg' },
  { overlay: { title: 'Ciudadanía activa',      text: 'Construimos espacios de participación real.' }, bg: '../img/carrusel_accion_social_3.jpg' },
];

/* ============================================================
   SECTION TEMPLATES
   ============================================================ */

function buildCarousel(slides, id) {
  const slidesHTML = slides.map((s, i) => `
    <div class="carousel-slide">
      <div class="carousel-slide-placeholder" style="background-image: url('${s.bg}'); background-size: cover; background-position: center;">
        <div class="carousel-overlay">
          <h2>${s.overlay.title}</h2>
          <p>${s.overlay.text}</p>
        </div>
      </div>
    </div>
  `).join('');

  const dotsHTML = slides.map((_, i) =>
    `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');

  return `
    <div class="carousel-wrapper" id="${id}">
      <div class="carousel-track">${slidesHTML}</div>
      <button class="carousel-btn prev" aria-label="Anterior">&#8249;</button>
      <button class="carousel-btn next" aria-label="Siguiente">&#8250;</button>
      <div class="carousel-dots">${dotsHTML}</div>
    </div>
  `;
}

function buildMemberCard(m) {
  return `
    <div class="member-card reveal">
      <div class="member-name">${m.nombre}</div>
      <div class="member-photo">${m.emoji}</div>
      <span class="member-role">${m.rol}</span>
      <div class="member-info">
        <span><strong>Presentación:</strong> ${m.presentacion}</span>
        <span><strong>Objetivos:</strong> ${m.objetivos}</span>
        <span class="member-hobbies-title">Hobbies</span>
        <span>${m.hobbies}</span>
      </div>
    </div>
  `;
}

function buildEventCard(e) {
  const hasImg = e.img && e.img.length > 0;
  return `
    <div class="event-card reveal">
      <div class="event-card-img">${hasImg ? `<img src="${e.img}" alt="${e.titulo}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">` : e.emoji}</div>
      <div class="event-card-body">
        <p><strong>${e.titulo}</strong></p>
        <p style="margin-top:.5rem">${e.desc}</p>
      </div>
    </div>
  `;
}

/* ── SECTION: VOCES ─────────────────────────────────────── */
function renderVoces() {
  const alianzasTrack = [...ALIANZAS, ...ALIANZAS].map(a =>
    `<div class="alianza-logo">${a.emoji} ${a.name}</div>`
  ).join('');

  return `
    <section id="section-voces">
      <!-- Hero carousel -->
      <div class="voces-hero">
        ${buildCarousel(CAROUSEL_VOCES, 'carousel-voces')}
      </div>

      <!-- CTA outside carousel -->
      <div class="hero-cta-wrap reveal">
        <p class="hero-welcome">Ten una calurosa Bienvenida a Voces al Poder, ¡contamos contigo!</p>
        <button class="btn-hero-cta" onclick="navigateTo('sobre_nosotros')">súmate, juntos somos más</button>
      </div>

      <!-- Alianzas marquee -->
      <div class="alianzas-section reveal">
        <p class="alianzas-label">🤝 Organizaciones que nos apoyan — imágenes de logos de alianzas</p>
        <div class="alianzas-track-wrap">
          <div class="alianzas-track">${alianzasTrack}</div>
        </div>
      </div>

      <!-- Quiénes somos / Qué hacemos -->
      <div class="voces-info-section">
        <div class="voces-info-grid">
          <!-- Quiénes somos -->
          <div>
            <h2 class="info-col-title reveal">¿Quiénes somos?</h2>
            <div class="info-item reveal">
              <div class="info-item-img">🌍</div>
              <p>Somos una organización de jóvenes comprometidos con la transformación social.</p>
            </div>
            <div class="info-item reveal">
              <div class="info-item-img">💜</div>
              <p>Nos definimos como una organización horizontal, diversa y valiente, enfocada en la defensa de los derechos de las mujeres, niños, niñas y adolescentes.</p>
            </div>
            <div class="info-item reveal">
              <div class="info-item-img">🌱</div>
              <p>Promovemos una cultura de sostenibilidad ambiental desde las aulas.</p>
            </div>
          </div>

          <!-- Center responsive image/carousel -->
          <div class="info-center-img reveal">
            <div class="info-center-carousel" style="background:linear-gradient(135deg,var(--color-primary),var(--color-accent2));">
              <img src="../img/que_hacemos_vap.jpg" alt="Voces al Poder en acción">
            </div>
          </div>

          <!-- Qué hacemos -->
          <div>
            <h2 class="info-col-title reveal">¿Qué hacemos?</h2>
            <div class="info-item reveal">
              <div class="info-item-img">📚</div>
              <p>Acompañamiento estudiantil: talleres de "pares a pares" sobre igualdad de género, prevención del acoso escolar y derechos de la infancia.</p>
            </div>
            <div class="info-item reveal">
              <div class="info-item-img">🤝</div>
              <p>Participamos en eventos que involucran la participación de organizaciones que generan impacto social.</p>
            </div>
          </div>
        </div>

        <!-- Dinámica de trabajo -->
        <div class="voces-dinamica">
          <h2 class="dinamica-title reveal">Nuestra dinámica de trabajo</h2>
          <div class="dinamica-list">
            <div class="dinamica-item reveal">
              <div class="dinamica-item-icon">🗣️</div>
              <p>Identificamos los problemas reales de los estudiantes mediante reuniones trasparentes y de confianza.</p>
            </div>
            <div class="dinamica-item reveal">
              <div class="dinamica-item-icon">💡</div>
              <p>Generamos soluciones en equipo donde cada miembro aporta su idea.</p>
            </div>
            <div class="dinamica-item reveal">
              <div class="dinamica-item-icon">🔄</div>
              <p>Feedback: evaluamos lo aprendido y celebramos nuestros logros para mantener la energía del equipo.</p>
            </div>
            <div class="dinamica-item reveal">
              <div class="dinamica-item-icon">🎉</div>
              <p>Organizamos espacios para celebrar nuestros logros, como salir de paseo con previa organización, entre otras actividades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── SECTION: SOBRE NOSOTROS ────────────────────────────── */
function renderSobreNosotros() {
  const juntaCards = JUNTA.map(buildMemberCard).join('');
  const voluntariosCards = VOLUNTARIOS.map(buildMemberCard).join('');

  return `
    <section id="section-sobre_nosotros">
      <!-- Hero -->
      <div class="sobre-hero">
        <div class="sobre-hero-text">
          <h2 class="reveal">Se parte de esta Historia maravillosa.</h2>
          <p class="reveal" style="margin-top:.8rem">Únete a una organización que cree en el poder de cada voz joven para cambiar el mundo.</p>
        </div>
        <div class="sobre-hero-carousel">
          ${buildCarousel(CAROUSEL_SOBRE, 'carousel-sobre')}
        </div>
      </div>

      <!-- Misión, Visión, Valores -->
      <div class="sobre-mvv">
        <div class="mvv-card reveal">
          <h3>Misión</h3>
          <p>Empoderar a la juventud estudiantil mediante la educación en derechos, la equidad de género y el activismo ambiental.</p>
        </div>
        <div class="mvv-card reveal" style="background:var(--color-accent2);">
          <h3>Visión</h3>
          <p>Ser el referente juvenil líder a nivel regional en la defensa de los derechos humanos y ambientales.</p>
        </div>
        <div class="mvv-card reveal" style="background:var(--color-accent3);">
          <h3>Valores</h3>
          <p>Nuestros valores están alineados con el compromiso, respeto, integridad que fortalecen la transparencia y unidad.</p>
        </div>
      </div>

      <!-- Team: Junta Directiva / Voluntarios -->
      <div class="sobre-team">
        <h2 class="team-title reveal">Nuestra historia, Tu Historia</h2>
        <div class="team-tabs">
          <button class="team-tab active" data-team="junta">Junta Directiva</button>
          <button class="team-tab" data-team="voluntarios">Voluntarios</button>
        </div>
        <div class="team-grid" id="team-grid">
          ${juntaCards}
        </div>
      </div>
    </section>
  `;
}

/* ── SECTION: ACCIÓN SOCIAL ─────────────────────────────── */
function renderAccionSocial() {
  const eventCards = EVENTOS.map(buildEventCard).join('');

  return `
    <section id="section-accion_social">
      <!-- Hero -->
      <div class="accion-hero">
        <div class="accion-hero-quote reveal">
          "Tu voz no es un eco lejano, es el motor que necesitamos para que el respeto y la justicia dejen de ser un privilegio y se conviertan en nuestra norma de convivencia"
        </div>
        <div>
          ${buildCarousel(CAROUSEL_ACCION, 'carousel-accion')}
        </div>
      </div>

      <!-- Sub-tabs -->
      <div class="accion-tabs">
        <button class="accion-tab active" data-accion="eventos">Eventos</button>
        <button class="accion-tab" data-accion="colegios">Colegios</button>
        <button class="accion-tab" data-accion="ciudadania">Ciudadanía</button>
      </div>

      <!-- Events grid -->
      <div class="accion-events-grid" id="accion-grid">
        ${eventCards}
      </div>
    </section>
  `;
}

/* ── SECTION: DONACIONES ────────────────────────────────── */
function renderDonaciones() {
  const catalogHTML = CATALOG.map(cat => `
    <div class="catalog-category reveal">
      <div class="catalog-category-title">${cat.emoji_cat} ${cat.categoria}</div>
      <div class="catalog-grid">
        ${cat.productos.map(p => {
          const hasImg = p.img && p.img.length > 0;
          return `
            <div class="product-card">
              <div class="product-card-img">${hasImg ? `<img src="${p.img}" alt="${p.nombre}" style="width:100%;height:100%;object-fit:contain;padding:10px;">` : p.emoji}</div>
              <div class="product-card-body">
                <div class="product-card-name">${p.nombre}</div>
                <div class="product-card-desc">${p.desc}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section id="section-donaciones">
      <div class="donaciones-welcome reveal">
        <p>Agradecemos profundamente esta visita, las donaciones son el motor que transforma nuestras ideas en acciones concretas. 💙</p>
      </div>

      <div class="donaciones-catalog">
        ${catalogHTML}
      </div>

      <div class="donaciones-how reveal">
        <h3>¿Cómo puedes donar?</h3>
        <ol>
          <li>Haz Clic en el producto que deseas adquirir.</li>
          <li>Realiza otro Clic aquí, te llevará al WhatsApp del encargado de ventas.</li>
          <li>Para pagar te brindamos el número de cuenta de banco o Yape por el WhatsApp.</li>
        </ol>
        <a href="https://wa.me/939949494" target="_blank" class="btn-comprar">Clic aquí para comprar 🛒</a>
      </div>
    </section>
  `;
}

/* ============================================================
   CAROUSEL ENGINE
   ============================================================ */
function initCarousel(wrapperId) {
  const wrapper = document.getElementById(wrapperId);
  if (!wrapper) return;

  const track  = wrapper.querySelector('.carousel-track');
  const slides = wrapper.querySelectorAll('.carousel-slide');
  const dots   = wrapper.querySelectorAll('.carousel-dot');
  const prev   = wrapper.querySelector('.carousel-btn.prev');
  const next   = wrapper.querySelector('.carousel-btn.next');

  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function autoPlay() {
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  function resetAuto() {
    clearInterval(timer);
    autoPlay();
  }

  prev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  next.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.index); resetAuto(); }));

  // Touch swipe
  let startX = 0;
  wrapper.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  wrapper.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
  }, { passive: true });

  autoPlay();
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
let revealObserver;

function initScrollReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ============================================================
   TEAM TABS (Sobre Nosotros)
   ============================================================ */
function initTeamTabs() {
  const tabs = document.querySelectorAll('.team-tab');
  const grid = document.getElementById('team-grid');
  if (!tabs.length || !grid) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const team = tab.dataset.team;
      const members = team === 'junta' ? JUNTA : VOLUNTARIOS;
      grid.innerHTML = members.map(buildMemberCard).join('');
      initScrollReveal();
    });
  });
}

/* ============================================================
   ACCIÓN SOCIAL TABS
   ============================================================ */
function initAccionTabs() {
  const tabs = document.querySelectorAll('.accion-tab');
  const grid = document.getElementById('accion-grid');
  if (!tabs.length || !grid) return;

  // Función para renderizar las cards según el tipo
  const renderCards = (tipo) => {
    let datos = [];
    switch(tipo) {
      case 'eventos':
        datos = EVENTOS;
        break;
      case 'colegios':
        datos = COLEGIOS;
        break;
      case 'ciudadania':
        datos = CIUDADANIA;
        break;
      default:
        datos = EVENTOS;
    }
    grid.innerHTML = datos.map(buildEventCard).join('');
    initScrollReveal();
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remover clase active de todos los tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Agregar clase active al tab seleccionado
      tab.classList.add('active');
      // Obtener el tipo de acción y renderizar las cards correspondientes
      const tipoAccion = tab.getAttribute('data-accion');
      renderCards(tipoAccion);
    });
  });
}

/* ============================================================
   COMMENTS SYSTEM
   ============================================================ */
const STORAGE_KEY = 'vap_comments';

function getComments() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch { return []; }
}

function saveComment(name, text) {
  const comments = getComments();
  comments.push({ name, text, ts: Date.now() });
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(comments)); } catch {}
  return comments;
}

function renderMarquee() {
  const comments = getComments();
  const inner = document.getElementById('marquee-inner');
  if (!inner) return;

  // Default placeholder comments if none exist
  const display = comments.length > 0 ? comments : [
    { name: 'Andrea M.',    text: 'Este espacio me inspiró a creer en el cambio.' },
    { name: 'Carlos R.',    text: '¡Voces al Poder es increíble! Sigamos adelante.' },
    { name: 'Lucía T.',     text: 'Gracias por defender nuestros derechos siempre.' },
    { name: 'Fernanda P.',  text: 'El impacto de su trabajo se siente en cada escuela.' },
  ];

  // Duplicate for infinite scroll
  const all = [...display, ...display];
  inner.innerHTML = all.map(c => `
    <div class="comment-chip">
      <span class="chip-name">nombre: ${c.name}</span>
      <span class="chip-text">comentario: ${c.text}</span>
    </div>
  `).join('');
}

function initCommentForm() {
  const form    = document.getElementById('comment-form');
  const nameEl  = document.getElementById('comment-name');
  const textEl  = document.getElementById('comment-text');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = nameEl.value.trim();
    const text = textEl.value.trim();
    if (!name || !text) return;

    saveComment(name, text);
    renderMarquee();
    showToast('¡Comentario publicado! 🎉');
    nameEl.value = '';
    textEl.value = '';
  });
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}

/* ============================================================
   SPA NAVIGATION
   ============================================================ */
const sections = {
  voces:           renderVoces,
  sobre_nosotros:  renderSobreNosotros,
  accion_social:   renderAccionSocial,
  donaciones:      renderDonaciones,
};

function navigateTo(sectionId) {
  const content = document.getElementById('app-content');
  if (!content || !sections[sectionId]) return;

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === sectionId);
  });

  // Render section
  content.innerHTML = sections[sectionId]();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Init carousels
  setTimeout(() => {
    if (sectionId === 'voces')          initCarousel('carousel-voces');
    if (sectionId === 'sobre_nosotros') initCarousel('carousel-sobre');
    if (sectionId === 'accion_social')  initCarousel('carousel-accion');

    // Init section-specific tabs
    initTeamTabs();
    initAccionTabs();

    // Init scroll reveal
    initScrollReveal();

    // Re-init comment form (footer is always present but form listeners need to be re-attached if footer re-renders)
    initCommentForm();
  }, 50);
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.section));
  });

  // Footer nav links
  document.querySelectorAll('.footer-nav-link').forEach(link => {
    link.addEventListener('click', () => navigateTo(link.dataset.section));
  });

  // Initial render
  navigateTo('voces');

  // Comments marquee
  renderMarquee();
  initCommentForm();

  // Header shadow on scroll
  window.addEventListener('scroll', () => {
    const hdr = document.getElementById('main-header');
    if (hdr) hdr.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(26,35,64,.35)'
      : '0 2px 12px rgba(58,123,213,.2)';
  }, { passive: true });
});
