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
import axios from "axios";

import MainVideoBox from "@/components/MainVideoBox";

export default {
  components: {
    MainVideoBox,
  },
  data() {
    return {
      videos: [],
    };
  },

  async mounted() {
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"
    );
    this.videos = data;
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