## STATION 001 — AppShell (UI-ONLY)

GOAL:
تثبيت واجهة AppShell الحالية بدون أي ربط خارجي. هذه محطة “تثبيت الأساس” فقط.

ALLOW:
- components/shell/**
- components/templates/**
- components/tempLate/**
- lib/**
- middleware.ts
- public/brand/**

REQUIRE:
- FILE components/shell/AppShell.tsx
- FILE components/shell/BottomNav.tsx
- FILE components/shell/TopAppBar.tsx

FORBIDDEN:
- from "firebase
- from 'firebase
- initializeApp
- getAuth
- getFirestore
- stripe
- fetch\(
- https?://

BUDGET:
- max_files=12
- max_add=600
