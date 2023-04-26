<template>
    <div class="grid grid-flow-row-dense grid-cols-3 text-3xl font-semibold mt-10 h-96 user-select-none">
        <div class="border-r-4 grid content-around">
            <p>유아 이름</p>
            <p>생년월일</p>
            <p>전화번호</p>
        </div>
        <div class="col-span-2">
            <div class="grid content-around h-full">
                <div v-if="!proUpdate.name" class="grid content-around justify-items-center grid-cols-4 grid-flow-row-dense">
                    <p class="bg-yellow-200 rounded-2xl py-2 col-span-3 w-[90%]">{{ userProfile.name }}</p>
                    <div id="proName1" class="bg-green-300 border-2 border-green-500 rounded-2xl w-[60%] text-2xl flex justify-center items-center cursor-pointer hover:bg-green-400" @click="profileUpdate"><p class="pointer-events-none">수정</p></div>
                </div>
                <div v-if="proUpdate.name" class="grid content-around justify-items-center grid-cols-4 grid-flow-row-dense">
                    <input class="bg-yellow-300 rounded-2xl py-2 col-span-3 w-[90%] text-center cursor-pointer" v-model="loginUser.kidname">
                    <div id="proName2" class="bg-green-300 border-2 border-green-500 rounded-2xl w-[60%] text-2xl flex justify-center items-center cursor-pointer hover:bg-green-400" @click="profileUpdate"><p class="pointer-events-none">입력</p></div>
                </div>
                <div v-if="!proUpdate.age" class="grid content-around justify-items-center grid-cols-4 grid-flow-row-dense">
                    <p class="bg-yellow-200 rounded-2xl py-2 col-span-3 w-[90%]">{{ userProfile.age }}</p>
                    <div id="proAge1" class="bg-green-300 border-2 border-green-500 rounded-2xl w-[60%] text-2xl flex justify-center items-center cursor-pointer hover:bg-green-400" @click="profileUpdate"><p class="pointer-events-none">수정</p></div>
                </div>
                <div v-if="proUpdate.age" class="grid content-around justify-items-center grid-cols-4 grid-flow-row-dense">
                    <input class="bg-yellow-300 rounded-2xl py-2 col-span-3 w-[90%] text-center cursor-pointer" v-model="loginUser.kidBirth" @click="loginUser.kidBirth = ''">
                    <div id="proAge2" class="bg-green-300 border-2 border-green-500 rounded-2xl w-[60%] text-2xl flex justify-center items-center cursor-pointer hover:bg-green-400" @click="profileUpdate"><p class="pointer-events-none">입력</p></div>
                </div>
                <div v-if="!proUpdate.tel" class="grid content-around justify-items-center grid-cols-4 grid-flow-row-dense">
                    <p class="bg-yellow-200 rounded-2xl py-2 col-span-3 w-[90%]">{{ userProfile.tel }}</p>
                    <div id="proTel1" class="bg-green-300 border-2 border-green-500 rounded-2xl w-[60%] text-2xl flex justify-center items-center cursor-pointer hover:bg-green-400" @click="profileUpdate"><p class="pointer-events-none">수정</p></div>
                </div>
                <div v-if="proUpdate.tel" class="grid content-around justify-items-center grid-cols-4 grid-flow-row-dense">
                    <input class="bg-yellow-300 rounded-2xl py-2 col-span-3 w-[90%] text-center cursor-pointer" v-model="loginUser.tel" @click="loginUser.tel = ''">
                    <div id="proTel2" class="bg-green-300 border-2 border-green-500 rounded-2xl w-[60%] text-2xl flex justify-center items-center cursor-pointer hover:bg-green-400" @click="profileUpdate"><p class="pointer-events-none">입력</p></div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-start user-select-none">
        <p class="text-xl cursor-pointer bg-black text-white rounded-lg p-2 mt-3" @click="backGame">돌아가기</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userProfile : {
                name: '',
                age: '',
                tel: '',
            },
            proUpdate: {
                name: false,
                age: false,
                tel: false,
            }
        }
    },
    props: ["loginUser"],
    methods: {
        backGame() {
            this.$emit("backGame")
        },
        async profileUpdate(e) {
            if(e.target.id == "proName1" || e.target.id == "proName2") {
                this.proUpdate.name = !this.proUpdate.name
                if(e.target.id == "proName2" && this.loginUser.kidname != null && this.loginUser.kidname != '') {
                    await this.$store.dispatch("auth/updateUser", {kidname: this.loginUser.kidname})
                    this.userProfile.name = this.loginUser.kidname
                } else {
                    this.userProfile.name = "이름을 입력해주세요"
                }
            }
            if(e.target.id == "proAge1" || e.target.id == "proAge2") {
                this.proUpdate.age = !this.proUpdate.age
                if(e.target.id == "proAge1") { this.loginUser.kidBirth = "Ex) 2000-07-14" }
                if(e.target.id == "proAge2" && this.loginUser.kidBirth != null && this.loginUser.kidBirth != '') {
                    if(this.loginUser.kidBirth.length == 10) {
                        this.userProfile.age = this.loginUser.kidBirth
                        this.loginUser.kidBirth = this.loginUser.kidBirth.split("-").join('')
                        await this.$store.dispatch("auth/updateUser", {kidBirth: this.loginUser.kidBirth})
                    }
                } else {
                    if(this.userProfile.age == null || this.userProfile == "") {
                        this.userProfile.age = "생년월일을 입력해주세요"
                    }
                }
            }
            if(e.target.id == "proTel1" || e.target.id == "proTel2") {
                this.proUpdate.tel = !this.proUpdate.tel
                if(e.target.id == "proTel1") { this.loginUser.tel = "Ex) 010-1234-5678" }
                if(e.target.id == "proTel2" && this.loginUser.tel != null && this.loginUser.tel != '') {
                    if(this.loginUser.tel.length == 13) {
                        this.userProfile.tel = this.loginUser.tel
                        await this.$store.dispatch("auth/updateUser", {tel: this.loginUser.tel})
                    }
                } else {
                    if(this.userProfile.tel == null || this.userProfile.tel == ""){
                        this.userProfile.tel = "연락처를 입력해주세요"
                    }
                }
            }
        }
    },
    mounted() {
        this.userProfile.name = this.loginUser.kidname
        this.userProfile.tel = this.loginUser.tel
        this.userProfile.age = this.loginUser.kidBirth
        
        if(this.userProfile.name == null) {
            this.userProfile.name = "이름을 입력해주세요"
        }
        if(this.userProfile.age == null) {
            this.userProfile.age = "생년월일을 입력해주세요"
        }
    },
}
</script>

<style>
.proBtn {
    --tw-bg-opacity: 1;
    background-color: rgb(74 222 128 / var(--tw-bg-opacity));
    width: 60%;
    border-radius: 1rem/* 16px */;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.proText {
    --tw-bg-opacity: 1;
    background-color: rgb(254 240 138 / var(--tw-bg-opacity));
    border-radius: 1rem/* 16px */;
    padding-top: 0.5rem/* 8px */;
    padding-bottom: 0.5rem/* 8px */;
    width: 90%;
    grid-column: span 3 / span 3;
}
</style>