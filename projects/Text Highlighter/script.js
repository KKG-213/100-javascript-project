document.getElementById("searchbox").addEventListener("input", function(){
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll("#itemList .form-list");

    items.forEach(item) => {

        const text = item.textContent.toLowerCase();
        const index = text.indexOf(searchTerm);

        if(index != -1 && searchTerm != ""){
            const highlightedText = item.textContent.substring(index, index+ serchTerm.length);
            

        }
    }

    
});