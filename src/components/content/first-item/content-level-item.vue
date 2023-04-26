<template>
    <div id="wrap">
        <div id="content">
            <div v-if="page==1">
                <ContentLevelQues @saveAge="saveAge"></ContentLevelQues>
            </div>
            <div v-else>
                <ContentLevelTes @levelTest="levelTest"></ContentLevelTes>
                <div class="flex justify-center">
                    <p class="font-bold text-lg mt-14 py-3 w-[30%] rounded-full bg-blue-200 hover:border-black border-2 cursor-pointer" @click="pageDown">Prev</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContentLevelQues from "./conent-levelques-item.vue";
import ContentLevelTes from "./content-levelT-item.vue";

export default {
    data() {
        return {
            page: 1,
        }
    },
    mounted() {

    },
    methods: {
        pageDown() {
            this.page--;
        },
        levelTest(e) {
            this.$emit('levelTest', e);
        },
        saveAge(e) {
            this.$emit("saveAge", e)
            this.page++
        }
    },
    components: {
        ContentLevelQues,
        ContentLevelTes,
    },
}
</script>