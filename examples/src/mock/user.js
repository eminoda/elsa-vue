import Mock from 'mockjs';
const Random = Mock.Random;

function buildList(count, hasChildren) {
  const list = [];
  let id = 1;
  while (id <= count) {
    const data = {
      id: id,
      name: Random.cname(),
      age: Random.integer(10, 100),
      idCard: Random.natural(18),
      desc: Random.cparagraph(3),
      date: Random.date('yyyy-MM-dd'),
      hasChildren: count == 1 && hasChildren,
    };
    list.push(data);
    id++;
  }
  return list;
}

export const getUserList = buildList;
