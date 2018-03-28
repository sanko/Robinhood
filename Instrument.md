# Financial Instrument Information Methods

- [Gather Basic Instrument Info by ID](#gather-basic-instrument-info-by-id)
- [Gather the Split History for an Instrument](#gather-the-split-history-for-an-instrument)
- [Grab Data on a Single Split](#grab-data-on-a-single-split)

# Gather Basic Instrument Info by ID

**Method**

| URI                                            | HTTP Method | Authentication |
|------------------------------------------------|-------------|----------------|
| api.robinhood.com/instruments/{instrument id}/ | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/ \
   -H "Accept: application/json"

```

**Response**

Instruments contain the following keys...

| Key                   | Type       | Description |
|-----------------------|------------|-------------|
| min_tick_size         | Float      | Note: Might be null. See http://www.finra.org/industry/tick-size-pilot-program |
| splits                | URL        | Link to the split list for this security |
| margin_initial_ratio  | Float      |                                          |
| url 					| URL 	     | Endpoint where more information about this security may be grabbed |
| quote 				| URL 	     | Endpoint where quote data about this security may be grabbed |
| symbol                | String     | The ticker symbol for this security |
| bloomberg_unique      | String     | Bloomberg Global ID (BBGID) for this security. See http://bsym.bloomberg.com/sym/ |
| list_date             | YYYY-MM-DD | Date this security was first traded publically on the exchange |
| fundamentals          | URL        | Link to fundamental data for this security |
| state                 | String     | Indicates whether the security is "active" or not |
| country               | String     | Two char country code for the security's home office or headquarters |
| day_trade_ratio       | Float      |  |
| tradeable             | Boolean    | Indicates whether the security can be traded on Robinhood |
| maintenance_ratio     | Float      |  |
| id                    | String     | The instrument id of this security |
| market                | URL        | Link to the market/exchange this security is traded on |
| name                  | String     | Basic name of the security. Perfect for display |

**Response sample**

```
{
    "min_tick_size":  null,
    "splits":  "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/",
    "margin_initial_ratio":  "0.5000",
    "url":  "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
    "quote":  "https://api.robinhood.com/quotes/MSFT/",
    "symbol":  "MSFT",
    "bloomberg_unique":  "EQ0010174300001000",
    "list_date":  "1987-09-17",
    "fundamentals":  "https://api.robinhood.com/fundamentals/MSFT/",
    "state":  "active",
    "country":  "US",
    "day_trade_ratio":  "0.2500",
    "tradeable":  true,
    "maintenance_ratio":  "0.2500",
    "id":  "50810c35-d215-4866-9758-0ada4ac79ffa",
    "market":  "https://api.robinhood.com/markets/XNAS/",
    "name":  "Microsoft Corporation - Common Stock"
}

```

# Gather the Split History for an Instrument

This returns a paginated list of stock splits for this instrument.

**Method**

| URI                                                   | HTTP Method | Authentication |
|-------------------------------------------------------|-------------|----------------|
| api.robinhood.com/instruments/{instrument_id}/splits/ | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/ \
   -H "Accept: application/json"
```

**Response**

A [paginated](README.md#pagination) list of split data is returned. A split contains the following keys...

| Key            | Type       | Description |
|----------------|------------|-------------|
| url 			 | URL 	      | Endpoint where more information about this particular split |
| instrument     | URL        | Link back to the instrument |
| execution_date | YYYY-MM-DD | The date this split goes into effect |
| divisor        | Float      | |
| multiplier     | Float      | |

**Response sample**

```
{
   "previous": null,
   "results": [
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/bc0e7068-1bf4-4b81-b066-93830495d883/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2016-08-25",
         "divisor": "1.00000000",
         "multiplier": "0.20000000"
      },
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/b5bc679c-445c-45d9-b462-dda72ea6d4a7/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2016-05-18",
         "divisor": "1.00000000",
         "multiplier": "0.10000000"
      },
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2015-10-01",
         "divisor": "4.00000000",
         "multiplier": "1.00000000"
      }
   ],
   "next": null
}
```

# Grab Data on a Single Split

This returns a paginated list of stock splits for this instrument.

**Method**

| URI                                                             | HTTP Method | Authentication |
|-----------------------------------------------------------------|-------------|----------------|
| api.robinhood.com/instruments/{instrument_id}/splits/{split_id} | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/ \
   -H "Accept: application/json"
```

**Response**

A single split data is returned. A split contains the following keys...

| Key            | Type       | Description |
|----------------|------------|-------------|
| url 			 | URL 	      | Endpoint where more information about this particular split |
| instrument     | URL        | Link back to the instrument |
| execution_date | YYYY-MM-DD | The date this split goes into effect |
| divisor        | Float      | |
| multiplier     | Float      | |

**Response sample**

```
{
   "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/",
   "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
   "execution_date": "2015-10-01",
   "divisor": "4.00000000",
   "multiplier": "1.00000000"
}
```
