export const state = () => ({
  organization: "lemoncode",
});

export const mutations = {
  UPDATE_ORGANIZATION(state, organization) {
    state.organization = organization;
  },
};

export const actions = {
  updateOrganization: ({ commit }, organization) => {
    commit("UPDATE_ORGANIZATION", organization);
  },
};

export const getters = {
  organization: (state) => {
    return state.organization;
  },
};
