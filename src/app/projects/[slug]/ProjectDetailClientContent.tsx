// app/projects/[slug]/ProjectDetailClientContent.tsx
"use client"; // このコンポーネントはクライアントコンポーネントとして動作する

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBullseye,
  faMagnifyingGlass,
  faPalette,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Project } from "../../../../lib/projects"; // プロジェクトの型をインポート

interface ProjectDetailClientContentProps {
  project: Project;
}

export default function ProjectDetailClientContent({
  project,
}: ProjectDetailClientContentProps) {
  return (
    <main className="flex-grow py-16 md:py-24 lg:py-32 px-6 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-center">
          {project.title}
        </h1>
        {/* プロジェクトのメイン画像を配置 - 余白調整を強化 */}
        <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-4 md:mb-12">
          {" "}
          {/* mb-6 -> mb-4に調整 */}
          <Image
            src={project.imageUrl}
            alt={`${project.title} main image`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            unoptimized={true}
          />
        </div>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300 text-center">
          {project.overview}
        </p>

        {/* Challenge */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Challenge
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong>Problem:</strong> {project.challenge.problem}
            </li>
            <li>
              <strong>Situation:</strong> {project.challenge.situation}
            </li>
            <li>
              <strong>Necessary:</strong> {project.challenge.necessary}
            </li>
          </ul>
        </div>

        {/* Goal */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Goal
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong>Objectives:</strong> {project.goal.objectives}
            </li>
            <li>
              <strong>Metrics:</strong> {project.goal.metrics}
            </li>
            <li>
              <strong>Impact:</strong> {project.goal.impact}
            </li>
          </ul>
        </div>

        {/* Our Approach - Double Diamond Structure */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Our Approach: The Double Diamond Journey
          </h2>
          <div className="relative w-full max-w-2xl h-auto mx-auto mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/design-process.png" // publicディレクトリの画像パス
              alt="Mia Design Studio Design Process Flow"
              width={1200} // 画像の元の幅に応じて調整
              height={600} // 画像の元の高さに応じて調整
              layout="responsive" // レスポンシブにする
              objectFit="contain" // アスペクト比を維持して収める
              className="rounded-lg"
              unoptimized={true} // 画像最適化を無効化
            />
          </div>

          <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
            Our approach is guided by the Double Diamond framework, ensuring a
            thorough exploration of the problem and a focused delivery of
            solutions.
          </p>

          {/* First Diamond: Problem Space */}
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            1st Diamond: Problem Discovery & Definition
          </h3>

          {/* Discover Phase (Divergent) */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h4 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
              />
              Discover: Explore and Understand
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              We begin by deeply understanding the challenge through broad
              exploration.
            </p>
            <div className="space-y-4">
              {project.approach
                .filter(
                  (step) =>
                    step.title === "Ideation & Conception" ||
                    step.title === "Research & Discovery"
                )
                .map((step, index) => (
                  <div key={index}>
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-1">
                      <strong>{step.title}:</strong> {step.purpose}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Activities: {step.activities} | Role: {step.role}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Define Phase (Convergent) */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-12">
            <h4 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon
                icon={faBullseye}
                className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
              />
              Define: Focus and Strategize
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              Insights from discovery are refined into clear objectives and a
              strategic direction.
            </p>
            <div className="space-y-4">
              {project.approach
                .filter((step) => step.title === "Requirements Definition")
                .map((step, index) => (
                  <div key={index}>
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-1">
                      <strong>{step.title}:</strong> {step.purpose}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Activities: {step.activities} | Role: {step.role}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Second Diamond: Solution Space */}
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            2nd Diamond: Solution Design & Delivery
          </h3>

          {/* Develop Phase (Divergent) */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h4 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
              <FontAwesomeIcon
                icon={faPalette}
                className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
              />
              Design: Ideate and Create
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              We explore diverse creative solutions and build them out.
            </p>

            {/* Dynamic Design Process Stages */}
            <div className="space-y-6">
              {project.designProcessStages &&
                project.designProcessStages.map((stage, index) => (
                  <div key={index}>
                    <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      {stage.title}
                    </h5>
                    {stage.imageUrl && ( // 画像をタイトル直下に配置
                      <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mt-2 mb-2">
                        {" "}
                        {/* mb-3 -> mb-2に調整 */}
                        <Image
                          src={stage.imageUrl}
                          alt={`${project.title} ${stage.title} process image`}
                          layout="fill"
                          objectFit="contain" // 画像全体を表示するためにcontainを使用
                          className="rounded-lg"
                          unoptimized={true}
                        />
                      </div>
                    )}
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                      Purpose: {stage.purpose}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      Content: {stage.content}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Deliver Phase (Convergent) */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon
                icon={faRocket}
                className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
              />
              Deliver: Refine and Launch
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              The chosen solutions are refined, launched, and continuously
              supported.
            </p>
            <div className="space-y-4">
              {project.approach
                .filter(
                  (step) =>
                    step.title === "Testing & Refinement" ||
                    step.title === "Launch & Post-Launch"
                )
                .map((step, index) => (
                  <div key={index}>
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-1">
                      <strong>{step.title}:</strong> {step.purpose}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Activities: {step.activities} | Role: {step.role}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            The Solution
          </h2>
          {/* 最初の画像のみを表示し、objectFitをcontainに変更 - 余白調整を強化 */}
          {project.solution.images && project.solution.images.length > 0 && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-4 md:mb-8">
              <Image
                src={project.solution.images[0]}
                alt={`${project.title} Solution main image`}
                layout="fill"
                objectFit="contain" // 画像全体を表示するためにcontainを使用
                className="rounded-lg"
                unoptimized={true}
              />
            </div>
          )}
          {/* 説明文を画像の上、H2の下に移動 */}
          <p className="text-lg leading-relaxed mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
            {" "}
            {/* mb-4 md:mb-6に調整 */}
            {project.solution.description}
          </p>
          {/* App Store / Google Play links if applicable */}
          {project.appStoreLink || project.googlePlayLink ? (
            <div className="flex flex-row flex-wrap gap-4 items-center justify-center md:justify-center mt-8">
              {project.appStoreLink && (
                <Link
                  href={project.appStoreLink}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-36 h-12 md:w-40">
                    <Image
                      src="/images/app-store.svg"
                      alt="Download on the App Store"
                      layout="fill"
                      objectFit="contain"
                      unoptimized={true}
                    />
                  </div>
                </Link>
              )}
              {project.googlePlayLink && (
                <Link
                  href={project.googlePlayLink}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-36 h-12 md:w-40">
                    <Image
                      src="/images/google-play.png"
                      alt="Get it on Google Play"
                      layout="fill"
                      objectFit="contain"
                      unoptimized={true}
                    />
                  </div>
                </Link>
              )}
            </div>
          ) : null}
        </div>

        {/* The Result */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Result
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong>Outcomes:</strong> {project.result.outcomes}
            </li>
            <li>
              <strong>Solved Challenge:</strong>{" "}
              {project.result.solvedChallenge}
            </li>
            <li>
              <strong>Impact:</strong> {project.result.impact}
            </li>
          </ul>
        </div>

        {/* Feedback & Iteration */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Feedback & Iteration
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong>Feedback Collected:</strong> {project.feedback.collected}
            </li>
            <li>
              <strong>Insights Gained:</strong> {project.feedback.insights}
            </li>
            <li>
              <strong>Iterative Improvements:</strong>{" "}
              {project.feedback.improvements}
            </li>
          </ul>
        </div>

        {/* Learnings */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Learnings
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong>Key Insights:</strong> {project.learnings.insights}
            </li>
            <li>
              <strong>Challenges Overcome:</strong>{" "}
              {project.learnings.challengesOvercome}
            </li>
            <li>
              <strong>Next Steps:</strong> {project.learnings.nextSteps}
            </li>
          </ul>
        </div>

        {/* Optional Testimonial */}
        {project.testimonial && (
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mt-16 text-center italic text-gray-700 dark:text-gray-300">
            <p className="text-xl md:text-2xl leading-relaxed mb-4">
              &quot;{project.testimonial.text}&quot;
            </p>
            <p className="text-lg font-semibold">
              — {project.testimonial.client}
            </p>
          </div>
        )}

        {/* Back to Projects link */}
        <div className="text-center mt-12">
          <Link
            href="/#projects"
            className="text-neutral-900 dark:text-neutral-100 text-lg font-medium hover:underline inline-flex items-center group"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="rotate-180 mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform"
            />
            Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
