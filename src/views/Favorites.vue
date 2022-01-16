<template>
  <div class="favorites">
    <favorite-video-box
      v-for="video in videos"
      :key="video.id"
      :video="video"
    ></favorite-video-box>
  </div>
</template>

<script>
import axios from "axios";

import FavoriteVideoBox from "@/components/FavoriteVideoBox";

export default {
  components: {
    FavoriteVideoBox,
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
    this.videos = data.filter(v => !!v.favorite);
  },
};
</script>

<style>
.favorites {
    width: 90%;
}
</style>