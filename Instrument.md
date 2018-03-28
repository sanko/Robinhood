# Financial Instrument Information Methods

- [Gather Basic Instrument Info by Symbol](#gather-basic-instrument-info-by-symbol)
- [Gather Basic Instrument Info by ID](#gather-basic-instrument-info-by-id)
- [Search for Instruments by Keyword](#search-for-instruments-by-keyword)
- [Gather the Split History for an Instrument](#gather-the-split-history-for-an-instrument)
- [Grab Data on a Single Split](#grab-data-on-a-single-split)

# Gather Basic Instrument Info by Symbol

**Method**

| URI                            | HTTP Method | Authentication |
|--------------------------------|-------------|----------------|
| api.robinhood.com/instruments/ | GET         | No             |

**Fields**

| Parameter | Type   | Description                                         		          | Default |Required|
|-----------|--------|--------------------------------------------------------------------|---------|--------|
| symbol    | String | The ticker symbol of the security you're attmepting to get info on | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/instruments/?symbol=MSFT \
   -H "Accept: application/json"
```

**Response**

A [paginated](README.md#pagination) list of instruments is returned. Instruments contain the following keys...

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
    "previous":  null,
    "results":  [
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
    ],
    "next": null
}
```

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

# Search for Instruments by Keyword

This returns a paginated list of all instruments matching the query parameter.

**Method**

| URI                            | HTTP Method | Authentication |
|--------------------------------|-------------|----------------|
| api.robinhood.com/instruments/ | GET         | No             |

**Fields**

| Parameter | Type   | Description                                         		          | Default |Required|
|-----------|--------|--------------------------------------------------------------------|---------|--------|
| query     | String | Keyword used to search instruments. This keyword might be found in the name for example | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/instruments/?query=oil \
   -H "Accept: application/json"
```

**Response**

A [paginated](README.md#pagination) list of instruments is returned. Instruments contain the following keys...

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
   "previous":  null,
   "results":  [
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/6d744560-ef77-4aa0-8524-7a771cc04bd7/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/6d744560-ef77-4aa0-8524-7a771cc04bd7/",
         "quote":  "https://api.robinhood.com/quotes/OIL/",
         "symbol":  "OIL",
         "bloomberg_unique":  "EQ0000000002030237",
         "list_date":  "2006-08-16",
         "fundamentals":  "https://api.robinhood.com/fundamentals/OIL/",
         "state":  "active",
         "country":  "GB",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "6d744560-ef77-4aa0-8524-7a771cc04bd7",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "Barclays Bank PLC iPath GS C Oil"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/ab4f79fc-f84a-4f7b-8132-4f3e5fb38075/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/ab4f79fc-f84a-4f7b-8132-4f3e5fb38075/",
         "quote":  "https://api.robinhood.com/quotes/MRO/",
         "symbol":  "MRO",
         "bloomberg_unique":  "EQ0010158100001000",
         "list_date":  "1970-01-02",
         "fundamentals":  "https://api.robinhood.com/fundamentals/MRO/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "ab4f79fc-f84a-4f7b-8132-4f3e5fb38075",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "Marathon Oil Corporation"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/01f33471-51d9-4afe-850f-b5f13d58c459/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/01f33471-51d9-4afe-850f-b5f13d58c459/",
         "quote":  "https://api.robinhood.com/quotes/USO/",
         "symbol":  "USO",
         "bloomberg_unique":  "EQ0000000002417621",
         "list_date":  "2006-04-10",
         "fundamentals":  "https://api.robinhood.com/fundamentals/USO/",
         "state":  "active",
         "country":  "CA",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "01f33471-51d9-4afe-850f-b5f13d58c459",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "United States Oil Fund, LP"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/48eab16a-7378-45e9-970a-c50fd081d25d/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/48eab16a-7378-45e9-970a-c50fd081d25d/",
         "quote":  "https://api.robinhood.com/quotes/XOP/",
         "symbol":  "XOP",
         "bloomberg_unique":  "EQ0000000002554511",
         "list_date":  "2006-06-22",
         "fundamentals":  "https://api.robinhood.com/fundamentals/XOP/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "48eab16a-7378-45e9-970a-c50fd081d25d",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "SPDR S&P Oil & Gas Exploration & Production ETF"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/4860d88a-807b-4345-8545-5bb87971b7d7/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/4860d88a-807b-4345-8545-5bb87971b7d7/",
         "quote":  "https://api.robinhood.com/quotes/NOV/",
         "symbol":  "NOV",
         "bloomberg_unique":  "EQ0019450500001000",
         "list_date":  "2005-03-14",
         "fundamentals":  "https://api.robinhood.com/fundamentals/NOV/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "4860d88a-807b-4345-8545-5bb87971b7d7",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "National Oilwell Varco, Inc"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/b6e2a781-49e8-47c5-bee3-a01178ecff27/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/b6e2a781-49e8-47c5-bee3-a01178ecff27/",
         "quote":  "https://api.robinhood.com/quotes/OIH/",
         "symbol":  "OIH",
         "bloomberg_unique":  "EQ0174648800060000",
         "list_date":  "2001-02-07",
         "fundamentals":  "https://api.robinhood.com/fundamentals/OIH/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "b6e2a781-49e8-47c5-bee3-a01178ecff27",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "Market Vectors Oil Service ETF"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/d8edff21-cb19-4373-af1c-f83a3c0d01c4/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/d8edff21-cb19-4373-af1c-f83a3c0d01c4/",
         "quote":  "https://api.robinhood.com/quotes/MUR/",
         "symbol":  "MUR",
         "bloomberg_unique":  "EQ0010102400001000",
         "list_date":  "1990-01-02",
         "fundamentals":  "https://api.robinhood.com/fundamentals/MUR/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "d8edff21-cb19-4373-af1c-f83a3c0d01c4",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "Murphy Oil Holding Co"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/1aec2cb5-0b0d-49ff-a386-795f08c91019/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/1aec2cb5-0b0d-49ff-a386-795f08c91019/",
         "quote":  "https://api.robinhood.com/quotes/COG/",
         "symbol":  "COG",
         "bloomberg_unique":  "EQ0010025300002000",
         "list_date":  "1994-01-03",
         "fundamentals":  "https://api.robinhood.com/fundamentals/COG/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "1aec2cb5-0b0d-49ff-a386-795f08c91019",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "Cabot Oil & Gas Corporation"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/a4cb239f-465e-40be-b59d-cbb98c171be8/splits/",
         "margin_initial_ratio":  "0.8000",
         "url":  "https://api.robinhood.com/instruments/a4cb239f-465e-40be-b59d-cbb98c171be8/",
         "quote":  "https://api.robinhood.com/quotes/UWT/",
         "symbol":  "UWT",
         "bloomberg_unique":  "EQ0000000053545422",
         "list_date":  "2016-12-09",
         "fundamentals":  "https://api.robinhood.com/fundamentals/UWT/",
         "state":  "active",
         "country":  {
            "alpha3":  "",
            "code":  "",
            "flag":  "",
            "flag_url":  null,
            "ioc_code":  "",
            "name":  "",
            "numeric":  null,
            "numeric_padded":  null
         },
         "day_trade_ratio":  "0.7500",
         "tradeable":  true,
         "maintenance_ratio":  "0.7500",
         "id":  "a4cb239f-465e-40be-b59d-cbb98c171be8",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "VelocityShares3x Long Crude Oil"
      },
      {
         "min_tick_size":  "0.0500",
         "splits":  "https://api.robinhood.com/instruments/68de11a3-37cb-4197-9052-15de2c84fb55/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/68de11a3-37cb-4197-9052-15de2c84fb55/",
         "quote":  "https://api.robinhood.com/quotes/OIS/",
         "symbol":  "OIS",
         "bloomberg_unique":  "EQ0118343700001000",
         "list_date":  "2001-02-09",
         "fundamentals":  "https://api.robinhood.com/fundamentals/OIS/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "68de11a3-37cb-4197-9052-15de2c84fb55",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "Oil States International"
      }
   ],
   "next":  null
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
