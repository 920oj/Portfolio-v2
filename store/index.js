export const state = () => ({
  on_top: false,
  on_about: false,
  on_works: false,
  on_contact: false,
})

export const mutations = {
  changeSectionState(state, payload) {
    const state_name = `on_${payload}`;
    state[state_name] = true;
  }

}