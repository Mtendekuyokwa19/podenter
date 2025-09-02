"use client";
import { title } from "@/components/primitives";
import {
  Card,
  CardBody,
  Image,
  Button,
  Slider,
  CardHeader,
  Chip,
} from "@heroui/react";
import React from "react";
import { TitleCategory } from "../categories/page";
import { FaSpotify, FaYoutube } from "react-icons/fa6";

export default function YoutubePage() {
  return (
    <div className="w-full">
      <TitleCategory classtitle={""} icon={<FaYoutube size={23} />}>
        Top On Youtube Malawi
      </TitleCategory>
      <Spotify />
    </div>
  );
}

export function Spotify() {
  const all_songs = [];
  for (let i = 0; i < 10; i++) {
    all_songs.push(<SongTab />);
  }
  return <section className="w-9/12 flex flex-col gap-2">{all_songs}</section>;
}

export function SongTab() {
  return (
    <Card className="flex justify-between flex-row ">
      <div className="flex">
        <CardHeader className="w-1/3">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardHeader>

        <CardBody>
          <p className="font-bold text-2xl">Sondela</p>
          <p className="">
            <span className="text-slate-400">Artist:</span>Kabza de small, aymos
          </p>
          <p>
            <span className="opacity-95"> Album:</span>
            <span>KOA II</span>
          </p>

          <Chip color="secondary">Amapiano</Chip>
        </CardBody>
      </div>
      <section>
        <h3 className="text-8xl font-bold p-4 text-slate-400">12</h3>
      </section>
    </Card>
  );
}
