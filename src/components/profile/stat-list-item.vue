<template>
    <div class="">
        <div class="border-2 rounded-lg p-4 font-bold my-2">
            <div id="Nwagon"></div>
        </div>
    </div>
</template>

<!-- <script>
import Nwagon from './Nwagon.js';
import './Nwagon.css';

var options = {
		'legend':{
			names: [
				'Perceivable',
				'Information Loss',
				'Understandable',
				'Enough Time',
				'Epilepsy Prevent',
				'Operable',
				'Navigation',
				'Error Prevent'
			],
			hrefs: [
				'http://nuli.navercorp.com//sharing/a11y#k1',
				'http://nuli.navercorp.com//sharing/a11y#k2',
				'http://nuli.navercorp.com//sharing/a11y#k3',
				'http://nuli.navercorp.com//sharing/a11y#k4',
				'http://nuli.navercorp.com//sharing/a11y#k5',
				'http://nuli.navercorp.com//sharing/a11y#k6',
				'http://nuli.navercorp.com//sharing/a11y#k7',
				'http://nuli.navercorp.com//sharing/a11y#k8'
			]
		},
		'dataset': {
			title: 'Web accessibility status',
			values: [[34,53,67,23,78,45,69,98]],
			bgColor: '#f9f9f9',
			fgColor: '#30a1ce',
		},
		'chartDiv': 'Nwagon',
		'chartType': 'radar',
		'chartSize': { width: 500, height: 300 }
	};
	// Nwagon.chart(options);

</script> -->

<script>
import Nwagon from './Nwagon.js';

export default {
   name: 'App',
   data() {
   return {
         options: {
         'legend':{
            names: ['Perceivable', 'Information', 'Understandable', 'Enough', 'Epilepsy', 'Operable', 'Navigation','Error'],               hrefs: []
         },
         'dataset': {
            title: 'Web accessibility status',
            values: [['n/a',53,67,23,78, 55, 45, 89]], 
            bgColor: '#f9f9f9',
            fgColor: '#cc79a7'
         },
         'chartDiv': 'chart12',
         'chartType': 'radar',
         'chartSize': {width:600, height:300}
      },
      };
  },
  mounted() {
    Nwagon.chart(options);
  },
};
</script>