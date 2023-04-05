<template>
    <div>
        <canvas ref="canvas"></canvas>
        <button v-if="!isStarted" @click="startGame">게임 시작</button>
        <button v-if="isGameOver" @click="restartGame">다시하기</button>
        <h3>{{ this.typed }}</h3>
    </div>
</template>

<script>
import { toHandlers } from 'vue';

export default {
    data() {
        return {
            targets: ['みかん', 'スイカ', 'イチゴ', 'ブドウ', 'メロン'],
            typed: '',
            score: 0,
            speed: 0.2,
            targetsPerSecond: 1,
            width: 0,
            height: 0,
            targetsX: [],
            targetsY: 0,
            targetsWidth: 50,
            targetsHeight: 50,
            font: '24px sans-serif',
            isGameOver: false,
            isStarted: false,
            recognition: null,
            recognitionSupported: false,
            targetsPerSecond: 0.3, // 1초에 targets가 떨어지는 개수
            targetsInterval: null,
        };
    },
    mounted() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');

        this.width = canvas.width = 800;
        this.height = canvas.height = 600;

        this.recognitionSupported = 'webkitSpeechRecognition' in window;

        // targetsX 배열을 초기화합니다.
        this.targetsX = Array.from({ length: this.targets.length }, () => Math.random() * (this.width - this.targetsWidth));

        this.targetsInterval = setInterval(() => {
            this.targetsX = Array.from({ length: this.targets.length }, () => Math.random() * (this.width - this.targetsWidth));
            this.targetsY = -100;
        }, 10000 / this.targetsPerSecond);


        setInterval(() => {
            this.moveTargets();
        }, 1000000 / this.targetsPerSecond);

        if (this.recognitionSupported) {
            console.log('음성인식');
            this.recognition = new webkitSpeechRecognition();
            this.recognition.lang = 'ja-JP';
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.onresult = null;

            this.recognition.onresult = event => {
                const result = event.results[event.results.length - 1];
                const word = result[0].transcript.trim();

                if (result.isFinal) {
                    this.typed = word;
                } else {
                    // show interim results
                    this.typed = this.typed.replace(/(\s+\S+)?$/, ` ${word}`);
                    return; // 이 부분을 추가하여 더 이상 함수를 진행하지 않도록 합니다.
                }
            };

            this.recognition.onerror = error => {
                console.error(error);
            };
        } else {
            console.warn('Speech recognition is not supported in this browser.');
        }

        const loop = () => {
            ctx.clearRect(0, 0, this.width, this.height);

            if (!this.isGameOver && this.isStarted) {
                this.moveTargets();
                this.drawTargets(ctx);
                this.checkCollisions();
                this.drawScore(ctx);
            } else {
                if (this.isGameOver) {
                    this.drawGameOver(ctx);
                }
            }

            requestAnimationFrame(loop);
        };

        loop();

    },
    methods: {
        startGame() {
            this.isStarted = true;
            this.targetsY = -100;
            this.isGameOver = false;
            this.score = 0;
            this.typed = '';
            if (this.recognitionSupported) {
                this.recognition.start();
            }
            // targetsX 배열을 초기화합니다.
            this.targetsX = Array.from({ length: this.targets.length }, () => Math.random() * (this.width - this.targetsWidth));
        },
        restartGame() {
            location.href = "/rainscore"
        },
        getRandomTarget() {
            return this.targets[Math.floor(Math.random() * this.targets.length)];
        },
        moveTargets() {
            this.targetsY += this.speed / this.targetsPerSecond;
            for (let i = 0; i < this.targets.length; i++) {
                let y = this.targetsY + i * (this.targetsHeight + 10);
                const x = this.targetsX[i] + this.targetsWidth / 2;
                if (y >= this.height) {
                    this.isGameOver = true;
                    this.postGameOver()
                }
                if (this.typed === this.targets[i]) {
                    this.typed = '';
                    this.score++;
                    this.targets.splice(i, 1);
                    this.targetsX.splice(i, 1);
                    i--;
                    // this.targets.splice(i + 1, 0, this.getRandomTarget());
                    // this.targetsX.splice(i + 1, 0, Math.random() * (this.width - this.targetsWidth));
                }
            }
        },
        drawTargets(ctx) {
            ctx.font = this.font;
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            for (let i = 0; i < this.targets.length; i++) {
                const x = this.targetsX[i] + this.targetsWidth / 2;
                const y = this.targetsY + i * (this.targetsHeight + 10); // 수정
                ctx.fillText(this.targets[i], x, y);
            }
        },
        checkCollisions() {
            const lastTargetIndex = Math.floor((this.typed.length - 1) / 5);
            const targetIndex = lastTargetIndex + 1;
            const target = this.targets[targetIndex];
            if (target && this.typed === target) {
                this.typed = this.typed.slice(0, target.length);
                this.score++;
                this.targetsPerSecond += 0.1;
                this.speed += 0.1;
                this.targetsY = -100;

                // 해당 원소를 배열에서 제거하고
                const targetIndex = this.targets.indexOf(target);
                this.targets.splice(targetIndex, 1);

                // 그 자리를 비워둡니다.
                this.targets.splice(targetIndex, 0, '');
                this.targetsX.splice(targetIndex, 0, 0);

                // 나머지 원소를 한 칸씩 위로 이동시킵니다.
                // for (let i = targetIndex; i < this.targets.length; i++) {
                //     this.targets[i - 1] = this.targets[i];
                //     this.targetsX[i - 1] = this.targetsX[i];
                // }

                // // 맨 마지막 원소는 랜덤한 새로운 값으로 채워줍니다.
                // const lastIndex = this.targets.length - 1;
                // this.targets[lastIndex] = this.getRandomTarget();
                // this.targetsX[lastIndex] = Math.random() * (this.width - this.targetsWidth);

                return; // 이 부분을 추가하여 더 이상 함수를 진행하지 않도록 합니다.
            }
        },


        drawScore(ctx) {
            ctx.font = this.font;
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.fillText(`Score: ${this.score}`, 10, 50);
        },
        drawGameOver(ctx) {
            ctx.font = "60px sans-serif";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", this.width / 2, this.height / 2);
            ctx.font = "36px sans-serif";
            ctx.fillStyle = "black";
            ctx.fillText(`Final Score: ${this.score}`, this.width / 2, this.height / 2 + 50);
        },
        async postGameOver() {
            try {
                await this.$store.dispatch("game/storeScore", {
                    game_id: 1,
                    score: this.score
                });
            } catch (err) {
                console.error(err);
            }
        },
    }
}
</script>

<style>
canvas {
    border: 2px solid black;
    display: block;
    margin: 0 auto;
}
</style>