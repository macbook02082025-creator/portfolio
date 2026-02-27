function renderContent(data) {
  // Hero Section
  document.getElementById('hero-status').innerHTML = `<span class="h-status-dot" aria-hidden="true"></span> ${data.hero.status}`;
  document.getElementById('hero-name1').textContent = data.hero.name1;
  document.getElementById('hero-name2').textContent = data.hero.name2;
  document.getElementById('hero-tagline').innerHTML = data.hero.tagline;
  const heroChips = document.getElementById('hero-chips');
  heroChips.innerHTML = ''; // Clear existing
  data.hero.chips.forEach(chip => {
    heroChips.innerHTML += `<div class="hchip"><span class="hchip-val">${chip.value}</span>&nbsp;${chip.label}</div>`;
  });
  const heroStats = document.getElementById('hero-stats');
  heroStats.innerHTML = ''; // Clear existing
  data.hero.stats.forEach(stat => {
    heroStats.innerHTML += `
      <div class="hstat">
        <div class="hstat-n" data-t="${stat.value}" data-s="${stat.suffix}">${stat.value}${stat.suffix}</div>
        <div class="hstat-l">${stat.label}</div>
      </div>`;
  });
  const heroCards = document.getElementById('hero-cards');
  heroCards.innerHTML = ''; // Clear existing
  data.hero.cards.forEach(card => {
    heroCards.innerHTML += `
      <div class="hcard">
        <div class="hc-label">${card.label}</div>
        <div class="hc-value">${card.value}</div>
        <div class="hc-sub">${card.sub}</div>
      </div>`;
  });

  // Marquee Section
  const marqueeInner = document.querySelector('.mq-inner');
  if (marqueeInner && data.marquee) {
    const marqueeContent = data.marquee.map(item => `<div class="mq-item"><span class="mq-t">${item}</span><span class="mq-sep"></span></div>`).join('');
    marqueeInner.innerHTML = marqueeContent + marqueeContent; // Duplicate for seamless loop
  }

  // Metrics Section
  const metricsRow = document.getElementById('metrics-row');
  metricsRow.innerHTML = ''; // Clear existing
  data.metrics.forEach(metric => {
    metricsRow.innerHTML += `
      <div class="metric" role="listitem">
        <div class="card-shine" aria-hidden="true"></div>
        <div class="metric-num" data-t="${metric.value}" data-s="${metric.suffix}">${metric.value}${metric.suffix}</div>
        <div class="metric-label">${metric.label}</div>
        <div class="metric-sub">${metric.sub}</div>
      </div>`;
  });

  // About Section
  const aboutBio = document.getElementById('about-bio');
  aboutBio.innerHTML = ''; // Clear existing
  data.about.bio.forEach(p => {
    aboutBio.innerHTML += `<p>${p}</p>`;
  });
  const aboutPhils = document.getElementById('about-philosophies');
  aboutPhils.innerHTML = ''; // Clear existing
  data.about.philosophies.forEach(phil => {
    let chipsHtml = '';
    if (phil.chips) {
      chipsHtml = `<div class="mini-chips">${phil.chips.map(c => `<span class="mc">${c}</span>`).join('')}</div>`;
    }
    aboutPhils.innerHTML += `
      <div class="phil">
        <div class="phil-h">${phil.title}</div>
        <p class="phil-p">${phil.text}</p>
        ${chipsHtml}
      </div>`;
  });

  // Skills Section
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = ''; // Clear existing
  data.skills.forEach(skill => {
    skillsGrid.innerHTML += `
      <div class="sg">
        <div class="card-shine" aria-hidden="true"></div>
        <div class="sg-head">
          <div>
            <div class="sg-ico">⚡</div>
            <div class="sg-name">${skill.name}</div>
          </div>
          <span class="sg-badge core">${skill.badge}</span>
        </div>
        <div class="sg-tags">
          ${skill.tags.map(t => `<span class="sk hi">${t}</span>`).join('')}
        </div>
      </div>`;
  });

  // Experience Section
  const expTimeline = document.getElementById('experience-timeline');
  expTimeline.innerHTML = ''; // Clear existing
  data.experience.forEach(job => {
    let highlightHtml = '';
    if(job.highlight) {
        highlightHtml = `<div class="tl-highlight">${job.highlight}</div>`;
    }
    expTimeline.innerHTML += `
      <div class="tl-item">
        <div class="tl-dot" aria-hidden="true"></div>
        <div class="tl-meta">
          <span class="tl-period">${job.period}</span>
          <span class="tl-co">${job.company}</span>
        </div>
        <h3 class="tl-role">${job.role}</h3>
        <div class="tl-stack">${job.stack}</div>
        ${highlightHtml}
        <div class="tl-bls">
          ${job.points.map(p => `<div class="tl-bl"><span class="tl-bl-dot">▸</span><span>${p}</span></div>`).join('')}
        </div>
      </div>`;
  });

  // Projects Section
  const featuredProjects = document.getElementById('featured-projects');
  featuredProjects.innerHTML = ''; // Clear existing
  data.projects.featured.forEach(proj => {
    featuredProjects.innerHTML += `
      <article class="pf-card" data-fc="${proj.categories}">
        <div class="card-shine" aria-hidden="true"></div>
        <div class="feat-badge">★ Featured — Flagship</div>
        <div class="pfc-period">${proj.period}</div>
        <h3 class="pfc-name">${proj.name}</h3>
        <div class="pfc-sub">${proj.sub}</div>
        <p class="pfc-desc">${proj.desc}</p>
        <div class="metric-bar">${proj.metric}</div>
        <div class="tech-row">
          ${proj.tags.map(t => `<span class="tt">${t}</span>`).join('')}
        </div>
      </article>`;
  });
  const regularProjects = document.getElementById('regular-projects');
  regularProjects.innerHTML = ''; // Clear existing
  data.projects.regular.forEach(proj => {
    regularProjects.innerHTML += `
      <article class="pc r" data-rc="${proj.categories}">
        <div class="pc-top-line" aria-hidden="true"></div>
        <div class="card-shine" aria-hidden="true"></div>
        <div class="pbadge proto">${proj.badge}</div>
        <div class="pc-period">${proj.period}</div>
        <h3 class="pc-name">${proj.name}</h3>
        <div class="pc-tag">${proj.tag}</div>
        <p class="pc-body">${proj.body}</p>
        <div class="pc-metric">${proj.metric}</div>
        <div class="tech-row">
          ${proj.tags.map(t => `<span class="tt">${t}</span>`).join('')}
        </div>
      </article>`;
  });

  // GenAI Section
  const genaiBody = document.getElementById('genai-body');
  if (genaiBody && data.genAI && data.genAI.body) {
    genaiBody.innerHTML = data.genAI.body.map(p => `<p>${p}</p>`).join('');
  }
  const genaiCallout = document.getElementById('genai-callout');
  if (genaiCallout && data.genAI && data.genAI.callout) {
    genaiCallout.innerHTML = `
      <div class="ai-callout-h">${data.genAI.callout.title}</div>
      <p>${data.genAI.callout.text}</p>`;
  }
  const genaiPillars = document.getElementById('genai-pillars');
  if (genaiPillars && data.genAI && data.genAI.pillars) {
    genaiPillars.innerHTML = ''; // Clear existing
    data.genAI.pillars.forEach((pillar, i) => {
      genaiPillars.innerHTML += `
        <div class="ai-pillar">
          <div class="card-shine" aria-hidden="true"></div>
          <div class="aip-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="aip-title">${pillar.title}</div>
          <p class="aip-text">${pillar.text}</p>
        </div>`;
    });
  }

  // Theme Switcher
  const themePanel = document.getElementById('theme-panel');
  if (themePanel && data.themes) {
    const label = themePanel.querySelector('.tp-label');
    themePanel.innerHTML = ''; // Clear existing
    if(label) themePanel.appendChild(label); // Re-add label
    data.themes.forEach(theme => {
      const swatches = theme.colors.map(color => `<span class="theme-swatch" style="background:${color}"></span>`).join('');
      themePanel.innerHTML += `
        <button class="theme-btn" data-theme="${theme.id}" role="option">
          <span class="theme-swatches">${swatches}</span>
          <span><div class="theme-name">${theme.name}</div><div class="theme-desc">${theme.desc}</div></span>
        </button>`;
    });
  }
}


