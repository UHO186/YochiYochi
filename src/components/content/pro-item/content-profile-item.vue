<template>
    <proHeader @proCate="proCate"></proHeader>
    <proContent :proCa="cate" @backGame="backGame"></proContent>
</template>

<script>
import proHeader from "./content-profile-header.vue"
import proContent from "./content-profile-con.vue";

export default {
    data() {
        return {
            cate: "t1",
        }
    },
    components: {
        proHeader,
        proContent,
    },
    methods: {
        proCate(proCate) {
            this.cate = proCate
        },
        backGame() {
            this.$emit("backGame")
        }
    },
}
</script>