const CONST = {
    API_BASE_URL: 'https://autoarai.com',
    API_URL_COMPANY: '/hp/company',
}

export default (context, inject) => {
    inject('CONST', CONST)
}