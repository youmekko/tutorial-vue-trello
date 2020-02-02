import Vue from 'vue';
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAddBoard: false,
        boards: []
    },
    mutations: {
        SET_IS_ADD_BOARD(state, toggle){ 
            state.isAddBoard = toggle
        },
        SET_BOARDS(state, boards){
            state.boards = boards
        }
    },
    actions: {
        ADD_BOARD(_, {title}){
            return api.board.create(title)
        },
        /* actions의 첫번째 인자로는 컨텍스트 객체가 오는데 컨텍스트 객체 중에 commit 이라는 함수를 쓴다.
        내부적으로 SET_BOARDS를 이용해 boards 상태를 갱신하도록 한다. */
        FETCH_BOARDS({ commit }){
            return api.board.fetch().then(data => {
                commit('SET_BOARDS', data.list)
            })
        }
    }
})

export default store;