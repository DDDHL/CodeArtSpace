export const useSetFontSize = () => {
  onMounted(() => {
    window.addEventListener('resize', setRootFontSize)
  })

  function setRootFontSize() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    document.documentElement.style.fontSize = width / 10 + 'px'
  }

  setRootFontSize()

  onUnmounted(() => {
    window.removeEventListener('resize', setRootFontSize)
  })
}
