'use strict';

/* ==========================================================
   1. YOUR CONTENT  (edit this section)
   ========================================================== */
// ---------- CONTACT SETTINGS ----------
// EMAIL: your real address (it needs an @). Used for "Email me", "Copy email" and as a backup.
const EMAIL = 'dandemuelgvillaceran@gmail.com';

// FORM_ENDPOINT: sends messages straight to your inbox, so visitors don't need an email app. Pick ONE:
//   FormSubmit (no sign-up):  'https://formsubmit.co/ajax/you@gmail.com'
//        -> send one test message, then click the confirmation link FormSubmit emails you (one time only)
//   Formspree:                'https://formspree.io/f/xxxxxxxx'   (create a free form at formspree.io)
//   Leave '' and the form opens the visitor's email app instead.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/dandemuelgvillaceran@gmail.com';

const REPLY_TIME = 'I usually reply within 1–2 days.';
const AVAILABLE = true;   // true shows the green "Open to work" tag
const CONTACT_TOPICS = ['Job opportunity', 'Freelance project', 'Collaboration', 'Just saying hi'];


const SOCIALS = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/acacius16' },
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/nadsdem/' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/dandemuel' }
];

// ---------- EXTRA SETTINGS (all optional) ----------
const CV_URL = '';      // e.g. 'files/Dan-Villaceran-CV.pdf'  -> shows a "Download CV" button in the hero. '' hides it.
const LOCATION = '';    // e.g. 'Cebu, Philippines'           -> shown in the footer. '' hides it.
const TIMEZONE = '';    // e.g. 'Asia/Manila'                 -> footer shows your live local time. '' hides it.


// Each project:
//   t = title            y = year           d = short summary (shown on the card)
//   s = languages / tools used
//   imgs = screenshots, 2-3 recommended. The first one is the card cover.
//          e.g. ['images/pro1.jpg', 'images/pro1-2.jpg', 'images/pro1-3.jpg']
//   about    (optional) longer definition shown in "View details"; falls back to d
//   features (optional) list of key features, e.g. ['Offline mode', 'Trip planner']
//   role     (optional) e.g. 'Solo developer'
const projects = [
  {
    t: 'Island Hop Explorer', y: 2025,
    d: 'Island Hop Explorer is a web-based booking and e-commerce platform designed to digitize Cebus maritime tourism operations. ',
    s: ['Dart', 'Flutter'],
    imgs: ['images/pro2.jpg', 'images/pro1.jpg', 'images/pro3.jpg'],   // add more here: 'images/pro1-2.jpg', 'images/pro1-3.jpg'
    about: 'The system simplifies travel planning by allowing tourists to seamlessly reserve island-hopping tours and rent adventure gear in a single transaction.', features: ['Unified E-Commerce & Scheduling Module'],
  },
  {
    t: 'Apartment Management System', y: 2026,
    d: 'EasyPuyo is a web-based apartment management system designed to digitize and automate residential property operations.',
    s: ['HTML', 'CSS', 'Python', 'Django'], imgs: ['images/1.png', 'images/2.png', 'images/3.png'], about: 'The system simplifies rental management by allowing tenants to view lease agreements and pay rent online, while providing property owners with centralized tools to track room vacancies and manage maintenance requests.', features: ['Centralized Occupancy & Maintenance Dashboard', 'Automated Billing & Tenant Portal'],
  },
  {
    t: 'Community Digital Services', y: 2025,
    d: 'AlangSaTANAN is a web-based community management platform designed to digitize local government and barangay-level public services.',
    s: ['HTML', 'CSS', 'JavaScript'], imgs: ['images/6.png', 'images/4.png', 'images/5.png'], about: 'The system named from the Cebuano phrase meaning "For Everyone" simplifies civic engagement by allowing residents to request official documents and report local incidents online, while providing barangay officials with centralized tools to manage community records and broadcast urgent announcements.',
    features: ['Public Document Request & Eligiblity Checker', 'Barangay Admin Dashboard'],
  },
  {
    t: 'Movie Website - MediaFusion', y: 2026,
    d: ' MediaFusion is a web-based multimedia content platform designed to centralize movie catalogs and streamline streaming services.',
    s: ['HTML', 'CSS', 'JavaScript', 'PHP'], imgs: ['images/7.png', 'images/8.png', 'images/9.png'], about: 'The system enhances the entertainment experience by allowing users to explore curated movie databases, stream media, and manage personalized watchlists, while providing administrators with a secure backend dashboard to update video assets and monitor platform engagement analytics.',
    features: ['Centralized Content Management & Analytics Dashboard', 'Dynamic Media Catalog & User Watchlist Engine'],
  }

];

const certs = [
  { t: 'Responsive Web Design', o: 'Quincy Larson', y: 2024, img: 'images/cert1.jpg' },
  { t: 'Web Design Contest', o: 'IT Department', y: 2025, img: 'images/achv2.jpg' },
  { t: 'On-the-job Training', o: 'Company Name', y: 2026, img: 'images/ach3.jpg' }
];

