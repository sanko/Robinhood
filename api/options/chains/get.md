# Gather Paginated List of Options Chains

Grab the full list of options. Have at it!

**URL** : `/options/chains/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - equity_instrument_ids - comma separated list of instrument ids (optional)
    - ids - comma separated list of options ids (optional)
    - cursor - paginated list position (optional)

**Request samples**

Full list:

```
curl -v https://api.robinhood.com/options/chains/ \
   -H "Accept: application/json"
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

Options related to a particular underlying instrument:

```
curl -v https://api.robinhood.com/options/chains/?equity_instrument_ids=6a17083e-2867-4a20-9b78-a0a46b422279 \
   -H "Accept: application/json"
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

Options chains by id:

```
curl -v https://api.robinhood.com/options/chains/?ids=0c0959c2-eb3a-4e3b-8310-04d7eda4b35c \
   -H "Accept: application/json"
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather options data.

**Code** : `200 OK`

**Content example** :

```json
{
  "previous": null,
  "results": [
    {
      "can_open_position": false,
      "symbol": "FNJN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/80cd401e-7b50-4372-8a1f-a8562971962a/",
          "id": "0d7b1c46-d93e-4b4f-9ed6-7895470e176b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "51e294e0-9e91-4b4e-84f9-a365a03907f3"
    },
    {
      "can_open_position": false,
      "symbol": "OXSQ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2874bb92-539c-4297-b7b3-4a42bbeb3916/",
          "id": "497b3c06-c1b4-4045-afb4-cdba22665f2e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f9ce6170-cec3-403a-a236-7e480af775d5"
    },
    {
      "can_open_position": true,
      "symbol": "EGC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c3e414d9-4d30-4271-8c68-ce2062049455/",
          "id": "6de5e07a-fd1c-4880-b52e-329bcdf02871",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "747fa4e5-6a3a-4bbc-94f1-3a138520449e"
    },
    {
      "can_open_position": false,
      "symbol": "SMPL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6f6482c3-6926-4e44-8acd-cb28bc8fbf07/",
          "id": "2fea4964-a749-41b0-b858-057ef558704f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "607dfe78-f5c4-421f-8804-28fc1a131c1f"
    },
    {
      "can_open_position": false,
      "symbol": "SPYV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/df37a060-dcb2-4d1f-b87f-c68765f0ec2b/",
          "id": "731d9052-bae2-4489-86bd-d3a152d97fe0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7c0f9179-c5bc-4769-b363-023481e7df12"
    },
    {
      "can_open_position": false,
      "symbol": "USMC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/959a7e94-b9f8-4953-b435-b2ddb7279a96/",
          "id": "78081f5d-9226-4dd7-b848-1d23b9136c9b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "394f1420-ba6e-41fb-9c31-bb5b478547ca"
    },
    {
      "can_open_position": false,
      "symbol": "SPYG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/07632d6b-8f97-4ee1-806a-0b63393f4d9c/",
          "id": "c6ca75d4-6d13-4e27-a19b-7e4c41c1d725",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1e09a3c5-280b-40f6-9d01-3a32f60b899b"
    },
    {
      "can_open_position": false,
      "symbol": "ZS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0eb7aae6-224e-46b9-a855-07c22f7e042c/",
          "id": "edb58427-73d4-40d1-996c-c386d50673a7",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "32bfb707-38c1-4dbc-ba8b-6c8940651874"
    },
    {
      "can_open_position": false,
      "symbol": "NANR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fb785f78-2919-4c89-8816-a923cb5cbaf3/",
          "id": "ef11e847-dd4e-4c74-a384-934b92ece241",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "072ae838-e4b3-478a-84a1-24a174c8abda"
    },
    {
      "can_open_position": false,
      "symbol": "LX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/74b3862f-f0d0-4710-a48b-8cb60eab36ea/",
          "id": "e1524611-9d51-48ea-b7c6-72479a81dada",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1e3c6bb3-271a-4304-99f3-1b86d988100c"
    },
    {
      "can_open_position": true,
      "symbol": "ZTO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4a8d654d-09f0-4152-95b4-213b7907e703/",
          "id": "dbcbeee9-6a83-4811-9bed-1a96e8c0d3c1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "facb3d6e-7dad-4dea-b2b4-59aa3d5f6bdb"
    },
    {
      "can_open_position": false,
      "symbol": "UPLD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7ac565d8-31a1-4458-801a-37bb39288adc/",
          "id": "8de12e10-4ae9-4f28-a1f8-3594fd0704de",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fc5bd905-7810-42a6-8f38-f5a75aaf2652"
    },
    {
      "can_open_position": true,
      "symbol": "CBRE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d2be8e45-297b-4038-9e69-c049e884c450/",
          "id": "f1e5a414-b7ad-4106-896b-62e6d57946a6",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bf1d7191-15a2-4aa3-9d80-299aa282a5c4"
    },
    {
      "can_open_position": false,
      "symbol": "HPR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a85fa4a7-db27-4402-9d56-e52534bd9f64/",
          "id": "86668c5d-466f-48e4-ae3e-89b722a23607",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e377dbd1-5e04-425b-b664-342f8a10e396"
    },
    {
      "can_open_position": false,
      "symbol": "TR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dded2a6b-1a48-4d82-8f2d-4486e7e64c3e/",
          "id": "49c69894-0268-4d3a-ab8e-20dab2bd1b5a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9b3665c4-07f0-4aba-9c39-70f7ed5dd722"
    },
    {
      "can_open_position": false,
      "symbol": "BOIL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d695c1f0-cbeb-4283-a339-a35c3d9de786/",
          "id": "2da8271d-1d78-4efd-b126-04452e3a0d0e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ab56711a-6fe9-4eed-83ca-0cdd5b889c39"
    },
    {
      "can_open_position": false,
      "symbol": "OILD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9e157222-7320-4183-98f5-b9f69637a73a/",
          "id": "209acb22-35b8-4a03-a7d8-e7c110111c93",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "953e5e0a-e363-44fc-b0cd-fdc6a92ef5be"
    },
    {
      "can_open_position": false,
      "symbol": "TR1",
      "trade_value_multiplier": "103.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dded2a6b-1a48-4d82-8f2d-4486e7e64c3e/",
          "id": "560f315e-d8a3-4609-808f-cde9638b5a17",
          "quantity": 103
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3fb65a81-fc6e-4f7a-b283-b01967b0ad91"
    },
    {
      "can_open_position": true,
      "symbol": "FISV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8203d9fa-c91c-4d85-94e4-31dfab8620ac/",
          "id": "083707df-6fb8-48c3-9b93-734070614683",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ed4a9593-59ad-424e-ab88-3f601293cca8"
    },
    {
      "can_open_position": false,
      "symbol": "OILD1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9e157222-7320-4183-98f5-b9f69637a73a/",
          "id": "869175c5-007f-4f97-94f2-839b4656f806",
          "quantity": 25
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f17c20f3-a79e-4b90-a207-53c9fcb88f5f"
    },
    {
      "can_open_position": false,
      "symbol": "BOIL1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d695c1f0-cbeb-4283-a339-a35c3d9de786/",
          "id": "572b1d60-fabd-4fba-ba3f-353e279fabd4",
          "quantity": 20
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f05e3271-57b4-4424-bdcf-bce23616eb84"
    },
    {
      "can_open_position": true,
      "symbol": "AFL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/049a8096-65e8-4a41-9525-304f4aeab8c9/",
          "id": "151bcec2-7d55-43c6-b0a5-c6589adc9221",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "e188529b-7846-46c9-a9b8-4bd449c4a882"
    },
    {
      "can_open_position": true,
      "symbol": "NYRT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/650ccc0a-fa58-4b36-8c70-17e46a1b2256/",
          "id": "0d01884a-f565-4819-af1b-c0c99c7abde3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ebdda36f-8a04-4daf-ab93-e08c65f79d62"
    },
    {
      "can_open_position": false,
      "symbol": "NYRT3",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/650ccc0a-fa58-4b36-8c70-17e46a1b2256/",
          "id": "37e3e2f9-aed7-4874-810e-437f0ce041d0",
          "quantity": 10
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9252a80b-12e1-4d82-86d1-2291db9a248a"
    },
    {
      "can_open_position": false,
      "symbol": "GNBC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/92a302da-e99c-4fe2-a267-89b9b67ec533/",
          "id": "7df30b2b-f887-452a-98f2-0a92de7d77f5",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c3ab8ba4-9a85-40ca-8984-b7a54cba7e70"
    },
    {
      "can_open_position": false,
      "symbol": "TRHC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d62c597b-daf9-44d2-b713-d210e30df64c/",
          "id": "0cdaef23-efa9-479c-b32f-58f592ac40da",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5b8a9bfa-9267-429a-9022-5d980e06b5ce"
    },
    {
      "can_open_position": false,
      "symbol": "DSCK1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/11715ac5-5875-4ac3-ae55-19ea812f2e03/",
          "id": "7d2d52ae-7d69-42ef-a657-8f37af9c99e2",
          "quantity": 105
        }
      ],
      "expiration_dates": [],
      "cash_component": "6582.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b5bd5936-8bdd-488a-8eb1-97b0f38a59cb"
    },
    {
      "can_open_position": true,
      "symbol": "LKM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ccb3a875-56f7-42a1-b234-7ff7b2dc0dc9/",
          "id": "cb555aba-e0e8-4d5b-a010-007f61a4b746",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "218db5dd-8f07-4da0-b8c3-84649b7377b6"
    },
    {
      "can_open_position": true,
      "symbol": "FFG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f867bff1-090d-437a-a445-ab433fb3a3bd/",
          "id": "2d1d3652-763f-424b-a359-7844fda71296",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e47dfa34-2a99-4ea6-957f-0dac47b870e6"
    },
    {
      "can_open_position": true,
      "symbol": "GLIBA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b13ae284-239a-4808-af3a-564848cf6868/",
          "id": "600c76b0-87a0-426f-8bd6-6b599cb49781",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "82463b93-55b7-4dcd-8b83-6f29b96b1328"
    },
    {
      "can_open_position": false,
      "symbol": "QRTE2",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/936b862b-31e0-4c9c-9db0-829b464e39ba/",
          "id": "32212390-8df3-46fa-ac0d-917448b6b13b",
          "quantity": 165
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7cde9a28-cc7b-46f9-81b7-609f6c96a1c0"
    },
    {
      "can_open_position": true,
      "symbol": "QRTEA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/936b862b-31e0-4c9c-9db0-829b464e39ba/",
          "id": "a14d58cb-0d4f-4dc2-905e-abca020e76f2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4cd1db16-7f21-44f6-98dc-a0cf2491c76c"
    },
    {
      "can_open_position": false,
      "symbol": "RGC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "2300.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3f5e9556-d24a-46de-9392-8f30e348580a"
    },
    {
      "can_open_position": true,
      "symbol": "WSBF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9284a011-0409-437c-8040-b55724e5c056/",
          "id": "e1833098-133e-40e7-a6b7-0847c58dd933",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d3468b66-991e-4b12-b3b7-ef4579fe0687"
    },
    {
      "can_open_position": true,
      "symbol": "FCBC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fb21f3c5-72a3-4f1d-9932-f8428ce40c28/",
          "id": "849bdd9d-0444-41a7-9055-0bfb7d845fa1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1e8069ae-2e22-47d8-ad4a-9424c3692d24"
    },
    {
      "can_open_position": false,
      "symbol": "CPN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "1525.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b6007a30-f7cf-4a75-8918-b9b19c5bdc1c"
    },
    {
      "can_open_position": false,
      "symbol": "BIVV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "10500.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "82773341-cc87-4bc4-ac08-e53c1e9c9aad"
    },
    {
      "can_open_position": false,
      "symbol": "CASC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "1000.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0a81475d-bc60-45c7-a595-8a650beeff30"
    },
    {
      "can_open_position": false,
      "symbol": "CCC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "2150.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0cdbf92d-50f2-4aed-8c27-a7a9c3112cd1"
    },
    {
      "can_open_position": false,
      "symbol": "ARKK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/79b7c6e2-1cad-4160-8ae4-ee43a8e50840/",
          "id": "8b6ef4a2-ae88-44fb-bb5f-b201da88ea30",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b9f7c1b6-891b-4a76-89b2-53ae731b9ed2"
    },
    {
      "can_open_position": false,
      "symbol": "FFTY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/646523af-0a27-41d2-be04-40b7a7ef962f/",
          "id": "116bee75-30d2-45e7-a948-0da88239032a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f7d739bd-a16d-4768-95a7-1bdbd2f4e425"
    },
    {
      "can_open_position": false,
      "symbol": "EDGE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ed267699-8b81-4ebf-a513-42bb1d83d48a/",
          "id": "369f72b7-8255-451a-870d-22631a67e53c",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "35b038f4-805e-4c28-a7b5-efae806ff002"
    },
    {
      "can_open_position": false,
      "symbol": "AMR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c88be4e6-c8e1-4c89-9775-b2477bd16efe/",
          "id": "fc32f90b-998c-4f1e-9fe9-48e4fcee5c46",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "06ebd3bf-e469-4b03-b32c-b6454f4e49bc"
    },
    {
      "can_open_position": false,
      "symbol": "CADE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/23ec6d23-436a-4af4-b690-b580972697f9/",
          "id": "c23a5e0a-a201-4aae-a028-5be5627a10d7",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "69ce19db-a360-4c3d-a69b-8cf84b76c058"
    },
    {
      "can_open_position": false,
      "symbol": "CRON",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/68487b7f-91bb-41be-b1df-3af37e6ae38f/",
          "id": "d5468cb3-35e2-43cb-81c5-03f5ad7af719",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8969d439-66bc-42fe-937e-f468a40678cd"
    },
    {
      "can_open_position": false,
      "symbol": "HTGM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/096c4b48-9b73-4e77-8430-f2b3422bad73/",
          "id": "026a565e-f5ae-4335-b417-ac6d828b75f3",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b120447d-2e45-4500-8064-f11ba83f9ffa"
    },
    {
      "can_open_position": false,
      "symbol": "AVYA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/967dcfb1-f3ea-4b71-8ec2-e3370bfc0fa8/",
          "id": "957f8806-40a3-4f8a-9302-62d8aef7e533",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d49f763a-5a61-4820-b8d1-e44f183fd7e1"
    },
    {
      "can_open_position": true,
      "symbol": "CCT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e2de6800-1d5d-42dc-a16c-43b478a9e6b2/",
          "id": "a277ac4c-6dd8-43cf-9ac7-3a1b0105fe5d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "523a15da-6600-407b-b269-81f2ad79b9d0"
    },
    {
      "can_open_position": false,
      "symbol": "FOGO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4a39121b-79f3-4adf-8f37-845776db5e7a/",
          "id": "3bc1c3df-9d3e-4e4f-85ad-9c8277095839",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "28fbfb3a-c1ea-4e43-8280-d733795b9730"
    },
    {
      "can_open_position": false,
      "symbol": "PLUS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6aced61c-2b36-44b5-a0d6-671115fdc06d/",
          "id": "629c5270-ebb2-44bb-9c96-c385475fe35a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2fabbab1-23df-4b5e-bc3c-66d12ac01dcd"
    },
    {
      "can_open_position": false,
      "symbol": "JUNO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "8700.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4bd5b5b9-5b77-4aa1-b9c6-afc5cd73f3c5"
    },
    {
      "can_open_position": true,
      "symbol": "MCHX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fef941e2-d2f8-442f-a945-0161a56772bb/",
          "id": "65cadcf6-de1a-4634-908a-3baa819fb4a6",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "efed415c-ac94-4208-9bac-ee5bc0027f67"
    },
    {
      "can_open_position": true,
      "symbol": "BHBK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a2926f0b-3bac-4d93-9842-42179e90e8e0/",
          "id": "f8cbf602-0a1d-46c4-a1ac-4f1e8e294537",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "df0e8cd8-71a0-49a8-9871-bde284e0a969"
    },
    {
      "can_open_position": true,
      "symbol": "HSTM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7cc1f26a-c878-48d2-b080-87b3a4e8d9d9/",
          "id": "4c9f367c-5d25-474f-9380-8b9357cc5c64",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0783976d-d5d1-4484-aede-8b49b82cb3bd"
    },
    {
      "can_open_position": true,
      "symbol": "BFB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bf957751-5018-4f7e-9d63-378042461342/",
          "id": "212f0938-5873-4672-bd18-38b42313a54c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7878c11d-fc94-462a-a386-6c1f897be966"
    },
    {
      "can_open_position": true,
      "symbol": "BFA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b80bfd5d-7b38-48f5-bc2c-33c2e77c9cff/",
          "id": "ff7f8f64-979d-420d-ac54-d69fe090c3a0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d5790825-c8cf-4cb1-abe3-36e0385b8ac2"
    },
    {
      "can_open_position": false,
      "symbol": "BFB1",
      "trade_value_multiplier": "125.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bf957751-5018-4f7e-9d63-378042461342/",
          "id": "2feb0910-3923-4253-a78e-bc277223cc9a",
          "quantity": 125
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c573ffbb-536c-4933-92a1-3f069bed9577"
    },
    {
      "can_open_position": false,
      "symbol": "BFA1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bf957751-5018-4f7e-9d63-378042461342/",
          "id": "f7e24518-cf1c-420d-99e8-c113376e91e1",
          "quantity": 25
        },
        {
          "instrument": "https://api.robinhood.com/instruments/b80bfd5d-7b38-48f5-bc2c-33c2e77c9cff/",
          "id": "773667df-04e6-4757-bb7b-26a847d487b1",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "11ab0f8a-36ff-45bf-9806-91b4812ec5aa"
    },
    {
      "can_open_position": false,
      "symbol": "VZ1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6957592c-ace4-41f4-98f1-1b3a3a54a7dd/",
          "id": "6ed5c976-2684-47a0-a377-e5293f437a8f",
          "quantity": 379
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "81ebc331-a00c-451f-ad2b-f704cb30e8a7"
    },
    {
      "can_open_position": true,
      "symbol": "Y",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e62f6ff4-0f93-46d3-be89-473189695950/",
          "id": "d3efc531-2c1c-4fee-b2f2-069dc619feff",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9727c3a1-5b09-4cc1-b1e1-28354014ff44"
    },
    {
      "can_open_position": false,
      "symbol": "ASFI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c8b560ff-e7d4-42ca-8240-8e05c68410c5/",
          "id": "676fc804-0c57-4d64-a4d9-aa05604530cc",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "13daf35d-c64b-476c-9350-794ed2e1850e"
    },
    {
      "can_open_position": false,
      "symbol": "ASFI1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c8b560ff-e7d4-42ca-8240-8e05c68410c5/",
          "id": "b9a9d2c1-1417-4c3b-9953-b3c624058e7f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": "530.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c9f437d0-f4a1-4e39-9fca-8e42dc552eb3"
    },
    {
      "can_open_position": false,
      "symbol": "ENTL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "2400.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "19b32d5c-b954-4423-96d6-6cc251a70c36"
    },
    {
      "can_open_position": false,
      "symbol": "VICI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6914945d-e863-4ac2-9ad3-a21f828e823a/",
          "id": "766b73ae-10f6-4d9e-879e-02df99af882d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fe45c02d-87fd-409b-acf4-8273dfe45fcb"
    },
    {
      "can_open_position": false,
      "symbol": "EXAC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "4925.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9a7e2d2f-ebc8-4ef6-bdf3-b289d2a9a6c2"
    },
    {
      "can_open_position": true,
      "symbol": "WELL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9b2ff74c-6f46-415d-a226-0c72488c8a0d/",
          "id": "bffce8cb-b461-4834-a37e-f2258d987062",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2efb31e2-7596-4672-86ac-ee454339b78a"
    },
    {
      "can_open_position": false,
      "symbol": "NYRT2",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/650ccc0a-fa58-4b36-8c70-17e46a1b2256/",
          "id": "dd895648-b260-438b-98a6-5a2852494d77",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": "200.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "aab0f200-d3a6-4547-aa2e-eb888a27c43e"
    },
    {
      "can_open_position": false,
      "symbol": "NYRT1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/650ccc0a-fa58-4b36-8c70-17e46a1b2256/",
          "id": "c7fdf032-20e5-4c40-8ba7-95591b2ed55d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": "300.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c9300e62-1d3a-4a21-b06e-2fe5c76e65e6"
    },
    {
      "can_open_position": true,
      "symbol": "BKNG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5b779adf-6feb-4c3a-953b-1c7cb8aee6ed/",
          "id": "7b9d7dc8-aa44-4460-af58-bebdb913ed4f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-09-21",
        "2018-10-19",
        "2019-01-18",
        "2019-06-21",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9fc9c5cb-c3b2-4aea-83d6-e3e7ba174b4b"
    },
    {
      "can_open_position": true,
      "symbol": "STCN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/befdb240-1ae3-4827-b401-26d4a7d24731/",
          "id": "1c1cfd94-8731-48f3-a1ef-42d384671d16",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f0bc475b-2b2f-4314-b2ba-20269f5689a8"
    },
    {
      "can_open_position": false,
      "symbol": "TNTR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7d6c0866-40ae-4bb0-b60c-a819b17f0fd3/",
          "id": "33ee9cbb-9ab8-4175-9a04-c4849214a5ca",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5f1f523a-7723-43a9-a82c-d6d39f1e0687"
    },
    {
      "can_open_position": false,
      "symbol": "GTES",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bbdbe7ea-9d30-40a4-9269-f2505dec7e58/",
          "id": "908dfaf6-5ef3-463a-98fb-446461d414c5",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d597dd58-334c-44ea-990e-94bc76ad84aa"
    },
    {
      "can_open_position": false,
      "symbol": "TENX1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f06ea53a-5721-4d47-9a23-f5f57e3bbbd1/",
          "id": "574139e7-7980-4604-8ee6-0c5d475a4c0c",
          "quantity": 5
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "988a7ac3-c9d1-4f7f-b984-0c37aea4d2b7"
    },
    {
      "can_open_position": false,
      "symbol": "ZLAB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f5a418b9-34ba-443c-af37-c7f8fdaa7721/",
          "id": "0dbc3104-6b21-41a8-8561-a590d90e871d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8264148f-dc29-4291-b497-1debad05798f"
    },
    {
      "can_open_position": false,
      "symbol": "SELB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4915f14b-fa8f-4aad-91e2-bc3c1d67697d/",
          "id": "20fd757e-f9c3-4810-9188-1349ceacf851",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fa3a323e-10fd-4b95-808c-eb54ad9fd95a"
    },
    {
      "can_open_position": false,
      "symbol": "OBLN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/666908ab-f812-4d90-b409-c0c8c7f07502/",
          "id": "9d055492-1efe-4c15-b9ac-9281baf85e7b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9b872ee1-ab00-414a-bcb8-8df9ea4c1fbf"
    },
    {
      "can_open_position": false,
      "symbol": "PPDF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/98a6c95b-6c9c-416c-9274-e9a157d5d218/",
          "id": "a89cf67a-2871-4456-9cdf-904085ae0e74",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "941b8334-aefd-4b57-978d-5b9c36030f9e"
    },
    {
      "can_open_position": false,
      "symbol": "CDTX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a0cb2faa-b4b6-4142-805b-b4cda2687c96/",
          "id": "709a0c16-5741-4e60-a9ff-8c5b1df7ee83",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "012f20e0-4b3f-4ac5-a7ea-8736e223194f"
    },
    {
      "can_open_position": false,
      "symbol": "SECO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5ac30f65-678c-4337-b42f-f9302558a5b7/",
          "id": "de3a245d-89a2-409a-ab12-12cf9f762124",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2cb377c4-aa2c-433f-a59f-bc486936577a"
    },
    {
      "can_open_position": false,
      "symbol": "CBIO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5a7f39fb-568f-4ff4-90f4-257bf9c64db9/",
          "id": "c7e1a92b-611f-4f73-abcf-55731d04743f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5b5b9cdd-572c-43a1-870e-b1a967c45115"
    },
    {
      "can_open_position": false,
      "symbol": "REDU",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e93d32e3-22b8-4a3c-a8d0-70f1d1b27bc0/",
          "id": "4bfa636c-6cd7-4dca-8085-3f43a84ad793",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "18eb3653-8a0a-41d9-8472-c1585789ceec"
    },
    {
      "can_open_position": false,
      "symbol": "SAFE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/01c34f00-603b-4a78-be1a-dfdaa3827b6b/",
          "id": "98d570ba-fdfc-46b1-9244-62c27ae1d9da",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "44eab69a-93e8-4289-914a-a653b8da92d7"
    },
    {
      "can_open_position": false,
      "symbol": "RYB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0f847a29-3314-44ac-aaca-a1d600b31ace/",
          "id": "a56276ba-ff02-4ecf-bbcc-729b9885d982",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1834cc02-fdf8-409d-9918-eca5bcb970f0"
    },
    {
      "can_open_position": false,
      "symbol": "APVO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/436b5a89-9e8a-4a94-81da-c353f8be0874/",
          "id": "180a96d6-e40d-4f1d-ac25-8dcd4ac084eb",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "59161479-e976-47a0-89d1-075d67735656"
    },
    {
      "can_open_position": false,
      "symbol": "MBIO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5e5b1a53-2ddf-43eb-97ba-6a1d586064de/",
          "id": "b966b2a5-3380-48b4-a162-6ca8f71d2917",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0a11616a-386f-446d-9426-532080f798bc"
    },
    {
      "can_open_position": false,
      "symbol": "ILPT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a992d180-d7f6-45e6-9466-59a76a0f61c9/",
          "id": "eeb9fc3a-b571-46f0-be20-2f355a5eb560",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fa44a52c-b846-4e01-a240-a09f396cfc43"
    },
    {
      "can_open_position": false,
      "symbol": "HYLB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7566daa1-9004-475c-9e9d-3df74d6e9607/",
          "id": "070ee0f2-5b29-4cb7-9650-786789c5d53f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6c4db366-bb3c-4a21-9fdb-e659167deaa4"
    },
    {
      "can_open_position": false,
      "symbol": "ALDX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/89a56c0f-4414-45c0-95df-e6437ffd1db3/",
          "id": "7cb2b33b-59fd-47cf-9a8b-1af0d02714c0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "96a5f844-fc1e-4bec-bb35-0e3a149d206a"
    },
    {
      "can_open_position": false,
      "symbol": "ICLK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1e348d57-f70a-40c6-aa40-1e393efdaf11/",
          "id": "5b236288-5b02-4acd-bd68-a044b7373773",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b95da3ab-88a0-4f4c-a6df-073d3d945704"
    },
    {
      "can_open_position": false,
      "symbol": "KALA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6e3289f7-3c72-4605-a761-534ba6a0474e/",
          "id": "e3f960a7-940e-452c-a0a8-2e2dbe284b80",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9b6e4071-200b-49d9-8953-20e8979e08a6"
    },
    {
      "can_open_position": false,
      "symbol": "PCH1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d2cdca8d-e702-4fc7-8838-1ee8bd1880ef/",
          "id": "3d8151b6-7200-4293-aa72-8b956d4be6de",
          "quantity": 180
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "310ce3c4-712f-4406-a26d-72cfbab53276"
    },
    {
      "can_open_position": true,
      "symbol": "CSTE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c1870665-3aab-419b-88aa-968ab695091c/",
          "id": "e9e6f39f-c071-4950-8288-40abbb681cab",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f35ad2fe-b524-4772-8b91-b72fc52950b0"
    },
    {
      "can_open_position": false,
      "symbol": "CSTE1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c1870665-3aab-419b-88aa-968ab695091c/",
          "id": "10dc7d9b-5f36-4ab1-be9f-14784e136e2a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": "29.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ee7f6107-bcf8-4177-a615-12dcec259d66"
    },
    {
      "can_open_position": false,
      "symbol": "VXRT1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9f91a18c-b34d-4e67-a68b-2c29d20aa99c/",
          "id": "6c6c218d-921c-4a50-98bb-77911088d69f",
          "quantity": 9
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bae7d48d-bc13-484e-a636-d0ffd02b8e88"
    },
    {
      "can_open_position": false,
      "symbol": "DHCP1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8de6df38-b9b1-4a30-9e62-5aa24c636374/",
          "id": "51d23265-228d-4613-956d-e8dfeceef639",
          "quantity": 6
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a8e1e597-8895-4153-ab92-44ebec4caa1e"
    },
    {
      "can_open_position": false,
      "symbol": "LEN2",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a5c82434-4cbd-4385-a4de-480939e6a4be/",
          "id": "6774093b-d806-48fc-932c-6935f3771430",
          "quantity": 88
        },
        {
          "instrument": "https://api.robinhood.com/instruments/6a98d17c-ca46-429e-b1fc-b5fb838f3674/",
          "id": "f29c2788-fb1a-4321-ba78-17eb575c4056",
          "quantity": 1
        }
      ],
      "expiration_dates": [],
      "cash_component": "65.7200",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "31a7868c-2727-4364-96aa-604a65fecd5f"
    },
    {
      "can_open_position": false,
      "symbol": "OCFC1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a976c93a-3fe2-4b52-b6a7-132033c3c16c/",
          "id": "a282792d-51c5-4d53-86bf-28000084f968",
          "quantity": 92
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "30a40974-bc40-4322-9836-26370f0fcbec"
    },
    {
      "can_open_position": true,
      "symbol": "SFNC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/190bb7a5-3b7c-48bf-9411-cffb76250a75/",
          "id": "5cc157ee-9480-4474-83e5-a06d79d59c15",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "300dc573-fb79-4152-a760-d235608a86f9"
    },
    {
      "can_open_position": false,
      "symbol": "MJ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a9adf9c7-4304-406c-8ab2-22fb2c89cbcc/",
          "id": "50dc70d2-3e6b-4193-aebf-8459a38b442a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fb0b836b-5a12-407e-8b9f-082bf7bb346e"
    },
    {
      "can_open_position": false,
      "symbol": "SGGB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d935943e-9424-4df7-82ab-7d9241d92990/",
          "id": "0f93afbe-fa2b-4e4f-9a9c-c88c338a26d2",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a5a1d206-6e51-48c4-acd0-df03f3ef0974"
    },
    {
      "can_open_position": false,
      "symbol": "JJGB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/33082c81-ca3a-4204-bb75-397e7c282fa6/",
          "id": "d6fdc3aa-ce0b-4847-899e-47d67b3d26aa",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9507f67c-129b-4e11-92c7-098d673f8481"
    },
    {
      "can_open_position": false,
      "symbol": "BJO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1b9336c5-3ba6-4db3-9b6a-aa982f839026/",
          "id": "596cda36-3b42-4de0-b7d9-56fc5b73308f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bcb5a9e8-b65a-412b-9ce2-6975fd0df841"
    },
    {
      "can_open_position": false,
      "symbol": "OILB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/57e9a305-eca6-4810-994d-7596a9df84eb/",
          "id": "ea4b3ad7-d7b1-4208-88a1-5ec75310995e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "01d07408-1c0a-4ea6-9cc0-526486f7c52b"
    },
    {
      "can_open_position": false,
      "symbol": "GVIP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d4b87786-9475-4e67-a6d4-7eae7623862b/",
          "id": "e0d1b24b-91bd-4e75-8e87-b4c0837702bd",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "12690e8d-4e66-40dc-be14-c0652406fdf0"
    },
    {
      "can_open_position": false,
      "symbol": "BALB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e714e653-711c-4c00-814c-51e838e2637d/",
          "id": "8aba648f-422b-4e1d-8f83-570179b3531e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "36ba58ca-227d-43ba-bb8d-de67fa4af0af"
    },
    {
      "can_open_position": false,
      "symbol": "JJCB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2fee3b30-e362-49eb-b28f-db6364a0bb7b/",
          "id": "4492109f-312f-4960-a539-5ad99193c5c8",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fd292c93-e1c3-41e3-8597-d9ea59c32272"
    },
    {
      "can_open_position": false,
      "symbol": "DNLI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f439e940-0faf-4568-b8af-e08811166ca0/",
          "id": "aec73643-5f1e-4465-9fe9-788f04b5c455",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "76b4f9b3-42d0-48b0-b16d-cacaefdb1929"
    },
    {
      "can_open_position": false,
      "symbol": "COWB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/605c4af4-a3a3-4206-8cc8-e29974ef1bd5/",
          "id": "1dae3665-890b-4529-ae86-dec80179932d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2de0475a-2692-43cf-b19e-86f0b1cb04c2"
    },
    {
      "can_open_position": false,
      "symbol": "DK1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/952042df-fa1d-4cc1-82a6-01248386faf7/",
          "id": "46b4a269-8777-48a2-a311-24c324c9ffe2",
          "quantity": 49
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e5736ecc-2a6a-4082-be40-7b6739db24d3"
    },
    {
      "can_open_position": true,
      "symbol": "CARG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1eb4afde-0262-4a76-9ecd-99919515d864/",
          "id": "51141165-bb56-4c55-a746-af09b3ebe66c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "92b2e8e0-6145-4189-af95-a563658d13d2"
    },
    {
      "can_open_position": false,
      "symbol": "ASB1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c319c96e-1739-4ded-a780-38106e7f3d6b/",
          "id": "91ccfea9-02f6-489a-8ce8-00e79fcd4c4a",
          "quantity": 42
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "779b54df-567d-40bb-acec-13051bef85bf"
    },
    {
      "can_open_position": false,
      "symbol": "ACTA1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/52f90dba-056d-4712-b843-40f330639b90/",
          "id": "ed67aec7-bce6-467f-8b9f-34b55dea33cb",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": "1489.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f48bca7a-95a4-41ce-8fa4-1f2d02137c0b"
    },
    {
      "can_open_position": false,
      "symbol": "HHS1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4dc28038-0466-4c38-b494-df73e2bdd398/",
          "id": "a7ec6a26-9ceb-4207-bf40-5e34390fb4b5",
          "quantity": 10
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b32c689e-959f-4208-b514-4dc4dd7d7847"
    },
    {
      "can_open_position": false,
      "symbol": "ULBR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dd91987f-798e-48f6-a9d3-b4a0c67b56a6/",
          "id": "bd513b55-e38a-41cb-a55c-0ea026ae75f7",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f340e0d5-c982-4547-9c0f-371ed7b796bc"
    },
    {
      "can_open_position": false,
      "symbol": "BLCN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/999b904d-e866-4255-86d8-97d138bf917c/",
          "id": "6de91a20-63ba-4245-b69b-97593465bd73",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "34fef33f-5dc4-4131-b7cd-c50cc4eb678a"
    },
    {
      "can_open_position": false,
      "symbol": "ADT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f14f2b8b-3e68-4237-aeaf-f849ffbe69fb/",
          "id": "9ef63ccd-4bc1-4068-bcf6-191bfbcae6a6",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5a6cdc61-a464-489a-b4cc-8da90b250a4c"
    },
    {
      "can_open_position": false,
      "symbol": "TCMD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/282208ca-9321-48a0-bb1b-0c9f304fdff7/",
          "id": "164b7d1a-f8c4-43b3-884e-6553d7185ac8",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1b1ab1d8-b1bb-49e1-8b76-4d6f68b5e9ef"
    },
    {
      "can_open_position": false,
      "symbol": "NMRK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2c508346-7195-4f0d-8ace-65d5072337a3/",
          "id": "b8b9a952-db81-4d73-9fde-d9ee909c80d1",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3b8f7927-9f29-47ff-8b00-100832c9de43"
    },
    {
      "can_open_position": false,
      "symbol": "CASH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7eb2c5f5-2c3c-46ec-b1d7-89c84c00b133/",
          "id": "32b55ad7-bf4e-4aca-9f97-6f6bf4ed9f7b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "64439e85-59eb-467f-8e83-911624d92847"
    },
    {
      "can_open_position": false,
      "symbol": "KDMN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5d0662eb-2191-4e23-8643-f6194493baaf/",
          "id": "069a0565-61dc-4b2e-80e9-ba4189416116",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "54930af3-8e04-495f-aea7-cc9afed9808f"
    },
    {
      "can_open_position": true,
      "symbol": "LFIN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a85202cc-7fca-46aa-97c0-e12dffd8b596/",
          "id": "3652cb1a-96f1-4114-b675-744254bf38bd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "81310853-4995-48a2-9b3c-7ad381fa2c44"
    },
    {
      "can_open_position": false,
      "symbol": "GPMT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4b1a6613-e874-4f3d-9bd4-aa49561e8e9c/",
          "id": "a25e3ec8-e087-48fe-99bf-9f68800ead85",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5aee8c60-f336-4fb4-908e-7cc41fae1dea"
    },
    {
      "can_open_position": false,
      "symbol": "CNET",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8b6d8ecc-3ad0-46f2-9650-35075ca6da6e/",
          "id": "2bc7b8aa-fe55-4646-ad48-a9a5ce156571",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5c38b73c-7244-48ba-8707-0dec6e99ef7d"
    },
    {
      "can_open_position": false,
      "symbol": "BLOK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/64b84113-c08f-4b52-8bae-ad57cb6ed060/",
          "id": "85f410df-39c9-4a12-a388-069e762156c2",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1bca1a7b-595b-4197-b5af-12e8071ee57f"
    },
    {
      "can_open_position": false,
      "symbol": "LFUS1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/faf8ca83-8ff5-4705-8eda-9ca6301b6362/",
          "id": "83adf384-82a9-4d21-a6a9-1714e4724ccf",
          "quantity": 12
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "08691375-2cb7-4e11-a255-556a1f568012"
    },
    {
      "can_open_position": false,
      "symbol": "HEI1",
      "trade_value_multiplier": "125.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e5e9b095-0dd8-4813-8cec-dc41beac9743/",
          "id": "c520ce00-5e6a-4d2d-b0bb-e78ef7211142",
          "quantity": 125
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "115488c4-13f9-43ab-9b65-f2e6601b1880"
    },
    {
      "can_open_position": false,
      "symbol": "SLS2",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5e8701ed-eddc-4b49-a151-3310953dfff4/",
          "id": "82a2bc6a-a103-4770-910d-d6502feedec8",
          "quantity": 3
        }
      ],
      "expiration_dates": [],
      "cash_component": "2.2230",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "15b676c7-56aa-450a-a13c-b9d29d266b84"
    },
    {
      "can_open_position": false,
      "symbol": "SLS1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [],
      "expiration_dates": [],
      "cash_component": "1.1100",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f210293c-d7a2-44bf-9abd-df5a4048b3f1"
    },
    {
      "can_open_position": true,
      "symbol": "HEI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e5e9b095-0dd8-4813-8cec-dc41beac9743/",
          "id": "efa2eb8e-9e4c-476f-9013-ebc63e3d4bd8",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e66e599f-3484-4ed8-9e37-7074736cba04"
    },
    {
      "can_open_position": false,
      "symbol": "MTW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/916586fc-9b90-4390-89b9-73186d473e61/",
          "id": "c6ef0fb1-0754-4fd6-a695-ee5997d4d340",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4a95fa78-657c-4630-8e91-8d61fc604448"
    },
    {
      "can_open_position": false,
      "symbol": "HEIA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4ad09beb-fe89-42f0-ac44-657b1349bf5c/",
          "id": "846737ce-1348-4c28-b764-098b8aefc452",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "95dbc3cc-ed97-42db-a220-6efb35c0d921"
    },
    {
      "can_open_position": false,
      "symbol": "HEIA1",
      "trade_value_multiplier": "125.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4ad09beb-fe89-42f0-ac44-657b1349bf5c/",
          "id": "885b5f6b-7ac3-45ab-b70b-2cde48d330a9",
          "quantity": 125
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fc1f724b-8947-4ae3-9bf5-7d30d842b07f"
    },
    {
      "can_open_position": false,
      "symbol": "RCKT1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b178d43f-b577-43d4-8805-e5485d8cd413/",
          "id": "b76f89fd-6227-4597-aa05-765efc6596ee",
          "quantity": 25
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4e72acd4-249b-49c1-99ba-6cbf66330137"
    },
    {
      "can_open_position": false,
      "symbol": "ARGS1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/70681f39-f2d8-4b0c-962d-4233590038db/",
          "id": "891ee361-bb57-48f0-aed5-484243fa4e1e",
          "quantity": 5
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fd1c9134-8ccf-4f88-8574-cfe3ddeb78cf"
    },
    {
      "can_open_position": false,
      "symbol": "VXZB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c89e1539-d25b-46f3-a0ae-3b83eeb8cb4f/",
          "id": "e12227b4-3aa9-448e-a64b-aa56da72c0ea",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "818e623b-54cb-4fd6-a886-11e5617c6fb6"
    },
    {
      "can_open_position": false,
      "symbol": "VXXB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4d3c00d4-9e0b-4151-a8f2-00257f2d4253/",
          "id": "c84ae438-9a91-4d6e-82c6-8cb175e75b18",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "21eb1d57-71e4-4a06-80ef-4b8264e234fa"
    },
    {
      "can_open_position": false,
      "symbol": "GTXI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/20fa92db-6c3b-4754-9073-df9a85ea486e/",
          "id": "c3f50079-8057-4188-b118-a645339370bc",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "083aa95d-5745-4ea3-9ba0-ae01d8fd472b"
    },
    {
      "can_open_position": true,
      "symbol": "WP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/27cdc632-dc36-4102-9475-2004695adf5c/",
          "id": "b1b1b911-d5c9-4d4e-8773-331384d9dc62",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "63160de3-d8eb-4a61-8896-8e45578ddd6c"
    },
    {
      "can_open_position": false,
      "symbol": "CKH2",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6d70a159-ee91-4e23-8ffe-075162f78838/",
          "id": "b898755a-268a-4aad-acdf-88572e9d8db6",
          "quantity": 22
        },
        {
          "instrument": "https://api.robinhood.com/instruments/0d38d8ae-76ef-478b-a687-d365c254e554/",
          "id": "86fcb778-0e6b-488b-83a2-42af04619918",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": "1.1300",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8568f187-971f-4d0a-beac-1ea453b8879f"
    },
    {
      "can_open_position": false,
      "symbol": "CKH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0d38d8ae-76ef-478b-a687-d365c254e554/",
          "id": "b1ae7996-da8f-478b-85ee-1ff7e17544ee",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1187ed91-e4b9-48d7-8945-dc73f6435ddd"
    },
    {
      "can_open_position": false,
      "symbol": "SUM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f5027ef8-1ca6-49dc-bb00-c6bfb789f58e/",
          "id": "36221fae-5ed8-487a-8fb7-2e5a9fd8b1c1",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a62a85f9-afee-428b-b8a7-773f4a64f4c3"
    },
    {
      "can_open_position": true,
      "symbol": "EHC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2b4a601d-4976-4ddb-91cf-8a259f634b2c/",
          "id": "6007eca7-00b0-4c36-9215-a9f9cd74ca6c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e75fe55b-6296-4763-b4b9-6f0c0d7270ec"
    },
    {
      "can_open_position": true,
      "symbol": "CDMO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3402e0a3-2174-461e-b186-54312ab45171/",
          "id": "e597965e-8aed-49ac-8fb1-ff4dc7295eb2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "13539084-b2ea-4d1c-88a5-435f23dc7dbc"
    },
    {
      "can_open_position": true,
      "symbol": "SYNH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d38e9079-30ff-45a1-b7a0-1c3e009ef5f6/",
          "id": "49fca9e7-26a2-4291-94be-8336cc54d23c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ad89ec20-a717-42cf-ba2b-099f0df7e238"
    },
    {
      "can_open_position": true,
      "symbol": "GWX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fab96386-1bd2-46df-ba1a-40045ed5e416/",
          "id": "65927eb1-26ae-4958-abe1-d06690870b3d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bf28b840-87c2-451e-b35d-cc07fb72b9c5"
    },
    {
      "can_open_position": false,
      "symbol": "SUM1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f5027ef8-1ca6-49dc-bb00-c6bfb789f58e/",
          "id": "7d8c952b-98ea-4a76-9528-f0db36040747",
          "quantity": 101
        }
      ],
      "expiration_dates": [],
      "cash_component": "12.5700",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "21c029ca-2a0e-41ba-95a4-fd1b0fc9c6b6"
    },
    {
      "can_open_position": true,
      "symbol": "XSPA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0b110133-652f-4f0a-8a52-0c6295319d6a/",
          "id": "3444db75-f97b-40d7-81ca-0e0d23d6a1ba",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "19c5ce7f-4657-44ea-b6a4-2a43b8c373dc"
    },
    {
      "can_open_position": true,
      "symbol": "SDY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/02d07cdc-aa9a-43a6-ad4c-56f68c23d454/",
          "id": "a54b96ce-077b-4488-ac8a-5fb7f3efa1d2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0c572aa4-997c-4677-b917-9b539f5b4777"
    },
    {
      "can_open_position": false,
      "symbol": "VRS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/817885e5-9405-4dab-bfc9-5fa556bbb176/",
          "id": "38fb4615-f0a6-4c87-b0b3-c94dbddc2a5e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dad3fd13-b831-47b0-b1b5-a0ccf597938c"
    },
    {
      "can_open_position": false,
      "symbol": "ORIG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8dee4764-ad53-461b-93d4-f6667fca26cc/",
          "id": "c3f216fe-5063-4b8a-b394-47ea95e79ea0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7b7303f9-c4fb-4453-9f3e-e321669cfb1c"
    },
    {
      "can_open_position": false,
      "symbol": "NTEC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/af631bf4-c00e-4dcd-847a-70f18ac48a8c/",
          "id": "15081a63-a340-4b62-9b2c-f5aa72e70b62",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "10b1d8ca-4852-49c8-89e3-1bf33d1bd54a"
    },
    {
      "can_open_position": false,
      "symbol": "RCKT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b178d43f-b577-43d4-8805-e5485d8cd413/",
          "id": "e32cb477-04a5-45c4-af4f-2110aa5b1b08",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0c487cd5-2052-4ccb-b37f-185fa095c9c3"
    },
    {
      "can_open_position": true,
      "symbol": "CNXM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8236920b-ec5c-4033-9ea3-ea10d2ab7ed4/",
          "id": "b5a0e293-901f-43d7-a763-a23cb4424d54",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0c6a7d54-7cfe-44e7-b88f-9eb8a56d5c48"
    },
    {
      "can_open_position": false,
      "symbol": "UNG1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/51982995-5119-4b6d-b860-f4efa99049dd/",
          "id": "5523ed3a-58bf-4ae3-a252-0cc07ad1d5ae",
          "quantity": 25
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "850c4946-018f-4ec6-941b-b3741691babe"
    },
    {
      "can_open_position": true,
      "symbol": "UNG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/51982995-5119-4b6d-b860-f4efa99049dd/",
          "id": "0010c0bd-d1e0-4b12-9680-4762ca394ad2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "cd02936c-a02c-425f-b456-a2b4d7605aa9"
    },
    {
      "can_open_position": false,
      "symbol": "MEDP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d2734bc7-c4ae-44ab-8098-304207b3ab9e/",
          "id": "b2a405ee-beeb-4b0f-80c0-b5dc1b8ebb95",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9905622b-7fc6-43ed-bfda-37a8b448658a"
    },
    {
      "can_open_position": false,
      "symbol": "LEXEA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2cf00082-f5c0-4381-9e9a-1a8345bfd8e9/",
          "id": "b2fcadcb-259a-4110-87a9-5d1c7dd6ddb8",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fe33350e-8cd2-4e08-abb9-aeba3f90fab7"
    },
    {
      "can_open_position": false,
      "symbol": "NEOG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4f65657d-5d21-48de-8e9c-aa70f69db19d/",
          "id": "bcf287a8-1e5b-49ee-a78e-ab293e1588a6",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4f2d9f75-e836-4036-8e36-0a18b3606a9c"
    },
    {
      "can_open_position": false,
      "symbol": "VKTX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f25b70aa-062a-45ff-937b-364444f0f2ce/",
          "id": "2c25fba2-3b59-48c0-a99c-a04a8b73c312",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e001e9fd-269e-478b-abc3-41d62d2e06d4"
    },
    {
      "can_open_position": false,
      "symbol": "SRRA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6014de6e-35ec-40e7-8c3d-32d67bd107c9/",
          "id": "52df9545-0fbe-4031-bad0-2f8f20897f81",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fbbbb615-2adb-4741-8dc8-15f44667fe65"
    },
    {
      "can_open_position": false,
      "symbol": "SE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d388bec4-921e-4ec2-b9f3-8f512c5b0484/",
          "id": "2f15e5dd-cd35-4fef-a94c-578c51251b4e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5d96db10-94a8-4559-b844-cffda1a64509"
    },
    {
      "can_open_position": false,
      "symbol": "PTI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f84501b3-307a-4031-8226-ca9105f9c7d3/",
          "id": "ac2df160-b685-4a8f-b60b-a7239af0b103",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3dda3ece-a484-489c-8f89-25d20310e73b"
    },
    {
      "can_open_position": false,
      "symbol": "NXTD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1e6a8e57-38ed-4954-bceb-91f75212cb6d/",
          "id": "e5baf494-7338-4f97-b3eb-44135d779821",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b353514b-760a-46c4-a3a4-5346d0d48528"
    },
    {
      "can_open_position": false,
      "symbol": "MPO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ab403a56-770a-4f29-a485-48b1ef9a210d/",
          "id": "2e6b7922-4ce1-476f-8997-a1c2ec94e141",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0bd5822b-0924-40e8-920a-a15b0f0dddd4"
    },
    {
      "can_open_position": false,
      "symbol": "DSKE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7409d908-a826-4086-bbc4-52dc88a6cfdd/",
          "id": "5b1e3368-0391-4f68-9224-9be9aa108814",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "368a119e-8354-4fb8-a560-9ab9fdac658f"
    },
    {
      "can_open_position": true,
      "symbol": "GSUM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c9b9311d-3a86-4ce0-8067-440598142be3/",
          "id": "166286ec-6aaf-4857-a749-b6b7bc71d3cc",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "36c262a9-303e-4303-b6b7-460f887309b0"
    },
    {
      "can_open_position": false,
      "symbol": "DPW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6bff5af5-3c35-460e-b020-ee158d42ca99/",
          "id": "0a03fae1-9579-4915-9ca1-275212ec1476",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ffc1f202-f73b-4dc9-97e6-69158a74e82d"
    },
    {
      "can_open_position": false,
      "symbol": "ARDM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d838f95b-fedc-4625-a05e-b52286660668/",
          "id": "403c3bae-d265-4273-91f4-29c1a3eab702",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bb60c41e-6dd8-403f-b00e-a69edbb78663"
    },
    {
      "can_open_position": false,
      "symbol": "ADSW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5d0c9a72-5267-4974-8a22-77924f414690/",
          "id": "80ac0e40-2e13-4781-8f12-46903e953ac6",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "99627c7c-55ee-46a3-b3db-34e7b3ba0089"
    },
    {
      "can_open_position": false,
      "symbol": "BDX1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5357bb0b-105e-4218-bc67-e9c9ca4a1eda/",
          "id": "42c339f4-b01e-4a11-b2e6-95ba0d941241",
          "quantity": 50
        }
      ],
      "expiration_dates": [],
      "cash_component": "22293.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dab3545b-2f37-4ff3-b7a2-4677bedf91be"
    },
    {
      "can_open_position": false,
      "symbol": "NEOG1",
      "trade_value_multiplier": "133.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4f65657d-5d21-48de-8e9c-aa70f69db19d/",
          "id": "2a151444-8122-4f36-a305-925e04493867",
          "quantity": 133
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a07d3361-fb4b-453a-a993-c163984f4817"
    },
    {
      "can_open_position": true,
      "symbol": "NTR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/db98f585-0d77-4244-8d25-e0bcd4222fc5/",
          "id": "a4ea8a15-4c63-4b9f-a3ee-a353925abfd0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5ee23f60-47e2-4d24-a26d-0450ef4767d6"
    },
    {
      "can_open_position": false,
      "symbol": "FNKO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2d1c7288-9c18-400c-afe0-e910d0e4589c/",
          "id": "064ec0f9-81cb-42eb-a798-3498b4e86a67",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ad56e479-a7eb-4624-9a23-b801b8dc1af9"
    },
    {
      "can_open_position": false,
      "symbol": "SWIR1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ed6698f7-5f3d-4846-b5fe-79567a5ecd83/",
          "id": "662ea403-1899-40c6-8ccd-750be9eaf66b",
          "quantity": 18
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e463cccd-bc5f-4c6b-a5ea-1774fafd7917"
    },
    {
      "can_open_position": false,
      "symbol": "RDHL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c563c297-0575-46bb-8c52-e0edae4fdd33/",
          "id": "a02cd3c0-aa7d-4f21-8e21-b7359903c1e1",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8fa422d8-680c-4667-a1df-287c9702ce0a"
    },
    {
      "can_open_position": false,
      "symbol": "VIVE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ed56fad1-0e75-4dd2-b7ab-b8d3f6ecf211/",
          "id": "95a226bf-846c-4339-bffa-de87183f08ba",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0e0fc03f-a6aa-4695-82a7-f31a2c9dd945"
    },
    {
      "can_open_position": false,
      "symbol": "VBIV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c16e7b11-4e98-4b45-851a-311f5eba0339/",
          "id": "1f0a3cf3-857e-4981-8f41-767ff6fa2afc",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c8dd7487-b392-4a9a-8937-979419905da9"
    },
    {
      "can_open_position": false,
      "symbol": "SSC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f20eb7f2-8a1f-41e4-9d50-259f44be1de3/",
          "id": "e33814e6-2a8a-499b-88c8-29a0889bf28c",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "70ef0c66-4594-46ba-949b-69ba9e4e4ed7"
    },
    {
      "can_open_position": false,
      "symbol": "RESN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/071ec39e-35de-4a0f-8379-423f2c24221b/",
          "id": "88b34d51-a363-4ad0-bfaa-246213252e6d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "537a9ab2-a79a-4e4a-9eb8-93f820f4505e"
    },
    {
      "can_open_position": false,
      "symbol": "PVAC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/616c1e82-2b44-4143-aaa5-0d8c8f11d271/",
          "id": "dda34811-17b1-442a-ab96-c3de0382dd62",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3c6896f5-edf3-4710-bba2-1dd19db8b943"
    },
    {
      "can_open_position": false,
      "symbol": "LAKE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/44db434a-05c5-4793-8448-06eefd95e671/",
          "id": "fc1d0b23-5c43-4278-89ac-84ad41db04f5",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "447f5448-2747-459f-b7b1-582850e2774d"
    },
    {
      "can_open_position": false,
      "symbol": "LIFE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/52abcd8f-824e-4476-8807-e98df64d8bc6/",
          "id": "f2b149da-fd9b-41e7-8c30-dfaed49655fb",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "17a0bcd4-6e66-4f57-8c95-c54a2a29f10e"
    },
    {
      "can_open_position": false,
      "symbol": "AKCA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cd340269-e3c4-40df-90f3-208fe82d04c9/",
          "id": "f676a6a1-64c0-47af-ac60-ae33999d2820",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "12e1aba5-f7e1-43ca-98e0-32a031f5eb22"
    },
    {
      "can_open_position": false,
      "symbol": "ATNX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2e7d78b4-52da-4cdb-9742-f298d2261e4a/",
          "id": "22cf4529-5ea5-48e8-b03b-695d85c84e6b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9015e2bf-7193-488a-95c0-d2113919ed26"
    },
    {
      "can_open_position": false,
      "symbol": "PATK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/45f364ae-09d4-497c-b0b1-b985cf7d752f/",
          "id": "09f3d871-ccd5-4f73-9064-f8c8b6313823",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a0e1c437-1026-4767-960d-bcfea9cb6852"
    },
    {
      "can_open_position": false,
      "symbol": "PMTS1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/feaa53b3-8033-4d72-93ec-4fed9e35a62d/",
          "id": "1fe5689b-56eb-494e-bb16-b4f73594bef0",
          "quantity": 20
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6a914d4e-961a-4c1d-b660-c1359dc0675b"
    },
    {
      "can_open_position": false,
      "symbol": "PATK1",
      "trade_value_multiplier": "150.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/45f364ae-09d4-497c-b0b1-b985cf7d752f/",
          "id": "24655b1c-b82a-4d02-9a77-0886f239091f",
          "quantity": 150
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f414dc0b-aedb-46a9-af00-6537600c8139"
    },
    {
      "can_open_position": false,
      "symbol": "NBR1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/16f83e97-40d5-4a24-ab83-770be8aca9c9/",
          "id": "00d825b2-e651-4837-b94e-c6e393de003d",
          "quantity": 68
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "33093b0e-e419-458b-9ce1-8fcc989f67de"
    },
    {
      "can_open_position": false,
      "symbol": "INAP1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/14290213-51ba-4678-8e3d-0f642381d26c/",
          "id": "b1e72498-5be3-4255-9384-089a25124a9a",
          "quantity": 25
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bcceea65-05bb-40a3-9473-eec4758c4048"
    },
    {
      "can_open_position": false,
      "symbol": "TPIC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ca86a109-938c-4b67-a147-3a5a5a6068c3/",
          "id": "7557b77a-2d92-4f89-9513-a54fd15f858d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "77b8d854-8408-4060-97db-f6039f4319e7"
    },
    {
      "can_open_position": true,
      "symbol": "SES",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a922272c-6c42-4324-bb2f-7ec85b928c0d/",
          "id": "25212e0e-983e-445a-9d8f-d5343bd4ed6c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-05-18",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "cf3a208c-3d7c-4e0b-913f-b0a0916a1008"
    },
    {
      "can_open_position": true,
      "symbol": "HMNY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a3fc9337-188d-4869-90d8-81e01ae8f090/",
          "id": "cf957042-ce5b-415d-a695-70bbdcd2265d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "36eadb63-cf48-4a55-8603-c1c58ed3d5b4"
    },
    {
      "can_open_position": false,
      "symbol": "CBSH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f2395b08-509d-4082-956a-49a68c4448a2/",
          "id": "ead0e8d3-d2c4-454d-b13f-ee18baf4d287",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "26470f59-442e-4be2-a22f-8ccbf3217c16"
    },
    {
      "can_open_position": false,
      "symbol": "BOLD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/68963afb-942c-4179-b352-851c7d1d548e/",
          "id": "46624767-7430-44d2-9ba4-07b669fd72dd",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "224f07fe-6dc0-4327-a274-0589320706f2"
    },
    {
      "can_open_position": false,
      "symbol": "ARCT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2479c4e0-59e5-424b-b843-a4d32a2835d8/",
          "id": "73c1e9fe-b667-4aa5-b32b-79fcbb2971be",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "daeec761-3bd5-4ba1-886f-0cf3f7db9813"
    },
    {
      "can_open_position": false,
      "symbol": "SEND",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6bf48558-fe67-4156-9b87-6a26b3d8d4c6/",
          "id": "d4b39862-9f19-4d8b-8977-68d3abf252b4",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "615a8181-ede5-44ce-a792-de0401505bf6"
    },
    {
      "can_open_position": false,
      "symbol": "SOGO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/46ae1e8f-7b5e-4b1e-994e-414e2a6e9480/",
          "id": "7278246d-4cc8-45f7-961b-f25a76edd8e4",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6740e56a-71e7-44e5-8753-7377445807b5"
    },
    {
      "can_open_position": false,
      "symbol": "GDS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e712ee99-10fc-4c64-87f6-5a2a3ea2be47/",
          "id": "975e863a-f063-4840-a65e-f820b23964fc",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "88e16112-a7be-4b58-902f-4dce4092b2cd"
    },
    {
      "can_open_position": false,
      "symbol": "1RGLD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f98a7251-ab88-4056-9950-3782b2e29d86/",
          "id": "7da5d961-ce37-4cc4-9272-e80b89326135",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6826b4c9-fa46-4600-8fa8-b94006e1f7a5"
    },
    {
      "can_open_position": true,
      "symbol": "SHYG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2a1e7b78-e70b-4630-ba9f-318a312d034b/",
          "id": "d891f212-1569-4b9f-b944-50b200eeb303",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2b8aa663-8080-45b2-b894-651f0edec286"
    },
    {
      "can_open_position": true,
      "symbol": "EEX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5344a4b4-ce3e-469b-9ae7-7fdfb3723516/",
          "id": "0bb642f2-b646-4dc7-ab2a-b5fb1d996466",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1c197b23-d7ed-4217-9032-b31d9ee6df25"
    },
    {
      "can_open_position": false,
      "symbol": "ALEX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/707f3222-7aac-460d-8f7d-2f434d3475d7/",
          "id": "392c524e-c779-4749-a646-f6a8c20a9125",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "02a583f8-f695-4743-af9d-de6f6ffa1c9e"
    },
    {
      "can_open_position": true,
      "symbol": "CASS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8fcf0ad4-faa3-4394-8977-483dbb87768b/",
          "id": "47d95d9f-bbce-4dd9-ada9-acf9fcae54ba",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5a0f8786-d9e0-489b-9341-4eb7dd4740d5"
    },
    {
      "can_open_position": true,
      "symbol": "CEIX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/02d5fe34-0368-469a-ba99-d007bba8e6aa/",
          "id": "07d98a17-1cfd-420e-9ec8-8a75541fc502",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4f2c41e2-896f-4984-9d1a-259390d840d9"
    },
    {
      "can_open_position": true,
      "symbol": "DLPH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/31604ee7-98e2-43a5-a03b-136599c0fe7d/",
          "id": "e9754dfd-ee21-4b26-b4e6-5830fcc0ff51",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "64303814-09f4-4181-b116-9316291553f2"
    },
    {
      "can_open_position": true,
      "symbol": "SFIX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b459a0bc-0d51-448e-934d-a776b030c31e/",
          "id": "5c1124e9-efb9-4682-9e88-9aa166024fde",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fc3cd1e7-00f8-4fef-9b1f-9f90e1a31c54"
    },
    {
      "can_open_position": false,
      "symbol": "LOMA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/75e959db-fd91-4cf1-9569-489520ebd700/",
          "id": "16a49e41-87d1-4473-92e3-dc7cab5c504f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b3650384-2bc2-418d-9f1b-8a0d0cb38ab0"
    },
    {
      "can_open_position": true,
      "symbol": "KSA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/538a2314-6fad-4e0f-8d00-043a2ef74c3d/",
          "id": "83260c11-9b6f-4f8d-8e37-3221291cb540",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "59cbef6a-6fe7-4e9f-9a00-951d9bae8823"
    },
    {
      "can_open_position": false,
      "symbol": "ABLX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/de3723c1-022b-403a-9cae-96080af5e19b/",
          "id": "10177084-5717-45b2-bb51-c3e159b5309e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e4e49531-0d16-4739-a411-20cd87eb93b4"
    },
    {
      "can_open_position": false,
      "symbol": "1AZO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7b63cafd-9b29-4b52-a567-ebc6282f977a/",
          "id": "d1cad4e0-2aed-4a93-bb10-cc70fa9fa172",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6b44c8f6-5032-4668-b623-d6267aabdbce"
    },
    {
      "can_open_position": true,
      "symbol": "RIOT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f71123c6-d1de-4e1f-8045-55c474bd54e1/",
          "id": "32915806-be51-424c-aca3-33513cdba40b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f80d6a24-52bb-40e9-8012-e311c58ccd1e"
    },
    {
      "can_open_position": true,
      "symbol": "APTV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/04920359-1400-4845-95de-39902b83f8ea/",
          "id": "110292a4-55d8-4d91-a897-398ac037df89",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "78e40373-535f-4c10-a235-985c61e4e1a0"
    },
    {
      "can_open_position": false,
      "symbol": "FHN1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/73bfe00e-39dd-434a-afb9-3735cd49e419/",
          "id": "28153740-9182-4631-afda-8e9c7a6293db",
          "quantity": 217
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dd82fd36-b6f2-4024-8ad5-dc1f59d9e581"
    },
    {
      "can_open_position": true,
      "symbol": "SAIL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ffaa0f48-d75b-475a-ba24-9c3607e317f6/",
          "id": "f8d72b8f-a7cd-4d27-9871-38cb9cb17307",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4d94ea3b-5012-40fb-8646-594df16fcf53"
    },
    {
      "can_open_position": true,
      "symbol": "VNTR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ac14d1b0-3b22-4766-84b3-3bb8bd26b90c/",
          "id": "4c8a95ef-4f10-4b84-a46b-43913903d825",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "34ff5d6a-f5c1-44de-862d-6a20873ac4be"
    },
    {
      "can_open_position": false,
      "symbol": "1AUTO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/36095356-7369-467d-969e-62d0bb3c5e40/",
          "id": "8def031f-3820-417f-aebe-1b338f233cbc",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "18ac7c77-4c67-4a96-b2bd-534b23e344e6"
    },
    {
      "can_open_position": false,
      "symbol": "USHY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/502b7aa0-6383-4cbd-a636-9e153d26ca9f/",
          "id": "48827e90-b7a9-4b6c-9666-67fa1a8a4fc2",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "270d61b1-85d5-40b6-baec-02078c5e6c45"
    },
    {
      "can_open_position": true,
      "symbol": "MDC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d7355ec8-07e2-47e2-88d1-211bd965e2e1/",
          "id": "cb6b456f-e480-47f5-b0b2-d897fc4008ef",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2f0b9952-6028-4d1b-9a90-8788b6a40e2c"
    },
    {
      "can_open_position": true,
      "symbol": "PQG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8b6f26fb-d0f8-47a9-be0e-00130b757850/",
          "id": "67cd87ab-dcdd-4d51-9954-6c6ec2a2253c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0dfbb96a-53ef-4aa3-aa0f-17987e502967"
    },
    {
      "can_open_position": false,
      "symbol": "GOL1",
      "trade_value_multiplier": "250.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/547eeca6-56b5-4b04-af33-9e30aa1a8ee9/",
          "id": "c603394d-9d35-4e22-9c7d-1c5d73c880de",
          "quantity": 250
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e6777340-b10a-411a-9142-e016a12752ae"
    },
    {
      "can_open_position": false,
      "symbol": "AGI1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f2c766ac-eeef-4129-840f-d112c968ce7a/",
          "id": "cad64c3d-7d92-46e6-ac67-09b5a2f4f081",
          "quantity": 138
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5488e585-85a9-4d77-a608-97fd9ac7ec48"
    },
    {
      "can_open_position": false,
      "symbol": "VALE1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6bb4c9af-a06a-4f28-8f69-b4f3a0ce8da7/",
          "id": "3c409e9f-efa9-44a8-80ae-231ea8695e6f",
          "quantity": 93
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b1e18e6c-3243-4cd5-a0be-f9b0bea3159c"
    },
    {
      "can_open_position": false,
      "symbol": "ALEX1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/707f3222-7aac-460d-8f7d-2f434d3475d7/",
          "id": "b353063d-6aa9-412f-8ed3-b5127389ef24",
          "quantity": 135
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "05a0d006-2c7a-483e-b1ad-4e90c3a4f806"
    },
    {
      "can_open_position": true,
      "symbol": "WPP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/aca2339e-46b9-4cbe-83cc-c5807caceb25/",
          "id": "cda85351-6e00-4219-b35e-16a152f19e3d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "95f5d58d-1b60-4f1d-8faa-2a5fc3dd35be"
    },
    {
      "can_open_position": false,
      "symbol": "PNTP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9c917ff2-07db-4067-82dc-c61ea3700c04/",
          "id": "844d14c4-11af-4bcc-9e37-14b4da56189a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9adb8c55-676f-4f15-994c-82d996d0b49b"
    },
    {
      "can_open_position": true,
      "symbol": "RELYQ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/37d6afeb-9630-4ece-bea7-2427662b1565/",
          "id": "1f7e020f-7db0-472f-b09b-3dd36ed71030",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-07-20"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "006e0d20-351f-431e-be4c-d06de4ed7560"
    },
    {
      "can_open_position": false,
      "symbol": "CBSH1",
      "trade_value_multiplier": "105.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f2395b08-509d-4082-956a-49a68c4448a2/",
          "id": "1633be45-e592-4feb-95dd-2813677b46d4",
          "quantity": 105
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1825a4d7-27cb-4b4b-b19c-589972338427"
    },
    {
      "can_open_position": false,
      "symbol": "CASS1",
      "trade_value_multiplier": "110.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8fcf0ad4-faa3-4394-8977-483dbb87768b/",
          "id": "77c8009a-3d34-4134-a6d9-e60434671bdc",
          "quantity": 110
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "52a1a557-bb05-4434-aaf5-33320d8d53f1"
    },
    {
      "can_open_position": false,
      "symbol": "MDC1",
      "trade_value_multiplier": "108.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d7355ec8-07e2-47e2-88d1-211bd965e2e1/",
          "id": "8cdd335b-b247-4ea7-823d-9018a2e0a602",
          "quantity": 108
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "68a1e028-5588-472b-a5d9-8d1c2abb3490"
    },
    {
      "can_open_position": false,
      "symbol": "APTV1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/04920359-1400-4845-95de-39902b83f8ea/",
          "id": "b77cc632-4616-468e-b984-aced34cf3fa5",
          "quantity": 33
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ae7da2de-d197-410f-bb48-b2a23615a3e3"
    },
    {
      "can_open_position": false,
      "symbol": "1MSFT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
          "id": "fa558897-7c2b-458b-8ae7-aad70a8d5c44",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "a408f79c-7789-475d-b50a-098b6ede5f45"
    },
    {
      "can_open_position": true,
      "symbol": "SPY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/",
          "id": "6c3bf803-ec29-41c1-b721-3471351fc61d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-28",
        "2018-03-29",
        "2018-04-02",
        "2018-04-04",
        "2018-04-06",
        "2018-04-09",
        "2018-04-11",
        "2018-04-13",
        "2018-04-16",
        "2018-04-18",
        "2018-04-20",
        "2018-04-23",
        "2018-04-25",
        "2018-04-27",
        "2018-04-30",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-06-29",
        "2018-07-20",
        "2018-09-21",
        "2018-09-28",
        "2018-12-21",
        "2018-12-31",
        "2019-01-18",
        "2019-03-15",
        "2019-06-21",
        "2019-09-20",
        "2019-12-20",
        "2020-01-17",
        "2020-03-20",
        "2020-12-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "0.00",
        "below_tick": "0.01",
        "above_tick": "0.01"
      },
      "id": "c277b118-58d9-4060-8dc5-a3b5898955cb"
    },
    {
      "can_open_position": false,
      "symbol": "LEN1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6a98d17c-ca46-429e-b1fc-b5fb838f3674/",
          "id": "f7c00d58-958d-4044-8a9f-43a79bd7e29a",
          "quantity": 2
        },
        {
          "instrument": "https://api.robinhood.com/instruments/a5c82434-4cbd-4385-a4de-480939e6a4be/",
          "id": "8de7f7e1-41bb-4d17-ab1f-42bac1e9aaf9",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "69bd4d3d-3e58-4924-8f4a-667d1d52f164"
    },
    {
      "can_open_position": true,
      "symbol": "SNAP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1e513292-5926-4dc4-8c3d-4af6b5836704/",
          "id": "78fcea49-800d-47f5-85cb-e7a5d484a8b4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19",
        "2018-12-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "ef19159f-22b6-4a14-bc1a-477810fd5a4d"
    },
    {
      "can_open_position": true,
      "symbol": "APC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7a3a677d-1664-44a0-a94b-3bb3d64f9e20/",
          "id": "63970172-f0d4-4fac-8bc7-778d85f217c3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-09-21",
        "2018-10-19",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "904791e2-f72d-4ce6-aaba-df4208a85ce6"
    },
    {
      "can_open_position": true,
      "symbol": "WMT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ad1edbfb-19c8-4939-be66-1f09bd65b902/",
          "id": "1272d797-b155-4889-b3ca-c35635736479",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "fa2f0d5e-8d90-4459-a5cd-1cd55e4c1e7f"
    },
    {
      "can_open_position": true,
      "symbol": "BB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/62823dfa-199d-4b1d-9842-b34ce40485bd/",
          "id": "4f93704a-7371-4510-b0f7-a339b293b376",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "f6ed0248-7f5f-4c80-bca3-ea604d0b5a5e"
    },
    {
      "can_open_position": true,
      "symbol": "ANF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5a17af78-fa9f-4714-84fd-4b3a40a0e497/",
          "id": "c21e0ce8-0260-41d6-a66f-7920d57398f8",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "b30d45b6-c85c-4f64-9a58-386f08671f87"
    },
    {
      "can_open_position": false,
      "symbol": "ANDX1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cc49cc17-abbf-4fb6-a40b-a86edf571ad2/",
          "id": "bcf90301-269f-4e8d-af28-5fb22b2c783f",
          "quantity": 52
        }
      ],
      "expiration_dates": [],
      "cash_component": "14.6000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d8acf24b-1dc4-452c-90d7-78b929b344ea"
    },
    {
      "can_open_position": false,
      "symbol": "WLL1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/152acd78-a672-4bf7-8af2-ee913bcbd778/",
          "id": "e2556688-934c-4a2a-95d0-5dbf812b3c4d",
          "quantity": 25
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "1537f37f-c94d-4af7-b5ad-9e1c3d46be12"
    },
    {
      "can_open_position": false,
      "symbol": "VNCE1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b8a54287-d33e-4403-af56-f50088e1ccf9/",
          "id": "19fbdf29-fb76-4100-875c-f89b848e027c",
          "quantity": 10
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fb0486a1-548b-439b-9905-49f5c3c273c1"
    },
    {
      "can_open_position": true,
      "symbol": "TSLA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e39ed23a-7bd1-4587-b060-71988d9ef483/",
          "id": "6a1ea956-e685-4e45-abfd-1d69a7f9ed23",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "0b29f27a-fbf1-4e11-b887-5597d422957f"
    },
    {
      "can_open_position": false,
      "symbol": "TNDM1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4966fbab-38d6-4eaa-969f-e26e262d8e20/",
          "id": "ae2f6390-b8f0-49a8-bdc4-2d520d6ee8ee",
          "quantity": 10
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ef6dd819-798d-407b-a44c-9669c48166d8"
    },
    {
      "can_open_position": true,
      "symbol": "VGR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cda06344-ac98-46a9-a0c5-260164c9f1c0/",
          "id": "3f63d284-91d4-4198-905b-1c8cf36198d1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0642891b-19cc-464c-9c31-6e3636aeead5"
    },
    {
      "can_open_position": false,
      "symbol": "TWO1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4b1a6613-e874-4f3d-9bd4-aa49561e8e9c/",
          "id": "a5e76910-46fa-444a-9a68-12fccbaeceef",
          "quantity": 9
        },
        {
          "instrument": "https://api.robinhood.com/instruments/97aee052-669d-4288-bb1b-4208e4632a1c/",
          "id": "ebe3f8c7-8db7-4ac7-8658-19d24660a647",
          "quantity": 50
        }
      ],
      "expiration_dates": [],
      "cash_component": "8.1100",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a0dcbfb7-b293-473d-ad5d-78ddad8c7a01"
    },
    {
      "can_open_position": false,
      "symbol": "HOMB1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/85a78a36-f1d7-4eab-9c02-4cdf66efe420/",
          "id": "d9d06af8-cb2e-420e-8bc7-77a4d48f3740",
          "quantity": 201
        }
      ],
      "expiration_dates": [],
      "cash_component": "327.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "cb53c771-dd5d-4ae1-9065-dba0a53d7b32"
    },
    {
      "can_open_position": false,
      "symbol": "INVH1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/890f5975-31c7-4a49-ab5d-98fe0b8ab238/",
          "id": "e772d45e-a809-4a2c-9edb-349361deee31",
          "quantity": 161
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c21db024-88ff-432f-9084-788fdcbf5396"
    },
    {
      "can_open_position": true,
      "symbol": "SBGL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0a506edc-48db-4cdb-8749-8e6c78501f26/",
          "id": "445185b3-cfe2-43cd-83ff-79040164bb17",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fa6921c8-14b4-476e-befe-ba3f80bf3d88"
    },
    {
      "can_open_position": true,
      "symbol": "IQV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/337dadde-95ac-4bc7-8e0a-78452e3f3e38/",
          "id": "1251b8f2-0fb9-4b92-bd8b-6a80023273f4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e11e62b4-3036-42a6-b2aa-c1f156569da7"
    },
    {
      "can_open_position": true,
      "symbol": "PLUG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ef99a2c4-adb2-4163-a2df-2d5722cc75b7/",
          "id": "a43ba886-861f-4010-a2ce-2dfd8464e6c0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "bfd42df1-e4e3-46fc-aee0-0f1dad954482"
    },
    {
      "can_open_position": true,
      "symbol": "PE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9a374f46-9cd4-46ab-a34b-d3d91191e413/",
          "id": "0ca8685b-2ea0-4765-8c1c-cbe4eff075f2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a73338f2-a68e-46dc-96a2-cd913883b971"
    },
    {
      "can_open_position": false,
      "symbol": "ORIG1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8dee4764-ad53-461b-93d4-f6667fca26cc/",
          "id": "5a046333-587b-4607-893a-c050e654a97a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5524bff1-242c-4865-92a7-7a2ed0b90aef"
    },
    {
      "can_open_position": true,
      "symbol": "PCAR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/225b8ff3-97c1-4665-beee-184ce2d1f293/",
          "id": "957cb0e6-d27d-4550-b69b-487584eba0e1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3aaa35ac-58c6-4a85-9426-a9cf85aa589c"
    },
    {
      "can_open_position": false,
      "symbol": "COLB1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/94e679f0-6a1c-43ee-be98-f22bf50b026f/",
          "id": "d7818aa0-f27f-43b6-ae42-62e56f3a7dac",
          "quantity": 64
        }
      ],
      "expiration_dates": [],
      "cash_component": "12.6000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f4d6bdb5-c7ed-4bfe-9ef5-bf63c6e0c163"
    },
    {
      "can_open_position": false,
      "symbol": "SFNC1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/190bb7a5-3b7c-48bf-9411-cffb76250a75/",
          "id": "b16dd572-60ee-49c2-9b90-edfa6dbff489",
          "quantity": 39
        }
      ],
      "expiration_dates": [],
      "cash_component": "511.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d7254460-c690-411e-b5e6-4248a22695a6"
    },
    {
      "can_open_position": false,
      "symbol": "PBW1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0301c923-0af3-4be3-8f48-15b4ff4ff84c/",
          "id": "8fa40f9a-b3fa-4710-a138-8f6add8436f7",
          "quantity": 20
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3af88b62-cce5-4510-a812-5c90a7a4ba54"
    },
    {
      "can_open_position": false,
      "symbol": "MARA1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9a1ea21e-f9b3-4e96-8b1f-c2bcd9fa4908/",
          "id": "65282d34-2908-43cd-a6b4-e0e684f7a462",
          "quantity": 25
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "61483de9-6cd8-4f7d-bb0e-f3fcdfb09840"
    },
    {
      "can_open_position": false,
      "symbol": "MRIN1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3c684460-7157-4dbe-8908-6d7a47eb9cdc/",
          "id": "f375d62d-0969-40e4-b27d-cce9bc8b77cf",
          "quantity": 14
        }
      ],
      "expiration_dates": [],
      "cash_component": "0.5900",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8a230d35-3e6d-459c-80bb-4fa99681463c"
    },
    {
      "can_open_position": false,
      "symbol": "CTL1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/977cb57c-e72e-43d8-8a50-fb0fc526b976/",
          "id": "164042f5-8ffd-4073-9928-52f7d56c599a",
          "quantity": 142
        }
      ],
      "expiration_dates": [],
      "cash_component": "2650.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "27a84fa5-c57f-4914-8391-ae83262e4b7a"
    },
    {
      "can_open_position": false,
      "symbol": "LODE1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/56b243d7-b474-431f-8c1e-5655a576235a/",
          "id": "cc98e370-f944-408c-a0d4-efa952a1140b",
          "quantity": 20
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "49aadaac-d264-4624-bd01-a936dfc3b1a7"
    },
    {
      "can_open_position": true,
      "symbol": "JACK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cfda6fca-4e38-4eef-809e-a2e71eb30fee/",
          "id": "acd92535-b0f7-422b-8a43-79e6342b22dc",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "40f86d6a-7cdc-4050-9e6e-7adde4bd4d77"
    },
    {
      "can_open_position": true,
      "symbol": "FNF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7ef6d916-2a23-4118-81cc-5b565d5c9a89/",
          "id": "ffe035b6-fb4b-40b4-84f3-cab44be509ff",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "39b04e83-5f90-44f4-83fd-0839a10ddcf3"
    },
    {
      "can_open_position": true,
      "symbol": "OCSI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/10b83eab-349c-408d-9700-1e50aba798c2/",
          "id": "461274d6-59d1-431a-a5d1-392513a7d93d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3274bc51-c8ff-4f42-a752-b239be54e8f2"
    },
    {
      "can_open_position": true,
      "symbol": "OCSL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5a8e1bf3-14e6-4285-a1d3-08d870729e88/",
          "id": "44ac3151-959c-40d8-9c62-81a28f0dfc96",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1d854b76-f9c8-4d26-bedc-822ca77a2077"
    },
    {
      "can_open_position": true,
      "symbol": "F",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6df56bd0-0bf2-44ab-8875-f94fd8526942/",
          "id": "3951cc4c-e068-4a48-810c-35f5fb5681d5",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "fb22990a-7fd7-45ff-b4a5-cfade2238754"
    },
    {
      "can_open_position": false,
      "symbol": "MAXR1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/76f08b22-e796-4608-a04f-eaf7aa75cbf3/",
          "id": "0d35af31-5771-42c2-8cd6-64697456f401",
          "quantity": 31
        }
      ],
      "expiration_dates": [],
      "cash_component": "1750.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "14dfc716-b862-4678-abca-686e17f5cd22"
    },
    {
      "can_open_position": false,
      "symbol": "CYTR1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7d4b799b-3c23-4591-bc2d-76902d405af8/",
          "id": "83d7723d-0304-48ce-8c84-0f0c10da4221",
          "quantity": 17
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "02ba3867-b75d-4ddc-83b3-24d77462fb6f"
    },
    {
      "can_open_position": true,
      "symbol": "BTG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ecd90ce1-66d6-490c-ba80-c855cc40b249/",
          "id": "fc1355ad-ff6c-458e-99ce-03731c964fa0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c72e869f-9130-4769-ae4a-76be7d3c7ebe"
    },
    {
      "can_open_position": false,
      "symbol": "CZR1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f3703f80-d9f5-493c-a7ce-8f32fe25422e/",
          "id": "e1e1e9ff-5095-4293-9279-8c82a9ea760c",
          "quantity": 163
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "64ba8052-5bf1-4aef-9828-96b3dea723ab"
    },
    {
      "can_open_position": false,
      "symbol": "BAP1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4499ef80-55f7-4c21-9e21-25b0321ea0e1/",
          "id": "ce9b5f72-1cdc-42fc-aa46-281ece16ec98",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": "483.5400",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "573c61ea-5f5c-4f1f-ba16-9f84ae4589af"
    },
    {
      "can_open_position": false,
      "symbol": "ASTC1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/812aae45-eeee-4c63-b44e-0778fd51fcfa/",
          "id": "128fe6ba-74d3-4a99-90fa-4728b38a1b38",
          "quantity": 20
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9d5bac6e-7e10-40bc-ae7b-218eae159c47"
    },
    {
      "can_open_position": false,
      "symbol": "ESV1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/97fe3126-6840-4d25-9bd8-fbf71596dea1/",
          "id": "eb486a4c-ca85-4c4a-8d79-a48189a9c9c6",
          "quantity": 160
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "56906bc2-fe53-4647-95c0-8666aa36288c"
    },
    {
      "can_open_position": false,
      "symbol": "BKI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/00589ac3-0b7d-4afe-a6e7-909ff4cd0f99/",
          "id": "c5103c15-b0ed-4c6e-b311-fd3d2871145a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b019f003-fe0c-43f2-a6d2-4e8bf280c1c7"
    },
    {
      "can_open_position": false,
      "symbol": "ARCT1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2479c4e0-59e5-424b-b843-a4d32a2835d8/",
          "id": "57a7665f-e65e-4586-94d9-3e8236bcb028",
          "quantity": 14
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b27f92e2-2a4a-444c-8906-3f1157034dd4"
    },
    {
      "can_open_position": true,
      "symbol": "NFX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/98ff1e23-fdb2-410e-8d22-cbaacd7ed90c/",
          "id": "2c26611a-b1e7-4133-8c6d-148a0553fd06",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "cfd54e9d-1dda-4733-a3c6-b25ef43e5d45"
    },
    {
      "can_open_position": false,
      "symbol": "RHE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/140034e8-0916-493e-aef0-5ad9a8544f21/",
          "id": "33643882-c421-43a2-8bb8-0daccc70c045",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "759c17ee-0f9d-4ec5-b0da-710c2f67ff43"
    },
    {
      "can_open_position": false,
      "symbol": "STL1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8b386cd4-e506-4995-bbee-3af915a9c3b6/",
          "id": "99eba01c-fb3f-4702-a1b9-441a6f78c4b7",
          "quantity": 87
        }
      ],
      "expiration_dates": [],
      "cash_component": "12.1400",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "77a38c1f-d13f-4c59-9079-f89e2401b51f"
    },
    {
      "can_open_position": true,
      "symbol": "AUTO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/36095356-7369-467d-969e-62d0bb3c5e40/",
          "id": "9a6d3099-e0e4-48d6-a942-da8c17b56942",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6768a892-7230-44d9-9d44-192c4d2c13f7"
    },
    {
      "can_open_position": true,
      "symbol": "AY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/84b06f65-152e-4fb8-9251-e118ab66a11d/",
          "id": "c3e939ad-c43c-4867-821f-a4b318ee1e76",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "22041d1e-07a8-4ead-a094-688cbd753ab0"
    },
    {
      "can_open_position": false,
      "symbol": "ALQA1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9d10d91b-934b-4cbc-872b-3d1725c34c06/",
          "id": "b840c084-7a91-4253-a341-1bd450c8e19e",
          "quantity": 10
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "40c49e49-4a9d-4e8f-b3fb-c7b56cd7629d"
    },
    {
      "can_open_position": true,
      "symbol": "AGI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f2c766ac-eeef-4129-840f-d112c968ce7a/",
          "id": "f9f3129c-b3bd-49dc-b6b7-7c306e8be0da",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0335e67d-d036-4652-8c45-70e55a73090c"
    },
    {
      "can_open_position": true,
      "symbol": "AMLP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/888c6e25-ae23-4288-b870-a6fff48eb2d7/",
          "id": "d5309800-39a0-4e59-9667-157f2505345d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0bd10b6e-d359-44ec-863d-59c9c97756d2"
    },
    {
      "can_open_position": false,
      "symbol": "AROW1",
      "trade_value_multiplier": "103.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f2ac73b2-918f-4cf4-ad32-916d8a013457/",
          "id": "52139968-6abd-4dcd-bf0e-e0573647aa48",
          "quantity": 103
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2feba9f4-55d1-4d86-b1cc-00deea346e06"
    },
    {
      "can_open_position": true,
      "symbol": "PXD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2f7878f9-db75-43be-bc7d-8e6995a8a979/",
          "id": "7d442c35-927d-4999-a29c-1cae66f8471a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "aa5b0028-d296-49ac-bd5d-c42a662361fc"
    },
    {
      "can_open_position": true,
      "symbol": "COG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1aec2cb5-0b0d-49ff-a386-795f08c91019/",
          "id": "1b6d2e01-52f3-42e4-8861-82bbd3bb3451",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1206d32c-6869-4b49-a184-a10fc5a240bb"
    },
    {
      "can_open_position": false,
      "symbol": "1EOG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/757738d1-3bec-4b19-940c-00105552dcea/",
          "id": "b28be6ae-5f6c-4cef-9f5d-63acd9c2ba64",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "8a68fc0e-751d-4aa4-b375-d2065d26f12c"
    },
    {
      "can_open_position": false,
      "symbol": "PACW1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/63257ad0-d4ec-404d-9e4d-519debdf62c2/",
          "id": "1ee18671-bdb9-42e2-b274-b8e92b6f5d6e",
          "quantity": 53
        }
      ],
      "expiration_dates": [],
      "cash_component": "1200.0000",
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4d6fefd4-5894-4ec3-8f01-e0dae07bb6c3"
    },
    {
      "can_open_position": true,
      "symbol": "SPDW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/013e61c9-b9ae-485f-8f3e-073527056b5c/",
          "id": "12ac16e7-063a-4250-a536-92258219254f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4fb078ff-dc30-41b0-b05a-ee197b88823b"
    },
    {
      "can_open_position": true,
      "symbol": "TWX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e674116b-2733-460c-97b7-fd697e5a941c/",
          "id": "e5747731-3b4c-4a2e-b87b-cba11ac4078e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-08-17",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "64522aac-3941-41f3-ab08-f05cbe08f859"
    },
    {
      "can_open_position": false,
      "symbol": "1FANG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/00815789-becf-4d44-8733-032d602a33d8/",
          "id": "49d28e30-73df-4200-b19f-12a6f888c686",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e00e7ec2-8598-46c8-b4a1-5722ecffbb46"
    },
    {
      "can_open_position": true,
      "symbol": "HTZ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8e08c691-869f-482c-8bed-39d026215a85/",
          "id": "5bd6a80b-dd5b-4305-b799-8750769ce22d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bc419b5d-c335-4da6-baa0-352fbff65315"
    },
    {
      "can_open_position": true,
      "symbol": "CXO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/05411449-2743-475e-ab15-2f86e43e06a4/",
          "id": "85f09719-2638-4787-857e-158a806fc064",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8d40f428-78db-4cda-9f8e-70862508e5b9"
    },
    {
      "can_open_position": true,
      "symbol": "IDXX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/44c1cab8-bf03-4a23-bcab-ac15f0422279/",
          "id": "26b96bd2-52a4-4461-b07f-ebe58999a49f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "270cf5c6-b29b-473f-a581-3b2bdbab1cc8"
    },
    {
      "can_open_position": false,
      "symbol": "2CDK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f3987df4-e460-4e86-a65f-fd9943f14fe9/",
          "id": "baa05522-9684-4071-914f-58237cb3fe7f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a857af18-93d9-451f-8ac8-543277a04872"
    },
    {
      "can_open_position": true,
      "symbol": "CRC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cf8031c7-5ab3-4071-9c2b-11339e2354cc/",
          "id": "c9a938c2-f9b5-4377-98b7-c246938fb4ea",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-10-19",
        "2018-11-16",
        "2018-12-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "474eb250-3f17-4b2c-a911-baea7d526dc2"
    },
    {
      "can_open_position": true,
      "symbol": "AT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/821464ad-0849-4b0b-a76d-7e024b7d7a78/",
          "id": "4dd73fd7-b82b-47a9-9ca1-1a984d6ce4be",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "770129fd-0a09-4efb-a0d9-2f08ef480ba3"
    },
    {
      "can_open_position": true,
      "symbol": "TACT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/82bf53c4-8ce9-435e-ac4c-9d9da1aed789/",
          "id": "bd5e6b91-5339-44f1-9163-22d1255ab35d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c1c65d3b-c15c-4c38-b9b2-9d820013462f"
    },
    {
      "can_open_position": true,
      "symbol": "ASC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/72bdf2ac-79d6-4580-970e-c432e3b38dcc/",
          "id": "56f64ae4-9726-4779-b8d9-d5c5495b14a5",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6e7b4214-5032-447a-8c86-8cd5f41ac61e"
    },
    {
      "can_open_position": true,
      "symbol": "GEO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ba37d8ed-1714-46c9-92e7-e5a799c06605/",
          "id": "8bab9100-503e-4f2a-aa07-52da2e5154c9",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b70ac798-dc54-4687-9411-f3749751c5db"
    },
    {
      "can_open_position": true,
      "symbol": "ATLC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8c3b69b7-7aa8-4b8e-a41a-a18cca6df0cc/",
          "id": "cb632b39-9e2e-424c-9679-b2ceb5968abb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ba069e63-bc7f-4ebf-96a0-f73c67728bc8"
    },
    {
      "can_open_position": false,
      "symbol": "2HCA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1cea1d69-c7ea-41e5-9e8a-75d4995f8b48/",
          "id": "abf5353b-b14c-40a4-8f97-55234d120c6b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8badc6ab-e0b6-4f2d-aad1-eb31aa46f517"
    },
    {
      "can_open_position": true,
      "symbol": "BIP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/188fd09e-c4b6-42e1-a9fe-cbe3714b7f23/",
          "id": "15421457-b80b-47bb-a38f-4dfa164ccaa1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0e47e219-93c0-4af8-ad5d-f7a5384b7c2a"
    },
    {
      "can_open_position": true,
      "symbol": "NL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0552b253-c2ea-4d12-8ba7-d4155f76d8e0/",
          "id": "2cfefc14-15ac-4346-b537-710697142b7b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b3b02e9e-2479-437e-88c8-203d954fb588"
    },
    {
      "can_open_position": true,
      "symbol": "LBTYA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0f2502c1-6805-4472-969d-df0fb2067550/",
          "id": "119d3f7e-8ebc-4a01-af2d-ccd324739ffa",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "192fab78-f18d-4858-8e3b-9cef83f48c51"
    },
    {
      "can_open_position": true,
      "symbol": "ATHN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0f559474-0e37-47dc-8098-6812738231f5/",
          "id": "9cab66fa-c326-41a5-9e12-d654e6939756",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2019-12-20"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "03da8493-c9e7-4c75-85e7-947d15c174ae"
    },
    {
      "can_open_position": true,
      "symbol": "WBT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0fee6a40-3a55-4eed-b20c-5cbc07c64322/",
          "id": "061063ea-510e-4792-8ad6-a02fae161a8a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "44a638ad-c67d-4ce6-aacb-64f84d415f93"
    },
    {
      "can_open_position": true,
      "symbol": "AWI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/03477e9a-4161-43eb-9a81-1f01bc83fcc9/",
          "id": "4dfa7e2c-f972-4a38-b2c5-3f43f24a79f3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fe1a80d7-9161-4ec8-8413-c523533e4407"
    },
    {
      "can_open_position": true,
      "symbol": "BAS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f8ff8d43-4ff1-4ac1-b468-9c026ea9e836/",
          "id": "24de0683-723f-4bbd-be61-28afa30ff618",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4355516e-da3b-4795-b569-0eb33b0714e9"
    },
    {
      "can_open_position": true,
      "symbol": "ADSK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/be026807-95fe-403e-adda-3c4785ddd7ff/",
          "id": "3cf76d42-b781-46e7-89e2-3a29d53f472e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "81442de5-4d85-42f7-8cc1-fd75b23c8da0"
    },
    {
      "can_open_position": true,
      "symbol": "AFAM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f019f2bb-4df0-4155-9ee6-4955cb11b82b/",
          "id": "1cfc69d2-fce7-4830-a2b4-868684054d8f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ecaaca8c-f6b0-494a-908d-4aa983e94d64"
    },
    {
      "can_open_position": true,
      "symbol": "LSXMA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b5ecc5a3-61dd-447e-a81b-0147f86f79a0/",
          "id": "b3aec5ac-afb3-427c-a205-6e90a788cfe6",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b791ac22-67a6-43b6-9b4b-5f7ee90cc3c2"
    },
    {
      "can_open_position": true,
      "symbol": "ISBC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f2845b32-9e5c-4c1b-bd4a-2edebec41228/",
          "id": "02698637-ed26-4c5d-b014-1382a1ee03bd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f8328185-85d4-4768-bacc-84b7e9312eaf"
    },
    {
      "can_open_position": true,
      "symbol": "NGHC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6d7fc720-2fcf-4ab0-aaa5-bf865a303757/",
          "id": "6871543a-37b5-46ac-a322-c9f436a9e45a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ea4e2025-cc3c-4bf0-bdce-5a5bcbdfa42f"
    },
    {
      "can_open_position": false,
      "symbol": "2FTV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9107beb5-2d1b-43d7-97d1-b4b1ba2ab6a4/",
          "id": "ac16c9b5-9004-464a-baeb-9c78831abc54",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "94b26f4d-e666-4bf6-bbff-4a0baac4fb6b"
    },
    {
      "can_open_position": true,
      "symbol": "HTBK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4e14184a-8954-4ad4-884a-196d848cda62/",
          "id": "b48670fb-cdfc-408b-8fbe-210ced0baa64",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "24d80b8f-cdff-4ee9-b923-e89cd094908d"
    },
    {
      "can_open_position": true,
      "symbol": "AOS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b7723e24-4fcd-43ed-ade2-beab34ba5c9d/",
          "id": "9bbed260-96b6-4cb2-a8ff-85a169087f7d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fc6eca02-1d78-42d3-9e90-71d7cdfc55be"
    },
    {
      "can_open_position": true,
      "symbol": "AEL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9f9ef98b-3e4d-4276-b21c-fe26818ee42b/",
          "id": "2d6b7e66-27a6-47e3-9d78-b4ffd3a2b985",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d8c296d9-f84c-4d85-a535-4b4f9f241465"
    },
    {
      "can_open_position": true,
      "symbol": "KR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d5bd04b5-a963-4e20-bce4-7a1d916d78fd/",
          "id": "dea5b7dc-9c39-4140-9526-662172194a9d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "9319a7aa-2da9-4527-829d-9165a2f8aa9f"
    },
    {
      "can_open_position": true,
      "symbol": "IVAC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/33e0b5db-83b6-4ce1-9cf9-e0c38d7399bf/",
          "id": "3ca69c03-dd65-47f4-afa5-e24ecca15cfd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3fe854b8-fc49-4f95-bda8-fd27d5ad306f"
    },
    {
      "can_open_position": true,
      "symbol": "AMRN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/266c561f-6de6-4a8e-adf4-553c4a012ede/",
          "id": "39224a6e-e3c8-4e87-8cb1-5df28d3dc91d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "ad02f963-e59d-40cf-9237-f03a6118cefe"
    },
    {
      "can_open_position": true,
      "symbol": "AMKR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/43080850-c184-4980-86f8-9fe32e32744c/",
          "id": "bdb23431-79fd-4d87-ac42-e60a30124162",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "56b91722-3700-4fdf-bfeb-254c51878ddf"
    },
    {
      "can_open_position": false,
      "symbol": "2FNV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d89e7e53-4441-4769-95ed-a9c575a14d54/",
          "id": "92db2938-613c-465a-9d9e-7ee31291574b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "227c3dd1-bee1-4331-9455-edc1f151c3cf"
    },
    {
      "can_open_position": true,
      "symbol": "BATRA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5d909971-9f18-47a2-8eb1-2b214bdab8b5/",
          "id": "48ac4e22-8976-4d6f-8215-10618e04d7e2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2b093910-4e22-4ced-8599-230b127bde01"
    },
    {
      "can_open_position": true,
      "symbol": "CHT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ee24101a-8dc6-423d-b1b0-19dad1f0b128/",
          "id": "c40a2794-d817-4068-87f0-36dfddc74b44",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "db867c82-e425-450d-bad5-e6a9b51f4d11"
    },
    {
      "can_open_position": true,
      "symbol": "AGFS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e48bca9c-0560-4621-b6c0-1217aa3a3690/",
          "id": "58e1b433-8413-4169-a9b3-e0f8209ac9c1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8c80beb4-c574-4d2f-8a38-c30c180a097a"
    },
    {
      "can_open_position": true,
      "symbol": "AGEN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/106ac328-df78-4dbb-85e7-7761e67a5360/",
          "id": "423341d8-850d-40b1-98f5-bacb6aad2936",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1aba7366-b97f-42db-a3f0-eef4a71f905e"
    },
    {
      "can_open_position": true,
      "symbol": "LDL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4a671441-cd47-483d-8d5c-6dea4296b8e5/",
          "id": "7d424174-bdd0-496f-afca-93866403d653",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "95273347-02f9-4a11-a428-1fd988eefca0"
    },
    {
      "can_open_position": true,
      "symbol": "APT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d435a3d9-1957-469e-96fb-70564384ec57/",
          "id": "cb9c9de1-4876-43d0-a5d3-348c6e77c2d4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fec1c883-67d2-48b9-b969-a28fcd9ea909"
    },
    {
      "can_open_position": true,
      "symbol": "ALLT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a23bc1bc-3c7a-47a5-9791-ca12f769b701/",
          "id": "3589a24e-4b22-4164-8305-e3f263155b26",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4f97e347-7bbb-4ca4-bf87-71914bd4444b"
    },
    {
      "can_open_position": true,
      "symbol": "ARA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/44e3d54c-d630-49f9-afb4-01a365af2aa9/",
          "id": "53ce5119-548b-4574-8335-a97fb4a254b1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a8f33bfd-dc39-4117-9f74-f779aa33ee51"
    },
    {
      "can_open_position": true,
      "symbol": "AWK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b7da9d4f-4fff-42fb-8429-b53f99b1e3ae/",
          "id": "f775beef-7830-478b-a345-f209d618700a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "74643c1b-3b33-4436-81fb-2f338b9ae17b"
    },
    {
      "can_open_position": true,
      "symbol": "BDN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e80ffa66-df90-462e-b611-b05a509186d1/",
          "id": "f4542216-a6d6-4d6f-a247-821e2298c42f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f512ce8f-bde1-40bc-a467-654896900053"
    },
    {
      "can_open_position": true,
      "symbol": "AL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e86383d9-747a-4614-8e57-906c1b13d256/",
          "id": "fa3f39db-6bae-4f1a-8589-9a517c4981f2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5c6f77dd-30fc-4e83-9d6b-51e919b3d299"
    },
    {
      "can_open_position": true,
      "symbol": "RHT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/73f0b448-ac9c-49c6-b281-ef28aa51fd3f/",
          "id": "c1f2d0aa-6415-4cde-8fb1-28a713545c1f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "078c9191-8e98-43fd-8e23-fef871d1987c"
    },
    {
      "can_open_position": true,
      "symbol": "APAM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c2d34239-b6f9-42e5-8843-b7e12a998560/",
          "id": "574e0ab4-422f-43d1-9066-67449cda41e4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7fe9cfbb-b960-434d-83b2-057fdd556f0b"
    },
    {
      "can_open_position": true,
      "symbol": "ACWI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c36f223d-239e-45b2-a5c6-b9f1ca94fa40/",
          "id": "4c995fb4-d640-43e1-a356-6ed91994163c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5d127680-5bda-464f-afc1-f8504eb4476b"
    },
    {
      "can_open_position": true,
      "symbol": "ANW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/38e52f82-75e9-4c70-959a-eacbe8a26497/",
          "id": "fbf40c70-3fbf-48bb-ad89-b72b405ef09f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f61a4835-1131-4694-a97e-7210dd6665a6"
    },
    {
      "can_open_position": false,
      "symbol": "2NWL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1f495bf7-1653-4a89-b5a4-8c2df13f0694/",
          "id": "8de893e8-06eb-4cc1-b0e8-5136f7161022",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "741770a0-66d2-4807-b10a-d25adef11282"
    },
    {
      "can_open_position": false,
      "symbol": "2EPI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/409709ad-7a93-47e4-a6d1-a437efa92c8f/",
          "id": "25c07109-7eea-4f3b-bb71-10d1077c6a82",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a20003ac-8beb-4409-8d17-bd48be7a38b8"
    },
    {
      "can_open_position": false,
      "symbol": "2CMI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2859bed7-51fe-48e7-8e27-db2512e11a8b/",
          "id": "9ecbbbf2-a0e5-4925-8d27-ceb693574771",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6fa681c4-9796-4a2d-9d03-0228c99e4e8a"
    },
    {
      "can_open_position": false,
      "symbol": "2DVMT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ce037160-3d98-47a7-b454-436e25e5d85c/",
          "id": "9b47120f-aa25-41fa-9eeb-262bd82611f9",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4a52f524-c0a2-4e8f-81a5-9228f77479d3"
    },
    {
      "can_open_position": false,
      "symbol": "1TDOC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a1d81375-4b0c-4902-8285-03c011726297/",
          "id": "9e1c67ed-1d6e-4b51-b1e7-97f30287a332",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3ce6e4fb-57d3-43fc-9ca4-92358a844561"
    },
    {
      "can_open_position": true,
      "symbol": "VEC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b48f1abb-d8a2-4b92-947e-7350676922dd/",
          "id": "9edfc79d-3159-4b25-86bf-4206fc43f80e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3e466e1c-3478-4ac8-82ef-04f531ca79df"
    },
    {
      "can_open_position": true,
      "symbol": "AMZA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9ee1e3d9-a7de-44de-9120-0b12cdafe814/",
          "id": "b9aa6af6-007c-4126-b1bb-a1ad6a1dd4ba",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0b85f97d-83ad-445c-979f-b09be4a79c0d"
    },
    {
      "can_open_position": false,
      "symbol": "1UBS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9fb724b2-4768-45e5-b0f3-e9222e21dff2/",
          "id": "9885cf27-72fa-4efc-8f1e-6211b6fe3714",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "51a43bca-05a3-4a2a-9004-55b4dfb79cf2"
    },
    {
      "can_open_position": false,
      "symbol": "2INTC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ad059c69-0c1c-4c6b-8322-f53f1bbd69d4/",
          "id": "c7cdc404-cc9d-4998-a668-6985f8a2ba86",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "c0635272-9559-4059-825b-98ecbe5da202"
    },
    {
      "can_open_position": false,
      "symbol": "2VLO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2868168f-8ece-49a8-b0e5-4231f0c8716f/",
          "id": "c63fba43-d0ba-4c61-88cb-91cee4044ca7",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "3497fff9-d457-417a-a066-c7d618d05cf3"
    },
    {
      "can_open_position": true,
      "symbol": "GDX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/93165d02-1d02-4bbc-a38c-5dc3c4621fc0/",
          "id": "a1379764-21b5-4447-9aa1-ba8fb47b0c7f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-09-21",
        "2019-01-18",
        "2019-06-21",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "32536616-ad9f-4037-8f78-54bd4575cbf7"
    },
    {
      "can_open_position": true,
      "symbol": "RGNX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/882a6768-8120-438a-ba30-90d46cb26a78/",
          "id": "25e63a6e-1dc5-4cb6-96bc-2a3938cab38c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9af7a5fb-c1b5-4c17-b6c0-308e8373b120"
    },
    {
      "can_open_position": true,
      "symbol": "AGRX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c6f6681c-3b4c-4157-80b9-a9272e0d2b66/",
          "id": "ec25ded8-1300-4c77-be2e-7cf4d0b59aec",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fe3932a8-d760-48e7-8ed6-2f0acf1f8180"
    },
    {
      "can_open_position": true,
      "symbol": "AOSL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/221c6ed3-35ad-4bf5-bf90-ffb9c19177b3/",
          "id": "b7785ceb-2e49-4dad-85c5-9e596b814550",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2bc98a24-e794-4f2c-9907-90873d101a1d"
    },
    {
      "can_open_position": false,
      "symbol": "1AXDX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5740676f-d608-4d87-b489-05d355bc904c/",
          "id": "797f0447-a899-43d4-a6d4-326f29770d28",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5901f248-95a3-4a44-9afe-5cc23241ee55"
    },
    {
      "can_open_position": true,
      "symbol": "TAO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dacbf941-8430-4f39-96dc-fd9d5d21e6de/",
          "id": "6693d8ef-0c9f-4bcd-8952-8d8172d16cdf",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f6c6097d-9b14-43a9-8947-dbb33a296e4a"
    },
    {
      "can_open_position": true,
      "symbol": "PJC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e1348879-e27c-4d2f-a739-143db2d6ff5e/",
          "id": "865f6fba-0b5f-46af-8c54-c1b8725743e7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "941de4d9-86f0-4792-807a-fff6b080428f"
    },
    {
      "can_open_position": true,
      "symbol": "CNA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e2bf7eb7-feb3-4c14-bd48-3e2ebc6d5fa8/",
          "id": "87002fc9-4c2a-477f-ad86-d5c15d90eebf",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f01af6a0-3423-4cf3-a4ec-64be1b044740"
    },
    {
      "can_open_position": false,
      "symbol": "2MRO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ab4f79fc-f84a-4f7b-8132-4f3e5fb38075/",
          "id": "73a81065-9fd8-44ce-b754-0343410c3641",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "533bf85d-3fc9-44bb-978c-f075aa368a7c"
    },
    {
      "can_open_position": true,
      "symbol": "APOG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/03c6f332-f040-497c-974f-d2995a51da34/",
          "id": "02724bf9-2050-443b-9e4c-dd9e661a8942",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "037d1187-404e-4af9-82c8-e519d180f8a2"
    },
    {
      "can_open_position": false,
      "symbol": "1CXO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/05411449-2743-475e-ab15-2f86e43e06a4/",
          "id": "952e88aa-27ff-4393-8684-67f0d9a1de21",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5da1e554-13fe-43ae-a938-cce07497c01e"
    },
    {
      "can_open_position": true,
      "symbol": "AMID",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/63206113-3851-4b18-b4af-d2b40d0033f8/",
          "id": "82263313-eb5e-45dd-94e4-dd9dac722fc0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d58535b9-4061-434a-ad2a-a0f6cd5cde31"
    },
    {
      "can_open_position": true,
      "symbol": "ABEO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9f8dd37c-f5af-47cd-ae6a-2f4258723e5f/",
          "id": "e8ac218d-254d-45c7-adfa-62b78e40f36e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "55cdd636-ecb4-4914-a5e5-ed211e54a6a6"
    },
    {
      "can_open_position": true,
      "symbol": "CUK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dbd50d49-c246-47b0-b41e-56fd11f9ea6b/",
          "id": "2ce94701-d224-4c29-9991-273300b01ab8",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2f7e3edb-4255-46e9-9266-75c6ed3fdc71"
    },
    {
      "can_open_position": false,
      "symbol": "1PXD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2f7878f9-db75-43be-bc7d-8e6995a8a979/",
          "id": "b2bd3fec-5595-4e73-889c-55c64c924eb1",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f7f876fd-42f2-454b-815c-f5f651b790ca"
    },
    {
      "can_open_position": true,
      "symbol": "BDSI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f07683d0-7cc4-4755-ac89-1d0f11adbcce/",
          "id": "d119b106-9261-4700-922f-751d04b3100c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f3564f23-cb19-41d0-be0f-7ae0fa81dd89"
    },
    {
      "can_open_position": false,
      "symbol": "2IPG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/69d6972d-59ad-43f2-971d-5b84d8108185/",
          "id": "d2454ece-af03-4744-a1bb-0c9b60fb0ef0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "22dc8dbb-d6db-4f1d-84fe-988eb10c1ad9"
    },
    {
      "can_open_position": true,
      "symbol": "CUZ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e6eb98b9-1a65-4c5f-b30a-0aeaf0e86966/",
          "id": "9a38094e-6564-42fa-b130-12df815610d0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dc8b523f-f116-43fa-82e2-5f67920fff2c"
    },
    {
      "can_open_position": true,
      "symbol": "FMI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/798d12f1-728d-4bbb-aa83-f684462da247/",
          "id": "f947f13c-bc00-4116-9099-82b67673a179",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1fb26fb8-6adf-4754-b6a5-9f10e5851d0f"
    },
    {
      "can_open_position": true,
      "symbol": "MRNS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/017bf1da-e1ea-458d-826f-ee417be65203/",
          "id": "448e5b94-2cb9-4f0e-b07a-9cee2d1b7bf8",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "281324d0-d0c2-42ad-aa3c-7e9e7b1cde82"
    },
    {
      "can_open_position": true,
      "symbol": "AMCN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/01abfe57-ec95-438d-9192-fb740ecf2cab/",
          "id": "ec2bb0fd-cc8b-4b8f-8b79-1583e2d4c68e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5f508a71-64b6-4b9d-a70e-61fa5e3e74c6"
    },
    {
      "can_open_position": true,
      "symbol": "AMGN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1b007e76-1549-4166-980a-8d9a90931d93/",
          "id": "f956c580-ef7c-40d9-b253-95aa95627135",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-09-21",
        "2018-10-19",
        "2019-01-18",
        "2019-06-21",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "279fe7d0-a74a-4f42-9bf1-2a0a8a99bfe4"
    },
    {
      "can_open_position": true,
      "symbol": "LTC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5e3b7549-7694-4a01-bffb-082623c6569e/",
          "id": "6135dfbd-e25f-49e1-ba36-28e8568d7993",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2573aa32-11be-48c5-be1f-73afddd8d3c7"
    },
    {
      "can_open_position": false,
      "symbol": "1T",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2b456f6a-3287-4757-abf9-327383d2c708/",
          "id": "78bb017b-7f34-4d09-82eb-dc70ce83e388",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "87130963-700b-42e5-913e-7c77c90dbbf7"
    },
    {
      "can_open_position": true,
      "symbol": "AA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/caaa30bc-962c-4d8f-9bc8-1b9af897c7e5/",
          "id": "6866bddd-f1f5-43f8-8e2b-7d3a390f8fea",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a719f8a7-d26f-42f6-a938-91723aba959a"
    },
    {
      "can_open_position": true,
      "symbol": "IRBT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6dd2e46c-e820-4632-9d1e-d9c53770833d/",
          "id": "25bd7ddb-a014-424c-9f77-697803b35cdd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e5fc7807-156b-497a-9211-7f1caf9aa2f8"
    },
    {
      "can_open_position": false,
      "symbol": "2NXPI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9f2d1150-77bc-43e2-aa60-c2114dbcfc9d/",
          "id": "fa2e9b0e-eeab-4acd-8b3a-b7327ed31669",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "55fbeced-5939-4fe8-93d3-e7ef5d83c54f"
    },
    {
      "can_open_position": true,
      "symbol": "CIG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8308a0cb-b7ae-465a-a97e-f6ecfa5986f6/",
          "id": "e2b41e02-cd72-495a-b209-9b06cb2e44a7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a3b2a856-0394-45a6-aeca-df25fa5de223"
    },
    {
      "can_open_position": true,
      "symbol": "LQ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/99c6f6df-28dd-432c-a7a2-19f9788ee3a8/",
          "id": "d5fb4c7b-0b18-4f73-878e-3eae75ef126b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7e3b90e9-b763-4c06-8cb6-7d3966173787"
    },
    {
      "can_open_position": true,
      "symbol": "AMZN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c0bb3aec-bd1e-471e-a4f0-ca011cbec711/",
          "id": "13a08d2e-81ad-4801-aee1-e5bb1ef789b6",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-09-21",
        "2018-10-19",
        "2019-01-18",
        "2019-06-21",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "11226a7c-8bf6-4332-8d62-e423a4f82046"
    },
    {
      "can_open_position": true,
      "symbol": "FMNB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0ff37d95-6be2-4335-9f67-c728c799e8c2/",
          "id": "2bd3c60d-ff31-4186-ae11-e1520dd7c694",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e6b0892a-3200-422a-a425-60153ac5e410"
    },
    {
      "can_open_position": false,
      "symbol": "2PSX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/124133a3-cf48-45f4-a014-934529fdfd7b/",
          "id": "2dbbbbd4-b6d7-466a-a479-5e314b5bb007",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e1642377-d115-4e43-b89e-73d073bfb49f"
    },
    {
      "can_open_position": true,
      "symbol": "EEM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5a454589-1bad-4983-9c9d-42c90a2e6610/",
          "id": "7a39fefc-09dc-4a8d-bbda-279652033303",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-06-29",
        "2018-07-20",
        "2018-09-21",
        "2018-09-28",
        "2018-12-21",
        "2018-12-31",
        "2019-01-18",
        "2019-03-15",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "5f3a5e4a-708c-4079-bd45-e82670cd49ce"
    },
    {
      "can_open_position": false,
      "symbol": "2SLCA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/104a5137-e213-4132-bd34-1a1c8771c3f9/",
          "id": "6b7a9603-6d88-484c-a12a-9fc98b52b023",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dba11056-b55b-4627-ba4c-1cf3e66f9b8f"
    },
    {
      "can_open_position": false,
      "symbol": "2GM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/48bbe4a0-d167-4bfe-8d3b-494f9bb56350/",
          "id": "5372133d-8c68-4d57-8b9c-6d0ac8a0185a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "c0e2302f-fa45-4792-9a06-64c0f2fc9962"
    },
    {
      "can_open_position": false,
      "symbol": "2DUK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/abaf97d3-f256-4246-b540-acc1fccb6fae/",
          "id": "7c7aaaac-000f-4ace-8533-91f54aa9fb56",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c495869e-326e-425c-b383-b9f9c6323b98"
    },
    {
      "can_open_position": true,
      "symbol": "ADM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/20d5b338-1ae2-4997-a212-80a8c972a38a/",
          "id": "99a29618-3be2-494b-a818-ff492563db57",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "40f68f4f-5fed-4860-8ef7-e7dbbf4acf8c"
    },
    {
      "can_open_position": true,
      "symbol": "LAZ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/aaa2cc01-e481-4fe9-8a22-3a06fefe0ae6/",
          "id": "42ff472e-1a6a-4fe1-af6e-da4ee0c76f64",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1164ee5e-5956-4814-8ee3-8e44c8bab52d"
    },
    {
      "can_open_position": true,
      "symbol": "DRN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3b0898ec-31ee-4429-893a-c664ff4294eb/",
          "id": "f686dd20-a57d-40b6-9be2-b2042ab5cafd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8b581487-2790-4ac6-8787-dd993c488158"
    },
    {
      "can_open_position": true,
      "symbol": "BCOV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6bb2ea95-7ccc-4879-8b80-e3b03fde4716/",
          "id": "2f19a2cd-8efb-4581-92c3-015adb322c0d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "206a8475-8423-4463-a11c-87de32eac2e5"
    },
    {
      "can_open_position": true,
      "symbol": "DFEN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/066ee5bb-99e8-441a-8061-b08758aac2ab/",
          "id": "18c38dcd-041f-4192-8f02-259457092857",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5d73d39b-c063-48aa-a536-3bab5210e22d"
    },
    {
      "can_open_position": true,
      "symbol": "IRTC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a254a5e5-25b8-48ba-b0cb-522d0af9fb08/",
          "id": "9213b687-f863-481f-84f4-ba289fb13684",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "95337ad6-403a-405d-8ea0-0d85e249e52c"
    },
    {
      "can_open_position": false,
      "symbol": "2AAPL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/450dfc6d-5510-4d40-abfb-f633b7d9be3e/",
          "id": "ca09d064-a4e1-42ca-84c2-419f5ff223f0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "f980211b-e15d-48a8-82e8-4c9000183a09"
    },
    {
      "can_open_position": true,
      "symbol": "HEWG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3382044d-b926-4d52-82de-ec733c0e8f25/",
          "id": "a1043194-dc3d-4500-995d-20c557f4a761",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fa496fe3-2630-4b4a-98f8-d0818afe7f7f"
    },
    {
      "can_open_position": true,
      "symbol": "AMPE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/99e06c5f-bcb8-48b2-ae17-bb22da19cbeb/",
          "id": "98e1f62e-1c29-4f7a-a58a-6a6c24d96b5a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9f54a8ef-f752-4323-9364-7cc6d6d1e71f"
    },
    {
      "can_open_position": false,
      "symbol": "2BHGE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9a39150c-b9c2-434a-bdf0-f91bf2160574/",
          "id": "85a41063-07af-46d0-8e51-b42b0eb43d9d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "79cbf136-87be-44fe-92c4-55bba31c9b7e"
    },
    {
      "can_open_position": false,
      "symbol": "2NOC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/57b88101-046d-4553-99a1-7cc92a49d916/",
          "id": "c971066c-04a8-4545-ab54-4215722329a9",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "58a251f4-4f40-4144-a9f8-c7b725d3ff33"
    },
    {
      "can_open_position": true,
      "symbol": "RL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6466cc5f-e62b-4af9-9f01-487446d4424c/",
          "id": "20b9b55d-3822-45d4-9345-74ffa9768b05",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "68446782-74fc-48b0-8396-bbff88fa7b9c"
    },
    {
      "can_open_position": false,
      "symbol": "2SEE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/19d49630-59c5-4204-b150-c900e58de06a/",
          "id": "bac23fe1-8f1b-42b6-bd02-a5b7ac730a93",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0fb3ca75-27e8-4b0b-bea5-319daef23d1e"
    },
    {
      "can_open_position": false,
      "symbol": "2BRKB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a4f0cca4-79dc-4297-9c02-5bce1909cd4b/",
          "id": "476e0640-fd5e-49e9-ae0a-a11c4bd24c80",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "00dcae55-a73d-428e-8ffc-057e40280476"
    },
    {
      "can_open_position": true,
      "symbol": "SIVB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c63f5f48-8211-4832-9e2e-8f868677e274/",
          "id": "3ad32b01-d83d-4087-9150-d309c32397af",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8afd8361-1762-41e8-99c5-3f5f7471a512"
    },
    {
      "can_open_position": true,
      "symbol": "ALGT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ea38790d-2304-4456-bb88-cf594493a751/",
          "id": "9e0fdf72-262a-4e43-8ea9-8518d78ed4f8",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "88713738-f56e-4e48-8568-04ac364877d7"
    },
    {
      "can_open_position": true,
      "symbol": "SYF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d62b150e-6adf-4806-abfe-2ac165f0ef49/",
          "id": "7cab2984-69af-4755-9ad2-5203468b7bf2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f29a562d-4e36-43e6-91b3-bc2d1f8cffd6"
    },
    {
      "can_open_position": true,
      "symbol": "LCI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/750dc418-45ab-4ba5-806c-f2ec7128a942/",
          "id": "78b45a4f-29ab-45d8-aefb-9479ed01520e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7a9e4144-0ad0-43fa-a05f-9f3370225e41"
    },
    {
      "can_open_position": false,
      "symbol": "RWJ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ff682163-a2e2-42d9-b71e-bfe856ea8bd4/",
          "id": "abd7f5aa-8fef-4622-b90d-7c24550f9eb4",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a7b08090-6359-43f6-bd5c-ae04642cbf5d"
    },
    {
      "can_open_position": true,
      "symbol": "AAPL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/450dfc6d-5510-4d40-abfb-f633b7d9be3e/",
          "id": "6a80d2ed-6f5d-4f1c-9418-cc5379d630e3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-08-17",
        "2018-09-21",
        "2018-10-19",
        "2018-11-16",
        "2019-01-18",
        "2019-06-21",
        "2020-01-17",
        "2020-06-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "cee01a93-626e-4ee6-9b04-60e2fd1392d1"
    },
    {
      "can_open_position": false,
      "symbol": "2NKE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/aec9d597-9fdb-4393-af8b-da2019e2c179/",
          "id": "c3ff2852-b3e5-49bc-a8c5-3fe4bb7e9e12",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "17dabf14-0a8e-4992-b374-d412d648d567"
    },
    {
      "can_open_position": false,
      "symbol": "1ERI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9825e063-612c-44e4-8e03-0af1f028b10c/",
          "id": "296a2d91-dae5-4d31-84d2-93afde537bab",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "51ef5c9f-7c03-4a2f-ba61-58c4212cf055"
    },
    {
      "can_open_position": false,
      "symbol": "2PGR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/95ececd5-586b-4f82-9559-abbd8b132e64/",
          "id": "89a741c0-4dd1-40ab-b21e-e0457b8e7608",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a9e232bb-1532-422a-a25f-f65e563e1f4d"
    },
    {
      "can_open_position": false,
      "symbol": "2GILD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b6b70063-522f-465c-907b-ead86d694684/",
          "id": "8ceb80c2-e73e-44ef-9bb7-8f6bc44c13db",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "83f4ab47-ec78-4760-b2ed-87b8ec9fafac"
    },
    {
      "can_open_position": true,
      "symbol": "NHI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/65f7b86f-08fd-4218-bd1e-2bc9b9499a60/",
          "id": "04488ab9-c58a-4551-8cb2-a92b7c7b7c66",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f05a8aae-0da8-4aaa-b98e-c42328c9ba4c"
    },
    {
      "can_open_position": true,
      "symbol": "SYNA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/86d9605f-2232-4c17-bdcd-5cba19534c61/",
          "id": "736146da-5ecb-4425-a45c-df68a94188d9",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a8b1c528-9050-4192-aa0a-b12528eb6823"
    },
    {
      "can_open_position": true,
      "symbol": "DTE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dbdcc112-a46e-487a-9dca-c2825c725089/",
          "id": "6ada2810-aebe-43ef-b4ad-94f7fc5c2bae",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6e04ffd4-95f2-426a-8097-9eec5a90f080"
    },
    {
      "can_open_position": false,
      "symbol": "2CBOE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d71bfd66-93de-4e4c-ae58-a26c47582a3f/",
          "id": "6ee5f8a1-c6f7-4b98-953b-9dc895d4b090",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "52f200ed-347e-4ec9-94a2-b12f9645c3b6"
    },
    {
      "can_open_position": false,
      "symbol": "2GLD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/90999f47-19d4-4bdf-91d7-2bf3733a3fcf/",
          "id": "caa0815a-ad2d-46de-a7ec-ba1747d4ac8a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "f27f7760-c563-4e1b-925f-bf39b7bccdf7"
    },
    {
      "can_open_position": false,
      "symbol": "2ZEN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/64f09220-e3de-4c4a-bd1d-1d2303935b0c/",
          "id": "4f564adc-aab5-437c-b286-9b06ff85cc96",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "53d7917c-60d2-4e5a-8316-41a41d6a3b1f"
    },
    {
      "can_open_position": true,
      "symbol": "HSY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4b3b3d1f-77ce-4097-925f-d8ad00a872c3/",
          "id": "104fd697-a8f3-4ce1-89f4-b4a38066481a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "d7d780f5-360c-4178-8742-dbbe7eeb505f"
    },
    {
      "can_open_position": false,
      "symbol": "2OCUL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f1adc843-1a28-4cc5-b6d2-082271fdd126/",
          "id": "903a40e9-529a-4d9f-aec1-1ccd092b0d07",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c8677d48-919a-4c7c-88ee-0d88b581096d"
    },
    {
      "can_open_position": true,
      "symbol": "CTLT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/072c348d-44fa-49c7-b1b4-9d999d2ff302/",
          "id": "d8188311-7f1e-4d80-9afb-96cc4ba86916",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "08e4263a-9c44-473d-a705-ea30af42e9bc"
    },
    {
      "can_open_position": true,
      "symbol": "ABT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2018c0a7-2525-4dee-8de4-b6fb2c1f286e/",
          "id": "d68d4f54-554f-4579-98b0-1206d2d8571a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "f160cee8-720e-4b76-82e3-7d276430dccb"
    },
    {
      "can_open_position": false,
      "symbol": "2AMZN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c0bb3aec-bd1e-471e-a4f0-ca011cbec711/",
          "id": "315c5097-db2d-4a9e-88ee-80ff8737b0df",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "0eb1bdd2-f0c9-494a-ba1d-2dd7659df8c4"
    },
    {
      "can_open_position": true,
      "symbol": "IWB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/81692367-c822-47ab-967c-5d43e03ce8fd/",
          "id": "acc18c59-9939-4122-a6d4-a82d6f82b1bb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2c7a067c-519d-4f7d-ace4-3378b88394ae"
    },
    {
      "can_open_position": false,
      "symbol": "1AR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/02932df7-16d9-48e2-90a7-241298307cb2/",
          "id": "2da8bd26-1555-4d9e-9d77-944a36bf1e7d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b9a7c60c-4ee5-46af-8ddd-636fe885fe40"
    },
    {
      "can_open_position": true,
      "symbol": "XT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b5b2f32c-0972-428c-9528-6abd3eeab0b6/",
          "id": "8c5dd111-82af-44b3-8289-7b756af2df94",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f01501cc-5f69-4b19-b73a-3dc13de27721"
    },
    {
      "can_open_position": false,
      "symbol": "RADA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ed358cce-6077-4ecf-bce1-5e47b3eb2eea/",
          "id": "4eafec9c-cb8a-486f-965b-1685eeb0b3ce",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "070e86c1-d2a6-4791-ae33-9fa25f77bf04"
    },
    {
      "can_open_position": false,
      "symbol": "2HES",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/644a7491-18f6-420c-9657-83c6976818dc/",
          "id": "c3795416-a888-4b27-b200-942addc7cf1c",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "02481aa6-6ef6-49ad-a0e3-2e1eb2cf981e"
    },
    {
      "can_open_position": true,
      "symbol": "FLXN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/825dfdea-71ca-4aa7-a1f8-d79791156400/",
          "id": "6cbba1c7-a5a5-4d6d-a563-630e795540b2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4caf983d-a448-4cff-938b-2ab1bac29b10"
    },
    {
      "can_open_position": true,
      "symbol": "IAG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/266ddf25-4009-49f4-a489-ecabfc07faf4/",
          "id": "a0036647-2aaa-4a12-9f75-8fd81ec4cf7a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8780a0ba-2cb8-4df4-b87c-d7f83757979f"
    },
    {
      "can_open_position": false,
      "symbol": "2CAG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/01b8488f-1ceb-461a-835d-c4ba04498387/",
          "id": "b47c93c5-2550-4cac-aa3c-0e320fcb0c94",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b5000800-b239-4f35-adaa-53efaac6462d"
    },
    {
      "can_open_position": true,
      "symbol": "BCPC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7f068db8-cedb-482f-983a-df908703ab4c/",
          "id": "74adf1c6-6212-4dd1-8b7c-e5cfa13989a4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5c40787a-a459-4971-92d5-5fdfea3bf7ff"
    },
    {
      "can_open_position": false,
      "symbol": "2VZ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6957592c-ace4-41f4-98f1-1b3a3a54a7dd/",
          "id": "e02a3a05-6a86-4bbc-b9e1-8dca6ba0f870",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "faeabd1a-6856-4bbd-824c-b485c14e4e17"
    },
    {
      "can_open_position": true,
      "symbol": "BCOR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d673f935-fb1b-404f-af46-78e70c322337/",
          "id": "1dd592ac-6d86-4d8f-b8d5-9f10f2429163",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9a2b683a-6ab6-464b-9c17-3e6d7cf3f477"
    },
    {
      "can_open_position": false,
      "symbol": "2FXB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/41660094-3e87-4c13-9615-b6af5b50faa3/",
          "id": "f4d062b3-38ce-4e86-9d72-bf6643862095",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f232c89d-b325-43e3-9754-49e5925049e1"
    },
    {
      "can_open_position": false,
      "symbol": "2MO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/84719532-6913-4a1e-a943-f2947f822715/",
          "id": "e983ba45-a6e3-4487-9554-cd7f216bc836",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "d6d07016-6524-48d3-b03d-518fe93df549"
    },
    {
      "can_open_position": false,
      "symbol": "2ETN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/98245487-3340-42c9-888d-1a97743466b5/",
          "id": "799096cb-c626-499d-9022-b9cc63a5167a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "629c7f76-0f86-4907-958a-fac550547787"
    },
    {
      "can_open_position": true,
      "symbol": "CUR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2f0808c9-987a-4cd3-8b1a-27d74d94f241/",
          "id": "bde63eba-e854-4699-88f3-5da7eb04a0b5",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b6df3f0d-5b14-4af4-a0b1-6a501284f574"
    },
    {
      "can_open_position": false,
      "symbol": "1NAT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4dd97317-756b-41b1-8a85-3661c3aea474/",
          "id": "f27157c7-f62b-4763-86b9-fe62b51cdbba",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "46a20c74-c7f1-47bc-845b-43514fc2128f"
    },
    {
      "can_open_position": true,
      "symbol": "WING",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cb64c837-faf7-4ba2-8cb2-1007d2f21292/",
          "id": "dcbeacab-f7a9-469d-8597-ddeae89c1f16",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "61dcad68-8de6-44f1-b1f0-66c32e915000"
    },
    {
      "can_open_position": false,
      "symbol": "2GS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/801a9500-8a61-4e1c-ae76-0beb4a135fb1/",
          "id": "98f999e5-70d4-4fd5-8c3d-09c058e82b01",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "f448f21b-786c-437c-b6f2-aa9091f286cd"
    },
    {
      "can_open_position": true,
      "symbol": "ANET",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/74afdd4e-9ddb-4495-af9a-5c6920522182/",
          "id": "4fb799b0-2adc-43bf-8a8b-88e018008ca0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "91f7b8d6-8c29-453e-b9e0-2767ef94876c"
    },
    {
      "can_open_position": true,
      "symbol": "ADNT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/958884cc-923e-4dea-9f72-3dbe033242c3/",
          "id": "08588e56-7680-4a85-bef4-7a47c5fcb622",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2018-12-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4e2ebeac-1426-48d1-b2af-f98d049b460e"
    },
    {
      "can_open_position": true,
      "symbol": "TLYS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fde7a6f9-2d0e-4421-b337-da37d6f53b83/",
          "id": "4c744190-0205-41af-a02d-f01907e33836",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "75de76a7-7c9d-4f54-9906-89a1cd34470d"
    },
    {
      "can_open_position": false,
      "symbol": "2BLMN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4f4f9a50-aab2-40aa-8568-a43c62a29f2b/",
          "id": "6264121d-f702-4200-b16d-145ab06cf772",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "20193d2b-d1ae-463e-86ce-130a5083c9b6"
    },
    {
      "can_open_position": true,
      "symbol": "WASH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c4b87cf9-9db6-4f6f-8ce2-3492daddb469/",
          "id": "45163c2b-97a1-4383-ac2c-a743276a700a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "06a36aea-85a9-4179-9c6a-617835f0783c"
    },
    {
      "can_open_position": true,
      "symbol": "EOG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/757738d1-3bec-4b19-940c-00105552dcea/",
          "id": "a6794ba0-d08b-45f6-b6e9-facf6b203957",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "acd847f5-0ee7-4459-88b1-fe87ec9ebd2f"
    },
    {
      "can_open_position": false,
      "symbol": "1PVH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3c582020-d702-4c8a-b69a-4df7c57d0f49/",
          "id": "cd910dd6-b8d7-4d71-9f9b-1bdac81ea1b7",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e4bd668d-5d5a-4483-afe6-795358712d2d"
    },
    {
      "can_open_position": true,
      "symbol": "ADS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/703ea7ac-4149-42c0-9011-ff279817ec01/",
          "id": "6574714a-ebdd-4c17-93b1-b7469b27be98",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "cf7b59c7-10c4-4ac6-ba8b-f1273c917969"
    },
    {
      "can_open_position": true,
      "symbol": "APPS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/af8660a8-6516-41ef-97c7-7a5ea9067a23/",
          "id": "8ccf48a0-64bf-4c79-ba97-2945bc6e7981",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7919b044-da0c-4f57-a75c-b4d4de36ac1e"
    },
    {
      "can_open_position": true,
      "symbol": "AP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c0cca2a2-64ec-45c2-a249-f1ce55cb5f4c/",
          "id": "e610aead-52e0-44dd-9521-3df939307839",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8ef0a2fa-af51-4d42-b908-4f767f14d9d1"
    },
    {
      "can_open_position": false,
      "symbol": "1INTC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ad059c69-0c1c-4c6b-8322-f53f1bbd69d4/",
          "id": "8730e24e-6842-44dd-a8c6-8d239d4c207f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "311d312c-6ebd-4a5d-9217-7f7412c2f5f0"
    },
    {
      "can_open_position": true,
      "symbol": "CTWS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a458efa2-dad0-40aa-93b2-ea2c1566bbed/",
          "id": "aec3c1e4-bd31-4d0d-8709-6b8f72ba778b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "92d71684-5bd6-4ea3-b6f5-50cfd5728009"
    },
    {
      "can_open_position": true,
      "symbol": "NVDA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a4ecd608-e7b4-4ff3-afa5-f77ae7632dfb/",
          "id": "9ccef7d8-8926-47fc-be72-9d10b5261b40",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "a98d64f5-5d74-4392-a8f3-b22a0c0528f6"
    },
    {
      "can_open_position": false,
      "symbol": "2TMO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9b7ab2ce-b812-4497-b71a-a68d4b57e384/",
          "id": "f585fbfc-04dc-4ca7-93b6-b0deb32cd33f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3b17fe71-3c24-496d-b5c3-c23568564299"
    },
    {
      "can_open_position": true,
      "symbol": "AMOT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0c4b1218-528c-43b6-a2c0-db637c88b3d5/",
          "id": "9a7c3abb-a8ec-4b5d-84c0-a8029cf6c59b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4ef7a0b7-b4c6-41b9-b1b4-451410bcff8d"
    },
    {
      "can_open_position": true,
      "symbol": "ACIA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d4cb3215-5fc1-4ef2-8778-1d90d46f4ebf/",
          "id": "c6252bd5-3d06-4d16-b20b-539395436de3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fe57b348-04f1-41a8-ab96-54dfeaa01ea7"
    },
    {
      "can_open_position": true,
      "symbol": "AMTD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cbffa785-591c-49fa-8139-16d4558ae6ac/",
          "id": "d02bc6fc-c537-40af-93c2-5661daaaa0c4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "92952be8-d76a-46fd-b8c8-69aa045d1a10"
    },
    {
      "can_open_position": true,
      "symbol": "ACRS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/57c8d8bc-7236-4490-beb8-9e5f20fe4d8a/",
          "id": "0a67bfe0-5fc9-4a76-85a6-fc15e19861a3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bb3851ed-e3ff-4405-8fe0-0c158d873dc3"
    },
    {
      "can_open_position": false,
      "symbol": "2RGLD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f98a7251-ab88-4056-9950-3782b2e29d86/",
          "id": "17c8a4ef-442b-4458-a4a5-228ac80bd2db",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6bc569f6-297f-4a03-a2db-69697f800254"
    },
    {
      "can_open_position": true,
      "symbol": "ALGN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fe23fce6-ee9a-4ef6-a882-d59f107cd87c/",
          "id": "3025b470-76a8-482a-983c-6d91274cd9bc",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "aa254c0c-8632-4ed2-b723-18372cbdd582"
    },
    {
      "can_open_position": false,
      "symbol": "2NVO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2e21c3b3-0015-4661-af59-e2d5741bf55d/",
          "id": "a997d13a-a531-4324-bc36-eb3ae07760fa",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8d668fcb-aa7e-4874-bc33-7cc45dd782dc"
    },
    {
      "can_open_position": true,
      "symbol": "ACWX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d1d5d438-699d-499e-bf03-43575b272602/",
          "id": "613d6e6d-40cf-4c91-bb4f-5ff87d74fe7c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "43a40a9d-904d-4c05-b68f-f0d78253c54c"
    },
    {
      "can_open_position": false,
      "symbol": "2OXY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/35739e4a-7c80-495e-b5b8-55b281a11c30/",
          "id": "dbbfd192-df75-4fa1-8367-02508b39dd78",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "b35c2f43-a60d-49eb-85bf-b872e5baffd0"
    },
    {
      "can_open_position": true,
      "symbol": "LANC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/91776b4e-43e0-420b-b75b-17f752482da8/",
          "id": "9df8bfa6-f5cf-4780-985d-86d98be02fbf",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "061359b6-54ba-4c65-a1bc-779998e90fd6"
    },
    {
      "can_open_position": true,
      "symbol": "AG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/928e6c61-d500-46a2-9fb0-19aeebd5553e/",
          "id": "0a40a55b-8603-46ad-86b7-3bc196cc9228",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "04c9b0cc-164d-4460-866d-f8e626fd24c0"
    },
    {
      "can_open_position": true,
      "symbol": "ACRX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cd71bfd5-c85d-485e-a6bd-877215a810e3/",
          "id": "bcc70c01-7510-4709-a6f0-9bc5d780bbc4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "38cf4700-b443-43f6-8593-316d6407c7c8"
    },
    {
      "can_open_position": false,
      "symbol": "1NVCR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4d591f16-7f0a-4fe7-a369-5346a61c0dfb/",
          "id": "b4de1214-7407-4f01-8b1d-1cf530a5560b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f0f60da2-ff74-44be-8c9f-b392099fc998"
    },
    {
      "can_open_position": true,
      "symbol": "EUFN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/803379b6-3167-4edf-a567-393a4d1768b7/",
          "id": "20562ec2-1489-4781-8a1c-0656ae550492",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "43b0bd8c-5d81-4d6f-bacd-fae5589520f2"
    },
    {
      "can_open_position": true,
      "symbol": "ABG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c612eb3b-6986-4717-829b-904c4886afd8/",
          "id": "af0f5367-94dd-4943-9bc5-02e300cb36c5",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d520da16-b904-4d37-9ecd-4f07fc0b7ab7"
    },
    {
      "can_open_position": true,
      "symbol": "ALNY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9bb14a9f-5386-4bc7-83a9-80246a43f296/",
          "id": "917f0cb2-54ca-404f-91dc-f104cf107325",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "40feeb0c-98a7-44c0-b032-adbeebc15b8e"
    },
    {
      "can_open_position": true,
      "symbol": "AAU",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6535d304-b4cc-4d0b-a972-33b2cbe57f9a/",
          "id": "ad59030c-7f1d-4da0-9ec8-240b658ff798",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b4583f51-5478-4e7e-9489-8c88de19d43c"
    },
    {
      "can_open_position": true,
      "symbol": "AGM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/da1f07fd-0b24-4b6b-8aad-c783e186470b/",
          "id": "9e94e5dd-74ee-467f-a2ee-a646f495afec",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2d93f8e3-0f87-4679-a3d2-f441f8b061da"
    },
    {
      "can_open_position": true,
      "symbol": "HGT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fcfe101d-806f-4cfe-aa36-e4d74dfc06a2/",
          "id": "a97f4a8f-c9ba-4634-877e-cc931185f15f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a6da3f7d-dfc3-44bf-b4cb-f789090783cc"
    },
    {
      "can_open_position": true,
      "symbol": "AMT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/945b391f-6354-47c3-84ba-87c1898242ae/",
          "id": "6d7cf1fb-30ed-4057-a887-2a7fcabd3349",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9607741b-ead0-4d09-ba60-2adad019a93e"
    },
    {
      "can_open_position": true,
      "symbol": "UL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8f424566-aa16-4569-96ab-1169137546ee/",
          "id": "08f62c2f-024b-4e5d-824a-c61e9abd4714",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1f50b8f8-f5ab-4f8b-b09f-408ef1f8bb38"
    },
    {
      "can_open_position": true,
      "symbol": "BKCC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/481b601c-34b2-4077-9f89-a3f20101b663/",
          "id": "c5ca5430-e08e-4c4e-a378-cd7748117a00",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "84189585-174a-411c-a6a1-ff9646ab2074"
    },
    {
      "can_open_position": true,
      "symbol": "INOV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bddf8fff-d7f8-4f29-87a8-54516c577b65/",
          "id": "ab63034b-ba6f-4866-88c9-5830623a8fa3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "43f0cbba-36f5-43e9-a7d6-66a9916ebda4"
    },
    {
      "can_open_position": true,
      "symbol": "AGR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ddda0380-1b42-4b2b-a635-45c2d38bd3a9/",
          "id": "8f4e9d30-4e0f-4e82-93a9-3e903a70d757",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8a8daadf-13a6-48de-abaf-9f3db6644960"
    },
    {
      "can_open_position": true,
      "symbol": "AHL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d35dc66e-83f9-416b-9d1a-fbd75669177b/",
          "id": "940f2a3e-3b9d-44ee-b5b8-8726e09f0858",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9a28367b-0287-4086-9660-4ddafaef95eb"
    },
    {
      "can_open_position": false,
      "symbol": "AMGP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/950025b5-55a0-48ed-8af5-0b5d0c2f2c11/",
          "id": "a98cd7d1-2f9d-481e-8083-a15cd8f59d30",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "17fd63c4-39de-4f76-a858-098dc72f8579"
    },
    {
      "can_open_position": true,
      "symbol": "LINC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/364a9ed7-b543-479f-9bea-8af41abb15f1/",
          "id": "db5daf31-8c80-4582-8b8d-0aa5e6efeeb3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "48e80240-7c54-437a-a398-179da84bbd89"
    },
    {
      "can_open_position": true,
      "symbol": "ARCB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/125dcac2-0414-4880-8495-ac285ad06973/",
          "id": "dc86d3bd-0f0b-4757-b1a3-de2b7397e697",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4fec61b2-07d9-4bec-8742-939d49014df7"
    },
    {
      "can_open_position": false,
      "symbol": "2MMC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b9127775-ad8b-4918-a8be-722983abe4a1/",
          "id": "51d1e41d-d7f5-43d0-a45b-2c1bc44c5cb7",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3ecd4e7e-2616-4f88-85c7-56a989342686"
    },
    {
      "can_open_position": true,
      "symbol": "GSIE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/937b7323-2c6a-4092-b1f9-5679e262df03/",
          "id": "36912001-c6e2-41cf-bacb-1757617021ce",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "93a97c95-6eba-44df-ae3e-ecf757bc7ca3"
    },
    {
      "can_open_position": false,
      "symbol": "1UTX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/573f5d40-f2b6-4a35-b141-b1eeeaa8b4b9/",
          "id": "fd440c13-5f2b-4ccd-882f-6153285e3409",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "ae46294f-3901-4bc0-aa91-ff90f7b889b4"
    },
    {
      "can_open_position": false,
      "symbol": "AFH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/65e5d810-6949-4c36-bc15-0cdccd0e771e/",
          "id": "e4d99724-4ae1-4b39-8deb-75225b5605d0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "183798aa-9eed-4c45-ac37-5c9a069f3401"
    },
    {
      "can_open_position": true,
      "symbol": "BNFT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7329d674-e24e-4847-8ffd-a5b6f151deac/",
          "id": "b5439c61-3be4-4f41-a147-4ef2facb2fbf",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1e786b9c-bf5c-4469-a043-056cf507fd15"
    },
    {
      "can_open_position": true,
      "symbol": "SKT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a62a4223-747c-4140-884d-f2cb0ac4446b/",
          "id": "922455ed-91b0-4dad-9c2c-ae555c5bcfc0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "cbeae252-be1d-431f-ab1d-bb1e8f51c0f7"
    },
    {
      "can_open_position": true,
      "symbol": "PDM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/da27a6d9-8e4b-4158-9fa8-727925092847/",
          "id": "2d74670b-a56e-475b-bff6-be95849b8d20",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "98ea6f2a-ab27-47ea-9b27-a06b411081f7"
    },
    {
      "can_open_position": true,
      "symbol": "GG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9e5b37d7-0982-4048-908c-fe6dbfeac0e6/",
          "id": "2e929c5b-a3c3-42d5-987f-b01557eb626f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "050f778a-83a4-4de1-9f85-bf26e40781ed"
    },
    {
      "can_open_position": true,
      "symbol": "EDZ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d126e9bb-1e29-40a5-9869-4ab9dfb5c28d/",
          "id": "d3f6833a-c9d3-497f-910f-2f9a2acc4bef",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d1f9616a-6c7e-4a1c-9eb5-095771bb98a2"
    },
    {
      "can_open_position": true,
      "symbol": "NH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/31b92191-2d47-4ac2-8ee8-fd1bfa06973e/",
          "id": "a53d60f4-1075-4d44-9dcf-40b47eec6843",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "890232be-d0df-4c56-8378-51caf6e386ad"
    },
    {
      "can_open_position": true,
      "symbol": "VRNS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/13f59c49-0fb9-40e5-9457-a9512a693b23/",
          "id": "519d3d51-1bb4-45c2-ae40-bf8f74d44e18",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1ab3abb0-1a3a-43d4-867f-2088b39e3da6"
    },
    {
      "can_open_position": true,
      "symbol": "ATNI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e845fe7d-360a-47a6-a905-ea57f5bcb4a6/",
          "id": "bdc7db0b-820d-41f3-b154-6c7f9a6c987c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "27a68f2a-ff09-4dee-bc03-fb9bbbb6e714"
    },
    {
      "can_open_position": false,
      "symbol": "1LHO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/78a5a365-6ef0-48a2-a45f-b9c0ee7f612f/",
          "id": "dfea1200-82eb-4a09-aa07-0756325324d0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ed9887ef-2d6c-4a59-9e8c-e57de3a7ac2b"
    },
    {
      "can_open_position": true,
      "symbol": "ISRA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f4832a26-7550-449d-81ad-c0ae968013f2/",
          "id": "996b47ba-252e-4111-92e5-ea376480808e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8f8720e2-3b1d-43ff-9d5a-b50bae3b12e0"
    },
    {
      "can_open_position": true,
      "symbol": "ANDV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/49e00c12-983a-4761-bef9-18e20c64ae85/",
          "id": "19e17c0a-6097-4a5f-a3f2-e8c21d51d99b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "d2c6ec64-a964-498f-a49b-7ada73b7cfc9"
    },
    {
      "can_open_position": true,
      "symbol": "SKYY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f6e62be8-98df-4cfd-a066-7c1e8f3a91c1/",
          "id": "cf31e9b6-7b3d-4565-9dab-9665cb55e3f9",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e552a18e-bc85-4372-acd6-1f1f132d371c"
    },
    {
      "can_open_position": false,
      "symbol": "1MAR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4f1c5faf-e387-4c95-b0dd-31aae1df26a5/",
          "id": "b4231939-02e3-4e1e-b9b7-a1dd28bd537e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7b6447dd-da85-49f2-aaeb-3a88d57f3759"
    },
    {
      "can_open_position": false,
      "symbol": "1PSEC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8e5364df-f466-421f-8578-30ec8f0c0e2f/",
          "id": "2b8315a8-b7b5-4886-b91a-561fd7720aed",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "438e123d-4476-43c9-baaf-921ea47afe5d"
    },
    {
      "can_open_position": true,
      "symbol": "CAG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/01b8488f-1ceb-461a-835d-c4ba04498387/",
          "id": "72840838-a062-44f9-8c0a-591cac7df6a1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e30655d5-70e1-479f-8b46-de4730497a90"
    },
    {
      "can_open_position": true,
      "symbol": "BWEN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d3e24a41-e0e4-4728-b0dc-76ec4e20e060/",
          "id": "17df34f3-58ac-4b83-8caf-2db07dd88edc",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "292f07c0-e320-4270-b1dc-6fb5873e42aa"
    },
    {
      "can_open_position": false,
      "symbol": "2ED",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d6d63722-72cb-4044-8759-f8a9c9cf468c/",
          "id": "c677dd95-6486-455a-869b-95ea8dbc2734",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bd0f9279-513b-4f13-b22d-bf998a7680f4"
    },
    {
      "can_open_position": true,
      "symbol": "ACIW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/21abb646-5ab3-4805-8289-6f125d1e2a99/",
          "id": "048f78fd-850f-4014-8da3-5bf0630729bc",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "79b29c4f-89ff-4eaa-b283-3f38d4ce98ba"
    },
    {
      "can_open_position": true,
      "symbol": "ASA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9e9d5fb7-bd7d-4207-bf98-0ed118d331f5/",
          "id": "86d189ea-7d42-43ed-9216-7bc37343172e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c59d6987-77ad-4517-bc78-8c4dd5b20255"
    },
    {
      "can_open_position": false,
      "symbol": "2STI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3e0aa559-9e2f-4303-a773-db2a319af9b5/",
          "id": "8da1a0ce-0be9-48f9-baa2-980239006b38",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "6486a99b-dec8-41f2-95d7-1cd9a4f8d3a1"
    },
    {
      "can_open_position": false,
      "symbol": "1VRX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9a02028d-f296-418a-b061-7a3b40981d9e/",
          "id": "402542fd-1cdf-409b-9ea6-9aef8e87ec12",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "de0a133e-a3b2-433a-9a7c-ba7f9d288a73"
    },
    {
      "can_open_position": true,
      "symbol": "ASRV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/572439a9-aba5-4483-93a6-726c4ec853c4/",
          "id": "af7b9e28-141b-48eb-8e02-93904ffcc7cb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7c62bd5e-fc51-4672-a7f0-c3fe1c8e24e6"
    },
    {
      "can_open_position": true,
      "symbol": "CC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9b6ba182-5c96-4133-8299-25f5c67717fd/",
          "id": "b9458799-0917-4e0b-88ca-016b120ad8fd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "11b9a624-a460-4bdf-9529-1003b3814047"
    },
    {
      "can_open_position": true,
      "symbol": "CALD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ab57470a-812a-4dac-b727-b05d94622f7e/",
          "id": "66d20362-b1fd-4a9f-a38d-5c0402f903ae",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "17364774-cf92-4c89-be09-fa3bc42434e5"
    },
    {
      "can_open_position": true,
      "symbol": "CAKE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a28685be-7b83-4f51-8078-82f38f8b7f01/",
          "id": "6557762a-825d-49aa-a3c5-9127ca1832f9",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c43988fc-ed58-4475-bd38-ab87108d785f"
    },
    {
      "can_open_position": true,
      "symbol": "BBD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/71c5aaa1-4729-41a3-ab63-f98c780b88ea/",
          "id": "9b153f95-e3f2-44b7-b4e9-0e011d0fcca7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "563e389c-53a9-4a39-b223-131e7c9c4b24"
    },
    {
      "can_open_position": true,
      "symbol": "ACCO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/891f04eb-73b9-4af6-9550-c6d43af9a3cf/",
          "id": "bc59619d-29f6-4a62-a090-beaf32f5c732",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "64d0caf6-659d-4a54-a7ed-1201ca2ee501"
    },
    {
      "can_open_position": true,
      "symbol": "NEWT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b7727092-28ac-44f0-b021-b9a6b0b5682d/",
          "id": "e6a6b574-aa96-4b42-b680-788fdd9062e2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "634c86d9-2fb5-49d3-9dc6-c630bbd887a4"
    },
    {
      "can_open_position": true,
      "symbol": "CWI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7786c5e2-6ca6-4efa-8cd7-dc6c805078c7/",
          "id": "5bec7a37-5754-47f0-962f-d11075fb41ab",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "432d5d9b-e892-4c38-880e-5d67d4287531"
    },
    {
      "can_open_position": true,
      "symbol": "IHE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/4027c541-791b-4011-8045-7bd98a2e7579/",
          "id": "916ea693-0704-4ee3-96cd-d71cdb19c68b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4da81f6e-40f5-49ad-b9b4-9610b52bd343"
    },
    {
      "can_open_position": true,
      "symbol": "DEM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/79f20bfd-cce5-4289-b893-8292f6ab8529/",
          "id": "ece770e9-8658-4a8f-b81e-351d7fe28253",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "cf77bb3d-da75-4ddd-8935-1c2dedaf9d78"
    },
    {
      "can_open_position": false,
      "symbol": "2EFA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c787074b-0abb-4940-846b-dbee221dd10f/",
          "id": "88c6c0db-df3f-4a97-9f9c-1287313ca2e1",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "ab498355-c2b8-45f1-bfc8-4fb85698fe08"
    },
    {
      "can_open_position": true,
      "symbol": "LBJ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f1d1315a-ecc5-4123-afed-55710fa68714/",
          "id": "4d1d4cd5-9848-4198-be08-d97a13f3c515",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b23c980b-4696-48d9-bbdf-ee5e02f2d886"
    },
    {
      "can_open_position": false,
      "symbol": "2DWDP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b4f560bd-65c4-414c-a249-abf8eb9a91a8/",
          "id": "e5b9a73d-4276-403f-824f-56f53ec01b4b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "42e58dae-dd6c-47fe-b3d2-7f3df2c9a351"
    },
    {
      "can_open_position": true,
      "symbol": "SABR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0dbaeb45-748d-4a0f-9adb-29bcb57754bd/",
          "id": "0296592e-3f88-4844-a69e-44fe6688c12e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6928194b-3983-4ce2-bfce-ebfac410223e"
    },
    {
      "can_open_position": true,
      "symbol": "ALXN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0bae0083-a855-44d5-9b9c-8b55d8aca130/",
          "id": "391a5a69-546c-4819-a4a5-d9624b445427",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9f44af74-4480-4032-8924-076b751c0126"
    },
    {
      "can_open_position": false,
      "symbol": "2KMB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8cdd3bb0-d16f-4603-a43a-d97f42281de4/",
          "id": "882a7861-8182-414a-8911-a63cc23a420e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e63a5f63-0bc2-48fa-936c-270481c9baa3"
    },
    {
      "can_open_position": false,
      "symbol": "2MU",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0a8a072c-e52c-4e41-a2ee-8adbd72217d3/",
          "id": "9a4c2b0f-44b2-4783-964c-de941014bcff",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "e464e8d6-bb17-43f1-a856-ff6c771ebe8a"
    },
    {
      "can_open_position": true,
      "symbol": "FXY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/97541af2-5d17-4241-a3bd-f1a40b142e8e/",
          "id": "bddc7fcb-22d6-4c19-9b4a-30a119d66d01",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d9b3f1ff-0613-42aa-8cf1-ddde927f93b7"
    },
    {
      "can_open_position": false,
      "symbol": "1DHI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f11ceb10-cd83-4c75-86c9-022b587f2b65/",
          "id": "4bb884b8-1216-4e9e-8941-993d186cf6f9",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "5ce4febb-0a91-4d46-8bd6-eff1ec8973d9"
    },
    {
      "can_open_position": true,
      "symbol": "FRED",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7ee3843d-e47a-447a-bdca-eb985bc059fb/",
          "id": "d202ab0e-39b9-42e6-a158-8e6e63afa39b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0bdca2bb-aeed-4317-90dd-cd8be38e7e38"
    },
    {
      "can_open_position": false,
      "symbol": "2ITW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/89393710-eae6-4f05-a9c2-cdc9f120741d/",
          "id": "715cd8ae-05f9-417b-97d3-eb815af4b930",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6fd3ec81-8682-460f-bdb8-6569351abe11"
    },
    {
      "can_open_position": true,
      "symbol": "OMCL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6671d2a5-b273-4815-bbb8-20521b4c00d8/",
          "id": "cf93852e-8d71-45e9-a993-b6eef63850f7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "964fa7cb-6f9a-4596-8ba2-f68b955d3bb6"
    },
    {
      "can_open_position": true,
      "symbol": "MVO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cfc3ddb1-0c20-4653-a722-0141db1c7be5/",
          "id": "d6356c74-d33b-4569-9cf1-e93f2e8ddfbb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a1ddc0fc-e832-4715-a9b7-337de6ecfa34"
    },
    {
      "can_open_position": false,
      "symbol": "2PUMP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8c2988c7-5775-463d-9296-31406c778829/",
          "id": "a4cb2ea3-9c4a-4dce-82db-d4fdcedd1569",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "767806eb-3d46-464c-bb4d-310b5152bd24"
    },
    {
      "can_open_position": true,
      "symbol": "AINV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/18bbb39d-38fc-4a06-bf98-5d9395d43118/",
          "id": "a0be9f30-2ddf-48db-9538-32da1e9f2b10",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "015a50b4-7332-4b91-848e-46ad15e9b610"
    },
    {
      "can_open_position": false,
      "symbol": "2GE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/39ff611b-84e7-425b-bfb8-6fe2a983fcf3/",
          "id": "638a08bd-5f5f-45f1-867e-af8226973db4",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "7510af00-3918-464a-9d8a-18df86bd19f9"
    },
    {
      "can_open_position": false,
      "symbol": "GHYB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d73c5f12-92c6-419f-b252-a314620d3edc/",
          "id": "f501c481-8cf2-45bd-be55-35a977c0d0d0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "50f62130-3173-46f6-bf04-052906e3da46"
    },
    {
      "can_open_position": true,
      "symbol": "AEO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/44959d1c-a70c-4826-9d6d-85e72c601f1e/",
          "id": "ebbaf481-526f-4d9b-9556-9413e018d900",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d47ef399-7da3-4365-8dd9-e4eaf65cb914"
    },
    {
      "can_open_position": true,
      "symbol": "YY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bd444de7-b34a-4685-ab58-63e808f4fa16/",
          "id": "edacae82-380e-421e-8f92-756b2e4abcbb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4f39606b-263c-4b5f-a610-2b24dad47f20"
    },
    {
      "can_open_position": false,
      "symbol": "2ABBV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/279e98b9-2e23-4cf2-90ed-c085ea472105/",
          "id": "5762e7da-f64f-478f-9d19-1aa59cf26daf",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "868d7d01-ae54-4bda-b407-7d7a6bd6555f"
    },
    {
      "can_open_position": true,
      "symbol": "MGRC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/be109423-44d4-498d-b224-b92e56f29bb3/",
          "id": "1c24c5ed-60e4-4f71-bd19-df436665bc2c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "037ba0eb-a52d-4902-b717-992e8fc6dfd0"
    },
    {
      "can_open_position": false,
      "symbol": "1RRD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b6b5d7a2-6273-4900-81f3-10befeb16f6b/",
          "id": "ea59f65e-0cdf-4e1d-8cf4-304a5b1c3b34",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2d7ac340-08d2-4aa1-9e5a-5298ba7e8f06"
    },
    {
      "can_open_position": true,
      "symbol": "CCL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3324b13c-dc23-40e8-8807-76d87fdb09ed/",
          "id": "d9acdcae-45ec-45a1-a46f-0ab04e9b7418",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "26cb3176-c6c4-4cc2-8602-898cf73f3f96"
    },
    {
      "can_open_position": false,
      "symbol": "1BUD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5c5e7fb0-e80d-4809-a362-04eefbc1fd81/",
          "id": "3724201e-2b34-4cf5-8ec5-0510fa79613b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6a851c1a-0323-420f-b9bf-c4eb0287c1aa"
    },
    {
      "can_open_position": false,
      "symbol": "1DE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ec0390db-bc8f-4d46-9353-dc736099d0fe/",
          "id": "f1ac863e-385f-4260-91dc-8954d8805bc2",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "5f249b28-3a6d-4d6e-af2d-695492f4d0c2"
    },
    {
      "can_open_position": true,
      "symbol": "ABC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2db426d6-099b-4406-a76f-547e00f4e35b/",
          "id": "dbd3913c-6d07-4292-aa85-ebe704ee3267",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8997eecb-bca7-4700-9fea-622f8e072e81"
    },
    {
      "can_open_position": true,
      "symbol": "WAIR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/705645eb-c38f-4436-8b00-b365532d4d5e/",
          "id": "66b6a7de-b20b-4719-a7eb-4ad1093d8806",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d46cd83d-24d6-4403-b5ee-d9d49fe66da8"
    },
    {
      "can_open_position": false,
      "symbol": "1BJRI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/12897c3f-d55a-4224-8d06-44de68dc1938/",
          "id": "6e2dccc3-bee7-451c-a31f-bc4c708f4028",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "94e3dc20-8f47-4b51-962e-03554b43ae39"
    },
    {
      "can_open_position": true,
      "symbol": "ARW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/15df2462-62e9-4027-82b3-a8f110fde919/",
          "id": "7287f60f-e999-4a8a-bbe6-3b49e55c3404",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "053ff101-594c-4790-9c5d-54b940898979"
    },
    {
      "can_open_position": true,
      "symbol": "EDR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/37b54672-2930-46b9-9626-f65453e65acd/",
          "id": "5f6a37af-00b4-4031-8b9e-eef875e432b8",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "92ee143e-0953-4148-8126-02cef9105fe3"
    },
    {
      "can_open_position": true,
      "symbol": "ARTX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/54e3b5d2-5aaf-42b3-a77f-91ed90bdf1fe/",
          "id": "23db304b-95f2-4589-b6be-53ffa57e11c1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dc2ae7cc-347d-4271-8aa9-b5aa3bc30e55"
    },
    {
      "can_open_position": false,
      "symbol": "1ELY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2e75b608-dfef-401c-b471-4cb379fd61b6/",
          "id": "43d4bf69-6e90-4ca6-92d4-fd1aaedb3b42",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3485df57-f690-4bdd-8adb-26818fd56a9a"
    },
    {
      "can_open_position": true,
      "symbol": "AUPH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/24fb7b13-6679-40a5-9eba-360d648f9ea3/",
          "id": "b024da47-b0b2-4171-9411-64125b5934e0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8ff6949b-561f-4749-b03d-6178bfe6269b"
    },
    {
      "can_open_position": true,
      "symbol": "SHO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bbd1a8ae-5da8-4648-ab1f-db122a9d4ae2/",
          "id": "37280f60-d7c8-40ca-af65-694f82c8e53a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a85d1ebc-f293-4951-87f4-81ece312d7cf"
    },
    {
      "can_open_position": true,
      "symbol": "LSI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9df1c597-a0a8-4414-bfea-2fd98b5702e0/",
          "id": "669a00e6-4450-4451-8fa1-7765790a7ae5",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7bbb97ab-f5f0-4635-b170-7c621f6ca7ab"
    },
    {
      "can_open_position": true,
      "symbol": "URTY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/af05d9ed-68e7-4eaf-b93c-0298b37d806f/",
          "id": "87298611-3643-4312-a72e-6a47f5f31b9b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "df8d119d-b4a0-4d3b-9340-6c82e4ae5dd3"
    },
    {
      "can_open_position": true,
      "symbol": "PHO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f5d13c7b-b7bf-4e9a-895c-49da48770cc2/",
          "id": "04265c33-109b-480a-aebb-53d32470ce91",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fd97b816-2a15-40eb-bbdb-246b9b7baf43"
    },
    {
      "can_open_position": true,
      "symbol": "RGA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5bd283d4-3a67-4765-ac91-97c25e21d8be/",
          "id": "97e3283c-2d6f-4ce3-a10d-4c23f538e48e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f51372d4-53c5-4c05-9986-c70d0fff81bc"
    },
    {
      "can_open_position": true,
      "symbol": "CO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/799bf2a0-b261-4ddd-8c9d-10bc871f2d7a/",
          "id": "48c38d0b-8c93-4bfc-93b8-6d7c1a863bec",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "94e66dc6-0a2a-4b2c-9d0e-9e5b3f6a2b0b"
    },
    {
      "can_open_position": true,
      "symbol": "TCX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a8fe7197-e346-4a2c-a23e-12e96aa96066/",
          "id": "b125b1c2-41c4-4de4-9995-21ef24044523",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "10e90904-ff38-4a25-ad58-336c7169c52c"
    },
    {
      "can_open_position": true,
      "symbol": "BUFF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6d2b2e14-8fb3-4b9c-a640-fe8d4d161656/",
          "id": "2873d058-ae2c-4172-a94f-ea3aa6644997",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9f9f7313-3080-45f1-82f8-ede6dbad1b24"
    },
    {
      "can_open_position": true,
      "symbol": "TWO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/97aee052-669d-4288-bb1b-4208e4632a1c/",
          "id": "fa1c9f20-b8db-4cb3-989a-75d973bae3c0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "948fa3af-91f7-4914-830d-dfe367d5184c"
    },
    {
      "can_open_position": true,
      "symbol": "MBI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b26ebf55-4c71-4619-92f1-17674cbbd2a0/",
          "id": "ca3176dc-d97a-47c0-97d1-f92775c62d82",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "731d2521-d4d7-4c2d-8dfd-908792c989ed"
    },
    {
      "can_open_position": true,
      "symbol": "ROBO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0e0b4f57-aeee-468b-90d2-0f5aa2236bb8/",
          "id": "9c26b9ed-c6e7-4c0e-b81e-fcdab48c12fe",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f9d07d76-0d4b-426a-9530-00e3d864dea0"
    },
    {
      "can_open_position": true,
      "symbol": "FCF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/beaa80aa-8f1a-4823-af9c-d3861e85bc82/",
          "id": "ba6b235c-eaed-4041-99e7-a89b13216163",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e86552e0-43ed-4625-af91-be8f71339ae1"
    },
    {
      "can_open_position": true,
      "symbol": "ADP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a6f14684-8867-4a17-b352-c99b1d5b36dd/",
          "id": "93c7eb57-bea5-49ba-8425-4abf03e12762",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2c6ec4e0-30fd-401e-8928-10bc012f81e1"
    },
    {
      "can_open_position": false,
      "symbol": "1NGD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/76ae220c-6845-4953-a8ed-c9bbb175d826/",
          "id": "a9988aa1-bd1c-4c2a-8f28-4ec5dedf2efb",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5a569972-277d-4397-8856-58ce3bed02b5"
    },
    {
      "can_open_position": true,
      "symbol": "CTRN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7fc98609-2730-4315-9b89-5ebbdfca4bbd/",
          "id": "99e24878-1963-4b97-843d-be02d4bb845f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b4a89fa6-7e7a-4b8b-a006-8e4503c3d646"
    },
    {
      "can_open_position": true,
      "symbol": "WAGE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/58ce8962-5678-45b9-8fb9-f5a9928ca1c6/",
          "id": "8073aa10-7ce5-4930-a8ac-ff0fbb7c90cb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c5685b3e-10ea-4a33-bead-10a95b69a5f6"
    },
    {
      "can_open_position": true,
      "symbol": "CTS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7b22c47e-2aba-422c-a281-19e28f6732bf/",
          "id": "b2bcc940-e6da-4013-8bf5-8b905b0cbe5f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "702c8abf-4e40-4de2-b944-5191220ad316"
    },
    {
      "can_open_position": true,
      "symbol": "PEGA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e77841ca-a6e3-4ad4-99d4-882dbc3e7366/",
          "id": "d34154c4-fea8-4f28-8ba5-8ae7ddda043c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5b8a75ee-05ed-406c-93bd-c11de028a581"
    },
    {
      "can_open_position": true,
      "symbol": "CEVA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/55e0f001-2530-4f6f-b493-cb8fb76768fe/",
          "id": "3dae1a20-6308-413f-b66b-b9c9059afebe",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fd627d49-3f64-4388-b991-fca989083d6d"
    },
    {
      "can_open_position": true,
      "symbol": "ACAD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cde4651a-baa8-4a39-a384-20dc471ed01f/",
          "id": "8cd801b8-cd7e-4e6a-a7e8-fa9409df2795",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "38593adc-6704-4d23-bef8-9fcc17ce0c4f"
    },
    {
      "can_open_position": true,
      "symbol": "AHT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/50a4b90f-1071-46f2-9cce-0e40a58f5fb8/",
          "id": "906211c2-6acc-4415-8a08-5854e5f5d527",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "171b6455-68b7-44e5-b10c-103e055b1894"
    },
    {
      "can_open_position": false,
      "symbol": "1AHP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dc4f0913-cd05-40bf-a8a8-568b2ffaf83f/",
          "id": "4b2df40b-2ac6-438a-8a25-82a755c4caca",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "88d23253-05f9-43bf-9190-ea18c5d49c2c"
    },
    {
      "can_open_position": true,
      "symbol": "MLNT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d6ca562f-84d5-4f47-b5d0-0f6eaf5777b7/",
          "id": "3a26cada-80e2-46d5-866d-b5c2f6215b2e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f803fa70-3b0d-4d51-8129-d7d7c62e4a80"
    },
    {
      "can_open_position": false,
      "symbol": "1TJX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a11c6edf-be6e-4e95-9362-8f03076df910/",
          "id": "0f8da7e8-a2ae-4d28-89b8-e6594483ea15",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e5c30d46-0d19-4e1c-ae8f-5e4fcafb2875"
    },
    {
      "can_open_position": true,
      "symbol": "SIR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5dc79cc9-c91d-4c5c-a7eb-793195bc4c64/",
          "id": "1bc06a2c-1a4c-43a2-abfd-7aaf199801a4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "749eec95-9b33-47fe-8c88-2e4131ae6cb2"
    },
    {
      "can_open_position": false,
      "symbol": "1MRK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/25055233-cdb6-4e80-99f2-13ed1ce5a30a/",
          "id": "a346a91b-60a0-4ae3-887c-6e00abbd37d0",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "c4742e3c-5a8c-4a76-ba20-ab203a630db4"
    },
    {
      "can_open_position": false,
      "symbol": "2NSC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6b72a37d-5be3-41f6-bad7-f7c206a4ed85/",
          "id": "a0734f87-10d9-4c87-bd0c-2a9a995e4670",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d2f5cc05-065e-404a-8c08-cbb391dbc2e3"
    },
    {
      "can_open_position": true,
      "symbol": "IYM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/be816c58-6023-47a3-a1f4-005c2eadeea3/",
          "id": "29644a8b-6dc8-44f0-acf5-d87a13165edd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "64bf0523-1746-463c-940e-8c47a2fc7aac"
    },
    {
      "can_open_position": true,
      "symbol": "YUM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f2e70397-8a4a-418e-b476-54c8353ac6b5/",
          "id": "8f988113-1795-483c-b6d2-4f6622afe21a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "77a82e2e-11b7-40c4-838e-27c86d4b123c"
    },
    {
      "can_open_position": true,
      "symbol": "GMS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/16864966-263e-4a5c-b6c7-d8f24d99e2d7/",
          "id": "1990d0f2-d6b9-4cbe-861e-b70ac0d65349",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ec4af77f-9be1-44dd-ae7b-946262b0cd08"
    },
    {
      "can_open_position": false,
      "symbol": "2PII",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cb62b1d5-3c81-41ce-a3f8-76097cceecd3/",
          "id": "c55f2d49-1ad6-4b32-8191-a7e29147d2e3",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a0bd3be0-54f5-4644-b3f9-224f1a036b7a"
    },
    {
      "can_open_position": true,
      "symbol": "CSX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c67150f5-a4d6-4bc2-940c-303482da4200/",
          "id": "13c2504b-b87d-4473-ad2c-5b8c8c1c0def",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "cbd87066-6a05-444c-bba1-e8e18c16dc93"
    },
    {
      "can_open_position": false,
      "symbol": "2AVGO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/698f04e6-1710-4f34-b7af-4a88fe5e47b3/",
          "id": "c8901b2b-9059-43d4-9d48-2eb3fec98a1c",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "42117fa3-4c0b-4240-a61a-084a9cf8e987"
    },
    {
      "can_open_position": true,
      "symbol": "CVA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d9ce886d-6b14-4dc9-ba21-cf3e280eb1f3/",
          "id": "68a6efbc-08c1-4c20-adab-f1e3d3b65683",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "268721fb-0069-43f8-9b62-30a0783b668b"
    },
    {
      "can_open_position": true,
      "symbol": "GTE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/346e1393-96f8-470d-a66a-b8ec1f5775c8/",
          "id": "8925b537-b737-432d-bbc5-7509d8d1c872",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "39cbc03f-961f-481d-b143-0161438938bc"
    },
    {
      "can_open_position": true,
      "symbol": "SWX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7bee489b-42a2-4d85-a713-ec1fdfe88023/",
          "id": "24943a31-fcec-4129-9360-0b3a437042d4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1fa1d7cc-c470-4278-8c22-9f05ef25e7df"
    },
    {
      "can_open_position": false,
      "symbol": "1EWA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fbed935e-704e-40d5-96e8-492b36be86e6/",
          "id": "86cf0672-1fb5-4565-832f-4e144411531a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0b7a2b7f-cc74-4fe5-827f-d457634c5f18"
    },
    {
      "can_open_position": true,
      "symbol": "AFSI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b701d4b3-d1df-4ac1-b0cc-0f23150f8a16/",
          "id": "c01b1d3c-4e7f-41c0-915c-5d9b29cfa8e1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0c3ee814-19c8-4e5f-9d6b-085c0faf4842"
    },
    {
      "can_open_position": true,
      "symbol": "SYNT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/283f6d9f-1c9a-4fe9-ae5b-f37cb781beed/",
          "id": "b4d82aa8-456a-431a-a4ed-a8aa3208913a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3e06a099-4438-4c9e-be69-839de83d7d56"
    },
    {
      "can_open_position": true,
      "symbol": "KLAC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/75d8a411-a432-4c40-92a8-839a11b315b1/",
          "id": "abafa23d-3d72-4d47-82e3-9655c4931ac9",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "38cfd5ec-9ab2-4340-bc17-b3305a407d93"
    },
    {
      "can_open_position": false,
      "symbol": "1NBL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/283f6ee0-72bd-4c1b-8c89-0968e4a41b21/",
          "id": "48e5a339-d0d3-4bd7-8f4c-3cd9704e3e95",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b7f4a232-0f51-4d97-b762-f0cd3dcf1c33"
    },
    {
      "can_open_position": true,
      "symbol": "CAR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/76785ab5-6cfa-40e3-817b-99c074f3db5a/",
          "id": "b9ccb611-648d-4d92-9d77-369ba1e95aeb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "79976309-c50b-4292-9c1b-0f52be29fe3d"
    },
    {
      "can_open_position": true,
      "symbol": "EFII",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/394dabc3-aeb0-4c91-a781-68d0d2ea4a67/",
          "id": "e405bc88-406f-44bf-9753-faa96bce7526",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b11d9375-9fd6-478e-8eb7-b8ada6fdd93e"
    },
    {
      "can_open_position": false,
      "symbol": "SYMX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a922272c-6c42-4324-bb2f-7ec85b928c0d/",
          "id": "2ab8c10f-650b-4fbd-84b5-4e3f018f7f1a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a907d2dd-14c5-46e8-a006-657b92fde2cd"
    },
    {
      "can_open_position": true,
      "symbol": "SIMO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/243600bb-ba07-42ca-847f-111b57ac274b/",
          "id": "a98237c1-5a4c-43ec-8ab3-292ec35d2f6a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e1ec0c3b-3db0-4047-b1ce-8fa77a66287b"
    },
    {
      "can_open_position": true,
      "symbol": "CTSO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b995efa3-19f2-4d5e-addf-24a0e0bd1039/",
          "id": "c69202a7-00ae-44c7-882b-585eb1fc86a7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d7f915e2-9ee8-4165-beef-20132be64759"
    },
    {
      "can_open_position": true,
      "symbol": "HYG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/aac2984b-edba-44b4-bf3d-5d1ed8b58542/",
          "id": "a528f803-b888-4bab-a769-5ca488f07acd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-08-17",
        "2018-09-21",
        "2018-10-19",
        "2018-11-16",
        "2018-12-21",
        "2019-01-18",
        "2019-02-15",
        "2019-03-15",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "4a1476e4-84e1-49e0-9849-b27c474936e8"
    },
    {
      "can_open_position": false,
      "symbol": "2TSN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f82caa72-16b7-4750-b9bc-cfe8a7518d13/",
          "id": "44815eb0-3d96-4abc-969e-72ffe6ba14d6",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2710532c-fb13-41c9-b4f4-2240820ea68e"
    },
    {
      "can_open_position": true,
      "symbol": "SNHY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a2e21a4e-dc0e-47f5-b45a-b5b181ab15ab/",
          "id": "5714359d-038a-46c4-9260-33b2b6770a2a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "276344eb-4b79-4135-a232-775d751f7f92"
    },
    {
      "can_open_position": false,
      "symbol": "FMX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0a367668-b07b-4046-a571-6fe63800ad8c/",
          "id": "cd18315b-c78d-49af-a1ff-000f20a38af3",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8b766694-1d2c-413c-965f-baf4626edf86"
    },
    {
      "can_open_position": true,
      "symbol": "RCMT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9ba7bf5b-04d6-4a6e-a2ad-078aae4bacda/",
          "id": "51504047-a376-4411-abbb-afb032149905",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7a427b86-ec14-4fe1-b3f6-d896a5a9d5f8"
    },
    {
      "can_open_position": false,
      "symbol": "1PLNT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ef3960f5-1416-4f83-8dd7-6b7519ba825d/",
          "id": "bf463841-b55f-425a-9647-86f47b51bada",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "30203a99-35f7-4cb5-9a7a-201a598c5ae6"
    },
    {
      "can_open_position": false,
      "symbol": "2BG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ab74243f-2c26-4d10-a7b9-337d5770a529/",
          "id": "1cd6e92e-5361-4c04-9ad9-56c7647da6c7",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4411df67-7210-4116-94c9-b63f8a10c255"
    },
    {
      "can_open_position": false,
      "symbol": "1DKS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/99966b9a-bc63-454f-838d-0a57e7f04073/",
          "id": "4cfff40b-686f-4af3-9a10-57eecc4e9e48",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ce3df6b2-1966-4bb5-b31b-59c9c461f939"
    },
    {
      "can_open_position": false,
      "symbol": "1MDLZ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/988df2af-6394-49a0-94a3-84286fc9f61a/",
          "id": "9bcdca7e-2670-48d6-adcd-702d47b9f7db",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "36589708-c1a8-4501-bb35-3d8ca0972f63"
    },
    {
      "can_open_position": true,
      "symbol": "BEAT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/656b1216-f0a7-4425-9e0f-97358b391b2d/",
          "id": "8a3fb850-3366-49d9-a83a-62052c294054",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "388fb0bd-b4c1-4553-b0bb-d60a183dc658"
    },
    {
      "can_open_position": true,
      "symbol": "BDGE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/987476b4-f2a0-4351-9871-2f2af35ce052/",
          "id": "7b95fe47-078b-4679-bb5c-38bc66fd6106",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "093cfa7f-a9fa-4534-9d43-0f75a6261e0f"
    },
    {
      "can_open_position": false,
      "symbol": "2PXD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2f7878f9-db75-43be-bc7d-8e6995a8a979/",
          "id": "c0bfe46f-a350-4a55-969b-b0a06b4997ff",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d4600195-6516-4812-ad8b-c7e4acce9a78"
    },
    {
      "can_open_position": false,
      "symbol": "1ADP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a6f14684-8867-4a17-b352-c99b1d5b36dd/",
          "id": "f839ae26-cb0d-4375-a615-87b745a2913c",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fd9d33b6-ec37-46cc-be77-65b4d774d95e"
    },
    {
      "can_open_position": true,
      "symbol": "DLN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f960ec94-d588-4a76-86bb-c684c907e492/",
          "id": "70bfb36e-fe4f-4062-b385-c0d7b30d334d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5c912690-8691-47f7-b431-811023279a35"
    },
    {
      "can_open_position": true,
      "symbol": "PST",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e0852d1c-5d95-49df-a330-b9004c42e787/",
          "id": "243226f6-1e1d-42c6-aab5-ba841b522ca4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-09-21",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b25a4f83-3da5-445d-bb9c-ee4cd29bebc0"
    },
    {
      "can_open_position": false,
      "symbol": "WBC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c8aaaf8c-3fa8-454f-8bc3-a7fe8d53cebb/",
          "id": "b37d161e-d37f-4e72-9aa7-180e8f629884",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "523c9621-5d56-4e86-84ca-94763d486909"
    },
    {
      "can_open_position": true,
      "symbol": "HY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bcd0cf29-8140-4deb-b9db-e4e5819f497f/",
          "id": "2c560b82-0b25-43b4-a77a-70783aa7e501",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a837b2c9-ca3c-4eee-a90b-8b21aece1813"
    },
    {
      "can_open_position": false,
      "symbol": "2SERV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a4e985fa-8f0e-40d7-b011-8839b894bec8/",
          "id": "d2b84c14-7bdc-4b9a-9acf-48c6b3646b58",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "541bbdd8-4951-46b4-b66a-2b20dcb04f47"
    },
    {
      "can_open_position": true,
      "symbol": "JILL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cd9ff830-13af-45eb-8feb-21fede6998ab/",
          "id": "05992562-80c6-4ab2-ba68-e4a2da472dc2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "25fbe82e-9da4-4cef-a2d2-eb8d48ac7a59"
    },
    {
      "can_open_position": true,
      "symbol": "AMBA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d5d9f80b-f259-4f5f-b43f-e18b6da0a98c/",
          "id": "be1aac66-3025-4890-a1f4-163ae775094f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3001b7a8-ebb9-4de2-9ad7-22f57c4586f5"
    },
    {
      "can_open_position": true,
      "symbol": "MTB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d387ac65-e9b5-4da5-b825-807ececa75b7/",
          "id": "575a1a46-89df-4afb-9253-57d6a6084122",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "12075c3b-08f4-4164-bbf5-8a2f142e1f48"
    },
    {
      "can_open_position": false,
      "symbol": "TR1",
      "trade_value_multiplier": "103.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dded2a6b-1a48-4d82-8f2d-4486e7e64c3e/",
          "id": "8bd02f22-ba5b-4276-b578-9266c0e84dc8",
          "quantity": 103
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "950449ad-11b6-407f-b363-9c1ed048e027"
    },
    {
      "can_open_position": true,
      "symbol": "ASX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/32babef3-cd96-4dd8-8299-01e9dc302e3b/",
          "id": "4a46db3c-4128-49ae-bfad-8c4c02fafd52",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "23f498bb-83cd-425a-b801-db9a7e0d7147"
    },
    {
      "can_open_position": false,
      "symbol": "2APA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8d286b84-0c1c-41e6-82c4-7818157d636b/",
          "id": "c2088002-3b24-41d3-b31b-e45754fa35fc",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "723b36fc-08d6-4391-b3fb-2c1bbb79a084"
    },
    {
      "can_open_position": false,
      "symbol": "1HLF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5a5866f6-7490-4258-befc-b7e12d07c9e0/",
          "id": "bdecd140-a407-4260-b750-a35b2a64193a",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "58a6a815-aef2-4354-9c72-3e7d06c413fd"
    },
    {
      "can_open_position": true,
      "symbol": "LH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b1d51de1-b1b7-42eb-87c3-6d383091cb3b/",
          "id": "561cf51a-85f6-40b1-a6f1-d441c3950978",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2018-12-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "25c2583d-1377-4d15-97df-84a6980bf390"
    },
    {
      "can_open_position": true,
      "symbol": "LSTR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f426fbf6-1f8a-4899-8b19-fb666528b599/",
          "id": "92c08600-fc33-4fd4-969c-91df4259ecce",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "163cd885-2188-451e-a1ce-8b3d93f86c4a"
    },
    {
      "can_open_position": true,
      "symbol": "NRZ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/91da75e3-1684-4ed8-b976-1be0121aa16d/",
          "id": "9fe25225-e007-448e-8366-a687d019a872",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0f88db9e-986f-4884-9772-854672a77820"
    },
    {
      "can_open_position": true,
      "symbol": "PXI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/39bf6302-8253-429a-b69c-00585c9088b5/",
          "id": "ff41007c-d9d4-4749-a196-8fe03c884fa4",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "46ab1c4d-72df-4de4-9948-9ba0abb1fde6"
    },
    {
      "can_open_position": false,
      "symbol": "2CATM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/716e6f69-934c-40e1-9d84-8bdeb13346a4/",
          "id": "97e62438-2e5c-4869-a2cf-a24632e5b248",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dfb686c9-b779-4c6f-acd7-0a01b794047b"
    },
    {
      "can_open_position": true,
      "symbol": "DNN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/258d54d0-8a95-4059-a8ac-29dca732e9fb/",
          "id": "df189c47-9fd4-48f4-9734-cf659502dfc5",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "92ce8186-d164-416f-84c1-6f231fb39f31"
    },
    {
      "can_open_position": true,
      "symbol": "ORLY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1c9452ff-cc48-4b43-b744-85566c61eaf8/",
          "id": "3b725970-516b-46e2-bdd1-b94e873cf99e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ecda4d25-9b8e-46cf-a460-1061b96033f7"
    },
    {
      "can_open_position": true,
      "symbol": "CRR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/25c04134-f637-46de-bb0d-c45b6e5d9428/",
          "id": "6da0d268-63a5-4ab1-8d33-b52323e4ee92",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e420b30d-50ae-4481-b1d7-8067f8b21b98"
    },
    {
      "can_open_position": true,
      "symbol": "FRAC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ff5c6738-46d4-4df3-bfa3-ecd6531b0af8/",
          "id": "68211577-1ab1-4afd-b8fc-9b542f1f5d35",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a2a0302e-4af0-47a9-b468-c28aa1ab0021"
    },
    {
      "can_open_position": true,
      "symbol": "CI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/896fca55-c896-41b8-996c-26f39525448b/",
          "id": "de6f9375-d001-4408-ab1c-ecb5aa4e1a33",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "d265845a-ff40-4472-af83-0402e5927c29"
    },
    {
      "can_open_position": true,
      "symbol": "SND",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1b37245d-5009-4b7a-832d-bbaecb9f92c9/",
          "id": "80df3b12-481c-458c-a1ac-f2fbad84ab78",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b0d5e12c-b42b-40f7-8e09-05ebcd5b9fb9"
    },
    {
      "can_open_position": true,
      "symbol": "VRP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9491e068-317a-4928-bb0d-9bbf445fc8ff/",
          "id": "321bdc1f-7f32-4fab-81ad-fb5778408650",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "71879354-8cc1-44f5-9491-9c9dec4ad07d"
    },
    {
      "can_open_position": true,
      "symbol": "UIS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/721fa23c-fd5f-49f7-aa1a-773e9449f299/",
          "id": "55b45fa2-0b21-44cb-98cc-65ef77223b67",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "302459cd-94bd-4237-b92e-fd22a0449e7d"
    },
    {
      "can_open_position": true,
      "symbol": "MTCH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/92f55c5a-56a6-4abd-b10d-02ae84460899/",
          "id": "87546db7-faf7-4c48-878e-e1a6c34bbb7d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dca8a58d-ec1c-47d2-9bff-808f2b1738c8"
    },
    {
      "can_open_position": true,
      "symbol": "YMLP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b0b212fc-f9e1-49f6-841d-77159cac5a19/",
          "id": "cd01a77e-d3f6-4459-9418-251f8af1a35e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8b1fab73-d2ea-4b82-8b39-89665427d533"
    },
    {
      "can_open_position": true,
      "symbol": "SDOW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f5f4efca-aaed-46d5-b60e-b2a4d430e3f2/",
          "id": "5f4c78b4-c035-4d36-b314-5d016aa5d4b7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "58128ba0-4375-43b5-b635-45a056526385"
    },
    {
      "can_open_position": true,
      "symbol": "CM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/278c2d62-213d-4f0f-bba2-865edfb17bf6/",
          "id": "a95c8af6-0fb2-41b5-b0fa-ceee45b768c7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2018-12-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "cb5d4820-6b0e-4cca-8732-60784642d3ed"
    },
    {
      "can_open_position": true,
      "symbol": "WOW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6551857e-be8b-4581-b746-446193677b77/",
          "id": "757fbffd-aeed-458b-bff0-35880af58495",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "df7118d3-6359-45c6-b5f7-0f07740bffad"
    },
    {
      "can_open_position": true,
      "symbol": "VNET",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0f84699e-7c50-48c3-9cfd-47fa860e03ec/",
          "id": "e821b480-af08-419d-86cd-d97e0c2670de",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4d592e49-b509-4e13-b97d-43f3006b12a6"
    },
    {
      "can_open_position": true,
      "symbol": "ASB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c319c96e-1739-4ded-a780-38106e7f3d6b/",
          "id": "3b433873-d7f7-4502-a4d7-c6872c60e590",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "32e7fb2d-e202-4d0b-9530-dafb7e7413b0"
    },
    {
      "can_open_position": true,
      "symbol": "RTEC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c9c371ff-4a70-4e6f-b638-e69503cc37f6/",
          "id": "0ffdabdb-ab7c-4ff7-905e-59cbce8a13d2",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "40bf76d2-5447-4d7f-92f4-1d27df87333e"
    },
    {
      "can_open_position": false,
      "symbol": "2UN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7010fdb1-7d18-4d48-91f4-9ee93061e7e3/",
          "id": "271027d1-3468-44cb-a152-557df1a47d80",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "570c22a2-ab85-416f-91bd-f24b12d3a62c"
    },
    {
      "can_open_position": false,
      "symbol": "1FMC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6fc59d9f-bd7b-483c-bf81-722d5cd73868/",
          "id": "29fc1896-84d0-4284-a5d3-aa354080e653",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "882ddad1-381a-4376-a163-691a74375d21"
    },
    {
      "can_open_position": true,
      "symbol": "NMR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cdaaf0c1-aea9-44b4-8f63-8d7fa3664ab1/",
          "id": "43929bac-40d8-44bb-aebe-e3e00ca962ef",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fcf46be5-a254-4fe8-b240-b5f89c9fd0ae"
    },
    {
      "can_open_position": true,
      "symbol": "TMP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/371c427e-6f11-4f30-b8ef-3b760a5e2684/",
          "id": "5b4acc1a-8cf2-450d-94f1-dadd2a5c96e6",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c03b479d-f333-4d9e-be73-4a56fabdb7cf"
    },
    {
      "can_open_position": true,
      "symbol": "REK",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3362e4f8-c6b4-4328-aa05-f82669ce5725/",
          "id": "86ff06be-2b42-4391-b722-4980e6a9f16b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7cef6338-99be-45f1-a4af-385f355344d1"
    },
    {
      "can_open_position": true,
      "symbol": "SONC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1408b43f-eea1-461b-b7a7-296daed86fa7/",
          "id": "b45c39e0-ce49-446c-80e3-3ad6ae907d28",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bf441661-4eea-42ce-ab56-a984ee571dfa"
    },
    {
      "can_open_position": true,
      "symbol": "NR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0d9c19d9-f400-4132-9fb4-11f29bd77894/",
          "id": "cddda518-a73f-4095-a32b-89e42db9b0bc",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "14f50588-e2a4-4853-8591-e583f9e67877"
    },
    {
      "can_open_position": true,
      "symbol": "IDV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3331acbb-4813-458f-a778-6e9713ccd8c8/",
          "id": "1fbaf3cc-56d8-45c8-aa3f-1c922bd29ac3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d960cd0b-c56c-4d68-8cca-179429fad362"
    },
    {
      "can_open_position": true,
      "symbol": "REGN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bf85745c-d392-4602-8fbd-ccca86c43566/",
          "id": "05308f85-e1dd-49ea-a365-53be12ab3e57",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7dc339e6-fe66-4d90-a106-66ec8de23f37"
    },
    {
      "can_open_position": true,
      "symbol": "CNX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5b9cadca-683a-4cf9-b9ae-329bf5fedf88/",
          "id": "16a70f41-9ba2-4bc9-b408-a84c49cf5039",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "212a1d80-4e4d-4788-b3aa-e5c59ca545fb"
    },
    {
      "can_open_position": true,
      "symbol": "NP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/174ab082-b36a-4615-a7e4-df4a8ffc53ba/",
          "id": "4f678759-a135-4e7b-940f-88b68c9181bc",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "09f57070-be2a-414a-a628-6a2520749f48"
    },
    {
      "can_open_position": true,
      "symbol": "LGFA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5b5d1075-7d2e-4d10-b175-775f64a6dfc5/",
          "id": "50dcfc70-4925-43ec-901d-c689dfbda107",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "863856db-43c8-477f-be1c-52c260426f45"
    },
    {
      "can_open_position": false,
      "symbol": "2MUR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d8edff21-cb19-4373-af1c-f83a3c0d01c4/",
          "id": "1cc76082-f460-404f-9155-9f5fee9a725e",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "13aa31c0-3ff2-4b5c-8253-7fe1d05ff535"
    },
    {
      "can_open_position": true,
      "symbol": "FEP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f57b3286-30a0-486d-9ed0-361f084209ca/",
          "id": "6ea91575-2c3e-4f20-a33f-bd94ba83923e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b57ba40f-cb54-475f-acf1-86502649d974"
    },
    {
      "can_open_position": true,
      "symbol": "HIVE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/177ec574-f4d9-4e42-9ad6-25d8ccd5e018/",
          "id": "7c589c88-6b76-40a9-9520-306319f3ca7d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3ffbd969-c6f3-4fb0-bcfa-8b009ae0f125"
    },
    {
      "can_open_position": true,
      "symbol": "KS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/efd62a74-54a4-4550-8bfe-6e7cb30c077e/",
          "id": "19fc2939-f815-43c3-baa8-6cfe4709d6c0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7e6a1bc1-5b90-46f9-af0c-8b54e94159de"
    },
    {
      "can_open_position": true,
      "symbol": "DIA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bab3b12b-4216-4b01-b2d8-9587ee5f41cf/",
          "id": "00d2ccb6-4341-44dd-9568-23d88b4c9a89",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-06-29",
        "2018-07-20",
        "2018-09-21",
        "2018-09-28",
        "2018-12-21",
        "2018-12-31",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "46872e8c-3e0e-434d-af5a-6a3d4773bd42"
    },
    {
      "can_open_position": true,
      "symbol": "TD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/390cc5c4-a4ae-4f7c-8a35-ddf7040645c4/",
          "id": "00de809c-d723-4307-a8fb-e2b6ab052dd7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2018-12-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "19638431-561f-4110-a8fc-ddea679d99bf"
    },
    {
      "can_open_position": true,
      "symbol": "SHLO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7df1e913-14f5-4bff-9a1d-7f59fa8b3aab/",
          "id": "f4e38ff4-d344-4a20-bf8b-f93a7a738b4b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3d0f896c-b6b3-48c3-8dc1-3bff744c3819"
    },
    {
      "can_open_position": true,
      "symbol": "COGT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0cec0884-64dc-4cdb-90ab-78c953d42582/",
          "id": "b013f675-a546-4a5c-96bd-153a990d2156",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5ad0c675-f0bb-4457-a91b-d44df68b214e"
    },
    {
      "can_open_position": true,
      "symbol": "JE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/957fdbe6-ed24-4e99-b556-14c77f3cb52f/",
          "id": "0811c793-6656-44bd-82a6-72b4e15020ff",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "36c5d07d-5f01-40eb-9d46-e3037e951fa0"
    },
    {
      "can_open_position": true,
      "symbol": "TSEM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/cbd02cf6-25e2-470a-bbb0-e9fd76d6707f/",
          "id": "6de31e67-d05e-4d9a-ac18-7b7a0c65cd2e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "348caf38-24a0-4e70-afeb-8803794aac60"
    },
    {
      "can_open_position": true,
      "symbol": "XEL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b526ce15-3f19-42d2-82ce-7baae4501dbc/",
          "id": "66c5ef64-f46f-4ea6-acd6-ed2c91333767",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ce857148-1cfd-4cb9-a926-6100d1017706"
    },
    {
      "can_open_position": false,
      "symbol": "EWU1",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ca4f6fca-70cb-4d64-9ce6-d551cba2fcc5/",
          "id": "682202bd-6c52-4ae8-96dd-36c2054f1312",
          "quantity": 50
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "885bf617-d6e8-4d1d-9f45-cde894898348"
    },
    {
      "can_open_position": true,
      "symbol": "AGN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/1372275b-c03d-430b-b1c1-cd4a95655873/",
          "id": "60e1ee46-a7b4-4471-953a-4c78270ae643",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "f7a04488-5b2c-4ad6-9581-8e103a4f3dc8"
    },
    {
      "can_open_position": true,
      "symbol": "FORR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/3828a250-2fa1-4c3f-81c6-5e503c32a93b/",
          "id": "a8663aef-d1b4-463c-8e8b-738ee88dcd7d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "de087d21-5807-4a7a-92d5-4add0a41ab01"
    },
    {
      "can_open_position": true,
      "symbol": "NOBL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a20890a5-68c7-4e5e-8884-ed09673d7f80/",
          "id": "21abdaef-0c41-420f-a1bd-96fdd2cfee5b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "80281591-dcaa-4957-ad64-a82a7a86b792"
    },
    {
      "can_open_position": true,
      "symbol": "CRED",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/69fde278-d8ec-4e42-8874-b400130f4c53/",
          "id": "cceb747e-2a6c-45f2-9972-dad5e083ec3c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "931af007-a9e4-4fe4-84ad-4350abd27106"
    },
    {
      "can_open_position": true,
      "symbol": "DBD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c5096dd6-f8fc-440c-85a2-303ee2556c4c/",
          "id": "4afb8be1-19c2-426c-acb8-f2159d8ca066",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6ecfdcae-7475-46e8-a296-9a17a025a3e9"
    },
    {
      "can_open_position": true,
      "symbol": "FMC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6fc59d9f-bd7b-483c-bf81-722d5cd73868/",
          "id": "4d64ade6-ce38-41d8-8ffc-0d50e1b889f0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "081c3e33-bc3b-41ab-9052-79eb38477f44"
    },
    {
      "can_open_position": true,
      "symbol": "RTH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/720aa05d-4335-40fc-9f50-4aad9bdb3502/",
          "id": "65382640-ac7b-4d1d-800c-83fea49cf1a7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2dd14417-e315-415e-a0bd-be836aa6df92"
    },
    {
      "can_open_position": false,
      "symbol": "2WBA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f66018f3-7e46-498e-8ed2-27e2a36eb26e/",
          "id": "4e19b675-e847-4af9-a3f1-fca1dc5fca27",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "bfe694af-add2-4859-97cb-944923b13897"
    },
    {
      "can_open_position": false,
      "symbol": "2JPM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/43c1172a-9130-420a-ac9b-b01a6ff5dd54/",
          "id": "4883fa9d-5603-4d6e-acfb-3bb602756e7f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "46541c22-ada6-4616-8258-d054e90b41d2"
    },
    {
      "can_open_position": true,
      "symbol": "SEF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2a318465-258d-4d75-ab0e-804561ba4bb2/",
          "id": "4778a09d-b66c-4c9f-a0db-fc1ca89cc6c9",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "feb0aa5e-8a06-4847-b477-5d71ff72f8af"
    },
    {
      "can_open_position": true,
      "symbol": "AJRD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a78e8532-147c-44b5-9af6-7611318bcbab/",
          "id": "6fcc9d29-867c-43ac-b250-8d44190adb76",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7a8a43e7-887f-4e08-b608-f35985de2ea6"
    },
    {
      "can_open_position": false,
      "symbol": "2QCOM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5ea5e761-1747-4911-beec-5a24af338329/",
          "id": "be3f8fb7-debf-41e2-a38a-974bcfa46e5f",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "8fc6c355-1550-4b4f-9aa0-d50c7bd055ac"
    },
    {
      "can_open_position": true,
      "symbol": "HOFT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6844b51c-a830-49a7-8ac3-159ecd084368/",
          "id": "4db1857d-b69c-4daf-99aa-1816047f36e5",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "dba85a64-19a1-49b2-b61a-695598516157"
    },
    {
      "can_open_position": true,
      "symbol": "KO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bb9a01df-5982-42d4-88db-8662f23cdab5/",
          "id": "05585b98-cee7-4d7d-a4a2-d23c48065123",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-08-17",
        "2018-09-21",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "9d02e842-8216-4bf1-9276-a6d940466161"
    },
    {
      "can_open_position": true,
      "symbol": "STAY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bc90a5d7-f3a1-45c1-b9fd-3222ab651fc7/",
          "id": "5635059a-f0ba-48bf-b17f-3c2253ee6713",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "e2031f25-3941-420f-aa40-4ed7d6c67ef0"
    },
    {
      "can_open_position": true,
      "symbol": "TRIL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/346024f0-04f5-4fb9-93f1-12b0d6579f15/",
          "id": "5f25c95b-b5dd-4c4b-89df-601b218b1f52",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "2b60d9d2-141d-4ce5-bff4-2434956c3d65"
    },
    {
      "can_open_position": true,
      "symbol": "QLD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e5cee1ce-78c0-469b-bc61-c8e0c5c87c70/",
          "id": "f09e0194-0901-4cbc-9c20-4aa3a3eced07",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "e8eed62a-2f20-478a-8de0-7d1820645336"
    },
    {
      "can_open_position": true,
      "symbol": "OAS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/721c59ff-4c8f-41de-80ac-cdb625b2f22e/",
          "id": "29437db3-a1cb-478b-83da-6efda268ddb6",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "444a80f2-ae08-4ff3-a0e4-7f9b6ed0d117"
    },
    {
      "can_open_position": false,
      "symbol": "2WMB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/aafdc2e8-682b-4182-af85-77215712861e/",
          "id": "2b97343e-8829-4c9c-8732-947d09bdf08d",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "954adeb6-d56e-4ded-8c52-a015116217bf"
    },
    {
      "can_open_position": true,
      "symbol": "SSB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/619315a8-075e-4f2c-af49-c069e421c883/",
          "id": "3064f06c-6265-4987-bbc6-e7137a382a12",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0d9ffb4c-a7b5-48eb-a183-1de2621cb826"
    },
    {
      "can_open_position": true,
      "symbol": "MCFT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/65fc5e60-6cd1-4c5a-a715-45799a6a6b4a/",
          "id": "208451f4-c8cd-4c7c-8abd-2952798ed8ef",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "aac79a42-627f-4642-bd9f-568b0d3fbad1"
    },
    {
      "can_open_position": true,
      "symbol": "CVY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/22d60573-e6e6-4e7b-9dde-eb7d30bc4dc3/",
          "id": "4a08cc9e-0b15-4dab-b175-e69efcbd8cbf",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a2199f98-9ba5-42ef-8c96-e3b40fa63e25"
    },
    {
      "can_open_position": true,
      "symbol": "EXAS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bed074a2-68f7-4c61-9f21-83b51ef425de/",
          "id": "f5c98698-d0a6-4a94-83d9-9ed14c3d6e55",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "5d2340cb-d3a4-4e8c-b899-d23bca2311f8"
    },
    {
      "can_open_position": true,
      "symbol": "MCRB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/55fcde11-4978-4a03-8b0e-b863540af958/",
          "id": "c4b82d3c-c305-46c2-9e32-81b776ecdcd1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "df9676b4-4eb0-4492-97bc-53b431f1bc84"
    },
    {
      "can_open_position": true,
      "symbol": "CONE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/adc2beba-4706-4635-9cfc-408b9f198387/",
          "id": "8c02cc7b-3568-4bec-a8ba-517cd48a7d5d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7e4590bf-83f9-4d91-be41-be429e6452f2"
    },
    {
      "can_open_position": true,
      "symbol": "CBT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/381cb643-3635-412f-a3d1-c117f1e88daa/",
          "id": "af02ab60-92ce-40db-8f0c-4f2c82ac415f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9a4e9609-2ccc-43b3-83f0-9c49dc14bd69"
    },
    {
      "can_open_position": true,
      "symbol": "HDV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/02d57cda-7a1e-4a70-928f-78e6fae0b8d3/",
          "id": "9a831f08-71dc-4630-8786-4c2c66f00913",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c4b6a1cc-978a-404c-b248-f89bbca684c0"
    },
    {
      "can_open_position": true,
      "symbol": "AXU",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c750766c-5bf3-442b-9693-2c1c68120947/",
          "id": "4dff66ce-2d2e-42c6-9f91-ab8355f89af7",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "59cb9419-69d6-45f6-aa2d-b23df48def29"
    },
    {
      "can_open_position": false,
      "symbol": "KEP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/38a61065-ea0c-4423-9a96-20bf08edd4dc/",
          "id": "d3c8f63e-e668-4807-804d-da6653073f09",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3c1b0ded-da94-415e-9a54-75238e0cdf20"
    },
    {
      "can_open_position": true,
      "symbol": "NSP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6689e871-226b-4956-a598-e63c2ee55380/",
          "id": "09da4c1b-9c3c-4dfd-bcb5-67aafc1b6d5e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4d784484-242b-408f-be11-2760e397e092"
    },
    {
      "can_open_position": true,
      "symbol": "SCJ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ea8d3bcb-bd96-4a53-bf5e-251be4ea41a1/",
          "id": "f4898b74-56df-491c-97da-617f860c7440",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "eb670262-2a4b-4ba2-9314-2b0f19f519e3"
    },
    {
      "can_open_position": true,
      "symbol": "TTD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/186161e4-fb22-4c0f-91bb-786572fc4eb2/",
          "id": "52c16b7b-1c8b-4383-8ab7-1980df430b6b",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ccff278d-9a30-4864-a9e1-92855d56b032"
    },
    {
      "can_open_position": true,
      "symbol": "GTS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2c9aa5dd-f063-4cf0-8eef-41b923116e53/",
          "id": "8cfc4532-28e3-4b72-8c86-f9653284d689",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "113d788b-261c-433f-8da8-a8eb7fa19d3d"
    },
    {
      "can_open_position": true,
      "symbol": "UWM",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/28cae842-5e45-4a7f-a97a-dde41e943293/",
          "id": "6821c1f2-a006-47c6-ac83-3125252cc699",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "71124219-25f4-4a6f-afff-86fc2ffee98e"
    },
    {
      "can_open_position": true,
      "symbol": "IEV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0da8e0ec-d2c6-48ec-9437-32c2faa5c671/",
          "id": "f7c540b9-89f9-4739-b089-b83f96c96de0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c9dc1ed2-6bcb-43ab-9f5e-1f9ecda8fd84"
    },
    {
      "can_open_position": true,
      "symbol": "HSBC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/275d3886-abc6-4ae8-bc4a-130c5a46314b/",
          "id": "ecc8cf2e-9656-4546-929b-000914cb2339",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "fd87d767-02c7-49cf-a921-9c2a0a23f761"
    },
    {
      "can_open_position": true,
      "symbol": "IMMY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c66bd25b-3312-4b56-83b0-7bd69cff8bea/",
          "id": "d3897700-2680-42ef-8c79-5bd9a3edd9f8",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "56eb6b76-5d06-486a-a042-edfeebfc6155"
    },
    {
      "can_open_position": true,
      "symbol": "KMG",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bc48a842-3a11-4473-bd05-01fc65246e56/",
          "id": "8121e153-ee92-4a81-9442-74b7abcb86d8",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "80adab6e-e1fb-408a-9765-44f25a0b5715"
    },
    {
      "can_open_position": true,
      "symbol": "LRAD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/698985bd-aeab-4830-ba7e-c5eb4a334258/",
          "id": "98f2cff7-3ef9-466b-820d-1cca49bccec6",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "02d88898-83c6-474d-8d49-bde2c841b9e9"
    },
    {
      "can_open_position": true,
      "symbol": "MITL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/03452d32-66f3-40ef-abc9-d7d0518fa572/",
          "id": "7e98e892-942d-4561-ac29-06cf38955680",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "bb7f0e98-7733-4a94-b9e8-056ed15dd6a2"
    },
    {
      "can_open_position": false,
      "symbol": "2AN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5e1c01af-1160-416b-a306-bc6e1346adfc/",
          "id": "66516623-1ca1-4bc5-95f2-59696f59e684",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "d47ae354-8bd0-43ac-a8d6-6edb2ac1c006"
    },
    {
      "can_open_position": true,
      "symbol": "FCX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c0e03886-2f53-41a4-ae78-212650ce577f/",
          "id": "27dea81f-0c27-4895-a54d-b2023e4f1f03",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "87c3f959-c855-4d98-928c-16888622d2e2"
    },
    {
      "can_open_position": true,
      "symbol": "TNA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5260d4d2-3c30-49e3-bd9b-9e94a271b8ed/",
          "id": "a0ce2647-317e-4b52-9acc-9603a164c1c3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "f0bfa16d-89e1-4f9b-8e0a-12dee490f0db"
    },
    {
      "can_open_position": true,
      "symbol": "CTRE",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/89859139-01c4-4711-b890-29ccf50d0416/",
          "id": "d0ec4927-fd77-40a9-bca2-014448a77537",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "6ef32d2c-fa10-4298-a007-ecd5727d39e6"
    },
    {
      "can_open_position": true,
      "symbol": "ASH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dd87fe79-a1b4-493e-8155-e6ec904899c5/",
          "id": "bf922c76-54ce-4a19-878d-d7edee7dfe2a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9552bc35-7a2c-433b-ae11-b0c10c068cb4"
    },
    {
      "can_open_position": true,
      "symbol": "CPSS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/68c09d15-bc68-4ce5-af3c-8b4f1930e49b/",
          "id": "faf4bb80-7adb-4e1d-b91f-26a8efebe490",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "7905ea3d-eeec-405a-9099-3babd63d80e3"
    },
    {
      "can_open_position": true,
      "symbol": "VIAB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/8ce55883-ccf8-4f1d-8078-a715e6b48856/",
          "id": "9b8d0315-9354-423a-8bbf-8ead29d89bda",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "3973336c-9f79-4ea8-b36d-d09d721ec2b9"
    },
    {
      "can_open_position": true,
      "symbol": "AGTC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/f6840464-e1b5-4d73-aaf0-940d4d080772/",
          "id": "37e986ea-206a-47cd-aa8b-5f37066cbcfd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "584e474d-addc-4b27-99ce-72c260b5d896"
    },
    {
      "can_open_position": true,
      "symbol": "CSGP",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6af8f418-27b0-464d-bc5a-5b73b2854a43/",
          "id": "9e4e35a8-d7b2-40f5-bcb0-1dbc9e63e774",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "272bdb65-b774-425f-8330-85d199723e15"
    },
    {
      "can_open_position": true,
      "symbol": "PSDV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/286d1d64-a33f-445a-9950-1154d469edfd/",
          "id": "32bbf413-35f5-416f-a802-c97b40242e12",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "349caf03-0f42-4a08-84e2-780248827743"
    },
    {
      "can_open_position": true,
      "symbol": "ATU",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bf9ee703-c695-4e71-ab5c-1ad46d197c07/",
          "id": "3fa43b17-972d-4d66-aef4-57b642dc7d02",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4d999189-74a8-4f9b-93e6-19167a5510d8"
    },
    {
      "can_open_position": true,
      "symbol": "OTIC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/e5a37931-1d50-4ef5-bcad-b7777baa3b72/",
          "id": "e47ba785-5377-436f-a1e8-c9098aad8290",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "09d78d93-831e-47d6-92a0-59039a4e5978"
    },
    {
      "can_open_position": true,
      "symbol": "T",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2b456f6a-3287-4757-abf9-327383d2c708/",
          "id": "4c6c6a41-1ba7-4f3c-a048-6db1b447d5bd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-09-21",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "fe966f14-8aaf-4f5c-9dcb-f901491868f4"
    },
    {
      "can_open_position": true,
      "symbol": "BBL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/ed6ea76c-9827-47ea-96b9-e3703658fae1/",
          "id": "ea5268ce-b2a7-497a-86b0-577d751e6ca9",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b4db4eeb-cba7-40b2-b950-bf66242fc09e"
    },
    {
      "can_open_position": true,
      "symbol": "BSF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/205ec716-22c7-4d63-b045-0b9866beacc8/",
          "id": "bf08e06c-c4e4-4618-88cf-08491d2fd510",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "9d85fdcd-6fa8-44ac-a852-f364d2864636"
    },
    {
      "can_open_position": true,
      "symbol": "RWX",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c5c9a1a9-521c-43bf-94e5-3d1bd3ffe5c6/",
          "id": "ce84acf2-7195-4525-a4f3-cced5eac2360",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b7da8183-9730-42d1-a0b5-24d44b89de83"
    },
    {
      "can_open_position": false,
      "symbol": "2GOLD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/99c1362b-ac71-49e3-9dd5-12e33b898cdc/",
          "id": "8a5337f8-3b5d-4945-919d-9c7e7752367b",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a0e6ddd5-6b80-4937-8514-3f82aaa5973a"
    },
    {
      "can_open_position": true,
      "symbol": "HLTH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/5c799d17-7a24-4fc6-8223-a868559e878f/",
          "id": "33708876-c3af-48aa-bac4-6b170ae4f4ab",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f1680763-f6da-4b7d-9309-8d66144b9a11"
    },
    {
      "can_open_position": true,
      "symbol": "FBR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a59031cb-899b-4a8d-8a43-9d1beebad43e/",
          "id": "f3b4fa0e-76ad-4b91-987f-87426c5b78ca",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "ab9e76e8-00d2-41b0-bdcc-f0f8a46f53b7"
    },
    {
      "can_open_position": true,
      "symbol": "CSII",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fe0e7620-634f-40e0-b993-14faff90b2b0/",
          "id": "0d480ddc-499a-4f75-ade3-d34109e22dbd",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f897d2d7-6dcf-4588-9b62-44ac1dbdfbd6"
    },
    {
      "can_open_position": true,
      "symbol": "AABA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/96a2c6cd-90b6-41cc-a594-e6f04ad29329/",
          "id": "ca2eb3e0-bfd7-4519-a804-674646bf6a45",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "965f8e09-5d1e-4dec-8143-3014a46ba700"
    },
    {
      "can_open_position": true,
      "symbol": "FENY",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b3ddf968-d7a5-48aa-a4ce-21ec9fa4f0e4/",
          "id": "d129a086-09b3-464c-8be4-5b95148e6623",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1f42e321-fe5a-43a0-81ac-dee67815848d"
    },
    {
      "can_open_position": true,
      "symbol": "CCIH",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/24b80f3d-320a-4c3c-a9fa-5390a6c46132/",
          "id": "fef20787-993c-48d8-9044-db13d935e202",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "740973c2-405c-4512-b0f4-a0313ff1dc52"
    },
    {
      "can_open_position": true,
      "symbol": "RES",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2c8cc2f0-65ed-4e14-99f0-9dbb151e2e3c/",
          "id": "d3b49dee-41f7-4d1b-a3d3-10d7499292ff",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "8c3b5d18-6f76-43ed-b47f-fee8dd2e1d78"
    },
    {
      "can_open_position": false,
      "symbol": "1RRC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/7641e063-a995-4db1-8008-a39282cc9000/",
          "id": "bca096e9-caa6-47f7-836f-f02fdbc9d8fe",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "196b9ef1-fd36-43c5-b81a-25ce0307dcab"
    },
    {
      "can_open_position": true,
      "symbol": "DDD",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/bb4aa3c3-eed4-4bbe-b8a3-23e2eac35a5d/",
          "id": "9af69748-727f-4102-a22f-a12c39158ed0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "5303c71a-b338-4fde-8e0e-40d71c64718e"
    },
    {
      "can_open_position": true,
      "symbol": "LW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/13bd86f2-5366-4ae8-8b62-85951e11edb3/",
          "id": "f72a4e53-4bfe-411e-b063-d1c8965c1454",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4d4020bc-8799-4fd7-8474-b9bb8e727098"
    },
    {
      "can_open_position": true,
      "symbol": "FBT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b0e5e6c1-e190-4b1f-98f0-5ff416521a50/",
          "id": "cb6a44c3-76dc-42e1-ba66-649cc02fd97f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a2107b69-7909-4c13-bba0-97525ba8d55e"
    },
    {
      "can_open_position": true,
      "symbol": "EWW",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/0e41337e-6a0a-4a5f-b1d4-48ca3223fe2a/",
          "id": "d078c69f-1d12-41f3-b347-567c430a8f2e",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-03-29",
        "2018-04-06",
        "2018-04-13",
        "2018-04-20",
        "2018-04-27",
        "2018-05-04",
        "2018-05-18",
        "2018-06-15",
        "2018-07-20",
        "2018-09-21",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.01",
        "above_tick": "0.05"
      },
      "id": "78a79805-755a-4feb-b832-512ac3f74d97"
    },
    {
      "can_open_position": true,
      "symbol": "DXC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b40e624a-7790-40fa-b017-a79623c3b4b5/",
          "id": "661bb3d3-31da-4391-8171-fd1b440bf802",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0e2b5c97-f982-4b2b-bf9b-a428ab351649"
    },
    {
      "can_open_position": true,
      "symbol": "NOVT",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/289a179c-3f3f-49c3-8d91-e6eb46ee78ee/",
          "id": "5a9c0f61-166e-4c77-81b2-6f5cec5052a6",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "37462c44-526b-4527-9143-c5a261f3dc4e"
    },
    {
      "can_open_position": true,
      "symbol": "BOKF",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/fe1e28f1-743f-4f0a-849b-aa5ab4270a7c/",
          "id": "b62a2890-68a9-4d05-9b84-a750082aa1c0",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "afabfe7a-c079-4364-9cf0-58dee1d7e784"
    },
    {
      "can_open_position": true,
      "symbol": "CENTA",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/9f427301-5df7-427c-a3e5-b289698bb388/",
          "id": "cca5b3b3-05eb-4c88-a1e8-4d5cbed052da",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b99f69eb-738f-497c-83df-177ba63bd6f1"
    },
    {
      "can_open_position": true,
      "symbol": "BGC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/db9c0464-fb99-42fe-b53f-36f81da67e12/",
          "id": "cce1dda5-81ba-4392-9ac2-7e3c0116c191",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "57c40981-5720-48f9-baf9-479542d91773"
    },
    {
      "can_open_position": false,
      "symbol": "ACWV",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/21b675f9-cfb6-44ca-bd43-6284fa8b9e80/",
          "id": "51db6a8d-f68e-4a0b-8c14-744875a355bc",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "a47624c5-b671-47df-96a0-9a9b7e2c27f1"
    },
    {
      "can_open_position": true,
      "symbol": "SJB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/2377d144-5233-4586-b34f-84cb887a2dab/",
          "id": "7d91d410-7cfe-4818-a491-6e1d52c3df3f",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "32697871-923a-4b23-8d12-48cddd20351d"
    },
    {
      "can_open_position": true,
      "symbol": "AU",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/372cd774-b888-4095-8dc3-452524f59761/",
          "id": "d8de4b06-be38-499e-a55c-36d7df6bf6fe",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0e734faf-31ca-45d0-9b77-71e2be209313"
    },
    {
      "can_open_position": true,
      "symbol": "PEO",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/a30b943e-a8c4-44be-973b-47bc744ab87b/",
          "id": "480437b5-16e0-46fa-aa94-0115447748fb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "f1fe1683-6dd2-4315-8dfe-bbfb44d01e72"
    },
    {
      "can_open_position": true,
      "symbol": "FNGN",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/dd024c40-cf95-44b0-845f-46679788ef8b/",
          "id": "ce847eb4-7559-4f9a-a33c-616c953922c1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "797639c4-1a6a-428a-9302-011601299f00"
    },
    {
      "can_open_position": true,
      "symbol": "ATUS",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b48b0750-797d-4f79-ada8-359d44abf12f/",
          "id": "6733d518-305e-4876-94ff-91f656b698cb",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21",
        "2018-12-21",
        "2019-01-18"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "fdfcd3db-b487-4a37-9cd3-42d741f649dc"
    },
    {
      "can_open_position": false,
      "symbol": "GIGB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/140d1cf9-42d0-4db5-8058-301d15f8c64b/",
          "id": "caac87af-d2a7-4e41-917a-cf16b25994d6",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "47cbd797-1fff-4265-877b-8c979f1cbdfd"
    },
    {
      "can_open_position": true,
      "symbol": "EC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/c251f2b3-ac13-4334-9e8c-fbceffcc02e1/",
          "id": "11599ac2-661c-4f8b-9771-4d2554ba8fa1",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-08-17",
        "2018-11-16"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "65f04ce4-68d4-49e7-97e0-051d189057a7"
    },
    {
      "can_open_position": true,
      "symbol": "DAR",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/d8c72f11-2259-4139-a11f-73bd06efe2f8/",
          "id": "a6fff689-70a8-4dc0-a9ee-114d7e16b66c",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "c113c6c9-0283-4a05-a35f-5a4f6e39365b"
    },
    {
      "can_open_position": true,
      "symbol": "JPNL",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/22f14f46-dfee-43f0-929c-ebf48ffbc441/",
          "id": "b5a8bbfb-4942-44c1-86e0-88d145b74dae",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "1d91c1d9-d0e5-4668-8830-522c1db15b2a"
    },
    {
      "can_open_position": false,
      "symbol": "CLB",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/700940b6-46f5-4dbd-9dcc-d81c9cadee31/",
          "id": "0763a271-f143-46cd-bd74-18dcd04e5551",
          "quantity": 100
        }
      ],
      "expiration_dates": [],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "4773d1c0-1455-4717-b07a-dce758359a7d"
    },
    {
      "can_open_position": true,
      "symbol": "TMQ",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/acdb880a-f4d1-4640-be11-cbcf74ec6b82/",
          "id": "af1966fc-2af2-4342-b4ea-7bd450ad74f3",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-06-15",
        "2018-09-21"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "b1285426-4e1f-472f-bf5e-8bdf495e13be"
    },
    {
      "can_open_position": true,
      "symbol": "DRI",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/6c393e16-7428-4389-bf4c-5485e61fc8e7/",
          "id": "dd1606a5-5c7e-489f-9d25-6679841ab45a",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19",
        "2019-01-18",
        "2020-01-17"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "0c0959c2-eb3a-4e3b-8310-04d7eda4b35c"
    },
    {
      "can_open_position": true,
      "symbol": "ADC",
      "trade_value_multiplier": "100.0000",
      "underlying_instruments": [
        {
          "instrument": "https://api.robinhood.com/instruments/b2562ad5-6f41-4a50-baf2-e7d137470c13/",
          "id": "ba75c16f-8c8f-498c-a5e6-40876cde977d",
          "quantity": 100
        }
      ],
      "expiration_dates": [
        "2018-04-20",
        "2018-05-18",
        "2018-07-20",
        "2018-10-19"
      ],
      "cash_component": null,
      "min_ticks": {
        "cutoff_price": "3.00",
        "below_tick": "0.05",
        "above_tick": "0.10"
      },
      "id": "da5c6515-3844-4c57-be40-d300f641c33a"
    }
  ],
  "next": "https://api.robinhood.com/options/chains/?cursor=cD0yMDE3LTExLTMwKzA1JTNBMTklM0EyNS40MDU3OTclMkIwMCUzQTAwJm89NDU3"
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
