const findNWord = (n) => {
  if (!n) return
  return n.match(/(\d+)/)[1]
}

export { findNWord }
