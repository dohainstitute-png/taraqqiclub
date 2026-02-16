## STATION 000 — AppShell Lock (UI-ONLY)

GOAL:
تثبيت AppShell فقط. ممنوع i18n. ممنوع أي صفحات/مسارات. ممنوع أي تعديل خارج مكونات AppShell.

ALLOW:
- components/shell/**

REQUIRE:
- FILE components/shell/AppShell.tsx
- FILE components/shell/BottomNav.tsx
- FILE components/shell/TopAppBar.tsx

FORBIDDEN:
- app/
- i18n
- lib/i18n
- locale
- blueprint.md
- progress_log
- change_audit
- from "firebase
- from 'firebase
- initializeApp
- fetch\(
- https?://

BUDGET:
- max_files=6
- max_add=400
- max_del=400
المحطات المنجزة مع الهوية البصرية
المحطات المنجزة مع الهوية البصرية

 STATION 001
المحطة 1: الأساس الذي سيتكرر في كل ما بعده (Brand + Design System + IA/Navigation + Entry Flow)
المحطة 1: الأساس الذي سيتكرر في كل ما بعده (Brand + Design System + IA/Navigation + Entry Flow)
عرّف المنتج بصريًا وتشغيليًا من أول شاشة: أنشئ هوية واجهة TaraqqiClub (ألوان/خط عربي مناسب/أيقونات/مسافات/حواف) + نبرة نصوص عربية قصيرة، ثم ثبّت قاعدة RTL افتراضيًا مع دعم LTR داخل أجزاء محددة لاحقًا (روابط/مراجع) بدون كسر التخطيط.
ابنِ Design System قابل لإعادة الاستخدام: صمّم مكتبة مكوّنات موحّدة تُستخدم لاحقًا في كل المحطات: (Top App Bar، Bottom Nav، Tabs، Chips/Tags، Cards بأنواعها، قوائم، أزرار Primary/Secondary/Quiet، حقول إدخال، Modals/Sheets، Toast/Snackbar، Badges: Verified/Institution/Availability…)، وحدّد لكل مكوّن حالات Loading / Empty / Error / Disabled / Skeleton ونصوصها القياسية.
صمّم هيكل تنقّل عالمي يربط “اكتشاف → قراءة → مساهمة”: اعمل خريطة IA ومسارات واضحة: نقاط دخول ثابتة (Bottom Nav مثلاً: Home/Discover/Library/Profile) + دخول سياقي من أي بطاقة إلى (Paper Page / Topic Hub / Profile) ثم رجوع منطقي، مع زر/إجراء ثابت يقود إلى “المساهمة” (نشر/رفع/إنشاء) حسب الصلاحيات.
نفّذ تدفّق البداية (Splash → Onboarding → Auth) دون تشتيت: صمّم بالتسلسل: Splash + اختيار اللغة/المنطقة (حفظ locale/timezone) → Onboarding (3 خطوات فقط: Role → Topics → Follow via Starter Packs) مع “تخطي” واضح → Login/Signup (OTP + مزوّدات) + خيار التصفح كضيف إن كان مفعّلًا؛ واجعل كل خطوة تحفظ الحالة وتعرض Skeleton عند التحميل ورسائل خطأ قابلة للإعادة.
اربط نهاية المحطة ببداية المحطة التالية مباشرة
تحديث ملزم لهذه الخطة (لتعميق المحاور الثلاثة: UX + IA/Navigation + Internal/Contextual Navigation)
1) ثبّت قاعدة “Global / Local / Contextual” كقاعدة تصميم:
- Global: Bottom Nav + Top App Bar Actions (بحث/إنشاء/إشعارات) ثابتة.
- Local: تبويبات/قوائم داخل كل سطح (Home/Discover/Library/Profile…).
- Contextual: روابط داخل الصفحات (Context Strip + Breadcrumbs عند الهرمية + Related/See also + Chips).
2) قاعدة “العودة لنفس السياق” عبر كل المنصة:
- كل صفحة تفاصيل تُفتح داخل القسم الحالي.
- زر الرجوع يعيد المستخدم إلى نفس القائمة/النتائج/الفلاتر/موضع التمرير.
3) قاعدة “لا نهاية مسدودة”:
- كل صفحة كيان (Paper/Topic/Researcher/Institution/Post/Highlight/Collection) يجب أن تحتوي دائمًا على وحدتين على الأقل تقودان لخطوة تالية (Follow/Save/Read/Start Session/Related…).
4) الروابط السياقية يجب أن تكون مُفسَّرة:
- أي صندوق “مشابه/شاهد أيضًا” يعرض سببًا واحدًا على الأقل (نفس الموضوع/نفس المؤلف/يستشهد/من نفس المؤسسة…).
5) Breadcrumbs تُستخدم فقط حيث يوجد هرم (Topics/Directories/Collections…)، ولا تُفرض على Feed.
6) البحث ليس “صفحة” فقط؛ بل مدخل تنقّل عالمي:
- يجب إتاحة زر/أيقونة بحث من كل تبويب، وفتح Discover مع الحفاظ على مصدر الرجوع.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) Tokens الإلزامية — تُعرَّف الآن وتُستخدم لاحقًا في كل الشاشات والمكوّنات
•	Brand
o	BrandPrimary #0D47A1
o	BrandDeep #06152B
o	BrandSoft #D6E4FF
o	WarmPaper #F6F3EE
o	CardWhite #FFFFFF
•	Signature (ممنوع كنص صغير)
o	CopperUI #B05920
o	MintUI #00B3A4
•	Text-Safe Accents
o	CopperText #A65520
o	MintText #00796B
•	Neutrals
o	Ink #0B1220
o	Slate #22324A
o	Skeleton #E0D7CC
•	Lines
o	DividerLine #E0DBD4 (فواصل/زخرفة)
o	ControlBorder #8A7C6E (حدود تفاعلية/حقول/أزرار/بطاقات تفاعلية)
•	Dark
o	DarkBG #060B14
o	DarkSurface #111623
o	DarkText #F2F5FA
o	DarkSubtext #B9C2D0
o	BlueNight #4A8CFF (للروابط/النشط كنص على الداكن فقط)
•	On-Color
o	OnBrandPrimary = CardWhite
o	OnBrandDeep = CardWhite
o	OnBrandSoft = Ink
o	OnWarmPaper = Ink
o	OnCardWhite = Ink
o	OnDarkBG = DarkText
o	OnDarkSurface = DarkText
(B) قواعد الهوية الأساسية التي تُثبت هنا لتخدم كل ما بعده
•	WarmPaper خلفية افتراضية لكل الشاشات في Light Mode (الشاشة = WarmPaper، البطاقات = CardWhite).
•	CopperKeyline توقيع يومي ثابت على كل شاشة رئيسية: خط 2px CopperUI بطول 48px بجوار عنوان الصفحة في Top Bar (RTL: يمين العنوان / LTR: يساره). ممنوع تكراره داخل البطاقات.
•	Links داخل المتن = لون + Underline دائم
Light: BrandPrimary + underline / Dark: BlueNight + underline.
•	Focus مرئي إلزامي لكل عنصر تفاعلي
Light: Outline 2px BrandPrimary + Offset 2px
Dark: Outline 2px BlueNight + Offset 2px
ممنوع Focus بالظل.
•	Semantic states = لون + شكل (أيقونة):
Success = MintText + ✔︎ / Warning = CopperText + ! / Error = #B3261E + ✕ / Info = BrandPrimary أو BlueNight + i
•	مؤشرات الحالة ذات معنى (Active/Online/Selected): حجم 6px
Light: MintText / Dark: MintUI
•	Typography (بدون أي تكثيف عربي): IBM Plex Sans Arabic (بديل Noto Sans Arabic UI)
Display 34/42 700 — H1 28/36 700 — H2 22/30 600 — H3 18/26 600 — BodyL 16/28 — BodyM 15/24 — BodyS 13/20 — Label 12/16 600
Line-height للعربية ≥ 1.5×، ممنوع Italic/Condensed للعربية.
•	Grid/Spacing: 8pt + القيم المسموحة: 4,8,12,16,24,32,40,48,64
•	Radii: Card 18 / Input 14 / Button 14 / Chip 999
•	Motion: EaseOutCubic + Press 120ms + Card 180ms + Panel 220ms + Reduced Motion = Fade فقط ≤120ms
•	Skeleton: Skeleton color + Shimmer 1.2s، وبعد 5 ثوانٍ: رسالة حالة + زر إعادة المحاولة.
________________________________________
 STATION 002
المحطة 2 — Design System عربي/RTL (مكوّنات + حالات + أنماط Cards/Lists/Tabs)
المحطة 2 — Design System عربي/RTL (مكوّنات + حالات + أنماط Cards/Lists/Tabs)
نفّذ الآن مكتبة Design System تشغيلية (Reusable UI Kit) مخصّصة لـ TaraqqiClub كمنصة عربية هجينة (Feed تفاعلي + هوية مهنية + صفحات أبحاث/مكتبة) بحيث تُستخدم نفس المكوّنات والأنماط في كل الشاشات لاحقًا.
1.	إعداد RTL كقاعدة تنفيذ للمكوّنات (بدون أي هوية بصرية)
اجعل كل المكوّنات تعمل RTL افتراضيًا: المحاذاة، الأيقونات داخل الأزرار، اتجاه السهم/الرجوع، ترتيب العناصر داخل الصفوف.
جهّز قاعدة دعم LTR داخل RTL فقط داخل حقول/أسطر محددة عند الحاجة (روابط/DOI/أرقام/سنوات/رموز) بدون كسر محاذاة البطاقة/القائمة.
وثّق ذلك على مستوى المكوّن: “RTL behavior” لكل مكوّن (كيف ينعكس، وما الذي لا ينعكس).
2.	مكتبة المكوّنات الأساسية (Component Library) — توثيق + Variants + حالات
أنشئ لكل مكوّن صفحة مواصفات قصيرة ثابتة: الهدف / أين يُستخدم / Variants / حالات / سلوك التفاعل.
المكوّنات المطلوب تجهيزها الآن (كحد أدنى):
Navigation primitives (بدون بناء IA):
Top App Bar (عنوان + رجوع + إجراءات يمين/يسار حسب RTL)
Bottom Navigation (4–5 عناصر كحد أقصى، حالة نشط/غير نشط/مع شارة)
Tabs & Filters:
Top Tabs (3 تبويبات)
Sub Tabs داخل الصفحة
Chips/Tags (Topic/Filter chips) + حالة Selected/Unselected/Disabled
Buttons:
Primary / Secondary / Quiet
Icon Button
CTA داخل Empty State
Inputs:
Search Bar (مع اقتراحات)
Text Field
Dropdown/Picker
Toggle/Switch
Cards (Generic قابلة لإعادة الاستخدام):
Card Container (Header + Body + Meta + Actions slots)
Badge داخل البطاقة
“Why this?” كإجراء ثانوي داخل البطاقة (زر نصي/قائمة ثلاث نقاط)
Lists & Rows:
List Row (عنوان/وصف/Meta/إجراء)
Divider/Section Header داخل القوائم
Overlays & Feedback:
Modal / Bottom Sheet
Toast/Snackbar
Tooltip/Helper (للشرح القصير)
Badges/Labels (بدون تعريف بصري):
Verified / Institution Verified
Availability badge (Public / Subscribers / Institution)
AI Generated label
مهم: لا تبنِ أي شاشة كاملة هنا، فقط جهّز المكوّنات كـLibrary قابلة للاستخدام.
3.	حالات النظام الموحدة (Loading / Empty / Error) — قوالب جاهزة للاستخدام
جهّز 3 قوالب لكل نوع سياق (بدون ربطها بشاشات بعينها، فقط Templates):
Feed/Stream Template:
Loading: Skeleton Cards (3 أنواع أحجام: قصيرة/متوسطة/طويلة)
Empty: رسالة قصيرة + CTA واحد (مثل “تابع مواضيع” أو “استكشف”)
Error: رسالة + زر “إعادة المحاولة”
Directory/List Template (قوائم بحث/دلائل):
Loading: Skeleton Rows
Empty: “لا نتائج” + CTA لتعديل الفلاتر/مسحها
Error: Retry
Details/Page Template (صفحة تفاصيل/محتوى):
Loading: Skeleton Header + Skeleton Sections
Empty: قسم فارغ داخل الصفحة (مثلاً لا تعليقات/لا Highlights) مع CTA واحد
Error: تعذر الجلب + Retry
وثّق نصوصًا عربية قصيرة لهذه الحالات (سطر واحد + CTA)، وطبّق نفس الصياغة على كل القوالب (بدون توسع في “نبرة العلامة”).
4.	أنماط جاهزة للتركيب (Patterns) — Cards / Lists / Tabs
جهّز “Patterns” كقوالب تركيب من المكوّنات السابقة، لأن الخطة تعتمد بطاقات/قوائم/تبويبات عبر المنصة:
Card Pattern (Generic):
Header (Title + Meta + Badges) → Body (ملخص/سطرين) → Actions (Open/Save/… كأزرار) → Secondary actions (Why this / More)
List Pattern (Result Row):
Leading (اختياري) → Title/Subtitle → Meta يمين → Trailing action (Follow/Save/…)
Tabs + Filters Pattern:
Tabs أعلى + صف Chips للفلاتر + محتوى (Cards أو List)
كل Pattern يجب أن يعرّف: الحد الأدنى للمحتوى، ترتيب العناصر، وماذا يحدث عند ضغط العناصر الأساسية (فتح/حفظ/متابعة/مزيد).
5.	مخرجات هذه المحطة (Deliverables)
صفحة/ملف “Design System” يحتوي:
Component Library بالمكوّنات المذكورة + Variants + حالات
Templates لحالات Loading/Empty/Error (3 سياقات)
Patterns (Card/List/Tabs+Filters) جاهزة للاستخدام لاحقًا
RTL behavior موثّق لكل مكوّن/Pattern
بعد تسليم هذه المخرجات، ابدأ المحطة التالية مباشرة بتطبيق هذه المكتبة نفسها على هيكل التنقّل العالمي (بدون إعادة رسم المكوّنات من جديد).
إضافات UX/IA ملزمة داخل App Shell (لتفادي الضياع وتقوية التنقّل):
1) قرار Bottom Nav يجب أن يكون واحدًا وثابتًا عبر المستند (لا ازدواج): 
- إذا كانت Notifications وجهة يومية أساسية: اجعلها عنصرًا رئيسيًا.
- إن لم تكن: اجعلها داخل Activity/Inbox داخل Profile أو ضمن Top Bar.
2) أضف “بحث عالمي” داخل Top App Bar في كل تبويب:
- الضغط عليه يفتح Discover/Search.
- عند الإغلاق/الرجوع: يعود المستخدم إلى نفس التبويب السابق مع الحفاظ على حالته (نتائج/موضع التمرير).
3) طبّق نمط “Back to results”:
- عند فتح Paper/Topic/Profile من Discover أو Directory: يجب أن يظهر (Back to results) كخيار واضح أو كجزء من شريط السياق، ويحفظ حالة النتائج.
4) ثبّت نمط Context Strip عالميًا في صفحات التفاصيل:
- يظهر أعلى صفحات التفاصيل ويجيب: “جئت من أين؟” + “افتح المصدر/ارجع للمصدر”.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
طبّق على كل مكوّن داخل Component Library القواعد التالية حرفيًا:
1.	Top App Bar
•	Height 56
•	Background: WarmPaper (Light) / DarkSurface (Dark)
•	Title: H3 600
•	ضع CopperKeyline 2px بطول 48px بجوار العنوان دائمًا.
•	Actions icons: 24px، تباعد 12.
2.	Bottom Navigation
•	Height 64
•	Icon 24 + Label 12/16 600 (Label إلزامي دائمًا)
•	Active = Filled + BrandPrimary (Light) / BlueNight (Dark)
•	Indicator (6px): Light MintText / Dark MintUI
3.	Buttons
•	Primary: Background BrandPrimary + OnBrandPrimary
•	Secondary: Border 1px ControlBorder + Text Ink (Light) / DarkText (Dark)
•	Quiet: نص فقط (Ink/Slate) + Underline فقط إذا كان Link داخل متن
•	Disabled: Background Skeleton + Text Slate
•	Touch target: 44×44 كحد أدنى (وأزرار الأيقونات 48×48)
4.	Inputs
•	Border default: 1px ControlBorder
•	Focus: طبق Focus rule (Outline 2px + Offset 2px)
•	Error: Border #B3261E + ✕ + Helper text 13/20
5.	Cards
•	CardRadius 18
•	Background: CardWhite فوق WarmPaper (Light) / DarkSurface فوق DarkBG (Dark)
•	Divider داخل البطاقة: DividerLine 1px
•	ممنوع Notch على بطاقات عامة/Feed/Comments.
•	Notch مخصص فقط لبطاقات Hero التي ستُعرّف لاحقًا (حسب محطة 86 من الهوية).
6.	Chips/Tags
•	Height 32 (بصري) + Touch 44×44
•	Default: Border 1px ControlBorder
•	Selected: Background BrandSoft + Text BrandPrimary
•	Highlight: Background CopperUI 12% + Text CopperText
7.	Links داخل المتن
•	BrandPrimary/BlueNight + Underline دائم (بدون استثناء).
8.	Templates (Loading/Empty/Error)
•	Skeleton: Color Skeleton + Shimmer 1.2s
•	إذا التحميل > 5s: استبدل بـ “رسالة حالة واضحة + إعادة المحاولة”
•	Empty/CTA: Button Primary أو Secondary حسب السياق، لا تستخدم CopperUI كنص صغير.
________________________________________
 STATION 003
المحطة 3 — صمّم هيكل تنقّل عالمي يربط الأسطح الثلاثة: اكتشاف → قراءة → مساهمة
المحطة 3 — صمّم هيكل تنقّل عالمي يربط الأسطح الثلاثة: اكتشاف → قراءة → مساهمة
صمّم الآن App Shell (هيكل تنقّل عالمي) باستخدام مكوّنات Design System RTL الجاهزة من المحطة السابقة (Top App Bar / Bottom Navigation / Tabs / Lists / Sheets) بحيث يربط “الأسطح الثلاثة” المذكورة في الخطة:
Surface 1: Discover/Topics/Search → Surface 2: Paper Page/PDF Reader/Notes → Surface 3: Publish/Highlight/Post/Editorial.
لا تصمّم تفاصيل شاشات المحتوى نفسها هنا؛ فقط هيكل التنقّل ومسارات الدخول والخروج.
1.	App Shell ثابت بعد نقطة البدء
أنشئ إطار تطبيق موحّد يتكرر في كل ما بعد الدخول:
Top App Bar: عنوان السياق + رجوع عند الصفحات الداخلية + مساحة لإجراءات سياقية (مثل ⋯).
Bottom Navigation ثابت كالتنقّل الرئيسي بين الأقسام.
اجعل Bottom Navigation يغطّي أقسام الخطة الأساسية كـ “نقاط وصول يومية” (بدون إنشاء صفحاتها هنا):
Home (لـHome Feed)
Discover (لـDiscover/Search)
Library (لـLibrary: Saved/Collections/Notes لاحقًا)
Notifications (لـNotifications Center)
Profile (مدخل للهوية/الإعدادات واللوحات الخاصة لاحقًا)
2.	تعريف السطحين الأول والثاني كمسارات “ضغط واحد → قراءة”
داخل Home و Discover صمّم قاعدة تنقّل ثابتة للمحتوى:
أي عنصر محتوى/نتيجة (Paper/Topic/Researcher/Institution/Article) يفتح إلى صفحة تفاصيله داخل نفس الـShell.
Paper دائمًا يقود إلى Paper Page كمدخل Surface القراءة.
ثبّت مسار القراءة (Surface 2) كطبقة “تفاصيل” فوق الاكتشاف:
Paper Page (تفاصيل) → PDF Reader (تفاصيل أعمق)
اجعل الرجوع دائمًا يعود إلى “مصدر الدخول” (Home أو Discover أو Topic Hub أو Profile…) وليس إلى Home بشكل أعمى.
3.	نقاط دخول واضحة إلى “المساهمة” بدون بناء تدفقات الإنشاء
صمّم نقطة دخول واحدة واضحة للمساهمة (Surface 3) تعمل من أي مكان داخل الـShell، بدون تفصيل شاشة الإنشاء نفسها هنا:
ضع زر مساهمة عام (Create entry) ثابت الوصول (في موضع واحد متّسق داخل الـShell) ينقل إلى Surface المساهمة.
هذا الزر يفتح “لوحة خيارات”/مسار مساهمة عام (Placeholder route فقط) ثم يسلّم للمحطات القادمة التي ستصمم: Paper Create Wizard / Post Composer / Highlight Creation / Article Editor / Editorial Queue… إلخ.
4.	ربط Topics/Researchers/Institutions داخل Surface الاكتشاف
ضمن App Shell (بدون تصميم صفحاتها التفصيلية):
اجعل Topics Directory / Researchers Directory / Institutions Hub نقاط اكتشاف يمكن الوصول لها من Discover/Search (كروابط داخلية/تبويبات نتائج/اختصارات سياقية).
أي Topic أو Researcher أو Institution يفتح إلى صفحة Hub/Profile الخاصة به داخل الـShell، ومنها يكون الدخول إلى Paper Page متاحًا (Surface القراءة).
5.	قواعد تنقّل داخلية تمنع “الضياع” وتضمن ترابط الأسطح
Stack Navigation واضح:
Bottom Nav يبدّل “الأقسام الأساسية” (Home/Discover/Library/Notifications/Profile).
أي تفاصيل (Paper/Topic/Researcher/Institution/Post/Highlight/Article) تُفتح كـRoute داخل القسم الحالي مع زر رجوع.
حفظ السياق:
عندما يفتح المستخدم Paper من نتائج Discover، ثم يرجع، يعود لنفس شاشة النتائج مع نفس حالة الفلاتر/التمرير (كمبدأ تنقّل يجب تثبيته في البروتوتايب).
إعادة التوجيه بعد المساهمة (قاعدة تنقّل فقط):
أي مسار مساهمة ينتهي بالعودة إلى صفحة الكيان الناتج (مثل Paper Page أو Post Details) داخل الـShell، مع رجوع يعيد لمصدر البدء.
6.	مخرجات هذه المحطة (تسليمات مطلوبة)
Navigation Map (خريطة مسارات) توضح:
أقسام Bottom Nav الخمسة
Routes الداخلية للتفاصيل (Paper/Topic/Researcher/Institution/Article/Post/Highlight) كمنافذ من Home/Discover/Profile
مسار Surface القراءة: Paper Page → PDF Reader
مدخل Surface المساهمة كـPlaceholder يسلّم للمحطات القادمة
Prototype تفاعلي للـApp Shell:
5 شاشات “حاويات” (Home/Discover/Library/Notifications/Profile) بمحتوى Placeholder
نموذج صفحة تفاصيل عامة داخل الـShell (Detail Template) لإثبات: فتح → رجوع → حفظ سياق
بعد تثبيت هذا الهيكل، المحطة التالية
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	App Shell Light: Background WarmPaper دائمًا.
•	Top Bar: طبق مواصفات المحطة 2 + CopperKeyline دائم.
•	Bottom Nav: طبق مواصفات المحطة 2 (Filled/Outline + Indicator 6px).
•	Create entry (زر المساهمة العام):
o	شكل: ButtonRadius 14
o	لون: BrandPrimary + OnBrandPrimary
o	Touch: لا يقل عن 48×48
o	ممنوع Notch عليه.
o	فتح اللوحة (Bottom Sheet): Panel 220ms، Reduced Motion = Fade فقط.
•	Placeholder routes: تستخدم Templates Loading/Empty/Error طبقًا للهوية (Skeleton ثم حالة بعد 5s).
•	Link/Focus: أي رابط داخل أي Route (حتى Placeholder) = underline دائم + Focus rule.
________________________________________
 STATION 004
المحطة 4 — Splash + اختيار اللغة/المنطقة كنقطة بدء قبل أي شيء
المحطة 4 — Splash + اختيار اللغة/المنطقة كنقطة بدء قبل أي شيء
صمّم شاشة واحدة بعنوان: “Splash + لغة/منطقة” تكون أول ما يراه المستخدم في TaraqqiClub، وتجمع بين: التحميل البسيط + اختيار اللغة + اختيار المنطقة/البلد (اختياري) + المنطقة الزمنية، ثم زر بدء واحد.
1.	الهدف (كما هو)
ضبط لغة/منطقة/اتجاه الواجهة من البداية.
2.	مكوّنات الشاشة (استخدم مكوّنات Design System التي تم تجهيزها سابقًا دون إعادة تعريفها)
شعار بسيط + Loader.
اختيار اللغة: العربية (افتراضي) / الإنجليزية (V1).
اختيار المنطقة/البلد (اختياري) + اختيار المنطقة الزمنية.
زر CTA واحد فقط: “ابدأ”.
3.	البيانات التي يجب التقاطها/حفظها من هذه الشاشة
locale
timezone
content language preference
4.	الحالات (States) — نفّذها حرفيًا
Loading: شريط تقدم بسيط.
Error: نص واحد واضح: “تعذر التحميل، أعد المحاولة”.
5.	قواعد UX (كما هي)
افتراضي عربي/RTL.
دعم مزج RTL/LTR لاحقًا (خصوصًا داخل PDF/المراجع) — لا تصمّم هذا المزج هنا، فقط لا تكسر التخطيط بسببه.
6.	الإنهاء والانتقال
عند الضغط على “ابدأ”: احفظ القيم الثلاثة أعلاه
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	الخلفية (Light): WarmPaper
•	الخلفية (Dark): DarkBG
•	Topographic lines: مسموح هنا فقط (Splash) بعتامة 3–4% (بدون نص فوقها إلا داخل صندوق/سطح).
•	Loader/Progress:
o	اللون: BrandPrimary (Light) / BlueNight (Dark)
o	الزمن/الحركة: 200–300ms transitions، Reduce Motion = تبسيط (Fade).
•	CTA “ابدأ”:
o	Primary: BrandPrimary + OnBrandPrimary
o	Disabled (إن وُجد): Skeleton + Slate
o	Focus: طبق Focus rule
•	أي روابط مساعدة (إن وُجدت لاحقًا): underline دائم.
________________________________________
 STATION 005
المحطة الخامسة — Onboarding (3 خطوات فقط): الدور → الاهتمامات → متابعة (Starter Packs) → دخول الواجهة الرئيسية
المحطة الخامسة — Onboarding (3 خطوات فقط): الدور → الاهتمامات → متابعة (Starter Packs) → دخول الواجهة الرئيسية
نقطة البداية وربطها بما قبلها
ابدأ هذا التدفق مباشرة بعد شاشة Splash التي تضبط اللغة/المنطقة/الاتجاه (العربية/RTL افتراضيًا) بحيث تكون إعدادات locale/timezone محسومة قبل البدء هنا.
اجعل هذا الـOnboarding خفيفًا ومباشرًا ولا يطلب توثيق/سيرة/بيانات إضافية خارج (الدور، الاهتمامات، المتابعات).
إطار عام للتجربة (ثابت عبر الخطوات الثلاث)
اعرض Stepper واضح (1/3، 2/3، 3/3) أعلى الشاشة.
وفر دائمًا:
زر "التالي" (Primary)
زر "تخطي" (Secondary) ظاهر وواضح في كل خطوة
حالات عامة مشتركة (عند الحاجة):
Loading: Skeleton cards
Error: فشل تحميل الاقتراحات + زر إعادة المحاولة
Empty: رسالة موجهة بحسب الخطوة (تفصيلها بالأسفل)
الخطوة 1/3 — اختيار الدور
محتوى الشاشة: خيارات أدوار على شكل بطاقات/أزرار اختيار:
قارئ / طالب / باحث / مؤسسة
التفاعل:
اختيار واحد فقط (Single select).
عند الاختيار: فعّل زر "التالي".
إن ضغط "تخطي": أكمل التدفق بدون تعيين دور (لكن لا تُظهر أي طلبات إضافية هنا).
البيانات الناتجة:
خزّن role (أو role = null عند التخطي).
الخطوة 2/3 — الاهتمامات (Topics)
هدف الشاشة: اختيار 5–10 اهتمامات.
واجهة الاختيار:
شبكة/قائمة Topics على شكل Chips/بطاقات صغيرة قابلة للتحديد.
شريط عدّاد بسيط: “اختر 5 على الأقل” حتى يصل المستخدم للحد الأدنى، ثم اسمح له بالاستمرار حتى 10.
قسم “اقتراحات” داخل نفس الشاشة (بدون تعقيد).
الحالات:
Empty (لا توجد اقتراحات): اعرض رسالة واضحة + اسمح للمستخدم بالبحث/الاختيار من قائمة عامة، أو اطلب منه اختيار مواضيع أولاً.
Loading/Error كما في الإطار العام.
البيانات الناتجة:
خزّن topics[].
الخطوة 3/3 — المتابعة عبر Starter Packs
هدف الشاشة: اجعل المستخدم يتابع 5 عناصر من:
باحثين / مواضيع / مؤسسات
مع إتاحة Starter Packs (حزم جاهزة مثل: “اقتصاد عربي”، “ذكاء اصطناعي عربي”…).
واجهة الشاشة (مقسمة بوضوح):
أعلى الشاشة: عنوان “تابع 5 عناصر لتخصيص تجربتك”
قسم Starter Packs: بطاقات حزم جاهزة (كل حزمة تعرض محتواها وعدد العناصر + زر “متابعة الحزمة”).
قسم “اقتراحات فردية” أسفلها: بطاقات عناصر مفردة مع زر "اتبع" لكل عنصر.
عدّاد تقدّم: “2/5 تمّت المتابعة”.
التفاعل:
عند الضغط على “متابعة الحزمة”: اعتبره يضيف مجموعة متابعات دفعة واحدة (مع إمكانية إلغاء المتابعة لكل عنصر إن لزم).
لا تسمح بالانتهاء قبل الوصول إلى 5 إلا إذا اختار المستخدم "تخطي" (يبقى خيار التخطي موجودًا دائمًا).
البيانات الناتجة:
خزّن follows[] (Targets من نوع researcher/topic/institution).
إنهاء الـOnboarding والدفع للواجهة الرئيسية (وربطها بما بعدها)
عند الإكمال (بعد الخطوة 3): انتقل مباشرة إلى الواجهة الرئيسية/الخلاصة “For You” كأول محطة استخدام فعلية.
شرط أساسي في التجربة: لا تُجبر المستخدم على التوثيق أو إدخال سيرة؛ الهدف أن يصل بسرعة لتجربة “العثور على ورقة واحدة وفهمها بسرعة”.
ملاحظة الربط بالمحطة التالية (Login/Signup): اجعل الدخول/إنشاء الحساب مرحلة لاحقة تُستدعى عند الحاجة (مثل النشر/التفاعل المتقدم)، ولا تُقحمها داخل هذا الـOnboarding. (محطة Login/Signup مفصّلة منفصلة في الخطة).
إضافة ملزمة بعد خطوة 3/3 (مسارات هدف – First Win Paths)
بعد إكمال الخطوة 3/3 (أو عند ضغط “تخطي” في أي خطوة) لا تنقل المستخدم مباشرة إلى Home فقط؛ اعرض شاشة/Bottom Sheet قصيرة بعنوان:
“ماذا تريد أن تفعل الآن؟” (3–5 أزرار فقط)
الأهداف المسموحة (اختر 3–5):
1) “اكتشف أبحاثًا في اهتماماتي” → يفتح Discover مع اقتراحات جاهزة (Topics + Foundational papers).
2) “ابحث عن ورقة” → يفتح Discover في وضع البحث.
3) “ابدأ جلسة قراءة/بحث” → يفتح Research Session مع Queue مبدئي.
4) “احفظ أول عنصر في مكتبتي” → يفتح ورقة/موضوع مقترح ثم Save.
5) “انشر فكرة/ملخص” → يفتح Post Composer.
قواعد:
- زر “تخطي” موجود (لا يجبر المستخدم).
- بعد اختيار هدف واحد وتنفيذه، يعود المستخدم إلى تجربة يومية (Home/For You) مع استمرار ظهور “استكمل ما بدأت” في أعلى الصفحة.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	خلفية كل خطوات Onboarding (Light): WarmPaper دائمًا.
•	Top Bar (إن وُجد): CopperKeyline 2px/48px بجوار العنوان.
•	Stepper
o	نص: Label 12/16 600
o	“الخطوة النشطة”: BrandPrimary (Light) / BlueNight (Dark) + لا تعتمد على اللون فقط (أضف شكل Filled/Outline).
•	بطاقات الأدوار / Starter Packs (Cards)
o	CardRadius 18، Background CardWhite
o	Selected: Border 2px BrandPrimary + Indicator 6px MintText (Light)
o	ممنوع Notch هنا (ليس HeroSlot).
•	Chips للمواضيع
o	Default: Border 1px ControlBorder
o	Selected: Background BrandSoft + Text BrandPrimary
o	Touch 44×44
•	Counter/Progress (“اختر 5 على الأقل”، “2/5”)
o	النص: BodyS أو Label
o	لا تستخدم MintUI كنص؛ استخدم MintText إذا كان مؤشرًا ذا معنى.
•	الأزرار
o	“التالي” = Primary BrandPrimary
o	“تخطي” = Secondary Border ControlBorder
o	Disabled = Skeleton + Slate
•	الحالات
o	Loading: Skeleton cards + Shimmer 1.2s
o	إذا تجاوز 5 ثوانٍ: رسالة حالة + زر إعادة المحاولة
•	روابط داخل النص (إن وُجدت): underline دائم + Focus rule.

 STATION 006
المحطة السادسة — Login/Signup (OTP + مزوّدات) + خيار التصفح كضيف (إن كان مفعّلًا)
صمّم مجموعة شاشات المصادقة فقط لتطبيق TaraqqiClub، باستخدام مكوّنات الـDesign System العربي/RTL الجاهز، وبدون تصميم أي أجزاء أخرى من التطبيق.
شاشة Login/Signup الرئيسية (اختيار الطريقة)
اعرض خيارات الدخول كما يلي:
Email/Phone + OTP (مفضّل)
تسجيل بواسطة Google/Apple (حسب الأسواق)
اختيار “حساب قارئ” افتراضي (لا تطلب اختيار دور هنا)
اعرض CTAs نصيًا كما في الخطة: “تسجيل” / “إنشاء حساب” / “تصفح كضيف” (والأخير يظهر فقط إذا كان خيار الضيف مفعّلًا في قرار الإطلاق).
البيانات الناتجة من نجاح الدخول/إنشاء الحساب: account_id, role.
تدفق OTP (شاشتان واضحتان)
شاشة إدخال البريد/الهاتف: حقل واحد + زر إرسال الرمز + تبديل (Email / Phone) داخل نفس الشاشة.
شاشة إدخال OTP: حقول الرمز + زر تأكيد + خيار “إعادة إرسال” + خيار “تغيير البريد/الهاتف”.
تدفق مزوّدات الدخول (Google/Apple)
نفس شاشة Login/Signup تعرض زري Google وApple.
عند الفشل/الإلغاء: رجّع المستخدم لنفس شاشة Login/Signup مع رسالة خطأ مناسبة (بدون مسارات إضافية).
تقليل الحقول عند إنشاء الحساب (قاعدة UX)
عند “إنشاء حساب” لأول مرة: اطلب الاسم فقط في البداية.
لا تطلب أي تفاصيل “باحث” هنا؛ اعتبرها لاحقًا عند أول نشر/طلب توثيق (ولا تصمّم تلك الشاشات في هذه المحطة).
الحالات المطلوبة داخل المصادقة فقط
طبّق حالات: أخطاء إدخال / شبكة / OTP على شاشات OTP والمزوّدات (رسائل قصيرة + زر إعادة المحاولة حيث يلزم).
لا تضف حالات أو ميزات خارج نطاق المصادقة.
مخرج المحطة: ملف/صفحات تصميم تشمل: (Login/Signup الرئيسية) + (OTP إدخال) + (OTP تحقق) + (اسم فقط لأول مرة) مع خيار “تصفح كضيف” إن كان مفعّلًا، وكلها RTL وقابلة لإعادة الاستخدام بدون تضارب مع المحطات التالية.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) استدعاء Tokens الإلزامية لهذه المحطة (بدون إضافة أي لون جديد)
•	Background Light: WarmPaper #F6F3EE / Card: CardWhite #FFFFFF
•	Primary: BrandPrimary #0D47A1 + OnBrandPrimary = CardWhite
•	Text: Ink #0B1220 / Secondary text: Slate #22324A
•	Borders interactive: ControlBorder #8A7C6E
•	Skeleton: #E0D7CC
•	Dark: DarkBG #060B14 / DarkSurface #111623 / DarkText #F2F5FA / BlueNight #4A8CFF
(B) قواعد تنفيذ واجهات المصادقة (Auth UI Rules)
1.	الهيكل العام
•	كل الشاشات: Screen = WarmPaper (Light) / DarkBG (Dark).
•	كل الصناديق/البطاقات داخل Auth: CardWhite (Light) / DarkSurface (Dark) + CardRadius 18.
2.	الأزرار (CTA)
•	“تسجيل” / “إنشاء حساب” / “تأكيد”: Primary = BrandPrimary + OnBrandPrimary، ButtonRadius 14.
•	“تصفح كضيف” (إن وُجد): Quiet كنص فقط (Ink/Slate) وإذا كان رابطًا داخل المتن فـ Underline دائم.
•	Disabled (مثل: قبل إدخال بريد/هاتف): Background Skeleton + Text Slate.
•	Touch target: لا يقل عن 44×44، وأي Icon button داخل Auth = 48×48.
3.	الحقول وOTP
•	TextField/OTP boxes: Border 1px ControlBorder (Light) / (Dark: DarkText opacity 14%).
•	Focus إلزامي لكل حقل وزر:
o	Light: Outline 2px BrandPrimary + Offset 2px
o	Dark: Outline 2px BlueNight + Offset 2px
o	ممنوع Focus بالظل.
•	Error: Border #B3261E + أيقونة ✕ + Helper text 13/20 (BodyS) مع تباين واضح.
4.	الروابط داخل النص
•	“إعادة إرسال” / “تغيير البريد/الهاتف” إن ظهرت داخل سطر:
o	Light: BrandPrimary + Underline دائم
o	Dark: BlueNight + Underline دائم
o	ممنوع الاعتماد على اللون وحده.
5.	الحالات (Loading/Network/OTP)
•	Loading: Skeleton #E0D7CC + Shimmer 1.2s.
•	إذا استمر التحميل > 5s: استبدل Skeleton برسالة حالة واضحة + زر “إعادة المحاولة”.
6.	منع الالتباس بالهوية الشكلية
•	ممنوع Notch نهائيًا في المصادقة (لا على الأزرار ولا الحقول ولا بطاقات Auth).
________________________________________
 STATION 007
المحطة 7 — صمّم Home Feed بثلاث تبويبات Following / For You / Trending
صمّم شاشة Home Feed بواجهة عربية RTL باستخدام مكوّنات الـDesign System المُجهّزة: Top Tabs ثابتة (Following | For You | Trending) وتحتها مباشرة صف فلاتر (Chips): Papers, Highlights, Micro-posts, Articles, Institutions، بحيث يغيّر الفلتر نوع البطاقات المعروضة داخل التبويب الحالي فقط.
إضافة UX (تقوية “أول لحظة” داخل Home دون تغيير طبيعة الـFeed)
في أول جلسة للمستخدم الجديد (أول 24–72 ساعة أو حتى يحقق “أول نجاح”):
- اعرض أعلى الـFeed (فوق التبويبات أو تحتها مباشرة) بطاقة واحدة صغيرة بعنوان “ابدأ هنا” تحتوي مسارًا واحدًا فقط:
  - زر Primary: “افتح أفضل ورقة لهذا الأسبوع” أو “ابدأ جلسة قراءة” أو “تابع موضوعًا مقترحًا”
- بعد تنفيذ المسار، تتحول البطاقة إلى “استكمل من حيث توقفت” (Continue) بدل تكرار اقتراحات كثيرة.
الهدف: جعل Home يقود خطوة واحدة واضحة بدل الاعتماد على التمرير فقط.
صمّم أنواع بطاقات الـFeed (Card Types) وفق الخطة فقط، مع نفس الهيكل العام للبطاقة (عنوان/ميتا/شارات/إجراءات) وتفاصيل البيانات المعروضة:
Research Card: عنوان الورقة + المؤلفون + السنة + المؤسسة + Topics + شارات (Verified / Institution Verified) + مؤشرات اكتمال (Card Generated / Has citations / Has DOI) + “Key takeaways (3)”.
Highlight Card: نص مقتطف + مرجع الصفحة/الفقرة + ربط واضح بالورقة + Topics.
Micro-post: نص قصير مقيد ويظهر ارتباطه بورقة/موضوع أو موسوم كـ“نقاش”؛ وإذا كان AI-assisted يُوسم بوضوح.
Article Card: عنوان + مقتطف + الكاتب/المؤسسة + Topics.
Institution Update Card: اسم المؤسسة + نوع التحديث (Issue/Report جديد) + Topics.
داخل كل بطاقة أضف أزرار انتقال مباشرة نحو القراءة/الحفظ كما وردت بالخطة (ولا تضف أزرار جديدة):
Open Paper، Read in PDF، Ask Paper (AI)، Save، Add to Collection، Follow Author/Topic، Comment، Share Highlight.
واجعل النقر على “Open Paper/Read in PDF” انتقالًا واضحًا إلى تجربة القراءة/صفحة الورقة، والنقر على “Comment” يفتح نقاشًا مرتبطًا بالمحتوى نفسه (بدون تصميم صفحات التفاصيل هنا).
أضف زر/خيار “Why this?” داخل كل بطاقة (ظاهر كزر شفاف/ضمن قائمة) يفتح لوحة قصيرة تشرح سبب الظهور بشكل مبسط، وتحتها خياران فقط للتحكم: “Less of this Topic” و “More of this Topic” (كتحكم داخل التجربة).
صمّم سلوك كل تبويب وفق قواعد الخطة:
Following: ترتيب زمني لمحتوى المتابَعين مع حد أدنى للجودة لمنع السبام.
For You: يغلب عليه Research Cards أكثر من micro-posts لأنه تبويب الاكتشاف والاستهلاك اليومي.
Trending (في MVP): ترند مقنن يركّز على مواضيع/أوراق مع فلترة جودة/توثيق لتفادي “جدل ترندي” يضر السمعة.
نفّذ حالات الشاشة (Empty/Loading/Error) كما في الخطة داخل الـFeed:
Empty Following: رسالة قصيرة + CTA يقود إلى متابعة 5 عناصر/Starter Packs.
Loading: Skeleton cards (3 أشكال على الأقل تناسب Research/Highlight/Micro).
Error: “تعذر تحديث الخلاصة” + زر إعادة المحاولة.
Low content: اعرض “Editor’s Picks” + “Top Papers this week” داخل نفس الـFeed لتجنب “مدينة أشباح”.
أضف Deep Research Mode Toggle أعلى الـFeed: عند تشغيله تقل عناصر التواصل داخل البطاقات ويبرز مسار القراءة/الحفظ (Read PDF / Ask / Save / Add to Collection) مع بقاء المستخدم داخل الـFeed وعدم تحويله لشاشة أخرى.
اجعل كل بطاقة تحتوي مسارات نقر واضحة (Tap targets) تُستخدم مباشرة في المحطة التالية: فتح تفاصيل المنشور/الـHighlight عند الضغط على البطاقة نفسها، مع بقاء أزرار “Open Paper/Read PDF/Save” كإجراءات سريعة لا تغيّر السياق.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) سطح الشاشة والهيكل اليومي للتميّز
•	Light Feed: Screen = WarmPaper دائمًا، Cards = CardWhite.
•	Dark Feed: Screen = DarkBG، Cards = DarkSurface.
•	Top Bar: Height 56 + CopperKeyline 2px بطول 48px بجوار عنوان الصفحة دائمًا (RTL: يمين العنوان).
•	ممنوع تكرار CopperKeyline داخل البطاقات.
(B) Top Tabs + Chips (لا لون فقط)
•	Tabs: النص = Ink/DarkText، والحالة النشطة:
o	لا تعتمد على اللون وحده: (وزن/شكل) + لون (BrandPrimary/BlueNight) + Indicator واضح.
•	Chips (Filters): Height 32 بصري + Touch 44×44
o	Default: Border 1px ControlBorder
o	Selected: Background BrandSoft + Text BrandPrimary
o	Highlight: Background CopperUI 12% + Text CopperText
•	أي رابط نصي داخل التبويب/المتن = Underline دائم.
(C) Feed Cards (قواعد صارمة)
•	CardRadius 18، Padding من قيم الشبكة فقط (12/16/24).
•	Border للبطاقات داخل القوائم (لضمان Non-text contrast):
o	Light: 1px ControlBorder (أو Line مع عتامة كافية لكن لا تقل بصريًا عن وضوح ControlBorder)
o	Dark: 1px DarkText opacity 14%
•	Divider داخل البطاقة: DividerLine 1px.
•	ممنوع Notch وAscend Stripe داخل بطاقات الـFeed العادية (Research/Highlight/Micro/Article/Institution Update).
(D) Actions داخل البطاقة
•	Touch target لكل Action = 48×48.
•	Icon style: Stroke 2px Rounded ends، Active = Filled + (BrandPrimary/BlueNight).
•	Counts = Label 12/16 600 أو BodyS 13/20 حسب المساحة، لون Slate/DarkSubtext.
(E) “Why this?” Bottom Sheet
•	Sheet Background: CardWhite (Light) / DarkSurface (Dark) + Radius 18.
•	Links داخل نص الشرح = Underline دائم.
•	أزرار التحكم “Less/More”: Secondary (Border 1px ControlBorder) أو Quiet حسب الكثافة، بدون CopperUI كنص صغير.
(F) حالات Feed
•	Skeleton: Skeleton color + Shimmer 1.2s، وبعد 5s: رسالة حالة واضحة + زر “إعادة المحاولة”.
•	Empty Following CTA: Primary/Secondary فقط (لا CopperUI كنص).
(G) Deep Research Mode Toggle
•	Toggle: Border 1px ControlBorder، Focus rule إلزامي.
•	حالة التفعيل: لا تعتمد على اللون وحده (أضف تغيير شكل واضح: Filled/Outlined + Label).
________________________________________
 STATION 008
المحطة 8: صمّم صفحات تفاصيل المحتوى المرتبطة بالـFeed (Post Details + Highlight Details) بحيث تعيد دائمًا المستخدم إلى Paper Page أو Topic/Author
1.	نقطة البداية (الربط مع ما تم إنجازه سابقًا)
اعتبر أن Home Feed وبطاقاته وCTAs جاهزة كما صُمّمت في المحطة 7، وأن الضغط على Comment كان “يفتح نقاشًا مرتبطًا بالمحتوى نفسه (بدون تصميم صفحات التفاصيل هناك)” .
في هذه المحطة: صمّم صفحات التفاصيل التي تُفتح عند:
الضغط على جسم البطاقة/العنوان/المحتوى (للانتقال من الـFeed إلى تفاصيله)،
أو عند فتح رابط مشاركة المحتوى.
لا تعِد تصميم بطاقات الـFeed أو CTAs نفسها؛ استخدم نفس الأزرار المذكورة في الخطة فقط .
2.	مبدأ الصفحة (قاعدة إلزامية في هذه المحطة)
أي صفحة تفاصيل (Post/Highlight) يجب أن تُظهر “مصدر الارتباط” أعلى الصفحة بشكل صريح:
“مرتبط بـ Paper” (الأصل) + روابط سريعة للعودة إلى Paper Page أو إلى Topic/Author (حسب ما هو مرفق بالمحتوى).
الهدف العملي: التفاصيل ليست “نهاية الطريق”، بل محطة قصيرة تعيد المستخدم دائمًا إلى Paper Page / Topic / Author.
إضافة تنقّل سياقي داخل صفحات التفاصيل (Post Details + Highlight Details)
1) في أسفل تفاصيل المنشور/الهايلايت أضف وحدتين سياقيتين على الأقل:
- “مرتبط بهذا الموضوع” (Topics chips + زر Follow)
- “مرتبط بهذه الورقة/المؤلف” (Related papers/authors)
2) كل عنصر في “مرتبط/شاهد أيضًا” يجب أن يملك سببًا واحدًا (Why):
- مثال: “نفس الوسم”، “من نفس الورقة”، “يستشهد بهذا”، “من نفس المؤسسة”.
3) تأكيد قاعدة الرجوع:
- عند الدخول من Feed يعود الرجوع إلى نفس موضع البطاقة في الـFeed.
3.	Post Details (صفحة تفاصيل منشور)
الخطة تنص أن تفاصيل المنشور تشمل: Thread + Quote/Repost + report ، وأن تفاعل الـFeed يحافظ على CTAs المحددة مثل Open Paper / Read in PDF / Ask Paper / Save… .
3.1 هيكل الصفحة (من الأعلى للأسفل)
Top Bar
زر رجوع.
قائمة إجراءات (⋯) تحتوي: Report (فقط كمدخل إلى مسار الإبلاغ دون تصميم مساره هنا).
Context Strip (شريط السياق – ثابت أعلى المحتوى)
إذا كان المنشور مرفقًا بـPaper أو Highlight:
سطر صغير: “مرتبط بـ [Paper Title]” + أزرار سريعة:
Open Paper (يفتح Paper Page)
Read in PDF (يفتح القارئ عبر Paper Page)
Ask Paper (AI) (عبر Paper Page/القارئ)
إذا كان المنشور مرتبطًا بموضوع فقط:
سطر: “ضمن Topic: [Topic Name]” + زر Open Topic (يفتح Topic Hub كوجهة).
إذا كان المنشور من Author/Institution:
سطر: “بواسطة [Author] / [Institution]” + زر Open Author.
Post Header
معلومات الناشر (اسم/صفة/توثيق إن ظهر كشارة في الخطة) + وقت النشر.
Topics/Tags (Chips) قابلة للضغط (تفتح Topic Hub كوجهة).
Post Body
نص المنشور كاملًا.
إذا كان AI-assisted: وسم واضح كما في الخطة .
Post Actions (بنفس منطق CTAs المعتمدة)
أزرار أساسية: Save / Add to Collection / Follow Author/Topic / Share (إن كان Share Highlight فقط فاجعله متاحًا عندما يكون المنشور مبنيًا على Highlight) .
لا تضف أزرار جديدة خارج الخطة.
Quote/Repost Block
قسم واضح بعنوان “Quote/Repost” (كتصميم واجهة فقط) وفق الخطة :
زر Quote
زر Repost
مهم: لا تصمّم تدفقات النشر/التحرير هنا (لأنها ضمن محطات أخرى)، فقط واجهة القسم وحالاته (disabled/active).
Thread Preview (منطقة النقاش)
اعرض مدخل Thread كقائمة تعليقات/ردود بشكل “Placeholder مُهيّأ” (بدون تعميق نظام التعليقات بالكامل لأن له محطة مستقلة لاحقًا) .
أضف: حقل “أضف تعليقًا” + زر إرسال (كواجهة فقط) + حالة “التعليقات مقفلة/مقيدة” اعتمادًا على إعدادات التعليقات المذكورة في الخطة (كمخرجات UI فقط، دون بناء إعدادات الصفحة نفسها هنا) .
3.2 حالات Loading/Empty/Error داخل Post Details
Loading: Skeleton لمحتوى المنشور + Skeleton لشريط السياق + Skeleton للتعليقات (متوافق مع مبدأ loading في الخطة) .
Empty (Thread): “لا توجد تعليقات بعد” + CTA “ابدأ النقاش” (يفتح حقل التعليق).
Error:
“تعذر تحميل المنشور” + زر إعادة المحاولة.
إذا فشل جلب مرجع Paper/Topic: اعرض المنشور مع “تعذر تحميل المرجع” وزر Retry منفصل.
4.	Highlight Details (صفحة تفاصيل هايلايت)
في الـFeed: بطاقة الهايلايت تحتوي “نص مقتطف + مرجع الصفحة/الفقرة + ربط واضح بالورقة” ، وShare Highlight يكون “رابط + صورة مقتطف” .
4.1 هيكل الصفحة (من الأعلى للأسفل)
Top Bar
رجوع + (⋯) Report.
Context Strip (إلزامي)
“Highlight من Paper: [Paper Title]”
أزرار سريعة:
Open Paper
Read in PDF
(اختياري حسب توفره) Ask Paper (AI)
(هذه الأزرار تُعيد المستخدم إلى مسار القراءة/الورقة كما في حلقة القيمة الأساسية)
Highlight Card Expanded
النص المقتبس كاملًا.
مرجع واضح: رقم الصفحة/الفقرة (كما في البطاقة) .
زر أساسي داخل هذا القسم: Open in PDF at page (يفتح القارئ على الصفحة/الموضع عبر مسار Paper Page → PDF Reader).
Metadata مختصر
Author الذي أنشأ الهايلايت + Topics (Chips تفتح Topic Hub) + وقت الإنشاء.
Actions
Save / Add to Collection
Share Highlight (رابط + صورة مقتطف)
Follow Author/Topic
Thread Preview (نقاش مرتبط بالهايلايت)
نفس مبدأ Post Details: منطقة نقاش “Placeholder مُهيّأ” دون بناء نظام التعليقات بالكامل (له محطة منفصلة) .
4.2 حالات Loading/Empty/Error داخل Highlight Details
Loading: Skeleton للـHighlight + Skeleton لشريط السياق + Skeleton للنقاش.
Empty (Thread): “لا يوجد نقاش بعد” + حقل “أضف تعليقًا”.
Error:
“تعذر تحميل الهايلايت” + Retry.
إذا تعذر فتح الـPDF عند الصفحة: رسالة قصيرة + زر “افتح PDF” (يفتح القارئ من البداية بدل الموضع).
5.	قواعد التنقّل المطلوبة داخل صفحات التفاصيل (بدون اختراع مسارات جديدة)
الرجوع (Back) يعيد المستخدم إلى مصدر الفتح (Feed/Discover/Profile/Link) مع الحفاظ على السياق قدر الإمكان (نفس المبدأ العام للتنقّل الذي يمنع الضياع) .
أي ضغط على Topic Chip يفتح Topic Hub، وأي ضغط على Author يفتح Profile (كوجهات فقط، دون تصميم صفحاتها هنا لأنها ضمن محطات قادمة) .
في كلتا الصفحتين اجعل “العودة إلى Paper Page / Topic / Author” واضحة ومرئية دائمًا عبر شريط السياق.
6.	مخرجات المحطة (تسليمات تصميم)
شاشتان كاملتان RTL:
Post Details
Highlight Details
لكل شاشة: حالات Loading/Empty/Error + نسخة “فتح من Feed” ونسخة “فتح من رابط مشاركة”.
تطبيق شريط السياق الإلزامي الذي يربط المستخدم دائمًا بالوجهات: Paper Page / Topic / Author (حسب الارتباط).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) Layout
•	Light: Screen WarmPaper، الأقسام/السطوح CardWhite.
•	Dark: Screen DarkBG، الأقسام DarkSurface.
(B) Context Strip (عنصر تعريفي يجب أن يكون “مقروءًا بسرعة”)
•	Surface: CardWhite/DarkSurface + Border 1px ControlBorder (Light) / DarkText 14% (Dark).
•	Links داخل الشريط (Open Paper/Read PDF/Ask): Underline دائم + Focus rule.
•	ممنوع الاعتماد على اللون وحده داخل الشريط: استخدم Icon + Label أو Filled/Outlined للحالات.
(C) النص داخل التفاصيل
•	Body للنص الطويل: BodyL 16/28 (Light: Ink / Dark: DarkText).
•	Meta: Label 12/16 (Slate / DarkSubtext).
•	أي رابط داخل المتن (حتى “افتح PDF” إن كان رابطًا نصيًا) = Underline دائم.
(D) Thread Placeholder + Composer داخل التفاصيل
•	Input: Border 1px ControlBorder + Focus rule.
•	Send icon button: 48×48 target.
•	حالات “مقفلة/مقيدة”: استخدم لون + شكل (قفل/تنبيه) وليس لونًا فقط.
(E) Skeleton/Errors
•	Skeleton: Shimmer 1.2s، وبعد 5s: رسالة حالة + Retry (Button Primary/Secondary).
________________________________________
 STATION 009
المحطة رقم 9: صمّم Discover / Search كبحث موحّد مع تبويبات النتائج وفلاتر متقدمة وحفظ البحث والتنبيهات (V1)
المدخل (ارتباط بالمحطة السابقة): يصل المستخدم إلى Discover من نقاط الدخول الثابتة في التنقّل، وكذلك دخولًا سياقيًا من الـFeed عند الضغط على Topic/Author/Institution، ليُفتح البحث الموحد مستعدًا باستعلام/فلتر مطابق لذلك.
1.	بنية صفحة Discover (بحث موحّد داخل صفحة واحدة)
أعلى الصفحة: Unified Search Bar يدعم العربية مع اقتراحات فورية.
تحت شريط البحث مباشرة: تبويبات نتائج البحث بالترتيب التالي كما ورد:
All | Papers | Researchers | Topics | Institutions | Articles
تحديثات IA/Navigation ملزمة داخل Discover/Search (بدون تغيير جوهر المحطة)
A) سلوك تبويب All:
- لا تعرض نتائج “مختلطة” في قائمة واحدة.
- اعرض All كمقاطع رأسية (Vertical Sections) بالترتيب:
  Papers (3–5) → زر “المزيد”
  Topics (3–5) → زر “المزيد”
  Researchers (3–5) → زر “المزيد”
  Institutions (3–5) → زر “المزيد”
  Articles (3–5) → زر “المزيد”
B) الفلاتر (Facets) تتفرّع حسب التبويب:
- في All: اعرض فقط الفلاتر العامة (Language/Year/Field…).
- في Papers: أظهر Paper type/Has PDF/Has DOI/Venue… إلخ.
- في Researchers: أظهر Institution/Field/Verified… إلخ.
- في Institutions: أظهر Sector/Country/Verified/Availability… إلخ (إن وُجد).
قاعدة: لا تُظهر فلترًا لا ينطبق على التبويب الحالي.
C) حفظ البحث (Save Search) يجب أن يكون جزءًا من تجربة البحث نفسها:
- زر “حفظ هذا البحث” ظاهر قرب شريط البحث أو ضمن الفلاتر.
- عند الحفظ: اسم للبحث + تكرار التنبيه (Off/Daily/Weekly) + زر تأكيد.
- فتح Saved Search لاحقًا يعيد المستخدم لنفس الاستعلام + نفس الفلاتر + Chips ظاهرة.
D) Smart Suggestions يجب أن تكون مُعلّلة:
- كل اقتراح (Expert/Foundational paper) يعرض سببًا واحدًا (لماذا هذا مناسب؟).
منطقة نتائج ديناميكية تتغير حسب التبويب المختار.
2.	Advanced Filters Drawer (فلاتر متقدمة كما هي)
وفّر زر/أيقونة يفتح Drawer للفلاتر ويحتوي فقط على هذه العناصر كما وردت:
Year range
Field/Discipline (Taxonomy)
Language (Arabic/English/…)
Paper type (مقال/مراجعة/رسالة/تقرير…)
Institution
Author
Availability (Public / Subscribers / Institution)
Has PDF / Has DOI
سلوك الفلاتر:
تطبيق الفلاتر يُحدّث النتائج فورًا ويُبقي المستخدم في نفس التبويب.
الفلاتر المختارة تُعرض كـChips فوق النتائج (قابلة للإزالة) لتقليل عبء الذاكرة.
3.	Smart Suggestions Panel (لوحة اقتراحات ذكية داخل Discover)
ضمن Discover جهّز لوحة اقتراحات تظهر حسب الاستعلام/الموضوع وتشمل فقط:
“خبراء هذا الموضوع”
“أوراق أساسية (Foundational)”
Alerts (V1) + Alert frequency (إعداد تكرار التنبيه)
4.	شكل البيانات المعروضة لكل نوع نتيجة (كما ورد)
Papers: title, authors, year, venue, topics, badges, short abstract, key takeaways
Researchers: name, specialty, verification, top papers
Topics: تعريف قصير + ترند + عدد الأوراق
Institutions: اسم + توثيق + أحدث إصدارات
5.	CTAs داخل النتائج (كما ورد)
Open Paper
Read PDF
Follow
Save result
Start Research Session (يجمع نتائج إلى Queue)
مهم: هنا تُظهر زر Start Research Session فقط داخل Discover (ولا تُنشئ أو تُفصّل شاشة “جلسة البحث” نفسها إن كانت مخصصة لمحطة أخرى).
6.	حالات الصفحة (كما ورد)
Empty results: اقتراح تصحيح/مرادفات/مواضيع قريبة
Loading: skeleton list
Error: فشل تحميل
7.	قواعد UX داخل Discover (كما ورد)
“نتائج موثوقة أولاً”: أوراق مكتملة + مؤلفون موثقون + مؤسسات موثقة
دعم “مرادفات موضوعية” داخل Topics لاختلاف المصطلح العربي
المخرج (ارتباط بالمحطة التالية):
من نتائج Topics: CTA واضح “فتح الموضوع” ينقل إلى Topics Directory/Topic Hub حسب نقطة الدخول.
من نتائج Researchers: CTA “فتح ملف الباحث” ينقل إلى Researchers Directory/الملف (حسب التدفق المحدد في المحطات التالية).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) Search Bar
•	Surface: CardWhite/DarkSurface، Border 1px ControlBorder.
•	Placeholder/Text: Slate/DarkSubtext.
•	Focus: Outline 2px BrandPrimary/BlueNight + Offset 2px.
•	أي “اقتراحات” تظهر كقائمة: Row dividers = DividerLine 1px (مع وضوح بصري كافٍ).
(B) Tabs + Result Chips
•	Tabs: Active = Filled/Weight + BrandPrimary (Light) / BlueNight (Dark).
•	Filter Chips فوق النتائج: نفس قواعد Chips في الهوية (Height 32 + Touch 44×44 + Borders واضحة).
•	Remove chip (×): Icon button 48×48.
(C) Advanced Filters Drawer
•	Drawer surface: CardWhite/DarkSurface + Radius 18.
•	Inputs داخل Drawer: Border 1px ControlBorder + Focus rule.
•	Apply/Reset: Buttons (Primary/Secondary) فقط.
(D) Links داخل النتائج
•	أي “Open Paper / Read PDF / فتح الموضوع / فتح ملف الباحث” إذا قُدمت كرابط نصي داخل المتن = Underline دائم (لا لون فقط).
(E) Loading/Empty/Error
•	Loading: Skeleton list + Shimmer 1.2s، وبعد 5s: رسالة حالة + Retry.
•	Empty: CTA واحد واضح (Primary/Secondary) بدون CopperUI كنص صغير.
________________________________________
 STATION 010
المحطة رقم 10: صمّم Topics Directory كنقطة دخول من Discover/Feed
المدخل (ارتباط بالمحطة 9):
من تبويب Topics داخل Discover، وعند الضغط “عرض كل المواضيع/استكشاف المواضيع”، ينتقل المستخدم إلى Topics Directory.
1.	عناصر Topics Directory
أعلى الصفحة: بحث داخل المواضيع (يدعم العربية) لإيجاد الموضوع بسرعة.
قائمة مواضيع (Rows/Cards بسيطة) تعرض لكل موضوع:
اسم الموضوع
تعريف قصير
إشارة ترند (كمعلومة خفيفة)
عدد الأوراق
أزرار سريعة لكل موضوع:
Follow Topic
Open Topic (فتح صفحة الموضوع)
2.	حالات الصفحة
Loading: skeleton list
Empty: “لا توجد مواضيع مطابقة” + إجراء للعودة/مسح البحث
Error: فشل تحميل + إعادة المحاولة
المخرج (ارتباط بالمحطة 11):
الضغط على Open Topic ينقل إلى Topic Hub Page.
إضافة Breadcrumbs + مسارات “ابدأ هنا”
- إذا كان Topics Directory يعرض مستويات/فروع (Taxonomy): أضف Breadcrumb أعلى القائمة.
- أضف مقطع ثابت “ابدأ هنا” داخل Topics Directory (3 عناصر فقط) يوجه المستخدم لمسار واضح (Topic Hub أو بحث جاهز).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) الصفحة (Directory Look & Feel)
•	Light: WarmPaper كخلفية، قائمة النتائج داخل Cards/Rows على CardWhite.
•	Dark: DarkBG + Rows على DarkSurface.
(B) Rows/Cards للمواضيع (Non-text contrast واضح)
•	كل Row/Topic item: Border 1px ControlBorder (Light) / DarkText 14% (Dark).
•	Divider بين الصفوف (إن استُخدم بدل border): DividerLine 1px لكن يجب أن يبقى مرئيًا بوضوح (لا خطوط باهتة).
(C) Trend indicator (لا لون فقط)
•	إذا “إشارة ترند” لها معنى: استخدم Icon + Label وليس لونًا فقط.
•	النقطة الصغيرة إن استُخدمت كمؤشر معنى: 6px
o	Light: MintText
o	Dark: MintUI
(D) أزرار Follow/Open
•	Follow: Secondary أو Quiet حسب الكثافة، لكن Touch ≥ 44×44.
•	Open Topic: إذا كان رابطًا نصيًا داخل السطر = Underline دائم، وإذا زر = Secondary/Primary حسب السياق.
(E) Search داخل المواضيع
•	Search bar: Border 1px ControlBorder + Focus rule.
(F) حالات Loading/Empty/Error
•	Loading: Skeleton list + Shimmer 1.2s، وبعد 5s: رسالة حالة + Retry.
________________________________________
 STATION 011
المحطة رقم 11: صمّم Topic Hub Page (Overview/Top/Experts/Discussions/Trends) مع CTAs للمتابعة والحفظ والعودة للبحث/الأوراق
المدخل (ارتباط بالمحطة 10 أو من Discover/Feed):
يصل المستخدم إلى Topic Hub من Topics Directory أو من الضغط على Topic في Discover/Feed.
1.	رأس الصفحة (Topic Header)
اعرض في أعلى الصفحة:
تعريف/مرادفات/مجالات فرعية (كما ورد)
2.	تبويبات Topic Hub (كما ورد)
أنشئ Tabs داخل الصفحة:
Overview | Top Papers | Experts | Discussions | Trends
تحديثات تنقّل سياقي داخل Topic Hub
- أضف “ابدأ هنا” كمسار قراءة واضح (Editor Picks) أعلى الـHub (3 أوراق فقط + زر المزيد).
- أضف CTAs مرتبطة بالمحورين:
  Follow Topic / Save Search / Start Session
- وحدات “مشابه/مرتبط” يجب أن تكون مُعلّلة (سبب واحد لكل عنصر).
3.	Editor Picks داخل الصفحة (مهم في MVP)
ضع قسم Editor Picks ضمن محتوى الموضوع (خصوصًا في Overview).
4.	CTAs المطلوبة (كما ورد)
Follow Topic
Share Topic
Save list
5.	الحالة الخاصة للموضوع الجديد (كما ورد)
إذا الموضوع جديد بلا محتوى: اعرض “ابدأ بإضافة 3 أوراق” فقط للمحررين/الموثقين.
المخرج (ارتباط بالمحطة التالية):
تبويب Trends يقود إلى Topic Trend Page (عند فتح تفاصيل الترند).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) الخلفيات/السطوح/النص
•	Light Mode: الشاشة = WarmPaper #F6F3EE، البطاقات = CardWhite #FFFFFF.
•	النص الأساسي = Ink #0B1220، النص الثانوي = Slate #22324A.
•	الفواصل/الزخرفة = DividerLine #E0DBD4.
•	الحدود التي تساعد على الفهم/التفاعل (حقول/أزرار/بطاقات تفاعلية/حالات) = ControlBorder #8A7C6E.
(B) توقيع الفرادة “اليومي” داخل Topic Hub
•	ضع CopperKeyline ثابتًا على هذه الشاشة: خط 2px بلون CopperUI #B05920 بطول 48px بجوار عنوان الصفحة في Top Bar (RTL: يمين العنوان / LTR: يساره).
•	ممنوع تكرار CopperKeyline داخل بطاقات المحتوى نفسها (حتى لا يتحول لضجيج).
(C) Tabs + Links + Focus (ممنوع اللون وحده)
•	التبويب النشط: لون BrandPrimary #0D47A1 + Underline دائم.
•	الروابط داخل متن النص (مثل “View all” أو أي رابط يظهر ضمن Body): BrandPrimary + Underline دائم.
•	Focus لكل عنصر تفاعلي (Tabs/Buttons/Cards/Chips/Links):
o	Light: Outline 2px BrandPrimary #0D47A1 + Offset 2px
o	Dark: Outline 2px BlueNight #4A8CFF + Offset 2px
•	ممنوع اعتماد اللون وحده للدلالة على “نشط/قابل للنقر/رابط”.
(D) Editor Picks (تمييز بصري بدون ضوضاء)
•	أول بطاقة فقط داخل Editor Picks تُعامل كـ Hero Card:
o	يسمح لها وحدها بـ Step-Notch (المقاس 16×16) + داخل القصّة Copper stroke 2px بلون CopperUI #B05920.
o	RTL: القصّة أعلى يمين / LTR: أعلى يسار.
•	باقي البطاقات ممنوع عليها Step-Notch.
(E) ألوان التمييز الدلالي داخل Topic Hub
•	ممنوع استخدام CopperUI / MintUI كنص صغير.
•	Success = MintText #00796B + أيقونة ✔︎
•	Warning = CopperText #A65520 + أيقونة !
•	Error = #B3261E + أيقونة ✕
•	أي مؤشر صغير “ذو معنى” (مثل Active/Online/Selected): على الفاتح استخدم MintText (وليس MintUI).
(F) Loading/Empty/Error
•	Loading: Skeleton بلون Skeleton #E0D7CC.
•	إذا تجاوز التحميل 5 ثوانٍ: استبدل Skeleton برسالة حالة واضحة + زر Retry.
________________________________________
 STATION 012
المحطة رقم 12: صمّم Topic Trend Page (مقنن) مرتبط بـTrending في الـFeed (نفس العناصر/التصنيفات)
المدخل (ارتباط بالمحطة 11 + بالـFeed):
تُفتح من تبويب Trends داخل Topic Hub، ويجب أن تكون متسقة مع Trending في الـFeed (لأن الخطة نصّت أن الترند في MVP “مقنن”).
1.	مفهوم الصفحة (كما ورد في الخطة)
اعرض “ترند مقنن” مرتبط بالموضوع، ويقتصر على عناصر الترند كما وردت في الخطة: مواضيع/أوراق (وليس ضجيج منشورات عامة).
2.	عناصر الصفحة
قائمة عناصر ترند تتكون من:
Trending Papers داخل هذا الموضوع (بنفس نمط عرض الورقة الذي تستخدمه Discover/Feed للـPapers)
ويمكن إظهار “Trending Topics” إن كان الترند يعرض مواضيع أيضًا (بنفس نمط عرض الموضوع)
لكل عنصر:
CTA واضح يذهب إلى Paper Page أو Topic Hub حسب نوع العنصر.
تحديث بسيط: لماذا ترند؟ + أين أذهب بعد ذلك؟
- داخل Topic Trend Page أضف سطر تفسير قصير “لماذا هذا ترند؟” (مثال: زيادة حفظ/نقاش/نشر خلال 7 أيام).
- أضف CTA واضح: “افتح Topic Hub” + “افتح نتائج البحث لهذا الترند” مع حفظ السياق.
3.	الحالات
Loading / Empty / Error بنفس نمط صفحات القوائم
المخرج (ارتباط بالمحطة 13):
عند الضغط على Expert/Researcher المرتبطين بعناصر الترند، يكون الانتقال إلى Researchers Directory كمسار اكتشاف.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) توقيع الفرادة (ثابت مكانيًا)
•	ضع CopperKeyline 2px CopperUI #B05920 بطول 48px بجوار عنوان الصفحة في Top Bar (مثل المحطة 11).
(B) “ترند مقنن” بصريًا (بدون زخرفة)
•	قائمة الترند تُعرض كبطاقات نظيفة:
o	الخلفية CardWhite، Radius = 18، padding وفق نظام 8pt.
o	الفواصل DividerLine، والحدود التفاعلية/الوظيفية ControlBorder فقط عند الحاجة.
•	ممنوع Step-Notch على بطاقات القائمة هنا (الترند ليس Featured Card إلا إذا وُضع Hero واحد فقط أعلى القائمة).
(C) روابط/CTAs + Focus
•	CTA داخل العناصر (Open/عرض): BrandPrimary #0D47A1 + Underline دائم.
•	Focus: Outline 2px BrandPrimary + Offset 2px (Light) / BlueNight #4A8CFF (Dark).
(D) مؤشرات الترند الصغيرة “ذات معنى”
•	على الفاتح: استخدم MintText #00796B (وليس MintUI) + شكل ثانٍ (Filled/Outlined أو أيقونة).
(E) Loading/Empty/Error
•	Skeleton = Skeleton #E0D7CC، وبعد 5 ثوانٍ رسالة حالة + Retry.
________________________________________
 STATION 013
المحطة رقم 13: صمّم Researchers Directory كنقطة اكتشاف من البحث والمواضيع
المدخل (ارتباط بالمحطة 9 و11):
من تبويب Researchers داخل Discover.
من تبويب Experts داخل Topic Hub.
1.	عناصر Researchers Directory (كما تتطلبه الخطة عبر بيانات الباحثين في Discover)
أعلى الصفحة: بحث داخل الباحثين.
قائمة باحثين تعرض لكل باحث:
الاسم
التخصص
حالة التوثيق (verification)
top papers (كمعاينة مختصرة)
2.	CTAs
Follow
Open Profile (فتح صفحة الباحث العامة)
3.	الحالات
Loading / Empty / Error بنفس نمط صفحات القوائم
المخرج (ارتباط بالمحطة التالية في القائمة):
Open Profile ينقل إلى Researcher Profile (Public) (المحطة التالية في “المحطات المطلوب تفصيلها”).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) الخلفية + توقيع الفرادة
•	الخلفية: WarmPaper #F6F3EE.
•	ضع CopperKeyline 2px CopperUI #B05920 بطول 48px بجوار عنوان الصفحة في Top Bar.
(B) حقل البحث (Non-text contrast + Focus)
•	الحقل: Background CardWhite، Border = ControlBorder #8A7C6E (إلزامي لأنه عنصر غير نصي للتفاعل)، Radius = 14، Padding = 16.
•	Focus: Outline 2px BrandPrimary #0D47A1 + Offset 2px.
(C) بطاقات الباحثين (قائمة)
•	كل باحث داخل CardWhite، Radius 18، الفواصل DividerLine.
•	الاسم Ink، التخصص Slate.
(D) التوثيق Verification
•	Verified: MintText #00796B + أيقونة ✔︎ (ممنوع اللون وحده).
•	ممنوع MintUI كنص.
(E) CTAs
•	Follow: زر Secondary (Outlined) بحد ControlBorder ونص Ink.
•	Open Profile كرابط نصي: BrandPrimary + Underline دائم.
•	مساحة لمس: أي CTA أو زر = 44×44 كحد أدنى.
(F) حالات التحميل/الفراغ/الخطأ
•	Skeleton = Skeleton #E0D7CC، وبعد 5 ثوانٍ رسالة حالة + Retry.
________________________________________
 STATION 014
المحطة رقم 14: صمّم Researcher Profile (Public) مع تبويبات Papers/Highlights/Articles/Collections/About وروابط متابعة/تعاون
المدخل (ارتباط بالمحطة السابقة):
هذه الصفحة تُفتح كوجهة “فتح ملف الباحث” من Discover/Researchers Directory (المحطة 13) حيث بيانات الباحث تشمل التخصص وحالة التوثيق.
وتُفتح أيضًا سياقيًا من الضغط على Author/Topic Chips كوجهات انتقال (بدون إعادة تصميم Discover نفسه).
1.	هيكل الصفحة (Public Profile Layout)
Header ثابت أعلى الصفحة يحتوي على:
الاسم + التخصص/المجال + حالة التوثيق (Badge/Label واضح).
أزرار CTAs: Follow و Open to Collaborate (مع قوالب جاهزة).
شريط تبويبات رئيسي بالترتيب المحدد: Papers | Highlights | Articles | Collections | About.
2.	التبويبات ومحتوى كل تبويب (قوائم قابلة للتمرير)
Tab: Papers
قائمة أوراق للباحث (Cards بنفس منطق “Research Cards” المتكرر في المنصة).
لكل ورقة CTAs سريعة: Open Paper / Read PDF / Save / Add to Collection (كروابط واضحة من البطاقة).
Tab: Highlights
قائمة Highlights مرتبطة بأوراق/مواضيع مع CTA يفتح Highlight Details/أو الورقة حسب نوع العنصر (لا تعِد تصميم صفحات التفاصيل المنجزة مسبقًا).
Tab: Articles
قائمة مقالات طويلة (Article Cards) مع CTA لفتح المقال، وإظهار إن كانت مرتبطة بورقة/Highlight إن وُجد.
Tab: Collections
قائمة Collections العامة (Public) الخاصة بالباحث، مع CTA فتح Collection. (التفاصيل الدقيقة لشاشات إدارة/إنشاء Collections تبقى للمحطات الخاصة بالإدارة إن وُجدت لاحقًا).
Tab: About
نبذة + روابط تعريفية/مهنية أساسية (مختصر، بدون تحويلها لسيرة مطولة).
3.	حالات الصفحة
لكل تبويب: Loading / Empty / Error (Skeleton عند التحميل، Empty برسالة واضحة + CTA مناسب مثل “تابع/اكتشف” حسب السياق، وError مع Retry).
4.	الربط بالمحطة التالية (بدون تداخل)
أضف داخل الـProfile (Public) CTA واضح “الانتقال إلى لوحة الباحث الخاصة” ولكن فقط كزر/رابط إذا كان المستخدم هو نفس صاحب الحساب—تمهيدًا للمحطة 15 (Dashboard).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) Header (الهوية العميقة)
•	خلفية الـHeader: BrandDeep #06152B.
•	Topographic lines مسموحة هنا فقط بعتامة خفيفة (لا تتجاوز 4–5%).
•	نصوص الـHeader = OnBrandDeep = CardWhite #FFFFFF.
•	ضع CopperKeyline 2px CopperUI #B05920 بطول 48px داخل رأس الصفحة بمحاذاة العنوان/الاسم (ثابت مكانيًا).
(B) Badge التوثيق
•	Verified = MintText #00796B + ✔︎ (لا لون وحده).
(C) CTAs في الـHeader
•	Follow = Secondary Outlined بحد ControlBorder #8A7C6E (وفي الداكن حافظ على وضوح الحد).
•	Open to Collaborate = Primary: Background BrandPrimary #0D47A1 + Text OnBrandPrimary = CardWhite.
•	Focus للأزرار: Outline 2px (BrandPrimary في الفاتح / BlueNight في الداكن) + Offset 2px.
(D) Tabs + Links
•	التبويب النشط: BrandPrimary + Underline دائم.
•	روابط CTAs داخل البطاقات (Open Paper / Read PDF / Save / Add to Collection كروابط): BrandPrimary + Underline دائم.
•	إذا “Save” زر أيقوني: Outlined افتراضي / Filled نشط (ممنوع اللون وحده).
(E) Cards (Papers/Highlights/Articles/Collections/About)
•	خلفية CardWhite، Radius = 18.
•	DividerLine للفواصل، وControlBorder فقط عندما تكون البطاقة/الجزء “تفاعليًا وظيفيًا” يحتاج وضوحًا أعلى.
(F) Dark Mode (عند توفره)
•	الخلفية = DarkBG #060B14، الأسطح = DarkSurface #111623.
•	الروابط/النشط كنص: BlueNight #4A8CFF + Underline دائم.
•	ممنوع استخدام BrandPrimary كنص على الداكن.
(G) Loading/Empty/Error
•	Skeleton = Skeleton #E0D7CC، وبعد 5 ثوانٍ رسالة حالة + Retry.

صمّم Researcher Dashboard (Private) لإدارة المحتوى/الإحصاءات/إعدادات الأمان/طلب التوثيق
المدخل (ارتباط بالمحطة 14):
الوصول من CTA “لوحتي” داخل Researcher Profile عندما يكون المستخدم هو صاحب الحساب.
1.	بنية لوحة التحكم (Dashboard Shell)
Sidebar/Top Tabs داخل لوحة الباحث (خاصّة) بأربعة أقسام رئيسية:
Content Management
Analytics
Security & Privacy
Verification (طلب التوثيق + الحالة)
2.	Content Management
أقسام فرعية/فلاتر حالة المحتوى:
Drafts / Published / Scheduled (إن وُجد)
أنواع المحتوى: Papers / Highlights / Articles / Collections (كقوائم إدارة، مع إجراءات: Edit / Delete / Visibility).
زر “Create” يُظهر خيارات إنشاء (Article/Micro-post/Highlight/Upload Paper…) لكن لا تُفصّل تدفقات الإنشاء هنا إن كانت لمحطات أخرى—اكتفِ بمدخلات الإدارة (قوائم + إجراءات).
3.	Analytics
بطاقات إحصاءات عالية المستوى:
Saves / Discussions / (Citations إن وُجدت) كمؤشرات خفيفة.
قسم “Top content” يعرض أفضل عناصر (Paper/Article/Highlight) حسب Saves/Reads.
4.	Security & Privacy
إعدادات سريعة للأمان/الخصوصية، ويجب تضمين خيار: “لا أستقبل رسائل إلا من موثقين” ضمن إعدادات التواصل.
5.	Verification (ضمن اللوحة الخاصة)
اعرض حالة التوثيق الحالية + CTA “طلب توثيق” (ينقل لتدفق المحطة 16).
6.	حالات الصفحة
Loading/Empty/Error في كل قسم، مع Skeletons للقوائم وبطاقات الإحصاءات.
الربط بالمحطة التالية:
أي ضغط على “طلب توثيق/إدارة التوثيق” ينتقل لتدفق المحطة 16.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) الخلفية + توقيع الفرادة
•	Light Mode: خلفية اللوحة = WarmPaper #F6F3EE، أسطح الأقسام = CardWhite #FFFFFF.
•	ضع CopperKeyline 2px CopperUI #B05920 بطول 48px بجوار عنوان “لوحتي/لوحة الباحث” في Top Bar (ثابت مكانيًا).
(B) Tabs داخل Dashboard Shell
•	النشط: BrandPrimary #0D47A1 + Underline دائم.
•	Focus: Outline 2px BrandPrimary + Offset 2px.
(C) قوائم الإدارة (Edit/Delete/Visibility) — Non-text contrast + عدم الاعتماد على اللون
•	أي زر/أيقونة إدارة: مساحة لمس 44×44 كحد أدنى.
•	الحالات النشطة: Filled/Outlined (لا لون فقط).
•	Delete (إجراء خطير): لون #B3261E + أيقونة ✕ + نص توضيحي (لا لون وحده).
•	الحدود التي تفصل صفوف/أقسام: DividerLine، أما الحدود التي تعرّف عنصرًا تفاعليًا وظيفيًا: ControlBorder.
(D) Analytics Cards
•	أرقام Ink، توصيف Slate.
•	أي “تحسن/نجاح” = MintText #00796B + ✔︎ (لا MintUI كنص).
•	الرسوم/السلاسل: ممنوع الاعتماد على اللون وحده (استخدم نمط/شكل نقاط مختلف لكل سلسلة).
(E) Security & Privacy
•	عناصر Toggle/Checkbox/Input: Border = ControlBorder #8A7C6E + Focus مرئي (Outline 2px + Offset 2px).
•	ممنوع حدود 1px باهتة للعناصر الوظيفية الأساسية هنا.
(F) CTA “طلب توثيق”
•	زر Primary: Background BrandPrimary #0D47A1 + Text OnBrandPrimary = CardWhite.
•	إذا ظهر كرابط ضمن نص: BrandPrimary + Underline دائم.
(G) Loading/Empty/Error
•	Skeleton = Skeleton #E0D7CC.
•	إذا تجاوز التحميل 5 ثوانٍ: رسالة حالة واضحة + Retry.
________________________________________
 STATION 015
المحطة رقم 15: صمّم Researcher Dashboard (Private) لإدارة المحتوى/الإحصاءات/إعدادات الأمان/طلب التوثيق
المدخل (ارتباط بالمحطة 14):
الوصول من CTA “لوحتي” داخل Researcher Profile عندما يكون المستخدم هو صاحب الحساب.
1.	بنية لوحة التحكم (Dashboard Shell)
Sidebar/Top Tabs داخل لوحة الباحث (خاصّة) بأربعة أقسام رئيسية:
Content Management
Analytics
Security & Privacy
Verification (طلب التوثيق + الحالة)
2.	Content Management
أقسام فرعية/فلاتر حالة المحتوى:
Drafts / Published / Scheduled (إن وُجد)
أنواع المحتوى: Papers / Highlights / Articles / Collections (كقوائم إدارة، مع إجراءات: Edit / Delete / Visibility).
زر “Create” يُظهر خيارات إنشاء (Article/Micro-post/Highlight/Upload Paper…) لكن لا تُفصّل تدفقات الإنشاء هنا إن كانت لمحطات أخرى—اكتفِ بمدخلات الإدارة (قوائم + إجراءات).
3.	Analytics
بطاقات إحصاءات عالية المستوى:
Saves / Discussions / (Citations إن وُجدت) كمؤشرات خفيفة.
قسم “Top content” يعرض أفضل عناصر (Paper/Article/Highlight) حسب Saves/Reads.
4.	Security & Privacy
إعدادات سريعة للأمان/الخصوصية، ويجب تضمين خيار: “لا أستقبل رسائل إلا من موثقين” ضمن إعدادات التواصل.
5.	Verification (ضمن اللوحة الخاصة)
اعرض حالة التوثيق الحالية + CTA “طلب توثيق” (ينقل لتدفق المحطة 16).
6.	حالات الصفحة
Loading/Empty/Error في كل قسم، مع Skeletons للقوائم وبطاقات الإحصاءات.
الربط بالمحطة التالية:
أي ضغط على “طلب توثيق/إدارة التوثيق” ينتقل لتدفق المحطة 16.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
(A) Tokens إلزامية للاستخدام داخل هذه المحطة (لا ألوان/قيم خارجها)
•	BrandPrimary = #0C3FB2
•	BrandDeep = #06152B
•	BrandSoft = #D6E4FF
•	WarmPaper = #F6F3EE
•	CardWhite = #FFFFFF
•	CopperUI = #B05920 (زخرفة/خطوط/شارات فقط — ممنوع كنص صغير)
•	MintUI = #00B3A4 (نقاط/هالات فقط — ممنوع كنص صغير)
•	CopperText = #A65520 (مسموح للنص)
•	MintText = #00796B (مسموح للنص)
•	Ink = #0B1220
•	Slate = #22324A
•	DividerLine = #E0DBD4
•	ControlBorder = #8A7C6E (حدود عناصر UI التفاعلية في الفاتح)
•	Skeleton = #E0D7CC
•	DarkBG = #060B14
•	DarkSurface = #111623
•	DarkText = #F2F5FA
•	DarkSubtext = #B9C2D0
•	BlueNight = #4A8CFF (روابط/نص/نشط على الداكن فقط)
(B) Typography / Grid / Radii إلزامية
•	FontArabic: IBM Plex Sans Arabic (أو Noto Sans Arabic UI) — ممنوع Condensed/Italic للعربية
•	Display 34/42 700 — H1 28/36 700 — H2 22/30 600 — H3 18/26 600 — BodyL 16/28 400 — BodyM 15/24 400 — BodyS 13/20 400 — Label 12/16 600
•	8pt Grid: 4, 8, 12, 16, 24, 32, 40, 48 فقط
•	CardRadius 18 — InputRadius 14 — ButtonRadius 14 — ChipRadius 999
(C) تطبيق الهوية داخل Researcher Dashboard (Private) حرفيًا
1.	الخلفيات والهيكل
•	خلفية اللوحة (Light) = WarmPaper، (Dark) = DarkBG
•	كل أقسام Content/Analytics/Security/Verification تُعرض داخل Cards: CardWhite (Light) / DarkSurface (Dark)
•	Gap بين البطاقات/الأقسام داخل الشاشة = 12 أو 16 فقط
2.	Tabs/Navigation داخل اللوحة
•	Top Tabs: Height 48، Label 12/16 600
•	Selected: Background BrandSoft + Text BrandPrimary + مؤشر 6px (Light = MintText / Dark = MintUI)
•	Unselected: Transparent + Text Slate (Light) / DarkSubtext (Dark)
3.	Cards & Lists داخل Content Management
•	Card: Radius 18، Padding 16
•	Border الفاتح: 2px ControlBorder (لأن الحدود 1px قد تفشل Non-text contrast)
•	Border الداكن: 2px DarkText Opacity 14%
•	حالات المحتوى (Draft/Published/Scheduled) = لون + أيقونة (ممنوع اللون وحده)
o	Draft: Slate + أيقونة 📝
o	Published: MintText + أيقونة ✔︎
o	Scheduled: CopperText + أيقونة ⏱
4.	Actions / Touch targets
•	كل Icon action (Edit/Delete/Visibility) = مساحة لمس 48×48 (حتى لو الأيقونة 20–24)
•	Active state: Filled/Outlined (ليس لون فقط)
5.	Links داخل المتن
•	أي رابط داخل Body (مثل “Top content” أو روابط داخل Analytics) = BrandPrimary (Light) / BlueNight (Dark) + Underline دائم
6.	Focus (إلزامي)
•	Light: Outline 2px BrandPrimary + Offset 2px
•	Dark: Outline 2px BlueNight + Offset 2px
•	ممنوع Focus بالظل
7.	Loading/Empty/Error
•	Skeleton لون Skeleton + Shimmer 1.2s
•	إذا تجاوز التحميل 5 ثوانٍ: استبدل Skeleton برسالة حالة واضحة + زر “إعادة المحاولة”
8.	توقيع الفرادة اليومي (بدون ضوضاء)
•	ضع بطاقة Hero ثابتة أعلى Dashboard (Researcher Snapshot) تظهر دائمًا:
o	Step-Notch 16×16 (RTL أعلى يمين / LTR أعلى يسار) + CopperUI stroke 2px داخل القصّة
o	ممنوع تكرار Step-Notch في بقية بطاقات اللوحة
9.	Motion
•	EaseOutCubic
•	Press: Scale 0.98 → 1.00 خلال 120ms
•	Reduced Motion: عند التفعيل ألغِ Scale واجعل الانتقالات Fade فقط ≤ 120ms
________________________________________
 STATION 016
المحطة رقم 16: صمّم تدفق طلب التوثيق (باحث) وشارات الحالة وربطه بالملف وكل المحتوى
المدخل (ارتباط بالمحطة 15):
الدخول من Researcher Dashboard (Private) في تبويب Verification.
1.	نموذج طلب التوثيق (Verification Request Form)
حقول إلزامية: الاسم الرسمي + المؤسسة + رابط رسمي + رفع إثبات (ID/Letter) + اختيار نوع الطلب (باحث/مؤسسة/طالب).
2.	رفع الإثبات
ارفع الملف إلى Storage (مسار ثابت) واحفظ idImageUrl داخل verification_requests.
3.	إنشاء الطلب
عند الإرسال: أنشئ وثيقة verification_requests تحتوي: userId, institutionName, idImageUrl, type, status: pending, createdAt.
4.	شارات الحالة (Badge System)
Pending: “قيد المراجعة”
Approved: “موثّق” + تحديث users.isVerified=true
Rejected: “مرفوض” + سبب مختصر reason.
5.	تطبيق الشارة عبر المنصة
بعد التوثيق:
•	تظهر شارة Verified بجانب اسم الباحث في Profile والـFeed والتعليقات والبطاقات.
•	وتُفتح صلاحيات Verified-only (مثل الخدمات/سوق الخدمات V2) لاحقًا.
6.	صفحة متابعة الحالة
صفحة داخل Verification تعرض: الحالة الحالية + تاريخ الإرسال + آخر تحديث + سبب الرفض إن وُجد.
الربط بالمحطة التالية:
بعد تثبيت منطق التوثيق وشاراته، يصبح “Institutions Hub” (المحطة 17) متسقًا لأن المؤسسات أيضًا تظهر في Discover بحالة توثيق.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1.	Form Container
•	Card: CardWhite/DarkSurface، Radius 18، Padding 16–24
•	Borders للفاتح: 2px ControlBorder، للداكن: 2px DarkText 14%
2.	Inputs / Focus / Errors
•	InputRadius 14
•	Focus: Outline 2px BrandPrimary/BlueNight + Offset 2px (ممنوع الظل)
•	Error state: Border 2px #B3261E + أيقونة ✕ + نص مساعد BodyS 13/20 (ممنوع اللون وحده)
3.	Upload Area
•	Dropzone: Border 2px متقطع ControlBorder + Icon 24px + Label 12/16 600
•	Progress: سماكة 4px Filled = BrandPrimary + نسبة مئوية نص Ink (لا تعتمد على اللون فقط)
4.	Status Badges (لون + شكل)
•	Pending: CopperText + ⏳
•	Approved: MintText + ✔︎
•	Rejected: #B3261E + ✕
5.	Links داخل المتن
•	أي رابط “رابط رسمي” أو “سياسة التوثيق” = Underline دائم
6.	Reduced Motion
•	عند تفعيل تقليل الحركة: الانتقالات Fade فقط ≤ 120ms
________________________________________
 STATION 017
المحطة رقم 17: صمّم Institutions Hub كنقطة دخول من البحث والمواضيع والـFeed
المدخل (ارتباط بالمحطة 17):
فتح Institutions Hub من Discover أو من Topic Hub أو من نتائج البحث، وكذلك من شارة المؤسسة داخل Paper/Article.
1.	Institutions Hub
صفحة/مركز يعرض قائمة مؤسسات قابلة للبحث والفلترة (بدون الدخول في تفاصيل “Institution Page” التي هي المحطة 18).
2.	مكوّنات الصفحة
Search bar + Filters (Verified / Type) + Sort (Trending / Most Publications).
3.	قائمة المؤسسات
Card/List لكل مؤسسة يعرض: الاسم + النوع + Verified badge + عدد المنشورات/الأعضاء (إن وُجد).
4.	حالات الصفحة
Loading/Empty/Error (Skeleton + Retry).
Open Institution (يفتح Institution Page — المحطة 18)
الربط بالمحطة التالية:
CTA “Open Institution” يفتح Institution Page (المحطة 18) مع تبويباتها.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1.	Layout
•	Background: WarmPaper (Light) / DarkBG (Dark)
•	List gap: 12 أو 16 فقط
2.	Search + Filters
•	Search: Radius 14، Border 2px ControlBorder، Placeholder Slate
•	Chips: Height 32 (بصريًا) + Touch 44×44
•	Selected chip: BrandSoft + Text BrandPrimary (لا تعتمد على اللون فقط لإظهار selected: أضف شكل Filled/Outlined)
3.	Institution Card
•	Radius 18، Padding 16
•	Border Light: 2px ControlBorder، Dark: 2px DarkText 14%
•	Title: H3 18/26 600
•	Meta: BodyS 13/20 Slate/DarkSubtext
•	Verified badge: MintText + ✔︎ (لون + شكل)
4.	Link rules
•	أي رابط ضمن About snippet أو داخل نتائج البحث = Underline دائم
5.	توقيع الفرادة اليومي (Frequency)
•	ضع في أعلى الصفحة بطاقة Hero ثابتة “Institution of the Day”:
o	Step-Notch 16×16 + CopperUI stroke 2px داخل القصّة
o	CopperKeyline 2px بطول 48px بجانب عنوان البطاقة
o	ممنوع تكرار Notch في بقية العناصر
6.	Loading fallback
•	Skeleton + Shimmer 1.2s، وبعد 5 ثوانٍ رسالة حالة + Retry
________________________________________
 STATION 018
المحطة رقم 18: صمّم Institution Page مع تبويبات Publications/Series/Team/About/Subscribe
المدخل (ارتباط بالمحطة 17):
فتح صفحة المؤسسة من Institutions Hub أو من نتائج Institutions في Discover.
1.	هيكل صفحة المؤسسة
Institution Header يحتوي على:
اسم المؤسسة + حالة التوثيق (Badge)
زر Subscribe (ظاهر دائمًا في الهيدر)
تبويبات رئيسية بالترتيب: Publications | Series | Team | About | Subscribe
2.	التبويبات (بدون تفصيل ما ليس ضمن هذه المحطة)
Tab: Publications
قائمة منشورات المؤسسة (Papers/Reports… حسب المتاح) مع CTA فتح الورقة/الـPDF/الحفظ (بنفس منطق CTAs القياسي).
Tab: Series
قائمة سلاسل/سيريز (عرض عنوان السلسلة + وصف مختصر + CTA فتح السلسلة).
Tab: Team
اعرض فقط قائمة أعضاء الفريق (اسم/دور مختصر) كعرض عام. (أي صلاحيات/أدوار تحريرية/إدارة صفوف تحرير تُترك للمحطات التي تخص “Team & Roles / Editorial Queue” ولا تُدخل تفاصيلها هنا).
Tab: About
نبذة المؤسسة + روابط أساسية.
Tab: Subscribe
صفحة تبين قيمة الاشتراك + CTA “Subscribe” (بدون تفصيل بوابة الدفع إن لم تكن ضمن هذه المحطة).
3.	الحالات
Loading/Empty/Error لكل تبويب (قوائم Skeleton + Retry).
الربط لما بعدها (بدون تداخل):
اترك في “Team” وداخل الصفحة نقاط CTA/مداخل واضحة لما سيأتي لاحقًا (إدارة الأدوار/التحرير)، لكن لا تصمّم تدفقات الإدارة نفسها هنا.
المفهوم. هذا إصدار مُدقّق ومُلتزم حرفيًا بما ورد في الخطة الخام وبما هو مُدرج كمحطات قادمة، بدون إدخال عناصر من محطات لاحقة أو تكرار ما أُنجز.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1.	Institution Header (Signature)
•	إذا كانت المؤسسة Verified:
o	Background: BrandDeep + Topographic lines 3–4% (مسموحة هنا فقط)
o	Title: H1 28/36 700 بلون OnBrandDeep
o	Verified badge: MintText + ✔︎ (لون + شكل)
o	CTA Subscribe ثابت: Primary BrandPrimary + OnBrandPrimary
o	CopperKeyline 2px بطول 48px بجانب الاسم دائمًا
o	Step-Notch 16×16 في Hero header فقط + CopperUI stroke 2px داخل القصّة
•	إذا غير Verified: نفس البنية بدون Notch وبدون Copper stroke (استخدم ControlBorder فقط)
2.	Tabs
•	Height 48، Label 12/16 600
•	Selected: BrandSoft + BrandPrimary + Indicator 6px (Light MintText / Dark MintUI)
3.	Lists داخل Publications/Series/Team/About/Subscribe
•	Cards: Radius 18، Padding 16، Border 2px ControlBorder (Light) / 2px DarkText 14% (Dark)
•	CTA داخل القوائم: Touch 48×48، Active = Filled/Outlined (ليس لون فقط)
4.	Links
•	أي رابط داخل About = Underline دائم
5.	Loading/Empty/Error
•	Skeleton + Shimmer 1.2s، وبعد 5 ثوانٍ State message + Retry
________________________________________
 STATION 019
المحطة رقم 19: صمّم Institution Page مع تبويبات Publications/Series/Team/About/Subscribe
صمّم صفحة مؤسسة كوجهة “هوية + نشر مؤسسي” داخل TaraqqiClub، وتُفتح من نقاط الاكتشاف (Discover/Topics/Feed) كما هي ضمن خريطة المنصة.
1.	Institution Profile (الواجهة العليا داخل الصفحة)
اعرض: تعريف المؤسسة + حالة التوثيق المؤسسي (Institution Verified) + رابط الموقع (إن وُجد) — كعناصر معلوماتية ثابتة أعلى الصفحة.
لا تُظهر “ترند المؤسسة” إلا إذا تحققت شروط الحد الأدنى من الجودة/التحقق.
2.	Tabs داخل Institution Page (ثابتة في أعلى المحتوى)
أنشئ تبويبات بالضبط:
Publications
Series/Reports
Team
About
Subscribe
3.	محتوى كل تبويب (بدون بناء شاشات محطات أخرى)
Publications: قائمة منشورات المؤسسة (بطاقات/قائمة) بمدخلات تفتح صفحات المحتوى المقابلة عند الضغط (تفاصيل هذا المحتوى تُنجز في محطات الأوراق/المقالات لاحقًا).
Series/Reports: قائمة سلاسل/تقارير المؤسسة كعناصر قابلة للفتح (تفاصيل السلاسل/التقارير لا تُفصّل هنا).
Team: يعرض “قائمة الأعضاء + الأدوار” ويُعد نقطة دخول للمحطة 20.
About: وصف موسّع وروابط.
Subscribe: زر/حالة الاشتراك (المدفوعات/الخطط ليست ضمن هذه المحطة).
4.	مخرجات الربط (مع ما قبل/بعد بدون تداخل)
المدخل: هذه الصفحة تُفتح من Institutions Hub المذكور في خريطة المنصة ضمن Surface الاكتشاف.
المخرج: تبويب Team يقود لتفاصيل “الأدوار وإدارة الفريق” (المحطة 20)، ومسار التحرير يظهر عبر “Editorial Queue” (المحطة 21) دون تنفيذها هنا.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1.	Distinctive Assets (ثابتة مكانيًا)
•	CopperKeyline 2px يظهر في أعلى الصفحة بجانب تعريف المؤسسة في كل مرة (عنصر توقيع ثابت يوميًا)
•	WarmPaper هو الخلفية الافتراضية للفاتح داخل Institution Page لرفع الفرادة (لا تجعلها اختيارية)
2.	Institution Profile block
•	CardWhite/DarkSurface، Radius 18، Padding 16–24
•	Borders: 2px ControlBorder / 2px DarkText 14%
•	Verified: MintText + ✔︎ (Badge)
•	Website link: Underline دائم + (BrandPrimary/BlueNight)
3.	Tabs
•	نفس قواعد Tabs المذكورة في المحطة 18 (Selected indicator + Label 12/16)
4.	Publications/Series lists
•	Cards منضبطة: Radius 18، Padding 16، Gap 12/16
•	أي “فتح” CTA واضح بمسار نقر واحد لكل بطاقة (لا مناطق تفاعل مبهمة) مع Touch 48×48
5.	Trend gating (بصريًا)
•	“ترند المؤسسة” إن ظهر: اجعله Chip/Badge (CopperText + أيقونة ▲) وليس لونًا فقط
6.	Focus / Non-text contrast
•	Focus: Outline 2px + Offset 2px
•	Divider/Border المهم = 2px (ممنوع 1px باهت للعناصر غير النصية ذات معنى)
________________________________________
 STATION 020
المحطة رقم 20: صمّم Team & Roles داخل المؤسسة (Owner/Editor/Writer/Reviewer) وربطها بالتحرير والنشر
المدخل (ارتباط بالمحطة 19):
الدخول من تبويب Team داخل Institution Page.
1.	Team Directory (قائمة الفريق)
اعرض قائمة أعضاء المؤسسة مع: الاسم + الدور + حالة التوثيق (إن وُجد) + CTA “عرض الملف” لكل عضو.
2.	إدارة الأدوار (Roles Management)
إذا كان المستخدم Owner:
•	CTA “Add member”
•	تغيير الدور (Owner/Editor/Writer/Reviewer)
•	Remove member
إذا كان المستخدم Editor:
•	Add/Assign tasks (لكن لا تبنِ Editorial Queue هنا).
3.	ربط التحرير
إظهار “Editorial Queue” كوجهة عمل مرتبطة بالمؤسسة (المحطة 21) لمن لديهم دور تحريري داخل المؤسسة.
تمييز المحتوى المنشور عبر المسار التحريري لاحقًا بشارة “Reviewed” (هذه تُنفذ في المحطة 21، هنا فقط اربطها كمفهوم واجهة/نص).
4.	صلاحيات واضحة
اعرض وصفًا مختصرًا لصلاحيات كل دور لتقليل الأخطاء.
5.	حالات الصفحة
Loading/Empty/Error + Confirmations قبل تغييرات حساسة.
الربط بالمحطة التالية:
زر/وصلة واضحة: “فتح قائمة التحرير” تنقل إلى Editorial Queue (المحطة 21) داخل سياق المؤسسة نفسها.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1.	Team list (Non-text contrast قوي)
•	Rows/Cards: Radius 18، Padding 16
•	Border للفاتح: 2px ControlBorder، للداكن: 2px DarkText 14%
•	Divider بين الصفوف عند الحاجة: 2px DividerLine (Light) / 2px DarkText 14% (Dark)
2.	Role Badges (لون + شكل)
•	Owner: CopperText + أيقونة ★ + Badge
•	Editor: BrandPrimary + أيقونة ✎ + Badge
•	Writer: Slate + أيقونة 🖊 + Badge
•	Reviewer: MintText + أيقونة ✔︎ + Badge
(ممنوع تمييز الدور باللون وحده)
3.	Verified indicator للأعضاء
•	Verified: MintText + ✔︎ بجانب الاسم (Badge صغير)
4.	CTAs & Menus
•	“Add member / Change role / Remove” = عناصر تفاعلية Touch 48×48
•	Bottom sheet/modal: Radius 18، Background CardWhite/DarkSurface، Title H3 18/26 + CopperKeyline 2px بطول 48px بجانب العنوان
5.	Links داخل المتن
•	“عرض الملف” + “فتح قائمة التحرير” = Underline دائم (BrandPrimary/BlueNight)
6.	Focus / Reduced Motion
•	Focus: Outline 2px + Offset 2px
•	Reduced Motion: Fade فقط ≤ 120ms عند تفعيل تقليل الحركة
7.	شارة Reviewed (كمفهوم واجهة هنا فقط)
•	عند ذكر “Reviewed” بصريًا: CopperText + أيقونة ✔︎ داخل Shield/Badge (لون + شكل) دون ابتكار ألوان جديدة


________________________________________
 STATION 021
المحطة رقم 21: صمّم Editorial Queue للمؤسسات (Draft → Review → Publish) وشارة “Reviewed”
صمّم شاشة/وحدة “قائمة التحرير” مرتبطة بالمؤسسة (تُفتح من Institution Page > Series/Reports أو من Team).
1.	بنية الـQueue
اعرض مسار الحالة بالترتيب الحرفي:
Draft → Review → Publish
اعرض العناصر كبطاقات: عنوان المحتوى + نوعه (تقرير/سلسلة/محتوى) + آخر تحديث + الحالة الحالية.
2.	انتقالات الحالة (واجهية)
داخل بطاقة كل عنصر:
CTA “Send to Review” ينقل من Draft إلى Review
CTA “Publish” ينقل من Review إلى Publish
CTA “Return to Draft” يعيد من Review إلى Draft (إن كان مسموحًا)
3.	شارة “Reviewed”
عند نشر عنصر عبر هذا المسار، أظهر شارة “Reviewed” في بطاقة المحتوى وفي Institution Page (الذي يعرض المحتوى) كشارة ثقة إضافية.
4.	فلاتر/تبويبات
وفّر فلاتر سريعة: Draft / Review / Published
وفّر بحث بسيط داخل الـQueue بالعنوان.
5.	Empty/Loading
Empty state واضح لكل حالة مع CTA “Create draft” عند Draft.
Skeleton loading عند التحميل.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
الأسطح والخلفيات
•	Light: خلفية الشاشة WarmPaper #F6F3EE + بطاقات العناصر CardWhite #FFFFFF.
•	Dark: خلفية DarkBG #060B14 + بطاقات DarkSurface #111623.
Top App Bar (توقيع يومي ثابت للفرادة)
•	Height 56.
•	ضع CopperKeyline: خط 2px بلون CopperUI #B05920 بطول 48px بجوار عنوان الصفحة (RTL: يمين العنوان / LTR: يساره).
•	ممنوع تكرار النحاس كتوقيع في كل بطاقة.
بطاقات عناصر الـQueue
•	CardRadius = 18.
•	Padding داخل البطاقة = 16.
•	Border (Non-text contrast واضح):
o	Light: 2px ControlBorder #8A7C6E (لأن 1px قد يضعف مع anti-aliasing).
o	Dark: 2px DarkText بعتامة 14%.
•	Shadows: Light فقط (E1)، Dark بدون ظلال واعتمد فصل بالحدود.
عرض الحالة Draft/Review/Publish (ممنوع اللون وحده)
•	اعرضها كـChip (Height 32 + Touch 44×44) مع لون + أيقونة + نمط Filled/Outline:
o	Draft: Outline + Slate #22324A
o	Review: Outline + CopperText #A65520 + أيقونة !
o	Published: Filled + MintText #00796B + أيقونة ✔︎
CTA داخل البطاقة
•	Primary: BrandPrimary #0D47A1 + OnBrandPrimary (أبيض) + Press motion 120ms (Reduced Motion = Fade فقط).
•	Secondary: Border 2px ControlBorder + Text Ink.
شارة “Reviewed”
•	Badge: خلفية BrandSoft #D6E4FF + نص Ink #0B1220 + أيقونة ✔︎
•	إن احتجت لمسحة نحاسية: Keyline نحاسي 2px حول الشارة (CopperUI) بدون نص نحاسي صغير.
Focus (WCAG 2.2) إلزامي
•	Light: Outline 2px BrandPrimary + Offset 2px
•	Dark: Outline 2px BlueNight #4A8CFF + Offset 2px
•	ممنوع Focus بالظل.
Loading/Empty
•	Skeleton: لون Skeleton #E0D7CC + Shimmer 1.2s.
•	إذا تجاوز التحميل 5 ثوانٍ: استبدل Skeleton برسالة حالة + زر “إعادة المحاولة”.
________________________________________
 STATION 022
المحطة رقم 22: صمّم Papers Directory كقائمة/شبكة تُغذّي Paper Page وتستقبل من Discover/Topics/Profile
صمّم “دليل الأوراق” كوجهة استعراض مستقلة داخل قسم Papers، وتعمل كنقطة تجميع للنتائج/القوائم القادمة من Discover/Topics/Profile كما هو مطلوب.
1.	وضعا العرض
Toggle: List / Grid (نفس البيانات، اختلاف عرض فقط).
2.	Card/Row لكل ورقة (استعمل نفس حقول عرض نتائج الأوراق كما وردت)
اعرض داخل كل عنصر:
title, authors, year, venue, topics, badges, short abstract, key takeaways
3.	CTAs على عنصر الورقة
Open Paper (يفتح Paper Page)
Save (يحفظ في Library)
Share (إن كان مفعّلًا)
4.	Sorting/Filtering (واجهية فقط)
Sort: Newest / Most saved / Most discussed
Filter: Topics / Year / Venue
5.	Empty/Loading
Empty state واضح عند عدم وجود نتائج + CTA للعودة إلى Discover أو Topics.
Skeleton loading عند التحميل.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
الفرادة (Frequency) — توقيع يظهر يوميًا دون ضوضاء
•	اجعل أعلى الدليل يحتوي Hero Card ثابتة فوق النتائج (مثل “ورقة اليوم/اقتراح اليوم”) تظهر دائمًا في Light/Dark.
•	هذه الـHero Card فقط مسموح لها استخدام Step-Notch 16×16:
o	RTL: أعلى يمين / LTR: أعلى يسار
o	داخل الـNotch خط 2px CopperUI #B05920
•	ممنوع Step-Notch في بقية عناصر النتائج (List/Grid).
الخلفيات والبطاقات
•	Light: WarmPaper للشاشة + CardWhite للنتائج.
•	Dark: DarkBG للشاشة + DarkSurface للنتائج.
Toggle (List/Grid)
•	نفّذه كـChips/Segmented:
o	Height 32, ChipRadius 999
o	Selected: Background BrandSoft #D6E4FF + Text BrandPrimary #0D47A1
o	Default: Border 2px ControlBorder + Text Slate
Card/Row للورقة
•	CardRadius 18, Padding 16
•	Border (مهم للتمييز): 2px ControlBorder (Light) / 2px DarkText 14% (Dark)
•	Typography:
o	title: BodyL 16/28 وزن 600 (Ink / DarkText)
o	authors/year/venue: Label 12/16 (Slate / DarkSubtext)
o	short abstract: BodyM 15/24
o	key takeaways: صندوق BrandSoft (Light) / صندوق DarkSurface أفتح درجة (Dark) + نص واضح
Badges
•	ممنوع اللون وحده: Badge = لون + أيقونة أو Filled/Outline.
•	AI: BrandSoft + i
•	Verified: BrandSoft + ✔︎ (لا تستخدم CopperUI/MintUI كنص صغير)
CTAs + Links
•	Open Paper كنص داخل المتن:
o	Light: BrandPrimary + Underline دائم
o	Dark: BlueNight + Underline دائم
•	Save/Share:
o	Touch targets 48×48
o	Active state: Filled icon + BrandPrimary/BlueNight (يتغير الشكل أيضًا)
Dividers/Non-text contrast
•	Dividers: 2px DividerLine #E0DBD4 عند الحاجة.
•	أي حدود/مؤشرات تفاعلية لا تقل عن 2px لتجاوز ضعف 1px عمليًا.
Loading/Empty
•	Skeleton كما القاعدة + بعد 5s رسالة حالة + زر إعادة المحاولة.
________________________________________
 STATION 023
المحطة رقم 23: صمّم Paper Create Wizard (بيانات → مؤلفين → معرفات → رفع PDF → حقوق/نسخة → توليد Card → نشر/مسودة)
صمّم “معالج نشر ورقة” خطوة بخطوة بالترتيب المذكور في الخطة الخام، مع حفظ تلقائي وتقصير الخطوات.
0) قواعد عامة للمعالج
كل خطوة قصيرة + حفظ تلقائي Draft.
لا تُجبر المستخدم على كتابة Abstract إن أمكن استخراجه، لكن اجعله قابلًا للمراجعة/التعديل.
1.	Step 1 — Basics
Title (AR/EN)، سنة، نوع، تخصص، لغة.
2.	Step 2 — Authors
إضافة مؤلفين + ترتيب + جهات.
3.	Step 3 — Identifiers
DOI/URL (إن وجد)
4.	Step 4 — Upload PDF
رفع PDF + شريط تقدم + التحقق من النوع.
5.	Step 5 — Rights/Version
حقوق الاستخدام + نسخة (preprint/published) + ترخيص إن وجد.
6.	Step 6 — Generate Card
توليد Research Card (ملخص/منهجية/نتائج/Key takeaways) مع وسم AI.
7.	Step 7 — Publish / Save as Draft
زر نشر + زر حفظ كمسودة.
8.	Errors/Recovery
في أي خطوة: رسالة خطأ + زر إعادة المحاولة.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
الخلفيات
•	Light: WarmPaper للشاشة، Cards/Steps على CardWhite.
•	Dark: DarkBG للشاشة، Cards/Steps على DarkSurface.
Stepper
•	دوائر 24px
•	Active: Filled + BrandPrimary (Light) / BlueNight (Dark)
•	Inactive: Outline + Slate (Light) / DarkSubtext (Dark)
•	ممنوع الاعتماد على اللون فقط (Filled/Outline إلزامي)
Inputs
•	Radius 14
•	Border default: 2px ControlBorder
•	Focus: Outline 2px + Offset 2px (حسب القاعدة)
•	Error: Border 2px #B3261E + أيقونة ✕ + نص مساعد 13/20
Upload PDF
•	Drop zone كـCard:
o	Radius 18
o	Border 2px ControlBorder (يتحوّل إلى BrandPrimary عند السحب فوقه)
•	Progress:
o	Track = Skeleton
o	Fill = BrandPrimary (Light) / BlueNight (Dark)
o	Label 12/16 للنسبة
AI Label (Step 6)
•	Badge “مولد بالذكاء الاصطناعي”: BrandSoft + Ink + أيقونة i
•	ممنوع MintUI/CopperUI كنص
Buttons
•	Publish: Primary BrandPrimary + OnBrandPrimary
•	Save as Draft: Secondary Border 2px ControlBorder + نص Ink
•	Disabled: Skeleton + Slate
•	Touch: 48×48 للأزرار الأساسية
Motion
•	EaseOutCubic
•	Press 120ms
•	Reduced Motion: Fade فقط ≤120ms
Loading/Recovery
•	Skeleton + Shimmer 1.2s
•	بعد 5s: رسالة حالة + Retry
________________________________________
 STATION 024
المحطة رقم 24: صمّم PDF Reader داخل Paper Page مع أدوات قراءة/بحث/ملاحظات/Highlights ووضع تركيز
صمّم داخل Paper Page زر/مسار “Read PDF” يقود إلى PDF Reader كجزء من حلقة القيمة (Paper → قراءة → Highlight/Notes/Ask). اجعل القارئ عربي/RTL افتراضيًا.
هيكل شاشة القارئ (داخل Paper Page)
Top Bar: رجوع (يعود إلى Paper Page) + عنوان مختصر (اسم الورقة/اختصار) + قائمة (⋯) لأدوات القارئ.
منطقة القراءة: PDF Canvas أساسي.
شريط/لوحة أدوات القراءة (أسفل أو جانب بحسب المساحة):
Page thumbnails مناسبة RTL.
Search داخل PDF.
Highlight (تحديد/تمييز).
Note (إضافة ملاحظة مرتبطة بمقطع).
Bookmark/Save.
Focus Mode (إخفاء كل شيء ما عدا القراءة).
قواعد القراءة
تغيير حجم الخط/التكبير.
حفظ آخر صفحة.
دعم “العودة لنفس الموضع” عند الرجوع.
إضافة IA/Context داخل PDF Reader (ربط القراءة بالتنقّل وعدم الضياع)
- زر ثابت داخل Top Bar: “العودة إلى صفحة الورقة” (Back to Paper Page).
- عند الدخول للقارئ من Paper Page: الرجوع يعيد إلى Paper Page مع الحفاظ على تبويب الورقة الذي كان مفتوحًا.
- عند الدخول للقارئ من Highlight/Link/بحث: افتح القارئ على الصفحة/المقطع المقصود، وأظهر Context Strip صغير أعلى القارئ يوضح: “جئت من Highlight/بحث/مكتبة” + زر “عودة للمصدر”.
- أي انتقال داخل القارئ (بحث داخل PDF/قفز للصفحات) لا يجب أن يكسر زر الرجوع ولا يعيد المستخدم إلى أعلى الورقة.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
قراءة طويلة (Comfort)
•	Light: اجعل سطح القراءة CardWhite، وحولها WarmPaper.
•	Dark: DarkBG للخلفية، DarkSurface للألواح فقط (قلّل تشبع أي أزرق داخل الداكن).
Top Bar
•	Height 56
•	CopperKeyline 2px/48px بجوار العنوان
•	أيقونات 24px Stroke 2px Rounded
Tools
•	Touch targets: 48×48
•	Active: Filled + BrandPrimary (Light) / BlueNight (Dark) — الشكل + اللون معًا
Search داخل PDF
•	Input: Radius 14 + Border 2px ControlBorder
•	Focus rule إلزامي
•	Result highlight (غير معتمد على اللون وحده):
o	خلفية BrandSoft + حد 2px BrandPrimary (Light)
o	خلفية خفيفة على DarkSurface + حد 2px BlueNight (Dark)
Highlights/Notes
•	Highlight “ذو معنى”:
o	خلفية MintUI بعتامة 18% + حد 2px MintText (Light)
o	في Dark: استخدم MintUI بعتامة أقل + حد MintText لضمان الرؤية
•	Notes card: Radius 14 + Border 2px ControlBorder + Typography BodyM
Focus Mode
•	إخفاء الأشرطة: Fade 180ms (Reduce Motion = Fade 120ms فقط)
•	زر خروج ثابت (Quiet) مع Focus واضح
Links داخل الملاحظات
•	BrandPrimary/BlueNight + Underline دائم
________________________________________
 STATION 025
المحطة رقم 25: صمّم لوحة AI داخل القارئ (Summary/Key Points/Ask/Citations/Definitions/Critique) مع ربط الإجابات بمقاطع داخل PDF وزر الإبلاغ عن خطأ
نفّذ داخل القارئ AI Side Panel بتبويبات ثابتة كما في الخطة.
تبويبات اللوحة (Tabs)
Summary (اختيار short/long).
Key Points.
Ask (سؤال/جواب).
Citations/References (استخراج المراجع إن أمكن).
Definitions (مصطلحات وتعريفات).
Critique (نقاط ضعف/قيود مع تحذير وقابلية تعديل).
ربط كل مخرجات AI بمقاطع من الـPDF (Anchors)
في تبويب Ask تحديدًا: إلزامي أن تُرفق الإجابة بمقاطع (صفحة/مقطع) داخل PDF.
عند الضغط على “اذهب للمقطع” ينتقل القارئ إلى الموضع ويُبرز النص.
زر الإبلاغ عن خطأ
أضف زر “إبلاغ عن خطأ” داخل اللوحة يفتح نموذج بلاغ سريع.
Loading/Empty
Skeleton عند التحليل.
Empty state واضح إن لم تتوفر مخرجات بعد.
الربط بما قبل/بعد: هذه اللوحة تعمل فوق القارئ الذي بُني في المحطة 24، وتُغذّي مبدئياً محطات Highlights/Notes/Reports القادمة.
إضافة UX/Context داخل لوحة AI
- كل إجابة يجب أن تُرجع المستخدم إلى مصدرها داخل PDF (صفحة/مقطع) عبر زر واضح: “افتح المقطع في PDF”.
- اعرض “Citations” كقائمة روابط داخلية (Jump links) وليس كنص فقط.
- أضف خيار “افتح في Paper Page” عند الحاجة (للاستشهاد/الحفظ/الإضافة لمجموعة) مع حفظ السياق.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
لوحة AI (Surface)
•	Light: CardWhite + Radius 18 + Padding 16
•	Dark: DarkSurface + Radius 18 + Padding 16
•	Border: 2px ControlBorder (Light) / 2px DarkText 14% (Dark)
Tabs
•	Selected: BrandSoft + Text BrandPrimary
•	Unselected: شفاف + Text Slate
•	Active/inactive ليس لونًا فقط: Selected = Filled/Background + Unselected = Outline/no background
Ask + Anchors
•	زر “اذهب للمقطع” كرابط داخل المتن:
o	BrandPrimary (Light) / BlueNight (Dark)
o	Underline دائم
o	
	أيقونة صغيرة (↗) لتأكيد الدلالة (ليس لون فقط)
•	إبراز المقطع داخل PDF عند الانتقال:
o	BrandSoft + حد 2px BrandPrimary (Light)
o	حد 2px BlueNight (Dark)
o	Fade بعد 1.2s (Reduce Motion = Fade فقط)
Citations/References
•	كل مرجع كرابط: BrandPrimary/BlueNight + Underline دائم
•	ممنوع CopperUI/MintUI كنص صغير
Critique (تحذير واضح)
•	صندوق تحذير:
o	Border 2px CopperText + أيقونة !
o	Background WarmPaper (Light) / DarkBG (Dark)
o	Title Label 12/16
زر الإبلاغ عن خطأ
•	Secondary button: Border 2px ControlBorder + Text Ink + Icon Flag
•	Success feedback: MintText + ✔︎ (لون + شكل)
Focus
•	طبق Focus rule على كل Tabs/Buttons/Inputs داخل اللوحة (بدون ظل).
Loading/Empty
•	Skeleton: Skeleton + Shimmer 1.2s
•	بعد 5s: رسالة حالة + زر “إعادة المحاولة”
•	Empty state: نص واضح + CTA واحد (Quiet/Secondary) دون أي زخارف متكررة
________________________________________
________________________________________
 STATION 026
المحطة رقم 26: صمّم Highlight Creation من داخل القارئ + Highlights Gallery في Paper Page + صفحة Highlight Details + مشاركة
Highlight Creation داخل PDF Reader
من أداة Highlight:
اختيار لون + تصنيف.
بعد التحديد: نافذة إنشاء (Bottom sheet/Side panel) تعرض:
النص المقتطف + رقم الصفحة (pdf_page)
visibility (عام/خاص) بما يطابق مفهوم الخصوصية للهايلايت.
زر حفظ Highlight
زر مشاركة Highlight (صورة مقتطف + رابط + صفحة).
Highlights Gallery داخل Paper Page
داخل Paper Page (قسم مستقل بعد “Above-the-fold” وليس قبل الفهم):
في حالة عدم وجود Highlights: “أضف أول Highlight من PDF”.
Loading: skeleton sections + placeholder for card.
Error: فشل جلب PDF/metadata.
كل بطاقة Highlight في المعرض تعرض: text_snippet + مرجع الصفحة + creator. (الهايلايت ككيان: id, paper_id, pdf_page, text_snippet, created_by, visibility, share_image_ref).
أي بطاقة تفتح Highlight Details.
Highlight Details + المشاركة (لا تعِد التصميم السابق)
استخدم صفحة Highlight Details المصممة سابقًا كما هي، وركّز هنا فقط على الربط والتنقّل:
Context Strip: “Highlight من Paper: [Paper Title]” + أزرار: Open Paper / Read in PDF / (اختياري حسب توفره) Ask Paper (AI).
زر “Open in PDF at page” يفتح القارئ على الصفحة/الموضع.
Share Highlight = رابط + صورة مقتطف.
الربط بما قبل/بعد: الهايلايت تُنشأ من القارئ (24/25) ثم تُعرض داخل Paper Page كـGallery وتُفتح تفاصيلها؛ وفي المحطة 27 سيتم ربط Threads بالتعليقات على الهايلايت دائمًا (بدون نقاش عام).
إضافة تنقّل سياقي داخل Highlights
- في Highlights Gallery داخل Paper Page: كل Highlight يفتح Highlight Details، وفيه Context Strip واضح:
  “من ورقة: …” + “افتح في PDF على الصفحة” + “افتح صفحة الورقة”.
- Related Highlights / See also:
  - اعرض 3–6 عناصر فقط مع سبب ارتباط واحد لكل عنصر (نفس القسم/نفس الوسم/نفس المؤلف…).
- الرجوع من Highlight Details يعيد المستخدم إلى المصدر الصحيح (Gallery أو Feed أو Library) مع حفظ الموضع.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	الخلفيات الافتراضية: Light = WarmPaper للشاشة + CardWhite للبطاقات/الألواح. Dark = DarkBG للشاشة + DarkSurface للبطاقات/الألواح.
•	Bottom sheet/Side panel (نافذة إنشاء الهايلايت): Radius 18، Padding 16، Border 1px ControlBorder (Light) / 1px DarkText بعتامة 14% (Dark).
•	Typography داخل النافذة:
o	النص المقتطف = BodyL 16/28 وزن 400 لون Ink (Light) / DarkText (Dark).
o	رقم الصفحة/الخصوصية/التصنيف = Label 12/16 وزن 600 لون Slate (Light) / DarkSubtext (Dark).
•	قواعد اللون (ممنوع “اللون فقط”):
o	إذا كان اللون يحمل معنى (Public/Private/Category): استخدم MintText/CopperText/BrandPrimary مع أيقونة أو Label (لا تكتفِ بنقطة لون).
o	MintUI وCopperUI ممنوعان كنص صغير داخل أي محتوى/بطاقة/أزرار؛ استخدمهما فقط كنقطة/زخرفة/خط.
•	الأزرار:
o	زر حفظ Highlight = Primary: Background BrandPrimary + Text OnBrandPrimary.
o	زر مشاركة Highlight = Secondary: Border 1px ControlBorder + Text Ink/DarkText.
o	Touch target للأزرار الأيقونية/الخفيفة: 48×48.
•	الروابط داخل أي نص (داخل الهايلايت/التفاصيل/المشاركة): BrandPrimary (Light) / BlueNight (Dark) + Underline دائم.
•	Focus إلزامي لكل عنصر تفاعلي (خصوصًا أداة Highlight نفسها + مفاتيح visibility):
o	Light: Outline 2px BrandPrimary + Offset 2px
o	Dark: Outline 2px BlueNight + Offset 2px
o	ممنوع Focus بالظل.
•	Highlights Gallery داخل Paper Page:
o	بطاقة المعرض: Radius 18، Padding 16، Border 1px ControlBorder بعتامة 45% (Light) / DarkText 14% (Dark).
o	ممنوع Step-Notch في بطاقات المعرض.
o	مؤشر “ذو معنى” (عام/خاص) = Dot 6px: Light MintText / Dark MintUI + أيقونة/Label.
•	Loading/Error: Skeleton color = Skeleton + Shimmer 1.2s، وإذا تجاوز التحميل 5 ثوانٍ: رسالة حالة واضحة + زر إعادة المحاولة.
•	Share Highlight Image: Canvas WarmPaper، إطار زخرفي 2px CopperUI فقط، ولا تضع نصًا فوق زخارف/تدرّج بدون Scrim.
________________________________________
 STATION 027
المحطة رقم 27: صمّم Comments/Threads بحيث تكون مرتبطة دائمًا بورقة/منشور/هايلايت مع احترام إعدادات التعليقات
صمّم نظام Threads كعنصر واجهة متكرر يُستخدم داخل: Paper / Post / Highlight، مع قاعدة ثابتة: النقاش مرتبط بالمحتوى وليس نقاشًا عامًا.
نموذج الارتباط (ContentRef)
كل Comment يجب أن يرتبط بـ content_ref + thread_id + parent_id (للردود).
مكوّنات واجهة الـThread (مشترك)
Header: عدد التعليقات + فرز (الأحدث/الأعلى تفاعلًا إن لزم) + حالة “التعليقات مقفلة/مقيدة”.
Composer: حقل “أضف تعليقًا” + زر إرسال.
قائمة التعليقات: تعليق رئيسي + ردود (Nested).
احترام إعدادات التعليقات
اعرض حالات واضحة عندما تكون التعليقات:
Closed: أظهر رسالة “التعليقات مقفلة” + سبب إن توفر + زر واحد “إبلاغ” (لا تسمح بالكتابة).
Restricted: أظهر “التعليق متاح للحسابات الموثقة/المتابعين/المؤسسة فقط” وفق الإعداد.
Private Thread: إذا كان المحتوى خاصًا، فالتعليقات تظهر فقط لصاحب الحق.
Nested Replies
الردود المتداخلة حتى 3 مستويات؛ بعد ذلك زر “عرض المزيد من الردود”.
Mentions + Links
دعم @mention داخل التعليق (إظهار اقتراحات) + روابط.
الربط بما قبل/بعد: هذا Thread سيُستخدم في محطة 26 للهايلايت، وفي محطة 28-30 للمؤسسات والمحتوى المؤسسي.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Thread Header: خلفية شفافة فوق WarmPaper، Divider سفلي 1px DividerLine. العنوان H3 18/26 وزن 600.
•	Comment Card: Radius 14، Padding 12، Border 1px ControlBorder (Light) / DarkText 14% (Dark).
•	Nested Replies: Indent = 16 لكل مستوى. خط اتصال عمودي 1px ControlBorder بعتامة 45% (Light). بعد 3 مستويات: زر “عرض المزيد من الردود” كرابط Underline دائم.
•	Composer:
o	حقل الإدخال: Border 1px ControlBorder + Focus rule.
o	زر الإرسال: Primary (BrandPrimary + OnBrandPrimary).
o	Disabled: Skeleton + Text Slate.
•	Mentions + Links:
o	الروابط داخل المتن: BrandPrimary/BlueNight + Underline دائم (لا لون فقط).
o	@mention: الاسم كرابط مُسطّر + (اختياري) Badge خفيف Background BrandSoft.
•	Closed/Restricted/Private حالات واضحة بصريًا (لون + شكل):
o	Closed = Warning: CopperText + أيقونة ! + نص BodyS.
o	Restricted = Info: BrandPrimary/BlueNight + أيقونة i + Label.
o	Private = Lock icon + Label (بدون الاعتماد على اللون وحده).
•	أزرار التفاعل داخل التعليق: 48×48 targets، Active = Filled vs Outlined (لا لون فقط) + لون BrandPrimary/BlueNight للحالة النشطة.
•	Reduced Motion: عند تفعيل تقليل الحركة: Fade فقط ≤120ms.
________________________________________
 STATION 028
المحطة رقم 28: صمّم Post Composer (Micro-post) مع Topics + إرفاق Paper/Highlight + Audience + صفحة Post Details
Post Composer (Micro-post)
الدخول: من زر “مساهمة” العام داخل الـShell (Surface 3)، ومن داخل Paper Page/Highlight Details عبر زر “شارك/انشر”.
A) واجهة الإنشاء (Composer)
حقل كتابة النص (محدود الطول) + عدّاد أحرف.
إضافة Topics (Chips) — اختيار 1–3 Topics كحد أقصى.
إرفاق مرجع (اختياري):
إرفاق Paper (paper_id)
أو إرفاق Highlight (highlight_id)
Audience: عام/متابعين/مؤسسة (إن كان المستخدم ضمن مؤسسة).
زر نشر (Publish).
حالات:
Disabled حتى وجود نص أو مرجع.
Loading عند النشر.
Error: فشل النشر + إعادة المحاولة.
B) Post Card في الـFeed
استخدم نفس Card Pattern: Header (Author) + Body (Text) + Meta (Topics/Attached reference) + Actions (Like/Comment/Repost/Save).
إذا كان مرفق Paper/Highlight: اعرض Embedded card صغيرة داخل المنشور تفتح المرجع.
C) صفحة Post Details
فتح منشور واحد مع Thread المرتبط به (المحطة 27).
يجب أن يظهر المرجع المرفق في أعلى التفاصيل كـContext.
الربط بما قبل/بعد: هذا micro-post سيتكامل مع Articles في المحطة 29، ومع Series في المحطة 30 عبر مشاركة/تحديثات مؤسسية.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Composer (واجهة الإنشاء):
o	الخلفية: WarmPaper (Light) / DarkBG (Dark). صندوق الكتابة: CardWhite/DarkSurface + Radius 18 + Padding 16.
o	Border: 1px ControlBorder (Light) / DarkText 14% (Dark).
o	Focus: Outline 2px BrandPrimary أو BlueNight + Offset 2px.
o	عدّاد الأحرف: Label 12/16 لون Slate/DarkSubtext (لا MintUI).
•	Topics Chips: Height 32 + Touch 44×44. Selected = BrandSoft + BrandPrimary. Default = Border 1px ControlBorder.
•	Audience: لا تعتمد على اللون فقط: استخدم أيقونة + Label + حالة Selected (Filled/Outlined).
•	Publish Button: Primary (BrandPrimary + OnBrandPrimary). Disabled = Skeleton + Text Slate.
•	Post Card في الـFeed (Post Card — Clean):
o	Outer Margin 16، Card Padding 16، Radius 18، Background CardWhite/DarkSurface.
o	Border: Light = 1px ControlBorder بعتامة 45% / Dark = 1px DarkText 14%.
o	Header: Avatar 40×40 دائري. Name 15/22 وزن 700. Meta 12/16 لون Slate/DarkSubtext.
o	Body: BodyL 16/28 لون Ink/DarkText، أقصى 6 أسطر ثم “المزيد” كرابط Underline دائم.
o	Actions: Touch 48×48، Icon visual 22px، Active = Filled vs Outlined + لون BrandPrimary/BlueNight.
o	ممنوع Step-Notch وAscend Stripe الطويل داخل بطاقات الـFeed العادية.
•	Embedded Card داخل Post: Background BrandSoft، Border 1px CopperUI (زخرفة فقط)، Radius 14، Padding 12، Title 14/20 وزن 600، Snippet 12/18 سطران.
•	Links داخل المتن/التفاصيل: Underline دائم.
•	Loading/Error: Skeleton + Shimmer 1.2s، وبعد 5s: رسالة حالة + إعادة المحاولة.
________________________________________
 STATION 029
المحطة رقم 29: Article Editor + Article Page
الدخول من المحطة السابقة: من طبقة “المساهمة” (إنشاء محتوى) بعد وجود Post Composer، ومن Profile/Institution عبر تبويب Articles، وباستخدام المكوّنات الجاهزة (App Bar/Buttons/Tabs/Sheets/Cards).
A) Article Editor (V1)
محرر مقالات يدعم:
Title + Subtitle (اختياري)
Cover image (اختياري)
Body (rich text أو markdown مبسط)
Topics: اختيار 1–3 Topics.
References (اختياري): ربط Paper/DOI/روابط خارجية.
Audience: عام/متابعين/مؤسسة.
زر Publish + زر Save Draft.
حالات:
Draft محفوظ + إشعار صغير.
Error في الحفظ/النشر.
Loading عند النشر.
B) Article Card
داخل تبويب Articles وفي الـFeed: بطاقة تعرض: Title + Subtitle snippet + author/institution + Topics + reading time + CTA فتح.
C) Article Page
صفحة قراءة طويلة:
Header: Title + author/institution + meta (وقت/قراءة/Topics).
Body: نص طويل مع روابط ومراجع.
Context: إن كانت مرتبطة بورقة/DOI اعرض Embedded reference card.
Actions: Save / Share / Comment (Thread من المحطة 27).
قواعد القراءة: عرض النص مريح ولا يتحول إلى عمود عريض، مع فواصل واضحة بين الأقسام.
الربط بما قبل/بعد: المقالات ستُستخدم في Series في المحطة 30، وستظهر كنوع محتوى رئيسي في Feed بجانب papers/posts/highlights.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Editor (V1):
o	حقول Title/Subtitle: Inputs بحدود 1px ControlBorder + Focus rule.
o	Title Typography: H1 28/36 700، Body: BodyL 16/28.
o	Draft state: Info (BrandPrimary + أيقونة i) + Label 12/16 (لا تعتمد على اللون فقط).
o	Save Draft: Secondary (Border ControlBorder). Publish: Primary (BrandPrimary + OnBrandPrimary).
•	Article Card:
o	CardWhite/DarkSurface، Radius 18، Padding 16، Border ControlBorder.
o	Title: H3 18/26 600، snippet: BodyM 15/24، meta: Label 12/16.
o	Topics Chips: نفس نظام Chips.
o	CTA فتح: Link مُسطّر أو زر ثانوي (لا لون فقط).
•	Article Page (قراءة طويلة):
o	Background WarmPaper/DarkBG.
o	عرض العمود: عمود واحد مقروء (لا تمدد النص بعرض الشاشة).
o	Section spacing: 24 بين الأقسام.
o	Links داخل المتن: BrandPrimary/BlueNight + Underline دائم.
o	Embedded reference card: Background BrandSoft + Border 1px CopperUI + Radius 14 + Padding 12.
o	Comments: استخدم Thread من المحطة 27 بنفس قواعده.
•	Non-text contrast: Borders/Dividers المهمة (حقول/أزرار/بطاقات تفاعلية) تستخدم ControlBorder، وليس DividerLine.
•	Reduced Motion: Fade فقط عند تفعيل تقليل الحركة.
________________________________________
 STATION 030
المحطة رقم 30: Series (V1) وربطها بـInstitution Page والـFeed
الدخول من المحطة السابقة: بعد وجود مقالات منشورة يمكن تجميعها ضمن Series (V1).
A) صمّم Series داخل قسم Articles
Series List:
قائمة سلاسل (بطاقات): اسم السلسلة + وصف مختصر + عدد المقالات + أحدث مقال.
CTA: “افتح السلسلة”.
B) Series Page
صفحة سلسلة تعرض:
Header: اسم السلسلة + وصف + المؤسسة الناشرة.
قائمة مقالات السلسلة مرتبة زمنيًا (Article cards).
CTA للمؤسسة (متابعة) إن لم يكن متابعًا.
Series Page يجب أن تبدو “تحريرية” أكثر من Feed، لكنها ما زالت منضبطة بنفس Design System.
لا تضف وظائف خارج النص:
لا تضف “محرر” جديد هنا.
لا تضف “اشتراك” خاص بالسلسلة.
فقط العرض والربط والتنقّل.
الربط بما قبل/بعد: هذا سيستعمل إدارة الأعضاء (29) لتمييز المحتوى الصادر عن المؤسسة.
الدخول إلى Series Page.
دون تصميم “Team & Roles” أو Editorial Queue هنا (هذه محطات أخرى).
C) اربط Series بالـFeed
أنشئ نوع بطاقة واحد في Feed للمؤسسات:
Series/Report update card تعرض: اسم السلسلة + عنوان المقال الجديد + CTA “افتح المقال” وCTA “افتح السلسلة”.
لا تضف آليات “اشتراك بالسلسلة” أو تنبيهات هنا (ليست مذكورة في الخطة الخام ضمن Series).
يسلّم للمحطة التالية: كل Article card داخل Series Page يجب أن يدعم زر Save الموحد الذي يذهب إلى Library (تنفيذ واجهة الحفظ في محطة Library).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Series List (بطاقات السلاسل): CardWhite/DarkSurface، Radius 18، Padding 16، Border 1px ControlBorder (Light) / DarkText 14% (Dark).
•	عنوان قسم Series داخل Articles: H3 600 + خط تمييز 2px AscendGradient بطول 48px فقط (لا شريط طويل).
•	CTA “افتح السلسلة”: كرابط مُسطّر (BrandPrimary/BlueNight + Underline دائم) أو زر Secondary حسب النمط المستخدم، مع Focus rule.
•	Series Page (تحريرية منضبطة):
o	Background WarmPaper/DarkBG.
o	أقسام داخل Cards/Sections: Padding 24، Gap 24.
o	Header: H1 28/36 700، وصف BodyM.
o	CTA متابعة المؤسسة: Primary.
•	Article cards داخل Series Page: استخدم نفس Article Card من المحطة 29 حرفيًا مع زر Save (IconButton 48×48، Active = Filled vs Outlined).
•	Hero ثابت لرفع الفرادة بدون كسر القيود (إن طُبّق):
o	يسمح ببطاقة Hero واحدة فقط أعلى Series Page أو أعلى القائمة (لا تتكرر داخل البطاقات).
o	Notch 16×16 (RTL أعلى يمين) + خط CopperUI 2px داخل القصّة.
o	ممنوع تكرار الـNotch خارج هذه الـHero.
•	Series/Report update card في الـFeed:
o	ممنوع زخارف متكررة (لا Ascend Stripe طويل، لا Notch).
o	الروابط داخل المتن: Underline دائم.
o	CTA “افتح المقال/افتح السلسلة”: أزرار Primary/Secondary أو Links مُسطّرة—لا لون فقط.
•	Loading/Error: Skeleton + Shimmer 1.2s، وبعد 5s: رسالة حالة + إعادة المحاولة.
________________________________________
________________________________________
 STATION 031
المحطة رقم 31: Library (Saved Items + Collections + Thesis Workspace + Notes & Highlights)
المحطة رقم 31: Library (Saved Items + Collections + Thesis Workspace + Notes & Highlights)
الدخول من المحطة السابقة: من زر Save على المقالات/السلاسل (ومن بقية المنصة لاحقًا) كنقطة “احتفاظ”.
A) صمّم Library كقسم رئيسي
Saved Items
قائمة محفوظات مجمّعة.
فلاتر نوع المحتوى (على الأقل: Papers / Articles / Highlights).
كل عنصر يفتح صفحته الأصلية (Paper Page / Article Page / Highlight Details).
Collections
قائمة/شبكة Collections.
داخل Collection: عناصر محفوظة + tags + notes per item (كما في Thesis أيضًا).
CTAs: New collection + Add item + Share collection.
Thesis References Workspace
مساحة مخصصة للأطروحة:
أقسام + tags + notes per item
ترتيب/أولوية للعناصر.
Notes & Highlights
قائمة Notes & Highlights مرتبطة بمصدرها مع CTA “اذهب للمصدر”.
B) حالات Library (كما في الخطة الخام)
Empty: “لا توجد عناصر” مع اقتراح import suggestions (Discover → Save).
Loading/Error: Skeleton + Retry.
يسلّم للمحطة التالية: من داخل Library (Saved/Collections/Thesis) ضع نقطة دخول واضحة إلى Research Session (عرض جلسات/العودة لآخر Session) دون تصميم تفاصيلها هنا.
إضافة مواصفات IA/Navigation داخل Library (ملزمة – خارج الهوية البصرية)
1) بنية Library كتنقّل محلي (Local Navigation):
- تبويبات/قائمة داخل Library بالحد الأدنى:
  Saved Items | Collections | Notes & Highlights | Research Sessions | Saved Searches
2) البحث داخل Library:
- شريط بحث محلي داخل Library يبحث داخل Saved/Notes/Highlights (مع فلاتر نوع المحتوى).
3) Breadcrumbs داخل Collections/Thesis Workspace (حيث يوجد هرم):
- مثال: Library > Collections > اسم المجموعة > عنصر
4) قاعدة “اذهب للمصدر” (Contextual Navigation):
- كل Note/Highlight/Saved item يجب أن يحتوي CTA “اذهب للمصدر”.
- عند الضغط: افتح Paper Page/PDF Reader مع شريط سياق يوضح أنه جاء من Library، والرجوع يعيد المستخدم إلى نفس العنصر في Library.
5) قاعدة “ماذا بعد؟”:
- داخل كل تبويب، اعرض وحدة واحدة على الأقل تقود المستخدم لفعل تالي (ابدأ جلسة/احفظ بحثًا/تابع موضوعًا/اقرأ ورقة مقترحة).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1) الأسطح والخلفيات (إلزامي):
•	Light: خلفية الشاشة WarmPaper #F6F3EE دائمًا.
•	Dark: خلفية الشاشة DarkBG #060B14 دائمًا.
•	كل محتوى داخل أقسام Library يكون داخل بطاقات: CardWhite (Light) / DarkSurface #111623 (Dark).
2) Top App Bar (تميّز يومي ثابت):
•	Height 56، Title = H3 18/26 وزن 600.
•	ضع CopperKeyline: خط 2px بلون CopperUI #B05920 بطول 48px ملاصق لعنوان الصفحة (RTL: يمين العنوان).
•	لا تستخدم زخارف إضافية متكررة داخل الصفحة (لتفادي الضجيج).
3) Typography/Spacing/Radii (كما هي v2.4 — ممنوع الخروج عنها):
•	خطوط: IBM Plex Sans Arabic (بديل Noto Sans Arabic UI).
•	أحجام النص داخل Library:
o	العناوين/الأقسام: H2 22/30 أو H3 18/26
o	نصوص العناصر: BodyM 15/24 أو BodyL 16/28
o	Labels/Meta: Label 12/16 وزن 600
•	Grid/Spacing: استخدم فقط 4,8,12,16,24,32,40,48,64
•	Radii: CardRadius 18 — Input 14 — Button 14 — Chip 999
4) Filters/Chips (Saved Items + Tags داخل Collections/Thesis):
•	Height 32 (بصري) + Touch Target 44×44 (غير مرئي حول الشريحة).
•	Default: Border 1px ControlBorder (حد تفاعلي واضح، لا تستخدم 1px باهت).
•	Selected: Background BrandSoft #D6E4FF + Text BrandPrimary #0D47A1.
•	Highlight (إن وُجد): Background CopperUI 12% + Text CopperText #A65520.
5) Lists/Cards داخل Saved/Collections/Thesis/Notes:
•	Card: Radius 18 + Padding 16 (وعند Thesis Sections استخدم Padding 24).
•	Dividers داخل القوائم: DividerLine 1px (#E0DBD4) للفواصل العامة، لكن لحدود العناصر التفاعلية استخدم ControlBorder حتى تحقق تباين non-text واضح.
•	ممنوع Step-Notch داخل بطاقات العناصر العادية (Saved items, notes, rows).
6) عنصر فرادة ثابت بدون ضوضاء (إلزامي لتحسين “التميّز”):
•	ضع في أعلى Library بطاقة واحدة ثابتة (Hero Card) مثل: “تابع آخر Session” أو “اقتراح اليوم للقراءة”.
•	هذه البطاقة فقط مسموح لها بـ Step-Notch (16×16) في الزاوية العلوية (RTL: يمين) مع خط داخلي 2px CopperUI.
•	ممنوع تكرار الـNotch في بقية عناصر الصفحة.
7) الروابط داخل المتن (لا لون فقط):
•	CTA “اذهب للمصدر” داخل نص/قائمة =
o	Light: BrandPrimary + Underline دائم
o	Dark: BlueNight #4A8CFF + Underline دائم
8) Focus/Keyboard (WCAG 2.2):
•	لكل عنصر قابل للنقر (Row/Card/CTA/Chip/Button):
o	Light: Outline 2px BrandPrimary + Offset 2px
o	Dark: Outline 2px BlueNight + Offset 2px
•	ممنوع Focus بالظل.
9) Loading/Empty/Error:
•	Skeleton: لون Skeleton #E0D7CC + Shimmer 1.2s.
•	إذا تجاوز التحميل 5 ثوانٍ: استبدل Skeleton برسالة حالة واضحة + زر Retry.
•	Empty: سطر واحد + CTA واحد (Primary/Secondary)، ممنوع CopperUI كنص صغير.
10) Motion (Micro-interactions مع Reduced Motion):
•	Press: Scale إلى 0.98 ثم رجوع خلال 120ms (EaseOutCubic).
•	Reduced Motion: ألغِ الـScale واجعلها Fade فقط ≤120ms.
________________________________________
 STATION 032
المحطة رقم 32: Research Session (Queue + Notes + Saved filters)
المحطة رقم 32: Research Session (Queue + Notes + Saved filters)
الدخول من المحطة السابقة: من Discover عبر CTA مذكور في الخطة الخام: Start Research Session، ومن Library كنقطة استرجاع/متابعة.
A) إنشاء جلسة من Discover
زر Start Research Session ينشئ Session تحفظ:
Saved filters الحالية
Queue ابتدائية من نتائج البحث الحالية (Top 10)
وقت البدء + اسم Session افتراضي (مثل: “جلسة بحث — التاريخ”).
B) شاشة Research Session (داخل التطبيق)
مكوّنات:
Header: اسم Session + Timer بسيط + زر End session.
Tabs داخل الجلسة: Queue | Notes | Saved filters
Queue: قائمة عناصر (Papers/Articles) مع أزرار: Open / Save / Remove.
Notes: ملاحظات نصية مرتبطة بعناصر Queue، وإمكانية إضافة Note عامة للجلسة.
Saved filters: عرض الفلاتر التي بدأت بها الجلسة مع خيار تعديلها/حفظها/تطبيقها.
C) الخروج والتسليم
عند End session: احفظ ملخص (عدد العناصر، عدد الملاحظات، أهم 3 مصادر محفوظة) + اعرض CTA “حفظ كـCollection داخل Library”.
حالات: Loading/Empty/Error كما في النظام العام.
إضافة سلوك IA/Context داخل Research Session
- زر/CTA واضح: “حوّل الجلسة إلى Collection” (يحفظ Queue + Notes في مجموعة).
- دعم Saved filters: حفظ فلتر/استعلام الجلسة كـSaved Search (يرتبط بمحطة 33).
- توصيات الجلسة (إن وجدت) يجب أن تكون مُعلّلة (سبب واحد لكل اقتراح).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1) نفس نظام الأسطح: WarmPaper/CardWhite (Light) — DarkBG/DarkSurface (Dark).
2) Header (تمييز “جلسة” بدون زخرفة مكررة):
•	Header داخل CardRadius 18.
•	استخدم AscendGradient فقط كخط تمييز 2px بطول 48px داخل الهيدر (وليس خلف نص).
•	Title = H3 18/26 600. Timer = Label 12/16 (Slate/DarkSubtext).
3) Tabs داخل الجلسة:
•	Label 12/16 600 كحد أدنى.
•	الحالة النشطة لا تعتمد على اللون فقط: Underline/Indicator + (Filled icon أو وزن أعلى)
•	Light: BrandPrimary / Dark: BlueNight.
4) Queue rows + Actions (Open/Save/Remove):
•	كل Row: List Row داخل CardWhite/DarkSurface مع DividerLine للفواصل.
•	Touch لكل action = 48×48، Icon visual = 20–22px.
•	Active state = Filled vs Outline (لا لون فقط).
5) Notes:
•	النص: BodyM 15/24 أو BodyL 16/28، Line-height عربي ≥ 1.5×.
•	أي رابط داخل Note = underline دائم (BrandPrimary/BlueNight).
•	إدخال الملاحظات: InputRadius 14 + Border 1px ControlBorder + Focus rule.
6) زر End session وCTA الحفظ:
•	Primary: BrandPrimary + OnBrandPrimary، ButtonRadius 14.
•	ممنوع Notch عليه.
7) Reduced Motion:
•	تبديل Tabs/قوائم: 180ms؛ Reduced Motion = Fade فقط ≤120ms.
________________________________________
 STATION 033
المحطة رقم 33: Saved Searches + Alerts (V1) داخل Discover/Library وربطها بالإشعارات
المحطة رقم 33: Saved Searches + Alerts (V1) داخل Discover/Library وربطها بالإشعارات
الدخول من المحطة السابقة: من Discover (بعد تطبيق فلاتر/بحث) أو من Research Session (Saved filters).
A) Saved Searches داخل Discover (V1)
زر Save Search يظهر عندما يوجد استعلام/فلاتر.
نافذة/Sheet: اسم البحث + تفعيل Alerts (V1) + اختيار تكرار بسيط (مثل: أسبوعي/يومي) كما ورد “Alert frequency”.
B) Saved Searches داخل Library (V1)
قسم Saved Searches يعرض: اسم البحث + آخر تشغيل + حالة Alerts.
CTAs: Run search + Edit + Delete.
C) الربط مع Notifications
إذا Alerts مفعّلة: عند وصول نتائج جديدة، أرسل إشعار داخل Notifications Center تحت تبويب System أو Paper activity بحسب نوع النتائج.
إضافة تعريف وتشغيل Saved Searches + Alerts (V1) داخل التجربة
1) نقطة الإنشاء:
- من Discover: زر “حفظ هذا البحث”.
- من Library: تبويب “Saved Searches” يعرض القائمة.
2) نموذج الحفظ:
- اسم البحث (افتراضيًا من الاستعلام/الموضوع).
- Alert frequency: Off/Daily/Weekly.
- زر تفعيل/إيقاف Alerts لكل بحث.
3) التشغيل:
- عند وصول نتائج جديدة: إشعار داخل Notifications Center.
- فتح الإشعار يفتح Discover على نفس الاستعلام + نفس الفلاتر + Chips ظاهرة، مع سطر “نتائج جديدة لهذا البحث المحفوظ”.
4) إدارة القائمة:
- تشغيل/إيقاف، تعديل الاسم، حذف.
- عرض آخر تشغيل/آخر تحديث للبحث.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1) Save Search Button (سياقي):
•	Secondary افتراضي: Border 1px ControlBorder + Text Ink/DarkText.
•	داخل Sheet عند التأكيد: Primary BrandPrimary + OnBrandPrimary.
2) Sheet/Modal:
•	Background: CardWhite (Light) / DarkSurface (Dark)
•	Motion: Panel 220ms؛ Reduced Motion = Fade فقط ≤120ms.
3) Inputs داخل Sheet:
•	Border 1px ControlBorder
•	Focus: Outline 2px + Offset 2px
•	Error: Border #B3261E + ✕ + Helper 13/20
4) Alert frequency controls:
•	إن كانت Chips/Radio: Touch 44×44، Selected = BrandSoft + BrandPrimary، ولا تعتمد على اللون فقط (أضف Filled/Outline).
5) Saved Searches list داخل Library:
•	Rows واضحة: DividerLine للفواصل العامة، وControlBorder لإطار العناصر التفاعلية (non-text contrast واضح).
•	Status “Alerts On/Off”:
o	مؤشر ذو معنى = نقطة 6px
o	Light: MintText (وليس MintUI)
o	Dark: MintUI
6) الروابط داخل المتن:
•	Run search كنص = underline دائم (BrandPrimary/BlueNight).
________________________________________
 STATION 034
المحطة رقم 34: Newsletter/Digest (Subscribe + Archive + Issue Editor للمؤسسات في MVP)
المحطة رقم 34: Newsletter/Digest (Subscribe + Archive + Issue Editor للمؤسسات في MVP)
الدخول من المحطة السابقة: من Institution Page (تبويب Subscribe) ومن Settings (Subscriptions) كنقطة إدارة، ومن Feed عبر بطاقات المؤسسة (عند توفرها لاحقًا).
A) صفحة Newsletter للمؤسسة
Subscribe
زر Subscribe button واضح.
وصف مختصر للنشرة + frequency + أمثلة موضوعات.
Archive
قائمة أعداد سابقة (Issue list) مع: عنوان + تاريخ + قراءة.
B) إدارة الاشتراكات للمستخدم
Settings → Subscriptions: قائمة نشرات مشترَك بها + زر Unsubscribe + تفضيلات Digest (frequency).
C) Issue Editor للمؤسسة (MVP)
داخل Institution Admin: إنشاء Issue بسيط: Title + Body + إدراج روابط لمقالات/أبحاث من داخل المنصة.
زر Send (تأكيد قبل الإرسال).
حالات: Loading/Empty/Error كما في النظام العام.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1) طابع تحريري دافئ (للتميّز):
•	Light: WarmPaper افتراضي، وكل أقسام Subscribe/Archive داخل Cards CardWhite.
2) Subscribe button:
•	Primary: BrandPrimary + OnBrandPrimary
•	هالة خفيفة فقط: AscendGradient opacity 10–14% خلف الزر (بدون نص فوق التدرج).
3) Archive list:
•	Issue title: BodyM 15/24 أو H3 حسب السياق
•	Date/meta: Label 12/16
•	“قراءة” كنص رابط = underline دائم (BrandPrimary/BlueNight).
4) Issue Editor:
•	Inputs: InputRadius 14 + Border 1px ControlBorder + Focus rule
•	Send confirmation: Modal بنفس قواعد Sheet، مع Primary/Secondary فقط.
5) Badges (مثل “نشرة رسمية”):
•	CopperUI يستخدم كحد/زخرفة فقط، والنص داخل الشارة يكون Ink/OnColor (ممنوع CopperUI كنص صغير).
________________________________________
 STATION 035
المحطة رقم 35: صمّم Notifications Center (تبويبات Mentions/Paper activity/Follows/Editorial/System) + إعدادات Digest
المحطة رقم 35: صمّم Notifications Center (تبويبات Mentions/Paper activity/Follows/Editorial/System) + إعدادات Digest
تعريف المنتج داخل هذه المحطة (سطر واحد للتثبيت): TaraqqiClub منصة عربية هجينة: Feed وتفاعل + هوية مهنية + صفحات أبحاث/ملفات—كلها في تجربة واحدة يومية.
1.	شاشة Notifications Center (قائمة إشعارات موحّدة)
صمّم شاشة مركز الإشعارات بواجهة RTL وبـ Tabs ثابتة كما يلي: Mentions | Paper activity | Follows | Editorial | System
Mentions: إشعار عند Mention داخل تعليق/منشور/مقال (عنصر إشعار: من قام + أين + مقتطف + CTA “فتح”).
Paper activity: إعجاب/تعليق/حفظ/اقتباس على ورقة.
Follows: متابع جديد/قبول مؤسسة/اقتراح متابعة.
Editorial: رسائل مراجعة/اعتماد/رفض من المؤسسة أو الإدارة.
System: تنبيهات عامة (Digest، تحديثات، سياسات).
2.	سلوك الإشعارات
Unread واضح (Badge/Indicator).
ضغط الإشعار يفتح الوجهة الصحيحة (Paper Page / Comment thread / Profile / Institution Admin).
CTA “Mark all as read”.
تحديثات سلوك الإشعارات (Contextual + Explainable)
- كل إشعار يجب أن يوضح سبب وصوله بإشارة صغيرة داخل الصف:
  مثال: “بسبب متابعتك لموضوع…”، “بسبب بحث محفوظ…”
- إشعارات Alerts الخاصة بـSaved Searches:
  - تفتح Discover مباشرة على الاستعلام + الفلاتر + Chips.
  - تعرض سطرًا أعلى النتائج: “نتائج جديدة لهذا البحث المحفوظ”.
- الرجوع من الوجهة يعود إلى تبويب الإشعارات الذي جاء منه المستخدم، مع الحفاظ على موضعه.
3.	إعدادات Digest
داخل Notifications أو Settings:
Digest frequency (Off / Daily / Weekly).
Mute categories (Mentions / Paper activity / Follows / Editorial / System).
حالات: Loading/Empty/Error كما في النظام العام.
مهم: Alerts الخاصة بـ Saved Searches تُظهر Indicator وترسل تنبيه ليظهر هنا (لا تعيد تصميم Saved Searches)
يسلّم للمحطة 36: كل “Digest settings” و”إعدادات الإشعارات” ستكون جزءًا من Settings كصفحات فرعية.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
1) Tabs:
•	Label 12/16 600
•	Active: BrandPrimary (Light) / BlueNight (Dark) + Underline/Indicator مع دعم غير لوني (Filled/Outline أو وزن أعلى).
2) Unread indicator (non-text):
•	نقطة 6px (وليس 4px)
•	Light: MintText / Dark: MintUI
•	لا تعتمد على لون فقط لتمييز “غير مقروء”: أضف أيضًا وزن/أسلوب (مثلاً عنوان أثقل أو علامة صغيرة).
3) Rows والفواصل (Non-text contrast):
•	استخدم DividerLine للفواصل العامة.
•	لأي حد يوضّح عنصر تفاعلي/زر/حقول داخل الإعدادات: ControlBorder (لا تستخدم 1px باهت).
•	Touch targets للأزرار داخل الصفوف: 44×44 على الأقل (وأيقونات 48×48 إذا كانت Icon Buttons).
4) الروابط داخل مقتطفات الإشعار + CTA “فتح”:
•	underline دائم (BrandPrimary/BlueNight)، ممنوع اللون وحده.
5) Focus/Keyboard (إلزامي):
•	على كل Notification Row + Mark all as read + عناصر Mute/Digest:
o	Light: Outline 2px BrandPrimary + Offset 2px
o	Dark: Outline 2px BlueNight + Offset 2px
6) Mark all as read:
•	Secondary: Border 1px ControlBorder + Text Ink/DarkText + Icon 20px (Touch 44×44).
7) Digest settings + Mute categories:
•	إن كانت Switches: الحالة لا تعتمد على اللون فقط (Switch + نص الحالة).
•	إن كانت Chips: طبق نظام Chips نفسه (Touch 44×44).
8) Motion:
•	فتح إشعار للوجهة: 220ms؛ Reduced Motion = Fade فقط ≤120ms.
9) Loading/Empty/Error:
•	Skeleton + Shimmer 1.2s، وبعد 5s: رسالة حالة + Retry.
•	Empty داخل كل تبويب: سطر واحد + CTA واحد، مع الحفاظ على WarmPaper + CopperKeyline أعلى الصفحة.
________________________________________
 STATION 036
المحطة رقم 36: صمّم Settings: Privacy & Safety + Comment Controls + Repost Controls + AI Preferences + Subscriptions + Language/Region
صمّم Settings Home مقسّم إلى 6 أقسام (قائمة عناصر، كل عنصر يفتح شاشة فرعية)، وفق مكوّنات الخطة:
Privacy + Comment controls + Repost controls + AI preferences + Newsletter subscriptions + Language
1.	Settings Home (قائمة)
عناصر القائمة بالترتيب المنطقي:
Privacy & Safety
Comment Controls
Repost Controls
AI Preferences
Subscriptions
Language/Region
لكل عنصر: عنوان + وصف سطر واحد + قيمة مختصرة (مثلاً “Profile: Public”).
2.	شاشة Privacy & Safety
طبّق التالي حرفيًا كمفاتيح/اختيارات:
Profile visibility (مستوى رؤية الملف الشخصي)
Content visibility defaults (الافتراضي لنشر المحتوى)
Safety basics كعناصر وصول سريعة (Block / Mute / Restrict) ضمن “إدارة الأمان” لأن الخطة تنص على حظر/كتم/تقييد
هذه الشاشة لا تنشئ DM ولا تفتحه (ليس ضمن هذه المحطة).
3.	شاشة Comment Controls
اختيار واحد رئيسي: السماح بالتعليقات من:
Verified only / Followers / Off
أضف خيار “تطبيق على المحتوى السابق” كتبديل (Apply to existing content) لأن التحكم قد يُطبّق فورًا (سلوك إعدادات).
4.	شاشة Repost Controls
مفاتيح واضحة:
السماح بإعادة المشاركة (On/Off)
السماح بالـQuote Repost (On/Off)
(الخطة ذكرت Repost controls دون تفريعات إضافية)
5.	شاشة AI Preferences
طبّق الثلاثة التالية كخيارات مباشرة:
show/hide AI drafts
allow AI suggestions
report feedback (مسار يفتح نموذج Feedback/Report خاص بالـAI)
6.	شاشة Subscriptions
هذه شاشة “إدارة اشتراكات النشرات” كنقطة دخول متسقة مع المنجز:
قائمة اشتراكات (Institutions/Newsletters) + حالة الاشتراك + CTA فتح الأرشيف/إلغاء/إعادة تفعيل.
اربطها مباشرة بما تم إنجازه في محطة Newsletter: “من Settings: Newsletter subscriptions تقود لإدارة اشتراكات النشرات”
7.	شاشة Language/Region
لغة الواجهة: Arabic default + خيار mixed UI controls
Region (اختياري) + timezone (قيمة عرض فقط/اختيار) بما يتسق مع تفضيلات المحتوى لاحقًا.
8.	تسليم واضح لما قبل/بعد
مدخل من المحطة 35: زر Digest settings في Notifications يفتح هنا (داخل Subscriptions أو قسم Digest داخل Settings).
يسلّم للمحطة 37: “content visibility defaults” و”comment/repost defaults” ستُستخدم كقواعد رؤية/صلاحيات عبر كل الشاشات.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Settings Home background (Light): WarmPaper / (Dark): DarkBG
•	Sections as Cards: CardWhite (DarkSurface في الداكن) + CardRadius=18 + Padding=16
•	Dividers/Lines: 1px Line بعتامة 45% على الفاتح + 1px DarkText بعتامة 14% على الداكن (لا تستخدم خطوط باهتة أقل من ذلك)
•	أي رابط داخل وصف/شرح: BrandPrimary (فاتح) / BlueNight (داكن) + Underline دائم
•	أي عنصر تفاعلي (Row/Switch/Radio/CTA): Touch target ≥ 44×44
•	Focus (إلزامي): Outline 2px BrandPrimary (فاتح) / BlueNight (داكن) + Offset 2px (بدون ظل)
•	Toggles/Radio: الحالة النشطة لا تُعبّر باللون وحده: Filled/Outlined + علامة/نقطة داخلية واضحة
•	ألوان الحالة داخل Settings (إن ظهرت): Success=MintText+✔︎ / Warning=CopperText+! / Error=#B3261E+✕
________________________________________
 STATION 037
المحطة رقم 37: طبّق نظام الرؤية/الصلاحيات لكل محتوى وروابط المشاركة عبر كل الشاشات
1.	مستويات الرؤية الموحدة (Global)
عرّف نموذج رؤية واحد يُستخدم لكل أنواع المحتوى:
public / followers / topic-only / private
وأضف توسعة عند الحاجة للأبحاث/الملفات: Public/Private/Subscribers/Institution
2.	أين يظهر اختيار الرؤية (بدون إعادة تصميم الشاشات السابقة)
Micro-post: خيار Audience = Public / Followers / Topic-only موجود كحقل تصميمي ثابت
Paper (ورقة/ملف): Availability badge واضح + قواعد وصول (قد تكون Metadata-only عند المنع)
أي محتوى “Share” يجب أن يلتزم بالرؤية.
3.	قواعد روابط المشاركة (Share Links)
صمّم سلوك روابط المشاركة كالتالي:
إذا المحتوى Public: الرابط يفتح المحتوى كاملًا.
إذا Followers/Topic-only:
غير المسجّل/غير المصرّح: صفحة “غير متاح” + CTA “تسجيل الدخول/متابعة” بحسب الحالة.
إذا Private: الرابط لا يعرض المحتوى؛ يظهر “غير متاح” فقط.
للأبحاث مع Subscribers/Institution: إذا غير مشترك → اعرض Metadata فقط (بدون PDF) وفق القاعدة
4.	قاعدة مشاركة الـHighlight
عند مشاركة Highlight يجب أن يحتوي الرابط على Paper Page + page reference
(مع احترام Availability الخاص بالـPaper: قد يتحول لMetadata-only إذا غير مسموح).
5.	تسليم واضح لما قبل/بعد
مدخل من المحطة 36: “content visibility defaults” تُحدد القيم الافتراضية لكل Composer/إنشاء محتوى.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Audience selector يظهر كـ Chips: Height 32 (بصري) + Touch ≥44×44 + Radius=999
o	Default: Border 1px Line (45%) + Text Ink
o	Selected: Background BrandSoft + Text BrandPrimary
•	Availability badge: ممنوع MintUI/CopperUI كنص صغير — استخدم MintText/CopperText للنص + أيقونة (لون + شكل)
•	صفحة “غير متاح”: WarmPaper + CardWhite Radius 18 Padding 24
o	CTA Primary: BrandPrimary + OnBrandPrimary
o	CTA Secondary: Border 1px Line (45%) + Text Ink
•	أي روابط داخل النصوص (بما فيها “تسجيل الدخول/متابعة”): Underline دائم
•	Focus: طبق Focus rule حرفيًا على Audience/CTA/Share actions
________________________________________
 STATION 038
المحطة رقم 38: طبّق حوكمة AI عبر كل نقاط الـAI (وسم المخرجات + قابلية التعديل + زر Report + منع النسخ بدون إسناد)
1.	“قالب حوكمة AI” موحد (UI Pattern) يُركّب أينما ظهر AI
في أي مكان تظهر فيه مخرجات AI (Research Card/Ask/اقتراحات منشورات…):
وسم واضح: “مولّد آليًا”
حالة “تم تحريرها؟” (Edited by owner indicator).
زر “Report AI error” ظاهر دائمًا.
قبل الإرسال/النشر: AI output = Draft قابل للتعديل (خصوصًا Research Card قبل النشر)
2.	منع النسخ بدون إسناد (Copy with Attribution)
طبّق قاعدة المنتج: أي زر Copy لمخرجات AI ينسخ تلقائيًا Link/Citation (ليس نصًا خامًا فقط)
3.	Ask (AI Q&A) — شرط الإسناد داخل الـPDF
كل إجابة يجب أن تعرض page/snippet كمصدر داخل الورقة
إذا لا توجد مصادر: تظهر رسالة “لا أستطيع الإسناد لهذه الإجابة” بدل اختلاق
النقر على citation anchor يفتح الـPDF على الصفحة المقصودة
4.	تسليم واضح لما قبل/بعد
مدخل من المحطة 37: أي Copy/Share/عرض AI يلتزم بنظام الرؤية والصلاحيات.
يسلّم للمحطة 39: زر Report الموجود في كل نقاط AI يجب أن يفتح نفس “Report Flow” الموحّد.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	وسم “مولّد آليًا”: Chip (Height 32, Radius 999) Background BrandSoft + Text Ink + Icon (Stroke 2px)
•	“Edited by owner”: Label 12/16 Slate + Icon قلم (ليس لون وحده)
•	زر “Report AI error”: BrandPrimary/BlueNight + Underline دائم + Touch ≥44×44
•	Copy with Attribution: Toast/Snackbar على CardWhite (DarkSurface) Radius 14 + Success MintText+✔︎
•	Citations داخل المتن: BlueNight/BrandPrimary + Underline دائم + ترقيم مرجعي [1] (ليس لون وحده)
•	ممنوع نص فوق Gradient/Textures داخل طبقات AI/Citations
•	Reduced Motion: عند التفعيل ألغِ Scale/Slide في إشعارات AI والاكتفاء بـ Fade ≤120ms
________________________________________
 STATION 039
المحطة رقم 39: صمّم Report Flow (اختيار سبب + دليل + إرسال + Case Status) كنقطة موحّدة من كل أنواع المحتوى
1.	نقطة دخول موحّدة “Report”
أضف خيار Report داخل قائمة (⋯) لكل أنواع المحتوى (Post/Comment/Highlight/Paper/Article/Profile…)، بدون إعادة تصميم تلك الشاشات: فقط أضف نقطة الوصول.
2.	خطوات الـFlow (4 شاشات/خطوات)
Step 1: اختيار السبب
قائمة أسباب مختصرة (حسب الخطة): abuse / copyright / impersonation / spam
(اعرضها كـRadio list + وصف سطر واحد لكل سبب.)
Step 2: إضافة دليل (اختياري)
حقل نص + رفع/إرفاق (اختياري) “إضافة دليل”.
Step 3: إرسال
زر Submit + تأكيد استلام.
Step 4: Case Status
شاشة “متابعة حالة البلاغ” مع: رقم الحالة + الحالة الحالية (open / in review / resolved)
قائمة Timeline بسيطة (تم الاستلام → قيد المراجعة → تم اتخاذ إجراء).
3.	قواعد UX داخل شاشة البلاغ
لا تُثقل المستخدم بنصوص قانونية؛ اشرح “ما الذي سيحدث الآن” بجملة واضحة
حماية المبلّغ: لا تعرض هويته في أي مكان داخل واجهة المتابعة
4.	تسليم واضح لما قبل/بعد
مدخل من المحطة 38: زر Report AI error يفتح نفس هذا الـFlow مع preselect سبب مناسب (مثلاً “محتوى مضلل/خطأ”).
مخرج إلى Notifications (المحطة 35): عند اتخاذ قرار في البلاغ يجب توليد إشعار System “بلاغ/قرار” (لا تعيد تصميم الإشعار هنا؛ فقط اربط الحدث).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Step cards: CardWhite/DarkSurface + Radius 18 + Padding 16/24 (حسب الخطوة)
•	Radio list: الحالة النشطة = Filled + علامة داخلية + Label واضح (لا لون وحده)
•	Borders/Dividers: 1px Line (45%) للفصل + حقول الإدخال تعتمد Focus rule (Outline 2px + Offset 2px)
•	Timeline (Case Status):
o	الخط/المسار 2px خافت من Line
o	النقاط 4px: إذا كانت “ذات معنى” على الفاتح استخدم MintText (لا MintUI)
•	أزرار Submit/Back:
o	Primary: BrandPrimary + OnBrandPrimary
o	Secondary: Border 1px Line (45%) + Text Ink
•	أي روابط/معلومات إضافية داخل المتن: Underline دائم
•	حماية المبلّغ بصريًا: لا تُظهر Avatar/اسم/Handle إطلاقًا داخل Case Status UI
________________________________________
 STATION 040
المحطة رقم 40: صمّم Admin/Moderation Console
المدخل: اعتمد أن Report Flow موجود ويُنتج “Case Status” للمستخدم، والآن صمّم لوحة الإدارة التي تستقبل الحالات وتدير القرار والتنفيذ.
1.	هيكل اللوحة (Modules كما هي)
ابنِ لوحة واحدة بواجهة قائمة جانبية + مساحة عمل، وتحتوي “بالضبط” على الوحدات التالية:
Verification Review
Reports Queue (triage)
Content Actions: hide/limit/ban
Topic/Tags management (merge synonyms)
Trending curation (MVP)
2.	Verification Review (باحث/مؤسسة)
شاشة “طابور طلبات التوثيق”: قائمة/جدول مع فلاتر الحالة + بحث.
شاشة “تفاصيل الطلب”: عرض الأدلة + اتخاذ قرار (قبول/رفض/طلب معلومات إضافية) + ملاحظات داخلية + سجل قرار.
شرط مخرجات التوثيق: عند القبول يجب أن يظهر badge على الملف وكل المحتوى السابق (هذا مذكور كمعيار قبول).
3.	Reports Queue (triage) + Case Workspace
شاشة طابور البلاغات مع فلاتر “سبب البلاغ” و“نوع المحتوى” و“حالة القضية”.
triage أسباب البلاغ الأساسية: abuse / copyright / impersonation (كما ورد في تدفق الإدارة).
شاشة “قضية” موحدة (Case Workspace):
معاينة المحتوى + سياق ظهوره
تفاصيل البلاغ + الدليل
سجل الإجراءات/القرارات
حالات القضية: يجب أن يستطيع Admin تغيير حالة البلاغ open / in review / resolved.
4.	Content Actions (تنفيذ القرار)
داخل شاشة القضية وفوق المعاينة، وفّر إجراءات القرار كما وردت:
Hide / Limit / Ban (مع سبب واضح وسجل قرار داخلي).
عند قرار الإخفاء: يجب إخفاء المحتوى عن Feed والبحث مع بقاء سجل قرار داخلي.
عند حظر مستخدم: تعطيل نشره وتقييد تفاعلاته فورًا.
5.	Topics/Tags Management
شاشة إدارة Topics + Tags مع قدرة “دمج المرادفات” (merge synonyms) كوظيفة أساسية.
أي Merge يجب أن يطلب تأكيد + يحدّث المرجع إلى Topic/Tag الموحّد.
6.	Trending curation (MVP) + Policy
شاشة تنظيم الترند (MVP) لفرض “ترند مقنن” (سياسات ضبط الجودة تُدار هنا).
Policy داخل اللوحة: عقوبات تدريجية + سجل قرار + حق استئناف (V1) (اعرضها كقسم نصي/إجرائي داخل Console، وليس كتجربة مستخدم عامة).
المخرج: هذه اللوحة تضبط “Trending curation” وتضمن استبعاد/تقييد العناصر المخالِفة؛ المحطة 41 ستطبّق منطق For You/Trending وأدوات التحكم للمستخدم داخل الـFeed والمواضيع.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Layout: Sidebar + Workspace على WarmPaper (Light) / DarkBG (Dark)
•	Sidebar surface: CardWhite/DarkSurface + Divider 1px Line (45%) لضمان Non-text contrast
•	Tables/Queues:
o	Row height ≥44px
o	Grid lines: 1px Line (45%) (Light) / 1px DarkText (14%) (Dark)
o	Headings: Label 12/16 600 (Slate/DarkSubtext)
o	Body: BodyM 15/24 Ink/DarkText
•	Search/Filters: InputRadius=14 + Border 1px Line (45%) + Focus rule (Outline 2px + Offset 2px)
•	Case Workspace: Cards Radius 18 Padding 16/24 + Actions bar ثابتة فوق المعاينة
•	Status controls (open / in review / resolved): لا تعتمد على اللون وحده (Chip + Icon + Text)
•	Actions (Hide/Limit/Ban):
o	Ban/Destructive: #B3261E + Icon ✕ + نص واضح (ليس لون فقط)
o	Hide/Limit: Button states وفق Primary/Secondary + سجل قرار داخلي داخل Card ثابت
•	Verification badge عند القبول: Badge (Icon + Label) على BrandSoft + BrandPrimary (ممنوع CopperUI كنص صغير)
•	Trending curation (MVP): أي روابط داخل Policy text = Underline دائم + BlueNight/BrandPrimary
•	Reduced Motion: تنقل الوحدات/تحديث الحالات = Fade فقط عند تفعيل تقليل الحركة
________________________________________
 STATION 041
المحطة رقم 41: طبّق منطق Trending/For You + أدوات تحكم شفافة للمستخدم
المدخل: اعتمد أن Admin Console قادر على ضبط الترند وإدارة Topics/Tags والبلاغات؛ الآن طبّق “الترتيب + الشفافية + التحكم” للمستخدم في الواجهة.
1.	Trending/For You كما ورد في الـFeed
داخل Home Feed: تبويبات Following | For You | Trending.
Trending في MVP: ترند مقنن (مواضيع/أوراق) مع فلترة “جودة/توثيق” لتفادي ترند يضر السمعة.
2.	إشارات الترتيب (Ranking Signals) كما هي
طبّق إشارات الترتيب الأساسية في For You/Trending (بدون شرح تقني داخل التصميم، فقط كمنطق واجهة):
الاهتمامات + المتابعات + جودة المحتوى (اكتمال بيانات الورقة/توثيق) + التفاعل المعرفي (Saves أهم من Likes، فتح PDF ووقت القراءة، تعليقات ذات مراجع) + الحداثة + التنوع.
For You score بالأوزان المبسطة كما وردت: 35% اهتمامات، 25% جودة/توثيق، 20% قراءة/حفظ، 15% حداثة، 5% تنوع/استكشاف.
3.	أدوات التحكم الشفافة (Controls) داخل الـFeed والمواضيع
على بطاقات الـFeed (وفي صفحات المواضيع حيث يظهر محتوى مماثل) ضع:
زر Why this? ظاهر بوضوح.
خيارات التحكم الأربع كما وردت نصًا:
“أقل من هذا الموضوع”
“أكثر من هذا الموضوع”
“إخفاء محتوى هذا الباحث”
“Why this?” (شفافية)
تصميم “Why this?” (واجب): اعرض أسباب مبسطة مشتقة من الإشارات أعلاه (اهتمام/متابعة/جودة/قراءة-حفظ/حداثة/تنوع) + أزرار التحكم نفسها داخل نفس الطبقة.
إضافة شرط شفافية “Why this?” على مستوى الخلاصة وليس البطاقة فقط
- في For You/Trending أضف إعدادًا داخل Top Bar أو ضمن “Why this?” يسمح للمستخدم بتقليل/زيادة نوع محتوى معيّن (Papers vs Micro-posts) مع حفظ التفضيل.
- اجعل “Why this?” يذكر السبب الأقوى (متابعة/ترند/بحث محفوظ/موضوع مرتبط) في سطر واحد.
4.	قواعد مضادة للسبام تؤثر على العرض
طبّق قواعد العرض التالية لأنها جزء من منطق الثقة/الترتيب:
خفض رتبة micro-posts غير المرتبطة بورقة/موضوع.
حدّ نشر يومي لغير الموثقين.
تجميد حسابات تتلقى بلاغات متعددة حتى مراجعة.
معيار جودة إضافي: Trending يستبعد المحتوى المبلّغ عنه قيد المراجعة.
المخرج: بعد أن أصبحت الخلاصة “قابلة للفهم والتحكم”، انتقل لمنع فراغ المحتوى عند الإطلاق عبر واجهات داخل التجربة (Cold Start) في المحطة 42.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
A) مرجع Tokens (استخدمها كما هي)
•	BrandPrimary #0D47A1 — BrandDeep #06152B — BrandSoft #D6E4FF — WarmPaper #F6F3EE — CardWhite #FFFFFF
•	CopperUI #B05920 (زخرفة/خطوط فقط) — MintUI #00B3A4 (هالات/مؤشرات غير نصية فقط)
•	CopperText #A65520 — MintText #00796B (مسموحة للنص)
•	Ink #0B1220 — Slate #22324A — Skeleton #E0D7CC
•	DividerLine #E0DBD4 (فواصل ثانوية) — ControlBorder #8A7C6E (حدود/فصل وظيفي)
•	DarkBG #060B14 — DarkSurface #111623 — DarkText #F2F5FA — DarkSubtext #B9C2D0 — BlueNight #4A8CFF
B) تطبيق مباشر على هذه المحطة
•	خلفية Home Feed (Light) = WarmPaper دائمًا. Cards = CardWhite. النص الأساسي = Ink.
•	Top App Bar: Height 56 + Title H3 18/26 وزن 600 + CopperKeyline 2px CopperUI بطول 48px بجوار العنوان دائمًا (ثابت في كل شاشة رئيسية).
•	Tabs (Following | For You | Trending):
o	Label 12/16 وزن 600، Padding أفقي 16.
o	Active: لون BrandPrimary (Light) / BlueNight (Dark) + Underline سفلي 2px.
o	ممنوع تمييز Active باللون وحده: اجعل Active أيضًا Filled indicator (مثلاً شريط 2px) + وزن 600، وغير النشط وزن 500.
•	زر Why this?:
o	يظهر كرابط داخل البطاقة: BrandPrimary/BlueNight + Underline دائم (إلزامي داخل المتن).
o	يفتح Bottom Sheet: مدة 220ms، Reduced Motion = Fade فقط ≤120ms.
•	أزرار التحكم الأربع داخل نفس طبقة Why this:
o	Touch target لكل خيار ≥ 44×44.
o	Focus (إلزامي):
	Light: Outline 2px BrandPrimary + Offset 2px
	Dark: Outline 2px BlueNight + Offset 2px
•	Borders/Dividers داخل بطاقات التحكم/القوائم:
o	أي حد/Divider “له معنى وظيفي” = 1px ControlBorder (ليس DividerLine وحده).
•	Toast/Undo عند أي تغيير:
o	Toast على CardWhite/DarkSurface، نص BodyS.
o	Undo كرابط: Underline دائم + Focus rule.
•	عنصر الفرادة اليومية (Distinctive Asset Frequency):
o	أعلى For You أو Trending: Hero Card واحدة فقط ثابتة تحتوي Notch 16×16 (RTL أعلى يمين / LTR أعلى يسار) + Copper stroke 2px CopperUI.
o	ممنوع تكرار الـNotch في بطاقات الـFeed العادية.
________________________________________
 STATION 042
المحطة رقم 42: صمّم Cold-Start واجهات الإطلاق داخل التجربة
المدخل: اعتمد أن تبويب Following قد يكون فارغًا وأن المحتوى قد يكون منخفضًا؛ صمّم مسارات داخل التجربة تمنع “مدينة أشباح” وتدفع للاكتشاف/المتابعة.
1.	Empty Following → Starter Packs
عند Empty Following اعرض:
CTA واضح: “تابع 5 باحثين/مواضيع” + Starter Packs.
(اجعل Starter Packs وحدات “حزم متابعة” قابلة للاختيار السريع داخل نفس الشاشة.)
2.	Low content داخل الـFeed → Editor’s Picks + Top this week
عند انخفاض المحتوى، وضمن نفس تجربة الـFeed، أضف وحدات تُعرض تلقائيًا:
Editor’s Picks
Top Papers this week
كما ورد لتجنب فراغ المحتوى.
3.	Invite Codes كمسار Early Access داخل التجربة
صمّم مسار Invite Codes داخل التجربة لدعم Early Access + Invite codes لمدة 3–6 أشهر كما ورد:
شاشة إدخال Invite Code + تحقق + نجاح/فشل واضح.
عند النجاح: ادفع المستخدم إلى تجربة الاكتشاف (Starter Packs/Editor’s Picks) بدل شاشة فارغة.
المخرج: بعد وضع هذه المسارات (Starter Packs/Editor’s Picks/Top this week/Invite Codes)، ثبّت أماكن V2 في IA دون تفعيلها الآن في المحطة 43.
تحديث ربط Cold-Start بمسارات الهدف (FTUE)
- أي Empty/Low content داخل Home/Discover/Library يجب أن يعرض مسار هدف واحد على الأقل (من نفس قائمة “ابدأ الآن”).
- Starter Packs وEditor Picks تُعرض كحلول، لكن دائمًا مع CTA يقود لهدف عملي (Read/Save/Follow/Start Session).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Empty Following screen (Light): Background WarmPaper + Empty Card CardWhite (Radius 18، Padding 16).
•	CTA “تابع 5 باحثين/مواضيع”:
o	زر Primary: Background BrandPrimary + Text OnBrandPrimary (أبيض) + Touch ≥ 44×44.
o	Focus rule إلزامي.
•	Starter Packs (حزم متابعة):
o	Cards: Radius 18، Border 1px ControlBorder.
o	“متابعة الحزمة/اتبع”: لا تعتمد على اللون وحده: استخدم Filled/Outlined + نص واضح.
o	مؤشرات ذات معنى داخل الحزمة: حجم 6px
	Light: MintText (وليس MintUI)
	Dark: MintUI
•	Editor’s Picks / Top Papers this week:
o	يجب أن تظهر كوحدات Cards فوق WarmPaper بنفس Tokens.
o	مسموح وضع Hero Card واحدة فقط (بنفس قواعد Notch) لتثبيت الفرادة يوميًا، والباقي بدون Notch.
•	Invite Code screen:
o	Input: Border 1px ControlBorder + Focus (Outline 2px + Offset 2px).
o	Success: MintText + ✔︎
o	Failure/Error: #B3261E + ✕ + زر Retry.
•	Loading:
o	Skeleton Color Skeleton + Shimmer 1.2s
o	إذا تجاوز التحميل 5 ثوانٍ: رسالة حالة واضحة + زر “إعادة المحاولة”.
•	Links داخل المتن (إن وجدت): Underline دائم (BrandPrimary/BlueNight) + Focus rule.
________________________________________
 STATION 043
المحطة رقم 43: جهّز V2 Placeholders داخل IA دون تفعيلها الآن
المدخل: اعتمد أن MVP يعمل، وأن المطلوب هنا “حجز أماكن” داخل IA فقط لميزات V2، دون تفعيلها أو تصميم تدفقها التشغيلي.
1.	DM بإذن/سمعة (V2)
ضع مكان “DM” ضمن IA (مثلاً: ضمن خيارات الملف/التواصل) كعنصر غير مفعّل.
2.	توصيات/تزكيات (V2)
ضع قسم/تبويب “تزكيات” داخل البعد المهني للملف (Placeholder فقط).
3.	Export citations (V2)
ضع زر/خيار “Export citations” داخل Library/Collections (غير مفعّل).
4.	Segmentation للنشرات (V2)
داخل إعدادات النشرات/Issue Editor ضع قسم “Segmentation” كـPlaceholder غير مفعّل.
5.	توسعات AI (V2)
داخل مساحة AI الحالية ضع نقاط توسعة مستقبلية كعناصر “قادمة” فقط (بدون تفعيل وظائف جديدة).
قاعدة الـPlaceholder: العنصر يظهر داخل IA لكن لا يفتح تدفقًا كاملاً؛ فقط حالة “غير مفعّل/قادم” بدون تفاصيل إضافية.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Placeholder rows في القوائم:
o	List Row على CardWhite/DarkSurface.
o	Divider وظيفي = 1px ControlBorder (لا تستخدم DividerLine وحده للفصل الوظيفي).
•	حالة “غير مفعّل/قادم”:
o	Badge: Background BrandSoft + Text BrandPrimary + أيقونة (Clock/Lock) (لا تعتمد على اللون وحده).
o	Typography: Label 12/16 وزن 600.
•	الضغط على Placeholder:
o	لا يفتح تدفق: يفتح Bottom Sheet برسالة قصيرة + زر واحد “حسنًا”.
o	Motion: Panel 220ms، Reduced Motion = Fade فقط ≤120ms.
•	Disabled affordance:
o	طبّق Opacity منخفضة للنص/الأيقونة + أيقونة Lock/Clock + Badge “قادم”.
o	مع إبقاء Focus مرئي عند التنقل بلوحة المفاتيح (WCAG 2.2): Focus outline كما في القاعدة.
•	أي روابط داخل النص (إن وجدت): Underline دائم.
________________________________________
 STATION 044
المحطة 44 — Paper Page (مركز الورقة قبل القارئ)
المدخل: بعد وجود “Papers Directory” ووجود مسار Open Paper.
الهدف: جعل Paper Page “لوحة فهم سريعة” قبل Read PDF.
مكوّنات الصفحة (اقتراح مطابق لمنطق الخطة):
Header: العنوان + المؤلفون + السنة + المؤسسة + Badges (Verified/Availability/Has DOI/Has PDF).
CTAs ثابتة: Open PDF / Ask Paper / Save / Add to Collection / Share (مع احترام الرؤية لاحقًا).
أقسام “Above the fold”: Key takeaways (3) + Abstract مختصر + “Why this paper” (اختياري)
Tabs داخل الصفحة: Overview | PDF | Highlights | Notes | Citations | Discussions (ربط Discussions بالـThreads محطة 27).
حالات: Loading/Empty/Error + “PDF غير متاح” (Metadata-only).
المخرج: يسلّم مباشرة إلى PDF Reader (24) ويستقبل Highlights Gallery (26).
إضافة مواصفات IA/Context داخل Paper Page (قبل ملحق الهوية البصرية)
بنية صفحة الورقة (Paper Page) يجب أن تُجيب دائمًا: “ما هذه الورقة؟ ماذا أفعل الآن؟ ماذا بعد؟”
1) شريط سياق (Context Strip) أعلى الصفحة:
- يوضح مصدر الفتح: من Discover/Topic/Library/Feed/Share link.
- يحتوي CTA “Back to results/Back to topic/Back to library” حسب المصدر.
2) Breadcrumbs (عند الهرمية):
- إن فُتحت الورقة من Topic Directory/Series/Collections: اعرض Breadcrumb مناسب (ولا تخلط هياكل متعددة).
3) أعلى الصفحة (Above the fold):
- Title + Authors + Year + Venue + Topics chips + Badges.
- CTAs أساسية: Open PDF / Save / Add to Collection / Start Session.
4) Tabs كما هي، لكن مع قاعدة “ماذا بعد؟”:
- نهاية تبويب Overview (وأيضًا Highlights/Discussions عند الإمكان) يجب أن تحتوي وحدات سياقية:
  - أوراق مشابهة (مع Why)
  - مؤلفون/مؤسسات مرتبطة (مع Why)
  - مواضيع مرتبطة (مع Why)
  - تتبّع الاستشهادات (Citations chasing) إن كان ضمن الخطة
5) قابلية تفسير “مشابه/شاهد أيضًا”:
- كل عنصر يعرض سببًا واحدًا (نفس الموضوع/نفس المؤلف/يستشهد/كثير الحفظ…).
6) قاعدة الرجوع:
- الرجوع يعيد المستخدم إلى نفس المصدر وبنفس الحالة (نتائج/فلتر/موضع).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Page Background:
o	Light: WarmPaper
o	Dark: DarkBG
•	Header Card:
o	Background CardWhite/DarkSurface، Radius 18، Padding 16.
o	Border وظيفي: 1px ControlBorder (Light) / DarkText 14% (Dark).
•	Badges (Verified/Availability/Has DOI/Has PDF):
o	Label 12/16 600
o	ممنوع اللون وحده: كل Badge = لون + أيقونة (✔︎ / i / ✕) حسب الحالة.
•	CTAs:
o	Open PDF = Primary BrandPrimary + OnBrandPrimary (Touch ≥ 44×44)
o	Ask Paper / Save / Add / Share = Secondary أو Icon Buttons مع Touch 48×48 للأيقونات.
•	Key takeaways (3):
o	داخل CardWhite/DarkSurface
o	كل نقطة تبدأ بـ Icon 20px بلون MintText (Light) / MintUI (Dark) + نص Ink/DarkText (بدون الاعتماد على اللون فقط).
•	Tabs داخل الصفحة:
o	Active = BrandPrimary/BlueNight + Underline 2px + وزن 600 (لا لون فقط).
•	DOI/روابط/اقتباسات داخل المتن:
o	Light: BrandPrimary + Underline دائم
o	Dark: BlueNight + Underline دائم
o	دعم RTL/LTR داخل RTL: سطر DOI/روابط = Inline LTR داخل البطاقة دون كسر المحاذاة.
•	“PDF غير متاح”:
o	استخدم Info state: BrandPrimary/BlueNight + أيقونة i + نص واضح.
•	الزخارف الخلفية Topographic Lines:
o	ممنوعة هنا (مسموحة فقط: Splash، رأس البروفايل، Empty states) إلا إذا كانت خلف Header وبعتامة 3–4% ومع Scrim/Surface يحمي النص.
________________________________________
 STATION 045
المحطة 45 — Paywall + Checkout + إدارة الاشتراك (Institution/Newsletter)
المدخل: وجود Subscribe في Institution/Newsletter لكن “بدون بوابة دفع” حاليًا.
الهدف: إكمال رحلة الاشتراك إن كان مدفوعًا: رؤية القيمة → دفع → نجاح/فشل → إدارة.
الشاشات:
Paywall (قبل المحتوى المقيد): يشرح ما الذي يُفتح بالاشتراك + CTA “اشترك”.
Checkout: خطة/سعر + طريقة دفع + تأكيد.
Success/Failure + Retry.
Manage subscription: إلغاء/إيقاف/تجديد + الفواتير (إن لزم).
قواعد: احترام نظام الرؤية/Availability للمحتوى (37).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Paywall:
o	Background WarmPaper/DarkBG
o	Panels = CardWhite/DarkSurface (Radius 18، Padding 16)
o	نصوص طويلة: BodyL 16/28 (عرض مريح، لا تكدّس).
•	CTA “اشترك”:
o	Primary BrandPrimary + OnBrandPrimary
o	مسموح Halo خفيف AscendGradient (Opacity 10–12%) بدون نص فوق تدرّج.
•	Checkout Inputs:
o	Border 1px ControlBorder
o	Focus: Outline 2px BrandPrimary/BlueNight + Offset 2px
o	Error: #B3261E + ✕ + Helper 13/20
•	Success/Failure:
o	Success = MintText + ✔︎
o	Failure/Error = #B3261E + ✕ + زر Retry
o	ممنوع اللون وحده لتوصيل الحالة.
•	Manage subscription:
o	List Rows بحدود وظيفية 1px ControlBorder
o	أزرار الإلغاء/الإيقاف = Secondary (واضحة) مع Focus rule
•	روابط الشروط/الفواتير داخل المتن:
o	Underline دائم (BrandPrimary/BlueNight) + Focus rule.
•	Reduced Motion:
o	إن كانت هناك انتقالات/نجاح/فشل: احترم “تقليل الحركة” (Fade فقط ≤120ms).
________________________________________
________________________________________
 STATION 046
المحطة 46 — Safety Center للمستخدم (Block/Mute/Restrict) + إدارة القوائم
المدخل: Settings تذكر Block/Mute/Restrict كإدارة أمان.
الهدف: تحويلها من “اختصارات” إلى تجربة كاملة قابلة للإدارة.
الشاشات:
قائمة Blocked / Muted / Restricted (Tabs)
صفحة إضافة/بحث عن حساب لحظره/كتمه
صفحة تفاصيل قرار (لماذا؟ + Unblock/Unmute)
الربط: تؤثر على Feed/Threads/Notifications (من دون اختراع سلوك جديد خارج منطق التحكم والحوكمة الموجود).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	الخلفية العامة: Light = WarmPaper / Dark = DarkBG.
•	Top App Bar: Height 56 + Title (H3 وزن 600) + CopperKeyline 2px بطول 48px بجوار العنوان (RTL يمين).
•	Tabs (Blocked/Muted/Restricted):
o	النشط: Text = BrandPrimary (Light) / BlueNight (Dark) + Underline دائم + Filled/Outline لتأكيد الحالة (ممنوع لون فقط).
o	غير النشط: Slate (Light) / DarkSubtext (Dark).
•	قوائم العناصر: كل Row داخل CardWhite (Light) / DarkSurface (Dark) مع:
o	Border واضح: Light = 1px ControlBorder أو Line بعتامة لا تقل عن 45% (حسب وضوح الشاشة) / Dark = 1px DarkText بعتامة 14%.
o	Non-text contrast: إذا ظهر الحد باهتًا (1px يضيع مع Anti-aliasing) ارفعه إلى 2px لعناصر الإدخال/الأمان/التفاعل فقط.
•	صفحة “لماذا؟”: أي رابط داخل المتن = BrandPrimary/BlueNight + Underline دائم (ممنوع لون فقط).
•	Focus (إلزامي):
o	Light: Outline 2px BrandPrimary + Offset 2px
o	Dark: Outline 2px BlueNight + Offset 2px
o	ممنوع Focus بالظل.
•	الأزرار:
o	Primary (Unblock/Unmute): BrandPrimary + OnBrandPrimary + Touch 48×48
o	Secondary: Border ControlBorder + Text Ink/DarkText
•	الحالات: Skeleton (Color Skeleton + Shimmer 1.2s)، وإذا تجاوز التحميل 5s: رسالة حالة واضحة + زر “إعادة المحاولة”.
________________________________________
 STATION 047
المحطة 47 — Institution Verification (تقديم الطلب + حالة الطلب) من جهة المؤسسة
المدخل: Admin يدعم مراجعة توثيق مؤسسة، لكن لا يوجد Flow تقديم واضح للمؤسسة.
الهدف: تمكين حساب المؤسسة من: تقديم أدلة → متابعة الحالة → استلام القرار.
الشاشات:
Verification Status للمؤسسة (Not Verified/Pending/Rejected/Verified)
Submission Form (روابط + مستندات + تفويض ممثل)
Success + “قيد المراجعة”
الربط: عند القبول يظهر Institution Verified في كل مواضع المؤسسة (Discover/Feed/Pages).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Status UI (حالة التوثيق): اعرض الحالة كـ Badge = لون + أيقونة (ممنوع لون فقط):
o	Verified = MintText + ✔︎
o	Pending = BrandPrimary (Light) / BlueNight (Dark) + i
o	Rejected = #B3261E + ✕
o	Not Verified = Slate + Outline icon
•	Submission Form:
o	Card container: Radius 18 + Padding 16 + Background CardWhite/DarkSurface
o	Borders: Light = ControlBorder (واضح) / Dark = DarkText 14%
o	Links داخل المتن/التعليمات: Underline دائم + BrandPrimary/BlueNight
o	أزرار رفع المستندات: Touch 48×48 + Icon 24px Stroke 2px + Focus rule الإلزامي
•	Success “قيد المراجعة”:
o	Hero Card واحدة أعلى الصفحة مسموح لها فقط استخدام Notch 16×16 (RTL أعلى يمين) + خط CopperUI 2px داخل الـNotch.
o	ممنوع استخدام Notch في الأزرار/الحقول.
•	Dark mode: الروابط/النشط كنص = BlueNight فقط (ممنوع BrandPrimary كنص على DarkBG).
________________________________________
 STATION 048
المحطة 48 — Institutional Editor (Reports/Series/Publications) + Preview (خارج Article Editor)
المدخل: Editorial Queue يفتح صفحة تحرير/معاينة غير مصممة.
الهدف: محرر مؤسسي “هيكلي” للتقارير/السلاسل يختلف عن محرر المقالات.
المخرجات:
Editor: عنوان + أقسام + إدراج Papers/Articles + مرفقات + حالة Draft/Review/Publish
Preview
ربط واضح بحالات Editorial Queue (Draft→Review→Publish).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Deep Page Layout: عمود واحد + أقسام داخل بطاقات: Padding 24 + Gap 24 + Radius 18.
•	عنوان المحرر: H1 وزن 700 + Accent line 2px AscendGradient بطول 48px فقط تحت العنوان (ممنوع شريط طويل).
•	States (Draft/Review/Publish): Chips Height 32 + Touch 44×44:
o	Selected: Background BrandSoft + Text BrandPrimary + Filled icon
o	Default: Border ControlBorder + Text Ink/Slate
•	Preview:
o	عرض القراءة: BodyL 16/28 Ink (Light) / DarkText (Dark)
o	Links داخل النص = Underline دائم
o	ممنوع وضع نص فوق Gradient أو خامات.
•	Attachments: Cards بحد واضح (Non-text contrast) + Icons 20px/24px Stroke 2px.
•	Motion: EaseOutCubic + Panel/Preview transitions 220ms، وReduced Motion = Fade فقط ≤120ms.
•	Loading: Skeleton ثم بعد 5s رسالة حالة + Retry.
________________________________________
 STATION 049
المحطة 49 — Guest Mode Rules + Upgrade Prompts (تجربة الزائر والترقية)
المدخل: Login/Signup يذكر “تصفح كضيف إن كان مفعّلًا”.
الهدف: تحديد ما يستطيع الضيف فعله، ومتى نطلب تسجيل الدخول بدون إزعاج.
المكونات:
Guest banner + قيود واضحة (مثل: لا حفظ/لا تعليق/لا إنشاء)
Soft-gates: عند Save/Comment/Create → يفتح Login كـSheet ثم يعود لنفس السياق (بدون كسر الرحلة).
ربط مع قواعد Share Links (37) بحيث “غير متاح” تقود إلى CTA صحيح.
إضافة سلوك Guest Mode (توحيد Soft-gates + رجوع للسياق)
1) تعريف واضح لما يمكن للزائر فعله:
- Browse (قراءة/بحث/استعراض صفحات عامة) مسموح.
- Actions (Save/Comment/Follow/Create) تُقفل عبر Soft-gate.
2) Soft-gate موحّد:
- رسالة واحدة ثابتة تشرح: “سجّل لتتمكن من …” + زر تسجيل/إنشاء حساب.
- لا تفتح الزائر على شاشة تسجيل كاملة إلا بعد قرار واضح.
3) بعد التسجيل/الدخول:
- يعود المستخدم إلى نفس السياق الذي حاول تنفيذ الإجراء فيه (نفس الورقة/نفس نتائج البحث/نفس المنشور).
- بعد أول نجاح، اقترح هدفًا واحدًا (Goal Path) مناسبًا لاستكمال التجربة.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	Guest banner: Background BrandSoft + Text Ink + Icon i (ممنوع الاعتماد على اللون وحده).
•	CTA الترقية/التسجيل:
o	Primary: BrandPrimary + OnBrandPrimary
o	هالة خفيفة AscendGradient Opacity 10–12% بدون نص فوقها
o	Touch 48×48 + Focus rule
•	Soft-gate Sheet: Bottom Sheet Radius 18 + Padding 16 + Motion 220ms (Reduced Motion = Fade فقط).
•	مؤشر “غير متاح”: Badge = لون + أيقونة ✕ + نص واضح (لا تستخدم اللون وحده).
•	Links داخل النص (مثلاً “اعرف المزيد”): Underline دائم + BrandPrimary/BlueNight.
________________________________________
 STATION 050
المحطة 50 — Accessibility + RTL/LTR QA Kit (محطة جودة تصميم)
الهدف: قبل التنفيذ النهائي، تجهيز “حزمة اختبارات” تمنع مشاكل RTL/PDF/أحجام خط/تباين/Targets.
المخرجات:
Checklist + شاشات اختبار (أطوال نص، أسماء طويلة، أرقام/DOI داخل RTL، حالات Skeleton/Empty/Error)
قواعد لمس/تنقل/قارئ شاشة (قدر الإمكان ضمن التصميم)
الربط: تحمي خصوصًا القارئ والـAI panel والبحث.
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	إضافة بنود إلزامية داخل الـChecklist (من الهوية):
1.	Links داخل المتن = Underline دائم + BrandPrimary/BlueNight (ممنوع لون فقط).
2.	Focus مرئي لكل عنصر تفاعلي: Outline 2px + Offset 2px (Light BrandPrimary / Dark BlueNight).
3.	Touch targets: حد أدنى 44×44، وأزرار الأيقونات 48×48.
4.	Non-text contrast: الحدود/الفواصل/الأيقونات اللازمة للفهم يجب أن تكون واضحة إدراكيًا؛ إذا 1px لا يظهر ارفعه إلى 2px في عناصر الإدخال/التفاعل.
5.	Dark Mode: لا تستخدم BrandPrimary كنص على DarkBG؛ استخدم BlueNight للنشط/الروابط.
6.	Skeleton 1.2s + بعد 5s رسالة حالة + Retry.
7.	RTL/LTR: مكان Notch (إن وُجد في Hero فقط) يتبدل حسب الاتجاه، وباقي التخطيط لا ينكسر.
________________________________________
 STATION 051
المحطة 51 — Event Taxonomy (قياس التحويلات) + Funnels للمنتج
السبب: الخطة فيها Analytics داخل Dashboard ، لكن بدون “خريطة أحداث” تربط: Discover→Open Paper→Read PDF→Save→Highlight→Post/Comment.
المخرجات:
قائمة Events + Properties + تعريف نجاح/فشل
Funnels أساسية + أين تُعرض (Dashboard/لوحات المؤسسة)
ربط إشعارات/Alerts بالقياس (Saved searches/Newsletter).
ملحق دمج الهوية البصرية v2.4 — (إضافة فقط دون تعديل نص المحطة)
•	DataViz (Funnels/Charts) — قواعد صارمة:
o	Lines 2px + Points 4px + Grid خلفية 6% من Line.
o	ألوان السلاسل المسموحة: BrandPrimary / Slate / MintText.
o	ممنوع التمييز باللون فقط: بدّل نمط الخط (متصل/متقطع) أو شكل النقاط (دائرة/مربع/مثلث).
•	قائمة Events: Rows داخل CardWhite Radius 18 + Border واضح (Non-text contrast) + عناوين 14/20 وزن 600.
•	Success/Failure: Badge (لون + أيقونة) وفق Semantic states: Success MintText ✔︎ / Warning CopperText ! / Error #B3261E ✕.
•	Links للتفاصيل داخل Dashboard: Underline دائم + Focus rule.
•	Loading: Skeleton ثم بعد 5s رسالة حالة + Retry.





















