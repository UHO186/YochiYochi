<template>
    <div class="container">
        <h1>그림 분류 게임</h1>
        <div v-if="!answer && current === 0" class="category">
            <h2>동물 카테고리</h2>
            <div class="pictures">
                <div v-for="(picture, index) in animalPictures" :key="index" class="picture">
                    <img :src="picture.url" @click="checkAnswer(picture, '동물')" />
                </div>
            </div>
        </div>
        <div v-else-if="answer === '정답'" class="answer">
            <h2>정답입니다!</h2>
            <button @click="nextCategory">다음 카테고리</button>
        </div>
        <div v-else v-if="current === 1" class="category">
            <h2>식물 카테고리</h2>
            <div class="pictures">
                <div v-for="(picture, index) in plantPictures" :key="index" class="picture">
                    <img :src="picture.url" @click="checkAnswer(picture, '식물')" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    name: "PictureClassifier",
    setup() {
        const animalPictures = [
            {
                url: "https://placeimg.com/640/480/animals",
                category: "동물",
            },
            {
                url: "https://placeimg.com/640/480/animals",
                category: "동물",
            },
            {
                url: "https://placeimg.com/640/480/animals",
                category: "동물",
            },
        ];

        const plantPictures = [
            {
                url: "https://placeimg.com/640/480/nature",
                category: "식물",
            },
            {
                url: "https://placeimg.com/640/480/nature",
                category: "식물",
            },
            {
                url: "https://placeimg.com/640/480/nature",
                category: "식물",
            },
        ];

        const answer = ref(null);
        const current = ref(0);

        const checkAnswer = (picture, category) => {
            if (picture.category === category) {
                answer.value = "정답";
            } else {
                answer.value = "오답";
            }
        };

        const nextCategory = () => {
            answer.value = null;
            ++current.value;
        };

        return {
            animalPictures,
            plantPictures,
            answer,
            current,
            checkAnswer,
            nextCategory,
        };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.category {
    margin-bottom: 2rem;
}

.picture-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.picture {
    margin: 1rem;
}

img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
}

.answer {
    margin-top: 2rem;
    text-align: center;
}

button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #3e8e41;
}
</style> 