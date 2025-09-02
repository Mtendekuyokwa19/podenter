"use client";
import "dotenv/config";
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
import React, { useEffect, useState } from "react";
import { TitleCategory } from "../categories/page";
import { FaSpotify } from "react-icons/fa6";

export default function SpotifyPage() {
  return (
    <div className="w-full">
      <TitleCategory classtitle={""} icon={<FaSpotify size={23} />}>
        Top On spotify Malawi
      </TitleCategory>
      <Spotify />
    </div>
  );
}

export function Spotify() {
  const [all_songs, setall_songs] = useState<Tracklist[]>();
  useEffect(() => {
    let all_songlist: Tracklist[] = [];
    const alltracks = curateTracks().then((results) => {
      results?.forEach((song: Song) => {
        getTrackDetails(song.track.id).then((result: Tracklist) => {
          all_songlist.push(result);
          setall_songs((all_songs) => all_songlist);
        });
      });
    });
  }, [0]);
  let num = 1;
  return (
    <section className="w-9/12 flex flex-col gap-2">
      {all_songs?.map((song) => (
        <SongTab
          title={song.name}
          album={song.album.name}
          artist={song.artists[0].name}
          image={song.album.images[0].url}
          pos={num++}
          key={num++}
        />
      ))}
    </section>
  );
}
type songtab = {
  image: string;
  title: string;
  album: string;
  artist: string;
  pos: number;
};
export function SongTab({ image, title, album, artist, pos }: songtab) {
  return (
    <Card className="flex justify-between flex-row ">
      <div className="flex">
        <CardHeader className="w-1/3">
          <Image
            alt="Card background"
            className="object-cover w-full rounded-xl"
            src={image}
            width={150}
            height={150}
          />
        </CardHeader>

        <CardBody>
          <p className="font-bold text-2xl">{title}</p>
          <p className="">
            <span className="text-slate-400">Artist:</span>
            {artist}
          </p>
          <p>
            <span className="opacity-95"> Album:</span>
            <span>{album}</span>
          </p>

          <Chip color="secondary">Amapiano</Chip>
        </CardBody>
      </div>
      <section>
        <h3 className="text-8xl font-bold p-4 text-slate-400">{pos}</h3>
      </section>
    </Card>
  );
}

async function spotifytoparitsts() {}
export async function fetchWebApi(
  endpoint: string,
  method: string,
  body?: string,
) {
  const token = process.env.TOKEN;

  const res = await fetch(`${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}
async function getTopTracks() {
  return await fetchWebApi(
    "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n",
    "GET",
  );
}

async function getTrackDetails(id: string) {
  return await fetchWebApi(`https://api.spotify.com/v1/tracks/${id}`, "GET");
}
async function curateTracks() {
  let trackslist: Tracklist[] = [];
  const tracks = await getTopTracks();
  const alltracks = tracks.tracks.items as Array<Song>;
  let all_songslist: Tracklist[] = [];

  alltracks.forEach((song: Song) => {
    getTrackDetails(song.track.id).then((result: Tracklist) => {
      all_songslist.push(result);
    });
  });
  return alltracks;
}

type Song = {
  added_at: string;
  added_by: {
    external_urls: Object;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: false;
  primary_color: null;
  track: {
    preview_url: null;
    available_markets: [];
    explicit: false;
    type: string;
    episode: false;
    track: true;
    album: Object;
    artists: [];
    disc_number: 1;
    track_number: 2;
    duration_ms: 358760;
    external_ids: Object;
    external_urls: Object;
    href: string;
    id: string;
    name: string;
    popularity: 0;
    uri: string;
    is_local: false;
  };
};
type Tracklist = {
  album: {
    album_type: string;
    total_tracks: 9;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: [
      {
        url: string;
        height: 300;
        width: 300;
      },
    ];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
      reason: string;
    };
    type: string;
    uri: string;
    artists: [
      {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      },
    ];
  };
  artists: [
    {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    },
  ];
  available_markets: string[];
  disc_number: 0;
  duration_ms: 0;
  explicit: false;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: false;
  linked_from: {};
  restrictions: {
    reason: string;
  };
  name: string;
  popularity: 0;
  preview_url: string;
  track_number: 0;
  type: string;
  uri: string;
  is_local: false;
};
