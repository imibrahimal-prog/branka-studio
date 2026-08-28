export interface ServiceFAQ {
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export interface ServiceDeliverable {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

export interface ServiceWorkflowStep {
  stepNumber: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

export interface ServiceItemData {
  slug: string;
  titleAr: string;
  titleEn: string;
  taglineAr: string;
  taglineEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  metaTitleAr: string;
  metaTitleEn: string;
  metaDescAr: string;
  metaDescEn: string;
  keywordsAr: string[];
  keywordsEn: string[];
  problemsSolvedAr: string[];
  problemsSolvedEn: string[];
  deliverables: ServiceDeliverable[];
  workflow: ServiceWorkflowStep[];
  faqs: ServiceFAQ[];
  relatedCategory: string;
  iconName: string;
  image: string;
}

export const servicesList: ServiceItemData[] = [
  // 1. الهوية البصرية (Visual Identity & Branding)
  {
    slug: "visual-identity",
    image: "/images/services/identity-3d.jpg",
    titleAr: "تصميم الهوية البصرية والبراندينج",
    titleEn: "Visual Identity & Branding Design",
    taglineAr: "بناء أنظمة بصرية متكاملة تمنح علامتك تميزاً وتماسكاً في السوق السعودي",
    taglineEn: "Comprehensive visual systems delivering distinction and market coherence",
    shortDescAr: "نبتكر لعلامتك هوية بصرية متكاملة تعبّر عن قيمك وأهدافك، وتضمن حضوراً احترافياً عبر جميع نقاط الاتصال والمطبوعات والتطبيقات الرقمية.",
    shortDescEn: "We create distinctive visual identities reflecting your brand essence and ensuring unified presence across all physical and digital touchpoints.",
    fullDescAr: "في برانكا للإعلان والتسويق، نؤمن بأن الهوية البصرية ليست مجرد شعار، بل هي اللغة البصرية الكاملة التي تبني الثقة مع عملائك. نقوم بدراسة قطاع نشاطك والجمهور المستهدف وتصميم الشعار، لوحة الألوان المعتمدة، الطباعة، المطبوعات التجارية، أدلة الاستخدام الإرشادية، ونماذج التغليف لتظهر علامتك بمستوى راقٍ ومستدام.",
    fullDescEn: "At Branka Advertising & Marketing, brand identity is more than a logo; it is the visual language that establishes authority and customer trust. We conduct market research, competitor analysis, and craft custom typography, palettes, corporate stationery, comprehensive brand guidelines, and packaging.",
    metaTitleAr: "شركة تصميم هوية بصرية في الرياض | برانكا للإعلان والتسويق",
    metaTitleEn: "Visual Identity & Branding Agency in Riyadh | Branka",
    metaDescAr: "خدمات تصميم الهوية البصرية والبراندينج للشركات والمتاجر في السعودية. شعارات مبتكرة، أدلة هوية شاملة، ومطبوعات فاخرة من برانكا للإعلان والتسويق.",
    metaDescEn: "Premier visual identity and brand design agency in Riyadh, Saudi Arabia. Comprehensive brand guidelines, bespoke logos, and luxury corporate identity by Branka.",
    keywordsAr: [
      "شركة هوية بصرية في الرياض",
      "تصميم هوية تجارية السعودية",
      "تصميم شعارات احترافية",
      "دليل الهوية البصرية",
      "براندينج الرياض",
      "برانكا للإعلان والتسويق",
    ],
    keywordsEn: [
      "visual identity Riyadh",
      "branding agency Saudi Arabia",
      "corporate brand guidelines",
      "logo design Riyadh",
      "Branka Advertising & Marketing",
    ],
    problemsSolvedAr: [
      "تشتت المظهر البصري للعلامة التجارية عبر المنصات والمطبوعات المختلفة.",
      "ضعف تميز الشعار الحالي وصعوبة تذكره من قبل العملاء المستهدفين.",
      "غياب دليل إرشادي واضح (Brand Guidelines) يلزم فرق العمل والموردين بالمعايير الصحيحة.",
      "عدم ملاءمة الهوية للتوسع المستقبلي أو المعايير الحديثة للسوق السعودي.",
    ],
    problemsSolvedEn: [
      "Inconsistent brand presentation across digital and print collateral.",
      "Low visual distinction making the brand easily forgotten by potential clients.",
      "Lack of clear brand guidelines for internal teams and external vendors.",
      "Outdated visual systems incapable of scaling with business expansion in Saudi Arabia.",
    ],
    deliverables: [
      {
        titleAr: "الشعار الأساسي والرموز الفرعية",
        titleEn: "Primary Logo & Sub-Marks",
        descAr: "ملفات فيكتور عالية الدقة بجميع الصيغ (AI, SVG, PNG, PDF) للاستخدام الرقمي والطباعي.",
        descEn: "High-resolution vector assets across all standard formats (AI, SVG, PNG, PDF) for web and print.",
      },
      {
        titleAr: "دليل الهوية البصرية الشامل (Brand Guidelines)",
        titleEn: "Comprehensive Brand Guidelines",
        descAr: "كتيب مفصل يحدد قواعد استخدام الشعار، المساحات الآمنة، درجات الألوان (Pantone, CMYK, RGB, HEX)، والخطوط العربية والإنجليزية.",
        descEn: "Detailed manual outlining logo clear space, color codes (Pantone, CMYK, RGB, HEX), typography hierarchy, and misuse rules.",
      },
      {
        titleAr: "حزمة المطبوعات والقرطاسية المؤسسية",
        titleEn: "Corporate Stationery & Collateral",
        descAr: "تصميم بطاقات الأعمال، ورق المراسلات، الأظرف، الفواتير، الملفات الرسمية، وبطاقات الموظفين.",
        descEn: "Bespoke business cards, letterheads, presentation folders, invoices, envelopes, and employee badges.",
      },
      {
        titleAr: "تطبيقات التغليف والهدايا الدعائية",
        titleEn: "Packaging & Merchandise Concepts",
        descAr: "تصاميم عبوات المنتجات، الأكياس، الأشرطة، ونماذج المحاكاة الواقعية ثلاثية الأبعاد.",
        descEn: "Product packaging, shopping bags, ribbon labels, and photorealistic 3D mockups.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        titleAr: "الاكتشاف وتحليل النطاق",
        titleEn: "Discovery & Market Research",
        descAr: "جلسة استكشافية لفهم رسالة العلامة وقيمها، مع دراسة المنافسين وسلوك الجمهور المستهدف في السوق.",
        descEn: "In-depth workshop to map brand vision, core values, competitive landscape, and audience persona.",
      },
      {
        stepNumber: "02",
        titleAr: "بناء المفهوم البصري ولوحات المزاج",
        titleEn: "Visual Concept & Moodboards",
        descAr: "تطوير اتجاهات بصرية واضحة ومقترحات للشعار والنظام البصري لاختيار المسار الأمثل.",
        descEn: "Crafting distinct creative directions and initial moodboards to align on the artistic trajectory.",
      },
      {
        stepNumber: "03",
        titleAr: "التصميم والتطوير المتقن",
        titleEn: "Design & Refinement",
        descAr: "رسم الشعار هندسياً، ضبط التدرجات اللونية، واختيار الخطوط التيبوغرافية المنسجمة.",
        descEn: "Precision geometry drafting, color palette calibration, and bespoke typography pairing.",
      },
      {
        stepNumber: "04",
        titleAr: "التسليم والدليل النهائي",
        titleEn: "Final Delivery & Guidelines",
        descAr: "تجهيز حزمة الملفات المصدرية المفتوحة مع دليل الهوية البصرية الجاهز للاستخدام المباشر.",
        descEn: "Delivery of production-ready vector assets alongside the complete brand manual.",
      },
    ],
    faqs: [
      {
        questionAr: "كم يستغرق مشروع بناء الهوية البصرية المتكاملة في برانكا؟",
        questionEn: "How long does a complete visual identity project take with Branka?",
        answerAr: "يستغرق المشروع في المتوسط بين 10 إلى 20 يوم عمل، متضمناً مراحل البحث والتحليل، ابتكار المفاهيم، جلسات المراجعة، وتطوير دليل الهوية الشامل.",
        answerEn: "On average, a complete visual identity project requires 10 to 20 business days, covering research, concept creation, reviews, and the brand guide compilation.",
      },
      {
        questionAr: "هل أحصل على ملفات المصدر المفتوحة والجاهزة للطباعة؟",
        questionEn: "Do I receive editable source files ready for commercial printing?",
        answerAr: "نعم، نضمن تسليم جميع الملفات المفتوحة (Vector) بصيغ AI و EPS و PDF مع ملفات الويب PNG و SVG وبجميع ألوان الطباعة CMYK و Pantone.",
        answerEn: "Yes, you receive all full vector source files (AI, EPS, PDF, SVG, PNG) prepared in CMYK and Pantone color spaces for flawless commercial printing.",
      },
      {
        questionAr: "هل تتوافق الهوية مع متطلبات السوق السعودي ورؤية 2030؟",
        questionEn: "Does the identity adhere to Saudi market dynamics and Vision 2030 standards?",
        answerAr: "بالتأكيد، نصمم كل هوية مع مراعاة الثقافة المحلية والمعايير العالمية الحديثة لتكون علامتك رائدة وجذابة للمستهلك والمستثمر في المملكة.",
        answerEn: "Absolutely. We balance authentic cultural relevance with cutting-edge international design standards tailored for high-growth Saudi ventures.",
      },
    ],
    relatedCategory: "branding",
    iconName: "Palette",
  },

  // 2. التصميم الإعلاني (Advertising & Graphic Design)
  {
    slug: "advertising-design",
    image: "/images/services/advertising-3d.jpg",
    titleAr: "التصميم الإعلاني والجرافيكي الفاخر",
    titleEn: "Advertising & Luxury Graphic Design",
    taglineAr: "تصاميم إعلانية مبتكرة تجذب الأنظار وتحفز اتخاذ القرار للمنتجات والخدمات",
    taglineEn: "High-impact advertising visuals engineered to captivate attention and drive conversions",
    shortDescAr: "نصمم إعلانات رقمية ومطبوعات ترويجية عالية الجودة تعزز قيمة علامتك التجارية وتزيد من معدلات التحويل والتفاعل في حملاتك.",
    shortDescEn: "We create premium digital advertising creatives and print promotional assets that elevate your brand perception and maximize campaign conversion rates.",
    fullDescAr: "التصميم الإعلاني الناجح هو الذي يجمع بين الجاذبية البصرية والرسالة التسويقية المباشرة. في برانكا للإعلان والتسويق، نحرص على تصميم بوسترات وبنرات ومطبوعات إعلانية تعتمد على التسلسل البصري الذكي والتباين المدروس والخطوط الواضحة التي تدفع العميل للتفاعل الفوري.",
    fullDescEn: "Successful advertising design blends striking visual aesthetics with clear commercial messaging. At Branka Advertising & Marketing, we construct digital banners, billboard graphics, and marketing collaterals with thoughtful visual hierarchy and persuasive focal points.",
    metaTitleAr: "شركة تصميم إعلانات وبنرات في الرياض | برانكا للإعلان والتسويق",
    metaTitleEn: "Advertising & Graphic Design Agency in Riyadh | Branka",
    metaDescAr: "تصميم إعلانات وبنرات سوشيال ميديا ومطبوعات ترويجية بجودة استثنائية في السعودية. تصاميم إعلانية ترفع المبيعات من برانكا للإعلان والتسويق.",
    metaDescEn: "Premium advertising and graphic design services in Riyadh, Saudi Arabia. High-converting digital banners, print ads, and marketing collaterals by Branka.",
    keywordsAr: [
      "تصميم إعلانات في الرياض",
      "تصميم بوسترات إعلانية",
      "تصميم بنرات مواقع",
      "تصميم بروفايل شركات",
      "شركة جرافيك ديزاين السعودية",
    ],
    keywordsEn: [
      "advertising design Riyadh",
      "graphic design Saudi Arabia",
      "creative ad banners",
      "company profile design",
      "Branka advertising agency",
    ],
    problemsSolvedAr: [
      "انخفاض نسبة النقر على الإعلانات (CTR) بسبب تصاميم تقليدية غير ملفتة.",
      "عدم اتساق التصاميم الإعلانية مع الهوية البصرية للعلامة التجارية.",
      "تراجع مبيعات المنتجات في المواسم الإعلانية لغياب الرسالة البصرية المقنعة.",
    ],
    problemsSolvedEn: [
      "Low click-through rates (CTR) caused by generic or cluttered ad creative.",
      "Visual inconsistency between promotional ads and core brand identity.",
      "Underperforming seasonal product campaigns due to weak visual clarity.",
    ],
    deliverables: [
      {
        titleAr: "تصاميم الحملات الإعلانية الممولة",
        titleEn: "Paid Ad Creative Suites",
        descAr: "حزم تصاميم متكاملة بمقاسات منصات Meta و TikTok و Snapchat و Google Display.",
        descEn: "Multi-format creative sets optimized for Meta, TikTok, Snapchat, and Google Display networks.",
      },
      {
        titleAr: "بروفايلات الشركات والعروض التقديمية",
        titleEn: "Corporate Profiles & Pitch Decks",
        descAr: "تصميم ملفات تعريف الشركات وعروض المستثمرين بأسلوب تحريري فاخر وتنسيق PDF تفاعلي.",
        descEn: "Executive corporate profiles and investor decks designed with bespoke editorial layouts and interactive PDF capabilities.",
      },
      {
        titleAr: "الإعلانات الخارجية والمطبوعات الكبرى",
        titleEn: "Outdoor Billboards & Large Format Print",
        descAr: "لوحات الشوارع، بنرات المعارض والفعاليات، والملصقات الجدارية بدقة طباعية فائقة.",
        descEn: "Highway billboards, exhibition roll-ups, event backdrops, and environmental signage.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        titleAr: "تحديد الهدف والعرض الترويجي",
        titleEn: "Brief & Offer Definition",
        descAr: "فهم العرض التسويقي، الميزة التنافسية، والمنصات المستهدفة للإعلان.",
        descEn: "Analyzing campaign objectives, value proposition, and distribution channels.",
      },
      {
        stepNumber: "02",
        titleAr: "صياغة المفهوم الإبداعي",
        titleEn: "Creative Concept & Copy Pairing",
        descAr: "تنسيق النص الإعلاني مع الفكرة البصرية لضمان وضوح الرسالة من النظرة الأولى.",
        descEn: "Integrating headline copy with visual cues to ensure instant message comprehension.",
      },
      {
        stepNumber: "03",
        titleAr: "التصميم والاختبار البصري",
        titleEn: "Design & Multi-Format Sizing",
        descAr: "إنتاج التصاميم وتكييفها لجميع المقاسات والنسب المطلوبة مع فحص التباين والوضوح.",
        descEn: "Producing and adapting assets across all required aspect ratios with contrast and clarity checks.",
      },
    ],
    faqs: [
      {
        questionAr: "هل تقدمون تصاميم مخصصة لحملات سناب شات وتيك توك وإنستغرام؟",
        questionEn: "Do you design custom creatives tailored for Snapchat, TikTok, and Instagram?",
        answerAr: "نعم، نصمم حزم إعلانية متوافقة تماماً مع شروط وأبعاد كل منصة (9:16 للشاشات الرأسية، 1:1 للبوستات، 1.91:1 للمواقع).",
        answerEn: "Yes, we produce platform-optimized assets following exact specifications (9:16 vertical, 1:1 feeds, and landscape banners).",
      },
    ],
    relatedCategory: "design",
    iconName: "PenTool",
  },

  // 3. التسويق الرقمي (Digital Marketing)
  {
    slug: "digital-marketing",
    image: "/images/services/marketing-3d.jpg",
    titleAr: "التسويق الرقمي المتكامل",
    titleEn: "Integrated Digital Marketing",
    taglineAr: "استراتيجيات تسويقية مبنية على البيانات لتحقيق نمو مستدام ومبيعات حقيقية",
    taglineEn: "Data-driven marketing strategies engineered for sustainable revenue and business growth",
    shortDescAr: "نضع وننفذ استراتيجيات تسويقية شاملة تربط بين بناء الوعي بالعلامة واكتساب العملاء وزيادة المبيعات عبر القنوات الرقمية الأكثر فاعلية.",
    shortDescEn: "We devise and execute comprehensive marketing strategies connecting brand awareness with customer acquisition and measurable revenue growth across high-impact digital channels.",
    fullDescAr: "التسويق الرقمي في برانكا للإعلان والتسويق يبدأ من دراسة رحلة العميل وبناء القمع التسويقي (Marketing Funnel) المناسب لنشاطك التجاري. نجمع بين تحسين محركات البحث، التسويق بالمحتوى، استهداف الجماهير بدقة، وإعادة الاستهداف لتعظيم العائد على الاستثمار الإعلاني (ROAS).",
    fullDescEn: "Digital marketing at Branka Advertising & Marketing begins by mapping the customer journey and crafting an optimized acquisition funnel. We combine search optimization, content marketing, granular audience targeting, and retargeting to maximize Return on Ad Spend (ROAS).",
    metaTitleAr: "وكالة تسويق رقمي في السعودية | برانكا للإعلان والتسويق",
    metaTitleEn: "Digital Marketing Agency in Saudi Arabia | Branka",
    metaDescAr: "وكالة تسويق رقمي متكاملة في الرياض والسعودية. استراتيجيات نمو، جذب عملاء محتملين، وزيادة مبيعات المتاجر من برانكا للإعلان والتسويق.",
    metaDescEn: "Leading digital marketing agency in Riyadh, Saudi Arabia. Data-driven growth strategies, qualified lead generation, and revenue scaling by Branka.",
    keywordsAr: [
      "وكالة تسويق رقمي في السعودية",
      "شركة تسويق في الرياض",
      "استراتيجية تسويق رقمي",
      "زيادة مبيعات المتاجر الإلكترونية",
      "تسويق الأداء الرياض",
    ],
    keywordsEn: [
      "digital marketing agency Saudi Arabia",
      "marketing agency Riyadh",
      "performance marketing Saudi",
      "e-commerce growth agency",
      "Branka digital marketing",
    ],
    problemsSolvedAr: [
      "صرف ميزانيات إعلانية دون الحصول على عوائد مالية مجدية وملموسة.",
      "غياب استراتيجية تسويقية واضحة تربط بين المحتوى والإعلانات والمبيعات.",
      "صعوبة الوصول إلى الجمهور والعميل المثالي في السوق السعودي.",
    ],
    problemsSolvedEn: [
      "Unoptimized ad spend generating low engagement without tangible revenue returns.",
      "Absence of an integrated strategy connecting content, advertising, and conversion channels.",
      "Difficulty reaching qualified high-intent buyers in the Saudi marketplace.",
    ],
    deliverables: [
      {
        titleAr: "خطة واستراتيجية التسويق الشاملة",
        titleEn: "Strategic Marketing Roadmap",
        descAr: "وثيقة استراتيجية تحدد شرائح العملاء، الرسائل التسويقية، القنوات الفعالة، والميزانيات المقترحة.",
        descEn: "Comprehensive strategic blueprint detailing target buyer personas, messaging matrix, priority channels, and budget allocation.",
      },
      {
        titleAr: "بناء وإدارة مسارات التحويل (Funnels)",
        titleEn: "Marketing Funnel Architecture",
        descAr: "تصميم رحلة العميل من مرحلة لفت الانتباه والاهتمام وحتى إتمام الشراء وإعادة الطلب.",
        descEn: "Designing and optimizing the full customer lifecycle from initial awareness to checkout and repeat loyalty.",
      },
      {
        titleAr: "تقارير الأداء وتحليل البيانات",
        titleEn: "Performance Analytics & Dashboards",
        descAr: "لوحات تحكم وتقارير دورية شفافة توضح تكلفة الاكتساب (CPA) وعائد الإنفاق (ROAS).",
        descEn: "Transparent reporting dashboards detailing Customer Acquisition Cost (CPA), conversion rates, and ROAS.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        titleAr: "تدقيق وتحليل الوضع الراهن",
        titleEn: "Marketing Audit & Baseline Analysis",
        descAr: "فحص الحسابات السابقة، الموقع، ونقاط القوة والضعف مقارنة بالمنافسين.",
        descEn: "Auditing historical performance data, web assets, and competitive positioning.",
      },
      {
        stepNumber: "02",
        titleAr: "بناء الخطة وتوزيع الميزانية",
        titleEn: "Strategy Formulation & Channel Mix",
        descAr: "تحديد القنوات الأكثر ربحية وتخصيص الميزانيات لاستهداف الشرائح ذات القيمة العالية.",
        descEn: "Selecting high-yield marketing channels and allocating budgets for optimal reach and ROI.",
      },
      {
        stepNumber: "03",
        titleAr: "التنفيذ والتحسين المستمر",
        titleEn: "Execution & Ongoing Optimization",
        descAr: "إطلاق الحملات، اختبار الرسائل الإعلانية (A/B Testing)، وتحسين معدلات التحويل.",
        descEn: "Executing campaigns, running rigorous A/B split tests, and continuously refining conversion rates.",
      },
    ],
    faqs: [
      {
        questionAr: "كيف تضمنون تحقيق نتائج إيجابية في الحملات التسويقية؟",
        questionEn: "How do you ensure positive return on marketing investments?",
        answerAr: "نعتمد على القياس والتحليل المستمر واختبار عدة زوايا إعلانية، وتوجيه الميزانية نحو الإعلانات والجمهور الأعلى أداءً لتقليل تكلفة الاكتساب وتعظيم الأرباح.",
        answerEn: "We leverage strict data tracking, multi-variant testing, and dynamic budget reallocation toward top-performing segments to minimize acquisition costs and maximize net revenue.",
      },
    ],
    relatedCategory: "social",
    iconName: "TrendingUp",
  },

  // 4. إدارة التواصل الاجتماعي (Social Media Management)
  {
    slug: "social-media",
    image: "/images/services/social-3d.jpg",
    titleAr: "إدارة وتنمية حسابات التواصل الاجتماعي",
    titleEn: "Social Media Management & Growth",
    taglineAr: "صناعة محتوى تفاعلي وبناء مجتمع مخلص لعلامتك عبر المنصات الاجتماعية",
    taglineEn: "Engaging content creation and community building across leading social platforms",
    shortDescAr: "نتولى إدارة حساباتك على منصات التواصل (إكس، إنستغرام، لينكدإن، تيك توك) من التخطيط وصناعة المحتوى الإبداعي والتصميم إلى التفاعل مع المتابعين.",
    shortDescEn: "We manage your brand channels on X, Instagram, LinkedIn, and TikTok—handling content strategy, creative copy, visuals, and active community engagement.",
    fullDescAr: "التواجد الفعّال على وسائل التواصل يتطلب فهماً دقيقاً لنبرة صوت علامتك التجارية وثقافة الجمهور المحلي. في برانكا للإعلان والتسويق، نبني جداول نشر مدروسة تجمع بين المحتوى التعليمي والتفاعلي والترويجي لبناء علاقة ثقة وطيدة مع عملائك.",
    fullDescEn: "Active social media presence requires understanding brand voice and local cultural context. At Branka Advertising & Marketing, we architect strategic editorial calendars balancing value-driven, entertaining, and promotional content to cultivate authentic audience loyalty.",
    metaTitleAr: "شركة إدارة حسابات التواصل الاجتماعي في الرياض | برانكا",
    metaTitleEn: "Social Media Management Agency in Riyadh | Branka",
    metaDescAr: "خدمات إدارة حسابات التواصل الاجتماعي، كتابة المحتوى، وتصميم المنشورات للشركات والمتاجر في السعودية من برانكا للإعلان والتسويق.",
    metaDescEn: "Comprehensive social media management, content creation, and community moderation in Riyadh, Saudi Arabia by Branka Advertising & Marketing.",
    keywordsAr: [
      "إدارة حسابات التواصل الاجتماعي",
      "شركة إدارة سوشيال ميديا في الرياض",
      "صناعة محتوى انستقرام وتويتر",
      "خطة محتوى سوشيال ميديا",
      "تسويق حسابات الشركات",
    ],
    keywordsEn: [
      "social media management Riyadh",
      "social media agency Saudi Arabia",
      "content creation Riyadh",
      "Instagram management Saudi",
      "Branka social media",
    ],
    problemsSolvedAr: [
      "انقطاع النشر وعدم انتظام المحتوى في الحسابات الرسمية.",
      "ضعف التفاعل ومعدلات الوصول العضوي للجمهور المستهدف.",
      "ظهور الحسابات بمظهر غير احترافي يقلل من ثقة العملاء.",
    ],
    problemsSolvedEn: [
      "Inconsistent posting schedules causing audience churn and algorithm penalties.",
      "Stagnant engagement and low organic reach across primary brand channels.",
      "Unprofessional feed visuals undermining consumer trust.",
    ],
    deliverables: [
      {
        titleAr: "خطة المحتوى والرزنامة الشهرية",
        titleEn: "Monthly Editorial & Content Calendar",
        descAr: "جدول محتوى تفصيلي يتضمن الأفكار، النصوص، مواعيد النشر، ونوع المنشورات.",
        descEn: "Detailed monthly publishing schedule mapping topics, copy, formats, and peak distribution times.",
      },
      {
        titleAr: "التصاميم والريلز والفيديوهات القصيرة",
        titleEn: "Visual Posts, Reels & Short Videos",
        descAr: "إنتاج بوستات ثابتة وكاروسيل ومقاطع ريلز مصممة وفق أحدث معايير المنصات.",
        descEn: "High-engagement static graphics, carousels, and vertical Reels/TikTok videos.",
      },
      {
        titleAr: "إدارة التفاعل والردود",
        titleEn: "Community Moderation & Engagement",
        descAr: "التفاعل مع تعليقات ورسائل المتابعين بنبرة صوت تعكس احترافية الشركة.",
        descEn: "Professional audience interaction and community moderation adhering to brand tone of voice.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        titleAr: "تحديد نبرة الصوت والمحاور",
        titleEn: "Brand Voice & Content Pillars",
        descAr: "تحديد الركائز الأساسية للمحتوى والأسلوب التحريري الأنسب للعلامة.",
        descEn: "Establishing core content pillars, stylistic guidelines, and brand persona.",
      },
      {
        stepNumber: "02",
        titleAr: "إنتاج المحتوى والتصاميم",
        titleEn: "Creative Production & Review",
        descAr: "كتابة النصوص الإبداعية وتصميم الجرافيك ومقاطع الفيديو للمراجعة والاعتماد.",
        descEn: "Drafting copy, producing bespoke visuals and video assets for client approval.",
      },
      {
        stepNumber: "03",
        titleAr: "الجدولة والنشر والتحليل",
        titleEn: "Scheduling & Monthly Reporting",
        descAr: "نشر المنشورات في الأوقات الذروة مع تقرير تحليلي شهري للنمو والتفاعل.",
        descEn: "Publishing at peak engagement windows and providing monthly growth metrics.",
      },
    ],
    faqs: [
      {
        questionAr: "ما هي المنصات التي تديرونها؟",
        questionEn: "Which social media platforms do you manage?",
        answerAr: "ندير جميع المنصات الرئيسية في السوق السعودي: إكس (تويتر سابقاً)، إنستغرام، لينكدإن، تيك توك، وسناب شات.",
        answerEn: "We manage all major platforms in Saudi Arabia including X (Twitter), Instagram, LinkedIn, TikTok, and Snapchat.",
      },
    ],
    relatedCategory: "social",
    iconName: "Share2",
  },

  // 5. إدارة الحملات الإعلانية (Paid Ads & Media Buying)
  {
    slug: "ad-campaigns",
    image: "/images/services/marketing.jpg",
    titleAr: "إدارة الحملات الإعلانية الممولة (Media Buying)",
    titleEn: "Paid Advertising & Media Buying",
    taglineAr: "إدارة حملات رقمية متقدمة على سناب، تيك توك، ميتا، وجوجل لتحقيق أعلى عائد استثماري",
    taglineEn: "Advanced paid media campaigns on Snap, TikTok, Meta, and Google delivering maximum ROAS",
    shortDescAr: "نخطط وندير حملات إعلانية مدفوعة وموجهة للجمهور الأكثر استعداداً للشراء، مع مراقبة يومية وتحسين مستمر لتقليل تكلفة الاكتساب وزيادة الأرباح.",
    shortDescEn: "We plan, launch, and optimize high-converting paid media campaigns targeting ready-to-buy audiences with relentless daily monitoring to minimize CPA and maximize profit.",
    fullDescAr: "إدارة الحملات الإعلانية في برانكا للإعلان والتسويق تعتمد على أحدث تقنيات التتبع (Pixel, CAPI) والذكاء الاصطناعي في تقسيم الجماهير. نقوم بإعداد الحملات، اختبار زوايا متعددة للنصوص والتصاميم، واستبعاد الهدر المالي للوصول إلى أعلى عائد ممكن على الإنفاق الإعلاني.",
    fullDescEn: "Media buying at Branka Advertising & Marketing leverages modern tracking protocols (Pixel, Server-Side CAPI) and predictive audience modeling. We continuously split-test ad creatives, messaging angles, and bid strategies to eliminate ad waste and scale winning campaigns.",
    metaTitleAr: "إدارة الحملات الإعلانية في السعودية | برانكا للإعلان والتسويق",
    metaTitleEn: "Paid Ads & Media Buying Agency in Saudi Arabia | Branka",
    metaDescAr: "إدارة حملات إعلانية ممولة على سناب شات، تيك توك، إنستغرام، وجوجل في الرياض والسعودية. نتائج موثقة وعائد استثماري عالٍ من برانكا.",
    metaDescEn: "Expert media buying and performance advertising agency in Riyadh, Saudi Arabia. High-ROAS campaigns on Snap, TikTok, Meta, and Google by Branka.",
    keywordsAr: [
      "إدارة الحملات الإعلانية في السعودية",
      "شركة إعلانات سناب شات وتيك توك",
      "ميديا باير محترف الرياض",
      "إعلانات ممولة انستقرام",
      "حملات إعلانية عالية العائد",
    ],
    keywordsEn: [
      "paid ads management Saudi Arabia",
      "media buying agency Riyadh",
      "Snapchat ad campaigns Saudi",
      "TikTok ads agency",
      "Branka paid advertising",
    ],
    problemsSolvedAr: [
      "ارتفاع تكلفة الحصول على العميل (CPA) دون تحقيق مبيعات مربحة.",
      "مشاكل في تتبع التحويلات وغياب دقة البيانات بعد تحديثات الخصوصية.",
      "فشل الإعلانات في تجاوز مرحلة التعلم (Learning Phase) وثبات النتائج.",
    ],
    problemsSolvedEn: [
      "Unsustainable customer acquisition costs (CPA) eating into profit margins.",
      "Broken conversion tracking and attribution gaps following privacy updates.",
      "Campaigns stuck in algorithmic learning phases with erratic daily performance.",
    ],
    deliverables: [
      {
        titleAr: "إعداد وتثبيت أدوات التتبع الدقيق",
        titleEn: "Advanced Tracking & CAPI Setup",
        descAr: "ربط بيكسل المنصات وواجهة التحويلات من الخادم (Server-Side Conversions API) لضمان دقة البيانات بنسبة 100%.",
        descEn: "Full implementation of platform Pixels, Google Tag Manager, and Server-Side CAPI for 100% data fidelity.",
      },
      {
        titleAr: "هيكلة وإطلاق الحملات الإعلانية",
        titleEn: "Campaign Architecture & Launch",
        descAr: "بناء حملات التوعية والاكتساب وإعادة الاستهداف (Retargeting) بميزانيات موزعة بدقة.",
        descEn: "Structuring top, middle, and bottom-of-funnel campaigns with dynamic retargeting audiences.",
      },
      {
        titleAr: "التحسين اليومي وتوسيع النطاق (Scaling)",
        titleEn: "Daily Bid Optimization & Scaling",
        descAr: "متابعة يومية للأداء، خفض تكلفة النقرة والطلب، ومضاعفة الميزانية في الحملات الرابحة.",
        descEn: "Daily bid management, negative keyword pruning, and horizontal/vertical budget scaling on profitable ads.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        titleAr: "الإعداد الفني وتحديد الأهداف",
        titleEn: "Technical Setup & KPI Benchmarks",
        descAr: "تجهيز الحسابات الإعلانية، ربط بوابات الدفع والتتبع، وتحديد المستهدف المالي للـ ROAS.",
        descEn: "Configuring ad accounts, server tracking, and agreeing on target CPA and ROAS benchmarks.",
      },
      {
        stepNumber: "02",
        titleAr: "اختبار الزوايا الإعلانية (Testing Phase)",
        titleEn: "Creative Angle Testing",
        descAr: "إطلاق تجارب متزامنة لعدة نصوص وتصاميم لتحديد النموذج الأفضل استجابة من الجمهور.",
        descEn: "Deploying multi-variant ad creative tests to pinpoint the highest-converting customer triggers.",
      },
      {
        stepNumber: "03",
        titleAr: "التوسيع والنمو (Scaling Phase)",
        titleEn: "Profitable Scaling & Reporting",
        descAr: "زيادة الإنفاق بذكاء على الإعلانات الرابحة لتحقيق أعلى حجم مبيعات بأقل تكلفة ممكنة.",
        descEn: "Incrementally scaling profitable ad sets to drive maximum revenue volume while protecting ROI.",
      },
    ],
    faqs: [
      {
        questionAr: "ما هو الحد الأدنى المقترح للميزانية الإعلانية؟",
        questionEn: "What is the recommended minimum ad budget?",
        answerAr: "تعتمد الميزانية على قطاع النشاط وأهداف الحملة، وننصح عادة بميزانية تمكننا من اختبار شرائح متعددة وجمع بيانات كافية خلال الأسابيع الأولى.",
        answerEn: "Ad budgets vary based on industry and targets; we recommend a budget that provides sufficient data density for rapid algorithmic optimization.",
      },
    ],
    relatedCategory: "google",
    iconName: "Megaphone",
  },

  // 6. تصميم المواقع والمتاجر (Web & E-Commerce Development)
  {
    slug: "web-development",
    image: "/images/services/web-3d.jpg",
    titleAr: "تصميم وتطوير المواقع والمتاجر الإلكترونية",
    titleEn: "Web & E-Commerce Platform Development",
    taglineAr: "منصات رقمية سريعة وفائقة الأداء مصممة لتحويل الزوار إلى عملاء مخلصين",
    taglineEn: "High-performance digital platforms and e-commerce stores optimized for maximum conversions",
    shortDescAr: "نطور مواقع شركات ومتاجر إلكترونية حديثة (سلة، زد، Next.js) بتجربة مستخدم فاخرة وسرعة تحميل فائقة وتوافق كامل مع محركات البحث والجوال.",
    shortDescEn: "We build modern corporate websites and custom e-commerce stores (Salla, Zid, Custom Next.js) delivering luxury UI/UX, ultra-fast speeds, and full SEO readiness.",
    fullDescAr: "الموقع الإلكتروني هو واجهتك الرقمية الأولى ومركز اتخاذ القرار لعملائك. في برانكا للإعلان والتسويق، نركز على تصميم واجهات مستخدم (UI/UX) عصرية، وبنية تقنية سريعة وآمنة، وتكامل مع بوابات الدفع والشحن المعتمدة في المملكة، مع تهيئة معيارية لمحركات البحث (SEO) والأنظمة الذكية.",
    fullDescEn: "Your digital platform is your primary corporate asset and key conversion engine. At Branka Advertising & Marketing, we build bespoke user interfaces (UI/UX), secure code architectures, and integrations with Saudi payment gateways, shipping providers, and structured search schemas.",
    metaTitleAr: "شركة تصميم مواقع ومتاجر في الرياض | برانكا للإعلان والتسويق",
    metaTitleEn: "Web & E-Commerce Development in Riyadh | Branka",
    metaDescAr: "تصميم وتطوير مواقع الشركات والمتاجر الإلكترونية (سلة، زد، منصات مخصصة) في السعودية. سرعة استثنائية وتجربة مستخدم فاخرة من برانكا.",
    metaDescEn: "Expert web design and e-commerce store development in Riyadh, Saudi Arabia. Custom Next.js, Salla, and Zid platforms engineered for speed by Branka.",
    keywordsAr: [
      "تصميم المواقع والمتاجر الإلكترونية في الرياض",
      "شركة تصميم مواقع في السعودية",
      "تطوير متاجر سلة وزد",
      "تصميم متجر إلكتروني احترافي",
      "شركة برمجة وتطوير مواقع الرياض",
    ],
    keywordsEn: [
      "web development agency Riyadh",
      "e-commerce store design Saudi Arabia",
      "Salla and Zid store development",
      "custom Next.js website Riyadh",
      "Branka web development",
    ],
    problemsSolvedAr: [
      "بطء تحميل الموقع ومشاكل التجاوب مع شاشات الجوال مما يسبب هروب الزوار.",
      "تعقيد خطوات الشراء وتراجع نسبة إتمام الطلبات (Checkout Drop-off).",
      "ضعف ترتيب الموقع في نتائج محركات البحث لغياب البنية التقنية السليمة.",
    ],
    problemsSolvedEn: [
      "Slow page speeds and poor mobile responsiveness causing high bounce rates.",
      "Friction-heavy checkout flows resulting in abandoned carts.",
      "Poor search engine rankings due to lack of technical SEO and modern markup.",
    ],
    deliverables: [
      {
        titleAr: "تصميم واجهة وتجربة المستخدم (UI/UX)",
        titleEn: "Custom UI/UX Experience Design",
        descAr: "نماذج تفاعلية كاملة للموقع على Figma تحاكي تجربة التصفح الفعلية قبل البرمجة.",
        descEn: "Comprehensive interactive Figma prototypes demonstrating full navigation and checkout flows prior to development.",
      },
      {
        titleAr: "تطوير المنصة بسرعة وأمان فائقين",
        titleEn: "Modern High-Speed Code Development",
        descAr: "برمجة الموقع بأحدث التقنيات الحديثة مع تحقيق درجات 90+ في اختبارات Google PageSpeed.",
        descEn: "Building on modern web stacks achieving 90+ Google PageSpeed scores on mobile and desktop.",
      },
      {
        titleAr: "الربط مع بوابات الدفع والشحن والـ CRM",
        titleEn: "Payment & Shipping Gateway Integration",
        descAr: "تكامل كامل مع مدى، فيزا، ماستركارد، آبل باي، تمارا، تابي، وشركات الشحن المحلية.",
        descEn: "Seamless integration with Mada, Apple Pay, Visa, Tamara, Tabby, and local courier APIs.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        titleAr: "دراسة المتطلبات وهيكلة الموقع",
        titleEn: "Information Architecture & Wireframing",
        descAr: "تخطيط صفحات الموقع، تدفق المستخدم، وتوزيع المحتوى بما يخدم التحويل والمبيعات.",
        descEn: "Mapping sitemap architecture, user user flows, and conversion touchpoints.",
      },
      {
        stepNumber: "02",
        titleAr: "تصميم الواجهات والبرمجة",
        titleEn: "UI Design & Full-Stack Development",
        descAr: "بناء التصميم البصري وتحويله إلى كود برمجي نظيف وسريع ومتجاوب تماماً.",
        descEn: "Crafting luxury visual designs and implementing responsive, accessible, modular code.",
      },
      {
        stepNumber: "03",
        titleAr: "الفحص والإطلاق والتهيئة لمحركات البحث",
        titleEn: "Quality Assurance & SEO Launch",
        descAr: "اختبار سرعة الموقع، الأمان، بوابات الدفع، وإطلاق الموقع مع فهرسته في Google.",
        descEn: "Rigorous testing across devices, payment verification, speed optimization, and search indexing.",
      },
    ],
    faqs: [
      {
        questionAr: "هل تدعمون منصات سلة وزد والمواقع المخصصة؟",
        questionEn: "Do you develop on Salla, Zid, and custom Next.js platforms?",
        answerAr: "نعم، نقدم تخصيصاً وبرمجة احترافية لثيمات سلة وزد بالإضافة إلى تطوير المواقع والمنصات المخصصة بالكامل عبر Next.js.",
        answerEn: "Yes, we develop custom theme modifications for Salla and Zid, as well as bespoke enterprise web platforms built on Next.js.",
      },
    ],
    relatedCategory: "web",
    iconName: "Globe",
  },

  // 7. الفيديو والموشن (Motion Graphics & Video Production)
  {
    slug: "motion-graphics",
    image: "/images/services/motion-3d.jpg",
    titleAr: "الفيديو والموشن جرافيك الإعلاني",
    titleEn: "Motion Graphics & Commercial Video",
    taglineAr: "إنتاج مقاطع موشن جرافيك وفيديو تسويقية تنبض بالحياة وتبسط رسالتك",
    taglineEn: "Dynamic motion graphics and video storytelling that simplify complex value propositions",
    shortDescAr: "نبتكر مقاطع فيديو وموشن جرافيك ثنائي وثلاثي الأبعاد، وتحريك للشعارات والهويات لإيصال فكرتك بأسلوب ممتع ومؤثر يزيد التفاعل.",
    shortDescEn: "We produce captivating 2D/3D motion graphics, commercial promo videos, and animated logo reveals that communicate your value and maximize audience engagement.",
    fullDescAr: "المحتوى المرئي المتحرك هو أكثر أنواع المحتوى جذباً ومشاركة في العالم الرقمي. في برانكا للإعلان والتسويق، نكتب السيناريو الإعلاني المشوق، نسجل التعليق الصوتي الاحترافي، ونرسم ونحرك المشاهد بدقة بصرية فائقة تعكس احترافية علامتك التجارية.",
    fullDescEn: "Video and motion design are the most engaging storytelling formats in modern digital marketing. At Branka Advertising & Marketing, we craft compelling scripts, record premium voiceovers, and animate custom 2D/3D scenes to explain your product with clarity and aesthetic excellence.",
    metaTitleAr: "شركة موشن جرافيك وإنتاج فيديو في الرياض | برانكا للإعلان والتسويق",
    metaTitleEn: "Motion Graphics & Video Production in Riyadh | Branka",
    metaDescAr: "إنتاج فيديو وموشن جرافيك ثنائي وثلاثي الأبعاد وإعلانات ترويجية في السعودية. إبداع سينمائي من برانكا للإعلان والتسويق.",
    metaDescEn: "Premier motion graphics and promotional video production agency in Riyadh, Saudi Arabia. 2D/3D animation, logo motion, and commercial video by Branka.",
    keywordsAr: [
      "شركة موشن جرافيك في الرياض",
      "إنتاج فيديو إعلاني السعودية",
      "تصميم موشن جرافيك ثنائي الأبعاد",
      "تحريك شعارات ثلاثي الأبعاد",
      "فيديو تعريفي للشركات",
    ],
    keywordsEn: [
      "motion graphics agency Riyadh",
      "commercial video production Saudi",
      "2D and 3D animation Riyadh",
      "animated logo reveal",
      "Branka motion graphics",
    ],
    problemsSolvedAr: [
      "صعوبة شرح المنتجات والخدمات المعقدة بالنصوص والصور الثابتة فقط.",
      "انخفاض تفاعل الجمهور مع الإعلانات التقليدية وتراجع مدة المشاهدة.",
      "الحاجة إلى فيديو تعريفي احترافي للمستثمرين أو المؤتمرات والفعاليات.",
    ],
    problemsSolvedEn: [
      "Difficulty explaining intricate products through static images alone.",
      "Low viewer retention on traditional static ad formats.",
      "Need for high-caliber video assets for investor presentations, expos, and product launches.",
    ],
    deliverables: [
      {
        titleAr: "كتابة السيناريو والستوري بورد",
        titleEn: "Scriptwriting & Visual Storyboarding",
        descAr: "صياغة نص تسويقي مقنع ورسم مشاهد الفيديو إطاراً بإطار قبل التحريك.",
        descEn: "Developing persuasive commercial scripts and illustrated scene-by-scene storyboards.",
      },
      {
        titleAr: "التعليق الصوتي والمؤثرات الصوتية",
        titleEn: "Voiceover & Audio Engineering",
        descAr: "تسجيل صوتي معلقين محترفين باللهجات السعودية أو الفصحى مع موسيقى مرخصة.",
        descEn: "Studio-grade voiceover in Saudi dialects, Modern Standard Arabic, or English with licensed sound design.",
      },
      {
        titleAr: "التحريك والإخراج النهائي بدقة 4K",
        titleEn: "Animation & 4K Master Export",
        descAr: "تحريك احترافي، مؤثرات بصرية مذهلة، وتسليم الفيديو بجميع المقاسات الأفقية والرأسية.",
        descEn: "Smooth 60fps animation, color grading, and multi-ratio 4K delivery for TV, web, and social.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        titleAr: "كتابة النص والقصة",
        titleEn: "Concept & Scripting",
        descAr: "صياغة فكرة الفيديو والرسالة المحورية بأسلوب تسويقي سلس ومقنع.",
        descEn: "Crafting the narrative hook, core messaging, and precise call-to-action.",
      },
      {
        stepNumber: "02",
        titleAr: "رسم المشاهد وتسجيل الصوت",
        titleEn: "Illustration & Voice Recording",
        descAr: "رسم العناصر البصرية بالهوية المعتمدة وتسجيل الصوت في استوديوهات احترافية.",
        descEn: "Illustrating brand-aligned visual assets and capturing studio voiceover tracks.",
      },
      {
        stepNumber: "03",
        titleAr: "التحريك والمكساج الصوتي",
        titleEn: "Animation & Sound Design",
        descAr: "تحريك المشاهد ومزامنة المؤثرات البصرية والصوتية لإخراج الفيديو بأعلى جودة.",
        descEn: "Keyframing animation, integrating SFX, and finalizing audio-visual master exports.",
      },
    ],
    faqs: [
      {
        questionAr: "هل توفرون مقاسات مخصصة لستوري وسناب وريلز؟",
        questionEn: "Do you deliver multi-ratio formats for Stories, Reels, and YouTube?",
        answerAr: "نعم، نسلم كل فيديو بمقاسات 16:9 للشاشات والمواقع، و 9:16 للجوال وتطبيقات السوشيال ميديا.",
        answerEn: "Yes, we export all deliverables in 16:9 widescreen and 9:16 vertical formats for seamless cross-platform deployment.",
      },
    ],
    relatedCategory: "video",
    iconName: "Play",
  },

  // 8. خدمات Google وتهيئة محركات البحث (Google Services & SEO)
  {
    slug: "google-services",
    image: "/images/services/google-3d.jpg",
    titleAr: "خدمات Google وتهيئة محركات البحث (SEO & Ads)",
    titleEn: "Google Services, SEO & Search Ads",
    taglineAr: "تصدر نتائج البحث الأولى في Google وجذب عملاء يبحثون عن خدماتك الآن",
    taglineEn: "Dominate Google search results and capture high-intent customers actively searching for your services",
    shortDescAr: "ندير إعلانات Google المتقدمة (Search, Display, YouTube) ونقدم خدمات تحسين محركات البحث (SEO) والظهور في نتائج محركات الإجابة والذكاء الاصطناعي (AEO).",
    shortDescEn: "We manage high-performing Google Ads campaigns (Search, Shopping, YouTube) and deliver technical SEO and Answer Engine Optimization (AEO) to capture active buyers.",
    fullDescAr: "العميل الذي يبحث في Google يملك نية شراء مباشرة. في برانكا للإعلان والتسويق، نستهدف الكلمات المفتاحية الأكثر ربحية لعملك، ونبني حملات بحثية متقدمة مع تحسين مستمر لمعدل جودة الإعلانات (Quality Score)، بالإضافة إلى تهيئة البنية التقنية لموقعك لتتصدر النتائج العضوية ومحركات الذكاء الاصطناعي.",
    fullDescEn: "Users searching on Google demonstrate immediate commercial intent. At Branka Advertising & Marketing, we target your most profitable keywords, structure search ad campaigns, improve Quality Scores, and implement technical SEO so your brand ranks at the top of organic search and AI answer engines.",
    metaTitleAr: "شركة تحسين محركات البحث وإعلانات جوجل في الرياض | برانكا",
    metaTitleEn: "Google Ads & SEO Agency in Riyadh | Branka",
    metaDescAr: "خدمات إعلانات جوجل وتحسين محركات البحث SEO في السعودية. تصدر نتائج البحث وزيادة المبيعات من برانكا للإعلان والتسويق.",
    metaDescEn: "Premier Google Ads and Search Engine Optimization (SEO/AEO) agency in Riyadh, Saudi Arabia. Proven rankings and qualified search leads by Branka.",
    keywordsAr: [
      "شركة سيو في الرياض",
      "إعلانات جوجل في السعودية",
      "تحسين محركات البحث SEO",
      "إعلانات شبكة البحث Google Ads",
      "تصدر نتائج البحث في قوقل",
    ],
    keywordsEn: [
      "SEO agency Riyadh",
      "Google Ads management Saudi Arabia",
      "search engine optimization Riyadh",
      "Google Search ads agency",
      "Branka Google services",
    ],
    problemsSolvedAr: [
      "غياب الموقع عن النتائج الأولى في Google عند بحث العملاء عن خدماتك.",
      "ارتفاع تكلفة النقرة في Google Ads دون تحقيق طلبات وعملاء فعليين.",
      "ضعف التهيئة التقنية والبيانات المنظمة للموقع مما يحرمه من الظهور الذكي.",
    ],
    problemsSolvedEn: [
      "Absence from Page 1 Google rankings when potential clients search for your services.",
      "High Google Ads cost-per-click without corresponding qualified leads or sales.",
      "Missing structured data schemas preventing inclusion in AI search overviews.",
    ],
    deliverables: [
      {
        titleAr: "إدارة إعلانات شبكة البحث (Google Search Ads)",
        titleEn: "Google Search & Performance Max Ads",
        descAr: "بناء حملات بحث دقيقة تستهدف الكلمات ذات النية الشرائية العالية واستبعاد الكلمات السلبية.",
        descEn: "Granular search campaigns targeting high-intent commercial keywords with rigorous negative keyword exclusions.",
      },
      {
        titleAr: "التهيئة التقنية والبيانات المنظمة (Technical SEO & Schema)",
        titleEn: "Technical SEO & Structured Schema",
        descAr: "إعداد ملفات Sitemap و Robots ومخططات JSON-LD وتحسين سرعة الصفحة ومعايير Core Web Vitals.",
        descEn: "Full Schema.org implementation, Sitemap/Robots optimization, and Core Web Vitals compliance.",
      },
      {
        titleAr: "إدارة ملف Google Business وملف الخرائط",
        titleEn: "Google Business Profile & Local Map Pack",
        descAr: "توثيق وتحسين ظهور نشاطك التجاري على خرائط Google لجذب العملاء المحليين في مدينتك.",
        descEn: "Optimizing Google Business Profile listings for top placement in local Google Maps search packs.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        titleAr: "بحث الكلمات المفتاحية والمنافسين",
        titleEn: "Keyword & Competitor Research",
        descAr: "تحليل حجم البحث الشهري، تكلفة النقرة، والكلمات التي يعتمد عليها المنافسون لتحقيق المبيعات.",
        descEn: "Analyzing monthly search volume, competitor keyword gaps, and commercial intent queries.",
      },
      {
        stepNumber: "02",
        titleAr: "التهيئة والربط وإطلاق الحملات",
        titleEn: "On-Page SEO & Campaign Launch",
        descAr: "تهيئة العناوين والروابط وإطلاق إعلانات Google مع ربط أدوات التحليلات Google Analytics 4.",
        descEn: "Optimizing on-page tags and deploying campaigns linked to Google Analytics 4 conversion tracking.",
      },
      {
        stepNumber: "03",
        titleAr: "تحسين نقاط الجودة وخفض التكلفة",
        titleEn: "Quality Score & Conversion Optimization",
        descAr: "تحسين صفحات الهبوط ومعدل النقر لتحقيق أعلى نقاط جودة وخفض تكلفة الاستحواذ.",
        descEn: "Improving landing page relevance to raise Quality Scores, lowering CPC while boosting conversion volume.",
      },
    ],
    faqs: [
      {
        questionAr: "ما الفرق بين إعلانات Google وتهيئة محركات البحث (SEO)؟",
        questionEn: "What is the difference between Google Ads and organic SEO?",
        answerAr: "إعلانات Google تمنحك ظهوراً فورياً في أعلى الصفحة الأولى بمجرد إطلاق الحملة، بينما تهيئة SEO تبني حضوراً عضوياً مجانياً ومستداماً على المدى الطويل. ندمج بين الاثنين لتحقيق أقصى استفادة.",
        answerEn: "Google Ads provides immediate Page 1 visibility from day one, while SEO builds sustainable long-term organic authority. We combine both strategies for maximum market capture.",
      },
    ],
    relatedCategory: "google",
    iconName: "Sparkles",
  },
];

export function getServiceBySlug(slug: string): ServiceItemData | undefined {
  return servicesList.find((s) => s.slug === slug);
}
