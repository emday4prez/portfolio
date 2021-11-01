import FavouriteProjects from "@components/FavouriteProjects";
import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";

export default function projects() {
  return (
    <ContainerBlock title="Projects | Emerson Day">
    <FavouriteProjects/>
      <Projects />
    </ContainerBlock>
  );
}
