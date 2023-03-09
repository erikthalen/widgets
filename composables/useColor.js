const colors = [
  'lemonchiffon',
  'lightblue',
  'lightpink',
  'lightsalmon',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightcoral',
  'lightgreen',
  'lightgray',
  'lightgrey',
  'lightseagreen',
  'lightskyblue',
]

export default id => {
  return computed(() => colors[(id - 1) % colors.length])
}
