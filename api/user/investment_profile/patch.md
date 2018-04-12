# Partially Update a User's Investing Experience

Use this when the user needs to update a part of the basic investing experience survery presented during registration.

**URL** : `/user/investment_profile/`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

Update any of the fields with new data. All are optional.

  - `annual_income` - `0_24999`, `25000_39999`, `40000_49999`, `50000_74999`, `75000_99999`, `100000_199999`, `200000_299999`, `300000_499999`, `500000_1199999`, or `1200000_inf`
  - investment_experience - `extensive_investment_exp`, `good_investment_exp`, `limited_investment_exp`, or `no_investment_exp`
  - investment_objective -`cap_preserve_invest_obj`, `income_invest_obj`, `growth_invest_obj`, `speculation_invest_obj`, `other_invest_obj`
  - liquid_net_worth - `0_24999`, `25000_39999`, `40000_49999`, `50000_99999`, `100000_199999`, `200000_249999`, `250000_499999`, `500000_999999`, or `1000000_inf`
  - liquidity_needs - `not_important_liq_need`, `somewhat_important_liq_need`, or `very_important_liq_need`
  - risk_tolerance - `low_risk_tolerance`, `med_risk_tolerance`, or `high_risk_tolerance`
  - source_of_funds - `savings_personal_income`, `pension_retirement`, `insurance_payout`, `inheritance`, `gift`, `sale_business_or_property`, or `other`
  - suitability_verified - boolean value
  - tax_bracket	- `0_pct`, `20_pct`, `25_pct`, `28_pct`, `33_pct`, `35_pct`, or `39_6_pct`
  - time_horizon - `short_time_horizon`, `med_time_horizon`, or `long_time_horizon`
  - total_net_worth - `0_24999`, `25000_49999`, `50000_64999`, `65000_99999`, `100000_149999`, `150000_199999`, `250000_499999`, `500000_999999`, or `1000000_inf`

**Request sample**

```
curl -v https://api.robinhood.com/user/investment_profile/ \
   -X PATCH
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
   -d "{\"annual_income\":\"1200000_inf\"}"
```

## Success Responses

**Condition** : Sucessfully gather basic user data.

**Code** : `200 OK`

**Content example** :

```json
{
    "annual_income": "1200000_inf",
    "investment_experience": "good_investment_exp",
    "updated_at": "2018-04-09T16:22:37.903872Z",
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

## Error Response

**Condition** : If this endpoint is called without having logged it, it will fail.

**Code** : `401 Unauthorized`

**Content example** : 

```json
{
  "detail": "Authentication credentials were not provided."
}
```