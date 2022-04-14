<template>
  <MemberDetail :member="member" />
</template>

<script>
import { getMember } from "@/assets/api.js";
export default {
  data() {
    return {
      member: {},
    };
  },
  computed: {
    id() {
      return String(this.$route.params.id);
    },
  },
  async fetch() {
    this.member = await getMember(this.id);
  },
};
</script>

<style scoped></style>
