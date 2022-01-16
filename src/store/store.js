import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        videos: [],
        favorites: []
    },
    getters: {
        videos: state => {
            return state.videos;
        },
        favorites: state => {
            return state.favorites;
        },
        isFavorite: state => videoId => {
            return state.favorites.some(v => v.id === videoId);
        }
    },
    mutations: {
        addToVideo(state, video) {
            state.videos.push(video);
        },
        addToVideos(state, videos) {
            console.log(videos, Array.isArray(videos));

            state.videos.push(...videos);
        },
        addToFavorites(state, video) {
            // prevent duplicate items
            if (state.favorites.some(v => v.id === video.id)) {
                return;
            }

            state.favorites.push(video);
        },
        removeFromFavorites(state, videoId) {
            console.log("r", videoId)
            const index = state.favorites.findIndex(v => v.id === videoId);

            // do notingh if desired video is not in list
            if (index < 0) {
                return;
            }

            state.favorites.splice(index, 1);
        }
    },
    actions: {
        async load({ commit }) {
            const { data } = await axios.get(
                "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"
            );
            commit("addToVideos", data);
        },
        toggleFavorite({ commit, getters }, video) {
            getters.isFavorite(video.id) ? commit('removeFromFavorites', video.id) : commit('addToFavorites', video);
        }
    }

});

export default store;