export const groups = [
  { id: 1, label: "Oposy" },
  { id: 2, label: "Żabki" },
  { id: 3, label: "Krokodylki" },
  { id: 4, label: "Leniwce" },
  { id: 5, label: "Zombiaki" }
];

export const mealOptions = [
  { id: 1, label: "none" },
  { id: 2, label: "a bit" },
  { id: 3, label: "half" },
  { id: 4, label: "all" }
];

export const sleepOptions = [
  { id: 1, label: "none" },
  { id: 2, label: "< 30min" },
  { id: 3, label: "30min" },
  { id: 4, label: "1hour" },
  { id: 5, label: "90min" },
  { id: 6, label: "> 90min" }
];

export const questions = [
  {
    id: 1,
    question: "How much child ate on breakfast?",
    label: "Breakfast",
    prop: "breakfast",
    action: "onBreakfastChange",
    type: "single",
    options: "mealOptions"
  },
  {
    id: 2,
    question: "How much soup child ate?",
    label: "Soup",
    prop: "soup",
    action: "onSoupChange",
    type: "single",
    options: "mealOptions"
  },
  {
    id: 3,
    question: "How much child ate on second course?",
    label: "Second course",
    prop: "second",
    action: "onSecondChange",
    type: "single",
    options: "mealOptions"
  },
  {
    id: 4,
    question: "How much snacks child ate?",
    label: "Snack",
    prop: "snack",
    action: "onSnackChange",
    type: "single",
    options: "mealOptions"
  },
  {
    id: 5,
    question: "How long child was sleeping?",
    label: "Sleep",
    prop: "sleep",
    action: "onSleepChange",
    type: "single",
    options: "sleepOptions"
  },
  {
    id: 6,
    question: "How many times?",
    label: "Pee",
    prop: "pee",
    action: "onPeeChange",
    type: "number"
  },
  {
    id: 7,
    question: "How many times?",
    label: "Poo",
    prop: "poo",
    action: "onPooChange",
    type: "number"
  },
  {
    id: 8,
    question: "Any current needs/supplies?",
    label: "Supplies",
    prop: "supplies",
    action: "onSuppliesChange",
    type: "text"
  },
  {
    id: 9,
    questions: "Any comments?",
    label: "Comment",
    prop: "comment",
    action: "onCommentChange",
    type: "text"
  }
];