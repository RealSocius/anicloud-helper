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
  a.innerHTML = "Anschauen";
  a.setAttribute("style", "all: unset; cursor: pointer;");
  $(".changeLanguageBox")[0].appendChild(a);
}

if (
  document.URL.includes("strtapeadblock") ||
  document.URL.includes("streamtape")
) {
  $(document).ready(function () {
    let file_path =
      $("#videooolink")[0].innerHTML.toString().replaceAll("&amp;", "&") +
      "&dl=1";
    file_path = file_path.replaceAll("&amp;", "&");
    console.log(file_path);
    if (confirm("Download?")) {
      saveAs(file_path);
    }
  });
}
