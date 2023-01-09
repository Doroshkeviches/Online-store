export default function btnCopyClicked() {
  navigator.clipboard.writeText(location.href);
  const copy = document.getElementById('Copy')
  copy.innerHTML = 'Copied'
  setTimeout(()=> {
    copy.innerHTML = 'Copy search string'
  },1000)
}