// ═══════════════════════════════════════
// THEMES
// ═══════════════════════════════════════
var THEMES = {
  'aurora': {
    '--void':     '#030407',
    '--abyss':    '#060A12',
    '--base':     '#0A0F1E',
    '--raised':   '#0F1628',
    '--lifted':   '#141D35',
    '--border':   'rgba(148,163,184,.07)',
    '--border2':  'rgba(148,163,184,.14)',
    '--v':        '#8B5CF6',
    '--v2':       '#A78BFA',
    '--v3':       '#C4B5FD',
    '--v-g':      'rgba(139,92,246,.08)',
    '--v-b':      'rgba(139,92,246,.22)',
    '--v-glow':   'rgba(139,92,246,.35)',
    '--c':        '#06B6D4',
    '--c2':       '#22D3EE',
    '--c3':       '#67E8F9',
    '--c-g':      'rgba(6,182,212,.08)',
    '--c-b':      'rgba(6,182,212,.22)',
    '--gold':     '#F59E0B',
    '--gold2':    '#FCD34D',
    '--gold-g':   'rgba(245,158,11,.08)',
    '--gold-b':   'rgba(245,158,11,.2)',
    '--em':       '#10B981',
    '--txt1':     '#F1F5F9',
    '--txt2':     '#94A3B8',
    '--txt3':     '#475569',
    '--txt4':     '#2D3A52',
    '--particle1':'#8B5CF6',
    '--particle2':'#06B6D4',
    '--particle3':'#F59E0B',
  },
  'neon-tokyo': {
    '--void':     '#000000',
    '--abyss':    '#030305',
    '--base':     '#060608',
    '--raised':   '#0C0C10',
    '--lifted':   '#111115',
    '--border':   'rgba(0,255,136,.07)',
    '--border2':  'rgba(0,255,136,.16)',
    '--v':        '#00CC6A',
    '--v2':       '#00FF88',
    '--v3':       '#7FFFBF',
    '--v-g':      'rgba(0,255,136,.07)',
    '--v-b':      'rgba(0,255,136,.2)',
    '--v-glow':   'rgba(0,255,136,.4)',
    '--c':        '#FF2D78',
    '--c2':       '#FF5C99',
    '--c3':       '#FFB3CC',
    '--c-g':      'rgba(255,45,120,.07)',
    '--c-b':      'rgba(255,45,120,.2)',
    '--gold':     '#00CFFF',
    '--gold2':    '#7FE7FF',
    '--gold-g':   'rgba(0,207,255,.07)',
    '--gold-b':   'rgba(0,207,255,.18)',
    '--em':       '#00FF88',
    '--txt1':     '#FFFFFF',
    '--txt2':     '#A0AEC0',
    '--txt3':     '#4A5568',
    '--txt4':     '#2D3748',
    '--particle1':'#00FF88',
    '--particle2':'#FF2D78',
    '--particle3':'#00CFFF',
  },
  'solaris': {
    '--void':     '#080402',
    '--abyss':    '#100A05',
    '--base':     '#180F08',
    '--raised':   '#24160D',
    '--lifted':   '#2E1D12',
    '--border':   'rgba(249,115,22,.07)',
    '--border2':  'rgba(249,115,22,.16)',
    '--v':        '#F97316',
    '--v2':       '#FB923C',
    '--v3':       '#FDBA74',
    '--v-g':      'rgba(249,115,22,.08)',
    '--v-b':      'rgba(249,115,22,.22)',
    '--v-glow':   'rgba(249,115,22,.4)',
    '--c':        '#EF4444',
    '--c2':       '#F87171',
    '--c3':       '#FCA5A5',
    '--c-g':      'rgba(239,68,68,.08)',
    '--c-b':      'rgba(239,68,68,.2)',
    '--gold':     '#FBBF24',
    '--gold2':    '#FCD34D',
    '--gold-g':   'rgba(251,191,36,.08)',
    '--gold-b':   'rgba(251,191,36,.18)',
    '--em':       '#FBBF24',
    '--txt1':     '#FFF7ED',
    '--txt2':     '#FED7AA',
    '--txt3':     '#B45309',
    '--txt4':     '#7C2D12',
    '--particle1':'#F97316',
    '--particle2':'#EF4444',
    '--particle3':'#FBBF24',
  },
  'oceanic': {
    '--void':     '#020609',
    '--abyss':    '#050C13',
    '--base':     '#08111C',
    '--raised':   '#0E1A2A',
    '--lifted':   '#132235',
    '--border':   'rgba(59,130,246,.07)',
    '--border2':  'rgba(59,130,246,.16)',
    '--v':        '#3B82F6',
    '--v2':       '#60A5FA',
    '--v3':       '#93C5FD',
    '--v-g':      'rgba(59,130,246,.08)',
    '--v-b':      'rgba(59,130,246,.22)',
    '--v-glow':   'rgba(59,130,246,.4)',
    '--c':        '#14B8A6',
    '--c2':       '#2DD4BF',
    '--c3':       '#5EEAD4',
    '--c-g':      'rgba(20,184,166,.08)',
    '--c-b':      'rgba(20,184,166,.2)',
    '--gold':     '#67E8F9',
    '--gold2':    '#A5F3FC',
    '--gold-g':   'rgba(103,232,249,.07)',
    '--gold-b':   'rgba(103,232,249,.15)',
    '--em':       '#2DD4BF',
    '--txt1':     '#F0F9FF',
    '--txt2':     '#7DD3FC',
    '--txt3':     '#0C4A6E',
    '--txt4':     '#082f49',
    '--particle1':'#3B82F6',
    '--particle2':'#14B8A6',
    '--particle3':'#67E8F9',
  },
  'jade': {
    '--void':     '#030806',
    '--abyss':    '#07100C',
    '--base':     '#0B1811',
    '--raised':   '#102319',
    '--lifted':   '#152E20',
    '--border':   'rgba(34,197,94,.07)',
    '--border2':  'rgba(34,197,94,.16)',
    '--v':        '#22C55E',
    '--v2':       '#4ADE80',
    '--v3':       '#86EFAC',
    '--v-g':      'rgba(34,197,94,.08)',
    '--v-b':      'rgba(34,197,94,.22)',
    '--v-glow':   'rgba(34,197,94,.4)',
    '--c':        '#84CC16',
    '--c2':       '#A3E635',
    '--c3':       '#BEF264',
    '--c-g':      'rgba(132,204,22,.08)',
    '--c-b':      'rgba(132,204,22,.2)',
    '--gold':     '#10B981',
    '--gold2':    '#34D399',
    '--gold-g':   'rgba(16,185,129,.08)',
    '--gold-b':   'rgba(16,185,129,.18)',
    '--em':       '#A3E635',
    '--txt1':     '#F7FEE7',
    '--txt2':     '#D9F99D',
    '--txt3':     '#3F6212',
    '--txt4':     '#1A2E05',
    '--particle1':'#4ADE80',
    '--particle2':'#A3E635',
    '--particle3':'#34D399',
  }
};

