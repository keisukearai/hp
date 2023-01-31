// content of plugins/axios.js
/*
// This is a global config declaration that works on any axios instance,
// meaning that if you just import axios from 'axios' in any place, you will get those.
// This will also work on the axios instance that nuxt creates and injects.
*/
export default function ({ $axios }) {
    $axios.defaults.xsrfHeaderName = 'x-csrftoken'
    $axios.defaults.xsrfCookieName = 'csrftoken'
}