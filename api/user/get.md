# Gather Basic Account Information

Grab very basic info about your user account.

**URL** : `/user/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/user/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather basic user data.

**Code** : `200 OK`

**Content example** :

```json
{
	"username": "jose339",
	"first_name": "Josette",
	"last_name": "Jones",
	"id_info": "https://api.robinhood.com/user/id/",
	"url": "https://api.robinhood.com/user/",
	"email_verified": true,
	"created_at": "2018-03-01T15:12:42.678442Z",
	"basic_info": "https://api.robinhood.com/user/basic_info/",
	"email": "josettejones324559@gmail.com",
	"investment_profile": "https://api.robinhood.com/user/investment_profile/",
	"id": "34afe599-5cfe-4f56-969d-5b34ad06af69",
	"international_info": "https://api.robinhood.com/user/international_info/",
	"employment": "https://api.robinhood.com/user/employment/",
	"additional_info": "https://api.robinhood.com/user/additional_info/"
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