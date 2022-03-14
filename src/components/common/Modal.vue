<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content" style="width: auto;">
      <slot name="content"></slot>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
    };
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