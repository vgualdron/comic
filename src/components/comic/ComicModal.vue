<template>
  <modal @close="close">
    <template v-slot:content>
      <p class="image">
        <img :src="comic.img" alt="">
      </p>
    </template>
  </modal>
</template>

<script>
import { mapState } from "vuex";
import comicsTypes from "@/store/modules/comics/types";
import Modal from "../common/Modal";

export default {
  name: 'ComicModal',
  data() {
    return {
    };
  },
  components: {
    Modal
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