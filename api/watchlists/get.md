# Gather List of Equity Watchlists

If you have more than one, this will be fun. If not, you'll just get the 'Default'.

**URL** : `/watchlists/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/watchlists/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather watchlists.

**Code** : `200 OK`

**Content example** :

```json
{
  "previous": null,
  "results": [
    {
      "url": "https://api.robinhood.com/watchlists/Technology/",
      "user": "https://api.robinhood.com/user/",
      "name": "Technology"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test1344/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test1344"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test2145/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test2145"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test3340/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test3340"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test4644/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test4644"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test2503/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test2503"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test1860/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test1860"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test3753/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test3753"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test3287/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test3287"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test2467/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test2467"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test1739/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test1739"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test1473/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test1473"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test3201/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test3201"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Test27/",
      "user": "https://api.robinhood.com/user/",
      "name": "Test27"
    },
    {
      "url": "https://api.robinhood.com/watchlists/Default/",
      "user": "https://api.robinhood.com/user/",
      "name": "Default"
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
