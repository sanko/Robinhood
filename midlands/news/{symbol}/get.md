# Equity Instruments News

This endpoint returns list of articles related to an equity instrument by symbol.

**URL** : `/news/{symbol}/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Query parameters**

    - `page` - Optional cursor (integer)

**Path constraints**

    - `{symbol}` - security's ticker symbol

**Request samples**

```
curl -v https://midlands.robinhood.com/news/MSFT/ \
   -H "Accept: application/json"
```

## Success Responses

**Condition** : Sucessfully gather data.

**Code** : `200 OK`

**Content example** :

Here's the results for `https://midlands.robinhood.com/news/MSFT/`:

```json
{
  "count": 323,
  "next": "https://midlands.robinhood.com/news/MSFT/?page=2",
  "previous": null,
  "results": [
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 1658,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-05T04:06:00Z",
      "relay_url": "https://news.robinhood.com/80f4523d-9a16-3426-ac0e-a0c888337bcb/",
      "source": "Seeking Alpha",
      "summary": "Bakkt will provide a regulated exchange for institutional investors, but also plans to replace credit cards and get Bitcoin into people's 401k plans.",
      "title": "This Is A Game Changer For Bitcoin",
      "updated_at": "2018-08-05T12:16:23.053154Z",
      "url": "https://seekingalpha.com/article/4194905-game-changer-bitcoin",
      "uuid": "80f4523d-9a16-3426-ac0e-a0c888337bcb",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 520,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/4df8c9a0-e488-46be-bef0-e2fffd7dd69a",
      "preview_image_width": 400,
      "preview_image_height": 225,
      "published_at": "2018-08-05T01:23:00Z",
      "relay_url": "https://news.robinhood.com/3c4f55b8-4200-3eaf-ace8-7ae09ae5ff64/",
      "source": "Yahoo Finance",
      "summary": "Starbucks going all-in on cryptocurrency is \"the biggest news of the year for bitcoin,\" because it pavesthe way for a bitcoin ETF, according to BK Capital Management founder Brian Kelly.",
      "title": "Starbucks' crypto move could help put bitcoin in your retirement account, an investor says",
      "updated_at": "2018-08-05T12:16:23.039453Z",
      "url": "https://finance.yahoo.com/news/starbucks-apos-crypto-move-could-190000446.html",
      "uuid": "3c4f55b8-4200-3eaf-ace8-7ae09ae5ff64",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 185,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-04T11:21:00Z",
      "relay_url": "https://news.robinhood.com/f7b56ed7-681a-3003-9975-7e17d613c849/",
      "source": "Seeking Alpha",
      "summary": "A Look Back at the Week of July 30 to August 3, 2018\n\nWeek At A Glance:\n\nFAANG+ loosening its bite as value shares try to rally against growth. Apple (NASDAQ:AAPL) becomes the first company to hit a market cap of $1 trillion. Productivity growth slower than job growth in this increasingly tight ......",
      "title": "Weekly Wrap: Where Do We Go From Here?",
      "updated_at": "2018-08-04T12:17:42.416810Z",
      "url": "https://seekingalpha.com/article/4194808-weekly-wrap-go",
      "uuid": "f7b56ed7-681a-3003-9975-7e17d613c849",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 238,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T21:00:00Z",
      "relay_url": "https://news.robinhood.com/a3c23982-26f0-3549-ae03-5f3fe3a73267/",
      "source": "Seeking Alpha",
      "summary": "The long-term trends all favor social media's ongoing growth and higher values in the future.\n\nOn July 26, 2018 Facebook (NASDAQ:FB) set a record for the most value lost in one day by a single company. An astonishing $119B of market value was destroyed as the shares sank more than $40. For many ......",
      "title": "Reports Of Facebook's Death Are Greatly Exaggerated",
      "updated_at": "2018-08-03T21:15:59.070000Z",
      "url": "https://seekingalpha.com/article/4194655-reports-facebooks-death-greatly-exaggerated",
      "uuid": "a3c23982-26f0-3549-ae03-5f3fe3a73267",
      "currency_id": "None"
    },
    {
      "api_source": "marketwatch",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 163,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/f817a1ca-9fc3-46d3-a96f-d763647cf354",
      "preview_image_width": 569,
      "preview_image_height": 398,
      "published_at": "2018-08-03T19:56:00Z",
      "relay_url": "https://news.robinhood.com/77389033-d782-399d-ba72-f92a9cc6a4cb/",
      "source": "MarketWatch",
      "summary": "Here we go again, spilling ink over a round-number milestone.\n\nApple Inc. AAPL, +0.28% became the first U.S.-listed company in history to achieve a $1 trillion market capitalization on Thursday.\n\nThe ongoing, and long-running, bull market has been led by huge gains in the stocks of big-name tech ......",
      "title": "From U.S. Steel's $1 billion market cap to Apple's $1 trillion: a brief history of valuation milestones",
      "updated_at": "2018-08-03T20:16:16.240325Z",
      "url": "https://www.marketwatch.com/story/from-us-steels-1-billion-market-cap-to-apples-1-trillion-a-brief-history-of-valuation-milestones-2018-08-03",
      "uuid": "77389033-d782-399d-ba72-f92a9cc6a4cb",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 152,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/9bd184f6-7511-48d8-88c3-6944152164fc",
      "preview_image_width": 400,
      "preview_image_height": 225,
      "published_at": "2018-08-03T19:15:00Z",
      "relay_url": "https://news.robinhood.com/6aee3884-d5f7-34eb-a2a1-9311259fd1eb/",
      "source": "Yahoo Finance",
      "summary": "\"Cook has done something that really is the next step that's beyond what Steve Jobs did,\" says John Sculley. Cook used the Apple reputation to build a \"brilliant business model,\" the former Apple CEO says.Apple on Thursday became the first publicly traded U.S. company to reach $1 trillion in stock ......",
      "title": "Ex-Apple CEO Sculley: Tim Cook got Wall Street to fall in love with what Steve Jobs built",
      "updated_at": "2018-08-03T20:16:14.904951Z",
      "url": "https://finance.yahoo.com/news/ex-apple-ceo-sculley-tim-175500517.html",
      "uuid": "6aee3884-d5f7-34eb-a2a1-9311259fd1eb",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 81,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T18:32:00Z",
      "relay_url": "https://news.robinhood.com/ef7cd430-0dff-38d4-a9a0-b1939596a82f/",
      "source": "Seeking Alpha",
      "summary": "As long as the stock does not put in a weekly close below the $285.00 level, I see no reason to completely abandon positions in Netflix.",
      "title": "Netflix: Not Dead Yet",
      "updated_at": "2018-08-03T19:16:23.469555Z",
      "url": "https://seekingalpha.com/article/4194442-netflix-dead-yet",
      "uuid": "ef7cd430-0dff-38d4-a9a0-b1939596a82f",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 718,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/efbbc766-5bfb-420d-a67d-816493fc3a90",
      "preview_image_width": 580,
      "preview_image_height": 387,
      "published_at": "2018-08-03T17:54:00Z",
      "relay_url": "https://news.robinhood.com/2f79cb56-3286-3a71-a6fa-7ce3f61db9d3/",
      "source": "Yahoo Finance",
      "summary": "What happened\n\nShares of Turtle Beach (NASDAQ: HEAR) gained 33.8% in July, according to data from S&P Global Market Intelligence. The maker of gaming headsets and other digital audio solutions is, in fact, the best-performing tech stock on the market in 2018 with a 1,615% return so far. And it's all ......",
      "title": "Here's How Turtle Beach Stock Rose 33.8% Last Month",
      "updated_at": "2018-08-03T18:16:06.092143Z",
      "url": "https://finance.yahoo.com/news/apos-turtle-beach-stock-rose-174000800.html",
      "uuid": "2f79cb56-3286-3a71-a6fa-7ce3f61db9d3",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 116,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T17:15:00Z",
      "relay_url": "https://news.robinhood.com/c815b51e-2512-37f5-8ba0-215c0c87c578/",
      "source": "Seeking Alpha",
      "summary": "Starbucks (SBUX +1.4%) joins Microsoft (MSFT -0.3%) in teaming up with Intercontinental Exchange's new Bakkt venture, a startup exchange for cryptocurrency.",
      "title": "Bitcoin coming to Starbucks?",
      "updated_at": "2018-08-03T18:16:07.700579Z",
      "url": "https://seekingalpha.com/news/3378434-bitcoin-coming-starbucks",
      "uuid": "c815b51e-2512-37f5-8ba0-215c0c87c578",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 47,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T15:39:00Z",
      "relay_url": "https://news.robinhood.com/2a686cd3-985e-332d-aa0f-24b6faf0c982/",
      "source": "Seeking Alpha",
      "summary": "Intercontinental Exchange (ICE -0.4%) forms a new company, Bakkt, which plans to use Microsoft (MSFT -0.3%) cloud to create an open and regulated global ecosystem for digital assets.",
      "title": "Intercontinental Exchange forms new company for digital asset ecosystem",
      "updated_at": "2018-08-03T16:17:53.653447Z",
      "url": "https://seekingalpha.com/news/3378390-intercontinental-exchange-forms-new-company-digital-asset-ecosystem",
      "uuid": "2a686cd3-985e-332d-aa0f-24b6faf0c982",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 1525,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/8494a088-3c5c-4c8f-9fa0-53e18469ae99",
      "preview_image_width": 500,
      "preview_image_height": 237,
      "published_at": "2018-08-03T14:36:00Z",
      "relay_url": "https://news.robinhood.com/bc0ad30c-708a-33c2-a674-b4d0d34e2052/",
      "source": "Yahoo Finance",
      "summary": "U.S. stock futures are trading modestly higher this morning. Sentiment on Wall Street is being boosted by follow-through buying on Apple (NASDAQ:AAPL), which hit a $1 trillion market cap yesterday following earnings.\n\nHowever, there is some trepidation in the air ahead of today's July non-farm ......",
      "title": "Friday's Vital Data: Microsoft, Apple and Energy Transfer Partners",
      "updated_at": "2018-08-03T15:19:15.143404Z",
      "url": "https://finance.yahoo.com/news/friday-vital-data-microsoft-apple-133157304.html",
      "uuid": "bc0ad30c-708a-33c2-a674-b4d0d34e2052",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 34,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T14:34:00Z",
      "relay_url": "https://news.robinhood.com/6f17ed8c-1f6c-3dc9-91ba-09a1358e325c/",
      "source": "Seeking Alpha",
      "summary": "Data Source: Bloomberg\n\n'Growth' Still Has Some Gas Left in the Tank\n\nSource: istockphoto\n\nAs we write this July 2018 Market Commentary, the U.S. technology and communication sector, which had sharply reversed following poor 2Q earnings releases from FAANG bellwethers Netflix (NFLX) and Facebook ......",
      "title": "'Growth' Still Has Gas Left In The Tank - July 2018 Market Commentary",
      "updated_at": "2018-08-03T15:19:20.373301Z",
      "url": "https://seekingalpha.com/article/4194369-growth-still-gas-left-tank-july-2018-market-commentary",
      "uuid": "6f17ed8c-1f6c-3dc9-91ba-09a1358e325c",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 118,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T12:48:00Z",
      "relay_url": "https://news.robinhood.com/2e178d0c-e1ea-3f16-9831-b9f794ac7eb1/",
      "source": "Seeking Alpha",
      "summary": "Despite a healthy economy and strong corporate profits, equity markets remain anemic and lack breadth.\n\nAfter a volatile first quarter of 2018, in which the S&P 500 had a peak-to-trough decline of 11.8%, the equity markets stabilized and drifted higher during the second quarter. While the S&P 500 ......",
      "title": "Equities Are Vulnerable As The Tide Of Liquidity Reverses",
      "updated_at": "2018-08-03T13:19:10.420468Z",
      "url": "https://seekingalpha.com/article/4194336-equities-vulnerable-tide-liquidity-reverses",
      "uuid": "2e178d0c-e1ea-3f16-9831-b9f794ac7eb1",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 885,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/d2e996e9-d3b5-4fd8-a4bc-3f27cb2485c5",
      "preview_image_width": 900,
      "preview_image_height": 601,
      "published_at": "2018-08-03T12:21:00Z",
      "relay_url": "https://news.robinhood.com/1eb82b91-3c54-3878-adca-b38066b088a1/",
      "source": "Yahoo Finance",
      "summary": "For Immediate Release\n\nChicago, IL -August 3, 2018 - Zacks.com announces the list of stocks featured in the Analyst Blog. Every day the Zacks Equity Research analysts discuss the latest news and events impacting stocks and the financial markets. Stocks recently featured in the blog include: ......",
      "title": "The Zacks Analyst Blog Highlights: Microsoft, Micron, Amazon.com, Illumina and Activision",
      "updated_at": "2018-08-03T13:19:10.007642Z",
      "url": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-microsoft-113111892.html",
      "uuid": "1eb82b91-3c54-3878-adca-b38066b088a1",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 30,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T12:13:00Z",
      "relay_url": "https://news.robinhood.com/aa18e0c8-e2e4-3b2e-95d9-7997a9d69330/",
      "source": "Seeking Alpha",
      "summary": "By Trey Reik\n\nAll of a sudden, the leading question with respect to precious metals has become, \"Why isn't gold doing better?\" After trading in a bullish consolidation pattern for the past 18 months, gold appears to have lost its mojo and is flirting with technical breakdown. Given daily ......",
      "title": "Sprott Gold Report: Tariff Tension - Trey Reik (02/08/2018)",
      "updated_at": "2018-08-03T12:17:53.420572Z",
      "url": "https://seekingalpha.com/article/4194327-sprott-gold-report-tariff-tension-trey-reik-02-08-2018",
      "uuid": "aa18e0c8-e2e4-3b2e-95d9-7997a9d69330",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 72,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T10:08:00Z",
      "relay_url": "https://news.robinhood.com/4172bcbe-f105-324d-a2b9-c3c6b7012e85/",
      "source": "Seeking Alpha",
      "summary": "Dividend growth investing, independent research, long-term horizon\n\nIn September 2017, I received slightly over $100K as a result of the commuted value of my pension plan. I decided to invest 100% of this money into dividend growth stocks. Each month, I publish my dividend income report. I don't do ......",
      "title": "July Dividend Income Report",
      "updated_at": "2018-08-03T12:17:48.558268Z",
      "url": "https://seekingalpha.com/article/4194303-july-dividend-income-report",
      "uuid": "4172bcbe-f105-324d-a2b9-c3c6b7012e85",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 21,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-03T03:24:00Z",
      "relay_url": "https://news.robinhood.com/c2ed5cb5-3ef6-3067-87c4-14309ecf7980/",
      "source": "Seeking Alpha",
      "summary": "Data privacy spending, an effective business model, and a developing moat provide a bullish future for Okta to continue their run.",
      "title": "Okta: Building A Moat In A Crowded Industry",
      "updated_at": "2018-08-03T12:17:48.532512Z",
      "url": "https://seekingalpha.com/article/4194211-okta-building-moat-crowded-industry",
      "uuid": "c2ed5cb5-3ef6-3067-87c4-14309ecf7980",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 212,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-02T21:40:00Z",
      "relay_url": "https://news.robinhood.com/41486301-175c-3b90-bb90-5f4fe8cfc3aa/",
      "source": "Seeking Alpha",
      "summary": "Mid Term Elections will serve as a positive catalyst for the market after a period of weakness.\n\nThe market has cautiously edged back toward all-time highs. There continues to be a problem in broad leadership in the market in order to take new highs and hold them. Expectations of a near term ......",
      "title": "Trade Wars Extend Worries",
      "updated_at": "2018-08-02T22:17:49.310217Z",
      "url": "https://seekingalpha.com/article/4193605-trade-wars-extend-worries",
      "uuid": "41486301-175c-3b90-bb90-5f4fe8cfc3aa",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 605,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/03893fc4-49de-427e-b552-f9af9d6d29ea",
      "preview_image_width": 1280,
      "preview_image_height": 842,
      "published_at": "2018-08-02T18:39:00Z",
      "relay_url": "https://news.robinhood.com/2c113446-62d5-3370-940a-8ea1d9d24043/",
      "source": "Yahoo Finance",
      "summary": "Apple (AAPL, $201.50) became the first American company to become worth more than $1 trillion when it hit $207.05 per share in intraday trading on Thursday, Aug.",
      "title": "Apple (AAPL): $1 Trillion Is Just the Beginning",
      "updated_at": "2018-08-02T19:16:09.823395Z",
      "url": "https://finance.yahoo.com/news/apple-aapl-1-trillion-just-175549989.html",
      "uuid": "2c113446-62d5-3370-940a-8ea1d9d24043",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 821,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/3a9995e4-6da4-44e0-a222-a456ea1aa540",
      "preview_image_width": 620,
      "preview_image_height": 413,
      "published_at": "2018-08-02T18:03:00Z",
      "relay_url": "https://news.robinhood.com/7846ca5e-ea34-323b-9c9a-5e5695320cba/",
      "source": "Yahoo Finance",
      "summary": "Nearly everyone knows that Amazon AMZN stock has been one of the hottest on Wall Street for years. Yet some assume now is too late to get in on the fun, which simply isn't true. So let's take a look at why investors should buy Amazon stock right now following yet another quarter of stellar ......",
      "title": "Why Amazon (AMZN) Stock Is A Strong Buy Right Now",
      "updated_at": "2018-08-02T18:16:39.060851Z",
      "url": "https://finance.yahoo.com/news/why-amazon-amzn-stock-strong-172705320.html",
      "uuid": "7846ca5e-ea34-323b-9c9a-5e5695320cba",
      "currency_id": "None"
    },
    {
      "api_source": "marketwatch",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 127,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/92c555da-c7bd-43d9-9a99-5732e2030b4b",
      "preview_image_width": 1320,
      "preview_image_height": 742,
      "published_at": "2018-08-02T16:21:00Z",
      "relay_url": "https://news.robinhood.com/770f767f-0ba1-3ca5-baa6-754392edddff/",
      "source": "MarketWatch",
      "summary": "Apple would be first publicly traded U.S. company to cross the mark if it manages to close higher than $207.04\n\nApple Inc. shares briefly hit the price level needed to become the first U.S. company to reach a $1 trillion market capitalization Thursday.\n\nApple AAPL, +2.52% shares reached a price of ......",
      "title": "Apple crosses threshold needed for $1 trillion market cap",
      "updated_at": "2018-08-02T17:15:15.685424Z",
      "url": "https://www.marketwatch.com/story/apple-crosses-threshold-needed-for-1-trillion-market-cap-2018-08-02",
      "uuid": "770f767f-0ba1-3ca5-baa6-754392edddff",
      "currency_id": "None"
    },
    {
      "api_source": "cnn_money",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 458,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/0dec3510-6c66-4b68-8c6b-67237ca01942",
      "preview_image_width": 540,
      "preview_image_height": 304,
      "published_at": "2018-08-02T15:56:00Z",
      "relay_url": "https://news.robinhood.com/eb70b1db-c4b9-3b7e-b4ff-2c6ed177c79f/",
      "source": "CNN Money",
      "summary": "Apple just became the first American public company to cross $1 trillion in value.\n\nThe iPhone maker achieved that big number on Thursday when the stock passed $207.04 a share. Apple is now up more than 20% this year.\n\nShares surged after Apple reported earnings that topped forecasts and a healthy ......",
      "title": "Apple is now worth $1,000,000,000,000",
      "updated_at": "2018-08-02T16:15:15.318925Z",
      "url": "https://money.cnn.com/2018/08/02/investing/apple-one-trillion-market-value/index.html",
      "uuid": "eb70b1db-c4b9-3b7e-b4ff-2c6ed177c79f",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 445,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/2210236f-c6df-468c-af5a-bb21749acce7",
      "preview_image_width": 620,
      "preview_image_height": 413,
      "published_at": "2018-08-02T14:44:00Z",
      "relay_url": "https://news.robinhood.com/8b5462fd-a2f4-3ce5-ab39-1aeefa5daef0/",
      "source": "Yahoo Finance",
      "summary": "The United States seeks to more than double the tariffs on Chinese imports, building pressure on Beijing to enter negotiations. President Trump upped the ante in the trade war to defend national pride and people's interests.\n\nChina, in the meanwhile, is ready to retaliate the latest tariff threats, ......",
      "title": "Tariff Woes Haunt Wall Street: Take Refuge in These 5 Stocks",
      "updated_at": "2018-08-02T15:15:08.313975Z",
      "url": "https://finance.yahoo.com/news/tariff-woes-haunt-wall-street-135901881.html",
      "uuid": "8b5462fd-a2f4-3ce5-ab39-1aeefa5daef0",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 79,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-02T14:14:00Z",
      "relay_url": "https://news.robinhood.com/1b85dd3c-7f01-330a-a9b7-b31b22d28edb/",
      "source": "Seeking Alpha",
      "summary": "Each stock should be analyzed separately, not traded as a group.\n\nReferring to the group of fast growing tech companies as if they are one monolithic entity that moves together is problematic. The media, even the financial press, tends to group the companies together and talk about them as if they ......",
      "title": "Not All FANGs Are Equal",
      "updated_at": "2018-08-02T15:15:14.138834Z",
      "url": "https://seekingalpha.com/article/4193604-fangs-equal",
      "uuid": "1b85dd3c-7f01-330a-a9b7-b31b22d28edb",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 37,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-02T14:14:00Z",
      "relay_url": "https://news.robinhood.com/798edb44-7885-3606-b96f-ef92b177ee9a/",
      "source": "Seeking Alpha",
      "summary": "Around 46% of total time spent streaming video in the US is done via Netflix platform.\n\nThe story behind the interview...\n\nNetflix is a high growth stock that can be hard to value. Victor shows us how best to value the company and why the stock is still a bargain.\n\nFor those who prefer to read, my ......",
      "title": "The Right Way To Value Netflix (Victor Dergunov)",
      "updated_at": "2018-08-02T15:15:14.150538Z",
      "url": "https://seekingalpha.com/article/4193367-right-way-value-netflix-victor-dergunov",
      "uuid": "798edb44-7885-3606-b96f-ef92b177ee9a",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 78,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-02T14:08:00Z",
      "relay_url": "https://news.robinhood.com/f8307578-0367-3065-85f6-3ddcedf39652/",
      "source": "Seeking Alpha",
      "summary": "This week, we've got another cheap retailer that was recently confirmed as a buyout target.\n\nStruggling retailers can often represent appealing investment opportunities due to their dirt-cheap valuations. However, one big risk with this strategy is that the negative sentiment will continue to drive ......",
      "title": "Beat Private Equity To The Punch On This Value Opportunity",
      "updated_at": "2018-08-02T14:15:16.251384Z",
      "url": "https://seekingalpha.com/article/4193609-beat-private-equity-punch-value-opportunity",
      "uuid": "f8307578-0367-3065-85f6-3ddcedf39652",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 48,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/a27d8456-e4eb-4e6e-91ea-fca38a9776c2",
      "preview_image_width": 450,
      "preview_image_height": 299,
      "published_at": "2018-08-02T13:56:00Z",
      "relay_url": "https://news.robinhood.com/b802bbf7-47b0-3209-a48a-4a917a8c992a/",
      "source": "Yahoo Finance",
      "summary": "Investing.com - U.S. futures were down on Thursday, as trade fears resurfaced and investors waited for a flurry of earnings releases.\n\nThe S&P 500 futures fell 18 points or 0.64% to 2,792.75 as of 6:50 AM ET (10:50 GMT) while Dow futures were down 179 points or 0.71% to 25,110.0. Meanwhile tech ......",
      "title": "Stocks- U.S. Futures Slump on Renewed Trade War Concerns",
      "updated_at": "2018-08-02T14:15:13.292912Z",
      "url": "https://finance.yahoo.com/news/stocks-u-futures-slump-renewed-135200398.html",
      "uuid": "b802bbf7-47b0-3209-a48a-4a917a8c992a",
      "currency_id": "None"
    },
    {
      "api_source": "yahoo_finance",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 589,
      "preview_image_url": "https://robinhood-prism-storage.s3.amazonaws.com/feed-images/37aa509f-a79b-42d6-834d-a909458b4a4d",
      "preview_image_width": 635,
      "preview_image_height": 421,
      "published_at": "2018-08-02T13:05:00Z",
      "relay_url": "https://news.robinhood.com/b0a1ac52-a5e5-3e61-ba4f-7ddc0339111c/",
      "source": "Yahoo Finance",
      "summary": "For Immediate Release\n\nChicago, IL - August 2, 2018 - Zacks Market Edge is a podcast hosted weekly by cks Stock Strategist Tracey Ryniec. Every week, Tracey will be joined by guests to discuss the hottest investing topics in stocks, bonds and ETFs and how it impacts your life. To listen to the ......",
      "title": "Zacks Market Edge Highlights: Microsoft, Amazon, Facebook, Twitter and Square",
      "updated_at": "2018-08-02T13:16:12.376804Z",
      "url": "https://finance.yahoo.com/news/zacks-market-edge-highlights-microsoft-122512528.html",
      "uuid": "b0a1ac52-a5e5-3e61-ba4f-7ddc0339111c",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 53,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-02T12:42:00Z",
      "relay_url": "https://news.robinhood.com/b10fcd05-4e48-3393-b549-8f01a9d655f6/",
      "source": "Seeking Alpha",
      "summary": "\"If the stocks that have been leading the bull market start to break down, that is a major sign the market has topped.\" - W. O'Neil.\n\nMarket Wizards, a best-selling investment book written by Jack Schwager, is a must-read for investors looking to improve their performance. Each chapter of the book ......",
      "title": "Are The Market's Generals Leading Us To War",
      "updated_at": "2018-08-02T13:16:12.755894Z",
      "url": "https://seekingalpha.com/article/4193572-markets-generals-leading-us-war",
      "uuid": "b10fcd05-4e48-3393-b549-8f01a9d655f6",
      "currency_id": "None"
    },
    {
      "api_source": "seeking_alpha",
      "author": "",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "num_clicks": 31,
      "preview_image_url": "",
      "preview_image_width": null,
      "preview_image_height": null,
      "published_at": "2018-08-02T12:17:00Z",
      "relay_url": "https://news.robinhood.com/426582f1-0f97-36e6-92b9-30afa1746de0/",
      "source": "Seeking Alpha",
      "summary": "The Economy Has Turned - But Risk Appetite Has Not\n\nThere is an interesting phenomenon that has been unfolding in the corporate bond market. The bond market is full of information beyond the varying rates of US Treasuries. In the [Weekend Dashboard] report published to members of EPB Macro Research, ......",
      "title": "The Economy Has Turned - But Risk Appetite Has Not",
      "updated_at": "2018-08-02T13:16:12.773290Z",
      "url": "https://seekingalpha.com/article/4193563-economy-turned-risk-appetite",
      "uuid": "426582f1-0f97-36e6-92b9-30afa1746de0",
      "currency_id": "None"
    }
  ]
}
```

## Error Response

**Condition** : If you fail to search for anything like `https://midlanod.com/news/`.

**Code** : `400 Bad Request`

**Content example** :

```json
{
    "error": "You must provide either a symbol or a currency_id"
}
```

**Condition** : If you try pulling a page that doesn't exist like `https://midlanod.com/news/MSFT/?page=539`

**Code** : `404 Not Found`

**Content example** :

```json
{
    "detail": "Invalid page."
}
```