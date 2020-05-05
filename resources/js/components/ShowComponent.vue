<template>
    <div>
        <hr>
        <div class="card" style="width: 18rem;">
            <img :src="'/'+ curryGetter(getCurrentProfileId).img" class="card-img-top" alt="..." >
            <div class="card-body">
                <h5 class="card-title">Name: {{ curryGetter(getCurrentProfileId).name }}</h5>
                <p class="card-text">Updated at: {{curryGetter(getCurrentProfileId).updated_at}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import profile from "../store/modules/profile";

    export default {
        computed: mapGetters(['getProfileForShow', "getProfileById", 'getCurrentProfileId', 'curryGetter']),
        name: "ShowComponent",
        mounted() {
            console.log('Show component mounted');
            // console.log("this profile for show: ", this.$store.getters.getProfileForShow);
        }
    }
</script>

<style scoped>

</style>
