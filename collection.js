document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  const occasionChecks = document.querySelectorAll(".filter-occasion");
  const colorChecks = document.querySelectorAll(".filter-color");
  const arrivalChecks = document.querySelectorAll(".filter-arrival");

  // Listen to all checkboxes
  document.querySelectorAll("input[type='checkbox']")
    .forEach(cb => cb.addEventListener("change", filterProducts));

  function getCheckedValues(nodeList) {
    return Array.from(nodeList)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  }

  function filterProducts() {
    const occasions = getCheckedValues(occasionChecks);
    const colors = getCheckedValues(colorChecks);
    const arrivals = getCheckedValues(arrivalChecks);

    cards.forEach(card => {
      const cardOccasion = card.dataset.occasion.split(" ");
      const cardColor = card.dataset.color;
      const cardArrival = card.dataset.arrival;

      const matchOccasion =
        occasions.length === 0 || occasions.some(o => cardOccasion.includes(o));

      const matchColor =
        colors.length === 0 || colors.includes(cardColor);

      const matchArrival =
        arrivals.length === 0 || arrivals.includes(cardArrival);

      if (matchOccasion && matchColor && matchArrival) {
        card.style.display = "";      // ✅ FIX
      } else {
        card.style.display = "none";
      }
    });
  }

});

  const closeBtn = document.querySelector(".close-popup");
  const popup = document.querySelector(".popup");

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });