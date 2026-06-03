import bookCover1 from "@/assets/book-cover-1.png";
import bookCover2 from "@/assets/book-cover-2.png";
import coverMilestones from "@/assets/cover-milestones.jpg";
import coverLifeTaughtMe from "@/assets/cover-life-taught-me.jpg";

export type Loc = { ar: string; en: string };

export interface Book {
  slug: string;
  cover: string;
  category: Loc;
  title: Loc;
  excerpt: Loc;
  author: Loc;
  /** Path to a readable PDF (served from /public). When present, the book can be read online. */
  pdf?: string;
  /** The book's text is in Arabic; the English UI shows a note. */
  arabicContent?: boolean;
  introduction?: string;
  authorIntro?: string;
}

const AUTHOR: Loc = { ar: "أسامة كرم إمسيح", en: "Osama Karam Imseeh" };

export const books: Book[] = [
  {
    slug: "milestones-on-lifes-paths",
    cover: coverMilestones,
    category: { ar: "حكمة لكل يوم", en: "Wisdom for Every Day" },
    title: { ar: "شواخص على دروب الحياة", en: "Milestones on Life's Paths" },
    excerpt: {
      ar: "مجموعة من التأملات والمواعظ القصيرة التي تضيء دروب الحياة بحكمةٍ لكل يوم. من الكتب التي تُدرّس في عددٍ من المدارس الأردنية.",
      en: "A collection of short reflections and meditations that light the paths of life with wisdom for every day. Among the books taught in several Jordanian schools.",
    },
    author: AUTHOR,
    pdf: "/books/milestones-on-lifes-paths.pdf",
    arabicContent: true,
  },
  {
    slug: "life-taught-me",
    cover: coverLifeTaughtMe,
    category: { ar: "تأملات في الحياة", en: "Reflections on Life" },
    title: { ar: "علمتني الحياة", en: "Life Taught Me" },
    excerpt: {
      ar: "خلاصة تجاربَ ودروسٍ استقاها الكاتب من مسيرة حياته، ليشارك القارئ ما علّمته إياه الأيام من حكمةٍ وإيمان.",
      en: "A distillation of the experiences and lessons the author drew from his life's journey, sharing with the reader what the days have taught him of wisdom and faith.",
    },
    author: AUTHOR,
    pdf: "/books/life-taught-me.pdf",
    arabicContent: true,
  },
  {
    slug: "how-to-reach-the-kingdom",
    cover: bookCover1,
    category: { ar: "تأملات وخبرات روحية — الكتاب الثالث", en: "Spiritual Reflections & Experiences — Book Three" },
    title: { ar: "كيف تصل إلى الملكوت؟", en: "How Do You Reach the Kingdom?" },
    excerpt: {
      ar: "الحياة الروحية ليست وقفاً على أحد من الناس، بل هي من نصيب جميع الناس. يحتوي هذا الكتيب على «ساندويشات روحية» تأخذها سريعاً وتغذي بها نفسك.",
      en: "The spiritual life is not reserved for a few; it is the portion of all people. This booklet offers 'spiritual snacks' you can take quickly to nourish your soul.",
    },
    author: AUTHOR,
    arabicContent: true,
    introduction: `الحياة الروحية ليست وقفا على أحد من الناس، بل هي من نصيب جميع الناس، مهما كانت ظروفهم المادية واحوالهم الصحية ومستوياتهم الاجتماعية. فالسيد المسيح يدعو جميع الناس إلى اكتساب دار النعيم بحياة البر والتقوى والقداسة، ويشعل في قلوب محبيه نور الايمان، ويزرع فيهم الرغبة في الاعالي كي يعيشوا كلمته الخلاصية ويحملوها إلى الكثيرين، فيكونوا بعضهم لبعض سندا وشركاء في النعمة والايمان والحب والنور والسلام.

يحتوي هذا الكتيب على «ساندويشات روحية» تأخذها سريعا وتغذي بها نفسك. وقد وزعها الكاتب بالوسائل العصرية، على المواقع الالكترونية والتلفون المحمول، إلى الأصدقاء والأحباء الذين أرادوا ان يشتركوا في خبرته الروحية.

ليس كاتبها كاهنا ولا راهبا ولا مكرسا بل هو رجل علماني، يعيش إيمانه المسيحي وحياته الروحية، ويحمل في أسرته وعمله همومه واتعابه وأفراحه وأحزانه.

«الحياة الداخلية» هي حديث الإنسان إلى نفسه في شتى أمور الحياة. وهي تصبح «حياة روحية» عندما يوسّع الإنسان آفاق هذا الحديث مع ذاته، ليبدأ مع الله حوارا حميما ممتعا، فيتناول فيه موضوع البر والصلاح والخلاص الأبدي، ويقيم مع الله علاقة صداقة شخصية.

«الحياة الروحية» هي الطريق المؤدي إلى الملكوت فاسلك هذا الطريق، وضع يدك بيد الله في أوقات صمتك، كي يقودك الله حيث يريد، وكي يجعل منك نوراً يضيء الطريق للآخرين وخميرة روحية تغير المجتمع، وتشهد له بالتقوى شهادة حسنة. سر حياتك الروحية هو سر حبك للمسيح. فكن على حب المسيح أمينا.

† المطران سليم الصائغ`,
    authorIntro: `كتبت، وأنا الفقير إلى رحمة الله، من أعماق قلبي وفكري ووجداني، ما كنت أشعر فيه في كل ليلة وما أحببت أن أشارك فيه إخوتي بالدم وأخواني بالروح. وصليت لكي تقودني العناية الإلهية في الكتابة. فمن أنا ومن أين لي الجرأة لأكتب؟ ومن أين لي الفهم لأعبّر، ومن أين لي المعرفة لأسترسل لولا يد الله الحانية؟.

إن كلمة الله حية وفعّالة، وروحه مع أبنائه جميعاً. هو ينعم علينا بأن نبذر البذار، لنشعر أننا جزء من خطة الله الرائعة لخلاص البشرية – لكنه هو الذي ينمي، نحن نكتب وروحه يحمل الكلمة ويدخل قلب الإنسان ويحوله من ملحد إلى مؤمن، ومن مجرم إلى تائب، ومن ضال إلى مسترشد.

كوني ربَّاً لأسرة رزقها الله ستة أبناء جعلني اختبر حب الأب والأم لأبنائهم، أخذت أتأمل في قلبي عمق محبة الآب السماوي اللامحدودة لأبنائه التي دفعته ليبذل ابنه الوحيد من أجل ان يحيوا ويرجعوا إلى حضنه.

الفقير إلى رحمة الله
أسامة كرم إمسيح`,
  },
  {
    slug: "who-do-you-say-i-am",
    cover: bookCover2,
    category: { ar: "تأملات وخبرات روحية — الكتاب السابع", en: "Spiritual Reflections & Experiences — Book Seven" },
    title: { ar: "«وأنتم من تقولون إني أنا؟»", en: "“But Who Do You Say I Am?”" },
    excerpt: {
      ar: "سؤال سأله الرب يسوع لتلاميذه، وعلى إجابة هذا السؤال تقرر مصيرهم الأرضي ومصير حياتهم الأبدية. يحوي الكتاب 29 فصلاً و365 فقرة على عدد أيام السنة.",
      en: "A question Jesus asked his disciples — on whose answer their earthly and eternal destiny was decided. The book contains 29 chapters and 365 passages, one for each day of the year.",
    },
    author: AUTHOR,
    arabicContent: true,
    introduction: `ربما نستغرب من أن مؤلف كتاب «وأنتم من تقولون إني أنا هو؟» ليس معلم لاهوت أو عالما من علماء الكتاب المقدس الذين تعلموا في احدى جامعات روما أو أثينا، ولا خريج كلية فلسفة، ولا طبيبا لعلاج الأمراض النفسية والعصبية، ولا واعظا على المنابر، رغم أنه ملمّ بحقائق اللاهوت ويعرف الكتاب المقدس معرفة عميقة ولديه من الحكمة ومعرفة النفس البشرية ما يجعله قادرا على الإقناع والموعظة الحسنة.

مؤلف هذا الكتاب هو الصديق أسامة كرم إمسيح، رجل الأعمال المعروف ونقيب أصحاب محلات الصاغة والمجوهرات. لقد واصل التعلم على نفسه وجمع بين المعرفة والخبرة الإنسانية اللتين تفاعلتا في الصلاة والتأمل فاكتسب حكمة عميقة أراد أن يشركنا بها.

تصفّحت الكتاب فوجدته غنياً بالمواضيع الوجودية التي تهمّ الإنسان في كل زمان ومكان. ومنها المال، الحرية، التواصل والتناحر الاجتماعي، الصلاة وشروط الاستجابة، العناية الربانية، الإيمان، الرحمة والعدل، المغفرة، الحسد والتجارب…

يحوي الكتاب 29 فصلاً، كل منها يتطرّق الى موضوع مستقلّ. ومجموع فقراته 365 فقرة على عدد أيام السنة. لذا لا ننصح بأن يُقرأ الكتاب كقصة أو رواية انما ككتاب تأمل يتغذى منه القارئ يوماً بعد يوم.

† المطران وليم شوملي
النائب البطريركي اللاتيني في الأردن
عمّان في 6/1/2020`,
    authorIntro: `«وانتم من تقولون إني أنا؟» (متى 15:16)

سؤال سأله الرب يسوع لتلاميذه، وعلى إجابة هذا السؤال تقرر مصيرهم الأرضي ومصير حياتهم الأبدية.

حيث أجابه بطرس «أنت المسيح ابن الله الحي» وبناء عليه دفعوا حياتهم ثمناً لجوابهم على هذا السؤال وايمانهم بهذا الجواب.

كذلك أنت ايها القارئ فإن اجابتك على هذا السؤال ستحدد مصيرك وأبديتك، فإذا آمنت ان المسيح يسوع هو ابن الله الحي وهو الله المتجسد ستحظى بالحياة الابدية.

والمفتاح هو، الجواب الصحيح عن سؤال يسوع لك: وانتَ من تقول إني أنا؟

«صلوا لأجلي»
أسامة إمسيح`,
  },
];
