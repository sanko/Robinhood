# Get a List of Crypto Portfolios

Returns data on a all your Crypto currency portfolios.

**URL** : `/portfolios/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call to `https://nummus.robinhood.com/portfolios/`:

```json
{
	"next": null,
	"previous": null,
	"results": [
	]
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.
* Untested.