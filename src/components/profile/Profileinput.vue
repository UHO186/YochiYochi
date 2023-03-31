<template>
    <div class="input-box">
        <h3 class="input-title" :class="valids ? false : 'title-danger'">
            {{ names }}
        </h3>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="input-item"
            :placeholder="placeholders" :class="{ 'input-danger': valids }" :disabled="touchDisble" />
        <p v-show="valids ? false : true" class="input-error">
            {{ names }}을/를 정확히 입력해주세요.
        </p>
    </div>
</template>

<script>
export default {
    props: {
        names: String,
        placeholders: String,
        // v-model을 사용할 때 필요
        modelValue: {
            type: String
        },
        valids: {
            type: Boolean
        },
        tels: Boolean,
        touchDisble: Boolean
    },
    // v-model을 사용할 때 필요
    emits: ['update:modelValue'],
}
</script>