import React from "react";

const PromptingPresentation = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>
          <a
            href="https://s9rka.github.io/presentation_prompting/"
            target="_blank"
          >
            LLM prompting best practices
          </a>
        </h3>
        <p className="text-stone-600">2024</p>
      </div>
      <div className="mt-4 py-2 px-3 rounded-md w-3/4">
        <p className="">
          Presentation for Jõhvi Gümnaasium on the context and best practices of
          LLMs. Utilized{" "}
          <a href="https://revealjs.com/" target="_blank">
            reveal.js
          </a>{" "}
          for creating the presentation. A powerful presentation tool for developers.
        </p>
        <div className="flex flex-col w-fit gap-1 pt-2">
          <a
            href="https://pohjarannik.postimees.ee/8141784/kratikonverents-johvi-gumnaasiumis"
            target="_blank"
          >
            Article about the event
          </a>
        </div>
      </div>
      <div className="flex gap-2 pt-3">
        <span>AI</span>
        <span>Web Dev</span>
      </div>
    </div>
  );
};

export default PromptingPresentation;
