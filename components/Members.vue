<template>
  <div>
    <input type="text" :value="organization" @change="onChangeInput" />
    <OrgUpdateButton :org="organization" @updateOrg="updateOrg" />
    <ul class="member-list">
      <li v-for="member in list" :key="member.login">
        <NuxtLink :to="`/detail/${member.id}`">
          <div class="member-container">
            <img class="member-image member-element" :src="member.avatar_url" />
            <span>{{ member.id }}</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { getMembers } from "@/assets/api.js";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapGetters("orgStore", [
      "organization",
    ]),
  },
  async fetch() {
    this.list = await getMembers(this.organization);
  },
  methods: {
    updateOrg() {
      getMembers(this.organization).then((response) => (this.list = response));
    },
    ...mapActions("orgStore", ["updateOrganization"]),
    onChangeInput(event) {
      this.updateOrganization(event.target.value);
    },
  },
};
</script>

<style scoped>
.member-list {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0px;
}
.member-container {
  border: 1px rgb(168, 168, 255) solid;
  background-color: rgb(193, 193, 255);
  margin: 0rem 0 0.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.member-element {
  display: block;
}
.member-image {
  width: 120px;
}
input {
  margin: 0.2rem 0 0.2rem 0;
}
</style>
