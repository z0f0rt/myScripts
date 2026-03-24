export const filtersAgregatorFabric = (filtersArray, req) => item => {
	for (let i = 0; i < filtersArray.length; i++) {
		const filter = filtersArray[i]
		if (!filter(req, item)) {
			return false
		}
	}
	return true
}
