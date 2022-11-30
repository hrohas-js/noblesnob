<template>
  <div class="status-box">
    <div v-for="(item, index) in statuses" :key="index" class="status">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusBox',
  props: {
    statuses: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.status-box {
  position: absolute;
  top: rem(40);
  right: rem(20);
  max-width: rem(200);
}

.status {
  background-color: #3ADD9D;
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: rem(20);
  font-size: rem(18);
  margin-bottom: rem(20);
}
</style>
