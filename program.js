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
      const priceMatch = fact[0].toLowerCase() === "biaya" ? fact[1].match(/^Rp([\d.]+)(.*)$/) : null;
      if (priceMatch) {
        const originalAmount = Number(priceMatch[1].replace(/\./g, "")) + 1000000;
        const originalPrice = document.createElement("s");
        originalPrice.className = "program-fact-price-original";
        originalPrice.textContent = `Rp${new Intl.NumberFormat("id-ID").format(originalAmount)}${priceMatch[2]}`;
        const promoLabel = document.createElement("small");
        promoLabel.className = "program-fact-price-label";
        promoLabel.textContent = "Harga promo";
        value.className = "program-fact-price-current";
        value.textContent = fact[1];
        card.classList.add("program-fact-price-card");
        card.setAttribute("aria-label", `Harga promo ${fact[1]}, harga normal ${originalPrice.textContent}`);
        card.append(label, originalPrice, promoLabel, value);
      } else {
        value.textContent = fact[1];
        card.append(label, value);
      }
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


