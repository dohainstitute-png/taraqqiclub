## STATION 001 — AppShell Lock (UI-ONLY)

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