// Other skills, shown under the Achievement cards.
//   t = skill name     d = short description     tools = tools you use
//   icon = 'video' | 'photo' | 'design' | 'star'
//   works = samples people can open. Leave [] until you have some.
//     { type: 'image', src: 'images/edit1.jpg', title: 'Poster edit' }
//     { type: 'video', src: 'videos/reel1.mp4', poster: 'images/reel1.jpg', title: 'Promo reel' }   (poster is optional)
const skills = [
  {
    t: 'Video Editing', icon: 'video',
    d: 'Cutting, transitions, captions, color, and sound sync for short clips, event recaps, and promos.',
    tools: ['CapCut'],
    works: [
      { type: 'video', src: 'videos/v1.mp4', poster: 'images/img2.jpg', title: 'KINABUHI' }
    ]
  },
  {
    t: 'Photo Editing', icon: 'photo',
    d: 'Retouching, color correction, background work, and poster or social media layouts.',
    tools: ['Canva'],
    works: [
      { type: 'image', src: 'images/10.jpg', title: 'School Poster Editing' },
      { type: 'image', src: 'images/11.jpg', title: 'Elective Film Project' },
      { type: 'image', src: 'images/12.jpg', title: 'Film Project' },
      { type: 'image', src: 'images/13.jpg', title: 'Movie Poster' },
    ]
  }
];

const stack = {
  'Front end': ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Bootstrap'],
  'Back end': ['Laravel', 'PHP', 'Node.js', 'MySQL', 'Firebase'],
  'Tools': ['GitHub', 'VS Code', 'Figma', 'Vercel']
};

// Your own lanyard / sling. Put the image in the images folder.
//  img:    path to your image (PNG with transparency looks best). '' = default strap.
//  width:  strap width in px.
//  length: strap length in px (null = default; ~144 on phones, ~176 on desktop).
//  mode:   'tile'    repeats the image downward (good for a short pattern slice)
//          'stretch' fits ONE image to the full length (good for a full lanyard picture)
//  clip:   false hides the small metal clip if your image already has one.
const lanyard = { img: 'images/lanyard.png', width: 18, length: null, mode: 'tile', clip: true };


// Printed on the lanyard strap. Set LANYARD_LOGO to a picture path, e.g. 'images/logo.png'.
// Use text only, logo only, or both. Leave both '' for a plain strap.
const LANYARD_TEXT = 'CEC IT';
const LANYARD_LOGO = 'images/cec.jpg';

const typedPhrases = ['clean interfaces.', 'fast, responsive sites.', 'things people enjoy using.'];

/* ==========================================================
   2. HELPERS
   ========================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
// run fn now, or right after the loading screen has finished
const whenReady = fn => root.classList.contains('loading')
  ? document.addEventListener('app:ready', fn, { once: true })
  : fn();
const rnd = n => Math.round((Math.random() * 2 - 1) * n);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
};

const techColor = {
  HTML: '#e34f26', CSS: '#1572b6', JavaScript: '#f7df1e', TypeScript: '#3178c6', React: '#61dafb',
  Tailwind: '#38bdf8', Bootstrap: '#7952b3', Laravel: '#ff2d20', PHP: '#777bb3', 'Node.js': '#5fa04e',
  MySQL: '#4479a1', Supabase: '#3ecf8e', Git: '#f05032', GitHub: 'rgb(var(--fg))', 'VS Code': '#007acc',
  Figma: '#a259ff', Vercel: 'rgb(var(--fg))',
  Dart: '#0175c2', Flutter: '#54c5f8', Firebase: '#ffca28'
};
// Logo for each tech (files live in images/tech/). To add one:  Python: 'images/tech/python.svg'
// A tech with no logo here falls back to a small colored dot.
const techIcon = {
  HTML: 'images/tech/html.svg', CSS: 'images/tech/css.svg', JavaScript: 'images/tech/javascript.svg',
  TypeScript: 'images/tech/typescript.svg', React: 'images/tech/react.svg', Tailwind: 'images/tech/tailwind.svg',
  Bootstrap: 'images/tech/bootstrap.svg', Laravel: 'images/tech/laravel.svg', PHP: 'images/tech/php.svg',
  'Node.js': 'images/tech/nodejs.svg', MySQL: 'images/tech/mysql.svg', Firebase: 'images/tech/firebase.svg',
  Git: 'images/tech/git.svg', GitHub: 'images/tech/github.svg', 'VS Code': 'images/tech/vscode.svg',
  Figma: 'images/tech/figma.svg', Vercel: 'images/tech/vercel.svg', Dart: 'images/tech/dart.svg', Flutter: 'images/tech/flutter.svg'
};
const monoIcons = new Set(['GitHub', 'Vercel']);   // black logos: automatically turned white in dark theme
const iconTag = (x, cls = '') => `<img class="ti ${cls}${monoIcons.has(x) ? ' ti-mono' : ''}" src="${esc(techIcon[x])}" alt="" loading="lazy" draggable="false" onerror="this.style.display='none'">`;
const chip = x => `<span class="chip">${techIcon[x] ? iconTag(x, 'ti-sm') : `<i class="dot" style="--c:${techColor[x] || 'rgb(var(--acc))'}"></i>`}${esc(x)}</span>`;
const pal = [['acc', 'a2'], ['a2', 'a4'], ['a3', 'acc'], ['a4', 'a2']];

// small line icons (24x24, stroke = currentColor) used by the contact card, hero and footer
const ICONS = {
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  linkedin: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"/>',
  github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/><path d="M16.5 7.5v.01"/>',
  facebook: '<path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"/>',
  link: '<path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-.5.5"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l.5-.5"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
const svgIcon = (k, cls = '') => `<svg class="ci ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k] || ICONS.link}</svg>`;
const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(EMAIL);

/* ==========================================================
   3. THEME  (system default -> saved choice -> toggle)
   ========================================================== */
