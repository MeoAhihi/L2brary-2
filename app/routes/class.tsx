import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "~/components/ui/breadcrumb";
import type { Route } from "../+types/root";
import { Link, Outlet, type LoaderFunctionArgs } from "react-router";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu"

interface ClassLoaderData {
  id: string, name: string, day: string, startTime: string, endTime: string, type: string
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params
  return {
    id,
    className: "New Member Onboarding",
    day: "Monday",
    startTime: "08:00:00",
    endTime: "11:30:00",
    type: "Offline"
  }
}

export default function Class({ loaderData }: any) {
  const { id, className, day, startTime, endTime, type } = loaderData
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

            <div className="px-4 lg:px-6">
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Class</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{className}</h1>
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <svg className="mr-1.5 size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
                      </svg>
                      {type}
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <svg className="mr-1.5 size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clip-rule="evenodd" />
                      </svg>
                      {day} {startTime}-{endTime}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="hidden sm:block">
                    <Button>
                      Session
                    </Button>
                  </span>
                  <span className="ml-3 hidden sm:block">
                    <Button variant="outline">
                      Edit
                    </Button>
                  </span>
                </div>
              </div>
            </div>

            <div className="px-4 lg:px-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="overview">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Overview
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="stamp">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Stamps
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Outlet />
            </div>
          </div>
        </div>
      </div >
    </>

  );

}