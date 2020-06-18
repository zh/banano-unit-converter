import Big from 'big.js';

// Configure Big to never show exponential notation.
Big.NE = -30;
Big.PE = 39;

/** The amount of raw in one ban. */
const RAW_IN_BAN = new Big('100000000000000000000000000000');

/** The amount of ban in one raw. */
const BAN_IN_RAW = new Big('0.00000000000000000000000000001');

/** The minimum raw amount. */
const RAW_MIN_AMOUNT = new Big('1');

/** The maximum raw amount. */
const RAW_MAX_AMOUNT = new Big('340282366920938463463374607431768211455');

/** The minimum ban amount. */
const BAN_MIN_AMOUNT = BAN_IN_RAW;

/** The maximum ban amount. */
const BAN_MAX_AMOUNT = new Big(RAW_MAX_AMOUNT).times(BAN_IN_RAW);

/**
 * Converts ban amount to raw amount.
 *
 * @param {number | string} ban The ban amount.
 *
 * @throws {Error} The ban amount must be defined.
 * @throws {TypeError} The ban amount must be a string or a number.
 * @throws {Error} The ban amount is invalid.
 * @throws {Error} The ban amount must not be negative.
 * @throws {Error} The ban amount is too small.
 * @throws {Error} The ban amount is too large.
 *
 * @returns {string} The raw amount.
 */
export function banToRaw(ban: number | string): string {
	if (ban === undefined) {
		throw Error('The ban amount must be defined.');
	}

	if (typeof ban !== 'string' && typeof ban !== 'number') {
		throw TypeError('The ban amount must be a string or a number.');
	}

	let banBig: Big;

	try {
		banBig = new Big(ban);
	} catch (error) {
		throw Error('The ban amount is invalid.');
	}

	if (banBig.lt(0)) {
		throw Error('The ban amount must not be negative.');
	}

	if (banBig.lt(BAN_MIN_AMOUNT)) {
		throw Error('The ban amount is too small.');
	}

	if (banBig.gt(BAN_MAX_AMOUNT)) {
		throw Error('The ban amount is too large.');
	}

	return banBig.times(RAW_IN_BAN).toString();
}

/**
 * Converts raw amount to ban amount.
 *
 * @param {number | string} raw The raw amount.
 *
 * @throws {Error} The raw amount must be defined.
 * @throws {TypeError} The raw amount must be a string or a number.
 * @throws {Error} The raw amount is invalid.
 * @throws {Error} The raw amount must not be negative.
 * @throws {Error} The raw amount is too small.
 * @throws {Error} The raw amount is too large.
 *
 * @returns {string} The ban amount.
 */
export function rawToBan(raw: number | string): string {
	if (raw === undefined) {
		throw Error('The raw amount must be defined.');
	}

	if (typeof raw !== 'string' && typeof raw !== 'number') {
		throw TypeError('The raw amount must be a string or a number.');
	}

	let rawBig: Big;

	try {
		rawBig = new Big(raw);
	} catch (error) {
		throw Error('The raw amount is invalid.');
	}

	if (rawBig.lt(0)) {
		throw Error('The raw amount must not be negative.');
	}

	if (rawBig.lt(RAW_MIN_AMOUNT)) {
		throw Error('The raw amount is too small.');
	}

	if (rawBig.gt(RAW_MAX_AMOUNT)) {
		throw Error('The raw amount is too large.');
	}

	return rawBig.times(BAN_IN_RAW).toString();
}
