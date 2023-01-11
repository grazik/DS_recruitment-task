export const isNotEmpty = <T>(elem: any): boolean => {
  if (elem == null) {
    return false;
  }

  if (elem === "") {
    return false;
  }

  if (Array.isArray(elem)) {
    return !!elem.length;
  }

  if (typeof elem === "object") {
    const objectValues = Object.values(elem);

    if (objectValues.length === 0) {
      return false;
    }

    return objectValues.some(isNotEmpty);
  }

  return true;
};
