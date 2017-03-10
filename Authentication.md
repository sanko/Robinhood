# Authentication Methods

- [Logging in](#logging-in)
- [Logging out](#logging-out)
- [Password Reset Request](#password-reset-request)
- [Password Reset](#password-reset)

Most calls to the API will require an authorization token. After logging in, you should store the token in a secure way for future calls without forcing users to log in again.

## Logging in

If you plan to do much beyond requesting [quote data](#quote-methods), you'll need to log in and use the authorization token. Once generated, all log ins to your account are given the same token until you [log out](#logging-out).

### No Multi-factor authentication (MFA)

**Method**

| URI                               | HTTP Method | Authentication |
|-----------------------------------|-------------|----------------|
| api.robinhood.com/api-token-auth/ | POST        |	None           |

**Fields**

| Parameter | Type   | Description   | Default | Required |
|-----------|--------|---------------|---------|----------|
| username  | String | Your username | N/A     | **Yes**  |
| password  | String | Uh, password  | N/A     | **Yes**  |

**Request sample**

```
curl -v https://api.robinhood.com/api-token-auth/ \
   -H "Accept: application/json" \
   -d "username={username}&password={password}"
```

**Response**

| Key   | Type   |Description|
|-------|--------|-----------|
| token | String | The authorization token you must pass to all calls which require authentication |

**Response sample**

```
{
  "token": "a9a7007f890c790a30a0e0f0a7a07a0242354114"
}
```

### Multi-factor authentication (MFA)

#### Step 1

**Method**

| URI                               | HTTP Method | Authentication |
|-----------------------------------|-------------|----------------|
| api.robinhood.com/api-token-auth/ | POST        |	None           |

**Fields**

| Parameter | Type   | Description   | Default | Required |
|-----------|--------|---------------|---------|----------|
| username  | String | Your username | N/A     | **Yes**  |
| password  | String | Uh, password  | N/A     | **Yes**  |

**Request sample**

```
curl -v https://api.robinhood.com/api-token-auth/ \
   -H "Accept: application/json" \
   -d "username={username}&password={password}"
```

**Response**

| Key          | Type    | Description             |
|--------------|---------|-------------------------|
| mfa_type     | String  | MFA type                |
| mfa_required | Boolean | whether MFA is required |

**Response sample**

```
{
  "mfa_type":"sms",
  "mfa_required":true
}
```
#### Step 2

**Method**

| URI                               | HTTP Method | Authentication |
|-----------------------------------|-------------|----------------|
| api.robinhood.com/api-token-auth/ | POST        |	None           |

**Fields**

| Parameter | Type   | Description   | Default | Required |
|-----------|--------|---------------|---------|----------|
| username  | String | Your username | N/A     | **Yes**  |
| password  | String | Uh, password  | N/A     | **Yes**  |
| mfa_code  | String | MFA code      | N/A     | **Yes**  |

**Request sample**

```
curl -v https://api.robinhood.com/api-token-auth/ \
   -H "Accept: application/json" \
   -d "username={username}&password={password}&mfa_code={mfa_code}"
```

**Response**

| Key   | Type   |Description|
|-------|--------|-----------|
| token | String | The authorization token you must pass to all calls which require authentication |

**Response sample**

```
{
  "token": "a9a7007f890c790a30a0e0f0a7a07a0242354114"
}
```

## Logging out

Every client that [logs in](#log-in) with your username/password is given the same token. For security, you can force it to expire with a call to log out.

**Method**

| URI                                 | HTTP Method | Authentication |
|-------------------------------------|-------------|----------------|
| api.robinhood.com/api-token-logout/ | POST        |	Token        |

**Request sample**

```
curl -v https://api.robinhood.com/api-token-logout/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114" \
   -d ""
```

**Response**

*On success, no content is returned.*

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
