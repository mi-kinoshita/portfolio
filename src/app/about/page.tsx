// app/about/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 font-sans">
      <main className="flex-grow flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 px-6">
        <section className="max-w-3xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-center">
            About Me
          </h1>

          {/* プロフィール画像 (オプション) */}
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Image
                src="/images/prof.jpeg" // publicディレクトリに配置したアバター画像を指定
                alt="Your Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                unoptimized={true}
              />
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Hello, I am Mia. I am a Product Designer with over 20 years of
            design experience, including 8+ years as a freelance creative lead.
            My recent work focuses on AI-integrated UX, conversational
            interfaces, and scalable systems, with a strong emphasis on
            behavioral design and measurable impact.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            My experience spans from early HTML to modern LLMs, providing deep
            insight into sustainable, trend-transcending product ecosystems. I
            believe in designing with clarity, empathy, and a focus on
            real-world impact. Thank you for visiting! Feel free to explore my
            work or connect with me.
          </p>
        </section>
      </main>
    </div>
  );
}
