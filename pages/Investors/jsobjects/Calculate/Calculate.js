export default {
	myFun1 () {
		var sum_quotas = 0
		var myVar1 = []
		var amount_invested = 0
		var quotas =  parseInt(parseFloat(value_invest_by_month.text).toFixed(2)/parseFloat(price_of_fii.text).toFixed(2));

		var dividend_to_receive = parseFloat(quotas).toFixed(2) * parseFloat(dividend.text).toFixed(2);

		var amount_invested_plus_dividend = parseFloat(value_invest_by_month.text).toFixed(2)
		var price = parseFloat(price_of_fii.text).toFixed(2)

		myVar1.push({ "Total de Cotas": quotas, "Investimento acumulado": amount_invested_plus_dividend,"Dividendos":dividend_to_receive });
		amount_invested = parseFloat(value_invest_by_month.text).toFixed(2)
		for (var i=0;i < amount_of_month.text;i++){

			amount_invested_plus_dividend = parseFloat(amount_invested_plus_dividend) + +parseFloat(dividend_to_receive).toFixed(2);
			amount_invested = parseFloat(amount_invested_plus_dividend) + +parseFloat(amount_invested).toFixed(2);
			console.log(amount_invested)
			quotas= parseInt((amount_invested_plus_dividend/price) + quotas)
			dividend_to_receive = parseFloat(quotas * parseFloat(dividend.text).toFixed(2))
			myVar1.push({ "Total de Cotas": quotas, "Investimento acumulado":amount_invested  ,"Dividendos":parseFloat(dividend_to_receive).toFixed(2) });
		}

		//price.setValue(myVar1)
		//Table1.setData({"NOME":"Maria","LAST_NAME":"joana"})
		Table1.setData(myVar1)


		//Table1.setData('A')
		//Table1.setData(["a","b","C"])


	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}