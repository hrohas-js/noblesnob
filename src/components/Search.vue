<template>
  <div class="search">
    <div class="search__content">
      <input type="text" v-model="searchLine" @input="searching">
      <div v-if="searchLine.length > 0" class="search__body">
        <router-link :to="'/product/'+item.id" v-for="item in result">
          {{ item.name }}
        </router-link>
        <div v-if="load" class="loading">
          <img src="@/assets/loader.gif" alt="loading">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    searchLine: ''
  }),
  computed: {
    result() {
      return this.$store.state.searchResult
    },
    load() {
      return this.$store.state.searchPreload
    }
  },
  methods: {
    searching() {
      this.$store.dispatch('FetchSearch', this.searchLine)
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 999;
  width: rem(400);
  input {
    padding: 0 rem(20);
    font-size: rem(16);
    width: 100%;
    height: rem(30);
  }
}

.search__content {
  position: relative;
}

.search__body {
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: rem(200);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  a {
    padding: rem(10) rem(20);
    border-bottom: 1px solid black;
  }
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: em(460, 16)) {
  .search {
    width: 100%;
  }
}
</style>
