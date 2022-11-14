import httpRequest from '~/utils/httpRequest';
const productService = async () => {
    try {
        const res = await httpRequest.get('products');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default productService;
