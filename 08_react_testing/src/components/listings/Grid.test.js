import data from '../../data/courses.json';

const numItems = data.length;

describe('Number test', () => {
  test('number of items = 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items to be greate than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

describe('String test', () => {
  const dataTest = data[0].title;

  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});

describe('Arrays and objects', () => {
  const data2 = ['react Native', 'React'];

  test('The list of courses contains React Native and React', () => {
    expect(['React Native', 'React']).toEqual(expect.arrayContaining(data2));
  });

  test('The first course to have a property title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to hav a property title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
