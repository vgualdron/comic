<template>
  <div class="comics">
    <navbar @showPoints="showModal= !showModal"/>
    <div class="is-flex-grow-1 is-flex comics__container">
      <div class="comics__points-table">
        <points-table />
      </div>
      <div class="comics__content is-flex-grow-1">
        <comic />
      </div>
    </div>
    <comic-modal-points v-if="showModal" @close="showModal = !showModal"/>
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar';
import Comic from '../components/Comic';
import PointsTable from '../components/PointsTable';
import ComicModalPoints from '../components/comic/ComicModalPoints';

export default {
  name: 'Home',
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Navbar,
    Comic,
    PointsTable,
    ComicModalPoints,
  }
}
</script>
