export const getMembers = (org) =>
  fetch(`https://api.github.com/orgs/${org}/members`).then((members) =>
    members.json()
  );

export const getMember = (id) =>
  fetch(`https://api.github.com/user/${id}`).then((member) => member.json());
