import { subDays } from 'date-fns';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { openaq } from '../../src/providers/openaq';
import { testProviderE2E } from '../../src/util';

describe('openaq e2e', () => {
	testProviderE2E(openaq, {
		skip: ['fetchByStation'],
	});

	it('should fetch station Coyhaique', (done) => {
		pipe(
			openaq.fetchByStation('Coyhaique'),
			TE.fold(
				(error) => {
					done.fail(error);

					return T.of(void undefined);
				},
				({ results }) => {
					expect(results.length).toBeGreaterThanOrEqual(1);

					done();

					return T.of(void undefined);
				}
			)
		)().catch(console.error);
	});

	it('should fetch correctly with options', (done) => {
		jest.setTimeout(30000); // This request might take a bit longer

		const dateFrom = subDays(new Date(), 9000);
		const dateTo = subDays(new Date(), 7);

		pipe(
			openaq.fetchByStation('FR04002', {
				dateFrom,
				dateTo,
				limit: 2,
				parameter: ['pm25'],
			}),
			TE.fold(
				(error) => {
					done.fail(error);

					return T.of(void undefined);
				},
				({ results }) => {
					expect(results.length).toBeLessThanOrEqual(2);
					expect(
						results.some(({ parameter }) => parameter !== 'pm25')
					).toBe(false);
					results.forEach(({ date: { utc } }) => {
						const measurementDate = new Date(utc);
						expect(
							dateFrom <= measurementDate &&
								measurementDate <= dateTo
						).toBe(true);
					});

					done();

					return T.of(void undefined);
				}
			)
		)().catch(console.error);
	});

	afterAll(() => {
		jest.setTimeout(5000);
	});
});
