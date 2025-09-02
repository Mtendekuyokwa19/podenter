"use client";
import { SiAudiomack, SiYoutube } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { PiGraph } from "react-icons/pi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiSpotify } from "react-icons/si";
import { SiSoundcloud } from "react-icons/si";
import { subtitle, title } from "@/components/primitives";
import { Button, Card, CardFooter, Image } from "@heroui/react";
import { Header, Song, TitleCategory } from "../categories/page";
export default function AboutPage() {
  const iconsize = 23;
  return (
    <article className="">
      <h2 className="text-3xl my-7 font-bold">
        Trending on all <Header classtitle={""}>Platforms</Header>
      </h2>
      <section className="flex flex-col gap-4">
        <Top10OnAll />

        <Top50OnAll />
        <Top100OnAll />
      </section>
    </article>
  );
}

function Top50OnAll() {
  const all_songs = [];
  for (let i = 0; i < 5; i++) {
    all_songs.push(<Song />);
  }
  return (
    <section>
      <TitleCategory classtitle={""} icon={<GoGraph size={23} />}>
        Trending 50
      </TitleCategory>
      <section className="flex gap-2">{all_songs}</section>
    </section>
  );
}

function Top10OnAll() {
  const all_songs = [];
  for (let i = 0; i < 4; i++) {
    all_songs.push(<Song />);
  }
  return (
    <section>
      <TitleCategory icon={<MdOutlineAutoGraph size={23} />} classtitle={""}>
        Trending Top 10
      </TitleCategory>
      <section className="flex gap-2">{all_songs}</section>
    </section>
  );
}

function Soundcloud() {
  const all_songs = [];
  for (let i = 0; i < 6; i++) {
    all_songs.push(<Song />);
  }
  return (
    <section>
      <TitleCategory icon={<SiSoundcloud size={23} />} classtitle={""}>
        Soundcloud
      </TitleCategory>
      <section className="flex gap-2">{all_songs}</section>
    </section>
  );
}
function Top100OnAll() {
  const all_songs = [];
  for (let i = 0; i < 6; i++) {
    all_songs.push(<Song />);
  }
  return (
    <section>
      <TitleCategory icon={<PiGraph size={23} />} classtitle={""}>
        Trending Top 100
      </TitleCategory>
      <section className="flex gap-2">{all_songs}</section>
    </section>
  );
}
