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
      get moviesGroupedByYear() {
        return groupBy(
          this.movies.filter((movie) => movie.year),
          "year"
        );
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
  <ul class="mb-8 flex gap-8">
    <li
      v-for="(movie, index) in moviesGroupedByYear"
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
      v-for="(movie, index) in moviesGroupedByYear"
      :id="`movie-card-${movie[0].year}`"
      :key="index"
      :movies-list-by-year="movie"
      :active-year="activeYear"
    />
  </div>
</template>

<style>
/* stylelint-disable-next-line selector-id-pattern */
#__nuxt {
  padding: 2rem;
}

.card-component {
  cursor: pointer;

  display: flex;
  justify-content: center;

  width: 100%;

  font-family: "Bebas Neue", cursive;
  font-size: 2rem;

  border: 2px solid black;
}

.card-component.active-year {
  color: black;
  border: 2px solid rgb(36 123 166);
  box-shadow: rgb(36 123 166) 0 0 10px 2px;
}
</style>
