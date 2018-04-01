# Gather Paginated List of Accounts

Grab the full list of brokerage accounts.

**URL** : `/accounts/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

Full list:

```
curl -v https://api.robinhood.com/accounts/ \
   -H "Accept: application/json"
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather accounts data.

**Code** : `200 OK`

**Content example** :

```json
{
  "previous": null,
  "results": [
    {
      "deactivated": false,
      "updated_at": "2018-02-14T12:15:34.905723Z",
      "margin_balances": {
        "updated_at": "2018-03-30T03:05:33.000249Z",
        "gold_equity_requirement": "0.0000",
        "outstanding_interest": "0.0000",
        "cash_held_for_options_collateral": "0.0000",
        "overnight_ratio": "1.00",
        "day_trade_buying_power": "12554.4800",
        "cash_available_for_withdrawal": "2554.4900",
        "marked_pattern_day_trader_date": null,
        "unallocated_margin_cash": "2554.4900",
        "uncleared_deposits": "0.0000",
        "overnight_buying_power_held_for_orders": "0.0000",
        "day_trade_ratio": "0.25",
        "cash_held_for_orders": "0.0000",
        "unsettled_debit": "6.0000",
        "created_at": "2017-05-13T12:43:01.095792Z",
        "cash": "2554.4900",
        "start_of_day_overnight_buying_power": "2554.4900",
        "margin_limit": "0.0000",
        "overnight_buying_power": "2554.4900",
        "start_of_day_dtbp": "12554.4800",
        "unsettled_funds": "0.0000",
        "day_trade_buying_power_held_for_orders": "0.0000"
      },
      "portfolio": "https://api.robinhood.com/accounts/5QT72283/portfolio/",
      "cash_balances": null,
      "can_downgrade_to_cash": "https://api.robinhood.com/accounts/5QT72283/can_downgrade_to_cash/",
      "withdrawal_halted": false,
      "cash_available_for_withdrawal": "2554.4900",
      "type": "margin",
      "sma": "2554.4900",
      "sweep_enabled": true,
      "deposit_halted": false,
      "buying_power": "2554.4900",
      "user": "https://api.robinhood.com/user/",
      "max_ach_early_access_amount": "1000.00",
      "option_level": "option_level_3",
      "instant_eligibility": {
        "updated_at": null,
        "reason": "",
        "reinstatement_date": null,
        "reversal": null, 
        "state": "ok"
      },
      "cash_held_for_orders": "0.0000",
      "only_position_closing_trades": false,
      "url": "https://api.robinhood.com/accounts/5QT72283/",
      "positions": "https://api.robinhood.com/accounts/5QT72283/positions/",
      "created_at": "2015-01-24T13:20:10.098168Z",
      "cash": "254.4900",
      "sma_held_for_orders": "0.0000",
      "unsettled_debit": "6.0000",
      "account_number": "5QT72283",
      "uncleared_deposits": "0.0000",
      "unsettled_funds": "0.0000"
    }
  ],
  "next": null
}
```

## Error Response

**Condition** : If this endpoint is called without having logged it, it will fail.

**Code** : `401 Unauthorized`

**Content example** : 

```json
{
  "detail": "Authentication credentials were not provided."
}
```

