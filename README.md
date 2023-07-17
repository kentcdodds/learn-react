# Archived

🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 

This is archived. If you want to learn React, I recommend [The Beginner's Guide to React](https://kcd.im/beginner-react) as a great free resource and [EpicReact.dev](https://EpicReact.dev) as a premium resource that will get you *really* good at React.

Cheers!

🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 

# Learn React

👋 hi there! My name is [Kent C. Dodds](https://kentcdodds.com)!

[![chat-badge][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![AppVeyor Build Status][win-build-badge]][win-build]
[![Code Coverage][coverage-badge]][coverage]
[![MIT License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## System Requirements

- [git][git] v2.14.1 or greater
- [NodeJS][node] v8.9.4 or greater
- [npm][npm] v5.6.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

You may be able to work through the entire workshop in the browser. Go to
[this codesandbox](https://codesandbox.io/s/github/kentcdodds/learn-react)
and you should be good to go. (Note: there are a few exercises in the `intro`
folder which you won't be able to run in codesandbox, but don't require
installing any dependencies).

If you'd rather be able to work through the workshop on your own computer, then
follow the following instructions.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

> NOTE: `<branchname>` refers to the specific branch you want to clone. 
> Replace that with the branch you were given in the instructions or `main`
> if you were not given any specific instructions.

```
git clone --single-branch --branch <branchname> https://github.com/kentcdodds/learn-react.git
cd learn-react
npm run setup --silent
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier If you get any errors, please read through
them and see if you can find out what the problem is. You may also want to look
at [Troubleshooting](#troubleshooting). If you can't work it out on your own
then please [file an issue][issue] and provide _all_ the output from the
commands you ran (even if it's a lot).

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://github.com/facebook/create-react-app) application.

You can also open
[the deployment of the app on Netlify](https://learn-reactjs.netlify.com/).

## Running the tests

```shell
npm test
```

This will start [Jest](http://facebook.github.io/jest) in watch mode. Read the
output and play around with it.

## Working through it

You'll want to start in the `intro/exercises` directory where we start with
raw React and DOM APIs. Pull open the `.html` files in your browser and follow
along in the comments.

Once you get through those, then start in the `src/exercises` directory and
work through those.

**Your goal will be to go into each test, swap the final version for the
exercise version in the import, and make the tests pass**

## Helpful Emoji 🐨 💰 💯 🦉 📜 💣 🚨

Each exercise has comments in it to help you get through the exercise. These fun
emoji characters are here to help you.

- **Kody the Koala Bear** 🐨 will tell you when there's something specific you
  should do
- **Marty the Money Bag** 💰 will give you specific tips (and sometimes code)
  along the way
- **Hannah the Hundred** 💯 will give you extra challenges you can do if you
  finish the exercises early.
- **Olivia the Owl** 🦉 will give you useful tidbits/best practice notes and a
  link for elaboration and feedback.
- **Dominic the Document** 📜 will give you links to useful documentation
- **Berry the Bomb** 💣 will be hanging around anywhere you need to blow stuff
  up (delete code)
- **Peter the Product Manager** 👨‍💼 helps us know what our users want
- **Alfred the Alert** 🚨 will occasionally show up in the test failures with
  potential explanations for why the tests are failing.

## Troubleshooting

<details>

<summary>"npm run setup" command not working</summary>

Here's what the setup script does. If it fails, try doing each of these things
individually yourself:

```
# verify your environment will work with the project
node ./scripts/verify

# install dependencies
npm install

# verify the project is ready to run
npm run build
npm run test:coverage
```

If any of those scripts fail, please try to work out what went wrong by the
error message you get. If you still can't work it out, feel free to
[open an issue][issue] with _all_ the output from that script. I will try to
help if I can.

</details>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/learn-react/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/learn-react/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/learn-react/commits?author=kentcdodds" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nathanhannig.com"><img src="https://avatars3.githubusercontent.com/u/8210763?v=4?s=100" width="100px;" alt="Nathan Hannig"/><br /><sub><b>Nathan Hannig</b></sub></a><br /><a href="https://github.com/kentcdodds/learn-react/issues?q=author%3Anathanhannig" title="Bug reports">🐛</a> <a href="https://github.com/kentcdodds/learn-react/commits?author=nathanhannig" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ta1188"><img src="https://avatars2.githubusercontent.com/u/18534488?v=4?s=100" width="100px;" alt="Trevor A"/><br /><sub><b>Trevor A</b></sub></a><br /><a href="https://github.com/kentcdodds/learn-react/commits?author=ta1188" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://brennongs.dev"><img src="https://avatars3.githubusercontent.com/u/24623425?v=4?s=100" width="100px;" alt="Brennon Schow"/><br /><sub><b>Brennon Schow</b></sub></a><br /><a href="https://github.com/kentcdodds/learn-react/commits?author=brennongs" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://upleveled.io"><img src="https://avatars2.githubusercontent.com/u/1935696?v=4?s=100" width="100px;" alt="Karl Horky"/><br /><sub><b>Karl Horky</b></sub></a><br /><a href="https://github.com/kentcdodds/learn-react/commits?author=karlhorky" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jacobwillden.codeberg.page/"><img src="https://avatars.githubusercontent.com/u/67853915?v=4?s=100" width="100px;" alt="Jacob Willden"/><br /><sub><b>Jacob Willden</b></sub></a><br /><a href="https://github.com/kentcdodds/learn-react/commits?author=jacob-willden" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/learn-react/commits?author=jacob-willden" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you
would like to use this material to conduct your own workshop, please contact me
at kent@doddsfamily.us

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[chat]: https://gitter.im/kentcdodds/learn-react
[chat-badge]: https://img.shields.io/gitter/room/kentcdodds/learn-react.js.svg?style=flat-square&logo=gitter-white
[build-badge]: https://img.shields.io/travis/kentcdodds/learn-react.svg?style=flat-square&logo=travis
[build]: https://travis-ci.org/kentcdodds/learn-react
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/learn-react/blob/main/README.md#license
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/learn-react/blob/main/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/learn-react.svg?style=social
[github-watch]: https://github.com/kentcdodds/learn-react/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/learn-react.svg?style=social
[github-star]: https://github.com/kentcdodds/learn-react/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20learn-react%20by%20@kentcdodds%20https://github.com/kentcdodds/learn-react%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/learn-react.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/learn-react/issues/new
[win-build-badge]: https://img.shields.io/appveyor/ci/kentcdodds/learn-react.svg?style=flat-square&logo=appveyor
[win-build]: https://ci.appveyor.com/project/kentcdodds/learn-react
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/learn-react.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/learn-react
[watchman]: https://facebook.github.io/watchman/docs/install.html
