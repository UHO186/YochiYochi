<template>
    <div>
        <h1>카드 기억 게임</h1>
        <div v-if="!gameStarted">
            <button @click="startGame">게임 시작</button>
        </div>
        <div v-else>
            <div>
                <p>총 점수: {{ totalScore }}</p>
                <p>남은 시간: {{ timeRemaining }}초</p>
            </div>
            <div class="card-grid" v-if="gameStarted">
                <div v-for="(card, index) in cards" :key="index">
                    <div class="card memory-card" :class="{ flipped: card.visible }" @click="handleCardClick(index)"
                        :style="{ pointerEvents: clickable ? 'auto' : 'none' }">
                        <div class="card-face card-front" :style="{ visibility: card.visible ? 'visible' : 'hidden' }">
                            <img :src="card.value" alt="카드 앞면" width="80" height="120">
                        </div>
                        <div class="card-face card-back" :data-number="card.value"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            gameStarted: false,
            timeRemaining: 60,
            totalScore: 0,
            overGame: false,
            cards: [],
            flippedCards: [],
            cardValues: [
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/955571110/B.jpg?675000000",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/955571110/B.jpg?675000000",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2791097605/B.jpg?44000000",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2791097605/B.jpg?44000000",
                "https://item-shopping.c.yimg.jp/i/z/card-museum_rira-jp012-r",
                "https://item-shopping.c.yimg.jp/i/z/card-museum_rira-jp012-r",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiDbwPqERDQncC9XS_uudpyp42h17PnqBwg1rE40-eME-Uhw5CFYH7GtCSJp4hBtTMBI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiDbwPqERDQncC9XS_uudpyp42h17PnqBwg1rE40-eME-Uhw5CFYH7GtCSJp4hBtTMBI&usqp=CAU",
                "http://image.auction.co.kr/itemimage/17/56/ed/1756edf101.jpg",
                "http://image.auction.co.kr/itemimage/17/56/ed/1756edf101.jpg",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/998832134/B.jpg?393000000",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/998832134/B.jpg?393000000",
                "http://image.auction.co.kr/itemimage/96/06/e9/9606e9bb1.jpg",
                "http://image.auction.co.kr/itemimage/96/06/e9/9606e9bb1.jpg",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2587357186/A2.jpg?52000000",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2587357186/A2.jpg?52000000",
                "http://image.auction.co.kr/itemimage/72/1a/87/721a87ea6.jpg",
                "http://image.auction.co.kr/itemimage/72/1a/87/721a87ea6.jpg",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2728786963/A2.jpg?70000000",
                "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2728786963/A2.jpg?70000000",
                "http://image.auction.co.kr/itemimage/a7/4d/65/a74d65841.jpg",
                "http://image.auction.co.kr/itemimage/a7/4d/65/a74d65841.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51XeqfP-1hL.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51XeqfP-1hL.jpg",
            ],
            clickable: true
        };
    },
    computed: {
        shuffledCardValues() {
            return this.shuffleArray(this.cardValues.slice());
        }
    },
    created() {
        this.startTimer();
    },
    methods: {
        startGame() {
            this.gameStarted = true;
            this.timeRemaining = 60;
            this.totalScore = 0;
            this.cards = this.shuffledCardValues.map(value => ({
                value,
                visible: true
            }));
            setTimeout(() => {
                this.cards.forEach(card => {
                    card.visible = false;
                });
                this.clickable = true; // 카드가 뒤집어진 후 클릭 활성화
            }, 5000);
            this.startTimer();
            this.clickable = false; // 게임이 시작될 때 클릭 비활성화
        },
        startTimer() {
            let startTime = Date.now();

            setTimeout(() => {
                this.postGameOver();
            }, 60000);

            this.timer = setInterval(() => {
                const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                this.timeRemaining = Math.max(0, 60 - elapsedTime); // 게임 시간 설정
                if (this.timeRemaining === 0) {
                    clearInterval(this.timer);
                    this.gameOver();
                }
            }, 100);
        },
        shuffleArray(array) {
            let currentIndex = array.length;
            let temporaryValue, randomIndex;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        },
        handleCardClick(index) {
            if (!this.gameStarted || !this.clickable) {
                return;
            }

            const card = this.cards[index];

            // 이미 뒤집힌 카드인 경우 또는 이미 두 개의 카드가 뒤집혀 있는 경우
            if (card.visible || this.flippedCards.length === 2) {
                return;
            }

            card.visible = true;

            this.flippedCards.push(card);

            if (this.flippedCards.length === 2) {
                this.checkForMatch();
            }
        },
        checkForMatch() {
            const card1 = this.flippedCards[0];
            const card2 = this.flippedCards[1];

            if (card1.value === card2.value) {
                this.totalScore += 10;

                // 맞춘 카드 쌍의 수를 추적
                const numMatches = this.cards.filter(card => card.visible).length / 2;

                // 전체 카드 쌍의 수와 같아지면 게임 종료
                if (numMatches === this.cardValues.length / 2) {
                    this.gameOver();
                }

                this.clickable = false;
                setTimeout(() => {
                    this.flippedCards = [];
                    this.clickable = true;
                }, 1000);
            } else {
                setTimeout(() => {
                    card1.visible = false;
                    card2.visible = false;
                    this.flippedCards = [];
                }, 1000);
            }
        },
        gameOver() {
            // alert(`게임 종료! 총 점수: ${this.totalScore}`);
            this.gameStarted = false;
        },
        async postGameOver() {
            try {
                await this.$store.dispatch("game/storeScore", {
                    game_id: 1,
                    score: this.totalScore
                });
            } catch (err) {
                console.error(err);
            }
        }
    }
}
</script>

<style>
.card-front {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 10px;
    transform-style: preserve-3d;
    perspective: 1000px;
}

.card-container {
    perspective: 1000px;
}

.memory-card {
    position: relative;
    width: 80px;
    height: 120px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.card.back {
    transform: rotateY(180deg);
    background-color: #e8e8e8;
    color: #444;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.card.flipped {
    transform: rotateY(180deg);
}
</style>
