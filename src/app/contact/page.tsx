// app/contact/page.tsx
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDribbble,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 font-sans">
      <main className="flex-grow flex items-center justify-center py-16 md:py-24 lg:py-32 px-6">
        <section className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
            Feel free to reach out with any questions or inquiries.I'll be in
            touch shortly.
          </p>

          {/* Formspree と連携するように action 属性と隠しフィールドを追加 */}
          <form
            action="https://formspree.io/f/mdkzwewl" // ここをあなたの Formspree フォームのURLに置き換えてください！
            method="POST"
            className="bg-neutral-100 dark:bg-neutral-950 p-8 rounded-lg shadow-md mb-12 border border-gray-200 dark:border-gray-700"
          >
            <div className="mb-6 text-left">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 focus:ring-blue-600 focus:border-blue-600 outline-none"
                placeholder="Your Name"
                required // 必須フィールドにする
              />
            </div>
            <div className="mb-6 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 focus:ring-blue-600 focus:border-blue-600 outline-none"
                placeholder="you@example.com"
                required // 必須フィールドにする
              />
            </div>
            <div className="mb-6 text-left">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 focus:ring-blue-600 focus:border-blue-600 outline-none resize-y"
                placeholder="Enter your message here..."
                required // 必須フィールドにする
              ></textarea>
            </div>
            {/* Formspree のスパム対策用隠しフィールド */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button
              type="submit"
              className="w-full bg-neutral-800 dark:bg-neutral-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
