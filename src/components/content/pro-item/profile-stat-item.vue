<template>
    <div class="flex items-center mt-10 font-semibold">
        <div class="basis-1/2">
            <RadarChart :radarData="radarData"></RadarChart>
        </div>
        <div class="flex-1">
            <div class="flex justify-center">
                <div>
                    <p class="top text-3xl">레벨</p>
                    <div class="border-2 border-gray-400 p-7 mt-3">
                        <p class="tb">건강Lv.</p>
                        <p class="tb">인간관계Lv.</p>
                        <p class="tb">환경Lv.</p>
                        <p class="tb">언어Lv.</p>
                        <p class="tb">표현Lv.</p>
                    </div>
                </div>
                <div class="basis-1/3 h-1 border-b-2 border-gray-400 mt-32"></div>
                <div>
                    <p class="top">포인트</p>
                    <div class="border-2 border-gray-400 p-7 mt-3">
                        <p class="tb">건강: </p>
                        <p class="tb">인간관계: </p>
                        <p class="tb">환경: </p>
                        <p class="tb">언어: </p>
                        <p class="tb">표현: </p>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div class="flex justify-between">
                    <p class="top">학습 내역</p>
                    <p class="bg-black text-white p-2 text-xl rounded-xl cursor-pointer hover:text-amber-300" @click="detail">상세보기</p>
                </div>
                <div class="flex justify-around rounded-xl border-2 border-gray-400 py-5 mt-3 text-lg">
                    <p class="bg-red-500 rounded-3xl w-[30%] py-10">놀이1</p>
                    <p class="bg-sky-500 rounded-3xl w-[30%] py-10">놀이2</p>
                    <p class="bg-green-500 rounded-3xl w-[30%] py-10">놀이3</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-start">
        <p class="text-xl font-semibold cursor-pointer bg-black text-white rounded-lg p-2 hover:text-amber-300 mt-3" @click="backGame">돌아가기</p>
    </div>
</template>

<script>
import RadarChart from "../../charts/RadarChart.vue"

export default {
    data() {
        return {
            radarData: [10, 20, 30,40,50]
        }
    },
    components: {
        RadarChart,
    },
    methods: {
        detail() {
            this.$emit('detail')
        },
        backGame() {
            this.$emit("backGame")
        }
    },
}
</script>

<style>
.top {
    font-size: 1.875rem/* 30px */;
    line-height: 2.25rem/* 36px */;
}

.tb {
    font-size: 1rem/* 16px */;
    line-height: 1.5rem/* 24px */;
}
</style>