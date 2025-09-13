const containerEl = document.querySelector(".main-container");

export function updateUI(data) {
  data.forEach((country) => {
    console.log(country);
    const { region, flags, name, population } = country;

    const cardHtml = `
          <a
            href=""
            class="card bg-base-200 shadow-sm rounded-xl transition transform duration-300 hover:scale-105 hover:shadow-lg card-travel"
          >
            <figure class="h-[200px] overflow-hidden rounded-xl">
              <img
                src="${flags.svg}"
              />
            </figure>
            <div class="card-body p-3">
              <!-- card body -->
              <div>
                <h2 class="font-bold text-xl country-name">${name.common}</h2>
              </div>

              <div class="flex justify-start">
                <span class="font-semibold">Population:</span>
                <span class="mx-2 country-population">${population}</span>
              </div>

              <div class="flex justify-start">
                <span class="font-semibold">Region:</span>
                <span class="mx-2 country-region">${region}</span>
              </div>

              <div class="flex justify-start">
                <span class="font-semibold">Capital:</span>
                <span class="mx-2 country-capital">${
                  country.capital ? country.capital[0] : "no capital"
                }</span>
              </div>
            </div>
          </a>
    `;
    containerEl.insertAdjacentHTML("beforeend", cardHtml);
  });
}
