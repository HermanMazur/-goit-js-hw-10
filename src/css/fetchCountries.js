

export function fetchCountries(name) {
    const searchCountry = 'name,official,population,flags,languages';
    return fetch(
        'https://restcountries.com/v3.1/name/${name}?fields=${searchCountry}'
    ).then(response => {
        if (!response.ok) {
            throw new Error

        }
    })
}