// Mesh gradient overrides per theme (injected as inline style on .mesh)
var MESH_GRADIENTS = {
  'aurora':     'rgba(139,92,246,.12),rgba(6,182,212,.09),rgba(245,158,11,.04)',
  'neon-tokyo': 'rgba(0,255,136,.1),rgba(255,45,120,.08),rgba(0,207,255,.05)',
  'solaris':    'rgba(249,115,22,.12),rgba(239,68,68,.09),rgba(251,191,36,.05)',
  'oceanic':    'rgba(59,130,246,.12),rgba(20,184,166,.09),rgba(103,232,249,.04)',
  'jade':       'rgba(34,197,94,.12),rgba(132,204,22,.09),rgba(16,185,129,.05)',
};

// Contact section bg overrides
var CONTACT_GRADIENTS = {
  'aurora':     'linear-gradient(135deg,#7C3AED,#1e1b4b 50%,#0f172a)',
  'neon-tokyo': 'linear-gradient(135deg,#003820,#1a0030 50%,#000005)',
  'solaris':    'linear-gradient(135deg,#B45309,#7C2D12 50%,#080402)',
  'oceanic':    'linear-gradient(135deg,#0C4A6E,#082f49 50%,#020609)',
  'jade':       'linear-gradient(135deg,#166534,#1A2E05 50%,#030806)',
};