const themeBtn = $('#theme-toggle');
const themeIcon = $('#theme-icon');
const ICON = {
  // icon shows what you will switch TO
  dark: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>',
  light: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>'
};
function setTheme(t, persist) {
  root.dataset.theme = t;
  $('meta[name="theme-color"]').content = t === 'light' ? '#f5f6fa' : '#0a0b10';
  themeIcon.innerHTML = ICON[t === 'dark' ? 'dark' : 'light'];
  themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  if (persist) store.set('theme', t);
}
setTheme(root.dataset.theme || 'dark');
themeBtn.onclick = () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  const apply = () => setTheme(next, true);
  (document.startViewTransition && !reduce) ? document.startViewTransition(apply) : apply();
};
matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', e => {
  if (!store.get('theme')) setTheme(e.matches ? 'light' : 'dark');
});

/* ==========================================================
   4. STATS
   ========================================================== */
$('#stats').innerHTML = [
  ['Projects', projects.length],
  ['Certificates', certs.length],
  ['Technologies', Object.values(stack).flat().length]
].map(([l, n]) => `<div class="panel spot rv p-4 text-center sm:p-5 sm:text-left"><p class="font-d text-2xl sm:text-3xl" data-count="${n}">0</p><p class="text-xs text-mut sm:text-sm">${l}</p></div>`).join('');

function countUp(el) {
  const n = +el.dataset.count;
  if (reduce) { el.textContent = n; return; }
  const t0 = performance.now();
  const f = t => {
    const p = Math.min(1, (t - t0) / 900);
    el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
}

/* ==========================================================
   5. TABS  (Projects / Certificates / Tech stack)
   ========================================================== */
const shotsOf = p => (p.imgs && p.imgs.length) ? p.imgs : (p.img ? [p.img] : []);
const thumb = (p, i) => {
  const shots = shotsOf(p);
  if (shots.length) return `<img src="${esc(shots[0])}" alt="${esc(p.t)} screenshot" loading="lazy">${shots.length > 1 ? `<span class="shots-badge">${shots.length} photos</span>` : ''}`;
  const [a, b] = pal[i % pal.length];
  return `<div class="mock" style="--c1:var(--${a});--c2:var(--${b})"><div class="mock-bar"><i></i><i></i><i></i></div><div class="mock-body"><b></b><b></b><b></b></div></div>`;
};
const award = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5"/></svg>';

const skillIcon = {
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor"/></svg>',
  photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="m21 16-5-5-8 8"/></svg>',
  design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7-4-4-7 7-1 5z"/><path d="m15 8 2-2 3 3-2 2"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/></svg>'
};
const playBadge = '<span class="work-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>';
const workTile = (w, si, k) => `
  <button class="work" data-skill="${si}" data-work="${k}" aria-label="${w.type === 'video' ? 'Play' : 'View'}: ${esc(w.title || 'work sample')}">
    ${w.type === 'video'
    ? (w.poster
      ? `<img src="${esc(w.poster)}" alt="" loading="lazy" draggable="false">`
      : `<video src="${esc(w.src)}#t=0.5" preload="metadata" muted playsinline tabindex="-1"></video>`) + playBadge
    : `<img src="${esc(w.src)}" alt="" loading="lazy" draggable="false">`}
  </button>`;
const skillsHTML = () => !skills.length ? '' : `
  <div class="mt-14">
    <h3 class="text-center font-d text-2xl">Other skills</h3>
    <p class="mx-auto mt-2 max-w-md text-center text-sm text-mut">Beyond code: creative work I do, with samples you can open.</p>
    <div class="mt-8 grid gap-4 md:grid-cols-2">${skills.map((sk, si) => `
      <div class="panel spot p-6">
        <div class="flex items-center gap-3">
          <span class="skill-ico">${skillIcon[sk.icon] || skillIcon.star}</span>
          <h4 class="font-d text-lg">${esc(sk.t)}</h4>
        </div>
        <p class="mt-3 text-sm text-mut">${esc(sk.d)}</p>
        <div class="mt-4 flex flex-wrap gap-2">${(sk.tools || []).map(chip).join('')}</div>
        ${(sk.works || []).length ? `<div class="works">${sk.works.map((w, k) => workTile(w, si, k)).join('')}</div>` : ''}
      </div>`).join('')}</div>
  </div>`;

// project filter (chips above the cards; shown when there are 4+ projects)
let projFilter = 'All';
const projTechs = () => ['All', ...new Set(projects.flatMap(p => p.s))];
const projectCards = () => projects.map((p, i) => ({ p, i })).filter(({ p }) => projFilter === 'All' || p.s.includes(projFilter)).map(({ p, i }, n) => `
    <article class="panel spot lift card-in cursor-pointer" style="--i:${n}" data-i="${i}">
      <div class="thumb">${thumb(p, i)}</div>
      <div class="p-5 sm:p-6">
        <p class="text-sm text-mut">${p.y}</p>
        <h3 class="mt-1 font-d text-lg">${esc(p.t)}</h3>
        <p class="mt-3 text-sm text-mut">${esc(p.d)}</p>
        <div class="mt-4 flex flex-wrap gap-2">${p.s.map(chip).join('')}</div>
        <div class="mt-5 flex flex-wrap gap-2 text-sm">
          <button class="btn" data-i="${i}">View details</button>
        </div>
      </div>
    </article>`).join('');

const views = {
  projects: () => `${projects.length > 3 ? `<div class="pfilter" role="group" aria-label="Filter projects by technology">${projTechs().map(t => `<button type="button" class="fchip" data-f="${esc(t)}" aria-pressed="${t === projFilter}">${techIcon[t] ? iconTag(t, 'ti-sm') : ''}${esc(t)}</button>`).join('')}</div>` : ''}<div id="pgrid" class="grid gap-5 md:grid-cols-2">${projectCards()}</div>`,

  certs: () => `<div class="grid gap-4 sm:grid-cols-3">${certs.map(c => `
    <div class="panel spot lift p-4">
      <div class="cert">${c.img ? `<img src="${esc(c.img)}" alt="${esc(c.t)} certificate" loading="lazy">` : award}</div>
      <p class="mt-4 font-semibold">${esc(c.t)}</p>
      <p class="text-sm text-mut">${esc(c.o)} · ${c.y}</p>
    </div>`).join('')}</div>${skillsHTML()}`,

  stack: () => {
    let n = 0;
    return Object.entries(stack).map(([g, list]) => `
      <div class="mb-8">
        <h3 class="mb-3 flex items-center justify-center gap-2 font-semibold"><span class="gdot"></span>${esc(g)}</h3>
        <div class="flex flex-wrap justify-center gap-3">${list.map(x => `<span class="tech tile spot" style="--i:${n++};--dx:${rnd(120)}px;--dy:${rnd(90)}px;--r:${rnd(24)}deg;--c:${techColor[x] || 'rgb(var(--acc))'}">${techIcon[x] ? iconTag(x) : '<i class="dot"></i>'}<span>${esc(x)}</span></span>`).join('')}</div>
      </div>`).join('');
  }
};

const pane = $('#pane');
const tabEls = $$('.tab');
const ind = $('#tabind');
let cur = 'projects';

function moveInd() {
  const b = $('.tab[aria-selected="true"]');
  if (!b) return;
  ind.style.width = b.offsetWidth + 'px';
  ind.style.transform = `translateX(${b.offsetLeft}px)`;
}
function show(k, focus) {
  cur = k;
  tabEls.forEach(b => {
    const on = b.id === 't-' + k;
    b.setAttribute('aria-selected', on);
    b.tabIndex = on ? 0 : -1;
  });
  pane.setAttribute('aria-labelledby', 't-' + k);
  pane.innerHTML = views[k]();
  moveInd();
  if (!reduce) pane.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 350, easing: 'ease-out' });
  if (focus) $('#t-' + k).focus();
}
tabEls.forEach(b => b.onclick = () => show(b.id.slice(2)));
$('#tablist').addEventListener('keydown', e => {
  const i = tabEls.findIndex(b => b.id === 't-' + cur);
  let n = null;
  if (e.key === 'ArrowRight') n = (i + 1) % tabEls.length;
  if (e.key === 'ArrowLeft') n = (i - 1 + tabEls.length) % tabEls.length;
  if (n !== null) { e.preventDefault(); show(tabEls[n].id.slice(2), true); }
});
addEventListener('resize', moveInd);
document.fonts?.ready.then(moveInd);
show('projects');

