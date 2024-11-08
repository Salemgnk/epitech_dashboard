document.getElementById('fetchInfo').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: fetchIntraData
      }, (result) => {
        document.getElementById('info').innerText = result[0].result;
      });
    });
  });
  
  function fetchIntraData() {
    return document.body.innerText || "Aucune donnée trouvée.";
  }
  