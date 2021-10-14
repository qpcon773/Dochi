Vue.config.devtools = true;

let idtachi
let debue = []
let winner = []
let taiman = []
let team = ""
let itemlength

var vm = new Vue({
    el: '#App',
    data: {
        rount: false,
        items: [{
                name: "a",
                id: "1",
                src: "",
                view: false,
                lose: true
            },
            {
                name: "b",
                id: "2",
                src: "",
                view: false,
                lose: true
            },
            {
                name: "c",
                id: "3",
                src: "",
                view: false,
                lose: true
            },
            {
                name: "d",
                id: "4",
                src: "",
                view: false,
                lose: true
            },
            {
                name: "e",
                id: "5",
                src: "",
                view: false,
                lose: true
            },
            {
                name: "f",
                id: "6",
                src: "",
                view: false,
                lose: true
            },
            {
                name: "g",
                id: "7",
                src: "",
                view: false,
                lose: true
            },
            {
                name: "h",
                id: "8",
                src: "",
                view: false,
                lose: true
            },
        ],
    },

    methods: {
        team_pick() {
            for (j = 1; j <= 2; j++) {
                
                let ran2 = parseInt(Math.random() * itemlength);
                
                if (this.items[ran2].lose) {
                    
                    console.log(ran2)
                    console.log(this.items)
                    this.items[ran2].lose = false
                    debue.push(ran2)
                    this.items[ran2].view = true
                    idtachi--
                } else {
                    j--
                }

                if (idtachi == 0) {
                    j = 2
                    idtachi--
                } else if (idtachi < 0) {

                    if(winner.length>0){
                        winner.forEach(name => {
                            console.log("變更前",this.items[name-1])
                            this.items[name-1].lose = true
                            console.log("變更後",this.items[name-1])
                            this.rount=true
                        });
                        alert('下一輪')
                        idtachi = winner.length
                        itemlength = winner.length
                        winner = []
                        j = 2
                    }else{
                        alert('沒了')
                        j = 2
                    }
                }
            }
        },
        team_clear() {
            if (this.items[debue[0]]) {
                this.items[debue[0]].view = false
                this.items[debue[0]].lose = false
                this.items[debue[1]].view = false
                this.items[debue[1]].lose = false
                debue = []
            }
        },
        eran(id) {
            alert(id + "獲勝，進入下一回合")
            winner.push(id)
            console.log(winner)
            this.team_clear()
            this.team_pick()
        }
    },
    created() {
        let base = []
        let even = []
        itemlength = this.items.length
        idtachi = itemlength
        if (itemlength % 4 != 0) {
            alert("要4的倍數才能正常運行");
            $("#App").toggle()
        }

        // for (i = 1; i <= itemlength; i++) {
        //     let ran = parseInt(Math.random() * 2);

        //     if (base.length >= itemlength / 2) {
        //         ran = 0
        //     } else if (even.length >= itemlength / 2) {
        //         ran = 1
        //     }

        //     if (ran % 2 == 0) {
        //         even.push(ran)
        //         team = "blue"

        //     } else {
        //         base.push(ran)
        //         team = "red"
        //     }

        //     this.items[i - 1].team = team
        // }
        this.team_pick()
    },
})