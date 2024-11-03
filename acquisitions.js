import Chart from "chart.js/auto";

(async function () {
	const data = [
		{ month: "Jan", weight: 250 },
		{ month: "Feb", weight: 250 },
		{ month: "Mar", weight: 200 },
		{ month: "Apr", weight: 150 },
		{ month: "May", weight: 50 },
		{ month: "Jun", weight: 0 }
	];

	new Chart(document.getElementById("acquisitions"), {
		type: "line",
		options: {
			pointStyle: false,
			scales: {
				x: {
					grid: {
						display: false
					}
				},
				y: {
					grid: {
						display: false
					}
				}
			}
		},
		data: {
			labels: data.map((row) => row.month),
			datasets: [
				{
					label: "Weight loss prediction",
					data: data.map((row) => row.weight)
				}
			]
		}
	});
})();