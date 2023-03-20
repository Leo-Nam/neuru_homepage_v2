<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
.v-application {
  font-family: 'Nanum Myeongjo11', serif !important;
}
@font-face {
  font-family: "Nanum Myeongjo11";
  src: url("./assets/NanumMyeongjo-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Noto Sans";
  src: url("./assets/NotoSansKR-Regular.otf") format("opentype");
}

</style>
