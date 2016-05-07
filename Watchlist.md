# Watchlists

- [Bulk Add Instruments by Symbol](#bulk-add-instruments-by-symbol)
- [Create watchlist](#create-watchlist)
- [TODO](#)

You can organize and keep track of securities in multiple named watchlists.

By the way, the default watchlist used by Robinhood's iOS and Android apps is called 'Default' so you may want to avoid deleting that one.

# Create watchlist

So, you need to keep track of a few securites? Here's how.

**Method**

| URI                           | HTTP Method | Authentication |
|-------------------------------|-------------|----------------|
| api.robinhood.com/watchlists/ | POST        | *Yes*          |

**Fields**

| Parameter | Type   | Description                                          | Default |Required|
|-----------|--------|------------------------------------------------------|---------|--------|
| name      | String | Alphanumeric name for this watchlist (A-B,a-b,0-9,_) | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/watchlists/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d name=Technology
```

**Response**

Fields are returned as a hash with the following keys:

| Key  | Type   | Description |
|------|--------|-------------|
| url  | URL    | Link to this watchlist     |
| user | String | Link back to the user page |
| name | String | The name you used above    |

**Response sample**

```
{
	"url": "https://api.robinhood.com/watchlists/Technology/",
    "user": "https://api.robinhood.com/user/",
    "name": "Technology"
}
```

# Bulk Add Instruments by Symbol

You can add multiple instruments to a watchlist as a comma separated list of symbols.

**Method**

| URI                                                     | HTTP Method | Authentication |
|---------------------------------------------------------|-------------|----------------|
| api.robinhood.com/watchlists/{watchlist_name}/bulk_add/ | POST        | *Yes*          |

**Fields**

| Parameter     | Type   | Description                                       | Default |Required|
|---------------|--------|---------------------------------------------------|---------|--------|
| symbols       | String | Comma separated list of ticker symbols (up to 32) | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/watchlists/Default/bulk_add/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d symbols=MSFT,F,FB,RHT,FAKE
```

**Response**

Fields are returned as a list of hashes which contain the following for each added symbol:

| Key        | Type     | Description |
|------------|----------|-------------|
| watchlist  | URL      | Link to the watchlist you just added the instrument to   |
| instrument | URL      | Link to the instrument itself                            |
| created_at | ISO 8601 | Timestamp when the instrument was added to the watchlist |
| url        | URL      | Link to this instrument as a member of this watchlist    |

**Response sample**

```
[{
    "watchlist": "https://api.robinhood.com/watchlists/Default/",
    "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
    "created_at": "2016-02-09T00:15:20.103927Z",
    "url": "https://api.robinhood.com/watchlists/Default/50810c35-d215-4866-9758-0ada4ac79ffa/"
}, {
    "watchlist": "https://api.robinhood.com/watchlists/Default/",
    "instrument": "https://api.robinhood.com/instruments/6df56bd0-0bf2-44ab-8875-f94fd8526942/",
    "created_at": "2016-02-09T00:15:20.103927Z",
    "url": "https://api.robinhood.com/watchlists/Default/6df56bd0-0bf2-44ab-8875-f94fd8526942/"
}, {
    "watchlist": "https://api.robinhood.com/watchlists/Default/",
    "instrument": "https://api.robinhood.com/instruments/ebab2398-028d-4939-9f1d-13bf38f81c50/",
    "created_at": "2016-02-09T00:15:20.103927Z",
    "url": "https://api.robinhood.com/watchlists/Default/ebab2398-028d-4939-9f1d-13bf38f81c50/"
}, {
    "watchlist": "https://api.robinhood.com/watchlists/Default/",
    "instrument": "https://api.robinhood.com/instruments/73f0b448-ac9c-49c6-b281-ef28aa51fd3f/",
    "created_at": "2016-02-09T00:15:20.103927Z",
    "url": "https://api.robinhood.com/watchlists/Default/73f0b448-ac9c-49c6-b281-ef28aa51fd3f/"
}]
```

# TODO

- Get Watchlist instruments		GET /watchlists/$watchlistName/?cursor=$cursor
- Add instrument to watchlist	POST /watchlists/$instrumentId/
- Get Watchlists				GET /watchlists/
- Delete Instrument				DELETE /watchlists/$watchlistName/$instrumentId/
- Reorder Watchlist				POST /watchlists/$watchlistName/reorder/	{ids}
