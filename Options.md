# Options

Lose money faster!

- [Get Length of Waitlist](#get-length-of-waitlist)
- [Join the Options Waitlist](#join-the-options-waitlist)

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
    "count": 427971
}
```

# Join the Options Waitlist

Get on the train!

**Method**

| URI                       | HTTP Method | Authentication |
|---------------------------|-------------|----------------|
| api.robinhood.com/midlands/waitlist/add/options_waitlist/ | POST        | No          |

**Fields**

| Parameter     | Type   | Description                                                        | Default |Required|
|---------------|--------|--------------------------------------------------------------------|---------|--------|
| email       | address    | Email address attached to an existing account | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/midlands/waitlist/add/options_waitlist/ \
   -H "Accept: application/json" \
   -d email=fun@example.com
```

**Response**

An empty list is returned as the body of the response. The HTTP response code is 201 if the address is being added. The HTTP response code is 200 if the account is already on the list.

**Response sample**

```
{
}
```


