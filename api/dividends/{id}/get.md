# Gather Paginated List of Relevant Dividends

Grab the list of expected dividends for your positions.

**URL** : `/dividends/{id}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path Constraints**:

  - `{id}` - UUID

**Request samples**

Full list:

```
curl -v https://api.robinhood.com/dividends/e9187acd-eaa4-afed-e428-1987af39afcc/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather dividend's data.

**Code** : `200 OK`

**Content example** :

```json
{
  "amount": "0.23",
  "id": "e9187acd-eaa4-afed-e428-1987af39afcc",
  "instrument": "https://api.robinhood.com/instruments/9ac38270-9381-a391-1498-903fa896ea22/",
  "account": "https://api.robinhood.com/accounts/9BT309AV/",
  "paid_at": "2016-02-02T21:02:34.378870Z",
  "payable_date": "2016-03-12",
  "position": "1.0000",
  "rate": "0.3600000000",
  "record_date": "2016-02-18",
  "url": "https://api.robinhood.com/dividends/e9187acd-eaa4-afed-e428-1987af39afcc/",
  "withholding": "0.00"
}
```

## Error Response

**Condition** : If this endpoint is called without having logged it, it will fail.

**Code** : `401 Unauthorized`

**Content example** : 

```json
{
  "detail": "Authentication credentials were not provided."
}
```
