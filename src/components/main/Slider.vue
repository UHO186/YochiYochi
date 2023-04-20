<template>
    <div class="slider-component-container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner img-thumbnail">
                <div class="carousel-item" v-for="(slider, index) in sliders"
                    :class="{ active: sliderIndex === index, prev: sliderIndex === index - 1, next: sliderIndex === index + 1 }"
                    :key="slider.imageUrl">
                    <a :href="slider.url">
                        <img :src="slider.imageUrl" class="slider-component-image" />
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
        },
    },
    data() {
        return {
            sliderIndex: 0,
        };
    },
    methods: {
        clickLeft() {
            if (this.sliderIndex > 0) {
                this.sliderIndex--;
            } else if (this.sliderIndex === 0) {
                this.sliderIndex = this.sliders.length - 1;
            }
        },
        clickRight() {
            if (this.sliderIndex < this.sliders.length - 1) {
                this.sliderIndex++;
            } else if (this.sliderIndex === this.sliders.length - 1) {
                this.sliderIndex = 0;
            }
        },
        goToIndex(index) {
            const diff = Math.abs(index - this.sliderIndex);
            this.sliderIndex = index;
            if (diff > 1) {
                this.$nextTick(() => {
                    this.$el.querySelector('.carousel-item.active').classList.add('no-transition');
                    setTimeout(() => {
                        this.$el.querySelector('.carousel-item.active').classList.remove('no-transition');
                        void this.$el.querySelector('.carousel-item.active').offsetWidth;
                    }, 1000);
                });
            }
        },
        compareIndex(index) {
            return this.sliderIndex === index;
        },
    },
    // 컴포넌트가 마운트될 때 실행
    mounted() {
        // 함수를 작성하게 된다면 실행되지 않음
        setInterval(() => {
            if (this.sliderIndex < this.sliders.length - 1) {
                this.sliderIndex++;
            } else {
                this.sliderIndex = 0;
            }
        }, 5000);
    }
}
</script>

<style>
.carousel-item {
    transition: transform 0.5s ease;
}

.carousel-item.prev {
    transform: translateX(-100%);
}

.carousel-item.next {
    transform: translateX(100%);
}

.slider-component-container {
    width: 100%;
    background-color: black;
}

.slider-component-image {
    width: 100%;
    height: 600px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    width: 2rem;
    height: 2rem;
}

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath fill='white' d='M20.71 11.29l-9-9a1 1 0 0 0-1.42 1.42L17.59 11H4a1 1 0 1 0 0 2h13.59l-7.3 7.29a1 1 0 1 0 1.42 1.42l9-9a1 1 0 0 0 0-1.42z'/%3e%3c/svg%3e");
    transform: scaleX(-1);
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath fill='white' d='M20.71 11.29l-9-9a1 1 0 0 0-1.42 1.42L17.59 11H4a1 1 0 1 0 0 2h13.59l-7.3 7.29a1 1 0 1 0 1.42 1.42l9-9a1 1 0 0 0 0-1.42z'/%3e%3c/svg%3e");
}

.carousel-indicators {
    position: absolute;
    bottom: 40px;
    /* 예시로 60px로 지정 */
    left: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider-component-flex-radio-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider-component-flex-radio-wrapper input[type="radio"] {
    margin: 0 10px;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid white;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.3s ease;
}

.slider-component-flex-radio-wrapper input[type="radio"]:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.slider-component-flex-radio-wrapper input[type="radio"]:checked {
    background-color: white;
}
</style>