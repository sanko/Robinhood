# List Crypto Orders

Get a paginated list of crypto orders.

**URL** : `/orders/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Parameter constraints**

```json
{
    "cursor": optional string
}
```


## Success Responses

**Condition** : A list of orders is returned.

**Code** : `200 OK`

**Content example** :

```json
{
    "next": null,
    "prev": null,
    "results": [

    ]
}
```

## Notes

* Untested.