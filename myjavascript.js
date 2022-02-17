//prendere il bottone dll'html e le value delle selcect
const select = document.getElementById("mode")
const startGame = document.getElementById("gioca")
const grigliaElement = document.getElementsByClassName("griglia")[0]


//ascoltare il click del button
startGame.addEventListener("click",function(){
    
    //impostare difficoltà
    const mode = select.value
    //console.log(mode)
    
    //dichiarare le colonne e le righe
    let rows;
    let columns;
    let cellSize;

    //determinare il numero di righe e colonne
    switch (mode){
        case "1":
        rows = 10
        columns = 10
        
        break
        case "2":
            rows = 9
            columns = 9
        break
        case "3":
            rows = 7
            columns = 7
        break
    }

    //calcolare il numero di celle per ogni modalità
    const numerodicelle = rows * columns
    //impostare dimensione dei div
    cellSize = `calc( 100% / ${ columns } )`
    
    //console.log(numerodicelle)

    //cancellare contenuto griglia precedente
    grigliaElement.innerHTML = []


    //generare una grigia
        //fare un ciclo
    for (let i = 0; i < numerodicelle; i++){
        //creare un contenitore per i numeri
        const cell = document.createElement("div")
        //impostare larghezza dei div
        cell.style.width = cellSize
        //appendere i numeri in base al numero di celle
        cell.append(i + 1)
        //aggiungere classe alle celle
        cell.classList.add("square")
        //appendere le celle alla griglia in html
        grigliaElement.append(cell)
        
    } 
})
 