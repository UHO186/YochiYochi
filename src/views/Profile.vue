<template>
    <div id="wrap">
        <div id="content">
            <div class="mx-36">
                <div id="inf">
                    <p class="text-xl font-extrabold pl-3">회원 정보</p>
                    <ProfileLIstItem></ProfileLIstItem>
                </div>
                <div id="stat">
                    <p class="text-xl font-extrabold pl-3">유아 학습 통계</p>
                    <StatListItem></StatListItem>
                </div>
                <div id="pur-his">
                    <p class="text-xl font-extrabold pl-3">구매 내역</p>
                    <PurhisListItem></PurhisListItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileLIstItem from '../components/profile/profile-list-item.vue';
import StatListItem from '../components/profile/stat-list-item.vue';
import PurhisListItem from '../components/profile/purhis-list-item.vue';

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
    components: {
        ProfileLIstItem,
        StatListItem,
        PurhisListItem,
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
    margin-top: 50px;
    width: 85%;
    background-color: rgb(255, 255, 255);
    min-height: 720px;
}
</style>