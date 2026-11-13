const groupSchedule = [
  { label: "Kelas pagi · Senin–Jumat", value: "08.00–10.00 WIB" },
  { label: "Kelas malam · Senin–Jumat", value: "19.00–21.00 WIB" },
  { label: "Kelas Sabtu", value: "09.00–11.00 WIB · Break · 12.00–14.00 WIB" }
];

const regulerBenefits = [
  "Kurikulum terstruktur dari A1 ke A2.",
  "Tutor berpengalaman dan native speaker.",
  "Materi lengkap: buku digital, worksheet, dan audio.",
  "Latihan listening, reading, writing, dan speaking.",
  "Tata bahasa dan kosakata dasar.",
  "Simulasi percakapan untuk kehidupan sehari-hari.",
  "Evaluasi perkembangan berkala dan akses rekaman kelas.",
  "Konsultasi lanjutan ke program berikutnya dalam lingkungan belajar interaktif dan suportif."
];

const groupFacts = [
  ["Durasi", "3 bulan"],
  ["Pilihan sesi", "66 weekday atau 12 sesi Sabtu"],
  ["Durasi sesi", "2 jam weekday & 4 jam Sabtu"],
  ["Biaya", "Rp2.500.000 / bulan"]
];

const programCatalog = {
  reguler: {
    name: "Program Reguler",
    title: 'Bangun fondasi bahasa Prancis <span>secara bertahap.</span>',
    intro: "Kelas grup online untuk membangun fondasi bahasa Prancis dari level A1 hingga A2.",
    packages: [{
      name: "A1 – A2 · Fondasi bahasa",
      duration: "3 bulan",
      detail: "Program dasar dari level pemula hingga A2.",
      summary: "Kurikulum terstruktur untuk peserta pemula yang ingin membangun dasar bahasa Prancis dan komunikasi sehari-hari.",
      facts: groupFacts,
      scheduleTitle: "Pilih waktu kelas pagi atau malam.",
      scheduleDescription: "Sesi pagi & malam merupakan kesatuan program dengan Sabtu.",
      schedule: groupSchedule,
      benefits: regulerBenefits,
      fit: ["Belum memiliki dasar bahasa Prancis.", "Ingin memulai dari level A1 dan belajar bertahap.", "Tertarik merencanakan peluang kerja atau studi di Kanada." ]
    }]
  },
  extension: {
    name: "Program Extension",
    title: 'Lanjutkan kemampuanmu <span>ke level berikutnya.</span>',
    intro: "Program lanjutan untuk mengembangkan kemampuan bahasa Prancis dari B1 menuju B2 (30%).",
    packages: [{
      name: "B1 – B2 · A2 menuju mastering B1",
      duration: "3 bulan",
      detail: "Kurikulum lanjutan dari refreshment A2 menuju mastering B1 dengan fokus bahasa dan komunikasi.",
      summary: "Pendalaman tata bahasa, kosakata akademik dan profesional, percakapan berbasis studi kasus, serta strategi ujian.",
      facts: groupFacts,
      scheduleTitle: "Pilih waktu kelas pagi atau malam.",
      scheduleDescription: "Kelas tersedia pada sesi pagi atau malam termasuk sabtu.",
      schedule: groupSchedule,
      benefits: [
        "Kurikulum refreshment A2 menuju mastering B1 dan penguatan tata bahasa tingkat menengah.",
        "Pengembangan kosakata akademik dan profesional.",
        "Latihan intensif listening, reading, writing, dan speaking.",
        "Praktik percakapan dengan studi kasus nyata.",
        "Simulasi ujian TCF/TEF, termasuk format dan strategi.",
        "Feedback individual dari tutor, materi tambahan, dan akses rekaman kelas.",
        "Informasi lowongan yang sesuai jalur Francophone Mobility dan bimbingan melamar kerja sesuai latar kandidat.",
        "Konsultasi tak terbatas terkait pencarian peluang Francophone Mobility."
      ],
      fit: ["Sudah memiliki kemampuan bahasa Prancis minimal B1.", "Ingin melanjutkan ke level B2 dan memperkuat komunikasi.", "Berencana mempersiapkan TCF/TEF atau kebutuhan kerja dan studi.", "Tertarik mengeksplorasi peluang kerja di Kanada." ]
    }]
  },
  preparation: {
    name: "Program Preparation · Private 1 on 1",
    title: 'Persiapkan TCF/TEF Canada <span>dengan fokus personal.</span>',
    intro: "Kelas privat persiapan ujian bahasa Prancis, latihan wawancara kerja, dan bimbingan karier.",
    packages: [{
      name: "B1 – TCF Canada / TEF Canada · Private Preparation",
      duration: "1 bulan",
      detail: "Paket intensif satu bulan: 26 sesi × 2 jam, total sekitar 52 jam.",
      summary: "Program private preparation untuk peserta minimal B1 yang ingin berlatih ujian TCF/TEF Canada dan mempersiapkan langkah karier.",
      facts: [["Durasi", "1 bulan"], ["Jumlah sesi", "26 sesi · Senin–Sabtu"], ["Durasi sesi", "2 jam · total 52 jam"], ["Biaya", "Rp8.000.000 · total program"]],
      scheduleTitle: "Sesi berlangsung Senin sampai Sabtu.",
      scheduleDescription: "Waktu per sesi adalah dua jam. Jadwal rinci dibicarakan saat assessment awal.",
      schedule: [{ label: "Hari kelas", value: "Senin–Sabtu" }, { label: "Durasi", value: "2 jam per sesi" }, { label: "Assessment", value: "Dilakukan sebelum mulai program" }],
      benefits: [
        "Latihan soal TCF/TEF Canada, simulasi, strategi, dan pembahasan.",
        "Latihan interview kerja dalam bahasa Prancis sesuai bidang pekerjaan.",
        "Bimbingan karier: informasi peluang kerja di Kanada, persiapan CV, dan strategi melamar sesuai profil."
      ],
      fit: ["Sudah memiliki kemampuan bahasa Prancis minimal B1.", "Ingin mempersiapkan ujian TCF Canada atau TEF Canada.", "Ingin melatih wawancara dan menyusun persiapan karier di Kanada." ],
      assessment: "Assessment oleh tutor dilakukan sebelum program untuk membantu menilai kesesuaian program dengan kemampuan dan tujuan peserta."
    }]
  },
  private: {
    name: "Private 1 on 1",
    title: 'Belajar privat dengan fokus <span>yang sesuai kebutuhanmu.</span>',
    intro: "Kelas satu lawan satu dengan materi terstruktur, pendampingan tutor, dan waktu belajar yang fleksibel.",
    packages: [
      {
        name: "A1 – A2 · Fondasi bahasa",
        duration: "2 bulan",
        detail: "Kelas privat A1–A2 selama dua bulan dengan 52 sesi, masing-masing dua jam.",
        summary: "Bangun dasar bahasa Prancis dari A1 ke A2 dengan pembelajaran privat yang lebih fokus dan fleksibel.",
        facts: [["Durasi", "2 bulan"], ["Jumlah sesi", "52 sesi · Senin–Sabtu"], ["Durasi sesi", "2 jam per sesi"], ["Biaya", "Rp7.500.000 / bulan"]],
        scheduleTitle: "Kelas privat Senin sampai Sabtu.",
        scheduleDescription: "Waktu kelas dapat diminta atau disesuaikan dengan kebutuhan peserta dan ketersediaan tutor.",
        schedule: [{ label: "Hari kelas", value: "Senin–Sabtu" }, { label: "Durasi", value: "2 jam per sesi" }, { label: "Jam kelas", value: "Fleksibel · bisa request" }],
        benefits: regulerBenefits,
        fit: ["Belum memiliki dasar bahasa Prancis.", "Ingin belajar lebih fokus dan intensif secara personal.", "Membutuhkan jadwal kelas yang fleksibel.", "Ingin melanjutkan ke level B1 setelah menyelesaikan A2." ]
      },
      {
        name: "B1 Mastering · Pengembangan level",
        duration: "2 bulan",
        detail: "Kelas privat B1 Mastering selama dua bulan dengan 52 sesi, masing-masing dua jam.",
        summary: "Pendalaman bahasa Prancis menuju B1 Mastering dengan pendekatan privat yang intensif dan personal.",
        facts: [["Durasi", "2 bulan"], ["Jumlah sesi", "52 sesi · Senin–Sabtu"], ["Durasi sesi", "2 jam per sesi"], ["Biaya", "Rp7.500.000 / bulan"]],
        scheduleTitle: "Kelas privat Senin sampai Sabtu.",
        scheduleDescription: "Waktu kelas dapat diminta atau disesuaikan dengan kebutuhan peserta dan ketersediaan tutor.",
        schedule: [{ label: "Hari kelas", value: "Senin–Sabtu" }, { label: "Durasi", value: "2 jam per sesi" }, { label: "Jam kelas", value: "Fleksibel · bisa request" }],
        benefits: [
          "Kurikulum terstruktur dari refreshment A2 hingga Mastering B1 dengan tutor berpengalaman dan native speaker.",
          "Materi lengkap, latihan empat keterampilan, serta tata bahasa dan kosakata tingkat menengah-lanjut.",
          "Simulasi percakapan sehari-hari dan profesional.",
          "Praktik dan strategi ujian TCF/TEF.",
          "Evaluasi berkala, akses rekaman kelas, dan konsultasi lanjutan ke program berikutnya."
        ],
        fit: ["Sudah memiliki dasar bahasa Prancis, sekitar level A2 atau setara.", "Ingin meningkatkan kemampuan menuju B2.", "Ingin mempersiapkan ujian TCF/TEF atau kebutuhan kerja dan studi.", "Menginginkan pembelajaran yang fleksibel, intensif, dan personal." ]
      }
    ]
  },
  "private-group": {
    name: "Private Group",
    title: 'Belajar bersama dalam grup kecil <span>dengan arah yang jelas.</span>',
    intro: "Kelas online dalam grup kecil untuk mengembangkan kemampuan bahasa Prancis dengan kurikulum terstruktur dan pendampingan tutor.",
    packages: [
      {
        name: "A1 – A2 · Fondasi bahasa",
        duration: "2 bulan",
        detail: "Kelas grup kecil A1–A2 selama dua bulan dengan 52 sesi, masing-masing dua jam.",
        summary: "Bangun fondasi bahasa Prancis dari A1 ke A2 dengan tutor berpengalaman dan suasana belajar kelompok yang interaktif.",
        facts: [["Durasi", "2 bulan"], ["Jumlah sesi", "52 sesi · Senin–Sabtu"], ["Durasi sesi", "2 jam per sesi"], ["Biaya", "Rp3.500.000 / bulan"]],
        scheduleTitle: "Kelas online dalam grup kecil.",
        scheduleDescription: "Program dibuka dengan minimal tiga peserta. Jam kelas dapat diminta sesuai kesepakatan grup dan ketersediaan tutor.",
        schedule: [{ label: "Hari kelas", value: "Senin–Sabtu" }, { label: "Durasi", value: "2 jam per sesi" }, { label: "Ukuran grup", value: "Minimal 3 peserta" }, { label: "Jam kelas", value: "Bisa request" }],
        benefits: [
          "Kurikulum terstruktur dari A1 ke A2.",
          "Tutor berpengalaman atau native speaker.",
          "Materi lengkap: buku digital, worksheet, dan audio.",
          "Latihan listening, reading, writing, dan speaking.",
          "Penguatan tata bahasa dan kosakata dasar.",
          "Simulasi percakapan untuk situasi sehari-hari.",
          "Evaluasi perkembangan berkala dan rekaman kelas.",
          "Konsultasi untuk melanjutkan ke program berikutnya."
        ],
        fit: ["Belum memiliki dasar bahasa Prancis atau ingin mulai dari A1.", "Ingin belajar dalam grup kecil dengan arahan tutor.", "Menyukai diskusi dan latihan bersama peserta lain."]
      },
      {
        name: "B1 Mastering · Pengembangan level",
        duration: "2 bulan",
        detail: "Kelas grup kecil B1 Mastering selama dua bulan dengan 52 sesi, masing-masing dua jam.",
        summary: "Kembangkan kemampuan bahasa B1 mastering melalui latihan terarah, praktik komunikasi, dan persiapan ujian dalam grup kecil.",
        facts: [["Durasi", "2 bulan"], ["Jumlah sesi", "52 sesi · Senin–Sabtu"], ["Durasi sesi", "2 jam per sesi"], ["Biaya", "Rp3.500.000 / bulan"]],
        scheduleTitle: "Kelas online dalam grup kecil.",
        scheduleDescription: "Program dibuka dengan minimal tiga peserta. Jam kelas dapat diminta sesuai kesepakatan grup dan ketersediaan tutor.",
        schedule: [{ label: "Hari kelas", value: "Senin–Sabtu" }, { label: "Durasi", value: "2 jam per sesi" }, { label: "Ukuran grup", value: "Minimal 3 peserta" }, { label: "Jam kelas", value: "Bisa request" }],
        benefits: [
          "Kurikulum terstruktur dari refreshment A2 hingga mastering B1.",
          "Tutor berpengalaman atau native speaker.",
          "Materi lengkap dan latihan empat keterampilan bahasa.",
          "Pendalaman tata bahasa dan kosakata tingkat menengah.",
          "Simulasi percakapan sehari-hari dan profesional.",
          "Latihan dan strategi ujian TCF/TEF Canada.",
          "Evaluasi berkala, rekaman kelas, dan konsultasi lanjutan."
        ],
        fit: ["Memiliki kemampuan bahasa Prancis sekitar level A2 atau lebih.", "Ingin mengembangkan kemampuan menuju B2.", "Mempersiapkan TCF/TEF atau peluang kerja di Kanada.", "Ingin belajar intensif bersama grup kecil."]
      }
    ]
  }
};

const programSelect = document.querySelector("#program-select");
const packageSelect = document.querySelector("#package-select");
const durationResult = document.querySelector("#duration-result");
const durationDetail = document.querySelector("#duration-detail");
const estimateHint = document.querySelector("#estimate-hint");
const heroDuration = document.querySelector("#hero-duration");
const programDetailSummary = document.querySelector("#program-detail-summary");
const programFacts = document.querySelector("#program-facts");
const programScheduleTitle = document.querySelector("#program-schedule-title");
const programScheduleDescription = document.querySelector("#program-schedule-description");
const programScheduleList = document.querySelector("#program-schedule-list");
const programBenefits = document.querySelector("#program-benefit-list");
const programFit = document.querySelector("#program-fit-list");
const programAssessmentNote = document.querySelector("#program-assessment-note");

function renderTextList(container, items) {
  if (!container) return;
  container.replaceChildren(...items.map(function (text) {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }));
}

function renderProgramOverview(program, selectedPackage) {
  if (!selectedPackage) return;
  if (programDetailSummary) programDetailSummary.textContent = selectedPackage.summary;

  if (programFacts) {
    programFacts.replaceChildren(...selectedPackage.facts.map(function (fact) {
      const card = document.createElement("article");
      card.className = "program-fact-card";
      const label = document.createElement("span");
      label.textContent = fact[0];
      const value = document.createElement("strong");
      value.textContent = fact[1];
      card.append(label, value);
      return card;
    }));
  }

  if (programScheduleTitle) programScheduleTitle.textContent = selectedPackage.scheduleTitle;
  if (programScheduleDescription) programScheduleDescription.textContent = selectedPackage.scheduleDescription;
  if (programScheduleList) {
    programScheduleList.replaceChildren(...selectedPackage.schedule.map(function (entry) {
      const item = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = entry.label;
      const value = document.createElement("strong");
      value.textContent = entry.value;
      item.append(label, value);
      return item;
    }));
  }

  renderTextList(programBenefits, selectedPackage.benefits);
  renderTextList(programFit, selectedPackage.fit);
  if (programAssessmentNote) {
    programAssessmentNote.textContent = selectedPackage.assessment || "";
    programAssessmentNote.hidden = !selectedPackage.assessment;
  }
}

function updateProgramDetails(programKey, packageIndex = 0) {
  const program = programCatalog[programKey] || programCatalog.reguler;
  const title = document.querySelector("#program-title");
  const intro = document.querySelector("#program-intro");
  title.innerHTML = program.title;
  intro.textContent = program.intro;
  programSelect.value = programCatalog[programKey] ? programKey : "reguler";

  packageSelect.replaceChildren(...program.packages.map(function (item, index) {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = item.name;
    return option;
  }));

  packageSelect.value = String(Math.min(packageIndex, program.packages.length - 1));
  updateEstimate(program);
}

function updateEstimate(program = programCatalog[programSelect.value]) {
  const selectedPackage = program.packages[Number(packageSelect.value)] || program.packages[0];
  durationResult.textContent = selectedPackage.duration;
  durationDetail.textContent = `${program.name} · ${selectedPackage.name}`;
  estimateHint.textContent = selectedPackage.detail;
  heroDuration.textContent = selectedPackage.duration;
  renderProgramOverview(program, selectedPackage);
}

if (programSelect && packageSelect) {
  const query = new URLSearchParams(window.location.search);
  const initialProgram = query.get("program") || "reguler";
  updateProgramDetails(initialProgram);
  programSelect.addEventListener("change", function () {
    updateProgramDetails(programSelect.value);
  });
  packageSelect.addEventListener("change", function () {
    updateEstimate(programCatalog[programSelect.value]);
  });
}

