<template>
<div id="token">
<h2>Enter your personal access token</h2>
<p>Generate one in your <b-link href="https://www.discogs.com/settings/developers">Developers settings</b-link>. It is only stored on your device.</p>
<form @submit="submit">
<input type="text" required name="token" v-model="token" />
<button type="submit">let's go</button>
</form>
</div>
</template>

<script>
export default {
    name: 'TokenForm',
    data: function () {
        return {
            token: ''
        };
    },
    methods: {
        submit (e) {
            e.preventDefault();
            this.$emit('submitted', this.token);
        }
    }
}
</script>
