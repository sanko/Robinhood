# Gather Even More Personal User Information

Grab personal data like date of birth, marital status, home address, and the last four diggits of your SSN.

**URL** : `/user/basic_info/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/user/basic_info/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather basic user data.

**Code** : `200 OK`

**Content example** :

```json
{
	"phone_number": "13458675309",
	"city": "Middleville",
	"number_dependents": 0,
	"citizenship": "US",
	"updated_at": "2018-01-09T15:23:32.468739Z",
	"marital_status": "single",
	"zipcode": "39982",
	"country_of_residence": "US",
	"state": "ND",
	"date_of_birth": "1997-02-10",
	"user": "https://api.robinhood.com/user/",
	"address": "15 West Ridge Road",
	"tax_id_ssn": "9726"
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