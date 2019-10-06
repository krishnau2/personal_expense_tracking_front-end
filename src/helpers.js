export const autoCompleteOpionGenerator = params => {
  return params.data.map(item => ({
    value: item[params.value],
    label: item[params.label]
  }));
};
