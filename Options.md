# Options

Lose money faster!

- [Get Length of Waitlist](#get-length-of-waitlist)
- [Join the Options Waitlist](#join-the-options-waitlist)
- [Get Available Options Levels](#get-available-options-levels)

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

# Change Options Level

**Method**

| URI                                      | HTTP Method | Authentication |
|------------------------------------------|-------------|----------------|
| api.robinhood.com/options/level_changes/| POST        | Yes            |

**Fields**

HTTP POST body contains the following data.

| Parameter | Type   | Description                                                        | Default |Required|
|-----------|--------|--------------------------------------------------------------------|---------|--------|
| email     | address    | Email address attached to an existing account | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/options/level_changes/ \
   -H "Accept: application/json" \
   -d todo=future
```

**Response**

An empty list is returned as the body of the response. The HTTP response code is 201 if the address is being added. The HTTP response code is 200 if the account is already on the list.

**Response sample**

```

```



# Get Available Options Levels

Find out which levels of Option access your account supports.

**Method**

| URI                                      | HTTP Method | Authentication |
|------------------------------------------|-------------|----------------|
| api.robinhood.com/options/leval_changes/ | GET         | Yes            |

**Fields**

| Parameter | Type           | Description                            | Default |Required|
|-----------|----------------|----------------------------------------|---------|--------|
| account   | account number | Short string representing the account. | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/midlands/waitlist/count/options_waitlist/?account=8UD09348 \
   -H "Accept: application/json"
```

**Response**

A paginated list of objects is returned. The objects contian the following fields:

| Key   | Type    | Description |
|-------|---------|-------------|
| count | Integer | How many are on the hype train |

**Response sample**

```
{
    "count": 427971
}
```
