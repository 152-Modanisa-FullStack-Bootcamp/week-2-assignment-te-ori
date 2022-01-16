<template>
  <div class="favorites">
    <favorite-video-box
      v-for="video in favorites"
      :key="video.id"
      :video="video"
    ></favorite-video-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FavoriteVideoBox from "@/components/FavoriteVideoBox";

export default {
  components: {
    FavoriteVideoBox,
  },
  computed: {
    ...mapGetters(["favorites"]),
  },
};
</script>

<style>
.favorites {
  width: 90%;
}
</style>