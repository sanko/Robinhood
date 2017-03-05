# News & Information

- Get Robinhood Disclosure		GET /disclosures/home_screen_disclosures.json
- Get Popular Stocks			GET https://brokerage-static.s3.amazonaws.com/popular_stocks/data.json
- Get Top Movers on the S&P500	GET /midlands/movers/sp500/?direction=['up' or 'down']
- Get News						GET /midlands/news/$instrumentSymbol/

# Cards

These are the little news snippets you find under your chart on the main screen

- Gather list of cards			GET  /midlands/notifications/stack/
- Dismiss Card					POST /midlands/notifications/stack/$cardId/dismiss/

# Dividends

- Get Dividend					GET /dividends/$dividendId/
- Get Dividends					GET /dividends/						{cursor}

# Portfolio and Positions

- List Portfolios               GET /portfolios/
- Get Portfolio					GET /portfolios/$accountNumber/ - this is deprecaited, it seems
- Get Portfolio Historicals		GET /portfolios/historicals/$accountNumber?span=...&interval=...
- Get Position					GET /positions/$accountNumber/$instrumentId/
- Get Positions					GET /accounts/{account_id}/positions/?nonzero=true&cursor=[$cursor]
- Reorder Positions				GET /positions/?ordering=$ordering

# List Portfolios

List your Portfolios

**Method**

| URI                        | HTTP Method | Authentication |
|----------------------------|-------------|----------------|
| api.robinhood.com/accounts | POST        | *Yes*          |

**Fields**
*WIP*
| Parameter     | Type   | Description                                         		          | Default |Required|
|---------------|--------|--------------------------------------------------------------------|---------|--------|
| account       | URL    | Account to make this order with      				              | N/A     | *Yes*  |
| instrument    | URL    | Instrument URL of the security you're attempting to buy or sell    | N/A     | *Yes*  |
| symbol        | String | The ticker symbol of the security you're attmepting to buy or sell | N/A     | *Yes*  |
| type 		    | String | Order type: `market` or `limit`                                    | N/A     | *Yes*  |
| time_in_force | String | `gfd`, `gtc`, `ioc`, `fok` or `opg`                                | N/A     | *Yes*  |
| trigger	    | String | `immediate`, `stop`, or `on_close`                                 | N/A     | *Yes*  |
| price		    | Float  | The price you're willing to accept in a sell or pay in a buy       | N/A     | Only when `type` equals `limit`   |
| stop_price    | Float  | The price at which an order with a `stop` trigger converts         | N/A     | Only when `trigger` equals `stop` |
| quantity      | Int    | Number of shares you would like to buy or sell                     | N/A     | *Yes*  |
| side          | String | `buy` or `sell`                                                    | N/A     | *Yes*  |
| client_id     | String | Only available for OAuth applications                              | N/A     | No     |

**Request sample**

```
curl -v https://api.robinhood.com/accounts/{account.number}/portfolio/
   -H "Accept: application/json"
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

Fields are returned as well as the following:
*WIP*
| Key          		| Type     | Description |
|-------------------|----------|-------------|
| updated_at        | ISO 8601 |  |
| executions        | Array    | This is a list of hashes |
| fees              | Float    | Total fees including. Generally `0.00` |
| cancel            | URL      | If this is not `null`, you can `POST` to this URL to cancel the order |
| id                | String   | Internal id of this order |
| cumulative_quantity | Float  | Number of shares which have executed so far |
| reject_reason     | String   ||
| state             | String   |  `queued`, `unconfirmed`, `confirmed`, `partially_filled`, `filled`, `rejected`, `canceled`, or `failed` |
| last_transaction_at | ISO 8601 ||
| client_id         | String ||
| url               | URL | Link to this order with up to date information |
| created_at        | ISO 8601 | Time the order was placed |
| position          | URL | Link to positions for this account with this instrument |
| average_price     | Float | Average price of all shares executed so far |

**Response sample**

```
{
    "extended_hours_equity":null,
    "url":"https://api.robinhood.com/portfolios/8UD09348/",
    "adjusted_equity_previous_close":"500.1700",
    "account":"https://api.robinhood.com/accounts/8UD09348/",
    "last_core_market_value":"34.0700",
    "last_core_equity":"499.6600",
    "excess_margin":null,
    "excess_margin_with_uncleared_deposits":null,
    "equity":"499.6600",
    "market_value":"34.0700",
    "equity_previous_close":"0.1700",
    "extended_hours_market_value":null
}
```

# Document Access

Tax info and other docs are provided thought these endpoints

- Get Document Info by ID		GET /documents/$id/
- Get Document Download URL		GET /documents/$id/download/
- Get Documents					GET /documents/
- Mark Doc Request Uploaded		PATCH /upload/document_request/$rhid/?state=$state

# Application Information

- Get Config Vitals				GET /midlands/configurations/vitals/android/
