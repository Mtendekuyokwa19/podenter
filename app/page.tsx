import { Link } from "@heroui/link";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiSpotifyLogo } from "react-icons/pi";
import { SiAudiomack } from "react-icons/si";
import { PiSoundcloudLogoBold } from "react-icons/pi";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex  flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="my-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span className="flex gap-2">
              <PiSpotifyLogo size={23} />
              <SiAudiomack size={23} />
              <PiSoundcloudLogoBold size={23} />
              <PiYoutubeLogo size={23} />
            </span>
          </Snippet>
        </div>
        <span className={title()}>Malawian&nbsp;</span>
        <span className={title({ color: "violet" })}>Music&nbsp;</span>
        <br />
        <span className={title()}>By numbers.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Watch your favourite artist trend across all platfroms
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.pages.alllists}
        >
          Get Started
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
