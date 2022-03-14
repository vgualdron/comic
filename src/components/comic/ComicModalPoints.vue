<template>
  <modal @close="close">
    <template v-slot:content>
      <points-table />
    </template>
  </modal>
</template>

<script>
import { mapState } from "vuex";
import comicsTypes from "@/store/modules/comics/types";
import Modal from "../common/Modal";
import PointsTable from "../PointsTable";

export default {
  name: 'ComicModalPoints',
  data() {
    return {
    };
  },
  components: {
    Modal,
    PointsTable
  },
  computed: {
    ...mapState(comicsTypes.PATH, [
      "comic",
    ]),
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
};
</script>

<style>
</style>