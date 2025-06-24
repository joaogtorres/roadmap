document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  const saveProgress = (e) => {
    const checkbox = e.target;
    const li = checkbox.closest("li");

    localStorage.setItem(checkbox.id, checkbox.checked);

    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  };

  const loadProgress = () => {
    checkboxes.forEach((checkbox) => {
      const isChecked = localStorage.getItem(checkbox.id) === "true";

      checkbox.checked = isChecked;

      const li = checkbox.closest("li");

      if (isChecked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", saveProgress);
  });

  loadProgress();
});