import { useSelector } from 'react-redux'
import { BasketProduct } from './BasketProduct'

export function Basket() {
	let finalScore = 0
	const count = useSelector(state => state.counters.count)
	const products = useSelector(state => state.prodProps.products)

	const bascketValue = count.reduce((acc, v) => {
		if (v.count === undefined) {
			return acc
		}
		return acc + v.count
	}, 0)

	const productsFilter = products.filter(el => {
		return count.some(countEl => countEl.id === el.id)
	})

	return (
		<div className='basket-products'>
			{productsFilter.map(el => {
				return (
					<BasketProduct
						key={el.id}
						id={el.id}
						name={el.name}
						item={el.image}
					/>
				)
			})}
			<div className='flex-basket'>
				<div className='basket-items'>Выбрано товаров:{bascketValue}</div>
				<div className='basket-score'>Итого:{finalScore}</div>
			</div>
		</div>
	)
}
