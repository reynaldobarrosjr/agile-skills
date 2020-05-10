export const APP_VERSION = 6;
export const IS_STAND_ALONE = ("standalone" in window.navigator && window.navigator.standalone) || window.matchMedia("(display-mode: standalone)").matches;
export const IS_TOUCH = window.matchMedia("(any-pointer: coarse)").matches;
export const DEFAULT_COMPACT_PX = 800;
export const GA_MEASUREMENT_ID = `UA-166009527-1`;
export const COMPACT_STORAGE_KEY = "compact";
export const FIRST_VISIT_DATE_STORAGE_KEY = "first_visit_date";
export const SNACK_CONTAINER_ID = "snack-container";
export const CLOSE_DESCRIPTION_EVENT = "closeDescription";

export const FIREBASE_CONFIG = {
	apiKey: "AIzaSyAUOz64wVZGtDNM6pSf4x12AyVxkHj3B1k",
  authDomain: "agile-skills.firebaseapp.com",
  databaseURL: "https://agile-skills.firebaseio.com",
  projectId: "agile-skills",
  storageBucket: "agile-skills.appspot.com",
  messagingSenderId: "735255778301",
  appId: "1:735255778301:web:37d312ad3619753f27bf94",
  measurementId: "G-NTMQQNXN5C"
};

export const LAZY_IMG_INTERSECTION_OPTIONS = {
	rootMargin: '200px',
	// [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09]
	threshold: Array(10).fill(0).map((_, i) => i / 100)
};

export function getShareUrl () {
	const {origin, pathname} = location;
	const cleanedPathname = pathname.length > 0 ? pathname[pathname.length - 1] === "/" ? pathname.slice(0, pathname.length - 1) : pathname : "";
	return `${origin}${cleanedPathname}`
}

export const getShareConfig = () => ({
	title: "Trilha da Agilidade",
	text: "Um panorama visual de conhecimentos que um agilista deve ter. ",
	url: getShareUrl()
});