var currentTheme = 'aurora';

function applyTheme(name) {
  var theme = THEMES[name];
  if (!theme) return;
  var root = document.documentElement;
  Object.keys(theme).forEach(function(k) {
    root.style.setProperty(k, theme[k]);
  });

  // Update mesh gradient
  var mesh = document.querySelector('.mesh');
  if (mesh && MESH_GRADIENTS[name]) {
    var c = MESH_GRADIENTS[name];
    var colors = c.split(',');
    mesh.style.background =
      'radial-gradient(ellipse 700px 600px at 80% 10%,'+colors[0]+',transparent),' +
      'radial-gradient(ellipse 600px 500px at 5% 70%,'+colors[1]+',transparent),' +
      'radial-gradient(ellipse 400px 400px at 50% 50%,'+colors[2]+',transparent),' +
      theme['--void'];
  }

  // Update contact gradient
  var cl = document.querySelector('.cl');
  if (cl && CONTACT_GRADIENTS[name]) {
    cl.style.background = CONTACT_GRADIENTS[name];
  }

  // Update AI callout
  var aiCallout = document.querySelector('.ai-callout');
  if (aiCallout) {
    if (name === 'neon-tokyo') {
      aiCallout.style.background = 'linear-gradient(135deg,#003820,#00CC6A)';
    } else if (name === 'solaris') {
      aiCallout.style.background = 'linear-gradient(135deg,#B45309,#F97316)';
    } else if (name === 'oceanic') {
      aiCallout.style.background = 'linear-gradient(135deg,#0C4A6E,#3B82F6)';
    } else if (name === 'jade') {
      aiCallout.style.background = 'linear-gradient(135deg,#166534,#22C55E)';
    } else { // Default to aurora
      aiCallout.style.background = 'linear-gradient(135deg,var(--v),#1e1b4b)';
    }
  }

  // Update palette preview dots
  var pDots = document.querySelectorAll('#palette-preview-dots .palette-dot');
  var p = [theme['--v2'], theme['--c2'], theme['--gold2']];
  pDots.forEach(function(d, i) { if (p[i]) d.style.background = p[i]; });

  // Update active state on buttons
  document.querySelectorAll('.theme-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.theme === name);
  });

  currentTheme = name;
  localStorage.setItem('ns-theme', name);
}

