<template>
    <div v-if="posts">
        <h1>{{ whatPages === 'community' ? posts.post_title : posts.post_title }}</h1>
        <h5>{{ whatPages === 'community' ? posts.post_title : posts.post_title }}</h5>
    </div>
</template>

<script>
export default {
    props: {
        posts: '',
        whatPages: ''
    },
    data() {
        return {

        }
    }
}
</script>