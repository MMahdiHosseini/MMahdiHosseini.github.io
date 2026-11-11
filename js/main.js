/* ==========================================================================
   Portfolio - main.js  (plain JavaScript, no build step)
   1 CONFIG  2 Translations  3 Helpers  4 Language  5 Navigation  6 Sidebar
   7 Typewriter  8 Portfolio filter  9 Carousels  10 Card spotlight  11 Map
   12 Contact form  13 Boot
   ========================================================================== */
(function () {
  'use strict';

  /* 1. CONFIG: edit these values ------------------------------------------ */
  var CONFIG = {
    // Get a free access key at https://web3forms.com and paste it here.
    // Leave it empty and the form opens the visitor's email app instead.
    web3formsKey: '',
    toEmail: 'hello@example.com',
    mapQuery: 'Shiraz, Iran',
    defaultLang: 'en'            // 'en' or 'fa'
  };

  /* 2. Translations (English text lives in index.html) ---------------------- */
  var FA = {
    'meta.title': 'محمد مهدی حسینی | توسعه‌دهنده Flutter و مهندس هوش مصنوعی',
    'name': 'محمد مهدی حسینی',
    'btn.show': 'نمایش اطلاعات تماس', 'btn.hide': 'بستن',
    'c.email': 'ایمیل', 'c.location': 'موقعیت', 'loc': 'تهران، ایران',
    'nav.about': 'درباره من', 'nav.resume': 'رزومه', 'nav.portfolio': 'نمونه‌کارها', 'nav.blog': 'وبلاگ', 'nav.contact': 'تماس',

    'about.title': 'درباره من',
    'about.p1': 'مهندس نرم‌افزار با بیش از ۶ سال تجربه در ساخت محصولات موبایل که حالا تمرکزش روی عرضه‌ی قابلیت‌های مبتنی بر هوش مصنوعی است. برای اپلیکیشن‌های چندپلتفرمی با Flutter و Dart و برای اندروید بومی با Kotlin کار می‌کنم و مدل‌های یادگیری ماشین را با Python آموزش می‌دهم و مستقر می‌کنم، از بینایی ماشین روی خود دستگاه تا دستیارهای مبتنی بر مدل‌های زبانی. به معماری تمیز، مدیریت state و اپ‌هایی اهمیت می‌دهم که روی گوشی‌های میان‌رده هم روان بمانند.',
    'about.p2': 'اگر کسی را می‌خواهید که ایده‌تان را از اسکچ تا گوگل‌پلی و اپ‌استور ببرد و یکی دو قابلیت هوشمند هم داخلش بگذارد، حرف بزنیم. برای موقعیت‌های تمام‌وقت و چند پروژه‌ی فریلنسی منتخب آماده‌ام.',
    'doing.title': 'کارهایی که انجام می‌دهم',
    'svc1.t': 'اپلیکیشن موبایل', 'svc1.d': 'اپلیکیشن‌های چندپلتفرمی Flutter و اپ‌های بومی اندروید، با تمرکز بر کارایی و جزئیات.',
    'svc2.t': 'هوش مصنوعی و یادگیری ماشین', 'svc2.d': 'دستیارهای مبتنی بر LLM، بینایی ماشین و قابلیت‌های پیشنهاددهی، از آموزش تا استقرار.',
    'svc3.t': 'طراحی UI/UX', 'svc3.d': 'رابط‌هایی که در Figma طراحی می‌شوند و پیکسل‌به‌پیکسل پیاده می‌شوند، با حرکتی که حساب‌شده حس می‌شود.',
    'svc4.t': 'بک‌اند و API', 'svc4.d': 'سرویس‌های REST و بلادرنگ پایدار روی Firebase و FastAPI، آماده‌ی ترافیک واقعی.',
    'skills.title': 'مهارت‌ها',
    'certs.title': 'گواهینامه‌ها', 'cert.kind': 'گواهی پایان دوره', 'cert.issuer': 'آکادمی لرنلی',
    'cert1.t': 'معماری پیشرفته Flutter', 'cert2.t': 'تخصص یادگیری عمیق', 'cert3.t': 'Kotlin برای حرفه‌ای‌های اندروید',
    'cert4.t': 'توسعه‌ی اپلیکیشن‌های مبتنی بر LLM', 'cert5.t': 'مهندسی یادگیری ماشین', 'cert6.t': 'فایربیس برای اپ‌های عملیاتی',

    'res.title': 'رزومه', 'edu.title': 'تحصیلات', 'exp.title': 'تجربه‌ی کاری', 'res.cv': 'دانلود رزومه',
    'edu1.s': 'مؤسسه‌ی فناوری کینگزلی', 'edu1.d': 'کارشناسی ارشد هوش مصنوعی',
    'edu2.s': 'دانشگاه وست‌بریج', 'edu2.d': 'کارشناسی مهندسی کامپیوتر',
    'exp1.t': 'مهندس ارشد Flutter و هوش مصنوعی', 'exp1.c': 'آئورلیا لبز', 'exp1.loc': 'دورکاری',
    'exp1.b1': 'هدایت کدبیس Flutter یک اپ مصرف‌کننده با بیش از ۴۰۰ هزار کاربر ماهانه در اندروید، iOS و وب.',
    'exp1.b2': 'طراحی یک مدل طبقه‌بندی تصویر روی خود دستگاه (TensorFlow Lite) که هزینه‌ی سرور را ۳۸٪ کاهش داد.',
    'exp1.b3': 'ساخت دستیار درون‌برنامه‌ای مبتنی بر LLM با بازیابی اطلاعات از مستندات محصول.',
    'exp1.b4': 'معرفی معماری feature-first با Riverpod و لایه‌های clean architecture.',
    'exp1.b5': 'راه‌اندازی CI/CD با تست خودکار و انتشار مرحله‌ای در گوگل‌پلی و اپ‌استور.',
    'exp1.b6': 'راهنمایی چهار مهندس و برگزاری کدریویوی هفتگی.',
    'exp2.t': 'توسعه‌دهنده‌ی اندروید', 'exp2.c': 'شرکت نرم‌افزاری مریدین',
    'exp2.b1': 'عرضه‌ی ۹ اپ اندروید با Kotlin، معماری MVVM، Jetpack Compose و Room.',
    'exp2.b2': 'یکپارچه‌سازی پرداخت، نقشه و اعلان‌های پوش و حفظ نرخ نشست بدون کرش بالای ۹۹٫۵٪.',
    'exp2.b3': 'مهاجرت یک کدبیس قدیمی XML به Jetpack Compose و کاهش یک‌سوم کد رابط کاربری.',
    'exp2.b4': 'همکاری با طراحان و تیم بک‌اند برای تبدیل مشخصات Figma به صفحه‌های عملیاتی.',
    'exp3.t': 'توسعه‌دهنده‌ی جونیور اندروید', 'exp3.c': 'اوکهیل دیجیتال',
    'exp3.b1': 'ساخت و نگهداری اپ‌های مشتریان با Java و Kotlin زیر نظر مهندسان ارشد.',
    'exp3.b2': 'رفع باگ، نوشتن تست واحد و بهبود ۳۰٪ی زمان راه‌اندازی اپ اصلی.',
    'exp3.b3': 'یادگیری کامل فرایند انتشار: امضا، صفحه‌ی فروشگاه و انتشار مرحله‌ای.',

    'port.title': 'نمونه‌کارها',
    'f.all': 'همه', 'cat.apps': 'اپلیکیشن‌ها', 'cat.ai': 'هوش مصنوعی', 'cat.web': 'وب', 'cat.ux': 'UI/UX',
    'pg.prev': 'قبلی', 'pg.next': 'بعدی',

    'blog.title': 'وبلاگ', 'blog.tag': 'وبلاگ',
    'post1.t': 'Flutter یا Kotlin Multiplatform؟ چطور در ۲۰۲۶ انتخاب می‌کنم',
    'post1.d': 'نگاهی عملی به اندازه‌ی تیم، نیاز عملکردی و نگهداری بلندمدت هنگام انتخاب استک چندپلتفرمی.',
    'post2.t': 'اجرای مدل‌های زبانی کوچک روی گوشی',
    'post2.d': 'چه چیزی جواب می‌دهد، چه چیزی نه، و وقتی استنتاج را از ابر به اپ Flutter می‌آورید چه هزینه‌ای دارد.',

    'contact.title': 'تماس', 'map.open': 'باز کردن در Google Maps', 'map.load': 'بارگذاری نقشه‌ی تعاملی',
    'form.title': 'فرم تماس', 'form.send': 'ارسال پیام',
    'ph.name': 'نام و نام خانوادگی', 'ph.email': 'آدرس ایمیل', 'ph.subject': 'موضوع', 'ph.message': 'پیام شما',
    'toast.ok': 'پیام ارسال شد. ممنون!',
    'toast.mailto': 'در حال باز کردن برنامه‌ی ایمیل…',
    'toast.err': 'ارسال پیام انجام نشد. دوباره تلاش کنید یا مستقیم ایمیل بزنید.',
    'toast.invalid': 'لطفاً همه‌ی فیلدها را درست پر کنید.',
    'theme.toLight': 'تغییر به تم روشن', 'theme.toDark': 'تغییر به تم تاریک',

    'roles': ['توسعه‌دهنده Flutter', 'مهندس هوش مصنوعی', 'توسعه‌دهنده اندروید'],
    'dur.y': 'سال', 'dur.m': 'ماه', 'dur.and': ' و ', 'present': 'اکنون'
  };
  var EN_EXTRA = {
    'btn.hide': 'Hide Contacts',
    'toast.ok': 'Message sent. Thank you!',
    'toast.mailto': 'Opening your email app…',
    'toast.err': "Couldn't send the message. Please try again or email me directly.",
    'toast.invalid': 'Please fill in every field correctly.',
    'theme.toLight': 'Switch to light theme', 'theme.toDark': 'Switch to dark theme',
    'roles': ['Flutter Developer', 'AI Engineer', 'Android Engineer'],
    'dur.y': 'yr', 'dur.m': 'mo', 'dur.and': ' ', 'present': 'Present'
  };
  var EN = {};   // filled from the HTML on first run

  /* 3. Helpers ------------------------------------------------------------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = CONFIG.defaultLang;

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }
  function t(key) { return (lang === 'fa' ? FA[key] : (EN[key] !== undefined ? EN[key] : EN_EXTRA[key])); }
  function nf(n) { return lang === 'fa' ? Number(n).toLocaleString('fa-IR', { useGrouping: false }) : String(n); }
  function loc() { return lang === 'fa' ? 'fa-IR-u-ca-gregory' : 'en-US'; }
  function mkDate(str) {
    var p = str.split('-').map(Number);
    return new Date(Date.UTC(p[0], (p[1] || 1) - 1, p[2] || 1, 12));
  }
  function fmtDate(str, kind) {
    var o = kind === 'day' ? { month: lang === 'fa' ? 'long' : 'short', day: lang === 'fa' ? 'numeric' : '2-digit', year: 'numeric' }
                           : { month: lang === 'fa' ? 'long' : 'short', year: 'numeric' };
    o.timeZone = 'UTC';
    return new Intl.DateTimeFormat(loc(), o).format(mkDate(str));
  }
  function monthsBetween(a, b) {   // inclusive of both months
    var x = mkDate(a), y = b === 'present' ? new Date() : mkDate(b);
    return (y.getUTCFullYear() - x.getUTCFullYear()) * 12 + (y.getUTCMonth() - x.getUTCMonth()) + 1;
  }

  /* 4. Language ------------------------------------------------------------- */
  function captureEnglish() {
    $$('[data-i18n]').forEach(function (el) { var k = el.dataset.i18n; if (EN[k] === undefined) EN[k] = el.textContent.trim(); });
    $$('[data-i18n-ph]').forEach(function (el) { var k = el.dataset.i18nPh; if (EN[k] === undefined) EN[k] = el.getAttribute('placeholder'); });
    EN['meta.title'] = document.title;
    EN['btn.show'] = EN['btn.show'] || 'Show Contacts';
  }
  function formatDynamic() {
    $$('[data-date]').forEach(function (el) { el.textContent = fmtDate(el.dataset.date, el.dataset.fmt); });
    $$('.timeline-period').forEach(function (el) {
      var s = el.dataset.start, e = el.dataset.end;
      var a = s.length === 4 ? nf(s) : fmtDate(s), b = e === 'present' ? t('present') : (e.length === 4 ? nf(e) : fmtDate(e));
      el.textContent = a + ' — ' + b;
    });
    $$('.timeline-dur').forEach(function (el) {
      var m = monthsBetween(el.dataset.durStart, el.dataset.durEnd), y = Math.floor(m / 12), r = m % 12, out = [];
      if (y) out.push(nf(y) + ' ' + t('dur.y'));
      if (r) out.push(nf(r) + ' ' + t('dur.m'));
      el.textContent = out.join(t('dur.and'));
    });
  }
  function setLang(next) {
    lang = next;
    var html = document.documentElement;
    html.lang = lang; html.dir = lang === 'fa' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.dataset.i18n);
      if (v !== undefined) el.textContent = v;
    });
    $$('[data-i18n-ph]').forEach(function (el) { var v = t(el.dataset.i18nPh); if (v !== undefined) el.setAttribute('placeholder', v); });
    $$('[data-lang-opt]').forEach(function (el) { el.classList.toggle('is-on', el.dataset.langOpt === lang); });
    document.title = t('meta.title');
    var sb = $('[data-sidebar]'), btnLabel = $('[data-sidebar-btn] span');
    if (btnLabel) btnLabel.textContent = t(sb && sb.classList.contains('active') ? 'btn.hide' : 'btn.show');
    var sw = $('[data-lang-btn]');
    if (sw) { sw.dataset.lang = lang; sw.setAttribute('aria-checked', lang === 'fa' ? 'true' : 'false'); }
    updateThemeLabel();
    formatDynamic();
    startTypewriter();
    store('lang', lang);
  }
  function initLang() {
    captureEnglish();
    var saved = store('lang');
    setLang(saved === 'fa' || saved === 'en' ? saved : CONFIG.defaultLang);
    var btn = $('[data-lang-btn]');
    if (btn) btn.addEventListener('click', function () { setLang(lang === 'fa' ? 'en' : 'fa'); });
  }

  /* 4b. Theme (dark / light) ------------------------------------------------ */
  function currentTheme() { return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
  function updateThemeLabel() {
    var b = $('[data-theme-btn]'); if (!b) return;
    var label = t(currentTheme() === 'light' ? 'theme.toDark' : 'theme.toLight');
    b.setAttribute('aria-label', label); b.title = label;
  }
  function applyTheme(next, persist) {
    document.documentElement.setAttribute('data-theme', next);
    var m = $('meta[name="theme-color"]');
    if (m) m.setAttribute('content', next === 'light' ? '#f2ead8' : '#08100d');
    if (persist) store('theme', next);
    updateThemeLabel();
  }
  function initTheme() {
    var b = $('[data-theme-btn]'); if (!b) return;
    applyTheme(currentTheme(), false);
    b.addEventListener('click', function () {
      var next = currentTheme() === 'light' ? 'dark' : 'light';
      if (document.startViewTransition && !reduceMotion) document.startViewTransition(function () { applyTheme(next, true); });
      else applyTheme(next, true);
    });
  }

  /* 5. Navigation (tabs + hash) ---------------------------------------------- */
  var PAGES = ['about', 'resume', 'portfolio', 'blog', 'contact'];
  function showPage(name, push) {
    if (PAGES.indexOf(name) < 0) name = 'about';
    $$('.article').forEach(function (a) { a.classList.toggle('active', a.dataset.page === name); });
    $$('[data-nav]').forEach(function (b) {
      var on = b.dataset.nav === name;
      b.classList.toggle('active', on);
      if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    if (push && location.hash !== '#' + name) { try { history.pushState(null, '', '#' + name); } catch (e) { location.hash = name; } }
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  function initNav() {
    $$('[data-nav]').forEach(function (b) { b.addEventListener('click', function () { showPage(b.dataset.nav, true); }); });
    var fromHash = function () { showPage((location.hash || '').replace('#', ''), false); };
    window.addEventListener('popstate', fromHash);
    window.addEventListener('hashchange', fromHash);
    if (location.hash) fromHash();
    $$('.navbar-list li').forEach(function (li, i) { li.style.setProperty('--n', i); });
    $$('[data-stagger]').forEach(function (list) { Array.prototype.forEach.call(list.children, function (c, i) { c.style.setProperty('--i', i); }); });
  }

  /* 6. Sidebar toggle (mobile) --------------------------------------------------- */
  function initSidebar() {
    var sb = $('[data-sidebar]'), btn = $('[data-sidebar-btn]');
    if (!sb || !btn) return;
    btn.addEventListener('click', function () {
      var open = sb.classList.toggle('active');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      $('span', btn).textContent = t(open ? 'btn.hide' : 'btn.show');
    });
  }

  /* 7. Typewriter in the title pill ----------------------------------------------- */
  var twTimer = null;
  function startTypewriter() {
    var el = $('#role-text'); if (!el) return;
    clearTimeout(twTimer);
    var roles = t('roles'), ri = 0, ci = 0, del = false;
    if (reduceMotion) { el.textContent = roles[0]; return; }
    (function tick() {
      var word = Array.from(roles[ri]), delay;
      if (!del) {
        ci++; el.textContent = word.slice(0, ci).join('');
        if (ci === word.length) { del = true; delay = 1800; } else delay = 85;
      } else {
        ci--; el.textContent = word.slice(0, ci).join('');
        if (ci === 0) { del = false; ri = (ri + 1) % roles.length; delay = 350; } else delay = 38;
      }
      twTimer = setTimeout(tick, delay);
    })();
  }

  /* 8. Portfolio filter + pagination ------------------------------------------------ */
  function initProjects() {
    var items = $$('.project-item'), btns = $$('.filter-btn'), pg = $('[data-pagination]');
    if (!items.length) return;
    var prev = $('[data-pg="prev"]'), next = $('[data-pg="next"]'), count = $('[data-pg-count]');
    var PER = 6, page = 1, filter = 'all';
    function render(animate) {
      var list = items.filter(function (it) { return filter === 'all' || it.dataset.category === filter; });
      var pages = Math.max(1, Math.ceil(list.length / PER));
      page = Math.min(page, pages);
      items.forEach(function (it) { it.hidden = true; it.classList.remove('pop'); });
      list.slice((page - 1) * PER, page * PER).forEach(function (it, i) {
        it.hidden = false;
        if (animate) { it.style.setProperty('--i', i); void it.offsetWidth; it.classList.add('pop'); }
      });
      pg.hidden = pages <= 1;
      prev.disabled = page <= 1; next.disabled = page >= pages;
      count.textContent = nf(page) + ' / ' + nf(pages);
    }
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        filter = b.dataset.filter; page = 1;
        btns.forEach(function (x) { x.classList.toggle('active', x === b); });
        render(true);
      });
    });
    prev.addEventListener('click', function () { page--; render(true); });
    next.addEventListener('click', function () { page++; render(true); });
    document.addEventListener('langchange', function () { render(false); });
    window.__renderProjects = function () { render(false); };
    render(false);
  }

  /* 9. Drag-to-scroll carousels ------------------------------------------------------ */
  function initDrag() {
    $$('[data-drag-scroll]').forEach(function (el) {
      var down = false, startX = 0, startLeft = 0, moved = false;
      el.addEventListener('pointerdown', function (e) {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        down = true; moved = false; startX = e.clientX; startLeft = el.scrollLeft;
      });
      window.addEventListener('pointermove', function (e) {
        if (!down) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 4) { moved = true; el.classList.add('is-dragging'); }
        if (moved) el.scrollLeft = startLeft - dx;
      });
      window.addEventListener('pointerup', function () { down = false; setTimeout(function () { el.classList.remove('is-dragging'); }, 0); });
      el.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    });
  }

  /* 10. Card spotlight (follows the cursor) --------------------------------------------- */
  function initSpotlight() {
    if (!window.matchMedia || !window.matchMedia('(hover:hover)').matches) return;
    var raf = 0, ev = null;
    document.addEventListener('pointermove', function (e) {
      var card = e.target.closest && e.target.closest('.glow-card');
      if (!card) return;
      ev = { card: card, x: e.clientX, y: e.clientY };
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        var r = ev.card.getBoundingClientRect();
        ev.card.style.setProperty('--mx', (ev.x - r.left) + 'px');
        ev.card.style.setProperty('--my', (ev.y - r.top) + 'px');
      });
    }, { passive: true });
  }

  /* 11. Map (loads Google Maps only after a click) ---------------------------------------- */
  function initMap() {
    var box = $('[data-mapbox]'), btn = $('[data-map-load]');
    if (!box || !btn) return;
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.google.com/maps?q=' + encodeURIComponent(CONFIG.mapQuery) + '&z=12&output=embed';
      f.loading = 'lazy'; f.title = 'Map'; f.referrerPolicy = 'no-referrer-when-downgrade';
      box.appendChild(f); box.classList.add('is-live');
    });
  }

  /* 12. Contact form ------------------------------------------------------------------------- */
  var toastTimer = null;
  function toast(key, isErr) {
    var el = $('[data-toast]'); if (!el) return;
    $('[data-toast-text]', el).textContent = t(key);
    el.classList.toggle('is-error', !!isErr);
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 4200);
  }
  function initForm() {
    var form = $('[data-form]'), btn = $('[data-form-btn]');
    if (!form || !btn) return;
    var check = function () { btn.disabled = !form.checkValidity(); };
    form.addEventListener('input', check); check();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { toast('toast.invalid', true); return; }
      var d = new FormData(form);
      if (d.get('botcheck')) return;                       // bots fill the hidden field
      if (CONFIG.web3formsKey) {
        btn.disabled = true;
        d.append('access_key', CONFIG.web3formsKey);
        fetch('https://api.web3forms.com/submit', { method: 'POST', body: d })
          .then(function (r) { return r.json(); })
          .then(function (j) { if (j.success) { toast('toast.ok'); form.reset(); } else { toast('toast.err', true); } })
          .catch(function () { toast('toast.err', true); })
          .then(check);
      } else {
        var body = d.get('message') + '\n\n' + d.get('name') + ' <' + d.get('email') + '>';
        location.href = 'mailto:' + CONFIG.toEmail + '?subject=' + encodeURIComponent(d.get('subject')) + '&body=' + encodeURIComponent(body);
        toast('toast.mailto');
      }
    });
  }

  /* 13. Boot ------------------------------------------------------------------------------------ */
  function boot() {
    initLang();
    initTheme();
    initNav();
    initSidebar();
    initProjects();
    initDrag();
    initSpotlight();
    initMap();
    initForm();
    // keep the pagination counter in the right digits after a language change
    var langBtn = $('[data-lang-btn]');
    if (langBtn) langBtn.addEventListener('click', function () { if (window.__renderProjects) window.__renderProjects(); });
    if (window.__renderProjects) window.__renderProjects();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
