# Unofficial Documentation of Robinhood Trade's Private API

Table of Contents:

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [API Security](#api-security)
- [API Error Reporting](#api-error-reporting)
- [Pagination](#pagination)
	- [Semi-Pagination](#semi-pagination)

For methods related to user authentication, password recovery, etc. see [Authentication.md](Authentication.md).

Stock quotes are covered in [Quote.md](Quote.md).

Watchlists management is described in [Watchlist.md](Watchlist.md).

We talk about gathering and modifying user and account information in [Account.md](Account.md).

Order related functions (placing, cancelling, listing previous orders, etc.) are in [Order.md](Order.md).

Bank Accounts & ACH Transfers are covered in [Banking.md](Banking.md).
Things I have yet to organize are in [Unsorted.md](Unsorted.md)

# Introduction

[Robinhood](http://robinhood.com/) is a free, online securities brokerage. As you would expect, being an online service means everything is handled through a request that is made to a specific URL.

Before I go too far, I must say that this is a big messy work in progress. I'll continue to update this as I figure more out. Sections marked TODO are in my head but I haven't found the time to describe them yet. Work in progress and all.

Oh, and I do not work with or for Robinhood Finacial, LLC.

# API Security

The HTTPS protocol is used to access the Robinhood API. Transactions require security because most calls transmit actual account informaion. SSL Pinning in used in the official Android and IOS apps to prevent MITM attacks; you would be wise to do the same at the very least.

Calls to API endpoints make use of two different levels of authentication:

1. **None**: No authentication. Anyone can query the method.
2. **Token**: Requires an authorization token generated with a call to [log in](Authenticatin.md#log-in).

Calls which require no authentication are generally informational ([quote gathering](Quote.md#quote-methods), [securities lookup](#instrument-methods), etc.).

Authorized calls require an `Authorization` HTTP Header with the authentication type set as `Token` (Example: `Authorization: Token 40charauthozationtokenherexxxxxxxxxxxxxx`).

# API Error Reporting

The API reports incorrect data or imporper use with HTTP staus codes and JSON objects returned as body content. Some that I've run into include:

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
