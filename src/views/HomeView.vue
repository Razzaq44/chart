<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from 'chart.js'
import { options, chartData } from '@/lib/chartConfig'
import 'chartjs-adapter-moment'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  TimeScale,
  LinearScale,
  CategoryScale,
)
</script>

<template>
  <main class="flex gap-8">
    <div class="flex justify-between w-full"></div>
    <Line
      id="my-chart-id"
      class="flex-1"
      :options="options"
      :data="chartData as ChartData<'line'>"
    />
  </main>
</template>
