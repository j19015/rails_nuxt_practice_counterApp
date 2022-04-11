export const state=()=>({
    count:0
})

export const mutations={
    addCount: function(state){
        state.count++
    },
    resetCount:function(state){
        state.count=0
    }
}

export const actions={
    addCountAction(context){
        //console.log(context)
        context.commit('addCount')
    },
    resetCountAction(context){
        context.commit('resetCount')
    }
}