function initThemeSwitcher() {
  var toggleBtn = document.getElementById('theme-toggle-btn');
  var panel = document.getElementById('theme-panel');
  if (!toggleBtn || !panel) return;

  toggleBtn.addEventListener('click', function() {
    var isOpen = panel.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!document.getElementById('theme-switcher').contains(e.target)) {
      panel.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.theme-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      applyTheme(btn.dataset.theme);
      panel.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Restore saved theme
  var saved = localStorage.getItem('ns-theme');
  if (saved && THEMES[saved]) {
    applyTheme(saved);
  } else {
    applyTheme('aurora'); // Default to aurora
  }
}

// ═══════════════════════════════════════
// LOADER
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
    fetch('portfolio-data.json')
    .then(response => response.json())
    .then(data => {
      renderContent(data);
      setTimeout(function() {
        var loader = document.getElementById('loader');
        if (loader) loader.classList.add('done');
        initAll();
      }, 1400);
    })
    .catch(error => {
        console.error("Failed to load portfolio data:", error);
        // Fallback or error message
        var loader = document.getElementById('loader');
        if (loader) loader.classList.add('done');
    });
});
setTimeout(function() {
  var loader = document.getElementById('loader');
  if (loader && !loader.classList.contains('done')) {
    loader.classList.add('done');
  }
}, 3500);

