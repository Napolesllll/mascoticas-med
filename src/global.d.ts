// src/global.d.ts
export { };

declare global {
    interface Window {
        gtag?: (command: string, targetId: string, parameters?: Record<string, unknown>) => void;
    }
}