"use client";
import { title } from "@/components/primitives";

import from "scrape-it"
import { SiAudiomack } from "react-icons/si";
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
import { FaSpotify } from "react-icons/fa6";

export default function Audiomack() {
  return (
    <div className="w-full">
      <TitleCategory classtitle={""} icon={<SiAudiomack size={23} />}>
        Top On Audiomack Malawi
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

// Promise interface
scrapeIt("https://ionicabizau.net", {
    title: ".header h1"
  , desc: ".header h2"
  , avatar: {
        selector: ".header img"
      , attr: "src"
    }
}).then(({ data, status }) => {
    console.log(`Status Code: ${status}`)
    console.log(data)
});


// Async-Await
(async () => {
    const { data } = await scrapeIt("https://ionicabizau.net", {
        // Fetch the articles
        articles: {
            listItem: ".article"
          , data: {

                // Get the article date and convert it into a Date object
                createdAt: {
                    selector: ".date"
                  , convert: x => new Date(x)
                }

                // Get the title
              , title: "a.article-title"

                // Nested list
              , tags: {
                    listItem: ".tags > span"
                }

                // Get the content
              , content: {
                    selector: ".article-content"
                  , how: "html"
                }

                // Get attribute value of root listItem by omitting the selector
              , classes: {
                    attr: "class"
                }
            }
        }

        // Fetch the blog pages
      , pages: {
            listItem: "li.page"
          , name: "pages"
          , data: {
                title: "a"
              , url: {
                    selector: "a"
                  , attr: "href"
                }
            }
        }

        // Fetch some other data from the page
      , title: ".header h1"
      , desc: ".header h2"
      , avatar: {
            selector: ".header img"
          , attr: "src"
        }
    })
    console.log(data)
    // { articles:
    //    [ { createdAt: Mon Mar 14 2016 00:00:00 GMT+0200 (EET),
    //        title: 'Pi Day, Raspberry Pi and Command Line',
    //        tags: [Object],
    //        content: '<p>Everyone knows (or should know)...a" alt=""></p>\n',
    //        classes: [Object] },
    //      { createdAt: Thu Feb 18 2016 00:00:00 GMT+0200 (EET),
    //        title: 'How I ported Memory Blocks to modern web',
    //        tags: [Object],
    //        content: '<p>Playing computer games is a lot of fun. ...',
    //        classes: [Object] },
    //      { createdAt: Mon Nov 02 2015 00:00:00 GMT+0200 (EET),
    //        title: 'How to convert JSON to Markdown using json2md',
    //        tags: [Object],
    //        content: '<p>I love and ...',
    //        classes: [Object] } ],
    //   pages:
    //    [ { title: 'Blog', url: '/' },
    //      { title: 'About', url: '/about' },
    //      { title: 'FAQ', url: '/faq' },
    //      { title: 'Training', url: '/training' },
    //      { title: 'Contact', url: '/contact' } ],
    //   title: 'Ionică Bizău',
    //   desc: 'Web Developer,  Linux geek and  Musician',
    //   avatar: '/images/logo.png' }
})()
