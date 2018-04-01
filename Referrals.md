# Sign-up Referrals

# TODO

- Get Referral Rewards Inventory GET /midlands/rewards/stock/inventory/
- Get Referral Campaign Info	GET /midlands/referral/instant/information/
- Get Referral Code				GET /midlands/referral/code/
- Get Referrals					GET /midlands/referral/instand/referrals/?curosr=$cursor
- Establish Referral			POST /midlands/referral/instant/	???


    @POST("/midlands/rewards/stock/{reward_id}/claim/")
    Observable<StockReward> claimStockReward(@Path("reward_id") String str);

    @FormUrlEncoded
    @POST("/midlands/referral/instant/")
    Observable<Void> establishInstantReferral(@Field("referral_code") String str);

    @POST("/midlands/referral/")
    Observable<Void> establishReferral(@Body EstablishReferralRequest establishReferralRequest);

    @GET("/midlands/referral/promotion/")
    Observable<OrganicReward> getOrganicReward(@Query("device_id") String str);

    @GET("/midlands/referral/code/")
    Observable<ReferralCode> getReferralCode();

    @GET("/midlands/referral/")
    Observable<PaginatedResult<ApiReferral>> getReferrals(@Query("cursor") String str);

    @GET("/midlands/referral/campaign/general/context/")
    Observable<ReferrerCampaign> getReferrerCampaign();

    @GET("/midlands/referral/campaign/general/")
    Observable<ReferrerData> getReferrerData();

    @POST("/midlands/referral/{referral_id}/remind/")
    Observable<Void> remindPendingReferral(@Path("referral_id") String str);

    @POST("/midlands/contacts/invites/")
    Observable<Void> uploadContactInvitesData(@Body ContactData.Request request);

    @POST("/midlands/contacts/")
    Observable<Void> uploadContactsData(@Body ContactData.Request request);

