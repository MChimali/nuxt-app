/* eslint-disable */
<template>
  <div>
    <h1>
      {{ member.id }}
    </h1>
    <img :src="member.avatar_url" alt="" />
  </div>
</template>

<script>
export default {
  props: ["member"],
};
</script>
