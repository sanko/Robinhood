# Cancel a Buy or Sell Crypto Order

Cancel a Crypto order before it executes.

**URL** : `/orders/{id}/cancel/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - {id} - UUID

## Success Responses

**Condition** : Data provided is valid and watchlist is created.

**Code** : `200 OK`

**Content example** : Response will reflect back the updated information.:

```json
{
    "account_id": "...",
    "created_at": ,
    "cumulative_quantity": ,
    "currency_pair_id": ,
    "executions": [
        {
            "effective_price": "",
            "id": "",
            "quantity": "",
            "timestamp": ""
        }
    ],
    "id": "",
    "price": "",
    "quantity": "",
    "side": "",
    "state": "",
    "time_in_force": "",
    "type": "",
    "updated_at": ""
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. a name field is too long.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
}
```

## Notes

* Untested.