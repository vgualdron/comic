<template>
  <div>
    <pagination
      :startPage="minNumberComic"
      :endPage="maxNumberComic"
      :nextPage="currentNumberComic + 1"
      :previusPage="currentNumberComic - 1"
      @clickStart="update(minNumberComic)"
      @clickEnd="update(maxNumberComic)"
      @clickRandom="update(Math.floor(Math.random() * maxNumberComic))"
      @clickNext="update(currentNumberComic + 1)"
      @clickPrevius="update(currentNumberComic - 1)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import comicsTypes from "@/store/modules/comics/types";
import Pagination from "../common/Pagination";

export default {
  name: "ComicPagination",
  components: { Pagination },
  computed: {
    ...mapState(comicsTypes.PATH, [
      "minNumberComic",
      "maxNumberComic",
      "currentNumberComic",
    ]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(comicsTypes.PATH, {
      updateCurrentNumberComic: comicsTypes.actions.UPDATE_CURRENT_NUMBER_COMIC,
      fetchComic: comicsTypes.actions.FETCH_COMIC,
    }),
    update(number) {
      if (number <= this.maxNumberComic && number >= this.minNumberComic) {
        this.updateCurrentNumberComic(number);
        this.fetchComic();
      }
    }
  },
};
</script>

<style>
</style>