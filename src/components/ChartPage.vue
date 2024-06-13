<template>
  <div class="main-container">
    <div class="chart-grid">
      <ChartCard
        v-for="chart in charts"
        :key="chart.id"
        :chartHeading="chart.chartHeading"
        :buttonNeeded="chart.buttonNeeded"
        :buttonName="chart.buttonName"
        :allocatedFiles="chart.allocatedFiles"
        :totalFiles="chart.totalFiles"
        :backgroundColor="chart.backgroundColor"
      />
    </div>
  </div>
</template>

<script>
import ChartCard from "./ChartCard.vue";

export default {
  name: "HelloWorld",
  components: {
    ChartCard,
  },
  data() {
    return {
      charts: [
        {
          id: 1,
          chartHeading: "Todays file count",
          buttonNeeded: false,
          buttonName: "Null",
          allocatedFiles: 80,
          totalFiles: 100,
          backgroundColor: "#5482FC",
        },
        {
          id: 2,
          chartHeading: "Review Allocation",
          buttonNeeded: true,
          buttonName: "View Reviewers",
          allocatedFiles: 60,
          totalFiles: 100,
          backgroundColor: "#FFC224",
        },
        {
          id: 3,
          chartHeading: "Re-review Allocation",
          buttonNeeded: true,
          buttonName: "View Validators",
          allocatedFiles: 50,
          totalFiles: 100,
          backgroundColor: "#46B929",
        },
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.chart-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.main-container {
  background-color: white;
}
</style>
