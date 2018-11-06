# Gather Options Chains by ID

Grab the full list of options. Have at it!

**URL** : `/options/chains/{optionChainId}/`

**Method** : `GET`

**Auth required** : No

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/options/chains/3213f28c-068b-47e7-84de-627da69d256a/\
   -H "Accept: application/json"
```

## Success Responses

**Condition** : Sucessfully gather options data.

**Code** : `200 OK`

**Content example** :

```json
{
  "can_open_position": false,
  "symbol": "CTRC",
  "trade_value_multiplier": "100.0000",
  "underlying_instruments": [
    {
      "instrument": "https://api.robinhood.com/instruments/66ce7058-1e78-4888-8531-b2574c23bfb4/",
      "id": "7e5f5b95-b3bf-466a-a7b5-d5461d9aaac6",
      "quantity": 100
    }
  ],
  "expiration_dates": [],
  "cash_component": null,
  "min_ticks": {
    "cutoff_price": "3.00",
    "below_tick": "0.05",
    "above_tick": "0.10"
  },
  "id": "3213f28c-068b-47e7-84de-627da69d256a"
}
```

## Error Response

**Condition** : An id/url that doesn't exist.

**Code** : `404 Not Found`
