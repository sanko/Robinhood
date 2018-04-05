# Grab an Options Position by ID

Gather options data for a particular position.

**URL** : `/options/positions/{id}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - id - UUID

**Request sample**

```
curl -v https://api.robinhood.com/options/positions/d2ca6000-0d31-4360-8587-00ac098390ab/ \
   -H "Accept: application/json"
```

## Success Responses

**Condition** : You have access to options.

**Code** : `200 OK`

**Content example** : Response will be a json containing the data:

```json
{
  "intraday_average_open_price": "0.0000",
  "account": "https://api.robinhood.com/accounts/9BT309AV/",
  "intraday_quantity": "0.0000",
  "option": "https://api.robinhood.com/options/instruments/fd3a4c2e-559b-4509-a4dc-afdaa7d68625/",
  "created_at": "2018-04-02T11:22:09.192279Z",
  "updated_at": "2018-04-02T17:39:11.341765Z",
  "average_price": "0.0000",
  "chain_id": "9d527d01-cf28-4470-82d1-2766c7ae1ad5",
  "pending_expired_quantity": "0.0000",
  "pending_buy_quantity": "0.0000",
  "url": "https://api.robinhood.com/options/positions/d2ca6000-0d31-4360-8587-00ac098390ab/",
  "pending_sell_quantity": "0.0000",
  "chain_symbol": "OCUL",
  "type": "long",
  "id": "d2ca6000-0d31-4360-8587-00ac098390ab",
  "quantity": "0.0000"
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
