<script>
import groupBy from "lodash.groupby";
import moviesLibrary from "/data/movies.json";
import MoviesCard from "/components/MoviesCard";

export default {
  name: "App",
  components: {
    MoviesCard,
  },
  data() {
    return {
      activeYear: "",
      movies: moviesLibrary,
      get movieFilter() {
        const moviesYear = this.movies.map((movie) => movie.year);
        const moviesFiltered = moviesYear
          .filter((movie, index) => moviesYear.indexOf(movie) !== index)
          .map((movie) => movie);

        const moviesGroupedByYear = groupBy(
          this.movies.filter((movie) => moviesFiltered.includes(movie.year)),
          "year"
        );
        return moviesGroupedByYear;
      },
    };
  },
  head() {
    return {
      title: "Movies library",
    };
  },
  methods: {
    revealMovies(movieYear) {
      return movieYear;
    },
  },
};
</script>

<template>
  <ul class="flex gap-8 p-8">
    <li
      v-for="(movie, index) in movieFilter"
      :key="index"
      class="card-component | flex justify-around gap-8 rounded-lg p-8"
      :class="{ 'active-year': movie[0].year === activeYear }"
      @click="(e) => (activeYear = e.target.innerText)"
    >
      {{ movie[0].year }}
    </li>
  </ul>
  <div>
    <MoviesCard
      v-for="(movie, index) in movieFilter"
      :id="`movie-card-${movie[0].year}`"
      :key="index"
      :movies-list-by-year="movie"
      :active-year="activeYear"
    />
  </div>
</template>

<style>
.card-component {
  cursor: pointer;

  display: flex;
  justify-content: center;

  width: 100%;
  padding: 2rem;

  font-family: "Bebas Neue", cursive;
  font-size: 2rem;

  border: 2px solid black;
}

.card-component:hover,
.card-component.active-year {
  color: white;
  background: linear-gradient(90deg, rgb(0 0 0 / 100%) 0%, rgb(48 154 223 / 100%) 100%);
}
</style>
