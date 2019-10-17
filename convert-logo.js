const fs = require("fs");
const favicons = require("favicons");

const config = {
  icons: {
    android: false, // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    appleIcon: false, // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    coast: false, // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    favicons: true, // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    firefox: false, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    windows: false, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    yandex: false // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
  }
};

if (!fs.existsSync("./dist")) {
  fs.mkdirSync("./dist");
}

favicons("./logo.png", config, (err, res) => {
  if (err) {
    console.log(err.message); // Error description e.g. "An unknown error has occurred"
    return;
  }

  res.images.forEach(fileContents => {
    console.log("Writing file: ", fileContents.name);
    fs.writeFile(`./dist/${fileContents.name}`, fileContents.contents, err => {
      if (err) console.error(err.message);
    });
  });

  console.log("🎉 Finished");
});
