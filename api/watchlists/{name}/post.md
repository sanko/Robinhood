# Add a Single Equity Instrument to a Watchlist

Keep track of things!

**URL** : `/watchlists/{name}/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**URL parameters**

    - `name` - String

**Data constraints**

    - `instrument` - URL (required)

**Data constraints example**

```
instrument=https://api.robinhood.com/instruments/93495afe-b84b-4664-881c-b6361b0edeef/
```

**Request samples**
a
```
curl -v https://api.robinhood.com/watchlists/Default/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
   -D "instrument=https://api.robinhood.com/instruments/93495afe-b84b-4664-881c-b6361b0edeef/"
```

## Success Responses

**Condition** : Sucessfully gather watchlists.

**Code** : `200 OK`

**Content example** :

```json
{
    "watchlist": "https://api.robinhood.com/watchlists/Default/",
    "instrument": "https://api.robinhood.com/instruments/93495afe-b84b-4664-881c-b6361b0edeef/",
    "created_at": "2017-09-24T12:29:28.939442Z",
    "url": "https://api.robinhood.com/watchlists/Default/93495afe-b84b-4664-881c-b6361b0edeef/"
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

**Condition** : If the instrument is already a member of the given watchlist.

**Code** : `400 Bad Request`

**Content example** :

```json
{
  "detail": "Watchlist already has that instrument."
}
```
