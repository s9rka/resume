import React from "react";
import { useTranslation } from "react-i18next";

const SideBarContent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="py-">
        <h3 className="text-center underline pb-1">Tech Stack</h3>
        <strong>Programming languages:</strong>
        <p>Golang, Typescript, Python</p>

        <strong>Frontend development:</strong>
        <p>React, Vite, React Query, TailwindCSS, shadcn/ui</p>

        <strong>Databases:</strong>
        <p>SQLite, postgreSQL, Firebase</p>

        <strong>Workflow tools:</strong>
        <p>Git, Docker, Jira, Postman</p>
      </section>

      <section className="py-2">
        <h3 className="text-center underline pb-1">Languages</h3>
        <p>English (C1)</p>
        <p>Estonian (C2)</p>
        <p>Russian (B1)</p>
        <p>French (B1)</p>
      </section>

      <section className="py-2 flex flex-col gap-1">
        <h3 className="text-center underline pb-1">Other</h3>
        <a href="https://aurelius.ee" target="_blank">
          Aurelius.ee (freelance web project)
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
        <p>sTARTUp day 2022 volunteer</p>
        <a
          href="https://s9rka.github.io/presentation_prompting/"
          target="_blank"
        >
          LLM prompting presentation for Jõhvi Gümnaasium
        </a>
        <a
          href="https://docs.google.com/presentation/d/12g_pWJ8jWvkXr40vKDemvS0Q2zp_COG4xvOoiHmhd4k/edit#slide=id.p"
          target="_blank"
        >
          LLM prompting presentation for Kood/Jõhvi sprinters
        </a>
      </section>
    </div>
  );
};

export default SideBarContent;
