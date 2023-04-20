<template>
    <canvas id="RadarChart" width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
import { h } from 'vue'

export default {
    name: "RadarChart",
    data() {
        return {
            chart: Chart,
        }
    },
    props: ["radarData"],
    async mounted() {
        const ctx = document.getElementById('RadarChart').getContext('2d');
        console.log(this.radarData);
        this.chart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["건강", "인간관계", "환경", "언어", "표현"],
                datasets: [{
                    label: "윤영운",
                    data: [this.radarData[0], this.radarData[1], this.radarData[2], this.radarData[3], this.radarData[4]],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            },
        })
        this.chart;
    }
}

</script>

<style>
canvas {
    border-color: white;
}
</style>