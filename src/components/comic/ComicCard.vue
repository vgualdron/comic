<template>
  <div class="comics__card card">
    <header class="card-header">
      <p class="card-header-title title is-4">
        Rate comics
      </p>
    </header>
    <div class="comics__card-content card-content">
      <div class="comics__content-div" v-if="!isLoadingComic">
        <h5 class="title is-5">{{ comic.title }}</h5>
        <comic-rating class="comics__rating" />
        <img class="mt-6" alt="Comic image" :src="comic.img" @click="showModal = !showModal">
      </div>
      <loader v-else />
    </div>
    <footer class="comics__card-footer card-footer is-inline-block  p-2" v-if="!isLoadingComic">
      <comic-pagination />
    </footer>
    <comic-modal v-if="showModal" @close="showModal = !showModal"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import comicsTypes from "@/store/modules/comics/types";
import ComicPagination from "./ComicPagination";
import ComicRating from "./ComicRating";
import ComicModal from "./ComicModal";
import Loader from '../common/Loader'

export default {
  name: 'ComicCard',
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    ComicPagination,
    ComicRating,
    Loader,
    ComicModal,
  },
  computed: {
    ...mapState(comicsTypes.PATH, [
      "comic",
      "isLoadingComic",
    ]),
  },
  methods: {
  },
};
</script>

<style>
</style>