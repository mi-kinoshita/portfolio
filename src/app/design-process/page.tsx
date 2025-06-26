// app/design-process/page.tsx
"use client";

import Image from "next/image"; // Imageコンポーネントをインポート

export default function DesignProcessPage() {
  return (
    <main className="flex-grow py-16 md:py-24 lg:py-32 px-6 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-center">
          Design Process
        </h1>

        {/* デザインプロセスの画像を追加 */}
        <div className="relative w-full max-w-2xl h-auto mx-auto mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/design-process.png" // publicディレクトリ直下の画像パス
            alt="Mia Design Studio Design Process Flow"
            width={1200} // 画像の元の幅に応じて調整
            height={600} // 画像の元の高さに応じて調整
            layout="responsive" // レスポンシブにする
            objectFit="contain" // アスペクト比を維持して収める
            className="rounded-lg"
            unoptimized={true} // 画像最適化を無効化
          />
        </div>

        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
          At Mia Design Studio, our design process is a structured yet flexible
          journey, built to tackle complex challenges and deliver impactful,
          human-centered solutions. We believe in transparent collaboration,
          ensuring every step is aligned with your vision and business
          objectives.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          Having developed our own products, we deeply understand the challenges
          and struggles you face. This unique perspective allows us to approach
          problem-solving with genuine empathy and a comprehensive understanding
          of your needs.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          Our comprehensive approach covers the entire product lifecycle, from
          initial concept to ongoing refinement and strategic evolution.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          8 Step Design Process
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          Here&apos;s a detailed look at how we bring your ideas to life:{" "}
          {/* アポストロフィをエスケープ */}
        </p>

        {/* Process Steps */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              1. Contact / Initial Inquiry
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong>Purpose:</strong> To establish initial contact and
              understand the basic needs and scope of your project.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Content:</strong> This phase involves your first
              reach-out, where we gather preliminary information about your
              project, challenges, and goals through an inquiry form or direct
              communication.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              2. Research / Discovery
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong>Purpose:</strong> To gain a deep understanding of your
              business, target users, market landscape, and existing pain
              points.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Content:</strong> We conduct comprehensive research,
              including market analysis, competitive benchmarking, user
              interviews, surveys, and usability testing to uncover critical
              insights and define project opportunities.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              3. Consultation / Strategy Session
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong>Purpose:</strong> To synthesize research findings, define
              project scope, establish clear objectives, and develop a strategic
              roadmap.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Content:</strong> Collaborative workshops and discussions
              where we align on core strategies, prioritize features, define key
              performance indicators (KPIs), and outline the project timeline.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              4. Concept Development / Wireframing & Mockups
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong>Purpose:</strong> To translate strategy into tangible
              design concepts, focusing on user flow, information architecture,
              and visual direction.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Content:</strong> Creation of low-fidelity wireframes,
              detailed user flows, and high-fidelity mockups. We explore various
              design solutions and gather early feedback to refine concepts.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              5. Production / Design & Development
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong>Purpose:</strong> To execute the approved design concepts,
              building out the full user interface and experience.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Content:</strong> This phase includes detailed UI design,
              interaction design, prototyping, and close collaboration with
              development teams to ensure design integrity during
              implementation.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              6. Delivery / Handover
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong>Purpose:</strong> To formally transfer the completed
              design assets and documentation to the client.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Content:</strong> Provision of final design files,
              interactive prototypes, asset libraries, and comprehensive
              documentation for development teams, ensuring a smooth transition.
            </p>
          </div>

          {/* Step 7 */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              7. Post-Launch Support / Follow-up
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong>Purpose:</strong> To monitor the project&apos;s
              performance {/* アポストロフィをエスケープ */}
              after launch, propose iterative improvements, and maintain a
              strong client relationship.
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 ml-4">
              <li>
                <strong>Performance Monitoring:</strong> Analyzing key metrics
                such as website analytics, user behavior, and conversion rates.
              </li>
              <li>
                <strong>Bug Fixing / Maintenance:</strong> Addressing any
                post-launch issues and performing routine maintenance.
              </li>
              <li>
                <strong>Iterative Improvements:</strong> Recommending
                data-driven enhancements and considering new features based on
                user feedback and performance data.
              </li>
              <li>
                <strong>Client Relationship Management:</strong> Engaging in
                regular communication to foster long-term partnerships.
              </li>
            </ul>
          </div>

          {/* Step 8 */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              8. Design System / Guidelines Creation
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong>Purpose:</strong> To establish a unified set of
              principles, components, and guidelines that ensure consistency,
              efficiency, and scalability for future design and development
              efforts.
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 ml-4">
              <li>
                <strong>Brand Guidelines:</strong> Detailed rules for logo
                usage, color palettes, typography, and imagery, reflecting the
                brand&apos;s visual identity. {/* アポストロフィをエスケープ */}
              </li>
              <li>
                <strong>UI Component Library:</strong> Definition and usage
                instructions for reusable UI components (buttons, forms,
                navigation, etc.).
              </li>
              <li>
                <strong>Style Guide:</strong> Comprehensive guidelines for
                developers, covering coding standards, accessibility
                considerations, and implementation best practices.
              </li>
              <li>
                <strong>Future Scalability:</strong> Empowering future design
                expansion and streamlining workflows for multiple designers and
                developers.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
