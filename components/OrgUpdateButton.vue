<template>
  <button class="button" type="button" @click.prevent="changeOrg()">
    Update Organization
  </button>
</template>

<script>
export default {
  props: ['org'],
  methods: {
    changeOrg() {
      this.$emit("updateOrg", this.org);
    },
  },
};
</script>

<style scoped>
.button {
  border: 1px solid black;
}
</style>
