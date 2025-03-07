document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const content = this.querySelector(".accordion-content");
    const dropdown = this.querySelector(".ddown");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      dropdown.style.display = "block";
    } else {
      document
        .querySelectorAll(".accordion-content")
        .forEach((item) => (item.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
      dropdown.style.display = "none";
    }
  });
});

