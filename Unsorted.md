# News & Information

- Get Robinhood Disclosure		GET /disclosures/home_screen_disclosures.json
- Get Popular Stocks			GET /popular_stocks/data.json
- Get Top Movers on the S&P500	GET /midlands/movers/sp500/?direction=['up' or 'down']
- Get News						GET /midlands/news/$instrumentSymbol/

# Cards

These are the little news snippets you find under your chart on the main screen

- Gather list of cards			GET  /midlands/notifications/stack/
- Dismiss Card					POST /midlands/notifications/stack/$cardId/dismiss/

# Dividends

- Get Dividend					GET /dividends/$dividendId/
- Get Dividends					GET /dividends/						{cursor}

# Portfolio and Positions

- List Portfolios               GET /portfolios/
- Get Portfolio					GET /portfolios/$accountNumber/
- Get Portfolio Historicals		GET /portfolios/historicals/$accountNumber?span=...&interval=...
- Get Position					GET /positions/$accountNumber/$instrumentId/
- Get Positions					GET /accounts/{account_id}/positions/?nonzero=true&cursor=[$cursor]
- Reorder Positions				GET /positions/?ordering=$ordering

# Document Access

Tax info and other docs are provided thought these endpoints

- Get Document Info by ID		GET /documents/$id/
- Get Document Download URL		GET /documents/$id/download/
- Get Documents					GET /documents/
- Mark Doc Request Uploaded		PATCH /upload/document_request/$rhid/?state=$state

# Instruments

Basic Symbol search

- Query Instruments				GET /instruments/?query=$query
- Get Fundamental Info			GET /fundamentals/$symbol/

# Application Information

- Get Config Vitals				GET /midlands/configurations/vitals/android/
