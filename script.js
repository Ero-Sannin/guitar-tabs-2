let search = document.querySelector("#song-search");
let songs = document.querySelectorAll(".song-item");
console.log(songs);

function searchSong(event) {
    let searchValue = event.target.value.toLowerCase();

    songs.forEach(element => {
        title = element.innerText.toLowerCase();
        if (title.includes(searchValue)) {
            element.style.display = "list-item";
        }
        else {
            element.style.display = "none";

        }
    });

}

search.addEventListener("input", searchSong);