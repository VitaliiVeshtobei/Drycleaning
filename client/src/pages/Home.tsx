import React, { useState } from "react";
import { TopBar } from "../components/TopBar/TopBar";
import { SideBar } from "../components/SideBar/SideBar";
import { MainLayout } from "../components/Main/MainLayout";

export const Home = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);
  const toggleSideBar = (): void => {
    setSideBarIsOpen((prev) => !prev);
  };
  return (
    <>
      <TopBar toggleSideBar={toggleSideBar} sideBarIsOpen={sideBarIsOpen} />
      <SideBar sideBarIsOpen={sideBarIsOpen} />
      <MainLayout />
    </>
  );
};
