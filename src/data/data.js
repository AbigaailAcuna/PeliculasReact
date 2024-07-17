const URLapi = "https://pokeapi.co/api/v2/pokemon/";

const getMovies = async () => {
    try {
        const response = await fetch(URLapi);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Verifica la estructura de datos recibida
        if (!data.results || !Array.isArray(data.results)) {
            throw new Error('Unexpected data structure from API');
        }

        // Mapea los resultados para obtener el nombre y la imagen de cada Pokémon
        const movies = await Promise.all(data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            if (!pokemonResponse.ok) {
                throw new Error(`Failed to fetch details for ${pokemon.name}`);
            }
            const pokemonData = await pokemonResponse.json();
          //  console.log(pokemonData.id);
            return {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.other['official-artwork'].front_default
            };
        }));

        
        return movies;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return null;
    }
};

const getMovie = async (movieid) => {
    try {
        const response = await fetch(`${URLapi}/${movieid}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API Response:', data); 

        const movie = {
            id : data.id,
            name : data.name,
            image : data.sprites.other['official-artwork'].front_default
        };

       // console.log("aaa"+ movie.id)
        return movie;
        //solo es uno así que no mapeamos
    } catch (error) {
        console.error('Error fetching movies:', error);
        return null;
    }
};


export { getMovies, getMovie };
