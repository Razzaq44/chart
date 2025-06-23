import { useCoinGeckoStore } from '@/stores/coinGecko'
import { type ChartOptions, type ChartData } from 'chart.js'
import { createPinia, setActivePinia } from 'pinia'
import { ref } from 'vue'

setActivePinia(createPinia())

const coinGecko = useCoinGeckoStore()
await coinGecko.getEthereum()

export const barChartData = ref<ChartData<'bar', { x: number; y: number }[], unknown> | null>(null)

const volume: { x: number; y: number }[] = coinGecko.data.map(([x, y]: [number, number]) => ({
  x,
  y,
}))

barChartData.value = {
  datasets: [
    {
      label: 'ETH/USD',
      data: volume,
      backgroundColor: '#000',
    },
  ],
}

export const barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'ETH',
    },
    tooltip: {
      mode: 'nearest',
      intersect: false,
      callbacks: {
        label: (context) => `Volume: ${context.parsed.y.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day',
        tooltipFormat: 'ddd, DD MMM YYYY HH:mm',
        displayFormats: {
          day: 'DD MMM',
        },
      },
      ticks: {
        maxTicksLimit: 7,
      },
      title: {
        display: true,
        text: 'Date',
      },
    },
    y: {
      title: {
        display: true,
      },
      ticks: {
        callback: (value) => `${Number(value).toLocaleString()}`,
      },
    },
  },
}
