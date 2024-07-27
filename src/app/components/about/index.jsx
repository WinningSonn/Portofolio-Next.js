import React from "react";
import ItemLayout from "./itemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            0+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            0+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=WinningSonn&theme=transparent&hide_border=true&show_icons=true&title_color=6B21A8&text_color=FFFFFF&icon_color=6B21A8&text_bold=false"
            alt="WInningSonn"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=WinningSonn&theme=transparent&hide_border=true&title_color=6B21A8&text_color=FFFFFF&icon_color=6B21A8&text_bold=false"
            alt="WinningSonn"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,bootstrap,cloudflare,css,figma,firebase,git,github,html,js,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,postgres,react,tailwind,threejs,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=WinningSonn&theme=transparent&hide_border=true&ring=6B21A8&sideLabels=D80FFF&fire=C809C7&currStreakNum=D80FFF&sideNums=C809C7&currStreakLabel=D80FFF&dates=C809C7&stroke=6B21A8" alt="GitHub Streak" /></a>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src= "https://github-readme-stats.vercel.app/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=6B21A8&text_color=FFFFFF&icon_color=6B21A8&text_bold=false&description_lines_count=2"
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;