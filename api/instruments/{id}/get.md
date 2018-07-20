# Grab a Single Instrument

This returns data for a single instrument by its internal id.

**URL** : `/instruments/{id}/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Path constraints**

    - {id} - UUID

**Query constraints**

    - nocache - boolean (optional)

**Request sample**

To get certain instruments by id:

```
curl -v https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/ \
   -H "Accept: application/json"
```

## Success Responses

**Condition** : You didn't mess up your HTTP headers?

**Code** : `200 OK`

**Content example** :

Grab an instrument:

```json
{
  "min_tick_size": null,
  "type": "stock",
  "splits": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/",
  "margin_initial_ratio": "0.5000",
  "url": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
  "quote": "https://api.robinhood.com/quotes/MSFT/",
  "tradability": "tradable",
  "bloomberg_unique": "EQ0010174300001000",
  "list_date": "1987-09-17",
  "name": "Microsoft Corporation - Common Stock",
  "symbol": "MSFT",
  "fundamentals": "https://api.robinhood.com/fundamentals/MSFT/",
  "state": "active",
  "country": "US",
  "day_trade_ratio": "0.2500",
  "tradeable": true,
  "maintenance_ratio": "0.2500",
  "id": "50810c35-d215-4866-9758-0ada4ac79ffa",
  "market": "https://api.robinhood.com/markets/XNAS/",
  "simple_name": "Microsoft"
}
```
