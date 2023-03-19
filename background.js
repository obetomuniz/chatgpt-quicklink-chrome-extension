chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (
    changeInfo?.status === "complete" &&
    tab?.url?.startsWith("https://chat.openai.com/chat")
  ) {
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    })
  }
})
