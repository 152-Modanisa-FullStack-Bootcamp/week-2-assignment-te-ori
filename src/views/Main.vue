<template>
  <div class="main">
    <main-video-box
      v-for="video in videos"
      :key="video.id"
      :video="video"
    ></main-video-box>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

import MainVideoBox from "@/components/MainVideoBox";

export default {
  components: {
    MainVideoBox,
  },
  computed: {
    ...mapGetters(["videos"])
  },
};
</script>

<style>
.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>