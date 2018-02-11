# Get Historical Quote Data for Cryptocurrency

Returns data on a single Crypto currency pair.

**URL** : `/marketdata/forex/historicals/{id}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Path constraints**

    - {id} - UUID (for example, `3d961844-d360-45fc-989b-f6fca761d511`)

**Query constraints**

    - bounds - `24_7` or `regular` (optional; default is `regular` which only returns data from regular stock trading hours)
    - interval - `15second`, `5minute`, `hour`, `day`, or `week`
    - span - `day`, `hour`, `week`, `year`, `5year` (optional; default is `day`)

## Success Response

**Code** : `200 OK`

**Content examples**

For a basic call to `https://api.robinhood.com/marketdata/forex/historicals/7a04fe7a-e3a8-4a07-8c35-d0fec9f35569/?bounds=24_7&interval=5minute&span=day`:

```json
{
  "data_points": [
    {
      "begins_at": "2018-02-10T20:50:00Z",
      "open_price": "0.3790",
      "close_price": "0.3700",
      "high_price": "0.3790",
      "low_price": "0.3700",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T20:55:00Z",
      "open_price": "0.3701",
      "close_price": "0.3694",
      "high_price": "0.3710",
      "low_price": "0.3694",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:00:00Z",
      "open_price": "0.3694",
      "close_price": "0.3660",
      "high_price": "0.3694",
      "low_price": "0.3655",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:05:00Z",
      "open_price": "0.3660",
      "close_price": "0.3700",
      "high_price": "0.3700",
      "low_price": "0.3653",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:10:00Z",
      "open_price": "0.3700",
      "close_price": "0.3674",
      "high_price": "0.3700",
      "low_price": "0.3670",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:15:00Z",
      "open_price": "0.3674",
      "close_price": "0.3655",
      "high_price": "0.3700",
      "low_price": "0.3655",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:20:00Z",
      "open_price": "0.3655",
      "close_price": "0.3655",
      "high_price": "0.3655",
      "low_price": "0.3655",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:25:00Z",
      "open_price": "0.3655",
      "close_price": "0.3636",
      "high_price": "0.3655",
      "low_price": "0.3625",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:30:00Z",
      "open_price": "0.3650",
      "close_price": "0.3716",
      "high_price": "0.3716",
      "low_price": "0.3650",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:35:00Z",
      "open_price": "0.3716",
      "close_price": "0.3670",
      "high_price": "0.3720",
      "low_price": "0.3670",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:40:00Z",
      "open_price": "0.3696",
      "close_price": "0.3750",
      "high_price": "0.3750",
      "low_price": "0.3660",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:45:00Z",
      "open_price": "0.3750",
      "close_price": "0.3671",
      "high_price": "0.3750",
      "low_price": "0.3671",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:50:00Z",
      "open_price": "0.3671",
      "close_price": "0.3748",
      "high_price": "0.3748",
      "low_price": "0.3671",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T21:55:00Z",
      "open_price": "0.3748",
      "close_price": "0.3690",
      "high_price": "0.3748",
      "low_price": "0.3690",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:00:00Z",
      "open_price": "0.3690",
      "close_price": "0.3719",
      "high_price": "0.3719",
      "low_price": "0.3690",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:05:00Z",
      "open_price": "0.3719",
      "close_price": "0.3719",
      "high_price": "0.3719",
      "low_price": "0.3719",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:10:00Z",
      "open_price": "0.3719",
      "close_price": "0.3765",
      "high_price": "0.3765",
      "low_price": "0.3719",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:15:00Z",
      "open_price": "0.3765",
      "close_price": "0.3791",
      "high_price": "0.3791",
      "low_price": "0.3765",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:20:00Z",
      "open_price": "0.3791",
      "close_price": "0.3820",
      "high_price": "0.3820",
      "low_price": "0.3791",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:25:00Z",
      "open_price": "0.3820",
      "close_price": "0.3890",
      "high_price": "0.3901",
      "low_price": "0.3820",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:30:00Z",
      "open_price": "0.3890",
      "close_price": "0.3900",
      "high_price": "0.3900",
      "low_price": "0.3871",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:35:00Z",
      "open_price": "0.3875",
      "close_price": "0.3920",
      "high_price": "0.3933",
      "low_price": "0.3875",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:40:00Z",
      "open_price": "0.3915",
      "close_price": "0.3917",
      "high_price": "0.3917",
      "low_price": "0.3873",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:45:00Z",
      "open_price": "0.3917",
      "close_price": "0.3852",
      "high_price": "0.3917",
      "low_price": "0.3844",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:50:00Z",
      "open_price": "0.3852",
      "close_price": "0.3852",
      "high_price": "0.3852",
      "low_price": "0.3844",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T22:55:00Z",
      "open_price": "0.3852",
      "close_price": "0.3920",
      "high_price": "0.3920",
      "low_price": "0.3852",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:00:00Z",
      "open_price": "0.3920",
      "close_price": "0.3900",
      "high_price": "0.3950",
      "low_price": "0.3885",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:05:00Z",
      "open_price": "0.3900",
      "close_price": "0.3900",
      "high_price": "0.3940",
      "low_price": "0.3887",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:10:00Z",
      "open_price": "0.3900",
      "close_price": "0.3888",
      "high_price": "0.3900",
      "low_price": "0.3888",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:15:00Z",
      "open_price": "0.3888",
      "close_price": "0.3900",
      "high_price": "0.3900",
      "low_price": "0.3887",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:20:00Z",
      "open_price": "0.3900",
      "close_price": "0.3900",
      "high_price": "0.3930",
      "low_price": "0.3887",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:25:00Z",
      "open_price": "0.3900",
      "close_price": "0.3903",
      "high_price": "0.3920",
      "low_price": "0.3887",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:30:00Z",
      "open_price": "0.3903",
      "close_price": "0.3861",
      "high_price": "0.3903",
      "low_price": "0.3861",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:35:00Z",
      "open_price": "0.3861",
      "close_price": "0.3919",
      "high_price": "0.3919",
      "low_price": "0.3861",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:40:00Z",
      "open_price": "0.3919",
      "close_price": "0.3900",
      "high_price": "0.3919",
      "low_price": "0.3900",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:45:00Z",
      "open_price": "0.3900",
      "close_price": "0.3880",
      "high_price": "0.3900",
      "low_price": "0.3880",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:50:00Z",
      "open_price": "0.3880",
      "close_price": "0.3881",
      "high_price": "0.3900",
      "low_price": "0.3880",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-10T23:55:00Z",
      "open_price": "0.3888",
      "close_price": "0.3880",
      "high_price": "0.3888",
      "low_price": "0.3880",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:00:00Z",
      "open_price": "0.3880",
      "close_price": "0.3850",
      "high_price": "0.3888",
      "low_price": "0.3850",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:05:00Z",
      "open_price": "0.3850",
      "close_price": "0.3832",
      "high_price": "0.3855",
      "low_price": "0.3832",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:10:00Z",
      "open_price": "0.3839",
      "close_price": "0.3791",
      "high_price": "0.3839",
      "low_price": "0.3791",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:15:00Z",
      "open_price": "0.3790",
      "close_price": "0.3807",
      "high_price": "0.3807",
      "low_price": "0.3785",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:20:00Z",
      "open_price": "0.3807",
      "close_price": "0.3830",
      "high_price": "0.3830",
      "low_price": "0.3790",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:25:00Z",
      "open_price": "0.3830",
      "close_price": "0.3773",
      "high_price": "0.3830",
      "low_price": "0.3773",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:30:00Z",
      "open_price": "0.3773",
      "close_price": "0.3753",
      "high_price": "0.3773",
      "low_price": "0.3753",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:35:00Z",
      "open_price": "0.3753",
      "close_price": "0.3748",
      "high_price": "0.3760",
      "low_price": "0.3748",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:40:00Z",
      "open_price": "0.3748",
      "close_price": "0.3743",
      "high_price": "0.3748",
      "low_price": "0.3743",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:45:00Z",
      "open_price": "0.3741",
      "close_price": "0.3748",
      "high_price": "0.3748",
      "low_price": "0.3741",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:50:00Z",
      "open_price": "0.3748",
      "close_price": "0.3760",
      "high_price": "0.3760",
      "low_price": "0.3747",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T00:55:00Z",
      "open_price": "0.3760",
      "close_price": "0.3739",
      "high_price": "0.3760",
      "low_price": "0.3739",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:00:00Z",
      "open_price": "0.3739",
      "close_price": "0.3760",
      "high_price": "0.3760",
      "low_price": "0.3739",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:05:00Z",
      "open_price": "0.3745",
      "close_price": "0.3711",
      "high_price": "0.3751",
      "low_price": "0.3711",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:10:00Z",
      "open_price": "0.3711",
      "close_price": "0.3706",
      "high_price": "0.3736",
      "low_price": "0.3706",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:15:00Z",
      "open_price": "0.3706",
      "close_price": "0.3686",
      "high_price": "0.3706",
      "low_price": "0.3686",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:20:00Z",
      "open_price": "0.3686",
      "close_price": "0.3664",
      "high_price": "0.3686",
      "low_price": "0.3648",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:25:00Z",
      "open_price": "0.3664",
      "close_price": "0.3664",
      "high_price": "0.3700",
      "low_price": "0.3648",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:30:00Z",
      "open_price": "0.3664",
      "close_price": "0.3664",
      "high_price": "0.3691",
      "low_price": "0.3664",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:35:00Z",
      "open_price": "0.3664",
      "close_price": "0.3690",
      "high_price": "0.3690",
      "low_price": "0.3650",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:40:00Z",
      "open_price": "0.3690",
      "close_price": "0.3710",
      "high_price": "0.3710",
      "low_price": "0.3680",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:45:00Z",
      "open_price": "0.3710",
      "close_price": "0.3700",
      "high_price": "0.3710",
      "low_price": "0.3700",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:50:00Z",
      "open_price": "0.3700",
      "close_price": "0.3700",
      "high_price": "0.3700",
      "low_price": "0.3680",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T01:55:00Z",
      "open_price": "0.3693",
      "close_price": "0.3678",
      "high_price": "0.3693",
      "low_price": "0.3655",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:00:00Z",
      "open_price": "0.3678",
      "close_price": "0.3650",
      "high_price": "0.3690",
      "low_price": "0.3650",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:05:00Z",
      "open_price": "0.3686",
      "close_price": "0.3671",
      "high_price": "0.3686",
      "low_price": "0.3650",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:10:00Z",
      "open_price": "0.3650",
      "close_price": "0.3667",
      "high_price": "0.3671",
      "low_price": "0.3650",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:15:00Z",
      "open_price": "0.3667",
      "close_price": "0.3667",
      "high_price": "0.3675",
      "low_price": "0.3651",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:20:00Z",
      "open_price": "0.3667",
      "close_price": "0.3675",
      "high_price": "0.3675",
      "low_price": "0.3660",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:25:00Z",
      "open_price": "0.3675",
      "close_price": "0.3675",
      "high_price": "0.3675",
      "low_price": "0.3660",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:30:00Z",
      "open_price": "0.3675",
      "close_price": "0.3675",
      "high_price": "0.3675",
      "low_price": "0.3661",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:35:00Z",
      "open_price": "0.3675",
      "close_price": "0.3675",
      "high_price": "0.3675",
      "low_price": "0.3675",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:40:00Z",
      "open_price": "0.3675",
      "close_price": "0.3685",
      "high_price": "0.3685",
      "low_price": "0.3675",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:45:00Z",
      "open_price": "0.3693",
      "close_price": "0.3655",
      "high_price": "0.3693",
      "low_price": "0.3655",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:50:00Z",
      "open_price": "0.3655",
      "close_price": "0.3685",
      "high_price": "0.3685",
      "low_price": "0.3655",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T02:55:00Z",
      "open_price": "0.3685",
      "close_price": "0.3655",
      "high_price": "0.3693",
      "low_price": "0.3655",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:00:00Z",
      "open_price": "0.3655",
      "close_price": "0.3693",
      "high_price": "0.3693",
      "low_price": "0.3655",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:05:00Z",
      "open_price": "0.3693",
      "close_price": "0.3648",
      "high_price": "0.3693",
      "low_price": "0.3648",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:10:00Z",
      "open_price": "0.3648",
      "close_price": "0.3625",
      "high_price": "0.3648",
      "low_price": "0.3610",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:15:00Z",
      "open_price": "0.3607",
      "close_price": "0.3600",
      "high_price": "0.3620",
      "low_price": "0.3593",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:20:00Z",
      "open_price": "0.3580",
      "close_price": "0.3564",
      "high_price": "0.3580",
      "low_price": "0.3560",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:25:00Z",
      "open_price": "0.3560",
      "close_price": "0.3560",
      "high_price": "0.3587",
      "low_price": "0.3560",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:30:00Z",
      "open_price": "0.3560",
      "close_price": "0.3610",
      "high_price": "0.3610",
      "low_price": "0.3560",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:35:00Z",
      "open_price": "0.3610",
      "close_price": "0.3574",
      "high_price": "0.3610",
      "low_price": "0.3560",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:40:00Z",
      "open_price": "0.3574",
      "close_price": "0.3550",
      "high_price": "0.3575",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:45:00Z",
      "open_price": "0.3550",
      "close_price": "0.3550",
      "high_price": "0.3557",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:50:00Z",
      "open_price": "0.3550",
      "close_price": "0.3557",
      "high_price": "0.3557",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T03:55:00Z",
      "open_price": "0.3557",
      "close_price": "0.3550",
      "high_price": "0.3557",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:00:00Z",
      "open_price": "0.3550",
      "close_price": "0.3590",
      "high_price": "0.3590",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:05:00Z",
      "open_price": "0.3610",
      "close_price": "0.3590",
      "high_price": "0.3625",
      "low_price": "0.3590",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:10:00Z",
      "open_price": "0.3590",
      "close_price": "0.3590",
      "high_price": "0.3605",
      "low_price": "0.3560",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:15:00Z",
      "open_price": "0.3590",
      "close_price": "0.3590",
      "high_price": "0.3600",
      "low_price": "0.3560",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:20:00Z",
      "open_price": "0.3625",
      "close_price": "0.3621",
      "high_price": "0.3640",
      "low_price": "0.3621",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:25:00Z",
      "open_price": "0.3621",
      "close_price": "0.3629",
      "high_price": "0.3629",
      "low_price": "0.3575",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:30:00Z",
      "open_price": "0.3629",
      "close_price": "0.3587",
      "high_price": "0.3629",
      "low_price": "0.3587",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:35:00Z",
      "open_price": "0.3587",
      "close_price": "0.3572",
      "high_price": "0.3592",
      "low_price": "0.3572",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:40:00Z",
      "open_price": "0.3572",
      "close_price": "0.3553",
      "high_price": "0.3572",
      "low_price": "0.3553",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:45:00Z",
      "open_price": "0.3553",
      "close_price": "0.3535",
      "high_price": "0.3553",
      "low_price": "0.3535",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:50:00Z",
      "open_price": "0.3535",
      "close_price": "0.3530",
      "high_price": "0.3535",
      "low_price": "0.3525",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T04:55:00Z",
      "open_price": "0.3525",
      "close_price": "0.3521",
      "high_price": "0.3530",
      "low_price": "0.3521",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:00:00Z",
      "open_price": "0.3521",
      "close_price": "0.3512",
      "high_price": "0.3521",
      "low_price": "0.3512",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:05:00Z",
      "open_price": "0.3512",
      "close_price": "0.3521",
      "high_price": "0.3521",
      "low_price": "0.3512",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:10:00Z",
      "open_price": "0.3521",
      "close_price": "0.3550",
      "high_price": "0.3551",
      "low_price": "0.3521",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:15:00Z",
      "open_price": "0.3550",
      "close_price": "0.3540",
      "high_price": "0.3550",
      "low_price": "0.3526",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:20:00Z",
      "open_price": "0.3540",
      "close_price": "0.3540",
      "high_price": "0.3540",
      "low_price": "0.3526",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:25:00Z",
      "open_price": "0.3540",
      "close_price": "0.3504",
      "high_price": "0.3540",
      "low_price": "0.3504",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:30:00Z",
      "open_price": "0.3504",
      "close_price": "0.3539",
      "high_price": "0.3539",
      "low_price": "0.3504",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:35:00Z",
      "open_price": "0.3539",
      "close_price": "0.3570",
      "high_price": "0.3570",
      "low_price": "0.3530",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:40:00Z",
      "open_price": "0.3570",
      "close_price": "0.3572",
      "high_price": "0.3572",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:45:00Z",
      "open_price": "0.3578",
      "close_price": "0.3597",
      "high_price": "0.3600",
      "low_price": "0.3578",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:50:00Z",
      "open_price": "0.3595",
      "close_price": "0.3595",
      "high_price": "0.3610",
      "low_price": "0.3595",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T05:55:00Z",
      "open_price": "0.3595",
      "close_price": "0.3570",
      "high_price": "0.3618",
      "low_price": "0.3570",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:00:00Z",
      "open_price": "0.3570",
      "close_price": "0.3570",
      "high_price": "0.3570",
      "low_price": "0.3570",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:05:00Z",
      "open_price": "0.3570",
      "close_price": "0.3550",
      "high_price": "0.3570",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:10:00Z",
      "open_price": "0.3550",
      "close_price": "0.3541",
      "high_price": "0.3550",
      "low_price": "0.3541",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:15:00Z",
      "open_price": "0.3541",
      "close_price": "0.3550",
      "high_price": "0.3550",
      "low_price": "0.3541",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:20:00Z",
      "open_price": "0.3550",
      "close_price": "0.3510",
      "high_price": "0.3550",
      "low_price": "0.3510",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:25:00Z",
      "open_price": "0.3510",
      "close_price": "0.3520",
      "high_price": "0.3520",
      "low_price": "0.3510",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:30:00Z",
      "open_price": "0.3520",
      "close_price": "0.3518",
      "high_price": "0.3520",
      "low_price": "0.3515",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:35:00Z",
      "open_price": "0.3518",
      "close_price": "0.3517",
      "high_price": "0.3518",
      "low_price": "0.3515",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:40:00Z",
      "open_price": "0.3517",
      "close_price": "0.3518",
      "high_price": "0.3518",
      "low_price": "0.3515",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:45:00Z",
      "open_price": "0.3518",
      "close_price": "0.3520",
      "high_price": "0.3520",
      "low_price": "0.3518",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:50:00Z",
      "open_price": "0.3520",
      "close_price": "0.3535",
      "high_price": "0.3535",
      "low_price": "0.3520",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T06:55:00Z",
      "open_price": "0.3535",
      "close_price": "0.3552",
      "high_price": "0.3552",
      "low_price": "0.3535",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:00:00Z",
      "open_price": "0.3552",
      "close_price": "0.3520",
      "high_price": "0.3560",
      "low_price": "0.3520",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:05:00Z",
      "open_price": "0.3545",
      "close_price": "0.3540",
      "high_price": "0.3545",
      "low_price": "0.3540",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:10:00Z",
      "open_price": "0.3540",
      "close_price": "0.3570",
      "high_price": "0.3575",
      "low_price": "0.3522",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:15:00Z",
      "open_price": "0.3523",
      "close_price": "0.3550",
      "high_price": "0.3550",
      "low_price": "0.3523",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:20:00Z",
      "open_price": "0.3550",
      "close_price": "0.3550",
      "high_price": "0.3550",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:25:00Z",
      "open_price": "0.3550",
      "close_price": "0.3570",
      "high_price": "0.3570",
      "low_price": "0.3531",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:30:00Z",
      "open_price": "0.3570",
      "close_price": "0.3569",
      "high_price": "0.3570",
      "low_price": "0.3569",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:35:00Z",
      "open_price": "0.3569",
      "close_price": "0.3510",
      "high_price": "0.3569",
      "low_price": "0.3510",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:40:00Z",
      "open_price": "0.3510",
      "close_price": "0.3515",
      "high_price": "0.3515",
      "low_price": "0.3493",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:45:00Z",
      "open_price": "0.3515",
      "close_price": "0.3493",
      "high_price": "0.3515",
      "low_price": "0.3493",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:50:00Z",
      "open_price": "0.3489",
      "close_price": "0.3483",
      "high_price": "0.3489",
      "low_price": "0.3479",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T07:55:00Z",
      "open_price": "0.3500",
      "close_price": "0.3481",
      "high_price": "0.3500",
      "low_price": "0.3479",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:00:00Z",
      "open_price": "0.3481",
      "close_price": "0.3464",
      "high_price": "0.3481",
      "low_price": "0.3464",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:05:00Z",
      "open_price": "0.3464",
      "close_price": "0.3484",
      "high_price": "0.3512",
      "low_price": "0.3449",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:10:00Z",
      "open_price": "0.3484",
      "close_price": "0.3420",
      "high_price": "0.3484",
      "low_price": "0.3409",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:15:00Z",
      "open_price": "0.3420",
      "close_price": "0.3396",
      "high_price": "0.3430",
      "low_price": "0.3396",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:20:00Z",
      "open_price": "0.3396",
      "close_price": "0.3421",
      "high_price": "0.3449",
      "low_price": "0.3396",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:25:00Z",
      "open_price": "0.3421",
      "close_price": "0.3449",
      "high_price": "0.3449",
      "low_price": "0.3421",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:30:00Z",
      "open_price": "0.3449",
      "close_price": "0.3462",
      "high_price": "0.3462",
      "low_price": "0.3449",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:35:00Z",
      "open_price": "0.3462",
      "close_price": "0.3469",
      "high_price": "0.3479",
      "low_price": "0.3449",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:40:00Z",
      "open_price": "0.3449",
      "close_price": "0.3424",
      "high_price": "0.3449",
      "low_price": "0.3410",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:45:00Z",
      "open_price": "0.3424",
      "close_price": "0.3459",
      "high_price": "0.3459",
      "low_price": "0.3424",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:50:00Z",
      "open_price": "0.3459",
      "close_price": "0.3454",
      "high_price": "0.3459",
      "low_price": "0.3425",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T08:55:00Z",
      "open_price": "0.3454",
      "close_price": "0.3479",
      "high_price": "0.3479",
      "low_price": "0.3425",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:00:00Z",
      "open_price": "0.3479",
      "close_price": "0.3444",
      "high_price": "0.3489",
      "low_price": "0.3444",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:05:00Z",
      "open_price": "0.3449",
      "close_price": "0.3425",
      "high_price": "0.3449",
      "low_price": "0.3425",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:10:00Z",
      "open_price": "0.3444",
      "close_price": "0.3429",
      "high_price": "0.3444",
      "low_price": "0.3429",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:15:00Z",
      "open_price": "0.3429",
      "close_price": "0.3404",
      "high_price": "0.3444",
      "low_price": "0.3404",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:20:00Z",
      "open_price": "0.3404",
      "close_price": "0.3444",
      "high_price": "0.3444",
      "low_price": "0.3404",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:25:00Z",
      "open_price": "0.3444",
      "close_price": "0.3464",
      "high_price": "0.3469",
      "low_price": "0.3439",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:30:00Z",
      "open_price": "0.3464",
      "close_price": "0.3444",
      "high_price": "0.3464",
      "low_price": "0.3444",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:35:00Z",
      "open_price": "0.3444",
      "close_price": "0.3520",
      "high_price": "0.3522",
      "low_price": "0.3444",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:40:00Z",
      "open_price": "0.3520",
      "close_price": "0.3514",
      "high_price": "0.3520",
      "low_price": "0.3514",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:45:00Z",
      "open_price": "0.3515",
      "close_price": "0.3500",
      "high_price": "0.3520",
      "low_price": "0.3500",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:50:00Z",
      "open_price": "0.3500",
      "close_price": "0.3610",
      "high_price": "0.3610",
      "low_price": "0.3500",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T09:55:00Z",
      "open_price": "0.3610",
      "close_price": "0.3621",
      "high_price": "0.3625",
      "low_price": "0.3572",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:00:00Z",
      "open_price": "0.3621",
      "close_price": "0.3600",
      "high_price": "0.3621",
      "low_price": "0.3595",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:05:00Z",
      "open_price": "0.3600",
      "close_price": "0.3565",
      "high_price": "0.3609",
      "low_price": "0.3565",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:10:00Z",
      "open_price": "0.3565",
      "close_price": "0.3570",
      "high_price": "0.3590",
      "low_price": "0.3565",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:15:00Z",
      "open_price": "0.3570",
      "close_price": "0.3590",
      "high_price": "0.3590",
      "low_price": "0.3570",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:20:00Z",
      "open_price": "0.3590",
      "close_price": "0.3550",
      "high_price": "0.3590",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:25:00Z",
      "open_price": "0.3550",
      "close_price": "0.3551",
      "high_price": "0.3575",
      "low_price": "0.3550",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:30:00Z",
      "open_price": "0.3551",
      "close_price": "0.3519",
      "high_price": "0.3551",
      "low_price": "0.3519",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:35:00Z",
      "open_price": "0.3519",
      "close_price": "0.3550",
      "high_price": "0.3560",
      "low_price": "0.3519",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:40:00Z",
      "open_price": "0.3550",
      "close_price": "0.3520",
      "high_price": "0.3560",
      "low_price": "0.3519",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:45:00Z",
      "open_price": "0.3520",
      "close_price": "0.3539",
      "high_price": "0.3539",
      "low_price": "0.3508",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:50:00Z",
      "open_price": "0.3539",
      "close_price": "0.3520",
      "high_price": "0.3539",
      "low_price": "0.3520",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T10:55:00Z",
      "open_price": "0.3520",
      "close_price": "0.3520",
      "high_price": "0.3520",
      "low_price": "0.3520",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:00:00Z",
      "open_price": "0.3520",
      "close_price": "0.3558",
      "high_price": "0.3558",
      "low_price": "0.3520",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:05:00Z",
      "open_price": "0.3558",
      "close_price": "0.3567",
      "high_price": "0.3580",
      "low_price": "0.3558",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:10:00Z",
      "open_price": "0.3580",
      "close_price": "0.3580",
      "high_price": "0.3580",
      "low_price": "0.3580",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:15:00Z",
      "open_price": "0.3580",
      "close_price": "0.3569",
      "high_price": "0.3580",
      "low_price": "0.3530",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:20:00Z",
      "open_price": "0.3569",
      "close_price": "0.3530",
      "high_price": "0.3569",
      "low_price": "0.3530",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:25:00Z",
      "open_price": "0.3530",
      "close_price": "0.3531",
      "high_price": "0.3569",
      "low_price": "0.3530",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:30:00Z",
      "open_price": "0.3530",
      "close_price": "0.3530",
      "high_price": "0.3530",
      "low_price": "0.3520",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:35:00Z",
      "open_price": "0.3530",
      "close_price": "0.3530",
      "high_price": "0.3530",
      "low_price": "0.3530",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:40:00Z",
      "open_price": "0.3530",
      "close_price": "0.3580",
      "high_price": "0.3580",
      "low_price": "0.3530",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:45:00Z",
      "open_price": "0.3580",
      "close_price": "0.3580",
      "high_price": "0.3580",
      "low_price": "0.3580",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:50:00Z",
      "open_price": "0.3595",
      "close_price": "0.3625",
      "high_price": "0.3625",
      "low_price": "0.3595",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T11:55:00Z",
      "open_price": "0.3625",
      "close_price": "0.3651",
      "high_price": "0.3651",
      "low_price": "0.3625",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:00:00Z",
      "open_price": "0.3651",
      "close_price": "0.3690",
      "high_price": "0.3690",
      "low_price": "0.3625",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:05:00Z",
      "open_price": "0.3650",
      "close_price": "0.3620",
      "high_price": "0.3688",
      "low_price": "0.3620",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:10:00Z",
      "open_price": "0.3620",
      "close_price": "0.3600",
      "high_price": "0.3660",
      "low_price": "0.3600",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:15:00Z",
      "open_price": "0.3600",
      "close_price": "0.3652",
      "high_price": "0.3652",
      "low_price": "0.3600",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:20:00Z",
      "open_price": "0.3652",
      "close_price": "0.3724",
      "high_price": "0.3734",
      "low_price": "0.3652",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:25:00Z",
      "open_price": "0.3705",
      "close_price": "0.3720",
      "high_price": "0.3720",
      "low_price": "0.3690",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:30:00Z",
      "open_price": "0.3720",
      "close_price": "0.3700",
      "high_price": "0.3720",
      "low_price": "0.3690",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:35:00Z",
      "open_price": "0.3700",
      "close_price": "0.3766",
      "high_price": "0.3808",
      "low_price": "0.3700",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:40:00Z",
      "open_price": "0.3766",
      "close_price": "0.3750",
      "high_price": "0.3803",
      "low_price": "0.3750",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:45:00Z",
      "open_price": "0.3750",
      "close_price": "0.3800",
      "high_price": "0.3800",
      "low_price": "0.3750",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:50:00Z",
      "open_price": "0.3800",
      "close_price": "0.3750",
      "high_price": "0.3800",
      "low_price": "0.3750",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T12:55:00Z",
      "open_price": "0.3750",
      "close_price": "0.3710",
      "high_price": "0.3770",
      "low_price": "0.3700",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:00:00Z",
      "open_price": "0.3710",
      "close_price": "0.3730",
      "high_price": "0.3748",
      "low_price": "0.3710",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:05:00Z",
      "open_price": "0.3730",
      "close_price": "0.3780",
      "high_price": "0.3780",
      "low_price": "0.3730",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:10:00Z",
      "open_price": "0.3789",
      "close_price": "0.3780",
      "high_price": "0.3789",
      "low_price": "0.3761",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:15:00Z",
      "open_price": "0.3780",
      "close_price": "0.3789",
      "high_price": "0.3789",
      "low_price": "0.3751",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:20:00Z",
      "open_price": "0.3781",
      "close_price": "0.3731",
      "high_price": "0.3781",
      "low_price": "0.3731",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:25:00Z",
      "open_price": "0.3731",
      "close_price": "0.3686",
      "high_price": "0.3731",
      "low_price": "0.3686",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:30:00Z",
      "open_price": "0.3690",
      "close_price": "0.3686",
      "high_price": "0.3700",
      "low_price": "0.3686",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:35:00Z",
      "open_price": "0.3686",
      "close_price": "0.3670",
      "high_price": "0.3686",
      "low_price": "0.3670",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:40:00Z",
      "open_price": "0.3665",
      "close_price": "0.3700",
      "high_price": "0.3700",
      "low_price": "0.3660",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:45:00Z",
      "open_price": "0.3700",
      "close_price": "0.3731",
      "high_price": "0.3731",
      "low_price": "0.3670",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:50:00Z",
      "open_price": "0.3731",
      "close_price": "0.3741",
      "high_price": "0.3751",
      "low_price": "0.3731",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T13:55:00Z",
      "open_price": "0.3741",
      "close_price": "0.3682",
      "high_price": "0.3741",
      "low_price": "0.3682",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:00:00Z",
      "open_price": "0.3682",
      "close_price": "0.3700",
      "high_price": "0.3700",
      "low_price": "0.3661",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:05:00Z",
      "open_price": "0.3700",
      "close_price": "0.3660",
      "high_price": "0.3700",
      "low_price": "0.3660",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:10:00Z",
      "open_price": "0.3644",
      "close_price": "0.3680",
      "high_price": "0.3680",
      "low_price": "0.3640",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:15:00Z",
      "open_price": "0.3680",
      "close_price": "0.3670",
      "high_price": "0.3704",
      "low_price": "0.3670",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:20:00Z",
      "open_price": "0.3670",
      "close_price": "0.3700",
      "high_price": "0.3710",
      "low_price": "0.3670",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:25:00Z",
      "open_price": "0.3700",
      "close_price": "0.3710",
      "high_price": "0.3720",
      "low_price": "0.3700",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:30:00Z",
      "open_price": "0.3710",
      "close_price": "0.3720",
      "high_price": "0.3720",
      "low_price": "0.3710",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:35:00Z",
      "open_price": "0.3720",
      "close_price": "0.3781",
      "high_price": "0.3800",
      "low_price": "0.3720",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:40:00Z",
      "open_price": "0.3781",
      "close_price": "0.3762",
      "high_price": "0.3836",
      "low_price": "0.3761",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:45:00Z",
      "open_price": "0.3762",
      "close_price": "0.3762",
      "high_price": "0.3800",
      "low_price": "0.3762",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:50:00Z",
      "open_price": "0.3762",
      "close_price": "0.3790",
      "high_price": "0.3790",
      "low_price": "0.3731",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T14:55:00Z",
      "open_price": "0.3790",
      "close_price": "0.3817",
      "high_price": "0.3817",
      "low_price": "0.3790",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:00:00Z",
      "open_price": "0.3817",
      "close_price": "0.3770",
      "high_price": "0.3817",
      "low_price": "0.3770",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:05:00Z",
      "open_price": "0.3770",
      "close_price": "0.3760",
      "high_price": "0.3788",
      "low_price": "0.3760",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:10:00Z",
      "open_price": "0.3762",
      "close_price": "0.3754",
      "high_price": "0.3762",
      "low_price": "0.3751",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:15:00Z",
      "open_price": "0.3754",
      "close_price": "0.3777",
      "high_price": "0.3780",
      "low_price": "0.3754",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:20:00Z",
      "open_price": "0.3777",
      "close_price": "0.3788",
      "high_price": "0.3788",
      "low_price": "0.3777",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:25:00Z",
      "open_price": "0.3777",
      "close_price": "0.3777",
      "high_price": "0.3792",
      "low_price": "0.3777",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:30:00Z",
      "open_price": "0.3777",
      "close_price": "0.3751",
      "high_price": "0.3790",
      "low_price": "0.3751",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:35:00Z",
      "open_price": "0.3751",
      "close_price": "0.3751",
      "high_price": "0.3790",
      "low_price": "0.3751",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:40:00Z",
      "open_price": "0.3751",
      "close_price": "0.3740",
      "high_price": "0.3752",
      "low_price": "0.3740",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:45:00Z",
      "open_price": "0.3740",
      "close_price": "0.3743",
      "high_price": "0.3765",
      "low_price": "0.3740",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:50:00Z",
      "open_price": "0.3743",
      "close_price": "0.3790",
      "high_price": "0.3790",
      "low_price": "0.3743",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T15:55:00Z",
      "open_price": "0.3790",
      "close_price": "0.3750",
      "high_price": "0.3790",
      "low_price": "0.3750",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:00:00Z",
      "open_price": "0.3750",
      "close_price": "0.3780",
      "high_price": "0.3789",
      "low_price": "0.3750",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:05:00Z",
      "open_price": "0.3780",
      "close_price": "0.3789",
      "high_price": "0.3789",
      "low_price": "0.3780",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:10:00Z",
      "open_price": "0.3789",
      "close_price": "0.3830",
      "high_price": "0.3830",
      "low_price": "0.3789",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:15:00Z",
      "open_price": "0.3830",
      "close_price": "0.3830",
      "high_price": "0.3850",
      "low_price": "0.3810",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:20:00Z",
      "open_price": "0.3796",
      "close_price": "0.3783",
      "high_price": "0.3800",
      "low_price": "0.3783",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:25:00Z",
      "open_price": "0.3783",
      "close_price": "0.3731",
      "high_price": "0.3783",
      "low_price": "0.3731",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:30:00Z",
      "open_price": "0.3731",
      "close_price": "0.3706",
      "high_price": "0.3731",
      "low_price": "0.3706",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:35:00Z",
      "open_price": "0.3701",
      "close_price": "0.3701",
      "high_price": "0.3706",
      "low_price": "0.3701",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:40:00Z",
      "open_price": "0.3701",
      "close_price": "0.3706",
      "high_price": "0.3721",
      "low_price": "0.3701",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:45:00Z",
      "open_price": "0.3706",
      "close_price": "0.3689",
      "high_price": "0.3706",
      "low_price": "0.3689",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:50:00Z",
      "open_price": "0.3701",
      "close_price": "0.3676",
      "high_price": "0.3701",
      "low_price": "0.3676",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T16:55:00Z",
      "open_price": "0.3676",
      "close_price": "0.3710",
      "high_price": "0.3710",
      "low_price": "0.3676",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:00:00Z",
      "open_price": "0.3710",
      "close_price": "0.3720",
      "high_price": "0.3740",
      "low_price": "0.3696",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:05:00Z",
      "open_price": "0.3720",
      "close_price": "0.3720",
      "high_price": "0.3745",
      "low_price": "0.3720",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:10:00Z",
      "open_price": "0.3720",
      "close_price": "0.3710",
      "high_price": "0.3720",
      "low_price": "0.3710",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:15:00Z",
      "open_price": "0.3710",
      "close_price": "0.3676",
      "high_price": "0.3730",
      "low_price": "0.3676",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:20:00Z",
      "open_price": "0.3660",
      "close_price": "0.3640",
      "high_price": "0.3700",
      "low_price": "0.3640",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:25:00Z",
      "open_price": "0.3640",
      "close_price": "0.3640",
      "high_price": "0.3640",
      "low_price": "0.3640",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:30:00Z",
      "open_price": "0.3640",
      "close_price": "0.3640",
      "high_price": "0.3649",
      "low_price": "0.3640",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:35:00Z",
      "open_price": "0.3640",
      "close_price": "0.3659",
      "high_price": "0.3659",
      "low_price": "0.3640",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:40:00Z",
      "open_price": "0.3659",
      "close_price": "0.3674",
      "high_price": "0.3699",
      "low_price": "0.3659",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:45:00Z",
      "open_price": "0.3674",
      "close_price": "0.3593",
      "high_price": "0.3674",
      "low_price": "0.3593",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:50:00Z",
      "open_price": "0.3610",
      "close_price": "0.3600",
      "high_price": "0.3640",
      "low_price": "0.3600",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T17:55:00Z",
      "open_price": "0.3600",
      "close_price": "0.3620",
      "high_price": "0.3620",
      "low_price": "0.3600",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:00:00Z",
      "open_price": "0.3620",
      "close_price": "0.3620",
      "high_price": "0.3635",
      "low_price": "0.3620",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:05:00Z",
      "open_price": "0.3635",
      "close_price": "0.3640",
      "high_price": "0.3640",
      "low_price": "0.3635",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:10:00Z",
      "open_price": "0.3640",
      "close_price": "0.3699",
      "high_price": "0.3699",
      "low_price": "0.3640",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:15:00Z",
      "open_price": "0.3699",
      "close_price": "0.3698",
      "high_price": "0.3699",
      "low_price": "0.3660",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:20:00Z",
      "open_price": "0.3698",
      "close_price": "0.3696",
      "high_price": "0.3698",
      "low_price": "0.3696",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:25:00Z",
      "open_price": "0.3696",
      "close_price": "0.3620",
      "high_price": "0.3696",
      "low_price": "0.3620",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:30:00Z",
      "open_price": "0.3620",
      "close_price": "0.3620",
      "high_price": "0.3640",
      "low_price": "0.3620",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:35:00Z",
      "open_price": "0.3620",
      "close_price": "0.3630",
      "high_price": "0.3630",
      "low_price": "0.3600",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:40:00Z",
      "open_price": "0.3640",
      "close_price": "0.3679",
      "high_price": "0.3679",
      "low_price": "0.3619",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:45:00Z",
      "open_price": "0.3679",
      "close_price": "0.3647",
      "high_price": "0.3679",
      "low_price": "0.3620",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:50:00Z",
      "open_price": "0.3647",
      "close_price": "0.3675",
      "high_price": "0.3677",
      "low_price": "0.3647",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T18:55:00Z",
      "open_price": "0.3675",
      "close_price": "0.3720",
      "high_price": "0.3720",
      "low_price": "0.3675",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:00:00Z",
      "open_price": "0.3720",
      "close_price": "0.3689",
      "high_price": "0.3720",
      "low_price": "0.3689",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:05:00Z",
      "open_price": "0.3689",
      "close_price": "0.3689",
      "high_price": "0.3689",
      "low_price": "0.3680",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:10:00Z",
      "open_price": "0.3689",
      "close_price": "0.3725",
      "high_price": "0.3725",
      "low_price": "0.3662",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:15:00Z",
      "open_price": "0.3720",
      "close_price": "0.3710",
      "high_price": "0.3745",
      "low_price": "0.3710",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:20:00Z",
      "open_price": "0.3710",
      "close_price": "0.3750",
      "high_price": "0.3750",
      "low_price": "0.3710",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:25:00Z",
      "open_price": "0.3740",
      "close_price": "0.3744",
      "high_price": "0.3744",
      "low_price": "0.3724",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:30:00Z",
      "open_price": "0.3744",
      "close_price": "0.3720",
      "high_price": "0.3744",
      "low_price": "0.3720",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:35:00Z",
      "open_price": "0.3720",
      "close_price": "0.3736",
      "high_price": "0.3736",
      "low_price": "0.3711",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:40:00Z",
      "open_price": "0.3736",
      "close_price": "0.3711",
      "high_price": "0.3736",
      "low_price": "0.3711",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:45:00Z",
      "open_price": "0.3730",
      "close_price": "0.3728",
      "high_price": "0.3730",
      "low_price": "0.3728",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:50:00Z",
      "open_price": "0.3728",
      "close_price": "0.3725",
      "high_price": "0.3728",
      "low_price": "0.3706",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T19:55:00Z",
      "open_price": "0.3725",
      "close_price": "0.3710",
      "high_price": "0.3725",
      "low_price": "0.3701",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:00:00Z",
      "open_price": "0.3710",
      "close_price": "0.3691",
      "high_price": "0.3710",
      "low_price": "0.3691",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:05:00Z",
      "open_price": "0.3691",
      "close_price": "0.3662",
      "high_price": "0.3691",
      "low_price": "0.3662",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:10:00Z",
      "open_price": "0.3662",
      "close_price": "0.3681",
      "high_price": "0.3691",
      "low_price": "0.3662",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:15:00Z",
      "open_price": "0.3681",
      "close_price": "0.3706",
      "high_price": "0.3725",
      "low_price": "0.3662",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:20:00Z",
      "open_price": "0.3706",
      "close_price": "0.3710",
      "high_price": "0.3715",
      "low_price": "0.3706",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:25:00Z",
      "open_price": "0.3710",
      "close_price": "0.3725",
      "high_price": "0.3725",
      "low_price": "0.3691",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:30:00Z",
      "open_price": "0.3725",
      "close_price": "0.3700",
      "high_price": "0.3725",
      "low_price": "0.3673",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:35:00Z",
      "open_price": "0.3700",
      "close_price": "0.3681",
      "high_price": "0.3700",
      "low_price": "0.3681",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:40:00Z",
      "open_price": "0.3673",
      "close_price": "0.3663",
      "high_price": "0.3690",
      "low_price": "0.3663",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    },
    {
      "begins_at": "2018-02-11T20:45:00Z",
      "open_price": "0.3663",
      "close_price": "0.3700",
      "high_price": "0.3700",
      "low_price": "0.3663",
      "volume": "0.0000",
      "session": "reg",
      "interpolated": false
    }
  ],
  "bounds": "24_7",
  "interval": "5minute",
  "span": "day",
  "symbol": "XLMUSD",
  "id": "7a04fe7a-e3a8-4a07-8c35-d0fec9f35569",
  "open_price": null,
  "open_time": null,
  "previous_close_price": null,
  "previous_close_time": null
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.