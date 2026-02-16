TITLE: تثبيت مكونات AppShell الأساسية (UI فقط)

FILES_TO_EDIT:
- components/shell/AppShell.tsx
- components/shell/TopAppBar.tsx
- components/shell/BottomNav.tsx
- components/shell/CreateSheet.tsx
- components/shell/TopBar.tsx

PLAN:
- تبسيط TopAppBar.tsx لعرض شريط علوي ثابت بدون أي منطق معقد.
- تعديل BottomNav.tsx ليحتوي على أيقونات تنقل ثابتة وواجهة بسيطة.
- إعادة بناء AppShell.tsx ليكون الحاوية الرئيسية التي تجمع الشريط العلوي والسفلي والمحتوى.
- إفراغ المحتوى غير الضروري من CreateSheet.tsx و TopBar.tsx لتركيز العمل على الهيكل الأساسي.
- التأكد من أن جميع المكونات المعدلة لا تحتوي على أي استدعاءات للشبكة أو إدارة حالة معقدة.

DONE:
- تشغيل ./judge.sh وظهور ✅ JUDGE PASS
