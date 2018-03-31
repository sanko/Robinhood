# Create Crypto Watchlist

Create a new crypto watchlist.

**URL** : `/watchlists/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "name": "[1 to 30 chars]"
}
```

**Data examples**

The name must not be empty or null.

```json
{
    "name": "Jeff"
}
```

## Success Responses

**Condition** : Data provided is valid and watchlist is created.

**Code** : `200 OK`

**Content example** : Response will reflect back the updated information.:

```json
{
    "name": "Jeff"
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. a name field is too long.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
}
```

## Notes

* Like the main watchlists, the default is named 'Default'.
* Untested.