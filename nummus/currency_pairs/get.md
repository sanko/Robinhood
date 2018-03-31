# Get Crypto Currency Pairs

Returns a paginated list of Crypto currency pairs.

**URL** : `/currency_pairs/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - query - optional search string
    - cursor - optional pagination cursor

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call to `https://nummus.robinhood.com/currency_pairs/`:

```json
{
  "next": null,
  "previous": null,
  "results": [
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
    },
    {
      "asset_currency": {
        "code": "ETH",
        "id": "c527c04a-394b-4a44-ae07-19b901ca609c",
        "increment": "0.000000000000000001",
        "name": "Ethereum",
        "type": "cryptocurrency"
      },
      "id": "76637d50-c702-4ed1-bcb5-5b0732a81f48",
      "min_order_size": "0.001000000000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000001000000000000",
      "name": "Ethereum to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "ETH-USD",
      "tradability": "tradable"
    },
    {
      "asset_currency": {
        "code": "XRP",
        "id": "6b7f1ac0-79d2-4dd1-b227-d98b7474715b",
        "increment": "0.000001000000000000",
        "name": "Ripple",
        "type": "cryptocurrency"
      },
      "id": "5f1325b6-f63c-4367-9d6f-713e3a0c5d76",
      "min_order_size": "0.000001000000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000001000000000000",
      "name": "Ripple to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "XRP-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "BCH",
        "id": "913a38ed-36f3-45fb-a967-fb6e30d4a7fb",
        "increment": "0.000000010000000000",
        "name": "Bitcoin Cash",
        "type": "cryptocurrency"
      },
      "id": "2f2b77c4-e426-4271-ae49-18d5cb296d3a",
      "min_order_size": "0.000010000000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "name": "Bitcoin Cash to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "BCH-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "LTC",
        "id": "f9432751-b54d-4d84-b573-f06dc390b766",
        "increment": "0.000000010000000000",
        "name": "Litecoin",
        "type": "cryptocurrency"
      },
      "id": "383280b1-ff53-43fc-9c84-f01afd0989cd",
      "min_order_size": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "name": "Litecoin to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "LTC-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "QTUM",
        "id": "617f87b7-8e1c-4631-8260-c68374e9d978",
        "increment": "0.000000000000000001",
        "name": "Qtum",
        "type": "cryptocurrency"
      },
      "id": "7837d558-0fe9-4287-8f3e-6de592db127c",
      "min_order_size": "0.000000000000000001",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000000000000001",
      "name": "Qtum to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "QTUM-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "ETC",
        "id": "ee3bcf3e-4ac7-4f0a-b887-4cea2b49ff70",
        "increment": "0.000000000000000001",
        "name": "Ethereum Classic",
        "type": "cryptocurrency"
      },
      "id": "7b577ce3-489d-4269-9408-796a0d1abb3a",
      "min_order_size": "0.000100000000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000001000000000000",
      "name": "Ethereum Classic to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "ETC-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "XLM",
        "id": "2989eeb7-b6c7-4b3b-b099-a273ba346c38",
        "increment": "0.000000010000000000",
        "name": "Stellar",
        "type": "cryptocurrency"
      },
      "id": "7a04fe7a-e3a8-4a07-8c35-d0fec9f35569",
      "min_order_size": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "name": "Stellar to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "XLM-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "NEO",
        "id": "e6e6574f-6359-4220-ba44-4df2acde4ab1",
        "increment": "1.000000000000000000",
        "name": "NEO",
        "type": "cryptocurrency"
      },
      "id": "b9729798-2aec-4ca9-8637-4d9789d63764",
      "min_order_size": "1.000000000000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "1.000000000000000000",
      "name": "NEO to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "NEO-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "ZEC",
        "id": "7c67eab0-3bed-4ead-8130-0435bfaa25ee",
        "increment": "0.000000010000000000",
        "name": "Zcash",
        "type": "cryptocurrency"
      },
      "id": "35f0496d-6c3a-4cac-9d2f-6702a8c387eb",
      "min_order_size": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "name": "Zcash to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "ZEC-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "XMR",
        "id": "6b70c056-f526-43a7-bb83-cf35dd87575b",
        "increment": "0.000000000001000000",
        "name": "Monero",
        "type": "cryptocurrency"
      },
      "id": "cc2eb8d1-c42d-4f12-8801-1c4bbe43a274",
      "min_order_size": "0.000000000001000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000000001000000",
      "name": "Monero to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "XMR-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "DASH",
        "id": "c2c86423-aea7-4fbb-adb7-a452125a9541",
        "increment": "0.000000010000000000",
        "name": "Dash",
        "type": "cryptocurrency"
      },
      "id": "1461976e-a656-481a-af27-dc6f2980e967",
      "min_order_size": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "name": "Dash to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "DASH-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "BTG",
        "id": "d409b958-c9fe-4837-9bae-e7a8fd314aee",
        "increment": "0.000000010000000000",
        "name": "Bitcoin Gold",
        "type": "cryptocurrency"
      },
      "id": "a31d3fe3-38e6-4adf-ab4b-e303349f5ee4",
      "min_order_size": "0.000010000000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "name": "Bitcoin Gold to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "BTG-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "LSK",
        "id": "4fbc3184-0899-4987-b62c-9a976ebe21e5",
        "increment": "0.000000010000000000",
        "name": "Lisk",
        "type": "cryptocurrency"
      },
      "id": "2de36458-56cf-458d-b76a-6b3f61b2034c",
      "min_order_size": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "name": "Lisk to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "LSK-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "OMG",
        "id": "aec15954-7d0f-4adb-b370-5e78e8bf3f30",
        "increment": "0.000000000000000001",
        "name": "OmiseGO",
        "type": "cryptocurrency"
      },
      "id": "bab5ccb4-6729-416e-ac75-019d650016c9",
      "min_order_size": "0.000000000000000001",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000000000000001",
      "name": "OmiseGO to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "OMG-USD",
      "tradability": "untradable"
    },
    {
      "asset_currency": {
        "code": "DOGE",
        "id": "c6996ebc-2f9b-443a-b2c2-7ddf02e0ef3a",
        "increment": "0.000000010000000000",
        "name": "Dogecoin",
        "type": "cryptocurrency"
      },
      "id": "1ef78e1b-049b-4f12-90e5-555dcf2fe204",
      "min_order_size": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "name": "Dogecoin to US Dollar",
      "quote_currency": {
        "code": "USD",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar",
        "type": "fiat"
      },
      "symbol": "DOGE-USD",
      "tradability": "untradable"
    }
  ]
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.