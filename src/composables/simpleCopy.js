var simplecopy = (function () {
  var d = document,
    b,
    cs,
    ss,
    f = false,
    n = d.createElement("DIV"),
    s = n.style;
  s.position = "fixed";
  s.color = "rgba(0,0,0,0)";
  function sc(t) {
    if (!b) {
      b = d.body;
    }
    n.innerText = t;
    b.appendChild(n);
    ss = x(n);
    cs = d.execCommand("copy", f, null);
    b.removeChild(n);
    return ss && cs;
  }
  function x(n) {
    var r,
      s,
      w = window.getSelection,
      c = b.createTextRange;
    if (c) {
      r = c();
      r.moveToElementText(n);
      r.select();
      return !f;
    } else if (w) {
      s = w();
      r = d.createRange();
      r.selectNodeContents(n);
      s.removeAllRanges();
      s.addRange(r);
      return !f;
    } else {
      return f;
    }
  }
  return sc;
})();

export default simplecopy;
