import { ethers } from "ethers"
const provider = ethers.getDefaultProvider("homestead")

export const useENS = () => {
  const isValidAddress = (address: string) => {
    try {
      // getAdress methods trow an error when the passed address is incorrect
      ethers.utils.getAddress(address)
      return true
    } catch (e) {
      return false
    }
  }
  const getAddress = async (ensName: string) => {
    try {
      const resolvedAddress = isValidAddress(ensName)
        ? ensName
        : await provider.resolveName(ensName)

      console.log({ resolvedAddress })

      if (resolvedAddress) return resolvedAddress
      return null
    } catch (e) {
      return null
    }
  }
  const getENSName = async (address: string) => {
    return provider
      .lookupAddress(address.toLocaleLowerCase())
      .then((resolvedName) => {
        return resolvedName ?? address
      })
  }

  const isENSName = (text: string) => {
    const dotETH = text.indexOf(".eth")
    return dotETH === -1 ? false : true
  }

  return { getAddress, getENSName, isENSName, isValidAddress }
}
