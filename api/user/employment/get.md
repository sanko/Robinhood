# User's Employment Information

Employment data includes where the user works and how long they've worked there.

**URL** : `/user/employment/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/user/employment/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather basic user data.

**Code** : `200 OK`

**Content example** :

```json
{
    "employer_zipcode": "",
    "employment_status": "employed",
    "employer_address": "",
    "updated_at": "2018-04-02T11:19:32.469853Z",
    "employer_name": "NA",
    "user": "https://api.robinhood.com/user/",
    "years_employed": 7,
    "employer_state": "",
    "employer_city": "",
    "occupation": "NA"
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