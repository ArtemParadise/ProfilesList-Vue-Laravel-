<template>
    <div>
        <form @submit.prevent="validateBeforeEdit">
            <label for="nameInput">Name</label>
            <input type="text" class="form-control" id="nameInput" v-model="profile.name">
            <label class="mt-4">Image</label>
            <div class="card card-default">
                <div class="card-header">File Upload Component</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-1" v-if="image">
                            <img :src="image" class="img-responsive" height="90" width="90">
                        </div>
                        <div class="col-md-10 align-self-center ml-3">
                            <input type="file"  v-on:change="onImageChange" class="custom-file-input" id="inputGroupFile02" aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-dark mt-2">Update</button>
        </form>
    </div>
</template>

<script>
    import router from "../router";
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: "CreateComponent",
        computed:
        //     {
        //     profile_id() {
        //
        //     }
        //
        // },
            mapGetters(['getEditValue', "getProfileForShow"]),
        data() {
            return {
                image: '',
                profile: {
                    id: '',
                    name: '',
                    img: '',
                    created_at: '',
                    updated_at: '',
                },
                profile_id: '',
                // edit: false,
            }
        },
        created() {
            // console.log("this profile for show: ", this.$store.getters.getProfileForShow);
            console.log("current_profile id : ", this.$store.getters.getCurrentProfileId);


            // console.log("this profile for show by getter: ", this.$store.getters.getProfileForShow);
            // this.profile = this.$store.getters.getProfileForShow;
            // console.log("this profile for show: ", this.profile);
        },

        mounted() {
            console.log("Edit value is:" , this.$store.getters.getEditValue)
            if (this.$store.getters.getEditValue) {
                this.profile_id = this.$store.getters.getCurrentProfileId;
                // console.log(this.profile = this.$store.getters.getProfileById(this.profile_id));
                // console.log(this.getProfileById(this.profile_id));
                // console.log(this.$store.getters['curryGetter'](this.profile_id));
                console.log(this.$store.getters.curryGetter(this.profile_id));
                this.profile = this.$store.getters.curryGetter(this.profile_id);
                this.image = "/" + this.profile.img;
                // console.log("this profile for show: ", this.$store.getters.getProfileForShow);
                // console.log("profile from mounted: " , this.$store.state.profile.name);
                // this.profile = this.$store.state.profile;
                // console.log(this.store.getProfileForShow());
                // let profile = this.$store.getters;
                // this.image = this.profile.img;
                // console.log("This profile for editing: ", this.profile);
                // console.log("This profile for editing: ");
                // console.log(profile.name);

                // console.log("another profile by get: ", this.$store.getters.getProfileForShow);
            }
        },
        methods: {
            createProfile() {
                this.profile.img = this.image;
                this.$store.dispatch('createProfile',  this.profile);
                // this.$store.dispatch('fetchProfiles');
                router.push('/');
            },
            editProfile() {
                // console.log('Editor mode');
                this.profile.img = this.image;
                this.$store.dispatch('editProfile', this.profile );
                router.push('/');
            },
            validateBeforeEdit() {
                // console.log('Edit value from store is: ', this.$store.getters.getEditValue);
                if (this.profile.name.length > 1 && this.profile.name.length < 60 ) {
                    console.log("This edit currently is: ", this.$store.getters.getEditValue)
                    if (this.$store.getters.getEditValue) {
                        this.editProfile()
                    } else {
                        this.createProfile()
                    }
                } else {
                    alert('Profile name must be at least 1 symbol and less than 60');
                }
            },
            // addProfile() {
            //     this.profile.img = this.image;
            //     console.log( this.image);
            //     console.log(JSON.stringify(this.profile));
            //     if (this.edit === false) {
            //         //Add profile
            //         fetch('api/profiles/create', {
            //             method: 'post',
            //             body: JSON.stringify(this.profile),
            //             headers: {
            //                 'content-type': 'application/json'
            //             }
            //
            //         })
            //         .then(res => res.json())
            //         .then(data => {
            //             this.profile.name = '';
            //             this.profile.img = '';
            //             alert('article added');
            //         })
            //         .catch(err => console.log(err));
            //         router.push("/");
            //
            //     } else {
            //         //Update prodile
            //     }
            // },
            onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                if (files[0].size > 1501756) {
                    alert('File size must be less than 1,5mb');
                } else {
                    this.createImage(files[0]);
                }
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },

        }
    }
</script>

<style scoped>

</style>
