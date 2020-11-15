const findNWord = (n) => {
  if (!n) return
  return n.match(/(\d+)/)[1]
}

const getBaseUrl = () => `${process.env.REACT_APP_API_URL}`

export { findNWord, getBaseUrl }
