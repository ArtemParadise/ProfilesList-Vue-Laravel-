<template>
    <div>
        <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-center">
                <div class="d-inline">
                    <nav aria-label="Page navigation example mt-5 ">
                     <ul class="pagination" >
                         <li :class="{ disabled: !getPagination.prev_link}" class="page-item"><a class="page-link" href="#" @click="clickPreviousPage">Previous</a></li>
                         <li class="page-item disabled"><a class="page-link text-dark" href="#" >Page: {{getPagination.current_page}} of {{getPagination.last_page}}</a></li>
                         <li :class="{disabled: !getPagination.next_link }" class="page-item"><a class="page-link" href="#" @click="clickNextPage">Next</a></li>
                     </ul>
                    </nav>
                </div>
            </div>
            <div class="d-inline">
                <button type="button" class="btn btn-secondary btn-lg active align-self-end " @click="clickCreate">+</button>
            </div>
        </div>


        <table class="table mt-1">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Img</th>
                <th scope="col">Updated at</th>
                <th scope="col">Created at</th>
                <th scope="col">Handlers</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item) in getAllProfiles" :key="item.id">
                <th scope="row" class="align-middle">{{ item.id }}</th>
                <td class="align-middle">{{ item.name }}</td>
                <td><img :src=" item.img " alt="" v-bind:style="{ width: 100 + 'px', height: 100 + 'px' }"></td>
                <td class="align-middle">{{ dateForPrint(item.updated_at) }}</td>
                <td class="align-middle">{{ dateForPrint(item.created_at) }}</td>
                <td class="align-middle">
                    <button type="button" class="btn btn-success" @click="clickEdit(item.id)">Edit</button>
                    <button type="button" class="btn btn-danger" @click="clickDelete(item.id)">Delete</button>
                    <button type="button" class="btn btn-info" @click="clickShow(item.id)">Show</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>


</template>

<script>
    import router from "../router";
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        computed: mapGetters(['getAllProfiles', 'getPagination', "getLastLink"]),
        // mapMutations([])
            // mapMutations: mapMutations(['setEdit'])
        data() {
            return {
                current_link: '',
            }
        },
        created() {
            this.$store.dispatch('fetchProfiles');
        },
        mounted() {
            this.$store.dispatch('fetchProfiles', this.getLastLink);
        },
        methods: {
            clickPreviousPage() {
                this.$store.dispatch('fetchProfiles', this.getPagination.prev_link)
            },
            clickNextPage() {
                this.$store.dispatch('fetchProfiles', this.getPagination.next_link)
            },
            clickDelete(id) {
                this.$store.dispatch('deleteProfile', id);
            },
            clickShow(id) {
                let routeUrl = 'profiles/' + id;
                this.$store.dispatch('setCurrentProfileId', id);
                router.push(routeUrl);
            },
            clickCreate() {
                this.$store.dispatch('setEdit', false);
                router.push('/create');
            },
            clickEdit(id) {
                let routeUrl = '/edit/' + id;
                this.$store.dispatch('setEdit', true);
                this.$store.dispatch('setCurrentProfileId', id);
                router.push(routeUrl);
            },
            dateForPrint(str) {
                return str.slice(0, 10) + " " +str.slice(11, 19);
            }
        },
        name: "profiles-list"
    }
</script>

<style scoped>

</style>
