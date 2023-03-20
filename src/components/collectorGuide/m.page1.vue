<template>
  <v-row
    no-gutters
    style="height: 100vh"
  >
    <v-col class="mb-2">
      <v-icon
        class="pl-4 py-4 mb-4"
        color="black"
        size="24"
        @click="previousPage"
      >
        mdi-arrow-left
      </v-icon>
      <v-img
        class="mx-4"
        style="width: 69vw"
        src="@/assets/images/collectorGuide/m.collectorGuidePage1_1.png"
      />
    </v-col>
    <v-col align-self="end">
      <v-img
        style="width: 100vw"
        src="@/assets/images/collectorGuide/m.collectorGuidePage1_2.png"
        @click="youtubePage"
      />
    </v-col>
    <a
      id="guideYoutube"
      target="blank"
      class="d-none"
      href="https://www.youtube.com/watch?v=2BDUC4YCq7Y&t=72s"
    />
  </v-row>
</template>

<script>
export default {
  name: "MPage1",
  methods: {
    previousPage() {
      this.$router.go(-1)
    },
    youtubePage() {
      document.getElementById('guideYoutube').click()
    }
  }
}
</script>

<style>

</style>
