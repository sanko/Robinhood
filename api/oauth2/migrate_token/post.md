# Migrate Old Skool Auth Token to OAuth2

Until the system is opened up to everyone, this will be the best/only way to move to an OAuth2 type token.

This token will be given an 'internal' scope and will be seen as an official client with full access to the account which is less than ideal but thus is the nature of a quick hack.

**URL** : `/oauth2/migrate_token/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Request sample**

```
curl -v https://api.robinhood.com/oauth2/migrate_token/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d ""
```   

## Success Responses

**Condition** : Sucessfully migrated your token.

**Code** : `200 OK`

**Content example** : 

```json
{
    "token_type": "Bearer",
    "access_token": "9Lg%WiectYtobuiewceIVUnhjiBGLUIeytekLBGJKDHGfvhjkfkuggbusfhukewrygfubasd",
    "expires_in": 300,
    "refresh_token": "BKLtvuglkYUV67VIbtuiE5cyFVHwerCWRT",
    "scope": "internal"
}
```
