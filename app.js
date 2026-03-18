function compareNames(query) {
    const availRecipes = document.querySelectorAll('.recipe-stack a');
    availRecipes.forEach(card => {
        const name = card.textContent.toLowerCase();
        const searched = query.toLowerCase();

        if (name.includes(searched)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
}

// filter function
function filters(id) {
    const availRecipes = document.querySelectorAll('.recipe-stack a');
    availRecipes.forEach(card => {
        const name = card.textContent.toLowerCase();

        if (id === 'all') {
            card.style.display = 'block';
        } else if (id === 'sweet') {
            if (name.includes('banana') || name.includes('cookie') || name.includes('lemon')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        } else if (id === 'nonspicy') {
            if (name.includes('miso') || name.includes('soup')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        } else if (id === 'malaysian' || id === 'singaporean') {
            if (name.includes('abc')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        } else if (id === 'chinese' || id === 'spicy' || id === 'sour') {
            if (name.includes('shrimp')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        } else if (id === 'japanese') {
            if (name.includes('miso')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    }) 
}

// home page search
const form = document.getElementById('form');
const search = document.getElementById('text');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = search.value;
        console.log(query); // testing

        if (query) {
            window.location.href = `all-recipes.html`;
        }
    })
}

// all recipe page search 
const recipeSearch = document.getElementById('input');
if (recipeSearch) {
    recipeSearch.addEventListener('input', (event) => {
        const query = event.target.value;
        compareNames(query);
    })

    // filter buttons
    const allFilters = document.querySelectorAll('.h-scroll button');
    allFilters.forEach(filter => {
        const filterName = filter.id;
        filter.addEventListener('click', () => {
            filters(filterName);
        })
    })
}