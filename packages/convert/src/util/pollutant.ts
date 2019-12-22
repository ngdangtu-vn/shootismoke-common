/**
 * All the pollutants tracked by @shootismoke
 */
export type Pollutant =
  | 'co'
  | 'c6h6'
  | 'ox'
  | 'nh3'
  | 'nmhc'
  | 'no'
  | 'nox'
  | 'no2'
  | 'o3'
  | 'pm10'
  | 'pm25'
  | 'so2'
  | 'trs';

// Pollutant concentration units
export const ppb = 'ppb';
export const ppm = 'ppm';
export const ugm3 = 'µg/m³';

export type Unit = typeof ppb | typeof ppm | typeof ugm3;

/**
 * Metadata for each pollutant
 */
export interface PollutantMeta {
  id: Pollutant;
  name: string;
  description: string;
  preferredUnit: Unit;
}

/**
 * All the pollutants tracked by @shootismoke
 */
export const AllPollutants: Record<Pollutant, PollutantMeta> = {
  co: {
    id: 'co',
    name: 'CO',
    description: 'Carbon monoxide',
    preferredUnit: ppb
  },
  c6h6: {
    id: 'c6h6',
    name: 'C6H6',
    description: 'Benzene',
    preferredUnit: ugm3
  },
  ox: {
    id: 'ox',
    name: 'Ox',
    description: 'Photochemical oxidants',
    preferredUnit: ppb
  },
  o3: {
    id: 'o3',
    name: 'O3',
    description: 'Ozone',
    preferredUnit: ppb
  },
  nh3: {
    id: 'nh3',
    name: 'NH3',
    description: 'Ammonia',
    preferredUnit: ppb
  },
  nmhc: {
    id: 'nmhc',
    name: 'NMHC',
    description: 'Non-methane hydrocarbons',
    preferredUnit: ppb
  },
  no: {
    id: 'no',
    name: 'NO',
    description: 'Nitrogen monoxide',
    preferredUnit: ppb
  },
  nox: {
    id: 'nox',
    name: 'NOx',
    description: 'Nitrogen oxides',
    preferredUnit: ppb
  },
  no2: {
    id: 'no2',
    name: 'NO2',
    description: 'Nitrogen dioxide',
    preferredUnit: ppb
  },
  pm25: {
    id: 'pm25',
    name: 'PM25',
    description: 'Fine particulate matter (<2.5µm)',
    preferredUnit: ugm3
  },
  pm10: {
    id: 'pm10',
    name: 'PM10',
    description: 'Inhalable particulate matter (<10µm)',
    preferredUnit: ugm3
  },
  so2: {
    id: 'so2',
    name: 'SO2',
    description: 'Sulfur dioxide',
    preferredUnit: ppb
  },
  trs: {
    id: 'trs',
    name: 'TRS',
    description: 'Total reduced sulfur',
    preferredUnit: ugm3
  }
};

/**
 * Get metadata (code, name, unit) for a pollutant
 *
 * @param pollutant - The pollutant to get the metadata from
 */
export function getMetadata(pollutant: Pollutant): PollutantMeta {
  return AllPollutants[pollutant];
}

/**
 * Check if the input pollutant is a recognized pollutant which we can convert
 * AQI to/from raw concentrations
 *
 * @param pollutant - The pollutant to test
 */
export function isPollutant(pollutant: string): pollutant is Pollutant {
  return Object.keys(AllPollutants).includes(pollutant as Pollutant);
}