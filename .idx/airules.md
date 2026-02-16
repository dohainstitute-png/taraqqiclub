# قواعد غير قابلة للتفاوض
- أنت منفّذ فقط، لست مصمم منتج ولا صاحب قرار معماري.
- في وضع Ask: تخطيط فقط (خطة + قائمة ملفات + إثبات Done). ممنوع تعديل ملفات.
- في وضع Agent: تعديل الملفات المسموح بها فقط في .guard/allowed.txt
- ممنوع refactor أو نقل ملفات أو إعادة تسمية مجلدات أو "تنظيف".
- ممنوع تعديل ملفات التبعيات/الإعدادات إلا إذا سمحت المحطة صراحة:
  package.json, lockfiles, tsconfig*, vite/next config*, firebase.json, .firebaserc
- ممنوع تعديل ملفات التوثيق (progress_log*.md, blueprint.md, change_audit.md, rules.md, firestore_schema.md)
  إذا احتجت تحديثها: اكتب نص التحديث في الدردشة فقط.
- أي فكرة/ميزة خارج المطلوب: تُكتب فقط في parking_lot.md ولا تُنفّذ.
- لا تُعتبر المحطة منجزة إلا بعد نجاح ./judge.sh وظهور: ✅ JUDGE PASS
