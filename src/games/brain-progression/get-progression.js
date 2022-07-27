const getProgression = (start, step, length, hiddenNumberIndex) => {
  const answer = {
    progression: [start],
    hiddenNumber: '',
  };

  for (let i = 1; i < length; i += 1) {
    const progressinMember = start + (step * i);
    answer.progression.push(progressinMember);
  }

  answer.hiddenNumber = answer.progression[hiddenNumberIndex].toString();
  answer.progression[hiddenNumberIndex] = '..';
  answer.progression = answer.progression.join(' ');

  return answer;
};

export default getProgression;
