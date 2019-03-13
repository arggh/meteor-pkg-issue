// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See testpkg-tests.js for an example of importing.
import { css } from 'emotion';
import { random } from 'lodash';

export const addStylesToHeadAndReturnMatchingClass = (styles) => {
  const colors = ['green', 'orange', 'purple'];
  return css({ ...styles, color: colors[random(0, colors.length - 1)] });
}