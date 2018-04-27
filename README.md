# Unofficial Documentation of Robinhood Trade's Private API

## **NOTICE: I do not need pull requests or other contributions of endopoints!

Table of Contents:

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
	- [Development](#development)
- [API Security](#api-security)
- [API Error Reporting](#api-error-reporting)
- [Pagination](#pagination)
	- [Semi-Pagination](#semi-pagination)

## See also

- [Banking.md](Banking.md) for bank accounts & ACH transfers methods
- [Order.md](Order.md) for order-related functions (placing, cancelling, listing previous orders, etc.)
- [Options.md](Options.md) for options related endpoints
- [Quote.md](Quote.md) for stock quotes
- [Fundamentals.md](Fundamentals.md) for basic, fundamental data
- [Instrument.md](Instrument.md) for internal reference to financial instruments
- [Watchlist.md](Watchlist.md) for watchlists management
- [Account.md](Account.md) talks about gathering and modifying user and account information
- [Settings.md](Settings.md) covers notifications and other settings
- [Markets.md](Markets.md) describes the API for getting basic info about specific exchanges themselves
- [Referrals.md](Referrals.md) is all about account referrals
- [Statistics.md](Statistics.md) exposes the new social/statistical endpoints
- [Tags.md](Tags.md) exposes the new categorizing endpoints

Things I have yet to organize are in [Unsorted.md](Unsorted.md)

## Account and User Data

 - [Gather basic user account information](/api/user/get.md): `GET /user/`
 - [Gather user ID strings](/api/user/id/get.md): `GET /user/id/`
 - [Gather personal acount information](/api/user/basic_info/get.md): `GET /user/basic_info/`
 - [Gather your list of brokerage accounts](/api/accounts/get.md): `GET /accounts/`
 - [Gather paginated list of relevant dividend payments](/api/dividends/get.md): `GET /dividends/`
 - [Gather data for a single dividend payment](/api/dividends/{id}/get.md): `GET /dividends/{id}/`
 - [Grab user's investment experience information](/api/user/investment_profile/get.md): `GET /user/investment_profile/`
 - [Partially update user's investment experience information](/api/user/investment_profile/patch.md): `PATCH /user/investment_profile/`
 - [Fully replace user's investment experience information](/api/user/investment_profile/put.md): `PUT /user/investment_profile/`
 - [Grab extra info about the user](/api/user/additional_info/get.md): `GET /user/additional_info/`
 - [Partially update extra info about the user](/api/user/additional_info/patch.md): `PATCH /user/additional_info/`
 - [Fully replace extra info about the user](/api/user/additional_info/put.md): `PUT /user/additional_info/`
 - [Grab employment info about the user](/api/user/employment/get.md): `GET /user/employment/`
 - [Partially update employment info for the user](/api/user/employment/patch.md): `PATCH /user/employment/`
 - [Fully replace employment info for the user](/api/user/employment/put.md): `PUT /user/employment/`

## Authorization

If you plan to do much beyond requesting quote data, you'll need to log in and use an authorization token.

 - [Request password reset](/api/password_reset/request/post.md): `POST /password_reset/request/`
 - [Complete password reset](/api/password_reset/post.md): `POST /password_reset/`

### OAuth2

Crypto and Options both require OAuth2 support.

 - [Log in and refresh OAuth2 token](/api/oauth2/token/post.md) `POST /oauth2/token/`

### Old Skool

 - [Log in (old skool)](/api/api-token-auth/post.md): `POST /api-token-auth/`
 - [Log out (old skool)](/api/api-token-logout/post.md): `POST /api-token-logout/`
 - [Migrate old skool auth token to OAuth2](/api/oauth2/migrate_token/post.md) `POST /oauth2/migrate_token/`

## Banking

You gotta have at least one account attached to your Robinhood account to move money back and forth.

 - [Attach a new bank account](/api/ach/relationships/post.md): `POST /ach/relationships/`
 - [Verify a new bank account](/ach/relationships/{id}/micro_deposits/verify/post.md): `POST /ach/relationships/{id}/micro_deposits/verify/`
 - [Gather list of attached bank accounts](/api/ach/relationships/get.md): `GET /ach/relationships/`
 - [Get info on a single attached bank account](/api/ach/relationships/{id}/get.md): `GET /ach/relationships/{id}/`
 - [Remove an attached bank account](/api/ach/relationships/{id}/unlink/post.md): `POST /ach/relationships/{id}/unlink/`
 - [Schedule a regular deposit](/api/ach/deposit_schedules/post.md): `POST /ach/deposit_schedules/`
 - [Gather list of scheduled deposits](/api/ach/deposit_schedules/get.md): `GET /ach/deposit_schedules/`
 - [Cancel a scheduled deposit](/api/ach/deposit_schedules/{id}/delete.md): `DELETE /ach/deposit_schedules/{id}/`

## Equity Instruments

Stocks and ETFs are plain ol' instruments and are served from the base url `https://api.robinhood.com/`. You'll need the data from here to place an order but these endpoints do not typically require authoization tokens.

 - [Gather paginated list of instruments](/api/instruments/get.md): `GET /instruments/`
 - [Gather data on a single instrument](/api/instruments/{id}/get.md): `GET /instruments/{id}/`

### Market Data

Quote data is served from the base url `https://api.robinhood.com/`.

 - [Gather quote data for a single stock or ETF by ticker symbol](/api/marketdata/quotes/{symbol}/get.md): `GET /marketdata/quotes/{symbol}/`
 - [Gather quote data for a list of stocks and ETFs by ticker symbol or instrument ID](/api/marketdata/quotes/get.md): `GET /marketdata/quotes/`
 - [Gather historical quote data for a single stock or ETF by ticker symbol](/api/marketdata/historicals/{symbol}/get.md): `GET /marketdata/historicals/{symbol}/`
 - [Gather historical quote data for a list of stocks and ETFs by ticker symbol or instrument ID](/api/marketdata/historicals/get.md): `GET /marketdata/historicals/`

## Options

Options endpoints require an authorized client. Either old skool or OAuth will work.

 - [Find out the maximum option level supported by your account](/api/options/suitability/get.md): `GET /options/suitability/`
 - [Gather paginated list of options chains](/api/options/chains/get.md): `GET /options/chains/`
 - [Gather paginated list of options instruments](/api/options/instruments/get.md): `GET /options/instruments/`
 - [Gather an options instrument by id](/api/options/instruments/{id}/get.md): `GET /options/instruments/{id}/`
 - [Gather paginated list of options orders](/api/options/orders/get.md): `GET /options/orders/`
 - [Gather data from a single options order by id](/api/options/orders/{id}/get.md): `GET /options/orders/{id}/`
 - [Place an options order](/api/options/orders/post.md): `POST /options/orders/`
 - [Cancel a standing options order by id](/api/options/orders/{id}/cancel/post.md): `POST /options/orders/{id}/cancel/`
 - [Gather paginated list of options positions](/api/options/positions/get.md): `POST /options/positions/`
 - [Grab data on an options position by id](/api/options/positions/{id}/get.md): `POST /options/positions/{id}/`

### Market Data

Quote data is served from the base url `https://api.robinhood.com/`.

 - [Get market data for a list of options Instruments](/api/marketdata/options/get.md): `GET /marketdata/options/`
 - [Get market data for a single options Instrument](/api/marketdata/options/{id}/get.md): `GET /marketdata/options/{id}/`
 - [Get historical data for a single options Instrument](/api/marketdata/options/historicals/{id}/get.md): `GET /marketdata/options/historicals/{id}/`
 - [Get historical data for a multiple options Instrument](/api/marketdata/options/historicals/{id}/get.md): `GET /marketdata/options/historicals/{id}/`

## Crypto

Crypto endpoints require OAuth2. This will make things hard for 3rd party use unless Robinhood decides to allow generation of keys. The base url is `https://nummus.robinhood.com/`.

 - [Activate or Reactivate a Crypto Account](/nummus/activations/post.md): `POST /activations/`
 - [Get a List of Active Crypto Accounts](/nummus/activations/get.md): `GET /activations/`
 - [Get a List of Crypto Portfolios](/nummus/portfolios/get.md): `GET /portfolios/`
 - [Get a Single Crypto's Portfolio Information](/nummus/portfolios/{id}/get.md): `GET /portfolios/{id}/`
 - [Get list of Crypto Trading Halts](/nummus/halts/get.md): `GET /halts/`
 - [Get a List of Crypto Holdings](/nummus/holdings/get.md): `GET /holdings/`
 - [Get list of Crypto Watchlists](/nummus/watchlists/get.md): `GET /watchlists/`
 - [Create a new Crypto Watchlist](/nummus/watchlists/post.md): `POST /watchlists/`
 - [Modify a Crypto Watchlist](/nummus/watchlists/{id}/patch.md): `PATCH /watchlists/{id}/`
 - [Get Crypto Currency Pairs](/nummus/currency_pairs/get.md): `GET /currency_pairs/`
 - [Get Crypto Currency Pair by ID](/nummus/currency_pairs/{id}/get.md): `GET /currency_pairs/{id}/`
 - [Get List of Crypto Orders](/nummus/orders/get.md): `GET /orders/`
 - [Cancel an Active Crypto Order](/nummus/orders/{id}/cancel/post.md): `POST /orders/{id}/cancel/`
 - [Place Crypto Order](/nummus/orders/post.md): `POST /orders/`

### Market Data

Quote data is served from the base url `https://api.robinhood.com/`.

 - [Get a List of Crypto Quotes by ID or Symbol](/api/marketdata/forex/quotes/get.md): `GET /marketdata/forex/quotes/`
 - [Get Crypto Quotes by ID or Symbol](/api/marketdata/forex/quotes/{symbolOrId}/get.md): `GET /marketdata/forex/quotes/{symbolOrId}/`
 - [Get Historical Crypto Quote Data](/api/marketdata/forex/historicals/{id}/get.md): `GET /marketdata/forex/historicals/{id}/`

## Midlands

`https://midlands.robinhood.com/` hosts utility endpoints and things that eventually find their way elsewhere.

  - [Search Robinhood With a Wide Net](/midlands/search/get.md): `GET /search/`

# Introduction

[Robinhood](http://robinhood.com/) is a commission-free, online securities brokerage. As you would expect, being an online service means everything is handled through a request that is made to a specific URL.

# API Security

The HTTPS protocol is used to access the Robinhood API. Transactions require security because most calls transmit actual account informaion. SSL Pinning is used in the official Android and iOS apps to prevent MITM attacks; you would be wise to do the same at the very least.

Calls to API endpoints make use of two different levels of authentication:

1. **None**: No authentication. Anyone can query the method.
2. **Token**: Requires an authorization token generated with a call to [log in](Authentication.md#logging-in).

Calls which require no authentication are generally informational ([quote gathering](Quote.md#quote-methods), [securities lookup](#instrument-methods), etc.).

Authorized calls require an `Authorization` HTTP Header with the authentication type set as `Token` (Example: `Authorization: Token 40charauthozationtokenherexxxxxxxxxxxxxx`).

# API Error Reporting

The API reports incorrect data or improper use with HTTP status codes and JSON objects returned as body content. Some that I've run into include:

| HTTP Status | Key                | Value | What I Did Wrong |
|-------------|--------------------|-------|------------------|
| 400         | `non_field_errors` | `["Unable to log in with provided credentials."]` | Attempted to [log in](#logging-in) with incorrect username/password |
| 400         | `password`         | `["This field may not be blank."]`                | Attempted to [log in](#logging-in) without a password |
| 401         | `detail`           | `["Invalid token."]`                              | Attempted to use cached token after [logging out](#logging-out) |
| 400         | `password`         | `["This password is too short. It must contain at least 10 characters.", "This password is too common."]`                                                       | Attempted to [change my password](#password-reset) to `password` |

...you get the idea. Letting you know exactly what went wrong makes the API almost self-documenting so thanks Robinhood.

# Pagination

Some data is returned from the Robinhood API as paginated data with `next` and `previous` cursors already in URL form.

If your call returns paginated data, it will look like this call to `https://api.robinhood.com/instruments/`:

```
{
    "previous": null,
    "results": [{
        "splits" : "https://api.robinhood.com/instruments/42e07e3a-ca7a-4abc-8c23-de49cb657c62/splits/",
        "margin_initial_ratio" : "1.0000",
        "url" : "https://api.robinhood.com/instruments/42e07e3a-ca7a-4abc-8c23-de49cb657c62/",
        "quote" : "https://api.robinhood.com/quotes/SBPH/",
        "symbol" : "SBPH",
        "bloomberg_unique" : "EQ0000000028928752",
        "list_date" : null,
        "fundamentals" : "https://api.robinhood.com/fundamentals/SBPH/",
        "state" : "active",
        "tradeable" : true,
        "maintenance_ratio" : "1.0000",
        "id" : "42e07e3a-ca7a-4abc-8c23-de49cb657c62",
        "market" : "https://api.robinhood.com/markets/XNAS/",
        "name" : "Spring Bank Pharmaceuticals, Inc. Common Stock"
    },
        ...
    ],
    "next": "https://api.robinhood.com/instruments/?cursor=cD04NjUz"
}
```

To get the next page of results, just use the `next` URL.

## Semi-Pagination

Some data is returned as a list of `results` as if they were paginate but the API doesn't supply us with `previous` or `next` keys.