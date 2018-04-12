# User's Investing Experience

This returns answers to the basic investing experience survery presented during registration.

**URL** : `/user/investment_profile/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/user/investment_profile/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather basic user data.

**Code** : `200 OK`

**Content example** :

```json
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

## Error Response

**Condition** : If this endpoint is called without having logged it, it will fail.

**Code** : `401 Unauthorized`

**Content example** : 

```json
{
  "detail": "Authentication credentials were not provided."
}
```