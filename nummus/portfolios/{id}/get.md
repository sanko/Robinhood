# Get a Single Crypto's Portfolio Information

Returns data on a single Crypto currency pair.

**URL** : `/portfolios/{id}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - {id} - UUID (for example, `3d961844-d360-45fc-989b-f6fca761d511`)

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call to `https://nummus.robinhood.com/portfolios/3d961844-d360-45fc-989b-f6fca761d511/`:

```json
{
  "account_id": ...
  "equity": ...,
  "market_value": ...,
  "previous_close": ...,
  "updated_at": ...,
  "extended_hours_equity": ...,
  "extended_hours_market_value": ...,
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.
* Untested.