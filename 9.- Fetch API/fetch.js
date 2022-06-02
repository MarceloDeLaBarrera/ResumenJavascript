// Es similar al request de python.
//Es una promesa que retorna una respuesta, por eso se puede usar .then.

const apiKey = "sJJ4XFt6xChdx9DKz0T3riuet3wozzRN";

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
  .then((resp) => resp.json()) //Retorna un json con el body en la data y con meta.
  .then(( {data} ) => {
      const {url} = data.images.original;
      console.log(url)

      const img= document.createElement('img');
      img.src= url;
      document.body.append(img)


    }) //Se destructura de la resp.json, extrayendo el objeto data.
  .catch(console.warn);
