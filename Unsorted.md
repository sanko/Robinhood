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

### Account Methods

Most account API calls require an `account_id` so the service knows which of your accounts to act on.

### Gather List of Accounts

I don't know if Robinhood will allow multiple accounts per user in the future, but this endpoint returns a paginated list of accounts so... maybe. I'd love to have access to both a cash and Instant (margin) account.

**Method**

| URI                         | HTTP Method | Authentication |
|-----------------------------|-------------|----------------|
| api.robinhood.com/accounts/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/accounts/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

A [paginated](#pagination) list of accounts is returned. Accounts contain the following keys...

| Key                           | Type     | Description |
|-------------------------------|----------|-------------|
| deactivated      				| Boolean  | Not sure what Robinhood would deactivate an account for but apparently they have the option |
| updated_at       				| ISO 8601 | Last time the account was modified. I presume this includes cash amount changes as well. |
| margin_balances  				| Hash     | See below |
| portfolio        				| URL      | This URL is the endpoint for this account's portfolio. Wow, I know. |
| cash_balances    				| Hash     | See below |
| withdrawl_halted 			    | Boolean  | Has the most recent attempt to withdrawl cash been stopped |
| cash_available_for_withdrawal | Float    | Amount of money on hand you may withdrawal to your back via ACH |
| type             				| String   | If normal Robinhood accounts would be `cash` but Instant accounts would obviously be `margin` |
| sma 							| Unknown  | `null` for me so I have no idea how it'l be presented. Should be a Boolean? |
| sweep_enabled					| Boolean  | |
| deposit_halted				| Boolean  | |
| buying_power 					| Float    | Amount of cash on hand for purchasing securities (T+3 settled funds not being held for orders) |
| user 							| URL      | Link back to the basic [user data endpoint](#gather-basic-user-info) |
| max_ach_early_access_amount	| Float    | Amount of cash you may use before the actual transfer completes (Instant account perhaps?) |
| cash_held_for_orders 			| Float    | This is the total amount of money marked for use in outstanding buy orders. |
| only_position_closing_trades  | Boolean  | Google 'investopedia close position' |
| url 							| URL 	   | Endpoint where more information about this account may be grabbed |
| positions						| URL 	   | Endpoint where you may grab the past/current positions held by this account |
| created_at					| ISO 8601 | When was the account created |
| cash 							| Float    | Amount of cash including unsettled funds |
| sma_held_for_orders 			| Unknown  | Google 'investopedia "special memorandum account"' |
| account_number                | String   | The actual alphanumeric string Robinhood uses to identify this account |
| uncleared_deposits            | Float    | Amount of money in transet from an inconplete ACH deposit |
| unsettled_funds               | Float    | Amount of money being held in statis thanks to the SEC's T+3 anti-fun rule |

**`cash_balances`**

This is a hash with the following keys... A lot of these are copies of data found in the account object itself though... just, FYI...

| Key             | Type     | Description |
|-----------------|----------|-------------|
| cash_held_for_orders | Float  | This is the total amount of money marked for use in outstanding buy orders. |
| created_at      | ISO 8601 | When was the cash account created |
| cash | Float     | Amount of cash including unsettled funds |
| buying_power | Float | Amount of cash on hand for purchasing securities (T+3 settled funds not being held for orders) |
| updated_at       | ISO 8601      | When any of the values of `cash_balances` was last changed |
| cash_available_for_withdrawl   | Float   | Amount of cash on hand you may transfer to your connected ACH account |
| uncleared_deposits | Float | Value of all initiated ACH transfers which have not completed |
| unsettled_funds | Float | Amount of money being held in statis thanks to SEC's T+3 anti-fun rule |

**`margin_balances`**

_I assume this is a hash much like `cash_balances` but I do not have an Instant account yet so it's simply `null`_

**Response sample**

```
{
	"next": null,
    "previous": null,
	"results": [{
    	"deactivated": false,
    	"updated_at": "2015-09-25T18:43:10.879108Z",
    	"margin_balances": null,
    	"portfolio": "https://api.robinhood.com/accounts/8UD09348/portfolio/",
    	"cash_balances": {
    	    "cash_held_for_orders": "0.0000",
    	    "created_at": "2016-03-12T01:98:27.672943Z",
    	    "cash": "214.8900",
    	    "buying_power": "114.8900",
    	    "updated_at": "2016-03-18T09:03:59.0954927Z",
    	    "cash_available_for_withdrawal": "114.8900",
    	    "uncleared_deposits": "0.0000",
	        "unsettled_funds": "100.0000"
    	},
    	"withdrawal_halted": false,
    	"cash_available_for_withdrawal": "114.8900",
    	"type": "cash",
    	"sma": null,
    	"sweep_enabled": false,
    	"deposit_halted": false,
    	"buying_power": "114.8900",
    	"user": "https://api.robinhood.com/user/",
    	"max_ach_early_access_amount": "0.00",
    	"cash_held_for_orders": "0.0000",
    	"only_position_closing_trades": false,
    	"url": "https://api.robinhood.com/accounts/8UD09348/",
    	"positions": "https://api.robinhood.com/accounts/8UD09348/positions/",
    	"created_at": "2016-03-12T01:98:27.672943Z",
    	"cash": "114.8900",
    	"sma_held_for_orders": null,
    	"account_number": "8UD09348",
    	"uncleared_deposits": "0.0000",
    	"unsettled_funds": "100.0000"
	}]
}
```

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

### Bank Accounts & ACH Transfers

#### TODO

	- Get ACH Relationship			GET /ach/relationships/$achRelationshipId/
	- Get ACH Relationships			GET /ach/relationships/				{cursor => optional}
	- Get ACH Transfer				GET /ach/transfers/$id/
	- Get ACH Transfers				GET /ach/transfers/					{cursor => optional}
	- Get Auto Deposit				GET /ach/deposit_schedules/$automaticDepositId/
	- Get Auto Deposits				GET /ach/deposit_schedules/
	- Verify Microdeposits			POST /ach/relationships/$id/micro_deposits/veryify/	{first_amount_cents, second_amount_cents}
	- Get Queued ACH Deposit		GET /ach/iav/queued_deposit/
	- Post ACH Transfer				POST /ach/transfers/  											{???}
	- IAV AuthMfaAnswer				POST /ach/iav/auth/mfa/					{bank_institution, access_token, mfa}
	- IAV Auth Request				POST /ach/iav/auth/						{bank_institution, username, password, pin}
	- Post Queued ACH Deposit		POST /ach/iav/queued_deposit/
	- Delete Auto Deposit			DELETE /ach/deposit_schedules/$autoDepositId/
	- Cancel ACH Transfer			POST /ach/transfers/$id/cancel/
	- Add ACH Bank account			POST /ach/relationships/			{account ($account_id)
																		 bank_routing_number
																		 bank_account_number
																		 bank_account_type ('checking' or 'savings')
																		 bank_account_holder_name
																		 bank_account_nickname
																		}
	- Add ACH with Instant Acct Verification	POST /ach/iav/create/				{access_token
																		 iav_account_id
																		 account ($account_id)
																		 bank_account_type ('checking' or 'savings')
																		 bank_account_holder_name
																		}
	- Delete Bank Account			POST /ach/relationships/$bankId/unlink/


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
