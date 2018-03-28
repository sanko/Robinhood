# Complete a Password Reset

After you've initiated the process, complete it with this endpoint.

**URL** : `/password_reset/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "username": "[string]",
    "password": "[string]",
    "token": "[string]"
}
```

**Data examples**

The following must not be empty or null.

```json
{
    "username": "mike232",
    "password": "10CharsPls",
    "token": "defacedefacedefacefe-a-f-af01286fd-acef8"
}
```

**Request sample**

```
curl -v https://api.robinhood.com/password_reset/ \
   -H "Accept: application/json" \
   -d "username=mike232&password=10CharsPls&token=defacedefacedefacefe-a-f-af01286fd-acef8
```   

## Success Responses

**Condition** : Sucessfully changed your password.

**Code** : `200 OK`

**Content example** : 

```json
{

}
```

### Error Response

**Condition** : If this endpoint is called without auth headers.

**Code** : `400 Bad Request`

**Content example** :

```json
{
	"token": ["This field may not be blank."],
	"password": ["This field may not be blank."]
}
```

# Notes

* This endpoint is untested.