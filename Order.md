# Order

Odds are, you'll want to actually order securities. If so, you're in the right place.

- [Place an Order](#place-an-order)
- [Gather Order Information](#gather-order-information)
- [Gather Recent Orders](#get-recent-orders)
- [Cancel an Order](#cancel-an-order)
- [Todo](#todo)

# Place an Order

Buy and sell shares of securities!

**Method**

| URI                       | HTTP Method | Authentication |
|---------------------------|-------------|----------------|
| api.robinhood.com/orders/ | POST        | *Yes*          |

**Fields**

| Parameter     | Type   | Description                                         		          | Default |Required|
|---------------|--------|--------------------------------------------------------------------|---------|--------|
| account       | URL    | Account to make this order with      				              | N/A     | *Yes*  |
| instrument    | URL    | Instrument URL of the security you're attempting to buy or sell    | N/A     | *Yes*  |
| symbol        | String | The ticker symbol of the security you're attmepting to buy or sell | N/A     | *Yes*  |
| type 		    | String | Order type: `market` or `limit`                                    | N/A     | *Yes*  |
| time_in_force | String | `gfd`, `gtc`, `ioc`, `fok` or `opg`                                | N/A     | *Yes*  |
| trigger	    | String | `immediate`, `stop`, or `on_close`                                 | N/A     | *Yes*  |
| price		    | Float  | The price you're willing to accept in a sell or pay in a buy       | N/A     | Only when `type` equals `limit`   |
| stop_price    | Float  | The price at which an order with a `stop` trigger converts         | N/A     | Only when `trigger` equals `stop` |
| quantity      | Int    | Number of shares you would like to buy or sell                     | N/A     | *Yes*  |
| side          | String | `buy` or `sell`                                                    | N/A     | *Yes*  |
| client_id     | String | Only available for OAuth applications                              | N/A     | No     |

**Request sample**

```
curl -v https://api.robinhood.com/orders/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d account=https://api.robinhood.com/accounts/8UD09348/ \
   -d instrument=https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/ \
   -d symbol=MSFT \
   -d type=market \
   -d time_in_force=fok \
   -d trigger=immediate \
   -d quantity=1 \
   -d side=sell
```

**Response**

Fields are returned as well as the following:

| Key          		| Type     | Description |
|-------------------|----------|-------------|
| updated_at        | ISO 8601 |  |
| executions        | Array    | This is a list of hashes |
| fees              | Float    | Total fees including. Generally `0.00` |
| cancel            | URL      | If this is not `null`, you can `POST` to this URL to cancel the order |
| id                | String   | Internal id of this order |
| cumulative_quantity | Float  | Number of shares which have executed so far |
| reject_reason     | String   ||
| state             | String   |  `queued`, `unconfirmed`, `confirmed`, `partially_filled`, `filled`, `rejected`, `canceled`, or `failed` |
| last_transaction_at | ISO 8601 ||
| client_id         | String ||
| url               | URL | Link to this order with up to date information |
| created_at        | ISO 8601 | Time the order was placed |
| position          | URL | Link to positions for this account with this instrument |
| average_price     | Float | Average price of all shares executed so far |

**Response sample**

```
{
    "updated_at": "2016-04-01T21:24:13.698563Z",
    "executions": [],
    "time_in_force": "fok",
    "fees": "0.00",
    "cancel": "https://api.robinhood.com/orders/15390ade-face-caca-0987-9fdac5824701/cancel/",
    "id": "15390ade-face-caca-0987-9fdac5824701",
    "cumulative_quantity": "0.00000",
    "stop_price": null,
    "reject_reason": null,
    "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
    "state": "queued",
    "trigger": "immediate",
    "type": "market",
    "last_transaction_at": "2016-04-01T23:34:54.237390Z",
    "price": null,
    "client_id": null,
    "account": "https://api.robinhood.com/accounts/8UD09348/",
    "url": "https://api.robinhood.com/orders/15390ade-face-caca-0987-9fdac5824701/",
    "created_at": "2016-04-01T22:12:14.890283Z",
    "side": "sell",
    "position": "https://api.robinhood.com/positions/8UD09348/50810c35-d215-4866-9758-0ada4ac79ffa/",
    "average_price": null,
    "quantity": "1.00000"
}
```
# Gather Order Information

This returns the work status and related information.

**Method**

| URI                                 | HTTP Method | Authentication |
|-------------------------------------|-------------|----------------|
| api.robinhood.com/orders/{order_id} | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/employment/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

See the response to [placing an order](#place-an-order).

**Response sample**

See the response sample to [placing an order](#place-an-order).

### Gather Recent Orders

This returns the work status and related information.

**Method**

| URI                       | HTTP Method | Authentication |
|---------------------------|-------------|----------------|
| api.robinhood.com/orders/ | GET         | *Yes*          |

**Parameters**

| Parameter       | Type     | Description                         		          | Default |Required|
|-----------------|----------|----------------------------------------------------|---------|--------|
| updated_at[gte] | ISO 8601 | Timestamp of earliest order we want information on | N/A     | No     |
| instrument      | String   | Instrument we want information on (ID not Url)     | N/A     | No     |
| cursor          | String   | Orders are returned as a paginated list            | N/A     | No     |

**Request sample**

```
curl -v https://api.robinhood.com/orders/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

TODO

**Response sample**

TODO

# Cancel an Order

This returns the work status and related information.

**Method**

| URI                                         | HTTP Method | Authentication |
|---------------------------------------------|-------------|----------------|
| api.robinhood.com/orders/{order_id}/cancel/ | POST         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/orders/15390ade-face-caca-0987-9fdac5824701/cancel/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
   -d ""
```

**Response**

See the response to [placing an order](#place-an-order).

**Response sample**

See the response sample to [placing an order](#place-an-order).

# TODO

- Get Orders					GET /orders/?updated_at=[gte]&cursor=[$cursor]
- Get Orders By Instrument		GET /orders/?updated_at=[gte]&cursor=[$cursor]&instrument=$instrument
