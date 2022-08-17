import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;


const countryInputOn = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryInputOn.addEventListener('click', debounce(inputCountry, DEBOUNCE_DELAY));

function inputCountry(evt) {
    const countryName = evt.target.value.trim();
    if (countryName === "") {
        return;
    }
}

fetchCountries(countryName)
    .then(response => {
        if (response.length > 10) {
            Notify.info(
                'Too many matches found. Please enter a more specific name.'
            );
        }
        if (response.length >= 2 && response.length <= 10) {
            searchListCountry(response);
        }
        if (response.length === 1) {
            searchOneCountry(response)
        }
    })
    .catch(error => console.log(error));
clearSearchCountry();

function searchListCountry(response) {
    const markup = response
        .map(e => {
            return `<div class="item_country">
            <img class="img" src="${el.flags.svg}" width = 30 alt="flag">
            <h3 class="title">${el.name.official}<h3>
            </li>`;
        })
        .join('');
    countryList.innerHTML = markup;
}

