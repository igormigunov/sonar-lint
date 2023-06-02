const f1 = () => {
  console.log('f1');
};

const f2 = () => [4, 5, 6];

const getDbValues = async (v = []) => Promise.resolve([...v, 1, 2, 3]);

const f3 = async () => {
  f1();
  const d = f2();
  await getDbValues(d);
};

f3();
