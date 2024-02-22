import ProductItem from '../ProductItem/ProductItem'
import { useSelector } from 'react-redux'
import { Product } from '../../type/type';
import { RootState } from '../../store/store';



export default function ProductList() {
    const { list, status }: { list: Product[], status: string } = useSelector((store: RootState) => store.products);
    return (
        <div>
            {
                status === "loading"
                    ? <p>Данные грузятся</p>
                    : list.map(product =>
                        <ProductItem key={product.id}
                            {...product} />)
            }
        </div>
    )
}