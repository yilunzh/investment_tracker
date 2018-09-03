const cash_deposit_withdraws = [{
	transaction_date: "2017/01/01",
	transaction_type: "deposit",
	transaction_amount: 25100,
	beginning_balance: 0,
	ending_balance: 25100
},
{
	transaction_date: "2017/02/01",
	transaction_type: "deposit",
	transaction_amount: 27000,
	beginning_balance: 25100,
	ending_balance: 52100
},
{
	transaction_date: "2017/03/01",
	transaction_type: "deposit",
	transaction_amount: 12000,
	beginning_balance: 52100,
	ending_balance: 64100
},
{
	transaction_date: "2017/07/01",
	transaction_type: "deposit",
	transaction_amount: 6000,
	beginning_balance: 64100,
	ending_balance: 70100
},
{
	transaction_date: "2017/08/01",
	transaction_type: "withdraw",
	transaction_amount: 12000,
	beginning_balance: 70100,
	ending_balance: 58100
}]

const orders = [{
	symbol: "TSLA",
	order_date: "2017/06/01",
	order_type: "buy",
	order_price: 250,
	shares: 100,
	commission: 4.95,
	gl_dollar: 6000,
	gl_percent: 0.24,
	snp_500_gain: 0.1,
	gain_against_snp_500: 0.14
},
{
	symbol: "TSLA",
	order_date: "2017/07/01",
	order_type: "buy",
	order_price: 270,
	shares: 100,
	commission: 4.95,
	gl_dollar: 4000,
	gl_percent: 0.24,
	snp_500_gain: 0.1,
	gain_against_snp_500: 0.14
},
{
	symbol: "TSLA",
	order_date: "2017/08/01",
	order_type: "sell",
	order_price: 300,
	shares: 50,
	commission: 4.95,
	gl_dollar: 4000,
	gl_percent: 0.24,
	snp_500_gain: 0.1,
	gain_against_snp_500: 0.14
},
{
	symbol: "CVNA",
	order_date: "2017/06/01",
	order_type: "buy",
	order_price: 12,
	shares: 1000,
	commission: 4.95,
	gl_dollar: 32000,
	gl_percent: 2.67,
	snp_500_gain: 0.1,
	gain_against_snp_500: 2.57
},
{
	symbol: "CVNA",
	order_date: "2017/07/01",
	order_type: "buy",
	order_price: 20,
	shares: 300,
	commission: 4.95,
	gl_dollar: 4000,
	gl_percent: 0.24,
	snp_500_gain: 0.1,
	gain_against_snp_500: 0.14
},
{ 
	symbol: "CVNA",
	order_date: "2018/07/15",
	order_type: "sell",
	order_price: 25,
	shares: 500,
	commission: 4.95,
	gl_dollar: 9500,
	gl_percent: 0.76,
	snp_500_gain: 0.1,
	gain_against_snp_500: 0.66
}]

const investments = [
	{
		symbol: "TSLA",
		has_active_position: true,
		position_start_date: "2015/08/01",
		position_end_date: "",
		current_date: "2018/07/01",
		current_price: 310,
		day_chg_dollar: 10,
		day_chg_percent: 0.0333,
		total_shares: 200,
		total_market_value: 62000,
		avg_order_price: 260.00, 
		total_gl_dollar: 10000,
		total_gl_percent: 0.19,
		orders: [{
			order_date: "2015/07/01",
			order_type: "buy",
			order_price: 250,
			shares: 100,
			commission: 4.95,
			gl_dollar: 6000,
			gl_percent: 0.24,
			snp_500_gain: 0.1,
			gain_against_snp_500: 0.14
		},
		{
			order_date: "2015/08/01",
			order_type: "buy",
			order_price: 270,
			shares: 100,
			commission: 4.95,
			gl_dollar: 4000,
			gl_percent: 0.24,
			snp_500_gain: 0.1,
			gain_against_snp_500: 0.14
		},
		{
			order_date: "2017/07/01",
			order_type: "sell",
			order_price: 300,
			shares: 50,
			commission: 4.95,
			gl_dollar: 4000,
			gl_percent: 0.24,
			snp_500_gain: 0.1,
			gain_against_snp_500: 0.14
		}]
	},
	{
		symbol: "CVNA",
		has_active_position: true,
		position_start_date: "2015/08/01",
		position_end_date: "",
		current_date: "2018/07/01",
		current_price: 44,
		day_chg_dollar: -2,
		day_chg_percent: -0.04348,
		total_shares: 1500,
		total_market_value: 66000,
		avg_order_price: 16.33, 
		total_gl_dollar: 41500,
		total_gl_percent: 1.69,
		orders: [{
			order_date: "2017/02/01",
			order_type: "buy",
			order_price: 12,
			shares: 1000,
			commission: 4.95,
			gl_dollar: 32000,
			gl_percent: 2.67,
			snp_500_gain: 0.1,
			gain_against_snp_500: 2.57
		},
		{
			order_date: "2017/07/01",
			order_type: "buy",
			order_price: 20,
			shares: 750,
			commission: 4.95,
			gl_dollar: 9500,
			gl_percent: 0.76,
			snp_500_gain: 0.1,
			gain_against_snp_500: 0.66
		},
		{
			order_date: "2018/08/01",
			order_type: "sell",
			order_price: 20,
			shares: 300,
			commission: 4.95,
			gl_dollar: 4000,
			gl_percent: 0.24,
			snp_500_gain: 0.1,
			gain_against_snp_500: 0.14
		}]
	}
]

