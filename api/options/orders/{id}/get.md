# Gather Data on a Single Options Order

Gather information about a single options order by id.

**URL** : `/options/orders/{id}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - id - UUID

**Request sample**

```
curl -v https://api.robinhood.com/options/orders/a0b99a7a-150b-4ea9-afc8-a12083190acd/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : You have access to options.

**Code** : `200 OK`

**Content example** : Response will be a json containing the order:

```json
{
  "direction": "credit",
  "premium": "10.00000000",
  "time_in_force": "gfd",
  "processed_premium": "0.0000",
  "updated_at": "2018-02-01T20:61:43.286021Z",
  "created_at": "2018-02-01T16:75:20.303723Z",
  "pending_quantity": "0.00000",
  "ref_id": "2eea8ab6-edbe-4cdd-b20c-a21a3b44a6db",
  "state": "cancelled",
  "processed_quantity": "0.00000",
  "id": "a0b99a7a-150b-4ea9-afc8-a12083190acd",
  "price": "0.10000000",
  "cancel_url": null,
  "trigger": "immediate",
  "chain_id": "8b581487-2790-4ac6-8787-dd993c488158",
  "response_category": null,
  "chain_symbol": "DRN",
  "legs": [
    {
      "option": "https://api.robinhood.com/options/instruments/c14c663a-25d8-49c5-bfe6-09ee3681d083/",
      "side": "sell",
      "position_effect": "close",
      "id": "ae71bb2a-488a-42c2-968e-de3f62ccb76b",
      "executions": [],
      "ratio_quantity": 1
    }
  ],
  "type": "limit",
  "canceled_quantity": "1.00000",
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

