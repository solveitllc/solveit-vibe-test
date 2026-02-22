# SolveIT LLC — Vibe Coder Assessment

## About this test

At SolveIT we use AI as our primary development tool. We don't expect you to have documentation memorized — we expect you to know how to **think, debug, and protect data** using the tools available to you.

Use any AI you want: Cursor, Copilot, Claude, ChatGPT, Gemini, whatever. What matters is the result and that you can explain what you did.

**Estimated time:** 25 minutes total

---

## Part 1 — Git & Linux (5 min)

1. Clone the repo: `https://github.com/solveitllc/solveit-vibe-test`
2. Create a branch with the format: `fix/test-[yourname]`
3. All your changes go on that branch
4. At the end, push your branch

> **Tip:** If you normally use the terminal, use it. If you use VS Code with integrated Git, that's fine too. We just want to see how you manage your workflow.

---

## Part 2 — Find and fix the bugs (15 min)

Open `src/components/ClientList.jsx`. This component has **3 bugs**.

**Your task:**

- Identify the 3 bugs
- Fix them
- Make one commit per fix with a message explaining what you fixed and why

**Hints:**

- One of the bugs crashes the app immediately
- Another causes a performance issue that you won't see at first glance
- The third one is not technical — it's about **professional judgment** — it has to do with what data is displayed and how it's transmitted

> **Tip:** Don't limit yourself to the component file. Also check how it's used in `page.jsx` and what the API returns. A good developer looks at the full context.

---

## Part 3 — Open question (5 min, oral or written)

Answer this:

> *"If this component were part of a real production app with real client data, what else would you change or add to make it production-ready?"*

There is no single correct answer. We want to see how you think beyond the code in front of you.

---

## Setup

```bash
git clone https://github.com/solveitllc/solveit-vibe-test
cd solveit-vibe-test
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deliverables

- [ ] Branch created with the correct format
- [ ] All 3 bugs found and fixed
- [ ] Commits with clear messages
- [ ] Push to your branch
- [ ] Answer to the open question (can be in a `NOTES.md` file in the repo or verbal)

---

## What we evaluate

| Area | What we look for |
|---|---|
| **Git workflow** | That you work in an organized way using branches, not directly on main |
| **Debugging with AI** | That you use AI effectively, not just copy/paste without understanding |
| **Security and judgment** | That you identify sensitive data issues without being told |
| **Communication** | That your commits and explanations are clear |
| **Vision** | That you think about production, not just "making it work" |

---

*SolveIT LLC — AI Automation for Real Business*

---
---

# SolveIT LLC — ভাইব কোডার মূল্যায়ন (Bengali / বাংলা)

## এই পরীক্ষা সম্পর্কে

SolveIT-এ আমরা AI কে আমাদের প্রাথমিক ডেভেলপমেন্ট টুল হিসেবে ব্যবহার করি। আমরা আশা করি না যে আপনি ডকুমেন্টেশন মুখস্থ রাখবেন — আমরা আশা করি আপনি জানবেন কিভাবে আপনার কাছে থাকা টুলগুলো ব্যবহার করে **চিন্তা করতে, ডিবাগ করতে এবং ডেটা সুরক্ষিত রাখতে** হয়।

যেকোনো AI ব্যবহার করুন: Cursor, Copilot, Claude, ChatGPT, Gemini, যা ইচ্ছা। গুরুত্বপূর্ণ হলো ফলাফল এবং আপনি কী করেছেন তা ব্যাখ্যা করতে পারা।

**আনুমানিক সময়:** মোট ২৫ মিনিট

---

## পার্ট ১ — Git ও Linux (৫ মিনিট)

1. রেপো ক্লোন করুন: `https://github.com/solveitllc/solveit-vibe-test`
2. এই ফরম্যাটে একটি ব্রাঞ্চ তৈরি করুন: `fix/test-[আপনার নাম]`
3. আপনার সমস্ত পরিবর্তন সেই ব্রাঞ্চে থাকবে
4. শেষে, আপনার ব্রাঞ্চ push করুন

