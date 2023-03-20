<template>
  <!-- mobile -->
  <div
    v-if="$vuetify.breakpoint.mobile"
    class="bg"
  >
    <v-img
      style="width: 100vw; height: 100vh;"
      src="@/assets/images/servicePageBackground.png"
    >
      <v-row
        justify="center"
        no-gutters
        style="margin-top: 30%;"
      >
        <v-col
          class="pr-1"
          cols="auto"
        >
          <v-img
            style="width: 41vw;"
            src="@/assets/images/m.servicePagePhone1.png"
          />
        </v-col>
        <v-col
          class="pl-1"
          cols="auto"
        >
          <v-img
            style="width: 41vw; margin-top: 84px;"
            src="@/assets/images/m.servicePagePhone2.png"
          />
        </v-col>
      </v-row>
    </v-img>
    <div class="m_topText">
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
            @click="mainPage"
          />
        </v-col>
        <v-col
          class="m_noSelectTitle mr-4"
          cols="auto"
          @click="mainPage"
        >
          ABOUT
        </v-col>
        <v-col
          class="m_selectTitle"
          cols="auto"
        >
          SERVICE
        </v-col>
      </v-row>
    </div>
    <div class="m_bottomText">
      <v-row
        class="px-5"
        no-gutters
      >
        <v-col class="pr-2">
          <v-btn
            elevation="0"
            class="m_bottomBtn"
            @click="emitterGuidePage"
          >
            배출자
          </v-btn>
        </v-col>
        <v-col class="pl-2">
          <v-btn
            elevation="0"
            class="m_bottomBtn"
            @click="collectorGuidePage"
          >
            수거 · 처리 업체
          </v-btn>
        </v-col>
      </v-row>
      <div
        style="margin-top:16px; text-align: center; font-size: 14px; letter-spacing: -0.02em; color: #ffffff; font-family: 'Noto Sans';"
        @click="storePage"
      >
        치움 다운로드
      </div>
      <v-row
        justify="center"
        no-gutters
      >
        <v-col cols="auto">
          <v-divider style="border-top: 1px solid white; width: 80px;" />
        </v-col>
      </v-row>

      <a
        id="googlePlay"
        target="blank"
        href="https://play.google.com/store/apps/details?id=aos.gonsoftware.chium"
        class="d-none"
      />
      <a
        id="appStore"
        href="https://apps.apple.com/kr/app/%EC%B9%98%EC%9B%80/id1623767946"
        class="d-none"
      />
    </div>
  </div>

  <!-- web -->
  <div
    v-else
    class="bg"
  >
    <v-img
      style="width: 100vw; height: 100vh;"
      src="@/assets/images/servicePageBackground.png"
    >
      <v-row
        style="height: 100%;"
        no-gutters
        justify="center"
        align="end"
      >
        <v-col
          style="padding-bottom: 100px;"
          cols="auto"
        >
          <v-img
            style="width: 18vw;"
            src="@/assets/images/servicePagePhone1.png"
          />
        </v-col>
        <v-col
          style="margin-right: 126px;"
          cols="auto"
        >
          <v-img
            style="width: 20vw;"
            src="@/assets/images/servicePagePhone2.png"
          />
        </v-col>
        <v-col
          style="margin-top: 7%"
          align-self="center"
          cols="auto"
        >
          <v-img
            width="407"
            height="164"
            src="@/assets/images/servicePageLogo.png"
          />
          <v-row
            style="margin-top: 70px;"
            no-gutters
          >
            <v-col
              class="mr-1"
              cols="auto"
            >
              <v-btn
                class="emitterBtn"
                elevation="0"
                width="203"
                height="44"
                style="font-size: 24px; font-weight: 700; letter-spacing: -1px; color: #0D544B;"
                @click="emitterGuidePage"
              >
                배출자
              </v-btn>
            </v-col>
            <v-col
              class="ml-1"
              cols="auto"
            >
              <v-btn
                width="203"
                elevation="0"
                height="44"
                class="collectorBtn"
                style="font-size: 24px; font-weight: 700; letter-spacing: -1px; color: #FF6C03;"
                @click="collectorGuidePage"
              >
                수거 · 처리 업체
              </v-btn>
            </v-col>
          </v-row>
          <v-btn
            class="chiumWebBtn mt-2 white--text"
            width="414"
            height="44"
            elevation="0"
            style="font-size: 24px; font-weight: 500;"
            @click="chiumWebPage"
          >
            치움 웹페이지 바로가기
          </v-btn>
          <a
            id="chiumWebBtn"
            class="d-none"
            target="blank"
            href="https://www.chium.co.kr/"
          />
        </v-col>
      </v-row>
    </v-img>
    <div class="topText">
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
            @click="mainPage"
          />
        </v-col>
      </v-row>
      <v-row
        class="mt-7"
        justify="center"
        no-gutters
      >
        <v-col
          class="mr-9 noSelectTitle"
          cols="auto"
          @click="mainPage"
        >
          ABOUT
        </v-col>
        <v-col
          class="ml-9 selectTitle"
          cols="auto"
        >
          SERVICE
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicePage",
  computed: {
    getUserOs() {
      return this.$store.state.user.userOs
    }
  },
  methods: {
    mainPage() {
      this.$router.push({
        name: "main-page"
      })
    },
    emitterGuidePage() {
      this.$router.push({
        name: "emitter-guide"
      })
    },
    collectorGuidePage() {
      this.$router.push({
        name: "collector-guide"
      })
    },
    chiumWebPage() {
      document.getElementById('chiumWebBtn').click()
    },
    storePage() {
      if(this.getUserOs === "android") {
        document.getElementById('googlePlay').click()
        // window.location.href = "https://play.google.com/store/apps/details?id=aos.gonsoftware.chium"
        // window.open("https://play.google.com/store/apps/details?id=aos.gonsoftware.chium", "_blank",)
      }
      else if(this.getUserOs === "ios") {
        document.getElementById('appStore').click()
      }
    }
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
.m_bottomText {
  position: absolute;
  width: 100%;
  top: 90%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
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
.emitterBtn {
  background: #FFFFFF;
  /* border: 1px solid #0D544B; */
  border-radius: 60px;
  font-family: 'Noto Sans' !important;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #0D544B !important;
}
.m_bottomBtn {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border: 2px solid #FFFFFF;
  border-radius: 60px;
  font-family: 'Noto Sans' !important;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff !important;
  height: 40px !important;
  width: 100% !important;
  letter-spacing: 0;
}
.collectorBtn {
  background: #FFFFFF;
  /* border: 1px solid #FF6C03; */
  border-radius: 60px;
  font-family: 'Noto Sans' !important;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #ff6c03 !important;
}
.chiumWebBtn {
  border-radius: 60px;
  font-family: 'Noto Sans' !important;
  background-color: unset !important;
  border: 1px solid #ffffff;
}

</style>
