import type { Loc } from "@/lib/books-data";

/** A downloadable document attached to a study. A study may carry several. */
export interface StudyDoc {
  label: Loc;
  /** Path to a PDF served from /public. */
  path: string;
}

export interface Study {
  slug: string;
  /** Short kicker shown above the title, e.g. "ورقة نقاشية". */
  category: Loc;
  title: Loc;
  summary: Loc;
  /** Year the study was presented, when known. */
  year?: string;
  docs?: StudyDoc[];
}

export const studies: Study[] = [
  {
    slug: "communal-land-law",
    category: { ar: "تشريع وملكية عقارية", en: "Legislation & Property" },
    title: { ar: "قانون الأراضي المشاع", en: "Communal Land Law" },
    summary: {
      ar: "طرح مشروعاً لمعالجة قضية الأراضي المشاع — قانون رقم (13) لسنة 2019 / الملكية العقارية — يُسهم في توفير مئات الملايين سنوياً على موازنة الدولة وتنشيط الحركة العمرانية.",
      en: "Proposed a project to resolve the issue of communal (Musha') land — Law No. (13) of 2019 / Real Estate Ownership — saving the state budget hundreds of millions annually and revitalizing construction activity.",
    },
    year: "2019",
    docs: [
      {
        label: {
          ar: "مشروع مستقبل الأردن — مقترح تعديل قانون رسوم تسجيل الأراضي",
          en: "Jordan's Future Project — proposed amendment to the land registration fees law",
        },
        path: "/studies/jordan-future-project.pdf",
      },
      {
        label: {
          ar: "قانون الملكية العقارية رقم (13) لسنة 2019 — الجريدة الرسمية",
          en: "Real Estate Ownership Law No. (13) of 2019 — Official Gazette",
        },
        path: "/studies/real-estate-property-law-2019.pdf",
      },
    ],
  },
  {
    slug: "flat-tax-gold-sector",
    category: { ar: "سياسة ضريبية", en: "Tax Policy" },
    title: { ar: "الضريبة المقطوعة في قطاع الذهب", en: "Flat Tax in the Gold Sector" },
    summary: {
      ar: "قدّم دراسة مشروع قانون الضريبة المقطوعة للتجار والمصنعين في قطاع الذهب والمجوهرات.",
      en: "Presented a draft flat-tax law for traders and manufacturers in the gold and jewelry sector.",
    },
    year: "2007",
  },
  {
    slug: "toward-a-better-jordan",
    category: { ar: "ورقة نقاشية", en: "Discussion Paper" },
    title: { ar: "نحو أردن أفضل", en: "Toward a Better Jordan" },
    summary: {
      ar: "طرح العديد من الحلول العملية والمقترحات لمختلف الوزارات والجهات الحكومية، بهدف الارتقاء بالاقتصاد المحلي وتحقيق التنمية الشاملة. تتضمّن الوثيقة التوصيات وما تم إنجازه منها.",
      en: "Proposed numerous practical solutions and recommendations to various ministries and government bodies to advance the local economy and achieve comprehensive development. The document sets out the recommendations and what has been achieved.",
    },
    year: "2018",
    docs: [
      {
        label: { ar: "الوثيقة كاملة مع المرفقات", en: "Full document with annexes" },
        path: "/studies/toward-a-better-jordan.pdf",
      },
    ],
  },
  {
    slug: "covid-as-development-opportunity",
    category: { ar: "تنمية وطنية", en: "National Development" },
    title: { ar: "الكورونا فرصة للتنمية", en: "COVID as an Opportunity for Development" },
    summary: {
      ar: "دراسة لتحويل أزمة جائحة كورونا إلى فرصة تطوير للوطن، تتناول المياه والطاقة والزراعة وسلة الغذاء الأردنية والصناعة والقطاع العام.",
      en: "A study on turning the COVID-19 crisis into an opportunity to develop the country, covering water, energy, agriculture and Jordan's food basket, industry, and the public sector.",
    },
    year: "2020",
    docs: [
      {
        label: { ar: "الدراسة كاملة", en: "Full study" },
        path: "/studies/covid-as-development-opportunity.pdf",
      },
    ],
  },
];
