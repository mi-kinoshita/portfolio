// NewsletterSection.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // 封筒のアイコン

const NewsletterSection = () => {
  // フォーム送信時の処理 (ここでは仮の処理)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    alert(`購読リクエスト: ${email || "メールアドレスが入力されていません"}`);
    // ここで実際のニュースレター購読処理 (API連携など) を実装します
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 text-center bg-gray-100 dark:bg-gray-800 font-sans">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Join my newsletter
        </h2>
        <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 mb-8 leading-relaxed">
          Receive occasional updates about my projects, articles, and design
          tips.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
