export const sortActivityData = (activity) => {
  const sortedData = [
    { id: 1, name: 'breakfast', value: activity?.breakfast },
    { id: 2, name: 'soup', value: activity?.soup },
    { id: 3, name: 'secondcourse', value: activity?.second },
    { id: 4, name: 'snack', value: activity?.snack },
    { id: 5, name: 'sleep', value: activity?.sleep },
    { id: 6, name: 'pee', value: activity?.pee },
    { id: 7, name: 'poo', value: activity?.poo },
    { id: 8, name: 'supplies', value: activity?.supplies },
    { id: 9, name: 'teacher\'s comment', value: activity?.comment }
  ];

  return sortedData;
};