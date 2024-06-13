<template>
  <div class="chart-card">
    <div class="">
      <h3 class="ml-5">{{ chartHeading }}</h3>
      <p>{{ totalFiles }}</p>
    </div>
    <div class="chart-legend">
      <div class="test">
        <div class="custom-chart">
          <Doughnut
            ref="myChart"
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
          />
        </div>
        <div class="list-buttton-group">
          <ul>
            <li v-for="(label, index) in chartData.labels" :key="index">
              <div class="legend-item">
                <span>
                  {{ label }}
                </span>
                <span
                  :style="{
                    backgroundColor:
                      chartData.datasets[0].backgroundColor[index],
                    marginLeft: 10,
                  }"
                  class="legend-color"
                ></span>
              </div>
            </li>
          </ul>
          <button v-if="buttonNeeded" class="cus-button">
            {{ buttonName }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

//This below custom plugin is to draw the percentage of allocated files inside the doughnut chart
const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;
    const { text, color, font } = chart.options.plugins.doughnutCenter;

    ctx.restore();
    // const fontSize = (height / 114).toFixed(2);
    ctx.font = `${font.weight} ${font.size}px ${font.family}`;
    ctx.textBaseline = "middle";

    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillStyle = color;
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
  centerTextPlugin
);

export default {
  name: "ChartCardBootstrap",
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            // position: "right",
          },
          datalabels: {
            display: false,
          },
          doughnutCenter: {
            color: "black",
            text: `${this.calculatePercentage()}%`,
            font: {
              size: "17",
              family: "Arial",
              weight: "bold",
            },
          },
        },
      },
      chartData: {
        labels: ["Allocated files", "Unallocated files"],
        datasets: [
          {
            data: [this.allocatedFiles, this.totalFiles - this.allocatedFiles],
            backgroundColor: [this.backgroundColor, "#CBD5E1"],
          },
        ],
      },
    };
  },
  props: {
    chartHeading: {
      type: String,
      required: true,
    },
    buttonNeeded: {
      type: Boolean,
      required: true,
    },
    buttonName: {
      type: String,
      required: true,
    },
    allocatedFiles: {
      type: Number,
      required: true,
    },
    totalFiles: {
      type: Number,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  components: { Doughnut },
  methods: {
    calculatePercentage() {
      return Math.floor((this.allocatedFiles / this.totalFiles) * 100);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.chart-card {
  display: inline;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 16px;
  text-align: center;
  width: 370px;
  background: linear-gradient(to top, #ffffff, #f1f5f9);
  height: 200px;
}
</style>
