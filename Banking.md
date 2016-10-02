# Bank Accounts

Money, baby!

# Endpoints

## Add Automatic Deposit

**Method**

| URI                                      | HTTP Method | Authentication |
|------------------------------------------|-------------|----------------|
| api.robinhood.com/ach/deposit_schedules/ | POST        |	Token           |

**Fields**

| Parameter       | Type   | Description         | Default | Required |
|-----------------|--------|---------------------|---------|----------|
| achRelationship | URL    | ACH Relationship ID | N/A     | **Yes**  |
| amount          | String |                     | N/A     | **Yes**  |
| frequency       | String | 'weekly', 'biweekly', 'monthly', 'quarterly', or '' if transfer only happens once              | N/A     | **Yes**  |

**Request sample**

```
curl -v https://api.robinhood.com/ach/deposit_schedules/ \
   -H "Accept: application/json" \
   -d "achRelationship=/ach/relationships/{relID}/&amount=300&frequency=weekly"
```

**Response**

| Key   | Type   |Description|
|-------|--------|-----------|
| ???   | ???    | ???       |

**Response sample**

```
TODO
```

## Cancel ACH Transfer

 @POST("/ach/transfers/{id}/cancel/")
    Observable<Void> cancelAchTransfer(@Path("id") String str);

**Method**

| URI                                          | HTTP Method | Authentication |
|----------------------------------------------|-------------|----------------|
| api.robinhood.com/ach/transfers/{id}/cancel/ | POST        |	Token         |

**Fields**

| Parameter       | Type   | Description         | Default | Required |
|-----------------|--------|---------------------|---------|----------|
| id              | URL    | ACH Relationship ID | N/A     | **Yes**  |

**Request sample**

```
curl -v https://api.robinhood.com/ach/transfers/4323....442434/cancel/ \
   -H "Accept: application/json" \
   -d ""
```

**Response**

| Key   | Type   |Description|
|-------|--------|-----------|
| ???   | ???    | ???       |

**Response sample**

```
TODO
```

## Add Automatic Deposit

  @FormUrlEncoded
    @POST("/ach/relationships/")
    Observable<AchRelationship> createAchRelationship(@Field("account") String str, @Field("bank_routing_number") String str2, @Field("bank_account_number") String str3, @Field("bank_account_type") String str4, @Field("bank_account_holder_name") String str5, @Field("bank_account_nickname") String str6);

## Create Account Relationship with Bank that Supports Instant Account Verification (IAV) Service

    @FormUrlEncoded
    @POST("/ach/iav/create/")
    Observable<AchRelationship> createIavRelationship(@Field("access_token") String str, @Field("iav_account_id") String str2, @Field("account") String str3, @Field("bank_account_type") String str4, @Field("bank_account_holder_name") String str5);

## Verify IAV Account Relationship with Initial Deposit

    @FormUrlEncoded
    @POST("/ach/iav/create/")
    Observable<AchRelationship> createIavRelationshipWithInitialDeposit(@Field("access_token") String str, @Field("iav_account_id") String str2, @Field("account") String str3, @Field("bank_account_type") String str4, @Field("bank_account_holder_name") String str5, @Field("initial_deposit") String str6);

## Delete Automatic Deposit

    @DELETE("/ach/deposit_schedules/{automaticDepositId}/")
    Observable<Void> deleteAutomaticDeposit(@Path("automaticDepositId") String str);

## Get Single ACH Relationship

    @GET("/ach/relationships/{achRelationshipId}/")
    Observable<AchRelationship> getAchRelationship(@Path("achRelationshipId") String str);

## List ACH Relationships

    @GET("/ach/relationships/")
    Observable<PaginatedResult<AchRelationship>> getAchRelationships(@Query("cursor") String str);

## Get Bank Transfer by ID

    @GET("/ach/transfers/{id}/")
    Observable<AchTransfer> getAchTransfer(@Path("id") String str);

    @GET("/ach/transfers/")
    Observable<PaginatedResult<AchTransfer>> getAchTransfers(@Query("cursor") String str);

@GET("/applications/{type}/")
Observable<Application> getApplicationByType(@Path("type") String str);

    @GET("/ach/deposit_schedules/{automaticDepositId}/")
    Observable<AutomaticDeposit> getAutomaticDeposit(@Path("automaticDepositId") String str);

    @GET("/ach/deposit_schedules/")
    Observable<PaginatedResult<AutomaticDeposit>> getAutomaticDeposits(@Query("cursor") String str);

    @GET("/ach/iav/queued_deposit/")
    Observable<QueuedAchDeposit> getQueuedAchDeposit();


    @POST("/ach/transfers/")
    Observable<AchTransfer> postAchTransfer(@Body AchTransfer.Request request);
bservable<Device> postDevice(@Body Device device);

    @FormUrlEncoded
    @POST("/ach/iav/auth/mfa/")
    Observable<IavResponse> postIavAuthMfaAnswer(@Field("bank_institution") String str, @Field("access_token") String str2, @Field("mfa") String str3);

    @FormUrlEncoded
    @POST("/ach/iav/auth/")
    Observable<IavResponse> postIavAuthRequest(@Field("bank_institution") String str, @Field("username") String str2, @Field("password") String str3, @Field("pin") String str4);

    @POST("/ach/iav/queued_deposit/")
    Observable<QueuedAchDeposit> postQueuedAchDeposit(@Body QueuedAchDepositRequest queuedAchDepositRequest);

	@POST("/ach/relationships/{id}/unlink/")
    Observable<Void> unlinkAchRelationship(@Path("id") String str);

@FormUrlEncoded
    @POST("/ach/relationships/{id}/micro_deposits/verify/")
    Observable<Void> verifyMicrodeposits(@Path("id") String str, @Field("first_amount_cents") String str2, @Field("second_amount_cents") String str3);

# TODO

- Create Sweep Account			PUT  /user/additional_info/ 		{sweep_consent}
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



# Models




## AutomaticDeposit

