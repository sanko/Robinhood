# Additional User Information

Data that doesn't fit in the basic profile gets jammed in here.

**URL** : `/user/additonal_info/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/user/additional_info/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
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