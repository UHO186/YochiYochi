<template>
    <div>
        <div class="font-bold text-[60px]">레벨테스트를 할까요?</div>
        <div class="flex justify-between font-bold text-2xl mt-24">
            <p class="p-12 w-[35%] rounded-full bg-red-200 hover:border-black border-2 cursor-pointer" @click="levelTest">네</p>
            <p class="p-12 w-[35%] rounded-full bg-red-200 hover:border-black border-2 cursor-pointer" @click="levelTest">아니요</p>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            levelTest(e) {
                this.$emit('levelTest', e.target.textContent);
            }
        }
    }
</script>