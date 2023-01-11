export const SessionStorage = {
  saveRecord(key: string, value: any) {
    if (value == undefined) {
      return;
    }

    sessionStorage.setItem(key, JSON.stringify(value));
  },

  getRecord<T extends any>(key: string) {
    if (typeof window === "undefined") {
      return null;
    }
    const item = window.sessionStorage.getItem(key);

    if (!!item) {
      return JSON.parse(item) as T;
    }

    return null;
  },
};
