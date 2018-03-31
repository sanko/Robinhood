# Remove Attached Bank Account

Single out a bank account to grab info about.

**URL** : `/ach/relationships/{id}/unlink`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - {id} - UUID

**Request sample**

```
curl -v https://api.robinhood.com/ach/relationships/093cb71a-c15e-45cd-a5fb-dac83bcd9174/unlink/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \ 
   -X POST
```

## Success Responses

**Condition** : Data provided is valid.

**Code** : `200 OK`

**Content example** : Response will be a json dictionary:

```json
{
  "account": "https://api.robinhood.com/accounts/5QT72283/",
  "verification_method": "micro_deposits",
  "verify_micro_deposits": null,
  "url": "https://api.robinhood.com/ach/relationships/093cb71a-c15e-45cd-a5fb-dac83bcd9174/",
  "bank_account_nickname": "Bank of 'Merica",
  "created_at": "2015-12-31T20:22:20.095817Z",
  "bank_account_holder_name": "John Smith",
  "bank_account_number": "7963",
  "bank_account_type": "checking",
  "unlinked_at": "2017-01-12T21:34:18.926383Z",
  "initial_deposit": "0.00",
  "withdrawal_limit": 2951.09,
  "verified": true,
  "unlink": "https://api.robinhood.com/ach/relationships/093cb71a-c15e-45cd-a5fb-dac83bcd9174/unlink/",
  "bank_routing_number": "026009593",
  "id": "093cb71a-c15e-45cd-a5fb-dac83bcd9174"
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
