(() => {
  const T = {
    uz: {
      nav_courses: "Kurslar", nav_test: "Daraja testi", nav_results: "Natijalar", nav_inside: "Markaz", nav_where: "Manzil",
      lead: "Qoʻqondagi Callan Education: ingliz, rus va arab tillari, xattotlik va IT kurslari bitta binoda.",
      cta_test: "Ingliz tili darajamni aniqlash", cta_join: "Telegram orqali yozilish", call: "Qoʻngʻiroq",
      evening: "Ishlaysizmi? Ingliz tilidan kechki guruhlar 18:30 da boshlanadi.",
      building_caption: "Qoʻqon, Hamza koʻchasi 12",
      ticker: ["Ingliz tili", "IELTS", "CEFR", "Rus tili", "Arab tili", "Xattotlik", "Web dasturchilik", "Flutter", "Python", "SMM"],
      courses_title: "Kurslar", courses_sub: "Oʻzingizga mos yoʻnalishni tanlang: tillar yoki IT.",
      tab_en: "Ingliz tili", tab_ru: "Rus tili", tab_ar: "Arab tili va xattotlik", tab_it: "IT kurslari",
      en_title: "Ingliz tili", en_text: "Boshlangʻich darajadan IELTS va CEFR imtihonlarigacha. Kunduzgi va kechki guruhlar bor: kechki darslar 18:30 da boshlanadi, ishdan keyin ham ulgurasiz.",
      en_pills: ["General English", "IELTS", "CEFR", "Kechki guruhlar"],
      ru_title: "Rus tili", ru_text: "Rus tilini noldan boshlang yoki bor bilimingizni mustahkamlang: grammatika, lugʻat va jonli muloqot.",
      ru_pills: ["Grammatika", "Soʻzlashuv"],
      ar_title: "Arab tili va xattotlik", ar_text: "Arab tili darslari va arab yozuvining goʻzal sanʼati: xattotlik.",
      ar_pills: ["Arab tili", "Xattotlik"],
      ask: "Narxlar va boʻsh guruhlar haqida Telegram orqali yoki telefonda soʻrang: administratorlar javob beradi.",
      it_note: "Darslar haftasiga 3 kun, 12 ta dars (SMM Intensive: haftasiga 5 kun). Narxlar soʻmda.",
      currency: "soʻm", five_days: "haftasiga 5 kun",
      py_title: "Python backend", py_who: "Ustoz: Umarxon Akbarov, 2 yillik tajriba",
      py_learn: "Kurs davomida oʻrganasiz:", py_cta: "Kursga yozilish",
      test_title: "Ingliz tilingiz qaysi darajada?",
      test_sub: "10 ta savol, 2 daqiqa. Natija darhol chiqadi va sizga mos guruhni tavsiya qilamiz.",
      start_h: "Tayyormisiz?", start_p: "Har bir savolga bitta javobni tanlang. Bilmasangiz, taxmin qiling: bu imtihon emas.",
      start_btn: "Testni boshlash", count: (i) => `Savol ${i} / 10`,
      your_level: "Sizning taxminiy darajangiz", retry: "Qaytadan ishlash",
      fine: "Bu taxminiy natija. Aniq darajangizni markazdagi ustozlar aniqlab beradi.",
      levels: {
        A1: "Boshlangʻich daraja. Asoslardan boshlaymiz: General English guruhi aynan siz uchun.",
        A2: "Asoslarni bilasiz. General English bilan grammatika va nutqingizni mustahkamlang.",
        B1: "Oʻrta daraja. CEFR sertifikatiga tayyorlanishning ayni vaqti.",
        B2: "Yuqori-oʻrta daraja. IELTS tayyorlov kursi bilan yuqori ballga intiling.",
        C1: "Ajoyib natija! Darajangizni IELTS sertifikati bilan tasdiqlang."
      },
      results_title: "Natijalar", results_sub: "Markazimizdagi sertifikatlar devori: har bir ramkada oʻquvchimizning haqiqiy natijasi turibdi.",
      sat_caption: "Oʻquvchimizning SAT natijasi: matematikadan maksimal 800 ball.",
      cert_alt: "Callan Education sertifikatlar devori",
      inside_title: "Markaz ichida", inside_sub: "Har bir sinfxonaning oʻz shiori bor: rangli devorlar, LED chiroqlar va panorama oynalar.",
      slogan: "Oʻquvchilar markazimizning yuragidir!",
      night_alt: "Callan Education binosi kechasi, Qoʻqon", scene_tag: "Keyingi daraja sari",
      where_title: "Manzil", address_l: "Manzil", address: "Fargʻona viloyati, Qoʻqon shahri, Hamza koʻchasi, 12-uy",
      landmark_l: "Moʻljal", landmark: "Chorsu, Ucell va Beeline bosh ofislari", phone_l: "Telefon",
      evening_l: "Kechki darslar", evening_short: "18:30 dan",
      motto: "Callan: imkoniyatlar makoni"
    },
    ru: {
      nav_courses: "Курсы", nav_test: "Тест уровня", nav_results: "Результаты", nav_inside: "Центр", nav_where: "Адрес",
      lead: "Callan Education в Коканде: английский, русский и арабский языки, каллиграфия и IT-курсы в одном здании.",
      cta_test: "Узнать мой уровень английского", cta_join: "Записаться в Telegram", call: "Позвонить",
      evening: "Работаете? Вечерние группы по английскому начинаются в 18:30.",
      building_caption: "Коканд, ул. Хамза 12",
      ticker: ["Английский", "IELTS", "CEFR", "Русский", "Арабский", "Каллиграфия", "Веб-разработка", "Flutter", "Python", "SMM"],
      courses_title: "Курсы", courses_sub: "Выберите своё направление: языки или IT.",
      tab_en: "Английский", tab_ru: "Русский", tab_ar: "Арабский и каллиграфия", tab_it: "IT-курсы",
      en_title: "Английский язык", en_text: "От начального уровня до экзаменов IELTS и CEFR. Есть дневные и вечерние группы: вечерние занятия начинаются в 18:30, успеете после работы.",
      en_pills: ["General English", "IELTS", "CEFR", "Вечерние группы"],
      ru_title: "Русский язык", ru_text: "Начните с нуля или укрепите то, что знаете: грамматика, словарный запас и живое общение.",
      ru_pills: ["Грамматика", "Разговорная практика"],
      ar_title: "Арабский язык и каллиграфия", ar_text: "Занятия арабским языком и красивое искусство арабского письма: каллиграфия.",
      ar_pills: ["Арабский язык", "Каллиграфия"],
      ask: "О ценах и свободных группах спросите в Telegram или по телефону: администраторы ответят.",
      it_note: "Занятия 3 раза в неделю, 12 уроков (SMM Intensive: 5 раз в неделю). Цены в сумах.",
      currency: "сум", five_days: "5 раз в неделю",
      py_title: "Python backend", py_who: "Преподаватель: Умархон Акбаров, опыт 2 года",
      py_learn: "На курсе вы изучите:", py_cta: "Записаться на курс",
      test_title: "Какой у вас уровень английского?",
      test_sub: "10 вопросов, 2 минуты. Результат сразу, и мы подскажем подходящую группу.",
      start_h: "Готовы?", start_p: "Выберите один ответ на каждый вопрос. Не знаете — угадывайте: это не экзамен.",
      start_btn: "Начать тест", count: (i) => `Вопрос ${i} из 10`,
      your_level: "Ваш примерный уровень", retry: "Пройти ещё раз",
      fine: "Это примерный результат. Точный уровень определят преподаватели в центре.",
      levels: {
        A1: "Начальный уровень. Начнём с основ: вам подойдёт группа General English.",
        A2: "Вы знаете основы. Укрепите грамматику и речь в группе General English.",
        B1: "Средний уровень. Самое время готовиться к сертификату CEFR.",
        B2: "Выше среднего. Курс подготовки к IELTS поможет взять высокий балл.",
        C1: "Отличный результат! Подтвердите уровень сертификатом IELTS."
      },
      results_title: "Результаты", results_sub: "Стена сертификатов в нашем центре: в каждой рамке реальный результат ученика.",
      sat_caption: "SAT-результат нашего ученика: максимальные 800 баллов по математике.",
      cert_alt: "Стена сертификатов Callan Education",
      inside_title: "Внутри центра", inside_sub: "У каждого класса свой девиз: яркие стены, LED-светильники и панорамные окна.",
      slogan: "Ученики — сердце нашего центра!",
      night_alt: "Здание Callan Education ночью, Коканд", scene_tag: "На следующий уровень",
      where_title: "Адрес", address_l: "Адрес", address: "Ферганская область, г. Коканд, ул. Хамза, 12",
      landmark_l: "Ориентир", landmark: "Чорсу, главные офисы Ucell и Beeline", phone_l: "Телефон",
      evening_l: "Вечерние занятия", evening_short: "с 18:30",
      motto: "Callan: пространство возможностей"
    }
  };

  // IT prices, copied from the centre's own price list
  const IT = [
    { uz: "Kompyuter savodxonligi", ru: "Компьютерная грамотность", rows: [
      { uz: "Kompyuter savodxonligi", ru: "Компьютерная грамотность", price: 400000 } ] },
    { uz: "Web dasturchilik", ru: "Веб-разработка", rows: [
      { uz: "Foundation (2 oy)", ru: "Foundation (2 мес.)", price: 400000 },
      { uz: "Full Stack", ru: "Full Stack", price: 600000 } ] },
    { uz: "Flutter (mobil dasturlash)", ru: "Flutter (мобильная разработка)", rows: [
      { uz: "Foundation (2 oy)", ru: "Foundation (2 мес.)", price: 400000 },
      { uz: "Mobile dasturlash", ru: "Мобильная разработка", price: 600000 } ] },
    { uz: "SMM", ru: "SMM", rows: [
      { uz: "Standart (3 oy)", ru: "Стандарт (3 мес.)", price: 600000 },
      { uz: "Intensive (2 oy)", ru: "Intensive (2 мес.)", price: 900000, five: true } ] }
  ];
  const PY = ["Python", "Django, FastAPI", "PostgreSQL, MySQL", "Telegram bot", "git, bash / shell", "Docker, Docker Compose"];
  // classrooms, each with its own wall motto (photos: the centre's Google Maps page)
  const GALLERY = [
    { f: "hexagons", span: "big", uz: "Olti burchakli chiroqlar sinfi", ru: "Класс с шестигранными лампами" },
    { f: "einstein", uz: "Eynshteyn sinfi", ru: "Класс Эйнштейна" },
    { f: "keep-running", quote: "Keep running and never look back" },
    { f: "hustle", quote: "Stay humble, hustle hard" },
    { f: "yes-you-can", quote: "Yes you can" },
    { f: "panorama", span: "wide", uz: "Panorama oynali sinf", ru: "Класс с панорамными окнами" },
    { f: "small-changes", quote: "Small changes can make a BIG difference" },
    { f: "walk-slowly", quote: "I walk slowly, but I never walk backward" },
    { f: "teamwork", span: "big", uz: "Teamwork zali", ru: "Зал Teamwork" },
    { f: "dont-stop", span: "wide", quote: "Don't stop when it hurts, stop when you're done" },
    { f: "building-day", span: "wide", uz: "Bino kunduzi: Hamza koʻchasi, 12", ru: "Здание днём: ул. Хамза, 12" }
  ];

  // the level test: original questions, easiest first
  const QUIZ = [
    { q: "She ___ a student.", o: ["are", "is", "am", "be"], a: 1 },
    { q: "I ___ breakfast every morning.", o: ["has", "having", "have", "am have"], a: 2 },
    { q: "Yesterday we ___ to the cinema.", o: ["go", "gone", "goes", "went"], a: 3 },
    { q: "This bag is ___ than that one.", o: ["cheaper", "more cheap", "cheapest", "the cheaper"], a: 0 },
    { q: "I have lived in Kokand ___ 2015.", o: ["for", "from", "since", "during"], a: 2 },
    { q: "If it rains tomorrow, we ___ at home.", o: ["will stay", "stay", "would stay", "stayed"], a: 0 },
    { q: "The letter ___ yesterday.", o: ["sent", "has sent", "is sending", "was sent"], a: 3 },
    { q: "I wish I ___ more time to study.", o: ["have", "had", "will have", "having"], a: 1 },
    { q: "She suggested ___ a taxi.", o: ["to take", "take", "taking", "took"], a: 2 },
    { q: "Hardly ___ the station when the train left.", o: ["I had reached", "had I reached", "I reached", "did I reached"], a: 1 }
  ];
  const levelOf = (n) => n <= 2 ? "A1" : n <= 4 ? "A2" : n <= 6 ? "B1" : n <= 8 ? "B2" : "C1";

  const $ = (s) => document.querySelector(s);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const money = (n) => n.toLocaleString("ru-RU").replace(/ /g, " ");
  const chev = () => el("i", "chev");
  let lang = "uz", tab = "en", quiz = { step: -1, score: 0, marks: [] };

  function renderCourses() {
    const L = T[lang];
    const tabs = [["en", L.tab_en], ["ru", L.tab_ru], ["ar", L.tab_ar], ["it", L.tab_it]];
    $("#tabs").replaceChildren(...tabs.map(([id, name]) => {
      const b = el("button", null, name);
      b.type = "button"; b.setAttribute("role", "tab"); b.id = "tab-" + id; b.setAttribute("aria-controls", "panel");
      b.setAttribute("aria-selected", String(id === tab));
      b.addEventListener("click", () => { tab = id; renderCourses(); });
      return b;
    }));
    const panel = el("div", "panel"); panel.id = "panel"; panel.setAttribute("role", "tabpanel"); panel.setAttribute("aria-labelledby", "tab-" + tab);
    if (tab === "it") {
      const grid = el("div", "it");
      IT.forEach((g) => {
        const box = el("div", "it-group"); box.append(el("h3", null, g[lang]));
        g.rows.forEach((r) => {
          const row = el("div", "price-row"), name = el("div", null, r[lang]);
          if (r.five) name.append(el("small", null, L.five_days));
          const price = el("b", null, money(r.price)); price.append(el("em", null, L.currency));
          row.append(name, price); box.append(row);
        });
        grid.append(box);
      });
      const py = el("div", "py"), left = el("div"), right = el("div");
      left.append(el("h3", null, L.py_title), el("p", "who", L.py_who));
      const join = el("a", "btn", L.py_cta); join.href = "https://t.me/callaneducation_official"; join.target = "_blank"; join.rel = "noopener";
      left.append(join);
      const ul = el("ul"); PY.forEach((t) => { const li = el("li"); li.append(chev(), el("span", null, t)); ul.append(li); });
      right.append(el("p", "who", L.py_learn), ul);
      py.append(left, right);
      panel.append(grid, py, el("p", "it-note", L.it_note));
    } else {
      const wrap = el("div", "lang-panel"), left = el("div"), pills = el("div", "pills");
      L[tab + "_pills"].forEach((p) => pills.append(el("span", null, p)));
      left.append(el("h3", null, L[tab + "_title"]), el("p", null, L[tab + "_text"]), pills);
      const ask = el("div", "ask"); ask.append(el("p", null, L.ask));
      const a1 = el("a", "btn y", L.cta_join); a1.href = "https://t.me/callaneducation_official"; a1.target = "_blank"; a1.rel = "noopener";
      const a2 = el("a", "btn o", "+998 97 129 11 11"); a2.href = "tel:+998971291111";
      const a3 = el("a", "btn o", "+998 91 150 00 16"); a3.href = "tel:+998911500016";
      const acts = el("div", "actions"); acts.append(a1, a2, a3); ask.append(acts);
      wrap.append(left, ask); panel.append(wrap);
    }
    $("#panels").replaceChildren(panel);
  }

  function renderQuiz() {
    const L = T[lang], box = $("#quiz");
    const meter = el("div", "meter");
    for (let i = 0; i < QUIZ.length; i++) {
      const m = el("i"); if (i < quiz.marks.length) m.className = quiz.marks[i] ? "on" : "bad"; meter.append(m);
    }
    if (quiz.step < 0) {
      const s = el("div", "start"); s.append(el("h3", "q", L.start_h), el("p", null, L.start_p));
      const b = el("button", "btn y", L.start_btn); b.type = "button";
      b.addEventListener("click", () => { quiz = { step: 0, score: 0, marks: [] }; renderQuiz(); });
      s.append(b); box.replaceChildren(meter, s); return;
    }
    if (quiz.step >= QUIZ.length) {
      const lvl = levelOf(quiz.score), r = el("div", "result");
      const big = el("div", "level"); big.append(document.createTextNode(lvl), chev(), chev());
      r.append(el("div", "count", L.your_level), big, el("p", null, L.levels[lvl]), el("p", "fine", L.fine));
      const acts = el("div", "actions");
      const join = el("a", "btn y", L.cta_join); join.href = "https://t.me/callaneducation_official"; join.target = "_blank"; join.rel = "noopener";
      const again = el("button", "btn o", L.retry); again.type = "button";
      again.addEventListener("click", () => { quiz = { step: 0, score: 0, marks: [] }; renderQuiz(); });
      acts.append(join, again); r.append(acts);
      box.replaceChildren(meter, r); return;
    }
    const item = QUIZ[quiz.step], opts = el("div", "opts");
    let locked = false;
    item.o.forEach((text, i) => {
      const b = el("button", "opt"); b.type = "button";
      b.append(el("b", null, "ABCD"[i]), el("span", null, text));
      b.addEventListener("click", () => {
        if (locked) return; locked = true;
        const ok = i === item.a;
        b.classList.add(ok ? "right" : "wrong");
        if (!ok) opts.children[item.a].classList.add("right");
        quiz.marks.push(ok); if (ok) quiz.score++;
        setTimeout(() => { quiz.step++; renderQuiz(); }, ok ? 450 : 900);
      });
      opts.append(b);
    });
    box.replaceChildren(meter, el("div", "count", L.count(quiz.step + 1)), el("p", "q", item.q), opts);
    opts.firstChild.focus({ preventScroll: true });
  }

  function render(next) {
    lang = next; const L = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i]").forEach((e) => { const v = L[e.dataset.i]; if (typeof v === "string") e.textContent = v; });
    document.querySelectorAll("[data-alt]").forEach((e) => e.alt = L[e.dataset.alt]);
    document.querySelectorAll(".langs button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const words = L.ticker.flatMap((w) => [w]);
    const half = () => { const s = el("span"); words.forEach((w) => { s.append(document.createTextNode(w), chev()); }); return s; };
    $("#ticker").replaceChildren(half(), half());
    $("#gallery").replaceChildren(...GALLERY.map((g) => {
      const f = el("figure", g.span || null), img = el("img"), text = g.quote || g[lang];
      img.src = `img/${g.f}-800.jpg`; img.srcset = `img/${g.f}-800.jpg 800w, img/${g.f}-1600.jpg 1600w`;
      img.sizes = g.span === "big" ? "(max-width: 640px) 84vw, 50vw" : "(max-width: 640px) 84vw, 25vw";
      img.alt = text; img.loading = "lazy";
      const open = el("button"); open.type = "button"; open.setAttribute("aria-label", text);
      open.addEventListener("click", () => {
        const box = $("#lightbox"); box.querySelector("img").src = `img/${g.f}-1600.jpg`; box.querySelector("img").alt = text;
        box.querySelector("p").textContent = text; box.showModal();
      });
      const cap = el("figcaption"); cap.append(chev(), el("span", null, text));
      f.append(img, cap, open); return f;
    }));
    renderCourses();
    if (quiz.step < 0 || quiz.step >= QUIZ.length) renderQuiz();
    else { const keep = quiz.step; quiz.step = keep; renderQuiz(); }
    try { localStorage.setItem("callan-lang", lang); } catch (e) {}
  }

  // the photo viewer closes on its button, on Escape, and on a click outside the photo
  const box = $("#lightbox");
  box.querySelector(".close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });

  // the Rubik ceiling, in their colours
  const COLORS = ["#e63b2e", "#f26b1d", "#ffc72c", "#2fa84f", "#1d8fd6", "#f2f2f2", "#1f3f8f"];
  const rubik = $("#rubik"), NS = "http://www.w3.org/2000/svg";
  for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) {
    const t = document.createElementNS(NS, "rect");
    Object.entries({ x: 8 + c * 39, y: 8 + r * 22, width: 36, height: 19, rx: 2,
                     fill: COLORS[(r * 7 + c * 3 + (r * c) % 5) % COLORS.length], class: "tile" })
      .forEach(([k, v]) => t.setAttribute(k, v));
    t.style.animationDelay = `${((r * 10 + c) * 0.37) % 7}s`;
    t.style.opacity = String(0.55 + ((r + c) % 3) * 0.15);
    rubik.append(t);
  }

  // sections slide their chevron in, blocks rise, the SAT score counts up
  document.documentElement.classList.add("js");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const countUp = (e) => {
    const to = +e.dataset.to, t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / 1400); e.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("seen"); io.unobserve(en.target);
    en.target.querySelectorAll(".count-up").forEach((e) => still || countUp(e));
  }), { threshold: 0.18 });
  document.querySelectorAll("section.block").forEach((s) => io.observe(s));

  document.querySelectorAll(".langs button").forEach((b) => b.addEventListener("click", () => render(b.dataset.lang)));
  $("#year").textContent = new Date().getFullYear();
  let start = "uz";
  try { start = localStorage.getItem("callan-lang") || "uz"; } catch (e) {}
  render(T[start] ? start : "uz");
})();
