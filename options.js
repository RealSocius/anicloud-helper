$(document).ready(() => {
  chrome.storage.sync.get("download", (data) => {
    let download = data.download;
    if (typeof download == "undefined") {
      download = false;
      chrome.storage.sync.set({ download });
    } else {
      $("#checkbox")[0].checked = download;
    }
  });
});

$(":checkbox").change(changeValue);

function changeValue() {
  let download = $("#checkbox")[0].checked;
  chrome.storage.sync.set({ download });
}