function initAll() {
  initThemeSwitcher();
  initThree();
  initCursor();
  initNav();
  initScrollReveal();
  initCounters();
  initTilt();
  initMagnetic();
  initProjectFilters();
  initCopyBtns();
  initResumeViewer();
  initHamburger();
  initBackToTop();
}

// ═══════════════════════════════════════
// THREE.JS — CONSTELLATION + 3D PARTICLES
// ═══════════════════════════════════════
function initThree() {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  var scene = new THREE.Scene();
  var W = window.innerWidth, H = window.innerHeight;
  var camera = new THREE.PerspectiveCamera(70, W/H, 0.1, 1000);
  camera.position.z = 80;

  var renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true, antialias: true});
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // PARTICLES
  var count = 1400;
  var pos = new Float32Array(count * 3);
  var colors = new Float32Array(count * 3);
  var sizes = new Float32Array(count);

  var palette = [
    [0.545, 0.361, 0.965],  // violet
    [0.024, 0.714, 0.831],  // cyan
    [0.961, 0.620, 0.043],  // gold
    [0.2, 0.4, 0.9],        // blue
    [1.0, 0.9, 1.0],        // near white
  ];

  for (var i = 0; i < count; i++) {
    var angle = Math.random() * Math.PI * 2;
    var radius = 20 + Math.random() * 100;
    var height = (Math.random() - 0.5) * 80;
    pos[i*3]   = Math.cos(angle) * radius * (Math.random() * 1.5 + 0.5);
    pos[i*3+1] = height;
    pos[i*3+2] = Math.sin(angle) * radius * (Math.random() * 1.5 + 0.5);

    var c = palette[Math.floor(Math.random() * palette.length)];
    colors[i*3]   = c[0];
    colors[i*3+1] = c[1];
    colors[i*3+2] = c[2];

    sizes[i] = Math.random() * 2 + 0.5;
  }

  var geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  var mat = new THREE.PointsMaterial({
    size: 0.8,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  var points = new THREE.Points(geo, mat);
  scene.add(points);

  // FLOATING GEOMETRIC SHAPES
  var shapes = [];
  var shapeDefs = [
    {geo: new THREE.IcosahedronGeometry(3.5, 0), x: 40, y: 15, z: -20},
    {geo: new THREE.OctahedronGeometry(2.5, 0), x: -45, y: -20, z: -15},
    {geo: new THREE.TetrahedronGeometry(2.0, 0), x: 20, y: -30, z: 10},
    {geo: new THREE.IcosahedronGeometry(1.8, 0), x: -25, y: 25, z: -30},
  ];

  shapeDefs.forEach(function(def, idx) {
    var wireMat = new THREE.MeshBasicMaterial({
      color: idx % 2 === 0 ? 0x8B5CF6 : 0x06B6D4,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    var mesh = new THREE.Mesh(def.geo, wireMat);
    mesh.position.set(def.x, def.y, def.z);
    mesh.userData = {
      rotX: (Math.random() - .5) * .008,
      rotY: (Math.random() - .5) * .01,
      floatAmp: Math.random() * 2 + 1,
      floatSpeed: Math.random() * .3 + .15,
      floatOffset: Math.random() * Math.PI * 2,
    };
    scene.add(mesh);
    shapes.push(mesh);
  });

  // MOUSE INTERACTION
  var mouse = {x: 0, y: 0, tx: 0, ty: 0};
  document.addEventListener('mousemove', function(e) {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 0.4;
    mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 0.3;
  }, {passive: true});

  var t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.006;

    // Smooth camera parallax
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    camera.position.x = mouse.x * 12;
    camera.position.y = mouse.y * 8;
    camera.lookAt(0, 0, 0);

    // Rotate particle field slowly
    points.rotation.y = t * 0.04;
    points.rotation.x = Math.sin(t * 0.1) * 0.04;

    // Animate shapes
    shapes.forEach(function(mesh) {
      var ud = mesh.userData;
      mesh.rotation.x += ud.rotX;
      mesh.rotation.y += ud.rotY;
      mesh.position.y += Math.sin(t * ud.floatSpeed + ud.floatOffset) * 0.008 * ud.floatAmp;
    });

    renderer.render(scene, camera);
  }
  animate();

  // RESIZE
  window.addEventListener('resize', function() {
    W = window.innerWidth; H = window.innerHeight;
    camera.aspect = W/H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  });
}

// ═══════════════════════════════════════
// CUSTOM CURSOR
// ═══════════════════════════════════════
function initCursor() {
  var dot = document.getElementById('cur-dot');
  var ring = document.getElementById('cur-ring');
  if (!dot || !ring) return;
  var mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  }, {passive: true});

  document.querySelectorAll('a,button,.hchip,.pf-btn,.sg,.pc,.pf-card,.metric,.hstat,.ci,.ai-pillar').forEach(function(el) {
    el.addEventListener('mouseenter', function() { document.body.classList.add('hov'); });
    el.addEventListener('mouseleave', function() { document.body.classList.remove('hov'); });
  });

  (function animRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
}

// ═══════════════════════════════════════
// NAV
// ═══════════════════════════════════════
function initNav() {
  var nav = document.getElementById('nav');
  var nls = document.querySelectorAll('.n-a[data-s]');
  var secs = document.querySelectorAll('section[id]');
  var ticking = false;

  window.addEventListener('scroll', function() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function() {
      nav.classList.toggle('sc', scrollY > 40);
      var cur = '';
      secs.forEach(function(s) { if (scrollY >= s.offsetTop - 160) cur = s.id; });
      nls.forEach(function(l) { l.classList.toggle('on', l.dataset.s === cur); });
      var dh = document.documentElement.scrollHeight - innerHeight;
      document.getElementById('prog').style.width = (scrollY / dh * 100) + '%';
      document.getElementById('btt').classList.toggle('vis', scrollY > 500);
      ticking = false;
    });
  }, {passive: true});
}

