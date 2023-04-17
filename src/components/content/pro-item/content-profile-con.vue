<template>
    <div v-show="proCa == `t1`">
        <memInf @backGame="backGame"></memInf>
    </div>
    <div v-show="proCa == `t2`">
        <div v-if="!det">
            <stat @detail="detail" @backGame="backGame"></stat>
        </div>
        <div v-else>
            <statDetail @detail="detail"></statDetail>
        </div>
    </div>
    <div v-show="proCa == `t3`">
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
        }
    },
    mounted() {
        
    }
}
</script>

<style>

</style>