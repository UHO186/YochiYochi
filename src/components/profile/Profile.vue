<template>
    <div>
        <div>
            <Profileinput names="이름" :placeholders="value.name" v-model="value.name" :valids="valid.nameHasError"
                :touchDisble="touchDisble" />
            <Profileinput names="전화번호" :placeholders="value.tel" v-model="value.tel" :valids="valid.telHasError"
                :touchDisble="touchDisble" />
            <Profileinput names="이메일" :placeholders="value.email" v-model="value.email" :valids="valid.emailHasError"
                :touchDisble="touchDisble" />
            <Profileinput names="주소" :placeholders="value.address" v-model="value.address" :valids="valid.addressHasError"
                :touchDisble="touchDisble" />
            <button v-if="touchDisble == true" @click="goEditor()">수정</button>
            <button v-if="touchDisble == false" @click="goComplete()">완료</button>
            <button v-if="touchDisble == false" @click="goCancle()">취소</button>
        </div>
        <div>
            <Babystatus />
        </div>
        <div>
            <Buyhistory />
        </div>
    </div>
</template>

<script>
import Profileinput from './Profileinput.vue';
import Babystatus from './Babystatus.vue';
import Buyhistory from './Buyhistory.vue';

export default {
    data() {
        return {
            value: {
                name: '',
                tel: '',
                email: '',
                address: ''
            },
            valid: {
                nameHasError: false,
                telHasError: false,
                emailHasError: false,
                addressHasError: false,
            },
            touchDisble: true
        }
    },
    components: {
        Profileinput,
        Babystatus,
        Buyhistory
    },
    methods: {
        goEditor() {
            this.touchDisble = false
        },
        goCancle() {
            location.href = "/profile"
        },
        async goComplete() {
            const ch = confirm('정말 수정하시겠습니까?')
            if (ch) {
                await this.axios
                    .post()
                    .then((res) => {
                        this.touchDisble = true
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                    .finally(() => {
                        // location.href = "/signup"
                        console.log()
                    })
            }

        },
        checkName() {
            const validateName = /^[가-힣]{2,6}$/

            if (validateName.test(this.value.name)) {
                this.valid.nameHasError = true
                return
            }
            this.valid.nameHasError = false
        },
        checkTel() {
            const validateTel = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/

            if (validateTel.test(this.value.tel)) {
                this.valid.telHasError = true
                return
            }

            this.valid.telHasError = false
        },
        checkEmail() {
            const validateEmail = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
            // const validateEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

            if (validateEmail.test(this.value.email)) {
                this.valid.emailHasError = true
                return
            }
            this.valid.emailHasError = false
        },
    },
    watch: {
        'value.name': function () {
            this.checkName()
        },
        'value.tel': function () {
            this.value.tel = this.value.tel.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "")
            this.checkTel()
        },
        'value.email': function () {
            this.checkEmail()
        },
        'value.address': function () {
            this.checkPassword()
        },
    }
}
</script>