// [Typescript 5.0 and the new const modifier on type parameters](https://xebia.com/blog/typescript-5-0-and-the-new-const-modifier-on-type-parameters/)
// [const modifier on type parameters](https://github.com/microsoft/TypeScript/pull/51865)

function parseNames<const T extends { name: string; yearOfBirth: number }>(names: T[]) {
  const getName = (name: T['name']) => names.find((n) => n.name && n.name === name)?.yearOfBirth;
  return getName;
}

const getData = parseNames([
  {
    name: 'Paul',
    yearOfBirth: 1942,
  },
  {
    name: 'Lennon',
    yearOfBirth: 1940,
  },
]);

const year = getData('Paul');
