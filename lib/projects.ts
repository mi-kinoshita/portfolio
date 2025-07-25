// lib/projects.ts

// プロジェクトデータの型定義
export interface Project {
  slug: string;
  title: string;
  overview: string; // プロジェクト詳細ページ用の概要
  description: string; // ProjectCard用の短い説明
  subDescription: string; // ProjectCard用のより詳細なサブ説明
  imageUrl: string; // ProjectCard用の画像URL
  appStoreLink?: string; // App Storeリンク（オプション）
  googlePlayLink?: string; // Google Playリンク（オプション）
  link?: string; // ★変更: プロジェクト詳細ページへのリンクをオプションに (link? :)
  year: string; // ProjectCard用のプロジェクト番号

  challenge: {
    problem: string;
    situation: string;
    necessary: string;
  };
  goal: {
    objectives: string;
    metrics: string;
    impact: string;
  };
  approach: Array<{
    title: string;
    purpose: string;
    activities: string;
    role: string;
  }>;
  solution: {
    description: string; // プロジェクト詳細ページのソリューション説明
    images?: string[];
    videos?: string[];
  };
  designProcessStages?: Array<{
    title: string;
    purpose: string;
    content: string;
    imageUrl?: string;
  }>;
  result: {
    outcomes: string;
    solvedChallenge: string;
    impact: string;
  };
  feedback: {
    collected: string;
    insights: string;
    improvements: string;
  };
  learnings: {
    insights: string;
    challengesOvercome: string;
    nextSteps: string;
  };
  testimonial?: {
    text: string;
    client: string;
  };
}

