new Vue({
    el: "#app",
    data:{
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: [],
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },

        attack(especial){
            this.hurt('monsterLife',5, 10, especial, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife > 0){
                this.hurt('playerLife',7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },

        hurt(attr, min, max, especial, source, target, cls){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[attr] = Math.max(this[attr] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },

        heal(){
            const plus = this.getRandom(1, 10)
            this.playerLife = Math.min(this.playerLife + plus, 100)
            this.registerLog(`Jogador ganhou força de ${plus}`, 'player')
        },

        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        registerLog(text, cls){
            this.logs.unshift({ text, cls})
        }
    },
    watch:{
        hasResult(value){
            if(value) this.running = false
        }
    }
})