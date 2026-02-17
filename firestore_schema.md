

## 1) Firebase Authentication

### مزوّدات تسجيل الدخول (Sign-in Providers)

* **Email/Password**: Enabled 
* **Google**: Enabled 

### Authorized Domains (لـ Google/Web Redirect)

* `localhost` 
* `future-footing-466610-h9.firebaseapp.com` 
* `future-footing-466610-h9.web.app` 

### مستخدم تجريبي داخل Authentication

* **Email**: `test@taraqqiclub.com`
* **Provider**: Email/Password
* (UID موجود في الكونسول لكن **غير مذكور رقمه** في الملف) 

---

## 2) Cloud Firestore Database

### القاعدة

* Database: **(default)** + **Production mode** 
* Location: **nam5** 

### Firestore Rules (مختصر لأنها ليست “حقول” لكن جزء من الضبط)

* القراءة/الكتابة فقط للمسجّلين: `request.auth != null` 

---

### A) `app_config / public`

**Document ID**: `public` 
الحقول:

* `platformName` (String) = **TaraqqiClub** 
* `defaultLanguage` (String) = **ar** 
* `schemaVersion` (Number) = **1** 
* `createdAt` (Timestamp) = **Now** 

---

### B) `users / seed_admin`

**Document ID**: `seed_admin` 
الحقول الأساسية:

* `email` (String) = **[admin@taraqqiclub.com](mailto:admin@taraqqiclub.com)** 
* `displayName` (String) = **Seed Admin** 
* `role` (String) = **admin** 
* `status` (String) = **active** 
* `createdAt` (Timestamp) = **Now** 

حقول “توسيع ملف الباحث”:

* `bio` (نص/String) — مذكور كوصف “نص السيرة الذاتية” 
* `specialties` (Array) 
* `reputation` (Number) يبدأ من 0 
* `isVerified` (Boolean) 

حقول توسعة إضافية:

* `links` (Map) وفيه أمثلة: (linkedin, google_scholar) 
* `skills` (Array) 
* `experience` (Array) 
* `verificationStatus` (غير محدد النوع في النص، لكنه “حالة التوثيق (verified)”) 

---

### C) `papers`

#### الهيكل الأساسي (أول وثيقة اختبار)

الحقول (مذكورة كقائمة حقول):

* `title`
* `authorName`
* `abstract`
* `status`
* `createdAt`
  (الملف لم يذكر الأنواع هنا صراحة، لكنه ذكر أسماء الحقول) 

#### توسعة “Research Card” (حقول AI)

* `methodology` (String) 
* `findings` (String) 
* `limitations` (String) 
* `keyTakeaways` (Array) 
* `aiGenerated` (Boolean) = true 

#### تحديث “بيانات ببليوغرافية”

* `publishedYear` (Number) 
* `doi` (String) 
* `originalLink` (لم يذكر النوع صراحة؛ لكنه “رابط المصدر الأصلي”) 
* `paperType` (لم يذكر النوع صراحة؛ لكنه “نوع البحث”) 
* `publisherInstitutionId` (لم يذكر النوع صراحة؛ لكنه “ربط بجهة النشر”) 

---

### D) `topics`

* `name` 
* `description` 
* `followerCount` (Number) 
* `paperCount` (Number) 
* `isTrending` (Boolean) 

---

### E) `posts`

* `authorId` (String) = مرتبط بـ seed_admin 
* `content` (String) 
* `likesCount` (Number) 
* `repostCount` (Number) 
* `topics` (Array) 
* `createdAt` (Timestamp) 

---

### F) `articles`

* `authorId` (String) 
* `title` (String) 
* `content` (String) 
* `readingTime` (Number) 
* `topics` (Array) 
* `status` (String) مثال: published 

---

### G) `comments`

* `authorId` (String) 
* `content` (String) 
* `refId` (String) (مذكور أنه Auto-ID) 
* `refType` (String) مثال: "article" 

---

### H) `library`

* `userId` (String) (مرتبط بـ seed_admin) 
* `folderName` (String) 
* `savedItems` (Array) 
* `isPublic` (Boolean) 

---

### I) `institutions`

الحقول مذكورة كأسماء فقط (بدون أنواع):

* `name, type, isVerified, website, memberCount` 

---

### J) `newsletters`

الحقول مذكورة كأسماء فقط (بدون أنواع):

* `ownerId, subscriberCount` 

### K) `newsletter_issues`

* `newsletterId` (String) 
* `title` (النوع غير مذكور، لكنه عنوان) 
* `content` (النوع غير مذكور، لكنه نص العدد) 
* `sentAt` (Timestamp) 

---

### L) `reports`

الحقول مذكورة كأسماء فقط (وبها قيمة status: pending):

* `reporterId, contentRef, reason, status: pending` 

---

### M) `notifications`

* `recipientId` (String) = "seed_admin" 
* `senderId` (String) = "system" 
* `type` (String) = "welcome" 
* `message` (String) 
* `isRead` (Boolean) = false 
* `createdAt` (Timestamp) 

---

### N) `follows`

الحقول مذكورة كأسماء فقط (بدون أنواع):

* `followerId, targetId, targetType, createdAt` 

---

### O) `reactions`

* `userId` (String) 
* `contentId` (String) 
* `contentType` (String) 
* `type` (String) مثال: like / clap 
* `createdAt` (Timestamp) 

---

### P) `verification_requests`

* `userId` (String) 
* `idImageUrl` (String) 
* `institutionName` (String) 
* `status` (String) = "pending" 
* `submittedAt` (Timestamp) 

---

### Q) `opportunities`

* `authorId` (String) 
* `title` (النوع غير مذكور، لكنه عنوان) 
* `description` (النوع غير مذكور، لكنه تفاصيل) 
* `type` (String) أمثلة: collaboration / peer_review / event 
* `status` (String) = "open" 
* `createdAt` (Timestamp) 

---

### R) `paper_ai_qa`

* `paperId` 
* `userId` 
* `question` 
* `answer` 
* `timestamp` 

---

### S) `user_preferences`

* `userId` 
* `topicId` 
* `preferenceLevel` (Number) (1 أو -1) 
* `updatedAt` 

---

### T) `reputation_history`

* `userId` 
* `points` (Number) 
* `reason` 
* `sourceId` 
* `createdAt` 

---

### U) `moderation_actions`

* `userId` 
* `type` (warning / restriction / ban) 
* `reason` 
* `expiresAt` (Timestamp) 
* `adminId` 

---

## 3) Firebase Storage

### الـ Bucket

* `gs://future-footing-466610-h9.firebasestorage.app` 

### Storage Rules (الضبط الذي عملناه)

* القراءة/الكتابة فقط للمستخدم المسجّل: `request.auth != null` 
* (قواعد MVP المتقدمة: تقييد PDF للمجلد الخاص بالأبحاث وتقييد الصور لمجلدات الصور… مذكورة كمنطق قواعد) 

### المجلدات التي أنشأناها داخل Storage

* `papers_pdfs` (PDFs للأبحاث) 
* `profile_pictures` (صور الباحثين/الشعارات) 
* `article_images` (صور داخل المقالات) 

---

