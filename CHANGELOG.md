# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.2](https://github.com/shootismoke/common/compare/v0.2.1...v0.2.2) (2019-12-25)

**Note:** Version bump only for package @shootismoke/common





## [0.2.1](https://github.com/shootismoke/common/compare/v0.2.0...v0.2.1) (2019-12-25)


### Features

* **dataproviders:** Add `getStationName` and `dominantPol` functions ([#20](https://github.com/shootismoke/common/issues/20)) ([66c4ba2](https://github.com/shootismoke/common/commit/66c4ba2873598e039cc49adbc0eb23b1afbc7453))





# [0.2.0](https://github.com/shootismoke/common/compare/v0.1.17...v0.2.0) (2019-12-22)


### chore

* Move all packages from backend to common ([734732e](https://github.com/shootismoke/common/commit/734732ee77a66017f5a51f010a1d17bcce547fbf))


### Code Refactoring

* **convert:** Move `aqi` to `convert` package ([#13](https://github.com/shootismoke/common/issues/13)) ([e6cbf0b](https://github.com/shootismoke/common/commit/e6cbf0bde8a551dc809448c8d8d292db81ce6e98))
* **dataproviders:** Use Open AQ format ([#17](https://github.com/shootismoke/common/issues/17)) ([9363a95](https://github.com/shootismoke/common/commit/9363a954f26f9e013fd3222aac305c6f664208e5))


### Features

* **convert:** Add breakpoints for co,no2,so2,pm10,o3 for EPA and MEP ([#18](https://github.com/shootismoke/common/issues/18)) ([5e67d25](https://github.com/shootismoke/common/commit/5e67d252496312d2a5b939bf4032674262cef11e))


### BREAKING CHANGES

* **dataproviders:** All data provider fetches return normalized results using the [`openaq-data-format`](https://github.com/openaq/openaq-data-format)
* **convert:** The `@shootismoke/aqi` package has been renamed to `@shootismoke/convert`
* `@shootismoke/aqi`, `@shootismoke/dataproviders` and `@shootismoke/graphql` have been moved from https://github.com/shootismoke/backend to this repo





## [0.1.17](https://github.com/shootismoke/backend/compare/v0.1.16...v0.1.17) (2019-11-16)


### Bug Fixes

* **dataproviders:** Use axios instead of fetch ([#37](https://github.com/shootismoke/backend/issues/37)) ([ff09a2d](https://github.com/shootismoke/backend/commit/ff09a2d828f079e988c8917126e09573fdbbeadb))
* **microservices:** Make graphql endpoint work again ([#36](https://github.com/shootismoke/backend/issues/36)) ([ba144b7](https://github.com/shootismoke/backend/commit/ba144b723b012c4dce74a6def91c30f6585af44f))





## [0.1.16](https://github.com/shootismoke/backend/compare/v0.1.15...v0.1.16) (2019-11-16)


### Bug Fixes

* **dataproviders:** Remove useless dependency ([#35](https://github.com/shootismoke/backend/issues/35)) ([d2a0dd4](https://github.com/shootismoke/backend/commit/d2a0dd4919259a51e629fc25404a69acbf839fc3))





## [0.1.15](https://github.com/shootismoke/backend/compare/v0.1.14...v0.1.15) (2019-11-16)


### Bug Fixes

* Fix TS import paths ([#33](https://github.com/shootismoke/backend/issues/33)) ([48fb2a6](https://github.com/shootismoke/backend/commit/48fb2a6af989a9295518383710f9b55661e7f401))





## [0.1.14](https://github.com/shootismoke/backend/compare/v0.1.13...v0.1.14) (2019-11-14)


### Bug Fixes

* Fix package.json main field ([#32](https://github.com/shootismoke/backend/issues/32)) ([f4be4c2](https://github.com/shootismoke/backend/commit/f4be4c25824c3256407bb309cb37a8dd8e51f1b5))





## [0.1.13](https://github.com/shootismoke/backend/compare/v0.1.12...v0.1.13) (2019-11-14)


### Bug Fixes

* Fix paths for imports ([#31](https://github.com/shootismoke/backend/issues/31)) ([ef702e7](https://github.com/shootismoke/backend/commit/ef702e7f195c6abfd2c402aad3736e6ab6145688))





## [0.1.12](https://github.com/shootismoke/backend/compare/v0.1.11...v0.1.12) (2019-11-14)


### Bug Fixes

* **dataproviders:** Add dominant pollutant ([#30](https://github.com/shootismoke/backend/issues/30)) ([f645ed6](https://github.com/shootismoke/backend/commit/f645ed6d35856293e065094a6ae0e5b3ddeeba9a))





## [0.1.11](https://github.com/shootismoke/backend/compare/v0.1.10...v0.1.11) (2019-11-14)


### Bug Fixes

* **dataproviders:** Change normalized format ([#29](https://github.com/shootismoke/backend/issues/29)) ([e8f50a5](https://github.com/shootismoke/backend/commit/e8f50a527ed1a84852c462fd1dfe14c9fe08e319))





## [0.1.10](https://github.com/shootismoke/backend/compare/v0.1.9...v0.1.10) (2019-11-13)


### Bug Fixes

* **dataproviders:** Add conversion to cigarettes ([#27](https://github.com/shootismoke/backend/issues/27)) ([af577be](https://github.com/shootismoke/backend/commit/af577befd72d35a530fa4516337e0f70bb9c2e40))
* **dataproviders:** Export types ([#26](https://github.com/shootismoke/backend/issues/26)) ([27c3165](https://github.com/shootismoke/backend/commit/27c31658b48f550ce72baa1e394fdec9ec65ebf7))





## [0.1.9](https://github.com/shootismoke/backend/compare/v0.1.8...v0.1.9) (2019-11-13)

**Note:** Version bump only for package @shootismoke/backend





## [0.1.8](https://github.com/shootismoke/backend/compare/v0.1.7...v0.1.8) (2019-11-13)


### Features

* **dataproviders:** Add normalized data format ([#25](https://github.com/shootismoke/backend/issues/25)) ([a7bd857](https://github.com/shootismoke/backend/commit/a7bd857603c43171f761b0c9a1e61949a828c723))





## [0.1.7](https://github.com/shootismoke/backend/compare/v0.1.6...v0.1.7) (2019-11-12)


### Bug Fixes

* **dataproviders:** Add fetching from waqi ([#24](https://github.com/shootismoke/backend/issues/24)) ([a17f3f4](https://github.com/shootismoke/backend/commit/a17f3f4e7ffda5fab5e3a7a01d57a55eaa9740eb))
* **microservices:** Use sparse index on expoPushToken ([#23](https://github.com/shootismoke/backend/issues/23)) ([93cca0a](https://github.com/shootismoke/backend/commit/93cca0a28fdda50710b1d939711be73b4fe72f12))





## [0.1.6](https://github.com/shootismoke/backend/compare/v0.1.5...v0.1.6) (2019-11-10)

**Note:** Version bump only for package @shootismoke/backend





## [0.1.5](https://github.com/shootismoke/backend/compare/v0.1.4...v0.1.5) (2019-11-02)


### Bug Fixes

* **graphql:** Use type instead of enum ([#21](https://github.com/shootismoke/backend/issues/21)) ([7836a63](https://github.com/shootismoke/backend/commit/7836a63ab0ffdd3da953ebf81aabbabc71f4a507))





## [0.1.4](https://github.com/shootismoke/backend/compare/v0.1.3...v0.1.4) (2019-11-02)


### Bug Fixes

* **graphql:** Remove dependency from apollo-server ([#19](https://github.com/shootismoke/backend/issues/19)) ([3dbfa45](https://github.com/shootismoke/backend/commit/3dbfa4564321577de5319ca4ba0a3aed686a227b))
* Fix license in package.json ([82a9705](https://github.com/shootismoke/backend/commit/82a97056115e1bb6ff751f372627e0e01eb12481))





## [0.1.3](https://github.com/shootismoke/backend/compare/v0.1.2...v0.1.3) (2019-11-02)


### Bug Fixes

* **graphql:** Fix graphql index export ([#18](https://github.com/shootismoke/backend/issues/18)) ([05143cc](https://github.com/shootismoke/backend/commit/05143ccfca3808835a4fe6d7f74836de97ec1c55))





## [0.1.2](https://github.com/shootismoke/backend/compare/v0.1.1...v0.1.2) (2019-11-02)

**Note:** Version bump only for package @shootismoke/backend





## 0.1.1 (2019-11-02)


### Bug Fixes

* Float rawPm25 and add provider ([#13](https://github.com/shootismoke/backend/issues/13)) ([2ed3ada](https://github.com/shootismoke/backend/commit/2ed3ada21e232e9bd6c59e958641fb70b7b247d0))
* Make expoPushToken optional ([#12](https://github.com/shootismoke/backend/issues/12)) ([1f09cf9](https://github.com/shootismoke/backend/commit/1f09cf91561e19687ba2625126c412ab81f2b6bb))


### Features

* Add connection to mongodb ([a4df467](https://github.com/shootismoke/backend/commit/a4df4679cd9bdd170ce7886dfd152714390a4770))
* Add history model ([#7](https://github.com/shootismoke/backend/issues/7)) ([f34d6c1](https://github.com/shootismoke/backend/commit/f34d6c149d06d172d4939edc7165b182682a2909))
* Add station model ([#14](https://github.com/shootismoke/backend/issues/14)) ([56eda5a](https://github.com/shootismoke/backend/commit/56eda5a25284473792fcf26f71a992bb8ca85946))
* Add tests ([c958fca](https://github.com/shootismoke/backend/commit/c958fca127419fd9216d39d2136d10364fdee07f))
* Add validation ([0124186](https://github.com/shootismoke/backend/commit/0124186efb7a8e1016b2ac9dabd5cf6aad334880))
