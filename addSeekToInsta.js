function addSeekToInsta() {
  const vid = document.querySelector('video');
  vid.setAttribute('controls', true);
  vid.style.width = '100%';
  vid.style.height = '100%';
  const sib = vid.nextSibling;
  const child = sib.firstChild;
  const grandchild = child.firstChild;
  const badClass = 'x10l6tqk';
  function removeClass(el, className) {
    el.classList.remove(className);
  }
  removeClass(child, badClass);
  removeClass(grandchild, badClass);
}
addSeekToInsta();


