import Mock from 'mockjs'
const Random = Mock.Random

function buildList(count, parentId) {
  const list = []
  let id = 1
  while (id <= count) {
    const data = {
      id: parentId ? parentId + '-' + id : id,
      name: Random.cname(),
      age: Random.integer(10, 100),
      idCard: Random.natural(18),
      title: Random.integer(0, 2),
      desc: Random.cparagraph(3),
      date: Random.date('yyyy-MM-dd'),
      hasChildren: Random.integer(1, 5) % 2 == 0,
      address: Random.county(true)
    }
    list.push(data)
    id++
  }
  return list
}

export const getUserList = buildList
