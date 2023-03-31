<template>
    <div>
        <div id="project" class="aboutus-wrapper img-thumbnail">
            <Banner
                image-url="https://mblogthumb-phinf.pstatic.net/MjAxNzEyMjZfMjIx/MDAxNTE0MjU2NDUxOTMw.ImgF9jtMTl9FCT5CnlfBh7GAAUJS-TFRi8pnTq5MTScg.Ht5wFhUVufVdtxilpnjDI0xd_3WmNcbQNnh_IYI3jnIg.JPEG.soon7268/IMG_9259.jpg?type=w800"
                url="a" />
        </div>
        <div class="aboutus-container img-thumbnail" id="team">
            <div class="aboutus-btn-container">
                <Button members="박소윤" url="a" /><br>
                <Button members="윤영운" url="b" /><br>
                <Button members="김우현" url="c" /><br>
                <Button members="엄주호" url="d" />
            </div>
            <Teamintroduce
                image-url="https://img.freepik.com/free-vector/team-of-business-people-putting-hands-up-together_74855-19906.jpg"
                url="a" text="조원소개" />
        </div>
        <div class="aboutus-sub-container" id="news">
            <Subbanner
                image-url="https://www.adobe.com/kr/creativecloud/photography/hub/guides/media_1849da4090361ace99fe89ca1763457328d768f0f.jpeg?width=750&format=jpeg&optimize=medium"
                url="a" text="뉴스1" />
            <Subbanner
                image-url="https://www.adobe.com/kr/creativecloud/photography/hub/guides/media_1849da4090361ace99fe89ca1763457328d768f0f.jpeg?width=750&format=jpeg&optimize=medium"
                url="b" text="뉴스2" />
            <Subbanner
                image-url="https://www.adobe.com/kr/creativecloud/photography/hub/guides/media_1849da4090361ace99fe89ca1763457328d768f0f.jpeg?width=750&format=jpeg&optimize=medium"
                url="c" text="뉴스3" />
        </div>
    </div>
</template>

<script>
import Banner from './Banner.vue';
import Teamintroduce from './Teamintroduce.vue';
import Button from './Button.vue';
import Subbanner from './Subbanner.vue';

export default {
    data() {
        return {
            exmaple: {
                imageUrl: 'https://google.com/~',
                url: "https://something/"
            }
        }
    },
    components: {
        Banner,
        Teamintroduce,
        Button,
        Subbanner
    }
}
</script>

<style>
.aboutus-wrapper {
    display: flex;
    justify-content: center;
}

.aboutus-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.aboutus-sub-container {
    display: flex;
    justify-content: center;
}
</style>