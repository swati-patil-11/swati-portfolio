import fs from "node:fs/promises";

await import(new URL("../data/config.js", import.meta.url));
const config = globalThis.PORTFOLIO_CONFIG.stats;
const file = new URL("../data/stats.json", import.meta.url);
let previous = {};
try { previous = JSON.parse(await fs.readFile(file, "utf8")); } catch { /* Start with empty values when no data exists yet. */ }

async function leetcode() {
  const query = `query userStats($username: String!) { matchedUser(username: $username) { submitStatsGlobal { acSubmissionNum { difficulty count submissions } } } }`;
  const response = await fetch("https://leetcode.com/graphql", { method: "POST", headers: { "content-type": "application/json", "user-agent": "portfolio-stats/1.0" }, body: JSON.stringify({ query, variables: { username: config.leetcode } }) });
  if (!response.ok) throw new Error(`LeetCode HTTP ${response.status}`);
  const data = await response.json(); const rows = data.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum; if (!rows) throw new Error("LeetCode profile not found");
  const get = (difficulty) => rows.find((row) => row.difficulty === difficulty)?.count || 0;
  return { solved: get("All"), easy: get("Easy"), medium: get("Medium"), hard: get("Hard") };
}

async function profilePage(url, selectors) { const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 portfolio-stats/1.0" } }); if (!response.ok) throw new Error(`Profile HTTP ${response.status}`); const html = await response.text(); for (const selector of selectors) { const match = html.match(selector); if (match) return { solved: Number(match[1].replace(/,/g, "")) }; } throw new Error("Solved count not found"); }
async function codechef() { return profilePage(`https://www.codechef.com/users/${config.codechef}`, [/Problems Solved[\s\S]{0,500}?([\d,]+)/i, /Fully Solved[\s\S]{0,300}?([\d,]+)/i]); }
async function gfg() { return profilePage(`https://www.geeksforgeeks.org/profile/${config.gfg}?tab=activity`, [/Problems Solved[\s\S]{0,400}?([\d,]+)/i, /problemSolved[^\d]{0,40}(\d+)/i]); }

// CodeChef and GFG do not provide official APIs; these page parsers can break when their markup changes.
const fetchers = { leetcode, codechef, gfg };
const result = { ...previous, updatedAt: new Date().toISOString() };
for (const key of Object.keys(fetchers)) { try { result[key] = { ...result[key], ...(await fetchers[key]()) }; console.log(`${key}: updated`); } catch (error) { console.warn(`${key}: ${error.message}; keeping previous value`); } }
await fs.writeFile(file, `${JSON.stringify(result, null, 2)}\n`);
