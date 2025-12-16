document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const content = this.querySelector(".accordion-content");
    const dropdown = this.querySelector(".ddown");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      dropdown.style.display = "block";
      this.classList.remove("active");
    } else {
      document.querySelectorAll(".card").forEach((item) => {
        item.classList.remove("active");
        const itemContent = item.querySelector(".accordion-content");
        if (itemContent) {
          itemContent.style.maxHeight = null;
        }
      });

      document.querySelectorAll(".ddown").forEach((icon) => {
        icon.style.display = "block";
      });

      content.style.maxHeight = content.scrollHeight + "px";
      dropdown.style.display = "none";
      this.classList.add("active");
    }
  });
});
