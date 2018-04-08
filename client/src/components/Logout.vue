<script>
export default {
  render: h =>
    h('v-btn', 'logout', {
      attrs: {
        id: 'myId',
      },
      on: {
        async click() {
          await this.$store.dispatch('setToken', null);
          await this.$store.dispatch('setUser', null);
          this.$router.push({ name: 'Root' });
        },
      },
    }),
};
</script>
