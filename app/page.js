"use client"
import Hero from "./components/Hero";
import Second from "./components/Second";
import Third from "./components/Third";
import Menu from "./components/Menu";
import Header from "./components/Header/Header";
import { useState } from "react";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Menu isOpen={isOpen} setOpen={setOpen} />
      <Hero />
      <Second />
      <Third />
    </>
  )
}
