Github Profiles
===============
A simply Angular.js application to search github profiles (builded with a TDD approach).

Installation
------------
You can try the app remotely:
>[https://github-profiles-giamir.herokuapp.com](https://github-profiles-giamir.herokuapp.com)

or install it locally:
```
$ git clone git@github.com:giamir/github-profiles.git
$ npm install
```
Visit: [http://localhost:8080](http://localhost:8080) on your machine.

Notes: The tests will run perfectly locally but the app will not work due to fact the GitHub API access token is not a valid one. You should manually replace it.<br/>
You can create your personal access token following [this guide](https://help.github.com/articles/creating-an-access-token-for-command-line-use/).

Testing
-------------

### To run tests:
- ```$ npm test```

### To run e2e tests:
- ```$ grunt e2e```

### To run unit tests:
- ```$ grunt karma```

Technologies
-------------

- Angular.js
- Node.js
- Express
- Karma
- Protractor
- Jasmine
- Grunt

Contributors
-------------
[Giamir Buoncristiani](https://github.com/giamir)<br/>
Many thanks to [Ptolemy Barnes](https://github.com/ptolemybarnes) and [Michael Lennox](https://github.com/michaellennox).
