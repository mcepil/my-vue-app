export default {
  getActivityById: (state) => (id) => state.activities.find(a => a.id === id)
}
