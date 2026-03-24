import { SORT } from './constants.js'
import { alphabeticSort } from './utils.js'

export const filterLowerPrice = (req, item) => {
	let minPrice = req.query.min
	if (!minPrice) {
		return true
	}
	return item.price >= +minPrice
}

export const filterUpperPrice = (req, item) => {
	let maxPrice = req.query.max
	if (!maxPrice) {
		return true
	}
	return item.price <= +maxPrice
}

export const valueSorted = (req, array) => {
	if (req.query.value === SORT.ALPHABETICALY) {
		return alphabeticSort(array)
	}
	if (req.query.value === SORT.ASCENDING) {
		return array.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
	}
	if (req.query.value === SORT.DESCENDING) {
		return array.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
	}
	return array
}