// click a filter chip -> redraw the project cards
pane.addEventListener('click', e => {
  const f = e.target.closest('[data-f]');
  if (!f) return;
  projFilter = f.dataset.f;
  pane.innerHTML = views.projects();
  [...pane.querySelectorAll('[data-f]')].find(b => b.dataset.f === projFilter)?.focus({ preventScroll: true });
});

/* ==========================================================
   6. PROJECT DETAILS  (about, key features, languages, screenshot gallery)
   ========================================================== */
const dlg = $('#dlg');
let lastFocus = null, cur_p = null, cur_i = 0, gi = 0;   // opener / project / project index / screenshot index

function drawGallery() {
  const shots = shotsOf(cur_p), n = shots.length, main = $('#gmain');
  main.innerHTML = n
    ? `<img src="${esc(shots[gi])}" alt="${esc(cur_p.t)} screenshot ${gi + 1} of ${n}" draggable="false">`
    : thumb(cur_p, cur_i);                                  // colorful placeholder when there are no screenshots
  main.classList.toggle('zoomable', n > 0);
  if (n) { main.tabIndex = 0; main.setAttribute('role', 'button'); main.setAttribute('aria-label', 'View screenshot full size'); }
  else { main.removeAttribute('tabindex'); main.removeAttribute('role'); main.removeAttribute('aria-label'); }
  $('#gprev').hidden = $('#gnext').hidden = $('#gcount').hidden = $('#gthumbs').hidden = n < 2;
  $('#gcount').textContent = `${gi + 1} / ${n}`;
  $('#gthumbs').innerHTML = n < 2 ? '' : shots.map((src, k) =>
    `<button data-g="${k}" class="gt" aria-label="Show screenshot ${k + 1}" aria-current="${k === gi}"><img src="${esc(src)}" alt="" loading="lazy" draggable="false"></button>`).join('');
}
const gstep = d => {
  const n = shotsOf(cur_p).length;
  if (n > 1) { gi = (gi + d + n) % n; drawGallery(); }
};
function zoomShot() {
  const shots = shotsOf(cur_p);
  if (!shots.length || !window.openViewer) return;
  window.openViewer(shots.map((src, k) => ({ src, alt: `${cur_p.t} screenshot ${k + 1}`, title: cur_p.t, sub: `Screenshot ${k + 1} of ${shots.length}` })), gi, $('#gmain'));
}
function openProject(i) {
  const p = projects[i], feats = p.features || [];
  cur_p = p; cur_i = i; gi = 0; lastFocus = document.activeElement;
  $('#dbar').textContent = p.t.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.app';
  $('#dmeta').textContent = [p.y, p.role].filter(Boolean).join(' · ');
  $('#dt').textContent = p.t;
  $('#dd').textContent = p.about || p.d;
  $('#dfeat-box').hidden = !feats.length;
  $('#dfeat').innerHTML = feats.map(f => `<li>${esc(f)}</li>`).join('');
  $('#dtech').innerHTML = p.s.map(chip).join('');
  drawGallery();
  dlg.showModal();
  dlg.scrollTop = 0;
}
pane.addEventListener('click', e => {
  const el = e.target.closest('[data-i]');
  if (el) openProject(+el.dataset.i);
});
$('#gprev').onclick = () => gstep(-1);
$('#gnext').onclick = () => gstep(1);
$('#gthumbs').onclick = e => { const b = e.target.closest('[data-g]'); if (b) { gi = +b.dataset.g; drawGallery(); } };
$('#gmain').addEventListener('click', zoomShot);
$('#gmain').addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && shotsOf(cur_p).length) { e.preventDefault(); zoomShot(); } });
dlg.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') gstep(-1);
  if (e.key === 'ArrowRight') gstep(1);
});
$('#dx').onclick = () => dlg.close();
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener('close', () => lastFocus?.focus?.());
document.addEventListener('click', e => { if (e.target.closest('a.off')) e.preventDefault(); });

