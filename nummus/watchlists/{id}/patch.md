# Modify Crypto Watchlist

Add to or remove currency from a crypto watchlist.

**URL** : `/watchlists/{id}/`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

	- {id} - `id` of the particular watchlist. (UUID; for example, `cc0efa02-cfca-11e0-ae25-8cae28fccae2`)

**Data constraints**

```json
{
    "currency_pair_ids": ["[UUID], [UUID], ..."]
}
```

**Data examples**

A list of currency pairs is handed off. Note that this endpoint expects data to be in JSON.

```json
{
    "currency_pair_ids": [
        "7a04fe7a-e3a8-4a07-8c35-d0fec9f35569",
        "2f2b77c4-e426-4271-ae49-18d5cb296d3a"
    ]
}
```

## Success Responses

**Condition** : Data provided is valid and watchlist is created.

**Code** : `200 OK`

**Content example** : Response will reflect back the updated information:

```json
{
    "created_at": "2018-01-25T14:05:25.983259-05:00",
    "currency_pair_ids": [
        "7a04fe7a-e3a8-4a07-8c35-d0fec9f35569",
        "2f2b77c4-e426-4271-ae49-18d5cb296d3a",
    ],
    "id": "cc0efa02-cfca-11e0-ae25-8cae28fccae2",
    "name": "Default",
    "updated_at": "2018-02-01T12:16:50.526904-05:00"
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. a currency pair is too long.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "currency_pair_ids": [ "\"2f2b77c4-e426-4271-ae49-18d5cb296d3\" is not a valid UUID."]
}
```

## Notes

* Like the main watchlists, the default is named 'Default'.