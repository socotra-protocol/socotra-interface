import { useNavigate } from "react-router"
import { Layout } from "../../../core/Layout"
import { Card } from "../Card"

export const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className="py-[48px] max-w-7xl mx-auto">
        <div className="text-[36px] font-semibold text-secondary-dark mb-[32px]">
          Owner SubDAOs
        </div>
        <div className="grid grid-cols-3 gap-[16px]">
          {Array.from({ length: 3 }).map((_, idx: number) => (
            <Card
              key={`card-${idx}`}
              onClick={() =>
                navigate(
                  "/dashboard/0x7f06a48710fbe5ffb27972ff1f8e008cf54bc204"
                )
              }
            />
          ))}
        </div>
        <div className="text-[36px] font-semibold text-secondary-dark my-[32px]">
          Memberships
        </div>
        <div className="grid grid-cols-3 gap-[16px]">
          {Array.from({ length: 9 }).map((_, idx: number) => (
            <Card
              onClick={() =>
                navigate(
                  "/dashboard/0x7f06a48710fbe5ffb27972ff1f8e008cf54bc204"
                )
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
