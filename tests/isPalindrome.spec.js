describe("multiplyTwoNumbers", () => {
  it("should return 10 for 2 * 5", () => {
    expect(multiplyTwoNumbers(2, 5)).toBe(10)
  })

  it("should return -10 for -2 * 5", () => {
    expect(multiplyTwoNumbers(-2, 5)).toBe(-10)
  })

  it("should return 4 for -2 * -2", () => {
    expect(multiplyTwoNumbers(-2, -2)).toBe(4)
  })

  it("should return 0 for 0 * 5", () => {
    expect(multiplyTwoNumbers(0, 5)).toBe(0)
  })

  it("should return 5.5 for 2.2 * 2.5", () => {
    expect(multiplyTwoNumbers(2.2, 2.5)).toBeCloseTo(5.5)
  })
})

describe("countVowels", () => {
  it("should return 2 for 'oso'", () => {
    expect(countVowels("oso")).toBe(2)
  })

  it("should return 0 for an empty string", () => {
    expect(countVowels("")).toBe(0)
  })

  it("should return 5 for 'aeiou'", () => {
    expect(countVowels("aeiou")).toBe(5)
  })

  it("should return 0 for 'bcdfg'", () => {
    expect(countVowels("bcdfg")).toBe(0)
  })

  it("should handle words with mixed case", () => {
    expect(countVowels("OsO")).toBe(2)
  })

  it("should return 3 for 'banana'", () => {
    expect(countVowels("banana")).toBe(3)
  })

  it("should handle strings with spaces", () => {
    expect(countVowels("I have spaces")).toBe(5)
  })

  it("should handle strings with punctuation", () => {
    expect(countVowels("hello!")).toBe(2)
  })

  it("should handle strings with numbers", () => {
    expect(countVowels("l33t")).toBe(0)
  })
})

describe("isPalindrome", () => {
  it("should return true for a single word palindrome", () => {
    expect(isPalindrome("radar")).toBe(true)
  })

  it("should return false for a non-palindrome word", () => {
    expect(isPalindrome("hello")).toBe(false)
  })

  it("should return false for an empty string", () => {
    expect(isPalindrome("")).toBe(false)
  })

  it("should return true for a single character", () => {
    expect(isPalindrome("a")).toBe(true)
  })
})

describe("findLongestWord", () => {
  it("should return 'ornitorrinco' for the provided array", () => {
    const words = ["oso", "pera", "ornitorrinco", "Berlín"]
    expect(findLongestWord(words)).toBe("ornitorrinco")
  })

  it("should return an empty string for an empty array", () => {
    expect(findLongestWord([])).toBe("")
  })

  it("should handle arrays with words of the same length", () => {
    const words = ["cat", "dog", "pig"]
    expect(findLongestWord(words)).toBe("cat")
  })

  it("should return the longest word when mixed with different lengths", () => {
    const words = ["notebook", "pen", "pencil", "eraser"]
    expect(findLongestWord(words)).toBe("notebook")
  })

  it("should handle arrays with a single word", () => {
    const words = ["loneliness"]
    expect(findLongestWord(words)).toBe("loneliness")
  })
})

describe("getUniqueWordsArray", () => {
  it("should return an array with unique words", () => {
    const words = ["oso", "gato", "gato", "oso"]
    const uniqueWords = getUniqueWordsArray(words)
    expect(uniqueWords).toEqual(["oso", "gato"])
  })

  it("should return an empty array when given an empty array", () => {
    const words = []
    const uniqueWords = getUniqueWordsArray(words)
    expect(uniqueWords).toEqual([])
  })

  it("should return the same array if all elements are unique", () => {
    const words = ["oso", "gato", "perro"]
    const uniqueWords = getUniqueWordsArray(words)
    expect(uniqueWords).toEqual(["oso", "gato", "perro"])
  })

  it("should handle arrays with different cases as unique", () => {
    const words = ["oso", "Oso", "OSO"]
    const uniqueWords = getUniqueWordsArray(words)
    expect(uniqueWords).toEqual(["oso", "Oso", "OSO"])
  })

  it("should return an array with a single word if all elements are the same", () => {
    const words = ["gato", "gato", "gato", "gato"]
    const uniqueWords = getUniqueWordsArray(words)
    expect(uniqueWords).toEqual(["gato"])
  })

  it("should not change the order of the unique elements", () => {
    const words = ["perro", "gato", "perro", "oso", "gato"]
    const uniqueWords = getUniqueWordsArray(words)
    expect(uniqueWords).toEqual(["perro", "gato", "oso"])
  })
})

describe("getAmountOfHours", () => {
  it("should return 1 for 3600 seconds", () => {
    expect(getAmountOfHours(3600)).toBe(1)
  })

  it("should return 1 for 3656 seconds", () => {
    expect(getAmountOfHours(3656)).toBe(1)
  })

  it("should return 0 for 3599 seconds", () => {
    expect(getAmountOfHours(3599)).toBe(0)
  })

  it("should return 2 for 7200 seconds", () => {
    expect(getAmountOfHours(7200)).toBe(2)
  })

  it("should return 0 for 0 seconds", () => {
    expect(getAmountOfHours(0)).toBe(0)
  })

  it("should return 24 for 86400 seconds (one day)", () => {
    expect(getAmountOfHours(86400)).toBe(24)
  })

  it("should return 23 for 86399 seconds (one second less than a day)", () => {
    expect(getAmountOfHours(86399)).toBe(23)
  })
})

describe("getPakosDailyMatchesAmount", () => {
  const pakoProfile = {
    name: "pakito_98",
    age: 25,
    hobbies: ["fishing", "football", "wine"],
    nailsColor: "black",
    bio: "buscando amigos ;P",
    successRate: 0.001,
    swipesPerMinute: 120,
  }

  it("should calculate the correct number of daily matches for Pako", () => {
    const matches = getPakosDailyMatchesAmount()
    const expectedMatches = Math.floor(120 * 60 * 24 * 0.001)
    expect(matches).toBe(expectedMatches)
  })

  it("should handle cases where Pako's success rate is zero", () => {
    const pakoWithZeroSuccess = { ...pakoProfile, successRate: 0 }
    const matches = getPakosDailyMatchesAmount(pakoWithZeroSuccess)
    expect(matches).toBe(0)
  })

  it("should handle cases where Pako does not swipe", () => {
    const pakoWithZeroSwipes = { ...pakoProfile, swipesPerMinute: 0 }
    const matches = getPakosDailyMatchesAmount(pakoWithZeroSwipes)
    expect(matches).toBe(0)
  })

  it("should return a whole number of matches", () => {
    const pakoWithHighSuccess = { ...pakoProfile, successRate: 0.5 }
    const matches = getPakosDailyMatchesAmount(pakoWithHighSuccess)
    expect(matches).toBe(Math.floor(120 * 60 * 24 * 0.5))
  })

  it("should handle cases with a custom profile", () => {
    const customPako = {
      swipesPerMinute: 100,
      successRate: 0.05,
    }
    const matches = getPakosDailyMatchesAmount(customPako)
    const expectedMatches = Math.floor(100 * 60 * 24 * 0.05)
    expect(matches).toBe(expectedMatches)
  })
})
