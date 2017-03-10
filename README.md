# Unofficial Documentation of Robinhood Trade's Private API

Table of Contents:

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [API Security](#api-security)
- [API Error Reporting](#api-error-reporting)
- [Pagination](#pagination)
	- [Semi-Pagination](#semi-pagination)

## See also

- [Authentication.md](Authentication.md) for methods related to user authentication, password recovery, etc.
- [Banking.md](Banking.md) for bank accounts & ACH transfers methods
- [Order.md](Order.md) for order-related functions (placing, cancelling, listing previous orders, etc.)
- [Quote.md](Quote.md) for stock quotes
- [Fundamentals.md](Fundamentals.md) for basic, fundamental data
- [Instrument.md](Instrument.md) for internal reference to financial instruments
- [Watchlist.md](Watchlist.md) for watchlists management
- [Account.md](Account.md) talks about gathering and modifying user and account information
- [Settings.md](Settings.md) covers notifications and other settings
- [Markets.md](Markets.md) describes the API for getting basic info about specific exchanges themselves
- [Referrals.md](Referrals.md) is all about account referrals

Things I have yet to organize are in [Unsorted.md](Unsorted.md)

# Introduction

[Robinhood](http://robinhood.com/) is a commission-free, online securities brokerage. As you would expect, being an online service means everything is handled through a request that is made to a specific URL.

Before I go too far, I must say that this is a big, messy work in progress. I'll continue to update this as I figure more out. Sections marked TODO are in my head but I haven't found the time to describe them yet. Work in progress and all.

Oh, and I do not work with or for Robinhood Financial, LLC.

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
| 400         | `password`           | `["This password is too short. It must contain at least 10 characters.", "This password is too common."]`                                                       | Attempted to [change my password](#password-reset) to `password` |

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
