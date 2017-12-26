# Tag and Categorizing Data

- [10 Most Popular Instruments](#)
- [100 Most Popular Instruments](#)

In 2018, Robinhood Web will expose more Social and Informational tools. You'll see how popular a security is with other Robinhood users, MorningStar ratings, etc.

This page describes known built-in tags.

# 10 Most Popular Instruments Among Robinhood Users

This returns a list of the 10 most popular investments among Robinhood's userbase.

**Method**

| URI                                                  | HTTP Method | Authentication |
|------------------------------------------------------|-------------|----------------|
| api.robinhood.com/midlands/tags/tag/10-most-popular/ | GET         | No             |

**Fields**

None

**Request sample**

```
curl -v https://api.robinhood.com/midlands/tags/tag/10-most-popular/ \
   -H "Accept: application/json"
```

**Response**

A list of instruments is returned with an optional description and other fields suited for display.

| Key         | Type   | Description |
|-------------|--------|-------------|
| slug        | String |  |
| name        | String |  |
| description | String |  |
| instruments | Array  |  |

**Response sample**

```
{  
   "slug":"10-most-popular",
   "name":"10 Most Popular",
   "description":"",
   "instruments":[  
      "https://api.robinhood.com/instruments/6df56bd0-0bf2-44ab-8875-f94fd8526942/",
      "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "https://api.robinhood.com/instruments/450dfc6d-5510-4d40-abfb-f633b7d9be3e/",
      "https://api.robinhood.com/instruments/e39ed23a-7bd1-4587-b060-71988d9ef483/",
      "https://api.robinhood.com/instruments/1e513292-5926-4dc4-8c3d-4af6b5836704/",
      "https://api.robinhood.com/instruments/39ff611b-84e7-425b-bfb8-6fe2a983fcf3/",
      "https://api.robinhood.com/instruments/ebab2398-028d-4939-9f1d-13bf38f81c50/",
      "https://api.robinhood.com/instruments/940fc3f5-1db5-4fed-b452-f3a2e4562b5f/",
      "https://api.robinhood.com/instruments/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8/",
      "https://api.robinhood.com/instruments/fdf46795-2a81-4506-880f-514c8010c163/"
   ]
}
```

# 100 Most Popular Instruments Among Robinhood Users

This returns a list of the 100 most popular investments among Robinhood's userbase.

**Method**

| URI                                                   | HTTP Method | Authentication |
|-------------------------------------------------------|-------------|----------------|
| api.robinhood.com/midlands/tags/tag/100-most-popular/ | GET         | No             |

**Fields**

None

**Request sample**

```
curl -v https://api.robinhood.com/midlands/tags/tag/100-most-popular/ \
   -H "Accept: application/json"
```

**Response**

A list of instruments is returned with an optional description and other fields suited for display.

| Key         | Type   | Description |
|-------------|--------|-------------|
| slug        | String |  |
| name        | String |  |
| description | String |  |
| instruments | Array  |  |

**Response sample**

```
{  
   "slug":"100-most-popular",
   "name":"100 Most Popular",
   "description":"",
   "instruments":[  
      "https://api.robinhood.com/instruments/f3acdd2f-6580-4c75-a69c-81481cc4c235/",
      "https://api.robinhood.com/instruments/ec89803c-c5e5-4df1-889c-da4f8cb6f8cd/",
      "https://api.robinhood.com/instruments/3ad11874-934e-4b7f-8686-c7c9115b1a0b/",
      "https://api.robinhood.com/instruments/18006bfb-cbad-4326-8348-738c94ea47fa/",
      "https://api.robinhood.com/instruments/043fe74b-a79b-4084-9cd8-f8ca56d8bf5c/",
      "https://api.robinhood.com/instruments/279d787b-515b-4f9c-a684-45f92afb557f/",
      "https://api.robinhood.com/instruments/6df56bd0-0bf2-44ab-8875-f94fd8526942/",
      "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "https://api.robinhood.com/instruments/450dfc6d-5510-4d40-abfb-f633b7d9be3e/",
      "https://api.robinhood.com/instruments/88706156-e338-456a-a973-2473df47e8f8/",
      "https://api.robinhood.com/instruments/8a9fe49d-5d0a-4040-a19b-f3f4df44408f/",
      "https://api.robinhood.com/instruments/599dd133-44d3-4c1e-b992-eb08b7ab7faa/",
      "https://api.robinhood.com/instruments/b9a6444e-ce3e-4186-be32-b82814d2b418/",
      "https://api.robinhood.com/instruments/9fcb8b24-6f4e-42a5-9300-c1062cd2fec2/",
      "https://api.robinhood.com/instruments/6bff5af5-3c35-460e-b020-ee158d42ca99/",
      "https://api.robinhood.com/instruments/93ec8a9c-d587-4867-9996-67733ec86980/",
      "https://api.robinhood.com/instruments/77704159-ecaf-45ad-9c61-d9615a7d27da/",
      "https://api.robinhood.com/instruments/66ec1551-e033-4f9a-a46f-2b73aa529977/",
      "https://api.robinhood.com/instruments/0a8a072c-e52c-4e41-a2ee-8adbd72217d3/",
      "https://api.robinhood.com/instruments/6ec6c70e-d686-4d73-b5a8-74fec96aca0e/",
      "https://api.robinhood.com/instruments/b2e06903-5c44-46a4-bd42-2a696f9d68e1/",
      "https://api.robinhood.com/instruments/44e0b555-4638-4dae-9323-537322318dac/",
      "https://api.robinhood.com/instruments/e39605bf-9789-41f5-8b50-9bd38fec8f17/",
      "https://api.robinhood.com/instruments/1be547f6-699e-4515-a0b3-f4c084aa0082/",
      "https://api.robinhood.com/instruments/e39ed23a-7bd1-4587-b060-71988d9ef483/",
      "https://api.robinhood.com/instruments/3a47ca97-d5a2-4a55-9045-053a588894de/",
      "https://api.robinhood.com/instruments/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/",
      "https://api.robinhood.com/instruments/d15643d2-545c-4b83-a290-f85fe4575b0e/",
      "https://api.robinhood.com/instruments/09bc1a2d-534d-49d4-add7-e0eb3be8e640/",
      "https://api.robinhood.com/instruments/5c7b953c-a794-4349-84a1-3a7609b13420/",
      "https://api.robinhood.com/instruments/1e6a8e57-38ed-4954-bceb-91f75212cb6d/",
      "https://api.robinhood.com/instruments/1e513292-5926-4dc4-8c3d-4af6b5836704/",
      "https://api.robinhood.com/instruments/a4ecd608-e7b4-4ff3-afa5-f77ae7632dfb/",
      "https://api.robinhood.com/instruments/e19d0a68-a377-4b22-80df-fd51871a87f2/",
      "https://api.robinhood.com/instruments/bb9a01df-5982-42d4-88db-8662f23cdab5/",
      "https://api.robinhood.com/instruments/5a74602a-8133-4f0e-abe2-1033534665c9/",
      "https://api.robinhood.com/instruments/39ff611b-84e7-425b-bfb8-6fe2a983fcf3/",
      "https://api.robinhood.com/instruments/80e57408-d0ad-40da-9b82-f8a20854c93e/",
      "https://api.robinhood.com/instruments/cf1d849d-06f7-4374-9e84-13129713d0c7/",
      "https://api.robinhood.com/instruments/ee9ff5fd-abf3-4e11-bd82-c2ca55880f19/",
      "https://api.robinhood.com/instruments/9133b38b-4917-4b5a-8eab-c029d60f9912/",
      "https://api.robinhood.com/instruments/c0bb3aec-bd1e-471e-a4f0-ca011cbec711/",
      "https://api.robinhood.com/instruments/fd0c2695-e591-4c28-bdf7-068895ae3b14/",
      "https://api.robinhood.com/instruments/9a02028d-f296-418a-b061-7a3b40981d9e/",
      "https://api.robinhood.com/instruments/43c1172a-9130-420a-ac9b-b01a6ff5dd54/",
      "https://api.robinhood.com/instruments/d11b336e-6c69-49e5-81c4-189fa3f8141c/",
      "https://api.robinhood.com/instruments/da53f1f6-29b2-4d20-bb4e-05da9d508259/",
      "https://api.robinhood.com/instruments/ebab2398-028d-4939-9f1d-13bf38f81c50/",
      "https://api.robinhood.com/instruments/4c799e5b-628a-484c-a218-45a1086d0ad0/",
      "https://api.robinhood.com/instruments/d05566bf-b0cc-414b-a520-b9216bb80abf/",
      "https://api.robinhood.com/instruments/309344d3-af67-4190-9970-b10618959fe5/",
      "https://api.robinhood.com/instruments/70681f39-f2d8-4b0c-962d-4233590038db/",
      "https://api.robinhood.com/instruments/ef99a2c4-adb2-4163-a2df-2d5722cc75b7/",
      "https://api.robinhood.com/instruments/0dd811b3-7047-448d-96e0-7bf6ee4cfe45/",
      "https://api.robinhood.com/instruments/b6b70063-522f-465c-907b-ead86d694684/",
      "https://api.robinhood.com/instruments/54e3b5d2-5aaf-42b3-a77f-91ed90bdf1fe/",
      "https://api.robinhood.com/instruments/b1e0ba21-bf54-454a-a409-89fe275bbe05/",
      "https://api.robinhood.com/instruments/48bbe4a0-d167-4bfe-8d3b-494f9bb56350/",
      "https://api.robinhood.com/instruments/12e429a8-f78d-4b0c-9f46-bf12fa6a32fb/",
      "https://api.robinhood.com/instruments/bb69e3f5-6fd8-421c-b2bb-a347dfa84275/",
      "https://api.robinhood.com/instruments/b647ad8c-4f29-4f95-bacb-8949d866d70e/",
      "https://api.robinhood.com/instruments/6957592c-ace4-41f4-98f1-1b3a3a54a7dd/",
      "https://api.robinhood.com/instruments/81733743-965a-4d93-b87a-6973cb9efd34/",
      "https://api.robinhood.com/instruments/9bd6410c-34bc-42af-becf-702a86d6b44f/",
      "https://api.robinhood.com/instruments/d6e58803-e3ce-4bfc-8698-4d4b92f71c9c/",
      "https://api.robinhood.com/instruments/943c5009-a0bb-4665-8cf4-a95dab5874e4/",
      "https://api.robinhood.com/instruments/ad1edbfb-19c8-4939-be66-1f09bd65b902/",
      "https://api.robinhood.com/instruments/93495afe-b84b-4664-881c-b6361b0edeef/",
      "https://api.robinhood.com/instruments/861415a3-003c-4146-b66c-01142bf552b4/",
      "https://api.robinhood.com/instruments/18c7a7ad-3527-47b4-84b4-ce4db0106531/",
      "https://api.robinhood.com/instruments/a3fc9337-188d-4869-90d8-81e01ae8f090/",
      "https://api.robinhood.com/instruments/544a79d6-8599-4131-a367-ffce07d74ab9/",
      "https://api.robinhood.com/instruments/a4f0cca4-79dc-4297-9c02-5bce1909cd4b/",
      "https://api.robinhood.com/instruments/47b3ea92-713b-4f7b-bb63-8e441491950a/",
      "https://api.robinhood.com/instruments/96a2c6cd-90b6-41cc-a594-e6f04ad29329/",
      "https://api.robinhood.com/instruments/940fc3f5-1db5-4fed-b452-f3a2e4562b5f/",
      "https://api.robinhood.com/instruments/ca6f3da5-c8f7-48c9-948e-b74aed0d6816/",
      "https://api.robinhood.com/instruments/54db869e-f7d5-45fb-88f1-8d7072d4c8b2/",
      "https://api.robinhood.com/instruments/18226051-6bfa-4c56-bd9a-d7575f0245c1/",
      "https://api.robinhood.com/instruments/5ea5e761-1747-4911-beec-5a24af338329/",
      "https://api.robinhood.com/instruments/d4343b04-5522-4ff6-a892-4fc97dc61b68/",
      "https://api.robinhood.com/instruments/077f2174-931c-447c-bfdd-cfbf7658b1f9/",
      "https://api.robinhood.com/instruments/479de8c0-22fe-4fcb-ba9f-65b55ab09d16/",
      "https://api.robinhood.com/instruments/c74a93bc-58f3-4ccb-b4e3-30c65e2f88c8/",
      "https://api.robinhood.com/instruments/ae7f719c-ba1a-4207-8d94-af40fb7310f8/",
      "https://api.robinhood.com/instruments/3c438ffc-2724-495a-b2aa-31bfef978ad6/",
      "https://api.robinhood.com/instruments/f71123c6-d1de-4e1f-8045-55c474bd54e1/",
      "https://api.robinhood.com/instruments/ad059c69-0c1c-4c6b-8322-f53f1bbd69d4/",
      "https://api.robinhood.com/instruments/fdf46795-2a81-4506-880f-514c8010c163/",
      "https://api.robinhood.com/instruments/d5bd04b5-a963-4e20-bce4-7a1d916d78fd/",
      "https://api.robinhood.com/instruments/306245dd-b82d-4d8d-bcc5-7c58e87cdd15/",
      "https://api.robinhood.com/instruments/2b456f6a-3287-4757-abf9-327383d2c708/",
      "https://api.robinhood.com/instruments/aec9d597-9fdb-4393-af8b-da2019e2c179/",
      "https://api.robinhood.com/instruments/c2aed0bd-3042-45f0-b7dc-f74862d21642/",
      "https://api.robinhood.com/instruments/46858296-57ce-4025-b73b-4c0cf38cd673/",
      "https://api.robinhood.com/instruments/a2918763-e6af-407d-aba4-9cc22999482b/",
      "https://api.robinhood.com/instruments/9a1ea21e-f9b3-4e96-8b1f-c2bcd9fa4908/",
      "https://api.robinhood.com/instruments/2ed64ef4-2c1a-44d6-832d-1be84741dc41/"
   ]
}
```
