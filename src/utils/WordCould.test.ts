import { getFontSizeClass, getTextColorClass } from "./wordCloud";


const mockTopics = [
  { id: "1", label: "A", volume: 10, sentiment: {}, sentimentScore: 50 },
  { id: "2", label: "B", volume: 20, sentiment: {}, sentimentScore: 50 },
  { id: "3", label: "C", volume: 30, sentiment: {}, sentimentScore: 50 },
  { id: "4", label: "D", volume: 40, sentiment: {}, sentimentScore: 50 },
  { id: "5", label: "E", volume: 50, sentiment: {}, sentimentScore: 50 },
  { id: "6", label: "F", volume: 60, sentiment: {}, sentimentScore: 50 },
];

describe("getTextColorClass", () => {
  it("returns green for score > 60", () => {
    expect(getTextColorClass(75)).toBe("text-green-500");
  });

  it("returns red for score < 40", () => {
    expect(getTextColorClass(35)).toBe("text-red-500");
  });

  it("returns gray for score between 40 and 60", () => {
    expect(getTextColorClass(50)).toBe("text-gray-500");
  });
});

describe("getFontSizeClass", () => {
  it("returns correct font size for lowest volume", () => {
    expect(getFontSizeClass(10, mockTopics)).toBe("text-xs");
  });

  it("returns correct font size for mid-range volume", () => {
    expect(getFontSizeClass(30, mockTopics)).toBe("text-base");
  });

  it("returns correct font size for highest volume", () => {
    expect(getFontSizeClass(60, mockTopics)).toBe("text-2xl");
  });
});
