import httpRequest from '~/utils/httpRequest';
const categoryService = {
    async getAll(params) {
        try {
            const res = await httpRequest.get('categories');
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
};

export default categoryService;
