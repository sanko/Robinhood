# Get Single Equity Position's Data by ID

Grab a position's data by ID.

**URL** : `/positions/{accountID}/{id}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**URL parameters**

    - `accountID` - your account string
    - `id` - UUID

**Request samples**

```
curl -v https://api.robinhood.com/positions/9BT309AV/2439c39f-c1ae-4f93-91a8-388c46c13891/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather position's data.

**Code** : `200 OK`

**Content example** :
```json
{
  "shares_held_for_stock_grants": "0.0000",
  "account": "https://api.robinhood.com/accounts/9BT309AV/",
  "pending_average_buy_price": "0.0000",
  "shares_held_for_options_events": "0.0000",
  "intraday_average_buy_price": "0.0000",
  "url": "https://api.robinhood.com/positions/9BT309AV/2439c39f-c1ae-4f93-91a8-388c46c13891/",
  "shares_held_for_options_collateral": "0.0000",
  "created_at": "2018-04-27T19:16:28.953600Z",
  "updated_at": "2018-04-27T20:07:17.154364Z",
  "shares_held_for_buys": "0.0000",
  "average_buy_price": "0.0000",
  "instrument": "https://api.robinhood.com/instruments/2439c39f-c1ae-4f93-91a8-388c46c13891/",
  "intraday_quantity": "0.0000",
  "shares_held_for_sells": "0.0000",
  "shares_pending_from_options_events": "0.0000",
  "quantity": "0.0000"
}
```

## Error Response

**Condition** : If this endpoint is called without having logged it, it will fail.

**Code** : `401 Unauthorized`

**Content example** : 

```json
{
  "detail": "Authentication credentials were not provided."
}
```
