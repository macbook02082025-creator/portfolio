function renderContent(data) {
  // Hero Section
  document.getElementById('hero-status').innerHTML = `<span class="h-status-dot" aria-hidden="true"></span> ${data.hero.status}`;
  document.getElementById('hero-name1').textContent = data.hero.name1;
  document.getElementById('hero-name2').textContent = data.hero.name2;
  document.getElementById('hero-tagline').innerHTML = data.hero.tagline;
  const heroChips = document.getElementById('hero-chips');
  data.hero.chips.forEach(chip => {
    heroChips.innerHTML += `<div class="hchip"><span class="hchip-val">${chip.value}</span>&nbsp;${chip.label}</div>`;
  });
  const heroStats = document.getElementById('hero-stats');
  data.hero.stats.forEach(stat => {
    heroStats.innerHTML += `
      <div class="hstat">
        <div class="hstat-n" data-t="${stat.value}" data-s="${stat.suffix}">${stat.value}${stat.suffix}</div>
        <div class="hstat-l">${stat.label}</div>
      </div>`;
  });
  const heroCards = document.getElementById('hero-cards');
  data.hero.cards.forEach(card => {
    heroCards.innerHTML += `
      <div class="hcard">
        <div class="hc-label">${card.label}</div>
        <div class="hc-value">${card.value}</div>
        <div class="hc-sub">${card.sub}</div>
      </div>`;
  });

  // Metrics Section
  const metricsRow = document.getElementById('metrics-row');
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
  data.about.bio.forEach(p => {
    aboutBio.innerHTML += `<p>${p}</p>`;
  });
  const aboutPhils = document.getElementById('about-philosophies');
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
}


