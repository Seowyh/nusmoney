const urlCat = 'http://localhost:3000/transaction/byCat';
var pieData;
var pie = null;

async function getTranByCat() {
	let val1 = document.getElementById("user").value;
	let val2 = document.getElementById("pw").value;
	let payload ={
	  params: {
		"username" : val1,
		"password" : val2
	  }
	};
	
	await axios.get(urlCat, payload)
	.then((response) => {
	  console.log(response.data);
	  pieData = response.data;
	  if (typeof(pie) == Object) {
		  console.log("pie destroyed")
		  pie.destroy();
	  }
		showPieChart();})
	  .catch(function (error) {
		  console.log(error);
		});
	}
  
function showPieChart(){
	if (pie !== null) {
		console.log("pie destroyed")
		pie.destroy();
	}
	console.log(typeof(pie));
	pie = new d3pie("chartDivUser", {
		"header": {
			"title": {
				"text": "Expense Journal",
				"fontSize": 24,
				"font": "open sans"
			},
			"subtitle": {
				"text": "by categories across accounts",
				"color": "#999999",
				"fontSize": 12,
				"font": "open sans"
			},
			"location": "pie-center",
			"titleSubtitlePadding": 9
		},
		"footer": {
			"color": "#999999",
			"fontSize": 10,
			"font": "open sans",
			"location": "bottom-left"
		},
		"size": {
			"canvasHeight": 400,
			"canvasWidth": 600,
			"pieInnerRadius": "68%",
			"pieOuterRadius": "90%"
		},
		"data": {
			"sortOrder": "value-desc",
			"smallSegmentGrouping": {
				"enabled": true,
				"value": 5
			},
			"content": pieData
		},
		"labels": {
			"outer": {
				"pieDistance": 32
			},
			"inner": {
				"hideWhenLessThanPercentage": 4
			},
			"mainLabel": {
				"fontSize": 11
			},
			"percentage": {
				"color": "#ffffff",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 11
			},
			"lines": {
				"enabled": true
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: '$'{value}"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": true,
				"percentage": 100
			}
		}
	});
}