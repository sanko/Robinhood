# Gather Quote Data for a List of Securities

This subdirectory holds current quote data about a set of stocks or ETFs.

**URL** : `/marketdata/quotes/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Query constraints**

    - symbols - comma separated list of ticker symbols
    - instruments - comma separated list of URLs
    - bounds - 'trading', 'regular', or 'extended' (optional; 'trading' is default)

Note that *either* `symbols` *or* `instruments` must be passed.

The maximum number of symbols that can be defined per call is 1630. Anything above that number will cause a HTTP 414 error.

**Request samples**

Grabbing quotes by ticker symbol (note the made up one):

```
curl -v https://api.robinhood.com/marketdata/quotes/?symbols=FAKE,MSFT \
   -H "Accept: application/json"
```   

Grabbing quotes by instrument id (note the first one is fake):

```
curl -v https://api.robinhood.com/marketdata/quotes/?instruments=\
    https://api.robinhood.com/instruments/00000000-d215-4866-9758-000000000000/,\
    https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/"\
   -H "Accept: application/json"
```

## Success Responses

**Condition** : Sucessfully gather quote data.

**Code** : `200 OK`

**Content example** :

Either of the examples above will return this:

```json
{
  "results": [
    null,
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
  ]
}
```

## Notes

This used to be `https://api.robinhood.com/quotes/?symbols=MSFT,FB,TSLA`.