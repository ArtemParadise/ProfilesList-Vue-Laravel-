import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);
import ProfilesList from "./components/ProfilesList";
import CreateComponent from "./components/CreateComponent";
import EditComponent from "./components/EditComponent";
import ShowComponent from "./components/ShowComponent";



export default new VueRouter({
    routes: [{
        path: '/',
        name: '/',
        component: ProfilesList
    },
        {
        path: '/create',
        component: CreateComponent
    },
        {
        path: `/edit/:id`,
        // name: 'edit',
        component: CreateComponent
        },
        {
            path: `/profiles/:id`,
            // name: 'show',
            component: ShowComponent
        }],
    mode: 'history'
})
