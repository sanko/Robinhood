# OAuth2

Log in! Stay logged in!

**URL** : `/oauth2/token/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Contents restraints**

	- `refresh_token` - provided by API server on log in or migration
	- `grant_type`
	- `scope`
	- `client_id`
	- `username`
	- `password`
	- `mfa_code`
	- `backup_code`

**Request sample**

Refreshing token.

```
curl -v https://api.robinhood.com/oauth2/token/ \
   -H "Accept: application/json" \
   -d "refresh_token=LlndoeoaAmOnedaoeoMODaeiomDWTeo&grant_type=refresh_token&scope=internal&client_id=[secret]"
```   

## Success Responses

**Condition** : Everything is cool.

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
