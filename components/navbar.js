
function navbar(){
    return `
    <h1  onclick="window.location.href='index.html'"> Masai News </h1>
    <h4> Login </h4>
    <input type="text" id="search" placeholder="Search News"> 
    <h4> Statups </h4>
    <h4 onclick="window.location.href='search.html'"> Newsletters </h4>
    <h4> Video </h4>
    `
}

export default navbar();
