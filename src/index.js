import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;


const countryInputOn = document.querySelector('#search-box');
const countryList = document / querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryInputOn.addEventListener('click', debounce(inputCountry, DEBOUNCE_DELAY));

function inputCountry(evt) {
    const countryName = evt.target.value.trim();
    if (countryName === "") {
        return;
    }
}