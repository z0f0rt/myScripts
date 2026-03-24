import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Page } from './Page'
import { Product } from './Product'
import { ELEMS_PER_PAGE } from './constants/pagination'

export function Products() {
	const [searchParams, setSearchParams] = useSearchParams()
	const [value, setValue] = useState('')
	const [min, setMin] = useState('')
	const [max, setMax] = useState('')

	const dispatch = useDispatch()
	const products = useSelector(state => state.prodProps.products)
	const pages = useSelector(state => state.pagersCount)

	useEffect(() => {
		const prevValue = searchParams.get('value')
		setValue(prevValue)
		const prevMin = searchParams.get('min')
		setMin(prevMin)
		const prevMax = searchParams.get('max')
		setMax(prevMax)
	}, [])

	function productsFetch(url) {
		return fetch(url).then(res => res.json())
	}

	const getProducts = () => {
		const filtersForm = { count: ELEMS_PER_PAGE, page: 1 }
		filtersForm.value = value
		if (max === '' && min === '') {
			return
		}
		if (min !== '') {
			filtersForm.min = min
		}
		if (max !== '') {
			filtersForm.max = max
		}
		let url = new URL('http://localhost:5000/products')

		Object.keys(filtersForm).forEach(
			key => filtersForm[key] && url.searchParams.append(key, filtersForm[key])
		)

		searchParams.set('page', 1)

		if (min !== null) {
			searchParams.set('min', min)
		}
		if (max !== null) {
			searchParams.set('max', max)
		}
		searchParams.set('value', value)
		setSearchParams(searchParams)

		let newProducts = productsFetch(url)
		newProducts.then(res => {
			console.log(res)
			dispatch({ type: 'PRODUCTS', payload: res.page })
			dispatch({ type: 'PAGES', payload: res.howManyPages })
		})
	}

	let pagesArray = []
	for (let i = 1; i <= pages; i++) {
		pagesArray.push(i)
	}

	return (
		<div>
			{products.length === 0 && pages === 0 ? (
				<div>
					<div className='form-filter-value'>
						<div className='name-filter-value'>Фильтрация по цене</div>
						<div className='filter-value'>
							<input
								type='text'
								value={min}
								onChange={e => setMin(e.target.value)}
							/>{' '}
							-{' '}
							<input
								type='text'
								value={max}
								onChange={e => setMax(e.target.value)}
							/>{' '}
							<button onClick={getProducts}>Применить</button>
							<div>
								<select
									value={value}
									onChange={e => {
										setValue(e.target.value)
									}}
								>
									<option value={''}>НетСортировки</option>
									<option value={'ascending'}>По Возрастания</option>
									<option value={'descending'}>По Убыванию</option>
									<option value={'alphabeticaly'}>По Алфавиту</option>
								</select>
							</div>
						</div>
					</div>
					Товары отсутствуют!
				</div>
			) : (
				<div>
					<div className='form-filter-value'>
						<div className='name-filter-value'>Фильтрация по цене</div>
						<div className='filter-value'>
							<input
								type='text'
								value={min}
								onChange={e => setMin(e.target.value)}
							/>{' '}
							-{' '}
							<input
								type='text'
								value={max}
								onChange={e => setMax(e.target.value)}
							/>{' '}
							<button onClick={getProducts}>Применить</button>
							<div>
								<select
									value={value}
									onChange={e => {
										setValue(e.target.value)
									}}
								>
									<option value={''}>НетСортировки</option>
									<option value={'ascending'}>По Возрастания</option>
									<option value={'descending'}>По Убыванию</option>
									<option value={'alphabeticaly'}>По Алфавиту</option>
								</select>
							</div>
						</div>
					</div>
					<div className='window-product-1'>
						{products.map((el, i) => {
							return (
								<Product
									index={i}
									key={el.id}
									id={el.id}
									name={el.name}
									item={el.image}
									price={el.price}
								/>
							)
						})}
					</div>
					<div className='pagination'>
						{pagesArray.map((el, i) => {
							return (
								<ul>
									<Page
										pageNumber={el}
										key={i}
										pages={pages}
										// searchParams={props.searchParams}
										// setSearchParams={props.setSearchParams}
									/>
								</ul>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}
