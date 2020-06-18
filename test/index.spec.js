const { expect } = require('chai');
const { banToRaw, rawToBan } = require('../dist/banano-unit-converter');

const powerZero = { ban: '1', raw: '100000000000000000000000000000' };

const powerNegative = [
	{ ban: '0.00000000000000000000000000001', raw: '1' },
	{ ban: '0.0000000000000000000000000001', raw: '10' },
	{ ban: '0.000000000000000000000000001', raw: '100' },
	{ ban: '0.00000000000000000000000001', raw: '1000' },
	{ ban: '0.0000000000000000000000001', raw: '10000' },
	{ ban: '0.000000000000000000000001', raw: '100000' },
	{ ban: '0.00000000000000000000001', raw: '1000000' },
	{ ban: '0.0000000000000000000001', raw: '10000000' },
	{ ban: '0.000000000000000000001', raw: '100000000' },
	{ ban: '0.00000000000000000001', raw: '1000000000' },
	{ ban: '0.0000000000000000001', raw: '10000000000' },
	{ ban: '0.000000000000000001', raw: '100000000000' },
	{ ban: '0.00000000000000001', raw: '1000000000000' },
	{ ban: '0.0000000000000001', raw: '10000000000000' },
	{ ban: '0.000000000000001', raw: '100000000000000' },
	{ ban: '0.00000000000001', raw: '1000000000000000' },
	{ ban: '0.0000000000001', raw: '10000000000000000' },
	{ ban: '0.000000000001', raw: '100000000000000000' },
	{ ban: '0.00000000001', raw: '1000000000000000000' },
	{ ban: '0.0000000001', raw: '10000000000000000000' },
	{ ban: '0.000000001', raw: '100000000000000000000' },
	{ ban: '0.00000001', raw: '1000000000000000000000' },
	{ ban: '0.0000001', raw: '10000000000000000000000' },
	{ ban: '0.000001', raw: '100000000000000000000000' },
	{ ban: '0.00001', raw: '1000000000000000000000000' },
	{ ban: '0.0001', raw: '10000000000000000000000000' },
	{ ban: '0.001', raw: '100000000000000000000000000' },
	{ ban: '0.01', raw: '1000000000000000000000000000' },
	{ ban: '0.1', raw: '10000000000000000000000000000' },
];

const powerPositive = [
	{ ban: '10', raw: '1000000000000000000000000000000' },
	{ ban: '100', raw: '10000000000000000000000000000000' },
	{ ban: '1000', raw: '100000000000000000000000000000000' },
	{ ban: '10000', raw: '1000000000000000000000000000000000' },
	{ ban: '100000', raw: '10000000000000000000000000000000000' },
	{ ban: '1000000', raw: '100000000000000000000000000000000000' },
	{ ban: '10000000', raw: '1000000000000000000000000000000000000' },
	{ ban: '100000000', raw: '10000000000000000000000000000000000000' },
];

const assorted = [
	{ ban: '0.123456789', raw: '12345678900000000000000000000' },
	{ ban: '1.23456789', raw: '123456789000000000000000000000' },
	{ ban: '12.3456789', raw: '1234567890000000000000000000000' },
	{ ban: '123.456789', raw: '12345678900000000000000000000000' },
	{ ban: '1234.56789', raw: '123456789000000000000000000000000' },
	{ ban: '12345.6789', raw: '1234567890000000000000000000000000' },
	{ ban: '123456.789', raw: '12345678900000000000000000000000000' },
	{ ban: '1234567.89', raw: '123456789000000000000000000000000000' },
	{ ban: '12345678.9', raw: '1234567890000000000000000000000000000' },
	{ ban: '123456789', raw: '12345678900000000000000000000000000000' },
];

describe('banToRaw', () => {
	it('should throw error if amount is not provided', () => {
		expect(() => banToRaw()).to.throw(Error);
	});

	it('should throw error if amount is wrong type', () => {
		expect(() => banToRaw(null)).to.throw(TypeError);
	});

	it('should throw error if amount is invalid', () => {
		expect(() => banToRaw('zero')).to.throw(Error);
		expect(() => banToRaw('0.0.0.0')).to.throw(Error);
	});

	it('should throw error if amount is negative', () => {
		expect(() => banToRaw(-1)).to.throw(Error);
		expect(() => banToRaw('-1')).to.throw(Error);
	});

	it('should throw error if amount is too small', () => {
		expect(() => banToRaw('0.00000000000000000000000000001')).to.not.throw(Error);
		expect(() => banToRaw('0.000000000000000000000000000001')).to.throw(Error);
	});

	it('should throw error if amount is too large', () => {
		expect(() => banToRaw('3402823669.20938463463374607431768211455')).to.not.throw(Error);
		expect(() => banToRaw('3402823669.20938463463374607431768211456')).to.throw(Error);
	});

	it('should convert 10^0', () => {
		expect(banToRaw(powerZero.ban)).to.equal(powerZero.raw);
	});

	it('should convert 10^-n', () => {
		powerNegative.forEach((test) => {
			expect(banToRaw(test.ban)).to.equal(test.raw);
		});
	});

	it('should convert 10^n', () => {
		powerPositive.forEach((test) => {
			expect(banToRaw(test.ban)).to.equal(test.raw);
		});
	});

	it('should convert n', () => {
		assorted.forEach((test) => {
			expect(banToRaw(test.ban)).to.equal(test.raw);
		});
	});
});

describe('rawToban', () => {
	it('should throw error if amount is not provided', () => {
		expect(() => rawToBan()).to.throw(Error);
	});

	it('should throw error if amount is wrong type', () => {
		expect(() => rawToBan(null)).to.throw(TypeError);
	});

	it('should throw error if amount is invalid', () => {
		expect(() => rawToBan('zero')).to.throw(Error);
		expect(() => rawToBan('0.0.0.0')).to.throw(Error);
	});

	it('should throw error if amount is negative', () => {
		expect(() => rawToBan(-1)).to.throw(Error);
		expect(() => rawToBan('-1')).to.throw(Error);
	});

	it('should throw error if amount is too small', () => {
		expect(() => rawToBan('1')).to.not.throw(Error);
		expect(() => rawToBan('.1')).to.throw(Error);
	});

	it('should throw error if amount is too large', () => {
		expect(() => rawToBan('340282366920938463463374607431768211455')).to.not.throw(Error);
		expect(() => rawToBan('340282366920938463463374607431768211456')).to.throw(Error);
	});

	it('should convert 10^0', () => {
		expect(rawToBan(powerZero.raw)).to.equal(powerZero.ban);
	});

	it('should convert 10^-n', () => {
		powerNegative.forEach((test) => {
			expect(rawToBan(test.raw)).to.equal(test.ban);
		});
	});

	it('should convert 10^n', () => {
		powerPositive.forEach((test) => {
			expect(rawToBan(test.raw)).to.equal(test.ban);
		});
	});

	it('should convert n', () => {
		assorted.forEach((test) => {
			expect(rawToBan(test.raw)).to.equal(test.ban);
		});
	});
});
