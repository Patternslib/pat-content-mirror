# Changelog



## [3.0.0](https://github.com/patternslib/pat-content-mirror/compare/3.0.0-alpha.0...3.0.0) (2022-06-28)


### Maintenance


* @patternslib/patternslib needs to be installed. Adding to devDependencies to avoid version clashes with other packages depending on it. ([b3fa0aa](https://github.com/patternslib/pat-content-mirror/commit/b3fa0aa934d562d45201e8bc64d99cd84f76ebed))

* Upgrade to @patternslib/dev 2.2.0 and adapt module federation config. ([8b5c424](https://github.com/patternslib/pat-content-mirror/commit/8b5c4243fc110fa82315de1a2f98cdc7dadae13b))

## [3.0.0-alpha.0](https://github.com/patternslib/pat-content-mirror/compare/2.0.1...3.0.0-alpha.0) (2022-06-15)


### Features


* **Build:** Build module federation enabled bundles. ([3ef070b](https://github.com/patternslib/pat-content-mirror/commit/3ef070b6952f1c2953ac8f182786cc7501ea8c1e))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([2ec9a14](https://github.com/patternslib/pat-content-mirror/commit/2ec9a14fa3a8ab52563053f3d7661bf9fc6cbb13))

* Extend babel config from @patternslib/dev. ([7362aa6](https://github.com/patternslib/pat-content-mirror/commit/7362aa605bd03440ba8cf067822b77ce6e647f7c))

* Extend commitlint config from @patternslib/dev. ([fa15a47](https://github.com/patternslib/pat-content-mirror/commit/fa15a474bcae963cdf9ca56439f7ab67d4f3cb47))

* Extend eslint config from @patternslib/dev. ([354dac2](https://github.com/patternslib/pat-content-mirror/commit/354dac26359a1219bd198378134fd1805bdb1f63))

* Extend jest config from @patternslib/dev. ([665a68c](https://github.com/patternslib/pat-content-mirror/commit/665a68c421d9f64c2a558c01d90c02c72f16414d))

* Extend Makefile from @patternslib/dev. ([9906b70](https://github.com/patternslib/pat-content-mirror/commit/9906b702b9ef747951c4ba78091882fa45e164c8))

* Extend prettier config from @patternslib/dev. ([246875b](https://github.com/patternslib/pat-content-mirror/commit/246875b8fe0d630a4b6f3a6502788411627a3a86))

* Extend release-it config from @patternslib/dev. ([dfe1071](https://github.com/patternslib/pat-content-mirror/commit/dfe10713331db7d05f9742f8d0306f828a5d2329))

* Extend webpack config from @patternslib/dev. ([078daa9](https://github.com/patternslib/pat-content-mirror/commit/078daa9190b2e7e9634824ce42c17aa0f5442cfc))


### Maintenance


* **build:** Add build:dev script to package.json to create a unminified development build. ([24899fc](https://github.com/patternslib/pat-content-mirror/commit/24899fc7085cf351bdfbdb51e816c57938c5581d))

* **Build:** @patternslib/patternslib as peerDependency. ([8290399](https://github.com/patternslib/pat-content-mirror/commit/8290399250fd43bb5f45acf253ad2c389773babf))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([98c29eb](https://github.com/patternslib/pat-content-mirror/commit/98c29eb97c2908b7c9192c6c015a087b168724e0))

* **Build:** Add keyword "patternslib" to package.json. ([4952153](https://github.com/patternslib/pat-content-mirror/commit/495215366e4e01b6782712b738881129b606a9f6))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([6d6e04a](https://github.com/patternslib/pat-content-mirror/commit/6d6e04a4940af15c3daed54217e2975daeceebe2))

* **Build:** Keep yarn.lock in repository. ([7cd4042](https://github.com/patternslib/pat-content-mirror/commit/7cd404228fe321311c38f4b541c87698475a42ef))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([401eace](https://github.com/patternslib/pat-content-mirror/commit/401eacea84613e222cb743e9d9669c36218ca0d9))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([25f8f0f](https://github.com/patternslib/pat-content-mirror/commit/25f8f0f5f9abcd1ab6a7716463b02c5d2371e33b))

* **Build:** Remove dependency underscore, explicitly add dependency jquery. ([1d201ac](https://github.com/patternslib/pat-content-mirror/commit/1d201ac699daee0e87f3b6c0acd7141626115497))

* **Build:** Update GitHub actions setup. ([0bf2b95](https://github.com/patternslib/pat-content-mirror/commit/0bf2b952ca1f1751a4390d91277069645f955566))

* **Build:** Upgrade and cleanup dependencies. ([779af4d](https://github.com/patternslib/pat-content-mirror/commit/779af4d39c9b9f17209b0357f80e3248be6bc890))

### [2.0.1](https://github.com/patternslib/pat-content-mirror/compare/2.0.0...2.0.1) (2022-03-24)


### Bug Fixes

* Add missing dependency underscore. ([40ae1d5](https://github.com/patternslib/pat-content-mirror/commit/40ae1d5d9e3031723b0e6e56ce83ac89180035f7))



### Maintenance

* **webpack:** Configure devServer static directory. ([125e5a7](https://github.com/patternslib/pat-content-mirror/commit/125e5a75b84000b40b0eee85f60227c79ca65e7e))

## [2.0.0](https://github.com/patternslib/pat-content-mirror/compare/1.1.0...2.0.0) (2021-11-17)


### Breaking Changes

* Upgrade to Webpack 5. ([796c125](https://github.com/patternslib/pat-content-mirror/commit/796c125c9f5531ae7d9afd8c25285598dc078d12))



### Maintenance

* **build:** Extend Patternslib release-it config file. ([b00aa65](https://github.com/patternslib/pat-content-mirror/commit/b00aa654d13a31e9d51a9a4b31784f5ed7190c2e))

* **build:** Release on GitHub releases. ([c2d193f](https://github.com/patternslib/pat-content-mirror/commit/c2d193f032914eb6e8bfeeb82822e83bb12201c4))

* Upgrade up to minor versions. ([1127df0](https://github.com/patternslib/pat-content-mirror/commit/1127df0623109e4027977ff723f0fd881ec8a495))

## [1.1.0](https://github.com/patternslib/pat-content-mirror/compare/1.0.1...1.1.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([06603cd](https://github.com/patternslib/pat-content-mirror/commit/06603cd36746b0e83760344bed9f5be76988f6aa))
* **dependencies:** Depend on Patternslib v4.4.0. ([3020d52](https://github.com/patternslib/pat-content-mirror/commit/3020d52793d84ecf7f32cf0339895a1998e21aa2))
* **dependencies:** Upgrade dependencies on minor+patch level. ([e187ebc](https://github.com/patternslib/pat-content-mirror/commit/e187ebc4d275c49c8fe8ba9a53b362332b87b374))
* **webpack:** Adapt start script to recent dependency changes. ([303f09e](https://github.com/patternslib/pat-content-mirror/commit/303f09e5552be0f19fcc6b559b0b3d5fb97ddfa2))
* **webpack:** Simplify webpack. ([8ff025d](https://github.com/patternslib/pat-content-mirror/commit/8ff025d28590c13b93b807ebc74d002b993f7582))

### [1.0.1](https://github.com/patternslib/pat-content-mirror/compare/1.0.0...1.0.1) (2021-04-23)


### Maintenance

* **make release-patch:** Add missing patch for patch level releases. ([b997b4c](https://github.com/patternslib/pat-content-mirror/commit/b997b4cf344d2ddddd2e667922e484bb99c0e030))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([0a2482c](https://github.com/patternslib/pat-content-mirror/commit/0a2482c84694fc8e8320cdba80bbf6dc613fa33f))
* **Release process:** Do not include the release commit in the changelog. ([64c1baa](https://github.com/patternslib/pat-content-mirror/commit/64c1baa64ccd5318af8f263c5d0a35b535d14c55))
* gitignore dist/ ([5b08957](https://github.com/patternslib/pat-content-mirror/commit/5b089579df5c32b97d5b51040e94dbf1d5e1f42b))
* Remove console.log from test. ([e869228](https://github.com/patternslib/pat-content-mirror/commit/e86922871a9604a53ae1461d5c120db7a8f39557))

## 1.0.0 (2021-04-20)


### Maintenance

* Add basic tests. ([38f40d3](https://github.com/patternslib/pat-content-mirror/commit/38f40d3733e0b5b309d37bdff149dbdc0a4da23f))
* Prepare release, move repo to github/patternslib ([c18c672](https://github.com/patternslib/pat-content-mirror/commit/c18c672455afbaa272fc6892e5339c4dbb8d2461))
* Upgrade to Patternslib v4 final - content-mirror customizations. ([2d456e5](https://github.com/patternslib/pat-content-mirror/commit/2d456e50f09797a677d29d0ee75f704af53b386d))
* Upgrade to Patternslib v4 final. ([8271517](https://github.com/patternslib/pat-content-mirror/commit/8271517d6763d1baa80ac47a348578a152b5aa6d))


## 1.0.0 - unreleased

- Upgrade to ES6.