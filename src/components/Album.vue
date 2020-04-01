<template>
<b-col cols="3" v-if="show">
<b-card
class="m-2"
tag="article"
:sub-title="artists"
no-body
>
    <b-link :href="url">
        <b-card-img :src="image" alt="Image" top></b-card-img>
    </b-link>
    <b-card-body>
        <b-card-title>{{ data.basic_information.title }}</b-card-title>
        <b-card-sub-title>{{ artists }}</b-card-sub-title>
    </b-card-body>
    <b-card-footer>
        <b-button @click="listen">Listened to</b-button>
        <Listens :data="listens" />
    </b-card-footer>
</b-card>
</b-col>
</template>

<script>
import Listens from './Listens.vue';

export default {
    name: 'Album',
    props: ['data', 'id', 'listensID', 'lastListenedID', 'filters'],
    components: {
        Listens
    },
    computed: {
        artists: function () {
            return this.data.basic_information.artists.map(a => a.name).join(', ');
        },
        image: function () {
            return this.data.basic_information.huge_thumb ||
            this.data.basic_information.cover_image || this.data.thumb;
        },
        lowerTitle: function () {
            return this.data.basic_information.title.toLowerCase();
        },
        lowerArtists: function () {
            return this.data.basic_information.artists.map(a => a.name.toLowerCase()).join(' ');
        },
        matchesQuery: function () {
            if (!this.filters.query) return true; // no filter, show it all
            if (this.lowerTitle.indexOf(this.filters.query) !== -1) return true;
            if (this.lowerArtists.indexOf(this.filters.query) !== -1) return true;
            return false;
        },
        matchesListened: function () {
            if (!this.filters.unlistened) return true;
            return this.listens.count === 0;
        },
        show: function () {
            return this.matchesQuery && this.matchesListened;
        },
        url: function () {
            return 'https://www.discogs.com/release/' + this.data.basic_information.id;
        }
    },
    created: function () {
        if (!this.data.notes) return;

        for (let note of this.data.notes) {
            if (note.field_id === this.listensID) {
                this.listens.count = Number(note.value);
            } else if (note.field_id === this.lastListenedID) {
                this.listens.latest = note.value;
            }
        }
    },
    data: function () {
        return {
            listens: {
                count: 0,
                latest: undefined
            }
        }
    },
    methods: {
        listen: function () {
            this.listens.count++;
            this.listens.latest = new Date();
            this.$emit('listen', this.id, this.listens);
        }
    }
}
</script>
