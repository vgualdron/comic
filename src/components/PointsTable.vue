<template>
  <div>
    <header class="card-header">
      <p class="card-header-title title is-4">
        General rating
      </p>
    </header>
    <v-table
      :headers="headers"
      :rows="points"
      :showHeadersInFooter="true"
      id="tablePoints"
      v-if="points && points.length > 0"
    />
    <notification
      v-else
      text="Not found data."
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import comicsTypes from "@/store/modules/comics/types";
import VTable from "./common/Table";
import Notification from "./common/Notification";

export default {
  name: "PointsTable",
  components: { VTable, Notification },
  computed: {
    ...mapState(comicsTypes.PATH, ["points"]),
  },
  data() {
    return {
      headers: [
        {
          field: "num",
          label: "Number"
        },
        {
          field: "title",
          label: "Name"
        },
        {
          field: "points",
          label: "Points"
        }
      ],
    };
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
    },
  },
};
</script>

<style>
</style>