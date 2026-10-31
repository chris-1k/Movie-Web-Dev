const movieData = [
  {
    title: 'Dark Horizon',
    genre: 'Action',
    year: 2026,
    duration: '2h 14m',
    rating: 8.9,
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Moonlit City',
    genre: 'Thriller',
    year: 2025,
    duration: '1h 56m',
    rating: 8.4,
    poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Stellar Drift',
    genre: 'Sci-Fi',
    year: 2024,
    duration: '2h 06m',
    rating: 8.7,
    poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Paper Skies',
    genre: 'Drama',
    year: 2023,
    duration: '1h 49m',
    rating: 8.1,
    poster: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Velvet Rush',
    genre: 'Comedy',
    year: 2026,
    duration: '1h 38m',
    rating: 7.9,
    poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Glass Echo',
    genre: 'Thriller',
    year: 2022,
    duration: '2h 02m',
    rating: 8.5,
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Solar Reign',
    genre: 'Action',
    year: 2025,
    duration: '2h 28m',
    rating: 8.8,
    poster: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Mosaic Heart',
    genre: 'Drama',
    year: 2024,
    duration: '1h 52m',
    rating: 8.3,
    poster: 'https://images.unsplash.com/photo-1522856339183-9f4adf4f0d7d?auto=format&fit=crop&w=900&q=80'
  }
];

const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let activeFilter = 'all';

function renderMovies() {
  const query = searchInput.value.trim().toLowerCase();

  const filteredMovies = movieData.filter((movie) => {
    const matchesFilter = activeFilter === 'all' || movie.genre === activeFilter;
    const searchableText = `${movie.title} ${movie.genre}`.toLowerCase();
    const matchesSearch = searchableText.includes(query);

    return matchesFilter && matchesSearch;
  });

  movieGrid.innerHTML = filteredMovies
    .map(
      (movie) => `
        <article class="movie-card">
          <div class="poster" style="background-image: url('${movie.poster}')">
            <div class="poster-content">
              <span class="score-pill">★ ${movie.rating}</span>
              <span class="meta-tag">${movie.genre}</span>
            </div>
          </div>

          <div class="movie-info">
            <h3>${movie.title}</h3>
            <div class="movie-meta">
              <span>${movie.year}</span>
              <span>•</span>
              <span>${movie.duration}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  if (!filteredMovies.length) {
    movieGrid.innerHTML = `
      <div class="movie-card" style="grid-column: 1 / -1; padding: 38px 20px; text-align: center;">
        <h3 style="margin: 0 0 8px;">No movies found</h3>
        <p style="margin: 0; color: var(--muted);">Try searching for another title or genre.</p>
      </div>
    `;
  }
}

searchInput.addEventListener('input', renderMovies);

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.toggle('active', btn === button);
    });

    renderMovies();
  });
});

renderMovies();
