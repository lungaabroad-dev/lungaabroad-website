(function () {
  const data = window.LUNGA_ABOUT_CONTENT;
  if (!data) return;

  const teamGrid = document.querySelector("#aboutus-team-grid");
  if (teamGrid) {
    teamGrid.replaceChildren(...data.team.map(function (member) {
      const card = document.createElement("article");
      card.className = "aboutus-team-card";

      const portrait = document.createElement("div");
      portrait.className = "aboutus-team-portrait";
      if (member.photo) {
        const image = document.createElement("img");
        image.src = member.photo;
        image.alt = member.photoAlt || `Foto ${member.name}`;
        image.loading = "lazy";
        image.width = 480;
        image.height = 600;
        portrait.append(image);
      } else {
        portrait.classList.add("is-placeholder");
        portrait.setAttribute("role", "img");
        portrait.setAttribute("aria-label", `${member.photoAlt || `Foto ${member.name}`} belum tersedia`);
        const initials = document.createElement("span");
        initials.textContent = member.initials;
        initials.setAttribute("aria-hidden", "true");
        portrait.append(initials);
      }

      const body = document.createElement("div");
      body.className = "aboutus-team-body";
      const title = document.createElement("p");
      title.className = "aboutus-team-title";
      title.textContent = member.title;
      const name = document.createElement("h3");
      name.textContent = member.name;
      const description = document.createElement("p");
      description.className = "aboutus-team-description";
      description.textContent = member.description;
      body.append(title, name, description);

      const background = member.background || {};
      const details = [];
      if (background.education) details.push(["Pendidikan", background.education]);
      if (background.experience) details.push(["Pengalaman", background.experience]);
      if (Array.isArray(background.expertise) && background.expertise.length) details.push(["Keahlian", background.expertise.join(", ")]);
      if (details.length) {
        const detailList = document.createElement("dl");
        detailList.className = "aboutus-team-background";
        details.forEach(function (detail) {
          const row = document.createElement("div");
          const label = document.createElement("dt");
          label.textContent = detail[0];
          const value = document.createElement("dd");
          value.textContent = detail[1];
          row.append(label, value);
          detailList.append(row);
        });
        body.append(detailList);
      }

      card.append(portrait, body);
      return card;
    }));
  }

  const timeline = document.querySelector("#aboutus-timeline");
  const milestones = data.history && Array.isArray(data.history.timeline) ? data.history.timeline : [];
  if (timeline && milestones.length) {
    timeline.hidden = false;
    timeline.replaceChildren(...milestones.map(function (milestone) {
      const item = document.createElement("li");
      const year = document.createElement("strong");
      year.textContent = milestone.year;
      const content = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = milestone.title;
      const description = document.createElement("p");
      description.textContent = milestone.description;
      content.append(title, description);
      item.append(year, content);
      return item;
    }));
  }

  const vision = document.querySelector("#aboutus-vision");
  const visionStatus = document.querySelector("#aboutus-vision-status");
  if (vision) vision.textContent = data.visionMission.vision;
  if (visionStatus) visionStatus.textContent = data.visionMission.status;
  const missions = document.querySelector("#aboutus-missions");
  if (missions) {
    missions.replaceChildren(...data.visionMission.missions.map(function (mission) {
      const item = document.createElement("li");
      const content = typeof mission === "string"
        ? { title: "", description: mission }
        : mission;
      const copy = document.createElement("div");
      copy.className = "aboutus-mission-copy";
      if (content.title) {
        const title = document.createElement("h3");
        title.className = "aboutus-mission-title";
        title.textContent = content.title;
        copy.append(title);
      }
      const description = document.createElement("p");
      description.className = "aboutus-mission-description";
      description.textContent = content.description;
      copy.append(description);
      item.append(copy);
      return item;
    }));
  }

  const entity = document.querySelector("#aboutus-entity-name");
  if (entity) entity.textContent = data.legal.entityName;
  const nib = document.querySelector("#aboutus-nib");
  if (nib) nib.textContent = data.legal.nib || "—";
  const kbliList = document.querySelector("#aboutus-kbli-list");
  if (kbliList) {
    kbliList.replaceChildren(...data.legal.kbli.map(function (code) {
      const item = document.createElement("li");
      item.textContent = `KBLI ${code}`;
      return item;
    }));
  }
  const qrImage = document.querySelector("#aboutus-qr-image");
  const qrPlaceholder = document.querySelector("#aboutus-qr-placeholder");
  if (data.legal.qrCode && qrImage) {
    qrImage.src = data.legal.qrCode;
    qrImage.alt = data.legal.qrCodeAlt;
    qrImage.hidden = false;
    if (qrPlaceholder) qrPlaceholder.hidden = true;
  }
})();
