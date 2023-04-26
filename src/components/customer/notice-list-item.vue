<template>
    <a :href="'/customer/noticeDetail?index='.concat(this.in)">
        <li class="flex mt-2 bg-white border-b">
            <p class="basis-1/6">{{ notice_index }}</p>
            <p class="flex-1 pl-5 text-ellipsis overflow-hidden">{{ title }}</p>
            <p class="basis-1/6 text-center">{{ created_at }}</p>
            <p class="basis-1/12 text-center font-bold">></p>
        </li>
    </a>
</template>

<script>
export default {
    props: ['title', 'created_at', 'notice_index', 'notice_content', 'category', 'writer', 'read_to'],
    data() {
        return {
            in: this.notice_index
        }
    },
    methods: {

    },

}
</script>