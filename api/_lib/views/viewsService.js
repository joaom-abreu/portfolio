import { readViewsSalt } from "../config/env.js";
import { listRecentDays, toIsoDay } from "./day.js";
import {
  buildVisitorHash,
  isBot,
  readClientIp,
  readUserAgent,
} from "./visitorHash.js";
import { countViews, fetchDailyViews, insertView } from "./viewsRepository.js";

const DAILY_WINDOW_DAYS = 30;
const NO_VIEWS = 0;

export function fillDailyViews(rows, days) {
  const counts = new Map(rows.map(({ day, views }) => [day, views]));

  return days.map((date) => ({ date, count: counts.get(date) ?? NO_VIEWS }));
}

export async function getViewsSummary(now = new Date()) {
  const [total, rows] = await Promise.all([
    countViews(),
    fetchDailyViews(DAILY_WINDOW_DAYS),
  ]);

  return {
    total,
    daily: fillDailyViews(rows, listRecentDays(DAILY_WINDOW_DAYS, now)),
  };
}

export async function registerView(headers, now = new Date()) {
  const userAgent = readUserAgent(headers);

  if (isBot(userAgent)) {
    return;
  }

  const day = toIsoDay(now);
  const visitorHash = buildVisitorHash({
    ip: readClientIp(headers),
    userAgent,
    salt: readViewsSalt(),
    day,
  });

  await insertView({ visitedOn: day, visitorHash });
}
