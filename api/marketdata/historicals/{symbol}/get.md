# Grab Historical Quotes for Stocks and ETFs

The past is the present.

**URL** : `/marketdata/historicals/{symbol}/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**URL parameters**

    - symbol - ticker symbol

**Query constraints**

    - interval - `5minute`, `10minute`, `hour`, `day`, `week`, or `month` (required)
    - span - `day`, `week`, `year`, `5year`, `10year` (optional)
    - bounds - `regular`, `extended`, or `trading` (optional)

**Request sample**

```
curl -v https://api.robinhood.com/marketdata/historicals/MSFT/?interval=hour \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : The instrument is listed and historical data was returned.

**Code** : `200 OK`

**Content example** : Response will be a json containing the data:

```json
{
  "results": [
    {
      "quote": "https://api.robinhood.com/quotes/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "symbol": "MSFT",
      "interval": "hour",
      "span": "week",
      "bounds": "regular",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "historicals": [
        {
          "begins_at": "2018-04-12T13:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-12T14:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-12T15:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-12T16:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-12T17:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-12T18:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-13T13:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-13T14:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-13T15:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-13T16:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-13T17:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-13T18:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-16T13:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-16T14:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-16T15:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-16T16:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-16T17:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-16T18:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-17T13:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-17T14:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-17T15:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-17T16:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-17T17:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-17T18:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-18T13:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-18T14:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-18T15:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-18T16:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-18T17:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        },
        {
          "begins_at": "2018-04-18T18:30:00Z",
          "open_price": "96.4400",
          "close_price": "96.4400",
          "high_price": "96.4400",
          "low_price": "96.4400",
          "volume": 0,
          "session": "reg",
          "interpolated": true
        }
      ]
    }
  ]
}
```

## Error Response

**Condition** : If provided data is invalid.

**Code** : `400 BAD REQUEST`

**Content example** :

If you forget to pass an `interval` parameter:

```json
{
    "interval": ["This field is required."]
}
```

If you forget to pass an bad value to a parameter:

```json
{
    "bounds => ["\\"fun\\" is not a valid choice."],
    "non_field_errors": ["span \\"year\\" is not valid with bounds \\"fun\\"."]
}
```
