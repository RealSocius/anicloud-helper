if (
  document.URL.includes("anicloud.io/anime/stream") &&
  document.URL.includes("episode")
) {
  $("img[data-lang-key='3']")[0].click();
  $("[data-lang-key='3'] a.watchEpisode").click();

  let a = document.createElement("a");
  a.href = $(
    "[data-lang-key='3'] a.watchEpisode i.Streamtape"
  )[0].parentElement.href;
  a.innerHTML = "Download";
  a.setAttribute("style", "all: unset; cursor: pointer;");
  $(".changeLanguageBox")[0].appendChild(a);

  chrome.storage.sync.get("download", (data) => {
    let download = data.download;
    console.log(download);
    if (typeof download == "undefined") {
      download = false;
      chrome.storage.sync.set({ download });
    } else {
      if (download == true) {
        document.location = a.href;
      }
    }
  });
} else if (document.URL.includes("staffel")) {
  let b = document.createElement("li");
  b.onclick = () => {
    Array.from($("tbody[id^=season] .seasonEpisodeTitle a")).forEach((el) => {
      window.open(el.href, "_blank");
      window.focus();
    });
  };
  b.innerHTML = "📺 Staffel runterladen";
  b.classList.add(
    "col-md-12",
    "col-sm-12",
    "col-xs-6",
    "setWatchlist",
    "buttonAction"
  );
  b.setAttribute("style", "cursor: pointer;");
  $("ul.collections")[0].insertBefore(b, $("ul.collections")[0].children[2]);
}

if (
  document.URL.includes("strtapeadblock") ||
  document.URL.includes("streamtape")
) {
  $(document).ready(function () {
    let file_path = $("#robotlink").text() + "&dl=1";
    file_path = file_path.replaceAll("&amp;", "&");
    saveAs(file_path);
  });
}
