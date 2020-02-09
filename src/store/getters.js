//getter는 vue컴포넌트의 computed 속성과 유사하다.
    const getters  = {
    isAuth (state) {
        return !!state.token
    }
}

export default getters