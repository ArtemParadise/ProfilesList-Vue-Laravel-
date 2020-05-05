import router from "../../router";
import axios from 'axios';

export default {
    actions: {
        fetchProfiles(ctx, page_url) {
            page_url = page_url || 'api/profiles'
            fetch(page_url).
            then(res => res.json()).
            then(res => {
                // this.profiles = res.data;
                const profiles = res.data;
                ctx.commit('updateProfiles', profiles);
                // this.$store.dispatch('makePagination', res.meta, res.links);
                // this.makePagination(ctx, res.meta, res.links);
                ctx.dispatch('makePagination', {meta: res.meta, links: res.links} );
                ctx.dispatch('setLastLink', page_url);
                // console.log(this.profiles);
                // console.log(typeof this.profiles[0].updated_at);
            }).
            catch(err => console.log(err))
        },
        // fetchProfileForShow(ctx, id) {
        //     let page_url = 'api/profiles/' + id;
        //     console.log(page_url);
        //     fetch(page_url).
        //     then(res => res.json()).
        //     then(res => {
        //         ctx.commit('updateProfileForShow', res);
        //     }).
        //     catch(err => console.log(err))
        // },
        makePagination(ctx, {meta, links}) {
            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                prev_link: links.prev,
                next_link: links.next,
            };
            console.log("pagination made")
            ctx.commit('updatePagination', pagination);
            // this.pagination = pagination;
        },
        deleteProfile(ctx, id) {
            if (confirm('Are you sure?')) {
                fetch(`api/profiles/${id}`, {
                    method: 'delete'
                }).
                then(res => res.json()).
                then(data => {
                    alert('Profile removed');
                    ctx.dispatch('fetchProfiles', ctx.getters.getLastLink);
                }).catch(err => console.log(err))
            }

        },

        createProfile( ctx, profile ) {
            //make mutation
            // this.profile.img = this.image;
            // console.log("Edit is ", this.state.edit);

            // console.log( this.image);
            // console.log(JSON.stringify(this.profile));


            // ctx.commit('updateProfileForShow', profile);
            // console.log("profile data: ", profile);
            // console.log('1  ', ctx.getters('getProfileForShow'));
            // console.log('1  ', this.state.profile.id);

            // console.log('2  ', ctx.getters.getProfileForShow());

                //Add profile
                fetch('api/profiles/create', {
                    method: 'post',
                    body: JSON.stringify(profile),
                    headers: {
                        'content-type': 'application/json'
                    }

                })
                    .then(res => res.json())
                    .then(data => {
                        // this.profile.name = '';
                        // this.profile.img = '';
                        // ctx.commit('updateProfileForShow', {});
                        alert('Profile added');
                    })
                    .catch(err => console.log(err));
                // router.push("/");


                //Update profile
                // /profiles/id


        },
        editProfile(ctx, profile) {
            // fetch('/api/profiles/'+ profile.id, {
            //     method: 'put',
            //     body: JSON.stringify(profile),
            //     headers: {
            //         'content-type': 'application/json'
            //     }
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         ctx.commit('updateProfileForShow', {});
            //         alert('Profile updated');
            //     })
            //     .catch(err => console.log(err));
            // console.log(JSON.stringify(profile));


        //     axios.put('/api/profiles/', { params: {id: profile.id }}, data)
        //     console.log(JSON.stringify(profile));
        //     console.log(profile.img.slice(0,5));
        //     if (profile.img.slice(0,5) == '/img/') {
        //         profile.img = profile.img.substring(5);
                console.log("profile img", profile.img);
        //     }
            axios.put('api/profiles/'+profile.id, profile, {
                headers: { 'content-type': "application/json "}})
                // .then(res => ctx.commit('updateProfileForShow', {}))
                    .catch( err => console.log(err));

            // axios.post('/api/profiles/' + profile.id, {
            //     name: profile.name,
            //     img: profile.img,
            //     _method: 'put',
            //     headers: {
            //                 'content-type': 'application/json'
            //                         }
            // }).then((res) => {
            //     // here clear your form and fetch your users list if you want
            // })
            //     .catch(error => {
            //         // here catch error messages from laravel validator and show them
            //     });

            // axios.post('/api/profiles/' + profile.id, {
            //     // body: JSON.stringify(profile),
            //     body: JSON.stringify(profile),
            //     _method: 'patch',
            //     headers: {
            //         'content-type': 'application/json'
            //                 }
            // })
            //     .then(function (response) {
            //         console.log(response);
            //         ctx.commit('updateProfileForShow', {});
            //         alert('Profile updated');
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        },
        setEdit(ctx, edit) {
            ctx.commit('updateEdit', edit);
        },
        setCurrentProfileId(ctx, id) {
            ctx.commit('updateCurrentProfileId', id);
        },
        setLastLink({commit}, link) {
            commit('updateLastLink', link);
        }
    },
    mutations: {
        updateProfiles(state, profiles) {
            state.profiles = profiles;
        },
        updatePagination(state, pagination) {
            state.pagination = pagination;
        },
        updateProfileForShow(state, profile) {
            // state.profile = {};
            state.profile = profile;
        },
        updateEdit(state, edit) {
            state.edit = edit;
        },
        updateCurrentProfileId(state, id) {
            state.profile_id = id;
        },
        updateLastLink(state, link) {
            state.lastLink = link;
        }
    },
    state: {
        profiles: [],
        profile: {
            id: '',
            name: '',
            img: '',
            created_at: '',
            updated_at: '',
        },
        profile_id: '',
        edit: false,
        pagination: {},
        lastLink: '',
    },
    getters: {
        getAllProfiles(state) {
            // console.log('pagination got')
            return state.profiles;
        },
        getProfileForShow(state){
            console.log("profile for show from state: ", state.profile);
            return state.profile;
        },
        getPagination(state){
            return state.pagination;
        },
        getEditValue(state) {
            return state.edit;
        },
        getCurrentProfileId(state) {
            return state.profile_id;
        },
        curryGetter: state => param => state.profiles.find((el) => el.id === param),
        // curryGetter: state => param => state.profiles[param],
        getLastLink: state => state.lastLink,
    }
}
