var talk = function() {
  var q = questions.pickOne()
  return function() {
    dialog.show(q.text, q.A, q.B, q.C, q.D, q.id);
  };
};

var obstacle1 = {
  element: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  talk: talk()
};

var obstacle2 = {
  element: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  talk: talk()
};

var obstacle3 = {
  element: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  talk: talk()
};
