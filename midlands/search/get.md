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

If you search without logging in, only `instruments` and `tags` are returned. Here is the result for `https://midlands.robinhood.com/search/?query=bitcoin` without an auth token (for example, by navigating in a browser): 

```json
{
  "instruments": [],
  "tags": [
    {
      "slug": "bitcoin",
      "name": "Bitcoin",
      "description": "",
      "instruments": [
        "https://api.robinhood.com/instruments/f3acdd2f-6580-4c75-a69c-81481cc4c235/",
        "https://api.robinhood.com/instruments/5d78ddf6-9de2-4947-a794-0e1884694cf1/",
        "https://api.robinhood.com/instruments/5db9eb7a-b770-47af-bbdf-c4ff26f2f0d2/"
      ]
    }
  ]
}
```

And these are the results returned by the same URL when accessed by an authorized client:

```json
{
  "instruments": [],
  "currency_pairs": [
    {
      "quote_currency": {
        "code": "USD",
        "type": "fiat",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar"
      },
      "tradability": "tradable",
      "asset_currency": {
        "code": "BTC",
        "type": "cryptocurrency",
        "id": "d674efea-e623-4396-9026-39574b92b093",
        "increment": "0.000000010000000000",
        "name": "Bitcoin"
      },
      "name": "Bitcoin to US Dollar",
      "min_order_size": "0.000010000000000000",
      "symbol": "BTC-USD",
      "max_order_size": "5.0000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "display_only": false,
      "id": "3d961844-d360-45fc-989b-f6fca761d511"
    },
    {
      "quote_currency": {
        "code": "USD",
        "type": "fiat",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar"
      },
      "tradability": "untradable",
      "asset_currency": {
        "code": "BCH",
        "type": "cryptocurrency",
        "id": "913a38ed-36f3-45fb-a967-fb6e30d4a7fb",
        "increment": "0.000000010000000000",
        "name": "Bitcoin Cash"
      },
      "name": "Bitcoin Cash to US Dollar",
      "min_order_size": "0.000010000000000000",
      "symbol": "BCH-USD",
      "max_order_size": "0.0000000000000000",
      "min_order_quantity_increment": "0.000000010000000000",
      "min_order_price_increment": "0.010000000000000000",
      "display_only": true,
      "id": "2f2b77c4-e426-4271-ae49-18d5cb296d3a"
    },
    {
      "quote_currency": {
        "code": "USD",
        "type": "fiat",
        "id": "1072fc76-1862-41ab-82c2-485837590762",
        "increment": "0.010000000000000000",
        "name": "US Dollar"
      },
      "tradability": "untradable",
      "asset_currency": {
        "code": "BTG",
        "type": "cryptocurrency",
        "id": "d409b958-c9fe-4837-9bae-e7a8fd314aee",
        "increment": "0.000000010000000000",
        "name": "Bitcoin Gold"
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
      "slug": "bitcoin",
      "name": "Bitcoin",
      "description": "",
      "instruments": [
        "https://api.robinhood.com/instruments/f3acdd2f-6580-4c75-a69c-81481cc4c235/",
        "https://api.robinhood.com/instruments/5d78ddf6-9de2-4947-a794-0e1884694cf1/",
        "https://api.robinhood.com/instruments/5db9eb7a-b770-47af-bbdf-c4ff26f2f0d2/"
      ]
    }
  ]
}
```

To demonstrate searching for equity instruments, let's try `https://midlands.robinhood.com/search/?query=microsoft` (without an auth token because I'm lazy):

```json
{
  "instruments": [
    {
      "min_tick_size": null,
      "splits": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/",
      "margin_initial_ratio": "0.5000",
      "url": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "quote": "https://api.robinhood.com/quotes/MSFT/",
      "tradability": "tradable",
      "bloomberg_unique": "EQ0010174300001000",
      "id": "50810c35-d215-4866-9758-0ada4ac79ffa",
      "symbol": "MSFT",
      "fundamentals": "https://api.robinhood.com/fundamentals/MSFT/",
      "state": "active",
      "simple_name": "Microsoft",
      "country": "US",
      "maintenance_ratio": "0.2500",
      "day_trade_ratio": "0.2500",
      "tradeable": true,
      "type": "stock",
      "list_date": "1987-09-17",
      "market": "https://api.robinhood.com/markets/XNAS/",
      "name": "Microsoft Corporation - Common Stock"
    },
    {
      "min_tick_size": null,
      "splits": "https://api.robinhood.com/instruments/74afdd4e-9ddb-4495-af9a-5c6920522182/splits/",
      "margin_initial_ratio": "0.5000",
      "url": "https://api.robinhood.com/instruments/74afdd4e-9ddb-4495-af9a-5c6920522182/",
      "quote": "https://api.robinhood.com/quotes/ANET/",
      "tradability": "tradable",
      "bloomberg_unique": "EQ0000000008581976",
      "id": "74afdd4e-9ddb-4495-af9a-5c6920522182",
      "symbol": "ANET",
      "fundamentals": "https://api.robinhood.com/fundamentals/ANET/",
      "state": "active",
      "simple_name": "Arista",
      "country": "US",
      "maintenance_ratio": "0.2500",
      "day_trade_ratio": "0.2500",
      "tradeable": true,
      "type": "stock",
      "list_date": "2014-06-06",
      "market": "https://api.robinhood.com/markets/XNYS/",
      "name": "Arista Networks"
    }
  ],
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