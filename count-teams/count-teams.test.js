import countTeams from './count-teams';

test('test1', () => {
  const num = 6;
  const skills = [12, 4, 6, 13, 5, 10];
  const minAssociates = 3;
  const minLevel = 4;
  const maxLevel = 10;
  const expected = 5;
  const result = countTeams(num, skills, minAssociates, minLevel, maxLevel);
  expect(result).toBe(expected);
});