const levelDescriptions = {
  A1: { kicker: "Pemula · Dasar", title: "Mulai berkomunikasi dalam situasi sederhana.", description: "Mengenal ungkapan sehari-hari, memperkenalkan diri, dan memahami percakapan yang disampaikan dengan perlahan.", hours: "±90 jam" },
  A2: { kicker: "Dasar · Menengah awal", title: "Bertukar informasi tentang hal yang dekat dengan keseharian.", description: "Memahami kalimat dan ungkapan umum, lalu berkomunikasi tentang keluarga, pekerjaan, dan kebutuhan sehari-hari.", hours: "±180 jam" },
  B1: { kicker: "Menengah", title: "Menghadapi banyak situasi saat bepergian dan beraktivitas.", description: "Memahami pokok percakapan yang jelas dan menyampaikan pengalaman, rencana, serta pendapat dengan runtut.", hours: "±360 jam" },
  B2: { kicker: "Menengah lanjut", title: "Berkomunikasi lebih lancar dan memahami topik yang kompleks.", description: "Mengembangkan kelancaran berbahasa, memahami gagasan utama teks yang lebih kompleks, dan menjelaskan sudut pandang.", hours: "±720 jam" }
};

const levelTabs = document.querySelectorAll(".level-tab");
const levelPanel = document.querySelector("#level-panel");
if (levelTabs.length && levelPanel) {
  function selectLevel(tab, moveFocus = false) {
    const level = levelDescriptions[tab.dataset.level];
    levelTabs.forEach(function (item) {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    levelPanel.setAttribute("aria-labelledby", tab.id);
    document.querySelector("#level-kicker").textContent = level.kicker;
    document.querySelector("#level-name").textContent = level.title;
    document.querySelector("#level-description").textContent = level.description;
    document.querySelector("#level-hours").textContent = level.hours;
    if (moveFocus) tab.focus();
  }

  levelTabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { selectLevel(tab); });
    tab.addEventListener("keydown", function (event) {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % levelTabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + levelTabs.length) % levelTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = levelTabs.length - 1;
      selectLevel(levelTabs[nextIndex], true);
    });
  });
}

