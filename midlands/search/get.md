# Search Robinhood With a Wide Net

This endpoint searches all of Robinhood for currency pairs, equity instruments, and category tags.

**URL** : `/search/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Query parameters**

    - `query` - The string to search for

**Request samples**

```
curl -v https://midlands.robinhood.com/search/?query=microsoft \
   -H "Accept: application/json"
```

## Success Responses

**Condition** : Sucessfully gather data.

**Code** : `200 OK`

**Content example** :

Here is the result for `https://midlands.robinhood.com/search/?query=bitcoin` without an auth token (for example, by navigating in a browser):

```json
{
  "instruments": [
    {
      "margin_initial_ratio": "0.5000",
      "rhs_tradability": "tradable",
      "id": "d71bfd66-93de-4e4c-ae58-a26c47582a3f",
      "market": "https://api.robinhood.com/markets/XNAS/",
      "simple_name": "Cboe Global Markets",
      "min_tick_size": null,
      "maintenance_ratio": "0.2500",
      "tradability": "tradable",
      "state": "active",
      "type": "stock",
      "tradeable": true,
      "fundamentals": "https://api.robinhood.com/fundamentals/CBOE/",
      "quote": "https://api.robinhood.com/quotes/CBOE/",
      "symbol": "CBOE",
      "day_trade_ratio": "0.2500",
      "splits": "https://api.robinhood.com/instruments/d71bfd66-93de-4e4c-ae58-a26c47582a3f/splits/",
      "tradable_chain_id": "ec5e90d8-f249-46b3-ba4f-4b90c73d08e2",
      "name": "Cboe Global Markets, Inc. Common Stock",
      "url": "https://api.robinhood.com/instruments/d71bfd66-93de-4e4c-ae58-a26c47582a3f/",
      "country": "US",
      "bloomberg_unique": "EQ0000000009875726",
      "list_date": "2010-06-15"
    }
  ],
  "currency_pairs": [
    {
      "quote_currency": {
        "code": "USD",
        "name": "US Dollar",
        "brand_color": "",
        "increment": "0.010000000000000000",
        "type": "fiat",
        "id": "1072fc76-1862-41ab-82c2-485837590762"
      },
      "tradability": "tradable",
      "asset_currency": {
        "code": "BTC",
        "name": "Bitcoin",
        "brand_color": "EA963D",
        "increment": "0.000000010000000000",
        "type": "cryptocurrency",
        "id": "d674efea-e623-4396-9026-39574b92b093"
      },
      "name": "Bitcoin to US Dollar",
      "min_order_size": "0.000010000000000000",
      "symbol": "BTC-USD",
      "max_order_size": "15.0000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "display_only": false,
      "id": "3d961844-d360-45fc-989b-f6fca761d511"
    },
    {
      "quote_currency": {
        "code": "USD",
        "name": "US Dollar",
        "brand_color": "",
        "increment": "0.010000000000000000",
        "type": "fiat",
        "id": "1072fc76-1862-41ab-82c2-485837590762"
      },
      "tradability": "tradable",
      "asset_currency": {
        "code": "BCH",
        "name": "Bitcoin Cash",
        "brand_color": "99C061",
        "increment": "0.000000010000000000",
        "type": "cryptocurrency",
        "id": "913a38ed-36f3-45fb-a967-fb6e30d4a7fb"
      },
      "name": "Bitcoin Cash to US Dollar",
      "min_order_size": "0.000010000000000000",
      "symbol": "BCH-USD",
      "max_order_size": "1.0000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "display_only": false,
      "id": "2f2b77c4-e426-4271-ae49-18d5cb296d3a"
    },
    {
      "quote_currency": {
        "code": "USD",
        "name": "US Dollar",
        "brand_color": "",
        "increment": "0.010000000000000000",
        "type": "fiat",
        "id": "1072fc76-1862-41ab-82c2-485837590762"
      },
      "tradability": "untradable",
      "asset_currency": {
        "code": "BTG",
        "name": "Bitcoin Gold",
        "brand_color": "",
        "increment": "0.000000010000000000",
        "type": "cryptocurrency",
        "id": "d409b958-c9fe-4837-9bae-e7a8fd314aee"
      },
      "name": "Bitcoin Gold to US Dollar",
      "min_order_size": "0.000010000000000000",
      "symbol": "BTG-USD",
      "max_order_size": "0.0000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "display_only": true,
      "id": "a31d3fe3-38e6-4adf-ab4b-e303349f5ee4"
    }
  ],
  "tags": [
    {
      "canonical_examples": "",
      "description": "",
      "instruments": [
        "https://api.robinhood.com/instruments/5d78ddf6-9de2-4947-a794-0e1884694cf1/"
      ],
      "name": "Bitcoin",
      "slug": "bitcoin"
    }
  ]
}
```

To demonstrate searching for equity instruments, let's try `https://midlands.robinhood.com/search/?query=microsoft` (without an auth token because I'm lazy):

```json
{
  "instruments": [
    {
      "margin_initial_ratio": "0.5000",
      "rhs_tradability": "tradable",
      "id": "50810c35-d215-4866-9758-0ada4ac79ffa",
      "market": "https://api.robinhood.com/markets/XNAS/",
      "simple_name": "Microsoft",
      "min_tick_size": null,
      "maintenance_ratio": "0.2500",
      "tradability": "tradable",
      "state": "active",
      "type": "stock",
      "tradeable": true,
      "fundamentals": "https://api.robinhood.com/fundamentals/MSFT/",
      "quote": "https://api.robinhood.com/quotes/MSFT/",
      "symbol": "MSFT",
      "day_trade_ratio": "0.2500",
      "splits": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/",
      "tradable_chain_id": "1ac71e01-0677-42c6-a490-1457980954f8",
      "name": "Microsoft Corporation Common Stock",
      "url": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "country": "US",
      "bloomberg_unique": "EQ0010174300001000",
      "list_date": "1987-09-17"
    }
  ],
  "currency_pairs": [],
  "tags": []
}
```

## Error Response

**Condition** : If you fail to search for anything.

**Code** : `400 Bad Request`

**Content example** :

```json
{
    "detail": "Missing 'query' search parameter."
}
```