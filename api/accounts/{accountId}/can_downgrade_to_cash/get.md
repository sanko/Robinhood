# Check Account's Ability to Downgrade from Margin to Cash

Find out if you can downgrade this account from margin (Instant, Gold) to cash.

**URL** : `/accounts/{accountId}/can_downgrade_to_cash/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - {accountId} - account id

**Request samples**

```
curl -v https://api.robinhood.com/accounts/9BT309AV/can_downgrade_to_cash \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather account data.

**Code** : `200 OK`

**Content example** :

```json
{
  "can_downgrade_to_cash": false
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
