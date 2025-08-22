"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBullseye,
  faExclamationTriangle,
  faKey,
  faLightbulb,
  faMagnifyingGlass,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Project } from "../../../../lib/projects";

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
        <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-8 md:mb-12">
          <Image
            src={project.imageUrl}
            alt={`${project.title} main image`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            unoptimized={true}
          />
        </div>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300 text-center">
          {project.overview}
        </p>

        {/* Challenge */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Challenge
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
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
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Goal
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
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

        {/* User Research Section */}
        {project.userResearch && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              User Research
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Research Goal */}
              <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-gray-100">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
                  />
                  Goal
                </h4>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {project.userResearch.goal}
                </p>
              </div>

              {/* Research Methods */}
              <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-gray-100">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
                  />
                  Methods
                </h4>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
                  {project.userResearch.methods.map((method, index) => (
                    <li key={index}>
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Insights */}
            <div className="mt-8 bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-gray-100">
                <FontAwesomeIcon
                  icon={faKey}
                  className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
                />
                Key Insights
              </h4>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
                {project.userResearch.insights.map((insight, index) => (
                  <li key={index}>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Persona Section */}
        {project.persona && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Persona: {project.persona.title}
            </h2>
            <div className="relative w-full max-w-2xl h-auto mx-auto mb-8 rounded-lg overflow-hidden">
              <Image
                src={project.persona.imageUrl}
                alt={`${project.persona.title} persona image`}
                width={1000}
                height={562}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg"
                unoptimized={true}
              />
            </div>
            <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300 text-center whitespace-pre-line">
              {project.persona.overview}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {project.persona.attributes.map((attribute, index) => (
                <div
                  key={index}
                  className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 flex items-center">
                    {attribute.title === "Goal" && (
                      <FontAwesomeIcon
                        icon={faBullseye}
                        className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
                      />
                    )}
                    {attribute.title === "Pain Points" && (
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
                      />
                    )}
                    {attribute.title === "Motivations" && (
                      <FontAwesomeIcon
                        icon={faLightbulb}
                        className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
                      />
                    )}
                    {attribute.title === "Quote" && (
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
                      />
                    )}
                    {attribute.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {attribute.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* the design & development */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Design & Development
          </h2>
          {project.process?.description && (
            <p className="text-lg leading-relaxed mb-6 mt-6 text-gray-700 dark:text-gray-300">
              {project.process.description}
            </p>
          )}
          <h3 className="text-xl md:text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100 flex items-center">
            Tech Stack & Tools
          </h3>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong>Tech Stack:</strong> {project.process?.technologyStack}
            </li>
            <li>
              <strong>Tools:</strong> {project.process?.toolsUsed}
            </li>
          </ul>
          {project.process?.keyRequirements &&
            project.process.keyRequirements.length > 0 && (
              <>
                <h3 className="text-xl md:text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-gray-100 flex items-center">
                  Key Requirements
                </h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
                  {project.process.keyRequirements.map((req, index) => (
                    <li key={index}>
                      {req.split(":").length > 1 ? (
                        <>
                          <strong>{req.split(":")[0]}:</strong>
                          {req.split(":").slice(1).join(":")}
                        </>
                      ) : (
                        req
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          <h3 className="text-xl md:text-3xl font-bold mt-16 mb-2 text-gray-900 dark:text-gray-100 flex items-center">
            To Release
          </h3>
          {project.process?.releaseJourney &&
            project.process.releaseJourney.length > 0 &&
            project.process.releaseJourney.map((imageItem, index) => (
              <div key={index} className="mb-8">
                <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={imageItem.imageUrl}
                    alt={imageItem.description}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                    unoptimized={true}
                  />
                </div>
                <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                  {imageItem.description}
                </p>
              </div>
            ))}
          {/* Icon */}
          <h5 className="text-lg md:text-xl font-semibold mt-8 mb-8 text-gray-800 dark:text-gray-100">
            Icon
          </h5>
          {project.process?.icon?.imageUrl && (
            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mt-8 mb-8">
              <Image
                src={project.process.icon.imageUrl}
                alt={`${project.title} Icon`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                unoptimized={true}
              />
            </div>
          )}
          <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {project.process?.icon?.description}
          </p>

          {/* After Launch Section */}
          <div className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold mt-16 mb-8 text-gray-900 dark:text-gray-100">
              After Launch
            </h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {project.process?.afterLaunchDescription}
            </p>
            {project.process?.afterLaunch &&
              project.process.afterLaunch.length > 0 &&
              project.process.afterLaunch.map((imageItem, index) => (
                <div key={index} className="mb-8">
                  <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
                    <Image
                      src={imageItem.imageUrl}
                      alt={imageItem.description}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      unoptimized={true}
                    />
                  </div>
                  <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                    {imageItem.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* User Flow Section */}
        {project.userFlow && (
          <div className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold mt-16 mb-8 text-gray-900 dark:text-gray-100">
              User Flow
            </h3>
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden my-8">
              <Image
                src={project.userFlow.images}
                alt={`${project.title} User Flow`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                unoptimized={true}
              />
            </div>
            <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
              {project.userFlow.description}
            </p>
          </div>
        )}

        {/* The Solution */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Solution
          </h2>
          <div className="flex flex-col space-y-3 mt-2">
            {project.solution.images.map((imageItem, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full h-52 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={imageItem.imageUrl}
                    alt={imageItem.description}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                    unoptimized={true}
                  />
                </div>
                <p className="text-lg leading-relaxed mt-8 text-gray-700 dark:text-gray-300">
                  {imageItem.description}
                </p>
              </div>
            ))}
          </div>
          {project.appStoreLink || project.googlePlayLink ? (
            <div className="flex flex-row flex-wrap gap-4 items-center justify-center mt-12">
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
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Result
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
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
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Feedback & Iteration
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
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
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Learnings
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
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
