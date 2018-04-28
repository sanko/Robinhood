# Gather Equity Order by ID

Grab an order by id.

**URL** : `/orders/{id}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**URL parameters**

    - `id` - UUID of instrument

**Request samples**

```
curl -v https://api.robinhood.com/orders/b7efac13-81d6-460c-8496-7925a3d10f00/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather order's data.

**Code** : `200 OK`

**Content example** :

```json
{
  "updated_at": "2018-04-27T19:20:49.638788Z",
  "ref_id": "be3b41f5-623a-498b-9b04-847e26634042",
  "time_in_force": "gfd",
  "fees": "0.00",
  "cancel": null,
  "response_category": "success",
  "id": "b7efac13-81d6-460c-8496-7925a3d10f00",
  "cumulative_quantity": "3.00000",
  "stop_price": null,
  "reject_reason": null,
  "instrument": "https://api.robinhood.com/instruments/0e781ad3-491d-46c8-99b9-4046d919450a/",
  "state": "filled",
  "trigger": "immediate",
  "override_dtbp_checks": false,
  "type": "market",
  "last_transaction_at": "2018-04-27T19:20:49.238000Z",
  "price": "0.97630000",
  "executions": [
    {
      "timestamp": "2018-04-27T19:20:49.238000Z",
      "price": "0.92993400",
      "settlement_date": "2018-05-01",
      "id": "c6985dab-6d0f-46ff-81fd-74038781e2c3",
      "quantity": "3.00000"
    }
  ],
  "extended_hours": false,
  "account": "https://api.robinhood.com/accounts/9BT309AV/",
  "url": "https://api.robinhood.com/orders/b7efac13-81d6-460c-8496-7925a3d10f00/",
  "created_at": "2018-04-27T19:20:49.024469Z",
  "side": "buy",
  "override_day_trade_checks": false,
  "position": "https://api.robinhood.com/positions/9BT309AV/0e781ad3-491d-46c8-99b9-4046d919450a/",
  "average_price": "0.92990000",
  "quantity": "3.00000"
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
