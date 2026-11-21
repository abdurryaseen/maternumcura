const serviceDetails = {
  medicaidScheduling: {
    title: "Book a Medicaid intro call",
    description: "Choose a time to talk about prenatal support and the Medicaid intake and billing process.",
    linkLabel: "Open scheduling"
  },
  privateScheduling: {
    title: "Book a private-pay consultation call",
    description: "Choose a time to discuss prenatal support, package options, and pricing.",
    linkLabel: "Open scheduling"
  },
  medicaidIntake: {
    title: "Medicaid intake",
    description: "If the practice has asked you to complete intake, continue to its separate intake service.",
    linkLabel: "Continue to Medicaid intake"
  }
};

const dialog = document.querySelector("dialog");
const title = document.querySelector("#dialog-title");
const copy = document.querySelector("#dialog-copy");
const link = document.querySelector("#dialog-link");
const contact = document.querySelector("#dialog-contact");
const services = document.querySelector("#private-services");
const serviceEmail = document.querySelector("#service-email");
const serviceCheckboxes = [...services.querySelectorAll('input[type="checkbox"]')];
const dismiss = document.querySelector("#dialog-dismiss");

function secureUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

for (const button of document.querySelectorAll("[data-service]")) {
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    const { title: heading, description, linkLabel } = serviceDetails[service];
    const url = secureUrl(window.MATERNUMCURA?.[service]);
    title.textContent = heading;
    const isPrivatePay = service === "privateScheduling";
    copy.textContent = url || isPrivatePay ? description : "This online service is currently unavailable.";
    link.hidden = !url;
    contact.hidden = Boolean(url);
    contact.querySelector("a").href = isPrivatePay ? serviceEmail.href : "mailto:support@maternumcura.com";
    dismiss.hidden = Boolean(url);

    if (url) {
      link.href = url;
      link.textContent = linkLabel;
    } else {
      link.removeAttribute("href");
    }

    dialog.showModal();
  });
}

function updateQuoteEmail() {
  const selected = serviceCheckboxes.filter(input => input.checked).map(input => "- " + input.value);
  const subject = encodeURIComponent("Private-pay doula consultation and quote");
  const message = selected.length
    ? "Hi, I’d like to discuss a private-pay package for:\n\n" + selected.join("\n")
    : "Hi, I’d like to discuss private-pay doula services and schedule a consultation.";
  serviceEmail.href = "mailto:support@maternumcura.com?subject=" + subject + "&body=" + encodeURIComponent(message);
}

services.addEventListener("change", updateQuoteEmail);
serviceEmail.addEventListener("click", updateQuoteEmail);
updateQuoteEmail();
