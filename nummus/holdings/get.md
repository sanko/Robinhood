# Get a List of Crypto Holdings

Returns a paginated list of cryptocoins you own.

**URL** : `/holdings/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
	"next": null,
	"previous": null,
	"results": [
		{	
			"id": "cccccccc-caaa-1123-ae42-86537acccae2",
			"currency_id": "7a04fe7a-e3a8-4a07-8c35-d0fec9f35569",
			"direct_quantity": "4.000",
			"marked_quantity": "4.000",
			"marked_cost_basis": 1.44333
		}
	]
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.
* Untested