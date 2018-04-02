# Get Options Market Data

Returns a paginated list of options data. The Greeks, etc. are here.

**URL** : `/marketdata/forex/quotes/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - instruments - comma separated list of options instrument URLs
    - cursor - pagination info

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call by option id (UUID) like `https://api.robinhood.com/marketdata/options/?instruments=/options/instruments/bf3642cb-6c56-49bb-af15-f012f66b2af4/`:

```json
{
  "results": [
    {
      "adjusted_mark_price": "0.0600",
      "ask_price": "0.1200",
      "ask_size": 20,
      "bid_price": "0.0000",
      "bid_size": 0,
      "break_even_price": "217.5600",
      "high_price": null,
      "instrument": "https://api.robinhood.com/options/instruments/bf3642cb-6c56-49bb-af15-f012f66b2af4/",
      "last_trade_price": null,
      "last_trade_size": null,
      "low_price": null,
      "mark_price": "0.0600",
      "open_interest": 0,
      "previous_close_date": "2018-03-28",
      "previous_close_price": "0.6500",
      "volume": 0,
      "chance_of_profit_long": "0.0086",
      "chance_of_profit_short": "0.9913",
      "delta": "0.0111",
      "gamma": "0.0018",
      "implied_volatility": "0.4565",
      "rho": "0.0007",
      "theta": "-0.0158",
      "vega": "0.0103"
    }
  ]
}
```

## Notes

* Like all options endpoints, this one requires OAuth login.
