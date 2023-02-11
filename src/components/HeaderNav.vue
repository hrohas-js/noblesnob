<template>
  <nav
      v-if="$store.state.display_width >= 1024 || page === 'footer'"
      :class="{'right': menuItemsMobile === 'right'}"
  >
    <router-link
        v-for="item in menuItems" :to="item.path"
        :key="item.name"
        :class="{
          'active': ($route.path === item.path && page !== 'footer') || (item.name === 'поиск' && isVisibleSearch),
          'up': page !== 'footer',
          'down': page === 'footer'
        }"
        @click="menuAction(item.destination)"
    >
      {{ item.name }}
    </router-link>
    <Search v-if="isVisibleSearch && menuItemsMobile === 'right'"/>
  </nav>
  <nav v-else :class="{'right': menuItemsMobile === 'right'}">
    <div v-if="menuItemsMobile === 'left'" class="header-nav__container">
      <div class="header-nav__item header-nav__burger-menu" @click="$store.commit('SET_BURGER_SHOW')">
        <img src="@/assets/svg/burger-menu.svg" alt="menu">
      </div>
      <div class="header-nav__item header-nav__search" @click="toggleSearch">
        <img src="@/assets/svg/search.svg" alt="search">
      </div>
    </div>
    <div v-if="menuItemsMobile === 'right'" class="header-nav__container">
      <div class="header-nav__item header-nav__burger-menu">
        <img src="@/assets/svg/cabinet.svg" alt="cabinet" @click="this.$router.push('/registration')">
      </div>
      <div class="header-nav__item header-nav__search">
        <img src="@/assets/svg/basket.svg" alt="basket" @click="this.$router.push('/basket')">
      </div>
    </div>
  </nav>
</template>

<script>
import Search from "@/components/Search";

export default {
  name: 'HeaderNav',
  components: {Search},
  props: ['menuItems', 'menuItemsMobile', 'page'],
  computed: {
    isVisibleSearch() {
      return this.$store.state.showSearch
    }
  },
  methods: {
    menuAction(destination) {
      if (destination === 'enter') {
        this.$store.commit('SET_CABINETIN', 'registration');
        this.$store.commit('SET_FORGETPASSWORD', false);
      }
      if (destination === 'search') {
        this.$store.commit('SET_SHOW_SEARCH')
      }
    },
    toggleSearch() {
      this.$store.commit('SET_SHOW_SEARCH')
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  background-color: #3adc9c;
  color: white;
}

nav {
  flex: 1 1 33%;
}

.right {
  justify-content: flex-end;
}

nav, .header-nav__container {
  display: flex;
  align-items: center;

  a {
    text-transform: uppercase;
    margin-left: rem(18);
    padding: rem(5);
    transition: all 0.2s;

    &:first-child {
      margin-left: 0;
    }
  }
}

.up {
  font-size: rem(16);
  &:hover {
    background-color: #3adc9c;
    color: white;
  }
}

.down {
  font-size: rem(12);
}

nav {
  position: relative;

  &:first-child {
    .header-nav__item {
      margin-left: rem(27.5);

      &:first-child {
        margin-left: 0;
      }
    }
  }

  &:last-child {
    .header-nav__item {
      margin-left: rem(40.5);

      &:first-child {
        margin-left: 0;
      }
    }
  }
}

.header-nav__container {
  align-items: center;
}

.header-nav__item {
  img {
    height: rem(34);
  }
}

@media (max-width: em(1600, 16)) and (min-width: em(1024, 16)) {
  .up {
    font-size: calc(0.625rem + (16 - 10) * ((100vw - 64rem) / (1600 - 1024)));
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  nav {
    a {
      margin-left: calc(0.625rem + (18 - 10) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }
}

@media (max-width: em(724, 16)) and (min-width: em(220, 16)) {
  nav {
    &:first-child {
      .header-nav__item {
        margin-left: calc(0.4375rem + (27.5 - 7) * ((100vw - 13.75rem) / (724 - 220)));

        &:first-child {
          margin-left: 0;
        }
      }
    }

    &:last-child {
      .header-nav__item {
        margin-left: calc(0.75rem + (40.5 - 10) * ((100vw - 13.75rem) / (724 - 220)));

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  .header-nav__item {
    img {
      height: calc(1rem + (34 - 16) * ((100vw - 13.75rem) / (724 - 220)));
    }
  }
  .down {
    font-size: rem(9);
  }
}

</style>
