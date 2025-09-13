export function updateUI(data, template, containerEl) {
  const fragment = document.createDocumentFragment();

  containerEl.innerHTML = "";

  data.forEach((country) => {
    console.log(country);
    const { capital, flags, name } = country;

    const clone = template.content.cloneNode(true);

    const flag = clone.querySelector(".country-img ");
    const countryName = clone.querySelector(".country-name");
    const countryCapital = clone.querySelector(".country-capital");
    const countryRegion = clone.querySelector(".country-region");
    const countryPopulation = clone.querySelector(".country-population");

    flag.src = flags.png;
    countryName.textContent = name.common;
    countryCapital.textContent = capital;

    fragment.appendChild(clone);
  });
  containerEl.appendChild(fragment);
}
