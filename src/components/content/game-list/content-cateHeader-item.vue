<template>
    <div class="flex text-3xl">
        <div class="basis-1/5 rounded-full bg-black text-white py-14 font-bold cursor-pointer" @click="checkPro">프로필</div>
        <div class="basis-10"></div>
        <div class="flex flex-1 py-14 rounded-full border bg-gray-500 text-4xl">
            <p class="basis-1/12"></p>
            <font-awesome-icon class="basis-1/12 cursor-pointer" icon="fa-solid fa-bars" @click="backList"/>
            <font-awesome-icon class="basis-1/12 cursor-pointer" icon="fa-solid fa-chevron-left"  @click="cateDown"/>
            <p class="flex-1 text-white font-semibold">{{ cate[page] }}</p>
            <font-awesome-icon class="basis-1/12 cursor-pointer" icon="fa-solid fa-chevron-right"  @click="cateUp"/>
            <p class="basis-1/12"></p>
        </div>
        <div class="basis-10"></div>
        <div class="basis-1/6 py-14 border rounded-3xl bg-green-400 text-white font-semibold">
            <p>포인트</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 0,
            cate: ["봄", "여름", "가을", "겨울", "영진", "파이팅"],
        }
    },
    props: ["topic"],
    methods: {
        cateUp() {
            if(this.page < this.cate.length - 1) {
                this.page += 1
                this.$emit("gameCate", this.cate[this.page])
            } else {
                this.page = 0
                this.$emit("gameCate", this.cate[this.page])
            }
        },
        cateDown() {
            if(this.page == 0) {
                this.page = this.cate.length -1
                this.$emit("gameCate", this.cate[this.page])
            } else {
                this.page -= 1
                this.$emit("gameCate", this.cate[this.page])
            }
        },
        backList() {
            this.$emit('backList')
        },
        checkPro() {
            this.$emit('checkPro')
        }
    },
    mounted() {
        this.page = this.cate.findIndex(cate => cate == this.topic)
        this.$emit("gameCate", this.cate[this.page])
    }
}
</script>