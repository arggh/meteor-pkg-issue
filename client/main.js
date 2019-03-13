import { Template } from 'meteor/templating';
import { addStylesToHeadAndReturnMatchingClass } from 'meteor/testpkg';
import { random } from 'lodash';

import './main.html';

Template.body.onRendered(function () {
  const className = addStylesToHeadAndReturnMatchingClass({
    backgroundColor: 'red'
  });
  document.body.classList.add(className);
});

Template.body.helpers({
  getRandomNumber() {
    return random(0, 10);
  }
})