const holidays = [
]

const accordions = document.querySelectorAll(".accordion");
const stocks = document.querySelector(".stocks")

function toggleAccordion(e) {
	element = e.target

	//this is requred due to event delegation: https://davidwalsh.name/event-delegateman
	if (element && element.classList.value.includes("accordion")) {
		element.classList.add("active")

		let panel = element.nextElementSibling;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			element.classList.remove("active")
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}

}

function initializeDisplay() {
	investments.forEach((investment) => {
		stocks.innerHTML = stocks.innerHTML + initializeInvestments(investment)
	})
}

function initializeOrders(orders) {
	let tmp = document.createElement("div")
	let table = document.createElement('table')
	let column_names = ["order_date", "order_type", "order_price", "shares", "commission", "gl_percent", "gl_dollar"]

	table.classList.add("orders")


	//generate header
	let row = document.createElement("tr")
	
	column_names.forEach((column) => {
		let key = column
		let cell = document.createElement("td")
		let cellText = document.createTextNode(`${key}`)
		cell.appendChild(cellText)
		row.appendChild(cell)
	})
	
	table.appendChild(row)

	//generate body
	orders.forEach((order) => {
		let row = document.createElement("tr")

		column_names.forEach((column) => {
			let key = column
			let cell = document.createElement("td")
			let cellText = document.createTextNode(`${order[key]}`)
			cell.appendChild(cellText)
			row.appendChild(cell)
		})
		table.appendChild(row)
		tmp.appendChild(table)
	})

	return tmp
}

function initializeInvestments(investment) {
	let heading = `<button class="accordion">${investment.symbol}: $${investment.current_price.toLocaleString('en')}
									${investment.day_chg_percent > 0 ? '+' : ''}${(investment.day_chg_percent*100).toFixed(2)}% / ${investment.day_chg_dollar > 0 ? '+' : ''}${investment.day_chg_dollar.toFixed(2)}</button>`
	
	let orders = initializeOrders(investment.orders, "buy")

	let summary  = `<div class="panel">
									<p>total shares: ${investment.total_shares.toLocaleString('en')}</p>
									<p>average order price: $${investment.avg_order_price.toLocaleString('en')}</p>
									<p>total market value: $${investment.total_market_value.toLocaleString('en')}</p>
									<p>total gain/loss: ${investment.total_gl_percent > 0 ? '+' : ''}${(investment.total_gl_percent*100).toFixed(2)}% / ${investment.total_gl_dollar > 0 ? '+' : ''}${investment.total_gl_dollar.toFixed(2)}</p>
									${orders.innerHTML}
								</div>`

	let content = heading + summary 

	return content
}

function calculateInvestmentPerformanceOverTime(time_interval) {
	let starting_balance = 0
	let current_balance = 0
	let date_interval = []
	let amount_invested = []
	let portfolio_balance = []

	//create min and max time range
	start_date = calculatePortfolioStartDate(cash_deposit_withdraws)
	end_date = new Date()
	current_date = new Date(start_date.setDate(start_date.getDate() - 1))
	end_date_str = getDateString(end_date)

	//create date interval and amount invested array for graph
	while(current_date <= end_date) {
		date_interval.push(getDateString(current_date))
		
		//iterate through each of the cash deposits/withdraws
		cash_deposit_withdraws.forEach((trx) => {
			transaction_date = new Date(trx.transaction_date)
			if(transaction_date.getTime() <= current_date.getTime()) {
				if(trx.transaction_type == "deposit") {
					current_balance += trx.transaction_amount
				} else {
					current_balance -= trx.transaction_amount
				}
			}
		})

		//calculate portfolio balance of each day here
		portfolio_balance.push(Math.random()*10000 + 100000)

		amount_invested.push(current_balance)
		current_balance = 0
		current_date.setDate(current_date.getDate() + time_interval)
	} 



	return {labels: date_interval, data: [amount_invested, portfolio_balance]}
}

