import Vue from "vue";
import VueRouter from "vue-router";

import Main from '@/views/Main';
import Favorites from '@/views/Favorites';
import Watch from '@/views/Watch';

Vue.use(VueRouter);

export default new VueRouter(
    {
        mode: 'history',
        routes: [
            {
                path: "/",
                name: "main",
                component: Main
            },
            {
                path: "/watch?id=:id",
                name: "watch",
                component: Watch
            },
            {
                path: "/favorites/:userid",
                name: "favorites",
                component: Favorites
            }
        ]
    }
);