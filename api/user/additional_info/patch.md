# Partially Update a User's Additional Info

Use this when the user needs to update a part of the additional info.

**URL** : `/user/additional_info/`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

Update any of the fields with new data. All are optional.

  - `security_affiliated_firm_relationship` - Boolean
  - `security_affiliated_employee` - Boolean
  - `security_affiliated_address` - String
  - `object_to_disclosure` - Boolean
  - `control_person` - Boolean,
  - `stock_loan_consent_status` - `consented` or `null`
  - `sweep_consent` - Boolean
  - `control_person_security_symbol` - String
  - `security_affiliated_firm_name` - String
  - `security_affiliated_person_name` - String

**Request sample**

```
curl -v https://api.robinhood.com/user/additional_info/ \
   -X PATCH
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
   -d "{\"sweep_consent\":false}"
```

## Success Responses

**Condition** : Sucessfully gather basic user data.

**Code** : `200 OK`

**Content example** :

```json
{
    "security_affiliated_firm_relationship": "NA",
    "security_affiliated_employee": false,
    "security_affiliated_address": "",
    "object_to_disclosure": false,
    "updated_at": "2016-02-17T01:38:16.593215Z",
    "control_person": false,
    "stock_loan_consent_status": "consented",
    "sweep_consent": true,
    "user": "https://api.robinhood.com/user/",
    "control_person_security_symbol": "",
    "security_affiliated_firm_name": "NA",
    "security_affiliated_person_name": "NA"
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