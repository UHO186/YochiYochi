<template>
    <div v-if="cate == `all`" class="test">
        <p v-for="item in all" :key="item" :class="`category bg-${item.color}-500`" @click="viewTopic">{{ item.name }}</p>
    </div>
    <div v-if="cate == `health`" class="test">
        <p v-for="item in health" :key="item" :class="`category bg-${item.color}-500`">{{ item.name }}</p>
    </div>
    <div v-if="cate == `human`" class="test">
        <p v-for="item in human" :key="item" :class="`category bg-${item.color}-500`">{{ item.name }}</p>
    </div>
    <div v-if="cate == `natural`" class="test">
        <p @click="moveUrl(item.name)" v-for="item in natural" :key="item" :class="`category bg-${item.color}-500`">{{
            item.name }}</p>
    </div>
    <div v-if="cate == `exp`" class="test">
        <p @click="moveUrl(item.name)" v-for="item in exp" :key="item" :class="`category bg-${item.color}-500`">{{
            item.name }}</p>
    </div>
    <div v-if="cate == `lang`" class="test">
        <p @click="moveUrl(item.name)" v-for="item in lang" :key="item" :class="`category bg-${item.color}-500`">{{
            item.name }}</p>
    </div>
</template>

<script>
export default {
    props: ['cate'],
    data() {
        return {
            // 전체, 건강, 인관관계, 환경, 표현, 언어
            all: [{ name: "봄", color: "red" }, { name: "여름", color: "blue" }, { name: "가을", color: "green" },
            { name: "겨울", color: "green" }, { name: "영진", color: "red" }, { name: "파이팅", color: "blue" }],
            health: [{ name: "놀이1(건강)", color: "red" }, { name: "놀이2(건강)", color: "blue" }, { name: "놀이3(건강)", color: "green" },
            { name: "놀이4(건강)", color: "green" }, { name: "놀이5(건강)", color: "red" }, { name: "놀이6(건강)", color: "blue" }],
            human: [{ name: "놀이1(인관관계)", color: "red" }, { name: "놀이2(인관관계)", color: "blue" }, { name: "놀이3(인관관계)", color: "green" },
            { name: "놀이4(인관관계)", color: "green" }, { name: "놀이5(인관관계)", color: "red" }, { name: "놀이6(인관관계)", color: "blue" }],
            natural: [{ name: "카드 기억 게임", color: "red" }, { name: "놀이2(환경)", color: "blue" }, { name: "놀이3(환경)", color: "green" },
            { name: "놀이4(환경)", color: "green" }, { name: "놀이5(환경)", color: "red" }, { name: "놀이6(환경)", color: "blue" }],
            exp: [{ name: "그림 그리기", color: "red" }, { name: "놀이2(표현)", color: "blue" }, { name: "놀이3(표현)", color: "green" },
            { name: "놀이4(표현)", color: "green" }, { name: "놀이5(표현)", color: "red" }, { name: "놀이6(표현)", color: "blue" }],
            lang: [{ name: "산성비 게임", color: "red" }, { name: "놀이2(언어)", color: "blue" }, { name: "놀이3(언어)", color: "green" },
            { name: "놀이4(언어)", color: "green" }, { name: "놀이5(언어)", color: "red" }, { name: "놀이6(언어)", color: "blue" }],
        }
    },
    methods: {
        viewTopic(e) {
            this.$emit("viewTopic", e.target.textContent)
        },
        moveUrl(n) {
            if (n === '카드 기억 게임') {
                this.$router.push({ name: 'cardmemory' })
            } else if (n === '산성비 게임') {
                this.$router.push({ name: 'rainscore' })
            } else if (n === '그림 그리기')
                this.$router.push({ name: 'draw' })
        }
    }
}
</script>

<style scoped>
.category {
    border-width: 1px;
    border-radius: 1.5rem
        /* 24px */
    ;
    padding-top: 5rem
        /* 80px */
    ;
    padding-bottom: 5rem
        /* 80px */
    ;
    margin-bottom: 4rem;
    width: 15rem
        /* 240px */
    ;
    color: white;
    cursor: pointer;
}

.test {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: space-between;
    margin-top: 6rem
        /* 96px */
    ;
    font-weight: 600;
    font-size: 1.875rem
        /* 30px */
    ;
    line-height: 2.25rem
        /* 36px */
    ;
}
</style>