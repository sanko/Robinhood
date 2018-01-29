# Get Crypto Quote

Returns crypto quote data.

**URL** : `/marketdata/forex/quotes/{symbolOrId}`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - {symbolOrId} - UUID (for example, `cc0efa02-cfca-11e0-ae25-8cae28fccae2`) or symbol (for example, BTCUSD)

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call by currency pair id (UUID) like `https://api.robinhood.com/marketdata/forex/quotes/3d961844-d360-45fc-989b-f6fca761d511`:

```json
{
    "ask_price": "8756.5080",
    "bid_price": "8697.5799",
    "mark_price": "8727.0439",
    "high_price": "10253.4700",
    "low_price": "8682.3000",
    "open_price": "10185.8500",
    "symbol": "BTCUSD",
    "id": "3d961844-d360-45fc-989b-f6fca761d511",
    "volume": "643764.2321",
    "volume_gemini": "0.0000"
}
```

For a call by symbol like `https://api.robinhood.com/marketdata/forex/quotes/BTCUSD`:

```json
{
    "ask_price": "8773.6723",
    "bid_price": "8738.6377",
    "mark_price": "8756.1550",
    "high_price": "10253.5300",
    "low_price": "8682.2600",
    "open_price":"10185.9100",
    "symbol": "BTCUSD",
    "id": "3d961844-d360-45fc-989b-f6fca761d511",
    "volume": "642158.9215",
    "volume_gemini": "0.0000"
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.