<template>
    <a :href="url"><img :src="imageUrl"></a>
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
