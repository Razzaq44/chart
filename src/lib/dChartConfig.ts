import { useCoinGeckoStore } from '@/stores/coinGecko'
import { type ChartOptions, type ChartData } from 'chart.js'
import { createPinia, setActivePinia } from 'pinia'
import { ref } from 'vue'

setActivePinia(createPinia())

const coinGecko = useCoinGeckoStore()
await coinGecko.getMarketCap()

export const doughnutChartData = ref<ChartData<'doughnut'>>({
  labels: coinGecko.market_cap_data.map((item) => item[0]),
  datasets: [
    {
      data: coinGecko.market_cap_data.map((item) => item[1]),
      backgroundColor: ['#FFCE56', '#36A2EB', '#4BC0C0', '#FF6384'],
      hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#4BC0C0', '#FF6384'],
    },
  ],
})

export const doughnutChartOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '',
    },
    tooltip: {
      mode: 'nearest',
      intersect: false,
    },
  },
}
