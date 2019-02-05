---
title: Tracker.js
date: '2019-01-24T22:50:00.004Z'
---

Anyone who's worked on a project with me knows I'm a huge fan of
[Pivotal Tracker](https://pivotaltracker.com/) and the process they enforce for
agile project management. The interface is super snappy and, though definitely
looking dated, very clearly estimates how long it'll take to do the things your
team wants to do in the order your team wants to do them.

One of the things I really like about Pivotal's process is the differentiation
between `finished`, `delivered`, and `accepted`.

- `finished`: I (an engineer) have completed a feature and merged it into
  `master`
- `deliverd`: Code in `master` with my `finished` feature is now running in
  production and end users can access it.
- `accepted`: I (a product manager) have confirmed that the story was completed
  appropriately and no further work needs to be done.

Pivotal can integrate with Git so that your commit messages change story states,
but that doesn't really make sense for all of the states. `delivered` should
only happen when code is actually in production and `accepted` should only
happen when a human has verified a feature.

For a long time, I used [tracker-git](https://github.com/robb1e/tracker-git/)
automatically mark stories `finished` by deployed commits as `delivered`, but it
hasn't been updated in quite a while and it relies on
[pivotal-tracker](https://github.com/jsmestad/pivotal-tracker), also well out of
date. Sometime last week, my stories stopped being marked as delivered.
`pivotal-tracker` uses the v3 Pivotal API which was deprecated at least a year
ago; _v5_ is the current version. I can only assume things stopped working
because Pivotal shutdown the v3 API.

To deal with that issue, I've written a short JavaScript file which does with
minimal dependencies what I had been doing through a handful of outdated gems
and a much more complex than I needed Docker setup.

`gist:ianwremmel/8cc02e56353e65a16617792bc14d3613#tracker.js`