/* ==========================================================
   7. SCROLL: reveal, nav highlight, progress bar
   ========================================================== */
const revealIO = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add('in');
  $$('[data-count]', en.target).forEach(countUp);
  if (en.target.matches('[data-count]')) countUp(en.target);
  revealIO.unobserve(en.target);
}), { threshold: .12 });
whenReady(() => $$('.rv').forEach(el => revealIO.observe(el)));

const navLinks = $$('[data-nav]');
// the sliding pill behind the active link (desktop top bar + phone bottom bar)
function moveNavInd() {
  [['#navpill', '#navind', '.navlink'], ['#mnav', '#mind', '.mlink']].forEach(([wrap, indSel, link]) => {
    const box = $(wrap), ind = $(indSel), a = box && $(link + '[aria-current]', box);
    if (!ind) return;
    if (!a || !a.offsetWidth) { ind.style.opacity = 0; return; }   // bar is hidden at this screen size
    ind.style.opacity = 1;
    ind.style.width = a.offsetWidth + 'px';
    ind.style.transform = `translateX(${a.offsetLeft}px)`;
  });
}
const navIO = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  navLinks.forEach(a => {
    if (a.getAttribute('href') === '#' + en.target.id) a.setAttribute('aria-current', 'location');
    else a.removeAttribute('aria-current');
  });
  moveNavInd();
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section').forEach(s => navIO.observe(s));
addEventListener('resize', moveNavInd);
addEventListener('load', moveNavInd);
document.fonts?.ready.then(moveNavInd);

