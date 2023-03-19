;(function () {
  const urlParams = new URLSearchParams(window.location.href.split("?")[1])
  if (urlParams.has("q")) {
    const query = urlParams.get("q")

    if (query) {
      const queryInput = document.querySelector("textarea")
      queryInput.disabled = "disabled"
      queryInput.placeholder = "Loading..."

      setTimeout(() => {
        queryInput.disabled = ""
        queryInput.placeholder = ""
        queryInput.value = query
        queryInput.nextSibling.click()
      }, 3000)
    }
  }
})()
