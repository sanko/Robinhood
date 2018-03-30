# Add a ACH Relationship

Add a new bank accounts to Robinhood.

**URL** : `/ach/relationships/{id}/micro_deposits/verify/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - {id} - UUID

**Data constraints**

  - first_amount_cents: integer
  - second_amount_cents: integer

**Data examples**

The following must not be empty or null.

```json
{
    "first_amount_cents": 54,
    "second_amount_cents": 44
}
```

**Request sample**

```
curl -v https://api.robinhood.com/ach/relationships/b9afaac5-c15e-45cd-a5fb-09952c8ab388/micro_deposits/verify/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d "first_amount_cents=54& \
    second_amount_cents=44"
```

## Success Responses

**Condition** : Data provided is valid.

**Code** : `200 OK`

**Content example** : Response will be a json containing the verified ACH relationship:

```json
{
  "account": "https://api.robinhood.com/accounts/5QT72283/",
  "verification_method": "micro_deposits",
  "verify_micro_deposits": null,
  "url": "https://api.robinhood.com/ach/relationships/b9afaac5-c15e-45cd-a5fb-09952c8ab388/",
  "bank_account_nickname": "Bank of 'Merica",
  "created_at": "2015-12-31T20:22:20.095817Z",
  "bank_account_holder_name": "John Smith",
  "bank_account_number": "7963",
  "bank_account_type": "checking",
  "unlinked_at": null,
  "initial_deposit": "0.00",
  "withdrawal_limit": 2951.09,
  "verified": true,
  "unlink": "https://api.robinhood.com/ach/relationships/b9afaac5-c15e-45cd-a5fb-09952c8ab388/unlink/",
  "bank_routing_number": "026009593",
  "id": "b9afaac5-c15e-45cd-a5fb-09952c8ab388"
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. the password is incorrect.

**Code** : `400 BAD REQUEST`

**Content example** :

When you aren't even logged in:

```json
{
    "non_field_errors": ["Unable to log in with provided credentials."]
}
```

## Notes

  * Untested