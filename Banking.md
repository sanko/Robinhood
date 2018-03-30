# Bank Accounts

Money, baby!

# Endpoints
 
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
 
## Create Account Relationship with Bank that Supports Instant Account Verification (IAV) Service

    @FormUrlEncoded
    @POST("/ach/iav/create/")
    Observable<AchRelationship> createIavRelationship(@Field("access_token") String str, @Field("iav_account_id") String str2, @Field("account") String str3, @Field("bank_account_type") String str4, @Field("bank_account_holder_name") String str5);

## Verify IAV Account Relationship with Initial Deposit

    @FormUrlEncoded
    @POST("/ach/iav/create/")
    Observable<AchRelationship> createIavRelationshipWithInitialDeposit(@Field("access_token") String str, @Field("iav_account_id") String str2, @Field("account") String str3, @Field("bank_account_type") String str4, @Field("bank_account_holder_name") String str5, @Field("initial_deposit") String str6);
 
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
- Get ACH Transfer				GET /ach/transfers/$id/
- Get ACH Transfers				GET /ach/transfers/					{cursor => optional}
- Get Queued ACH Deposit		GET /ach/iav/queued_deposit/
- Post ACH Transfer				POST /ach/transfers/  											{???}
- IAV AuthMfaAnswer				POST /ach/iav/auth/mfa/					{bank_institution, access_token, mfa}
- IAV Auth Request				POST /ach/iav/auth/						{bank_institution, username, password, pin}
- Post Queued ACH Deposit		POST /ach/iav/queued_deposit/
- Add ACH with Instant Acct Verification	POST /ach/iav/create/				{access_token
																	 iav_account_id
																	 account ($account_id)
																	 bank_account_type ('checking' or 'savings')
																	 bank_account_holder_name
																	}
 


# Models




## AutomaticDeposit

