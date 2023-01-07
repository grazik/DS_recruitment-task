import { HeroBanner } from "@molecules/HeroBanner/HeroBanner";
import { LinkCta } from "@atoms/LinkCta/LinkCta";
import HeroImg from "@public/hero.jpg";
import styles from "@styles/homePage.module.scss";

export default function Home() {
  return (
    <>
      <HeroBanner
        image={{
          src: HeroImg,
          alt: "Hero Image",
        }}
        title={"Recruitment task for DS"}
        subtitle={"SPA made in Next.js"}
        isFullHeight
      >
        <div className={styles.heroBannerChildrenWrapper}>
          <LinkCta href={"/form"} title={"Go to form"} />
          <LinkCta href={"/profile"} title={"Check your profile"} />
        </div>
      </HeroBanner>
    </>
  );
}
