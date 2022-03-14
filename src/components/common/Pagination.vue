<template>
  <div>
    <nav
      class="is-inline-flex pagination is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <ul class="pagination-list">
        <li @click="emit('clickStart')">
          <a class="pagination-link">
            <font-awesome-icon icon="fa-solid fa-backward-step" />
          </a>
        </li>
        <li>
          <span class="pagination-ellipsis"></span>
        </li>
        <li @click="emit('clickPrevius')">
          <a class="pagination-link">
            <font-awesome-icon icon="fa-solid fa-caret-left" />
          </a>
        </li>
        <li @click="emit('clickRandom')">
          <a class="pagination-link">
            <font-awesome-icon icon="fa-solid fa-shuffle" />
          </a>
        </li>
        <li @click="emit('clickNext')">
          <a class="pagination-link">
            <font-awesome-icon icon="fa-solid fa-caret-right" />
          </a>
        </li>
        <li>
          <span class="pagination-ellipsis"></span>
        </li>
        <li @click="emit('clickEnd')">
          <a class="pagination-link">
            <font-awesome-icon icon="fa-solid fa-forward-step" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {};
  },
  props: {
    startPage: Number,
    endPage: Number,
    previusPage: Number,
    nextPage: Number,
  },
  methods: {
    emit(action) {
      this.$emit(action);
    },
  },
};
</script>

<style>
</style>