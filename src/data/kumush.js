// Kumush (ichki valyuta) hisobi: yig'ilgan kumush va do'kondagi xaridlar
export const monitoring = [
  { id: "darsga-ishtirok", nomi: "Darsga ishtirok", xp: 86, kumush: 344 },
  { id: "uyga-vazifa", nomi: "Uyga vazifa", xp: 75, kumush: 300 },
];

export const jamiXP = monitoring.reduce((sum, m) => sum + m.xp, 0);
export const jamiKumush = monitoring.reduce((sum, m) => sum + m.kumush, 0);
export const BOSQICH_XP = 200; // keyingi bosqichga yetish uchun kerakli XP

const XARID_KEY = "najot_xaridlar";

export function loadXaridlar() {
  try {
    const saved = JSON.parse(localStorage.getItem(XARID_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function saveXaridlar(list) {
  try {
    localStorage.setItem(XARID_KEY, JSON.stringify(list));
  } catch {
    // saqlab bo'lmasa ham sahifa ishlayveradi
  }
}
