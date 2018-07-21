# Gather Portfolio Data for an Account

Grab equity and margin data.

This is the same as calling `https://api.robinhood.com/accounts/{accountNumber}/portfolio/`.

**URL** : `/portfolios/{accountNumber}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - interval - `5minute`, `10minute`, `hour`, `day`, `week`, or `month` (required)
    - span - `day`, `week`, `year`, `5year`, `10year` (optional)
    - bounds - `regular`, `extended`, or `trading` (optional)

**Path constraints**

    - {accountNumber} - account id

**Request samples**

```
curl -v https://api.robinhood.com/portfolios/9BT309AV/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather account data.

**Code** : `200 OK`

**Content example** :

```json
{
  "account": "https://api.robinhood.com/accounts/9BT309AV/",
  "adjusted_equity_previous_close": "3941.4600",
  "equity": "3941.4600",
  "equity_previous_close": "3941.4600",
  "excess_maintenance": "3941.4600",
  "excess_maintenance_with_uncleared_deposits": "3941.4600",
  "excess_margin": "3941.4600",
  "excess_margin_with_uncleared_deposits": "3941.4600",
  "extended_hours_equity": null,
  "extended_hours_market_value": undef,
  "last_core_equity": "3941.4600",
  "last_core_market_value": "0.0000",
  "market_value": "0.0000",
  "start_date": "2017-01-06",
  "unwithdrawable_deposits": "0.0000",
  "unwithdrawable_grants": "0.0000",
  "url": "https://api.robinhood.com/portfolios/9BT309AV/",
  "withdrawable_amount": "3941.4600",
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
