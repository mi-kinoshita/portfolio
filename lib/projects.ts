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
   persona?: {
    title: string;
    imageUrl: string;
    overview: string;
    attributes: Array<{
      title: string;
      description: string;
    }>;
  };
  discover?: {
    research: string;
    insights: string;
    problemDefinition: string;
  };
  process?: {
    technologyStack: string;
    toolsUsed: string;
    description?: string;
    keyRequirements?: string[];
    releaseJourney?: Array<{
      imageUrl: string;
      description: string;
    }>;
    icon: {
      imageUrl: string;
      description: string;
    };
    afterLaunchDescription?: string;
    afterLaunch?: Array<{
      imageUrl: string;
      description: string;
    }>;
  };
  solution: {
    description: string; // プロジェクト詳細ページのソリューション説明
    images?: string[];
    videos?: string[];
  };
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
    description: "Prism helps users build gentle daily self-help habits.",
    subDescription: "Key features: self-help task lists, calming habit tracking, mood-friendly themes, offline use, and optional kind reminders. Designed for anyone seeking a daily rhythm of self-kindness, especially those at risk of burnout.",
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
    process: {
      technologyStack: "React Native(Expo), Supabase, RevenueCat, LLM API",
      toolsUsed: "Figma, Visual Studio Code, GitHub",
      icon: {
        imageUrl: "/images/prythm-icon.png",
        description: "The app icon features a calming gradient that reflects the app's focus on self-care and mental well-being."
      },
    },
    solution: {
      description: "Prism offers a clean, intuitive interface with unique features like mood-friendly themes and a calming calendar view. Its offline-first approach ensures complete user privacy, making it a safe haven for self-care.",
      images: ["/images/prythm-pr.png"],
    },
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
    overview: "LunaTalk is your personal AI chat partner for practicing real-life Japanese.",
    description: "Engage in natural Japanese conversations with Luna, your AI chat partner.",
    subDescription: "Key features include: AI-powered conversational practice, instant vocabulary saving, customizable learning levels.",
    imageUrl: "/images/lunatalk-cover.png",
    appStoreLink: "https://apps.apple.com/us/app/lunatalk/id6744715809",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.miadesign.lunaTalk",
    link: "/projects/lunatalk-app",
    challenge: {
      problem: "There are very few opportunities to practice natural and enjoyable Japanese conversations.",
      situation: "Learners struggle to find affordable and flexible ways to engage in real Japanese dialogues.",
      necessary: "An AI-powered platform that makes Japanese conversation fun, accessible, and personalized."
    },
    goal: {
      objectives: "Build an AI chat app that helps learners practice natural Japanese conversations. Provide personalized learning paths and vocabulary management to boost confidence and fluency.",
      metrics: "Track progress through MRR, MAU, and learners’ self-reported confidence.",
      impact: "Enable users to practice Japanese conversations consistently, nurturing a lasting love for Japanese."
    },
    persona: {
      title: "Liz, The Japanese Enthusiast",
      imageUrl: "/images/lunatalk-persona2.png",
      overview: "Liz is a university student passionate about Japanese culture, from anime and manga to city-pop. \nShe has been studying Japanese for a couple of months but struggles with conversational fluency.",
      attributes: [
        {
          title: "Goals",
          description: "Find a fun and low-pressure way to practice without the fear of making mistakes."
        },
        {
          title: "Pain Points",
          description: "Feels embarrassed when he makes mistakes in conversation. Finds traditional textbooks boring and lacks opportunities for real-life practice."
        },
        {
          title: "Motivations",
          description: "Wants to engage with Japanese media and eventually visit Japan and communicate freely. Is motivated by fun, interactive learning experiences."
        },
        {
          title: "Quote",
          description: "“I wish I could talk to someone in Japanese every day, but I don't want to bother anyone or feel judged.”"
        }
      ]
    },
    process: {
      technologyStack: "React Native(Expo), Supabase, RevenueCat, LLM API",
      toolsUsed: "Figma, Visual Studio Code, GitHub",
           keyRequirements: [ // ★追加
        "Chat: Smooth, adaptive, and judgment-free conversation",
        "Vocabulary: Quick saving and review of words",
        "Onboarding: Clear guidance for first-time users",
      ],
      description: "To address learners’ needs for natural Japanese conversation, quick vocabulary management, and easy onboarding, I defined core requirements and chose a tech stack that supports them.",
     releaseJourney: [
      {
        imageUrl: "/images/lunatalk-drawing.jpeg",
        description: "At first, I planned a simple chat app with Luna’s image as the main feature. To move faster, I started with sketches on paper. But after the App Store rejected it for being too similar to a website, I refocused on enhancing the chat experience and adding personalized features."
      },
        {
        imageUrl: "/images/lunatalk-journey.png",
        description: "I designed chat scenarios to give learners a more natural way to engage with Japanese culture. Users can swipe to go back between screens, and buttons are concentrated at the bottom to make the app easier to navigate."
      },
      {
        imageUrl: "/images/lunatalk-uiux.png",
        description: "To make the app easier and more enjoyable to use, I simplified the screens by reducing text and introducing more intuitive icons."
      },
      {
        imageUrl: "/images/lunatalk-prof.png",
        description: "On the settings screen, users can set their images and choose chat formats. I wrote over 130 prompts for Luna to enable natural, patient, and adaptive Japanese conversation practice."
      },
     ],
          icon:  {
        imageUrl: "/images/lunatalk-icon.png",
        description: "I first used a moon icon for Luna, but it felt plain. Adding silver-like textures made it into the unique icon."
      },
      afterLaunchDescription: "Based on user feedback after launch, I implemented several UX improvements in the Chat and Settings screens.",
      afterLaunch: [
        {
          imageUrl: "/images/lunatalk-ab-chat.png",
          description: "On the chat screen, I displayed the number of chats remaining and showed the AI’s “thinking” status with a loading icon. And I moved the report function to an icon and enabled long-press for copying, which improved MAU by 40%."
        },
        {
          imageUrl: "/images/lunatalk-ab-revenue.png",
          description: "When the chat limit is reached, an alert guides users to the Revenue screen, resulting in over a 50% increase in purchases and trial conversions."
        },
                {
          imageUrl: "/images/lunatalk-ab-settings.png",
          description: "On the settings screen, I clarified the chat format language titles and changed the selection from radio buttons to a dropdown menu. I also made the reminder on/off status immediately visible by switching it to a toggle button."
        }
      ]
    },
    solution: {
      description: "LunaTalk offers a private and engaging space for practicing Japanese.",
      images: ["/images/lunatalk-solution.png"], // 詳細画像を増やす可能性
    },
    result: {
      outcomes: "Daily active users continue to rise, showing strong engagement. ASO improvements increased CVR by up to 50%, and MRR keeps growing. Careful coding has maintained a 0% crash rate.",
      solvedChallenge: "Delivered natural, judgment-free Japanese conversation practice. Created a personalized, adaptive AI that matches each learner’s pace and preferences.",
      impact: "Users can confidently practice Japanese, making learning fun, consistent, and rewarding."
    },
    feedback: {
      collected: "User feedback was gathered via email, in-app anonymous reporting, and online meetings. Users frequently used the chat feature and wanted to copy unknown words by long-pressing messages. Initially, long-press triggered the report function, creating a friction point.",
      insights: "Key insights included the need for easier vocabulary saving and more diverse conversation topics. Short daily practice sessions were most effective in keeping learners motivated.",
      improvements: "I moved the report function to an icon and enabled long-press for copying, which improved MAU by 40%. I also enhanced the AI's contextual understanding and refined the vocabulary saving UI for quicker access and review."
    },
    learnings: {
      insights: "Learned how to optimize LLM responses for real language learning and the importance of intuitive UI/UX to build user trust.",
      challengesOvercome: "Integrated a robust LLM with real-time chat, keeping low latency and natural dialogue across skill levels.",
      nextSteps: "I plan to add voice features for real-time pronunciation feedback to boost user satisfaction, refine adaptive learning paths, and expand LunaTalk to other languages."
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
    solution: {
      description: "AquaFlow provides a serene and captivating environment where a user's focus is visualized as a calming underwater journey. The charming marine animations and intuitive timer make studying an enjoyable and effective experience.",
      images: ["/images/pomo-detail-1.jpeg", "/images/pomo-detail-2.jpeg"],
    },
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
