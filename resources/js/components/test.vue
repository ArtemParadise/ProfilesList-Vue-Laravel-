<template>
    <div>
<!--        <my-nav-bar></my-nav-bar>-->
        <div class="container">
            <h1>Hi there</h1>
            <example-component></example-component>
            <example-component-2></example-component-2>
            <test-2></test-2>
        </div>
    </div>
</template>

<script>
    // import MyNavBar from "./NavBar";
    let Test2Comp = require('./test2').default;
    export default {
        name: "test",
        components: {
            // MyNavBar,
            'test-2': Test2Comp,
        }
    }
</script>

<style scoped>

</style>
