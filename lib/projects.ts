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
    slug: "prythm-app",
    year: "01",
    title: "Prythm",
    overview: "Prythm is a digital wellness and habit tracking mobile application designed for individuals seeking a gentle, self-care-focused approach to building daily routines. It emphasizes peace, personal rhythm, and mental well-being.",
    description: "Discover a gentle way to build daily self-care habits. Prythm helps you stay in tune with your emotions and routines—so you can feel your rhythm, every day. It is a self-care focused To-Do app designed for peace, pacing, and remembering you matter.",
    subDescription: "Features include: self-care based task lists, gentle habit tracking with calming calendar views, mood-friendly themes (light, dark, warm beige), fully offline functionality (no accounts, no ads, no pressure), and optional kind reminders. Ideal for those seeking a daily rhythm of kindness to themselves, especially those prone to overwork, overthinking, or burnout.",
    imageUrl: "/images/prythm-cover.png",
    appStoreLink: "https://apps.apple.com/us/app/prythm-self-care-daily/id6747229609",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.miadesignstudio.prythme",
    link: "/projects/prythm-app", // Prythmはリンクを維持
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
      description: "Prythm offers a clean, intuitive interface with unique features like mood-friendly themes and a calming calendar view. Its offline-first approach ensures complete user privacy, making it a safe haven for self-care.",
      images: ["/images/prythm-pr.png"],
    },
    designProcessStages: [
      {
        title: "Title: Naming & Core Messaging",
        purpose: "To define the naming and core messaging that resonates with the user.",
        content: "The naming of Prythm drew inspiration from two concepts: 'prism,' which breaks light into its constituent colors, and 'rhythm,' representing habit formation. This blend reflects the app's core purpose: to help users gently 'decompose' and understand their various emotional patterns and internal rhythms, fostering a more mindful approach to self-care and consistent habit building.",
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
      text: "Prythm is a game-changer for my mental well-being. It's gentle, private, and truly helps me prioritize self-care without the usual pressure of habit trackers.",
      client: "Satisfied User"
    }
  },
  {
    slug: "lunatalk-app",
    year: "02",
    title: "LunaTalk",
    overview: "LunaTalk is your friendly AI chat partner for practicing real-life Japanese. Talk with Luna in natural conversations, save useful words to your vocabulary list, and customize your learning level and style. Whether you are a beginner or advanced learner, Luna helps you stay motivated every day!",
    description: "LunaTalk is your friendly AI chat partner for practicing real-life Japanese. Talk with Luna in natural conversations, save useful words to your vocabulary list, and customize your learning level and style. Whether you are a beginner or advanced learner, Luna helps you stay motivated every day!",
    subDescription: "New Features: Choose Your Chat Theme, Switch Learning Levels, Save Vocabulary While You Chat, Get Daily Practice Reminders, “Today’s Chat Theme” for Quick Practice, Fun Messages from Luna to Keep You Going! Whether you are preparing for a trip, a test, or just want to get better at speaking, Luna makes learning Japanese simple, fun, and interactive.",
    imageUrl: "/images/lunatalk-cover.png",
    appStoreLink: "https://apps.apple.com/us/app/lunatalk/id6744715809",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.miadesign.lunaTalk",
    // link: "/projects/lunatalk-app", // ★削除: 詳細ページが準備中のためリンクを削除
    challenge: {
      problem: "Traditional language learning apps lack natural conversational practice and feel monotonous.",
      situation: "Learners need a flexible, engaging way to practice spoken Japanese at their own pace without judgment.",
      necessary: "To provide an AI-powered conversational platform that adapts to user needs and fosters consistent practice."
    },
    goal: {
      objectives: "Create a highly interactive and personalized Japanese conversational AI. Enhance user retention through engaging features and progress tracking. Support diverse learning styles and proficiency levels.",
      metrics: "Daily active users (DAU), average session duration, vocabulary retention rate, positive user feedback on conversational fluency.",
      impact: "Significantly improve users' confidence and fluency in spoken Japanese through regular, enjoyable practice."
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
      description: "LunaTalk provides a dynamic and private environment for Japanese conversation practice. Its adaptive AI, intuitive vocabulary saving, and customizable learning themes make it a powerful tool for learners of all levels.",
      images: ["/images/lunatalk-detail-1.jpeg", "/images/lunatalk-detail-2.jpeg"],
    },
    designProcessStages: [
      {
        title: "Title: Naming & Core Messaging",
        purpose: "To define the naming and core messaging that resonates with the user.",
        content: "Brainstorming project names, defining the friendly AI persona for LunaTalk, and crafting engaging headlines.",
      },
      {
        title: "Icon: Distinctive Visual Identity",
        purpose: "To create a distinctive and recognizable icon that embodies the product's essence.",
        content: "Exploring visual representations of conversation and Japanese learning (e.g., speech bubbles, moon motifs), sketching concepts, and refining the icon's form and vibrant color palette.",
        imageUrl: "/images/lunatalk-design-icon.png",
      },
      {
        title: "Color: Harmonious Palette",
        purpose: "To establish a harmonious and impactful color palette that supports the user experience.",
        content: "Researching colors that evoke learning and friendliness, developing primary and secondary color schemes, and ensuring accessibility for diverse users.",
      },
      {
        title: "UI/UX: Intuitive Interactions",
        purpose: "To design intuitive and engaging user interfaces and seamless user flows.",
        content: "Developing chat interface layouts, defining natural conversational interaction patterns, prototyping key user journeys (chatting, vocabulary saving, level adjustment), and iterating based on user feedback for a smooth and enjoyable learning experience.",
        imageUrl: "/images/lunatalk-design-uiux.png",
      },
    ],
    result: {
      outcomes: "Achieved high user satisfaction for natural conversation and vocabulary retention. Strong early indicators of improved speaking confidence among regular users.",
      solvedChallenge: "Successfully addressed the lack of natural conversational practice in language apps, providing a personalized and non-judgmental AI partner.",
      impact: "Empowered thousands of users to practice Japanese daily, making language learning more accessible, engaging, and effective."
    },
    feedback: {
      collected: "User feedback was gathered through in-app surveys, direct email, and analysis of conversational logs to identify common user queries and areas for AI improvement.",
      insights: "Insights included the desire for more diverse conversation topics and the effectiveness of short, daily practice sessions.",
      improvements: "Iterative improvements involved expanding the AI's knowledge base for broader topics and refining the vocabulary saving UI based on user workflow analysis."
    },
    learnings: {
      insights: "Gained deep insights into optimizing LLM responses for natural language learning interactions and designing AI interfaces that build user trust.",
      challengesOvercome: "Overcame challenges in maintaining conversational coherence across various topics and ensuring AI responses were pedagogically sound.",
      nextSteps: "Integrate more advanced speech recognition and pronunciation feedback, and explore multimodal learning experiences."
    },
    testimonial: {
      text: "LunaTalk is incredible! It feels like I'm talking to a real person, and my Japanese speaking confidence has soared.",
      client: "Japanese Language Learner"
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
