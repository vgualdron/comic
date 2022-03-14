<template>
  <div class="comics__div max-width">
    <comic-card />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import comicsTypes from "@/store/modules/comics/types";
import ComicCard from './comic/ComicCard'

export default {
  name: 'Comic',
  components: {
    ComicCard,
  },
  props: {
  },
  computed: {
    ...mapState(comicsTypes.PATH, [
      "comic",
    ]),
  },
  async mounted () {

    await this.fetchComic();
    this.fetchPoints('comics');
  },
  methods: {
    ...mapActions(comicsTypes.PATH, {
      fetchComic: comicsTypes.actions.FETCH_COMIC,
      fetchPoints: comicsTypes.actions.FETCH_POINTS
    }),
  }
}
</script>