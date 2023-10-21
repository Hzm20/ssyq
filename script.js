const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const searchResults = document.querySelector('.search-results');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.value;
  fetch(`search.php?query=${query}`)
    .then(response => response.json())
    .then(searchResults => {
      displaySearchResults(searchResults);
    })
    .catch(error => {
      console.error(error);
    });
});

function displaySearchResults(results) {
  searchResults.innerHTML = '';

  results.forEach(result => {
    const item = document.createElement('div');
    item.classList.add('search-results-item');

    const title = document.createElement('h2');
    title.classList.add('search-results-title');
    title.textContent = result.title;

    const url = document.createElement('p');
    url.classList.add('search-results-url');
    url.textContent = result.url;

    const description = document.createElement('p');
    description.classList.add('search-results-description');
    description.textContent = result.description;

    item.appendChild(title);
    item.appendChild(url);
    item.appendChild(description);

    searchResults.appendChild(item);
  });
}