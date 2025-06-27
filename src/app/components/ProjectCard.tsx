// ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // 右矢印アイコン
// import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons/faAppStoreIos"; // App Storeアイコンを削除
// import { faGooglePlay } from "@fortawesome/free-brands-svg-icons/faGooglePlay"; // Google Playアイコンを削除

interface ProjectCardProps {
  year: string; // プロジェクト番号として使用（例: "01"）
  title: string; // プロジェクト名（例: "PROJECT NAME"）
  description: string; // 主要な説明
  subDescription: string; // 「Scultped in...」のような詳細説明
  link?: string; // プロジェクト詳細ページへのリンクをオプションに変更
  imageUrl: string;
  // appStoreLink?: string; // App Storeリンクを削除
  // googlePlayLink?: string; // Google Playリンクを削除
}

const ProjectCard = ({
  year,
  title,
  description,
  subDescription,
  link,
  imageUrl,
}: // appStoreLink, // 削除
// googlePlayLink, // 削除
ProjectCardProps) => {
  return (
    // メインコンテナ: mdで横並び、items-start を items-stretch に変更して高さを揃える
    <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6 md:gap-12 py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      {/* 左側のカラム: テキストコンテンツ（タイトル、説明、リンク） */}
      {/* md:w-1/2: デスクトップで幅半分。flex flex-col h-full: 縦方向Flexboxで親の高さに合わせる */}
      <div className="md:w-1/2 flex-shrink-0 text-left flex flex-col h-full">
        {/* テキストコンテンツの上部（タイトル、説明、サブ説明） */}
        {/* flex-grow: 残りのスペースを埋めて、リンクを底部に押し込む */}
        <div className="flex-grow">
          {/* プロジェクト番号とタイトルを横並びに */}
          <div className="flex items-center mb-4">
            <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mr-2">
              {year} / {/* プロジェクト番号とスラッシュ */}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {title}
            </h3>
          </div>

          {/* モバイル画像 - モバイルでのみ表示、md以上で非表示 */}
          <div className="relative w-full h-48 rounded-lg overflow-hidden block md:hidden mb-4">
            <Image
              src={imageUrl}
              alt={`${title} mockup`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              unoptimized={true}
            />
          </div>

          {/* 主要な説明 */}
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {description}
          </p>

          {/* サブ説明（画像下のテキスト） */}
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {subDescription}
          </p>
        </div>
        {/* /flex-grow */}

        {/* リンク/アイコンセクション - 常に詳細ページへのリンクを表示し、アプリストアリンクがあれば追加表示 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-auto mb-6">
          {/* 詳細ページへの内部リンク - linkが存在する場合のみLinkコンポーネントをレンダリング */}
          {link ? (
            <Link
              href={link}
              className="text-neutral-800 dark:text-neutral-100 font-medium hover:underline inline-flex items-center group flex-shrink-0"
            >
              More shots from this project
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          ) : (
            // linkが存在しない場合は「Coming Soon」と表示
            <span className="text-gray-500 dark:text-gray-400 font-medium inline-flex items-center flex-shrink-0">
              Coming Soon
            </span>
          )}

          {/* アプリストアリンク（存在する場合のみ表示） - このセクションは完全に削除 */}
          {/* {(appStoreLink || googlePlayLink) && (
            <div className="flex flex-row gap-4 items-center sm:ml-4 flex-wrap">
              {" "}
              {appStoreLink && (
                <Link
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faAppStoreIos}
                    className="text-[25px]"
                  />
                </Link>
              )}
              {googlePlayLink && (
                <Link
                  href={googlePlayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className="text-[25px]"
                  />
                </Link>
              )}
            </div>
          )} */}
        </div>
      </div>
      {/* /md:w-1/2 (left column) */}
      {/* 右側のカラム: プロジェクト画像 - md以上でのみ表示、モバイルで非表示 */}
      <div className="md:w-1/2 flex-shrink-0 relative w-full h-64 md:h-80 rounded-lg overflow-hidden hidden md:block">
        <Image
          src={imageUrl}
          alt={`${title} mockup`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
