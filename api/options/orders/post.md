# Place a new Options Order

Buy, sell, long, short, you know what to do.

**URL** : `/options/orders/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**
  
Everything is required.

  - `account` - URL
  - `direction` - `debit` or `credit`
  - `legs` - list of objects each containing the following:
    - `option` - URL
    - `position_effect` - `open` or `close`
    - `ratio_quantity` - ratio spread
    - `side` - `buy` or `sell`
  - `override_day_trade_checks` - boolean
  - `override_dtbp_checks` - boolean
  - `price` - per contract price
  - `quantity` - number of contracts
  - `ref_id` - random v4 UUID
  - `time_in_force` - `gfd` or `gtc`
  - `type` - `limit` or `market`
  - `trigger` - `immediate`

**Data constraints example**

```json
{
  "account": "https://api.robinhood.com/accounts/9BT309AV/",
  "direction": "debit",
  "legs": [
    {
      "option": "https://api.robinhood.com/options/instruments/75d802da-b5a3-4554-a623-21f5683487e2/",
      "position_effect": "open",
      "ratio_quantity": 1,
      "side": "buy"
    }
  ],
  "override_day_trade_checks": false,
  "override_dtbp_checks": false,
  "price": 0.05,
  "quantity": 1,
  "ref_id": "aaccaacc-c0c5-4618-c0c5-3618c0c53618",
  "time_in_force": "gfd",
  "trigger": "immediate",
  "type": "limit"
}
```

**Request sample**

```
curl -v -X POST https://api.robinhood.com/options/orders/ \
   -H "Accept: application/json" \
   -H "Content-Type: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d '{"account":"https://api.robinhood.com/accounts/9BT309AV/","direction":"debit","legs":[{"option":"https://api.robinhood.com/options/instruments/75d802da-b5a3-4554-a623-21f5683487e2/","position_effect":"open","ratio_quantity":1,"side":"buy"}],"override_day_trade_checks":false,"override_dtbp_checks":false,"price":0.05,"quantity":1,"ref_id":"aaccaacc-c0c5-4618-c0c5-3618c0c53618","time_in_force":"gfd","trigger":"immediate","type":"limit"}'
```

## Success Responses

**Condition** : You have access to options.

**Code** : `201 Created`

**Content example** : Response will be a json containing the full order object:

```json
{
  "direction": "debit",
  "premium": "5.00000000",
  "time_in_force": "gfd",
  "processed_premium": "0.0000",
  "updated_at": "2018-04-06T16:29:37.760428Z",
  "created_at": "2018-04-06T16:29:37.760380Z",
  "pending_quantity": "1.00000",
  "ref_id": "c0c53618-c0c5-4618-c0c5-3618c0c53618",
  "state": "unconfirmed",
  "processed_quantity": "0.00000",
  "id": "0616367b-3fdd-422f-a69e-009afcb89aee",
  "price": "0.05000000",
  "cancel_url": "https://api.robinhood.com/options/orders/0616367b-3fdd-422f-a69e-009afcb89aee/cancel/",
  "trigger": "immediate",
  "chain_id": "13c874dc-3527-4339-853d-2e2fb5132c05",
  "response_category": null,
  "chain_symbol": "SMCI",
  "legs": [
    {
      "option": "https://api.robinhood.com/options/instruments/75d802da-b5a3-4554-a623-21f5683487e2/",
      "side": "buy",
      "position_effect": "open",
      "id": "beae83c3-4e81-417b-9ea9-dcbaac3f0eb2",
      "executions": [],
      "ratio_quantity": 1
    }
  ],
  "type": "limit",
  "canceled_quantity": "0.00000",
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

Royaly fuck up what you send and get this:

```json
{
    detail => "This order introduces infinite risk."
}
```

Attempt to buy into credit:

```json
{
    detail => "This is an invalid direction for a buy-order."
}
```

Try to send a price that didn't match for the price. Like, 5 cent increments on options below $3:

```json
{ 
    detail => "Price does not satisfy the min tick value."
}
```

Send a buy order with `type` set to `market`:

```json
{ 
    detail => "We don't support market orders that include buys."
}
```
