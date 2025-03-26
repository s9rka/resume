import React from "react";
import { useTranslation } from "react-i18next";

const SideBarContent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="py-">
        <h3 className="text-center underline pb-1">{t("Tech Stack")}</h3>
        <strong>{t("Programming languages")}:</strong>
        <p>Golang, Typescript, Python</p>

        <strong>{t("Frontend development")}:</strong>
        <p>React, Vite, React Query, TailwindCSS, shadcn/ui</p>

        <strong>{t("Databases")}:</strong>
        <p>SQLite, postgreSQL, Firebase</p>

        <strong>{t("Workflow tools")}:</strong>
        <p>Git, Docker, Jira, Postman</p>
      </section>

      <section className="py-2">
        <h3 className="text-center underline pb-1">{t("Languages")}</h3>
        <p>{t("English")} (C1)</p>
        <p>{t("Estonian")} (C2)</p>
        <p>{t("Russian")} (B1)</p>
        <p>{t("French")} (B1)</p>
      </section>

      <section className="py-2 flex flex-col gap-1">
        <h3 className="text-center underline pb-1">{t("Other")}</h3>
        <a href="https://aurelius.ee" target="_blank">
          Aurelius.ee ({t("freelance web project")})
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
