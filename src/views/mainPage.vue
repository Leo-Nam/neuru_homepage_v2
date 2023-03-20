<template>
  <!-- mobile -->
  <div
    v-if="$vuetify.breakpoint.mobile"
    class="bg"
  >
    <video
      class="mobileVideo"
      muted
      autoplay
      loop
      playsinline
    >
      <source
        src="@/assets/video/mainVideo.mp4"
        type="video/mp4"
      >
    </video>
    <div class="m_topText">
      <!-- <v-img
        width="93"
        height="47"
        src="@/assets/images/neuruLogo.png"
      /> -->
      <v-row
        style="width: 100vw"
        justify="center"
        no-gutters
        class="px-6"
      >
        <v-col>
          <v-img
            width="48"
            height="24"
            src="@/assets/images/m.neuruLogo.png"
          />
        </v-col>
        <v-col
          class="m_selectTitle mr-4"
          cols="auto"
        >
          ABOUT
        </v-col>
        <v-col
          class="m_noSelectTitle"
          cols="auto"
          @click="servicePage"
        >
          SERVICE
        </v-col>
      </v-row>
    </div>
    <div class="centerText">
      <div style="font-size: 20px; line-height: 20px;">
        ‘한꺼번에 몰아치지 아니하고 오래도록’
      </div>
      <div
        class="mt-2"
        style="font-weight: 700; font-size: 16px;"
      >
        For a long time without a rush at once
      </div>
    </div>
  </div>

  <!-- web -->
  <div
    v-else
    class="bg"
  >
    <video
      class="webVideo"
      muted
      autoplay
      loop
    >
      <source
        src="@/assets/video/mainVideo.mp4"
        type="video/mp4"
      >
    </video>
    <div class="topText">
      <!-- <v-img
        width="93"
        height="47"
        src="@/assets/images/neuruLogo.png"
      /> -->
      <v-row
        style="width: 100vw"
        justify="center"
        no-gutters
      >
        <v-col cols="auto">
          <v-img
            width="93"
            height="47"
            src="@/assets/images/neuruLogo.png"
          />
        </v-col>
      </v-row>
      <v-row
        class="mt-7"
        justify="center"
        no-gutters
      >
        <v-col
          class="mr-9 selectTitle"
          cols="auto"
        >
          ABOUT
        </v-col>
        <v-col
          class="ml-9 noSelectTitle"
          cols="auto"
          @click="servicePage"
        >
          SERVICE
        </v-col>
      </v-row>
    </div>
    <div class="centerText">
      <div style="font-size: 50px;">
        ‘한꺼번에 몰아치지 아니하고 오래도록’
      </div>
      <div
        class="mt-4"
        style="font-weight: 700; font-size: 24px; line-height: 30px;"
      >
        For a long time without a rush at once
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  created() {
    this.getUserOs()
  },
  methods: {
    servicePage() {
      this.$router.push({
        name: "service-page"
      })
    },
    getUserOs() {
      var userOs = navigator.userAgent.replace(/ /g, '').toLowerCase()
      if( userOs.match(/macintosh/i) == "macintosh") {
        return this.$store.commit("user/setUserOs", "mac")
      }else if(userOs.match(/window/i) == "window") {
        return this.$store.commit("user/setUserOs", "window")
      }else if(userOs.match(/android/i) == "android") {
        return this.$store.commit("user/setUserOs", "android")
      }else if(userOs.match(/iphone/i) == "iphone") {
        return this.$store.commit("user/setUserOs", "ios")
      }else if(userOs.match(/ipad/i) == "ipad") {
        return this.$store.commit("user/setUserOs", "ipad")
      }
    },
  }
}
</script>

<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
}
.webVideo {
  width: 100%;
}
.mobileVideo {
  height: 100%;
}
.centerText {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  color: #ffffff;
}
.topText {
  position: absolute;
  width: 100%;
  top: 10%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.m_topText {
  position: absolute;
  width: 100%;
  top: 6%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.m_centerText {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  color: #ffffff;
}
.selectTitle {
  font-weight: 800;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -1px;
  color: #ffffff;
}
.noSelectTitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -1px;
  color: rgba(255, 255, 255, 0.7);
}
.m_selectTitle {
  font-weight: 800;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -1px;
  color: #ffffff;
}
.m_noSelectTitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -1px;
  color: rgba(255, 255, 255, 0.7);
}

</style>
