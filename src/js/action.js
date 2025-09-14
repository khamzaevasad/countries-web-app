const input = document.getElementById("input");

input.addEventListener("input", () => {
  const searchVal = input.value.toLocaleLowerCase();

  const titles = document.querySelectorAll(".country-name");
  const card = document.querySelectorAll(".country-card ");
  titles.forEach((title, i) => {
    if (title.textContent.toLocaleLowerCase().includes(searchVal)) {
      card[i].style.display = "flex";
    } else {
      card[i].style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".select__filter");

  select.addEventListener("change", (e) => {
    const region = document.querySelectorAll(".country-region");
    const card = document.querySelectorAll(".country-card ");

    const optionVal = e.target.value;

    region.forEach((item, i) => {
      if (item.textContent == optionVal || optionVal == "All") {
        card[i].style.display = "flex";
      } else {
        card[i].style.display = "none";
      }
    });
  });
});

// test
