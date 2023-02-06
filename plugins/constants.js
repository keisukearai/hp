const CONST = {
    API_BASE_URL: 'https://autoarai.com',
    // API_BASE_URL: 'http://127.0.0.1:8000',
    API_URL_COMPANY: '/hp/company',
    API_URL_NEWS: '/hp/news'
}

export default (context, inject) => {
    console.log("server:" + process.server)
    inject('CONST', CONST)
}