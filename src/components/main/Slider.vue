<template>
    <div class="slider-component-container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner img-thumbnail">
                <div class="carousel-item active">
                    <a :href="sliders[sliderIndex].url">
                        <img :src="sliders[sliderIndex].imageUrl" class="slider-component-image" />
                    </a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev" @click="clickLeft">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next" v-on:click="clickRight">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div class="carousel-indicators">
                <div class="slider-component-flex-radio-wrapper">
                    <input type="radio" @click="goToIndex(0)" v-bind:checked="sliderIndex === 0" />
                    <input type="radio" @click="goToIndex(1)" :checked="compareIndex(1)" />
                    <input type="radio" @click="goToIndex(2)" :checked="sliderIndex === 2" />
                    <input type="radio" @click="goToIndex(3)" :checked="sliderIndex === 3" />
                    <input type="radio" @click="goToIndex(4)" :checked="sliderIndex === 4" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        sliders: {
            type: Array,
        }
    },
    data() {
        return {
            sliderIndex: 0
        }
    },
    methods: {
        clickLeft() {
            if (this.sliderIndex > 0) {
                this.sliderIndex--
            }
            else if (this.sliderIndex === 0) {
                this.sliderIndex = 4
            }
        },
        clickRight() {
            if (this.sliderIndex < 4) {
                this.sliderIndex++
            }
            else if (this.sliderIndex === 4) {
                this.sliderIndex = 0
            }
        },
        goToIndex(index) {
            this.sliderIndex = index
        },
        compareIndex(index) {
            return this.sliderIndex === index
        },
    },
    // 컴포넌트가 마운트될 때 실행
    mounted() {
        // 함수를 작성하게 된다면 실행되지 않음
        setInterval(() => {
            this.sliderIndex++
            if (this.sliderIndex > 4) {
                this.sliderIndex = 0
            }
        }, 3000);
    }
}
</script>

<style>
.slider-component-container {
    width: 100%;
    background-color: black;
}

.slider-component-image {
    width: 100%;
    height: 600px;
}

.slider-component-flex-radio-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
</style>