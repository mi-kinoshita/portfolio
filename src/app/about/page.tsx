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
            behavioral design and measurable impact. I have driven significant
            results, including 45% sales growth and 1.8x CVR improvements.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            As the founder of an AI-focused product studio, I lead full-cycle
            product development from market opportunity analysis to global
            launch. My expertise includes identifying unmet needs in
            conversational AI and wellness tech sectors, designing products that
            resonate emotionally and drive user engagement, and building strong
            cross-functional partnerships with developers and AI engineers.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            I am passionate about creating human-centered mobile applications
            that blend conversational AI, behavioral science, and global
            usability. My background includes establishing scalable product
            frameworks, directing go-to-market strategies, and evaluating
            cutting-edge technologies like React Native, LLM APIs, and supabase.
            I also have a strong foundation in design system governance,
            ensuring consistency and velocity across projects.
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
