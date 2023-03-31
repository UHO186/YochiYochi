<template>
    <div class="main-component-flex-wrapper">
        <Slider :sliders="[{ imageUrl: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg', url: 'https://www.npmjs.com/package/@tensorflow/tfjs-backend-webgpu' },
        { imageUrl: 'https://cdn.pixabay.com/photo/2023/03/08/10/11/crocuses-7837426_1280.jpg', url: 'b' },
        { imageUrl: 'https://starwalk.space/gallery/images/astrophotography/1920x1080.jpg', url: 'c' },
        { imageUrl: 'https://t1.daumcdn.net/cfile/tistory/240814485574155029', url: 'd' },
        { imageUrl: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20200811164909177_ttiel', url: 'e' }]" />
        <Banner image-url='https://cdn.travie.com/news/photo/first/201708/img_19919_1.jpg' url='a' />
        <div class="flex-container">
            <div class="flex-left-container">
                <Subbanner imageUrl='https://img.etnews.com/news/article/2021/07/23/cms_temp_article_23153814137700.jpg'
                    url='a' text='hello' />
            </div>
            <div class="flex-right-container">
                <div class="banner-container">
                    <Subbanner imageUrl='https://img.etnews.com/news/article/2021/07/23/cms_temp_article_23153814137700.jpg'
                        url='a' text='myname' />
                    <Subbanner imageUrl='https://img.etnews.com/news/article/2021/07/23/cms_temp_article_23153814137700.jpg'
                        url='a' text='uho' />
                </div>
                <div class="banner-container">
                    <Subbanner imageUrl='https://img.etnews.com/news/article/2021/07/23/cms_temp_article_23153814137700.jpg'
                        url='a' text='nice' />
                    <Subbanner imageUrl='https://img.etnews.com/news/article/2021/07/23/cms_temp_article_23153814137700.jpg'
                        url='a' text='meet you' />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from './Slider.vue';
import Banner from './Banner.vue';
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
        Slider,
        Banner,
        Subbanner
    }
}
</script>

<style>
.main-component-flex-wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
}

/* 전체를 차지하게 만듬 */
.flex-container {
    display: flex;
    /* width: 83vw; */
    flex-direction: row;
}

/* 왼쪽 반쪽 */
.flex-left-container {
    display: flex;
    min-width: 40%;
}

/* 오른쪽 반쪽 */
.flex-right-container {
    display: flex;
    min-width: 40%;
    flex-direction: column;
}

/* 서브배너 컴포넌트를 정렬해 줌 */
.banner-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}
</style>
