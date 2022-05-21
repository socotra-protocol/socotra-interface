export const string2Bin = (str: string) => {
  var result = []
  for (var i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i).toString(2))
  }
  return result
}

export const hexToBytes = (hex: string) => {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16))
  return bytes
}

// You almost certainly want UTF-8, which is
// now natively supported:
export const stringToUTF8Bytes = (s: string) => {
  return new TextEncoder().encode(s)
}
