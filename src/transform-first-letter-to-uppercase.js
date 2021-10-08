const transformFirstLetterToUppercase = (str) => {
  if (typeof str != "string")
    return "Passed argument is not a string";
  const words = str.split(" ");
  const capitalizedWords = words.map(word => {
    const [firstLetter, ...others] = word;
    return firstLetter.toUpperCase() + others.join("");
  });
  return capitalizedWords.join(" ");
};

module.exports = transformFirstLetterToUppercase;