// すべてのプロジェクトデータ
export const allProjects: Project[] = [
  {
    slug: "prism-app",
    year: "01",
    title: "Prism",
    overview: "Prism is a digital wellness and habit tracking mobile application designed for individuals seeking a gentle, self-care-focused approach to building daily routines. It emphasizes peace, personal rhythm, and mental well-being.",
    description: "Discover a gentle way to build daily self-care habits. Prism helps you stay in tune with your emotions and routines—so you can feel your rhythm, every day. It is a self-care focused To-Do app designed for peace, pacing, and remembering you matter.",
    subDescription: "Features include: self-care based task lists, gentle habit tracking with calming calendar views, mood-friendly themes (light, dark, warm beige), fully offline functionality (no accounts, no ads, no pressure), and optional kind reminders. Ideal for those seeking a daily rhythm of kindness to themselves, especially those prone to overwork, overthinking, or burnout.",
    imageUrl: "/images/prythm-cover.png",
    appStoreLink: "https://apps.apple.com/us/app/prythm-self-care-daily/id6747229609",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.miadesignstudio.prythme",
    link: "/projects/prism-app", // Prythmはリンクを維持
    challenge: {
      problem: "Existing habit trackers often feel overwhelming, judgmental, or push users towards burnout, lacking emotional intelligence.",
      situation: "Users needed a calming, offline-first solution that prioritizes self-compassion over strict productivity metrics.",
      necessary: "To create a unique app in the wellness tech space that genuinely supports mental health and sustainable habit formation."
    },
    goal: {
      objectives: "Design an intuitive, distraction-free app with a gentle user experience. Provide a secure, private (offline-first) environment. Foster consistent, positive self-care habits.",
      metrics: "User retention for habit tracking (e.g., 7-day, 30-day), positive user reviews, perceived emotional support from the app.",
      impact: "Enable users to build sustainable self-care routines without pressure, improving daily well-being."
    },
    approach: [
      {
        title: "Ideation & Conception",
        purpose: "To define the core concept of a 'gentle' habit tracker.",
        activities: "Brainstorming 'calm' and 'supportive' app features, competitive analysis of wellness apps, initial user persona creation.",
        role: "Led concept generation, focusing on empathetic user experience."
      },
      {
        title: "Research & Discovery",
        purpose: "To understand emotional triggers in habit formation and privacy concerns.",
        activities: "Interviews with individuals prone to burnout, analysis of psychological principles of habit, market research on offline apps.",
        role: "Conducted in-depth qualitative research to inform core app philosophy."
      },
      {
        title: "Requirements Definition",
        purpose: "To specify offline functionality, notification logic, and core habit tracking features.",
        activities: "Defined detailed user flows for task creation and habit completion, specified data privacy architecture, drafted feature list.",
        role: "Architected the user experience to be secure and non-intrusive."
      },
      {
        title: "Design & Implementation",
        purpose: "To craft a soothing visual and interactive experience.",
        activities: "Designed minimalist UI, developed custom calming animations, implemented mood-friendly themes (light, dark, warm beige) with React Native.",
        role: "Oversaw full-stack implementation, ensuring design integrity and performance."
      },
      {
        title: "Testing & Refinement",
        purpose: "To ensure app stability, usability, and emotional resonance.",
        activities: "Extensive beta testing with target users, performance testing, bug fixing, gathering qualitative feedback on 'feelings' during use.",
        role: "Managed testing cycles and iterated designs based on emotional and functional feedback."
      },
      {
        title: "Launch & Post-Launch",
        purpose: "To release to App Store/Google Play and monitor initial user response.",
        activities: "App Store optimization (ASO), soft launch, initial user review monitoring, community engagement.",
        role: "Coordinated launch activities and established channels for ongoing user support."
      },
    ],
    solution: {
      description: "Prism offers a clean, intuitive interface with unique features like mood-friendly themes and a calming calendar view. Its offline-first approach ensures complete user privacy, making it a safe haven for self-care.",
      images: ["/images/prythm-pr.png"],
    },
    designProcessStages: [
      {
        title: "Title: Naming & Core Messaging",
        purpose: "To define the naming and core messaging that resonates with the user.",
        content: "The naming of Prism drew inspiration from two concepts: 'prism,' which breaks light into its constituent colors, and 'rhythm,' representing habit formation. This blend reflects the app's core purpose: to help users gently 'decompose' and understand their various emotional patterns and internal rhythms, fostering a more mindful approach to self-care and consistent habit building.",
      },
      {
        title: "Icon: Distinctive Visual Identity",
        purpose: "To create a distinctive and recognizable icon that embodies the product's essence.",
        content: "Initially, the icon design focused on habit formation, leading to a moon motif and later a checkmark for tasks. However, recognizing the app's core emphasis on emotional well-being, we explored icons derived from the app's mood colors. This also faced challenges with Apple's 'Liquid Glass' design requirements, leading to the current, distinctive hexagonal prism design.",
        imageUrl: "/images/prythm-icon.png",
      },
      {
        title: "Color: Harmonious Palette",
        purpose: "To establish a harmonious and impactful color palette that supports the user experience.",
        content: "Researching color psychology for wellness, developing primary and secondary color schemes (light, dark, warm beige), and ensuring accessibility.",
        imageUrl: "/images/prythm-color.png",
      },
      {
        title: "UI/UX: Intuitive Interactions",
        purpose: "To design intuitive and engaging user interfaces and seamless user flows.",
        content: "Developing minimalist screen layouts, defining gentle interaction patterns, prototyping key user journeys (habit tracking, task management), and iterating based on early feedback for a calming experience.",
        imageUrl: "/images/prythm-uiux.png",
      },
    ],
    result: {
      outcomes: "Achieved positive user reviews praising its calming effect and privacy features. Consistently high engagement rates for self-care routines compared to competitors.",
      solvedChallenge: "Successfully created a non-intrusive, supportive habit tracker that addresses the emotional fatigue associated with traditional productivity apps.",
      impact: "Empowered users to consistently practice self-care, leading to reported improvements in daily well-being and reduced stress."
    },
    feedback: {
      collected: "User feedback was continuously collected through in-app surveys, and direct email communication, focusing on emotional response and feature suggestions.",
      insights: "Key insights revealed the strong preference for customizable reminders and the positive impact of the offline mode on user peace of mind.",
      improvements: "Iterative improvements included expanding theme customization and fine-tuning habit completion based on user delight signals."
    },
    learnings: {
      insights: "Deepened understanding of psychological triggers for sustainable habit formation and the critical importance of user privacy in wellness tech.",
      challengesOvercome: "Successfully navigated the complexities of offline-first data synchronization and ensuring a smooth, non-disruptive user experience.",
      nextSteps: "Explore integrating more subtle, AI-driven personalized insights (without compromising privacy) to further enhance the self-care journey."
    },
    testimonial: {
      text: "Prism is a game-changer for my mental well-being. It's gentle, private, and truly helps me prioritize self-care without the usual pressure of habit trackers.",
      client: "Satisfied User"
    }
  },
  {
    slug: "lunatalk-app",
    year: "02",
    title: "LunaTalk",
    overview: "LunaTalk is your personal AI chat partner for practicing real-life Japanese. Dive into natural conversations, save new vocabulary to your custom list, and adapt your learning experience with adjustable levels and styles. Luna makes daily Japanese practice simple, fun, and motivating for learners of all levels.",
    description: "Engage in natural Japanese conversations with Luna, your AI chat partner. Seamlessly save vocabulary, customize learning levels, and get daily practice reminders. Ideal for anyone aiming to improve spoken Japanese for travel, exams, or daily use.",
    subDescription: "Key features include: AI-powered conversational practice, instant vocabulary saving, customizable learning levels (beginner to advanced), diverse chat themes, daily practice reminders, and fun motivational messages from Luna. Stay motivated and build fluency through interactive, judgment-free practice.",
    imageUrl: "/images/lunatalk-cover.png",
    appStoreLink: "https://apps.apple.com/us/app/lunatalk/id6744715809",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.miadesign.lunaTalk",
    link: "/projects/lunatalk-app", // ★更新: 詳細ページへのリンクを有効化
    challenge: {
      problem: "Traditional language learning methods often lack opportunities for natural, judgment-free conversational practice, leading to stagnation in spoken fluency and motivation.",
      situation: "Learners struggle to find affordable and flexible ways to engage in authentic Japanese dialogues, frequently feeling intimidated or bored by rigid curricula.",
      necessary: "To create an accessible, adaptive AI-powered platform that simulates real conversations, encourages consistent practice, and provides personalized feedback to overcome learning plateaus."
    },
    goal: {
      objectives: "Develop an intuitive and engaging AI chat application that simulates natural Japanese conversations. Provide personalized learning paths and vocabulary management. Increase user confidence and fluency in spoken Japanese.",
      metrics: "Average daily session duration, number of vocabulary words saved per user, user retention rates (especially for repeat conversations), self-reported confidence improvements.",
      impact: "Enable users to practice Japanese speaking consistently and effectively, bridging the gap between theoretical knowledge and practical application, fostering a lifelong love for the language."
    },
    approach: [
      {
        title: "Ideation & Conception",
        purpose: "To define the core concept of an AI conversation partner for language learning.",
        activities: "Brainstorming AI interaction scenarios, initial feature conceptualization (e.g., vocabulary saving, level adjustment), competitor analysis of language apps.",
        role: "Led concept generation, focusing on natural and effective conversational experiences."
      },
      {
        title: "Research & Discovery",
        purpose: "To understand language learner pain points and AI conversational best practices.",
        activities: "Conducted interviews with Japanese learners of various levels, researched pedagogical approaches for language acquisition, analyzed existing conversational AI limitations.",
        role: "Conducted in-depth qualitative research to inform core app philosophy."
      },
      {
        title: "Requirements Definition",
        purpose: "To specify AI response logic, vocabulary management, and personalization features.",
        activities: "Defined conversational flows, outlined vocabulary saving mechanisms, specified learning level adaptation algorithms, drafted UI/UX for chat interface.",
        role: "Translated research into detailed functional and technical requirements for AI and app features."
      },
      {
        title: "Design & Implementation",
        purpose: "To build an intuitive and engaging conversational interface.",
        activities: "Designed chat UI, developed custom animations for AI responses, integrated LLM APIs, implemented vocabulary saving and level adjustment features with React Native.",
        role: "Oversaw front-end and back-end integration, ensuring seamless user interaction with AI."
      },
      {
        title: "Testing & Refinement",
        purpose: "To ensure conversational naturalness, accuracy, and user engagement.",
        activities: "Extensive beta testing with diverse language learners, AI response quality assessment, usability testing for feature adoption, bug fixing.",
        role: "Managed testing cycles and iterated AI models and UI based on user feedback and performance metrics."
      },
      {
        title: "Launch & Post-Launch",
        purpose: "To release the app and continue refining based on live user data.",
        activities: "App Store Optimization (ASO), community engagement, continuous monitoring of conversational logs and user feedback for AI model fine-tuning.",
        role: "Coordinated launch and established a continuous improvement loop for AI and app features."
      },
    ],
    solution: {
      description: "LunaTalk provides a dynamic and private environment for Japanese conversation practice, accessible anytime, anywhere. Its adaptive AI, intuitive vocabulary saving, and customizable learning themes (e.g., 'city pop', 'anime') make it a powerful and personalized tool for learners of all levels. The minimalist design ensures a distraction-free experience, allowing users to fully immerse themselves in the conversation and focus on language acquisition.",
      images: ["/images/lunatalk-pr.png"], // 詳細画像を増やす可能性
    },
    designProcessStages: [
      {
        title: "Title: Naming & Core Messaging",
        purpose: "To define the naming and core messaging that resonates with the user, drawing inspiration from key cultural elements.",
        content: "The concept for LunaTalk is deeply rooted in rich Japanese culture, including anime, city pop, and games. The project began with the charming character image leading to the selection of 'LunaTalk' as a memorable and friendly title. In this phase, a distinctive purple was established as the key color, setting the overall visual direction for the app.",
      },
      {
        title: "Icon: Distinctive Visual Identity",
        purpose: "To create a distinctive and recognizable icon that embodies the product's essence, reflecting its friendly AI and Japanese learning focus.",
        content: "While a moon motif was chosen for the icon to align with Luna, a simple silhouette felt generic and lacked strong appeal, failing to convey Luna's unique charm. Therefore, we incorporated textures reminiscent of silver accessories Luna might wear, evolving the design into the distinct icon it is today.",
        imageUrl: "/images/lunatalk-icon.png",
      },
      {
        title: "Color: Harmonious Palette",
        purpose: "To establish a harmonious and impactful color palette that supports the user experience and evokes learning and friendliness.",
        content: "To enhance user motivation and create a friendly atmosphere, we conducted research into color psychology. Using Luna's distinctive purple as the base, we built primary and secondary color palettes, ensuring accessibility. This brought consistency and visual appeal to the entire app.",
        imageUrl: "/images/lunatalk-color.png",
      },
      {
        title: "UI/UX: Intuitive Interactions",
        purpose: "To design intuitive and engaging user interfaces and seamless user flows, incorporating gamification and clear visual communication.",
        content: "To ensure users enjoy a visually and interactively pleasing experience, we integrated gamification elements into the UI/UX. Development proceeded based on initial concept sketches, but we encountered a challenge: too much text information created a chaotic impression. To address this, we significantly increased the use of icons to improve visual heuristics, resulting in a more intuitive and user-friendly chat interface.",
        imageUrl: "/images/lunatalk-uiux.png",
      },
    ],
    result: {
      outcomes: "Achieved significant improvements in user engagement and conversational fluency, validated by increased daily active users and positive user feedback. Vocabulary retention rates showed marked improvement due to in-context saving features.",
      solvedChallenge: "Successfully addressed the critical need for natural conversational practice in Japanese, providing a non-judgmental and infinitely patient AI partner that adapts to individual learning paces and preferences.",
      impact: "Empowered thousands of users to confidently practice spoken Japanese, transforming language learning into an enjoyable and highly effective daily habit, and fostering a strong sense of accomplishment among learners."
    },
    feedback: {
      collected: "User feedback was continuously gathered through in-app surveys, direct email communication, and analysis of anonymous conversational logs to identify common user queries, areas for AI improvement, and popular chat themes.",
      insights: "Key insights included a strong demand for more diverse conversation topics (e.g., business Japanese, specific cultural scenarios) and the effectiveness of short, daily practice sessions in maintaining user motivation and consistency.",
      improvements: "Iterative improvements involved expanding the AI's contextual understanding for broader topics and optimizing the vocabulary saving UI for quicker access and review."
    },
    learnings: {
      insights: "Gained profound insights into optimizing LLM responses for authentic language learning interactions, and the critical role of intuitive UI/UX in building user trust and engagement with AI-powered tools.",
      challengesOvercome: "Successfully navigated the complexities of integrating a robust LLM with real-time conversational features, ensuring low latency and maintaining natural dialogue flow across various proficiency levels.",
      nextSteps: "Future iterations will explore integrating more advanced speech recognition for real-time pronunciation analysis, developing adaptive learning paths based on performance data, and expanding into other languages to replicate LunaTalk's success."
    },
    testimonial: {
      text: "LunaTalk has completely transformed my Japanese learning. It feels like I'm talking to a real person, and the ability to save new words instantly is a game-changer. My confidence in speaking has soared!",
      client: "Japanese Language Learner & LunaTalk User"
    }
  },
  {
    slug: "aquaflow-pomodoro",
    year: "03",
    title: "Pomodoro App",
    overview: "AquaFlow is a Pomodoro timer application specifically designed for teenagers, aiming to make focused study sessions engaging and distraction-free through aquatic themes and minimalist design.",
    description: "Dive into focused study sessions with AquaFlow, a Pomodoro app designed for teenagers. Visualize your concentration as a calming journey into the ocean, accompanied by adorable marine creatures. Its minimalist design eliminates distractions, helping you stay in the zone.",
    subDescription: "Key features include charming marine animations, customizable focus timers, and a serene interface to enhance productivity. Get ready to embark on a delightful and effective study adventure – stay tuned for its release!",
    imageUrl: "/images/pomo-cover.png",
    // link: "/projects/aquaflow-pomodoro", // ★削除: 詳細ページが準備中のためリンクを削除
    challenge: {
      problem: "Teenagers struggle with focus and distractions during study sessions, finding traditional productivity apps unengaging or overwhelming.",
      situation: "There was a need for a fun, visually appealing, and intuitive Pomodoro app that resonates with a younger audience and promotes healthy study habits.",
      necessary: "To create an innovative tool that helps teens maintain concentration and manage their study time effectively, making productivity enjoyable."
    },
    goal: {
      objectives: "Develop an app with captivating marine animations, customizable focus timers, and a serene interface. Achieve high user engagement and retention among teenagers.",
      metrics: "Average session duration, daily active users (DAU), completion rate of Pomodoro sessions, positive feedback on visual appeal and ease of use.",
      impact: "Improve study efficiency and reduce digital distractions for teenage users."
    },
    approach: [
      {
        title: "Ideation & Conception",
        purpose: "To brainstorm themes and features that appeal to teenagers and enhance focus.",
        activities: "Conceptualized aquatic themes, sketched character designs for marine creatures, defined core Pomodoro timer functionality.",
        role: "Led the creative conceptualization and defined the unique selling proposition for the target demographic."
      },
      {
        title: "Research & Discovery",
        purpose: "To understand teenagers' digital habits, preferred visual styles, and common study distractions.",
        activities: "Conducted surveys and informal interviews with high school students, analyzed popular educational apps, researched attention span dynamics in teens.",
        role: "Gathered insights into the psychological aspects of teen engagement and focus."
      },
      {
        title: "Requirements Definition",
        purpose: "To specify timer settings, animation triggers, and notification behaviors.",
        activities: "Mapped out user flows for setting and completing Pomodoro sessions, defined animation states for marine creatures, outlined data privacy requirements.",
        role: "Translated research insights into actionable design and technical specifications."
      },
      {
        title: "Design & Implementation",
        purpose: "To create an immersive and distraction-free aquatic study environment.",
        activities: "Designed a minimalist UI with calming color palettes, developed custom marine creature animations, integrated responsive timer visuals with React Native.",
        role: "Oversaw the visual and interactive design, ensuring technical feasibility during development."
      },
      {
        title: "Testing & Refinement",
        purpose: "To validate usability, engagement, and identify any distracting elements.",
        activities: "Conducted user testing with teenagers to assess visual appeal and timer effectiveness, collected feedback on perceived focus levels, iterated on animation pacing.",
        role: "Facilitated user testing and led iterative design adjustments based on direct user feedback."
      },
      {
        title: "Launch & Post-Launch",
        purpose: "To release the app and monitor its reception among the target audience.",
        activities: "Pre-launch marketing to educational communities, app store listing optimization, initial user engagement analysis.",
        role: "Supported launch strategy and planned for future content updates based on early adoption data."
      },
    ],
    solution: {
      description: "AquaFlow provides a serene and captivating environment where a user's focus is visualized as a calming underwater journey. The charming marine animations and intuitive timer make studying an enjoyable and effective experience.",
      images: ["/images/pomo-detail-1.jpeg", "/images/pomo-detail-2.jpeg"],
    },
    designProcessStages: [
      {
        title: "Title: Naming & Core Messaging",
        purpose: "To define the naming and core messaging that appeals to teenagers.",
        content: "Brainstorming fun, aquatic-themed names and developing clear, motivating messages for AquaFlow.",
      },
      {
        title: "Icon: Distinctive Visual Identity",
        purpose: "To create a distinctive and recognizable icon that captures the app's aquatic theme and appeals to teens.",
        content: "Designing an icon featuring marine elements (e.g., fish, waves) in a minimalist, friendly style. Iterating on shapes and colors to ensure visual appeal.",
        imageUrl: "/images/prythm-icon.png",
      },
      {
        title: "Color: Harmonious Palette",
        purpose: "To establish a harmonious and calming color palette conducive to focused study.",
        content: "Selecting serene blues, greens, and soft pastels to create a peaceful underwater atmosphere, while ensuring good contrast and accessibility.",
      },
      {
        title: "UI/UX: Intuitive Interactions",
        purpose: "To design intuitive and engaging user interfaces for study timers and break management.",
        content: "Developing clean screen layouts for the Pomodoro timer, integrating charming marine creature animations, and prototyping seamless user flows for starting/pausing sessions and tracking progress.",
        imageUrl: "/images/pomo-design-uiux.png",
      },
    ],
    result: {
      outcomes: "Initial feedback indicates high engagement among teenagers due to the unique theme and minimalist design. Early metrics show increased session completion rates compared to generic timers.",
      solvedChallenge: "Successfully addressed the challenge of engaging teenagers in focused study by transforming a mundane task into a delightful and visually rewarding experience.",
      impact: "Contributed to better study habits and reduced digital distractions for teenage users, offering a fresh approach to productivity."
    },
    feedback: {
      collected: "Feedback was primarily collected through focused group discussions with teenagers and early beta testers, with a strong emphasis on visual appeal and perceived focus improvement.",
      insights: "Insights highlighted the appeal of character progression within the aquatic theme and the need for flexible break times to accommodate diverse study patterns.",
      improvements: "Adjustments were made to character animation speeds and the sound design to enhance the calming effect, and additional customization options for session lengths are planned."
    },
    learnings: {
      insights: "Learned the importance of gamification and aesthetic appeal in productivity tools for younger demographics.",
      challengesOvercome: "Navigated the challenge of balancing engaging visuals with a distraction-free interface, ensuring animations supported focus rather than detracting from it.",
      nextSteps: "Future iterations will include unlockable marine creatures and customizable underwater environments to further enhance user motivation and long-term engagement."
    },
    testimonial: {
      text: "AquaFlow makes studying actually fun! The little fish are so cute and it really helps me stay focused without feeling bored.",
      client: "High School Student (Beta Tester)"
    }
  },
];
