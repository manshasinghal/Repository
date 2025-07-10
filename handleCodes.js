function handleCodes(codes) {
  const isAlpha = ch => {
    const code = ch.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  };

  const isNum = ch => {
    const code = ch.charCodeAt(0);
    return code >= 48 && code <= 57;
  };

  const isCodeValid = str => {
    if (str.length !== 7) return false;
    for (let i = 0; i < 3; i++) {
      if (!isAlpha(str[i])) return false;
    }
    for (let i = 3; i < 7; i++) {
      if (!isNum(str[i])) return false;
    }
    return true;
  };

  const validList = [];

  for (const item of codes) {
    if (isCodeValid(item)) {
      const formatted = item.slice(0, 3).toUpperCase() + item.slice(3);
      validList.push(formatted);
    }
  }

  validList.sort();

  const result = {
    totalCodes: codes.length,
    validCodes: validList.length,
    invalidCodes: codes.length - validList.length,
    normalizedValidCodes: validList
  };

  return result;
}

module.exports = { handleCodes };
