/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      darkMode: "class", // ダークモードは 'class' 戦略を使用
      theme: {
        extend: {
          // カスタムカラーパレットを定義しないことで、Tailwindの標準カラーがすべて利用可能になります
          // colors: {},
          // fontFamily の設定を削除して、Tailwindのデフォルト（ブラウザのデフォルト）に戻す
          // fontFamily: {
          //   sans: ['var(--font-inter)', 'sans-serif'],
          // },
        },
      },
    },
  },
};
export default config;
