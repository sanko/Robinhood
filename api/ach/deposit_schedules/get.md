# Gather List of Scheduled ACH Deposits

If you plan to deposit the same amount on a regular basis, you could let Robinhood take care of that for you by scheduling the deposit. Grab the list of currently scheduled deposits with this endpoint.

**URL** : `/ach/deposit_schedules/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Query constraints**

    - cursor - paginated list position (optional)

**Request sample**

```
curl -v https://api.robinhood.com/ach/deposit_schedules/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Data provided is valid.

**Code** : `200 OK`

**Content example** : Response will be a json containing the scheduled deposits as a paginated list:

```json
{   
    "next": null,
    "previous": null,
    "results": [
        {
            "url": "https://api.robinhood.com/ach/deposit_schedules/093cb71a-c15e-4557-9e23-5a4cb4f3709b/",
            "amount": "500.75",
            "created_at": "2018-03-23T19:27:05.029871Z",
            "frequency": "weekly",
            "id": "093cb71a-c15e-4557-9e23-5a4cb4f3709b",
            "next_deposit_date": "2018-04-02",
            "updated_at": "2018-03-23T19:27:05.992382Z",
            "ach_relationship": "http://api.robinhood.com/ach/relationshipts/1db40909-6428-49a2-aa94-dacc3fea485b/",
            "last_attempt_date": null
        }
    ]
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. the password is incorrect.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "non_field_errors": ["Unable to log in with provided credentials."]
}
```
