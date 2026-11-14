/* Partnership inquiries are prepared in WhatsApp; the visitor reviews and sends them. */
(function () {
  const whatsappNumber = "6285842540779";
  const form = document.querySelector("#partnership-inquiry-form");
  const typeSelect = document.querySelector("#organization-type");
  const credentialFields = document.querySelector("#credential-fields");
  const status = document.querySelector("#partnership-form-status");
  if (!form || !typeSelect || !credentialFields || !status) return;

  const fieldsByType = {
    "RCIC / Immigration Consultant": [
      ["RCIC registration number", "rcicNumber", true],
      ["CICC Public Register URL, if available", "ciccUrl", false]
    ],
    "Canadian Immigration Law Firm": [
      ["Provincial Law Society / Bar Association", "lawSociety", true],
      ["Province of Practice", "lawProvince", true],
      ["Professional registration number, where applicable", "lawRegistration", false]
    ],
    "Licensed Canadian Recruitment Agency": [
      ["Business registration details", "businessRegistration", true],
      ["Recruitment agency licence number, if required", "agencyLicence", false],
      ["Province or territory of operation", "agencyProvince", true]
    ],
    "French Language Education Institution": [
      ["Institution name and specialization", "educationSpecialization", true]
    ]
  };

  function renderCredentialFields() {
    const items = fieldsByType[typeSelect.value] || [];
    credentialFields.replaceChildren();
    if (!items.length) {
      credentialFields.hidden = true;
      return;
    }
    credentialFields.hidden = false;
    const heading = document.createElement("h4");
    heading.textContent = "Relevant professional details";
    credentialFields.append(heading);
    items.forEach(function (item) {
      const label = document.createElement("label");
      label.textContent = item[0];
      const input = document.createElement("input");
      input.name = item[1];
      input.type = item[1].toLowerCase().includes("url") ? "url" : "text";
      input.required = item[2];
      label.append(input);
      credentialFields.append(label);
    });
  }

  typeSelect.addEventListener("change", renderCredentialFields);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.className = "partnership-form-status";

    if (form.elements.companyFax.value.trim()) return;
    const interests = Array.from(form.querySelectorAll('input[name="interests"]:checked'));
    if (!interests.length) {
      status.textContent = "Select at least one partnership interest before opening WhatsApp.";
      status.classList.add("is-error");
      form.querySelector(".partnership-interest-grid").scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const lines = [
      "PARTNERSHIP INQUIRY — LUNGA ABROAD",
      "",
      `Organization: ${values.get("organization")}`,
      `Organization type: ${values.get("organizationType")}`,
      `Country: ${values.get("country")}`,
      `Province / territory: ${values.get("province") || "Not provided"}`,
      `Website: ${values.get("website") || "Not provided"}`,
      `Organization description: ${values.get("organizationDescription")}`,
      "",
      `Contact: ${values.get("contactName")}`,
      `Position: ${values.get("position")}`,
      `Business email: ${values.get("email")}`,
      `Phone / WhatsApp: ${values.get("phone") || "Not provided"}`,
      `Preferred contact method: ${values.get("contactMethod")}`,
      "",
      `Professional details: ${Array.from(credentialFields.querySelectorAll("input")).map((input) => `${input.previousSibling.textContent}: ${input.value || "Not provided"}`).join("; ") || "Not applicable"}`,
      `Partnership interests: ${interests.map((item) => item.value).join(", ")}`,
      "",
      `Proposal: ${values.get("proposal")}`,
      "",
      `Consent: confirmed on ${new Date().toLocaleString()}`
    ];
    const body = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${body}`;
    status.textContent = "WhatsApp is opening with your partnership inquiry. Review the message and tap Send to submit it.";
    status.classList.add("is-ready");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
})();



