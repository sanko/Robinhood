# Request a Password Reset

If you forget your password, try this.

**URL** : `/password_reset/request/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "email": "[string]"
}
```

**Data examples**

The following must not be empty or null.

```json
{
    "email": "robinhood@example.com"
}
```

**Request sample**

```
curl -v https://api.robinhood.com/password_reset/request/ \
   -H "Accept: application/json" \
   -d "email=robinhood@example.com"
```   

## Success Responses

**Condition** : Data address is tied to an account. Meanwhile, a message is being sent to the address.

**Code** : `200 OK`

**Content example** : 

```json
{
    "link": "https://api.robinhood.com/password_reset/",
    "detail": "Email with password reset instructions sent!"
}
```

### Error Response

**Condition** : If this endpoint is called without auth headers.

**Code** : `400 Bad Request`

**Content example** :

```json
{
	"non_field_errors": ["Could not find an account using that email address."]
}
```
