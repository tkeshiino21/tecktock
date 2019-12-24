import React, { useState } from "react";
import { FaBook, FaBookReader, FaBookmark, FaReadme } from "react-icons/fa";
import Title from "./Title";

const Services = () => {
  const state = [
    {
      icon: <FaBook />,
      title: "探す",
      info: "技術書を探すならこちらに",
    },
    {
      icon: <FaBookReader />,
      title: "借りる",
      info: "ストックがあれば借りられる",
    },
    {
      icon: <FaReadme />,
      title: "寄付する",
      info: "読み終わった技術書をこちらに",
    },
  ];

  return (
    <section className="services">
      <Title title="サービスの概要" />
      <div className="services-center">
        {state.map((item, index) => {
          return (
            <article key={index} className="service">
              <h4>{item.title}</h4>
              <span>{item.icon}</span>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
