const button = document.getElementById('button');
const darkModeCheckbox = document.getElementById('darkModeCheckbox');
const joketexthtml = document.getElementById('text');

button.addEventListener('click', async () => {
  const fetchJokes = await fetch('http://localhost:3000');
  const jokes = await fetchJokes.json();
  fillScreen(jokes);
});

function fillScreen(jokes) {
  joketexthtml.textContent = `${jokes.setup} ${jokes.punchline} `;
}

darkModeCheckbox.addEventListener('change', () => {
  if (darkModeCheckbox.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
