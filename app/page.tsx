"use client";
import Image from "next/image";
import style from "./page.module.css";

import anime from "animejs";
import { useEffect } from "react";
import Hero from "@/features/Hero/Hero";
import TopCreators from "@/features/TopCreators/TopCreators";
import Categories from "@/features/Categories/Categories";
import { Input } from "@/shared/ui/UI";
import SubscribeForm from "@/features/SubscribeForm/SubscribeForm";
import PreviewPosts from "@/features/PreviewPosts/PreviewPosts";
import WorkSteps from "@/features/WorkSteps/WorkSpeps";
import Collections from "@/features/Collections/Collections";
import SpecialOffer from "@/features/SpecialOffer/SpecialOffer";

export default function Home() {
  return (
    <main className={style.main}>
      <Hero />

      <Collections />
      <TopCreators />
      <Categories />

      <PreviewPosts />
      <SpecialOffer />
      <WorkSteps />
      <SubscribeForm />
    </main>
  );
}
