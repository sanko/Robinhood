
/*=======================================================
=            Robinhood Typescript Interfaces            =
=======================================================*/

declare global {

	interface RobinhoodEarning {
		symbol: string // Ticker symbol of the security
		instrument: string // Link back to this security's instrument data
		year: number // Year this earning was announced
		quarter: number // Quarter this earning was announced
		eps: { // Earnings per share announcement
			estimate: number // General guesstimate before announcement
			actual: number // Actual EPS released
		}
		report: { // Report meta data
			date: string // ISO 8601 formated date, 'YYYY-MM-DD'
			timing: string // 'am' or 'pm'
			verified: boolean // Is it legit?
		}
		call: { // Original call conference meta data
			datetime: string // ISO 8601 formated date, 'YYYY-MM-DDTHH:mm:ss.sssZ'
			broadcast_url: string // Web url to the broadcast
			replay_url: string // Web url to the reply
		}
	}

	interface RobinhoodMarket {
		website: string
		city: string
		name: string
		url: string
		country: string
		todays_hours: string
		operating_mic: string
		timezone: string
		acronym: string
		mic: string
	}

	interface RobinhoodMarketHours {
		closes_at: string
		extended_opens_at: string
		next_open_hours: string
		previous_open_hours: string
		is_open: boolean
		extended_closes_at: string
		date: string
		opens_at: string
	}

	interface RobinhoodQuote {
		ask_price: number
		ask_size: number
		bid_price: number
		bid_size: number
		last_trade_price: number
		last_extended_hours_trade_price: number
		previous_close: number
		adjusted_previous_close: number
		previous_close_date: string
		symbol: string
		trading_halted: boolean
		last_trade_price_source: string
		updated_at: string
		instrument: string
	}

	interface RobinhoodHistoricalStats {
		quote: string
		symbol: string
		interval: string
		span: string
		bounds: string
		previous_close_price: number
		open_price: number
		open_time: string
		instrument: string
	}

	interface RobinhoodHistorical {
		begins_at: string
		open_price: number
		close_price: number
		high_price: number
		low_price: number
		volume: number
		session: string
		interpolated: boolean
	}

	interface RobinhoodHistoricalResponse extends RobinhoodHistoricalStats {
		historicals: Array<RobinhoodHistorical>
	}

	interface RobinhoodPaginatedResponse<T> {
		previous: string
		results: Array<T>
		next: string
	}

	interface RobinhoodInstrument {
		min_tick_size: number
		splits: string
		margin_initial_ratio: number
		url: string
		quote: string
		symbol: string
		bloomberg_unique: string
		list_date: string
		fundamentals: string
		state: string
		country: string
		day_trade_ratio: number
		tradeable: boolean
		maintenance_ratio: number
		id: string
		market: string
		name: string
	}

	interface RobinhoodFundamentals {
		open: number
		high: number
		low: number
		volume: number
		average_volume: number
		high_52_weeks: number
		dividend_yield: number
		low_52_weeks: number
		market_cap: number
		pe_ratio: number
		description: string
		instrument: string
	}

	interface RobinhoodMover {
		instrument_url: string
		symbol: string
		updated_at: string
		price_movement: {
			market_hours_last_movement_pct: number
			market_hours_last_price: number
		}
		description: string
	}
	type RobinhoodMoversResponse = RobinhoodPaginatedResponse<RobinhoodMover>

}
