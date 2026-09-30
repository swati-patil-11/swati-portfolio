const projects = [
  { title: "BookMart", subtitle: "Full-Stack E-Commerce & Peer-to-Peer Book Exchange Platform", date: "March 2025 – May 2025", tech: ["Java", "Spring Boot", "MySQL", "Firebase", "Razorpay"], description: "Built a full-stack Android application bridging traditional retail e-commerce with a peer-to-peer marketplace where students buy and sell secondhand books. Integrated Firebase and Razorpay for a secure, industry-standard shopping experience.", link: "https://github.com/PLACEHOLDER/bookmart" },
  { title: "Playground Booking Android Application", date: "April 2025 – May 2025", tech: ["Android", "Firebase", "Java"], description: "Built an Android app for booking playgrounds and sports facilities with real-time availability tracking and Firebase Authentication. Dynamic time-slot logic prevents double-booking conflicts.", link: "https://github.com/PLACEHOLDER/playground-booking" },
  { title: "Sign Language to Text Conversion", date: "April 2025 – May 2025", tech: ["Computer Vision", "ML", "OpenCV", "MediaPipe"], description: "Built a real-time sign language recognition system using OpenCV and MediaPipe for hand landmarks, plus a Random Forest classifier trained on a custom dataset for webcam-based inference.", link: "https://github.com/PLACEHOLDER/sign-language" }
];

// Replace these certificate URLs with the public credential pages before publishing.
const certificateLinks = Array(7).fill("PASTE_CERTIFICATE_LINK_HERE");
const certificates = [
  ["Java Programming", "GeeksforGeeks Certification Course", "0169f22d86bbb74621d7001662c29f99"],
  ["Java Programming for Beginners", "IBM, via Coursera", "BHBB03PI7ZRZ"],
  ["Android Development Virtual Internship", "AICTE & Google for Developers", "STU669941093a6971721319689"],
  ["Spring Boot for Back-End Development", "CodeChef", "214c5f5"],
  ["Git & GitHub", "CodeChef", "555ef7b"],
  ["Oracle Cloud Infrastructure 2025 Certified Foundations Associate", "Oracle", "323228553OCI25FNDCFA"],
  ["Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", "Oracle", "323228553OCI25AICFA"]
];

// Edit usernames in data/config.json. These inline values keep file:// mode usable.
let profiles = { leetcode: "swatii_11", codechef: "CODECHEF_USERNAME", gfg: "GFG_USERNAME" };
let formspreeEndpoint = "PASTE_FORMSPREE_ENDPOINT_HERE";
const fallbackStats = { leetcode: { solved: 0, easy: 0, medium: 0, hard: 0 }, codechef: { solved: 1000 }, gfg: { solved: 250 }, updatedAt: "Fallback values" };

const skills = {
  "Programming Languages": ["Java", "C", "C++", "Python", "HTML", "CSS", "SQL"],
  "Android Development": ["Android (Java, XML)", "Figma"],
  "Backend Development": ["Spring Boot", "Spring Data JPA"],
  "Databases": ["MySQL", "Firebase Realtime Database", "Cloud Firestore"],
  "Tools & Technologies": ["Git", "GitHub", "Postman", "Oracle Cloud (OCI)"],
  "Core Concepts": ["DSA", "OOP", "Operating Systems", "SDLC", "Computer Networks", "Cloud Computing"]
};

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

function renderContent() {
  $("#skills-grid").innerHTML = Object.entries(skills).map(([name, items]) => `<article class="skill-card reveal"><h3>${name}</h3><div class="skill-list">${items.map((item) => `<span>${item}</span>`).join("")}</div></article>`).join("");
  $("#projects-grid").innerHTML = projects.map((project, index) => `<article class="project-card reveal"><span class="project-index">0${index + 1} / PROJECT</span><h3>${project.title}</h3>${project.subtitle ? `<p class="project-date">${project.subtitle}</p>` : ""}<p class="project-date">${project.date}</p><p>${project.description}</p><div class="tag-list">${project.tech.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div><a class="text-link" href="${project.link}" target="_blank" rel="noreferrer">View on GitHub ↗</a></article>`).join("");
  $("#certificates-grid").innerHTML = certificates.map((certificate, index) => `<article class="certificate-card reveal"><div><h3>${certificate[0]}</h3><small>${certificate[1]}</small><p class="credential">ID: ${certificate[2]}</p></div><a class="text-link" href="${certificateLinks[index]}" target="_blank" rel="noreferrer">View Certificate ↗</a></article>`).join("");
}

