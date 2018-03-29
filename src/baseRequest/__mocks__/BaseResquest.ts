export default class BaseRequest {

    async get() {
        return { data: { name: '123' } };
    }

    async post(data: object) {
        return { data: { name: 'post123' } };
    }
    
}