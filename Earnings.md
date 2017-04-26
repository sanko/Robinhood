# Earnings

![Imgur](http://i.imgur.com/Vj6N2LN.png)

- [Gather Earnings Data](#gather-earnings-data)
- [Gather Earnings Data of All Securities X Amount of Days into the Future](#gather-earnings-data-of-all-securities-x-amount-of-days-into-the-future)
- [Gather Earnings Data by Ticker Symbol](#gather-earnings-data-by-ticker-symbol)
- [Gather Earnings Data by Instrument Url](#gather-earnings-data-by-instrument-url)

# Gather Earnings Data

**Method**

| URI                                      | HTTP Method | Authentication |
|------------------------------------------|-------------|----------------|
| api.robinhood.com/marketdata/earnings/   | GET         | No             |

**Fields**

| Parameter  | Type   | Description                                                        | Default |Required*|
|------------|--------|--------------------------------------------------------------------|---------|---------|
| symbol     | String | The ticker symbol of the security                                  | N/A     | *No*    |
| instrument | String | The full instrument url, *NOT* the instrument ID                   | N/A     | *No*    |
| range      | String | Days forward into the future, format: `<int>day`, limit: `[1, 21]` | N/A     | *No*    |

**Notes**

* *Minimum 1 field parameter is required.  
* Method does not support CSV multiple symbols query

**Response**

A [semi-paginated](README.md#pagination) list is returned. Results is an `Array` of the following interface:
```typescript
interface Earning {
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
```

# Gather Earnings Data of All Securities X Amount of Days into the Future

`GET /marketdata/earnings/?range={X}day`
> `X` must be in [1, 21]

**Request sample**

```
curl -v https://api.robinhood.com/marketdata/earnings/?range=7day \
	-H "Accept: application/json"
```

**Response sample**

> Results are sorted alphabetically by default
```json
{
    "results": [
        {
            "symbol": "ABTX",
            "instrument": "https://api.robinhood.com/instruments/5abb60d4-fac7-4012-bc16-8d01305c24a9/",
            "year": 2017,
            "quarter": 1,
            "eps": {
                "estimate": "0.4100",
                "actual": "0.4500"
            },
            "report": {
                "date": "2017-04-25",
                "timing": "am",
                "verified": true
            },
            "call": {
                "datetime": "2017-04-25T15:00:00Z",
                "broadcast_url": null,
                "replay_url": "http://mmm.wallstreethorizon.com/u.asp?u=131127"
            }
        },
        {
            "symbol": "ACGL",
            "instrument": "https://api.robinhood.com/instruments/940580c4-f4ee-4572-b82a-531f97ae07d6/",
            "year": 2017,
            "quarter": 1,
            "eps": {
                "estimate": "1.3000",
                "actual": "1.4200"
            },
            "report": {
                "date": "2017-04-25",
                "timing": "pm",
                "verified": true
            },
            "call": {
                "datetime": "2017-04-26T16:00:00Z",
                "broadcast_url": "http://mmm.wallstreethorizon.com/u.asp?u=162664",
                "replay_url": null
            }
        },
        {
            "symbol": "ACHC",
            "instrument": "https://api.robinhood.com/instruments/02e088ad-77ca-4aab-8b49-13be20350870/",
            "year": 2017,
            "quarter": 1,
            "eps": {
                "estimate": "0.4600",
                "actual": "0.4600"
            },
            "report": {
                "date": "2017-04-25",
                "timing": "pm",
                "verified": true
            },
            "call": {
                "datetime": "2017-04-26T13:00:00Z",
                "broadcast_url": "http://mmm.wallstreethorizon.com/u.asp?u=107",
                "replay_url": null
            }
        },
        {
            "symbol": "AGR",
            "instrument": "https://api.robinhood.com/instruments/ddda0380-1b42-4b2b-a635-45c2d38bd3a9/",
            "year": 2017,
            "quarter": 1,
            "eps": {
                "estimate": "0.6800",
                "actual": "0.7300"
            },
            "report": {
                "date": "2017-04-25",
                "timing": "am",
                "verified": true
            },
            "call": {
                "datetime": "2017-04-25T15:00:00Z",
                "broadcast_url": null,
                "replay_url": "http://mmm.wallstreethorizon.com/u.asp?u=162816"
            }
        },
        ...
    ]
}
```

# Gather Earnings Data by Ticker Symbol

`GET /marketdata/earnings/?symbol={symbol}`

**Request sample**

```
curl -v https://api.robinhood.com/marketdata/earnings/?symbol=PLUG \
	-H "Accept: application/json"
```

**Response sample**

> Results are sorted by `report.date` by default, oldest first newest last
```json
{
    "results": [
        {
            "symbol": "PLUG",
            "instrument": "https://api.robinhood.com/instruments/ef99a2c4-adb2-4163-a2df-2d5722cc75b7/",
            "year": 2015,
            "quarter": 3,
            "eps": {
                "estimate": "-0.0500",
                "actual": "-0.0600"
            },
            "report": {
                "date": "2015-11-09",
                "timing": "am",
                "verified": true
            },
            "call": null
        },
        {
            "symbol": "PLUG",
            "instrument": "https://api.robinhood.com/instruments/ef99a2c4-adb2-4163-a2df-2d5722cc75b7/",
            "year": 2015,
            "quarter": 4,
            "eps": {
                "estimate": "-0.0500",
                "actual": "-0.0500"
            },
            "report": {
                "date": "2016-03-10",
                "timing": "am",
                "verified": true
            },
            "call": null
        },
        {
            "symbol": "PLUG",
            "instrument": "https://api.robinhood.com/instruments/ef99a2c4-adb2-4163-a2df-2d5722cc75b7/",
            "year": 2016,
            "quarter": 1,
            "eps": {
                "estimate": "-0.0600",
                "actual": "-0.0500"
            },
            "report": {
                "date": "2016-05-10",
                "timing": "am",
                "verified": true
            },
            "call": null
        },
        ...
    ]
}
```

# Gather Earnings Data by Instrument Url

`GET /marketdata/earnings/?instrument={url}`

**Request sample**

```
curl -v https://api.robinhood.com/marketdata/earnings/?instrument=https://api.robinhood.com/instruments/ef99a2c4-adb2-4163-a2df-2d5722cc75b7/ \
	-H "Accept: application/json"
```

**Response sample**
> Same as [Gather Earnings Data by Ticker Symbol](#gather-earnings-data-by-ticker-symbol)