// ═══════════════════════════════════════
// THEMES — 8 WORLD-CLASS COLOR SCHEMES
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
    '--mesh1':    'rgba(139,92,246,.12)',
    '--mesh2':    'rgba(6,182,212,.09)',
    '--mesh3':    'rgba(245,158,11,.04)',
    '--particle1':'#8B5CF6',
    '--particle2':'#06B6D4',
    '--particle3':'#F59E0B',
  },
  'midnight-rose': {
    '--void':     '#050208',
    '--abyss':    '#0A0510',
    '--base':     '#110818',
    '--raised':   '#190D24',
    '--lifted':   '#20112E',
    '--border':   'rgba(236,72,153,.06)',
    '--border2':  'rgba(236,72,153,.14)',
    '--v':        '#DB2777',
    '--v2':       '#EC4899',
    '--v3':       '#F9A8D4',
    '--v-g':      'rgba(236,72,153,.08)',
    '--v-b':      'rgba(236,72,153,.22)',
    '--v-glow':   'rgba(236,72,153,.4)',
    '--c':        '#EA580C',
    '--c2':       '#F97316',
    '--c3':       '#FDBA74',
    '--c-g':      'rgba(249,115,22,.08)',
    '--c-b':      'rgba(249,115,22,.2)',
    '--gold':     '#EAB308',
    '--gold2':    '#FCD34D',
    '--gold-g':   'rgba(234,179,8,.07)',
    '--gold-b':   'rgba(234,179,8,.18)',
    '--em':       '#F472B6',
    '--txt1':     '#FDF4FF',
    '--txt2':     '#C084FC',
    '--txt3':     '#7E22CE',
    '--txt4':     '#4A1772',
    '--mesh1':    'rgba(219,39,119,.14)',
    '--mesh2':    'rgba(249,115,22,.09)',
    '--mesh3':    'rgba(234,179,8,.05)',
    '--particle1':'#EC4899',
    '--particle2':'#F97316',
    '--particle3':'#FCD34D',
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
    '--mesh1':    'rgba(0,255,136,.1)',
    '--mesh2':    'rgba(255,45,120,.08)',
    '--mesh3':    'rgba(0,207,255,.05)',
    '--particle1':'#00FF88',
    '--particle2':'#FF2D78',
    '--particle3':'#00CFFF',
  },
  'arctic': {
    '--void':     '#020509',
    '--abyss':    '#050C14',
    '--base':     '#081220',
    '--raised':   '#0D1C30',
    '--lifted':   '#122438',
    '--border':   'rgba(59,130,246,.07)',
    '--border2':  'rgba(59,130,246,.16)',
    '--v':        '#1D4ED8',
    '--v2':       '#3B82F6',
    '--v3':       '#93C5FD',
    '--v-g':      'rgba(59,130,246,.08)',
    '--v-b':      'rgba(59,130,246,.22)',
    '--v-glow':   'rgba(59,130,246,.4)',
    '--c':        '#0EA5E9',
    '--c2':       '#38BDF8',
    '--c3':       '#BAE6FD',
    '--c-g':      'rgba(14,165,233,.08)',
    '--c-b':      'rgba(14,165,233,.2)',
    '--gold':     '#E2E8F0',
    '--gold2':    '#F8FAFC',
    '--gold-g':   'rgba(226,232,240,.05)',
    '--gold-b':   'rgba(226,232,240,.12)',
    '--em':       '#38BDF8',
    '--txt1':     '#F0F9FF',
    '--txt2':     '#7DD3FC',
    '--txt3':     '#2563EB',
    '--txt4':     '#1E3A5F',
    '--mesh1':    'rgba(59,130,246,.12)',
    '--mesh2':    'rgba(14,165,233,.09)',
    '--mesh3':    'rgba(226,232,240,.03)',
    '--particle1':'#3B82F6',
    '--particle2':'#38BDF8',
    '--particle3':'#BAE6FD',
  },
  'emerald': {
    '--void':     '#020807',
    '--abyss':    '#04100E',
    '--base':     '#071815',
    '--raised':   '#0C241F',
    '--lifted':   '#102D27',
    '--border':   'rgba(16,185,129,.07)',
    '--border2':  'rgba(16,185,129,.16)',
    '--v':        '#059669',
    '--v2':       '#10B981',
    '--v3':       '#6EE7B7',
    '--v-g':      'rgba(16,185,129,.08)',
    '--v-b':      'rgba(16,185,129,.22)',
    '--v-glow':   'rgba(16,185,129,.4)',
    '--c':        '#7C3AED',
    '--c2':       '#A78BFA',
    '--c3':       '#C4B5FD',
    '--c-g':      'rgba(167,139,250,.08)',
    '--c-b':      'rgba(167,139,250,.2)',
    '--gold':     '#34D399',
    '--gold2':    '#6EE7B7',
    '--gold-g':   'rgba(52,211,153,.08)',
    '--gold-b':   'rgba(52,211,153,.18)',
    '--em':       '#10B981',
    '--txt1':     '#F0FDF4',
    '--txt2':     '#86EFAC',
    '--txt3':     '#166534',
    '--txt4':     '#14532D',
    '--mesh1':    'rgba(16,185,129,.12)',
    '--mesh2':    'rgba(124,58,237,.09)',
    '--mesh3':    'rgba(52,211,153,.05)',
    '--particle1':'#10B981',
    '--particle2':'#A78BFA',
    '--particle3':'#6EE7B7',
  },
  'crimson': {
    '--void':     '#060204',
    '--abyss':    '#0C0407',
    '--base':     '#14060A',
    '--raised':   '#1E0810',
    '--lifted':   '#280A14',
    '--border':   'rgba(239,68,68,.07)',
    '--border2':  'rgba(239,68,68,.16)',
    '--v':        '#DC2626',
    '--v2':       '#EF4444',
    '--v3':       '#FCA5A5',
    '--v-g':      'rgba(239,68,68,.08)',
    '--v-b':      'rgba(239,68,68,.22)',
    '--v-glow':   'rgba(239,68,68,.4)',
    '--c':        '#EA580C',
    '--c2':       '#F97316',
    '--c3':       '#FDBA74',
    '--c-g':      'rgba(249,115,22,.08)',
    '--c-b':      'rgba(249,115,22,.2)',
    '--gold':     '#CBD5E1',
    '--gold2':    '#F1F5F9',
    '--gold-g':   'rgba(203,213,225,.04)',
    '--gold-b':   'rgba(203,213,225,.1)',
    '--em':       '#F97316',
    '--txt1':     '#FFF5F5',
    '--txt2':     '#FECACA',
    '--txt3':     '#9F1239',
    '--txt4':     '#7F1D1D',
    '--mesh1':    'rgba(239,68,68,.12)',
    '--mesh2':    'rgba(249,115,22,.09)',
    '--mesh3':    'rgba(203,213,225,.03)',
    '--particle1':'#EF4444',
    '--particle2':'#F97316',
    '--particle3':'#FDBA74',
  },
  'royal-gold': {
    '--void':     '#050402',
    '--abyss':    '#0C0A04',
    '--base':     '#140E06',
    '--raised':   '#1E1608',
    '--lifted':   '#261C0A',
    '--border':   'rgba(245,158,11,.07)',
    '--border2':  'rgba(245,158,11,.18)',
    '--v':        '#D97706',
    '--v2':       '#F59E0B',
    '--v3':       '#FCD34D',
    '--v-g':      'rgba(245,158,11,.08)',
    '--v-b':      'rgba(245,158,11,.22)',
    '--v-glow':   'rgba(245,158,11,.4)',
    '--c':        '#FBBF24',
    '--c2':       '#FDE68A',
    '--c3':       '#FEF3C7',
    '--c-g':      'rgba(251,191,36,.08)',
    '--c-b':      'rgba(251,191,36,.18)',
    '--gold':     '#E2E8F0',
    '--gold2':    '#F8FAFC',
    '--gold-g':   'rgba(226,232,240,.04)',
    '--gold-b':   'rgba(226,232,240,.1)',
    '--em':       '#FCD34D',
    '--txt1':     '#FFFBEB',
    '--txt2':     '#FDE68A',
    '--txt3':     '#92400E',
    '--txt4':     '#78350F',
    '--mesh1':    'rgba(245,158,11,.14)',
    '--mesh2':    'rgba(251,191,36,.09)',
    '--mesh3':    'rgba(226,232,240,.03)',
    '--particle1':'#F59E0B',
    '--particle2':'#FCD34D',
    '--particle3':'#E2E8F0',
  },
  'sakura': {
    '--void':     '#040206',
    '--abyss':    '#08040C',
    '--base':     '#100612',
    '--raised':   '#18091C',
    '--lifted':   '#1E0C22',
    '--border':   'rgba(244,114,182,.06)',
    '--border2':  'rgba(244,114,182,.15)',
    '--v':        '#DB2777',
    '--v2':       '#F472B6',
    '--v3':       '#FBCFE8',
    '--v-g':      'rgba(244,114,182,.07)',
    '--v-b':      'rgba(244,114,182,.2)',
    '--v-glow':   'rgba(244,114,182,.38)',
    '--c':        '#7C3AED',
    '--c2':       '#A78BFA',
    '--c3':       '#DDD6FE',
    '--c-g':      'rgba(167,139,250,.08)',
    '--c-b':      'rgba(167,139,250,.2)',
    '--gold':     '#22D3EE',
    '--gold2':    '#A5F3FC',
    '--gold-g':   'rgba(34,211,238,.06)',
    '--gold-b':   'rgba(34,211,238,.15)',
    '--em':       '#F472B6',
    '--txt1':     '#FDF2F8',
    '--txt2':     '#F0ABFC',
    '--txt3':     '#86198F',
    '--txt4':     '#701A75',
    '--mesh1':    'rgba(244,114,182,.12)',
    '--mesh2':    'rgba(167,139,250,.09)',
    '--mesh3':    'rgba(34,211,238,.04)',
    '--particle1':'#F472B6',
    '--particle2':'#A78BFA',
    '--particle3':'#22D3EE',
  },
};

