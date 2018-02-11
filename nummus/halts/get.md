# Get a List of Halted Currencies

Returns a list of halted currencies.

**URL** : `/halts/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - cursor - paginated list progress
    - active - boolean value; return only halts that are current

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call to `https://nummus.robinhood.com/halts/`:

```json
{
	"next": null,
	"previous": null,
	"results": [ ]
}
```

### Halt Data

Each halt contains the following data:

```json
{
	"id": ...,
	"state": ...,
	"reason_code": ...,
	"start_at": ...,	
	"ends_at": ...,
	"reason": ...,
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.
* Untested. ...service isn't active yet so no halts reported.