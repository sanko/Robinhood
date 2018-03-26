# Log out of an Account (old skool)

Force the old skool auth token to expire.

**URL** : `/api-token-logout/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Request sample**

```
curl -v https://api.robinhood.com/api-token-logout/ \
   -H "Accept: application/json" \
   -H "Authorization: Token 9d0f284acd10d829b203d6fa4ff2f4246462ac5c" \
   -d ""
```

## Success Responses

**Condition** : Data provided is valid and watchlist is created.

**Code** : `200 OK`

**Content example** : *On success, no content is returned.*

### Error Response

**Condition** : If this endpoint is called without auth headers.

**Code** : `401 Unauthorized`

**Content example** :

```json
{
    "detail": "Authentication credentials were not provided."
}
```

## Notes

* This forces all clients logged in with the old skool token to log out.