const whatsappNumber = "6281234567890"; // Ganti dengan nomor resmi

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nama = formData.get("nama").trim();
    const tujuan = formData.get("tujuan");
    const pesan = formData.get("pesan").trim();

    const message = [
      `Halo Lunga Abroad, saya ${nama}.`,
      `Saya ingin bertanya tentang: ${tujuan}.`,
      pesan ? `Rencana saya: ${pesan}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

const historyBackButtons = document.querySelectorAll("[data-history-back]");
historyBackButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (window.history.length > 1) {
      event.preventDefault();
      window.history.back();
    }
  });
});

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", function () {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
    menuToggle.textContent = isOpen ? "Menu" : "Tutup";
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "Menu";
    });
  });
}
const tipFilters = document.querySelectorAll("[data-tip-filter]");
const tipCards = document.querySelectorAll("[data-tip-category]");

if (tipFilters.length && tipCards.length) {
  tipFilters.forEach(function (filterButton) {
    filterButton.addEventListener("click", function () {
      const selectedCategory = filterButton.dataset.tipFilter;

      tipFilters.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button === filterButton));
      });

      tipCards.forEach(function (card) {
        const matches = selectedCategory === "semua" ||
          card.dataset.tipCategory === selectedCategory;
        card.hidden = !matches;
      });
    });
  });
}

/* Animasi konten ketika masuk dan keluar dari viewport */
const revealTargets = document.querySelectorAll(
  "main h1, main h2, main h3, main p, main .button, main .number-item, main .program-card, main .process-step, main .about-panel, main .tutor-card, main .faq-item, main .tip-row, main .contact-form"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

  revealTargets.forEach(function (element) {
    element.classList.add("scroll-reveal");
    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach(function (element) {
    element.classList.add("is-visible");
  });
}

/* Galeri foto kegiatan */
const galleryImages = [
  { src: "assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.31.jpeg", alt: "Tangkapan layar Zoom webinar Francophone Mobility Canada dengan peserta dan tim Lungaabroad", caption: "Peserta dan Tim Lungaabroad" },
  { src: "assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.32.jpeg", alt: "Pemateri webinar Francophone Mobility, Mr Vincent", caption: "Pemateri Mr Vincent — Native Speaker French" },
  { src: "assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.32%20(1).jpeg", alt: "Pemateri webinar Francophone Mobility, Amanda Tri Budiarto", caption: "Pemateri Amanda Tri Budiarto" },
  { src: "assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.31%20(1).jpeg", alt: "Pemateri webinar Francophone Mobility, Mr Martin", caption: "Pemateri Mr Martin — Tutor France" }
];

const galleryImage = document.querySelector(".gallery-image");
const galleryCaption = document.querySelector("#gallery-caption");
const galleryCounter = document.querySelector("#gallery-counter");
const galleryThumbs = document.querySelectorAll(".gallery-thumb");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");

if (galleryImage && galleryCaption && galleryCounter && galleryThumbs.length) {
  let activeGalleryIndex = 0;
  let galleryChangeToken = 0;
  let galleryAutoplayTimer = 0;
  const galleryReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const galleryRoot = galleryImage.closest(".gallery");

  function showGalleryImage(index) {
    activeGalleryIndex = (index + galleryImages.length) % galleryImages.length;
    const image = galleryImages[activeGalleryIndex];
    const nextIndex = activeGalleryIndex;
    const changeToken = ++galleryChangeToken;

    function applyImage() {
      if (changeToken !== galleryChangeToken) return;
      galleryImage.src = image.src;
      galleryImage.alt = image.alt;
      galleryCaption.textContent = image.caption;
      galleryCounter.textContent = `${String(nextIndex + 1).padStart(2, "0")} / ${String(galleryImages.length).padStart(2, "0")}`;

      galleryThumbs.forEach(function (thumb, thumbIndex) {
        const isActive = thumbIndex === nextIndex;
        thumb.classList.toggle("is-active", isActive);
        thumb.setAttribute("aria-pressed", String(isActive));
      });

      requestAnimationFrame(function () {
        galleryImage.classList.remove("is-fading");
      });
    }

    if (galleryReducedMotion || image.src === galleryImage.getAttribute("src")) {
      applyImage();
      return;
    }

    const imageLoader = new Image();
    imageLoader.onload = function () {
      if (changeToken !== galleryChangeToken) return;
      galleryImage.classList.add("is-fading");
      window.setTimeout(applyImage, 550);
    };
    imageLoader.onerror = applyImage;
    imageLoader.src = image.src;
  }

  function pauseGalleryAutoplay() {
    window.clearInterval(galleryAutoplayTimer);
  }

  function startGalleryAutoplay() {
    pauseGalleryAutoplay();
    if (galleryReducedMotion) return;
    galleryAutoplayTimer = window.setInterval(function () {
      showGalleryImage(activeGalleryIndex + 1);
    }, 1500);
  }

  galleryThumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      showGalleryImage(Number(thumb.dataset.galleryIndex));
    });
  });

  galleryPrev?.addEventListener("click", function () {
    showGalleryImage(activeGalleryIndex - 1);
  });

  galleryNext?.addEventListener("click", function () {
    showGalleryImage(activeGalleryIndex + 1);
  });

  galleryRoot?.addEventListener("mouseenter", pauseGalleryAutoplay);
  galleryRoot?.addEventListener("mouseleave", startGalleryAutoplay);
  galleryRoot?.addEventListener("focusin", pauseGalleryAutoplay);
  galleryRoot?.addEventListener("focusout", function (event) {
    if (!galleryRoot.contains(event.relatedTarget)) startGalleryAutoplay();
  });
  startGalleryAutoplay();
}


/* Hitung angka dan level saat ringkasan masuk ke layar */
const counterElements = document.querySelectorAll("[data-counter]");
const reduceCounterMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateCounter(element) {
  if (element.dataset.counter === "levels") {
    const levels = ["A1", "A2", "B1", "B2"];
    const finalText = "A1 – B2";
    const duration = 1000;
    const startTime = performance.now();
    element.classList.add("is-counting");

    function rollLevel(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const levelIndex = Math.min(Math.floor(progress * levels.length), levels.length - 1);
      element.textContent = progress === 1 ? finalText : levels[levelIndex];
      if (progress < 1) requestAnimationFrame(rollLevel);
      else element.classList.remove("is-counting");
    }
    requestAnimationFrame(rollLevel);
    return;
  }

  const target = Number(element.dataset.target);
  const suffix = element.dataset.suffix || "";
  const duration = 1000;
  const startTime = performance.now();
  element.classList.add("is-counting");

  function countUp(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.round(target * easedProgress);
    element.textContent = `${currentValue}${suffix}`;
    if (progress < 1) requestAnimationFrame(countUp);
    else element.classList.remove("is-counting");
  }
  requestAnimationFrame(countUp);
}

if (counterElements.length && !reduceCounterMotion && "IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counterElements.forEach(function (element) { counterObserver.observe(element); });
}

/* Garis progres bergerak mengikuti guliran halaman */
const processTrack = document.querySelector(".process-list");
if (processTrack) {
  let processFrame = 0;

  function updateProcessProgress() {
    const bounds = processTrack.getBoundingClientRect();
    const start = window.innerHeight * 0.78;
    const finish = window.innerHeight * 0.28;
    const progress = Math.max(0, Math.min(1, (start - bounds.top) / (start - finish)));
    processTrack.style.setProperty("--process-progress", progress.toFixed(3));
    processFrame = 0;
  }

  function requestProcessProgress() {
    if (!processFrame) processFrame = window.requestAnimationFrame(updateProcessProgress);
  }

  window.addEventListener("scroll", requestProcessProgress, { passive: true });
  window.addEventListener("resize", requestProcessProgress);
  updateProcessProgress();
}

/* Kontrol geser untuk daftar kartu program belajar */
const choiceTrack = document.querySelector("#choice-program-track");
if (choiceTrack) {
  document.querySelectorAll("[data-choice-scroll]").forEach(function (button) {
    button.addEventListener("click", function () {
      const direction = Number(button.dataset.choiceScroll) || 1;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      choiceTrack.scrollBy({
        left: direction * choiceTrack.clientWidth * 0.8,
        behavior: reducedMotion ? "auto" : "smooth"
      });
    });
  });
}

:root{--navy:#0b1d36;--navy-soft:#142b4b;--blue:#eaf1fa;--orange:#f47835;--white:#fff;--muted:#65758b;--line:#dce5ef;--radius:22px;--width:1160px}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--navy);font:16px/1.6 Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}button,input,select,textarea{font:inherit}.container{width:min(var(--width),calc(100% - 40px));margin-inline:auto}
.header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.95);border-bottom:1px solid var(--line);backdrop-filter:blur(14px)}.nav{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:24px}.logo{font-size:23px;font-weight:800;letter-spacing:-1px}.logo span{color:var(--orange)}.nav-links{display:flex;gap:22px;color:#41536a;font-size:14px;font-weight:600}.nav-links a:hover,.text-link:hover{color:var(--orange)}.button{min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:0 21px;border:1px solid transparent;border-radius:999px;background:var(--orange);color:#fff;font-size:14px;font-weight:700;transition:transform .18s,box-shadow .18s}.button:hover{transform:translateY(-2px);box-shadow:0 10px 24px #f4783540}.button-secondary{background:#fff;border-color:var(--line);color:var(--navy)}.menu-toggle{display:none}.mobile-menu{display:none}
.hero{position:relative;overflow:hidden;padding:88px 0 64px;background:radial-gradient(circle at 82% 30%,#5b91d326,transparent 26%),linear-gradient(180deg,#f5f8fc,#fff)}.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:64px}.eyebrow{display:inline-flex;align-items:center;gap:9px;margin:0 0 20px;color:#536881;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase}.eyebrow:before{width:26px;height:2px;content:"";background:var(--orange)}h1{max-width:720px;margin:0;font-size:clamp(42px,6vw,72px);line-height:1.04;letter-spacing:-3.5px}h1 span,.section-heading h2 span,.about-copy h2 span,.contact-layout h2 span{color:var(--orange)}.hero-copy{max-width:550px;margin:24px 0 30px;color:var(--muted);font-size:17px}.hero-actions{display:flex;flex-wrap:wrap;gap:12px}.hero-note{display:flex;align-items:center;gap:12px;margin-top:34px;color:var(--muted);font-size:13px}.note-mark{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:#fff0e7;color:var(--orange);font-weight:800}
.hero-visual{position:relative;min-height:440px;display:grid;place-items:center}.orbit{position:absolute;width:390px;height:390px;border:1px solid #d8e4f1;border-radius:50%}.orbit:before,.orbit:after{position:absolute;inset:30px;content:"";border:1px solid #e3ebf4;border-radius:50%}.orbit:after{inset:62px}.journey-card{position:relative;z-index:1;width:min(100%,360px);padding:26px;border:1px solid var(--line);border-radius:var(--radius);background:#fffffff2;box-shadow:0 24px 70px #18335321}.card-top{display:flex;align-items:center;justify-content:space-between;padding-bottom:20px;border-bottom:1px solid var(--line)}.card-label{margin:0;color:var(--muted);font-size:11px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase}.status{padding:6px 10px;border-radius:999px;background:#eaf7f1;color:#26724f;font-size:11px;font-weight:700}.route{display:flex;align-items:center;gap:14px;padding:24px 0}.route-dot{width:12px;height:12px;flex:0 0 auto;border:3px solid var(--orange);border-radius:50%}.route-line{height:1px;flex:1;background:var(--line)}.route-code{font-size:13px;font-weight:800}.destination{margin:0;font-size:27px;font-weight:800;letter-spacing:-1px}.destination-sub{margin:3px 0 0;color:var(--muted);font-size:13px}.card-info{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px}.info-box{padding:14px;border-radius:14px;background:#f4f7fb}.info-box small{display:block;color:var(--muted);font-size:10px;font-weight:700;text-transform:uppercase}.info-box strong{font-size:13px}.floating-tag{position:absolute;right:0;bottom:46px;padding:13px 16px;border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:0 12px 35px #1833531a;font-size:12px;font-weight:700}.floating-tag span{color:var(--orange)}
.numbers{padding:28px 0;border-block:1px solid var(--line);background:#fff}.number-grid{display:grid;grid-template-columns:repeat(4,1fr)}.number-item{padding:10px 24px;border-left:1px solid var(--line)}.number-item:first-child{padding-left:0;border-left:0}.number-item strong{display:block;font-size:25px}.number-item span{color:var(--muted);font-size:12px}.section{padding:88px 0}.section-heading{max-width:680px;margin-bottom:36px}.section-heading h2,.about-copy h2,.contact-layout h2{margin:0;font-size:clamp(34px,4vw,52px);line-height:1.1;letter-spacing:-2px}.section-heading>p:last-child{max-width:580px;margin:16px 0 0;color:var(--muted)}.process-section,.tutor-section,.gallery-section,.tips-section{background:#f5f8fc}
.program-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}.program-card{min-height:290px;display:flex;flex-direction:column;align-items:flex-start;padding:28px;border:1px solid var(--line);border-radius:var(--radius);background:#fff;transition:transform .18s,box-shadow .18s}.program-card:hover,.tutor-card:hover{transform:translateY(-4px);box-shadow:0 18px 38px #18335317}.program-card-featured{border-color:var(--navy);background:var(--navy);color:#fff}.program-icon{width:46px;height:46px;display:grid;place-items:center;border-radius:14px;background:#fff0e7;color:var(--orange);font-weight:800}.program-card-featured .program-icon{background:#ffffff20}.card-kicker{margin:20px 0 4px;color:var(--orange);font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px}.program-card h3{margin:0;font-size:24px}.program-card>p:not(.card-kicker){color:var(--muted);font-size:14px}.program-card-featured>p:not(.card-kicker){color:#c8d4e4}.program-card a{margin-top:auto;font-size:13px;font-weight:700}.program-card a span{color:var(--orange)}
.process-list{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;margin:0;padding:0;list-style:none}.process-step{position:relative;padding:24px 18px 0 0;border-top:1px solid #cbd7e5}.process-step:before{position:absolute;top:-5px;left:0;width:9px;height:9px;border-radius:50%;background:var(--orange);content:""}.step-number{color:var(--orange);font-size:12px;font-weight:800}.process-step h3{margin:12px 0 8px;font-size:17px;line-height:1.3}.process-step p{margin:0;color:var(--muted);font-size:13px}
.about-grid{display:grid;grid-template-columns:1fr .9fr;align-items:center;gap:70px}.about-copy>p:not(.eyebrow){max-width:560px;color:var(--muted)}.text-link{display:inline-flex;gap:8px;margin-top:8px;font-size:14px;font-weight:700}.text-link span{color:var(--orange)}.about-panel{position:relative;overflow:hidden;padding:30px;border-radius:var(--radius);background:var(--navy);color:#fff}.about-panel-glow{position:absolute;top:-100px;right:-80px;width:240px;height:240px;border-radius:50%;background:#f4783538;filter:blur(50px)}.panel-label{position:relative;color:#aebdd0;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase}.focus-item{position:relative;display:grid;grid-template-columns:42px 1fr;gap:14px;padding:18px 0;border-top:1px solid #ffffff26}.focus-number{color:var(--orange);font-weight:800}.focus-item h3{margin:0;font-size:17px}.focus-item p{margin:5px 0 0;color:#c2cede;font-size:13px}
.tutor-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.tutor-card{padding:22px;border:1px solid var(--line);border-radius:18px;background:#fff;transition:transform .18s,box-shadow .18s}.tutor-avatar{width:58px;height:58px;display:grid;place-items:center;border:1px solid #ffd6c2;border-radius:18px;background:#fff0e7;color:var(--orange);font-size:21px;font-weight:800}.tutor-role{margin:18px 0 5px;color:var(--orange);font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase}.tutor-card h3{margin:0;font-size:19px}.tutor-card>p:last-child{color:var(--muted);font-size:13px}
.gallery{overflow:hidden;border:1px solid var(--line);border-radius:var(--radius);background:#fff;box-shadow:0 18px 46px #18335314}.gallery-image-wrap{position:relative;aspect-ratio:16/8;overflow:hidden;background:#dce5ef}.gallery-image{display:block;width:100%;height:100%;object-fit:cover}.gallery-arrow{position:absolute;top:50%;z-index:1;width:46px;height:46px;transform:translateY(-50%);border:1px solid #ffffffb8;border-radius:50%;background:#0b1d36b8;color:#fff;font-size:28px;cursor:pointer}.gallery-arrow:hover{background:var(--orange)}.gallery-prev{left:18px}.gallery-next{right:18px}.gallery-caption-row{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 24px 16px}.gallery-counter{margin:0;color:var(--orange);font-size:11px;font-weight:800}.gallery-caption-row h3{margin:0;font-size:20px}.gallery-name{color:var(--muted);font-size:13px}.gallery-thumbnails{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:0 24px 22px}.gallery-thumb{aspect-ratio:16/9;overflow:hidden;padding:0;border:2px solid transparent;border-radius:10px;background:#dce5ef;opacity:.68;cursor:pointer}.gallery-thumb.is-active{border-color:var(--orange);opacity:1}.gallery-thumb img{width:100%;height:100%;display:block;object-fit:cover}
.tips-heading{display:flex;justify-content:space-between;align-items:end;gap:30px}.tips-heading>p{max-width:370px;color:var(--muted)}.tip-filters{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:22px}.tip-filter{padding:9px 15px;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--navy);font-size:12px;font-weight:700;cursor:pointer}.tip-filter[aria-pressed=true]{border-color:var(--navy);background:var(--navy);color:#fff}.tip-list{border-top:1px solid var(--line)}.tip-row{display:grid;grid-template-columns:150px minmax(220px,1fr) minmax(220px,1.2fr) 180px;align-items:center;gap:20px;padding:20px 12px;border-bottom:1px solid var(--line)}.tip-row[hidden]{display:none}.tip-category{justify-self:start;padding:6px 10px;border-radius:999px;background:#fff0e7;color:#b74f1e;font-size:10px;font-weight:800;text-transform:uppercase}.tip-row h3{margin:0;font-size:16px;line-height:1.35}.tip-row p{margin:0;color:var(--muted);font-size:13px}.tip-row a{font-size:12px;font-weight:800}.tip-row a span{color:var(--orange)}.tip-note{color:var(--muted);font-size:11px}
.faq-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px;align-items:start}.faq-item{border-bottom:1px solid var(--line)}.faq-item:first-child{border-top:1px solid var(--line)}.faq-item summary{position:relative;padding:21px 38px 21px 0;cursor:pointer;font-weight:700;list-style:none}.faq-item summary::-webkit-details-marker{display:none}.faq-item summary:after{position:absolute;right:2px;color:var(--orange);content:"+";font-size:22px}.faq-item[open] summary:after{content:"−"}.faq-item p{color:var(--muted);font-size:14px}
.contact-section{background:radial-gradient(circle at 85% 15%,#f478352e,transparent 28%),var(--navy);color:#fff}.contact-layout{display:grid;grid-template-columns:1fr .85fr;gap:70px;align-items:start}.contact-section .eyebrow{color:#c2cede}.contact-copy,.contact-note{max-width:520px;color:#c2cede}.contact-form{display:grid;gap:10px;padding:26px;border:1px solid #ffffff29;border-radius:var(--radius);background:#ffffff0f}.contact-form label{margin-top:8px;color:#d7e0ec;font-size:12px;font-weight:700}.contact-form input,.contact-form select,.contact-form textarea{width:100%;padding:12px 13px;border:1px solid #ffffff33;border-radius:10px;background:#071a387a;color:#fff;font-size:14px}.contact-form select option{color:var(--navy)}.contact-form input::placeholder,.contact-form textarea::placeholder{color:#aebdd0}.contact-submit{width:100%;margin-top:12px;cursor:pointer}.form-help{margin:0;color:#c2cede;font-size:11px;text-align:center}.contact-note{margin-top:36px;padding-top:18px;border-top:1px solid #ffffff2e;font-size:12px}.site-footer{padding:26px 0;background:#071426;color:#aebdd0;font-size:12px}.footer-content{display:flex;align-items:center;justify-content:space-between;gap:18px}.site-footer p{margin:0}.site-footer strong{color:#fff}
.scroll-reveal{opacity:0;transform:translateY(18px);transition:opacity 560ms ease-out,transform 560ms ease-out;will-change:opacity,transform}.scroll-reveal.is-visible{opacity:1;transform:translateY(0)}
@media(max-width:850px){.hero-grid,.about-grid,.faq-layout,.contact-layout{grid-template-columns:1fr;gap:34px}.hero{padding-top:64px}.hero-visual{min-height:410px}.number-item{padding-inline:12px}.process-list{grid-template-columns:1fr 1fr;gap:28px 18px}.tutor-grid{grid-template-columns:1fr 1fr}.tip-row{grid-template-columns:135px 1fr;gap:8px 18px}.tip-row p,.tip-row a{grid-column:2}.tips-heading{display:block}.gallery-image-wrap{aspect-ratio:16/10}}
@media(max-width:600px){.container{width:min(calc(100% - 32px),var(--width))}.nav{min-height:68px}.nav-links,.header .nav>.button{display:none}.menu-toggle{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 15px;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--navy);font-size:13px;font-weight:700}.mobile-menu:not([hidden]){position:absolute;top:100%;right:16px;left:16px;z-index:20;display:grid;gap:4px;padding:10px;border:1px solid var(--line);border-radius:16px;background:#fff;box-shadow:0 16px 40px #18335324}.mobile-menu a{padding:12px;border-radius:10px;font-size:14px;font-weight:700}.hero{padding:56px 0 38px}h1{font-size:clamp(42px,12vw,58px);letter-spacing:-2.5px}.hero-copy{font-size:15px}.hero-visual{min-height:370px}.orbit{width:310px;height:310px}.journey-card{padding:20px}.floating-tag{right:0;bottom:5px}.number-grid{grid-template-columns:1fr 1fr;row-gap:14px}.number-item:nth-child(3){padding-left:0;border-left:0}.number-item strong{font-size:22px}.section{padding:66px 0}.program-grid{grid-template-columns:1fr}.program-card{min-height:260px;padding:22px}.process-list{grid-template-columns:1fr;gap:20px}.process-step{padding:16px 0 0 20px;border-top:0;border-left:1px solid #cbd7e5}.process-step:before{top:20px;left:-5px}.tutor-card{padding:16px}.gallery-image-wrap{aspect-ratio:4/3}.gallery-caption-row{align-items:flex-start;flex-direction:column;gap:4px;padding:18px 16px 14px}.gallery-thumbnails{gap:6px;padding:0 16px 16px}.tip-row{grid-template-columns:1fr;gap:9px;padding:18px 4px}.tip-row p,.tip-row a{grid-column:auto}.faq-layout,.contact-layout{gap:28px}.contact-form{padding:20px}.footer-content{align-items:flex-start;flex-direction:column}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.scroll-reveal{opacity:1;transform:none;transition:none}}



/* Foto tutor ditampilkan utuh tanpa pemotongan */
.tutor-photo {
  display: block;
  width: 100%;
  height: 220px;
  margin-bottom: 18px;
  border-radius: 12px;
  background: #f4f7fb;
  object-fit: contain;
  object-position: center;
}
@media(max-width:600px) {
  .tutor-photo { height: 170px; margin-bottom: 14px; }
}

/* Kartu tutor mengikuti rasio asli foto potret 9:16 */
.tutor-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 1000px;
  gap: 22px;
}
.tutor-card {
  display: grid;
  grid-template-columns: minmax(150px, .8fr) 1fr;
  align-content: center;
  align-items: center;
  column-gap: 22px;
  row-gap: 5px;
  padding: 22px;
}
.tutor-photo {
  grid-column: 1;
  grid-row: 1 / span 3;
  width: 100%;
  height: auto;
  aspect-ratio: 9 / 16;
  margin: 0;
  border-radius: 14px;
  object-fit: contain;
}
.tutor-role { grid-column: 2; align-self: end; margin: 0; }
.tutor-card h3 { grid-column: 2; align-self: start; }
.tutor-card > p:last-child { grid-column: 2; align-self: start; margin: 4px 0 0; }
@media(max-width:850px) {
  .tutor-grid { grid-template-columns: 1fr; max-width: 760px; }
  .tutor-card { grid-template-columns: minmax(180px, .8fr) 1fr; }
}
@media(max-width:600px) {
  .tutor-card { grid-template-columns: minmax(118px, .75fr) 1fr; gap: 7px 14px; padding: 15px; }
  .tutor-photo { border-radius: 10px; }
}

.number-item strong { display:inline-block; font-variant-numeric:tabular-nums; transition:color .2s ease,transform .2s ease; }
.number-item strong.is-counting { color:var(--navy); transform:translateY(-2px); }


/* Footer lengkap Lunga Abroad */
.site-footer{position:relative;overflow:hidden;padding:64px 0 24px;border-top:7px solid var(--orange);background:#071a35;color:#d7e0ec}
.site-footer:before{position:absolute;top:-150px;right:8%;width:330px;height:330px;border-radius:50%;background:#f4783515;content:"";filter:blur(5px);pointer-events:none}
.footer-grid{position:relative;display:grid;grid-template-columns:1.5fr .8fr 1fr .8fr;gap:46px;padding-bottom:36px}
.footer-brand{max-width:360px}
.footer-logo{display:inline-flex;align-items:center;gap:11px;margin-bottom:15px;color:#fff;font-family:Georgia,serif;font-size:24px;font-weight:700}
.footer-logo img{width:42px;height:42px;object-fit:contain;border-radius:5px;background:#fff}
.footer-logo>span>span,.footer-logo small{color:var(--orange)}
.footer-logo small{font-size:14px}
.footer-brand>p{margin:0 0 12px;color:#d7e0ec;font-size:14px}
.footer-brand .footer-company{margin-top:18px;color:#aebdd0;font-size:12px}
.footer-company strong{color:#fff;font-size:11px;letter-spacing:.2px}
.footer-column{display:flex;flex-direction:column;align-items:flex-start;gap:11px}
.footer-column h2{margin:4px 0 5px;color:#fff;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase}
.footer-column>a{color:#d7e0ec;font-size:14px;transition:color .18s,transform .18s}
.footer-column>a:hover{transform:translateX(3px);color:#ff9b63}
.footer-column>a span:last-child{color:#ff9b63}
.social-mark{width:22px;height:22px;display:inline-grid;place-items:center;margin-right:7px;border:1px solid #ffffff48;border-radius:7px;color:#ff9b63;font-size:11px;font-weight:800}
.footer-bottom{position:relative;display:flex;justify-content:space-between;gap:24px;padding-top:18px;border-top:1px solid #ffffff2e;color:#aebdd0;font-size:11px}
.footer-bottom p{margin:0}
.footer-bottom p:last-child{max-width:650px;text-align:right}
@media(max-width:850px){.footer-grid{grid-template-columns:1.2fr 1fr;gap:34px}.footer-bottom{flex-direction:column}.footer-bottom p:last-child{text-align:left}}
@media(max-width:600px){.site-footer{padding:48px 0 22px}.footer-grid{grid-template-columns:1fr 1fr;gap:28px 20px}.footer-brand{grid-column:1/-1}.footer-bottom{gap:10px}}

/* Penyempurnaan footer: tanpa garis dan gradasi dekoratif */
.site-footer{border-top:0;font-family:Arial,"Segoe UI",sans-serif;font-weight:400}
.site-footer:before{display:none}
.footer-brand>p{font-size:15px;line-height:1.75;font-weight:400}
.footer-brand .footer-company{font-size:13px}
.footer-company strong{font-size:12px;font-weight:600}
.footer-column h2{font-size:13px;font-weight:700;letter-spacing:1px}
.footer-column>a{font-size:15px;font-weight:400}
.footer-bottom{font-size:12px;line-height:1.7}

/* Garis progres mengikuti posisi scroll */
.process-list { position:relative; }
.process-list::before,
.process-list::after { position:absolute; z-index:0; top:0; left:0; height:2px; content:""; }
.process-list::before { width:100%; background:#cbd7e5; }
.process-list::after { width:100%; background:var(--orange); transform:scaleX(var(--process-progress,0)); transform-origin:left center; }
.process-step { z-index:1; border-top:0; }
.process-step::before { z-index:2; }
@media(max-width:600px) {
  .process-list::before,
  .process-list::after { top:0; left:0; width:2px; height:100%; transform:scaleY(var(--process-progress,0)); transform-origin:center top; }
  .process-step { border-left:0; }
  .process-step::before { left:-4px; }
}

/* Berita terbaru */
.news-section{background:#fff}
.news-heading{display:flex;justify-content:space-between;align-items:end;gap:30px}
.news-heading>p{max-width:370px;color:var(--muted)}
.news-grid{display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:16px;align-items:stretch}
.news-card{display:flex;flex-direction:column;align-items:flex-start;min-height:310px;padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff;transition:transform .2s,box-shadow .2s}
.news-card:hover{transform:translateY(-3px);box-shadow:0 16px 34px #18335314}
.news-featured{background:#f5f8fc;border-color:#d9e3ef}
.news-meta{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;width:100%;margin-bottom:18px}
.news-meta span{padding:5px 9px;border-radius:999px;background:#fff0e7;color:#a8491d;font-size:10px;font-weight:800;letter-spacing:.4px;text-transform:uppercase}
.news-meta time{color:var(--muted);font-size:11px}
.news-card h3{margin:0 0 10px;font-size:19px;line-height:1.3;letter-spacing:-.3px}
.news-featured h3{font-size:23px}
.news-card p{margin:0 0 20px;color:var(--muted);font-size:13px}
.news-card a{margin-top:auto;color:var(--navy);font-size:12px;font-weight:800}
.news-card a span{color:var(--orange)}
.news-disclaimer{margin:18px 0 0;color:var(--muted);font-size:11px}
@media(max-width:850px){.news-heading{display:block}.news-grid{grid-template-columns:1fr 1fr}.news-featured{grid-column:1/-1;min-height:auto}}
@media(max-width:600px){.news-grid{grid-template-columns:1fr}.news-featured{grid-column:auto}.news-card{min-height:250px;padding:20px}}

/* News Update sebagai daftar horizontal dengan foto sumber */
.news-grid{display:block}
.news-list{border-top:1px solid var(--line)}
.news-row{display:grid;grid-template-columns:190px minmax(0,1fr);gap:24px;align-items:center;padding:20px 14px;border-bottom:1px solid var(--line);background:transparent;transition:background .18s ease}
.news-row:hover{background:#f5f8fc}
.news-image-link{display:block;overflow:hidden;border-radius:12px;background:#e7edf4}
.news-thumb{display:block;width:100%;height:120px;object-fit:cover;transition:transform .3s ease}
.news-row:hover .news-thumb{transform:scale(1.025)}
.news-content{min-width:0}
.news-meta{display:flex;justify-content:flex-start;gap:12px;margin-bottom:7px}
.news-content h3{margin:0 0 6px;font-size:18px;line-height:1.3}
.news-content p{margin:0 0 8px;color:var(--muted);font-size:13px}
.news-content>a{color:var(--navy);font-size:12px;font-weight:800}
.news-content>a span{color:var(--orange)}
.news-draw{background:#fbfcfe}
.news-draw .news-meta span{background:#eaf1fa;color:#1c477d}
.news-disclaimer{margin-top:18px;color:var(--muted);font-size:11px;line-height:1.6}
@media(max-width:600px){.news-row{grid-template-columns:110px minmax(0,1fr);gap:13px;padding:15px 4px}.news-thumb{height:100px}.news-content h3{font-size:15px}.news-content p{font-size:12px}.news-meta{display:block}.news-meta time{display:block;margin-top:4px}}

/* Hero panorama Kanada, tanpa kartu visual di sisi kanan */
.hero {
  min-height: 620px;
  display: flex;
  align-items: center;
  background-image:
    linear-gradient(90deg, rgba(255,255,255,.93) 0%, rgba(255,255,255,.82) 34%, rgba(255,255,255,.36) 62%, rgba(255,255,255,.06) 100%),
    url("./assets/img/hero-canada-autumn.jpg");
  background-position: center, center 56%;
  background-size: cover;
  background-repeat: no-repeat;
}
.hero-grid { display:block; width:100%; }
.hero-grid > div:first-child { max-width:760px; }
.hero-visual { display:none; }
@media(max-width:850px) {
  .hero { min-height:560px; background-image:linear-gradient(90deg,rgba(255,255,255,.94),rgba(255,255,255,.74)),url("./assets/img/hero-canada-autumn.jpg"); }
}
@media(max-width:600px) {
  .hero { min-height:600px; background-position:center,62% center; }
  .hero-grid > div:first-child { max-width:100%; }
}

/* Header kaca buram yang tetap aktif saat halaman digulir */
.header {
  background: rgba(255, 255, 255, .78);
  backdrop-filter: blur(18px) saturate(145%);
  -webkit-backdrop-filter: blur(18px) saturate(145%);
  border-bottom-color: rgba(220, 229, 239, .72);
}

/* Pertahankan lebar container hero agar judul tidak menempel ke tepi layar */
.hero-grid {
  display: block;
  width: auto;
}
.hero-grid > div:first-child {
  width: min(100%, 760px);
  margin-left: 8px;
}
.hero h1,
.section-heading h2,
.about-copy h2,
.contact-layout h2 {
  padding-left: 8px;
}

/* Header lebih buram, tanpa garis pemisah, di atas latar hero */
.header {
  background: rgba(255, 255, 255, .82);
  backdrop-filter: blur(26px) saturate(155%);
  -webkit-backdrop-filter: blur(26px) saturate(155%);
  border-bottom: 0;
  box-shadow: none;
}

/* Tarik pemandangan ke belakang header dan posisikan headline dekat kiri */
.hero {
  margin-top: -78px;
  padding-top: 166px;
}
.hero-grid.container {
  width: min(var(--width), calc(100% - 80px));
  margin-left: 40px;
  margin-right: auto;
}
.hero-grid > div:first-child {
  width: min(100%, 760px);
  margin-left: 0;
}
.hero h1,
.section-heading h2,
.about-copy h2,
.contact-layout h2 {
  padding-left: 0;
}
@media(max-width:850px) {
  .hero { margin-top: -78px; padding-top: 142px; }
  .hero-grid.container { width: calc(100% - 48px); margin-left:24px; }
}
@media(max-width:600px) {
  .hero { margin-top: -68px; padding-top: 124px; }
  .hero-grid.container { width: calc(100% - 40px); margin-left:20px; }
}

/* Wordmark header menyamping mengikuti logo Lunga Abroad */
.header .logo { display:inline-flex; align-items:center; gap:8px; color:var(--navy); text-decoration:none; }
.header .site-logo-mark { display:block; width:42px; height:42px; object-fit:contain; flex:0 0 auto; }
.header .logo-type { display:inline-flex; align-items:baseline; gap:3px; font-family:Arial,Helvetica,sans-serif; font-size:21px; font-weight:900; line-height:1; letter-spacing:-1.15px; }
.header .logo-lunga { color:var(--navy); }
.header .logo-abroad { color:var(--orange); letter-spacing:-.8px; }
@media(max-width:600px) {
  .header .site-logo-mark { width:36px; height:36px; }
  .header .logo-type { font-size:18px; }
}

/* Huruf A terakhir meniru aksen oranye pada wordmark asli */
.header .logo-lunga { color:var(--navy); }
.header .logo-mark-a { display:inline-block; margin-left:-.4px; color:var(--orange); font-family:"Arial Black",Arial,sans-serif; font-weight:900; font-style:italic; letter-spacing:-1.4px; transform:skewX(-4deg); }

/* Wordmark LUNGA kembali ke bentuk sebelumnya dengan warna navy */
.header .logo-lunga { color:var(--navy); font-family:Arial,Helvetica,sans-serif; font-style:normal; font-weight:900; letter-spacing:-1.15px; transform:none; }
.header .logo-mark-a { margin-left:0; color:inherit; font:inherit; letter-spacing:inherit; transform:none; }

/* Hover tombol: halo oranye lembut dan pembesaran ringan */
.button,
button {
  position: relative;
  transition: transform 180ms ease, box-shadow 220ms ease, background-color 180ms ease, border-color 180ms ease;
}
.button:hover,
button:hover {
  z-index: 1;
  transform: scale(1.035);
  box-shadow: 0 0 0 5px rgba(244,120,53,.13), 0 8px 22px rgba(244,120,53,.18);
}
.button:active,
button:active {
  transform: scale(.985);
}
.button:focus-visible,
button:focus-visible {
  outline: 3px solid rgba(244,120,53,.7);
  outline-offset: 4px;
}
@media(hover:none) {
  .button:hover,
  button:hover { transform:none; box-shadow:none; }
}
@media(prefers-reduced-motion:reduce) {
  .button,
  button { transition:none; }
}


/* Hover profil tutor: aksen oranye dan pembesaran halus */
.tutor-card {
  border-color:var(--line);
  transition:transform 220ms ease,border-color 220ms ease,box-shadow 220ms ease;
}
@media(hover:hover) {
  .tutor-card:hover {
    transform:translateY(-2px) scale(1.012);
    border-color:rgba(244,120,53,.62);
    box-shadow:0 12px 28px rgba(244,120,53,.2);
  }
}
@media(hover:none) {
  .tutor-card:hover { transform:none; box-shadow:none; }
}
@media(prefers-reduced-motion:reduce) {
  .tutor-card { transition:none; }
}

/* Header sedikit lebih transparan, blur tetap kuat */
.header { background:rgba(255,255,255,.74); }

/* Grid pilihan program dan durasi belajar */
.choice-section{background:#f5f8fc}
.choice-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;align-items:stretch}
.choice-card{position:relative;display:flex;flex-direction:column;align-items:flex-start;min-height:340px;padding:22px;border:1px solid var(--line);border-radius:18px;background:#fff;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}
.choice-card:hover{transform:translateY(-3px);border-color:#f3b08c;box-shadow:0 12px 28px rgba(244,120,53,.12)}
.choice-index{position:absolute;top:20px;right:20px;color:#a6b3c4;font-size:11px;font-weight:800;letter-spacing:.8px}
.choice-type{margin:0 28px 8px 0;color:var(--orange);font-size:10px;font-weight:800;letter-spacing:.9px;text-transform:uppercase}
.choice-card h3{margin:0;font-size:20px;line-height:1.2;letter-spacing:-.5px}
.choice-desc{margin:13px 0 18px;color:var(--muted);font-size:13px}
.choice-duration{display:flex;flex-direction:column;gap:0;margin:auto 0 18px;padding-top:15px;border-top:1px solid var(--line);width:100%}
.choice-duration strong{font-size:19px;line-height:1.25}
.choice-duration span{color:var(--muted);font-size:11px}
.choice-card>a{font-size:12px;font-weight:800}
.choice-card>a span{color:var(--orange)}
.choice-card-featured{border-color:var(--navy);background:var(--navy);color:#fff}
.choice-card-featured .choice-index,.choice-card-featured .choice-desc,.choice-card-featured .choice-duration span{color:#c2cede}
.choice-card-featured .choice-duration{border-color:#ffffff30}
@media(max-width:1000px){.choice-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:600px){.choice-grid{grid-template-columns:1fr}.choice-card{min-height:290px}}

/* Halaman detail pilihan program */
.program-hero{position:relative;overflow:hidden;padding:84px 0 76px;background:radial-gradient(ellipse at 88% 8%,#f4783520,transparent 27%),linear-gradient(135deg,#f4f8fd 0%,#fff 74%)}
.program-hero:after{position:absolute;right:-105px;bottom:-215px;width:430px;height:430px;border:1px solid #dce5ef;border-radius:50%;content:"";pointer-events:none}
.program-hero-content{position:relative;z-index:1;max-width:var(--width)}
.program-hero h1{max-width:850px;font-size:clamp(42px,6.2vw,72px)}
.program-hero-copy{max-width:630px;margin:22px 0 28px;color:var(--muted);font-size:17px}
.program-hero-meta{display:flex;align-items:center;flex-wrap:wrap;gap:14px}
.program-duration-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 15px;border:1px solid var(--line);border-radius:999px;background:#fff;color:#536881;font-size:13px}
.program-duration-pill>span{color:var(--orange);font-size:18px}.program-duration-pill strong{color:var(--navy)}
.program-level-section{background:#fff}
.level-tabs{display:flex;gap:9px;margin-bottom:16px}
.level-tab{min-width:70px;padding:11px 20px;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--navy);font-weight:800;cursor:pointer;transition:background .18s,color .18s,border-color .18s,transform .18s}
.level-tab:hover{transform:translateY(-2px);border-color:var(--orange)}.level-tab.is-active{border-color:var(--orange);background:var(--orange);color:#fff}
.level-panel{display:grid;grid-template-columns:minmax(0,1fr) 210px;align-items:center;gap:30px;padding:30px;border:1px solid var(--line);border-radius:var(--radius);background:#f7f9fc}
.level-kicker{margin:0 0 8px;color:var(--orange);font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase}
.level-panel h3{margin:0;font-size:clamp(21px,3vw,28px);line-height:1.25;letter-spacing:-.7px}
.level-panel>div:first-child>p:last-child{max-width:670px;margin:10px 0 0;color:var(--muted);font-size:14px}
.level-hours{display:grid;gap:4px;padding:20px;border-left:1px solid var(--line)}.level-hours strong{color:var(--navy);font-size:28px}.level-hours span{color:var(--muted);font-size:11px}
.program-note{margin:15px 0 0;color:var(--muted);font-size:12px}
.estimate-section{background:#f5f8fc}
.estimate-card{display:grid;grid-template-columns:1fr .75fr;gap:26px;padding:26px;border:1px solid var(--line);border-radius:var(--radius);background:#fff;box-shadow:0 16px 44px #1833530d}
.estimate-fields{display:grid;align-content:start;gap:16px}.estimate-fields label{display:grid;gap:7px;color:#41536a;font-size:12px;font-weight:700}
.estimate-fields select{width:100%;min-height:48px;padding:0 13px;border:1px solid var(--line);border-radius:11px;background:#fff;color:var(--navy);font-size:14px}
.estimate-fields select:focus-visible,.level-tab:focus-visible{outline:3px solid #f4783555;outline-offset:2px}
.estimate-hint{margin:0;color:var(--muted);font-size:13px}
.estimate-result{display:grid;align-content:center;min-height:195px;padding:25px;border-radius:18px;background:var(--navy);color:#fff}
.estimate-result>span{color:#c2cede;font-size:12px;font-weight:700}.estimate-result strong{margin:8px 0;color:var(--orange);font-size:clamp(28px,4vw,42px);line-height:1.1;letter-spacing:-1.5px}.estimate-result p{margin:0;color:#d7e0ec;font-size:12px}
.exam-section{background:#fff}
.exam-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:16px}
.exam-table{width:100%;border-collapse:collapse;text-align:left;font-size:13px}.exam-table th,.exam-table td{padding:16px 18px;border-bottom:1px solid var(--line);vertical-align:top}.exam-table thead{background:#f5f8fc;color:#536881;font-size:11px;letter-spacing:.5px;text-transform:uppercase}.exam-table tbody tr:last-child th,.exam-table tbody tr:last-child td{border-bottom:0}.exam-table tbody th{white-space:nowrap}.exam-table tbody td{color:var(--muted)}
.exam-skills{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:20px 0 0;padding:0;list-style:none}.exam-skills li{display:grid;gap:4px;padding:16px;border:1px solid var(--line);border-radius:14px;background:#fff}.exam-skills li span{color:var(--orange);font-size:10px;font-weight:800}.exam-skills li strong{font-size:14px}.exam-skills li small{color:var(--muted);font-size:10px}
.program-cta-section{background:var(--navy);color:#fff}.program-cta{display:flex;align-items:center;justify-content:space-between;gap:32px}.program-cta .eyebrow{color:#c2cede}.program-cta h2{max-width:650px;margin:0;font-size:clamp(32px,4.5vw,50px);line-height:1.12;letter-spacing:-1.7px}.program-cta h2 span{color:var(--orange)}.program-cta>div>p:last-child{max-width:600px;margin:14px 0 0;color:#c2cede}.program-cta .button{flex:0 0 auto}
.program-page .site-footer{padding-block:22px}.program-page-footer{display:flex;justify-content:space-between;gap:16px}
@media(max-width:700px){.program-hero{padding:60px 0 52px}.program-hero-copy{font-size:15px}.level-panel{grid-template-columns:1fr;gap:18px;padding:22px}.level-hours{padding:15px 0 0;border-top:1px solid var(--line);border-left:0}.estimate-card{grid-template-columns:1fr;padding:18px}.estimate-result{min-height:150px}.exam-skills{grid-template-columns:1fr 1fr}.program-cta{align-items:flex-start;flex-direction:column}.program-cta .button{align-self:flex-start}}
@media(max-width:420px){.level-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}.level-tab{min-width:0;padding:10px 8px}.program-duration-pill{font-size:11px}.exam-table{min-width:640px}}

/* Ringkasan benefit, sesi, dan jadwal tiap program */
.program-detail-section{background:#f5f8fc}
.program-facts-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:0 0 18px}
.program-fact-card{display:flex;min-height:112px;flex-direction:column;justify-content:space-between;gap:12px;padding:18px;border:1px solid var(--line);border-radius:16px;background:#fff}
.program-fact-card span{color:var(--muted);font-size:11px;font-weight:700}
.program-fact-card strong{font-size:clamp(15px,1.7vw,20px);line-height:1.3;letter-spacing:-.3px}
.program-schedule-panel{display:grid;grid-template-columns:minmax(220px,.7fr) minmax(0,1.3fr);gap:24px;align-items:center;margin-bottom:16px;padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff}
.program-schedule-heading .eyebrow,.program-benefit-panel .eyebrow,.program-fit-panel .eyebrow{margin-bottom:8px}
.program-schedule-heading h3,.program-benefit-panel h3,.program-fit-panel h3{margin:0;font-size:21px;line-height:1.25;letter-spacing:-.5px}
.program-schedule-heading>p:last-child{margin:8px 0 0;color:var(--muted);font-size:12px}
.program-schedule-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:0;padding:0;list-style:none}
.program-schedule-list li{display:grid;align-content:start;gap:7px;min-height:80px;padding:13px;border-radius:12px;background:#f5f8fc}
.program-schedule-list span{color:var(--muted);font-size:10px;font-weight:700}
.program-schedule-list strong{font-size:12px;line-height:1.45}
.program-benefit-layout{display:grid;grid-template-columns:1.15fr .85fr;gap:16px}
.program-benefit-panel,.program-fit-panel{padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff}
.program-fit-panel{background:#edf4fc}
.program-check-list{display:grid;gap:9px;margin:18px 0 0;padding:0;list-style:none}
.program-check-list li{position:relative;padding-left:25px;color:#536881;font-size:12px;line-height:1.6}
.program-check-list li:before{position:absolute;top:1px;left:0;display:grid;width:16px;height:16px;place-items:center;border-radius:50%;background:#fff0e7;color:var(--orange);content:"✓";font-size:10px;font-weight:900}
.program-assessment-note{margin:14px 0 0;padding:14px 16px;border-left:3px solid var(--orange);border-radius:0 10px 10px 0;background:#fff;color:#536881;font-size:12px;line-height:1.6}
.program-assessment-note[hidden]{display:none}
@media(max-width:850px){.program-facts-grid{grid-template-columns:1fr 1fr}.program-schedule-panel{grid-template-columns:1fr;gap:17px}.program-benefit-layout{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.program-facts-grid{gap:8px}.program-fact-card{min-height:100px;padding:14px}.program-fact-card strong{font-size:15px}.program-schedule-panel,.program-benefit-panel,.program-fit-panel{padding:18px}.program-schedule-list{grid-template-columns:1fr}.program-schedule-list li{min-height:0}.program-benefit-layout{grid-template-columns:1fr}.program-check-list li{font-size:12px}}

/* Halaman khusus Francophone Mobility */
.fm-hero{position:relative;overflow:hidden;padding:88px 0 78px;background:radial-gradient(ellipse at 85% 20%,#f4783524,transparent 28%),linear-gradient(135deg,#f4f8fd,#fff 72%)}
.fm-hero:after{position:absolute;right:-115px;bottom:-240px;width:500px;height:500px;border:1px solid #dce5ef;border-radius:50%;content:"";pointer-events:none}
.fm-hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.3fr) minmax(280px,.7fr);align-items:center;gap:54px}
.fm-hero-copy{max-width:760px}.fm-hero h1{max-width:740px;font-size:clamp(44px,6.3vw,76px)}
.fm-tagline{margin:18px 0 0;color:var(--orange);font-size:clamp(17px,2.3vw,23px);font-weight:700;letter-spacing:-.3px}
.fm-lead{max-width:660px;margin:14px 0 28px;color:var(--muted);font-size:16px}
.fm-hero-actions{display:flex;flex-wrap:wrap;gap:11px}.fm-hero-actions .button-secondary{background:#ffffffc9}
.fm-snapshot{position:relative;padding:25px;border:1px solid #dce5ef;border-radius:22px;background:#ffffffed;box-shadow:0 22px 60px #18335318}
.fm-snapshot-label{margin:0 0 10px;color:var(--orange);font-size:10px;font-weight:800;letter-spacing:1.3px;text-transform:uppercase}
.fm-snapshot-row{display:grid;gap:3px;padding:14px 0;border-top:1px solid var(--line)}.fm-snapshot-row span{color:var(--muted);font-size:11px}.fm-snapshot-row strong{font-size:14px;line-height:1.4}
.fm-snapshot-note{margin:8px 0 0;color:var(--muted);font-size:11px;line-height:1.6}
.fm-overview{background:#fff}.fm-overview-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:64px;align-items:start}.fm-overview-grid h2,.fm-pr-grid h2{margin:0;font-size:clamp(32px,4vw,48px);line-height:1.12;letter-spacing:-1.8px}
.fm-overview-copy p,.fm-pr-copy>p{margin:0 0 16px;color:var(--muted);font-size:14px}.fm-overview-copy strong{color:var(--navy)}
.fm-inline-link{display:inline-flex;align-items:center;gap:7px;margin-top:3px;color:var(--navy);font-size:12px;font-weight:800}.fm-inline-link span{color:var(--orange)}.fm-inline-link:hover{color:var(--orange)}
.fm-requirements{background:#f5f8fc}.fm-requirement-list{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.fm-requirement-card{display:grid;grid-template-columns:42px 1fr;gap:15px;padding:20px;border:1px solid #dce5ef;border-radius:16px;background:#ffffffd9}
.fm-requirement-card>span,.fm-support-steps>li>span{color:var(--orange);font-size:11px;font-weight:800;letter-spacing:.6px}
.fm-requirement-card h3,.fm-support-steps h3{margin:0;font-size:16px;line-height:1.35}.fm-requirement-card p,.fm-support-steps p{margin:7px 0 0;color:var(--muted);font-size:12px;line-height:1.65}
.fm-source-note{margin:17px 0 0;color:var(--muted);font-size:11px;line-height:1.65}
.fm-pr-section{background:var(--navy);color:#fff}.fm-pr-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:62px;align-items:start}.fm-pr-section .eyebrow{color:#c2cede}.fm-pr-grid h2 span{color:var(--orange)}.fm-pr-copy>p{color:#c2cede}
.fm-pr-highlight{display:grid;grid-template-columns:105px 1fr;align-items:center;gap:18px;margin:20px 0;padding:20px;border:1px solid #ffffff2b;border-radius:16px;background:#ffffff0b}.fm-pr-highlight strong{color:var(--orange);font-size:32px;letter-spacing:-1px}.fm-pr-highlight span{color:#e2e8f0;font-size:12px;line-height:1.65}
.fm-inline-link-light{color:#fff}.fm-pr-copy .fm-source-note{color:#c2cede}
.fm-support{background:#fff}.fm-support-steps{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:0;margin:0;padding:0;list-style:none}
.fm-support-steps li{position:relative;min-height:170px;padding:20px 17px 0 0;border-top:1px solid #cbd7e5}.fm-support-steps li:before{position:absolute;top:-5px;left:0;width:9px;height:9px;border-radius:50%;background:var(--orange);content:""}.fm-support-steps>li>span{display:block;margin-bottom:12px}
.fm-final-cta{background:linear-gradient(125deg,#0b1d36,#17365b);color:#fff}.fm-final-cta-inner{display:flex;align-items:center;justify-content:space-between;gap:32px}.fm-final-cta .eyebrow{color:#c2cede}.fm-final-cta h2{margin:0;font-size:clamp(32px,4.5vw,50px);line-height:1.12;letter-spacing:-1.8px}.fm-final-cta h2 span{color:var(--orange)}.fm-final-cta-inner>div>p:last-child{margin:14px 0 0;color:#c2cede}.fm-final-cta .button{flex:0 0 auto}
.fm-disclaimer{padding:24px 0;background:#eef3f9;color:#536881;font-size:11px;line-height:1.7}.fm-disclaimer p{margin:0}.fm-disclaimer strong{color:var(--navy)}.fm-official-links{display:flex;flex-wrap:wrap;gap:7px 18px;margin-top:9px!important}.fm-official-links a{color:var(--navy);font-weight:700;text-decoration:underline;text-decoration-color:#f4783580;text-underline-offset:3px}
.fm-disclaimer+.site-footer{border-top:0}
.page-back-button{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;gap:8px;min-height:42px;padding:0 13px;border:1px solid var(--line);border-radius:999px;background:#ffffffdc;color:var(--navy);font-size:12px;font-weight:700;transition:transform .18s ease,border-color .18s ease,background .18s ease}
.page-back-button svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}
.page-back-button:hover{transform:translateX(-2px);border-color:#f3b08c;background:#fff8f3;color:var(--navy)}
.page-back-button:focus-visible{outline:3px solid #f4783555;outline-offset:2px}
.header .nav:has(.page-back-button){justify-content:flex-start;gap:18px}
.header .nav:has(.page-back-button) .nav-links{margin-left:auto}
.header .nav:has(.page-back-button)>.button{margin-left:12px}
@media(max-width:850px){.fm-hero-grid,.fm-overview-grid,.fm-pr-grid{grid-template-columns:1fr;gap:30px}.fm-snapshot{max-width:540px}.fm-support-steps{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 20px}.fm-support-steps li{min-height:145px}}
@media(max-width:600px){.fm-hero{padding:62px 0 54px}.fm-hero-grid{gap:28px}.fm-lead{font-size:14px}.fm-snapshot{padding:20px}.fm-requirement-list{grid-template-columns:1fr}.fm-requirement-card{padding:17px}.fm-pr-highlight{grid-template-columns:1fr;gap:5px;padding:17px}.fm-support-steps{grid-template-columns:1fr;gap:12px}.fm-support-steps li{min-height:0;padding:15px 0 0 20px;border-top:0;border-left:1px solid #cbd7e5}.fm-support-steps li:before{top:19px;left:-5px}.fm-final-cta-inner{align-items:flex-start;flex-direction:column}.fm-official-links{display:grid;gap:7px}.fm-disclaimer{font-size:10px}.header .nav:has(.page-back-button){gap:9px}.page-back-button{width:40px;min-width:40px;min-height:40px;padding:0}.page-back-button span{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}}

/* Halaman Express Entry – French-Language Proficiency */
.ee-hero{background:radial-gradient(ellipse at 86% 18%,#f4783525,transparent 29%),linear-gradient(132deg,#f3f7fc,#fff 72%)}
.ee-hero h1 span{display:block;max-width:760px}
.ee-snapshot{border-color:#d7e3f1;box-shadow:0 24px 64px #1833531b}
.ee-requirement-list .fm-requirement-card{min-height:142px}
.ee-crs-section{background:var(--navy);color:#fff}
.ee-crs-layout{display:grid;grid-template-columns:.85fr 1.15fr;align-items:center;gap:54px}
.ee-crs-section .eyebrow{color:#c2cede}.ee-crs-copy h2{margin:0;font-size:clamp(34px,4.2vw,50px);line-height:1.1;letter-spacing:-1.8px}.ee-crs-copy h2 span{color:var(--orange)}.ee-crs-copy>p:not(.eyebrow){max-width:520px;margin:16px 0;color:#c2cede;font-size:14px}.ee-crs-table-wrap{overflow:hidden;border:1px solid #ffffff2d;border-radius:16px;background:#ffffff0b}
.ee-crs-table{width:100%;border-collapse:collapse;text-align:left;font-size:13px}.ee-crs-table th,.ee-crs-table td{padding:18px;border-bottom:1px solid #ffffff20;vertical-align:top}.ee-crs-table thead{color:#c2cede;font-size:10px;letter-spacing:.7px;text-transform:uppercase}.ee-crs-table tbody tr:last-child th,.ee-crs-table tbody tr:last-child td{border-bottom:0}.ee-crs-table tbody th{font-weight:600}.ee-crs-table tbody td{width:110px;color:var(--orange);font-size:26px;font-weight:800;text-align:center}.ee-crs-footnote{margin:0;padding:0 18px 17px;color:#c2cede;font-size:10px;line-height:1.6}
.ee-support-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.ee-support-card{min-height:205px;padding:23px;border:1px solid var(--line);border-radius:18px;background:#f8fafd}.ee-support-card>span{display:grid;width:34px;height:34px;place-items:center;margin-bottom:20px;border-radius:11px;background:#fff0e7;color:var(--orange);font-size:10px;font-weight:800}.ee-support-card h3{margin:0;font-size:17px;line-height:1.3}.ee-support-card p{margin:9px 0 0;color:var(--muted);font-size:12px;line-height:1.65}
.ee-final-cta{background:linear-gradient(125deg,#0b1d36,#17365b);color:#fff}.ee-final-cta .eyebrow{color:#c2cede}.ee-final-cta h2{margin:0;font-size:clamp(32px,4.5vw,50px);line-height:1.12;letter-spacing:-1.8px}.ee-final-cta h2 span{color:var(--orange)}.ee-final-cta-inner>div>p:last-child{margin:14px 0 0;color:#c2cede}.ee-final-cta .button{flex:0 0 auto}
@media(max-width:850px){.ee-crs-layout{grid-template-columns:1fr;gap:28px}.ee-support-grid{grid-template-columns:1fr 1fr}.ee-support-card:last-child{grid-column:1/-1}}
@media(max-width:600px){.ee-hero h1 span{font-size:.73em;line-height:1.12}.ee-requirement-list .fm-requirement-card{min-height:0}.ee-crs-table th,.ee-crs-table td{padding:14px 12px}.ee-crs-table tbody td{width:72px;font-size:22px}.ee-support-grid{grid-template-columns:1fr}.ee-support-card,.ee-support-card:last-child{grid-column:auto;min-height:0;padding:19px}.ee-support-card>span{margin-bottom:14px}}

/* Deretan program belajar: empat kartu terlihat di desktop, program berikutnya digeser ke samping. */
.choice-scroll-hint{margin:0 0 12px;color:var(--muted);font-size:12px}
.choice-carousel{position:relative;padding:0 48px}
.choice-scroll-button{display:grid;width:38px;height:38px;place-items:center;border:1px solid var(--line);border-radius:50%;background:#fff;color:var(--navy);font-size:19px;cursor:pointer;transition:transform .18s ease,border-color .18s ease,color .18s ease}
.choice-scroll-button:hover{transform:scale(1.05);border-color:var(--orange);color:var(--orange)}
.choice-scroll-button:focus-visible{outline:3px solid #f4783555;outline-offset:2px}
.choice-scroll-prev,.choice-scroll-next{position:absolute;z-index:2;top:calc(50% - 10px);transform:translateY(-50%);box-shadow:0 5px 16px #10233b18}
.choice-scroll-prev{left:0}.choice-scroll-next{right:0}
.choice-scroll-prev:hover,.choice-scroll-next:hover{transform:translateY(-50%) scale(1.05)}
.choice-grid#choice-program-track{display:grid;grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:calc((100% - 42px)/4);gap:14px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;scroll-padding-inline:2px;padding:2px 2px 14px;scrollbar-width:thin;scrollbar-color:#f47835 #e4eaf1}
.choice-grid#choice-program-track>.choice-card{scroll-snap-align:start}
.choice-grid#choice-program-track::-webkit-scrollbar{height:7px}
.choice-grid#choice-program-track::-webkit-scrollbar-track{border-radius:999px;background:#e4eaf1}
.choice-grid#choice-program-track::-webkit-scrollbar-thumb{border-radius:999px;background:#f47835}
@media(max-width:1000px){.choice-grid#choice-program-track{grid-auto-columns:calc((100% - 14px)/2)}}
@media(max-width:600px){.choice-carousel{padding:0 42px}.choice-grid#choice-program-track{grid-auto-columns:86%;gap:12px}.choice-card{min-height:290px}.choice-scroll-hint{font-size:11px}}

.gallery-image{transition:opacity .55s ease}.gallery-image.is-fading{opacity:0}


<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Pelajari kategori French-Language Proficiency Express Entry, persyaratan NCLC 7, tes bahasa yang diterima, poin CRS tambahan, dan persiapan bersama Lunga Abroad.">
  <meta name="theme-color" content="#0b1d36">
  <title>Express Entry – French-Language Proficiency — Lunga Abroad</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body id="top">
  <header class="header">
    <div class="container nav">
      <a class="page-back-button" href="index.html#program" data-history-back aria-label="Kembali ke halaman sebelumnya" title="Kembali ke halaman sebelumnya">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        <span>Kembali</span>
      </a>
      <a class="logo" href="index.html#top" aria-label="Lunga Abroad, beranda">
        <img class="site-logo-mark" src="assets/img/logo-mark.png" alt="">
        <span class="logo-type"><span class="logo-lunga">LUNGA</span><span class="logo-abroad">ABROAD</span></span>
      </a>
      <nav class="nav-links" aria-label="Navigasi utama">
        <a href="index.html#program">Program</a>
        <a href="#persyaratan">Persyaratan</a>
        <a href="#crs">Poin CRS</a>
        <a href="#persiapan">Persiapan</a>
      </nav>
      <a class="button" href="index.html#kontak">Konsultasi awal</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Navigasi ponsel" hidden>
      <a href="index.html#program">Program</a>
      <a href="#persyaratan">Persyaratan</a>
      <a href="#crs">Poin CRS</a>
      <a href="#persiapan">Persiapan</a>
      <a href="index.html#kontak">Konsultasi</a>
    </nav>
  </header>

  <main>
    <section class="fm-hero ee-hero">
      <div class="container fm-hero-grid">
        <div class="fm-hero-copy">
          <p class="eyebrow">Express Entry · Permanent Residence</p>
          <h1>Express Entry <span>French-Language Proficiency</span></h1>
          <p class="fm-tagline">Your French Skills, Your Pathway to Canadian Permanent Residence</p>
          <p class="fm-lead">Kemampuan bahasa Prancis yang kuat dapat membuka kesempatan untuk dipertimbangkan dalam putaran seleksi khusus Express Entry. Kenali syarat bahasa, kelayakan program, dan cara mempersiapkan profilmu.</p>
          <div class="fm-hero-actions">
            <a class="button" href="#persyaratan">Lihat persyaratan <span aria-hidden="true">↓</span></a>
            <a class="button button-secondary" href="index.html#kontak">Konsultasi awal</a>
          </div>
        </div>
        <aside class="fm-snapshot ee-snapshot" aria-label="Ringkasan kategori bahasa Prancis Express Entry">
          <p class="fm-snapshot-label">Sekilas kategori</p>
          <div class="fm-snapshot-row"><span>Ambang bahasa</span><strong>NCLC 7 · keempat kemampuan</strong></div>
          <div class="fm-snapshot-row"><span>Tes bahasa Prancis</span><strong>TCF Canada atau TEF Canada</strong></div>
          <div class="fm-snapshot-row"><span>Poin tambahan CRS</span><strong>25 atau 50 poin, sesuai syarat bahasa</strong></div>
          <p class="fm-snapshot-note">Undangan bergantung pada kelayakan, peringkat kandidat, dan instruksi putaran seleksi.</p>
        </aside>
      </div>
    </section>

    <section class="section fm-overview" aria-labelledby="ee-overview-title">
      <div class="container fm-overview-grid">
        <div>
          <p class="eyebrow">Mengenal kategorinya</p>
          <h2 id="ee-overview-title">Bahasa Prancis sebagai <span>keunggulan profil.</span></h2>
        </div>
        <div class="fm-overview-copy">
          <p><strong>French-Language Proficiency</strong> adalah seleksi berbasis kategori di dalam sistem Express Entry. Kategori ini memungkinkan IRCC mengundang kandidat dengan kemampuan bahasa Prancis yang memenuhi kriteria untuk mengajukan Permanent Residence (PR).</p>
          <p>Kandidat tetap harus memenuhi kriteria minimum Express Entry dan memenuhi syarat salah satu program yang dikelola sistem tersebut. Putaran seleksi kategori mengundang kandidat berperingkat tinggi yang memenuhi instruksi putaran terkait.</p>
          <a class="fm-inline-link" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html" target="_blank" rel="noopener noreferrer">Lihat penjelasan kategori resmi IRCC <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section class="section fm-requirements" id="persyaratan" aria-labelledby="ee-requirements-title">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Persyaratan utama</p>
          <h2 id="ee-requirements-title">Siapkan empat kemampuan bahasa <span>dan profil Express Entry.</span></h2>
          <p>Berikut gambaran umum kriteria kategori French-Language Proficiency. Setiap kandidat juga harus memenuhi persyaratan program dan instruksi undangan yang berlaku.</p>
        </div>
        <div class="fm-requirement-list ee-requirement-list">
          <article class="fm-requirement-card"><span>01</span><div><h3>Bahasa Prancis NCLC 7</h3><p>Hasil tes harus menunjukkan minimal NCLC 7 untuk speaking, listening, reading, dan writing.</p></div></article>
          <article class="fm-requirement-card"><span>02</span><div><h3>Tes bahasa yang diterima</h3><p>Untuk bahasa Prancis Express Entry, IRCC menerima TCF Canada atau TEF Canada. Hasil tes harus masih berlaku saat profil dan aplikasi PR diproses.</p></div></article>
          <article class="fm-requirement-card"><span>03</span><div><h3>Kelayakan salah satu program</h3><p>Memenuhi syarat minimum salah satu program Express Entry: Federal Skilled Worker Program, Federal Skilled Trades Program, atau Canadian Experience Class.</p></div></article>
          <article class="fm-requirement-card"><span>04</span><div><h3>Profil dan putaran undangan</h3><p>Memiliki profil Express Entry yang memenuhi syarat. Kandidat harus memenuhi instruksi putaran dan berada pada peringkat yang terundang.</p></div></article>
        </div>
        <p class="fm-source-note">Hasil tes bahasa yang digunakan untuk Express Entry umumnya harus berusia kurang dari dua tahun saat membuat profil dan mengajukan PR. Periksa ketentuan IRCC yang berlaku untuk situasimu.</p>
      </div>
    </section>

    <section class="section ee-crs-section" id="crs" aria-labelledby="ee-crs-title">
      <div class="container ee-crs-layout">
        <div class="ee-crs-copy">
          <p class="eyebrow">Keunggulan French-language proficiency</p>
          <h2 id="ee-crs-title">Bahasa Prancis bisa menambah <span>poin CRS.</span></h2>
          <p>Kandidat yang memenuhi syarat bahasa Prancis dan bahasa Inggris tertentu dapat memperoleh poin tambahan CRS.</p>
          <a class="fm-inline-link fm-inline-link-light" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html" target="_blank" rel="noopener noreferrer">Lihat kriteria CRS resmi IRCC <span aria-hidden="true">↗</span></a>
        </div>
        <div class="ee-crs-table-wrap">
          <table class="ee-crs-table">
            <thead><tr><th scope="col">Kriteria bahasa Inggris</th><th scope="col">Poin tambahan</th></tr></thead>
            <tbody>
              <tr><th scope="row">CLB 4 atau lebih rendah dalam bahasa Inggris, atau tidak mengikuti tes bahasa Inggris</th><td>25</td></tr>
              <tr><th scope="row">Minimal CLB 5 di keempat kemampuan bahasa Inggris</th><td>50</td></tr>
            </tbody>
          </table>
          <p class="ee-crs-footnote">Kedua skenario di atas mensyaratkan minimal NCLC 7 di keempat kemampuan bahasa Prancis. Poin CRS bukan jaminan undangan.</p>
        </div>
      </div>
    </section>

    <section class="section fm-support" id="persiapan" aria-labelledby="ee-support-title">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Persiapkan bersama Lunga Abroad</p>
          <h2 id="ee-support-title">Buat rencana belajar dan ujian <span>lebih terarah.</span></h2>
          <p>Lunga Abroad membantu Anda mengembangkan kemampuan bahasa Prancis, mempersiapkan TCF Canada atau TEF Canada, serta memahami persyaratan dan strategi menuju Express Entry.</p>
        </div>
        <div class="ee-support-grid">
          <article class="ee-support-card"><span>01</span><h3>Pengembangan bahasa Prancis</h3><p>Bangun empat keterampilan dan susun target belajar menuju level bahasa yang diperlukan.</p></article>
          <article class="ee-support-card"><span>02</span><h3>Persiapan TCF / TEF Canada</h3><p>Berlatih mengenali format ujian serta mengembangkan speaking, listening, reading, dan writing.</p></article>
          <article class="ee-support-card"><span>03</span><h3>Pemahaman jalur Express Entry</h3><p>Pelajari gambaran persyaratan dan susun daftar pertanyaan untuk mengevaluasi langkah selanjutnya.</p></article>
        </div>
      </div>
    </section>

    <section class="section ee-final-cta">
      <div class="container fm-final-cta-inner">
        <div><p class="eyebrow">Explore Your Canada Career Pathway</p><h2>French Is an Asset.<br><span>Your Future Starts Here.</span></h2><p>Mulai dengan menetapkan target bahasa dan memahami pilihan jalurmu.</p></div>
        <a class="button" href="index.html#kontak">Diskusikan rencanamu <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="fm-disclaimer" aria-label="Catatan penting dan sumber resmi">
      <div class="container">
        <p><strong>Catatan:</strong> Memenuhi NCLC 7 tidak otomatis menjamin undangan PR. Kandidat tetap harus memenuhi persyaratan program Express Entry, instruksi putaran seleksi, dan ketentuan IRCC. Informasi pada halaman ini adalah ringkasan, bukan nasihat hukum atau imigrasi.</p>
        <p class="fm-official-links"><strong>Sumber resmi:</strong>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html" target="_blank" rel="noopener noreferrer">Kategori French-Language Proficiency · IRCC</a>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html" target="_blank" rel="noopener noreferrer">Tes bahasa Express Entry · IRCC</a>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html" target="_blank" rel="noopener noreferrer">Kriteria poin CRS · IRCC</a>
        </p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <p>© <span id="current-year"></span> Lungaabroad.id · Klaten, Jawa Tengah 57454</p>
      <a href="index.html#program">Kembali ke pilihan program ↑</a>
    </div>
  </footer>
  <script src="./script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Pelajari program Francophone Mobility Canada, persyaratan umum, peluang karier, dan pendampingan persiapan bersama Lunga Abroad.">
  <meta name="theme-color" content="#0b1d36">
  <title>Francophone Mobility Canada — Lunga Abroad</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body id="top">
  <header class="header">
    <div class="container nav">
      <a class="page-back-button" href="index.html#program" data-history-back aria-label="Kembali ke halaman sebelumnya" title="Kembali ke halaman sebelumnya">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        <span>Kembali</span>
      </a>
      <a class="logo" href="index.html#top" aria-label="Lunga Abroad, beranda">
        <img class="site-logo-mark" src="assets/img/logo-mark.png" alt="">
        <span class="logo-type"><span class="logo-lunga">LUNGA</span><span class="logo-abroad">ABROAD</span></span>
      </a>
      <nav class="nav-links" aria-label="Navigasi utama">
        <a href="index.html#program">Program</a>
        <a href="#persyaratan">Persyaratan</a>
        <a href="#bimbingan">Bimbingan Lunga</a>
      </nav>
      <a class="button" href="index.html#kontak">Konsultasi awal</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Navigasi ponsel" hidden>
      <a href="index.html#program">Program</a>
      <a href="#persyaratan">Persyaratan</a>
      <a href="#bimbingan">Bimbingan Lunga</a>
      <a href="index.html#kontak">Konsultasi</a>
    </nav>
  </header>

  <main>
    <section class="fm-hero">
      <div class="container fm-hero-grid">
        <div class="fm-hero-copy">
          <p class="eyebrow">Jalur kerja · Di luar Québec</p>
          <h1>Francophone Mobility <span>Canada</span></h1>
          <p class="fm-tagline">Your French Skills, Your Gateway to Canada</p>
          <p class="fm-lead">Kemampuan bahasa Prancismu dapat menjadi bagian dari rencana membangun karier di Kanada. Pelajari gambaran program, persyaratan umum, dan persiapan yang bisa dilakukan bersama Lunga Abroad.</p>
          <div class="fm-hero-actions">
            <a class="button" href="#persyaratan">Pelajari persyaratan <span aria-hidden="true">↓</span></a>
            <a class="button button-secondary" href="index.html#kontak">Konsultasi awal</a>
          </div>
        </div>
        <aside class="fm-snapshot" aria-label="Ringkasan program Francophone Mobility">
          <p class="fm-snapshot-label">Sekilas program</p>
          <div class="fm-snapshot-row"><span>Wilayah kerja</span><strong>Kanada di luar Québec</strong></div>
          <div class="fm-snapshot-row"><span>Bahasa Prancis</span><strong>NCLC 5 · berbicara &amp; mendengar</strong></div>
          <div class="fm-snapshot-row"><span>Pengecualian LMIA</span><strong>Kode C16</strong></div>
          <p class="fm-snapshot-note">Persyaratan umum berlaku. Keputusan izin kerja tetap ditentukan IRCC.</p>
        </aside>
      </div>
    </section>

    <section class="section fm-overview" aria-labelledby="fm-overview-title">
      <div class="container fm-overview-grid">
        <div>
          <p class="eyebrow">Mengenal jalurnya</p>
          <h2 id="fm-overview-title">Bahasa Prancis membuka <span>peluang karier.</span></h2>
        </div>
        <div class="fm-overview-copy">
          <p><strong>Francophone Mobility (Mobilité francophone)</strong> adalah jalur izin kerja Pemerintah Kanada yang membantu employer di luar Québec merekrut pekerja berbahasa Prancis melalui pengecualian Labour Market Impact Assessment (LMIA), menggunakan kode pengecualian C16.</p>
          <p>Kandidat tetap memerlukan tawaran pekerjaan dari employer Kanada dan harus memenuhi persyaratan izin kerja yang berlaku. Jalur ini dapat menjadi salah satu pilihan bagi kandidat internasional, termasuk dari Indonesia, yang ingin merencanakan karier profesional di Kanada.</p>
          <a class="fm-inline-link" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/francophone-mobility.html" target="_blank" rel="noopener noreferrer">Lihat penjelasan resmi IRCC <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section class="section fm-requirements" id="persyaratan" aria-labelledby="fm-requirements-title">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Sebelum merencanakan</p>
          <h2 id="fm-requirements-title">Persyaratan utama <span>yang perlu diketahui.</span></h2>
          <p>Ini penjelasan general, bukan penilaian kelayakan pribadi. IRCC menetapkan persyaratan umum izin kerja dan employer perlu menyelesaikan tahapannya sebelum kandidat mengajukan permohonan.</p>
        </div>
        <div class="fm-requirement-list">
          <article class="fm-requirement-card"><span>01</span><div><h3>Kemampuan bahasa Prancis</h3><p>Umumnya perlu membuktikan kemampuan berbicara dan mendengar setara minimal NCLC 5 (B1).</p></div></article>
          <article class="fm-requirement-card"><span>02</span><div><h3>Job offer</h3><p>Perlu memiliki tawaran kerja dari employer Kanada yang memenuhi ketentuan program.</p></div></article>
          <article class="fm-requirement-card"><span>03</span><div><h3>Kategori pekerjaan</h3><p>Pekerjaan dapat berada di kategori TEER 0–5. Pengecualian berlaku untuk pekerjaan pertanian primer tertentu di TEER 4 dan 5.</p></div></article>
          <article class="fm-requirement-card"><span>04</span><div><h3>Lokasi di luar Québec</h3><p>Pekerjaan harus berlokasi di salah satu provinsi atau teritori Kanada di luar Québec.</p></div></article>
          <article class="fm-requirement-card"><span>05</span><div><h3>Proses employer dan izin kerja</h3><p>Employer mengirimkan tawaran melalui Employer Portal IRCC dengan kode pengecualian LMIA C16. Kandidat mengajukan employer-specific work permit dan tetap memenuhi ketentuan IRCC.</p></div></article>
        </div>
        <p class="fm-source-note">Ambang bahasa dan kategori pekerjaan di atas mengikuti panduan IRCC untuk pengajuan yang berlaku sejak 15 Juni 2023. Periksa halaman resmi untuk pembaruan terbaru.</p>
      </div>
    </section>

    <section class="section fm-pr-section" aria-labelledby="fm-pr-title">
      <div class="container fm-pr-grid">
        <div>
          <p class="eyebrow">Rencana jangka panjang</p>
          <h2 id="fm-pr-title">Pengalaman kerja dapat menjadi bagian dari <span>rencana menuju PR.</span></h2>
        </div>
        <div class="fm-pr-copy">
          <p>Pengalaman bekerja di Kanada dapat mendukung profil kandidat untuk menilai jalur Permanent Residence (PR) yang sesuai. Salah satu kemungkinan yang dapat dipelajari adalah Express Entry, termasuk kategori French-language proficiency.</p>
          <div class="fm-pr-highlight"><strong>NCLC 7</strong><span>Kategori French-language proficiency Express Entry mensyaratkan hasil tes bahasa Prancis minimal NCLC 7 di keempat kemampuan, serta pemenuhan ketentuan program dan undangan yang berlaku.</span></div>
          <p class="fm-source-note">Bekerja melalui Francophone Mobility tidak otomatis memberikan PR. Kelayakan ditentukan oleh jalur imigrasi yang dipilih dan persyaratan IRCC saat mengajukan.</p>
          <a class="fm-inline-link fm-inline-link-light" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html" target="_blank" rel="noopener noreferrer">Lihat kriteria kategori bahasa Prancis Express Entry <span aria-hidden="true">↗</span></a>
          <a class="fm-inline-link fm-inline-link-light" href="express-entry-french.html">Pelajari halaman Express Entry – French-Language Proficiency <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section class="section fm-support" id="bimbingan" aria-labelledby="fm-support-title">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Persiapkan bersama Lunga Abroad</p>
          <h2 id="fm-support-title">Susun persiapanmu <span>langkah demi langkah.</span></h2>
          <p>Lunga Abroad membantu persiapan kandidat melalui pendampingan bahasa dan karier. Fokusnya adalah membangun kesiapan dan membimbing kandidat hingga keberangkatan.</p>
        </div>
        <ol class="fm-support-steps">
          <li><span>01</span><div><h3>Persiapan bahasa Prancis</h3><p>Bangun kemampuan bahasa dan susun target belajar yang realistis.</p></div></li>
          <li><span>02</span><div><h3>Sertifikasi bahasa TCF/TEF canada</h3><p>Daftar dan melaksanakan ujian sertifikasi bahasa prancis TCF/TEF Canada.</p></div></li>
          <li><span>03</span><div><h3>Apply job</h3><p>Rapikan CV agar informasi pengalaman dan keterampilanmu lebih mudah dipahami employer.</p></div></li>
          <li><span>04</span><div><h3>Interview dengan employer</h3><p>Melakukan wawancara bersama employer di Kanada secara daring.</p></div></li>
          <li><span>05</span><div><h3>Mendapatkan Job offer</h3><p>Melakukan tanda tangan kontrak bersama employer Kanada.</p></div></li>
          <li><span>06</span><div><h3>Persiapan Dokumen</h3><p>Menyiapkan dokumen yang di butuhkan seperti visa,MCU,identitas diri dan lain-lain.</p></div></li>
          <li><span>07</span><div><h3>Keberangkatan</h3><p>Berangkat ke Kanada dan memulai karier.</p></div></li>
        </ol>
        </ol>
      </div>
    </section>

    <section class="section fm-final-cta">
      <div class="container fm-final-cta-inner">
        <div><p class="eyebrow">Explore Your Canada Career Pathway</p><h2>French Is an Asset.<br><span>Build Your Career in Canada.</span></h2><p>Mulai dengan memahami level bahasa dan rencana kariermu.</p></div>
        <a class="button" href="index.html#kontak">DAFTAR SEKARANG <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="fm-disclaimer" aria-label="Catatan penting dan sumber resmi">
      <div class="container">
        <p><strong>Catatan:</strong> Francophone Mobility bukan jaminan pekerjaan, persetujuan work permit, maupun Permanent Residence. Seluruh proses mengikuti ketentuan IRCC, dan keputusan izin kerja dibuat oleh IRCC. Informasi pada halaman ini adalah ringkasan, bukan nasihat hukum atau imigrasi.</p>
        <p class="fm-official-links"><strong>Sumber resmi:</strong>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/francophone-mobility/eligibility.html" target="_blank" rel="noopener noreferrer">Kelayakan Francophone Mobility · IRCC</a>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html" target="_blank" rel="noopener noreferrer">Kategori bahasa Prancis Express Entry · IRCC</a>
        </p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <p>© <span id="current-year"></span> Lungaabroad.id · Klaten, Jawa Tengah 57454</p>
      <a href="index.html#program">Kembali ke pilihan program ↑</a>
    </div>
  </footer>
  <script src="./script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lunga Abroad — Bahasa Prancis &amp; Persiapan ke Kanada</title>
  <meta name="description" content="Belajar bahasa Prancis dan persiapan menuju peluang karier di Kanada bersama Lunga Abroad.">
  <link rel="stylesheet" href="./style.css">
</head>
<body id="top">
<header class="header">
    <div class="container nav">
      <a class="logo" href="#top" aria-label="Lunga Abroad, beranda">
        <img class="site-logo-mark" src="assets/img/logo-mark.png" alt="">
        <span class="logo-type"><span class="logo-lunga">LUNGA</span><span class="logo-abroad">ABROAD</span></span>
      </a>

      <nav class="nav-links" aria-label="Navigasi utama">
        <a href="#program">Program</a>
        <a href="#proses">Proses</a>
        <a href="#kegiatan">Kegiatan</a>
        <a href="#tips">Sharing &amp; Tips</a>
        <a href="#tentang">Tentang kami</a>
      </nav>

      <a class="button" href="#kontak">Konsultasi awal</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
    </div>
  <nav class="mobile-menu" id="mobile-menu" aria-label="Navigasi ponsel" hidden>
  <a href="#program">Program</a>
  <a href="#proses">Proses</a>
  <a href="#kegiatan">Kegiatan</a>
  <a href="#tips">Sharing &amp; Tips</a>
  <a href="#tentang">Tentang kami</a>
  <a href="#tutor">Tutor</a>
  <a href="#news-update">News Update</a>
  <a href="#faq">FAQ</a>
  <a href="#kontak">Konsultasi</a>
</nav>
</header>

<main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">Belajar bahasa · Rancang masa depan</p>

          <h1>
            Bahasa Prancis adalah peluang kariermu ke
            <span>Kanada.</span>
          </h1>

          <p class="hero-copy">
            Kelas bahasa Prancis, persiapan ujian TCF/TEF Canada dan membimbingmu
            dari langkah pertama sampai pintu keberangkatan.
          </p>

          <div class="hero-actions">
            <a class="button" href="#kontak">Daftar Sekarang <span aria-hidden="true">↗</span></a>
            <a class="button button-secondary" href="#program">Lihat program</a>
          </div>

          <div class="hero-note">
            <span class="note-mark" aria-hidden="true">✓</span>
            <span>Dari Indonesia ke Kanada.</span>
          </div>
        </div>

      </div>
    </section>

    <section class="numbers" aria-label="Ringkasan Lunga Abroad">
      <div class="container number-grid">
        <div class="number-item">
          <strong data-counter="number" data-target="10" data-suffix="+" aria-label="10 plus">10+</strong>
          <span>Provinsi tujuan</span>
        </div>
        <div class="number-item">
          <strong data-counter="levels" aria-label="Level A1 sampai B2">A1 – B2</strong>
          <span>Jenjang bahasa Prancis</span>
        </div>
        <div class="number-item">
          <strong data-counter="number" data-target="2" data-suffix=" program" aria-label="2 program">2 program</strong>
          <span>Pathway Kanada</span>
        </div>
        <div class="number-item">
          <strong data-counter="number" data-target="4" data-suffix=" Syarat" aria-label="4 tahap">4 Syarat</strong>
          <span>Umum</section>
<section class="section" id="program">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Pilihan program</p>
      <h2>Dua jalur, <span>satu tujuan.</span></h2>
      <p>
        Pilih jalur persiapan yang sesuai dengan Impianmu.
        Kami bimbing memahami langkah awalnya.
      </p>
    </div>

    <div class="program-grid">
      <article class="program-card">
        <div class="program-icon" aria-hidden="true">01</div>
        <p class="card-kicker">Jalur kerja</p>
        <h3><a href="francophone-mobility.html">Francophone Mobility</a></h3>
        <p>
          Persiapan bahasa Prancis dan pendampingan untuk memahami proses
          menuju peluang kerja di Kanada.
        </p>
        <a href="francophone-mobility.html">Pelajari Francophone Mobility <span aria-hidden="true">↗</span></a>
      </article>

      <article class="program-card program-card-featured">
        <div class="program-icon" aria-hidden="true">02</div>
        <p class="card-kicker">Jalur imigrasi</p>
        <h3><a href="express-entry-french.html">Express Entry – Pathway PR</a></h3>
        <p>
          Persiapan bahasa dan ujian sebagai bagian dari rencana menuju
          jalur Express Entry dan permanent residence.
        </p>
        <a href="express-entry-french.html">Pelajari jalur Express Entry <span aria-hidden="true">↗</span></a>
      </article>
    </div>
  </div>
</section>

<section class="section choice-section" id="pilihan-program">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Pilihan kelas</p>
      <h2>Temukan program yang <span>sesuai dengan rencanamu.</span></h2>
      <p>Mulai dari fondasi bahasa hingga persiapan ujian, pilih format belajar yang paling sesuai.</p>
    </div>

    <p class="choice-scroll-hint">Geser untuk melihat program lainnya</p>
    <div class="choice-carousel">
      <button class="choice-scroll-button choice-scroll-prev" type="button" data-choice-scroll="-1" aria-label="Geser program ke kiri">←</button>
      <div class="choice-grid" id="choice-program-track" tabindex="0" aria-label="Daftar program belajar, geser ke samping untuk melihat semua pilihan">
      <article class="choice-card">
        <span class="choice-index">01</span>
        <p class="choice-type">Fondasi bahasa</p>
        <h3>Program Reguler</h3>
        <p class="choice-desc">Kurikulum A1–A2 dengan tutor berpengalaman, materi digital, latihan empat keterampilan, dan rekaman kelas. Tersedia kelas pagi atau malam.</p>
        <p class="choice-duration"><strong>3 bulan</strong><span>66 sesi weekday atau 12 sesi Sabtu</span></p>
        <a href="program.html?program=reguler">Lihat detail program <span aria-hidden="true">↗</span></a>
      </article>

      <article class="choice-card">
        <span class="choice-index">02</span>
        <p class="choice-type">Pengembangan level</p>
        <h3>Program Extension</h3>
        <p class="choice-desc">Kurikulum Refreshment A2 hingga Mastering B1 dengan latihan empat keterampilan, simulasi TCF/TEF, feedback tutor, dan dukungan persiapan karier.</p>
        <p class="choice-duration"><strong>3 bulan</strong><span>66 sesi weekday atau 12 sesi Sabtu</span></p>
        <a href="program.html?program=extension">Lihat detail program <span aria-hidden="true">↗</span></a>
      </article>

      <article class="choice-card choice-card-featured">
        <span class="choice-index">03</span>
        <p class="choice-type">Fokus ujian</p>
        <h3>Program Preparation</h3>
        <p class="choice-desc">Private Preparation untuk peserta minimal B1: latihan TCF/TEF, simulasi wawancara kerja, serta bimbingan CV dan karier.</p>
        <p class="choice-duration"><strong>1 bulan</strong><span>26 sesi · </span></p>
        <a href="program.html?program=preparation">Lihat detail program <span aria-hidden="true">↗</span></a>
      </article>

      <article class="choice-card">
        <span class="choice-index">04</span>
        <p class="choice-type">Kelas privat</p>
        <h3>Private 1 on 1</h3>
        <p class="choice-desc">Kelas 1-on-1 A1–A2 atau B1 Mastering dengan tutor, materi terstruktur, feedback, dan waktu kelas yang fleksibel.</p>
        <p class="choice-duration"><strong>2 bulan</strong><span>52 sesi · 2 jam per sesi</span></p>
        <a href="program.html?program=private">Lihat detail program <span aria-hidden="true">↗</span></a>
      </article>

      <article class="choice-card">
        <span class="choice-index">05</span>
        <p class="choice-type">Kelas grup kecil · 3-4 orang</p>
        <h3>Private Group</h3>
        <p class="choice-desc">Belajar A1–A2 atau B1 Mastering dalam grup kecil dengan kurikulum terstruktur, tutor berpengalaman, dan jam kelas fleksibel.</p>
        <p class="choice-duration"><strong>2 bulan</strong><span>52 sesi ·  3-4 peserta</span></p>
        <a href="program.html?program=private-group">Lihat detail program <span aria-hidden="true">↗</span></a>
      </article>
      </div>
      <button class="choice-scroll-button choice-scroll-next" type="button" data-choice-scroll="1" aria-label="Geser program ke kanan">→</button>
    </div>
  </div>
</section>
<section class="section process-section" id="proses">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Proses bimbingan</p>
      <h2>Empat tahapan menuju <span>Kanada.</span></h2>
      <p>
        Kamu tidak harus mengetahui semua jawabannya dari awal.
        Kita susun langkahnya bersama, satu tahap demi satu tahap.
      </p>
    </div>

    <ol class="process-list">
      <li class="process-step">
        <span class="step-number">01</span>
        <div>
          <h3>Konsultasi dan pemetaan</h3>
          <p>
            Ceritakan tujuan, pengalaman, dan rencana yang kamu miliki.
            Dari sana kita petakan kemungkinan langkah awal.
          </p>
        </div>
      </li>

      <li class="process-step">
        <span class="step-number">02</span>
        <div>
          <h3>Belajar bahasa Prancis</h3>
          <p>
            Mulai dari level yang sesuai dan belajar bertahap menuju target
            bahasa yang dibutuhkan untuk rencanamu.
          </p>
        </div>
      </li>

      <li class="process-step">
        <span class="step-number">03</span>
        <div>
          <h3>Persiapan ujian</h3>
          <p>
            Kenali format TCF Canada atau TEF Canada dan persiapkan kemampuan
            bahasa yang akan diujikan.
          </p>
        </div>
      </li>

      <li class="process-step">
        <span class="step-number">04</span>
        <div>
          <h3>Persiapan kerja dan keberangkatan</h3>
          <p>
            Susun persiapan lanjutan bersama tim, sesuai jalur dan kondisi
            masing-masing peserta.
          </p>
        </div>
      </li>
    </ol>
  </div>
</section>
    <!-- Bagian program, proses, dan kontak kita tambahkan pada langkah berikutnya. -->
     <section class="section" id="tentang">
  <div class="container about-grid">
    <div class="about-copy">
      <p class="eyebrow">Tentang Lunga Abroad</p>
      <h2>
        Persiapan yang lebih terarah untuk
        <span>masa depanmu.</span>
      </h2>

      <p>
        Lungaabroad adalah platform edukasi dan bimbingan persiapan bahasa
        Prancis serta bimbingan karir menuju Kanada. Kami membantu peserta memahami
        pilihan program, membangun kemampuan bahasa, dan menyiapkan langkah
        berikutnya dengan lebih terstruktur.
      </p>

      <a class="text-link" href="#kontak">
        Kenali langkah pertamamu <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div class="about-panel">
      <div class="about-panel-glow" aria-hidden="true"></div>
      <p class="panel-label">Fokus pendampingan</p>

      <div class="focus-item">
        <span class="focus-number">01</span>
        <div>
          <h3>Bahasa Prancis</h3>
          <p>Pembelajaran bertahap dari A1 sampai B2.</p>
        </div>
      </div>

      <div class="focus-item">
        <span class="focus-number">02</span>
        <div>
          <h3>Persiapan ujian</h3>
          <p>Pengenalan dan latihan untuk TCF Canada atau TEF Canada.</p>
        </div>
      </div>

      <div class="focus-item">
        <span class="focus-number">03</span>
        <div>
          <h3>Rencana menuju Kanada</h3>
          <p>Pemetaan langkah sesuai tujuan dan kondisi peserta.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section tutor-section" id="tutor">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Tim pengajar</p>
      <h2>Belajar bersama <span>tutor Lunga.</span></h2>
      <p>
        Kenali pengajar yang akan mendampingi proses belajarmu.
        Detail profil dan pengalaman dapat disesuaikan dengan informasi terbaru.
      </p>
    </div>

    <div class="tutor-grid">
      <article class="tutor-card">
        <img class="tutor-photo" src="assets/img/martin.jpg" alt="Foto tutor M. Martin" loading="lazy">
        <p class="tutor-role">Tutor bahasa Prancis</p>
        <h3>M. Martin</h3>
        <p>
          Mendampingi peserta membangun fondasi bahasa dan kepercayaan diri
          untuk berkomunikasi.
        </p>
      </article>

      <article class="tutor-card">
        <img class="tutor-photo" src="assets/img/vincent.jpg" alt="Foto tutor M. Vincent" loading="lazy">
        <p class="tutor-role">Tutor bahasa Prancis</p>
        <h3>M. Vincent</h3>
        <p>
          Membantu peserta berlatih bahasa Prancis secara bertahap sesuai
          tingkat dan tujuan belajar.
        </p>
      </article>

      <article class="tutor-card">
        <img class="tutor-photo" src="assets/img/hajar.jpg" alt="Foto tutor Mme. Hajar" loading="lazy">
        <p class="tutor-role">Tutor bahasa Prancis</p>
        <h3>Mme. Hajar</h3>
        <p>
          Mendampingi latihan bahasa dan persiapan peserta menuju target
          pembelajaran berikutnya.
        </p>
      </article>

      <article class="tutor-card">
        <img class="tutor-photo" src="assets/img/batubara.jpg" alt="Foto tutor Mlle. Catherine" loading="lazy">
        <p class="tutor-role">Tutor bahasa Prancis</p>
        <h3>Mlle. Catherine</h3>
        <p>
          Membimbing peserta mengembangkan keterampilan bahasa untuk
          kebutuhan belajar dan ujian.
        </p>
      </article>
    </div>
  </div>
</section>
  <section class="section gallery-section" id="kegiatan">
  <div class="container">
    <div class="section-heading gallery-heading">
      <p class="eyebrow">Kegiatan Lunga Abroad</p>
      <h2>Momen dari <span>webinar kami.</span></h2>
      <p>Beberapa cuplikan kegiatan berbagi informasi dan belajar bersama komunitas.</p>
    </div>

    <div class="gallery" aria-label="Galeri webinar Francophone Mobility Canada">
      <div class="gallery-image-wrap">
        <button class="gallery-arrow gallery-prev" type="button" aria-label="Foto sebelumnya">‹</button>
        <img class="gallery-image" src="assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.31.jpeg" alt="Tangkapan layar Zoom webinar Francophone Mobility Canada dengan peserta dan tim Lungaabroad" loading="lazy">
        <button class="gallery-arrow gallery-next" type="button" aria-label="Foto berikutnya">›</button>
      </div>
      <div class="gallery-caption-row">
        <div>
          <p class="gallery-counter" id="gallery-counter">01 / 04</p>
          <h3 id="gallery-caption">Peserta dan Tim Lungaabroad</h3>
        </div>
        <p class="gallery-name">Webinar Francophone Mobility Canada</p>
      </div>
      <div class="gallery-thumbnails" role="group" aria-label="Pilih foto webinar">
        <button class="gallery-thumb is-active" type="button" data-gallery-index="0" aria-label="Lihat foto 1" aria-pressed="true">
          <img src="assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.31.jpeg" alt="" loading="lazy">
        </button>
        <button class="gallery-thumb" type="button" data-gallery-index="1" aria-label="Lihat foto 2" aria-pressed="false">
          <img src="assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.32.jpeg" alt="" loading="lazy">
        </button>
        <button class="gallery-thumb" type="button" data-gallery-index="2" aria-label="Lihat foto 3" aria-pressed="false">
          <img src="assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.32%20(1).jpeg" alt="" loading="lazy">
        </button>
        <button class="gallery-thumb" type="button" data-gallery-index="3" aria-label="Lihat foto 4" aria-pressed="false">
          <img src="assets/img/WhatsApp%20Image%202026-10-13%20at%2008.24.31%20(1).jpeg" alt="" loading="lazy">
        </button>
      </div>
    </div>
  </div>
</section>
<section class="section tips-section" id="tips">
  <div class="container">
    <div class="section-heading tips-heading">
      <div>
        <p class="eyebrow">Sharing &amp; Tips</p>
        <h2>Mulai dengan <span>informasi yang jelas.</span></h2>
      </div>
      <p>Panduan singkat untuk membantu memahami bahasa Prancis dan persiapan menuju Kanada.</p>
    </div>

    <div class="tip-filters" role="group" aria-label="Filter artikel tips">
      <button class="tip-filter" type="button" data-tip-filter="semua" aria-pressed="true">Semua</button>
      <button class="tip-filter" type="button" data-tip-filter="bahasa" aria-pressed="false">Bahasa</button>
      <button class="tip-filter" type="button" data-tip-filter="ujian" aria-pressed="false">Persiapan ujian</button>
      <button class="tip-filter" type="button" data-tip-filter="rencana" aria-pressed="false">Rencana ke Kanada</button>
    </div>

    <div class="tip-list" id="tip-grid">
      <article class="tip-row" data-tip-category="bahasa">
        <span class="tip-category">Bahasa</span>
        <h3>Mulai belajar bahasa Prancis dari level mana?</h3>
        <p>Kenali kemampuan awalmu agar rencana belajar terasa terukur dan tidak terburu-buru.</p>
        <a href="#kontak">Diskusikan level awal <span aria-hidden="true">↗</span></a>
      </article>
      <article class="tip-row" data-tip-category="ujian">
        <span class="tip-category">Persiapan ujian</span>
        <h3>Kenali tujuan sebelum memilih ujian</h3>
        <p>TCF Canada dan TEF Canada memiliki format masing-masing. Pastikan pilihanmu sesuai kebutuhan.</p>
        <a href="#faq">Baca pertanyaan umum <span aria-hidden="true">↗</span></a>
      </article>
      <article class="tip-row" data-tip-category="rencana">
        <span class="tip-category">Rencana ke Kanada</span>
        <h3>Susun langkah secara bertahap</h3>
        <p>Mulai dari tujuan, kemampuan bahasa, dan informasi resmi yang relevan dengan rencana pribadi.</p>
        <a href="#proses">Lihat tahapan bimbingan <span aria-hidden="true">↗</span></a>
      </article>
    </div>    <p class="tip-note">Informasi program dan persyaratan dapat berubah. Periksa selalu ketentuan terbaru dari sumber resmi.</p>
  </div>
</section>
<section class="section news-section" id="news-update">
  <div class="container">
    <div class="section-heading news-heading">
      <div>
        <p class="eyebrow">News Update</p>
        <h2>Info terbaru seputar <span>Kanada.</span></h2>
      </div>
      <p>Ringkasan berita dan hasil draw dari sumber resmi IRCC. Buka sumber untuk membaca detail lengkap.</p>
    </div>

    <div class="news-list">
      <article class="news-row">
        <a class="news-image-link" href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/canada-refocusing-express-entry-on-top-talent-that-drives-economic-growth.html" target="_blank" rel="noopener noreferrer" aria-label="Buka berita Express Entry di Canada.ca">
          <img class="news-thumb" src="assets/img/news 1.jpg" alt="Ilustrasi resmi IRCC tentang prioritas Express Entry" loading="lazy">
        </a>
        <div class="news-content">
          <div class="news-meta"><span>Express Entry</span><time datetime="2026-10-16">16 Oktober 2026</time></div>
          <h3>Express Entry menyesuaikan poin untuk kebutuhan tenaga kerja</h3>
          <p>IRCC mengumumkan poin untuk pengalaman kerja Kanada yang memenuhi syarat atau tawaran kerja tertentu di bidang upah tinggi. Perubahan berlaku mulai 3 November 2026.</p>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/canada-refocusing-express-entry-on-top-talent-that-drives-economic-growth.html" target="_blank" rel="noopener noreferrer">Baca rilis IRCC <span aria-hidden="true">↗</span></a>
        </div>
      </article>

      <article class="news-row">
        <a class="news-image-link" href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/09/canada-is-supporting-new-projects-to-promote-francophone-immigration-and-strengthen-francophone-minority-communities.html" target="_blank" rel="noopener noreferrer" aria-label="Buka berita imigrasi Francophone di Canada.ca">
          <img class="news-thumb" src="assets/img/news 2.jpg" alt="Ilustrasi resmi IRCC tentang inisiatif imigrasi Francophone" loading="lazy">
        </a>
        <div class="news-content">
          <div class="news-meta"><span>Francophone</span><time datetime="2026-09-29">29 September 2026</time></div>
          <h3>Dukungan proyek imigrasi Francophone di beberapa wilayah</h3>
          <p>Pemerintah Kanada mengumumkan dukungan bagi proyek yang menghubungkan talenta Francophone dan bilingual dengan kebutuhan komunitas serta tenaga kerja.</p>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/09/canada-is-supporting-new-projects-to-promote-francophone-immigration-and-strengthen-francophone-minority-communities.html" target="_blank" rel="noopener noreferrer">Baca rilis IRCC <span aria-hidden="true">↗</span></a>
        </div>
      </article>

      <article class="news-row">
        <a class="news-image-link" href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/new-penalties-for-fraudulent-and-unauthorized-immigration-and-citizenship-representatives.html" target="_blank" rel="noopener noreferrer" aria-label="Buka berita perlindungan pemohon di Canada.ca">
          <img class="news-thumb" src="assets/img/IRCC sanksi.jpg" alt="Materi resmi Canada.ca tentang sanksi bagi perwakilan imigrasi yang melanggar aturan" loading="lazy">
        </a>
        <div class="news-content">
          <div class="news-meta"><span>Perlindungan pemohon</span><time datetime="2026-10-28">28 Oktober 2026</time></div>
          <h3>IRCC mengumumkan sanksi untuk perwakilan tidak resmi</h3>
          <p>Aturan baru menetapkan sanksi bagi pihak yang melanggar ketentuan saat memberi nasihat imigrasi berbayar. Periksa status perwakilan sebelum membayar layanan.</p>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/new-penalties-for-fraudulent-and-unauthorized-immigration-and-citizenship-representatives.html" target="_blank" rel="noopener noreferrer">Baca rilis IRCC <span aria-hidden="true">↗</span></a>
        </div>
      </article>

      <article class="news-row news-draw">
        <a class="news-image-link" href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html?q=452" target="_blank" rel="noopener noreferrer" aria-label="Buka detail draw Express Entry nomor 452 di Canada.ca">
          <img class="news-thumb" src="assets/img/express 452.jpg" alt="Ilustrasi resmi IRCC terkait imigrasi Francophone" loading="lazy">
        </a>
        <div class="news-content">
          <div class="news-meta"><span>French-language draw</span><time datetime="2026-10-27">27 Oktober 2026</time></div>
          <h3>Draw French-language proficiency #452</h3>
          <p>IRCC mengeluarkan 5.000 undangan. CRS terendah yang diundang: 407. Hasil draw adalah catatan historis, bukan jaminan hasil berikutnya.</p>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html?q=452" target="_blank" rel="noopener noreferrer">Lihat instruksi resmi <span aria-hidden="true">↗</span></a>
        </div>
      </article>

      <article class="news-row news-draw">
        <a class="news-image-link" href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html?q=450" target="_blank" rel="noopener noreferrer" aria-label="Buka detail draw Express Entry nomor 450 di Canada.ca">
          <img class="news-thumb" src="assets/img/express 450.jpg" alt="Ilustrasi resmi IRCC terkait imigrasi Francophone" loading="lazy">
        </a>
        <div class="news-content">
          <div class="news-meta"><span>French-language draw</span><time datetime="2026-10-16">16 Oktober 2026</time></div>
          <h3>Draw French-language proficiency #450</h3>
          <p>IRCC mengeluarkan 5.000 undangan. CRS terendah yang diundang: 435. Kategori ini memiliki persyaratan tersendiri; lihat instruksi draw untuk rinciannya.</p>
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html?q=450" target="_blank" rel="noopener noreferrer">Lihat instruksi resmi <span aria-hidden="true">↗</span></a>
        </div>
      </article>
    </div>
    <p class="news-disclaimer">Ringkasan untuk informasi umum, bukan nasihat imigrasi atau jaminan kelayakan. Persyaratan kategori French-language proficiency termasuk hasil minimal NCLC 7 pada tiap kemampuan bahasa; selalu verifikasi ketentuan resmi terbaru.</p>
  </div>
</section>
<section class="section faq-section" id="faq">
  <div class="container faq-layout">
    <div class="section-heading">
      <p class="eyebrow">Punya pertanyaan?</p>
      <h2>Yang sering ditanyakan <span>calon peserta.</span></h2>
      <p>
        Belum menemukan jawaban yang kamu cari? Hubungi kami untuk
        membicarakan rencana belajarmu.
      </p>
      <a class="button" href="#kontak">Tanya langsung</a>
    </div>

    <div class="faq-list">
      <details class="faq-item">
        <summary>Apakah saya harus bisa bahasa Prancis sebelum mendaftar?</summary>
        <p>
          Tidak selalu. Pilih program dan level awal berdasarkan kemampuanmu.
          Konsultasi awal dapat membantu memetakan langkah belajar yang sesuai.
        </p>
      </details>

      <details class="faq-item">
        <summary>Apa perbedaan TCF Canada dan TEF Canada?</summary>
        <p>
          Keduanya merupakan ujian bahasa Prancis dengan format dan penyelenggara
          yang berbeda. Tanyakan kepada tim kami untuk membahas persiapan ujian
          sesuai rencanamu, lalu cek ketentuan terbaru dari sumber resmi.
        </p>
      </details>

      <details class="faq-item">
        <summary>Apakah Lunga Abroad menjamin pekerjaan atau visa?</summary>
        <p>
          Tidak. Hasil kerja, izin, dan keputusan imigrasi bergantung pada
          persyaratan serta keputusan pihak terkait. Bimbingan berfokus pada
          pembelajaran dan persiapan sesuai layanan yang disepakati.
        </p>
      </details>

      <details class="faq-item">
        <summary>Bagaimana cara mengetahui program yang cocok?</summary>
        <p>
          Mulailah dengan konsultasi. Ceritakan kemampuan bahasa, tujuan, dan
          rencanamu agar tim dapat membantu menjelaskan pilihan program.
        </p>
      </details>
      <details class="faq-item">
        <summary>Berapa batasan umur mengikuti program Francophone mobility</summary>
        <p>
         Tidak ada batasan umur yang tercantum secara resmi di website IRCC terkait umur jalur Francophone mobility.
        </p>
      </details>
      <details class="faq-item">
        <summary>Apakah bisa membawa keluarga dengan program Francophone Mobility?</summary>
        <p>
          Tentu!, program Francophone Mobility memiliki peluang untuk membawa keluarga, pasangan dan anak.
        </p>
      </details>
       <details class="faq-item">
        <summary>Apakah saya harus membayar untuk job offer untuk Lunga?</summary>
        <p>
          Tidak ada biaya yang harus di bayarkan untuk proses imigrasi dan terkait job terhadap Lunga abroad.
        </p>
      </details>
    </div>
  </div>
</section>

<section class="section contact-section" id="kontak">
  <div class="container contact-layout">
    <div>
      <p class="eyebrow">Mulai percakapan</p>
      <h2>Ceritakan rencanamu. <span>Kita petakan bersama.</span></h2>
      <p class="contact-copy">
        Isi formulir singkat ini. Tombolnya akan membuka WhatsApp dengan
        ringkasan pesan yang bisa kamu periksa sebelum dikirim.
      </p>

      <p class="contact-note">
        Lungaabroad.id adalah platform edukasi dan bimbingan persiapan bahasa
        Prancis dan Kanada.
      </p>
    </div>

    <form class="contact-form" id="contact-form">
      <label for="nama">Nama</label>
      <input id="nama" name="nama" type="text" placeholder="Nama kamu" required>

      <label for="tujuan">Program yang ingin ditanyakan</label>
      <select id="tujuan" name="tujuan" required>
        <option value="">Pilih program</option>
        <option>Francophone Mobility</option>
        <option>Express Entry – Pathway PR</option>
        <option>Kelas bahasa Prancis</option>
        <option>Persiapan TCF / TEF</option>
        <option>Belum yakin</option>
      </select>

      <label for="pesan">Ceritakan rencanamu</label>
      <textarea
        id="pesan"
        name="pesan"
        rows="4"
        placeholder="Contoh: Saya ingin mulai belajar bahasa Prancis dari dasar."
      ></textarea>

      <button class="button contact-submit" type="submit">
        Lanjut ke WhatsApp <span aria-hidden="true">↗</span>
      </button>
      <p class="form-help">WhatsApp akan terbuka agar kamu bisa meninjau pesan.</p>
    </form>
  </div>
</section>

</main>
<footer class="site-footer" id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="footer-logo" href="#top" aria-label="Lunga Abroad, kembali ke atas">
          <img src="assets/img/logo-mark.png" alt="" width="42" height="42">
          <span>Lunga<span>abroad</span><small>.id</small></span>
        </a>
        <p>Kelas bahasa Prancis dan persiapan karir. Bimbingan untuk merencanakan langkah menuju Kanada.</p>
        <p class="footer-company"><strong>PT LUNGA CAKRAWALA GLOBALINDO</strong><br>Klaten, Jawa Tengah 57454<br>Bahasa Prancis &amp; persiapan Kanada.</p>
      </div>

      <div class="footer-column">
        <h2>Jelajah</h2>
        <a href="#program">Program</a>
        <a href="#proses">Tahapan</a>
        <a href="#kegiatan">Kegiatan</a>
        <a href="#tips">Sharing &amp; Tips</a>
        <a href="#news-update">News Update</a>
  <a href="#faq">FAQ</a>
      </div>

      <div class="footer-column">
        <h2>Hubungi</h2>
        <a href="mailto:lungaabroad@gmail.com">lungaabroad@gmail.com</a>
        <a href="https://wa.me/6285842540779" target="_blank" rel="noopener noreferrer">WhatsApp konsultasi <span aria-hidden="true">↗</span></a>
      </div>

      <div class="footer-column footer-socials">
        <h2>Ikuti</h2>
        <a href="https://www.instagram.com/lungaabroad.id/" target="_blank" rel="noopener noreferrer"><span class="social-mark">ig</span>Instagram <span aria-hidden="true">↗</span></a>
        <a href="https://www.tiktok.com/@lungaabroad.id" target="_blank" rel="noopener noreferrer"><span class="social-mark">♪</span>TikTok <span aria-hidden="true">↗</span></a>
        <a href="https://www.facebook.com/lungaabroad.id/" target="_blank" rel="noopener noreferrer"><span class="social-mark">f</span>Facebook <span aria-hidden="true">↗</span></a>
        <a href="https://www.threads.net/@lungaabroad.id" target="_blank" rel="noopener noreferrer"><span class="social-mark">@</span>Threads <span aria-hidden="true">↗</span></a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© <span id="current-year"></span> Lungaabroad.id. Hak cipta dilindungi.</p>
      <p>Informasi visa, imigrasi, dan ujian dapat berubah. Selalu verifikasi di situs resmi IRCC, kedutaan, dan penyelenggara ujian.</p>
    </div>
  </div>
</footer>
<script src="./script.js"></script>
</body>
</html>























<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Pelajari program bahasa Prancis Lungaabroad, estimasi durasi belajar, jenjang A1–B2, dan persiapan TCF Canada atau TEF Canada.">
  <meta name="theme-color" content="#0b1d36">
  <title>Program Bahasa Prancis — Lunga Abroad</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body id="top">
  <header class="header">
    <div class="container nav">
      <a class="page-back-button" href="index.html#pilihan-program" data-history-back aria-label="Kembali ke halaman sebelumnya" title="Kembali ke halaman sebelumnya">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        <span>Kembali</span>
      </a>
      <a class="logo" href="index.html#top" aria-label="Lunga Abroad, beranda">
        <img class="site-logo-mark" src="assets/img/logo-mark.png" alt="">
        <span class="logo-type"><span class="logo-lunga">LUNGA</span><span class="logo-abroad">ABROAD</span></span>
      </a>
      <nav class="nav-links" aria-label="Navigasi utama">
        <a href="index.html#pilihan-program">Pilihan program</a>
        <a href="index.html#proses">Proses</a>
        <a href="index.html#faq">FAQ</a>
      </nav>
      <a class="button" href="index.html#kontak">Konsultasi awal</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Navigasi ponsel" hidden>
      <a href="index.html#pilihan-program">Pilihan program</a>
      <a href="index.html#proses">Proses</a>
      <a href="index.html#faq">FAQ</a>
      <a href="index.html#kontak">Konsultasi awal</a>
    </nav>
  </header>

  <main>
    <section class="program-hero">
      <div class="container program-hero-content">
        <p class="eyebrow">Program bahasa Prancis</p>
        <h1 id="program-title">Belajar bahasa Prancis dengan arah yang jelas.</h1>
        <p class="program-hero-copy" id="program-intro">Pilih program yang sesuai dengan level, tujuan, dan waktu belajarmu.</p>
        <div class="program-hero-meta">
          <span class="program-duration-pill"><span aria-hidden="true">◷</span> Durasi pilihan: <strong id="hero-duration">3 bulan</strong></span>
          <a class="button" href="#estimasi">Lihat estimasi durasi <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>

    <section class="section program-detail-section" aria-labelledby="program-detail-title">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow" id="program-track">Rincian program</p>
          <h2 id="program-detail-title">Rencana belajar yang <span>jelas dan terarah.</span></h2>
          <p id="program-detail-summary">Pilih detail program untuk melihat durasi, jumlah sesi, jadwal, biaya, dan benefit pembelajaran.</p>
        </div>

        <div class="program-facts-grid" id="program-facts" aria-live="polite"></div>

        <section class="program-schedule-panel" aria-labelledby="program-schedule-title">
          <div class="program-schedule-heading">
            <p class="eyebrow">Waktu belajar</p>
            <h3 id="program-schedule-title">Pilihan jadwal kelas</h3>
            <p id="program-schedule-description"></p>
          </div>
          <ul class="program-schedule-list" id="program-schedule-list"></ul>
        </section>

        <div class="program-benefit-layout">
          <section class="program-benefit-panel" aria-labelledby="program-benefit-title">
            <p class="eyebrow">Yang kamu dapat</p>
            <h3 id="program-benefit-title">Benefit program</h3>
            <ul class="program-check-list" id="program-benefit-list"></ul>
          </section>
          <section class="program-fit-panel" aria-labelledby="program-fit-title">
            <p class="eyebrow">Pertimbangkan program ini</p>
            <h3 id="program-fit-title">Cocok untuk kamu yang</h3>
            <ul class="program-check-list" id="program-fit-list"></ul>
          </section>
        </div>
        <p class="program-assessment-note" id="program-assessment-note" hidden></p>
        <p class="program-note">Rincian program dan jadwal mengikuti materi yang diberikan Lungaabroad. Konfirmasikan ketersediaan kelas dan biaya terbaru sebelum mendaftar.</p>
      </div>
    </section>

    <section class="section program-level-section" id="jenjang" aria-labelledby="level-title">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Jenjang belajar</p>
          <h2 id="level-title">Mulai dari levelmu, <span>bertahap sampai target.</span></h2>
          <p>Kenali gambaran setiap jenjang bahasa Prancis. Tutor akan membantu menentukan titik mulai yang sesuai dengan kemampuanmu.</p>
        </div>
        <div class="level-tabs" role="tablist" aria-label="Jenjang bahasa Prancis">
          <button class="level-tab is-active" type="button" role="tab" id="tab-a1" aria-selected="true" aria-controls="level-panel" data-level="A1">A1</button>
          <button class="level-tab" type="button" role="tab" id="tab-a2" aria-selected="false" aria-controls="level-panel" data-level="A2" tabindex="-1">A2</button>
          <button class="level-tab" type="button" role="tab" id="tab-b1" aria-selected="false" aria-controls="level-panel" data-level="B1" tabindex="-1">B1</button>
          <button class="level-tab" type="button" role="tab" id="tab-b2" aria-selected="false" aria-controls="level-panel" data-level="B2" tabindex="-1">B2</button>
        </div>
        <div class="level-panel" id="level-panel" role="tabpanel" aria-labelledby="tab-a1" tabindex="0">
          <div>
            <p class="level-kicker" id="level-kicker">Pemula · Dasar</p>
            <h3 id="level-name">Mulai berkomunikasi dalam situasi sederhana.</h3>
            <p id="level-description">Mengenal ungkapan sehari-hari, memperkenalkan diri, dan memahami percakapan yang disampaikan dengan perlahan.</p>
          </div>
          <div class="level-hours"><strong id="level-hours">±90 jam</strong><span>gambaran jam belajar kumulatif</span></div>
        </div>
        <p class="program-note">Perkiraan jam belajar adalah gambaran umum. Kecepatan dan kebutuhan belajar setiap orang dapat berbeda.</p>
      </div>
    </section>

    <section class="section estimate-section" id="estimasi" aria-labelledby="estimate-title">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Kalkulator durasi</p>
          <h2 id="estimate-title">Lihat perkiraan waktu <span>belajarmu.</span></h2>
          <p>Pilih jenis program dan paket pembelajaran untuk melihat estimasi durasinya.</p>
        </div>
        <div class="estimate-card">
          <div class="estimate-fields">
            <label for="program-select">Jenis program
              <select id="program-select">
                <option value="reguler">Program Reguler</option>
                <option value="extension">Program Extension</option>
                <option value="preparation">Program Preparation</option>
                <option value="private">Private 1 on 1</option>
                <option value="private-group">Private Group</option>
              </select>
            </label>
            <label for="package-select">Paket pembelajaran
              <select id="package-select"></select>
            </label>
            <p class="estimate-hint" id="estimate-hint">Pilih paket untuk melihat gambaran materi dan durasinya.</p>
          </div>
          <div class="estimate-result" aria-live="polite">
            <span>Perkiraan durasi</span>
            <strong id="duration-result">3 bulan</strong>
            <p id="duration-detail">Program Reguler · pembelajaran bertahap</p>
          </div>
        </div>
        <p class="program-note">Durasi mengikuti paket pembelajaran. Jadwal dan rencana belajar akan dibahas bersama tim Lungaabroad.</p>
      </div>
    </section>

    <section class="section exam-section" id="ujian" aria-labelledby="exam-title">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Persiapan ujian</p>
          <h2 id="exam-title">TCF Canada dan TEF Canada: <span>empat kemampuan.</span></h2>
          <p>Untuk peserta yang menyiapkan ujian bahasa Prancis, kenali empat keterampilan yang menjadi bagian dari tes.</p>
        </div>
        <div class="exam-table-wrap">
          <table class="exam-table">
            <thead><tr><th scope="col">Ujian</th><th scope="col">Kemampuan yang diuji</th><th scope="col">Catatan</th></tr></thead>
            <tbody>
              <tr><th scope="row">TCF Canada</th><td>Mendengar, membaca, menulis, berbicara</td><td>Periksa format dan ketentuan terbaru dari penyelenggara ujian.</td></tr>
              <tr><th scope="row">TEF Canada</th><td>Mendengar, membaca, menulis, berbicara</td><td>Periksa format dan ketentuan terbaru dari penyelenggara ujian.</td></tr>
            </tbody>
          </table>
        </div>
        <ul class="exam-skills" aria-label="Empat kemampuan bahasa">
          <li><span>01</span><strong>Mendengar</strong><small>Compréhension orale</small></li>
          <li><span>02</span><strong>Membaca</strong><small>Compréhension écrite</small></li>
          <li><span>03</span><strong>Menulis</strong><small>Expression écrite</small></li>
          <li><span>04</span><strong>Berbicara</strong><small>Expression orale</small></li>
        </ul>
        <p class="program-note">Persyaratan imigrasi dan ujian dapat berubah. Selalu verifikasi informasi terbaru melalui IRCC dan penyelenggara ujian.</p>
      </div>
    </section>

    <section class="section program-cta-section">
      <div class="container program-cta">
        <div><p class="eyebrow">Langkah berikutnya</p><h2>Masih ragu memilih <span>program?</span></h2><p>Ceritakan tujuan dan levelmu. Tim Lungaabroad dapat membantu menjelaskan pilihan belajar yang tersedia.</p></div>
        <a class="button" href="index.html#kontak">Konsultasi awal <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <p>© <span id="current-year"></span> Lungaabroad.id · Klaten, Jawa Tengah 57454</p>
      <a href="index.html#pilihan-program">Kembali ke pilihan program ↑</a>
    </div>
  </footer>
  <script src="./script.js"></script>
  <script src="./program.js"></script>
</body>
</html>
