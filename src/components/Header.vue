<template>
  <div class="header">
    <div class="title">Youtube</div>
    <nav>
      <button class="home" @click="goToHome">Anasayfa</button>
      <button class="go-to-favorites" @click="goToFavorites">Faovirler</button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToFavorites() {
      this.$router.push({ name: "favorites", params: { userid: "bootcamp" } });
    },
  },
};
</script>

<style>
.header {
  display: flex;
  align-content: center;
  align-items: center;
  width: 90%;
  height: 60px;
  background-color: #909497;
  padding: 10px;
}

.title {
  flex-grow: 4;
  text-align: left;
}
</style>