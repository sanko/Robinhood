# Financial Instrument Information Methods

- [Grab a list of All Instruments](#grab-a-list-of-all-instruments)
- [Gather Basic Instrument Info by Symbol](#gather-basic-instrument-info-by-symbol)
- [Gather Basic Instrument Info by ID](#gather-basic-instrument-info-by-id)
- [Search for Instruments by Keyword](#search-for-instruments-by-keyword)
- [Gather the Split History for an Instrument](#gather-the-split-history-for-an-instrument)
- [Grab Data on a Single Split](#grab-data-on-a-single-split)

# Grab a List of All Instruments

This returns a paginated list of all instruments tracked by Robinhood's partners sorted by their list date. You get everything with this: OTC, NASDAQ CM, ... There are currently 99 pages, 9,825 instruments in total, and 7197 are tradeable with Robinhood.

**Method**

| URI                            | HTTP Method | Authentication |
|--------------------------------|-------------|----------------|
| api.robinhood.com/instruments/ | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/ \
   -H "Accept: application/json"

```

**Response**

A [paginated](README.md#pagination) list of instruments is returned. Instruments contain the following keys...

| Key                   | Type       | Description |
|-----------------------|------------|-------------|
| min_tick_size         | Float      | Note: Might be null. See http://www.finra.org/industry/tick-size-pilot-program |
| splits                | URL        | Link to the split list for this security |
| margin_initial_ratio  | Float      |                                          |
| url 					| URL 	     | Endpoint where more information about this security may be grabbed |
| quote 				| URL 	     | Endpoint where quote data about this security may be grabbed |
| symbol                | String     | The ticker symbol for this security |
| bloomberg_unique      | String     | Bloomberg Global ID (BBGID) for this security. See http://bsym.bloomberg.com/sym/ |
| list_date             | YYYY-MM-DD | Date this security was first traded publically on the exchange |
| fundamentals          | URL        | Link to fundamental data for this security |
| state                 | String     | Indicates whether the security is "active" or not |
| country               | String     | Two char country code for the security's home office or headquarters |
| day_trade_ratio       | Float      |  |
| tradeable             | Boolean    | Indicates whether the security can be traded on Robinhood |
| maintenance_ratio     | Float      |  |
| id                    | String     | The instrument id of this security |
| market                | URL        | Link to the market/exchange this security is traded on |
| name                  | String     | Basic name of the security. Perfect for display |

**Response sample**

```
{
  "previous":  null,
  "results":  [
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/9c0286af-a5c7-45f7-a2b7-c1980279db2b/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/9c0286af-a5c7-45f7-a2b7-c1980279db2b/",
      "quote":  "https://api.robinhood.com/quotes/RTNB/",
      "symbol":  "RTNB",
      "bloomberg_unique":  "EQ0000000003218912",
      "list_date":  "2016-12-21",
      "fundamentals":  "https://api.robinhood.com/fundamentals/RTNB/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "9c0286af-a5c7-45f7-a2b7-c1980279db2b",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "root9B Holdings, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/0ccb5414-5800-4178-8a99-6a5423fe7437/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/0ccb5414-5800-4178-8a99-6a5423fe7437/",
      "quote":  "https://api.robinhood.com/quotes/FIV/",
      "symbol":  "FIV",
      "bloomberg_unique":  "EQ0000000053834953",
      "list_date":  "2016-12-21",
      "fundamentals":  "https://api.robinhood.com/fundamentals/FIV/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "0ccb5414-5800-4178-8a99-6a5423fe7437",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "First Trust Sr Float Rt 2022 TGT"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/30b04e5d-6a12-468e-bcca-869469e607aa/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/30b04e5d-6a12-468e-bcca-869469e607aa/",
      "quote":  "https://api.robinhood.com/quotes/WBIY/",
      "symbol":  "WBIY",
      "bloomberg_unique":  "EQ0000000053206067",
      "list_date":  "2016-12-21",
      "fundamentals":  "https://api.robinhood.com/fundamentals/WBIY/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "30b04e5d-6a12-468e-bcca-869469e607aa",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "WBI Power Factor High Dividend E"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/dca63351-2a9c-4c57-b7dd-cfb3be9fd9c9/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/dca63351-2a9c-4c57-b7dd-cfb3be9fd9c9/",
      "quote":  "https://api.robinhood.com/quotes/RXIIW/",
      "symbol":  "RXIIW",
      "bloomberg_unique":  "EQ0000000053796045",
      "list_date":  "2016-12-20",
      "fundamentals":  "https://api.robinhood.com/fundamentals/RXIIW/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "dca63351-2a9c-4c57-b7dd-cfb3be9fd9c9",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "RXi Pharmaceuticals Corporation Warrants expiring 12/16/2021"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/d3428891-03d3-4c1d-8b3d-a235ea06ef07/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/d3428891-03d3-4c1d-8b3d-a235ea06ef07/",
      "quote":  "https://api.robinhood.com/quotes/NURE/",
      "symbol":  "NURE",
      "bloomberg_unique":  "EQ0000000053633068",
      "list_date":  "2016-12-20",
      "fundamentals":  "https://api.robinhood.com/fundamentals/NURE/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "d3428891-03d3-4c1d-8b3d-a235ea06ef07",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "NuShares Short-Term REIT ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/f8122a27-037e-4d17-be98-becdc737fe42/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/f8122a27-037e-4d17-be98-becdc737fe42/",
      "quote":  "https://api.robinhood.com/quotes/BMLP/",
      "symbol":  "BMLP",
      "bloomberg_unique":  "EQ0000000053795523",
      "list_date":  "2016-12-20",
      "fundamentals":  "https://api.robinhood.com/fundamentals/BMLP/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "f8122a27-037e-4d17-be98-becdc737fe42",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Bank Of Montreal BMO Elkhorn DWA MLP Select Index Exchange Traded Notes due December 10, 2036"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/5b5d1075-7d2e-4d10-b175-775f64a6dfc5/splits/",
      "margin_initial_ratio":  "0.6800",
      "url":  "https://api.robinhood.com/instruments/5b5d1075-7d2e-4d10-b175-775f64a6dfc5/",
      "quote":  "https://api.robinhood.com/quotes/LGF.A/",
      "symbol":  "LGF.A",
      "bloomberg_unique":  "EQ0015909200001001",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/LGF.A/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.6000",
      "id":  "5b5d1075-7d2e-4d10-b175-775f64a6dfc5",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Lions Gate Entertainment Corp."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/02f6880b-931b-46b0-b331-8e1d76a34c52/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/02f6880b-931b-46b0-b331-8e1d76a34c52/",
      "quote":  "https://api.robinhood.com/quotes/COWZ/",
      "symbol":  "COWZ",
      "bloomberg_unique":  "EQ0000000053766306",
      "list_date":  "2016-12-19",
      "fundamentals":  "https://api.robinhood.com/fundamentals/COWZ/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "02f6880b-931b-46b0-b331-8e1d76a34c52",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "Pacer US Cash Cows 100 ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/b7dec43a-bd62-4685-9aed-feb1eda54b3a/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/b7dec43a-bd62-4685-9aed-feb1eda54b3a/",
      "quote":  "https://api.robinhood.com/quotes/TIG/",
      "symbol":  "TIG",
      "bloomberg_unique":  "EQ0000000047123816",
      "list_date":  "2016-12-15",
      "fundamentals":  "https://api.robinhood.com/fundamentals/TIG/",
      "state":  "active",
      "country":  "BE",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "b7dec43a-bd62-4685-9aed-feb1eda54b3a",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "TiGenix American Depositary Shares"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/b5a79f7d-eae1-49b8-b055-c67267f74aa5/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/b5a79f7d-eae1-49b8-b055-c67267f74aa5/",
      "quote":  "https://api.robinhood.com/quotes/PIXY/",
      "symbol":  "PIXY",
      "bloomberg_unique":  "EQ0000000053586755",
      "list_date":  "2016-12-16",
      "fundamentals":  "https://api.robinhood.com/fundamentals/PIXY/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "b5a79f7d-eae1-49b8-b055-c67267f74aa5",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "ShiftPixy, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/10291546-0780-42d6-94da-b810e36dac3f/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/10291546-0780-42d6-94da-b810e36dac3f/",
      "quote":  "https://api.robinhood.com/quotes/TRVG/",
      "symbol":  "TRVG",
      "bloomberg_unique":  "EQ0000000052951155",
      "list_date":  "2016-12-16",
      "fundamentals":  "https://api.robinhood.com/fundamentals/TRVG/",
      "state":  "active",
      "country":  "DE",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "10291546-0780-42d6-94da-b810e36dac3f",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "trivago N.V. American Depositary Shares"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/08d2afd0-6d58-4351-a966-7112e8536212/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/08d2afd0-6d58-4351-a966-7112e8536212/",
      "quote":  "https://api.robinhood.com/quotes/KEG/",
      "symbol":  "KEG",
      "bloomberg_unique":  "EQ0000000053689297",
      "list_date":  "2016-12-16",
      "fundamentals":  "https://api.robinhood.com/fundamentals/KEG/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "08d2afd0-6d58-4351-a966-7112e8536212",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Key Energy Services, Inc."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/1479bf84-8f89-4cd9-a200-09ddc47233ca/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/1479bf84-8f89-4cd9-a200-09ddc47233ca/",
      "quote":  "https://api.robinhood.com/quotes/YTRA/",
      "symbol":  "YTRA",
      "bloomberg_unique":  "EQ0000000050712674",
      "list_date":  "2016-12-16",
      "fundamentals":  "https://api.robinhood.com/fundamentals/YTRA/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "1479bf84-8f89-4cd9-a200-09ddc47233ca",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Yatra Online, Inc. Ordinary Shares"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/8d60eef3-e2a6-4133-9e53-1534429a1ee3/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/8d60eef3-e2a6-4133-9e53-1534429a1ee3/",
      "quote":  "https://api.robinhood.com/quotes/JHMD/",
      "symbol":  "JHMD",
      "bloomberg_unique":  "EQ0000000053633128",
      "list_date":  "2016-12-16",
      "fundamentals":  "https://api.robinhood.com/fundamentals/JHMD/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "8d60eef3-e2a6-4133-9e53-1534429a1ee3",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "John Hancock Multifactor Develop"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/e2c192ef-9cf7-40c9-81f5-fa51129d9f56/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/e2c192ef-9cf7-40c9-81f5-fa51129d9f56/",
      "quote":  "https://api.robinhood.com/quotes/NULG/",
      "symbol":  "NULG",
      "bloomberg_unique":  "EQ0000000053632468",
      "list_date":  "2016-12-14",
      "fundamentals":  "https://api.robinhood.com/fundamentals/NULG/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "e2c192ef-9cf7-40c9-81f5-fa51129d9f56",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "NuShares ESG Large-Cap Growth ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/6e3c6a2a-b148-4997-8e71-3f6f92f62442/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/6e3c6a2a-b148-4997-8e71-3f6f92f62442/",
      "quote":  "https://api.robinhood.com/quotes/NUSC/",
      "symbol":  "NUSC",
      "bloomberg_unique":  "EQ0000000053633044",
      "list_date":  "2016-12-14",
      "fundamentals":  "https://api.robinhood.com/fundamentals/NUSC/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "6e3c6a2a-b148-4997-8e71-3f6f92f62442",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "NuShares ESG Small-Cap ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/114125d7-06d3-4e67-8e88-cdbd45097297/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/114125d7-06d3-4e67-8e88-cdbd45097297/",
      "quote":  "https://api.robinhood.com/quotes/DIVO/",
      "symbol":  "DIVO",
      "bloomberg_unique":  "EQ0000000053634160",
      "list_date":  "2016-12-14",
      "fundamentals":  "https://api.robinhood.com/fundamentals/DIVO/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "114125d7-06d3-4e67-8e88-cdbd45097297",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "Amplify YieldShares CWP Dividend & Option Income ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/cb756f28-c02d-497e-9a0b-f9784ab8cb7a/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/cb756f28-c02d-497e-9a0b-f9784ab8cb7a/",
      "quote":  "https://api.robinhood.com/quotes/NUMG/",
      "symbol":  "NUMG",
      "bloomberg_unique":  "EQ0000000053632930",
      "list_date":  "2016-12-14",
      "fundamentals":  "https://api.robinhood.com/fundamentals/NUMG/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "cb756f28-c02d-497e-9a0b-f9784ab8cb7a",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "NuShares ESG Mid-Cap Growth ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/da1acfb8-375c-4fd7-ace6-e11e08364c5d/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/da1acfb8-375c-4fd7-ace6-e11e08364c5d/",
      "quote":  "https://api.robinhood.com/quotes/NUMV/",
      "symbol":  "NUMV",
      "bloomberg_unique":  "EQ0000000053633032",
      "list_date":  "2016-12-14",
      "fundamentals":  "https://api.robinhood.com/fundamentals/NUMV/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "da1acfb8-375c-4fd7-ace6-e11e08364c5d",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "NuShares ESG Mid-Cap Value ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/3effc162-bce6-4f88-9ef0-992cdc394423/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/3effc162-bce6-4f88-9ef0-992cdc394423/",
      "quote":  "https://api.robinhood.com/quotes/NULV/",
      "symbol":  "NULV",
      "bloomberg_unique":  "EQ0000000053632714",
      "list_date":  "2016-12-14",
      "fundamentals":  "https://api.robinhood.com/fundamentals/NULV/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "3effc162-bce6-4f88-9ef0-992cdc394423",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "NuShares ESG Large-Cap Value ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/3e794a91-cdc2-4e00-ba4f-f2549f63baeb/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/3e794a91-cdc2-4e00-ba4f-f2549f63baeb/",
      "quote":  "https://api.robinhood.com/quotes/SNGXW/",
      "symbol":  "SNGXW",
      "bloomberg_unique":  "EQ0000000053513181",
      "list_date":  "2016-12-13",
      "fundamentals":  "https://api.robinhood.com/fundamentals/SNGXW/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "3e794a91-cdc2-4e00-ba4f-f2549f63baeb",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Soligenix, Inc. Warrant"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/82478849-84ae-4bfa-92c5-98c8c7af3c49/splits/",
      "margin_initial_ratio":  "0.5600",
      "url":  "https://api.robinhood.com/instruments/82478849-84ae-4bfa-92c5-98c8c7af3c49/",
      "quote":  "https://api.robinhood.com/quotes/WEAR/",
      "symbol":  "WEAR",
      "bloomberg_unique":  "EQ0000000053542356",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/WEAR/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.4500",
      "id":  "82478849-84ae-4bfa-92c5-98c8c7af3c49",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "The WEAR ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/4ae434a1-2065-42f7-a05e-bbf4623d524c/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/4ae434a1-2065-42f7-a05e-bbf4623d524c/",
      "quote":  "https://api.robinhood.com/quotes/EHR/",
      "symbol":  "EHR",
      "bloomberg_unique":  "EQ0000000052455797",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/EHR/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "4ae434a1-2065-42f7-a05e-bbf4623d524c",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Energy Hunter Resources, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/29a1be49-b5bc-475e-b6a1-821f29441fa4/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/29a1be49-b5bc-475e-b6a1-821f29441fa4/",
      "quote":  "https://api.robinhood.com/quotes/SNGX/",
      "symbol":  "SNGX",
      "bloomberg_unique":  "EQ0010466600001000",
      "list_date":  "2016-12-13",
      "fundamentals":  "https://api.robinhood.com/fundamentals/SNGX/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "29a1be49-b5bc-475e-b6a1-821f29441fa4",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Soligenix, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/f4450152-c40f-4638-8189-95d6f84407aa/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/f4450152-c40f-4638-8189-95d6f84407aa/",
      "quote":  "https://api.robinhood.com/quotes/WRD/",
      "symbol":  "WRD",
      "bloomberg_unique":  "EQ0000000052830402",
      "list_date":  "2016-12-13",
      "fundamentals":  "https://api.robinhood.com/fundamentals/WRD/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "f4450152-c40f-4638-8189-95d6f84407aa",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "WildHorse Resource Development"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/f90e6e71-d754-4268-ad21-f691dc7b1455/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/f90e6e71-d754-4268-ad21-f691dc7b1455/",
      "quote":  "https://api.robinhood.com/quotes/ATH/",
      "symbol":  "ATH",
      "bloomberg_unique":  "EQ0000000049565638",
      "list_date":  "2016-12-08",
      "fundamentals":  "https://api.robinhood.com/fundamentals/ATH/",
      "state":  "active",
      "country":  "BM",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "f90e6e71-d754-4268-ad21-f691dc7b1455",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Athene Holding Ltd."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/93b4b342-d2b6-4b71-8e98-fecae805a80e/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/93b4b342-d2b6-4b71-8e98-fecae805a80e/",
      "quote":  "https://api.robinhood.com/quotes/POLA/",
      "symbol":  "POLA",
      "bloomberg_unique":  "EQ0000000046860982",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/POLA/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "93b4b342-d2b6-4b71-8e98-fecae805a80e",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Polar Power, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/94f60b87-cc88-4f04-bcdc-e063813ea35d/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/94f60b87-cc88-4f04-bcdc-e063813ea35d/",
      "quote":  "https://api.robinhood.com/quotes/BLHY/",
      "symbol":  "BLHY",
      "bloomberg_unique":  "EQ0000000053388365",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/BLHY/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "94f60b87-cc88-4f04-bcdc-e063813ea35d",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "Virtus Newfleet Dynamic Credit E"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/4a9888b1-627f-4f62-ac41-c958a47de528/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/4a9888b1-627f-4f62-ac41-c958a47de528/",
      "quote":  "https://api.robinhood.com/quotes/ICHR/",
      "symbol":  "ICHR",
      "bloomberg_unique":  "EQ0000000052945677",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/ICHR/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "4a9888b1-627f-4f62-ac41-c958a47de528",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Ichor Holdings Ordinary Shares"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/a4cb239f-465e-40be-b59d-cbb98c171be8/splits/",
      "margin_initial_ratio":  "0.8000",
      "url":  "https://api.robinhood.com/instruments/a4cb239f-465e-40be-b59d-cbb98c171be8/",
      "quote":  "https://api.robinhood.com/quotes/UWT/",
      "symbol":  "UWT",
      "bloomberg_unique":  "EQ0000000053545422",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/UWT/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.7500",
      "tradeable":  true,
      "maintenance_ratio":  "0.7500",
      "id":  "a4cb239f-465e-40be-b59d-cbb98c171be8",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "VelocityShares3x Long Crude Oil"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/6d5b5408-399e-416b-8b71-7447aec19df2/splits/",
      "margin_initial_ratio":  "0.8000",
      "url":  "https://api.robinhood.com/instruments/6d5b5408-399e-416b-8b71-7447aec19df2/",
      "quote":  "https://api.robinhood.com/quotes/DWT/",
      "symbol":  "DWT",
      "bloomberg_unique":  "EQ0000000053545506",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/DWT/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.7500",
      "tradeable":  true,
      "maintenance_ratio":  "0.7500",
      "id":  "6d5b5408-399e-416b-8b71-7447aec19df2",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "VelocityShares 3x Inverse Crude"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/ff6cfcd7-9b3f-4278-b695-404fab3583a2/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/ff6cfcd7-9b3f-4278-b695-404fab3583a2/",
      "quote":  "https://api.robinhood.com/quotes/LGF.B/",
      "symbol":  "LGF.B",
      "bloomberg_unique":  "EQ0000000053227109",
      "list_date":  "2016-12-09",
      "fundamentals":  "https://api.robinhood.com/fundamentals/LGF.B/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "ff6cfcd7-9b3f-4278-b695-404fab3583a2",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Lions Gate Entertainment Corp."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/7566daa1-9004-475c-9e9d-3df74d6e9607/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/7566daa1-9004-475c-9e9d-3df74d6e9607/",
      "quote":  "https://api.robinhood.com/quotes/HYLB/",
      "symbol":  "HYLB",
      "bloomberg_unique":  "EQ0000000053468793",
      "list_date":  "2016-12-07",
      "fundamentals":  "https://api.robinhood.com/fundamentals/HYLB/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "7566daa1-9004-475c-9e9d-3df74d6e9607",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "Deutsche X-trackers USD High Yie"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/1c115f8e-6843-4cc6-856f-1f1472a65088/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/1c115f8e-6843-4cc6-856f-1f1472a65088/",
      "quote":  "https://api.robinhood.com/quotes/SGQI/",
      "symbol":  "SGQI",
      "bloomberg_unique":  "EQ0000000052744273",
      "list_date":  "2016-12-08",
      "fundamentals":  "https://api.robinhood.com/fundamentals/SGQI/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "1c115f8e-6843-4cc6-856f-1f1472a65088",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Janus Detroit Street Trust Janus SG Global Quality Income ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/b652b4ac-6849-4560-95a8-3b44d0adc65f/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/b652b4ac-6849-4560-95a8-3b44d0adc65f/",
      "quote":  "https://api.robinhood.com/quotes/ACCP/",
      "symbol":  "ACCP",
      "bloomberg_unique":  "EQ0000000052233672",
      "list_date":  "2016-12-07",
      "fundamentals":  "https://api.robinhood.com/fundamentals/ACCP/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "b652b4ac-6849-4560-95a8-3b44d0adc65f",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Accelerated Pharma, Inc. Common Stock"
    },
    {
      "min_tick_size":  "0.0500",
      "splits":  "https://api.robinhood.com/instruments/564e00cf-ab0e-46a5-9ea3-e8cc92f16ea7/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/564e00cf-ab0e-46a5-9ea3-e8cc92f16ea7/",
      "quote":  "https://api.robinhood.com/quotes/TSRA/",
      "symbol":  "TSRA",
      "bloomberg_unique":  "EQ0000000052419889",
      "list_date":  "2016-12-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/TSRA/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "564e00cf-ab0e-46a5-9ea3-e8cc92f16ea7",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Tessera Holding Corporation Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/0afbcc23-d474-488a-bc5e-7e92d6cdc946/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/0afbcc23-d474-488a-bc5e-7e92d6cdc946/",
      "quote":  "https://api.robinhood.com/quotes/EVHC/",
      "symbol":  "EVHC",
      "bloomberg_unique":  "EQ0000000050159726",
      "list_date":  "2016-12-05",
      "fundamentals":  "https://api.robinhood.com/fundamentals/EVHC/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "0afbcc23-d474-488a-bc5e-7e92d6cdc946",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Envision Healthcare Holdings Inc"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/1b1c707b-4b41-40d9-bafb-2d2c57723f5f/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/1b1c707b-4b41-40d9-bafb-2d2c57723f5f/",
      "quote":  "https://api.robinhood.com/quotes/RA/",
      "symbol":  "RA",
      "bloomberg_unique":  "EQ0000000053151098",
      "list_date":  "2016-12-05",
      "fundamentals":  "https://api.robinhood.com/fundamentals/RA/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "1b1c707b-4b41-40d9-bafb-2d2c57723f5f",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Brookfield Real Assets Income Fd"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/5a57ec83-e492-4f7f-a2e5-d5526f40aca3/splits/",
      "margin_initial_ratio":  "0.8000",
      "url":  "https://api.robinhood.com/instruments/5a57ec83-e492-4f7f-a2e5-d5526f40aca3/",
      "quote":  "https://api.robinhood.com/quotes/INSW/",
      "symbol":  "INSW",
      "bloomberg_unique":  "EQ0000000027290244",
      "list_date":  "2016-12-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/INSW/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.7500",
      "id":  "5a57ec83-e492-4f7f-a2e5-d5526f40aca3",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "International Seaways, Inc."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/5c990921-2934-4b88-bd7c-ca5fea5c3046/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/5c990921-2934-4b88-bd7c-ca5fea5c3046/",
      "quote":  "https://api.robinhood.com/quotes/AHPAW/",
      "symbol":  "AHPAW",
      "bloomberg_unique":  "EQ0000000053291690",
      "list_date":  "2016-12-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/AHPAW/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "5c990921-2934-4b88-bd7c-ca5fea5c3046",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Avista Healthcare Public Acquisition Corp. Warrants"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/ac2db2a0-9d00-43a8-ab25-2864aa44ab49/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/ac2db2a0-9d00-43a8-ab25-2864aa44ab49/",
      "quote":  "https://api.robinhood.com/quotes/ESGU/",
      "symbol":  "ESGU",
      "bloomberg_unique":  "EQ0000000053243220",
      "list_date":  "2016-12-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/ESGU/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "ac2db2a0-9d00-43a8-ab25-2864aa44ab49",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "iShares Trust iShares MSCI USA ESG Optimized ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/d39c51ab-6605-40c2-92fe-9fc0acbd6c3e/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/d39c51ab-6605-40c2-92fe-9fc0acbd6c3e/",
      "quote":  "https://api.robinhood.com/quotes/AHPA/",
      "symbol":  "AHPA",
      "bloomberg_unique":  "EQ0000000053291432",
      "list_date":  "2016-12-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/AHPA/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "d39c51ab-6605-40c2-92fe-9fc0acbd6c3e",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Avista Healthcare Public Acquisition Corp. Class A Ordinary Shares"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/be57393d-7d8f-4e6f-87e2-4edb0e29ccb1/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/be57393d-7d8f-4e6f-87e2-4edb0e29ccb1/",
      "quote":  "https://api.robinhood.com/quotes/COF-H/",
      "symbol":  "COF-H",
      "bloomberg_unique":  "PFEP0519579",
      "list_date":  "2016-12-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/COF-H/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "be57393d-7d8f-4e6f-87e2-4edb0e29ccb1",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Capital One Financial Corp"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/faf92b6a-c3a6-4de3-8074-dce29851ee03/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/faf92b6a-c3a6-4de3-8074-dce29851ee03/",
      "quote":  "https://api.robinhood.com/quotes/MAA-I/",
      "symbol":  "MAA-I",
      "bloomberg_unique":  "PFEP0520015",
      "list_date":  "2016-12-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/MAA-I/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "faf92b6a-c3a6-4de3-8074-dce29851ee03",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Mid-America Apartment Com"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/1fae2819-5d9c-4fbe-8a8b-326df7cc82be/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/1fae2819-5d9c-4fbe-8a8b-326df7cc82be/",
      "quote":  "https://api.robinhood.com/quotes/XSHD/",
      "symbol":  "XSHD",
      "bloomberg_unique":  "EQ0000000053228045",
      "list_date":  "2016-12-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/XSHD/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "1fae2819-5d9c-4fbe-8a8b-326df7cc82be",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "PowerShares S&P SmallCap High Dividend Low Volatility Portfolio"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/8b0739c9-12da-4e67-976f-b07a85c817bc/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/8b0739c9-12da-4e67-976f-b07a85c817bc/",
      "quote":  "https://api.robinhood.com/quotes/MOGLC/",
      "symbol":  "MOGLC",
      "bloomberg_unique":  "EQ0000000053227625",
      "list_date":  "2016-12-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/MOGLC/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "8b0739c9-12da-4e67-976f-b07a85c817bc",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Gabelli NextShares Trust Gabelli Media Mogul NextShares"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/d7e5f81d-c212-4827-80d6-75f179ab0fc8/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/d7e5f81d-c212-4827-80d6-75f179ab0fc8/",
      "quote":  "https://api.robinhood.com/quotes/IDHD/",
      "symbol":  "IDHD",
      "bloomberg_unique":  "EQ0000000053228009",
      "list_date":  "2016-12-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/IDHD/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "d7e5f81d-c212-4827-80d6-75f179ab0fc8",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "PowerShares S&P International Developed High Dividend Low Volatility Portfolio"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/deda90e9-3ee4-4cf0-a24a-2965a87cf7fd/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/deda90e9-3ee4-4cf0-a24a-2965a87cf7fd/",
      "quote":  "https://api.robinhood.com/quotes/AQN/",
      "symbol":  "AQN",
      "bloomberg_unique":  "EQ0031011600060001",
      "list_date":  "2016-11-29",
      "fundamentals":  "https://api.robinhood.com/fundamentals/AQN/",
      "state":  "active",
      "country":  "CA",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "deda90e9-3ee4-4cf0-a24a-2965a87cf7fd",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Algonquin Power & Utilities Corp"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/41e06a13-070e-4633-afd4-ed2207e2c5c9/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/41e06a13-070e-4633-afd4-ed2207e2c5c9/",
      "quote":  "https://api.robinhood.com/quotes/PBCTP/",
      "symbol":  "PBCTP",
      "bloomberg_unique":  "PFEP0517631",
      "list_date":  "2016-11-29",
      "fundamentals":  "https://api.robinhood.com/fundamentals/PBCTP/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "41e06a13-070e-4633-afd4-ed2207e2c5c9",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "People's United Financial, Inc. Perpetual Preferred Series A Fixed-to-floating Rate"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/890936db-dd7a-4f64-913d-a77ba794cba7/splits/",
      "margin_initial_ratio":  "0.6000",
      "url":  "https://api.robinhood.com/instruments/890936db-dd7a-4f64-913d-a77ba794cba7/",
      "quote":  "https://api.robinhood.com/quotes/CAGDF/",
      "symbol":  "CAGDF",
      "bloomberg_unique":  "EQ0000000001769897",
      "list_date":  "2005-05-24",
      "fundamentals":  "https://api.robinhood.com/fundamentals/CAGDF/",
      "state":  "unlisted",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.5000",
      "id":  "890936db-dd7a-4f64-913d-a77ba794cba7",
      "market":  "https://api.robinhood.com/markets/OTCM/",
      "name":  "Centerra Gold Inc Common Shares (Canada)"
    },
    {
      "min_tick_size":  "0.0500",
      "splits":  "https://api.robinhood.com/instruments/f16caa56-8575-42ef-8763-d3ba5069f45c/splits/",
      "margin_initial_ratio":  "0.6000",
      "url":  "https://api.robinhood.com/instruments/f16caa56-8575-42ef-8763-d3ba5069f45c/",
      "quote":  "https://api.robinhood.com/quotes/GEC/",
      "symbol":  "GEC",
      "bloomberg_unique":  "EQ0000000053150468",
      "list_date":  "2016-11-25",
      "fundamentals":  "https://api.robinhood.com/fundamentals/GEC/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.5000",
      "id":  "f16caa56-8575-42ef-8763-d3ba5069f45c",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Great Elm Capital Group, Inc. NEW Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/af7aef10-b076-4b91-8c4f-ab41c6c996d6/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/af7aef10-b076-4b91-8c4f-ab41c6c996d6/",
      "quote":  "https://api.robinhood.com/quotes/IHIT/",
      "symbol":  "IHIT",
      "bloomberg_unique":  "EQ0000000052367498",
      "list_date":  "2016-11-23",
      "fundamentals":  "https://api.robinhood.com/fundamentals/IHIT/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "af7aef10-b076-4b91-8c4f-ab41c6c996d6",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Invesco High Income 2023 Target"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/d12f551e-c0ef-4bb5-8c49-c3cf81ff2070/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/d12f551e-c0ef-4bb5-8c49-c3cf81ff2070/",
      "quote":  "https://api.robinhood.com/quotes/AXS-E/",
      "symbol":  "AXS-E",
      "bloomberg_unique":  "PFEP0518514",
      "list_date":  "2016-11-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/AXS-E/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "d12f551e-c0ef-4bb5-8c49-c3cf81ff2070",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "AXIS Capital Holdings Limited"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/fdb873ef-cea3-4c9b-966a-a17cff3ce0fa/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/fdb873ef-cea3-4c9b-966a-a17cff3ce0fa/",
      "quote":  "https://api.robinhood.com/quotes/HMU/",
      "symbol":  "HMU",
      "bloomberg_unique":  "EQ0000000053105637",
      "list_date":  null,
      "fundamentals":  "https://api.robinhood.com/fundamentals/HMU/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "fdb873ef-cea3-4c9b-966a-a17cff3ce0fa",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "HomeUnion Holdings Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/c9368d28-9b93-4b3d-958d-d9e9a19185fd/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/c9368d28-9b93-4b3d-958d-d9e9a19185fd/",
      "quote":  "https://api.robinhood.com/quotes/MTFBW/",
      "symbol":  "MTFBW",
      "bloomberg_unique":  "EQ0000000053055144",
      "list_date":  null,
      "fundamentals":  "https://api.robinhood.com/fundamentals/MTFBW/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "c9368d28-9b93-4b3d-958d-d9e9a19185fd",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Motif Bio plc Warrants to Purchase ADRs"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/e9daa37b-f86c-4f87-bea1-730896f1f947/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/e9daa37b-f86c-4f87-bea1-730896f1f947/",
      "quote":  "https://api.robinhood.com/quotes/GNUS/",
      "symbol":  "GNUS",
      "bloomberg_unique":  "EQ0000000008743332",
      "list_date":  "2011-11-28",
      "fundamentals":  "https://api.robinhood.com/fundamentals/GNUS/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "e9daa37b-f86c-4f87-bea1-730896f1f947",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Genius Brands International, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/641e3599-d4b6-479b-bd79-5fbfe7b7c16a/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/641e3599-d4b6-479b-bd79-5fbfe7b7c16a/",
      "quote":  "https://api.robinhood.com/quotes/BNDC/",
      "symbol":  "BNDC",
      "bloomberg_unique":  "EQ0000000052971485",
      "list_date":  "2016-11-21",
      "fundamentals":  "https://api.robinhood.com/fundamentals/BNDC/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "641e3599-d4b6-479b-bd79-5fbfe7b7c16a",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "FlexShares Core Select Bond Fund"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/846ae64b-c4dd-432c-9f26-44afd60ed82b/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/846ae64b-c4dd-432c-9f26-44afd60ed82b/",
      "quote":  "https://api.robinhood.com/quotes/IIPR/",
      "symbol":  "IIPR",
      "bloomberg_unique":  "EQ0000000052296454",
      "list_date":  "2016-12-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/IIPR/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "846ae64b-c4dd-432c-9f26-44afd60ed82b",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Innovative Industrial Properties"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/74ebbba7-3087-4e66-9f4a-c583a0b15f25/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/74ebbba7-3087-4e66-9f4a-c583a0b15f25/",
      "quote":  "https://api.robinhood.com/quotes/XL/",
      "symbol":  "XL",
      "bloomberg_unique":  "EQ0010054500001000",
      "list_date":  "1991-07-19",
      "fundamentals":  "https://api.robinhood.com/fundamentals/XL/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "74ebbba7-3087-4e66-9f4a-c583a0b15f25",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "XL Group Ltd."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/bf4dfb10-28af-4f87-bb30-2f8d9228560f/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/bf4dfb10-28af-4f87-bb30-2f8d9228560f/",
      "quote":  "https://api.robinhood.com/quotes/FPAY/",
      "symbol":  "FPAY",
      "bloomberg_unique":  "EQ0000000005100932",
      "list_date":  "2016-10-28",
      "fundamentals":  "https://api.robinhood.com/fundamentals/FPAY/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "bf4dfb10-28af-4f87-bb30-2f8d9228560f",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "FlexShopper, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/85f8cb43-0885-4a82-848e-334c0ce30f2d/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/85f8cb43-0885-4a82-848e-334c0ce30f2d/",
      "quote":  "https://api.robinhood.com/quotes/RILYL/",
      "symbol":  "RILYL",
      "bloomberg_unique":  "PFEP0518431",
      "list_date":  "2016-11-18",
      "fundamentals":  "https://api.robinhood.com/fundamentals/RILYL/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "85f8cb43-0885-4a82-848e-334c0ce30f2d",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "B. Riley Financial, Inc. 7.50% Senior Notes"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/15c5ef33-df20-4895-b3d9-13708561e982/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/15c5ef33-df20-4895-b3d9-13708561e982/",
      "quote":  "https://api.robinhood.com/quotes/LVHE/",
      "symbol":  "LVHE",
      "bloomberg_unique":  "EQ0000000052774409",
      "list_date":  "2016-11-18",
      "fundamentals":  "https://api.robinhood.com/fundamentals/LVHE/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "15c5ef33-df20-4895-b3d9-13708561e982",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "Legg Mason Emerging Markets Low Volatility High Dividend ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/57e9a305-eca6-4810-994d-7596a9df84eb/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/57e9a305-eca6-4810-994d-7596a9df84eb/",
      "quote":  "https://api.robinhood.com/quotes/OILB/",
      "symbol":  "OILB",
      "bloomberg_unique":  "EQ0000000053052120",
      "list_date":  "2016-11-18",
      "fundamentals":  "https://api.robinhood.com/fundamentals/OILB/",
      "state":  "active",
      "country":  "GB",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "57e9a305-eca6-4810-994d-7596a9df84eb",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "iPath Series B S&P GSCI Crude Oi"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/94dd58da-c7ad-4d5d-90bf-d39c44214650/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/94dd58da-c7ad-4d5d-90bf-d39c44214650/",
      "quote":  "https://api.robinhood.com/quotes/HUNTU/",
      "symbol":  "HUNTU",
      "bloomberg_unique":  "EQ0000000052233648",
      "list_date":  "2016-11-18",
      "fundamentals":  "https://api.robinhood.com/fundamentals/HUNTU/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "94dd58da-c7ad-4d5d-90bf-d39c44214650",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Hunter Maritime Acquisition Corp. Unit"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/eaa50fa9-4a46-40cd-b04f-a17774979f54/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/eaa50fa9-4a46-40cd-b04f-a17774979f54/",
      "quote":  "https://api.robinhood.com/quotes/VNLA/",
      "symbol":  "VNLA",
      "bloomberg_unique":  "EQ0000000052744249",
      "list_date":  "2016-11-17",
      "fundamentals":  "https://api.robinhood.com/fundamentals/VNLA/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "eaa50fa9-4a46-40cd-b04f-a17774979f54",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "Janus Short Duration Income ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/378a6729-23ea-4c27-b0c6-c379074ec193/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/378a6729-23ea-4c27-b0c6-c379074ec193/",
      "quote":  "https://api.robinhood.com/quotes/OSG%23/",
      "symbol":  "OSG#",
      "bloomberg_unique":  "EQ0000000052774445",
      "list_date":  "2016-11-16",
      "fundamentals":  "https://api.robinhood.com/fundamentals/OSG%23/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "378a6729-23ea-4c27-b0c6-c379074ec193",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Overseas Shipholding Group, Inc."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/37308ad8-72f2-4005-afaf-b050fbb952f8/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/37308ad8-72f2-4005-afaf-b050fbb952f8/",
      "quote":  "https://api.robinhood.com/quotes/JPSE/",
      "symbol":  "JPSE",
      "bloomberg_unique":  "EQ0000000052744417",
      "list_date":  "2016-11-17",
      "fundamentals":  "https://api.robinhood.com/fundamentals/JPSE/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "37308ad8-72f2-4005-afaf-b050fbb952f8",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "JPMorgan Diversified Return US S"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/ca43478e-a949-4e16-8b2a-4199942129e9/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/ca43478e-a949-4e16-8b2a-4199942129e9/",
      "quote":  "https://api.robinhood.com/quotes/IGLEU/",
      "symbol":  "IGLEU",
      "bloomberg_unique":  "EQ0000000052277848",
      "list_date":  null,
      "fundamentals":  "https://api.robinhood.com/fundamentals/IGLEU/",
      "state":  "inactive",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "ca43478e-a949-4e16-8b2a-4199942129e9",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Eagleline Acquisition Corp. Units"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/f725e419-5246-45b2-86a6-cc652d0661fd/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/f725e419-5246-45b2-86a6-cc652d0661fd/",
      "quote":  "https://api.robinhood.com/quotes/GTYHW/",
      "symbol":  "GTYHW",
      "bloomberg_unique":  "EQ0000000052827840",
      "list_date":  null,
      "fundamentals":  "https://api.robinhood.com/fundamentals/GTYHW/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "f725e419-5246-45b2-86a6-cc652d0661fd",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "GTY Technology Holdings, Inc. Warrants"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/41741947-e863-40cd-850c-8a5e0b0009ed/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/41741947-e863-40cd-850c-8a5e0b0009ed/",
      "quote":  "https://api.robinhood.com/quotes/MOXC/",
      "symbol":  "MOXC",
      "bloomberg_unique":  "EQ0000000017109373",
      "list_date":  "2016-07-13",
      "fundamentals":  "https://api.robinhood.com/fundamentals/MOXC/",
      "state":  "active",
      "country":  "CN",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "41741947-e863-40cd-850c-8a5e0b0009ed",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Moxian, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/d86d3260-6f6e-44c8-b5a6-719395d8964d/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/d86d3260-6f6e-44c8-b5a6-719395d8964d/",
      "quote":  "https://api.robinhood.com/quotes/MACQW/",
      "symbol":  "MACQW",
      "bloomberg_unique":  "EQ0000000052827882",
      "list_date":  null,
      "fundamentals":  "https://api.robinhood.com/fundamentals/MACQW/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "d86d3260-6f6e-44c8-b5a6-719395d8964d",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "M I Acquisitions, Inc. Warrant"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/9916a403-ac09-4bd8-84df-d2250a497ef4/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/9916a403-ac09-4bd8-84df-d2250a497ef4/",
      "quote":  "https://api.robinhood.com/quotes/MACQ/",
      "symbol":  "MACQ",
      "bloomberg_unique":  "EQ0000000051673515",
      "list_date":  "2016-11-14",
      "fundamentals":  "https://api.robinhood.com/fundamentals/MACQ/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "9916a403-ac09-4bd8-84df-d2250a497ef4",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "M I Acquisitions, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/1e7d388a-60e4-48b4-8074-58913eea8126/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/1e7d388a-60e4-48b4-8074-58913eea8126/",
      "quote":  "https://api.robinhood.com/quotes/EFAS/",
      "symbol":  "EFAS",
      "bloomberg_unique":  "EQ0000000052874278",
      "list_date":  "2016-11-16",
      "fundamentals":  "https://api.robinhood.com/fundamentals/EFAS/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "1e7d388a-60e4-48b4-8074-58913eea8126",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Global X Funds Global X MSCI SuperDividend EAFE ETF"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/1af7d0f5-d9d6-4c52-b32c-d36efaa4253a/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/1af7d0f5-d9d6-4c52-b32c-d36efaa4253a/",
      "quote":  "https://api.robinhood.com/quotes/GTYH/",
      "symbol":  "GTYH",
      "bloomberg_unique":  "EQ0000000052477272",
      "list_date":  "2016-11-14",
      "fundamentals":  "https://api.robinhood.com/fundamentals/GTYH/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "1af7d0f5-d9d6-4c52-b32c-d36efaa4253a",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "GTY Technology Holdings, Inc. Class A Ordinary Shares"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/d79db4e0-c54c-489d-8876-f8653f035bb9/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/d79db4e0-c54c-489d-8876-f8653f035bb9/",
      "quote":  "https://api.robinhood.com/quotes/SNES/",
      "symbol":  "SNES",
      "bloomberg_unique":  "EQ0000000022866681",
      "list_date":  "2016-12-08",
      "fundamentals":  "https://api.robinhood.com/fundamentals/SNES/",
      "state":  "inactive",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "d79db4e0-c54c-489d-8876-f8653f035bb9",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "SenesTech, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/13bd86f2-5366-4ae8-8b62-85951e11edb3/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/13bd86f2-5366-4ae8-8b62-85951e11edb3/",
      "quote":  "https://api.robinhood.com/quotes/LW/",
      "symbol":  "LW",
      "bloomberg_unique":  "EQ0000000026643039",
      "list_date":  "2016-11-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/LW/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "13bd86f2-5366-4ae8-8b62-85951e11edb3",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Lamb Weston Holdings, Inc."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/0fefed58-ca6e-4e0d-a2f3-7068e31e5d2d/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/0fefed58-ca6e-4e0d-a2f3-7068e31e5d2d/",
      "quote":  "https://api.robinhood.com/quotes/DFFN/",
      "symbol":  "DFFN",
      "bloomberg_unique":  "EQ0017983200001000",
      "list_date":  "2016-08-19",
      "fundamentals":  "https://api.robinhood.com/fundamentals/DFFN/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "0fefed58-ca6e-4e0d-a2f3-7068e31e5d2d",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Diffusion Pharmaceuticals Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/44d3d35c-46f8-4ae3-9e96-284ae9fbdc06/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/44d3d35c-46f8-4ae3-9e96-284ae9fbdc06/",
      "quote":  "https://api.robinhood.com/quotes/XBIO/",
      "symbol":  "XBIO",
      "bloomberg_unique":  "EQ0000000020905724",
      "list_date":  "2012-06-19",
      "fundamentals":  "https://api.robinhood.com/fundamentals/XBIO/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "44d3d35c-46f8-4ae3-9e96-284ae9fbdc06",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Xenetic Biosciences, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/9652bfa1-8746-4279-b585-9e5a13a822ea/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/9652bfa1-8746-4279-b585-9e5a13a822ea/",
      "quote":  "https://api.robinhood.com/quotes/SCACW/",
      "symbol":  "SCACW",
      "bloomberg_unique":  "EQ0000000052671718",
      "list_date":  null,
      "fundamentals":  "https://api.robinhood.com/fundamentals/SCACW/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "9652bfa1-8746-4279-b585-9e5a13a822ea",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Saban Capital Acquisition Corp. Warrants"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/4c1684fb-35c5-4530-9f41-915b4f993010/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/4c1684fb-35c5-4530-9f41-915b4f993010/",
      "quote":  "https://api.robinhood.com/quotes/SCAC/",
      "symbol":  "SCAC",
      "bloomberg_unique":  "EQ0000000052672078",
      "list_date":  "2016-11-07",
      "fundamentals":  "https://api.robinhood.com/fundamentals/SCAC/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "4c1684fb-35c5-4530-9f41-915b4f993010",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Saban Capital Acquisition Corp. Class A Ordinary Share"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/e72caa42-03eb-485f-aef4-171dd43c592a/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/e72caa42-03eb-485f-aef4-171dd43c592a/",
      "quote":  "https://api.robinhood.com/quotes/HT-E/",
      "symbol":  "HT-E",
      "bloomberg_unique":  "PFEP0518662",
      "list_date":  "2016-11-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/HT-E/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "e72caa42-03eb-485f-aef4-171dd43c592a",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Hersha Hospitality Trust"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/4095808a-0471-45b5-aa8d-f6d1cb8611a5/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/4095808a-0471-45b5-aa8d-f6d1cb8611a5/",
      "quote":  "https://api.robinhood.com/quotes/TPIV/",
      "symbol":  "TPIV",
      "bloomberg_unique":  "EQ0031310000001000",
      "list_date":  "2009-07-28",
      "fundamentals":  "https://api.robinhood.com/fundamentals/TPIV/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "4095808a-0471-45b5-aa8d-f6d1cb8611a5",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "TapImmune Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/bb143408-610f-4c2b-a552-e20fed01d766/splits/",
      "margin_initial_ratio":  "0.5600",
      "url":  "https://api.robinhood.com/instruments/bb143408-610f-4c2b-a552-e20fed01d766/",
      "quote":  "https://api.robinhood.com/quotes/GECC/",
      "symbol":  "GECC",
      "bloomberg_unique":  "EQ0000000050261769",
      "list_date":  "2003-04-25",
      "fundamentals":  "https://api.robinhood.com/fundamentals/GECC/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.4500",
      "id":  "bb143408-610f-4c2b-a552-e20fed01d766",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Great Elm Capital Corp. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/1b37245d-5009-4b7a-832d-bbaecb9f92c9/splits/",
      "margin_initial_ratio":  "0.6800",
      "url":  "https://api.robinhood.com/instruments/1b37245d-5009-4b7a-832d-bbaecb9f92c9/",
      "quote":  "https://api.robinhood.com/quotes/SND/",
      "symbol":  "SND",
      "bloomberg_unique":  "EQ0000000030481027",
      "list_date":  "2016-11-04",
      "fundamentals":  "https://api.robinhood.com/fundamentals/SND/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.6000",
      "id":  "1b37245d-5009-4b7a-832d-bbaecb9f92c9",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Smart Sand, Inc. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/26e5e812-1287-4ed0-af38-5937032a2eee/splits/",
      "margin_initial_ratio":  "0.5600",
      "url":  "https://api.robinhood.com/instruments/26e5e812-1287-4ed0-af38-5937032a2eee/",
      "quote":  "https://api.robinhood.com/quotes/LEXEB/",
      "symbol":  "LEXEB",
      "bloomberg_unique":  "EQ0000000046250294",
      "list_date":  "2016-11-04",
      "fundamentals":  "https://api.robinhood.com/fundamentals/LEXEB/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.4500",
      "id":  "26e5e812-1287-4ed0-af38-5937032a2eee",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Liberty Expedia Holdings, Inc. Series B Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/2cf00082-f5c0-4381-9e9a-1a8345bfd8e9/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/2cf00082-f5c0-4381-9e9a-1a8345bfd8e9/",
      "quote":  "https://api.robinhood.com/quotes/LEXEA/",
      "symbol":  "LEXEA",
      "bloomberg_unique":  "EQ0000000046250282",
      "list_date":  "2016-11-04",
      "fundamentals":  "https://api.robinhood.com/fundamentals/LEXEA/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "2cf00082-f5c0-4381-9e9a-1a8345bfd8e9",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Liberty Expedia Holdings, Inc. Series A Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/0e0d4138-23c8-46cb-b6e2-5badfaac1957/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/0e0d4138-23c8-46cb-b6e2-5badfaac1957/",
      "quote":  "https://api.robinhood.com/quotes/INSG/",
      "symbol":  "INSG",
      "bloomberg_unique":  "EQ0000000051867373",
      "list_date":  "1995-11-17",
      "fundamentals":  "https://api.robinhood.com/fundamentals/INSG/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "1.0000",
      "id":  "0e0d4138-23c8-46cb-b6e2-5badfaac1957",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "Inseego Corp. Common Stock"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/8db0d6de-5520-4011-be8f-a87158c0f08e/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/8db0d6de-5520-4011-be8f-a87158c0f08e/",
      "quote":  "https://api.robinhood.com/quotes/MENU/",
      "symbol":  "MENU",
      "bloomberg_unique":  "EQ0000000052712076",
      "list_date":  "2004-11-16",
      "fundamentals":  "https://api.robinhood.com/fundamentals/MENU/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "8db0d6de-5520-4011-be8f-a87158c0f08e",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "USCF Restaurant Leaders Fund"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/a464f25c-ce04-4059-af60-addb0a5b15a3/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/a464f25c-ce04-4059-af60-addb0a5b15a3/",
      "quote":  "https://api.robinhood.com/quotes/ARNC/",
      "symbol":  "ARNC",
      "bloomberg_unique":  "EQ0000000052124736",
      "list_date":  "2016-11-01",
      "fundamentals":  "https://api.robinhood.com/fundamentals/ARNC/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "a464f25c-ce04-4059-af60-addb0a5b15a3",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Arconic Inc."
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/caaa30bc-962c-4d8f-9bc8-1b9af897c7e5/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/caaa30bc-962c-4d8f-9bc8-1b9af897c7e5/",
      "quote":  "https://api.robinhood.com/quotes/AA/",
      "symbol":  "AA",
      "bloomberg_unique":  "EQ0000000045469815",
      "list_date":  "1990-01-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/AA/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "caaa30bc-962c-4d8f-9bc8-1b9af897c7e5",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Alcoa Corporation"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/1238f9e4-2496-474e-93b7-7ec0c66c04ea/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/1238f9e4-2496-474e-93b7-7ec0c66c04ea/",
      "quote":  "https://api.robinhood.com/quotes/GGO-A/",
      "symbol":  "GGO-A",
      "bloomberg_unique":  "PFEP0518803",
      "list_date":  "2016-11-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/GGO-A/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "1238f9e4-2496-474e-93b7-7ec0c66c04ea",
      "market":  "https://api.robinhood.com/markets/XASE/",
      "name":  "The Gabelli Go Anywhere Trust"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/3a3d337a-bba1-442e-a6d4-15451070cada/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/3a3d337a-bba1-442e-a6d4-15451070cada/",
      "quote":  "https://api.robinhood.com/quotes/GGO/",
      "symbol":  "GGO",
      "bloomberg_unique":  "EQ0000000052536266",
      "list_date":  "2016-11-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/GGO/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.2500",
      "id":  "3a3d337a-bba1-442e-a6d4-15451070cada",
      "market":  "https://api.robinhood.com/markets/XASE/",
      "name":  "The Gabelli Go Anywhere Trust"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/f291533f-de0f-4f77-ab0f-6f90ab0a36c4/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/f291533f-de0f-4f77-ab0f-6f90ab0a36c4/",
      "quote":  "https://api.robinhood.com/quotes/IMTB/",
      "symbol":  "IMTB",
      "bloomberg_unique":  "EQ0000000052613842",
      "list_date":  "2016-11-03",
      "fundamentals":  "https://api.robinhood.com/fundamentals/IMTB/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "f291533f-de0f-4f77-ab0f-6f90ab0a36c4",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "iShares Core 5-10 Year USD Bond"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/d3b228f0-c976-4d1e-9f29-380b92238547/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/d3b228f0-c976-4d1e-9f29-380b92238547/",
      "quote":  "https://api.robinhood.com/quotes/DHDG/",
      "symbol":  "DHDG",
      "bloomberg_unique":  "EQ0000000052533836",
      "list_date":  "2016-11-03",
      "fundamentals":  "https://api.robinhood.com/fundamentals/DHDG/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "d3b228f0-c976-4d1e-9f29-380b92238547",
      "market":  "https://api.robinhood.com/markets/BATS/",
      "name":  "WisdomTree Dynamic Currency Hedged International Quality Dividend Growth Fund"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/191a124b-f160-46fb-8155-5865c25021bf/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/191a124b-f160-46fb-8155-5865c25021bf/",
      "quote":  "https://api.robinhood.com/quotes/FLEU/",
      "symbol":  "FLEU",
      "bloomberg_unique":  "EQ0000000052614004",
      "list_date":  "2016-11-08",
      "fundamentals":  "https://api.robinhood.com/fundamentals/FLEU/",
      "state":  "active",
      "country":  "GB",
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "191a124b-f160-46fb-8155-5865c25021bf",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "Barclays ETN FI Enhanced Europe"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/d4b87786-9475-4e67-a6d4-7eae7623862b/splits/",
      "margin_initial_ratio":  "0.5000",
      "url":  "https://api.robinhood.com/instruments/d4b87786-9475-4e67-a6d4-7eae7623862b/",
      "quote":  "https://api.robinhood.com/quotes/GVIP/",
      "symbol":  "GVIP",
      "bloomberg_unique":  "EQ0000000052629376",
      "list_date":  "2004-11-04",
      "fundamentals":  "https://api.robinhood.com/fundamentals/GVIP/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.2500",
      "id":  "d4b87786-9475-4e67-a6d4-7eae7623862b",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "Goldman Sachs Hedge Industry VIP"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/8825a023-f4d7-4b78-8bf9-1e15d68aa87c/splits/",
      "margin_initial_ratio":  "1.0000",
      "url":  "https://api.robinhood.com/instruments/8825a023-f4d7-4b78-8bf9-1e15d68aa87c/",
      "quote":  "https://api.robinhood.com/quotes/IMOS/",
      "symbol":  "IMOS",
      "bloomberg_unique":  "EQ0000000051403130",
      "list_date":  "2001-06-19",
      "fundamentals":  "https://api.robinhood.com/fundamentals/IMOS/",
      "state":  "active",
      "country":  "TW",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "1.0000",
      "id":  "8825a023-f4d7-4b78-8bf9-1e15d68aa87c",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "ChipMOS TECHNOLOGIES INC. American Depositary Shares"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/e712ee99-10fc-4c64-87f6-5a2a3ea2be47/splits/",
      "margin_initial_ratio":  "0.6800",
      "url":  "https://api.robinhood.com/instruments/e712ee99-10fc-4c64-87f6-5a2a3ea2be47/",
      "quote":  "https://api.robinhood.com/quotes/GDS/",
      "symbol":  "GDS",
      "bloomberg_unique":  "EQ0000000052098572",
      "list_date":  "2016-11-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/GDS/",
      "state":  "active",
      "country":  "CN",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.6000",
      "id":  "e712ee99-10fc-4c64-87f6-5a2a3ea2be47",
      "market":  "https://api.robinhood.com/markets/XNAS/",
      "name":  "GDS Holdings Limited ADS"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/cd019c37-05d2-43f0-98a9-d5ff946e457c/splits/",
      "margin_initial_ratio":  "0.8000",
      "url":  "https://api.robinhood.com/instruments/cd019c37-05d2-43f0-98a9-d5ff946e457c/",
      "quote":  "https://api.robinhood.com/quotes/CWEB/",
      "symbol":  "CWEB",
      "bloomberg_unique":  "EQ0000000052533740",
      "list_date":  "2016-11-02",
      "fundamentals":  "https://api.robinhood.com/fundamentals/CWEB/",
      "state":  "active",
      "country":  {
        "alpha3":  "",
        "code":  "",
        "flag":  "",
        "flag_url":  null,
        "ioc_code":  "",
        "name":  "",
        "numeric":  null,
        "numeric_padded":  null
      },
      "day_trade_ratio":  "0.2500",
      "tradeable":  true,
      "maintenance_ratio":  "0.7500",
      "id":  "cd019c37-05d2-43f0-98a9-d5ff946e457c",
      "market":  "https://api.robinhood.com/markets/ARCX/",
      "name":  "Direxion Daily CSI China Interne"
    },
    {
      "min_tick_size":  null,
      "splits":  "https://api.robinhood.com/instruments/fc14b5ba-3f33-4f76-9e76-097d2c7a0ee0/splits/",
      "margin_initial_ratio":  "0.6800",
      "url":  "https://api.robinhood.com/instruments/fc14b5ba-3f33-4f76-9e76-097d2c7a0ee0/",
      "quote":  "https://api.robinhood.com/quotes/ARCH/",
      "symbol":  "ARCH",
      "bloomberg_unique":  "EQ0022581500001000",
      "list_date":  "2016-10-05",
      "fundamentals":  "https://api.robinhood.com/fundamentals/ARCH/",
      "state":  "active",
      "country":  "US",
      "day_trade_ratio":  "0.2500",
      "tradeable":  false,
      "maintenance_ratio":  "0.6000",
      "id":  "fc14b5ba-3f33-4f76-9e76-097d2c7a0ee0",
      "market":  "https://api.robinhood.com/markets/XNYS/",
      "name":  "Arch Coal, Inc."
    }
  ],
  "next":  "https://api.robinhood.com/instruments/?cursor=cD05NzYy"
}
```

# Gather Basic Instrument Info by Symbol

**Method**

| URI                            | HTTP Method | Authentication |
|--------------------------------|-------------|----------------|
| api.robinhood.com/instruments/ | GET         | No             |

**Fields**

| Parameter | Type   | Description                                         		          | Default |Required|
|-----------|--------|--------------------------------------------------------------------|---------|--------|
| symbol    | String | The ticker symbol of the security you're attmepting to get info on | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/instruments/?symbol=MSFT \
   -H "Accept: application/json"
```

**Response**

A [paginated](README.md#pagination) list of instruments is returned. Instruments contain the following keys...

| Key                   | Type       | Description |
|-----------------------|------------|-------------|
| min_tick_size         | Float      | Note: Might be null. See http://www.finra.org/industry/tick-size-pilot-program |
| splits                | URL        | Link to the split list for this security |
| margin_initial_ratio  | Float      |                                          |
| url 					| URL 	     | Endpoint where more information about this security may be grabbed |
| quote 				| URL 	     | Endpoint where quote data about this security may be grabbed |
| symbol                | String     | The ticker symbol for this security |
| bloomberg_unique      | String     | Bloomberg Global ID (BBGID) for this security. See http://bsym.bloomberg.com/sym/ |
| list_date             | YYYY-MM-DD | Date this security was first traded publically on the exchange |
| fundamentals          | URL        | Link to fundamental data for this security |
| state                 | String     | Indicates whether the security is "active" or not |
| country               | String     | Two char country code for the security's home office or headquarters |
| day_trade_ratio       | Float      |  |
| tradeable             | Boolean    | Indicates whether the security can be traded on Robinhood |
| maintenance_ratio     | Float      |  |
| id                    | String     | The instrument id of this security |
| market                | URL        | Link to the market/exchange this security is traded on |
| name                  | String     | Basic name of the security. Perfect for display |

**Response sample**

```
{
    "previous":  null,
    "results":  [
        {
            "min_tick_size":  null,
            "splits":  "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/",
            "margin_initial_ratio":  "0.5000",
            "url":  "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
            "quote":  "https://api.robinhood.com/quotes/MSFT/",
            "symbol":  "MSFT",
            "bloomberg_unique":  "EQ0010174300001000",
            "list_date":  "1987-09-17",
            "fundamentals":  "https://api.robinhood.com/fundamentals/MSFT/",
            "state":  "active",
            "country":  "US",
            "day_trade_ratio":  "0.2500",
            "tradeable":  true,
            "maintenance_ratio":  "0.2500",
            "id":  "50810c35-d215-4866-9758-0ada4ac79ffa",
            "market":  "https://api.robinhood.com/markets/XNAS/",
            "name":  "Microsoft Corporation - Common Stock"
        }
    ],
    "next": null
}
```

# Gather Basic Instrument Info by ID

**Method**

| URI                                            | HTTP Method | Authentication |
|------------------------------------------------|-------------|----------------|
| api.robinhood.com/instruments/{instrument id}/ | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/ \
   -H "Accept: application/json"

```

**Response**

Instruments contain the following keys...

| Key                   | Type       | Description |
|-----------------------|------------|-------------|
| min_tick_size         | Float      | Note: Might be null. See http://www.finra.org/industry/tick-size-pilot-program |
| splits                | URL        | Link to the split list for this security |
| margin_initial_ratio  | Float      |                                          |
| url 					| URL 	     | Endpoint where more information about this security may be grabbed |
| quote 				| URL 	     | Endpoint where quote data about this security may be grabbed |
| symbol                | String     | The ticker symbol for this security |
| bloomberg_unique      | String     | Bloomberg Global ID (BBGID) for this security. See http://bsym.bloomberg.com/sym/ |
| list_date             | YYYY-MM-DD | Date this security was first traded publically on the exchange |
| fundamentals          | URL        | Link to fundamental data for this security |
| state                 | String     | Indicates whether the security is "active" or not |
| country               | String     | Two char country code for the security's home office or headquarters |
| day_trade_ratio       | Float      |  |
| tradeable             | Boolean    | Indicates whether the security can be traded on Robinhood |
| maintenance_ratio     | Float      |  |
| id                    | String     | The instrument id of this security |
| market                | URL        | Link to the market/exchange this security is traded on |
| name                  | String     | Basic name of the security. Perfect for display |

**Response sample**

```
{
    "min_tick_size":  null,
    "splits":  "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/splits/",
    "margin_initial_ratio":  "0.5000",
    "url":  "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
    "quote":  "https://api.robinhood.com/quotes/MSFT/",
    "symbol":  "MSFT",
    "bloomberg_unique":  "EQ0010174300001000",
    "list_date":  "1987-09-17",
    "fundamentals":  "https://api.robinhood.com/fundamentals/MSFT/",
    "state":  "active",
    "country":  "US",
    "day_trade_ratio":  "0.2500",
    "tradeable":  true,
    "maintenance_ratio":  "0.2500",
    "id":  "50810c35-d215-4866-9758-0ada4ac79ffa",
    "market":  "https://api.robinhood.com/markets/XNAS/",
    "name":  "Microsoft Corporation - Common Stock"
}

```

# Search for Instruments by Keyword

This returns a paginated list of all instruments matching the query parameter.

**Method**

| URI                            | HTTP Method | Authentication |
|--------------------------------|-------------|----------------|
| api.robinhood.com/instruments/ | GET         | No             |

**Fields**

| Parameter | Type   | Description                                         		          | Default |Required|
|-----------|--------|--------------------------------------------------------------------|---------|--------|
| query     | String | Keyword used to search instruments. This keyword might be found in the name for example | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/instruments/?query=oil \
   -H "Accept: application/json"
```

**Response**

A [paginated](README.md#pagination) list of instruments is returned. Instruments contain the following keys...

| Key                   | Type       | Description |
|-----------------------|------------|-------------|
| min_tick_size         | Float      | Note: Might be null. See http://www.finra.org/industry/tick-size-pilot-program |
| splits                | URL        | Link to the split list for this security |
| margin_initial_ratio  | Float      |                                          |
| url 					| URL 	     | Endpoint where more information about this security may be grabbed |
| quote 				| URL 	     | Endpoint where quote data about this security may be grabbed |
| symbol                | String     | The ticker symbol for this security |
| bloomberg_unique      | String     | Bloomberg Global ID (BBGID) for this security. See http://bsym.bloomberg.com/sym/ |
| list_date             | YYYY-MM-DD | Date this security was first traded publically on the exchange |
| fundamentals          | URL        | Link to fundamental data for this security |
| state                 | String     | Indicates whether the security is "active" or not |
| country               | String     | Two char country code for the security's home office or headquarters |
| day_trade_ratio       | Float      |  |
| tradeable             | Boolean    | Indicates whether the security can be traded on Robinhood |
| maintenance_ratio     | Float      |  |
| id                    | String     | The instrument id of this security |
| market                | URL        | Link to the market/exchange this security is traded on |
| name                  | String     | Basic name of the security. Perfect for display |

**Response sample**

```
{
   "previous":  null,
   "results":  [
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/6d744560-ef77-4aa0-8524-7a771cc04bd7/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/6d744560-ef77-4aa0-8524-7a771cc04bd7/",
         "quote":  "https://api.robinhood.com/quotes/OIL/",
         "symbol":  "OIL",
         "bloomberg_unique":  "EQ0000000002030237",
         "list_date":  "2006-08-16",
         "fundamentals":  "https://api.robinhood.com/fundamentals/OIL/",
         "state":  "active",
         "country":  "GB",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "6d744560-ef77-4aa0-8524-7a771cc04bd7",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "Barclays Bank PLC iPath GS C Oil"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/ab4f79fc-f84a-4f7b-8132-4f3e5fb38075/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/ab4f79fc-f84a-4f7b-8132-4f3e5fb38075/",
         "quote":  "https://api.robinhood.com/quotes/MRO/",
         "symbol":  "MRO",
         "bloomberg_unique":  "EQ0010158100001000",
         "list_date":  "1970-01-02",
         "fundamentals":  "https://api.robinhood.com/fundamentals/MRO/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "ab4f79fc-f84a-4f7b-8132-4f3e5fb38075",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "Marathon Oil Corporation"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/01f33471-51d9-4afe-850f-b5f13d58c459/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/01f33471-51d9-4afe-850f-b5f13d58c459/",
         "quote":  "https://api.robinhood.com/quotes/USO/",
         "symbol":  "USO",
         "bloomberg_unique":  "EQ0000000002417621",
         "list_date":  "2006-04-10",
         "fundamentals":  "https://api.robinhood.com/fundamentals/USO/",
         "state":  "active",
         "country":  "CA",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "01f33471-51d9-4afe-850f-b5f13d58c459",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "United States Oil Fund, LP"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/48eab16a-7378-45e9-970a-c50fd081d25d/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/48eab16a-7378-45e9-970a-c50fd081d25d/",
         "quote":  "https://api.robinhood.com/quotes/XOP/",
         "symbol":  "XOP",
         "bloomberg_unique":  "EQ0000000002554511",
         "list_date":  "2006-06-22",
         "fundamentals":  "https://api.robinhood.com/fundamentals/XOP/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "48eab16a-7378-45e9-970a-c50fd081d25d",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "SPDR S&P Oil & Gas Exploration & Production ETF"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/4860d88a-807b-4345-8545-5bb87971b7d7/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/4860d88a-807b-4345-8545-5bb87971b7d7/",
         "quote":  "https://api.robinhood.com/quotes/NOV/",
         "symbol":  "NOV",
         "bloomberg_unique":  "EQ0019450500001000",
         "list_date":  "2005-03-14",
         "fundamentals":  "https://api.robinhood.com/fundamentals/NOV/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "4860d88a-807b-4345-8545-5bb87971b7d7",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "National Oilwell Varco, Inc"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/b6e2a781-49e8-47c5-bee3-a01178ecff27/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/b6e2a781-49e8-47c5-bee3-a01178ecff27/",
         "quote":  "https://api.robinhood.com/quotes/OIH/",
         "symbol":  "OIH",
         "bloomberg_unique":  "EQ0174648800060000",
         "list_date":  "2001-02-07",
         "fundamentals":  "https://api.robinhood.com/fundamentals/OIH/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "b6e2a781-49e8-47c5-bee3-a01178ecff27",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "Market Vectors Oil Service ETF"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/d8edff21-cb19-4373-af1c-f83a3c0d01c4/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/d8edff21-cb19-4373-af1c-f83a3c0d01c4/",
         "quote":  "https://api.robinhood.com/quotes/MUR/",
         "symbol":  "MUR",
         "bloomberg_unique":  "EQ0010102400001000",
         "list_date":  "1990-01-02",
         "fundamentals":  "https://api.robinhood.com/fundamentals/MUR/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "d8edff21-cb19-4373-af1c-f83a3c0d01c4",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "Murphy Oil Holding Co"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/1aec2cb5-0b0d-49ff-a386-795f08c91019/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/1aec2cb5-0b0d-49ff-a386-795f08c91019/",
         "quote":  "https://api.robinhood.com/quotes/COG/",
         "symbol":  "COG",
         "bloomberg_unique":  "EQ0010025300002000",
         "list_date":  "1994-01-03",
         "fundamentals":  "https://api.robinhood.com/fundamentals/COG/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "1aec2cb5-0b0d-49ff-a386-795f08c91019",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "Cabot Oil & Gas Corporation"
      },
      {
         "min_tick_size":  null,
         "splits":  "https://api.robinhood.com/instruments/a4cb239f-465e-40be-b59d-cbb98c171be8/splits/",
         "margin_initial_ratio":  "0.8000",
         "url":  "https://api.robinhood.com/instruments/a4cb239f-465e-40be-b59d-cbb98c171be8/",
         "quote":  "https://api.robinhood.com/quotes/UWT/",
         "symbol":  "UWT",
         "bloomberg_unique":  "EQ0000000053545422",
         "list_date":  "2016-12-09",
         "fundamentals":  "https://api.robinhood.com/fundamentals/UWT/",
         "state":  "active",
         "country":  {
            "alpha3":  "",
            "code":  "",
            "flag":  "",
            "flag_url":  null,
            "ioc_code":  "",
            "name":  "",
            "numeric":  null,
            "numeric_padded":  null
         },
         "day_trade_ratio":  "0.7500",
         "tradeable":  true,
         "maintenance_ratio":  "0.7500",
         "id":  "a4cb239f-465e-40be-b59d-cbb98c171be8",
         "market":  "https://api.robinhood.com/markets/ARCX/",
         "name":  "VelocityShares3x Long Crude Oil"
      },
      {
         "min_tick_size":  "0.0500",
         "splits":  "https://api.robinhood.com/instruments/68de11a3-37cb-4197-9052-15de2c84fb55/splits/",
         "margin_initial_ratio":  "0.5000",
         "url":  "https://api.robinhood.com/instruments/68de11a3-37cb-4197-9052-15de2c84fb55/",
         "quote":  "https://api.robinhood.com/quotes/OIS/",
         "symbol":  "OIS",
         "bloomberg_unique":  "EQ0118343700001000",
         "list_date":  "2001-02-09",
         "fundamentals":  "https://api.robinhood.com/fundamentals/OIS/",
         "state":  "active",
         "country":  "US",
         "day_trade_ratio":  "0.2500",
         "tradeable":  true,
         "maintenance_ratio":  "0.2500",
         "id":  "68de11a3-37cb-4197-9052-15de2c84fb55",
         "market":  "https://api.robinhood.com/markets/XNYS/",
         "name":  "Oil States International"
      }
   ],
   "next":  null
}
```

# Gather the Split History for an Instrument

This returns a paginated list of stock splits for this instrument.

**Method**

| URI                                                   | HTTP Method | Authentication |
|-------------------------------------------------------|-------------|----------------|
| api.robinhood.com/instruments/{instrument_id}/splits/ | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/ \
   -H "Accept: application/json"
```

**Response**

A [paginated](README.md#pagination) list of split data is returned. A split contains the following keys...

| Key            | Type       | Description |
|----------------|------------|-------------|
| url 			 | URL 	      | Endpoint where more information about this particular split |
| instrument     | URL        | Link back to the instrument |
| execution_date | YYYY-MM-DD | The date this split goes into effect |
| divisor        | Float      | |
| multiplier     | Float      | |

**Response sample**

```
{
   "previous": null,
   "results": [
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/bc0e7068-1bf4-4b81-b066-93830495d883/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2016-08-25",
         "divisor": "1.00000000",
         "multiplier": "0.20000000"
      },
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/b5bc679c-445c-45d9-b462-dda72ea6d4a7/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2016-05-18",
         "divisor": "1.00000000",
         "multiplier": "0.10000000"
      },
      {
         "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/",
         "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
         "execution_date": "2015-10-01",
         "divisor": "4.00000000",
         "multiplier": "1.00000000"
      }
   ],
   "next": null
}
```

# Grab Data on a Single Split

This returns a paginated list of stock splits for this instrument.

**Method**

| URI                                                             | HTTP Method | Authentication |
|-----------------------------------------------------------------|-------------|----------------|
| api.robinhood.com/instruments/{instrument_id}/splits/{split_id} | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/ \
   -H "Accept: application/json"
```

**Response**

A single split data is returned. A split contains the following keys...

| Key            | Type       | Description |
|----------------|------------|-------------|
| url 			 | URL 	      | Endpoint where more information about this particular split |
| instrument     | URL        | Link back to the instrument |
| execution_date | YYYY-MM-DD | The date this split goes into effect |
| divisor        | Float      | |
| multiplier     | Float      | |

**Response sample**

```
{
   "url": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/splits/8cbf65be-fe4b-4e01-9b9f-f4fb9aaf6ba5/",
   "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
   "execution_date": "2015-10-01",
   "divisor": "4.00000000",
   "multiplier": "1.00000000"
}
```
