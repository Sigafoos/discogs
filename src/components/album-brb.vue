<template>
<b-col>
<b-card
class="mb-2 m-2"
tag="article"
no-body
>

<b-card-img
:src="data.basic_information.huge_thumb"
style="max-width: 300px; max-height: 300px"
top
/>
<b-card-title>{{ data.basic_information.title }}</b-card-title>
    <b-card-text>{{ artists }}</b-card-text>
    <b-button @click="listen">Listened to</b-button>
</b-card>
</b-col>
</template>

<script>
export default {
    name: 'Album',
    props: ['data'],
    computed: {
        artists: function () {
            return this.data.basic_information.artists.map(a => a.name).join(', ');
        }
    },
    methods: {
        listen: function () {
            console.log('listening to ' + this.data.basic_information.title);
            this.$emit('listen', this.data.collection_id);
        }
    }
}
</script>
