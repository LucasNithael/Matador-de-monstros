new Vue({
    el: "#app",
    data:{
        running: false,
        playerLife: 0,
        monsterLife: 60,
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{

    },
    watch:{

    }
})