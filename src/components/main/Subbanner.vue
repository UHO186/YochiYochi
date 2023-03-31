<template>
    <div class="card">
        <div class="main-containers">
            <a :href="url"><img class="img-thumbnail" :src="imageUrl"></a>
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
        text: String,
        width: {
            type: String,
            default: '250px'
        },
        height: {
            type: String,
            default: '100px'
        },
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.main-containers {
    display: flex;
    flex-direction: column;
    /* min-width: 100px; */
    /* min-width: 50%; */
    /* 중앙정렬 */
    justify-content: center;
    align-items: center;
}
</style>