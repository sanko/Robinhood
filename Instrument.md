# Financial Instrument Information Methods

- [Gather the Split History for an Instrument](#gather-the-split-history-for-an-instrument)
- [Grab Data on a Single Split](#grab-data-on-a-single-split)

# Gather the Split History for an Instrument

This returns a paginated list of stock splits for this instrument.

**Method**

| URI                                                   | HTTP Method | Authentication |
|-------------------------------------------------------|-------------|----------------|
| api.robinhood.com/instruments/{instrument_id}/splits/ | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/ \
   -H "Accept: application/json"
```

**Response**

A [paginated](README.md#pagination) list of split data is returned. A split contains the following keys...

| Key            | Type       | Description |
|----------------|------------|-------------|
| url 			 | URL 	      | Endpoint where more information about this particular split |
| instrument     | URL        | Link back to the instrument |
| execution_date | YYYY-MM-DD | The date this split goes into effect |
| divisor        | Float      | |
| multiplier     | Float      | |

**Response sample**

```
{
   "previous": null,
   "results": [
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/bc0e7068-1bf4-4b81-b066-93830495d883/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2016-08-25",
         "divisor": "1.00000000",
         "multiplier": "0.20000000"
      },
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/b5bc679c-445c-45d9-b462-dda72ea6d4a7/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2016-05-18",
         "divisor": "1.00000000",
         "multiplier": "0.10000000"
      },
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2015-10-01",
         "divisor": "4.00000000",
         "multiplier": "1.00000000"
      }
   ],
   "next": null
}
```

# Grab Data on a Single Split

This returns a paginated list of stock splits for this instrument.

**Method**

| URI                                                             | HTTP Method | Authentication |
|-----------------------------------------------------------------|-------------|----------------|
| api.robinhood.com/instruments/{instrument_id}/splits/{split_id} | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/ \
   -H "Accept: application/json"
```

**Response**

A single split data is returned. A split contains the following keys...

| Key            | Type       | Description |
|----------------|------------|-------------|
| url 			 | URL 	      | Endpoint where more information about this particular split |
| instrument     | URL        | Link back to the instrument |
| execution_date | YYYY-MM-DD | The date this split goes into effect |
| divisor        | Float      | |
| multiplier     | Float      | |

**Response sample**

```
{
   "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/",
   "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
   "execution_date": "2015-10-01",
   "divisor": "4.00000000",
   "multiplier": "1.00000000"
}
```
