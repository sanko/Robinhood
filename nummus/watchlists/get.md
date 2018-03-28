# Get Crypto Watchlists

Returns a paginated list of crypto watchlists.

**URL** : `/watchlists/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with the default crypto watchlist and a list of currency pairs. Unlike the standard watchlists, we get a lot more data with a single call.

```json
{
	"next": null,
	"previous": null,
	"results": [
		{	
			"created_at": "2018-01-25T14:05:25.983259-05:00",
			"currency_pair_ids": [
				"7a04fe7a-e3a8-4a07-8c35-d0fec9f35569",
				"1461976e-a656-481a-af27-dc6f2980e967",
				"383280b1-ff53-43fc-9c84-f01afd0989cd",
				"b9729798-2aec-4ca9-8637-4d9789d63764",
				"cc2eb8d1-c42d-4f12-8801-1c4bbe43a274",
				"1ef78e1b-049b-4f12-90e5-555dcf2fe204",
				"2de36458-56cf-458d-b76a-6b3f61b2034c",
				"2f2b77c4-e426-4271-ae49-18d5cb296d3a",
				"a31d3fe3-38e6-4adf-ab4b-e303349f5ee4",
				"bab5ccb4-6729-416e-ac75-019d650016c9",
				"3d961844-d360-45fc-989b-f6fca761d511",
				"7837d558-0fe9-4287-8f3e-6de592db127c",
				"35f0496d-6c3a-4cac-9d2f-6702a8c387eb",
				"7b577ce3-489d-4269-9408-796a0d1abb3a",
				"76637d50-c702-4ed1-bcb5-5b0732a81f48",
				"5f1325b6-f63c-4367-9d6f-713e3a0c5d76"
			],
			"id": "cc0efa02-cfca-11e0-ae25-8cae28fccae2",
			"name": "Default",
			"updated_at": "2018-01-26T07:13:26.904781-05:00"
		}
	]
}
```

## Notes

* Like all crypto endpoints, this one requires OAuth login.