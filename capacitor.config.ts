import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "land.circles.beta",
  appName: "Circles",
  webDir: "dist",
  bundledWebRuntime: false,
};

if (process.env.IS_DEV) {
  config["server"] = {
    url: "http://192.168.1.238:3000",
    cleartext: true,
  };
}

console.log("config", config);

export default config;
