# Fully Update a User's Employment Information

Use this when the user needs to update their employment status.

**URL** : `/user/employment/`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

Update these fields with new data. All are required.

  - `employer_zipcode`
  - `employment_status`
  - `employer_address`
  - `employer_name`
  - `years_employed`
  - `employer_state`
  - `employer_city`
  - `occupation`

**Request sample**

```
curl -v https://api.robinhood.com/user/investment_profile/ \
   -X PUT
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
   -d "{ /
    \"employer_zipcode\": \"\", /
    \"employment_status\": \"employed\", /
    \"employer_address\": \"\", /
    \"employer_name\": \"NA\", /
    \"years_employed\": 25, /
    \"employer_state\": \"\", /
    \"employer_city\": \"\", /
    \"occupation\": \"NA\" /
}"
```

## Success Responses

**Condition** : Sucessfully store employment data.

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
    "years_employed": 25,
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