<template>
  <div class="status">
    {{ statusText }}
  </div>
</template>

<script>
export default {
  name: 'StatusBox',
  computed: {
    statusText() {
      return this.$store.state.statusText;
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
  position: absolute;
  top: rem(40);
  right: rem(20);
  background-color: #3ADD9D;
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: rem(20);
  max-width: rem(200);
  font-size: rem(18);
}
</style>