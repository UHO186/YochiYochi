<template>
    <div class="row g-0 bg-light position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
            <a :href="url"><img :src="imageUrl"></a>
        </div>
        <div class="col-md-6 p-4 ps-md-0">
            <h5 class="mt-0">{{ text }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        url: String,
        text: String
    },
    data() {
        return {

        }
    }
}
</script>