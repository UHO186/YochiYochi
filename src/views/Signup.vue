<template>
    <div>
        <div class="d-flex flex-column align-items-center">
            <Input class="w-25 " names="이름" placeholders="ex) 홍길동" v-model="value.name" :valids="valid.nameHasError"
                :passwords="false" />
        </div>
        <div class="d-flex flex-column align-items-center">
            <Input class="w-50" names="E-mail" placeholders="ex) kream@kream.co.kr" v-model="value.email"
                :valids="valid.emailHasError" :passwords="false" />
            <!-- <Input names="E-mail" placeholders="ex) kream@kream.co.kr" v-model="value.email" :valids="true" /> -->
        </div>
        <div class="d-flex flex-column align-items-center">
            <!-- Boolean 값만 넣어주고 싶다면 true, false로만 -->
            <Input class="w-50" names="비밀번호" placeholders="영문, 숫자, 특수문자 조합 8-16자" v-model="value.password" :passwords="true"
                :valids="valid.passwordHasError" />
        </div>
        <div class="d-flex flex-column align-items-center">
            <Input class="w-50" names="비밀번호 확인" v-model="value.password_confirmation" :passwords="true"
                :valids="valid.passworConfirmdHasError" />
        </div>
        <div class="d-flex flex-column align-items-center">
            <Input class="w-50" names="전화번호" placeholders="ex) 010-0000-1111" v-model="value.tel" :passwords="false"
                :valids="valid.telHasError" />
        </div>
        <div>
            <button class="btn btn-outline-primary" type="button" @click="signup()">작성</button>
        </div>
    </div>
</template>

<script>
import Input from "../components/signup/Input.vue";
import { useStore } from "vuex";

export default {
    data() {
        return {
            value: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                tel: "",
            },
            valid: {
                nameHasError: false,
                emailHasError: false,
                passwordHasError: false,
                passworConfirmdHasError: false,
                telHasError: false,
            },
        };
    },
    components: {
        Input,
    },
    methods: {
        checkName() {
            const validateName = /^[가-힣]{2,6}$/;
            if (validateName.test(this.value.name)) {
                this.valid.nameHasError = true;
                return;
            }
            this.valid.nameHasError = false;
        },
        checkEmail() {
            const validateEmail =
                /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;

            if (validateEmail.test(this.value.email)) {
                this.valid.emailHasError = true;
                return;
            }
            this.valid.emailHasError = false;
        },
        checkPassword() {
            const validatePassword =
                /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
            if (validatePassword.test(this.value.password)) {
                this.valid.passwordHasError = true;
                return;
            }
            this.valid.passwordHasError = false;
        },
        checkPasswordConfirm() {
            if (this.value.password === this.value.password_confirmation) {
                this.valid.passworConfirmdHasError = true;
                return;
            }
            this.valid.passworConfirmdHasError = false;
        },
        checkTel() {
            const validateTel = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

            if (validateTel.test(this.value.tel)) {
                this.valid.telHasError = true;
                return;
            }
            this.valid.telHasError = false;
        },
        async signup() {
            const store = useStore();
            if (
                this.valid.nameHasError ||
                this.valid.emailHasError ||
                this.valid.passwordHasError ||
                this.valid.passworConfirmdHasError ||
                this.valid.telHasError
            ) {
                try {
                    await this.$store.dispatch("auth/signup", this.value);
                    this.$router.push({ name: "login" });
                } catch (err) {
                    console.log(err);
                }
            } else {
                return;
            }
        },
    },
    watch: {
        "value.name": function () {
            this.checkName();
        },
        "value.email": function () {
            this.checkEmail();
        },
        "value.password": function () {
            this.checkPassword();
        },
        "value.password_confirmation": function () {
            this.checkPasswordConfirm();
        },
        "value.tel": function () {
            this.value.tel = this.value.tel
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                .replace(/(\-{1,2})$/g, "");
            this.checkTel();
        },
    },
};
</script>
