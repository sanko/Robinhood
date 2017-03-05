# Fundamentals

- [Gather Fundamental Data by Ticker Symbol](#gather-fundamental-data-by-ticker-symbol)
- [Gather Fundamental Data for Multiple Ticker Symbols in a Single API Call](#gather-fundamental-data-for-multiple-ticker-symbols-in-a-single-api-call)

# Gather Fundamental Data by Ticker Symbol

**Method**

| URI                                      | HTTP Method | Authentication |
|------------------------------------------|-------------|----------------|
| api.robinhood.com/fundamentals/{symbol}/ | GET         | No             |

**Fields**

N/A

**Request sample**

```
curl -v https://api.robinhood.com/fundamentals/MSFT/ \
   -H "Accept: application/json"

```

**Response**

Results contain the following keys...

| Key            | Type   | Description |
|----------------|--------|-------------|
| open           | Float  | The price at open |
| high           | Float  | The highest trade price since open |
| low            | Float  | The lowest trade price since open |
| volume         | Float  |  |
| average_volume | Float  |  |
| high_52_weeks  | Float  | The highest trade price in the last 52 weeks |
| low_52_weeks   | Float  | The lowest trade price in the last 52 weeks |
| market_cap     | Float  |  |
| dividend_yield | Float  |  |
| pe_ratio       | Float  | Note: Might be null. |
| description    | String | Long description of security suited for display |
| instrument     | URL    | Link back to this security's instrument data |

**Response sample**

```
{
    "open": "63.9100",
    "high": "64.2800",
    "low": "63.6200",
    "volume": "8527495.0000",
    "average_volume": "27741172.4024",
    "high_52_weeks": "65.9100",
    "dividend_yield": "2.4287",
    "low_52_weeks": "48.0350",
    "market_cap": "496652500000.0000",
    "pe_ratio": "30.2971",
    "description": "Microsoft Corp. engages in the provision of developing and marketing software and hardware services. Its products include operating systems for computing devices, servers, phones and intelligent devices. It also offers server applications for distributed computing environments, productivity applications, business solution applications, desktop and server management tools, software development tools, video games, and online advertising. It operates through the following segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing. The Productivity and Business Processes segment consists of products and cloud services in portfolio of productivity, communication, and information services. It comprises of office commercial, office consumer, and microsoft dynamics business solutions. The Intelligent Cloud segment offers hybrid server products and cloud services. It comprises of server products and cloud services and enterprise services. The More Personal Computing segment comprises of windows, devices, gaming, and search advertising. The company was founded by William Henry Gates III in 1975 and is headquartered in Redmond, WA.",
    "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/"
}

```
# Gather Fundamental Data for Multiple Ticker Symbols in a Single API Call

You can gather data for a list of symbols at once by handing the bare `/fundamentals` path a `symbols` query filled with comma separated symbols. Please note that the API will only allow you to request up to ten symbols at a time.

**Method**

| URI                            | HTTP Method | Authentication |
|--------------------------------|-------------|----------------|
| api.robinhood.com/fundamentals/ | GET         | No             |

**Fields**

| Parameter | Type   | Description                                               | Default |Required|
|-----------|--------|-----------------------------------------------------------|---------|--------|
| symbols   | String | CSV of ticker symbols. API supports up to ten per request | N/A     | *Yes*  |

**Request sample**

```
curl -v https://api.robinhood.com/fundamentals/?symbols=MSFT,FB,TSLA \
   -H "Accept: application/json"
```

**Response**

A [semi-paginated](README.md#pagination) list is returned. Results contain the following keys...

| Key            | Type   | Description |
|----------------|--------|-------------|
| open           | Float  | The price at open |
| high           | Float  | The highest trade price since open |
| low            | Float  | The lowest trade price since open |
| volume         | Float  |  |
| average_volume | Float  |  |
| high_52_weeks  | Float  | The highest trade price in the last 52 weeks |
| low_52_weeks   | Float  | The lowest trade price in the last 52 weeks |
| market_cap     | Float  |  |
| dividend_yield | Float  |  |
| pe_ratio       | Float  | Note: Might be null. |
| description    | String | Long description of security suited for display |
| instrument     | URL    | Link back to this security's instrument data |

**Response sample**

```
{
    "results":[{
        "open": "63.9100",
        "high": "64.2800",
        "low": "63.6200",
        "volume": "8527495.0000",
        "average_volume": "27741172.4024",
        "high_52_weeks": "65.9100",
        "dividend_yield": "2.4287",
        "low_52_weeks": "48.0350",
        "market_cap": "496652500000.0000",
        "pe_ratio": "30.2971",
        "description": "Microsoft Corp. engages in the provision of developing and marketing software and hardware services. Its products include operating systems for computing devices, servers, phones and intelligent devices. It also offers server applications for distributed computing environments, productivity applications, business solution applications, desktop and server management tools, software development tools, video games, and online advertising. It operates through the following segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing. The Productivity and Business Processes segment consists of products and cloud services in portfolio of productivity, communication, and information services. It comprises of office commercial, office consumer, and microsoft dynamics business solutions. The Intelligent Cloud segment offers hybrid server products and cloud services. It comprises of server products and cloud services and enterprise services. The More Personal Computing segment comprises of windows, devices, gaming, and search advertising. The company was founded by William Henry Gates III in 1975 and is headquartered in Redmond, WA.",
        "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/"
    }, {
        "open": "136.6300",
        "high": "137.3300",
        "low": "136.0800",
        "volume": "5768669.0000",
        "average_volume": "21786854.2869",
        "high_52_weeks": "137.8200",
        "dividend_yield": "0.0000",
        "low_52_weeks": "104.4000",
        "market_cap": "396695640000.0000",
        "pe_ratio": "42.0613",
        "description": "Facebook, Inc. is a social networking company, which allows people to communicate with their family, friends, and coworkers. Its services include timeline, news feed, messages, lists, ticker and mobile apps. The company products include Facebook, Instagram, Messenger, Whatsapp and Oculus. Facebook was founded by Mark Elliot Zuckerberg, Dustin Moskovitz, Chris R. Hughes, Andrew McCollum and Eduardo P. Saverin on February 4, 2004 and is headquartered in Menlo Park, CA.",
        "instrument": "https://api.robinhood.com/instruments/ebab2398-028d-4939-9f1d-13bf38f81c50/"
    }, {
        "open": "250.7400",
        "high": "251.9000",
        "low": "249.0000",
        "volume": "1668096.0000",
        "average_volume": "4613055.2390",
        "high_52_weeks": "287.3900",
        "dividend_yield": "0.0000",
        "low_52_weeks": "178.1900",
        "market_cap": "37691475200.0000",
        "pe_ratio":null,
        "description": "Tesla, Inc. engages in the designing, development, manufacturing and sale of electric vehicles and electric power train components. Its products include electric vehicles such as the Model S, Model X, Model 3 and the Tesla Roadster. The company also manufactures home batteries and solar roof. Tesla was founded by Jeffrey B. Straubel, Elon Reeve Musk, Martin Eberhard, and Marc Tarpenning on July 1, 2003 and is headquartered in Palo Alto, CA.",
        "instrument": "https://api.robinhood.com/instruments/e39ed23a-7bd1-4587-b060-71988d9ef483/"
    }]
}
```
