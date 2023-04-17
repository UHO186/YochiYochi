<template>
    <div class="grid grid-cols-2 text-3xl font-semibold mt-10 h-96">
        <div class="border-r-4 grid content-around">
            <p>유아 이름</p>
            <p>연령 / 레벨</p>
            <p>전화번호</p>
        </div>
        <div class="grid content-around">
            <input class="bg-yellow-200 rounded-full py-2 text-center ml-6" v-model="name">
            <input class="bg-yellow-200 rounded-full py-2 text-center ml-6" v-model="level">
            <input class="bg-yellow-200 rounded-full py-2 text-center ml-6" v-model="tel">
        </div>
    </div>
    <div class="flex justify-start">
        <p class="text-xl font-semibold cursor-pointer bg-black text-white rounded-lg p-2 hover:text-amber-300 mt-3" @click="backGame">돌아가기</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'test',
            level: 'test',
            tel: '010-9905-8802',
        }
    },
    methods: {
        backGame() {
            this.$emit("backGame")
        }
    }
}
</script>

<style>

</style>