import React, { useState, useEffect } from "react";
import "./TagList.css";

const TagList = () => {
  const [tags, setTags] = useState(undefined);

  useEffect(() => {
    fetch("https://conduit.productionready.io/api/tags").then((response) => {
      response.json().then((dados) => {
        setTags(dados.tags.filter(tag => {
          return tag.replace(/[^a-z0-9]/g, '')
        }));
      });
    });
  }, []);

  return (
    <ul>
      {tags
        ? tags.map((tag) => (
            <li key={tag} className="taglist-item">
              <a href="/" title={tag}>
                {tag}
              </a>
            </li>
          ))
        : "Carregando" }
    </ul>
  );
};

export default TagList;
