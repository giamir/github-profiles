module.exports = [
{
  request: {
   path: 'https://api.github.com/search/users',
   method: 'GET'
  },
  response: {
      data: {
    "total_count": 12,
    "incomplete_results": false,
    "items": [
      {
        "login": "mikou90",
        "id": 11386730,
        "avatar_url": "https://avatars.githubusercontent.com/u/11386730?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mikou90",
        "html_url": "https://github.com/mikou90",
        "followers_url": "https://api.github.com/users/mikou90/followers",
        "following_url": "https://api.github.com/users/mikou90/following{/other_user}",
        "gists_url": "https://api.github.com/users/mikou90/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mikou90/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mikou90/subscriptions",
        "organizations_url": "https://api.github.com/users/mikou90/orgs",
        "repos_url": "https://api.github.com/users/mikou90/repos",
        "events_url": "https://api.github.com/users/mikou90/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mikou90/received_events",
        "type": "User",
        "site_admin": false,
        "score": 37.12201
      },
      {
        "login": "giamir",
        "id": 6231616,
        "avatar_url": "https://avatars.githubusercontent.com/u/6231616?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/giamir",
        "html_url": "https://github.com/giamir",
        "followers_url": "https://api.github.com/users/giamir/followers",
        "following_url": "https://api.github.com/users/giamir/following{/other_user}",
        "gists_url": "https://api.github.com/users/giamir/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/giamir/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/giamir/subscriptions",
        "organizations_url": "https://api.github.com/users/giamir/orgs",
        "repos_url": "https://api.github.com/users/giamir/repos",
        "events_url": "https://api.github.com/users/giamir/events{/privacy}",
        "received_events_url": "https://api.github.com/users/giamir/received_events",
        "type": "User",
        "site_admin": false,
        "score": 28.585022
      },
      {
        "login": "giami",
        "id": 489080,
        "avatar_url": "https://avatars.githubusercontent.com/u/489080?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/giami",
        "html_url": "https://github.com/giami",
        "followers_url": "https://api.github.com/users/giami/followers",
        "following_url": "https://api.github.com/users/giami/following{/other_user}",
        "gists_url": "https://api.github.com/users/giami/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/giami/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/giami/subscriptions",
        "organizations_url": "https://api.github.com/users/giami/orgs",
        "repos_url": "https://api.github.com/users/giami/repos",
        "events_url": "https://api.github.com/users/giami/events{/privacy}",
        "received_events_url": "https://api.github.com/users/giami/received_events",
        "type": "User",
        "site_admin": false,
        "score": 16.268324
      }
    ]
    }
  }
},
{
  request: {
             path: 'https://api.github.com/users/giamir/repos',
             method: 'GET'
           },
  response: {
          data: [ { "language": "Ruby" }, { "language": "Javascript" } ]
            }
  },
  {
    request: {
               path: 'https://api.github.com/users/mikou90/repos',
               method: 'GET'
             },
    response: {
            data: [ { "language": "Ruby" }, { "language": "Javascript" }, { "language": "Ruby" } ]
              }
    },
    {
      request: {
                 path: 'https://api.github.com/users/giami/repos',
                 method: 'GET'
               },
      response: {
              data: [ { "language": "Ruby" }, { "language": "Javascript" } ]
                }
      }
];
