export function unique(array) {
  let uniqueArray = new Set(array)
  return Array.from(uniqueArray);
}

export function log(message) {
  console.log(message)
}

