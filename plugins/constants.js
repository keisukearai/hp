const CONST = {
    API_BASE_URL: 'http://127.0.0.1:8000',
    API_URL_COMPANY: '/hp/company',
}

export default (context, inject) => {
    inject('CONST', CONST)
}