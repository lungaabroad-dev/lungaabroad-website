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

/* Gerbang disclaimer; persetujuan diingat sampai sesi tab/browser berakhir. */
(function setupDisclaimerGate() {
  const storageKey = "lungaabroad-disclaimer-accepted-session-v1";
  try {
    if (window.sessionStorage.getItem(storageKey) === "yes") return;
  } catch (error) {
    // Tetap tampilkan disclaimer jika penyimpanan browser dibatasi.
  }

  const gate = document.createElement("div");
  gate.className = "disclaimer-gate";
  gate.innerHTML = `
    <section class="disclaimer-panel" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title" aria-describedby="disclaimer-copy">
      <span class="disclaimer-mark" aria-hidden="true">!</span>
      <h2 id="disclaimer-title">DISCLAIMER!</h2>
      <p id="disclaimer-copy">PROGRAM DI LUNGAABROAD DIKHUSUSKAN HANYA UNTUK ORANG YANG BERDEDIKASI TINGGI, BERKEINGINAN KUAT UNTUK BELAJAR, YAKIN TERHADAP MASA DEPAN YANG LEBIH BAIK, SELALU OPTIMIS, TIDAK MUDAH MENYERAH, BERSABAR, SIAP DENGAN TANTANGAN, DAN KONSISTEN DENGAN PROGRAM INTENSIF KAMI. TIDAK COCOK UNTUK ORANG PEMALAS, TIDAK YAKIN DENGAN DIRI SENDIRI, MUDAH MENYERAH, TIDAK SIAP DENGAN TANTANGAN DAN KESABARAN.</p>
      <div class="disclaimer-actions">
        <button class="button disclaimer-accept" type="button" data-disclaimer-accept>SAYA YAKIN</button>
        <button class="button button-secondary disclaimer-unsure" type="button" data-disclaimer-unsure>BELUM YAKIN</button>
      </div>
    </section>`;

  document.body.classList.add("disclaimer-open");
  document.body.append(gate);

  function enterWebsite() {
    try {
      window.sessionStorage.setItem(storageKey, "yes");
    } catch (error) {
      // Pengunjung tetap bisa masuk walau penyimpanan sesi tidak tersedia.
    }
    gate.classList.add("is-closing");
    document.body.classList.remove("disclaimer-open");
    window.setTimeout(function () { gate.remove(); }, 280);
  }

  const actions = gate.querySelector(".disclaimer-actions");
  gate.querySelector("[data-disclaimer-accept]").addEventListener("click", enterWebsite);
  gate.querySelector("[data-disclaimer-unsure]").addEventListener("click", function () {
    const sureButton = document.createElement("button");
    sureButton.className = "button disclaimer-accept disclaimer-confirm";
    sureButton.type = "button";
    sureButton.textContent = "HARUS YAKIN !";
    sureButton.addEventListener("click", enterWebsite);
    actions.replaceChildren(sureButton);
    sureButton.focus();
  });

  gate.querySelector("[data-disclaimer-accept]").focus();
})();
