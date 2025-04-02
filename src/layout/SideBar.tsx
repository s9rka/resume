import React from "react";
import { useTranslation } from "react-i18next";

const SideBarContent = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 py-2">
      <section className="">
        <h3 className="pb-1 font-bold text-stone-700">{t("Tech Stack")}</h3>
        <p className="underline">{t("Programming languages")}</p>
        <p className="">Golang, Typescript, Python</p>

        <p className="underline">{t("Frontend development")}</p>
        <p className="">React, Vite, TanStack, TailwindCSS, shadcn/ui, SCSS</p>

        <p className="underline">{t("Databases")}</p>
        <p className="">SQLite, postgreSQL, Firebase</p>

        <p className="underline">{t("Workflow tools")}</p>
        <p className="">Git, Docker, Jira, Postman</p>
      </section>

      <section className="">
        <h3 className="pb-1 font-bold text-stone-700">{t("Languages")}</h3>
        <p>{t("English")} (C1)</p>
        <p>{t("Estonian")} (C2)</p>
        <p>{t("Russian")} (B1)</p>
        <p>{t("French")} (B1)</p>
      </section>

      <section className="flex flex-col ">
        <h3 className="pb-1 font-bold text-stone-700">{t("Other")}</h3>
        <a className="py-0 my-0" href="https://aurelius.ee" target="_blank">
          Aurelius.ee ({t("first web project with React")}) (2022)
        </a>
        <a
          href="https://drive.google.com/file/d/1Y7B7tqQmATf0uZpyBqW9X7heWnm8ER8e/view"
          target="_blank"
        >
          {t("UX Estonia Course Certificate")}
        </a>

        <a
          href="https://drive.google.com/file/d/1HBx16K_FoS0L8szLyY0Apw-fvrWck3Qh/view"
          target="_blank"
        >
          {t("Javascript & React Course Certificate")}
        </a>
        <p>Garage48 Digi-Green Hackathon</p>
        <p>AI for Ukraine Recovery Hackathon</p>
        <p>sTARTUp day 2022 {t("volunteer")}</p>
        <a
          href="https://s9rka.github.io/presentation_prompting/"
          target="_blank"
        >
          {t("LLM prompting presentation for Jõhvi Gümnaasium")}
        </a>
        <a
          href="https://docs.google.com/presentation/d/12g_pWJ8jWvkXr40vKDemvS0Q2zp_COG4xvOoiHmhd4k/edit#slide=id.p"
          target="_blank"
        >
          {t("LLM prompting presentation for Kood/Jõhvi sprinters")}
        </a>
      </section>
    </div>
  );
};

export default SideBarContent;
