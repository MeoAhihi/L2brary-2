import { SectionCards } from "~/components/section-cards";
import type { Route } from "../+types/root";
import { Separator } from "~/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

export async function loader() {
  const cardData = [
    {
      title: "Active Users",
      value: "110",
      isTrendingUp: true,
      trendPercentage: "+12.5%",
      footerText: "Trending up this month",
      footerSubText: "Visitors for the last 1 months",
    },
    {
      title: "New Customers",
      value: "1,234",
      isTrendingUp: false,
      trendPercentage: "-20%",
      footerText: "Down 20% this period",
      footerSubText: "Acquisition needs attention",
    },
    {
      title: "Active Accounts",
      value: "45,678",
      isTrendingUp: true,
      trendPercentage: "+12.5%",
      footerText: "Strong user retention",
      footerSubText: "Engagement exceed targets",
    },
    {
      title: "Growth Rate",
      value: "4.5%",
      isTrendingUp: true,
      trendPercentage: "+4.5%",
      footerText: "Steady performance increase",
      footerSubText: "Meets growth projections",
    },
  ]
  const classMonitors = [
    {
      name: "John Doe",
      avatar: "https://picsum.photos/200"
    },
    {
      name: "Jane Doe",
      avatar: "https://picsum.photos/200"
    },
    {
      name: "John Doe",
      avatar: "https://picsum.photos/200"
    },
    {
      name: "Jane Doe",
      avatar: "https://picsum.photos/200"
    },
  ]

  return { cardData, classMonitors };
}

export default function ClassOverview({ loaderData }: { loaderData: any }) {
  const { cardData, classMonitors } = loaderData;
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards cardData={cardData} />
          {/* <Separator />
          <div className="px-4 lg:px-6">
            <h2 className="text-2xl font-bold">Class Monitors</h2>
            <div className="flex flex-col gap-4 md:gap-6">
              {classMonitors.map((monitor: any, index: any) => (
                <div key={index} className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={monitor.avatar} />
                    <AvatarFallback>{monitor.name}</AvatarFallback>
                  </Avatar>
                  <span>{monitor.name}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
