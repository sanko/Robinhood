# Gather Quote Data by Stock Ticker Symbol

This subdirectory holds current quote data about a particular security traded with the given `{symbol}`.

**URL** : `/quotes/{symbol}/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Path constraints**

    - {symbol} - Security's ticker symbol

**Request sample**

```
curl -v https://api.robinhood.com/quotes/MSFT/ \
   -H "Accept: application/json"
```   

## Success Responses

**Condition** : Sucessfully gather quote data.

**Code** : `200 OK`

**Content example** :

```json
{
  "ask_price": "92.0500",
  "ask_size": 1700,
  "bid_price": "92.0400",
  "bid_size": 1300,
  "last_trade_price": "91.9752",
  "last_extended_hours_trade_price": null,
  "previous_close": "87.1800",
  "adjusted_previous_close": "87.1800",
  "previous_close_date": "2018-03-23",
  "symbol": "MSFT",
  "trading_halted": false,
  "has_traded": true,
  "last_trade_price_source": "nls",
  "updated_at": "2018-03-26T16:11:02Z",
  "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/"
}
```

## Error Response

**Condition** : If this endpoint is called without a `{symbol}` that doesn't exist or is malformed; for example, `https://api.robinhood.com/quotes/FAKE/` or `https://api.robinhood.com/quotes/msft/`.

**Code** : `404 Not Found`

## Notes**

* Quotes are provided without requiring login information.