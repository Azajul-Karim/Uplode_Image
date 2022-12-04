let imageUpload = document.querySelector(".image-upload");
let imageContainer = document.querySelector(".image-container");

imageUpload.addEventListener("click", async (event) => {
  let file = document.querySelector(".image-input").files[0];
  let dataURL = await toBase64(file);

  imageContainer.src = dataURL;

  // console.log(dataURL);
});

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
