const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

if(!id) throw new Error("ID is null")
    
console.log(id.toUpperCase());