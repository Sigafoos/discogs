<template>
    <b-card-text>{{ data.count }} {{ listenText }}</b-card-text>
</template>

<script>
export default {
    name: 'Listens',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        listenText: function () {
            return (this.data.count) === 1 ? 'listen' : 'listens';
        }
    }
}
</script>
