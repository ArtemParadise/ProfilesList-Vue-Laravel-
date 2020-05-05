<template>
    <div>
        <my-nav-bar></my-nav-bar>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    import router from "../router";

    export default {
        name: "my-app",
        mounted() {
            console.log('App Component mounted.')
        },
    }
</script>

<style scoped>

</style>
