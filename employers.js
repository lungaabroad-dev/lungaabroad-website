/* Employer form: prepare a WhatsApp message for review and manual sending. */
(function () {
  const LUNGA_WHATSAPP_NUMBER = "6285842540779";
  const form = document.querySelector("#employer-inquiry-form");
  const status = document.querySelector("#employer-form-status");
  if (!form || !status) return;

  const read = (name, fallback = "Not provided") => {
    const field = form.elements[name];
    const value = field ? String(field.value || "").trim() : "";
    return value || fallback;
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.className = "partnership-form-status";

    if (!form.reportValidity()) return;

    const quantity = Number(read("quantity", "0"));
    const wage = Number(read("wage", "0"));
    const hours = read("hours", "Not provided");
    if (!Number.isInteger(quantity) || quantity < 1) {
      form.elements.quantity.setCustomValidity("Enter a whole number of at least 1.");
      form.elements.quantity.reportValidity();
      form.elements.quantity.setCustomValidity("");
      return;
    }
    if (!Number.isFinite(wage) || wage <= 0) {
      form.elements.wage.setCustomValidity("Enter a valid hourly wage greater than zero.");
      form.elements.wage.reportValidity();
      form.elements.wage.setCustomValidity("");
      return;
    }
    if (hours !== "Not provided" && (!Number.isInteger(Number(hours)) || Number(hours) < 1)) {
      form.elements.hours.setCustomValidity("Enter a whole number of hours, or leave this field empty.");
      form.elements.hours.reportValidity();
      form.elements.hours.setCustomValidity("");
      return;
    }

    const message = [
      "NEW EMPLOYER HIRING INQUIRY — LUNGA ABROAD",
      "",
      "COMPANY INFORMATION",
      `Company Name: ${read("company")}`,
      `Website: ${read("website")}`,
      `Country: ${read("country")}`,
      `Province / Territory: ${read("province")}`,
      `Industry: ${read("industry")}`,
      "",
      "CONTACT INFORMATION",
      `Contact Person: ${read("contactPerson")}`,
      `Position: ${read("contactPosition")}`,
      `Business Email: ${read("email")}`,
      `Phone / WhatsApp: ${read("phone")}`,
      "",
      "HIRING REQUIREMENTS",
      `Job Position: ${read("jobTitle")}`,
      `NOC Code: ${read("noc")}`,
      `TEER Category: ${read("teer")}`,
      `Number of Candidates: ${quantity}`,
      `Offered Hourly Wage: CAD $${wage.toFixed(2)}`,
      `Working Hours / Week: ${hours}`,
      `Employment Type: ${read("employmentType")}`,
      `Hiring Timeline: ${read("timeline")}`,
      "",
      "JOB DESCRIPTION / ADDITIONAL REQUIREMENTS",
      read("jobDescription"),
      "",
      "ADDITIONAL INFORMATION",
      read("additional"),
      "",
      "Submitted through: Lunga Abroad — Employer page"
    ].join("\n");

    const whatsappUrl = `https://wa.me/${LUNGA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    status.textContent = "Preparing your inquiry. WhatsApp will open with the completed message; review it and press Send to submit.";
    status.classList.add("is-ready");
    window.location.href = whatsappUrl;
  });
})();
