# Gather Paginated List of Options Instruments

Grab the full list of options. Have at it!

**URL** : `/options/instruments/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - ids - comma separated list of options ids (optional)
    - cursor - paginated list position (optional)
    - tradability - 'tradable' or 'untradable' (optional)
    - state - 'active', 'inactive', or 'expired' (optional)
    - type - 'put' or 'call' (optional)
    - expiration_dates - comma separated list of days (optional; YYYY-MM-DD)
    - chain_id - related options chain id (optional; UUID)

**Request samples**

Page one of full list:

```
curl -v https://api.robinhood.com/options/instruments/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

$SPY calls:

```
curl -v https://api.robinhood.com/options/instruments/?ids=73f75306-ad07-4734-972b-22ab9dec6693 \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather options instruments.

**Code** : `200 OK`

**Content example** :

Grabbing SPY calls with `https://api.robinhood.com/options/instruments/?ids=4773a938-d154-422b-abb5-672771287bc3&type=call`:

```json
{
  "previous": null,
  "results": [
    {
      "tradability": "untradable",
      "strike_price": "251.0000",
      "url": "https://api.robinhood.com/options/instruments/4773a938-d154-422b-abb5-672771287bc3/",
      "expiration_date": "2018-03-26",
      "created_at": "2018-03-16T02:09:48.450719Z",
      "chain_id": "c277b118-58d9-4060-8dc5-a3b5898955cb",
      "updated_at": "2018-03-27T01:07:47.549559Z",
      "state": "expired",
      "type": "call",
      "chain_symbol": "SPY",
      "min_ticks": {
        "cutoff_price": "0.00",
        "below_tick": "0.01",
        "above_tick": "0.01"
      },
      "id": "4773a938-d154-422b-abb5-672771287bc3"
    }
  ],
  "next": null
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
