<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from 'chart.js'
import { doughnutChartOptions, doughnutChartData } from '@/lib/dChartConfig'
import 'chartjs-adapter-moment'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  TimeScale,
  LinearScale,
  CategoryScale,
)
</script>

<template>
  <main>
    <Doughnut
      id="my-chart-id"
      :options="doughnutChartOptions"
      :data="doughnutChartData as ChartData<'doughnut'>"
    />
  </main>
</template>
