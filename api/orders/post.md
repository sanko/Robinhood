# Place an Equity Order

You wanna buy and sell stocks and ETFs? This is how!

**URL** : `/orders/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**
  
  - `account` - URL (required)
  - `instrument` - URL (required)
  - `quantity` - integer (required)
  - `symbol` - string used for verification (required)
  - `time_in_force` - `gfd` or `gtc` (required)
  - `trigger` - `immediate` or `stop` (required)
  - `type` - `limit` or `market` (required)
  - `price` - float (required; used for collar if `type` is `market`) 
  - `stop_price` - float (required if `trigger` is `stop`)
  - `side` - `buy` or `sell` (required)
  - `ref_id` - random v4 UUID
  - `isPreIpo` - boolean
  - `extended_hours` - boolean
  - `override_day_trade_checks` - boolean
  - `override_dtbp_checks` - boolean
  
**Data constraints example**

```json
{
  "account": "https://api.robinhood.com/accounts/9BT309AV/",
  "instrument": "https://api.robinhood.com/instruments/3a38d041-971b-4697-abf2-0954794928a6/",
  "price": "0.2813",
  "quantity": "1",
  "side": "buy",
  "symbol": "CYTX",
  "time_in_force": "gtc",
  "trigger": "immediate",
  "type": "limit"
}
```

**Request sample**

```
curl -v -X POST https://api.robinhood.com/orders/ \
   -H "Accept: application/json" \
   -H "Content-Type: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d '{"account":"https://api.robinhood.com/accounts/9BT309AV/","instrument":"https://api.robinhood.com/instruments/3a38d041-971b-4697-abf2-0954794928a6/","price":"0.2813","quantity":"1","side":"buy","symbol":"CYTX","time_in_force":"gtc","trigger":"immediate","type":"limit"}'
```

## Success Responses

**Condition** : All is well.

**Code** : `201 Created`

**Content example** : Response will be a json containing the full order object:

```json
{
  "updated_at": "2018-04-29T16:30:29.003255Z",
  "ref_id": null,
  "time_in_force": "gtc",
  "fees": "0.00",
  "cancel": "https://api.robinhood.com/orders/60d68da1-a876-43ff-9a58-3b1dc5736382/cancel/",
  "response_category": null,
  "id": "60d68da1-a876-43ff-9a58-3b1dc5736382",
  "cumulative_quantity": "0.00000",
  "stop_price": null,
  "reject_reason": null,
  "instrument": "https://api.robinhood.com/instruments/3a38d041-971b-4697-abf2-0954794928a6/",
  "state": "unconfirmed",
  "trigger": "immediate",
  "override_dtbp_checks": false,
  "type": "limit",
  "last_transaction_at": "2018-04-29T16:30:28.935217Z",
  "price": "0.28130000",
  "executions": [],
  "extended_hours": false,
  "account": "https://api.robinhood.com/accounts/9BT309AV/",
  "url": "https://api.robinhood.com/orders/60d68da1-a876-43ff-9a58-3b1dc5736382/",
  "created_at": "2018-04-29T16:30:28.935217Z",
  "side": "buy",
  "override_day_trade_checks": false,
  "position": "https://api.robinhood.com/positions/9BT309AV/3a38d041-971b-4697-abf2-0954794a28a6/",
  "average_price": null,
  "quantity": "1.00000"
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. the password is incorrect.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "non_field_errors": ["Unable to log in with provided credentials."]
}
```

Forget a field:

```json
{
    "non_field_errors": ["Market buy order requested, but no price provided."]
}
```

Try to buy a google of Google:

```json
{
	"quantity": ["Ensure that there are no more than 17 digits in total."]
}
```

Try to buy more than you can afford:

```json
{
	"detail": "You can only purchase 30 shares of MSFT."
}
```

Skim thouse millionths of a cent:

```json
{
	"price": ["Prices can't be more than 4 decimal places."]
}
```

Try to create an order on zero shares:

```json
{
	"quantity": ["Ensure this value is greater than 0."]
}
```