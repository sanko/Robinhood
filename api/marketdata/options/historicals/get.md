# Grab Options Historical Data

Gather historical data for an .

**URL** : `/marketdata/options/historicals/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**URL parameters**

**Query constraints**

    - instruments - required list of UUIDs
    - interval - hour, day, week, or month (required)
    - span - week, year, 5year, 10year (optional)

**Request sample**

```
curl -v https://api.robinhood.com/marketdata/options/historicals/?instruments=04fe3b28-f74d-47cd-a0ae-a5a140ad37c1&interval=month \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"   
```

## Success Responses

**Condition** : You have access to options.

**Code** : `200 OK`

**Content example** : Response will be a json containing the data:

```json
{
  "data_points": [
    {
      "begins_at": "2008-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2008-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2008-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2008-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2008-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2008-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2008-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2008-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2008-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2009-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2010-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2011-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2012-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2013-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2014-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2015-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2016-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-04-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-05-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-06-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-07-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-08-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-09-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-10-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-11-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2017-12-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2018-01-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2018-02-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    },
    {
      "begins_at": "2018-03-01T00:00:00Z",
      "open_price": "0.0100",
      "close_price": "0.0100",
      "session": "reg",
      "volume": 0,
      "interpolated": true
    }
  ],
  "open_time": "0001-01-01T00:00:00Z",
  "open_price": "0.0000",
  "previous_close_time": "0001-01-01T00:00:00Z",
  "previous_close_price": "0.0000",
  "interval": "month",
  "span": "10year",
  "bounds": "regular",
  "instrument": "https://api.robinhood.com/options/instruments/04fe3b28-f74d-47cd-a0ae-a5a140ad37c1/"
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. the password is incorrect.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "non_field_errors": ["Unable to log in with provided credentials."]
}
```

If you forget to pass an `interval` parameter:

```json
{
    "interval": ["This field is required."]
}
```

If you forget to pass an bad value to a parameter:

```json
{
    "span": ["\\\"johnny\\\" is not a valid choice."]
}
```
