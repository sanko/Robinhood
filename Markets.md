# Market Information

- [Get List of Markets](#get-list-of-markets)
- [Get Market Information](#get-market-information)
- [Get Market Hours](#get-market-hours)

## Get List of Markets

`GET /markets/`

Retrieves a list of markets securities are traded on. Returns an array of markets (see below for details)

Note that for this particular endpoint `todays_hours` may not reflect the current date.

## Get Market Information

`GET /markets/{mic}/`

Get information on a particular market. 

### Response Details

| Key           | Type   | Description |
|---------------|--------|-------------|
| website       | URL    | URL for that market's website |
| city          | String | City the market is based in | 
| name          | String | Full name of the market |
| url           | URL    | Endpoint for this market |
| country       | String | Country this market is located in |
| todays_hours  | URL    | Endpoint containing today's operating hours for that market |
| operating_mic | String | Operator's Market Identifier Code |
| acronym       | String | Acronym for that market |
| timezone      | String | Timezone the market operates in |
| mic           | String | Market Identifier Code |

## Get Market Hours

`GET /markets/{mic}/hours/{date}`

Get hours on a particular market for that day. If the market is not open that particular day, all times return `null`.

| Key                 | Type     | Description |
|---------------------|----------|-------------|
| closes_at           | ISO 8601 | Time the market closes at |
| extended_opens_at   | ISO 8601 | Time the market opens at including extended hours | 
| next_open_hours     | URL      | Endpoint containing the next day's opening hours |
| previous_open_hours | URL      | Endpoint containing the previous day's opening hours |
| is_open             | Bool     | Is the market open that day? |
| extended_closes_at  | ISO 8601 | Time the market closes at including extended hours |
| date                | ISO 8601 | Current date |
| opens_at            | ISO 8601 | Acronym for thaat market |