# Get List of Activated Crypto Acounts

Gather a list of activated crypto accounts.

**URL** : `/activations/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Responses

**Condition** : Data provided is valid and watchlist is created.

**Code** : `200 OK`

**Content example** : Response will reflect back the updated information:

```json
{
	"next": null,
	"previous": null,
	"results": [
		{
			"id": ...
			"user_id": "5Q3492"
			"state": ...
			"type": ...
			"first_name": "Jeff",
			"last_name": "Smith",
			"email": "jsmith2958@hotmail.com",
			"created_at": ...
			"updated_at": ...
		}
	]
}

```

## Notes

* Untested.