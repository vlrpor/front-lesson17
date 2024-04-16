const img = document.createElement('img');
img.src = 'https://picsum.photos/id/1/200/300';

document.body.appendChild(img);

const countriesList = document.getElementById('countries-list');

const htmlString = countries.map(country => `
  <div class="country">
        <img src="${country.flag}" alt="Flag of ${country.name}">
        <h2>${country.name}</h2>
        <p>Capital: ${country.capital.join(", ")}</p>
        <a href="${country.map}" target="_blank">Open in Google Maps</a>
        <button class="button info-button" data-name="${country.name}">show more info</button>
        <button class="button delete-button" data-name="${country.name}">delete card</button>
    </div>
`).join("");

countriesList.innerHTML = htmlString;

countriesList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('delete-button')) {
    const countryName = target.getAttribute('data-name');
    const countryCard = target.closest('.country-card');
    countryCard.remove();
  } else if (target.classList.contains('info-button')) {
    const countryName = target.getAttribute('data-name');
    window.location.href = `https://www.google.com/maps/place/${countryName}`;
  }
});
