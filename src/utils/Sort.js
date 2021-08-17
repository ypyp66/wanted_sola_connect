const Sort = {
  asc: (arr = []) => {
    let result = [...arr];

    for (let i = 1; i < result.length; i++) {
      for (let j = i; j >= 0; j--) {
        if (result[j] < result[j - 1]) {
          let swap = result[j];
          result[j] = result[j - 1];
          result[j - 1] = swap;
        }
      }
    }

    return result;
  },
  reverse: (arr = []) => {
    let result = [...arr];

    for (let i = 1; i < result.length; i++) {
      for (let j = i; j >= 0; j--) {
        if (result[j] > result[j - 1]) {
          let swap = result[j];
          result[j] = result[j - 1];
          result[j - 1] = swap;
        }
      }
    }

    return result;
  },
};
export default Sort;
