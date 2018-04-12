# Gather Account ID

Find the account's ID and attached username.

**URL** : `/user/id/`

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
	"url": "https://api.robinhood.com/user/",
	"username": "jose339",
	"id": "34afe599-5cfe-4f56-969d-5b34ad06af69"
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