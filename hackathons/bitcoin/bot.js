//
// TODO: implement the logic to decide whether or not to make a trade
//
function decideWhetherOrNotToTrade(items){

	var prices = []
	prices.push(items.price)

	var take50 = _.takeRight(prices, 50)
		
	if(_.includes(items.tweet, 'game') && bank.currency === 'USD'){
		return 0
	}
	if(_.includes(items.tweet, 'news') && bank.currency === 'USD'){
		return 1
	}
	if(_.includes(items.tweet, 'money') && bank.currency === 'USD'){
		return 0
	}
	if(_.includes(items.tweet, 'fun') && bank.currency === 'USD'){
		return 1
	}
	if(_.includes(items.tweet, 'good') && bank.currency === 'USD'){
		return 1
	}
	if(_.includes(items.tweet, 'actor')  && bank.currency === 'USD'){
		return 0
	}
	if(_.includes(items.tweet, 'news')  && bank.currency === 'USD'){
		return 0
	}
	if(_.includes(items.tweet, 'movies')  && bank.currency === 'USD'){
		return 0
	}
	if(_.includes(items.tweet, 'tech')  && bank.currency === 'USD'){
		return 1
	}
	if(_.includes(items.tweet, 'fun')  && bank.currency === 'USD'){
		return 0
	}
	if(_.includes(items.tweet, 'music')  && bank.currency === 'USD'){
		return 1
	}
	if(_.includes(items.tweet, 'people')  && bank.currency === 'USD'){
		return 1
	}
	if(_.includes(items.tweet, 'apple')  && bank.currency === 'USD'){
		return 1
	}
	if(_.includes(items.tweet, 'google')  && bank.currency === 'USD'){
		return 1
	}
	// 	if(_.includes(items.tweet, 'game') && bank.currency === 'BITCOIN'){
	// 	return 0
	// }
	if(_.includes(items.tweet, 'news') && bank.currency === 'BITCOIN'){
		return 1
	}
	if(_.includes(items.tweet, 'money') && bank.currency === 'BITCOIN'){
		return 1
	}
	// if(_.includes(items.tweet, 'fun') && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'good') && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'actor')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'news')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'movies')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'tech')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'fun')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'music')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'people')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'apple')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
	// if(_.includes(items.tweet, 'google')  && bank.currency === 'BITCOIN'){
	// 	return 1
	// }
  //return Math.random() < 0.1
}
