# Grab a List of Fundamental Data Endpoints

This returns a paginated list of instruments' fundamental data as tracked by Robinhood's partners.

**URL** : `/fundamentals/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Query constraints**

You must include one of the following:

    - symbols - tickers (optional; comma separated list)
    - instruments - comma separated list of instrument urls (optional)
    - ids - comma separated list of instrument id (optional)

**Request samples**

To get certain instruments by symbol:

```
curl -v https://api.robinhood.com/fundamentals/?symbol=MSFT \
   -H "Accept: application/json"

```

To get certain instruments by instrument urls:

```
curl -v https://api.robinhood.com/fundamentals/?instruments=https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/,https://api.robinhood.com/instruments/b060f19f-0d24-4bf2-bf8c-d57ba33993e5/ \
   -H "Accept: application/json"
```

To get certain instruments by id:

```
curl -v https://api.robinhood.com/fundamentals/?ids=50810c35-d215-4866-9758-0ada4ac79ffa,b060f19f-0d24-4bf2-bf8c-d57ba33993e5 \
   -H "Accept: application/json"
```

## Success Responses

**Condition** : You didn't mess up your HTTP headers?

**Code** : `200 OK`

**Content example** :

Grab a list of instruments' fundamental data by id in one call like `https://api.robinhood.com/instruments/?ids=50810c35-d215-4866-9758-0ada4ac79ffa,b060f19f-0d24-4bf2-bf8c-d57ba33993e5`:

```json
{
  "results": [
    {
      "open": "104.360000",
      "high": "105.600000",
      "low": "104.090000",
      "volume": "9665466.000000",
      "average_volume_2_weeks": "19840855.555600",
      "average_volume": "25754906.812700",
      "high_52_weeks": "105.600000",
      "dividend_yield": "2.263200",
      "low_52_weeks": "71.280000",
      "market_cap": "810756700000.000000",
      "pe_ratio": "58.566666",
      "shares_outstanding": "7690000000.000000",
      "description": "Microsoft Corp. engages in the provision of developing and marketing software and hardware services. Its products include operating systems for computing devices, servers, phones and intelligent devices. It also offers server applications for distributed computing environments, productivity applications, business solution applications, desktop and server management tools, software development tools, video games, and online advertising. It operates through the following segments: Productivity and Business Processes; Intelligent Cloud; and More Personal Computing. The Productivity and Business Processes segment consists of products and cloud services in portfolio of productivity, communication, and information services. It comprises of office commercial, office consumer, and microsoft dynamics business solutions. The Intelligent Cloud segment offers hybrid server products and cloud services. It comprises of server products and cloud services and enterprise services. The More Personal Computing segment comprises of windows, devices, gaming, and search advertising. The company was founded by William Henry Gates III in 1975 and is headquartered in Redmond, WA.",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "ceo": "Satya Nadella",
      "headquarters_city": "Redmond",
      "headquarters_state": "Washington",
      "sector": "Technology Services",
      "num_employees": 124000,
      "year_founded": 1975
    },
    {
      "open": "36.090000",
      "high": "36.490000",
      "low": "35.650000",
      "volume": "2439111.000000",
      "average_volume_2_weeks": "6629062.666700",
      "average_volume": "11783784.131500",
      "high_52_weeks": "47.640000",
      "dividend_yield": "0.568300",
      "low_52_weeks": "22.380000",
      "market_cap": "6400497600.000000",
      "pe_ratio": "10.938066",
      "shares_outstanding": "176760496.000000",
      "description": "United States Steel Corp. engages in the manufacturing and selling of steel products. It operates through the following segments: Flat-Rolled Products, U.S. Steel Europe, and Tubular Products. The Flat-Rolled Products segment includes managing steel plants and production facilities that manufactures steel slabs, rounds, strip mill plates, sheets, tin mill, iron ore, and coke. The U.S. Steel Europe segment offers producing and marketsing strip mill plates, spiral welded pipe, heating radiators, refractory ceramic materials. The Tubular Products segment involves in manufacturing and trading seamless and electric resistance welded steel casing and tubing. line pipe, and mechanical tubing. The company was founded in 1901 by Andrew Carnegie, John Pierpont Morgan, Charles Michael Schwab, and Elbert Henry Gary and is headquartered in Pittsburgh, PA.",
      "instrument": "https://api.robinhood.com/instruments/b060f19f-0d24-4bf2-bf8c-d57ba33993e5/",
      "ceo": "David B. Burritt",
      "headquarters_city": "Pittsburgh",
      "headquarters_state": "Pennsylvania",
      "sector": "Non Energy Minerals",
      "num_employees": 29200,
      "year_founded": 1901
    }
  ]
}
```

