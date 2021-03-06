import { formatFixed } from "@ethersproject/bignumber"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useERC20 } from "../../hooks/contracts/useERC20"
import { truncateAddress } from "../../utils/wallet"
type Props = {
  onClick?: () => void
  item?: any
}
export const Card = (props: Props) => {
  const { onClick, item } = props
  const { symbol } = useERC20()

  const [_symbol, setSymbol] = useState<any>("---")

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const __symbol = await symbol(item?.parentToken)
    console.log(__symbol)
    setSymbol(__symbol)
  }
  return (
    <div
      className="border border-white-dark rounded-[32px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-[8px] items-center p-[32px]">
        <div className="h-[64px] w-[64px] bg-primary-light rounded-full" />
        <div>
          <div className="text-[24px] font-medium text-secondary-dark ">
            {item?.name}
          </div>
          <div className="text-[16px] font-medium text-secondary">
            {item ? truncateAddress(item.id) : "0x22....222"}{" "}
            <FontAwesomeIcon icon={faCopy} className="text-secondary" />
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-[8px] items-center p-[32px]">
        <div className="text-[16px] font-medium text-secondary-dark">
          Main DAO Token
        </div>
        <div className="flex gap-[8px] items-center">
          <div className="text-[16px] font-medium text-secondary text-right">
            {formatFixed(item?.parentAmount, 18)} {_symbol}
          </div>
          <div className="h-[40px] w-[40px] bg-primary-light rounded-full" />
        </div>
      </div>
    </div>
  )
}
