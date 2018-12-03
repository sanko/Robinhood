# Gather Watchlist's Items

Grab a list of watchlist items.

**URL** : `/watchlists/{name}/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Request samples**

```
curl -v https://api.robinhood.com/watchlists/Default/ \
   -H "Accept: application/json" \
   -H "Authorization: Token a9a7007f890c790a30a0e0f0a7a07a0242354114"
```

## Success Responses

**Condition** : Sucessfully gather watchlist items.

**Code** : `200 OK`

**Content example** :

```json
{
  "previous": null,
  "results": [
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8373dfad-6a18-481e-a6da-b6d754fa7937/",
      "created_at": "2016-03-13T15:02:33.958247Z",
      "url": "https://api.robinhood.com/watchlists/Default/8373dfad-6a18-481e-a6da-b6d754fa7937/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/27222ed1-7ffd-4ce3-adab-782171ca21be/",
      "created_at": "2016-04-17T02:50:58.885576Z",
      "url": "https://api.robinhood.com/watchlists/Default/27222ed1-7ffd-4ce3-adab-782171ca21be/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3a47ca97-d5a2-4a55-9045-053a588894de/",
      "created_at": "2016-03-13T14:57:40.266745Z",
      "url": "https://api.robinhood.com/watchlists/Default/3a47ca97-d5a2-4a55-9045-053a588894de/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
      "created_at": "2016-03-13T14:57:40.366281Z",
      "url": "https://api.robinhood.com/watchlists/Default/50810c35-d215-4866-9758-0ada4ac79ffa/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b2e06903-5c44-46a4-bd42-2a696f9d68e1/",
      "created_at": "2016-03-13T14:57:40.490065Z",
      "url": "https://api.robinhood.com/watchlists/Default/b2e06903-5c44-46a4-bd42-2a696f9d68e1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2ed64ef4-2c1a-44d6-832d-1be84741dc41/",
      "created_at": "2016-03-13T14:57:40.390814Z",
      "url": "https://api.robinhood.com/watchlists/Default/2ed64ef4-2c1a-44d6-832d-1be84741dc41/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/0dd811b3-7047-448d-96e0-7bf6ee4cfe45/",
      "created_at": "2016-03-13T14:57:40.514642Z",
      "url": "https://api.robinhood.com/watchlists/Default/0dd811b3-7047-448d-96e0-7bf6ee4cfe45/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fdf46795-2a81-4506-880f-514c8010c163/",
      "created_at": "2016-03-13T14:57:40.539828Z",
      "url": "https://api.robinhood.com/watchlists/Default/fdf46795-2a81-4506-880f-514c8010c163/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/96a2c6cd-90b6-41cc-a594-e6f04ad29329/",
      "created_at": "2016-03-13T14:57:40.566197Z",
      "url": "https://api.robinhood.com/watchlists/Default/96a2c6cd-90b6-41cc-a594-e6f04ad29329/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/64d5a963-a646-4ae7-9532-1f18bf523d5f/",
      "created_at": "2016-03-13T15:02:34.646448Z",
      "url": "https://api.robinhood.com/watchlists/Default/64d5a963-a646-4ae7-9532-1f18bf523d5f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/48bbe4a0-d167-4bfe-8d3b-494f9bb56350/",
      "created_at": "2016-03-13T15:02:34.472938Z",
      "url": "https://api.robinhood.com/watchlists/Default/48bbe4a0-d167-4bfe-8d3b-494f9bb56350/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2b4a601d-4976-4ddb-91cf-8a259f634b2c/",
      "created_at": "2016-03-13T15:02:35.190355Z",
      "url": "https://api.robinhood.com/watchlists/Default/2b4a601d-4976-4ddb-91cf-8a259f634b2c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b3f1dd1f-b685-4504-b1a6-9c3c66193184/",
      "created_at": "2016-03-13T15:02:35.345228Z",
      "url": "https://api.robinhood.com/watchlists/Default/b3f1dd1f-b685-4504-b1a6-9c3c66193184/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f74acd18-c8a1-4851-abd3-7b6e82d0cbce/",
      "created_at": "2016-03-13T15:02:36.034817Z",
      "url": "https://api.robinhood.com/watchlists/Default/f74acd18-c8a1-4851-abd3-7b6e82d0cbce/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2f50f59e-ae3f-4e33-a18b-c19eb5cdc9c4/",
      "created_at": "2016-03-13T15:02:35.537802Z",
      "url": "https://api.robinhood.com/watchlists/Default/2f50f59e-ae3f-4e33-a18b-c19eb5cdc9c4/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2d2c88a1-8f0a-4d79-af59-7408fdd4252c/",
      "created_at": "2016-03-13T15:02:36.208682Z",
      "url": "https://api.robinhood.com/watchlists/Default/2d2c88a1-8f0a-4d79-af59-7408fdd4252c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/09bc1a2d-534d-49d4-add7-e0eb3be8e640/",
      "created_at": "2016-03-13T15:02:36.439089Z",
      "url": "https://api.robinhood.com/watchlists/Default/09bc1a2d-534d-49d4-add7-e0eb3be8e640/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/aa2dfea3-ff4e-46fc-834a-9da5f1e7ff7e/",
      "created_at": "2016-03-13T15:02:36.789195Z",
      "url": "https://api.robinhood.com/watchlists/Default/aa2dfea3-ff4e-46fc-834a-9da5f1e7ff7e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e1e032ac-54a4-40fd-9d90-979044454bec/",
      "created_at": "2016-03-13T15:02:36.950523Z",
      "url": "https://api.robinhood.com/watchlists/Default/e1e032ac-54a4-40fd-9d90-979044454bec/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/af3c1d59-612e-400e-b0c2-7e47ebc126bd/",
      "created_at": "2016-03-13T15:02:37.107026Z",
      "url": "https://api.robinhood.com/watchlists/Default/af3c1d59-612e-400e-b0c2-7e47ebc126bd/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/15b103fe-001e-41ba-b11d-8b492edc58d6/",
      "created_at": "2016-03-13T15:02:37.251195Z",
      "url": "https://api.robinhood.com/watchlists/Default/15b103fe-001e-41ba-b11d-8b492edc58d6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/93495afe-b84b-4664-881c-b6361b0edeef/",
      "created_at": "2016-03-13T15:02:37.420462Z",
      "url": "https://api.robinhood.com/watchlists/Default/93495afe-b84b-4664-881c-b6361b0edeef/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/45ccb9d7-b9f0-40aa-833f-8381a4e5c3e5/",
      "created_at": "2016-03-13T15:02:37.780441Z",
      "url": "https://api.robinhood.com/watchlists/Default/45ccb9d7-b9f0-40aa-833f-8381a4e5c3e5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8a3c211c-bf48-4a3d-b30b-5f2df043b406/",
      "created_at": "2016-03-13T15:02:37.956749Z",
      "url": "https://api.robinhood.com/watchlists/Default/8a3c211c-bf48-4a3d-b30b-5f2df043b406/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/aa7e3b0b-fc04-4d2e-a986-e5c2e6f1b2fb/",
      "created_at": "2016-03-13T15:02:37.634423Z",
      "url": "https://api.robinhood.com/watchlists/Default/aa7e3b0b-fc04-4d2e-a986-e5c2e6f1b2fb/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5b62fdfc-4ae8-425a-913f-b23bef22939e/",
      "created_at": "2016-03-13T15:02:38.501111Z",
      "url": "https://api.robinhood.com/watchlists/Default/5b62fdfc-4ae8-425a-913f-b23bef22939e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/aec9d597-9fdb-4393-af8b-da2019e2c179/",
      "created_at": "2016-03-13T15:02:39.042546Z",
      "url": "https://api.robinhood.com/watchlists/Default/aec9d597-9fdb-4393-af8b-da2019e2c179/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/01b8488f-1ceb-461a-835d-c4ba04498387/",
      "created_at": "2016-03-13T15:02:39.526159Z",
      "url": "https://api.robinhood.com/watchlists/Default/01b8488f-1ceb-461a-835d-c4ba04498387/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/500e9be2-9e0e-4e1d-a6a0-5db42afb7c6e/",
      "created_at": "2016-03-13T15:02:38.854205Z",
      "url": "https://api.robinhood.com/watchlists/Default/500e9be2-9e0e-4e1d-a6a0-5db42afb7c6e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1d02b35a-bef9-4300-b743-7526bc95c753/",
      "created_at": "2016-03-13T15:02:39.683734Z",
      "url": "https://api.robinhood.com/watchlists/Default/1d02b35a-bef9-4300-b743-7526bc95c753/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7de2ccae-f497-476d-b26b-760bda0bfca4/",
      "created_at": "2016-03-13T15:02:39.859957Z",
      "url": "https://api.robinhood.com/watchlists/Default/7de2ccae-f497-476d-b26b-760bda0bfca4/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/caa088cc-a8ac-4b56-826f-bf276bdb246a/",
      "created_at": "2016-03-13T15:02:40.184880Z",
      "url": "https://api.robinhood.com/watchlists/Default/caa088cc-a8ac-4b56-826f-bf276bdb246a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b9a6444e-ce3e-4186-be32-b82814d2b418/",
      "created_at": "2016-03-13T15:02:40.367639Z",
      "url": "https://api.robinhood.com/watchlists/Default/b9a6444e-ce3e-4186-be32-b82814d2b418/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5e0dcc39-6692-4126-8741-e6e26f13672b/",
      "created_at": "2016-03-13T15:02:40.584870Z",
      "url": "https://api.robinhood.com/watchlists/Default/5e0dcc39-6692-4126-8741-e6e26f13672b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3bd10275-c3ce-4622-967f-3276cd9ffd20/",
      "created_at": "2016-03-13T15:02:40.748123Z",
      "url": "https://api.robinhood.com/watchlists/Default/3bd10275-c3ce-4622-967f-3276cd9ffd20/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/386ccd2c-7986-4f9c-a87a-8e9209c303da/",
      "created_at": "2016-03-13T15:02:41.267749Z",
      "url": "https://api.robinhood.com/watchlists/Default/386ccd2c-7986-4f9c-a87a-8e9209c303da/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2b456f6a-3287-4757-abf9-327383d2c708/",
      "created_at": "2016-03-13T15:02:41.437832Z",
      "url": "https://api.robinhood.com/watchlists/Default/2b456f6a-3287-4757-abf9-327383d2c708/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a4b2933e-8179-4b77-b31e-d4108701d84d/",
      "created_at": "2016-03-13T15:02:41.782640Z",
      "url": "https://api.robinhood.com/watchlists/Default/a4b2933e-8179-4b77-b31e-d4108701d84d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3a0c6b7c-757c-4377-ba55-96f2da429de8/",
      "created_at": "2016-03-13T15:02:41.955739Z",
      "url": "https://api.robinhood.com/watchlists/Default/3a0c6b7c-757c-4377-ba55-96f2da429de8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/893efad3-b23f-46d4-9638-d47e45a83e47/",
      "created_at": "2016-03-13T15:02:42.276144Z",
      "url": "https://api.robinhood.com/watchlists/Default/893efad3-b23f-46d4-9638-d47e45a83e47/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3f88aa35-e0e5-4b18-a0f0-b844903dd717/",
      "created_at": "2016-03-13T15:02:42.445086Z",
      "url": "https://api.robinhood.com/watchlists/Default/3f88aa35-e0e5-4b18-a0f0-b844903dd717/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a6eb2cc2-3359-49ad-aa5e-3c5ad8b2502a/",
      "created_at": "2016-03-13T15:02:42.687097Z",
      "url": "https://api.robinhood.com/watchlists/Default/a6eb2cc2-3359-49ad-aa5e-3c5ad8b2502a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c69525c3-05ab-4649-a875-feaaa22ccc4f/",
      "created_at": "2016-03-13T15:02:42.907660Z",
      "url": "https://api.robinhood.com/watchlists/Default/c69525c3-05ab-4649-a875-feaaa22ccc4f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3b0898ec-31ee-4429-893a-c664ff4294eb/",
      "created_at": "2016-03-13T15:02:43.062168Z",
      "url": "https://api.robinhood.com/watchlists/Default/3b0898ec-31ee-4429-893a-c664ff4294eb/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/db2a2b74-69e9-4df8-8010-03f8316b42b7/",
      "created_at": "2016-03-13T15:02:43.243075Z",
      "url": "https://api.robinhood.com/watchlists/Default/db2a2b74-69e9-4df8-8010-03f8316b42b7/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3f9aee1f-ae73-42b5-849a-e542aae71ad3/",
      "created_at": "2016-03-13T15:02:43.416086Z",
      "url": "https://api.robinhood.com/watchlists/Default/3f9aee1f-ae73-42b5-849a-e542aae71ad3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7d3e4e93-5860-498c-9f7b-9fe44c6fe2c8/",
      "created_at": "2016-03-13T15:02:43.596789Z",
      "url": "https://api.robinhood.com/watchlists/Default/7d3e4e93-5860-498c-9f7b-9fe44c6fe2c8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a5d41671-8048-428b-8df8-c7cdb49918e1/",
      "created_at": "2016-03-13T15:02:43.780626Z",
      "url": "https://api.robinhood.com/watchlists/Default/a5d41671-8048-428b-8df8-c7cdb49918e1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7f10279f-ceab-49b7-a339-f8c4ce80aa2e/",
      "created_at": "2016-03-13T15:02:44.185206Z",
      "url": "https://api.robinhood.com/watchlists/Default/7f10279f-ceab-49b7-a339-f8c4ce80aa2e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/245444a5-149d-4a0e-8c41-e5c87ffd327a/",
      "created_at": "2016-03-13T15:02:44.371251Z",
      "url": "https://api.robinhood.com/watchlists/Default/245444a5-149d-4a0e-8c41-e5c87ffd327a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2bf18475-b17d-478e-bc67-0e30db378c22/",
      "created_at": "2016-03-13T15:02:44.528046Z",
      "url": "https://api.robinhood.com/watchlists/Default/2bf18475-b17d-478e-bc67-0e30db378c22/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/40273b2a-7419-4ce8-9562-a8b47e578bb6/",
      "created_at": "2016-03-13T15:02:44.690151Z",
      "url": "https://api.robinhood.com/watchlists/Default/40273b2a-7419-4ce8-9562-a8b47e578bb6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/62680dbf-c666-4484-a47b-a9c55b430d1f/",
      "created_at": "2016-03-13T15:02:45.104931Z",
      "url": "https://api.robinhood.com/watchlists/Default/62680dbf-c666-4484-a47b-a9c55b430d1f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/9d0bf422-8042-4ebd-a2a8-f74943764bdf/",
      "created_at": "2016-03-13T15:02:45.598564Z",
      "url": "https://api.robinhood.com/watchlists/Default/9d0bf422-8042-4ebd-a2a8-f74943764bdf/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/269f2968-abb8-497f-bf5a-89227d531f4c/",
      "created_at": "2016-03-13T15:02:45.757909Z",
      "url": "https://api.robinhood.com/watchlists/Default/269f2968-abb8-497f-bf5a-89227d531f4c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d695c1f0-cbeb-4283-a339-a35c3d9de786/",
      "created_at": "2016-03-13T15:02:46.087912Z",
      "url": "https://api.robinhood.com/watchlists/Default/d695c1f0-cbeb-4283-a339-a35c3d9de786/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/0f2ae58d-1e61-430a-8d52-23a2ad058eee/",
      "created_at": "2016-03-13T15:02:46.248098Z",
      "url": "https://api.robinhood.com/watchlists/Default/0f2ae58d-1e61-430a-8d52-23a2ad058eee/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/761ed8c6-979a-4498-936f-2b702207941a/",
      "created_at": "2016-03-13T15:02:46.426174Z",
      "url": "https://api.robinhood.com/watchlists/Default/761ed8c6-979a-4498-936f-2b702207941a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1790dd4f-a7ff-409e-90de-cad5efafde10/",
      "created_at": "2016-03-13T15:02:46.781336Z",
      "url": "https://api.robinhood.com/watchlists/Default/1790dd4f-a7ff-409e-90de-cad5efafde10/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/68bae46a-c0a5-4cda-86a9-1d2460b0b7d3/",
      "created_at": "2016-03-13T15:02:46.942928Z",
      "url": "https://api.robinhood.com/watchlists/Default/68bae46a-c0a5-4cda-86a9-1d2460b0b7d3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3f4b82e2-6257-4c96-9d44-c77f7fc5403c/",
      "created_at": "2016-03-13T15:02:47.096741Z",
      "url": "https://api.robinhood.com/watchlists/Default/3f4b82e2-6257-4c96-9d44-c77f7fc5403c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/794c46a5-39ae-45ed-ba39-23912cdf872c/",
      "created_at": "2016-03-13T15:02:47.431146Z",
      "url": "https://api.robinhood.com/watchlists/Default/794c46a5-39ae-45ed-ba39-23912cdf872c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a25bdcf7-a3cd-4db7-ad49-37939535923f/",
      "created_at": "2016-03-13T15:02:47.905386Z",
      "url": "https://api.robinhood.com/watchlists/Default/a25bdcf7-a3cd-4db7-ad49-37939535923f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/067a54ad-031c-4ce1-a600-abca1b530f09/",
      "created_at": "2016-03-13T15:02:48.248591Z",
      "url": "https://api.robinhood.com/watchlists/Default/067a54ad-031c-4ce1-a600-abca1b530f09/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2148360d-e2c0-43ed-b829-fefef6074938/",
      "created_at": "2016-03-13T15:02:48.425221Z",
      "url": "https://api.robinhood.com/watchlists/Default/2148360d-e2c0-43ed-b829-fefef6074938/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/214fa643-f097-424a-9d3b-bd287fa3d5ab/",
      "created_at": "2016-03-13T15:02:48.604928Z",
      "url": "https://api.robinhood.com/watchlists/Default/214fa643-f097-424a-9d3b-bd287fa3d5ab/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/78f2f49d-4e60-4dd8-80fb-a0fa355a039c/",
      "created_at": "2016-03-13T15:02:48.790338Z",
      "url": "https://api.robinhood.com/watchlists/Default/78f2f49d-4e60-4dd8-80fb-a0fa355a039c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f0b88423-0e16-4acb-b569-6c7f4141cf2a/",
      "created_at": "2016-03-13T15:02:49.287420Z",
      "url": "https://api.robinhood.com/watchlists/Default/f0b88423-0e16-4acb-b569-6c7f4141cf2a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5725d5fc-89a4-4876-bc0f-04e386385745/",
      "created_at": "2016-03-13T15:02:49.461337Z",
      "url": "https://api.robinhood.com/watchlists/Default/5725d5fc-89a4-4876-bc0f-04e386385745/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1e3381f7-16cb-46c6-8f57-fbcaa6a4d3bc/",
      "created_at": "2016-03-13T15:02:49.632203Z",
      "url": "https://api.robinhood.com/watchlists/Default/1e3381f7-16cb-46c6-8f57-fbcaa6a4d3bc/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/510bdf2a-79a9-42d8-b451-42c3a553ed76/",
      "created_at": "2016-03-13T15:02:49.978163Z",
      "url": "https://api.robinhood.com/watchlists/Default/510bdf2a-79a9-42d8-b451-42c3a553ed76/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a96336e9-978d-4aa2-9bb1-8df3ef244de2/",
      "created_at": "2016-03-13T15:02:50.292191Z",
      "url": "https://api.robinhood.com/watchlists/Default/a96336e9-978d-4aa2-9bb1-8df3ef244de2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/60b374b3-0486-4fc6-baa4-34c2c58fcc32/",
      "created_at": "2016-03-13T15:02:50.451947Z",
      "url": "https://api.robinhood.com/watchlists/Default/60b374b3-0486-4fc6-baa4-34c2c58fcc32/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/29f65a36-def3-496f-8794-6228f7bbc641/",
      "created_at": "2016-03-13T15:02:50.615997Z",
      "url": "https://api.robinhood.com/watchlists/Default/29f65a36-def3-496f-8794-6228f7bbc641/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/de17b841-43de-4c34-b6ba-965e97fdb6a0/",
      "created_at": "2016-03-13T15:02:50.807579Z",
      "url": "https://api.robinhood.com/watchlists/Default/de17b841-43de-4c34-b6ba-965e97fdb6a0/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/72bf0013-8e56-4d1a-9a23-34aaf94e3b04/",
      "created_at": "2016-03-13T15:02:50.959361Z",
      "url": "https://api.robinhood.com/watchlists/Default/72bf0013-8e56-4d1a-9a23-34aaf94e3b04/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/819eb312-958e-4429-a5ff-655e39b645e6/",
      "created_at": "2016-03-13T15:02:51.126011Z",
      "url": "https://api.robinhood.com/watchlists/Default/819eb312-958e-4429-a5ff-655e39b645e6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/55293f1d-4bf6-4650-9528-5acc3d77fe73/",
      "created_at": "2016-03-13T15:02:51.445821Z",
      "url": "https://api.robinhood.com/watchlists/Default/55293f1d-4bf6-4650-9528-5acc3d77fe73/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/305e1b40-8299-4340-b240-aa03cb919948/",
      "created_at": "2016-03-13T15:02:51.613458Z",
      "url": "https://api.robinhood.com/watchlists/Default/305e1b40-8299-4340-b240-aa03cb919948/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7afedc6a-6c62-4832-b1dd-7d9212c2c5c7/",
      "created_at": "2016-03-13T15:02:51.945837Z",
      "url": "https://api.robinhood.com/watchlists/Default/7afedc6a-6c62-4832-b1dd-7d9212c2c5c7/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/47857c31-570d-47f4-ae19-26579f14f72b/",
      "created_at": "2016-03-13T15:02:52.279099Z",
      "url": "https://api.robinhood.com/watchlists/Default/47857c31-570d-47f4-ae19-26579f14f72b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e4f1a9aa-7c7a-4521-b587-8d3f51e6776c/",
      "created_at": "2016-03-13T15:02:52.474474Z",
      "url": "https://api.robinhood.com/watchlists/Default/e4f1a9aa-7c7a-4521-b587-8d3f51e6776c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/62f5a687-c21d-4d1a-983f-6efcf0b296ef/",
      "created_at": "2016-03-13T15:02:52.670076Z",
      "url": "https://api.robinhood.com/watchlists/Default/62f5a687-c21d-4d1a-983f-6efcf0b296ef/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/0906e0f9-e989-4737-b06d-eb1a0224066c/",
      "created_at": "2016-03-13T15:02:52.846629Z",
      "url": "https://api.robinhood.com/watchlists/Default/0906e0f9-e989-4737-b06d-eb1a0224066c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/368b6f05-a2aa-4fa1-bd05-67928f0bf919/",
      "created_at": "2016-03-13T15:02:53.360641Z",
      "url": "https://api.robinhood.com/watchlists/Default/368b6f05-a2aa-4fa1-bd05-67928f0bf919/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e1ca2bd0-bf91-499e-8e96-923d4574105c/",
      "created_at": "2016-03-13T15:02:53.016610Z",
      "url": "https://api.robinhood.com/watchlists/Default/e1ca2bd0-bf91-499e-8e96-923d4574105c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f0a76588-65e1-4f0a-bc70-202e918d6ce5/",
      "created_at": "2016-03-13T15:02:53.187336Z",
      "url": "https://api.robinhood.com/watchlists/Default/f0a76588-65e1-4f0a-bc70-202e918d6ce5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a6db5cc4-aa19-45fc-9acf-ed1826367af7/",
      "created_at": "2016-03-13T15:02:53.571799Z",
      "url": "https://api.robinhood.com/watchlists/Default/a6db5cc4-aa19-45fc-9acf-ed1826367af7/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fa6605f0-4727-44f5-9a54-2f3bd7e652d6/",
      "created_at": "2016-03-13T15:02:53.723835Z",
      "url": "https://api.robinhood.com/watchlists/Default/fa6605f0-4727-44f5-9a54-2f3bd7e652d6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a26e246e-53a9-4fec-9d6f-b9fa43ec9b97/",
      "created_at": "2016-03-13T15:02:53.946404Z",
      "url": "https://api.robinhood.com/watchlists/Default/a26e246e-53a9-4fec-9d6f-b9fa43ec9b97/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fe92441c-d3a4-4f0d-a97e-2aaa756e2de6/",
      "created_at": "2016-03-13T15:02:54.167579Z",
      "url": "https://api.robinhood.com/watchlists/Default/fe92441c-d3a4-4f0d-a97e-2aaa756e2de6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/dac11fcf-9a2d-4468-af1a-19e8f25adebd/",
      "created_at": "2016-03-13T15:02:54.328086Z",
      "url": "https://api.robinhood.com/watchlists/Default/dac11fcf-9a2d-4468-af1a-19e8f25adebd/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/22d00fac-cb58-46fb-afea-e1782c91a822/",
      "created_at": "2016-03-13T15:02:54.496306Z",
      "url": "https://api.robinhood.com/watchlists/Default/22d00fac-cb58-46fb-afea-e1782c91a822/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8ec34eb2-77c2-45c8-9272-7a775aeac567/",
      "created_at": "2016-03-13T15:02:54.652362Z",
      "url": "https://api.robinhood.com/watchlists/Default/8ec34eb2-77c2-45c8-9272-7a775aeac567/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/66ddb842-11a5-4e48-b605-6a79484933e4/",
      "created_at": "2016-03-13T15:02:54.826118Z",
      "url": "https://api.robinhood.com/watchlists/Default/66ddb842-11a5-4e48-b605-6a79484933e4/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/91291a4c-2519-49b6-9844-63fe21ca1e4d/",
      "created_at": "2016-03-13T15:02:55.020685Z",
      "url": "https://api.robinhood.com/watchlists/Default/91291a4c-2519-49b6-9844-63fe21ca1e4d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fd0ad1d6-67ca-45ba-a66e-579344d8bb51/",
      "created_at": "2016-03-13T15:02:55.170179Z",
      "url": "https://api.robinhood.com/watchlists/Default/fd0ad1d6-67ca-45ba-a66e-579344d8bb51/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/94cddcc5-758c-4506-98cd-66ef753efc0b/",
      "created_at": "2016-03-13T15:02:55.343557Z",
      "url": "https://api.robinhood.com/watchlists/Default/94cddcc5-758c-4506-98cd-66ef753efc0b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e7912167-b89a-44ae-a3d5-c217ae7497a4/",
      "created_at": "2016-03-13T15:02:55.513375Z",
      "url": "https://api.robinhood.com/watchlists/Default/e7912167-b89a-44ae-a3d5-c217ae7497a4/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b22b0ab0-7b4a-4283-8905-1f8490138027/",
      "created_at": "2016-03-13T15:02:55.899092Z",
      "url": "https://api.robinhood.com/watchlists/Default/b22b0ab0-7b4a-4283-8905-1f8490138027/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8e1f15ad-12b2-49a4-b5b1-acf4e39a70b8/",
      "created_at": "2016-03-13T15:02:56.082674Z",
      "url": "https://api.robinhood.com/watchlists/Default/8e1f15ad-12b2-49a4-b5b1-acf4e39a70b8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/997ac258-7d59-4703-afcf-b3c6aebea377/",
      "created_at": "2016-03-13T15:02:56.442920Z",
      "url": "https://api.robinhood.com/watchlists/Default/997ac258-7d59-4703-afcf-b3c6aebea377/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f20adcfb-6753-4345-8a8f-9a444fe9ecba/",
      "created_at": "2016-03-13T15:02:56.598656Z",
      "url": "https://api.robinhood.com/watchlists/Default/f20adcfb-6753-4345-8a8f-9a444fe9ecba/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c2a3eb86-7e2f-449a-9cd0-bebcb7eb47c8/",
      "created_at": "2016-03-13T15:02:56.780820Z",
      "url": "https://api.robinhood.com/watchlists/Default/c2a3eb86-7e2f-449a-9cd0-bebcb7eb47c8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/427a4c9d-a1e3-4428-a2ec-538ea1144caa/",
      "created_at": "2016-03-13T15:02:57.318982Z",
      "url": "https://api.robinhood.com/watchlists/Default/427a4c9d-a1e3-4428-a2ec-538ea1144caa/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/257e4dc9-f4b0-4e57-b6ab-afda86dac3e3/",
      "created_at": "2016-03-13T15:02:57.541059Z",
      "url": "https://api.robinhood.com/watchlists/Default/257e4dc9-f4b0-4e57-b6ab-afda86dac3e3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c9cbc1ff-2616-4773-b272-166bf3029d79/",
      "created_at": "2016-03-13T15:02:57.740362Z",
      "url": "https://api.robinhood.com/watchlists/Default/c9cbc1ff-2616-4773-b272-166bf3029d79/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/9e1eb897-3b2f-475e-b814-f0b6be14feac/",
      "created_at": "2016-03-13T15:02:58.087640Z",
      "url": "https://api.robinhood.com/watchlists/Default/9e1eb897-3b2f-475e-b814-f0b6be14feac/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8088093f-7921-4a7f-812c-6228817ceddf/",
      "created_at": "2016-03-13T15:02:58.309209Z",
      "url": "https://api.robinhood.com/watchlists/Default/8088093f-7921-4a7f-812c-6228817ceddf/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/28516a84-4b03-4b23-a95a-0b79a1cceda8/",
      "created_at": "2016-03-13T15:02:58.480598Z",
      "url": "https://api.robinhood.com/watchlists/Default/28516a84-4b03-4b23-a95a-0b79a1cceda8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e5dcf5c0-c51c-4401-92c8-0f17b9bed354/",
      "created_at": "2016-03-13T15:02:58.822202Z",
      "url": "https://api.robinhood.com/watchlists/Default/e5dcf5c0-c51c-4401-92c8-0f17b9bed354/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fcae6248-cbab-4263-be59-c22a645112db/",
      "created_at": "2016-03-13T15:02:59.014356Z",
      "url": "https://api.robinhood.com/watchlists/Default/fcae6248-cbab-4263-be59-c22a645112db/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f2af606a-65e9-4693-9df9-e70023a3a7b2/",
      "created_at": "2016-03-13T15:02:59.181897Z",
      "url": "https://api.robinhood.com/watchlists/Default/f2af606a-65e9-4693-9df9-e70023a3a7b2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1d3a11b6-e57f-42b4-b45a-b8fb95217637/",
      "created_at": "2016-03-13T15:02:59.361414Z",
      "url": "https://api.robinhood.com/watchlists/Default/1d3a11b6-e57f-42b4-b45a-b8fb95217637/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/77a87c2e-94fa-4a31-a85d-65061c0653dc/",
      "created_at": "2016-03-13T15:02:59.549925Z",
      "url": "https://api.robinhood.com/watchlists/Default/77a87c2e-94fa-4a31-a85d-65061c0653dc/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/caf695a3-ba90-4da6-af82-50ec329fbc4e/",
      "created_at": "2016-03-13T15:02:59.724286Z",
      "url": "https://api.robinhood.com/watchlists/Default/caf695a3-ba90-4da6-af82-50ec329fbc4e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/9491e068-317a-4928-bb0d-9bbf445fc8ff/",
      "created_at": "2016-03-13T15:02:59.903600Z",
      "url": "https://api.robinhood.com/watchlists/Default/9491e068-317a-4928-bb0d-9bbf445fc8ff/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f5d13c7b-b7bf-4e9a-895c-49da48770cc2/",
      "created_at": "2016-03-13T15:03:00.251853Z",
      "url": "https://api.robinhood.com/watchlists/Default/f5d13c7b-b7bf-4e9a-895c-49da48770cc2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b4848f29-c09e-4ec2-9c08-5f8e3d3e0c71/",
      "created_at": "2016-03-13T15:03:00.443830Z",
      "url": "https://api.robinhood.com/watchlists/Default/b4848f29-c09e-4ec2-9c08-5f8e3d3e0c71/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/88d83a0a-fcdd-4e55-9199-77317860c77f/",
      "created_at": "2016-03-13T15:03:00.658164Z",
      "url": "https://api.robinhood.com/watchlists/Default/88d83a0a-fcdd-4e55-9199-77317860c77f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ef069088-77ea-44d0-8509-ca54897aebd3/",
      "created_at": "2016-03-13T15:03:00.848043Z",
      "url": "https://api.robinhood.com/watchlists/Default/ef069088-77ea-44d0-8509-ca54897aebd3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fe523955-4aac-4a75-9a01-7f3981f03d3d/",
      "created_at": "2016-03-13T15:03:01.159487Z",
      "url": "https://api.robinhood.com/watchlists/Default/fe523955-4aac-4a75-9a01-7f3981f03d3d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/aafdc2e8-682b-4182-af85-77215712861e/",
      "created_at": "2016-03-13T15:03:01.311873Z",
      "url": "https://api.robinhood.com/watchlists/Default/aafdc2e8-682b-4182-af85-77215712861e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/346c3dc3-2ef4-470f-aa67-0471cffeb299/",
      "created_at": "2016-03-13T15:03:01.489581Z",
      "url": "https://api.robinhood.com/watchlists/Default/346c3dc3-2ef4-470f-aa67-0471cffeb299/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/db97f8a1-85b4-4367-a2d8-61d206d3394f/",
      "created_at": "2016-03-13T15:03:01.654751Z",
      "url": "https://api.robinhood.com/watchlists/Default/db97f8a1-85b4-4367-a2d8-61d206d3394f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/52bf40a3-bdfe-4217-89a5-2797e1a4031c/",
      "created_at": "2016-03-13T15:03:01.851494Z",
      "url": "https://api.robinhood.com/watchlists/Default/52bf40a3-bdfe-4217-89a5-2797e1a4031c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a5b2876e-f710-470e-bcc7-7dca601bfa70/",
      "created_at": "2016-03-13T15:03:02.120648Z",
      "url": "https://api.robinhood.com/watchlists/Default/a5b2876e-f710-470e-bcc7-7dca601bfa70/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/95b25e3e-94f1-485a-842d-6c8f5fcbc130/",
      "created_at": "2016-03-13T15:03:03.084794Z",
      "url": "https://api.robinhood.com/watchlists/Default/95b25e3e-94f1-485a-842d-6c8f5fcbc130/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/0bce5b1d-5564-4d28-ab06-ad59921be6cd/",
      "created_at": "2016-03-13T15:03:03.600273Z",
      "url": "https://api.robinhood.com/watchlists/Default/0bce5b1d-5564-4d28-ab06-ad59921be6cd/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f4312ce4-fc9c-45e3-8de2-b15335a334e7/",
      "created_at": "2016-03-13T15:03:03.753220Z",
      "url": "https://api.robinhood.com/watchlists/Default/f4312ce4-fc9c-45e3-8de2-b15335a334e7/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/002c9283-d396-4300-88b2-6f88ccad7f97/",
      "created_at": "2016-03-13T15:03:04.086917Z",
      "url": "https://api.robinhood.com/watchlists/Default/002c9283-d396-4300-88b2-6f88ccad7f97/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ad1edbfb-19c8-4939-be66-1f09bd65b902/",
      "created_at": "2016-03-13T15:03:04.263506Z",
      "url": "https://api.robinhood.com/watchlists/Default/ad1edbfb-19c8-4939-be66-1f09bd65b902/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3a38d041-971b-4697-abf2-0954794928a6/",
      "created_at": "2016-03-13T15:03:05.471467Z",
      "url": "https://api.robinhood.com/watchlists/Default/3a38d041-971b-4697-abf2-0954794928a6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/940fc3f5-1db5-4fed-b452-f3a2e4562b5f/",
      "created_at": "2016-03-13T15:03:05.625725Z",
      "url": "https://api.robinhood.com/watchlists/Default/940fc3f5-1db5-4fed-b452-f3a2e4562b5f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a28685be-7b83-4f51-8078-82f38f8b7f01/",
      "created_at": "2016-03-13T15:03:05.802840Z",
      "url": "https://api.robinhood.com/watchlists/Default/a28685be-7b83-4f51-8078-82f38f8b7f01/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5eb49229-7a0b-489c-9ab9-49f77cfe1582/",
      "created_at": "2016-03-13T15:03:07.301077Z",
      "url": "https://api.robinhood.com/watchlists/Default/5eb49229-7a0b-489c-9ab9-49f77cfe1582/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fc7cb596-1ce1-4f65-bb28-343c1ff7abb2/",
      "created_at": "2016-03-13T15:03:07.470116Z",
      "url": "https://api.robinhood.com/watchlists/Default/fc7cb596-1ce1-4f65-bb28-343c1ff7abb2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/22d06bdc-bf27-4d88-9284-9921dfb884d9/",
      "created_at": "2016-03-13T15:03:08.095213Z",
      "url": "https://api.robinhood.com/watchlists/Default/22d06bdc-bf27-4d88-9284-9921dfb884d9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/6c1220d3-0823-4c29-80b8-c21ba2b1b254/",
      "created_at": "2016-03-13T15:03:08.549006Z",
      "url": "https://api.robinhood.com/watchlists/Default/6c1220d3-0823-4c29-80b8-c21ba2b1b254/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c0bb3aec-bd1e-471e-a4f0-ca011cbec711/",
      "created_at": "2016-03-13T15:03:08.982718Z",
      "url": "https://api.robinhood.com/watchlists/Default/c0bb3aec-bd1e-471e-a4f0-ca011cbec711/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/9fcb8b24-6f4e-42a5-9300-c1062cd2fec2/",
      "created_at": "2016-03-13T15:03:09.166074Z",
      "url": "https://api.robinhood.com/watchlists/Default/9fcb8b24-6f4e-42a5-9300-c1062cd2fec2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4b89c4e3-b541-4412-8947-2a9512be6964/",
      "created_at": "2016-03-13T15:03:09.538078Z",
      "url": "https://api.robinhood.com/watchlists/Default/4b89c4e3-b541-4412-8947-2a9512be6964/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ec15ba51-3ee3-4a6c-96a6-4d81e97d6493/",
      "created_at": "2016-03-13T15:03:10.121118Z",
      "url": "https://api.robinhood.com/watchlists/Default/ec15ba51-3ee3-4a6c-96a6-4d81e97d6493/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a0388004-2db2-4366-a7a9-3c76e53fcda6/",
      "created_at": "2016-03-13T15:03:10.350574Z",
      "url": "https://api.robinhood.com/watchlists/Default/a0388004-2db2-4366-a7a9-3c76e53fcda6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3565db34-44d4-483b-8924-38c7e9f7bd95/",
      "created_at": "2016-03-13T15:03:10.879884Z",
      "url": "https://api.robinhood.com/watchlists/Default/3565db34-44d4-483b-8924-38c7e9f7bd95/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/29816cc8-96d0-4565-b560-7d576541459f/",
      "created_at": "2016-03-13T15:03:11.062604Z",
      "url": "https://api.robinhood.com/watchlists/Default/29816cc8-96d0-4565-b560-7d576541459f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/aa4744c0-1b6d-4439-bfbe-f701e9eb6958/",
      "created_at": "2016-03-13T15:03:11.241069Z",
      "url": "https://api.robinhood.com/watchlists/Default/aa4744c0-1b6d-4439-bfbe-f701e9eb6958/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/29779dad-d467-4487-8700-e2bcee5db258/",
      "created_at": "2016-03-13T15:03:11.409898Z",
      "url": "https://api.robinhood.com/watchlists/Default/29779dad-d467-4487-8700-e2bcee5db258/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/352994ab-5ac7-41f5-8e8f-6dc87def8950/",
      "created_at": "2016-03-13T15:03:11.753484Z",
      "url": "https://api.robinhood.com/watchlists/Default/352994ab-5ac7-41f5-8e8f-6dc87def8950/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8382e385-170b-42e5-bedd-f4ac902576a0/",
      "created_at": "2016-03-13T15:03:11.944600Z",
      "url": "https://api.robinhood.com/watchlists/Default/8382e385-170b-42e5-bedd-f4ac902576a0/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f718fa74-dcec-44a8-b0cd-f90106814776/",
      "created_at": "2016-03-13T15:03:12.151609Z",
      "url": "https://api.robinhood.com/watchlists/Default/f718fa74-dcec-44a8-b0cd-f90106814776/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b8bbd217-0ccb-4aa4-988f-e4d7e15bf63d/",
      "created_at": "2016-03-13T15:03:12.310780Z",
      "url": "https://api.robinhood.com/watchlists/Default/b8bbd217-0ccb-4aa4-988f-e4d7e15bf63d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3494f7d8-b25c-4129-84ff-cfb2a67e329f/",
      "created_at": "2016-03-13T15:03:12.480531Z",
      "url": "https://api.robinhood.com/watchlists/Default/3494f7d8-b25c-4129-84ff-cfb2a67e329f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/de0e6dc1-ca4d-4df7-a07e-baad8b1fcc11/",
      "created_at": "2016-03-13T15:03:12.639764Z",
      "url": "https://api.robinhood.com/watchlists/Default/de0e6dc1-ca4d-4df7-a07e-baad8b1fcc11/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e140f07b-02f0-4299-9925-e8c59eaf0fe5/",
      "created_at": "2016-03-13T15:03:13.161927Z",
      "url": "https://api.robinhood.com/watchlists/Default/e140f07b-02f0-4299-9925-e8c59eaf0fe5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ae7f719c-ba1a-4207-8d94-af40fb7310f8/",
      "created_at": "2016-03-13T15:03:13.327813Z",
      "url": "https://api.robinhood.com/watchlists/Default/ae7f719c-ba1a-4207-8d94-af40fb7310f8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/25edd7eb-80cf-4da1-bd06-aadbd542fbf8/",
      "created_at": "2016-03-13T15:03:13.500864Z",
      "url": "https://api.robinhood.com/watchlists/Default/25edd7eb-80cf-4da1-bd06-aadbd542fbf8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/6833bfaa-31d2-4f2d-be17-fe56b4de317f/",
      "created_at": "2016-03-13T15:03:13.683101Z",
      "url": "https://api.robinhood.com/watchlists/Default/6833bfaa-31d2-4f2d-be17-fe56b4de317f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fb6de5f3-95a6-457f-887e-4523a5f7cb9e/",
      "created_at": "2016-03-13T15:03:13.870379Z",
      "url": "https://api.robinhood.com/watchlists/Default/fb6de5f3-95a6-457f-887e-4523a5f7cb9e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4aa50a45-8740-428a-a73f-a67be8b4c3c9/",
      "created_at": "2016-03-14T20:55:27.655555Z",
      "url": "https://api.robinhood.com/watchlists/Default/4aa50a45-8740-428a-a73f-a67be8b4c3c9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/6466b05a-a6ab-4da0-bfa7-9507a062fbf9/",
      "created_at": "2016-03-14T20:57:29.786002Z",
      "url": "https://api.robinhood.com/watchlists/Default/6466b05a-a6ab-4da0-bfa7-9507a062fbf9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/aee247cf-6c77-44fd-8f41-eade6603ffcb/",
      "created_at": "2016-03-14T20:57:55.554041Z",
      "url": "https://api.robinhood.com/watchlists/Default/aee247cf-6c77-44fd-8f41-eade6603ffcb/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/",
      "created_at": "2016-03-14T20:58:06.515223Z",
      "url": "https://api.robinhood.com/watchlists/Default/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/90999f47-19d4-4bdf-91d7-2bf3733a3fcf/",
      "created_at": "2016-03-14T20:58:12.001113Z",
      "url": "https://api.robinhood.com/watchlists/Default/90999f47-19d4-4bdf-91d7-2bf3733a3fcf/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d05d0abb-bddd-4312-8333-57191e9c486f/",
      "created_at": "2016-03-14T20:58:08.792794Z",
      "url": "https://api.robinhood.com/watchlists/Default/d05d0abb-bddd-4312-8333-57191e9c486f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/bab3b12b-4216-4b01-b2d8-9587ee5f41cf/",
      "created_at": "2016-03-14T20:58:12.969624Z",
      "url": "https://api.robinhood.com/watchlists/Default/bab3b12b-4216-4b01-b2d8-9587ee5f41cf/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/73f13d00-cfa7-4813-9373-ee07c6521334/",
      "created_at": "2016-03-14T20:58:15.077393Z",
      "url": "https://api.robinhood.com/watchlists/Default/73f13d00-cfa7-4813-9373-ee07c6521334/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/dc235749-9737-4c83-9d52-70517622002d/",
      "created_at": "2016-03-14T20:58:17.735607Z",
      "url": "https://api.robinhood.com/watchlists/Default/dc235749-9737-4c83-9d52-70517622002d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/740de869-8913-46fb-a31f-6ae14d20661e/",
      "created_at": "2016-03-14T20:58:22.355986Z",
      "url": "https://api.robinhood.com/watchlists/Default/740de869-8913-46fb-a31f-6ae14d20661e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7fcf5e7b-94d6-4266-b275-a48b03ab161f/",
      "created_at": "2016-03-14T20:58:23.603973Z",
      "url": "https://api.robinhood.com/watchlists/Default/7fcf5e7b-94d6-4266-b275-a48b03ab161f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d76651ee-b507-4bfa-b154-e2ac43dae416/",
      "created_at": "2016-03-14T20:58:44.314185Z",
      "url": "https://api.robinhood.com/watchlists/Default/d76651ee-b507-4bfa-b154-e2ac43dae416/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/745d3581-65de-4980-92ea-d0e9c36636fd/",
      "created_at": "2016-03-14T20:58:47.114451Z",
      "url": "https://api.robinhood.com/watchlists/Default/745d3581-65de-4980-92ea-d0e9c36636fd/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ef15b06a-c118-457d-988b-ec7fc3e99dbb/",
      "created_at": "2016-03-14T20:58:53.486182Z",
      "url": "https://api.robinhood.com/watchlists/Default/ef15b06a-c118-457d-988b-ec7fc3e99dbb/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d4fcdc60-3d6d-42d5-aa82-eebc217034a9/",
      "created_at": "2016-03-14T20:58:56.018205Z",
      "url": "https://api.robinhood.com/watchlists/Default/d4fcdc60-3d6d-42d5-aa82-eebc217034a9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b11bcf09-c234-488f-af81-c157c967593b/",
      "created_at": "2016-03-14T20:59:04.392928Z",
      "url": "https://api.robinhood.com/watchlists/Default/b11bcf09-c234-488f-af81-c157c967593b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/269cff29-d028-49ec-a518-314c60f064c3/",
      "created_at": "2016-03-14T20:59:25.849738Z",
      "url": "https://api.robinhood.com/watchlists/Default/269cff29-d028-49ec-a518-314c60f064c3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5974c3eb-bd36-4c79-9e33-f91e680351fa/",
      "created_at": "2016-03-14T20:59:27.642383Z",
      "url": "https://api.robinhood.com/watchlists/Default/5974c3eb-bd36-4c79-9e33-f91e680351fa/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e4a542ca-0e11-454a-9b23-08823027fbb5/",
      "created_at": "2016-03-14T20:59:29.853927Z",
      "url": "https://api.robinhood.com/watchlists/Default/e4a542ca-0e11-454a-9b23-08823027fbb5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f1adc843-1a28-4cc5-b6d2-082271fdd126/",
      "created_at": "2016-03-14T20:59:36.093366Z",
      "url": "https://api.robinhood.com/watchlists/Default/f1adc843-1a28-4cc5-b6d2-082271fdd126/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f7889e4d-1fa6-47d8-bdd1-2e6ffc3e1c3b/",
      "created_at": "2016-03-14T20:59:45.890686Z",
      "url": "https://api.robinhood.com/watchlists/Default/f7889e4d-1fa6-47d8-bdd1-2e6ffc3e1c3b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/74113114-7636-4211-aaea-8d71fa3f6afe/",
      "created_at": "2016-03-14T21:00:15.133844Z",
      "url": "https://api.robinhood.com/watchlists/Default/74113114-7636-4211-aaea-8d71fa3f6afe/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ba7704fc-ed87-4c93-8aab-1e836a20658e/",
      "created_at": "2016-03-14T20:59:53.822559Z",
      "url": "https://api.robinhood.com/watchlists/Default/ba7704fc-ed87-4c93-8aab-1e836a20658e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/0d9c19d9-f400-4132-9fb4-11f29bd77894/",
      "created_at": "2016-03-14T21:00:34.364229Z",
      "url": "https://api.robinhood.com/watchlists/Default/0d9c19d9-f400-4132-9fb4-11f29bd77894/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4494a646-de1a-4815-ad92-947478adbf5c/",
      "created_at": "2016-03-14T21:01:03.733155Z",
      "url": "https://api.robinhood.com/watchlists/Default/4494a646-de1a-4815-ad92-947478adbf5c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1d2829dc-988a-45cf-b7ce-38391e7763c2/",
      "created_at": "2016-03-14T21:01:13.092905Z",
      "url": "https://api.robinhood.com/watchlists/Default/1d2829dc-988a-45cf-b7ce-38391e7763c2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7111af93-abe0-4d4d-83fe-3a791fce7c5f/",
      "created_at": "2016-03-14T21:01:44.910439Z",
      "url": "https://api.robinhood.com/watchlists/Default/7111af93-abe0-4d4d-83fe-3a791fce7c5f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/eef1ac4a-710f-482e-a4c9-eebcd391839c/",
      "created_at": "2016-03-14T21:01:53.547589Z",
      "url": "https://api.robinhood.com/watchlists/Default/eef1ac4a-710f-482e-a4c9-eebcd391839c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8e42299a-78cf-4d8c-b322-3974b9e3a700/",
      "created_at": "2016-03-14T21:02:01.771212Z",
      "url": "https://api.robinhood.com/watchlists/Default/8e42299a-78cf-4d8c-b322-3974b9e3a700/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f77a6fa5-ad8d-4a09-ba50-b5a21458a464/",
      "created_at": "2016-03-14T21:02:11.489448Z",
      "url": "https://api.robinhood.com/watchlists/Default/f77a6fa5-ad8d-4a09-ba50-b5a21458a464/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/75f435f0-0d44-44a4-bd14-ac2eba5badea/",
      "created_at": "2016-03-14T21:02:23.079187Z",
      "url": "https://api.robinhood.com/watchlists/Default/75f435f0-0d44-44a4-bd14-ac2eba5badea/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3b5d8887-b16e-4504-8cf9-c9f4bde517ed/",
      "created_at": "2016-03-14T21:02:25.935383Z",
      "url": "https://api.robinhood.com/watchlists/Default/3b5d8887-b16e-4504-8cf9-c9f4bde517ed/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2557da35-c652-4781-a71c-9931581be3b1/",
      "created_at": "2016-03-14T21:02:32.464688Z",
      "url": "https://api.robinhood.com/watchlists/Default/2557da35-c652-4781-a71c-9931581be3b1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c787074b-0abb-4940-846b-dbee221dd10f/",
      "created_at": "2016-03-14T21:02:29.840083Z",
      "url": "https://api.robinhood.com/watchlists/Default/c787074b-0abb-4940-846b-dbee221dd10f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f0dd0985-ea87-43d1-9e03-e4277bb99a3f/",
      "created_at": "2016-03-16T00:36:56.454179Z",
      "url": "https://api.robinhood.com/watchlists/Default/f0dd0985-ea87-43d1-9e03-e4277bb99a3f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4f1c5faf-e387-4c95-b0dd-31aae1df26a5/",
      "created_at": "2016-03-16T00:37:06.582543Z",
      "url": "https://api.robinhood.com/watchlists/Default/4f1c5faf-e387-4c95-b0dd-31aae1df26a5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3fce952c-ccb7-4eb2-ab33-2563bce658bb/",
      "created_at": "2016-03-16T00:37:08.471767Z",
      "url": "https://api.robinhood.com/watchlists/Default/3fce952c-ccb7-4eb2-ab33-2563bce658bb/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2188067e-f891-4541-9e3e-79912595eebf/",
      "created_at": "2016-03-16T00:37:26.432725Z",
      "url": "https://api.robinhood.com/watchlists/Default/2188067e-f891-4541-9e3e-79912595eebf/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d885221a-cc40-41e2-b892-f59e5e33a090/",
      "created_at": "2016-03-16T00:37:54.398097Z",
      "url": "https://api.robinhood.com/watchlists/Default/d885221a-cc40-41e2-b892-f59e5e33a090/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/76d02930-ce09-4188-9e4c-71155b20d7a2/",
      "created_at": "2016-03-16T00:37:55.948275Z",
      "url": "https://api.robinhood.com/watchlists/Default/76d02930-ce09-4188-9e4c-71155b20d7a2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/376ca781-1333-40ca-bd61-a48f46ebd950/",
      "created_at": "2016-03-16T00:38:03.150605Z",
      "url": "https://api.robinhood.com/watchlists/Default/376ca781-1333-40ca-bd61-a48f46ebd950/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/94fedb4f-ce92-4f26-82f0-e7d7c14656e7/",
      "created_at": "2016-03-16T00:38:25.670977Z",
      "url": "https://api.robinhood.com/watchlists/Default/94fedb4f-ce92-4f26-82f0-e7d7c14656e7/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8a11cc69-081d-4012-af8f-c3d69aa5e7f3/",
      "created_at": "2016-03-16T00:38:28.693755Z",
      "url": "https://api.robinhood.com/watchlists/Default/8a11cc69-081d-4012-af8f-c3d69aa5e7f3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/abaf97d3-f256-4246-b540-acc1fccb6fae/",
      "created_at": "2016-03-16T00:38:30.150719Z",
      "url": "https://api.robinhood.com/watchlists/Default/abaf97d3-f256-4246-b540-acc1fccb6fae/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f6fb4ac4-fd18-4d92-b8e9-475d6b3279ce/",
      "created_at": "2016-03-16T00:38:32.762570Z",
      "url": "https://api.robinhood.com/watchlists/Default/f6fb4ac4-fd18-4d92-b8e9-475d6b3279ce/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ed001b6a-7176-484f-a125-1e9523e378d0/",
      "created_at": "2016-03-16T00:39:43.448938Z",
      "url": "https://api.robinhood.com/watchlists/Default/ed001b6a-7176-484f-a125-1e9523e378d0/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/41eac3c6-f7f7-4c4a-b696-ab9d1b913981/",
      "created_at": "2016-03-16T00:40:30.209009Z",
      "url": "https://api.robinhood.com/watchlists/Default/41eac3c6-f7f7-4c4a-b696-ab9d1b913981/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b50331d4-0179-4022-ac37-4576cfd27080/",
      "created_at": "2016-03-16T00:40:34.356194Z",
      "url": "https://api.robinhood.com/watchlists/Default/b50331d4-0179-4022-ac37-4576cfd27080/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/9f2d1150-77bc-43e2-aa60-c2114dbcfc9d/",
      "created_at": "2016-03-17T01:39:31.643200Z",
      "url": "https://api.robinhood.com/watchlists/Default/9f2d1150-77bc-43e2-aa60-c2114dbcfc9d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4b298506-cbb8-492e-807b-23bb4787378a/",
      "created_at": "2016-03-17T20:37:24.143056Z",
      "url": "https://api.robinhood.com/watchlists/Default/4b298506-cbb8-492e-807b-23bb4787378a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/eb779bf4-0829-423c-8ef4-dfc130863513/",
      "created_at": "2016-03-17T20:37:29.134357Z",
      "url": "https://api.robinhood.com/watchlists/Default/eb779bf4-0829-423c-8ef4-dfc130863513/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c4e626d8-c858-4ba4-af0a-a9facd84af0f/",
      "created_at": "2016-03-22T01:27:39.850629Z",
      "url": "https://api.robinhood.com/watchlists/Default/c4e626d8-c858-4ba4-af0a-a9facd84af0f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8118ec86-3d0b-46f2-a025-f362a3616440/",
      "created_at": "2016-03-22T03:51:01.120309Z",
      "url": "https://api.robinhood.com/watchlists/Default/8118ec86-3d0b-46f2-a025-f362a3616440/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/be5fb320-73c5-4f9e-a825-1c632bdd5f92/",
      "created_at": "2016-03-22T03:51:03.292409Z",
      "url": "https://api.robinhood.com/watchlists/Default/be5fb320-73c5-4f9e-a825-1c632bdd5f92/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/35739e4a-7c80-495e-b5b8-55b281a11c30/",
      "created_at": "2016-03-22T03:51:05.225385Z",
      "url": "https://api.robinhood.com/watchlists/Default/35739e4a-7c80-495e-b5b8-55b281a11c30/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1c9452ff-cc48-4b43-b744-85566c61eaf8/",
      "created_at": "2016-03-22T03:51:07.176624Z",
      "url": "https://api.robinhood.com/watchlists/Default/1c9452ff-cc48-4b43-b744-85566c61eaf8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5919bced-c2cd-4baf-9ccf-698a3ce47e3f/",
      "created_at": "2016-03-22T03:51:11.279659Z",
      "url": "https://api.robinhood.com/watchlists/Default/5919bced-c2cd-4baf-9ccf-698a3ce47e3f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/921be639-a9b1-4cfc-9bbd-e125166956c5/",
      "created_at": "2016-03-28T05:39:12.438902Z",
      "url": "https://api.robinhood.com/watchlists/Default/921be639-a9b1-4cfc-9bbd-e125166956c5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/52bebf40-0d54-4ffd-ac81-103244df653e/",
      "created_at": "2016-03-28T05:39:15.433607Z",
      "url": "https://api.robinhood.com/watchlists/Default/52bebf40-0d54-4ffd-ac81-103244df653e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/89aa39f5-1dcb-40ba-b6a0-d2c430bb7dd7/",
      "created_at": "2016-03-28T23:51:15.286427Z",
      "url": "https://api.robinhood.com/watchlists/Default/89aa39f5-1dcb-40ba-b6a0-d2c430bb7dd7/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/73f0b448-ac9c-49c6-b281-ef28aa51fd3f/",
      "created_at": "2016-03-31T16:38:16.438793Z",
      "url": "https://api.robinhood.com/watchlists/Default/73f0b448-ac9c-49c6-b281-ef28aa51fd3f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/03c3e380-1a35-447f-80dc-8d0584b158ef/",
      "created_at": "2016-03-31T18:06:36.442141Z",
      "url": "https://api.robinhood.com/watchlists/Default/03c3e380-1a35-447f-80dc-8d0584b158ef/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/38dc15e8-071c-4544-88b3-f633f0a69a4f/",
      "created_at": "2016-04-02T16:56:59.882919Z",
      "url": "https://api.robinhood.com/watchlists/Default/38dc15e8-071c-4544-88b3-f633f0a69a4f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ca4821f9-06c3-4c22-bbb8-efe569f23d2b/",
      "created_at": "2016-04-02T16:57:05.938885Z",
      "url": "https://api.robinhood.com/watchlists/Default/ca4821f9-06c3-4c22-bbb8-efe569f23d2b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/32892812-5019-4694-91ca-1ba0c1f5c681/",
      "created_at": "2016-04-02T16:57:09.097020Z",
      "url": "https://api.robinhood.com/watchlists/Default/32892812-5019-4694-91ca-1ba0c1f5c681/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1ce33908-d79f-4db5-8086-ff1ede56cb90/",
      "created_at": "2016-04-02T16:57:12.510383Z",
      "url": "https://api.robinhood.com/watchlists/Default/1ce33908-d79f-4db5-8086-ff1ede56cb90/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b1d51de1-b1b7-42eb-87c3-6d383091cb3b/",
      "created_at": "2016-04-02T16:57:16.182082Z",
      "url": "https://api.robinhood.com/watchlists/Default/b1d51de1-b1b7-42eb-87c3-6d383091cb3b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d05566bf-b0cc-414b-a520-b9216bb80abf/",
      "created_at": "2016-04-02T19:05:21.126650Z",
      "url": "https://api.robinhood.com/watchlists/Default/d05566bf-b0cc-414b-a520-b9216bb80abf/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c67150f5-a4d6-4bc2-940c-303482da4200/",
      "created_at": "2016-04-03T02:09:06.786888Z",
      "url": "https://api.robinhood.com/watchlists/Default/c67150f5-a4d6-4bc2-940c-303482da4200/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/29537485-b266-4e20-b045-f07f24df0666/",
      "created_at": "2016-04-03T02:09:08.935435Z",
      "url": "https://api.robinhood.com/watchlists/Default/29537485-b266-4e20-b045-f07f24df0666/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ae2e4ada-197d-42a4-825c-aff01cc3a8dd/",
      "created_at": "2016-04-03T02:09:11.854675Z",
      "url": "https://api.robinhood.com/watchlists/Default/ae2e4ada-197d-42a4-825c-aff01cc3a8dd/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8decc068-5bfd-4cc6-bb2c-f2efd3119536/",
      "created_at": "2016-04-03T02:09:40.127510Z",
      "url": "https://api.robinhood.com/watchlists/Default/8decc068-5bfd-4cc6-bb2c-f2efd3119536/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/43cca18c-b3bd-4704-b55f-fdb9338742ff/",
      "created_at": "2016-04-03T02:09:44.066052Z",
      "url": "https://api.robinhood.com/watchlists/Default/43cca18c-b3bd-4704-b55f-fdb9338742ff/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/dca9738c-fe7a-4817-9234-16fa215cc294/",
      "created_at": "2016-04-03T02:09:46.633769Z",
      "url": "https://api.robinhood.com/watchlists/Default/dca9738c-fe7a-4817-9234-16fa215cc294/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d535f31f-be7b-416e-99c3-ee0945f7248a/",
      "created_at": "2016-04-03T02:09:47.566511Z",
      "url": "https://api.robinhood.com/watchlists/Default/d535f31f-be7b-416e-99c3-ee0945f7248a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/766ca8cb-a511-4957-bb97-7bac118fc628/",
      "created_at": "2016-04-03T02:09:49.618733Z",
      "url": "https://api.robinhood.com/watchlists/Default/766ca8cb-a511-4957-bb97-7bac118fc628/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e9aa0863-ca6c-4967-ae87-85aff9bc23c4/",
      "created_at": "2016-04-03T02:09:50.664833Z",
      "url": "https://api.robinhood.com/watchlists/Default/e9aa0863-ca6c-4967-ae87-85aff9bc23c4/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7299c629-463a-4163-9eed-0ec431d88d53/",
      "created_at": "2016-04-03T02:09:53.356643Z",
      "url": "https://api.robinhood.com/watchlists/Default/7299c629-463a-4163-9eed-0ec431d88d53/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/0da752b2-4124-4158-809a-061de474ea80/",
      "created_at": "2016-04-05T13:51:34.439899Z",
      "url": "https://api.robinhood.com/watchlists/Default/0da752b2-4124-4158-809a-061de474ea80/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/625e3596-9e2e-49e7-a9bf-6cbbc9d72ecd/",
      "created_at": "2016-04-05T15:00:41.132006Z",
      "url": "https://api.robinhood.com/watchlists/Default/625e3596-9e2e-49e7-a9bf-6cbbc9d72ecd/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d1360798-87d2-4dd2-b451-9cd1bc840ddd/",
      "created_at": "2016-04-05T15:00:42.855747Z",
      "url": "https://api.robinhood.com/watchlists/Default/d1360798-87d2-4dd2-b451-9cd1bc840ddd/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fce3d82d-5c5a-4176-8c05-5f2a09b2a726/",
      "created_at": "2016-04-05T15:00:43.677634Z",
      "url": "https://api.robinhood.com/watchlists/Default/fce3d82d-5c5a-4176-8c05-5f2a09b2a726/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b125ad51-17c7-443a-a1a5-b49c22a7d4c1/",
      "created_at": "2016-04-05T15:00:56.134771Z",
      "url": "https://api.robinhood.com/watchlists/Default/b125ad51-17c7-443a-a1a5-b49c22a7d4c1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/bb9a01df-5982-42d4-88db-8662f23cdab5/",
      "created_at": "2016-04-05T15:01:18.559340Z",
      "url": "https://api.robinhood.com/watchlists/Default/bb9a01df-5982-42d4-88db-8662f23cdab5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4048d6e0-16b6-450f-8e45-0886ec6713e9/",
      "created_at": "2016-04-05T15:01:20.363158Z",
      "url": "https://api.robinhood.com/watchlists/Default/4048d6e0-16b6-450f-8e45-0886ec6713e9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5448380e-fb98-499a-adbe-5c7e02563597/",
      "created_at": "2016-04-05T15:01:21.248664Z",
      "url": "https://api.robinhood.com/watchlists/Default/5448380e-fb98-499a-adbe-5c7e02563597/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/9150d36e-272e-4842-ba93-df750f147291/",
      "created_at": "2016-04-05T15:01:23.968952Z",
      "url": "https://api.robinhood.com/watchlists/Default/9150d36e-272e-4842-ba93-df750f147291/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/89456f20-605e-45fb-886b-1e3f61245f11/",
      "created_at": "2016-04-05T15:01:26.403819Z",
      "url": "https://api.robinhood.com/watchlists/Default/89456f20-605e-45fb-886b-1e3f61245f11/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a1b52314-b452-4246-a3de-82d109ee4a42/",
      "created_at": "2016-04-05T15:01:36.308713Z",
      "url": "https://api.robinhood.com/watchlists/Default/a1b52314-b452-4246-a3de-82d109ee4a42/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/21ec3589-b1bb-4235-8f00-754b6334c018/",
      "created_at": "2016-04-05T15:01:37.358175Z",
      "url": "https://api.robinhood.com/watchlists/Default/21ec3589-b1bb-4235-8f00-754b6334c018/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/0fee6a40-3a55-4eed-b20c-5cbc07c64322/",
      "created_at": "2016-04-05T15:01:40.299634Z",
      "url": "https://api.robinhood.com/watchlists/Default/0fee6a40-3a55-4eed-b20c-5cbc07c64322/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4572e286-da26-4f39-bc51-30a1927662d3/",
      "created_at": "2016-04-05T15:01:46.177983Z",
      "url": "https://api.robinhood.com/watchlists/Default/4572e286-da26-4f39-bc51-30a1927662d3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/09730a7f-db5d-4725-bdaf-801e18a27626/",
      "created_at": "2016-04-05T15:01:54.661100Z",
      "url": "https://api.robinhood.com/watchlists/Default/09730a7f-db5d-4725-bdaf-801e18a27626/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4627f8f7-290d-4710-a9e1-7b68befae15a/",
      "created_at": "2016-04-05T15:02:05.792022Z",
      "url": "https://api.robinhood.com/watchlists/Default/4627f8f7-290d-4710-a9e1-7b68befae15a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/246de75b-fc65-4ed0-ba71-cb3d1fd8ec8e/",
      "created_at": "2016-04-05T15:02:29.831466Z",
      "url": "https://api.robinhood.com/watchlists/Default/246de75b-fc65-4ed0-ba71-cb3d1fd8ec8e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4cf14b0c-a633-4002-9719-ee221decca22/",
      "created_at": "2016-04-05T15:02:34.619423Z",
      "url": "https://api.robinhood.com/watchlists/Default/4cf14b0c-a633-4002-9719-ee221decca22/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/70f4e74f-831b-4b64-a2b0-d5efc82c765c/",
      "created_at": "2016-04-05T15:02:41.112630Z",
      "url": "https://api.robinhood.com/watchlists/Default/70f4e74f-831b-4b64-a2b0-d5efc82c765c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/524c0cf0-7228-4ae5-ba34-5f1f3f975f04/",
      "created_at": "2016-04-05T15:03:17.453867Z",
      "url": "https://api.robinhood.com/watchlists/Default/524c0cf0-7228-4ae5-ba34-5f1f3f975f04/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5c5e7fb0-e80d-4809-a362-04eefbc1fd81/",
      "created_at": "2016-04-05T15:03:35.026640Z",
      "url": "https://api.robinhood.com/watchlists/Default/5c5e7fb0-e80d-4809-a362-04eefbc1fd81/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/67214dc8-c1e1-4cd7-8528-a6052d3256c5/",
      "created_at": "2016-04-05T15:03:36.478732Z",
      "url": "https://api.robinhood.com/watchlists/Default/67214dc8-c1e1-4cd7-8528-a6052d3256c5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/6d97a28c-1e6a-41f8-adc8-6b12ba7af516/",
      "created_at": "2016-04-05T15:03:40.724740Z",
      "url": "https://api.robinhood.com/watchlists/Default/6d97a28c-1e6a-41f8-adc8-6b12ba7af516/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5260d4d2-3c30-49e3-bd9b-9e94a271b8ed/",
      "created_at": "2016-04-05T15:03:41.821867Z",
      "url": "https://api.robinhood.com/watchlists/Default/5260d4d2-3c30-49e3-bd9b-9e94a271b8ed/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/87859a7a-94d7-48cb-9088-b97bbf73737b/",
      "created_at": "2016-04-05T15:03:46.894734Z",
      "url": "https://api.robinhood.com/watchlists/Default/87859a7a-94d7-48cb-9088-b97bbf73737b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/496d6d63-a93d-4693-a5b5-d1e0a72d854f/",
      "created_at": "2016-04-05T15:03:50.354919Z",
      "url": "https://api.robinhood.com/watchlists/Default/496d6d63-a93d-4693-a5b5-d1e0a72d854f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ab74243f-2c26-4d10-a7b9-337d5770a529/",
      "created_at": "2016-04-05T15:03:54.075212Z",
      "url": "https://api.robinhood.com/watchlists/Default/ab74243f-2c26-4d10-a7b9-337d5770a529/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1d19277e-be27-4a10-b4cd-db4fd948129e/",
      "created_at": "2016-04-05T15:04:04.068205Z",
      "url": "https://api.robinhood.com/watchlists/Default/1d19277e-be27-4a10-b4cd-db4fd948129e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f63d0258-942e-48ba-9b13-17c5e9f21b1c/",
      "created_at": "2016-04-05T15:04:11.183239Z",
      "url": "https://api.robinhood.com/watchlists/Default/f63d0258-942e-48ba-9b13-17c5e9f21b1c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/077cfe2c-ab1b-4ca5-bf6f-1de249320e57/",
      "created_at": "2016-04-05T15:04:17.964097Z",
      "url": "https://api.robinhood.com/watchlists/Default/077cfe2c-ab1b-4ca5-bf6f-1de249320e57/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3bd6f6b5-40a1-418b-97ed-2a40f509c738/",
      "created_at": "2016-04-05T15:04:29.377445Z",
      "url": "https://api.robinhood.com/watchlists/Default/3bd6f6b5-40a1-418b-97ed-2a40f509c738/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7386c6d7-c4e4-43a6-92e6-d6436a733ec9/",
      "created_at": "2016-04-05T15:04:32.055836Z",
      "url": "https://api.robinhood.com/watchlists/Default/7386c6d7-c4e4-43a6-92e6-d6436a733ec9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/aac2984b-edba-44b4-bf3d-5d1ed8b58542/",
      "created_at": "2016-04-05T15:04:33.507255Z",
      "url": "https://api.robinhood.com/watchlists/Default/aac2984b-edba-44b4-bf3d-5d1ed8b58542/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/854a8712-3404-4df0-bdbb-c04dfa146ee5/",
      "created_at": "2016-04-05T15:04:38.073432Z",
      "url": "https://api.robinhood.com/watchlists/Default/854a8712-3404-4df0-bdbb-c04dfa146ee5/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fbfbfb83-373a-4601-8094-6179a2a1942c/",
      "created_at": "2016-04-05T15:04:50.159380Z",
      "url": "https://api.robinhood.com/watchlists/Default/fbfbfb83-373a-4601-8094-6179a2a1942c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/bc4181d9-dda3-4e1b-b1c9-1fa3807eb1e2/",
      "created_at": "2016-04-05T15:05:02.508876Z",
      "url": "https://api.robinhood.com/watchlists/Default/bc4181d9-dda3-4e1b-b1c9-1fa3807eb1e2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/5d61146c-5e00-4e04-836f-239d359b9602/",
      "created_at": "2016-04-05T15:05:03.551008Z",
      "url": "https://api.robinhood.com/watchlists/Default/5d61146c-5e00-4e04-836f-239d359b9602/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/41f940e3-5460-449c-b046-b0263ac8e031/",
      "created_at": "2016-04-05T15:05:51.078759Z",
      "url": "https://api.robinhood.com/watchlists/Default/41f940e3-5460-449c-b046-b0263ac8e031/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/71fc5a5e-d1e9-458e-a74b-735ab2c7aacb/",
      "created_at": "2016-04-17T02:50:58.152927Z",
      "url": "https://api.robinhood.com/watchlists/Default/71fc5a5e-d1e9-458e-a74b-735ab2c7aacb/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ba14ab0e-a1a2-4b28-89d3-6046aa593c07/",
      "created_at": "2016-04-17T02:55:19.650119Z",
      "url": "https://api.robinhood.com/watchlists/Default/ba14ab0e-a1a2-4b28-89d3-6046aa593c07/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2a2a190b-64c0-46e7-a667-2e557ae1649e/",
      "created_at": "2016-04-17T02:55:44.689475Z",
      "url": "https://api.robinhood.com/watchlists/Default/2a2a190b-64c0-46e7-a667-2e557ae1649e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d58d5d4e-5631-4ec8-a1d3-edd189454503/",
      "created_at": "2016-04-17T02:57:50.930209Z",
      "url": "https://api.robinhood.com/watchlists/Default/d58d5d4e-5631-4ec8-a1d3-edd189454503/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/cfd5e135-5f30-48fb-bcf0-6cd605c9c895/",
      "created_at": "2016-04-17T02:57:54.122632Z",
      "url": "https://api.robinhood.com/watchlists/Default/cfd5e135-5f30-48fb-bcf0-6cd605c9c895/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/6ea72e46-7a37-4f3d-9dac-c5ff371e70ee/",
      "created_at": "2016-04-17T02:58:38.606280Z",
      "url": "https://api.robinhood.com/watchlists/Default/6ea72e46-7a37-4f3d-9dac-c5ff371e70ee/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/79833f76-af3c-40d5-8d6b-e2178f6198f9/",
      "created_at": "2016-04-17T02:59:02.924930Z",
      "url": "https://api.robinhood.com/watchlists/Default/79833f76-af3c-40d5-8d6b-e2178f6198f9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/797209a8-0bc7-4c89-837e-837c4a6081e9/",
      "created_at": "2016-04-17T02:59:20.034167Z",
      "url": "https://api.robinhood.com/watchlists/Default/797209a8-0bc7-4c89-837e-837c4a6081e9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/47b3ea92-713b-4f7b-bb63-8e441491950a/",
      "created_at": "2016-04-24T16:55:07.855613Z",
      "url": "https://api.robinhood.com/watchlists/Default/47b3ea92-713b-4f7b-bb63-8e441491950a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/36ace444-0021-4be2-922b-ad91cabc8fa6/",
      "created_at": "2016-04-28T12:31:47.496665Z",
      "url": "https://api.robinhood.com/watchlists/Default/36ace444-0021-4be2-922b-ad91cabc8fa6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2439c39f-c1ae-4f93-91a8-388c46c13891/",
      "created_at": "2016-05-09T18:05:48.448749Z",
      "url": "https://api.robinhood.com/watchlists/Default/2439c39f-c1ae-4f93-91a8-388c46c13891/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8f2125b0-8a67-4934-a36f-794220fc51f4/",
      "created_at": "2016-05-17T13:28:57.795453Z",
      "url": "https://api.robinhood.com/watchlists/Default/8f2125b0-8a67-4934-a36f-794220fc51f4/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/cbf2e4bf-f527-494a-a7fb-44c6121e73b9/",
      "created_at": "2016-05-27T14:51:29.823881Z",
      "url": "https://api.robinhood.com/watchlists/Default/cbf2e4bf-f527-494a-a7fb-44c6121e73b9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/15df2462-62e9-4027-82b3-a8f110fde919/",
      "created_at": "2016-05-29T03:48:07.813377Z",
      "url": "https://api.robinhood.com/watchlists/Default/15df2462-62e9-4027-82b3-a8f110fde919/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/05a913b0-fbcf-4997-a10e-ac00dc817ec1/",
      "created_at": "2016-05-29T03:49:07.240511Z",
      "url": "https://api.robinhood.com/watchlists/Default/05a913b0-fbcf-4997-a10e-ac00dc817ec1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7b1f9d28-d5cd-4716-a300-b76ec17fcc18/",
      "created_at": "2016-05-29T03:49:45.571547Z",
      "url": "https://api.robinhood.com/watchlists/Default/7b1f9d28-d5cd-4716-a300-b76ec17fcc18/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/be5ca62e-0e8e-425b-9d60-603e856f85a6/",
      "created_at": "2016-05-30T05:08:22.788496Z",
      "url": "https://api.robinhood.com/watchlists/Default/be5ca62e-0e8e-425b-9d60-603e856f85a6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/9f328775-4a8c-4386-8911-09b9d0096799/",
      "created_at": "2016-06-01T07:48:38.950460Z",
      "url": "https://api.robinhood.com/watchlists/Default/9f328775-4a8c-4386-8911-09b9d0096799/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/61828a64-1763-4ccc-b626-bfb2920cd128/",
      "created_at": "2016-06-01T15:27:24.280592Z",
      "url": "https://api.robinhood.com/watchlists/Default/61828a64-1763-4ccc-b626-bfb2920cd128/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/381545dd-92ed-4d20-9b67-6b664f13fe31/",
      "created_at": "2016-06-01T15:28:52.263568Z",
      "url": "https://api.robinhood.com/watchlists/Default/381545dd-92ed-4d20-9b67-6b664f13fe31/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8907cd52-1ec6-4ea6-8d34-42b584bbfb9a/",
      "created_at": "2016-06-01T16:42:03.346261Z",
      "url": "https://api.robinhood.com/watchlists/Default/8907cd52-1ec6-4ea6-8d34-42b584bbfb9a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fc33d542-14cd-4d32-87d5-42f1f7b7c266/",
      "created_at": "2016-06-09T19:59:38.582567Z",
      "url": "https://api.robinhood.com/watchlists/Default/fc33d542-14cd-4d32-87d5-42f1f7b7c266/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4c96cac0-4527-4ffc-a440-6345ec162a6e/",
      "created_at": "2016-06-13T16:33:37.980769Z",
      "url": "https://api.robinhood.com/watchlists/Default/4c96cac0-4527-4ffc-a440-6345ec162a6e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e988f084-7653-4e65-8768-b3b7d24d6290/",
      "created_at": "2016-06-13T16:34:30.968991Z",
      "url": "https://api.robinhood.com/watchlists/Default/e988f084-7653-4e65-8768-b3b7d24d6290/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e39ed23a-7bd1-4587-b060-71988d9ef483/",
      "created_at": "2016-06-22T14:30:36.264784Z",
      "url": "https://api.robinhood.com/watchlists/Default/e39ed23a-7bd1-4587-b060-71988d9ef483/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d5dd2874-8c14-48cf-9515-6bac9cc77f2d/",
      "created_at": "2016-06-28T04:06:44.860826Z",
      "url": "https://api.robinhood.com/watchlists/Default/d5dd2874-8c14-48cf-9515-6bac9cc77f2d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/41660094-3e87-4c13-9615-b6af5b50faa3/",
      "created_at": "2016-06-28T04:09:07.850356Z",
      "url": "https://api.robinhood.com/watchlists/Default/41660094-3e87-4c13-9615-b6af5b50faa3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8ef87338-5cf2-4079-8a33-5dcf12737dd6/",
      "created_at": "2016-07-06T16:21:15.904996Z",
      "url": "https://api.robinhood.com/watchlists/Default/8ef87338-5cf2-4079-8a33-5dcf12737dd6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/2aa048d0-55a6-4448-934f-462208baec3c/",
      "created_at": "2016-07-06T16:21:16.039943Z",
      "url": "https://api.robinhood.com/watchlists/Default/2aa048d0-55a6-4448-934f-462208baec3c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/122b090a-1d25-44dd-befd-540447765476/",
      "created_at": "2016-07-06T16:21:16.359747Z",
      "url": "https://api.robinhood.com/watchlists/Default/122b090a-1d25-44dd-befd-540447765476/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3037f8c9-401f-4eea-9dbd-f3bbde2ef862/",
      "created_at": "2016-07-06T16:21:16.703379Z",
      "url": "https://api.robinhood.com/watchlists/Default/3037f8c9-401f-4eea-9dbd-f3bbde2ef862/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c86dc086-582c-4b32-82f6-3238f3155667/",
      "created_at": "2016-07-06T16:21:18.303004Z",
      "url": "https://api.robinhood.com/watchlists/Default/c86dc086-582c-4b32-82f6-3238f3155667/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e5cee1ce-78c0-469b-bc61-c8e0c5c87c70/",
      "created_at": "2016-07-06T16:21:18.763852Z",
      "url": "https://api.robinhood.com/watchlists/Default/e5cee1ce-78c0-469b-bc61-c8e0c5c87c70/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/55b9bfc4-c9e7-42ac-8478-73b0af48fad7/",
      "created_at": "2016-07-12T17:02:22.905421Z",
      "url": "https://api.robinhood.com/watchlists/Default/55b9bfc4-c9e7-42ac-8478-73b0af48fad7/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a0045f96-0ded-43c9-8e47-2e488b687dfc/",
      "created_at": "2016-07-14T14:08:45.554612Z",
      "url": "https://api.robinhood.com/watchlists/Default/a0045f96-0ded-43c9-8e47-2e488b687dfc/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a2327822-bfdc-427c-86e2-8d4ec1e8e701/",
      "created_at": "2016-07-25T16:46:48.912152Z",
      "url": "https://api.robinhood.com/watchlists/Default/a2327822-bfdc-427c-86e2-8d4ec1e8e701/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/cba7a15d-9ab6-47f1-85d3-b4eeabfb96cc/",
      "created_at": "2016-07-27T11:26:04.014469Z",
      "url": "https://api.robinhood.com/watchlists/Default/cba7a15d-9ab6-47f1-85d3-b4eeabfb96cc/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/25c3560f-355d-48b6-9578-98ac5ad7a1c4/",
      "created_at": "2016-08-02T18:37:09.543380Z",
      "url": "https://api.robinhood.com/watchlists/Default/25c3560f-355d-48b6-9578-98ac5ad7a1c4/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/de2ad6b1-99dc-419e-8305-8c5eee3146a0/",
      "created_at": "2016-08-22T18:50:20.661077Z",
      "url": "https://api.robinhood.com/watchlists/Default/de2ad6b1-99dc-419e-8305-8c5eee3146a0/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/dd115177-9964-466e-a7c4-fba76a7adc1d/",
      "created_at": "2016-09-29T17:27:21.647720Z",
      "url": "https://api.robinhood.com/watchlists/Default/dd115177-9964-466e-a7c4-fba76a7adc1d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ebab2398-028d-4939-9f1d-13bf38f81c50/",
      "created_at": "2016-10-08T19:57:35.985720Z",
      "url": "https://api.robinhood.com/watchlists/Default/ebab2398-028d-4939-9f1d-13bf38f81c50/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8c8cb16e-db35-4e1e-8d48-612c3f9b51bd/",
      "created_at": "2016-10-08T19:57:42.508264Z",
      "url": "https://api.robinhood.com/watchlists/Default/8c8cb16e-db35-4e1e-8d48-612c3f9b51bd/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3ddc3d12-c407-47f5-9d3a-dda062fe9e86/",
      "created_at": "2016-10-08T19:57:45.465903Z",
      "url": "https://api.robinhood.com/watchlists/Default/3ddc3d12-c407-47f5-9d3a-dda062fe9e86/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/938a3372-8fd2-49b9-bfbe-0d5f5a865676/",
      "created_at": "2016-10-08T19:57:59.131987Z",
      "url": "https://api.robinhood.com/watchlists/Default/938a3372-8fd2-49b9-bfbe-0d5f5a865676/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/28cae842-5e45-4a7f-a97a-dde41e943293/",
      "created_at": "2016-10-08T19:59:59.050202Z",
      "url": "https://api.robinhood.com/watchlists/Default/28cae842-5e45-4a7f-a97a-dde41e943293/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a08d63f8-8622-4c04-8252-5639181cfa08/",
      "created_at": "2016-10-08T20:00:23.141511Z",
      "url": "https://api.robinhood.com/watchlists/Default/a08d63f8-8622-4c04-8252-5639181cfa08/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ba8dbdb8-5f53-490c-8756-9d67b626b157/",
      "created_at": "2016-10-08T20:00:31.907264Z",
      "url": "https://api.robinhood.com/watchlists/Default/ba8dbdb8-5f53-490c-8756-9d67b626b157/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8892bf2b-1c6b-4fdb-8c6a-44265c23dbcc/",
      "created_at": "2016-10-08T20:00:46.520250Z",
      "url": "https://api.robinhood.com/watchlists/Default/8892bf2b-1c6b-4fdb-8c6a-44265c23dbcc/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7c6d389c-c6de-4dcf-880f-1bd422b9624f/",
      "created_at": "2016-10-11T15:31:56.349127Z",
      "url": "https://api.robinhood.com/watchlists/Default/7c6d389c-c6de-4dcf-880f-1bd422b9624f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/6014de6e-35ec-40e7-8c3d-32d67bd107c9/",
      "created_at": "2016-12-16T17:25:10.348545Z",
      "url": "https://api.robinhood.com/watchlists/Default/6014de6e-35ec-40e7-8c3d-32d67bd107c9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ea43b094-3783-4954-bd6b-d2a5d426b8a1/",
      "created_at": "2016-12-19T16:56:22.371167Z",
      "url": "https://api.robinhood.com/watchlists/Default/ea43b094-3783-4954-bd6b-d2a5d426b8a1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a4ecd608-e7b4-4ff3-afa5-f77ae7632dfb/",
      "created_at": "2016-12-19T18:15:31.316310Z",
      "url": "https://api.robinhood.com/watchlists/Default/a4ecd608-e7b4-4ff3-afa5-f77ae7632dfb/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/931a0395-53d2-46a2-910b-863ba6eb9521/",
      "created_at": "2017-01-12T16:50:40.673057Z",
      "url": "https://api.robinhood.com/watchlists/Default/931a0395-53d2-46a2-910b-863ba6eb9521/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e825dd3d-b3d3-4e7a-99ab-d3c38bfdbaaf/",
      "created_at": "2017-01-30T18:32:25.877669Z",
      "url": "https://api.robinhood.com/watchlists/Default/e825dd3d-b3d3-4e7a-99ab-d3c38bfdbaaf/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/665916b7-b129-47da-a519-08217ecfc26c/",
      "created_at": "2017-02-04T00:23:35.234165Z",
      "url": "https://api.robinhood.com/watchlists/Default/665916b7-b129-47da-a519-08217ecfc26c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d55acede-90e3-4f57-a0c0-273dcf2ec0f8/",
      "created_at": "2017-02-07T16:14:11.349505Z",
      "url": "https://api.robinhood.com/watchlists/Default/d55acede-90e3-4f57-a0c0-273dcf2ec0f8/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a8691c56-dde1-40f1-817e-7de60a902a87/",
      "created_at": "2017-02-07T16:20:53.687387Z",
      "url": "https://api.robinhood.com/watchlists/Default/a8691c56-dde1-40f1-817e-7de60a902a87/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a6a65fb3-eb91-4bfa-abb4-1a3386a7a3e1/",
      "created_at": "2017-02-09T18:43:52.401806Z",
      "url": "https://api.robinhood.com/watchlists/Default/a6a65fb3-eb91-4bfa-abb4-1a3386a7a3e1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1be547f6-699e-4515-a0b3-f4c084aa0082/",
      "created_at": "2017-02-17T14:34:33.840820Z",
      "url": "https://api.robinhood.com/watchlists/Default/1be547f6-699e-4515-a0b3-f4c084aa0082/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/544a79d6-8599-4131-a367-ffce07d74ab9/",
      "created_at": "2017-02-23T17:30:24.362187Z",
      "url": "https://api.robinhood.com/watchlists/Default/544a79d6-8599-4131-a367-ffce07d74ab9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/306245dd-b82d-4d8d-bcc5-7c58e87cdd15/",
      "created_at": "2017-02-27T01:40:45.422477Z",
      "url": "https://api.robinhood.com/watchlists/Default/306245dd-b82d-4d8d-bcc5-7c58e87cdd15/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1888271f-63de-4cdc-8f79-ab5e489fd69e/",
      "created_at": "2017-03-20T12:10:14.422470Z",
      "url": "https://api.robinhood.com/watchlists/Default/1888271f-63de-4cdc-8f79-ab5e489fd69e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/66ec1551-e033-4f9a-a46f-2b73aa529977/",
      "created_at": "2017-03-20T13:15:52.861419Z",
      "url": "https://api.robinhood.com/watchlists/Default/66ec1551-e033-4f9a-a46f-2b73aa529977/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e0737b33-7d4a-4677-83cd-e52f06f2b0db/",
      "created_at": "2017-03-20T13:16:05.549567Z",
      "url": "https://api.robinhood.com/watchlists/Default/e0737b33-7d4a-4677-83cd-e52f06f2b0db/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e505cf9c-9396-4b33-803c-887052dddf4d/",
      "created_at": "2017-03-22T02:13:43.886529Z",
      "url": "https://api.robinhood.com/watchlists/Default/e505cf9c-9396-4b33-803c-887052dddf4d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8f9073f0-3ce2-47bd-a853-3d034c383441/",
      "created_at": "2017-04-03T13:41:54.235464Z",
      "url": "https://api.robinhood.com/watchlists/Default/8f9073f0-3ce2-47bd-a853-3d034c383441/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/889f95dd-46d0-4f7a-a429-188aef93624d/",
      "created_at": "2017-04-09T19:02:48.895288Z",
      "url": "https://api.robinhood.com/watchlists/Default/889f95dd-46d0-4f7a-a429-188aef93624d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/6a17083e-2867-4a20-9b78-a0a46b422279/",
      "created_at": "2017-04-17T18:10:55.335619Z",
      "url": "https://api.robinhood.com/watchlists/Default/6a17083e-2867-4a20-9b78-a0a46b422279/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/e6a6e495-3db9-4129-8baf-50d4247b1d9c/",
      "created_at": "2017-05-05T14:12:53.386833Z",
      "url": "https://api.robinhood.com/watchlists/Default/e6a6e495-3db9-4129-8baf-50d4247b1d9c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3c82016d-6d1a-493d-b667-9d79b5c0bc8f/",
      "created_at": "2017-05-26T18:57:59.025483Z",
      "url": "https://api.robinhood.com/watchlists/Default/3c82016d-6d1a-493d-b667-9d79b5c0bc8f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/344b0275-1fac-4051-8696-0973730f79a9/",
      "created_at": "2017-07-31T14:14:01.102451Z",
      "url": "https://api.robinhood.com/watchlists/Default/344b0275-1fac-4051-8696-0973730f79a9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d9bfa2fc-a2e7-41b6-aae6-0aa99a1e68e0/",
      "created_at": "2017-09-14T10:22:46.932978Z",
      "url": "https://api.robinhood.com/watchlists/Default/d9bfa2fc-a2e7-41b6-aae6-0aa99a1e68e0/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/58093255-8c94-4ed8-a6df-367780caa254/",
      "created_at": "2017-09-29T16:06:55.147722Z",
      "url": "https://api.robinhood.com/watchlists/Default/58093255-8c94-4ed8-a6df-367780caa254/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1fd943d6-bfb7-4af2-8568-cae2b15c8ecc/",
      "created_at": "2017-10-10T14:06:03.653338Z",
      "url": "https://api.robinhood.com/watchlists/Default/1fd943d6-bfb7-4af2-8568-cae2b15c8ecc/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/57b88101-046d-4553-99a1-7cc92a49d916/",
      "created_at": "2017-10-11T12:43:08.005861Z",
      "url": "https://api.robinhood.com/watchlists/Default/57b88101-046d-4553-99a1-7cc92a49d916/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/1eb4afde-0262-4a76-9ecd-99919515d864/",
      "created_at": "2017-10-12T13:43:55.420189Z",
      "url": "https://api.robinhood.com/watchlists/Default/1eb4afde-0262-4a76-9ecd-99919515d864/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4a4bf458-6a5c-4f74-9c5d-1a4b5b08482e/",
      "created_at": "2017-10-23T13:58:00.376903Z",
      "url": "https://api.robinhood.com/watchlists/Default/4a4bf458-6a5c-4f74-9c5d-1a4b5b08482e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/ec70a913-5ca9-4415-bb0b-ab4131b187e9/",
      "created_at": "2017-11-13T16:36:21.036944Z",
      "url": "https://api.robinhood.com/watchlists/Default/ec70a913-5ca9-4415-bb0b-ab4131b187e9/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/fc55f976-d14a-41e7-8bb2-a102bc8e4337/",
      "created_at": "2017-11-20T20:35:19.830020Z",
      "url": "https://api.robinhood.com/watchlists/Default/fc55f976-d14a-41e7-8bb2-a102bc8e4337/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b2c7cbf9-d79d-471f-b89e-8539f03479a3/",
      "created_at": "2017-11-30T17:39:56.652752Z",
      "url": "https://api.robinhood.com/watchlists/Default/b2c7cbf9-d79d-471f-b89e-8539f03479a3/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/525f623a-f589-4196-abc0-a34731d88417/",
      "created_at": "2017-11-30T18:20:17.526693Z",
      "url": "https://api.robinhood.com/watchlists/Default/525f623a-f589-4196-abc0-a34731d88417/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/d7c1f0be-26b2-4130-b12b-c4350dbb75e0/",
      "created_at": "2017-12-04T18:23:35.531468Z",
      "url": "https://api.robinhood.com/watchlists/Default/d7c1f0be-26b2-4130-b12b-c4350dbb75e0/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/99f772b0-2565-4c57-ae94-7ea5405d93d4/",
      "created_at": "2017-12-07T15:07:04.968672Z",
      "url": "https://api.robinhood.com/watchlists/Default/99f772b0-2565-4c57-ae94-7ea5405d93d4/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/81321bff-946a-44ef-91db-3bd632995e32/",
      "created_at": "2017-12-18T17:14:09.517803Z",
      "url": "https://api.robinhood.com/watchlists/Default/81321bff-946a-44ef-91db-3bd632995e32/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4a0a8648-f2c4-4610-972d-8115158e6b08/",
      "created_at": "2017-12-18T17:16:56.421907Z",
      "url": "https://api.robinhood.com/watchlists/Default/4a0a8648-f2c4-4610-972d-8115158e6b08/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/f25b2d63-0372-4827-9907-e7e9e37a10f1/",
      "created_at": "2017-12-27T14:42:54.026588Z",
      "url": "https://api.robinhood.com/watchlists/Default/f25b2d63-0372-4827-9907-e7e9e37a10f1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/7271b195-2ec1-4882-ae05-710ad0574655/",
      "created_at": "2017-12-27T14:44:09.473815Z",
      "url": "https://api.robinhood.com/watchlists/Default/7271b195-2ec1-4882-ae05-710ad0574655/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a4f0cca4-79dc-4297-9c02-5bce1909cd4b/",
      "created_at": "2018-01-02T17:44:00.123481Z",
      "url": "https://api.robinhood.com/watchlists/Default/a4f0cca4-79dc-4297-9c02-5bce1909cd4b/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/b12f8af0-5c02-4ac3-b91b-c6557a78c19e/",
      "created_at": "2018-01-04T19:05:14.507615Z",
      "url": "https://api.robinhood.com/watchlists/Default/b12f8af0-5c02-4ac3-b91b-c6557a78c19e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a9adf9c7-4304-406c-8ab2-22fb2c89cbcc/",
      "created_at": "2018-01-08T15:16:55.008642Z",
      "url": "https://api.robinhood.com/watchlists/Default/a9adf9c7-4304-406c-8ab2-22fb2c89cbcc/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/95a4fa73-afbf-4354-a2dd-21570a647e18/",
      "created_at": "2018-01-11T17:47:00.879729Z",
      "url": "https://api.robinhood.com/watchlists/Default/95a4fa73-afbf-4354-a2dd-21570a647e18/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a44552fb-9f59-4168-86f1-c14da601ad4f/",
      "created_at": "2018-01-11T17:48:47.027591Z",
      "url": "https://api.robinhood.com/watchlists/Default/a44552fb-9f59-4168-86f1-c14da601ad4f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/07632d6b-8f97-4ee1-806a-0b63393f4d9c/",
      "created_at": "2018-01-26T19:43:10.453632Z",
      "url": "https://api.robinhood.com/watchlists/Default/07632d6b-8f97-4ee1-806a-0b63393f4d9c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/63160a36-4292-42e3-b947-93b616d0cb28/",
      "created_at": "2018-01-29T23:28:03.511076Z",
      "url": "https://api.robinhood.com/watchlists/Default/63160a36-4292-42e3-b947-93b616d0cb28/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/68487b7f-91bb-41be-b1df-3af37e6ae38f/",
      "created_at": "2018-03-01T13:12:06.709161Z",
      "url": "https://api.robinhood.com/watchlists/Default/68487b7f-91bb-41be-b1df-3af37e6ae38f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/89932ff9-97bf-4d05-a07e-d99aa574c507/",
      "created_at": "2018-03-01T18:48:58.645229Z",
      "url": "https://api.robinhood.com/watchlists/Default/89932ff9-97bf-4d05-a07e-d99aa574c507/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8417555a-9feb-4b36-9368-28fabaed06ca/",
      "created_at": "2018-03-08T21:09:55.530974Z",
      "url": "https://api.robinhood.com/watchlists/Default/8417555a-9feb-4b36-9368-28fabaed06ca/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/0cc15448-5eb4-4b1f-88a3-dbfa88b7252a/",
      "created_at": "2018-03-14T19:53:02.451915Z",
      "url": "https://api.robinhood.com/watchlists/Default/0cc15448-5eb4-4b1f-88a3-dbfa88b7252a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/666a0605-e80c-4686-8d10-f3015131ea6a/",
      "created_at": "2018-03-14T22:12:14.880686Z",
      "url": "https://api.robinhood.com/watchlists/Default/666a0605-e80c-4686-8d10-f3015131ea6a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/a144bc4c-ebe0-4a0e-a048-e6536e0fbe8c/",
      "created_at": "2018-03-21T17:05:58.468222Z",
      "url": "https://api.robinhood.com/watchlists/Default/a144bc4c-ebe0-4a0e-a048-e6536e0fbe8c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/945171ce-029a-4032-b46e-c34c5c2ffda0/",
      "created_at": "2018-03-23T14:40:06.252635Z",
      "url": "https://api.robinhood.com/watchlists/Default/945171ce-029a-4032-b46e-c34c5c2ffda0/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8914b6b7-0821-49c0-a6b5-3f6e5307e82a/",
      "created_at": "2018-04-27T19:07:09.631724Z",
      "url": "https://api.robinhood.com/watchlists/Default/8914b6b7-0821-49c0-a6b5-3f6e5307e82a/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c72df552-439c-4821-94bd-a6769401672d/",
      "created_at": "2018-04-27T19:07:14.066450Z",
      "url": "https://api.robinhood.com/watchlists/Default/c72df552-439c-4821-94bd-a6769401672d/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/63d3d33a-2c1e-4722-aac8-59445b142a22/",
      "created_at": "2018-04-27T19:07:26.953697Z",
      "url": "https://api.robinhood.com/watchlists/Default/63d3d33a-2c1e-4722-aac8-59445b142a22/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4736d78f-94ee-4a34-92f8-a50dc6693d5c/",
      "created_at": "2018-04-27T19:09:04.053888Z",
      "url": "https://api.robinhood.com/watchlists/Default/4736d78f-94ee-4a34-92f8-a50dc6693d5c/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/186161e4-fb22-4c0f-91bb-786572fc4eb2/",
      "created_at": "2018-05-29T14:32:06.165795Z",
      "url": "https://api.robinhood.com/watchlists/Default/186161e4-fb22-4c0f-91bb-786572fc4eb2/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/3c438ffc-2724-495a-b2aa-31bfef978ad6/",
      "created_at": "2018-05-31T14:23:47.030657Z",
      "url": "https://api.robinhood.com/watchlists/Default/3c438ffc-2724-495a-b2aa-31bfef978ad6/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/12e429a8-f78d-4b0c-9f46-bf12fa6a32fb/",
      "created_at": "2018-05-31T14:24:30.262241Z",
      "url": "https://api.robinhood.com/watchlists/Default/12e429a8-f78d-4b0c-9f46-bf12fa6a32fb/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/8c08b3a4-e3ac-40e0-8e50-551f942a1053/",
      "created_at": "2018-06-07T20:30:09.527960Z",
      "url": "https://api.robinhood.com/watchlists/Default/8c08b3a4-e3ac-40e0-8e50-551f942a1053/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4047e152-4fa1-4084-831c-f239d9a68528/",
      "created_at": "2018-08-17T02:11:04.026451Z",
      "url": "https://api.robinhood.com/watchlists/Default/4047e152-4fa1-4084-831c-f239d9a68528/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4ee0bb0f-43f0-49e0-9dfb-f1b2010332ce/",
      "created_at": "2018-08-17T02:11:11.903704Z",
      "url": "https://api.robinhood.com/watchlists/Default/4ee0bb0f-43f0-49e0-9dfb-f1b2010332ce/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/98dbc601-3a75-497a-8140-666dedcb3db1/",
      "created_at": "2018-08-17T02:11:19.346421Z",
      "url": "https://api.robinhood.com/watchlists/Default/98dbc601-3a75-497a-8140-666dedcb3db1/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/81aace36-131a-4fed-98a5-cfe9fc29814e/",
      "created_at": "2018-08-17T02:11:33.125670Z",
      "url": "https://api.robinhood.com/watchlists/Default/81aace36-131a-4fed-98a5-cfe9fc29814e/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/c0e03886-2f53-41a4-ae78-212650ce577f/",
      "created_at": "2018-08-17T02:11:40.145318Z",
      "url": "https://api.robinhood.com/watchlists/Default/c0e03886-2f53-41a4-ae78-212650ce577f/"
    },
    {
      "watchlist": "https://api.robinhood.com/watchlists/Default/",
      "instrument": "https://api.robinhood.com/instruments/4d3a760b-152a-4055-91ba-fd955253f631/",
      "created_at": "2018-08-17T02:11:54.434161Z",
      "url": "https://api.robinhood.com/watchlists/Default/4d3a760b-152a-4055-91ba-fd955253f631/"
    }
  ],
  "next": null
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
