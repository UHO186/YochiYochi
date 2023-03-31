<template>
    <div class="banner-wrapper">
        <a :href="url" class="banner-component-a"><img class="img-thumbnail" :src="imageUrl"
                style="height: 200px; width: 100%;" /></a>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        url: String
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.banner-wrapper {
    display: flex;
    width: 100%;
    /* justify-content: center; */
    /* align-items: center; */
}

.banner-component-a {
    width: 100%;
}
</style>