// Mesh gradient overrides per theme (injected as inline style on .mesh)
var MESH_GRADIENTS = {
  'aurora':        'rgba(139,92,246,.12),rgba(6,182,212,.09),rgba(245,158,11,.04)',
  'midnight-rose': 'rgba(219,39,119,.14),rgba(249,115,22,.09),rgba(234,179,8,.05)',
  'neon-tokyo':    'rgba(0,255,136,.1),rgba(255,45,120,.08),rgba(0,207,255,.05)',
  'arctic':        'rgba(59,130,246,.12),rgba(14,165,233,.09),rgba(226,232,240,.03)',
  'emerald':       'rgba(16,185,129,.12),rgba(124,58,237,.09),rgba(52,211,153,.05)',
  'crimson':       'rgba(239,68,68,.12),rgba(249,115,22,.09),rgba(203,213,225,.03)',
  'royal-gold':    'rgba(245,158,11,.14),rgba(251,191,36,.09),rgba(226,232,240,.03)',
  'sakura':        'rgba(244,114,182,.12),rgba(167,139,250,.09),rgba(34,211,238,.04)',
};

// Contact section bg overrides
var CONTACT_GRADIENTS = {
  'aurora':        'linear-gradient(135deg,#7C3AED,#1e1b4b 50%,#0f172a)',
  'midnight-rose': 'linear-gradient(135deg,#9D174D,#3B0764 50%,#0a0014)',
  'neon-tokyo':    'linear-gradient(135deg,#003820,#1a0030 50%,#000005)',
  'arctic':        'linear-gradient(135deg,#1e3a8a,#0c2340 50%,#020509)',
  'emerald':       'linear-gradient(135deg,#065F46,#1E1B4B 50%,#020807)',
  'crimson':       'linear-gradient(135deg,#7F1D1D,#1C0A0F 50%,#060204)',
  'royal-gold':    'linear-gradient(135deg,#78350F,#27130A 50%,#050402)',
  'sakura':        'linear-gradient(135deg,#831843,#2E1065 50%,#040206)',
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
  if (mesh) {
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
  if (cl) cl.style.background = CONTACT_GRADIENTS[name];

  // Update AI callout
  var aiCallout = document.querySelector('.ai-callout');
  if (aiCallout) {
    if (name === 'neon-tokyo') {
      aiCallout.style.background = 'linear-gradient(135deg,#003820,#00CC6A)';
    } else if (name === 'arctic') {
      aiCallout.style.background = 'linear-gradient(135deg,#1D4ED8,#0EA5E9)';
    } else if (name === 'crimson') {
      aiCallout.style.background = 'linear-gradient(135deg,#DC2626,#EA580C)';
    } else if (name === 'royal-gold') {
      aiCallout.style.background = 'linear-gradient(135deg,#92400E,#D97706)';
    } else if (name === 'sakura') {
      aiCallout.style.background = 'linear-gradient(135deg,#DB2777,#7C3AED)';
    } else if (name === 'midnight-rose') {
      aiCallout.style.background = 'linear-gradient(135deg,#9D174D,#C2410C)';
    } else if (name === 'emerald') {
      aiCallout.style.background = 'linear-gradient(135deg,#065F46,#7C3AED)';
    } else {
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
    });
});
setTimeout(function() {
  var loader = document.getElementById('loader');
  if (loader) loader.classList.add('done');
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