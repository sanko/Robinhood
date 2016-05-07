- [User Information Methods](#user-information-methods)
	- [Gather Basic User Info](#gather-basic-user-info)
	- [Gather the Account ID](#gather-the-account-id)
	- [Gather Basic Information About the Account Holder](#gather-basic-information-about-the-account-holder)
	- [Account Holder's Affiliation Information](#account-holders-affiliation-information)
	- [Gather Employment Data About the Account Holder](#gather-employment-data-about-account-holder)
	- [Gather Investment Profile Data About the Account Holder](#gather-investment-profile-data-about-the-account-holder)
	- [Gather Verifiable User Information](#gather-verifiable-user-information)
	- [Get the Customer Identification Program Questions](#get-the-customer-identification-program-questions)
	- [Answer Customer Identification Program Questions](#answer-customer-identification-program-questions)
	- [Update User Information](#update-user-information)
		- [TODO](#)
	- [Notification Settings](#notification-settings)
		- [TODO](#)
	- [Account Methods](#account-methods)
	- [Gather List of Accounts](#gather-list-of-accounts)
		- [TODO](#)
	- [Update Day Trade Setting](#update-day-trade-setting)
		- [TODO](#)
	- [Sign-up Referrals](#sign-up-referrals)
		- [TODO](#)
	- [News & Information](#news--information)
		- [TODO](#)
	- [Cards](#cards)
		- [TODO](#)
	- [Market Information](#market-information)
		- [TODO](#)
	- [Dividends](#dividends)
		- [TODO](#)
	- [Portfolio and Positions](#portfolio-and-positions)
		- [TODO](#)
	- [Bank Accounts & ACH Transfers](#bank-accounts--ach-transfers)
		- [TODO](#)
	- [Document Access](#document-acess)
		- [TODO](#)
	- [Instruments](#instruments)
		- [TODO](#)
	- [Application Information](#application-information)
		- [TODO](#)


### Notification Settings

Push notifications are amazing. You gotta figure this out yourself.

#### TODO

- Get Notification Settings		`GET /settings/notifications/`
- Put Notification Settings		`PUT /settings/notifications/`
- Add Device					`POST /notifications/devices/`
- Delete device					`DELETE /notifications/devices/{deviceId}/`
- Get Devices					`GET /notificatins/devices/`


#### TODO
	- Create Sweep Account			PUT  /user/additional_info/ 		{sweep_consent}
	- Account Application			PUT  /applications/individual/		???
	- Upgrade To Margin				POST /margin/upgrades/						???
	- Get Instant Eligibility		GET /midlands/permissions/instant/
	- Get Recent Day Trades			GET /accounts/$id/recent_day_trades/?cursor=$cursor
	- Get Day Trade Check			GET /accounts/$id/day_trade_checks/?instrument=$id
	- Get Margin Settings			GET /settings/margin/$accountNumber/
	- Get Margin Upgrades			GET /margin/upgrades/
	- Get Account					GET /accounts/$id/

### Update Day Trade Setting

#### TODO

    PATCH	/settings/margin/{acctNumber}/


    {$margin_settings}

### Sign-up Referrals

#### TODO
	- Get Referral Campaign Info	GET /midlands/referral/instand/information/
	- Get Referral Code				GET /midlands/referral/code/
	- Get Referrals					GET /midlands/referral/instand/referrals/?curosr=$cursor
	- Establish Referral			POST /midlands/referral/instant/	???

### News & Information
#### TODO
	- Get Robinhood Disclosure		GET /disclosures/home_screen_disclosures.json
	- Get Popular Stocks			GET /popular_stocks/data.json
	- Get Top Movers on the S&P500	GET /midlands/movers/sp500/?direction=['up' or 'down']
	- Get News						GET /midlands/news/$instrumentSymbol/

### Cards
#### TODO
	- Gather list of cards			GET  /midlands/notifications/stack/
	- Dismiss Card					POST /midlands/notifications/stack/$cardId/dismiss/

### Market Information
#### TODO
	- Get Market					GET /markets/$mic/
	- Get Market Hours				GET /markets/$mic/hours/$date/
	- Get Markets					GET /markets/

### Dividends
#### TODO
	- Get Dividend					GET /dividends/$dividendId/
	- Get Dividends					GET /dividends/						{cursor}

### Portfolio and Positions
#### TODO
	- List Portfolios               GET /portfolios/
	- Get Portfolio					GET /portfolios/$accountNumber/
	- Get Portfolio Historicals		GET /portfolios/historicals/$accountNumber?span=...&interval=...
	- Get Position					GET /positions/$accountNumber/$instrumentId/
	- Get Positions					GET /accounts/{account_id}/positions/?nonzero=true&cursor=[$cursor]
	- Reorder Positions				GET /positions/?ordering=$ordering

### Document Access
#### TODO
	- Get Document Info by ID		GET /documents/$id/
	- Get Document Download URL		GET /documents/$id/download/
	- Get Documents					GET /documents/
	- Mark Doc Request Uploaded		PATCH /upload/document_request/$rhid/?state=$state

### Instruments
#### TODO
	- Query Instruments				GET /instruments/?query=$query
	- Get Fundamental Info			GET /fundamentals/$symbol/

### Application Information
#### TODO
	- Get Config Vitals				GET /midlands/conficurations/vitals/android/
