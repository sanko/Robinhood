# Bank Accounts


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
- Cancel ACH Transfer			POST /ach/transfers/$id/cancel/
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
