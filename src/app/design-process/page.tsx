// app/design-process/page.tsx
"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBullseye,
  faPalette,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export default function DesignProcessPage() {
  return (
    <main className="flex-grow py-16 md:py-24 lg:py-32 px-6 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-center">
          Design Process
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
          Mia Design Studio&apos;s design process is built to tackle complex
          challenges and deliver impactful, human-centered solutions. We
          prioritize transparent collaboration, ensuring every step aligns with
          your vision and business goals.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          Having developed our own products, we deeply understand the challenges
          and struggles you face. This unique perspective enables
          problem-solving with genuine empathy and a comprehensive understanding
          of your needs.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          We offer a comprehensive approach that covers the entire product
          lifecycle, from initial concept to ongoing refinement and strategic
          evolution.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          8-Step Design Process
        </h2>
        <div className="relative w-full max-w-2xl h-auto mx-auto mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/design-process.png"
            alt="Mia Design Studio Design Process Flow"
            width={1200}
            height={600}
            layout="responsive"
            objectFit="contain"
            className="rounded-lg"
            unoptimized={true}
          />
        </div>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          Our design process is based on the powerful framework of the Double
          Diamond Theory. This is a human-centered approach consisting of four
          phases: Discover, Define, Design, and Deliver. In each phase, we
          alternate between &quot;divergent&quot; (exploring broadly) and
          &quot;convergent&quot; (focusing narrowly) thinking to provide
          innovative solutions that meet true user needs.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          1st Diamond: Discovery & Definition
        </h3>

        <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
            />
            Discover
          </h4>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            In this phase, we gather as much information and as many
            perspectives as possible to broadly explore the overall problem.
          </p>

          <div className="space-y-6">
            <div>
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Contact
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                Purpose: To establish initial contact and understand the basic
                needs and scope of your project.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Content: This phase involves your first reach-out, where we
                gather preliminary information about your project, challenges,
                and goals through an inquiry form or direct communication.
              </p>
            </div>

            <div>
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Discovery
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                Purpose: To gain a deep understanding of your business, target
                users, market, and existing pain points.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Content: We conduct market analysis, competitive benchmarking,
                user interviews, surveys, and usability testing to uncover
                critical insights and opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-12">
          <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
            <FontAwesomeIcon
              icon={faBullseye}
              className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
            />
            Define
          </h4>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            We analyze insights from the Discover phase to identify the most
            critical challenges and opportunities, defining a clear direction
            for the project.
          </p>

          <div>
            <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              3. Consultation
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              Purpose: To synthesize research findings, define project scope,
              establish clear goals, and formulate a strategic roadmap.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Content: Through workshops and discussions, we align on
              strategies, prioritize features, define KPIs, and outline the
              project timeline.
            </p>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          2nd Diamond: Design & Delivery
        </h3>

        <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
            <FontAwesomeIcon
              icon={faPalette}
              className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
            />
            Design
          </h4>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            For the defined problem, we broadly explore diverse solutions and
            ideas, seeking creative approaches.
          </p>

          <div className="space-y-6">
            <div>
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                4. Concept Development
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                Purpose: To translate strategy into tangible design concepts,
                focusing on user flow, information architecture, and visual
                direction.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Content: We create wireframes, user flows, and mockups,
                exploring various design solutions and gathering early feedback
                to refine concepts.
              </p>
            </div>

            <div>
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                5. Production
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                Purpose: To execute approved design concepts, building the full
                user interface and experience.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Content: This phase includes detailed UI design, interaction
                design, prototyping, and close collaboration with development
                teams to ensure design integrity during implementation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
            <FontAwesomeIcon
              icon={faRocket}
              className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
            />
            Deliver
          </h4>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            We focus on the most viable and effective solutions, shaping them
            into concrete products or services for release.
          </p>

          <div className="space-y-6">
            <div>
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                6. Delivery
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                Purpose: To formally transfer completed design assets and
                documentation to the client.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Content: Provision of final design files, prototypes, asset
                libraries, and comprehensive documentation for development
                teams, ensuring a smooth transition.
              </p>
            </div>

            <div>
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                7. Post-Launch Support
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                Purpose: To monitor post-launch performance, propose
                improvements, and maintain strong relationships.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  Performance Monitoring: Analyzing key metrics like website
                  analytics, user behavior, and conversion rates.
                </li>
                <li>
                  Bug Fixing / Maintenance: Addressing post-launch issues and
                  performing routine maintenance.
                </li>
                <li>
                  Iterative Improvements: Recommending data-driven enhancements
                  and new features based on user feedback and performance data.
                </li>
                <li>
                  Client Relationship Management: Engaging in regular
                  communication to foster long-term partnerships.
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                8. Design System
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                Purpose: To establish unified principles, components, and
                guidelines ensuring consistency, efficiency, and scalability for
                future design and development efforts.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  Brand Guidelines: Detailed rules for logo usage, color
                  palettes, typography, and imagery, reflecting the brand&apos;s
                  visual identity.
                </li>
                <li>
                  UI Component Library: Definition and usage instructions for
                  reusable UI components (buttons, forms, navigation,
                  &quot;etc.&quot;).
                </li>
                <li>
                  Style Guide: Comprehensive guidelines for developers, covering
                  coding standards, accessibility, and implementation best
                  practices.
                </li>
                <li>
                  Future Scalability: Enabling future design expansion and
                  streamlining workflows for multiple designers and developers.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed mt-12 text-gray-700 dark:text-gray-300">
          This Double Diamond framework allows us to not only create beautiful
          designs but also to deliver meaningful, sustainable solutions for both
          users and businesses.
        </p>
      </section>
    </main>
  );
}
