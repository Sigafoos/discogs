<template>
<b-container>
    <b-alert v-if="error" show variant="danger">
        {{ error }}
    </b-alert>
    <div v-else>
        <b-row>
            <h2>Filters/sort</h2>
            <b-form-input
                v-model="rawQuery"
                placeholder="filter by title/artist"
                @update="clearShown"
            />
            <b-form-checkbox
                id="unlistened"
                v-model="unlistened"
                name="unlistened-1"
                value="1"
                unchecked-value=""
                @change="clearShown"
            >
                unlistened only
            </b-form-checkbox>
        </b-row>
        <b-row>
            <h2>
               Albums
            <span
                class="text-muted"
                v-if="albums.length"
            >
              ({{ shownAlbums.length }} / {{ albums.length }})
            </span>
            </h2>
        </b-row>
        <b-row><p v-if="loading">{{ loadingMessage }}</p></b-row>
        <b-row>
            <Album
                v-for="(album, id) in albums"
                :key="album.basic_information.instance_id"
                :data="album"
                :id="id"
                :listensID="listensID"
                :lastListenedID="lastListenedID"
                :filters="filters"
                @listen="listen"
                @show="countShow"
            />
        </b-row>
    </div>
</b-container>
</template>

<script>
import Album from './Album.vue';

// Discogs doesn't let us create custom fields, so they have to exist already
const LISTENS = 'Listens';
const LAST_LISTENED = 'Last Listened';

export default {
    name: 'Discogs',
    components: {
        Album
    },
    data: function () {
        return {
            loading: true,
            loadingMessage: 'loading...',
            error: undefined,
            listensID: undefined,
            lastListenedID: undefined,
            albums: [],
            shownAlbums: [],
            rawQuery: '',
            unlistened: undefined,
            username: undefined
        }
    },
    props: {
        token: {
            type: String,
            required: true
        }
    },
    computed: {
        filters: function () {
            return {
                query: this.rawQuery.toLowerCase(),
                unlistened: this.unlistened
            };
        }
    },
    created: async function () {
        this.username = localStorage.getItem('discogs_username');
        if (!this.username) {
            console.log('need a username');
            await fetch('https://api.discogs.com/oauth/identity', {
                headers: {
                'Authorization': 'Discogs token=' + this.token
                }})
            .then(resp => resp.json())
            .then(resp => {
                this.username = resp.username;
                localStorage.setItem('discogs_username', this.username)
            })
            .catch(err => console.error(err))
        }
        fetch('https://api.discogs.com/users/' + this.username + '/collection/fields', {
            headers: {
                'Authorization': 'Discogs token=' + this.token
        }})
        .then(resp => resp.json())
        .then(resp => {
            for (let field of resp.fields) {
                if (field.name === LISTENS) {
                    this.listensID = field.id;
                } else if (field.name === LAST_LISTENED) {
                    this.lastListenedID = field.id;
                }
            }

            if (!this.listensID) {
                this.error = 'You do not have a custom field named "Listens". Unfortunately this has to be created manually. Please add it in your collection settings.';
            } else if (!this.lastListenedID) {
                this.error = 'You do not have a custom field named "Last Listened". Unfortunately this has to be created manually. Please add it in your collection settings.';
            } else {
                this.fetchAlbums();
            }
        })
        .catch(err => console.error(err))
    },
    methods: {
        fetchAlbums: function (page=1) {
            fetch('https://api.discogs.com/users/' + this.username + '/collection/folders/0/releases?sort=added&page=' + page, {
                headers: {
                    'Authorization': 'Discogs token=' + this.token
                }
            })
            .then(resp => resp.json())
            .then(this.appendAlbums)
            .catch(err => console.error(err));
        },
        appendAlbums: function (resp) {
            this.albums.push(...resp.releases);
            console.log(resp);
            if (resp.pagination.page < resp.pagination.pages) {
                this.loadingMessage = 'loading (' + Math.floor(resp.pagination.page / resp.pagination.pages * 100) + '%)';
                this.fetchAlbums(resp.pagination.page+1);
            } else {
                this.loading = false;
            }
        },
        listen: function (i, listens) {
            let album = this.albums[i];
            fetch('https://api.discogs.com/users/' + this.username + '/collection/folders/0/releases/' + album.basic_information.id + '/instances/' + album.instance_id + '/fields/' + this.listensID, {
                method: 'POST',
                body: JSON.stringify({value: String(listens.count)}),
                headers: {
                    'Authorization': 'Discogs token=' + this.token,
                    'Content-Type': 'application/json'
                }
            })
            .catch(err => console.error(err));
            fetch('https://api.discogs.com/users/' + this.username + '/collection/folders/0/releases/' + album.basic_information.id + '/instances/' + album.instance_id + '/fields/' + this.lastListenedID, {
                method: 'POST',
                body: JSON.stringify({value: String(listens.latest)}),
                headers: {
                    'Authorization': 'Discogs token=' + this.token,
                    'Content-Type': 'application/json'
                }
            })
            .catch(err => console.error(err));
        },
        countShow: function(album) {
            this.shownAlbums.push(album);
        },
        clearShown: function() {
            console.log('clearing');
            this.shownAlbums = [];
        }
    }
}
</script>
