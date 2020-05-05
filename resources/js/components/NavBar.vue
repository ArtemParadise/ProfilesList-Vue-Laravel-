<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" @click="clickHome" :style="{cursor: 'pointer'}">Profiles List</a>
            </div>
        </nav>
    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: "my-nav-bar",
        methods: {
            clickHome() {
                router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>
