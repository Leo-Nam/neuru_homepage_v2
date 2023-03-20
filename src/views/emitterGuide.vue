<template>
  <v-app>
    <v-main>
      <div v-if="$vuetify.breakpoint.mobile">
        <MPage1 />
        <MPage2 />
        <MPage3 style="background: #eeeeee" />
        <MPage4 />
        <MPage5 style="background: #eeeeee" />
        <MPage6 />
        <MPage7 />
        <MPage8 />
        <MPage9 />
        <MPage10 />
        <MPage11 />
        <MPage12 />
        <MPage13 />
      </div>
      <div v-else>
        <Page1 style="background: #eeeeee" />
        <Page2 />
        <Page3 />
        <Page4 style="background: #eeeeee" />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
        <Page13 />
        <Footer />
      </div>
      <ScrollUpBtn v-show="scrollUpBtnToggle" />
    </v-main>
  </v-app>
</template>

<script>
import Page1 from "@/components/emitterGuide/page1.vue";
import Page2 from "@/components/emitterGuide/page2.vue";
import Page3 from "@/components/emitterGuide/page3.vue";
import Page4 from "@/components/emitterGuide/page4.vue";
import Page5 from "@/components/emitterGuide/page5.vue";
import Page6 from "@/components/emitterGuide/page6.vue";
import Page7 from "@/components/emitterGuide/page7.vue";
import Page8 from "@/components/emitterGuide/page8.vue";
import Page9 from "@/components/emitterGuide/page9.vue";
import Page10 from "@/components/emitterGuide/page10.vue";
import Page11 from "@/components/emitterGuide/page11.vue";
import Page12 from "@/components/emitterGuide/page12.vue";
import Page13 from "@/components/emitterGuide/page13.vue";
import MPage1 from "@/components/emitterGuide/m.page1.vue";
import MPage2 from "@/components/emitterGuide/m.page2.vue";
import MPage3 from "@/components/emitterGuide/m.page3.vue";
import MPage4 from "@/components/emitterGuide/m.page4.vue";
import MPage5 from "@/components/emitterGuide/m.page5.vue";
import MPage6 from "@/components/emitterGuide/m.page6.vue";
import MPage7 from "@/components/emitterGuide/m.page7.vue";
import MPage8 from "@/components/emitterGuide/m.page8.vue";
import MPage9 from "@/components/emitterGuide/m.page9.vue";
import MPage10 from "@/components/emitterGuide/m.page10.vue";
import MPage11 from "@/components/emitterGuide/m.page11.vue";
import MPage12 from "@/components/emitterGuide/m.page12.vue";
import MPage13 from "@/components/emitterGuide/m.page13.vue";
import Footer from "@/components/footer/footer.vue"
import ScrollUpBtn from '@/components/button/scrollUpBtn.vue';

export default {
  name: "EmitterGuide",
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
    Page13,
    MPage1,
    MPage2,
    MPage3,
    MPage4,
    MPage5,
    MPage6,
    MPage7,
    MPage8,
    MPage9,
    MPage10,
    MPage11,
    MPage12,
    MPage13,
    Footer,
    ScrollUpBtn,
  },
  data: () => ({
    scrollUpBtnToggle: false,
  }),
  mounted() {
    document.addEventListener('scroll', this.scrollEvents);
  },
  destroyed() {
    document.removeEventListener('scroll', this.scrollEvents)
  },
  methods: {
    scrollEvents() {
      let scrollH = document.documentElement.scrollTop
      let contentH = this.$vuetify.breakpoint.height
      console.log(scrollH, contentH)

      if(scrollH >= contentH) {
        this.scrollUpBtnToggle = true
      }else {
        this.scrollUpBtnToggle = false
      }
    }
  }
}
</script>

<style>

</style>