// ═══════════════════════════════════════
// HAMBURGER
// ═══════════════════════════════════════
function initHamburger() {
  var ham = document.getElementById('ham');
  var mob = document.getElementById('mobnav');
  if (!ham || !mob) return;

  ham.addEventListener('click', function() {
    var o = mob.classList.toggle('open');
    ham.classList.toggle('open', o);
    ham.setAttribute('aria-expanded', o);
    document.body.style.overflow = o ? 'hidden' : '';
  });

  document.querySelectorAll('.mob-a').forEach(function(l) {
    l.addEventListener('click', function() {
      mob.classList.remove('open'); ham.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mob.classList.contains('open')) {
      mob.classList.remove('open'); ham.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
    }
  });
}

// ═══════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════
function initScrollReveal() {
  var ro = new IntersectionObserver(function(entries) {
    entries.forEach(function(x) {
      if (x.isIntersecting) { x.target.classList.add('vis'); ro.unobserve(x.target); }
    });
  }, {threshold: 0.06, rootMargin: '0px 0px -20px 0px'});
  document.querySelectorAll('.r').forEach(function(el) { ro.observe(el); });
}

// ═══════════════════════════════════════
// COUNTERS
// ═══════════════════════════════════════
function initCounters() {
  function runCounter(el) {
    var t = +el.dataset.t, s = el.dataset.s || '', n = 0, inc = t / 50;
    var tm = setInterval(function() {
      n += inc;
      if (n >= t) { n = t; clearInterval(tm); }
      el.textContent = Math.round(n) + s;
    }, 22);
  }
  var co = new IntersectionObserver(function(entries) {
    entries.forEach(function(x) {
      if (x.isIntersecting) {
        document.querySelectorAll('.metric-num[data-t],.hstat-n[data-t]').forEach(function(el, i) {
          setTimeout(function() { runCounter(el); }, i * 80);
        });
        co.disconnect();
      }
    });
  }, {threshold: 0.2});
  var mr = document.querySelector('.metrics-row');
  if (mr) co.observe(mr);
}

// ═══════════════════════════════════════
// 3D CARD TILT
// ═══════════════════════════════════════
function initTilt() {
  document.querySelectorAll('.pf-card,.pc,.sg,.ai-pillar,.metric,.hstat,.hcard').forEach(function(el) {
    el.addEventListener('mousemove', function(e) {
      var r = el.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top;
      var cx = r.width/2, cy = r.height/2;
      var rotY = ((x - cx) / cx) * 6;
      var rotX = -((y - cy) / cy) * 6;
      el.style.transform = 'perspective(800px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateZ(3px)';

      var shine = el.querySelector('.card-shine');
      if (shine) {
        var px = (x / r.width * 100).toFixed(1);
        var py = (y / r.height * 100).toFixed(1);
        shine.style.background = 'radial-gradient(ellipse at '+px+'% '+py+'%, rgba(139,92,246,0.14) 0%, transparent 65%)';
        shine.style.opacity = '1';
      }
    });
    el.addEventListener('mouseleave', function() {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      var shine = el.querySelector('.card-shine');
      if (shine) shine.style.opacity = '0';
    });
  });
}

// ═══════════════════════════════════════
// MAGNETIC BUTTONS
// ═══════════════════════════════════════
function initMagnetic() {
  document.querySelectorAll('.btn-primary,.btn-hire,.btn-ghost,#btt').forEach(function(btn) {
    btn.addEventListener('mousemove', function(e) {
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width/2) * 0.2;
      var y = (e.clientY - r.top - r.height/2) * 0.2;
      btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    });
    btn.addEventListener('mouseleave', function() { btn.style.transform = ''; });
  });
}