const bar = $('#progress'), hdr = $('#hdr'), btt = $('#btt'), cue = $('#cue');
let ticking = false;
const progress = () => {
  const m = root.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${m > 0 ? Math.min(1, scrollY / m) : 0})`;
  hdr.classList.toggle('scrolled', scrollY > 24);   // navbar gets a solid background once you scroll
  btt.classList.toggle('show', scrollY > 700);      // back-to-top button
  cue.classList.toggle('gone', scrollY > 80);       // "scroll" hint in the hero
  ticking = false;
};
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(progress); } }, { passive: true });
progress();

/* cursor spotlight on .spot elements */
document.addEventListener('pointermove', e => {
  const el = e.target.closest?.('.spot');
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', e.clientX - r.left + 'px');
  el.style.setProperty('--my', e.clientY - r.top + 'px');
});

/* ==========================================================
   8. HERO TYPING LINE
   ========================================================== */
(() => {
  const el = $('#typed');
  if (reduce) { el.textContent = typedPhrases[0]; return; }
  let i = 0, j = 0, del = false;
  const step = () => {
    const s = typedPhrases[i];
    el.textContent = s.slice(0, j);
    if (!del && j === s.length) { del = true; return setTimeout(step, 1600); }
    if (del && j === 0) { del = false; i = (i + 1) % typedPhrases.length; }
    j += del ? -1 : 1;
    setTimeout(step, del ? 35 : 70);
  };
  whenReady(step);
})();

/* ==========================================================
   8b. LANYARD PRINT  (repeating logo / text on the strap)
   ========================================================== */
(() => {
  const strap = $('#strap');
  if (!strap || (!LANYARD_TEXT && !LANYARD_LOGO)) return;
  const unit = `${LANYARD_LOGO ? `<img class="lan-logo" src="${esc(LANYARD_LOGO)}" alt="" draggable="false" onerror="this.remove()">` : ''}${LANYARD_TEXT ? `<span class="lan-text">${esc(LANYARD_TEXT)}</span>` : ''}<span class="lan-sep">✦</span>`;
  strap.innerHTML = unit.repeat(8);   // extra copies are clipped by the strap height
})();

/* ==========================================================
   9. HANGING BADGE  (spring physics, frame-rate independent)
   ========================================================== */
(() => {
  const sw = $('#swing'), bd = $('#badge'), hint = $('#hint');
  const K = .014, C = .028;            // spring stiffness / damping

  // apply the lanyard settings
  if (lanyard.img) {
    sw.style.setProperty('--strap-img', `url("${lanyard.img}")`);
    sw.style.setProperty('--strap-w', lanyard.width + 'px');
    sw.style.setProperty('--strap-size', lanyard.mode === 'stretch' ? '100% 100%' : '100% auto');
    sw.style.setProperty('--strap-repeat', lanyard.mode === 'stretch' ? 'no-repeat' : 'repeat-y');
  }
  if (lanyard.length) $('#strap').style.height = lanyard.length + 'px';
  if (!lanyard.clip) $('#clip').style.display = 'none';

  let a = reduce ? 0 : .55, v = 0, drag = false, run = false, last = 0;
  const paint = () => {
    sw.style.transform = `rotate(${a}rad)`;
    bd.style.setProperty('--sheen', (50 + a * 70) + '%');
  };
  paint();
  if (reduce) return;

  const tick = now => {
    const dt = Math.min(2.5, (now - last) / 16.667 || 1);
    last = now;
    if (!drag) { v += (-K * a - C * v) * dt; a += v * dt; }
    paint();
    if (drag || Math.abs(a) > .0008 || Math.abs(v) > .0008) requestAnimationFrame(tick);
    else { run = false; a = 0; v = 0; paint(); }
  };
  const go = () => { if (!run) { run = true; last = performance.now(); requestAnimationFrame(tick); } };

  bd.addEventListener('pointerdown', e => { drag = true; bd.setPointerCapture(e.pointerId); hint?.classList.add('gone'); go(); });
  bd.addEventListener('pointermove', e => {
    if (!drag) return;
    const r = $('#pivot').getBoundingClientRect(), px = r.left, py = r.top;   // fixed hook position
    const n = Math.max(-.9, Math.min(.9, -Math.atan2(e.clientX - px, Math.max(40, e.clientY - py))));
    v = n - a; a = n;
  });
  const release = () => { drag = false; go(); };
  bd.addEventListener('pointerup', release);
  bd.addEventListener('pointercancel', release);
  whenReady(go);
})();

/* ==========================================================
   10. CONTACT  (checks the form, really sends it, friendly extras)
   ========================================================== */
(() => {
  const svg = svgIcon;
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const emailOK = EMAIL_RE.test(EMAIL);
  const COOLDOWN = 30000;   // ms between messages from the same browser

  const form = $('#cform'), send = $('#csend'), msg = $('#cmsg'), done = $('#cdone');
  const input = { name: $('#c-name'), email: $('#c-email'), message: $('#c-message') };

  /* --- header: availability + reply time --- */
  $('#cavail').hidden = !AVAILABLE;
  $('#creply').textContent = REPLY_TIME;

  /* --- quick contact: email address + copy button --- */
  if (emailOK) {
    const q = $('#cquick');
    q.hidden = false;
    q.innerHTML = `<a class="qbtn" href="mailto:${esc(EMAIL)}">${svg('mail')}<span>${esc(EMAIL)}</span></a>
      <button type="button" id="ccopy" class="qbtn">${svg('copy')}<span>Copy email</span></button>`;
    $('#ccopy').onclick = async e => {
      const label = $('span', e.currentTarget);
      let ok = false;
      try { await navigator.clipboard.writeText(EMAIL); ok = true; }
      catch (err) {
        try {
          const ta = document.createElement('textarea');
          ta.value = EMAIL; ta.style.cssText = 'position:fixed;opacity:0';
          document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove();
        } catch (e2) { }
      }
      label.textContent = ok ? 'Copied!' : 'Press Ctrl+C';
      setTimeout(() => { label.textContent = 'Copy email'; }, 1800);
    };
  }

  /* --- topic chips --- */
  $('#ctopics').innerHTML = CONTACT_TOPICS.map((t, i) =>
    `<label class="topic"><input type="radio" name="topic" value="${esc(t)}"${i === 0 ? ' checked' : ''}><span class="chip">${esc(t)}</span></label>`).join('');

  /* --- social buttons (only the ones that have a link) --- */
  const links = SOCIALS.filter(x => x.url);
  $('#csocials').hidden = !links.length;
  $('#csocials').innerHTML = links.map(x =>
    `<a class="chip hover:border-acc hover:text-fg" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${svg(x.icon, 'ci-sm')}${esc(x.name)}</a>`).join('');

  /* --- friendly validation --- */
  const rules = {
    name: v => v.trim().length < 2 ? 'Please tell me your name (at least 2 letters).' : '',
    email: v => !EMAIL_RE.test(v.trim()) ? 'Please enter a valid email like name@example.com so I can reply.' : '',
    message: v => v.trim().length < 10 ? 'Please write a little more (at least 10 characters).' : ''
  };
  function check(k) {
    const err = rules[k](input[k].value);
    $('#e-' + k).textContent = err;
    input[k].setAttribute('aria-invalid', String(!!err));
    return !err;
  }
  Object.keys(input).forEach(k => {
    input[k].addEventListener('blur', () => { if (input[k].value) check(k); });
    input[k].addEventListener('input', () => { if (input[k].getAttribute('aria-invalid') === 'true') check(k); });
  });
  input.message.addEventListener('input', () => { const n = input.message.value.length, c = $('#c-count'); c.textContent = `${n} / 1000`; c.classList.toggle('near', n > 900); });

  const setMsg = (text, kind) => { msg.textContent = text; msg.className = text ? 'msg msg-' + kind : ''; };
  const setBusy = b => { send.disabled = b; send.innerHTML = b ? 'Sending…' : `Send message ${svg('arrow')}`; form.setAttribute('aria-busy', String(b)); };

  function showDone(p) {
    form.hidden = true; $('#cquick').classList.add('opacity-60');
    $('#cdone-name').textContent = p.name ? ', ' + p.name.split(' ')[0] : '';
    $('#cdone-mail').textContent = p.email || 'your email';
    done.hidden = false; done.focus();
  }
  $('#cagain').onclick = () => {
    form.reset(); form.hidden = false; done.hidden = true; $('#cquick').classList.remove('opacity-60');
    $('#c-count').textContent = '0 / 1000'; $('#c-count').classList.remove('near'); setMsg('', ''); Object.keys(input).forEach(k => { $('#e-' + k).textContent = ''; input[k].removeAttribute('aria-invalid'); });
    input.name.focus();
  };

  /* --- no form service set up: open the visitor's email app --- */
  function fallbackMail(p) {
    if (!emailOK) {
      console.warn('[contact] Set a real EMAIL (and optionally FORM_ENDPOINT) at the top of script.js');
      setMsg("Sorry, the message form isn't available right now. Please use the social links instead.", 'err');
      return;
    }
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`[${p.topic}] from ${p.name}`)}&body=${encodeURIComponent(`${p.message}\n\n— ${p.name} (${p.email})`)}`;
    setMsg('Your email app should open with the message ready to send. If nothing opens, tap "Copy email" above and write to me directly.', 'ok');
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (form.elements._gotcha.value) { showDone({ name: '', email: '' }); return; }   // a bot filled the hidden trap: pretend it worked

    const bad = Object.keys(input).filter(k => !check(k));
    if (bad.length) { input[bad[0]].focus(); setMsg('Almost there. Please fix the highlighted fields.', 'warn'); return; }
    if (Date.now() - (+store.get('lastSent') || 0) < COOLDOWN) { setMsg('Thanks! Please wait a few seconds before sending another message.', 'warn'); return; }

    const p = {
      name: input.name.value.trim(), email: input.email.value.trim(), message: input.message.value.trim(),
      topic: (form.elements.topic && form.elements.topic.value) || CONTACT_TOPICS[0]
    };
    setMsg('', '');
    if (!FORM_ENDPOINT) { fallbackMail(p); return; }

    setBusy(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...p, _subject: `[Portfolio] ${p.topic} from ${p.name}`, _replyto: p.email, _template: 'table', _captcha: 'false' })
      });
      let json = null; try { json = await res.json(); } catch (err) { }
      if (!res.ok || (json && (json.success === false || json.success === 'false'))) throw new Error('send failed');
      store.set('lastSent', String(Date.now()));
      showDone(p);
    } catch (err) {
      setMsg(`Sorry, your message didn't go through. Please try again${emailOK ? ' or email me at ' + EMAIL : ''}.`, 'err');
    } finally { setBusy(false); }
  });
})();

