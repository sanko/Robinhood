# Create a new Equity Watchlist

Keep track of things! Unless you're special, you'll only be able to create/delete/recreate 'Default'.

**URL** : `/watchlists/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

    - `name` - Alphanumeric name for this watchlist (A-B,a-b,0-9,_)

**Data constraints example**

```
name=Bio
```

**Request samples**
a
```
curl -v https://api.robinhood.com/watchlists/Default/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
   -D "name=Bio"
```

## Success Responses

**Condition** : Sucessfully gather watchlists.

**Code** : `200 OK`

**Content example** :

```json
{
    "user": "https://api.robinhood.com/user/",
    "name": "Bio",
    "url": "https://api.robinhood.com/watchlists/Bio/"
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

**Condition** : If you do not have permission to add more than the default watchlist.

**Code** : `429 Too Many Requests`

**Content example** :

```json
{
  "detail": "Request was throttled."
}
```
