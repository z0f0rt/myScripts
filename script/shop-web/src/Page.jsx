import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ELEMS_PER_PAGE } from './constants/pagination'

export function Page(props) {
	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams()

	const productsFetch = url => fetch(url).then(res => res.json())
	//Вынести в API

	const getProductsOfNewPage = () => {
		let page = props.pageNumber
		let min = searchParams.get('min')
		let max = searchParams.get('max')
		let value = searchParams.get('value')
		const objForSend = {
			count: ELEMS_PER_PAGE,
			page,
			value,
		}
		if (max === '' && min === '') {
			return
		}
		if (min !== '') {
			objForSend.min = Number(min)
		}
		if (max !== '') {
			objForSend.max = Number(max)
		}

		let url = new URL('http://localhost:5000/products')

		Object.keys(objForSend).forEach(
			key => objForSend[key] && url.searchParams.append(key, objForSend[key])
		)

		searchParams.set('page', props.pageNumber)
		setSearchParams(searchParams)

		let productsPagePromise = productsFetch(url)
		productsPagePromise.then(res => {
			console.log(res)
			dispatch({ type: 'PRODUCTS', payload: res.page })
		})
	}
	return (
		<li className='even-page-number' onClick={getProductsOfNewPage}>
			{props.pageNumber}
		</li>
	)
}