/* footer year */
$('#yr').textContent = new Date().getFullYear();

/* ==========================================================
   11b. EXTRAS: hero socials, Download CV, footer, back-to-top
   ========================================================== */
(() => {
  const links = SOCIALS.filter(x => x.url);

  // hero: round social buttons
  const hs = $('#hsocial');
  hs.hidden = !links.length;
  hs.innerHTML = links.map(x => `<a class="icon-btn" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(x.name)}" title="${esc(x.name)}">${svgIcon(x.icon, 'ci-lg')}</a>`).join('');

  // "Download CV" shows only when CV_URL is set
  const cv = $('#cv');
  if (CV_URL) { cv.hidden = false; cv.href = CV_URL; } else cv.remove();

  // footer: email + social links
  const items = [];
  if (EMAIL_OK) items.push(`<li><a class="flink" href="mailto:${esc(EMAIL)}">${svgIcon('mail')}<span>${esc(EMAIL)}</span></a></li>`);
  links.forEach(x => items.push(`<li><a class="flink" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${svgIcon(x.icon)}<span>${esc(x.name)}</span></a></li>`));
  $('#fsocial').innerHTML = items.join('') || '<li class="text-sm text-mut">Use the contact form above.</li>';

  // footer: location + live local time (only if LOCATION / TIMEZONE are set)
  let fmt = null;
  if (TIMEZONE) { try { fmt = new Intl.DateTimeFormat([], { hour: 'numeric', minute: '2-digit', timeZone: TIMEZONE }); } catch (e) { fmt = null; } }
  const rows = [];
  if (LOCATION) rows.push(`<li class="flex items-center gap-2"><span class="text-acc">${svgIcon('pin')}</span><span>${esc(LOCATION)}</span></li>`);
  if (fmt) rows.push(`<li class="flex items-center gap-2"><span class="text-acc">${svgIcon('clock')}</span><span>Local time: <span id="ftime">${fmt.format(new Date())}</span></span></li>`);
  if (rows.length) {
    $('#finfo').hidden = false;
    $('#finfo').innerHTML = rows.join('');
    if (fmt) setInterval(() => { const t = $('#ftime'); if (t) t.textContent = fmt.format(new Date()); }, 30000);
  }

  // back-to-top button
  $('#btt').onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

  // any link with data-tab (hero "View projects", footer links) also switches the portfolio tab
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-tab]');
    if (t && views[t.dataset.tab]) show(t.dataset.tab);
  });
})();

/* ==========================================================
   12. LOADING SCREEN  (ID-badge check-in)
   An ID badge drops in, gets scanned, stamped ACCESS GRANTED, then the
   screen opens like doors. It waits for the page to really load AND for
   the animation to play, so it is never a flash. Click it to skip.
   ========================================================== */
