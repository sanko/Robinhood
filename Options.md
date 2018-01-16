# Options

Lose money faster!

- [Get Length of Waitlist](#get-length-of-waitlist)

# Get Length of Waitlist

Find out how many people still don't have access yet!

**Method**

| URI                       | HTTP Method | Authentication |
|---------------------------|-------------|----------------|
| api.robinhood.com/midlands/waitlist/count/options_waitlist/ | GET         | No          |

**Fields**

None

**Request sample**

```
curl -v https://api.robinhood.com/midlands/waitlist/count/options_waitlist/ \
   -H "Accept: application/json"
```

**Response**

Fields are returned as well as the following:

| Key   | Type    | Description |
|-------|---------|-------------|
| count | Integer | How many are on the hype train |

**Response sample**

```
{
    "count":427971
}
```
