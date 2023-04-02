let obg = {
	year: 2023,
	month: 5,
	day: 2,
}
const N = parseInt(prompt('Введіть N'))
function getYear({ year, month }, N) {
	let currentYear = Math.floor((month + N) / 12)
	let newYear = currentYear + year
	return newYear
}
const shiftedMonth = getYear(obg, N)
alert(`Буде ${shiftedMonth} рік`)

