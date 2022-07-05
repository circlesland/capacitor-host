import App from 'frame-app/src/App.svelte';

import type { ICirclesCustomWindow } from "frame-app/types/types";

declare var window: ICirclesCustomWindow;

window.authApi = {
  login: () => alert("login called from capacitor"),
  logout: () => alert("logout called from capacitor"),
};

const app = new App({
  target: document.getElementById("app"),
});

export default app;