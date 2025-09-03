"use client";
import { ReactElement, ReactNode } from "react";
import { Users, Ban, UserLock, LucideIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { IconSvgProps } from "@/types";

class cStats {
  icon: LucideIcon;
  subtitle: string;
  detail: string;
  constructor(icon: LucideIcon, subtitle: string, detail: string) {
    this.icon = icon;
    this.subtitle = subtitle;
    this.detail = detail;
  }
}
let stats: cStats[] = [];

let activeMembers = new cStats(Users, "Active Users", "10");
let deniedUsers = new cStats(Ban, "Denied Members", "10");
let overDueUsers = new cStats(UserLock, "OverDue Users", "10");
stats = [activeMembers, deniedUsers, overDueUsers];
export default function dashboard() {
  return (
    <div>
      <Stats />
    </div>
  );
}
function Stats() {
  return (
    <section className="flex gap-2">
      {stats.map((stat) => (
        <Stat
          key={stat.subtitle}
          Icon={stat.icon}
          subtitle={stat.subtitle}
          detail={stat.detail}
        />
      ))}
    </section>
  );
}

type tstat = {
  Icon: LucideIcon;
  subtitle: string;
  detail: string;
};
function Stat({ Icon, subtitle, detail }: tstat) {
  return (
    <section className="bg-gray-700 gap-3 justify-center items-center  flex rounded-md p-7">
      <div>
        <span className="bg-emerald-600">
          <span className="bg-emerald-700 opacity-70 w-32 h-32 p-7 rounded-full"></span>
          <Icon size={33} />
        </span>
      </div>
      <div className="flex flex-col">
        <span>{detail}+</span>
        <span>{subtitle}</span>
      </div>
    </section>
  );
}
