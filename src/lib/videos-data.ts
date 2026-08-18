import type { Loc } from "@/lib/books-data";

export interface Short {
  /** YouTube video id. */
  id: string;
  title: Loc;
  /** View count at the time the list was last synced. */
  views?: number;
  /** i.ytimg.com still to use, when the default vertical one is missing. */
  thumb?: string;
}

/**
 * Every Short published on the youtube.com/@osamaimseeh6557 channel,
 * newest first. Regenerate with `npm run sync:shorts`.
 */
export const shorts: Short[] = [
  {
    id: "OxUXzmqfdDQ",
    title: { ar: "شو أصل جملة \"شايف حاله\"؟", en: "What is the origin of the phrase \"full of himself\"?" },
    views: 1500,
  },
  {
    id: "gjYcW1GsU2Y",
    title: { ar: "«لا تخف من التخلّي عن الجيّد سعيًا وراء العظيم.» جون روكفلر", en: "\"Don't be afraid to give up the good to go for the great.\" John D. Rockefeller" },
    views: 2400,
  },
  {
    id: "pQvXBLf3iyE",
    title: { ar: "Just in Case?", en: "Just in Case?" },
    views: 2200,
  },
  {
    id: "qpsHqYvUXek",
    title: { ar: "حب الأب والأم غير مشروط 🤍", en: "A Parent's Love is Unconditional 🤍" },
    views: 2200,
  },
  {
    id: "PDKoV2OYAww",
    title: { ar: "مقولة محمد علي كلاي", en: "Muhammad Ali's Quote" },
    views: 1400,
  },
  {
    id: "1lHx6uA8Du4",
    title: { ar: "الابتسامة أول سلعة يقدمها التاجر", en: "A Smile Is a Merchant's Best Commodity" },
    views: 1500,
  },
  {
    id: "sySXBsbQkwI",
    title: { ar: "خلاوة انك ما تعمل اشي؟", en: "The beauty of not having to do anything?" },
    views: 1600,
  },
  {
    id: "f7y0Fr7DWaQ",
    title: { ar: "جد لأخيك عذراً", en: "Give Your Brother the Benefit of the Doubt" },
    views: 1200,
  },
  {
    id: "WtO5w7H6vyc",
    title: { ar: "كيف لا تصبح مديونيراً!", en: "How to Avoid Going Into Debt!" },
    views: 1200,
  },
  {
    id: "nLYY4qgAYPA",
    title: { ar: "\"القائد… يبقى في الخلف عندما يحتفل الناس بالنجاح، ويتقدم إلى الأمام عندما يكون هناك خطر.\"", en: "The Leader... stays in the back when people celebrate success, and steps to the front when there ..." },
    views: 1800,
  },
  {
    id: "kM3hYJ0BFn0",
    title: { ar: "لا تلوموا الغايب ليحضر!", en: "Don't Blame Those Who Are Absent!" },
    views: 1900,
  },
  {
    id: "M-CM2zZR7e4",
    title: { ar: "المقارنة!", en: "Comparison!" },
    views: 1300,
  },
  {
    id: "dY_IQvJHn_Y",
    title: { ar: "لما كان أبوي عايش كنت أتشعبط عالحيط ومش خايف!", en: "When my dad was alive, I used to climb the walls without a care!" },
    views: 38000,
  },
  {
    id: "gY7Us3z0gl0",
    title: { ar: "سألوا رجل حكيم!", en: "They Asked a Wise Man!" },
    views: 70000,
  },
  {
    id: "GKQ1uYAeHEU",
    title: { ar: "“إنَّ المتكبِّر مثلُ رجلٍ فوق جبلٍ، يرى الناسَ صغارًا ويرونه صغيرًا.” — الحسن البصري.", en: "“The arrogant man is like a man on a mountain; he sees people as small, and they see him as small..." },
    views: 2400,
  },
  {
    id: "pzyGZaJRBVE",
    title: { ar: "“قاومت شجرة البلوط الريح فانكسرت، بينما انحَنَتْ الصفصافة عندما لزم الأمر فَنَجَتْ.\"", en: "The oak resisted the wind and broke, while the willow bent when it had to and survived." },
    views: 4800,
  },
  {
    id: "CmzUXIPuDbo",
    title: { ar: "يابا بلكه!", en: "يابا بلكه!" },
    views: 6100,
  },
  {
    id: "W4DAmWj8gtE",
    title: { ar: "الغياب شكل من أشكال الحضور", en: "الغياب شكل من أشكال الحضور" },
    views: 2200,
  },
  {
    id: "YpUT5wwDIKA",
    title: { ar: "فوكس ومَهيُونة ولا شبح ومَديُونة!", en: "A beater car is better than a Mercedes you can't afford!" },
    views: 3300,
  },
  {
    id: "15erPjmE-3E",
    title: { ar: "أسوء نوع حبر أحسن من أقوى ذاكرة!", en: "The worst ink is better than the best memory!" },
    views: 1600,
  },
  {
    id: "8fmTqrzGPEo",
    title: { ar: "“منحني أبي أعظم هدية يمكن أن يمنحها إنسان لآخر: لقد آمن بي.”", en: "My father gave me the greatest gift anyone could give another: he believed in me." },
    views: 2400,
  },
  {
    id: "xUX93J1U2ps",
    title: { ar: "ما تحاسب وريثك", en: "Don't Scrutinize Your Heirs" },
    views: 3800,
  },
  {
    id: "ehJyb5kZ7RM",
    title: { ar: "كل مغامرة تحتاج الى خطوة أولى", en: "Every adventure needs a first step" },
    views: 1000,
  },
  {
    id: "P2DQ4-4cNfs",
    title: { ar: "يا ساتر 🤲🤍", en: "Oh God protect us 🤲🤍" },
    views: 1900,
  },
  {
    id: "6QUlHRtVx1g",
    title: { ar: "اشترط على خطيبته تشتري من المحل اللي صاحبه أبو عيون زرق!", en: "اشترط على خطيبته تشتري من المحل اللي صاحبه أبو عيون زرق!" },
    views: 101000,
  },
  {
    id: "WB1tzsKdKrU",
    title: { ar: "في عالم تستطيع فيه أن تكون أي شيء، كن لطيفًا", en: "In a world where you can be anything, be kind" },
    views: 2000,
  },
  {
    id: "ja4rWAqRBxc",
    title: { ar: "دير بالك وين بتمشي!", en: "Watch your step!" },
    views: 3900,
  },
  {
    id: "uBgjIgbyLgU",
    title: { ar: "أكل الرجال على الرجال دين", en: "أكل الرجال على الرجال دين" },
    views: 24000,
  },
  {
    id: "reoC5g_bnoY",
    title: { ar: "فليُسعِد النطق إذا لم يُسعِد الحال", en: "Let the words bring joy if the circumstances do not." },
    views: 3500,
  },
  {
    id: "hDoKpVbSk6I",
    title: { ar: "الذكيُّ يعلمُ ما يقول، والحكيمُ يعلمُ ما ينبغي أن يُقال.", en: "The intelligent person knows what to say, and the wise person knows what should be said." },
    views: 2100,
  },
  {
    id: "ExMz4zuMe2c",
    title: { ar: "بشر القاتل بالقتل ولو بعد حين", en: "بشر القاتل بالقتل ولو بعد حين" },
    views: 5000,
  },
  {
    id: "yUCuCC82oGs",
    title: { ar: "إحنا أحسن من غيرنا وغيرنا احسن منا", en: "إحنا أحسن من غيرنا وغيرنا احسن منا" },
    views: 224,
  },
  {
    id: "AOU-MXD0aao",
    title: { ar: "#اكسبلور #family #تحفيز #بودكاست", en: "#explore #family #motivation #podcast" },
    views: 18000,
  },
  {
    id: "5LsuQ47jkJg",
    title: { ar: "عمل يُجْهِد ولا فراغ يُفْسِد", en: "Working Tires, Idleness Corrupts" },
    views: 4700,
  },
  {
    id: "LbBVPYRtTeQ",
    title: { ar: "لا تمالحه ولا تعاشره ولا تقارشه!", en: "Don't break bread with them, don't keep company with them, and don't engage with them!" },
    views: 6600,
  },
  {
    id: "gr26uOjGq3U",
    title: { ar: "#الظروف #اكسبلور", en: "#الظروف #اكسبلور" },
    views: 2100,
  },
  {
    id: "0STzVZ-tl5E",
    title: { ar: "#الغربة #الظروف #بودكاست #اكسبلور", en: "#الغربة #الظروف #بودكاست #اكسبلور" },
    views: 3400,
  },
  {
    id: "ky5xUCMEh1Y",
    title: { ar: "نيال البيت اللي بطلع منه بيت", en: "Lucky is the house that I come from." },
    views: 229000,
  },
  {
    id: "4aGaptOX3ok",
    title: { ar: "زمَّر بنَيَّك", en: "Play your son's tune" },
    views: 6000,
  },
  {
    id: "xLkT8vVEYF8",
    title: { ar: "اللي الك الك", en: "What's Meant For You Will Be Yours" },
    views: 7400,
  },
  {
    id: "Y5xdeM5Hbks",
    title: { ar: "جنرال ونتر", en: "General Winter" },
    views: 3100,
  },
  {
    id: "dnJema0Jklc",
    title: { ar: "الكذب المستف أحسن من الحكي الصدق", en: "الكذب المستف أحسن من الحكي الصدق" },
    views: 2900,
  },
  {
    id: "Xbu2Dt27Zts",
    title: { ar: "أفضل طريقة للتنبؤ بالمستقبل هي صنعه", en: "أفضل طريقة للتنبؤ بالمستقبل هي صنعه" },
    views: 1400,
  },
  {
    id: "HJNLRLCcbZU",
    title: { ar: "الإنتقاد من عدوك أفضل من نصيحة صديق", en: "الإنتقاد من عدوك أفضل من نصيحة صديق" },
    views: 5400,
  },
  {
    id: "5_XRPUE97DY",
    title: { ar: "حين نتذكر أن المال مالُ الله، يسهل علينا العطاء.", en: "When we remember that money belongs to God, giving becomes easier." },
    views: 13000,
  },
  {
    id: "CKIgnmQm1J8",
    title: { ar: "صاروا يقدرى قيمة القرش!", en: "صاروا يقدرى قيمة القرش!" },
    views: 52000,
  },
  {
    id: "8kln2wEE-YI",
    title: { ar: "لما الأخ بتوجع", en: "When a brother is in pain" },
    views: 221000,
  },
  {
    id: "M5ISXlobBOY",
    title: { ar: "ضريبة النجاح", en: "ضريبة النجاح" },
    views: 2500,
  },
  {
    id: "9hmSaxLgAsg",
    title: { ar: "سلام الصَّاغة", en: "سلام الصَّاغة" },
    views: 11000,
  },
  {
    id: "vFW1zVMxijg",
    title: { ar: "القفة أم اذنين بشيلوها اثنين", en: "القفة أم اذنين بشيلوها اثنين" },
    views: 3200,
  },
  {
    id: "73zdzkVStak",
    title: { ar: "ما بعد الزعل غير الصُلح", en: "ما بعد الزعل غير الصُلح" },
    views: 3300,
  },
  {
    id: "RzKxpeCjyww",
    title: { ar: "ثِق بالله", en: "ثِق بالله" },
    views: 3500,
  },
  {
    id: "O7g-SCnbO3M",
    title: { ar: "ربنا كبير", en: "ربنا كبير" },
    views: 3200,
  },
  {
    id: "NPyEHC8VIyA",
    title: { ar: "حتى انت يا بروتوس؟", en: "حتى انت يا بروتوس؟" },
    views: 1200,
  },
  {
    id: "cmONAaZ4mYU",
    title: { ar: "بذرة خير اليوم… عالم أجمل غداً", en: "بذرة خير اليوم… عالم أجمل غداً" },
    views: 2100,
  },
  {
    id: "_sAX0YDB5lQ",
    title: { ar: "مرِّيت يا حلو بعد الحلا مرِّيت", en: "مرِّيت يا حلو بعد الحلا مرِّيت" },
    views: 7200,
  },
  {
    id: "RGCQ6FK5GxI",
    title: { ar: "الكابتن أبوي!", en: "My Dad Is the Captain!" },
    views: 20000,
  },
  {
    id: "tDEEBupiyOk",
    title: { ar: "يا حافر جورة السوء يا واقع فيها!", en: "يا حافر جورة السوء يا واقع فيها!" },
    views: 2300,
  },
  {
    id: "NIwphXDqEKQ",
    title: { ar: "الدرهم الثاني: ساعة الحظ ما بتتعوض ولو تلى قطع الرقبة", en: "الدرهم الثاني: ساعة الحظ ما بتتعوض ولو تلى قطع الرقبة" },
    views: 3200,
  },
  {
    id: "TX_CvIij0Z8",
    title: { ar: "الدرهم الأول: رافق المِسعَد تِسعَد", en: "الدرهم الأول: رافق المِسعَد تِسعَد" },
    views: 3400,
  },
  {
    id: "iNstZhIR6uQ",
    title: { ar: "الصبر مفتاح الفرج", en: "الصبر مفتاح الفرج" },
    views: 2300,
  },
  {
    id: "YFXngublRwc",
    title: { ar: "خريف عمر الإنسان", en: "خريف عمر الإنسان" },
    views: 1800,
  },
  {
    id: "S93FDpwUtrQ",
    title: { ar: "تقبل الآخرين كما هُم", en: "تقبل الآخرين كما هُم" },
    views: 4800,
  },
  {
    id: "T3YpCGsCcOY",
    title: { ar: "\"اعمل لدنياك كأنك تعيش أبداً، واعمل لآخرتك كأنك تموت غداً.\"", en: "\"اعمل لدنياك كأنك تعيش أبداً، واعمل لآخرتك كأنك تموت غداً.\"" },
    views: 2000,
  },
  {
    id: "8vuW7kq6WaI",
    title: { ar: "3 March 2026", en: "3 March 2026" },
    views: 1200,
  },
  {
    id: "ZSAYdgZCtKs",
    title: { ar: "القيمة الحقيقية للإنسان فيما يعطي وليس فيما يملكه", en: "القيمة الحقيقية للإنسان فيما يعطي وليس فيما يملكه" },
    views: 1600,
  },
  {
    id: "A-pZRebNEDk",
    title: { ar: "مش عيب انك توقع عيب ما تقوم!", en: "مش عيب انك توقع عيب ما تقوم!" },
    views: 2100,
  },
  {
    id: "ejSCRZ50_E4",
    title: { ar: "الاعتراف بالذنب فضيلة", en: "الاعتراف بالذنب فضيلة" },
    views: 2400,
  },
  {
    id: "VzNlCIn3HfA",
    title: { ar: "رح تهري ٢٠ كندرة!", en: "رح تهري ٢٠ كندرة!" },
    views: 6000,
  },
  {
    id: "X6JSScDA-k0",
    title: { ar: "\"أُصبُر على مُرّ الانضباط، ولا تصبر على مُرّ الندم.\"", en: "\"أُصبُر على مُرّ الانضباط، ولا تصبر على مُرّ الندم.\"" },
    views: 871,
  },
  {
    id: "wR21aT2sdf4",
    title: { ar: "أطفالنا يطلبون وقتنا 🤍", en: "أطفالنا يطلبون وقتنا 🤍" },
    views: 398,
  },
  {
    id: "sqtCXsj17eY",
    title: { ar: "إن كان حقًا ما يضيع.", en: "إن كان حقًا ما يضيع." },
    views: 179,
  },
  {
    id: "lNQsvGcGRNQ",
    title: { ar: "بدل ما نعشي اللي معهم مصاري نعشي الاي ما معهم!", en: "بدل ما نعشي اللي معهم مصاري نعشي الاي ما معهم!" },
    views: 2800,
  },
  {
    id: "3pptLQW5uZ4",
    title: { ar: "حضوري كان وداعًا بيني وبينه", en: "حضوري كان وداعًا بيني وبينه" },
    views: 1700,
  },
  {
    id: "HVqSqvtED-g",
    title: { ar: "داري على شمعتك بتقيد", en: "داري على شمعتك بتقيد" },
    views: 5000,
  },
  {
    id: "IgJylY2gH4o",
    title: { ar: "احلم احلام قابلة للتحقيق", en: "احلم احلام قابلة للتحقيق" },
    views: 1800,
  },
  {
    id: "bRStzJEcx6E",
    title: { ar: "الفضل دَيْنٌ في الأعناق لا يُقضى إلا بالوفاء", en: "الفضل دَيْنٌ في الأعناق لا يُقضى إلا بالوفاء" },
    views: 163000,
  },
  {
    id: "rNzgrNu6mTI",
    title: { ar: "من عرف قيمة يومه، لم يلتفت إلى أمسه.", en: "من عرف قيمة يومه، لم يلتفت إلى أمسه." },
    views: 2000,
  },
  {
    id: "JkYY7bSi5uM",
    title: { ar: "الحكمة في نقل الأخبار السيئة", en: "الحكمة في نقل الأخبار السيئة" },
    views: 269,
  },
  {
    id: "vwp5r3rDfU4",
    title: { ar: "٣ أعمار للأصدقاء", en: "٣ أعمار للأصدقاء" },
    views: 1300,
  },
  {
    id: "4ypsgxJ5zcQ",
    title: { ar: "ذكريات الطفولة", en: "Childhood Memories" },
    views: 2200,
  },
  {
    id: "PkiBLW8FQwY",
    title: { ar: "خصوصية الأبناء", en: "خصوصية الأبناء" },
    views: 1200,
  },
  {
    id: "LUsY3VKF-c8",
    title: { ar: "خير المرافقة الموافقة", en: "خير المرافقة الموافقة" },
    views: 3500,
  },
  {
    id: "ivwUzg7p5Cw",
    title: { ar: "أولادك ليسوا لكم", en: "Your Children Are Not Yours" },
    views: 127000,
  },
  {
    id: "pitT3TbYqH0",
    title: { ar: "الصراحة", en: "الصراحة" },
    views: 2200,
  },
  {
    id: "e-GFIRjkgkM",
    title: { ar: "إلك من باب محلك وجوا", en: "إلك من باب محلك وجوا" },
    views: 6400,
  },
  {
    id: "hSfDtjG6wW4",
    title: { ar: "#قصص_واقعية #family #lifelessons", en: "#قصص_واقعية #family #lifelessons" },
    views: 3000,
  },
  {
    id: "dLlQQhDnNXk",
    title: { ar: "الأمانة لا تحتاج شهود", en: "الأمانة لا تحتاج شهود" },
    views: 96000,
  },
  {
    id: "_sWv1X4A_30",
    title: { ar: "اذا كبر ابنك خاويه", en: "When your son grows up, treat him like a brother" },
    views: 23000,
  },
  {
    id: "SkpQoI5Av_Q",
    title: { ar: "اهدى بقى لقيناه", en: "اهدى بقى لقيناه" },
    views: 1300,
  },
  {
    id: "CwvmymYNkgU",
    title: { ar: "عيش الحياة بسعادة لأنه الحياة ما فيهاش إعادة", en: "عيش الحياة بسعادة لأنه الحياة ما فيهاش إعادة" },
    views: 3900,
  },
  {
    id: "DVo61SI1y08",
    title: { ar: "الذكاء العاطفي", en: "الذكاء العاطفي" },
    views: 6600,
  },
  {
    id: "6n-Q5VRxIdE",
    title: { ar: "مقولة علي بن أبي طالب", en: "مقولة علي بن أبي طالب" },
    views: 8400,
  },
  {
    id: "cFWkAvtcb2Q",
    title: { ar: "ما في اشي إسمه أنا لحالي إحنا أخوة", en: "There is no such thing as \"on my own,\" we are brothers" },
    views: 8100,
  },
  {
    id: "3Aba83QxyA4",
    title: { ar: "#lifelessons #قصص_واقعية #تطوير_الذات", en: "#lifelessons #قصص_واقعية #تطوير_الذات" },
    views: 17000,
  },
  {
    id: "OTldmxHcSXg",
    title: { ar: "#lifelessons #family", en: "#lifelessons #family" },
    views: 2400,
  },
  {
    id: "NVlB6S85Uyw",
    title: { ar: "يلا تنام 🤍", en: "يلا تنام 🤍" },
    views: 424,
  },
  {
    id: "1bmFCcXixKw",
    title: { ar: "كونوا شغوفين!", en: "كونوا شغوفين!" },
    views: 1400,
  },
  {
    id: "7z3FB4ojIp0",
    title: { ar: "الكامة الطيبة بلسم الجروح", en: "الكامة الطيبة بلسم الجروح" },
    views: 2100,
  },
  {
    id: "bWGEOQ8r78k",
    title: { ar: "من أين يُؤتى الحَذِر؟", en: "من أين يُؤتى الحَذِر؟" },
    views: 9400,
  },
  {
    id: "xMuTbHbp3nY",
    title: { ar: "عالم السوشال ميديا", en: "عالم السوشال ميديا" },
    views: 1600,
  },
  {
    id: "hQK0G2P6cMo",
    title: { ar: "الصراع بين الخير والشر", en: "الصراع بين الخير والشر" },
    views: 1600,
  },
  {
    id: "5-Wl9OTvNZs",
    title: { ar: "الصدق والكذب", en: "الصدق والكذب" },
    views: 1600,
  },
  {
    id: "e-Gf4UzXr0Y",
    title: { ar: "أصدق كذبة كذبتها بحياتي", en: "أصدق كذبة كذبتها بحياتي" },
    views: 3200,
  },
  {
    id: "Cipp8tUduMM",
    title: { ar: "الكذب والصدق", en: "الكذب والصدق" },
    views: 1400,
  },
  {
    id: "7fGnbcTgcJM",
    title: { ar: "بِرّهم دين و ردُّه صعب", en: "بِرّهم دين و ردُّه صعب" },
    views: 215,
  },
  {
    id: "k4TeBhrlrfc",
    title: { ar: "رف الخير", en: "رف الخير" },
    views: 8900,
  },
  {
    id: "GK7BsAyg4Wc",
    title: { ar: "اذا كنت تريد السلام فتحضر للحرب", en: "اذا كنت تريد السلام فتحضر للحرب" },
    views: 2300,
  },
  {
    id: "0K7YOc26aj4",
    title: { ar: "قَوْل أعجبني جداً…", en: "A quote I really liked…" },
    views: 1800,
  },
  {
    id: "oBvsD8h8I98",
    title: { ar: "كيف بدك تتطور بشركتك؟", en: "كيف بدك تتطور بشركتك؟" },
    views: 168,
  },
  {
    id: "kmDvvci2Miw",
    title: { ar: "قصة جكيت الجينز", en: "قصة جكيت الجينز" },
    views: 1600,
  },
  {
    id: "X7CNmXL6yFo",
    title: { ar: "داري على شمعتك بتقيد", en: "داري على شمعتك بتقيد" },
    views: 804,
  },
  {
    id: "re5v_MBx2L4",
    title: { ar: "قصة الشاطر حسن اللي علم الحمار الحكي.", en: "قصة الشاطر حسن اللي علم الحمار الحكي." },
    views: 1500,
  },
  {
    id: "VSg-1VKJfM4",
    title: { ar: "Don’t let anyone take you for granted.", en: "Don’t let anyone take you for granted." },
    views: 1900,
  },
  {
    id: "OXMhwBx12xY",
    title: { ar: "القلب يدمع قبل العين أحياناً", en: "القلب يدمع قبل العين أحياناً" },
    views: 460,
  },
  {
    id: "_f24Ho8c--U",
    title: { ar: "إتعب لنفسك مش للناس", en: "إتعب لنفسك مش للناس" },
    views: 2700,
  },
  {
    id: "73SxkkJ686Y",
    title: { ar: "شو رأيكم؟", en: "شو رأيكم؟" },
    views: 1700,
  },
  {
    id: "Ivq08bZnQ-Q",
    title: { ar: "ورقة شجرة والتجارة؟", en: "ورقة شجرة والتجارة؟" },
    views: 1500,
  },
  {
    id: "gOw5GYHsdfc",
    title: { ar: "ليش بعمل محتوى؟", en: "ليش بعمل محتوى؟" },
    views: 1600,
  },
  {
    id: "G04LueTpvKg",
    title: { ar: "الجاهات.", en: "الجاهات." },
    views: 864,
  },
  {
    id: "Uj7ifM9r1vw",
    title: { ar: "الطبيب إنسان", en: "الطبيب إنسان" },
    views: 2000,
  },
  {
    id: "QBi33YIeQIs",
    title: { ar: "الخياط الطماع", en: "الخياط الطماع" },
    views: 2100,
  },
  {
    id: "vI-vtQYDQlM",
    title: { ar: "ما تكون زيادة عدد.", en: "ما تكون زيادة عدد." },
    views: 2600,
  },
  {
    id: "JEDxK9TY1Qo",
    title: { ar: "أعطاه آخر ربع دولار.", en: "أعطاه آخر ربع دولار." },
    views: 22000,
  },
  {
    id: "SdR6SXb6k_4",
    title: { ar: "رصيده بسمحله.", en: "رصيده بسمحله." },
    views: 4600,
  },
  {
    id: "iwS_Z5XZMXE",
    title: { ar: "مَثَل غريب.", en: "مَثَل غريب." },
    views: 20000,
  },
  {
    id: "Rez4J85F-1Y",
    title: { ar: "خيرك برجعلك حتى لو بشلن.", en: "خيرك برجعلك حتى لو بشلن." },
    views: 10000,
  },
  {
    id: "sbchplFgSqM",
    title: { ar: "في حرامية بتسرق فرحتك بالنهار..", en: "في حرامية بتسرق فرحتك بالنهار.." },
    views: 3600,
  },
  {
    id: "AsfZ93RG-O0",
    title: { ar: "ما تخلي أواعيك أثمن ما فيك.", en: "ما تخلي أواعيك أثمن ما فيك." },
    views: 9800,
  },
  {
    id: "TLIlfUhYNaQ",
    title: { ar: "أوقات بتربح لما بتخسر..", en: "أوقات بتربح لما بتخسر.." },
    views: 31000,
  },
  {
    id: "isrXUPdpKps",
    title: { ar: "ما الحياةُ إلا وقفةُ عِزٍّ.", en: "ما الحياةُ إلا وقفةُ عِزٍّ." },
    views: 6100,
  },
  {
    id: "xDriAQGgi1g",
    title: { ar: "كل واحد بعمل بأصله", en: "كل واحد بعمل بأصله" },
    views: 13000,
  },
  {
    id: "3dM1GKXQx7E",
    title: { ar: "المال ما بعمل رجال، الرجال هي الي بتعمل المال.", en: "المال ما بعمل رجال، الرجال هي الي بتعمل المال." },
    views: 24000,
  },
  {
    id: "imA-7nfZX9Y",
    title: { ar: "رَجُلٌ حينَ يَعِزُّ الرِجال…", en: "A Man of Principle in Times of Scarcity…" },
    views: 270000,
  },
  {
    id: "Nektjcm4HT0",
    title: { ar: "العوض بوجه الكريم", en: "العوض بوجه الكريم" },
    views: 125000,
  },
  {
    id: "kYDrtYggtsA",
    title: { ar: "شو بصير لما تتغير النيِّة؟", en: "What happens when intentions change?" },
    views: 114000,
  },
  {
    id: "dDh9nydoKQ0",
    title: { ar: "الغني من استغنى بالله", en: "الغني من استغنى بالله" },
    views: 27000,
  },
  {
    id: "pX6vDEVKUZk",
    title: { ar: "براءة الأطفال", en: "براءة الأطفال" },
    views: 17000,
  },
  {
    id: "ABUi0wssv-E",
    title: { ar: "لا تَتَكَبَّر!", en: "لا تَتَكَبَّر!" },
    views: 8600,
  },
  {
    id: "k0eHsoANDu0",
    title: { ar: "لو الدعاوي بتجوز", en: "لو الدعاوي بتجوز" },
    views: 1900,
  },
  {
    id: "uXgZ9BWkcTs",
    title: { ar: "مين أحسن شريك بالدنيا؟", en: "مين أحسن شريك بالدنيا؟" },
    views: 5400,
  },
  {
    id: "qQyGsOtsXJE",
    title: { ar: "\"دَاوِ العَليلَ بِلُطفٍ لا بِقَسْوَة.\"", en: "\"دَاوِ العَليلَ بِلُطفٍ لا بِقَسْوَة.\"" },
    views: 1900,
  },
  {
    id: "_uaYzgLKI7w",
    title: { ar: "الفلاتر الثلاثة.", en: "الفلاتر الثلاثة." },
    views: 844,
  },
  {
    id: "bt2CDVJNUVw",
    title: { ar: "هل انت مدير ولا قائد؟", en: "هل انت مدير ولا قائد؟" },
    views: 1700,
  },
  {
    id: "GpZYHKoaC2U",
    title: { ar: "الحاهة من شخص واحد", en: "الحاهة من شخص واحد" },
    views: 1900,
  },
  {
    id: "eTwmc24khFI",
    title: { ar: "شو الوطن بالنسبة إلك؟", en: "شو الوطن بالنسبة إلك؟" },
    views: 677,
  },
  {
    id: "FHn8F_Wg4-E",
    title: { ar: "قطط الحارة..", en: "قطط الحارة.." },
    views: 5800,
  },
  {
    id: "WL25kJNQlko",
    title: { ar: "عوامل النجاح..", en: "عوامل النجاح.." },
    views: 1700,
  },
  {
    id: "vi_SXf4iGOg",
    title: { ar: "كل إناء بما فيه ينضح.", en: "كل إناء بما فيه ينضح." },
    views: 947,
  },
  {
    id: "79_14UJPfbQ",
    title: { ar: "أصعب موقف في حياتي..", en: "أصعب موقف في حياتي.." },
    views: 2000,
  },
  {
    id: "beNqj2Da5J0",
    title: { ar: "الجامعة الاردنية ٢", en: "الجامعة الاردنية ٢" },
    views: 1800,
  },
  {
    id: "zhscyVrk7q4",
    title: { ar: "#اكسبلور #lifelessons #تحفيز #تطوير_الذات", en: "#اكسبلور #lifelessons #تحفيز #تطوير_الذات" },
    views: 1500,
  },
  {
    id: "s-CxfPfS1I4",
    title: { ar: "#المتنبي #شعر #أدب #قصيدة", en: "#المتنبي #شعر #أدب #قصيدة" },
    views: 1900,
  },
  {
    id: "K4DEGGNiCF0",
    title: { ar: "في", en: "في" },
    views: 1500,
  },
  {
    id: "fI7SICQm2YI",
    title: { ar: "الخير ما بضيع مع أولاد الأصل..", en: "الخير ما بضيع مع أولاد الأصل.." },
    views: 1900,
  },
  {
    id: "PxUCs-UuJ2g",
    title: { ar: "طلب الصداقة..", en: "طلب الصداقة.." },
    views: 1700,
  },
  {
    id: "b52psp5bCk8",
    title: { ar: "وصية صديق.", en: "وصية صديق." },
    views: 584,
  },
  {
    id: "fcy90f4D-gM",
    title: { ar: "لما يكبر إبنك..", en: "لما يكبر إبنك.." },
    views: 1500,
  },
  {
    id: "Cc0VTAJwzC8",
    title: { ar: "لا تحاول تطفي شمعة غيرك..", en: "لا تحاول تطفي شمعة غيرك.." },
    views: 1400,
  },
  {
    id: "sEZk3wytxzY",
    title: { ar: "#lifelessons #تطوير_الذات #تحفيز", en: "#lifelessons #تطوير_الذات #تحفيز" },
    views: 272,
  },
  {
    id: "wNlFhy0BFA0",
    title: { ar: "عيد ميلادي الخمسين..", en: "عيد ميلادي الخمسين.." },
    views: 1900,
  },
  {
    id: "Q8ka9ff-27w",
    title: { ar: "بتخلي شَعْرة معاوية؟", en: "بتخلي شَعْرة معاوية؟" },
    views: 1200,
  },
  {
    id: "2eUY4c-DNz8",
    title: { ar: "فكر شوي..", en: "فكر شوي.." },
    views: 1200,
  },
  {
    id: "fRDqbJxLCvk",
    title: { ar: "#تحفيز #أب #تنمية_بشرية", en: "#تحفيز #أب #تنمية_بشرية" },
    views: 1600,
  },
  {
    id: "xZmyhcIifik",
    title: { ar: "بعض الصمت حكمة.", en: "بعض الصمت حكمة." },
    views: 335,
  },
  {
    id: "VCzt2q8A0Mw",
    title: { ar: "الله هو الشافي..", en: "الله هو الشافي.." },
    views: 320,
  },
  {
    id: "-NeYAsXcMBo",
    title: { ar: "قصة النبي داود والملك شاول.", en: "قصة النبي داود والملك شاول." },
    views: 739,
  },
  {
    id: "1l8FPXrsV2w",
    title: { ar: "صاحب الحلال", en: "صاحب الحلال" },
    views: 410,
  },
  {
    id: "Rkrt5-Q1msM",
    title: { ar: "إذا غاب الرقيب، ما غاب الحسيب.", en: "إذا غاب الرقيب، ما غاب الحسيب." },
    views: 328,
  },
  {
    id: "A_a8AsuLleo",
    title: { ar: "جواب الحلقة الماضية.", en: "جواب الحلقة الماضية." },
    views: 1600,
  },
  {
    id: "aZhsJ5j4V3s",
    title: { ar: "الخير بعدي…", en: "الخير بعدي…" },
    views: 1200,
  },
  {
    id: "BIk4CgewizE",
    title: { ar: "الصراحة حلوة لكن بحكمة.", en: "الصراحة حلوة لكن بحكمة." },
    views: 318,
  },
  {
    id: "7VXQ49M7Enk",
    title: { ar: "بتضل تساعد ولا بتسكر الباب؟", en: "بتضل تساعد ولا بتسكر الباب؟" },
    views: 1600,
  },
  {
    id: "JnKm27JG7As",
    title: { ar: "قصة رباط البوت…", en: "قصة رباط البوت…" },
    views: 1000,
  },
  {
    id: "mu13lQUJhfQ",
    title: { ar: "جار القمر ما بتهنى بنوره..", en: "جار القمر ما بتهنى بنوره.." },
    views: 1200,
  },
  {
    id: "XZhpsivRIhU",
    title: { ar: "قصة حبة الخردل..", en: "قصة حبة الخردل.." },
    views: 1500,
  },
  {
    id: "ObFVhIDhmvQ",
    title: { ar: "الإعتراف بالذنب فضيلة.", en: "الإعتراف بالذنب فضيلة." },
    views: 1400,
  },
  {
    id: "k1aKYX9YZCs",
    title: { ar: "\"وذقت مرارات الدنيا فلم أجد أمرّ من الحاجة إلى الناس.\"", en: "\"وذقت مرارات الدنيا فلم أجد أمرّ من الحاجة إلى الناس.\"" },
    views: 290,
  },
  {
    id: "HkYupHI9bI0",
    title: { ar: "الله اللي بوزع الرزق..", en: "الله اللي بوزع الرزق.." },
    views: 266,
  },
  {
    id: "9s3kEGWCsbQ",
    title: { ar: "الكرسي العملاق", en: "الكرسي العملاق" },
    views: 407,
  },
  {
    id: "8qtIQlvzx1Q",
    title: { ar: "مشطت شعرها و خلدنا ذكرى.", en: "مشطت شعرها و خلدنا ذكرى." },
    views: 989,
  },
  {
    id: "JwoDvZ0NUPs",
    title: { ar: "أحياناً الراحة قرار مش كسل.", en: "أحياناً الراحة قرار مش كسل." },
    views: 1100,
  },
  {
    id: "eI3ZoGBgc40",
    title: { ar: "الله يمهل ولا يهمل..", en: "الله يمهل ولا يهمل.." },
    views: 1300,
  },
  {
    id: "dDo_BD-We00",
    title: { ar: "رجعوا الأمانة و رفضوا المكافأة…", en: "رجعوا الأمانة و رفضوا المكافأة…" },
    views: 355,
  },
  {
    id: "DHcs9zwRImQ",
    title: { ar: "أبناءك برجعو بختاروك؟", en: "أبناءك برجعو بختاروك؟" },
    views: 1400,
  },
  {
    id: "5GH1JdTViJs",
    title: { ar: "نصيحة..", en: "نصيحة.." },
    views: 267,
  },
  {
    id: "H1m5R7rjAIY",
    title: { ar: "شو بتعمل لو كنت مكاني ٢؟", en: "شو بتعمل لو كنت مكاني ٢؟" },
    views: 421,
  },
  {
    id: "8EqUKODNmzs",
    title: { ar: "شو بتعمل لو كنت مكاني؟", en: "شو بتعمل لو كنت مكاني؟" },
    views: 1200,
  },
  {
    id: "LhaB2vPRucI",
    title: { ar: "الأرض بتحكي؟", en: "الأرض بتحكي؟" },
    views: 1100,
  },
  {
    id: "I38eUifh8Uc",
    title: { ar: "أواعي العيد.", en: "أواعي العيد." },
    views: 594,
  },
  {
    id: "Z5-0Z5U1KsQ",
    title: { ar: "في علاج للزهايمر؟", en: "في علاج للزهايمر؟" },
    views: 644,
  },
  {
    id: "DCFoD40vJrY",
    title: { ar: "إرضَ بالنصيب..", en: "إرضَ بالنصيب.." },
    views: 608,
  },
  {
    id: "0SFpbqGyxwU",
    title: { ar: "كل عام وأنتم بخير.", en: "كل عام وأنتم بخير." },
    views: 122,
  },
  {
    id: "MwiTengfUws",
    title: { ar: "مال الحرام ما بدوم..", en: "مال الحرام ما بدوم.." },
    views: 956,
  },
  {
    id: "r3PCyYWFTR4",
    title: { ar: "غني بلا مال عن الناس كلها.", en: "غني بلا مال عن الناس كلها." },
    views: 162,
  },
  {
    id: "ZDMqB2wHCHM",
    title: { ar: "وين الحل؟", en: "وين الحل؟" },
    views: 110,
  },
  {
    id: "vfUO-F_giGc",
    title: { ar: "ممكن في شلن بالقلب وواجبك تشيلو قبل ما يغرق.", en: "ممكن في شلن بالقلب وواجبك تشيلو قبل ما يغرق." },
    views: 71,
  },
  {
    id: "5Ei8lMxuzAQ",
    title: { ar: "الناس ما بتشتري أفكار، بتشتري أحلام…", en: "الناس ما بتشتري أفكار، بتشتري أحلام…" },
    views: 572,
  },
  {
    id: "fHyiHGRzKSQ",
    title: { ar: "في عزومة من ورا الباب و عزومة بتمزع الثياب..", en: "في عزومة من ورا الباب و عزومة بتمزع الثياب.." },
    views: 199,
  },
  {
    id: "mcMRjkoR080",
    title: { ar: "إحلم حلم كبير.", en: "إحلم حلم كبير." },
    views: 127,
  },
  {
    id: "tYGjNV4DQSU",
    title: { ar: "كل فتاة بأبيها معجبة.", en: "كل فتاة بأبيها معجبة." },
    views: 591,
  },
  {
    id: "rCS2TK4hR98",
    title: { ar: "دير بالك على حالك.", en: "دير بالك على حالك." },
    views: 687,
  },
  {
    id: "mk64WqbjY8E",
    title: { ar: "اللي بنقلك بنقل عنك..", en: "اللي بنقلك بنقل عنك.." },
    views: 565,
  },
  {
    id: "JBcTZU9BAKA",
    title: { ar: "وعد تاجر لإبنه.", en: "وعد تاجر لإبنه." },
    views: 84,
  },
  {
    id: "tO60NMWwhgM",
    title: { ar: "لا تقارن..", en: "لا تقارن.." },
    views: 206,
  },
  {
    id: "hW7U51wSdF8",
    title: { ar: "مش كل شي قديم كنز.. أحياناً الراحة في التخلي.", en: "مش كل شي قديم كنز.. أحياناً الراحة في التخلي." },
    views: 490,
  },
  {
    id: "I95rF4yZMto",
    title: { ar: "الكرم الحقيقي.", en: "الكرم الحقيقي." },
    views: 59,
  },
  {
    id: "YoU9x-V-mfM",
    title: { ar: "من الحكمة أن تتسرع في شيء واحد فقط…", en: "من الحكمة أن تتسرع في شيء واحد فقط…" },
    views: 531,
  },
  {
    id: "DuPZzUaPzq0",
    title: { ar: "المحبة مش يوم المحبة أسلوب حياة..", en: "المحبة مش يوم المحبة أسلوب حياة.." },
    views: 64,
  },
  {
    id: "Od0eVyQYbuc",
    title: { ar: "لا تخلي العتب يستنى سنين..", en: "لا تخلي العتب يستنى سنين.." },
    views: 87,
  },
  {
    id: "-SdzqGid89o",
    title: { ar: "مش كل علط فردي… أحياناً المسؤولية مشتركة!", en: "مش كل علط فردي… أحياناً المسؤولية مشتركة!" },
    views: 32,
  },
  {
    id: "F_wKK5D2Q0Q",
    title: { ar: "التوقيع مش بالقلم، لكن بالعشرة!", en: "التوقيع مش بالقلم، لكن بالعشرة!" },
    views: 993,
  },
  {
    id: "G-9IUGQtibI",
    title: { ar: "بالحكمة نصنع أجيالاً لا تحمل الحقد والعار بل تحمل القِيَمْ و التسامح.", en: "بالحكمة نصنع أجيالاً لا تحمل الحقد والعار بل تحمل القِيَمْ و التسامح." },
    views: 78,
  },
  {
    id: "CEG-YhOkA8s",
    title: { ar: "علشان هيك اختار المقارنة اللي بترفعك، مش اللي بتهدمك!", en: "علشان هيك اختار المقارنة اللي بترفعك، مش اللي بتهدمك!" },
    views: 56,
  },
  {
    id: "cCHPkItLrVk",
    title: { ar: "The Tenth Secret to Happiness. #تطوير_الذات #secretsofhappiness #happhappy ness y", en: "The Tenth Secret to Happiness. #تطوير_الذات #secretsofhappiness #happhappy ness y" },
    views: 124,
  },
  {
    id: "zS6PPqMa0N8",
    title: { ar: "القهوة هي هي..", en: "القهوة هي هي.." },
    views: 87,
  },
  {
    id: "XSzx0yczZEE",
    title: { ar: "Be Bold, Not Careful.", en: "Be Bold, Not Careful." },
    views: 535,
  },
  {
    id: "-WSrpbvSuBY",
    title: { ar: "The sixth secret to happiness: Dream.", en: "The sixth secret to happiness: Dream." },
    views: 33,
  },
  {
    id: "zE5f5WR7kQU",
    title: { ar: "ما تترك عدو الخير يدهل بسنك و بين أحةهوك.", en: "ما تترك عدو الخير يدهل بسنك و بين أحةهوك." },
    views: 333,
  },
  {
    id: "YwiEhzoVz3g",
    title: { ar: "الله يرحمك يا أبو علي، خليت الكتب أكبر من ورق وجعلتها جزء مني.", en: "الله يرحمك يا أبو علي، خليت الكتب أكبر من ورق وجعلتها جزء مني." },
    views: 45,
  },
  {
    id: "wLRSQcG85-8",
    title: { ar: "سر السعادة الثامن: المثلث الذهبي - حب ربنا، حب نفسك، وحب الآخرين.", en: "سر السعادة الثامن: المثلث الذهبي - حب ربنا، حب نفسك، وحب الآخرين." },
    views: 39,
  },
  {
    id: "nMdusVP--to",
    title: { ar: "الحياة والموت… بين أمل اللقاء ووجع الفقد، لنجعل ذكراهم نوراً بأفعال الخير.", en: "الحياة والموت… بين أمل اللقاء ووجع الفقد، لنجعل ذكراهم نوراً بأفعال الخير." },
    views: 174,
  },
  {
    id: "JIClWfDrq8Y",
    title: { ar: "الحفاظ على العلاقات يكمن في اتقان فن المسافات.", en: "الحفاظ على العلاقات يكمن في اتقان فن المسافات." },
    views: 675,
  },
  {
    id: "TQwvBzW94f0",
    title: { ar: "Forgiveness is easier said than done.", en: "Forgiveness is easier said than done." },
    views: 73,
  },
  {
    id: "ibaU745Qzbk",
    title: { ar: "أحياناً الي بحبوك ما بحتاجوا نصيحتك، بحتاجوا إنك تشاركهم دموعهم، مش توقفها.", en: "أحياناً الي بحبوك ما بحتاجوا نصيحتك، بحتاجوا إنك تشاركهم دموعهم، مش توقفها." },
    views: 552,
  },
  {
    id: "woj5bTkymC0",
    title: { ar: "عمرك سمعت بكلمة بلكه؟", en: "عمرك سمعت بكلمة بلكه؟" },
    views: 536,
  },
  {
    id: "5kUz_beRw_o",
    title: { ar: "سر السعاة السادس: مسامحة الآخرين", en: "سر السعاة السادس: مسامحة الآخرين" },
    views: 60,
  },
  {
    id: "IEFdQF8ZoSQ",
    title: { ar: "الصديق الحقيقي ما بستنّى شكر ولا تقدير، لأنه العِشرة والواجب أكبر من الكلام.", en: "الصديق الحقيقي ما بستنّى شكر ولا تقدير، لأنه العِشرة والواجب أكبر من الكلام." },
    views: 545,
  },
  {
    id: "ytElbydZfLE",
    title: { ar: "الحياة أقصر من إنك تدور ورا ذبانة… إفتح الشباك، ورَكِّز على راحة بالك.", en: "الحياة أقصر من إنك تدور ورا ذبانة… إفتح الشباك، ورَكِّز على راحة بالك." },
    views: 550,
  },
  {
    id: "4zYP2q8LYVw",
    title: { ar: "السر الخامس من أسرار السعادة هو محبة الآخرين", en: "السر الخامس من أسرار السعادة هو محبة الآخرين" },
    views: 22,
  },
  {
    id: "KLlvla_YBG8",
    title: { ar: "العلاقات مثل الورد، ما بتطلب كتير… بس بدها سقاية.", en: "العلاقات مثل الورد، ما بتطلب كتير… بس بدها سقاية." },
    views: 51,
  },
  {
    id: "Gz2OjpuhP_A",
    title: { ar: "الله يجبر بخاطر من يجبر خواطر الناس.", en: "الله يجبر بخاطر من يجبر خواطر الناس." },
    views: 541,
  },
  {
    id: "XB9wiZa5_54",
    title: { ar: "السر الرابع للسعادة: سامح نفسك، صحّح خطأك، وامضِ بسلام.", en: "السر الرابع للسعادة: سامح نفسك، صحّح خطأك، وامضِ بسلام." },
    views: 70,
  },
  {
    id: "P7brPSbMEFI",
    title: { ar: "‎خلي طيبتك قوة تنضاف إلك، مش نقطة ضعف تؤخذ عليك.", en: "‎خلي طيبتك قوة تنضاف إلك، مش نقطة ضعف تؤخذ عليك." },
    views: 560,
  },
  {
    id: "boF4YZEpehk",
    title: { ar: "جد لأخيك عذراً.", en: "جد لأخيك عذراً." },
    views: 519,
  },
  {
    id: "duUgXj5gKyU",
    title: { ar: "السعادة تبدأ عندما تواجه نفسك بصدق، تحاسبها وتصلحها.", en: "السعادة تبدأ عندما تواجه نفسك بصدق، تحاسبها وتصلحها." },
    views: 537,
  },
  {
    id: "Juec7EGJvIo",
    title: { ar: "بيع بقرش واشتري بقرش..", en: "بيع بقرش واشتري بقرش.." },
    views: 537,
  },
  {
    id: "5I0wGS4RSWo",
    title: { ar: "قصة المقلوبة: لما تكون المساعدة واجب، وبركة ربنا هي الأجر الحقيقي.", en: "قصة المقلوبة: لما تكون المساعدة واجب، وبركة ربنا هي الأجر الحقيقي." },
    views: 543,
  },
  {
    id: "cEmKijAGqkw",
    title: { ar: "في الحلقة الثانية من سلسلة أسرار السعادة، لنتحدث عن: المحبِّة.‏#lifelessons ‏", en: "في الحلقة الثانية من سلسلة أسرار السعادة، لنتحدث عن: المحبِّة.‏#lifelessons ‏" },
    views: 68,
  },
  {
    id: "SgGoQovrieU",
    title: { ar: "‎‏في ميزان الحق، لا يخفى على الله شيء", en: "‎‏في ميزان الحق، لا يخفى على الله شيء" },
    views: 547,
  },
  {
    id: "Fu6ZG6BCxWw",
    title: { ar: "الناس للناس ما دام الوفاء بهم.", en: "الناس للناس ما دام الوفاء بهم." },
    views: 21,
  },
  {
    id: "8G7fAQfmPYM",
    title: { ar: "‎في الحلقة الأولى من سلسلة أسرار السعادة، نتحدث عن: سعادة الروح.", en: "‎في الحلقة الأولى من سلسلة أسرار السعادة، نتحدث عن: سعادة الروح." },
    views: 177,
  },
  {
    id: "5EI_5mShVJY",
    title: { ar: "Never fight a war if there’s nothing to win.", en: "Never fight a war if there’s nothing to win." },
    views: 32,
  },
  {
    id: "hH0oOVmTNFI",
    title: { ar: "لتحميل كتابين “علمتني الحياة و“شواخص على دروب الحياة” مجاناً!علق بكلمة “كتاب”", en: "لتحميل كتابين “علمتني الحياة و“شواخص على دروب الحياة” مجاناً!علق بكلمة “كتاب”" },
    views: 1100,
  },
  {
    id: "ZFLy75e_9Kg",
    title: { ar: "Just do it .", en: "Just do it ." },
    views: 37,
  },
  {
    id: "CJeAofOoHuQ",
    title: { ar: "(الأصدقاء ).", en: "(الأصدقاء )." },
    views: 533,
  },
  {
    id: "NuSAY_wyjr0",
    title: { ar: "(درس في العطاء).", en: "(درس في العطاء)." },
    views: 702,
  },
  {
    id: "TprIkmx0JZM",
    title: { ar: "( كل اشي بوقته حلو )", en: "( كل اشي بوقته حلو )" },
    views: 444,
  },
  {
    id: "XMjo0T0vHbE",
    title: { ar: "( أثمن هدية ) .", en: "( أثمن هدية ) ." },
    views: 582,
  },
  {
    id: "0zLymQy6-Gw",
    title: { ar: "( نصيحة ).", en: "( نصيحة )." },
    views: 475,
  },
  {
    id: "oybPJP5kL2Q",
    title: { ar: "( النجاح ).    #اكسبلور تحفيز", en: "( النجاح ).    #اكسبلور تحفيز" },
    views: 451,
  },
  {
    id: "AQFd4ykqTuI",
    title: { ar: "(لا تحب كتير ولا تكره كتير ).", en: "(لا تحب كتير ولا تكره كتير )." },
    views: 605,
  },
  {
    id: "Zml0_imx83g",
    title: { ar: "حِب نفسك.", en: "حِب نفسك." },
    views: 436,
  },
  {
    id: "5lB7oNq6aDg",
    title: { ar: "(وطن لا تحميه ، لا تستحق العيش فيه).", en: "(وطن لا تحميه ، لا تستحق العيش فيه)." },
    views: 47,
  },
  {
    id: "aJliEz3xdcU",
    title: { ar: "(مفتاح الشّر كلمة).", en: "(مفتاح الشّر كلمة)." },
    views: 447,
  },
  {
    id: "44OWJG3S8vo",
    title: { ar: "(قدّم السبت ، بتلاقي الاحد).", en: "(قدّم السبت ، بتلاقي الاحد)." },
    views: 571,
  },
  {
    id: "8XQhaNsHb3Y",
    title: { ar: "(لا تشكوا للناس ، جرحاً انت صاحبه)", en: "(لا تشكوا للناس ، جرحاً انت صاحبه)" },
    views: 626,
  },
  {
    id: "O0mEv74epUo",
    title: { ar: "السوشال ميديا📱.", en: "السوشال ميديا📱." },
    views: 733,
  },
  {
    id: "9YUHjDPfg5o",
    title: { ar: "أيش اهم اشي بدهم يا اولادك؟.", en: "أيش اهم اشي بدهم يا اولادك؟." },
    views: 552,
  },
  {
    id: "azeA5ZVLf50",
    title: { ar: "(إرحموا الشباب والصبايا).", en: "(إرحموا الشباب والصبايا)." },
    views: 572,
  },
  {
    id: "tLuRcsu_jeM",
    title: { ar: "العيون بتحكي ولّا ما بتحكي؟", en: "العيون بتحكي ولّا ما بتحكي؟" },
    views: 42,
    thumb: "oar2",
  },
  {
    id: "xRD1ha2qVFg",
    title: { ar: "(كلام حكيم).", en: "(كلام حكيم)." },
    views: 506,
  },
  {
    id: "FxgqNKjO66Y",
    title: { ar: "(مرّق).", en: "(مرّق)." },
    views: 444,
  },
  {
    id: "_LBEAvtct2Q",
    title: { ar: "(دعوة المظلوم).", en: "(دعوة المظلوم)." },
    views: 587,
  },
  {
    id: "T-r44HaJR2k",
    title: { ar: "(الضمير )….", en: "(الضمير )…." },
    views: 1000,
  },
  {
    id: "5s0JutwsP2U",
    title: { ar: "(ما تتكبّر).", en: "(ما تتكبّر)." },
    views: 66,
  },
  {
    id: "4USlgrT29YM",
    title: { ar: "لمّا بتكبر بنتك❤️", en: "لمّا بتكبر بنتك❤️" },
    views: 636,
  },
];