// ═══════════════════════════════════════
// PROJECT FILTERS
// ═══════════════════════════════════════
function initProjectFilters() {
  var pfs = document.querySelectorAll('.pf-btn');
  var rcs = document.querySelectorAll('.pc');
  var fcs = document.querySelectorAll('.pf-card');
  var frEl = document.getElementById('featured-projects');

  pfs.forEach(function(b) {
    b.addEventListener('click', function() {
      pfs.forEach(function(x) { x.classList.remove('on'); });
      b.classList.add('on');
      var f = b.dataset.f;

      if (f === 'all') {
        if (frEl) frEl.style.display = '';
        fcs.forEach(function(c) { c.style.display = ''; });
        rcs.forEach(function(c) { c.classList.remove('gone'); });
      } else {
        var any = Array.from(fcs).some(function(c) { return (c.dataset.fc||'').includes(f); });
        if (frEl) frEl.style.display = any ? '' : 'none';
        fcs.forEach(function(c) { c.style.display = (c.dataset.fc||'').includes(f) ? '' : 'none'; });
        rcs.forEach(function(c) { c.classList.toggle('gone', !(c.dataset.rc||'').includes(f)); });
      }
    });
  });
}

// ═══════════════════════════════════════
// COPY BUTTONS
// ═══════════════════════════════════════
function initCopyBtns() {
  document.querySelectorAll('.copy-b').forEach(function(b) {
    b.addEventListener('click', function() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(b.dataset.v).then(function() {
          var t = b.textContent;
          b.textContent = '✓ Copied!';
          b.classList.add('done');
          setTimeout(function() { b.textContent = t; b.classList.remove('done'); }, 2200);
        });
      }
    });
  });
}

// ═══════════════════════════════════════
// RESUME VIEWER
// ═══════════════════════════════════
function initResumeViewer() {
  var RV = document.getElementById('resume-viewer');
  if (!RV) return;
  ['nd','mnd','hd','ad','cd'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        RV.classList.add('visible');
        document.body.style.overflow = 'hidden';
      });
    }
  });
  var closeBtn = document.getElementById('close-resume-viewer');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      RV.classList.remove('visible');
      document.body.style.overflow = '';
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && RV.classList.contains('visible')) {
      RV.classList.remove('visible');
      document.body.style.overflow = '';
    }
  });
}

// ═══════════════════════════════════════
// BACK TO TOP
// ═══════════════════════════════════════
function initBackToTop() {
  var btt = document.getElementById('btt');
  if (btt) btt.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}
