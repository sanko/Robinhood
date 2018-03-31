# Create Crypto Account

Create or activate a new crypto account.

**URL** : `/activations/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "user_id": "[string]",
    "type" : "new_account" or "reactivation",
    "first_name": "[string]",
    "last_name": "[string]",
    "email": "[string]"
}
```

**Data examples**

The following must not be empty or null.

```json
{
    "first_name": "Jeff",
    "last_name": "Smith",
    "email": "jsmith2958@hotmail.com",
    "type": "new_account",
    "user_id": "5Q3492"
}
```

## Success Responses

**Condition** : Data provided is valid and watchlist is created.

**Code** : `200 OK`

**Content example** : Response will reflect back the updated information:

```json
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

* Untested.