(() => {
  const L = $('#loader');
  if (!L) return;
  if (!root.classList.contains('loading')) { L.remove(); return; }

  const MIN_MS = reduce ? 300 : 2600;   // shortest time the screen stays up
  const MAX_MS = 7000;                  // never trap the visitor on a slow network
  const t0 = performance.now();
  const barEl = $('#ldbar'), pctEl = $('#ldpct'), code = $('#ldcode'), steps = $$('.ld-log li', L);
  let loaded = document.readyState === 'complete', shown = 0, finished = false;
  if (!loaded) addEventListener('load', () => { loaded = true; });

  const paint = p => {
    barEl.style.transform = `scaleX(${p / 100})`;
    pctEl.textContent = Math.round(p);
    code.style.setProperty('--p', p + '%');                       // the barcode "prints" as it loads
    const active = Math.min(steps.length - 1, Math.floor(p / (100 / steps.length)));
    steps.forEach((li, i) => {
      li.classList.toggle('done', p >= 100 || i < active);
      li.classList.toggle('on', p < 100 && i === active);
    });
  };

  function finish(fast) {
    if (finished) return;
    finished = true;
    paint(100);
    try { sessionStorage.setItem('seenLoader', '1'); } catch (e) { }
    L.classList.add('granted');                                   // ACCESS GRANTED stamp
    const exit = () => {
      root.classList.remove('loading');
      L.classList.add('done');                                    // doors open
      document.dispatchEvent(new Event('app:ready'));             // hero animations start now
      setTimeout(() => L.remove(), 1300);
    };
    (fast || reduce) ? exit() : setTimeout(exit, 700);
  }

  const frame = now => {
    if (finished) return;
    const el = now - t0;
    const ready = loaded && el >= MIN_MS;
    const target = ready ? 100 : Math.min(el / MIN_MS, 1) * (loaded ? 100 : 90);
    shown += (target - shown) * .12;
    if (ready && shown > 99.4) return finish();
    if (el > MAX_MS) return finish();
    paint(shown);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  L.addEventListener('click', () => finish(true));               // click to skip
})();

/* ==========================================================
   13. FULL-SIZE IMAGE VIEWER (lightbox)
   Used by achievement pictures AND project screenshots.
   window.openViewer(items, startIndex, elementToRefocus)
   items = [{ src, alt, title, sub }]
   ========================================================== */
(() => {
  const q = (s, r = document) => [...r.querySelectorAll(s)];
  const lb = $('#lb'), pic = $('#lbimg'), vid = $('#lbvid'), stage = $('.lb-stage', lb);
  let list = [], i = 0, opener = null;
  const stopVid = () => { vid.pause(); vid.removeAttribute('src'); vid.load?.(); };

  function render() {
    const it = list[i];
    const isVid = it.type === 'video';
    pic.hidden = isVid;
    vid.hidden = !isVid;
    if (isVid) {
      pic.removeAttribute('src');
      vid.poster = it.poster || '';
      vid.src = it.src;
      vid.play?.()?.catch?.(() => { });   // starts right away after the click
    } else {
      stopVid();
      pic.src = it.src;
      pic.alt = it.alt || '';
    }
    $('#lbt').textContent = it.title || '';
    $('#lbs').textContent = it.sub || '';
    $('#lbc').textContent = list.length > 1 ? `${i + 1} / ${list.length}` : '';
    $('#lbp').hidden = $('#lbn').hidden = list.length < 2;
  }
  function openViewer(items, start = 0, from = null) {
    if (!items.length) return;
    list = items;
    i = Math.max(0, Math.min(start, items.length - 1));
    opener = from;
    render();
    lb.showModal();
  }
  window.openViewer = openViewer;
  const step = d => { if (list.length > 1) { i = (i + d + list.length) % list.length; render(); } };

  // achievements: every  .cert img  in the tab
  const meta = el => {
    const ps = q('p', el.closest('.panel') || document.body);
    return { title: ps[0]?.textContent || el.alt, sub: ps[1]?.textContent || '' };
  };
  const certItems = () => q('#pane .cert img').map(el => ({ el, src: el.currentSrc || el.src, alt: el.alt, ...meta(el) }));
  pane.addEventListener('click', e => {
    const el = e.target.closest('.cert img');
    if (!el) return;
    const items = certItems();
    openViewer(items, items.findIndex(x => x.el === el), el);
  });
  pane.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.cert img')) { e.preventDefault(); e.target.click(); }
  });
  // make the pictures keyboard-reachable each time the tab content is redrawn
  const prep = () => q('#pane .cert img').forEach(el => {
    el.tabIndex = 0; el.setAttribute('role', 'button'); el.setAttribute('aria-label', 'View full image: ' + el.alt);
  });
  new MutationObserver(prep).observe(pane, { childList: true, subtree: true });
  prep();

  $('#lbx').onclick = () => lb.close();
  $('#lbp').onclick = () => step(-1);
  $('#lbn').onclick = () => step(1);
  lb.addEventListener('click', e => { if (e.target === lb || e.target === stage) lb.close(); });  // click outside the picture
  lb.addEventListener('keydown', e => {
    if (e.target === vid) return;   // let the video use its own arrow keys for seeking
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  lb.addEventListener('close', () => { pic.removeAttribute('src'); stopVid(); opener?.focus?.(); });

  // other skills: open the pictures / videos of that skill
  pane.addEventListener('click', e => {
    const b = e.target.closest('[data-work]');
    if (!b) return;
    const sk = skills[+b.dataset.skill];
    openViewer(sk.works.map(w => ({ type: w.type || 'image', src: w.src, poster: w.poster || '', alt: w.title || sk.t, title: w.title || sk.t, sub: sk.t })), +b.dataset.work, b);
  });

  // swipe left / right on touch screens
  let x0 = null;
  stage.addEventListener('pointerdown', e => { x0 = e.target === vid ? null : e.clientX; });   // don't swipe while scrubbing a video
  stage.addEventListener('pointerup', e => {
    if (x0 !== null && Math.abs(e.clientX - x0) > 60) step(e.clientX < x0 ? 1 : -1);
    x0 = null;
  });
})();

/* ==========================================================
   14. CARD TILT  (subtle 3D hover on project / achievement cards, mouse only)
   ========================================================== */
(() => {
  if (reduce || !matchMedia('(hover: hover)').matches) return;
  document.addEventListener('pointermove', e => {
    const el = e.target.closest?.('.lift');
    if (!el) return;
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
  });
  document.addEventListener('pointerout', e => {
    const el = e.target.closest?.('.lift');
    if (el && !el.contains(e.relatedTarget)) el.style.transform = '';
  });
})();