export const SessionStorage = {
  saveRecord(key: string, value: any) {
    if (value == undefined) {
      return;
    }

    sessionStorage.setItem(key, JSON.stringify(value));
  },

  getRecord(key: string) {
    if (typeof window !== "undefined") {
      return window.sessionStorage.getItem(key);
    }
    return "";
  },
};
