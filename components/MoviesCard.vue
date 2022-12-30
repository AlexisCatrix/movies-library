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
  <ul>
    <li
      v-for="(movie, index) in moviesListByYear"
      v-show="activeYear === movie.year"
      :key="index"
      class="my-4 mx-8 border-y-4"
    >
      <h1>{{ movie.name }}</h1>
      <span>Director: {{ movie.director }}</span>
    </li>
  </ul>
</template>

<style>
h1 {
  font-size: revert;
}
</style>
