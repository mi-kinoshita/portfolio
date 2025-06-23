// Footer.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // 星のアイコン
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // X TwitterとLinkedInのアイコン

const Footer = () => {
  const feedbackStars = 5;

  return (
    <footer className="py-12 px-6 md:px-8 lg:px-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        {/* 左側のナビゲーションリンク - モバイル時も横並びにする */}
        <nav className="flex flex-row items-center gap-4 md:gap-8 text-lg font-medium">
          {/* flex-col を flex-row に変更 */}
          <Link
            href="/contact"
            className="hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
            {/* w-8 h-8 を追加してアイコンサイズを指定 */}
          </Link>
          <Link
            href="https://x.com/mia_jpeg"
            className="hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} className="w-8 h-8" />
          </Link>
          <Link
            href="www.linkedin.com/in/miho-kinoshita"
            className="hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
          </Link>
        </nav>

        <div className="flex flex-col items-center md:items-end text-sm">
          <p className="flex items-center mb-2">
            I ❤️ feedbacks
            {Array.from({ length: feedbackStars }).map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="w-4 h-4 ml-1 text-yellow-500"
              />
            ))}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Mia Design Studio All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
