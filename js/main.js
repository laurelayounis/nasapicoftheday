document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
   // const choice = document.querySelector('input').value
    const url= 'https://api.nasa.gov/planetary/apod?api_key=4gAXjmrZKsMfkWRK65eyAYTgt30MlXfv8SlznbH0'

    fetch(url)
        .then(res => res.json()) //parse as json
        .then(data =>{
            console.log(data)
            //add the img to the dom
            document.querySelector('img').src= data.hdurl
            //add the text
            document.querySelector('p').innerHTML= data.explanation
            //add title of photo
            document.querySelector('h2').innerHTML= data.title
        })
        .catch(err=>{
            console.log(`error ${err}`)
        });
}