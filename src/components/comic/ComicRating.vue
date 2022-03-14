<template>
  <rating
    :items="items"
    legend="Rating:"
    v-model="value"
    @change="update"
    v-if="show"
  ></rating>
</template>

<script>
import { mapState, mapActions } from "vuex";
import comicsTypes from "@/store/modules/comics/types";
import Rating from 'vue-bulma-rating'

export default {
  name: "ComicRating",
  components: { Rating },
  computed: {
    ...mapState(comicsTypes.PATH, [
      "minNumberComic",
      "maxNumberComic",
      "comic",
    ]),
  },
  data() {
    return {
      show: true,
      value: 0,
      items: [
        {
          title: '5 Stars',
          value: 5
        },
        {
          title: '4 Stars',
          value: 4
        },
        {
          title: '3 Stars',
          value: 3
        },
        {
          title: '2 Stars',
          value: 2
        },
        {
          title: '1 Star',
          value: 1
        }
      ]
    };
  },
  methods: {
    ...mapActions(comicsTypes.PATH, {
      updateCurrentNumberComic: comicsTypes.actions.UPDATE_CURRENT_NUMBER_COMIC,
      fetchComic: comicsTypes.actions.FETCH_COMIC,
      updatePoints: comicsTypes.actions.UPDATE_POINTS,
    }),
    async update(value) {
      this.value = value;
      
      this.updatePoints({
        path: 'comics',
        data: {
          ...this.comic,
          points: value
        }
      });
      
      this.updateCurrentNumberComic(Math.floor(Math.random() * this.maxNumberComic));
      this.show = false;
      await this.fetchComic();
      this.value = 0;
      this.show = true;
    },
  },
};
</script>

<style>
</style>