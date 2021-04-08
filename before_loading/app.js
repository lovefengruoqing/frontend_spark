const btn = document.querySelector('#submitBtn');


const statusBar = document.createElement('span');
statusBar.style.cssText = `display: inline-block; height: 30px; vertical-align: middle; margin-left: 5px;`
statusBar.innerHTML = `<svg
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="28px"
height="28px"
viewBox="0 0 50 50"
style="enable-background: new 0 0 50 50"
xml:space="preserve"
>
<path
  fill="#FF6700"
  d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
  transform="rotate(275.098 25 25)"
>
  <animateTransform
    attributeType="xml"
    attributeName="transform"
    type="rotate"
    from="0 25 25"
    to="360 25 25"
    dur="0.6s"
    repeatCount="indefinite"
  ></animateTransform>
</path>
</svg>`

/**
 * 
 * @param {Event} e 
 */
const clickHandler = (e) => {
  let dom = e.target;
  dom.classList.add('loading');
  dom.appendChild(statusBar);

  setTimeout(() => {
    dom.classList.remove('loading');
    statusBar.parentNode.removeChild(statusBar);
  }, 2000);
}

btn.addEventListener('click', clickHandler, false);