<template>
    <li class="flex mt-2 bg-white border-b cursor-pointer">
        <p class="flex-1 pl-5">{{ title }}</p>
        <p class="basis-1/6 text-center">{{ created_at }}</p>
        <p class="basis-1/12 text-center font-bold">>{{ in }}</p>
    </li>
</template>

<script>
export default {
    props: ['title', 'created_at'],
    data() {
        return {

        }
    },
    components: {

    }
};
</script>