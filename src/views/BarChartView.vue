<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from 'chart.js'
import { barChartOptions, barChartData } from '@/lib/BarChartConfig'
import 'chartjs-adapter-moment'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  TimeScale,
  LinearScale,
  CategoryScale,
)
</script>

<template>
  <main>
    <Bar
      id="my-chart-id"
      :options="barChartOptions"
      :data="barChartData as unknown as ChartData<'bar', (number | [number, number] | null)[]>"
    />
  </main>
</template>
