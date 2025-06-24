// HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col py-12 md:py-24 lg:py-32 px-6 max-w-4xl mx-auto font-sans">
      {/* アバター画像を削除済み */}

      {/* タイトルを単独で配置し、下余白を追加 */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-gray-100 text-left">
        Crafting Clarity at Scale
      </h1>

      {/* 自己紹介文 - text-left を維持 */}
      <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300 text-left">
        I design scalable, human-centered experiences that bring clarity to
        complexity. My work blends design systems, behavioral insights, and
        emerging technologies into thoughtful, resilient products.
      </p>

      {/* アプリストアアイコンのコンテナ */}
      {/* 「flex-row」クラスがアイコンを横並びにする役割を果たします。 */}
      {/* 「flex-wrap」は、画面幅が狭い場合にアイコンを次の行に折り返します。 */}
      <div className="flex flex-row flex-wrap gap-4 items-start mb-8">
        {/* mb-8で下余白を追加 */}
        {/* App Store アイコン */}
        <Link href="#" passHref>
          {/* w-40 を w-36 に変更し、iPhone SEなどの狭い画面でも横並びになるように調整 */}
          <div className="relative w-36 h-12 md:w-40">
            <Image
              src="/images/app-store.svg" // App Storeアイコンの画像パスに置き換えてください
              alt="Download on the App Store"
              layout="fill"
              objectFit="contain"
              unoptimized={true}
            />
          </div>
        </Link>
        {/* Google Play アイコン */}
        <Link href="#" passHref>
          {/* w-40 を w-36 に変更し、iPhone SEなどの狭い画面でも横並びになるように調整 */}
          <div className="relative w-36 h-12 md:w-40">
            <Image
              src="/images/google-play.png" // Google Playアイコンの画像パスに置き換えてください
              alt="Get it on Google Play"
              layout="fill"
              objectFit="contain"
              unoptimized={true}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
