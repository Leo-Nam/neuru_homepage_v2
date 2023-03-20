<template>
  <v-row
    style="height: 40vh; padding-left: 15vw; padding-right: 15vw; backgound: #f5f5f5 !important"
    align="center"
    no-gutters
  >
    <v-col>
      <div style="font-family: 'Noto Sans'; font-weight: 700; font-size: 20px;">
        (주)느루
      </div>
      <div class="mt-3 contentText">
        사업자 등록번호 : 816-87-02044 | 대표 : 강연우
      </div>
      <div class="mt-2 contentText">
        통신 판매업 신고 번호 : 2021-충북 음성-0273
      </div>
      <div class="mt-2 contentText">
        주소 : 충북 음성군 맹동면 대하3길 2 이노센터 2층 201호
      </div>
      <div class="mt-2 contentText">
        고객센터 : 1566-7725
      </div>
      <v-row
        class="mt-8"
        no-gutters
        align="center"
      >
        <v-col
          class="pr-2"
          cols="auto"
        >
          <v-img
            width="45"
            height="45"
            src="@/assets/images/instargramIcon.png"
            @click="instargramPage"
          />
        </v-col>
        <a
          id="instargramBtn"
          class="d-none"
          target="blank"
          href="https://www.instagram.com/waste.chium/"
        />
        <v-col
          class="pr-2"
          cols="auto"
        >
          <v-img
            width="51"
            height="51"
            src="@/assets/images/kakaoIcon.png"
            @click="kakaoChannel"
          />
        </v-col>
        <v-col
          class="pr-2"
          cols="auto"
        >
          <v-img
            width="45"
            height="45"
            src="@/assets/images/blogIcon.png"
            @click="blogPage"
          />
        </v-col>
        <a
          id="blogBtn"
          class="d-none"
          target="blank"
          href="https://m.blog.naver.com/neuru0621?proxyReferer=https%3A%2F%2Flinktr.ee%2F"
        />
        <!-- <div
          id="kakao-talk-channel-add-button"
        /> -->
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    // window.Kakao.Channel.createAddChannelButton({
    //   container: '#kakao-talk-channel-add-button',
    //   channelPublicId: '_xnnLjb',
    // })
  },
  methods: {
    instargramPage() {
      document.getElementById('instargramBtn').click()
    },
    blogPage() {
      document.getElementById('blogBtn').click()
    },
    kakaoChannel() {
      window.Kakao.Channel.addChannel({
      channelPublicId: '_DLcVxj',
    })
    }
  },
}
</script>

<style scoped>
.contentText {
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -1px;
  color: #737373;
}
</style>
