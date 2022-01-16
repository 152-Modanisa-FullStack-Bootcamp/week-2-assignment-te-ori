<template>
  <div class="main-video">
    <button class="favorite-button" :class="{ favorite: video.favorite }">
      favori
    </button>
    <router-link :to="{ name: 'watch', params: { id: video.id } }">
      <img
        class="cover"
        :src="currentCover"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      />
    </router-link>
    <div class="info">
      <div class="profile-container">
        <img class="profile" :src="video.ownerImage" />
      </div>
      <div class="details">
        <p class="title">{{ video.title }}</p>
        <p class="owner-name">{{ video.ownerName }}</p>
        <span class="view-count">{{ video.viewCount }} izleme</span>
        <span class="publish-date">{{ video.publishDateInMonth }} ay önce</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      isRequired: true,
    },
  },
  data() {
    return {
      currentCover: "",
    };
  },
  methods: {
    onMouseEnter() {
      this.currentCover = this.video.hoverImage;
    },
    onMouseLeave() {
      this.currentCover = this.video.coverImage;
    },
  },
  mounted() {
    this.currentCover = this.video.coverImage;
  },
};
</script>

<style>
.main-video {
  margin: 10px;
  width: 360px;
  position: relative;
}

.favorite-button {
  position: absolute;
  right: 0;
  top: 0;
  border: none;
}

.favorite {
  background-color: #8b0e0e;
}

.cover {
  width: 360px;
  height: 200px;
}

.info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: flex-start;
}

.profile {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 5px;
}

.details {
  width: 309px;
  text-align: left;
}

.details p {
  margin: 5px 0;
}

.details .view-count {
  color: #8b0e0e;
}

.details .publish-date {
  color: #100e8b;
}

p.title {
  font-weight: bold;
}
</style>