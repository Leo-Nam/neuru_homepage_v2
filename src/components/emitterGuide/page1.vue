<template>
  <v-row
    no-gutters
    style="height: 100vh;"
    align="end"
    justify="center"
  >
    <v-col cols="auto">
      <v-img
        style="width: 74vw;"
        src="@/assets/images/emitterGuide/emitterGuidePage1_1.png"
      >
        <v-img
          style="margin-top: 30%"
          width="268"
          height="56"
          src="@/assets/images/emitterGuide/emitterGuidePage1_2.png"
          @click="youtubePage"
        />
        <a
          id="emitterYoutube"
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
      document.getElementById('emitterYoutube').click()
    }
  }
}
</script>

<style>

</style>
