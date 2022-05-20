import { parseFixed } from "@ethersproject/bignumber"
import { useWeb3React } from "@web3-react/core"
import { ethers } from "ethers"
import SocotraBranchManagerABI from "../../abis/SocotraBranchManager.json"
import { useERC20 } from "./useERC20"

export const useSocotraBranchManager = () => {
  const { library, active, chainId } = useWeb3React()
  const { approve } = useERC20()

  const getContract = (address: string) => {
    if (!active || !chainId) return

    const provider = new ethers.providers.Web3Provider(library.provider)
    const signer = provider.getSigner()

    const SocotraFactory = new ethers.Contract(
      address,
      SocotraBranchManagerABI,
      signer
    )
    return SocotraFactory
  }

  const addMemberAllocation = async (
    managerAddr: string,
    memberAddr: string,
    voteAmount: string,
    rewardAmount: string,
    decimal = 18
  ) => {
    if (!active || !chainId) return

    const contract = await getContract(managerAddr)

    if (contract) {
      const txn = await contract.addMemberAllocation(
        memberAddr,
        parseFixed(voteAmount, decimal).toString(),
        parseFixed(rewardAmount, decimal).toString()
      )
      await txn.wait()
      console.log(txn.hash)
    }
  }

  const addBatchAllocation = async (
    managerAddr: string,
    allocate: {
      memberAddr: string
      voteAmount: string
      rewardAmount: string
    }[],
    decimal = 18
  ) => {
    if (!active || !chainId) return

    const contract = await getContract(managerAddr)

    if (contract) {
      const data = allocate.map((item) => {
        return {
          ...item,
          voteAmount: parseFixed(item.voteAmount, decimal).toString(),
          rewardAmount: parseFixed(item.rewardAmount, decimal).toString(),
        }
      })
      const txn = await contract.addBatchAllocation(data)
      await txn.wait()
      console.log(txn.hash)
    }
  }

  const memberClaimToken = async (
    managerAddr: string,
    amount: string,
    decimal = 18
  ) => {
    if (!active || !chainId) return

    const contract = await getContract(managerAddr)

    if (contract) {
      const txn = await contract.memberClaimToken(
        parseFixed(amount, decimal).toString()
      )
      await txn.wait()
      console.log(txn.hash)
    }
  }
  return { addMemberAllocation, addBatchAllocation, memberClaimToken }
}