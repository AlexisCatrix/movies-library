<script>
export default {
  props: {
    moviesListByYear: {
      type: Object,
      default: () => {},
    },
    activeYear: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <ul class="movies-list">
    <li
      v-for="(movie, index) in moviesListByYear"
      v-show="activeYear === movie.year"
      :key="index"
      class="my-4 flex gap-8 py-4"
      :class="{ 'is-display': activeYear === movie.year }"
    >
      <img :src="movie.poster_url" class="w-1/5" />
      <div>
        <h1>{{ movie.name }}</h1>
        <span>Director: {{ movie.director }}</span>
      </div>
    </li>
  </ul>
</template>

<style>
@keyframes smooth-display {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

h1 {
  font-size: revert;
}

.movies-list .is-display {
  animation: smooth-display 0.5s;
}
</style>
