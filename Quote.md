# Quotes

- [Gather Quote Data by Ticker Symbol](#gather-quote-data-by-ticker-symbol)
- [Gather Quote Data for Multiple Ticker Symbols in a Single API Call](#gather-quote-data-for-multiple-ticker-symbols-in-a-single-api-call)
- [TODO](#)

The `/quotes` relative path is a directory that contains information relevant current and historical data on a particular security. It has the `historicals` sub-directory which is described below.

**Notes**

* Quotes are provided by Robinhood without requiring login information.

# Gather Quote Data by Ticker Symbol

`/quotes/{symbol}/`

This subdirectory retrieves current quote data about a particular security traded with the given `{symbol}`.

Data is returned as a JSON structure and looks like this call to `https://api.robinhood.com/quotes/MSFT/`:

    { "ask_price": "54.2100",
      "ask_size": 2000,
      "bid_price": "54.2000",
      "bid_size": 1800,
      "last_trade_price": "54.1900",
      "last_extended_hours_trade_price": null,
      "previous_close": "54.6600",
      "adjusted_previous_close" : "54.6600",
      "previous_close_date": "2016-03-17",
      "symbol": "MSFT",
      "trading_halted": false,
      "updated_at": "2016-03-18T15:45:28Z"
    }

# Gather Quote Data for Multiple Ticker Symbols in a Single API Call

`/quotes/?symbols=...`

You can gather quote data for a list of symbols at once by handing the bare `/quotes` path a `symbols` query filled with comma separated symbols.

Returned data is semi-paginated (in that there are no `next` or `previous` keys) and looks a lot like this call to `https://api.robinhood.com/quotes/?symbols=MSFT,FB,TSLA`.

Note: The maximum number of symbols that can be defined per call is 1630.  Anything above that number will cause a HTTP 414 error.

    { "results": [{
            "ask_price": "54.1100",
            "ask_size": 1200,
            "bid_price": "54.1000",
            "bid_size": 3000,
            "last_trade_price": "54.0400",
            "last_extended_hours_trade_price": null,
            "previous_close": "54.6600",
            "adjusted_previous_close": "54.6600",
            "previous_close_date": "2016-03-17",
            "symbol": "MSFT",
            "trading_halted": false,
            "updated_at": "2016-03-18T16:16:48Z"
        }, {
            "ask_price": "111.8900",
            "ask_size": 600,
            "bid_price": "111.8800",
            "bid_size": 200,
            "last_trade_price": "112.1500",
            "last_extended_hours_trade_price": null,
            "previous_close": "111.0200",
            "adjusted_previous_close": "111.0200",
            "previous_close_date": "2016-03-17",
            "symbol": "FB",
            "trading_halted": false,
            "updated_at": "2016-03-18T16:16:52Z"
        }, {
            "ask_price": "231.8900",
            "ask_size": 100,
            "bid_price": "231.7600",
            "bid_size": 100,
            "last_trade_price": "231.9867",
            "last_extended_hours_trade_price": null,
            "previous_close": "226.3800",
            "adjusted_previous_close": "226.3800",
            "previous_close_date": "2016-03-17",
            "symbol": "TSLA",
            "trading_halted": false,
            "updated_at": "2016-03-18T16:16:43Z"
        }]
    }

# TODO

- Get Historical Quotes

    GET /quotes/historicals/$symbol/[?interval=$i&span=$s&bounds=$b]
        interval=week|day|10minute|5minute|null(all)
        span=day|week|year|5year|all
        bounds=extended|regular|trading

- Get Quotes

    GET /quotes/?[symbols=$csv_symbols][&cursor=$cursor]
