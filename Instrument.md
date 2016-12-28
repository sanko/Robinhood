# Financial Instrument Information Methods

- [Gather Basic Instrument Info by Symbol](#gather-basic-instrument-info-by-symbol)
- [Gather Basic Instrument Info by ID](#gather-basic-instrument-info-by-id)

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

A [paginated](#pagination) list of instruments is returned. Instruments contain the following keys...

| Key                   | Type       | Description |
|-----------------------|------------|-------------|
| min_tick_size         | Float      | Note: Might be null. See http://www.finra.org/industry/tick-size-pilot-program |
| splits                | URL        | Link to the split list for this security |
| margin_initial_ratio  | Float      |                                          |
| url 					| URL 	     | Endpoint where more information about this secureity may be grabbed |
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
    "previous": null,
    "results": [
        {
            "min_tick_size": null,
            "splits": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/",
            "margin_initial_ratio": "0.5000",
            "url": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
            "quote": "https://api.robinhood.com/quotes/MSFT/",
            "symbol": "MSFT",
            "bloomberg_unique": "EQ0010174300001000",
            "list_date": "1987-09-17",
            "fundamentals": "https://api.robinhood.com/fundamentals/MSFT/",
            "state": "active",
            "country": "US",
            "day_trade_ratio": "0.2500",
            "tradeable": true,
            "maintenance_ratio": "0.2500",
            "id": "50810c35-d215-4866-9758-0ada4ac79ffa",
            "market": "https://api.robinhood.com/markets/XNAS/",
            "name": "Microsoft Corporation - Common Stock"
        }
    ],
    "next":null
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
| url 					| URL 	     | Endpoint where more information about this secureity may be grabbed |
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
    "min_tick_size": null,
    "splits": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/",
    "margin_initial_ratio": "0.5000",
    "url": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
    "quote": "https://api.robinhood.com/quotes/MSFT/",
    "symbol": "MSFT",
    "bloomberg_unique": "EQ0010174300001000",
    "list_date": "1987-09-17",
    "fundamentals": "https://api.robinhood.com/fundamentals/MSFT/",
    "state": "active",
    "country": "US",
    "day_trade_ratio": "0.2500",
    "tradeable": true,
    "maintenance_ratio": "0.2500",
    "id": "50810c35-d215-4866-9758-0ada4ac79ffa",
    "market": "https://api.robinhood.com/markets/XNAS/",
    "name": "Microsoft Corporation - Common Stock"
}

```

## Todo:

  - https://api.robinhood.com/instruments/?query={search}
  - https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/
