# Gather Quote Data by Stock Ticker Symbol

This subdirectory holds current quote data about a particular security traded with the given `{symbol}`.

**URL** : `/marketdata/quotes/{symbol}/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Path constraints**

    - {symbol} - security's ticker symbol

**Query constraints**

    - bounds - 'trading', 'regular', or 'extended' (optional; 'trading' is default)

**Request sample**

```
curl -v https://api.robinhood.com/marketdata/quotes/MSFT/ \
   -H "Accept: application/json"
```

## Success Responses

**Condition** : Sucessfully gather quote data.

**Code** : `200 OK`

**Content example** :

```json
{
  "ask_price": "90.2000",
  "ask_size": 400,
  "bid_price": "90.0500",
  "bid_size": 100,
  "last_trade_price": "90.2300",
  "last_extended_hours_trade_price": "90.0500",
  "previous_close": "92.3800",
  "adjusted_previous_close": "92.3800",
  "previous_close_date": "2018-04-05",
  "symbol": "MSFT",
  "trading_halted": false,
  "has_traded": true,
  "last_trade_price_source": "consolidated",
  "updated_at": "2018-04-06T23:59:50Z",
  "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/"
}
```

## Error Response

**Condition** : If this endpoint is called without a `{symbol}` that doesn't exist or is malformed; for example, `https://api.robinhood.com/quotes/FAKE/` or `https://api.robinhood.com/quotes/msft/`.

**Code** : `404 Not Found`

## Notes

This used to be `https://api.robinhood.com/quotes/{symbol}`.
