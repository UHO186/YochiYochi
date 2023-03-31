<template>
    <button type="button" class="btn btn-primary btn-lg" @click="goToMember()">{{ members }}</button>
</template>

<script>
export default {
    props: {
        url: String,
        members: String
    },
    methods: {
        goToMember() {
            location.href = this.url
        }
    },
    data() {
        return {

        }
    }
}
</script>