function setupNavigation() {
  const menu = $("#nav-links");
  $(".menu-toggle").addEventListener("click", () => { const open = menu.classList.toggle("open"); $(".menu-toggle").setAttribute("aria-expanded", open); });
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => menu.classList.remove("open")));
  $(".theme-toggle").addEventListener("click", () => { document.documentElement.classList.toggle("light"); localStorage.setItem("portfolio-theme", document.documentElement.classList.contains("light") ? "light" : "dark"); $(".theme-icon").textContent = document.documentElement.classList.contains("light") ? "☀" : "☾"; });
  if (localStorage.getItem("portfolio-theme") === "light") { document.documentElement.classList.add("light"); $(".theme-icon").textContent = "☀"; }
  const sections = [...document.querySelectorAll("main section[id]")];
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { document.querySelectorAll(".nav-links a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)); } }), { rootMargin: "-35% 0px -55%" });
  sections.forEach((section) => observer.observe(section));
}

function setupReveal() { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: .12 }); document.querySelectorAll(".reveal").forEach((element, index) => { element.style.transitionDelay = `${Math.min(index % 5, 4) * 60}ms`; observer.observe(element); }); }

function setupScrollEffects() { const ring = $(".progress-ring"); const circumference = 119.4; window.addEventListener("scroll", () => { const max = document.documentElement.scrollHeight - innerHeight; const progress = max ? scrollY / max : 0; $("#scroll-progress").style.width = `${progress * 100}%`; $("#to-top").classList.toggle("visible", scrollY > 300); ring.style.strokeDashoffset = circumference * (1 - progress); }, { passive: true }); $("#to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" })); }

function setupTyping() { const words = ["Java Developer", "Backend Engineer", "Android Developer"]; let word = 0; let position = 0; let deleting = false; const element = $("#typing-text"); const tick = () => { const current = words[word]; element.textContent = current.slice(0, position); if (!deleting && position < current.length) position++; else if (deleting && position > 0) position--; else { deleting = !deleting; if (!deleting) word = (word + 1) % words.length; } setTimeout(tick, deleting ? 45 : position === current.length ? 1600 : 85); }; tick(); }

function renderStats(stats) {
  const platforms = [{ key: "leetcode", name: "LeetCode", url: `https://leetcode.com/u/${profiles.leetcode}/`, suffix: "solved" }, { key: "codechef", name: "CodeChef", url: `https://www.codechef.com/users/${profiles.codechef}`, suffix: "problems solved" }, { key: "gfg", name: "GeeksforGeeks", url: `https://www.geeksforgeeks.org/user/${profiles.gfg}/`, suffix: "problems solved" }];
  $("#stats-grid").innerHTML = platforms.map(({ key, name, url, suffix }) => { const value = stats[key]?.solved; const unavailable = value === null || value === undefined; return `<a class="stat-card reveal ${unavailable ? "unavailable" : ""}" href="${url}" target="_blank" rel="noreferrer"><span class="stat-label">${name}</span><strong class="stat-number" data-count="${unavailable ? 0 : value}">${unavailable ? "—" : "0"}${value === 1000 ? "+" : ""}</strong><span class="stat-meta">${unavailable ? "Stats unavailable" : `${stats.updatedAt ? `Updated ${new Date(stats.updatedAt).toLocaleDateString()}` : suffix}`}</span></a>`; }).join("");
  document.querySelectorAll(".stat-number[data-count]").forEach((element) => { const target = Number(element.dataset.count); let started = false; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !started) { started = true; let current = 0; const step = Math.max(1, Math.ceil(target / 35)); const count = () => { current = Math.min(current + step, target); element.textContent = `${current}${target >= 1000 ? "+" : ""}`; if (current < target) requestAnimationFrame(count); }; count(); observer.disconnect(); } }); observer.observe(element); }); setupReveal();
}

async function loadConfig() { try { const response = await fetch("data/config.json", { cache: "no-store" }); if (!response.ok) throw new Error("Config unavailable"); const config = await response.json(); profiles = config.profiles; formspreeEndpoint = config.formspreeEndpoint; $("#contact-form").action = `https://formspree.io/f/${formspreeEndpoint}`; } catch { /* Inline values support file:// mode. */ } }
async function loadStats() { await loadConfig(); try { const response = await fetch("data/stats.json", { cache: "no-store" }); if (!response.ok) throw new Error("Stats unavailable"); renderStats(await response.json()); } catch { renderStats(fallbackStats); } }

$("#contact-form").addEventListener("submit", async (event) => { if (formspreeEndpoint.includes("PASTE_FORMSPREE")) { event.preventDefault(); $(".form-status").textContent = "Add your Formspree endpoint in data/config.json to enable submissions."; } });
renderContent(); setupNavigation(); setupReveal(); setupScrollEffects(); setupTyping(); loadStats();
