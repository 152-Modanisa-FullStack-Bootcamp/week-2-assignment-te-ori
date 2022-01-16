<template>
  <div class="favorite-video">
    <div class="cover">
      <router-link :to="{ name: 'watch', params: { id: video.id } }">
        <img
          class="cover"
          :src="currentCover"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
        />
      </router-link>
    </div>
    <div class="info">
      <div class="details">
        <h3 class="title">{{ video.title }}</h3>
        <span class="view-count">{{ video.viewCount }}</span>
        <span class="publish-date">{{ video.publishDateInMonth }} ay önce</span>
        <div class="owner">
          <div class="profile-image"><img :src="video.ownerImage" /></div>
          <div class="name">{{ video.ownerName }}</div>
        </div>
        <p class="description">{{description}}</p>
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
  computed: {
    description() {
      const desc =  this.video.description
      return desc.length < 107 ? desc : `${desc.substr(0,107)}...`
    }
  },
  methods: {
    onMouseEnter() {
      this.currentCover = this.video.hoverImage;
    },
    onMouseLeave() {
      this.currentCover = this.video.coverImage;
    },
    toggleFavorites() {},
  },
  mounted() {
    this.currentCover = this.video.coverImage;
  },
};
</script>

<style>
.favorite-video {
  margin: 10px;
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: row;
}

.cover {
  width: 360px;
  height: 200px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: spa;
  flex-wrap: wrap;
}

.owner {
  display: flex;
}

.owner .profile-image img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 5px;
}

.details {
  width: 319px;
  text-align: left;
  padding-left: 10px;
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
h3.title {
  margin-top: 0;
}
</style>