function calculateInvestmentPerformanceOverTime2(time_interval) {
	let starting_balance = 0
	let current_balance = 0
	let date_interval = []
	let amount_invested = []
	let portfolio_balance = []

	//create min and max time range
	start_date = calculatePortfolioStartDate(cash_deposit_withdraws)
	end_date = new Date()
	current_date = new Date(start_date.setDate(start_date.getDate() - 1))
	end_date_str = getDateString(end_date)

	//create date interval and amount invested array for graph
	while(current_date <= end_date) {
		date_interval.push(getDateString(current_date))
		
		//iterate through each of the cash deposits/withdraws
		cash_deposit_withdraws.forEach((trx) => {
			transaction_date = new Date(trx.transaction_date)
			if(transaction_date.getTime() <= current_date.getTime()) {
				if(trx.transaction_type == "deposit") {
					current_balance += trx.transaction_amount
				} else {
					current_balance -= trx.transaction_amount
				}
			}
		})

		//calculate portfolio balance of each day here
		//portfolio_balance.push(Math.random()*10000 + 100000)

		amount_invested.push(current_balance)
		current_balance = 0
		current_date.setDate(current_date.getDate() + time_interval)
	} 

	state = calcualtePortfolioStateOnDate('2018-09-03')
	console.log("portfolio state on date", state)
	getPortfolioClosingPriceData(state).then((stock_prices) => {
		start_date2 = calculatePortfolioStartDate(cash_deposit_withdraws)
		end_date2 = new Date()
		current_date2 = new Date(start_date.setDate(start_date.getDate() - 1))
		while(current_date2 <= end_date2) {
			current_date_str = getDateString(current_date2)
			// console.log("current_date", getDateString(current_date2))
			// console.log("state:", state)
			// console.log("stock_prices", stock_prices)
			balance = calculatePortfolioBalance(state, stock_prices, current_date_str)
			portfolio_balance.push(balance)
			current_date2.setDate(current_date2.getDate() + time_interval)
					
		}
		console.log(portfolio_balance)
	})



	return {labels: date_interval, data: [amount_invested, portfolio_balance]}
}

balance2 = calculateInvestmentPerformanceOverTime2(30)
console.log("balance2:", balance2)

//calculate the portfolio value 
function calcualtePortfolioStateOnDate(date) {
		let portfolio_state = {}
		let current_date = new Date(date)

		//portfolio_state["date"] = date
		//console.log(portfolio_state)

		orders.forEach((order) => {
			//console.log(order)
			let order_date = new Date(order["order_date"])

			//calculate the number of shares on date
			if (order_date <= current_date) {
				let stock_symbol = order["symbol"]
				let order_type = order["order_type"]
				let shares = order["shares"]
				let order_price = order["order_price"]
				let commission = order["commission"]
				let total_order_dollars = shares * order_price

				if (!(stock_symbol in portfolio_state)) {
					portfolio_state[stock_symbol] = { total_shares: shares,
																						start_date: order_date,
																						total_commission: commission
																					} 	
				} else {
					portfolio_state[stock_symbol]["total_commission"] += commission
					if(order_type == "buy") {
						portfolio_state[stock_symbol]["total_shares"] += shares		
					} else if (order_type == "sell") {
						portfolio_state[stock_symbol]["total_shares"] -= shares	
					}
				}
			}
		})

		return portfolio_state

}

//console.log("portfolio state on date", calcualtePortfolioStateOnDate('2018-08-31'))


async function getPortfolioClosingPriceData(portfolio_state) {
		let stocks = Object.keys(portfolio_state)
		let stock_prices = {}

		//console.log(portfolio_state)
		total_balance = 0

		await asyncForEach(stocks, async (symbol) => {
			let start_date =  portfolio_state[symbol]["start_date"]
			let portfolio_state2 = Object.assign({}, portfolio_state)    //need to make copy to ensure the initial date doesn't get polluted
			let start_date2 =  new Date(portfolio_state2[symbol]["start_date"].toString())
			let working_days = workingDaysBetweenDates(start_date2, new Date())
			let closing_prices = await getStockClosingPriceData(symbol, start_date2, working_days)
			stock_prices[symbol] = closing_prices
		})

		return stock_prices
}

function calculatePortfolioBalance(portfolio_state, stock_prices, date) {
	let stocks = Object.keys(portfolio_state)
	let total_balance = 0
	stocks.forEach((symbol) => {
			stock_balance = stock_prices[symbol][date]*portfolio_state[symbol]["total_shares"]
			total_balance += stock_balance
			console.log(symbol)
			console.log("state:", portfolio_state)
			console.log("stock_prices", stock_prices)
			console.log("date", date, typeof date)
			console.log("price object", stock_prices[symbol])
			console.log("price:", stock_prices[symbol][date])
			console.log("shares: ", portfolio_state[symbol]["total_shares"])
			console.log("balance: ", stock_prices[symbol][date]*portfolio_state[symbol]["total_shares"])		
	})

	return total_balance

}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

