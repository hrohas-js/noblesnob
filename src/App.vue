<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Partner Condensed Bold';
  src: url('~@/assets/fonts/PartnerCondensed/partnercondensed_bold.otf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Partner Condensed';
  src: url('~@/assets/fonts/PartnerCondensed/partnercondensed.otf');
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input {
  border: 1px solid black;
  border-radius: 0;
  outline: none;
}

html {
  font-family: 'Partner Condensed';
  height: 100%;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
}

ul {
  list-style-type: none;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #000;
}

h1, h2, h3, h4, h5 {
  font-size: unset;
  font-weight: normal;
}

.wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-width: rem(1440);
}

.container {
  padding:rem(16) rem(35) 0;
}


@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .container {
    padding: rem(16) calc(1rem + (35 - 16) * ((100vw - 64rem) / (1440 - 1024))) 0;
  }
}
@media (max-width: em(724, 16)) and (min-width: em(220, 16)){
  .container{
    padding: calc(0.5rem + (16 - 8) * ((100vw - 13.75rem) / (724 - 220))) calc(0.3125rem + (16 - 5) * ((100vw - 13.75rem) / (724 - 220))) 0;
  }
}
</style>
