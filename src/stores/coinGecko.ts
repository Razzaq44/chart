import { defineStore } from 'pinia'
import api from '@/lib/api'

type PricePoint = [number, number]
type MarketCap = [string, number]

type MarketChartResponse = {
  prices: PricePoint[]
  total_volumes: PricePoint[]
  market_caps: MarketCap[]
}

export const useCoinGeckoStore = defineStore('coinGecko', {
  state: () => ({
    data: [] as PricePoint[],
    market_cap_data: [] as MarketCap[],
    loading: false,
  }),

  actions: {
    async getBTC() {
      this.loading = true
      try {
        const response = await api.get<MarketChartResponse>(
          '/bitcoin/market_chart?vs_currency=usd&days=7',
        )

        this.data = response.data.prices
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async getEthereum() {
      this.loading = true
      try {
        const response = await api.get<MarketChartResponse>(
          '/ethereum/market_chart?vs_currency=usd&days=7',
        )

        this.data = response.data.total_volumes
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async getMarketCap() {
      this.loading = true
      try {
        const response = await api.get(
          '/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano',
        )

        this.market_cap_data = response.data.map((item: { id: string; market_cap: number }) => [
          item.id,
          item.market_cap,
        ])
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})
