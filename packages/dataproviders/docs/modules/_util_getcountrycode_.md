[@shootismoke/dataproviders - v0.2.5](../README.md) › [Globals](../globals.md) › ["util/getCountryCode"](_util_getcountrycode_.md)

# External module: "util/getCountryCode"

## Index

### Functions

* [getCountryCode](_util_getcountrycode_.md#getcountrycode)

## Functions

###  getCountryCode

▸ **getCountryCode**(`input`: string): *O.Option‹string›*

*Defined in [util/getCountryCode.ts:38](https://github.com/shootismoke/common/blob/9e664ce/packages/dataproviders/src/util/getCountryCode.ts#L38)*

Given a country name, gets the ISO 3166-1 Alpha-2 code of the country

**`example`** 
```typescript
getCountryCode('united   States'); // 'US'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | The country name, can contain multiple spaces, dashes... |

**Returns:** *O.Option‹string›*