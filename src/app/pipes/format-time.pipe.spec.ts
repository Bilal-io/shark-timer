import { FormatTimePipe } from './format-time.pipe';

// test cases takes millisenconds and an optional format string
// and returns the formatted string
const testCases = [
  {
    milliseconds: 0,
    format: 'hh:mm:ss',
    output: '00:00:00'
  },
  {
    milliseconds: 1000,
    format: 'hh:mm:ss',
    output: '00:00:01'
  },
  {
    milliseconds: 60000,
    format: 'hh:mm:ss',
    output: '00:01:00'
  },
  {
    milliseconds: 360000,
    format: 'hh:mm:ss',
    output: '00:06:00'
  },
  {
    milliseconds: 360000,
    format: 'mm:ss',
    output: '06:00'
  },
  {
    milliseconds: 360000,
    format: 'hh:mm:ss',
    output: '00:06:00'
  },
  {
    milliseconds: 360000,
    format: 'hh:mm:ss',
    output: '00:06:00'
  },
  {
    milliseconds: 360000,
    format: 'hh:mm:ss',
    output: '00:06:00'
  },
  {
    milliseconds: 360000,
    format: 'hh:mm:ss',
    output: '00:06:00'
  },
  {
    milliseconds: 360000,
    format: 'hh:mm:ss',
    output: '00:06:00'
  },
  {
    milliseconds: 5800000,
    format: 'hh:mm:ss',
    output: '1:36:40'
  },
];

describe('FormatTimePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatTimePipe();
    expect(pipe).toBeTruthy();
  });

  for (const testCase of testCases) {
    it(`should return ${testCase.output} for time: ${testCase.milliseconds} and format: ${testCase.format}`, () => {
      const pipe = new FormatTimePipe();

      expect(pipe.transform(testCase.milliseconds, testCase.format)).toEqual(testCase.output);
    });
  }
});



