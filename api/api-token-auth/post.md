# Log in to an Account (old skool)

If you plan to do much beyond requesting quote data, you'll need to log in and use an authorization token. Be aware that this old skool token, once generated, will be reused and handed to all log ins to your account. The token does not expire until you manually log out.

**URL** : `/api-token-auth/`

**Method** : `POST`

**Auth required** : No

**Permissions required** : None

**Data constraints**

```json
{
    "username": "[string]",
    "password": "[string]"
}
```

**Data examples**

The following must not be empty or null.

```json
{
    "username": "john352a",
    "password": "Sm9Mo23b8b19"
}
```

**Request sample**

```
curl -v https://api.robinhood.com/api-token-auth/ \
   -H "Accept: application/json" \
   -d "username=john352a&password=Sm9Mo23b8b19"
```

## Success Responses

**Condition** : Data provided is valid and login token is returned.

**Code** : `200 OK`

**Content example** : Response will be a json containing the old skool auth token:

```json
{
    "token": "9d0f284acd10d829b203d6fa4ff2f4246462ac5c"
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

## Notes

* This assumes MFA is disabled.
* Note that this is the old means of authentication and will not provide access to Crypto or Feed.

# Login to an Account (old skool) with MFA

If you plan to do much beyond requesting quote data, you'll need to log in and use an authorization token. Be aware that this old skool token, once generated, will be reused and handed to all log ins to your account. The token does not expire until you manually log out.

## Step 1

**URL** : `/api-token-auth/`

**Method** : `POST`

**Auth required** : No

**Permissions required** : None

**Data constraints**

```json
{
    "username": "[string]",
    "password": "[string]"
}
```

**Data examples**

The following must not be empty or null.

```json
{
    "username": "john352a",
    "password": "Sm9Mo23b8b19"
}
```

**Request sample**

```
curl -v https://api.robinhood.com/api-token-auth/ \
   -H "Accept: application/json" \
   -d "username=john352a&password=Sm9Mo23b8b19"
```

**Response sample**

```json
{
    "mfa_type": "sms",
    "mfa_required": true
}
```

### Success Responses

**Condition** : Data provided is valid and MFA state is returned.

**Code** : `200 OK`

**Content example** : Response will be a json containing the type of MFA auth and if MFA is required:

```json
{
    "mfa_type": "sms",
    "mfa_required": true
}
```

### Error Response

**Condition** : If provided data is invalid, e.g. the password is incorrect.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "non_field_errors": ["Unable to log in with provided credentials."]
}
```

## Step 2

**URL** : `/api-token-auth/`

**Method** : `POST`

**Auth required** : No

**Permissions required** : None

**Data constraints**

```json
{
    "username": "[string]",
    "password": "[string]",
    "mfa_code": "[string]"
}
```

**Data examples**

The following must not be empty or null.

```json
{
    "username": "john352a",
    "password": "Sm9Mo23b8b19",
    "mfa_code": "252987"
}
```

**Request sample**

```
curl -v https://api.robinhood.com/api-token-auth/ \
   -H "Accept: application/json" \
   -d "username=john352a&password=Sm9Mo23b8b19&mfa_code=252987"
```

## Success Responses

**Condition** : Data provided is valid and login token is returned.

**Code** : `200 OK`

**Content example** : Response will be a json containing the old skool auth token:

```json
{
    "token": "9d0f284acd10d829b203d6fa4ff2f4246462ac5c"
}
```

### Error Response

**Condition** : If provided data is invalid, e.g. the code is incorrect.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "non_field_errors": ["Unable to log in with provided credentials."]
}
```

## Notes

* Note that this is the old means of authentication and will not provide access to Crypto or Feed.