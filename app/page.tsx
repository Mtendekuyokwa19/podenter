import { Link } from "@heroui/link";
import { PiYoutubeLogo } from "react-icons/pi";
import { FaGears } from "react-icons/fa6";
import { SiAudiomack } from "react-icons/si";
import { PiSoundcloudLogoBold } from "react-icons/pi";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { FaRegLightbulb } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { IoRocket } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
export default function Home() {
  return (
    <section className="flex  flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="my-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span className="flex gap-2">
              <FaGears size={23} />
              <TiSpanner size={23} />
              <IoRocket size={23} />
              <FaRegLightbulb size={23} />
            </span>
          </Snippet>
        </div>
        <span className={title()}>Unipod Supa&nbsp;</span>
        <span className={title({ color: "violet" })}>Entry&nbsp;</span>
        <br />
        <span className={title()}>By Innovation.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Skip the queues and enter the unipod without a fuss
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
