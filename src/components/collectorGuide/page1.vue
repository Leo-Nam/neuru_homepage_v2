<template>
  <v-row
    no-gutters
    style="height: 100vh;"
    align="end"
    justify="center"
  >
    <v-col cols="auto">
      <v-img
        style="width: 73vw;"
        src="@/assets/images/collectorGuide/collectorGuidePage1_1.png"
      >
        <v-img
          style="margin-top: 35%"
          width="333"
          height="56"
          src="@/assets/images/collectorGuide/collectorGuidePage1_2.png"
          @click="youtubePage"
        />
        <a
          id="guideYoutube"
          target="blank"
          class="d-none"
          href="https://www.youtube.com/watch?v=2BDUC4YCq7Y&t=72s"
        />
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Page1",
  methods: {
    youtubePage() {
      document.getElementById('guideYoutube').click()
    }
  }
}
</script>

<style>

</style>
