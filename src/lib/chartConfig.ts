import { type ChartOptions, type ChartData } from 'chart.js'
import { ref } from 'vue'
import { useCoinGeckoStore } from '@/stores/coinGecko'
import { createPinia, setActivePinia } from 'pinia'

setActivePinia(createPinia())

export const chartData = ref<ChartData<'line', { x: number; y: number }[]> | null>(null)

const coinGecko = useCoinGeckoStore()
await coinGecko.getBTC()

const prices: { x: number; y: number }[] = coinGecko.data.map(([timestamp, price]) => ({
  x: timestamp,
  y: price,
}))

chartData.value = {
  datasets: [
    {
      label: 'BTC/USD',
      data: prices,
      borderColor: '#f7931a',
      backgroundColor: 'rgba(247, 147, 26, 0.2)',
      tension: 0.3,
      pointRadius: 0,
    },
  ],
}

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'BTC',
    },
    tooltip: {
      mode: 'nearest',
      intersect: false,
      callbacks: {
        label: (context) => `Price: $${context.parsed.y.toLocaleString()}`,
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
        text: '(USD)',
      },
      ticks: {
        callback: (value) => `$${Number(value).toLocaleString()}`,
      },
    },
  },
}
