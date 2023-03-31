<template>
    <div class="card">
        <div class="containers">
            <a :href="url"><img :src="imageUrl" class="img-thumbnail"></a>
            <div class="card-body">
                <p class="card-text">{{ text }}</p>
            </div>
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

<style></style>