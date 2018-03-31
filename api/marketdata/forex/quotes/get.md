# Get Crypto Quotes

Returns a paginated list of crypto quote data.

**URL** : `/marketdata/forex/quotes/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - symbols - comma separated list of currency pairs by symbol (for example, BTCUSD)
    - ids - comma separated list of UUIDs

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call by currency pair id (UUID) like `https://api.robinhood.com/marketdata/forex/quotes/?ids=7a04fe7a-e3a8-4a07-8c35-d0fec9f35569`:

```json
{
    "results": [
        {
            "ask_price": "0.4400",
            "bid_price": "0.4400",
            "mark_price": "0.4400", 
            "high_price": "0.5369",
            "low_price": "0.4220",
            "open_price": "0.5288",
            "symbol": "XLMUSD",
            "id": "7a04fe7a-e3a8-4a07-8c35-d0fec9f35569",
            "volume": "174515836.4149",
            "volume_gemini": "0.0000"
        }
    ]
}
```

For a call by symbol like `https://api.robinhood.com/marketdata/forex/quotes/?symbols=XLMUSD,BTCUSD`:


```json
{
    "results": [
        {   
            "ask_price": "0.4300",
            "bid_price": "0.4300",
            "mark_price": "0.4300",
            "high_price": "0.5369",
            "low_price": "0.4220",
            "open_price": "0.5288",
            "symbol": "XLMUSD",
            "id": "7a04fe7a-e3a8-4a07-8c35-d0fec9f35569",
            "volume": "177315308.8392",
            "volume_gemini": "0.0000"
        },
        {
            "ask_price": "8808.5820",
            "bid_price": "8773.4080",
            "mark_price": "8790.9950",
            "high_price": "10253.8200",
            "low_price": "8682.4700",
            "open_price": "10185.7900",
            "symbol": "BTCUSD",
            "id": "3d961844-d360-45fc-989b-f6fca761d511",
            "volume": "631161.6806",
            "volume_gemini": "0.0000"
        }
    ]
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.