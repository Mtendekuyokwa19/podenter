"use client";
import { ReactElement, ReactNode } from "react";
import { Users, Ban, UserLock, LucideIcon, SearchIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { IconSvgProps } from "@/types";
import { Card } from "@heroui/card";
import { prisma } from "@/lib/prisma";

class cStats {
  icon: LucideIcon;
  subtitle: string;
  detail: string;
  color: string;
  constructor(
    icon: LucideIcon,
    subtitle: string,
    detail: string,
    color: string,
  ) {
    this.icon = icon;
    this.subtitle = subtitle;
    this.detail = detail;
    this.color = color;
  }
}
let stats: cStats[] = [];

let activeMembers = new cStats(Users, "Active Users", "10", "bg-green-700");
let deniedUsers = new cStats(Ban, "Denied Members", "10", "bg-red-700");
let overDueUsers = new cStats(UserLock, "OverDue Users", "10", "bg-yellow-700");
stats = [activeMembers, deniedUsers, overDueUsers];
export default function dashboard() {
  return (
    <div>
      <Stats />
      <MemberList />
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
          color={stat.color}
        />
      ))}
    </section>
  );
}

type tstat = {
  Icon: LucideIcon;
  subtitle: string;
  detail: string;
  color: string;
};
function Stat({ Icon, subtitle, detail, color }: tstat) {
  return (
    <Card className="gap-3 flex-row justify-center items-center  flex rounded-md p-7">
      <div>
        <span className="flex justify-center">
          <span
            className={`${color} opacity-40 p-12   w-12 h-10   rounded-full`}
          ></span>
          <Icon size={38} className="relative top-7 right-16" />
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg">{detail}+</span>
        <span>{subtitle}</span>
      </div>
    </Card>
  );
}

function MemberList() {
  async function AllMembers() {
    let allMembers = [];
    await prisma.user
      .findMany()
      .then((users) => {
        return users;
      })
      .then(async (users) => {
        let allTimes = [];
        for (let user of users) {
          await prisma.time.findUnique({
            where: {
              userId: user.id,
            },
          });
        }
      });
  }
  return (
    <section className="my-8">
      <Search />
      <div>{allMembers}</div>
    </section>
  );
}

function Member({
  name,
  email,
  phonenumber,
  logintime,
  logout,
}: {
  name: string;
  email: string;
  phonenumber: string;
  logintime: string;
  logout: string;
}) {
  return (
    <Card className="flex-row justify-between my-5 p-6">
      <div>1</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{phonenumber}</div>
      <div>{logintime}</div>
      <div>{logout}</div>
    </Card>
  );
}

function Search() {
  return (
    <Card className="flex-row w-1/2 p-4">
      <input className="w-11/12 bg-transparent" />
      <button>
        <SearchIcon />
      </button>
    </Card>
  );
}
