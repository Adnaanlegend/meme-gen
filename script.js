const generateBtn = document.querySelector(".generate");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector(".meme-image");
const authorOut = document.querySelector(".author");

function getMeme() {
  try {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((res) => res.json())
      .then((data) => {
        const { title, url, author } = data;

        memeTitle.innerText = title;
        memeImg.src = url;
        authorOut.innerText = `Meme by - ${author}`;

        console.log(title, url, author);
      });
  } catch (err) {
    console.log(err);
  }
}
getMeme();

generateBtn.addEventListener("click", () => {
  getMeme();
});
