<template>
    <div class="flex justify-around bg-gray-500 font-bold text-4xl py-10">
        <p id="t1" class="cursor" @click="focusTitle" style="color: rgb(253 186 116)">회원 정보</p>
        <p id="t2" class="cursor" @click="focusTitle">학습 통계</p>
        <p id="t3" class="cursor" @click="focusTitle">구매 내역</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            focus: "t1",
            color: ["color: rgb(253 186 116)"],
        }
    },
    mounted() {

    },
    methods: {
        focusTitle(e) {
            this.focus = e.target.id
            if(this.focus == "t1") {
                document.querySelector(`#${this.focus}`).style = this.color;
            } else {document.querySelector(`#t1`).style = "";}
            if(this.focus == "t2") {
                document.querySelector(`#${this.focus}`).style = this.color
            } else {document.querySelector(`#t2`).style = "";}
            if(this.focus == "t3") {
                document.querySelector(`#${this.focus}`).style = this.color
            } else {document.querySelector(`#t3`).style = "";}
            this.$emit("proCate", e.target.id)
        },
    }
    
}
</script>

<style>
.cursor {
    cursor: pointer;
}
</style>