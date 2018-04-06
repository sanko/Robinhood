# Gather List of Options Orders

Gather all options orders, legs, etc. with this endpoint.

**URL** : `/options/orders/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - cursor - paginated list position (optional)
    - updated_at[gte] - ISO Date (optional)
    - updated_at[lte] - ISO Date (optional)

**Request sample**

```
curl -v https://api.robinhood.com/options/orders/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"   
```

## Success Responses

**Condition** : You have access to options.

**Code** : `200 OK`

**Content example** : Response will be a json containing the orders as a paginated list:

```json
{
  "previous": null,
  "results": [
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
    },
    {
      "direction": "credit",
      "premium": "10.00000000",
      "time_in_force": "gfd",
      "processed_premium": "0.0000",
      "updated_at": "2018-03-02T12:41:44.12365Z",
      "created_at": "2018-03--9T13:56:17.685383Z",
      "pending_quantity": "0.00000",
      "ref_id": "a836e7fd-8d35-4a0a-9845-28d814acb24e",
      "state": "cancelled",
      "processed_quantity": "0.00000",
      "id": "dec7ea45-c504-426d-8b28-9cbf8f357c82",
      "price": "0.10000000",
      "cancel_url": null,
      "trigger": "immediate",
      "chain_id": "8b581487-2790-4ac6-8787-dd993c488158",
      "response_category": "success",
      "chain_symbol": "DRN",
      "legs": [
        {
          "option": "https://api.robinhood.com/options/instruments/c14c663a-25d8-49c5-bfe6-09ee3681d083/",
          "side": "sell",
          "position_effect": "close",
          "id": "ded3327e-16a2-4612-a979-ad3490298521",
          "executions": [],
          "ratio_quantity": 1
        }
      ],
      "type": "limit",
      "canceled_quantity": "1.00000",
      "quantity": "1.00000"
    },
    {
      "direction": "credit",
      "premium": "15.00000000",
      "time_in_force": "gfd",
      "processed_premium": "0.0000",
      "updated_at": "2018-03-30T11:43:30.171211Z",
      "created_at": "2018-03-29T15:12:43.149873Z",
      "pending_quantity": "0.00000",
      "ref_id": "589079c8-3fe4-4ac6-926a-99310acb83a2",
      "state": "cancelled",
      "processed_quantity": "0.00000",
      "id": "135346aa-dbcd-4450-b10b-e309ac893100",
      "price": "0.15000000",
      "cancel_url": null,
      "trigger": "immediate",
      "chain_id": "8b581487-2790-4ac6-8787-dd993c488158",
      "response_category": "success",
      "chain_symbol": "DRN",
      "legs": [
        {
          "option": "https://api.robinhood.com/options/instruments/c14c663a-25d8-49c5-bfe6-09ee3681d083/",
          "side": "sell",
          "position_effect": "close",
          "id": "abc903ac-93f6-43ff-bf40-adc503918098",
          "executions": [],
          "ratio_quantity": 1
        }
      ],
      "type": "limit",
      "canceled_quantity": "1.00000",
      "quantity": "1.00000"
    },
    {
      "direction": "debit",
      "premium": "15.00000000",
      "time_in_force": "gfd",
      "processed_premium": "6.00000000000000000",
      "updated_at": "2018-03-29T15:09:34.955766Z",
      "created_at": "2018-03-29T15:09:34.016416Z",
      "pending_quantity": "0.00000",
      "ref_id": "393acaaa-4348-4986-9b3f-399837acedff",
      "state": "filled",
      "processed_quantity": "1.00000",
      "id": "982e6668-da54-4556-8720-3299aef77ea7",
      "price": "0.15000000",
      "cancel_url": null,
      "trigger": "immediate",
      "chain_id": "8b581487-2790-4ac6-8787-d39811039487",
      "response_category": null,
      "chain_symbol": "DRN",
      "legs": [
        {
          "option": "https://api.robinhood.com/options/instruments/c14c663a-25d8-49c5-bfe6-09ee3681d083/",
          "side": "buy",
          "position_effect": "open",
          "id": "aff39a32-3282-47e2-8338-12de83746291",
          "executions": [
            {
              "timestamp": "2018-02-20T15:03:34Z",
              "price": "0.06000000",
              "settlement_date": "2018-04-02",
              "id": "42467af3-1d17-4fa6-82cd-13098740afd4",
              "quantity": "1.00000"
            }
          ],
          "ratio_quantity": 1
        }
      ],
      "type": "limit",
      "canceled_quantity": "0.00000",
      "quantity": "1.00000"
    }
  ],
  "next": null
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
