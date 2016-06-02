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

*WIP*
{"previous":null,"results":[{"updated_at":"2016-06-02T13:24:13.156344Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":"https:\/\/api.robinhood.com\/orders\/11b78aef-a6f9-4f53-8aa5-108c6235ee75\/cancel\/","id":"11b78aef-a6f9-4f53-8aa5-108c6235ee75","cumulative_quantity":"0.00000","stop_price":"30.06000000","reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/39ff611b-84e7-425b-bfb8-6fe2a983fcf3\/","state":"confirmed","trigger":"stop","type":"limit","last_transaction_at":"2016-06-02T13:24:13.134000Z","price":"30.06000000","executions":[],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/11b78aef-a6f9-4f53-8aa5-108c6235ee75\/","created_at":"2016-06-02T00:38:04.215291Z","side":"sell","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/39ff611b-84e7-425b-bfb8-6fe2a983fcf3\/","average_price":null,"quantity":"1.00000"},{"updated_at":"2016-06-02T13:24:12.768090Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":"https:\/\/api.robinhood.com\/orders\/bc29dfa2-4120-4595-ac1b-273354bafeaf\/cancel\/","id":"bc29dfa2-4120-4595-ac1b-273354bafeaf","cumulative_quantity":"0.00000","stop_price":null,"reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/940fc3f5-1db5-4fed-b452-f3a2e4562b5f\/","state":"confirmed","trigger":"immediate","type":"limit","last_transaction_at":"2016-06-02T13:24:12.739000Z","price":"4.60000000","executions":[],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/bc29dfa2-4120-4595-ac1b-273354bafeaf\/","created_at":"2016-06-02T00:36:56.730453Z","side":"sell","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/940fc3f5-1db5-4fed-b452-f3a2e4562b5f\/","average_price":null,"quantity":"1.00000"},{"updated_at":"2016-06-02T13:30:41.275392Z","ref_id":null,"time_in_force":"gfd","fees":"0.02","cancel":null,"id":"2a56416d-4c64-4be1-b3db-694b4c952301","cumulative_quantity":"1.00000","stop_price":"10.30000000","reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8\/","state":"filled","trigger":"stop","type":"limit","last_transaction_at":"2016-06-02T13:30:41Z","price":"10.26000000","executions":[{"timestamp":"2016-06-02T13:30:41Z","price":"10.28000000","settlement_date":"2016-06-07","quantity":"1.00000"}],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/2a56416d-4c64-4be1-b3db-694b4c952301\/","created_at":"2016-06-02T00:35:23.392014Z","side":"sell","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8\/","average_price":"10.28000000","quantity":"1.00000"},{"updated_at":"2016-06-01T20:02:16.264970Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":null,"id":"69b9ebcc-f1d8-4759-b293-cb8edfba65e3","cumulative_quantity":"0.00000","stop_price":"10.22000000","reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8\/","state":"cancelled","trigger":"stop","type":"limit","last_transaction_at":"2016-06-01T20:00:26.120000Z","price":"10.20000000","executions":[],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/69b9ebcc-f1d8-4759-b293-cb8edfba65e3\/","created_at":"2016-06-01T18:32:30.625915Z","side":"sell","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8\/","average_price":null,"quantity":"1.00000"},{"updated_at":"2016-06-01T18:31:47.349149Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":null,"id":"c93724a3-7fc2-4e00-85ee-df76d4febb65","cumulative_quantity":"0.00000","stop_price":"9.60000000","reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8\/","state":"cancelled","trigger":"stop","type":"limit","last_transaction_at":"2016-06-01T18:31:47.295000Z","price":"9.50000000","executions":[],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/c93724a3-7fc2-4e00-85ee-df76d4febb65\/","created_at":"2016-06-01T14:48:43.751801Z","side":"sell","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8\/","average_price":null,"quantity":"1.00000"},{"updated_at":"2016-06-01T20:00:23.597754Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":null,"id":"1070164d-e9fe-4a18-8693-8576af82f4d1","cumulative_quantity":"0.00000","stop_price":null,"reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/940fc3f5-1db5-4fed-b452-f3a2e4562b5f\/","state":"cancelled","trigger":"immediate","type":"limit","last_transaction_at":"2016-06-01T20:00:10.419000Z","price":"4.55000000","executions":[],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/1070164d-e9fe-4a18-8693-8576af82f4d1\/","created_at":"2016-06-01T14:46:41.290584Z","side":"sell","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/940fc3f5-1db5-4fed-b452-f3a2e4562b5f\/","average_price":null,"quantity":"1.00000"},{"updated_at":"2016-06-01T20:00:10.065032Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":null,"id":"274c1693-957f-4390-8de6-4ce1d2d16246","cumulative_quantity":"0.00000","stop_price":null,"reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/39ff611b-84e7-425b-bfb8-6fe2a983fcf3\/","state":"cancelled","trigger":"immediate","type":"limit","last_transaction_at":"2016-06-01T20:00:08.666000Z","price":"30.30000000","executions":[],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/274c1693-957f-4390-8de6-4ce1d2d16246\/","created_at":"2016-06-01T14:24:25.109501Z","side":"sell","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/39ff611b-84e7-425b-bfb8-6fe2a983fcf3\/","average_price":null,"quantity":"1.00000"},{"updated_at":"2016-06-01T13:30:13.003023Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":null,"id":"6c8624d4-d449-4df9-aa4a-ec51b9febd37","cumulative_quantity":"1.00000","stop_price":null,"reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8\/","state":"filled","trigger":"immediate","type":"market","last_transaction_at":"2016-06-01T13:30:00.708000Z","price":"10.78000000","executions":[{"timestamp":"2016-06-01T13:30:00.708000Z","price":"10.16000000","settlement_date":"2016-06-06","quantity":"1.00000"}],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/6c8624d4-d449-4df9-aa4a-ec51b9febd37\/","created_at":"2016-06-01T13:26:15.410133Z","side":"buy","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8\/","average_price":"10.16000000","quantity":"1.00000"},{"updated_at":"2016-06-01T13:30:22.285462Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":null,"id":"61b644ec-4d71-4a75-9339-2445b6852b54","cumulative_quantity":"1.00000","stop_price":null,"reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/39ff611b-84e7-425b-bfb8-6fe2a983fcf3\/","state":"filled","trigger":"immediate","type":"limit","last_transaction_at":"2016-06-01T13:30:22.145000Z","price":"30.20000000","executions":[{"timestamp":"2016-06-01T13:30:22.145000Z","price":"30.01000000","settlement_date":"2016-06-06","quantity":"1.00000"}],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/61b644ec-4d71-4a75-9339-2445b6852b54\/","created_at":"2016-06-01T13:12:50.856219Z","side":"buy","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/39ff611b-84e7-425b-bfb8-6fe2a983fcf3\/","average_price":"30.01000000","quantity":"1.00000"},{"updated_at":"2016-06-01T13:46:17.041097Z","ref_id":null,"time_in_force":"gfd","fees":"0.00","cancel":* Connection #0 to host api.robinhood.com left intact
null,"id":"0817bcc6-44fa-42d2-a6f3-25d92b2e2007","cumulative_quantity":"1.00000","stop_price":null,"reject_reason":null,"instrument":"https:\/\/api.robinhood.com\/instruments\/940fc3f5-1db5-4fed-b452-f3a2e4562b5f\/","state":"filled","trigger":"immediate","type":"limit","last_transaction_at":"2016-06-01T13:46:16.970000Z","price":"4.50000000","executions":[{"timestamp":"2016-06-01T13:46:16.970000Z","price":"4.50000000","settlement_date":"2016-06-06","quantity":"1.00000"}],"extended_hours":false,"account":"https:\/\/api.robinhood.com\/accounts\/5QY29322\/","url":"https:\/\/api.robinhood.com\/orders\/0817bcc6-44fa-42d2-a6f3-25d92b2e2007\/","created_at":"2016-06-01T13:09:12.758564Z","side":"buy","position":"https:\/\/api.robinhood.com\/positions\/5QY29322\/940fc3f5-1db5-4fed-b452-f3a2e4562b5f\/","average_price":"4.50000000","quantity":"1.00000"}],"next":null}

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
