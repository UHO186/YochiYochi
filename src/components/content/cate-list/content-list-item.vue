<template>
    <div v-if="cate == `all`" class="cateTest">
        <p v-for="item in all" :key="item" :class="`category`" :style="{backgroundColor: item.color}" @click="viewTopic">{{ item.name }}</p>
    </div>
    <div v-if="cate == `health`" class="cateTest">
        <p v-for="item in health" :key="item" :class="`category`" :style="{backgroundColor: item.color}">{{ item.name }}</p>
    </div>
    <div v-if="cate == `human`" class="cateTest">
        <p v-for="item in human" :key="item" :class="`category`" :style="{backgroundColor: item.color}">{{ item.name }}</p>
    </div>
    <div v-if="cate == `natural`" class="cateTest">
        <p @click="moveUrl(item.name)" v-for="item in natural" :key="item" :class="`category`" :style="{backgroundColor: item.color}">{{
            item.name }}</p>
    </div>
    <div v-if="cate == `exp`" class="cateTest">
        <p @click="moveUrl(item.name)" v-for="item in exp" :key="item" :class="`category`" :style="{backgroundColor: item.color}">{{
            item.name }}</p>
    </div>
    <div v-if="cate == `lang`" class="cateTest">
        <p @click="moveUrl(item.name)" v-for="item in lang" :key="item" :class="`category`" :style="{backgroundColor: item.color}">{{
            item.name }}</p>
    </div>
</template>

<script>
export default {
    props: ['cate'],
    data() {
        return {//           빨                    핑                     파                 녹                     노
            // color: ["rgb(243, 81, 82)", "rgb(251, 110, 208)", "rgb(36, 107, 189)", "rgb(9, 181, 128)", "rgb(254, 198, 57)"],
            // 전체, 건강, 인관관계, 환경, 표현, 언어
            all: [{ name: "봄", color: "rgb(243, 81, 82)" }, { name: "여름", color: "rgb(36, 107, 189)" }, { name: "가을", color: "rgb(9, 181, 128)" },
            { name: "겨울", color: "rgb(9, 181, 128)" }, { name: "영진", color: "rgb(243, 81, 82)" }, { name: "파이팅", color: "rgb(36, 107, 189)" }],
            health: [{ name: "놀이1(건강)", color: "rgb(243, 81, 82)" }, { name: "놀이2(건강)", color: "rgb(36, 107, 189)" }, { name: "놀이3(건강)", color: "rgb(9, 181, 128)" },
            { name: "놀이4(건강)", color: "rgb(9, 181, 128)" }, { name: "놀이5(건강)", color: "rgb(243, 81, 82)" }, { name: "놀이6(건강)", color: "rgb(36, 107, 189)" }],
            human: [{ name: "놀이1(인관관계)", color: "rgb(243, 81, 82)" }, { name: "놀이2(인관관계)", color: "rgb(36, 107, 189)" }, { name: "놀이3(인관관계)", color: "rgb(9, 181, 128)" },
            { name: "놀이4(인관관계)", color: "rgb(9, 181, 128)" }, { name: "놀이5(인관관계)", color: "rgb(243, 81, 82)" }, { name: "놀이6(인관관계)", color: "rgb(36, 107, 189)" }],
            natural: [{ name: "카드 기억 게임", color: "rgb(243, 81, 82)" }, { name: "놀이2(환경)", color: "rgb(36, 107, 189)" }, { name: "놀이3(환경)", color: "rgb(9, 181, 128)" },
            { name: "놀이4(환경)", color: "rgb(9, 181, 128)" }, { name: "놀이5(환경)", color: "rgb(243, 81, 82)" }, { name: "놀이6(환경)", color: "rgb(36, 107, 189)" }],
            exp: [{ name: "그림 그리기", color: "rgb(243, 81, 82)" }, { name: "놀이2(표현)", color: "rgb(36, 107, 189)" }, { name: "놀이3(표현)", color: "rgb(9, 181, 128)" },
            { name: "놀이4(표현)", color: "rgb(9, 181, 128)" }, { name: "놀이5(표현)", color: "rgb(243, 81, 82)" }, { name: "놀이6(표현)", color: "rgb(36, 107, 189)" }],
            lang: [{ name: "산성비 게임", color: "rgb(243, 81, 82)" }, { name: "놀이2(언어)", color: "rgb(36, 107, 189)" }, { name: "놀이3(언어)", color: "rgb(9, 181, 128)" },
            { name: "놀이4(언어)", color: "rgb(9, 181, 128)" }, { name: "놀이5(언어)", color: "rgb(243, 81, 82)" }, { name: "놀이6(언어)", color: "rgb(36, 107, 189)" }],
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

.cateTest {
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
    user-select: none; /* Standard */
}
</style>