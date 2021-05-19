import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
  console.log(wrapper, val);
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.PropTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
