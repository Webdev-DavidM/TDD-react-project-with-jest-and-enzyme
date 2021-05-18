export const findByTestAttr = (wrapper, val) => {
  console.log(wrapper, val);
  return wrapper.find(`[data-test="${val}"]`);
};
