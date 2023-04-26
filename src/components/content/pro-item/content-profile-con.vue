<template>
    <div v-if="proCa == `t1`">
        <memInf @backGame="backGame" :loginUser="loginUser" :key="loginUser"></memInf>
    </div>
    <div v-if="proCa == `t2`">
        <div v-if="!det">
            <stat @detail="detail" @backGame="backGame"></stat>
        </div>
        <div v-else>
            <statDetail @detail="detail"></statDetail>
        </div>
    </div>
    <div v-if="proCa == `t3`">
        <purchase @backGame="backGame"></purchase>
    </div>
</template>

<script>
import memInf from "./profile-inf-item.vue"
import stat from "./profile-stat-item.vue"
import statDetail from "./profile-statDetail-item.vue"
import purchase from "./profile-purch-item.vue"

export default {
    props: ['proCa'],
    data() {
        return {
            det: false,
            loginUser: [],
        }
    },
    components: {
        memInf,
        stat,
        statDetail,
        purchase,
    },
    methods: {
        detail() {
            if(this.det == false) {
                this.det = true
            } else {this.det = false}
        },
        backGame() {
            this.$emit("backGame")
        },
    },
    async mounted() {
        this.loginUser = await this.$store.dispatch("auth/user")
    }
}
</script>