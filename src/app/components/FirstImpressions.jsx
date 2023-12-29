import Link from "next/link";
import React from "react";

export default function FirstImpressions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 p-16 pb-16 m-auto bg-indigo-100">
      <div>
        <iframe
          className="youtube-video mb-5 pr-0 md:pr-5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0IsMNF9GmWg?si=vEDj6_q7AFyaH8j_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="texto">
        <h2 className="text-3xl font-extrabold mb-5 text-indigo-600">
          A RNA Consultoria em Seguros está sempre à sua disposição
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente
          harum omnis ducimus, error nostrum perferendis cumque. Iure, ducimus
          sunt repellat ullam mollitia minima, non quis labore numquam
          reprehenderit iusto! <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          praesentium, quaerat dicta architecto nobis reprehenderit non fugiat
          dolorum consectetur earum rerum voluptatibus mollitia tenetur ullam
          quod! Nemo dolor adipisci optio.
        </p>
        <div className="link">
          <Link
            href="https://rixxer.com.br"
            className="text-white bg-indigo-600 hover:bg-indigo-900 hover:transition-all focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          >
            Faça uma simulação
          </Link>
        </div>
      </div>
    </div>
  );
}
