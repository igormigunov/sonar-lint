const f1 = () => {
  console.log('f1');
};

const f2 = () => [4, 5, 6];

const getDbValues = async (v = []) => Promise.resolve([...v, 1, 2, 3]);
const getDbValues2 = async (v = []) => Promise.resolve([...v]);
const getDbValues3 = async (v = []) => Promise.resolve([...v]);

const f3 = async () => {
  f1();
  const d = f2();
  await getDbValues(d);
  for (const i of d) {
    getDbValues2(i);
  }
  for(const i of d) {
    await getDbValues2(i);
  }
  await getDbValues3(d);
};

f3();
