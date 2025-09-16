const containerEl = document.querySelector(".main-container");
const detailEl = document.querySelector(".detail-card");

export function updateUI(data) {
  data.forEach((country) => {
    const { region, flags, name, population } = country;

    const cardHtml = `
          <a
            href="detail.html?country=/name/${name.common}"
            class="country-card card bg-base-200 shadow-sm rounded-xl transition transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <figure class="h-[200px] overflow-hidden rounded-xl">
              <img
                src="${flags.svg}"
                alt=""
                class="w-full h-full object-cover"
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

export function updateDetail(data) {
  const {
    population,
    borders,
    capital,
    flags,
    name,
    region,
    tld,
    subregion,
    currencies,
    languages,
  } = data;

  const nativeName = Object.values(name.nativeName)[0].official;
  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages);

  const infoHtml = `

    <figure
            class="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-cover mx-auto"
          >
            <img class="detail-img"
            src="${flags.svg}"
            " alt="img" />
          </figure>
          <div class="card-body">
            <div>
              <h2 class="card-title text-2xl">${name.common}</h2>

              <!-- detail info -->
              <div class="my-2">
                <!-- name -->
                <span class="font-semibold">Native Name:</span>
                <span>${nativeName}</span><br />
                <!-- population -->
                <span class="font-semibold">Populatioin:</span>
                <span>${population}</span><br />
                <!-- region -->
                <span class="font-semibold">Region:</span>
                <span>${region}</span><br />
                <!-- subregion -->
                <span class="font-semibold">Sub Region:</span>
                <span>${subregion}</span><br />
                <!-- capital -->
                <span class="font-semibold">Capital:</span>
                <span>${capital}</span><br />
                <!-- domain -->
                <span class="font-semibold">Top Level Domain:</span>
                <span>${tld}</span><br />
                <!-- currencies -->
                <span class="font-semibold">Currencies:</span>
                <span>${currency}</span><br />
                <!-- languages -->
                <span class="font-semibold">Languages:</span>
                <span>${language}</span>
              </div>
              <!-- border countries -->
              <h2 class="text-2xl my-4">Border countries:</h2>
              <div
                class="flex gap-2.5 items-center overflow-x-auto w-[290px] lg:w-[390px] scrollbar-hide"
              >
              ${
                borders
                  ? borders
                      .map((item) => {
                        return ` <a
                  class="btn btn-sm btn-outline btn-ghost flex-shrink-0"
                  href="./detail.html?country=/alpha/${item}"
                  >${item}</a
                >`;
                      })
                      .join("")
                  : "No Borders"
              }
               
              </div>
            </div>
          </div>

  `;
  detailEl.insertAdjacentHTML("beforeend", infoHtml);
}
