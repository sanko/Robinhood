# Get Crypto Currency Pair by ID

Returns data on a single Crypto currency pair.

**URL** : `/currency_pairs/{id}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - {id} - UUID (for example, `3d961844-d360-45fc-989b-f6fca761d511`)

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call to `https://nummus.robinhood.com/currency_pairs/`:

```json
{
  "asset_currency": {
    "code": "BTC",
    "id": "d674efea-e623-4396-9026-39574b92b093",
    "increment": "0.000000010000000000",
    "name": "Bitcoin",
    "type": "cryptocurrency"
  },
  "id": "3d961844-d360-45fc-989b-f6fca761d511",
  "min_order_size": "0.000010000000000000",
  "min_order_price_increment": "0.010000000000000000",
  "min_order_quantity_increment": "0.000000010000000000",
  "name": "Bitcoin to US Dollar",
  "quote_currency": {
    "code": "USD",
    "id": "1072fc76-1862-41ab-82c2-485837590762",
    "increment": "0.010000000000000000",
    "name": "US Dollar",
    "type": "fiat"
  },
  "symbol": "BTC-USD",
  "tradability": "tradable"
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.