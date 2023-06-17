async function loadIntoTable (url , table){
    const tableH = table.queryselector("thead");
    const tableB = table.queryselector("tbody");
    const response = await fetch(url);
    const {headers , rows } = await response.json();

    tableH.innerHTML = "<tr></tr>";
    tableB.innerHTML = "";  
    for (const headertext of headers){
        const headerElement = document.createElement("th");
        headerElement.textContent = headertext;
    }
}