> **টিপ:** আপনি যদি সাধারণত টার্মিনাল ব্যবহার করেন, সেটাই ব্যবহার করুন। যদি VS Code-এর ইন্টিগ্রেটেড Git ব্যবহার করেন, সেটাও ঠিক আছে। আমরা শুধু দেখতে চাই আপনি কিভাবে আপনার ওয়ার্কফ্লো পরিচালনা করেন।

---

## পার্ট ২ — বাগগুলো খুঁজে বের করুন এবং ঠিক করুন (১৫ মিনিট)

`src/components/ClientList.jsx` খুলুন। এই কম্পোনেন্টে **৩টি বাগ** আছে।

**আপনার কাজ:**

- ৩টি বাগ চিহ্নিত করুন
- সেগুলো ঠিক করুন
- প্রতিটি fix-এর জন্য একটি করে commit করুন, যেখানে আপনি কী ঠিক করেছেন এবং কেন তা ব্যাখ্যা করবেন

**ইঙ্গিত:**

- একটি বাগ অ্যাপটিকে সাথে সাথে ক্র্যাশ করায়
- আরেকটি একটি পারফরম্যান্স সমস্যা সৃষ্টি করে যা প্রথম দেখায় বোঝা যায় না
- তৃতীয়টি প্রযুক্তিগত নয় — এটি **পেশাদার বিচারবোধ** সম্পর্কিত — কোন ডেটা দেখানো হচ্ছে এবং কিভাবে ট্রান্সমিট হচ্ছে তার সাথে সম্পর্কিত

> **টিপ:** শুধু কম্পোনেন্ট ফাইলে সীমাবদ্ধ থাকবেন না। `page.jsx`-এ এটি কিভাবে ব্যবহার হয়েছে এবং API কী রিটার্ন করে তাও দেখুন। একজন ভালো ডেভেলপার পুরো প্রেক্ষাপট দেখেন।

---

## পার্ট ৩ — খোলা প্রশ্ন (৫ মিনিট, মৌখিক বা লিখিত)

এটির উত্তর দিন:

> *"যদি এই কম্পোনেন্টটি বাস্তব ক্লায়েন্ট ডেটা সহ একটি বাস্তব প্রোডাকশন অ্যাপের অংশ হতো, তাহলে এটিকে প্রোডাকশন-রেডি করতে আপনি আর কী পরিবর্তন বা যোগ করতেন?"*

একটি মাত্র সঠিক উত্তর নেই। আমরা দেখতে চাই আপনি আপনার সামনের কোডের বাইরে কিভাবে চিন্তা করেন।

---

## সেটআপ

```bash
git clone https://github.com/solveitllc/solveit-vibe-test
cd solveit-vibe-test
npm install
npm run dev
```

ব্রাউজারে খুলুন [http://localhost:3000](http://localhost:3000)

---

## জমা দেওয়ার তালিকা

- [ ] সঠিক ফরম্যাটে ব্রাঞ্চ তৈরি করা হয়েছে
- [ ] ৩টি বাগ খুঁজে বের করা ও ঠিক করা হয়েছে
- [ ] পরিষ্কার মেসেজ সহ commit করা হয়েছে
- [ ] আপনার ব্রাঞ্চে push করা হয়েছে
- [ ] খোলা প্রশ্নের উত্তর (রেপোতে `NOTES.md` ফাইলে অথবা মৌখিকভাবে)

---

## আমরা যা মূল্যায়ন করি

| ক্ষেত্র | আমরা যা খুঁজি |
|---|---|
| **Git ওয়ার্কফ্লো** | আপনি ব্রাঞ্চ ব্যবহার করে সংগঠিতভাবে কাজ করেন, সরাসরি main-এ নয় |
| **AI দিয়ে ডিবাগিং** | আপনি AI কার্যকরভাবে ব্যবহার করেন, না বুঝে শুধু কপি/পেস্ট নয় |
| **নিরাপত্তা ও বিচারবোধ** | আপনি সংবেদনশীল ডেটার সমস্যা চিহ্নিত করতে পারেন কেউ না বলেও |
| **যোগাযোগ** | আপনার commit এবং ব্যাখ্যাগুলো স্পষ্ট |
| **দৃষ্টিভঙ্গি** | আপনি প্রোডাকশনের কথা ভাবেন, শুধু "কাজ করছে" এটুকু নয় |

---

*SolveIT LLC — AI Automation for Real Business*
