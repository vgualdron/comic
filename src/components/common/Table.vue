<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="`${id}_header_${index}`">
          {{ header.label }}
        </th>
      </tr>
    </thead>
    <tfoot v-if="showHeadersInFooter">
      <tr>
        <th v-for="(header, index) in headers" :key="`${id}_footer_${index}`">
          {{ header.label }}
        </th>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="(row, i) in rows" :key="`${id}_row_${i}`">
        <td v-for="(header, j) in headers" :key="`${id}_td_${j}`">
          {{ row[header.field] }}            
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
    };
  },
  components: {
  },
  props: {
    id: String,
    headers: Array,
    rows: Array,
    showHeadersInFooter: Boolean
  },
  methods: {
  },
};
</script>

<style>
</style>