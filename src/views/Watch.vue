<template>
  <div class="watch">
      {{video.title}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      video: {},
    };
  },
  async mounted() {
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"
    );
    const index = data.findIndex(v => v.id == this.$route.params.id);
    if (index > -1) {
        this.video = data[index];
    }
  },
};
</script>

<style>
</style>