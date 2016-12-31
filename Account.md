# User Information Methods

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

Now that you're [logged in](Authentication.md#logging-in), you'll probably want to get to know yourself a little bit. Here we go...

Most account API calls require an `account_id` so the service knows which of your accounts to act on. You'll need to [gather the list of accounts](#gather-list-of-accounts) to get their `account_id`.

# Gather List of Accounts

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

A [paginated](README.md#pagination) list of accounts is returned. Accounts contain the following keys...

| Key                           | Type     | Description |
|-------------------------------|----------|-------------|
| deactivated      				| Boolean  | Whether the account has been deactivated |
| updated_at       				| ISO 8601 | Last time the account was modified |
| margin_balances  				| Hash     | See below |
| portfolio        				| URL      | Endpoint for this portfolio |
| cash_balances    				| Hash     | See below |
| withdrawl_halted 			    | Boolean  | Has the most recent attempt to withdraw cash been stopped? |
| cash_available_for_withdrawal | Float    | Amount of money on hand you may withdrawal to your back via ACH |
| type             				| String   | `cash` for Normal accounts, `margin` for Instant accounts |
| sma 							| Float    | Special memorandum account funds available. `null` for cash accounts |
| sweep_enabled					| Boolean  | |
| deposit_halted				| Boolean  | |
| buying_power 					| Float    | Amount of cash available to purchase securities (up to your margin limit). On a cash account, it is equal to the amount of settled funds. |
| user 							| URL      | Link back to the basic [user data endpoint](#gather-basic-user-info) |
| max_ach_early_access_amount	| Float    | Amount of cash you may use before the actual transfer completes. Instant accounts have early access to a certain amount of funds, although this also applies to the first $1,000 worth of deposits into the account as well. |
| cash_held_for_orders 			| Float    | Amount of cash in outstanding buy orders. |
| only_position_closing_trades  | Boolean  |  Google 'investopedia close position' |
| url 							| URL 	   | Endpoint where more information about this account may be grabbed |
| positions						| URL 	   | Endpoint where you may grab the past/current positions held by this account |
| created_at					| ISO 8601 | Date this account was created |
| cash 							| Float    | Amount of cash including unsettled funds |
| sma_held_for_orders 			| Float    | Special memorandum account funds held for orders. `null` for cash accounts |
| account_number                | String   | The alphanumeric string Robinhood uses to identify this account |
| uncleared_deposits            | Float    | Amount of money in transet from an inconplete ACH deposit |
| unsettled_funds               | Float    | Amount of money in unsettled funds |

**`cash_balances`**

If the account type is not cash this value is `null`.

| Key                                    | Type     | Description |
|----------------------------------------|----------|-------------|
| cash_held_for_orders                   | Float    | This is the total amount of money marked for use in outstanding buy orders. |
| created_at                             | ISO 8601 | When was the cash account created |
| cash                                   | Float    | Amount of cash including unsettled funds |
| buying_power                           | Float    | Amount of cash on hand for purchasing securities (T+3 settled funds not being held for orders) |
| updated_at                             | ISO 8601 | When any of the values of `cash_balances` was last changed |
| cash_available_for_withdrawl           | Float    | Amount of cash on hand you may transfer to your connected ACH account |
| uncleared_deposits                     | Float    | Value of all initiated ACH transfers which have not completed |
| unsettled_funds                        | Float    | Amount of money being held in statis thanks to SEC's T+3 anti-fun rule |

**`margin_balances`**

If the account type is not margin this value is `null`.

| Key                                    | Type     | Description |
|----------------------------------------|----------|-------------|
| day_trade_buying_power                 | Float    | This is the total amount of money marked for use in outstanding and new buy orders. This value is readjusted before the start of each trading day. |
| created_at                             | ISO 8601 | When was the margin account created |
| overnight_buying_power_held_for_orders | Float    | How much overnight buying power is held for orders |
| cash_held_for_orders                   | Float    | How much cash is held for orders |
| day_trade_buying_power_held_for_orders | Float    | How much day trade buyign power is held for orders |
| marked_pattern_day_trader_date         | ISO 8601 | Date which the account was flagged as a pattern day trader (PDT), `null` otherwise |
| cash                                   | Float    | Amount of cash including unsettled funds |
| unallocated_margin_cash                | Float    | Amount of unallocated margin cash on hand for purchasing securities |
| updated_at                             | ISO 8601 | Date the values were last updated. This is generally updated when an order is placed, and/or deposits/withdrawals made. |
| cash_available_for_withdrawal          | Float    | Amount of cash available for withdrawal |
| margin_limit                           | Float    | Maximum amount of money you can borrow. Robinhood Instant has 0 |
| overnight_buying_power                 | Float    | How much buying power is available for the next day |
| uncleared_deposits                     | Float    | Amount of money in uncleared deposits |
| unsettled_funds                        | Float    | Amount of money in unsettled funds from trades |
| day_trade_ratio                        | Float    | |
| overnight_ratio                        | Float    | |


**Response sample**

For Normal accounts:
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

For Instant accounts:
```
{
	"previous": null,
	"results": [{
		"deactivated": false,
		"updated_at": "2016-04-13T17:04:30.664674Z",
		"margin_balances": {
			"day_trade_buying_power": "1644.8050",
			"created_at": "2016-04-13T17:04:30.653404Z",
			"overnight_buying_power_held_for_orders": "0.0000",
			"cash_held_for_orders": "0.0000",
			"day_trade_buying_power_held_for_orders": "0.0000",
			"marked_pattern_day_trader_date": null,
			"cash": "421.4100",
			"unallocated_margin_cash": "612.3900",
			"updated_at": "2016-06-30T17:25:44.637401Z",
			"cash_available_for_withdrawal": "421.4100",
			"margin_limit": "0.0000",
			"overnight_buying_power": "612.3900",
			"uncleared_deposits": "0.0000",
			"unsettled_funds": "190.9800",
			"day_trade_ratio": "0.25",
			"overnight_ratio": "1.00"
		},
		"portfolio": "https:\/\/api.robinhood.com\/accounts\/8UD09348\/portfolio\/",
		"cash_balances": null,
		"withdrawal_halted": false,
		"cash_available_for_withdrawal": "421.4100",
		"type": "margin",
		"sma": "1629.2600",
		"sweep_enabled": true,
		"deposit_halted": false,
		"buying_power": "1629.2600",
		"user": "https:\/\/api.robinhood.com\/user\/",
		"max_ach_early_access_amount": "1000.00",
		"cash_held_for_orders": "0.0000",
		"only_position_closing_trades": false,
		"url": "https:\/\/api.robinhood.com\/accounts\/8UD09348\/",
		"positions": "https:\/\/api.robinhood.com\/accounts\/8UD09348\/positions\/",
    	"created_at": "2016-03-12T01:98:27.672943Z",
		"cash": "421.4100",
		"sma_held_for_orders": "0.0000",
		"account_number": "8UD09348",
		"uncleared_deposits": "0.0000",
		"unsettled_funds": "190.9800"
	}
```

# Gather Basic User Info

This returns very basic information (basically just a name and email address) and URLs for more.

**Method**

| URI                     | HTTP Method | Authentication |
|-------------------------|-------------|----------------|
| api.robinhood.com/user/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

| Key    | Type   | Description |
|--------|--------|-------------|
| username   | String | The username of the currently logged in account |
| first_name | String | First name of the registered user               |
| last_name  | String | Last name of the registered user                |
| id_info    | URL    | Link to use for more information                |
| url        | URL    | This exact URL in case you forget what you just did |
| basic_info | URL    | Link where more basic information may be gathered   |
| email      | String | Email address of the currently logged in account    |
| investment_profile | URL | Link where investment related info may be gathered |
| id         | String | The unique ID Robinhood uses to identify this account   |
| international_info | URL | International... stuff? |
| employment | URL | Employment information you provided may be found here |
| additional_info | URL | Need more information? Grab it here! |

**Response sample**
```
{
    "username": "superman",
    "first_name": "Clark",
    "last_name": "Kent",
    "id_info": "https://api.robinhood.com/user/id/",
    "url": "https://api.robinhood.com/user/",
    "basic_info": "https://api.robinhood.com/user/basic_info/",
    "email": "s@itmeanshope.com",
    "investment_profile": "https://api.robinhood.com/user/investment_profile/",
    "id": "11deface-face-face-face-defacedeface11",
    "international_info": "https://api.robinhood.com/user/international_info/",
    "employment": "https://api.robinhood.com/user/employment/",
    "additional_info": "https://api.robinhood.com/user/additional_info/"
}
```

# Gather the Account ID

Robinhood uses a unique ID for each account. You could use the basic [/user/](#gather-basic-user-info) to get this ID and more by the way.

**Method**

| URI                        | HTTP Method | Authentication |
|----------------------------|-------------|----------------|
| api.robinhood.com/user/id/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/id/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

| Key    | Type   | Description |
|--------|--------|-------------|
| username   | String | The username of the currently logged in account |
| url        | URL    | This exact URL in case you forget what you just did |
| id         | String | The unique ID Robinhood uses to identify this account   |

**Response sample**
```
{
    "username": "superman",
    "url": "https://api.robinhood.com/user/id/",
    "id": "11deface-face-face-face-defacedeface11"
}
```

### Gather Basic Information About the Account Holder

If you need more than the basic information [/user/](#gather-basic-user-info) provides, you might want to start here.

**Method**

| URI                                | HTTP Method | Authentication |
|------------------------------------|-------------|----------------|
| api.robinhood.com/user/basic_info/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/basic_info/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

| Key                  | Type     | Description |
|----------------------|----------|-------------|
| address              | String   | Street address |
| citizenship          | String   | Two character country code |
| city                 | String   | The unique ID Robinhood uses to identify this account |
| country_of_residence | String   | To character country code |
| date_of_birth        | String   | Date of your birth |
| marital_status       | String   | Are you `married` or `single`. Only Facebook cares if it's `complicated` |
| number_dependents    | Integer  | How many kids do you have? |
| phone_number         | Integer  | Digits |
| state                | String   | Two character state abbreviation |
| tax_id_ssn           | Integer  | Last four digits of your Social Security Number |
| updated_at           | ISO 8601 | When was any of this information last modified |
| zipcode              | Integer  | Postal zip code of your current location |

**Response sample**
```
{
    "phone_number": "2125550030",
    "city": "New York",
    "number_dependents": 2,
    "citizenship": "US",
    "updated_at": "2016-03-13T12:18:02.820164Z",
    "marital_status": "married",
    "zipcode": "10001",
    "country_of_residence": "US",
    "state": "NY",
    "date_of_birth": "1978-12-18",
    "user": "https://api.robinhood.com/user/",
    "address": "320 10th Av",
    "tax_id_ssn": "0001"
}
```

# Account Holder's Affiliation Information

If you need more than the basic information [/user/](#gather-basic-user-info) provides, you might want to start here. This method returns SEC Rule 405 related information.

**Method**

| URI                                     | HTTP Method | Authentication |
|-----------------------------------------|-------------|----------------|
| api.robinhood.com/user/additional_info/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/additional_info/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

| Key                			  		| Type     | Description |
|---------------------------------------|----------|-------------|
| control_person       					| Boolean  | Are you a controlling member of any traded securities? |
| control_person_security_symbol 		| String   | If so, the symbol will be here |
| object_to_disclosure 			 		| Boolean  | |
| security_affiliated_address 			| String   | |
| security_affiliated_employee 			| Boolean  | |
| security_affiliated_firm_name 		| String   | |
| security_affiliated_firm_relationship | String   | |
| security_affiliated_person_name		| String   | |
| sweep_consent 						| Boolean  | |
| updated_at           					| ISO 8601 | When was any of this information last modified |
| user 									| URL 	   | Link back to the `/user/` endpoint |

**Response sample**

```
{
    "security_affiliated_firm_relationship": "NA",
    "security_affiliated_employee": false,
    "security_affiliated_address": "",
    "object_to_disclosure": false,
    "updated_at": "2016-01-09T04:13:09.164027Z",
    "control_person": false,
    "sweep_consent": false,
    "user": "https://api.robinhood.com/user/",
    "control_person_security_symbol": "",
    "security_affiliated_firm_name": "NA",
    "security_affiliated_person_name": "NA"
}
```
# Gather Employment Data About the Account Holder

This returns the work status and related information.

**Method**

| URI                                | HTTP Method | Authentication |
|------------------------------------|-------------|----------------|
| api.robinhood.com/user/employment/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/employment/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

| Key          		| Type     | Description |
|-------------------|----------|-------------|
| employer_address  | String   | Postal address of your place of work |
| employer_city 	| String   | City where your employer is located |
| employer_name 	| String   | |
| employer_state 	| String   | |
| employer_zipcode 	| Integer  | |
| employment_status | String   | |
| occupation 		| String   | |
| updated_at    	| ISO 8601 | When was any of this information last modified |
| user 				| URL 	   | Link back to the `/user/` endpoint |
| years_employed	| Integer  | How long have you had your current job? |

**Response sample**

```
{
    "employer_zipcode": 12401"",
    "employment_status": "employed",
    "employer_address": "3559 High Street",
    "updated_at": "2015-12-05T12:19:35.028461Z",
    "employer_name": "Bob's Job Palace",
    "user": "https://api.robinhood.com/user/",
    "years_employed": 3,
    "employer_state": "NY",
    "employer_city": "Kingston",
    "occupation": "Getaway Driver"
}
```

# Gather Investment Profile Data About the Account Holder

This returns answers to the basic investing experience survery presented during registration.

**Method**

| URI                                        | HTTP Method | Authentication |
|--------------------------------------------|-------------|----------------|
| api.robinhood.com/user/investment_profile/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/investment_profile/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

| Key          	    	| Type     | Description |
|-----------------------|----------|-------------|
| annual_income         | String   | `0_24999`, `25000_39999`, `40000_49999`, `50000_74999`, `75000_99999`, `100000_199999`, `200000_299999`, `300000_499999`, `500000_1199999`, or `1200000_inf` |
| investment_experience | String   | `extensive_investment_exp`, `good_investment_exp`, `limited_investment_exp`, or `no_investment_exp` |
| investment_objective 	| String   | `cap_preserve_invest_obj`, `income_invest_obj`, `growth_invest_obj`, `speculation_invest_obj`, `other_invest_obj` |
| liquid_net_worth      | String   | `0_24999`, `25000_39999`, `40000_49999`, `50000_99999`, `100000_199999`, `200000_249999`, `250000_499999`, `500000_999999`, or `1000000_inf` |
| liquidity_needs 	    | String   | `not_important_liq_need`, `somewhat_important_liq_need`, or `very_important_liq_need` |
| risk_tolerance 	    | String   | `low_risk_tolerance`, `med_risk_tolerance`, or `high_risk_tolerance` |
| source_of_funds       | String   | `savings_personal_income`, `pension_retirement`, `insurance_payout`, `inheritance`, `gift`, `sale_business_or_property`, or `other` |
| suitability_verified 	| Boolean  | |
| tax_bracket			| String   | `0_pct`, `20_pct`, `25_pct`, `28_pct`, `33_pct`, `35_pct`, or `39_6_pct` |
| time_horizon			| String   | `short_time_horizon`, `med_time_horizon`, or `long_time_horizon` |
| total_net_worth		| String   | `0_24999`, `25000_49999`, `50000_64999`, `65000_99999`, `100000_149999`, `150000_199999`, `250000_499999`, `500000_999999`, or `1000000_inf` |
| updated_at    		| ISO 8601 | When was any of this information last modified |
| user 					| URL 	   | Link back to the `/user/` endpoint |

**Response sample**

```
{
    "annual_income": "40000_49999",
    "investment_experience": "good_investment_exp",
    "updated_at": "2016-01-06T14:35:47.015871Z",
    "risk_tolerance": "high_risk_tolerance",
    "total_net_worth": "100000_149999",
    "liquidity_needs": "very_important_liq_need",
    "investment_objective": "other_invest_obj",
    "source_of_funds": "savings_personal_income",
    "user": "https://api.robinhood.com/user/",
    "suitability_verified": true,
    "tax_bracket": "",
    "time_horizon": "long_time_horizon",
    "liquid_net_worth": "100000_199999"
}
```

# Gather Verifiable User Information

Use this endpoint to get personal information that may be used to verify a person's identity.

**Method**

| URI                                        | HTTP Method | Authentication |
|--------------------------------------------|-------------|----------------|
| api.robinhood.com/user/identity_mismatch/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/identity_mismatch/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

This returns a [paginated list](README.md#pagination) of data with the following results:

| Key   | Type   | Description |
|-------|--------|-------------|
| field | String | The key (name) of the valid information |
| url   | URL    | URL you may use to gather the valid information |

**Response sample**

```
{
    "field": "tax_id_ssn",
    "url": "https://api.robinhood.com/user/basic_info/"
}
```

# Get the Customer Identification Program Questions

Banks stuff...

**Method**

| URI                                   | HTTP Method | Authentication |
|---------------------------------------|-------------|----------------|
| api.robinhood.com/user/cip_questions/ | GET         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/cip_questions/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

**Response**

_Unsure. I get..._

```
{ detail => "Not found." }
```

**Response sample**

_Untested_

# Answer Customer Identification Program Questions

Banks stuff...

**Method**

| URI                                   | HTTP Method | Authentication |
|---------------------------------------|-------------|----------------|
| api.robinhood.com/user/cip_questions/ | PUT         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

_Untested_

**Response**

_Untested_

**Response sample**

_Untested_

### Update User Information

Banks stuff...

**Method**

| URI                     | HTTP Method | Authentication |
|-------------------------|-------------|----------------|
| api.robinhood.com/user/ | PUT         | *Yes*          |

**Fields**

AFAIK, there are none.

**Request sample**

```
curl -v https://api.robinhood.com/user/ \
   -X PUT
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
   -d username={username}  -d password={password}
   -d email={email}
   -d first_name={first_name} -d last_name={last_name}
```

**Fields**

| Parameter  | Type   | Description                                     | Default | Required |
|-------------|--------|------------------------------------------------|---------|----------|
| username    | String | The username associated with the email address | N/A     | *Yes*    |
| password    | String | New password                                   | N/A     | *Yes*    |
| email       | String | You know what this is...                       | N/A     | *Yes*    |
| first_name  | String | Obvious                                        | N/A     | *Yes*    |
| last_name   | String | Obvious                                        | N/A     | *Yes*    |

**Response**

_Untested_

**Response sample**

_Untested_

# TODO

- Update Basic Info				`PATCH /user/basic_info/`
- Update User					`PATCH /user/`
- Submit Additional User Info	`PUT /user/additional_info/`
- Submit Basic User Info		`PUT /user/basic_info/`
- Submit User Employment Info	`PUT /user/employment/`
- Submit Investment Profile		`PUT /user/investment_profile/`
- Get Application By Type		`GET /applications/$type/`
- Get Applications				`GET /applications/`
- Account Application			PUT  /applications/individual/		???
- Upgrade To Margin				POST /margin/upgrades/						???
- Get Instant Eligibility		GET /midlands/permissions/instant/
- Get Recent Day Trades			GET /accounts/$id/recent_day_trades/?cursor=$cursor
- Get Day Trade Check			GET /accounts/$id/day_trade_checks/?instrument=$id
- Get Margin Settings			GET /settings/margin/$accountNumber/
- Update Day Trade Setting      PATCH /settings/margin/{acctNumber}/            {$margin_settings}
- Get Margin Upgrades			GET /margin/upgrades/
- Get Account					GET /accounts/$id/
