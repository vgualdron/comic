<template>
  <div class="box">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      showNotification: true,
    };
  },
  props: {
    text: String,
  },
  methods: {
  },
};
</script>

<style>
</style>