<template>
    <div class="font-semibold text-base">
        <div class="flex justify-between text-2xl mt-5">
            <p>학습 내역</p>
            <div class="flex text-xl">
                <p class="mr-3">정렬</p>
                <div class="flex">
                    <p>최신순</p>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" class="mt-1"/>
                </div>
            </div>
        </div>
        <div class="border-2 mt-5 flex justify-around py-5">
            <font-awesome-icon id="left" class="mt-20 cursor-pointer basis-1/12" icon="fa-solid fa-chevron-left" style="height: 40px;" @click="pracRecycle"/><!-- 왼쪽 -->
            <div class="flex flex-1 justify-center">
                <div v-for="item,index in practice" :key="index">
                    <div class="border-2 p-3 mx-2" style="min-width: 152px; max-width:152px;">
                        <p class="bg-green-500 px-7 py-9 rounded-3xl mb-3">{{item.title}}</p> <!-- 데이터 받아오기 -->
                        <p>포인트: {{ item.point }}</p>
                        <p>{{item.count}}회 학습</p>
                    </div>
                </div>
            </div>
            <font-awesome-icon id="right" class="mt-20 cursor-pointer basis-1/12" icon="fa-solid fa-chevron-right" style="height: 40px;" @click="pracRecycle"/><!-- 오른쪽 -->
        </div>
        <div class="flex justify-start text-2xl">
            <p>우리 아이 작품</p>
        </div>
        <div class="border-2 mt-5 py-5 flex justify-around">
            <font-awesome-icon id="left" icon="fa-solid fa-chevron-left" style="height: 40px;" class="mt-10 cursor-pointer basis-1/12"/>
            <div v-for="item,index in artwork" :key="index">
                <div class="border-2 p-3 mx-2" style="min-width: 152px; max-width:152px;">
                    <img :src="item.img" alt="작품" class="drop-shadow-2xl">
                </div>
            </div>
            <font-awesome-icon id="right" icon="fa-solid fa-chevron-right" style="height: 40px;" class="mt-10 cursor-pointer basis-1/12"/>
        </div>
        <div class="flex justify-start">
            <p @click="detail" class="text-xl cursor-pointer bg-black text-white rounded-lg p-2 hover:text-amber-300 mt-5">돌아가기</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pracData: [],
            practice: [],
            pracPage: 0,
            pracThis: 5,
            artData: [],
            artwork: [],
            artPage: 0,
            artThis: 5,
        }
    },
    methods: {
        detail() {
            this.$emit('detail')
        },
        pracRecycle(e) {
            if(e.target.id == "right") {
                if(this.pracData.length > this.pracPage) {
                    this.pracThis = 0
                    this.practice.splice(0,5)
                    for(var i = 0; i < 5; i++) {
                        if(this.pracData.length > this.pracPage) {
                            this.practice.push(this.pracData[this.pracPage])
                            this.pracPage++
                            this.pracThis++
                        }
                    }
                }
            } else if(e.target.id == "left") {
                if(5 < this.pracPage) { // 11 // 4, 9, ....
                    if(this.pracThis < 5) { 
                        this.pracPage -= this.pracThis
                        this.pracThis = 5
                    } else {
                        this.pracPage -= this.pracThis
                    }
                    this.practice.splice(0,5)
                    for(var i = 5; i > 0; i--) {
                        if(this.pracPage == 9) {
                            this.practice.push(this.pracData[this.pracPage - i + 1])
                        } else {
                            this.practice.push(this.pracData[this.pracPage - i])
                        }
                    }
                }
            }
        },
        artRecycle(e) {
            if(e.target.id == "right") {
                if(this.artData.length > this.artPage) {
                    this.artThis = 0
                    this.artwork.splice(0,5)
                    for(var i = 0; i < 5; i++) {
                        if(this.artData.length > this.artPage) {
                            this.artwork.push(this.artData[this.artPage])
                            this.artPage++
                            this.artThis++
                        }
                    }
                }
            } else if(e.target.id == "left") {
                if(5 < this.artPage) { // 11 // 4, 9, ....
                    if(this.artThis < 5) { 
                        this.artPage -= this.artThis
                        this.artThis = 5
                    } else {
                        this.artPage -= this.artThis
                    }
                    this.artwork.splice(0,5)
                    for(var i = 5; i > 0; i--) {
                        if(this.artPage == 9) {
                            this.artwork.push(this.artData[this.artPage - i + 1])
                        } else {
                            this.artwork.push(this.artData[this.artPage - i])
                        }
                    }
                }
            }
        },
    },
    mounted() {
        for(var i = 1; i < 34; i++ ) {
            this.pracData.push({title: `practice${i}`, point: i, count: i})
        }
        for(var i = 0; i < 5; i++) {
            if(this.pracData.length > i) {
                this.practice.push(this.pracData[i])
            }
        }
        for(var i = 1; i < 6; i++) {
            this.artData.push({img: `art/test${i}.jpg`})
        }
        for(var i = 0; i < 5; i++) {
            if(this.artData.length > i) {
                this.artwork.push(this.artData[i])
            }
        }
    }
}
</script>

<style>
</style>