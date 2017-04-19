import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedCosmetics = createReducer({},{
	[types.SET_SEARCHED_COSMETICS](state, action){
		// let newState = {}
		// var start = 1
		// action.cosmetics.forEach( (cosmetic) => {
		// 	newState[start] = Object.assign(cosmetic)
		// 	start+=1
		// })
		return action.cosmetics
	}
});

export const cosmeticDetails = createReducer({},{
	[types.SET_DETAILS_COSMETIC](state, action){
		let newState = Object.assign({},action.cosmetic)
		return newState
	}
});

export const cosmeticCount = createReducer(0,{
	[types.SET_SEARCHED_COSMETICS](state, action){
		return action.cosmetics.length
	}
})

export const comments = createReducer({},{
	[types.SET_COMMENTS](state, action){
		return action.comment
	}
})

export const barcode_number = createReducer(null,{
	[types.SET_BARCODE_NUMBER](state, action){
		return action.obj.data
	}
})

export const default_item_barcode = createReducer({
	name: '',
	barcode:'',
	description:'',
	img:'',
	brand:'',
},{
	[types.SET_DEFAULT_ITEM_BARCODE](state, action){
		return action.resp
	}
})