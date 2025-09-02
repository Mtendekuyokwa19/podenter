"use client";
import { SiAudiomack, SiYoutube } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiSpotify } from "react-icons/si";
import { SiSoundcloud } from "react-icons/si";
import { subtitle, title } from "@/components/primitives";
import { Button, Card, CardFooter, Image } from "@heroui/react";
export default function AboutPage() {
  const iconsize = 23;
  return (
    <article className="">
      <h2 className="text-3xl my-7 font-bold">
        Trending in <Header classtitle={""}>Malawi</Header>
      </h2>
      <section className="flex flex-col gap-4">
        <Spotify />

        <Youtube />
        <Soundcloud />
        <Audiomack />
      </section>
    </article>
  );
}

function Audiomack() {
  const all_songs = [];
  for (let i = 0; i < 6; i++) {
    all_songs.push(<Song />);
  }
  return (
    <section>
      <TitleCategory classtitle={""} icon={<SiAudiomack size={23} />}>
        Audiomack
      </TitleCategory>
      <section className="flex gap-2">{all_songs}</section>
    </section>
  );
}

function Spotify() {
  const all_songs = [];
  for (let i = 0; i < 6; i++) {
    all_songs.push(<Song />);
  }
  return (
    <section>
      <TitleCategory icon={<SiSpotify size={23} />} classtitle={""}>
        Spotify
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
function Youtube() {
  const all_songs = [];
  for (let i = 0; i < 6; i++) {
    all_songs.push(<Song />);
  }
  return (
    <section>
      <TitleCategory icon={<SiYoutube size={23} />} classtitle={""}>
        Youtube
      </TitleCategory>
      <section className="flex gap-2">{all_songs}</section>
    </section>
  );
}
export function Song() {
  return (
    <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://heroui.com/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md font-bold text-white/80">Wrld of Jay</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Play
        </Button>
      </CardFooter>
    </Card>
  );
}
type Header = {
  classtitle: null | undefined | string;
  children: string;
  icon?: any;
};

export function Header({ classtitle, children }: Header) {
  return (
    <span
      className={`inline-block  
      bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]
      bg-clip-text text-transparent ${classtitle}`}
    >
      {children}
    </span>
  );
}
export function TitleCategory({ children, icon, classtitle = "" }: Header) {
  return (
    <section className="flex justify-between">
      <span className="flex gap-2 justify-center items-center">
        {icon}
        <p className={`text-2xl font-bold my-2 ${classtitle}`}>{children}</p>
      </span>
      <span className="flex gap-2 items-center">
        <p>View all</p>
        <FaArrowRightLong size={17} />
      </span>
    </section>
  );
}
