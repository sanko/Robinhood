# Find Out The Maximum Option Level Supported by Your Account

...and what needs to be fixed to move higher.

**URL** : `/options/suitability/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/options/suitability/ \
   -H "Accept: application/json"
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully grab info about options signup.

**Code** : `200 OK`

**Content example** :

```json
{
  "fields_that_need_update": [],
  "max_option_level": "option_level_3"
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
