# Authentication Methods

- [Password Reset Request](#password-reset-request)
- [Password Reset](#password-reset)
- [Migrate Classic Auth Token to OAuth2](#migrate-classic-auth-token-to-oauth2)

Most calls to the API will require an authorization token. After logging in, you should store the token in a secure way for future calls without forcing users to log in again.

## Password Reset Request

We all forget our password. This will have a reset request sent to your email address.

**Method**

| URI                                       | HTTP Method | Authentication |
|-------------------------------------------|-------------|----------------|
| api.robinhood.com/password_reset/request/ | POST        |	None           |

**Fields**

| Parameter | Type   | Description                 | Default | Required |
|-----------|--------|-----------------------------|---------|----------|
| email     | String | Address you registered with | N/A     | **Yes**  |

**Request sample**

```
curl -v https://api.robinhood.com/password_reset/request/ \
   -H "Accept: application/json" \
   -d "email={email}"
```

**Response**

| Key    | Type   | Description |
|--------|--------|-------------|
| link   | URL    | Link to the actual [reset URL](#password-reset) |
| detail | String | Message you could display in your UI |

*Note that this will always claim to be sending a reset email for brute force security reasons.*

**Response sample**

```
{
    "link": "https://api.robinhood.com/password_reset/",
    "detail": "Email with password reset instructions sent!"
}
```

## Password Reset

After requesting a password reset, an email is sent with a link that allows you to set a new password. This is that link on the API side.

**Method**

| URI                               | HTTP Method | Authentication |
|-----------------------------------|-------------|----------------|
| api.robinhood.com/password_reset/ | POST        |	None           |

**Fields**

| Parameter | Type   | Description                                         | Default | Required |
|-----------|--------|-----------------------------------------------------|---------|----------|
| username  | String | The username associated with the email address      | N/A     | *Yes*    |
| token     | String | Reset token provided by Robinhood in the reset link | N/A     | *Yes*    |
| password  | String | New password                                        | N/A     | *Yes*    |

**Request sample**

```
curl -v https://api.robinhood.com/password_reset/request/ \
   -H "Accept: application/json" \
   -d "username=contact@example.com&password=10CharsPls&token=defacedefacedefacefe-a-f-af01286fd-acef8
```

**Response**

*Untested*

**Response sample**

*Untested*


## Migrate Classic Auth Token to OAuth2

Until the system is opened up to everyone, this will be the best/only way to move to an OAuth2 type token. This token will be seen as an official client with full access to the account which is less than ideal but thus is the nature of a quick hack.

**Method**

| URI                               | HTTP Method | Authentication |
|-----------------------------------|-------------|----------------|
| api.robinhood.com/oauth2/migrate_token/ | POST        | None           |

**Fields**

None.

**Request sample**

```
curl -v https://api.robinhood.com/oauth2/migrate_token/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d ""
```

**Response**


| Key    | Type   | Description |
|--------|--------|-------------|
| token_type   | String    | The type of token this is |
| access_token | String | The access token string as issued by the authorization server |
| expires_in | String | The access token expires so this is the duration of time the access token is granted for |
| refresh_token | String | Refresh token which applications can use to obtain another access token |
| scope | String | Defined access limits; this value is 'internal' for this endpoint which means limits do not exist |

**Response sample**

```
  {
    "token_type": "Bearer",
    "access_token": "9Lg%WiectYtobuiewceIVUnhjiBGLUIeytekLBGJKDHGfvhjkfkuggbusfhukewrygfubasd",
    "expires_in": 300,
    "refresh_token": "BKLtvuglkYUV67VIbtuiE5cyFVHwerCWRT",
    "scope": "internal"
  }
```
