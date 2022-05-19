import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ProfileMemberCard = () => {
  return (
    <>
      <div className="h-[64px] w-[64px] bg-primary-dark rounded-full" />
      <div className="flex flex-col">
        <div className=" text-secondary-dark text-[16px]">Tanawat</div>
        <div className=" text-secondary text-[16px]">
          tanawat.eth{" "}
          <FontAwesomeIcon icon={faCopy} className="text-white-dark" />
        </div>
      </div>
    </>
  )
}
export const MemberCard = () => {
  return (
    <div className="border border-white-dark p-[24px] flex gap-[16px] items-center rounded-[16px]">
      <ProfileMemberCard />
    </div>
  )
}