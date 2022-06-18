<template>
  <div class="profile container">
    <Header></Header>
    <main>
      <div :class="{__container__history:$route.params.name == 'historyOrders' ,profile__container:$route.params.name != 'historyOrders'}" class="mt">
        <ProfileMenu></ProfileMenu>
        <div class="components__container" :class="{history:$route.params.name == 'historyOrders'}">
          <ProfileMain v-if="$route.params.name == 'main'"></ProfileMain>
          <ProfileAddAddress v-if="$route.params.name == 'addAddress'"></ProfileAddAddress>
          <ProfileHistory v-if="$route.params.name == 'historyOrders'"></ProfileHistory>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileMenu from "@/components/ProfileMenu";
import ProfileMain from "@/components/ProfileMain";
import ProfileAddAddress from "@/components/ProfileAddAddress";
import ProfileHistory from "@/components/ProfileHistory";
export default {
  name:'Profile',
  components: {ProfileHistory, ProfileAddAddress, ProfileMain, ProfileMenu, Footer, Header}
}
</script>

<style scoped lang="scss">
.mt{
  margin-top: rem(87);
}
.profile__container{
  display: flex;
  gap:rem(368);

}
.__container__history{
  display: flex;
  gap:rem(60);
}
.components__container{
  width: 37%;
}
.history{
  width: 86%;
}
</style>