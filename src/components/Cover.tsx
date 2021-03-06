type Props = {
  name: string
  image?: string
  onUpload?: () => void
  onRename?: () => void
}
export const Cover = (props: Props) => {
  const { image, name, onUpload, onRename } = props
  return (
    <div className="relative">
      <img
        src={image || `/assets/images/subdao-cover.svg`}
        alt=""
        className="rounded-[16px] w-[275px] h-[275px] object-cover"
      />
      <div className=" absolute w-[275px] h-[10px] top-0 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]" />
      <div className="text-white-light text-[24px] absolute top-[24px] left-[24px] drop-shadow-xl">
        {name}
      </div>
    </div>
  )
}
