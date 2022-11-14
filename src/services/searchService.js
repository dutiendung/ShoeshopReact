import httpRequest from '~/utils/httpRequest';
const searchService = async (q) => {
    try {
        const res = await httpRequest.get('products', {
            params: {
                q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default searchService;
