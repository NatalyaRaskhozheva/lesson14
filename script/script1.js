const siteList = [
	{
		title: 'apple',
		owner: 'Steve Jobs',
		sponsors: [
			{
				secondName: 'Raskhozheva',
				firstName: 'Natalya',
				money: 1000
			},
			{
				secondName: 'Shevchenko',
				firstName: 'Taras',
				money: 20000
			},
			{
				secondName: 'Franko',
				firstName: 'Lisa',
				money: 13480
			}
		],
		year: 2023,
		cost: 9000
	},
	{
		title: 'Mikrosoft',
		owner: 'Bill Gates',
		sponsors: [
			{
				secondName: 'Сambridge',
				firstName: 'Kate',
				money: 10000
			},
			{
				secondName: 'Ivanenko',
				firstName: 'Dima',
				money: 13750
			},
			{
				secondName: 'Mouse',
				firstName: 'Dasha',
				money: 5890
			}
		],
		year: 2021,
		cost: 25440
	},
	{
		title: 'Notino',
		owner: 'Alisa Gilbert',
		sponsors: [
			{
				secondName: 'Horos',
				firstName: 'Misha',
				money: 13900
			},
			{
				secondName: 'Tarasenko',
				firstName: 'Igor',
				money: 17750
			},
			{
				secondName: 'Misteryse',
				firstName: 'Diana',
				money: 45790
			}
		],
		year: 2007,
		cost: 21900
	}
]
//1) загальну вартість усіх сайтів

// const totalPrice = siteList.reduce(
// 	(prevSum, site) => prevSum + site.cost,
// 	0
// )

let totalPrice = 0
for (const site of siteList) {
	totalPrice += site.cost
}
document.write(`${totalPrice}<br>`)

//2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const numAfter2000Before2009 = siteList.reduce(
	(prevNum, site) => (site.year > 2000 && site.year < 2009 ? prevNum + 1 : prevNum),
	0
)
document.write(`${numAfter2000Before2009}<br>`)

//3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const numSponsorsMoney100k = siteList.reduce(
	(prevNum, site) => (site.sponsors.money > 100000 ? prevNum + 1 : prevNum),
	0
)
document.write(`${numSponsorsMoney100k}<br>`)

//4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

let allSponsors = []
for (const site of siteList) {
	for (const sponsor of site.sponsors) {
		allSponsors.push(sponsor.secondName)
	}
}
document.write(`${allSponsors}<br>`)

//5) знайти рік, коли прибуток був найбільшим
let maxCost = siteList[0].cost
let maxYearCost = siteList[0].year
for (const site of siteList) {
	if (site.cost > maxCost) maxCost = site.cost, maxYearCost = site.year
}
document.write(`${maxCost} - ${maxYearCost}<br>`)

//6) упорядкувати список за спаданням прибутку
function sortBulb(siteList) {
	let changed
	do {
		changed = false
		for (let i = 1; i < siteList.length; i++) {
			if (siteList[i - 1].cost < siteList[i].cost) {
				let tmp = siteList[i - 1]
				siteList[i - 1] = siteList[i]
				siteList[i] = tmp
				changed = true
			}
		}
	} while (changed === true);

	return console.log(siteList)
}
let sortCost = sortBulb(siteList)

//7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
let siteListCopyLess1000 = []
let siteListCopyMore1000 = []

const siteListCopy = JSON.parse(JSON.stringify(siteList))

for (const siteCopy of siteListCopy) {
	if (siteCopy.cost < 10000) siteListCopyLess1000.push(siteCopy)
	else siteListCopyMore1000.push(siteCopy)
}
console.log(siteListCopyLess1000)
console.log(siteListCopyMore1000)








