<template>
	<div class="border-2 rounded-lg py-2 my-2">
		<RadarChart :radarData="radarData"></RadarChart>
	</div>
</template>

<script>
import RadarChart from "../charts/RadarChart.vue"

export default {
	components: {
        RadarChart,
    },
	data() {
		return {
			radarData: [10, 20, 30,40,50]
		}
	}
};
</script>