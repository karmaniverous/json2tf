import { expect } from 'chai';

import { json2tf } from '.';

describe('json', function () {
  it('should pass', function () {
    const json = {
      a: 1,
      b: 'two',
      c: {
        x: null,
        y: 'eight',
        z: [42, 69, 'one million dollars'],
      },
    };

    const tf = json2tf(json);

    console.log(tf);

    expect(tf).to.equal(`{
    a = 1
    b = "two"
    c = {
        x = null
        y = "eight"
        z = [
            42,
            69,
            "one million dollars"
        ]
    }
}`);
  });
});