function getStockClosingPriceData(stock_symbol, start_date, working_days) {

	const url = `https://api.iextrading.com/1.0/stock/${stock_symbol}/chart/5y?chartLast=${working_days}`

	return fetch(url)
		.then(res => res.json())
		.then(data => data.reduce((agg, cur) => {
			agg[cur["date"]] = cur["close"];
			return agg;
		}), {})
		.catch(err => { throw err })
}

function calculatePortfolioStartDate(deposits) {
	start_date = new Date(deposits[0]["transaction_date"])

	cash_deposit_withdraws.forEach((trx) => {
		current_date = new Date(trx.transaction_date)
		if(start_date > current_date) {
			start_date = current_date
		}
	})
	
	return start_date
}

function workingDaysBetweenDates(startDate, endDate) {

    // Validate input
    if (endDate < startDate)
        return 0;
    
    let days = 0
    let holidays = 0
    let currentDate = startDate
    let working_dates = []

    for (currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
    	//console.log(startDate)
    	let current_wday = currentDate.getDay()
	    if(checkHoliday(currentDate) == true) {
	    	if (current_wday == 0 || current_wday == 6) {
	    		days--
	    	}
	    	continue
	    }
    	
    	if(current_wday == 6 || current_wday == 0) {
    		continue
    	}

    	days += 1

    	//currentDate.setDate(currentDate.getDate() + 1)
    }

    //console.log(days)
    return days;
}

start = new Date('2017/06/01')
end = new Date()
console.log(workingDaysBetweenDates(start, end))


function checkHoliday(date) {
	let n_date = date.getDate()
	let n_month = date.getMonth() + 1
	let n_year = date.getFullYear()
	let n_wday = date.getDay()
	let n_wnumber = Math.floor(n_date / 7.1) + 1 //divide by 7.1 to ensure if holiday falls on the 7th fo the month, it's still accounted for. example labor day 9/7/2015
	let month_date = n_month + "/" + n_date
	let month_wnum_wday = n_month + "/" + n_wnumber + "/" + n_wday
	//console.log(n_date, n_month, month_date)

	if (month_date == '1/1'   // New Year's Day
			|| month_date == '7/4'   // Independence Day
			|| month_date == '12/25' // Christmas Day
			|| month_date == getEaster(n_year) 
	) {
		return true;
	}

	if (month_wnum_wday == '1/3/1'  // Birthday of Martin Luther King, third Monday in January
			|| month_wnum_wday == '2/3/1'  // Washington's Birthday, third Monday in February
			|| month_wnum_wday == '9/1/1'  // Labor Day, first Monday in September
			|| month_wnum_wday == '11/4/4' // Thanksgiving Day, fourth Thursday in November
	) {
		return true;
	}

	let end_of_month = new Date(date)
	end_of_month.setDate(1);
	end_of_month.setMonth(end_of_month.getMonth() + 1);
	end_of_month.setDate(end_of_month.getDate() - 1);
	let n_wnum_from_eom = Math.floor((end_of_month.getDate() - n_date) / 7.1) + 1
	let month_wnum_eom_wday = n_month + "/" + n_wnum_from_eom + "/" + n_wday

	if(month_wnum_eom_wday == "5/1/1") {
		return true;
	}

	return false
}

function getEaster(year) {
	var f = Math.floor,
		// Golden Number - 1
		G = year % 19,
		C = f(year / 100),
		// related to Epact
		H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
		// number of days from 21 March to the Paschal full moon
		I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11)),
		// weekday for the Paschal full moon
		J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
		// number of days from 21 March to the Sunday on or before the Paschal full moon
		L = I - J,
		month = 3 + f((L + 40)/44),
		day = L + 28 - 31 * f(month / 4);

	return month + "/" + day
}

function getDateString(date) {
	let month = (date.getMonth() + 1)
	let day = date.getDate()
	let year = date.getFullYear();

	return year + "-" + month + "-" + day
} 

balance = calculateInvestmentPerformanceOverTime(30)

initializeDisplay()

stocks.addEventListener('click', toggleAccordion);


accordions.forEach((accordion) => {
	accordion.addEventListener('click', toggleAccordion);
})

let ctx = document.getElementById("summary_chart").getContext('2d');
let data = {
		        labels: balance["labels"],
		        datasets: [{
		            label: 'Amount Invested',
		            data: balance["data"][0],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)'
		            ],
		            borderWidth: 1,
		            pointRadius: 0,
		            steppedLine: true,
		            fill: true
		        	},
		        	{
		        		label: 'Portfolio Balance',
		            data: balance["data"][1],
		            backgroundColor: [
		                'rgba(30, 99, 132, 0.2)'
		            ],
		            borderColor: [
		                'rgba(30,99,132,1)'
		            ],
		            borderWidth: 1,
		            pointRadius: 0,
		            steppedLine: true,
		            fill: true
		        	}]
					}

let summaryChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



