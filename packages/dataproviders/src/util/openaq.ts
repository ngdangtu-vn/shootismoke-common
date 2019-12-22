import * as t from 'io-ts';

export const attributionsCodec = t.array(
  t.type({
    name: t.string,
    url: t.union([t.string, t.undefined])
  })
);

export const latLngCodec = t.type({
  latitude: t.number,
  longitude: t.number
});

export const pollutantCodec = t.union([
  // Instead of rewriting these, can we use the types and array defined in
  // import { AllPollutants, Pollutant } from '@shootismoke/convert';
  t.literal('co'),
  t.literal('c6h6'),
  t.literal('ox'),
  t.literal('nh3'),
  t.literal('nmhc'),
  t.literal('no'),
  t.literal('nox'),
  t.literal('no2'),
  t.literal('o3'),
  t.literal('pm10'),
  t.literal('pm25'),
  t.literal('so2'),
  t.literal('trs')
]);

export const unitCodec = t.union([
  t.literal('ppb'),
  t.literal('ppm'),
  t.literal('µg/m³')
]);

export const sourceTypeCodec = t.union([
  t.literal('government'),
  t.literal('research'),
  t.literal('other')
]);

// Required fields for OpenAQ data format
const required = t.type({
  city: t.string,
  country: t.string,
  date: t.type({
    local: t.string,
    utc: t.string
  }),
  location: t.string,
  mobile: t.boolean,
  parameter: pollutantCodec,
  sourceName: t.string,
  sourceType: sourceTypeCodec,
  value: t.number,
  unit: unitCodec
});

// Optional fields for OpenAQ data format
const optional = t.partial({
  attribution: attributionsCodec,
  averagingPeriod: t.type({
    unit: t.string,
    value: t.number
  }),
  coordinates: latLngCodec
});

/**
 * @see https://github.com/openaq/openaq-data-format
 */
export const OpenAQCodec = t.intersection([required, optional]);

/**
 * @see https://github.com/openaq/openaq-data-format
 */
export type OpenAQ = t.TypeOf<typeof OpenAQCodec>;