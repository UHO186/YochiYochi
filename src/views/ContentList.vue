<template>
    <div id="wrap">
        <div id="content">
            <div v-if="first">
                <conLevel @levelTest="levelTest" @saveAge="saveAge"></conLevel>
            </div>
            <div v-if="cateList">
                <conHeader :me="category" @categoryChange="categoryChange" @checkPro="checkPro"></conHeader>
                <conList :cate="category" @viewTopic="viewTopic"></conList>
            </div>
            <div v-if="topicList">
                <conCateHeader @backList="backList" @checkPro="checkPro" :topic="topic" @gameCate="gameCate"></conCateHeader>
                <conCateList :gameCategory="topic" @backCate="backCate"></conCateList>
            </div>
            <div v-if="proGame">
                <conProGame @profile="viewProfile"></conProGame>
            </div>
            <div v-if="profile">
                <conProfile @backGame="backGame"></conProfile>
            </div>
        </div>
    </div>
</template>

<script>
// 처음 확인
import conLevel from "../components/content/first-item/content-level-item.vue"
// 영역 정렬
import conHeader from "../components/content/cate-list/contentList-header-item.vue";
import conList from "../components/content/cate-list/content-list-item.vue";
// 주제 정렬
import conCateHeader from "../components/content/game-list/content-cateHeader-item.vue";
import conCateList from "../components/content/game-list/content-cateList-item.vue";
// 프로필
import conProGame from "../components/content/pro-item/content-profile-game.vue";
import conProfile from "../components/content/pro-item/content-profile-item.vue";

export default {
    data() {
        return {
            first: true,  // 처음확인
            cateList: false, // 영역 정렬
            topicList: false, // 주제 정렬
            profile: false,
            proGame: false,
            category: "all",
            topic: '',
        }
    },
    mounted() {
        // 유저 데이터 받아와서 처음인지 아닌지 확인 메소드 만들기'
    },
    methods: {
        /* 첫페이지 메소드 */
        saveAge(e) {
            // 나이 선택 e == 선택한 나이
            console.log("나이선택", e)
        },
        levelTest(e) {
            if(e == "아니요") {
                this.first = false
                this.cateList = true
            } else {
                console.log("테스트화면으로") // 나중에 테스트 화면 생기면 ㄱㄱ
            }
        },
        /* 영역 정렬 메소드 */
        checkPro() {
            this.proGame = true
            this.cateList = false
            this.topicList = false
        },
        categoryChange(categoryChange) {
            this.category = categoryChange
        },
        viewTopic(e) {
            this.topic = e
            this.topicList = true
            this.cateList = false
        },

        // 주제 정렬
        backList() {
            this.cate = false
        },
        gameCate(e) {
            this.topic = e
        },
        backCate() {
            this.cateList = true
            this.topicList = false
        },

        // 프로필
        viewProfile() {
            this.proGame = false
            this.profile = true
        },
        backGame() {
            this.profile = false
            this.cateList = true
        }
        
    },
    components: {
        conHeader,
        conList,
        conLevel,
        conCateHeader,
        conCateList,
        conProGame,
        conProfile,
    },
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
}

#content {
    border-radius: 10px;
    padding: 50px;
    margin-top: 1px;
    width: 90%;
    background-color: rgb(255, 255, 255);
    min-height: 720px;
}
</style>