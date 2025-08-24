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
  userResearch?: {
    goal: string;
    methods: string[];
    insights: string[];
  };
   persona?: Array<{
    title: string;
    imageUrl: string;
    overview: string;
    attributes: Array<{
      title: string;
      description: string;
    }>;
  }>;
      userJourney?: {
      imgUrl: string;
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
    userFlow?: {
    description: string; // プロジェクト詳細ページのソリューション説明
    images: string;
  };
  solution: {
    images: Array<{
      imageUrl: string;
      description: string;
    }>;
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
    overview: "Prism is a Self-help Todo app for users seeking a calming supportive approach to daily routines.",
    description: "Prism helps users create a rhythm of kindness through gentle habit tracking.",
    subDescription: "Key features: calm habit tracking, offline privacy, soft themes, and gentle reminders. Designed for individuals seeking emotional balance and burnout prevention.",
    imageUrl: "/images/prythm-cover.png",
    appStoreLink: "https://apps.apple.com/us/app/prism-self-care-ai/id6747229609",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.miadesignstudio.prythme",
    link: "/projects/prism-app",
    challenge: {
      problem: "Many habit trackers prioritize productivity and strict metrics, causing feelings of guilt or burnout.",
      situation: "Users wanted a non-judgmental app that could work offline and encourage healthy daily habits.",
      necessary: "Build a unique, minimalistic app focusing on emotional well-being."
    },
    goal: {
      objectives: "Create a distraction-free design with soft colors and calming UX flows.",
      metrics: "Track retention, positive sentiment, and user engagement.",
      impact: "Help users feel supported while building daily routines."
    },
    userResearch: {
      goal: "Understand how burnout affects user's app interactions.",
      methods: ["User surveys", "1:1 interviews"],
      insights: [
        "Users feel anxious when apps are too gamified.",
        "Privacy and offline access were critical.",
        "Simplicity improves long-term engagement."
      ]
    },
    persona: [ {
      title: "Emma, The Caring Mom",
      imageUrl: "/images/prism-persona1.png",
      overview: "A caring mother in her 30s who puts her kids first, neglecting her own needs and health.",
      attributes: [
        { title: "Goal", description: "Take care of herself while caring for her kids." },
        { title: "Pain Point", description: "Always puts family first, feels tired, often sick, guilty about self-care." },
        { title: "Motivation", description: "Stay healthy and happy to be present for her children." },
        { title: "Quote", description: "I love my kids, but I'm always exhausted. I wish I had time for me." }
      ],
    },
     {
      title: "Thomas, The Driven Professional",
      imageUrl: "/images/prism-persona2.png",
      overview: "A driven man in his 50s who overworks and risks burnout despite his dedication to fitness and career.",
      attributes: [
        { title: "Goal", description: "Find balance between work, fitness, and rest." },
        { title: "Pain Point", description: "Works too much, pushes himself hard, burned out, struggles to relax." },
        { title: "Motivation", description: "Wants a healthier lifestyle and mental balance." },
        { title: "Quote", description: "I push myself to succeed, but I'm burning out. I need a break." }
      ],
    },
  ],
        userJourney: {
        imgUrl: "/images/prism-userjourney.png"
      },
    process: {
      technologyStack: "React Native (Expo), Supabase, RevenueCat",
      toolsUsed: "Figma, GitHub, Visual Studio Code",
      keyRequirements: [ // ★追加
        "Calming Design: Non-Judgmental visuals and simple layouts to create a safe space for users.",
        "Instant Start, No Onboarding: Allow users to add tasks or track mood immediately, reducing setup friction.",
        "Offline-First & Privacy-Focused: Enable functionality offline and protect sensitive mental health data.",
        "Mood & Habit Tracking Visualization: Show graphs of mood trends and task completion to promote self-awareness.",
        "AI-Powered Reflection (Premium Feature): Use accumulated data to deliver personalized insights and mental wellness tips.",
      ],
      description: "Prism was designed with mental health expertise and insights from my psychiatric hospital training, prioritizing user well-being over trends.",
      releaseJourney: [
        {
          imageUrl: "/images/prism-drawing.jpeg",
          description: "Market research showed a UX trend: collecting detailed onboarding surveys, scoring user's mental state, and showcasing progress through numbers. However, I intentionally chose no onboarding and no numeric scoring to reduce emotional burden."
        },
                {
          imageUrl: "/images/prism-add-task.png",
          description: "I simplified the UX by removing the onboarding flow, focusing on a minimalist, streamlined experience."
        },
        {
          imageUrl: "/images/prism-edit-task.png",
          description: "I also eliminated gestures like long-press and swipe, designing the interface so that users interact through simple icon taps."
        },
        {
          imageUrl: "/images/prism-mood.png",
          description: "Mood is expressed through colors instead of words, reflecting that emotions are complex and cannot always be captured by labels like “angry” , “sad” and “happy”. This abstract approach creates a gentle, judgment-free experience."
        },
                        {
          imageUrl: "/images/prism-story.png",
          description: "For the journaling feature, I used React Native's KeyboardAvoidingView to deliver an excellent user experience. This ensures that, on a wide range of devices, the keyboard never hides the text input, allowing users to type comfortably."
        },
        {
          imageUrl: "/images/prism-stats.png",
          description: "The Stats screen uses a GitHub-inspired heatmap to visualize task activity and mental patterns. Rather than rewarding darker colors, it helps users find a personal balance, supporting self-awareness and preventing burnout. I also implemented the Calendar screen to visualize activity on a monthly basis."
        },
                {
          imageUrl: "/images/prism-danger.png",
          description: "All app data is stored locally on the device, ensuring maximum privacy as developers cannot access it. Users can also delete their data at any time."
        },
                {
          imageUrl: "/images/prism-colors.png",
          description: "I created three themes main, light, and dark using Beige as the main color. Beige symbolizes simplicity, calmness, and neutrality, perfectly reflecting the image of Prism. It is also a trending color, making it both relevant and visually appealing."
        },
      ],
      icon: {
        imageUrl: "/images/prythm-icon.png",
        description: "The icon symbolizes light representing user's emotions, guiding them forward. The app was initially named “Lune” (moon-inspired), but I renamed it “Prism” to better align with its concept. The design also takes into account Apple's Liquid Glass aesthetic, introduced around the same period."
      }
    },
    userFlow: {
      images: "/images/prism-userflow.png",
      description: "Users log daily activities on the Home screen and reflect with AI insights in the Chat screen, helping boost self-esteem. A two-week trial with reminders prevents auto-renewals, and a clear “No payment due now” message keeps the experience stress-free."
    },
    solution: {
      images: [
        {
          imageUrl: "/images/prism-pr.png",
          description: "Prism was developed with eight screens. App Store/Google Play screenshots were optimized using ASO and SEO principles, achieving over 500 impressions per month without any paid advertising. Try it for free!"
        }
      ]
    },
    result: {
  "outcomes": "Daily active users continue to rise, showing strong engagement. ASO improvements increased CVR by up to 70%, and MRR keeps growing. Careful coding has maintained a 0% crash rate.",
  "solvedChallenge": "Successfully delivered a non-judgmental, privacy first habit tracker that promotes emotional well-being and sustainable daily routines.",
  "impact": "Demonstrated that emotional UX principles gentle colors, minimal interactions, and offline first privacy significantly improve user retention and satisfaction in wellness apps."
},

feedback: {
  "collected": "Gathered through in-app analytics, user surveys, and online meetings.",
  "insights": "Users appreciated the calm design, offline functionality, and gentle reminders, highlighting the app's ability to reduce anxiety often caused by traditional habit trackers.",
  "improvements": "Added theme customization and refined reminder settings based on user feedback."
},

learnings: {
  "insights": "Designing for emotional well-being requires balancing simplicity with functionality; removing gamification elements increased trust and engagement.",
  "challengesOvercome": "Implemented seamless offline data storage and syncing while ensuring full privacy protection, which was a technical and UX challenge.",
  "nextSteps": "Plan to integrate AI-driven, privacy-safe reflections to provide deeper insights without overwhelming users."
},

    testimonial: {
      text: "Before Prism, I often felt stressed and out of control. Now it helps me relax and feel calm every day.",
      client: "Robert"
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
      metrics: "Track progress through MRR, MAU, and learner's self-reported confidence.",
      impact: "Enable users to practice Japanese conversations consistently, nurturing a lasting love for Japanese."
    },
      userResearch: {
    goal: "Identify learner's pain points in practicing natural Japanese",
    methods: ["User interviews", "Online survey"],
    insights: [
      "Learners felt anxious about making mistakes",
      "Vocabulary management was often fragmented",
      "Finds traditional textbooks boring"
    ]
  },
    persona: [ {
      title: "Liz, The Japanese Enthusiast",
      imageUrl: "/images/lunatalk-persona2.png",
      overview: "Liz is a university student passionate about Japanese culture, from anime and manga to city-pop. \nShe has been studying Japanese for a couple of months but struggles with conversational fluency.",
      attributes: [
        {
          title: "Goal",
          description: "Find a fun and low-pressure way to practice without the fear of making mistakes."
        },
        {
          title: "Pain Point",
          description: "Feels embarrassed when he makes mistakes in conversation. Finds traditional textbooks boring and lacks opportunities for real-life practice."
        },
        {
          title: "Motivation",
          description: "Wants to engage with Japanese media and eventually visit Japan and communicate freely. Is motivated by fun, interactive learning experiences."
        },
        {
          title: "Quote",
          description: "“I wish I could talk to someone in Japanese every day, but I don't want to bother anyone or feel judged.”"
        }
      ],
    },
  ],
        userJourney: {
        imgUrl: "/images/lunatalk-user-journey.png"
      },
    process: {
      technologyStack: "React Native(Expo), Supabase, RevenueCat, LLM API",
      toolsUsed: "Figma, Visual Studio Code, GitHub",
           keyRequirements: [ // ★追加
        "Chat: Smooth, adaptive, and judgment-free conversation",
        "Vocabulary: Quick saving and review of words",
        "Onboarding: Clear guidance for first-time users",
      ],
      description: "To address learner's needs for natural Japanese conversation, quick vocabulary management, and easy onboarding, I defined core requirements and chose a tech stack that supports them.",
     releaseJourney: [
      {
        imageUrl: "/images/lunatalk-drawing.jpeg",
        description: "At first, I planned a simple chat app with Luna's image as the main feature. To move faster, I started with sketches on paper. But after the App Store rejected it for being too similar to a website, I refocused on enhancing the chat experience and adding personalized features."
      },
        {
        imageUrl: "/images/lunatalk-journey.png",
        description: "I designed chat scenarios to give learners a more natural way to engage with Japanese culture. Users can swipe to go back between screens, and buttons are concentrated at the bottom to make the app easier to navigate."
      },
      {
        imageUrl: "/images/lunatalk-uiux.png",
        description: "I enhanced engagement with Duolingo-inspired gamification, using icons for clarity, a dynamic progress graph, and daily random chat topics and encouragement from Luna."
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
          description: "On the chat screen, I displayed the number of chats remaining and showed the AI's “thinking” status with a loading icon. And I moved the report function to an icon and enabled long-press for copying, which improved MAU by 40%."
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
    userFlow: {
      description: "Using RevenueCat data showing most purchases happen shortly after first launch, I designed LunaTalk's user journey so trial or purchase can occur within five minutes.",
      images: "/images/lunatalk-userflow.png",
    },
    solution: {
      images: [
                {
          imageUrl: "/images/lunatalk-scs.png",
          description: "LunaTalk was developed with seven core screens. App Store/Google Play screenshots were optimized using ASO and SEO principles, achieving over 1,000 impressions per month without any paid advertising. Try it for free!"
        }
      ]
    },
    result: {
      outcomes: "Daily active users continue to rise, showing strong engagement. ASO improvements increased CVR by up to 50%, and MRR keeps growing. Careful coding has maintained a 0% crash rate.",
      solvedChallenge: "Delivered natural, judgment-free Japanese conversation practice. Created a personalized, adaptive AI that matches each learner's pace and preferences.",
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
      images: [
      ]
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
