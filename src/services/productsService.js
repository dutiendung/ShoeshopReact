import httpRequest from '~/utils/httpRequest';
const productService = {
    async getAll() {
        try {
            const res = await httpRequest.get('products');
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
    async getFilter({ _page, _limit, _sort, _order, category, color, size }) {
        try {
            const res = await httpRequest.get('products', {
                params: {
                    _page,
                    _limit,
                    _sort,
                    _order,
                    category,
                    color,
                    size,
                },
            });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
};
export default productService;
