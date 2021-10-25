Vue.config.devtools = true;

let idtachi
let itemlength
let round
let pk = []
let next = []

var vm = new Vue({
    el: '#App',
    data: {
        rount: false,
        items: [{
                name: "a",
                id: "1",
                src: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "b",
                id: "2",
                src: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "c",
                id: "3",
                src: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "d",
                id: "4",
                src: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "e",
                id: "5",
                src: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "f",
                id: "6",
                src: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "g",
                id: "7",
                src: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "h",
                id: "8",
                src: "",
                view: false,
                lose: true,
                going: false,
            },
        ],
        datas: [{

        }],
    },

    methods: {
        team_pick() {
            let ran2 = parseInt(Math.random() * itemlength);

            if (round <= 0) {
                this.next_round()
            }
            else {
                if (this.items[ran2].going == false) {
                    this.items[ran2].view = true
                    this.items[ran2].going = true
                    this.datas.push(this.items[ran2])
                    pk.push(this.items[ran2].id)
                    round--
                    console.log(round)
                };

                if (pk.length < 2) {
                    this.team_pick()
                }
            }
            // this.items.forEach(element => {
            //     console.log(element.id)

            // });
        },
        eran(eran_name) {
            eran_name--
            alert(this.items[eran_name].name + "獲勝")
            next.push(this.items[eran_name].id)
            this.datas = []
            console.log(next)
            pk = []
            this.team_pick()
        },
        next_round() {
            if (next.length > 0) {
                round = next.length
                next.forEach(element => {
                    element--
                    this.items[element].going = false
                });
                next = []
                console.log(round)
                this.team_pick()
            } else {
                this.datas[0].lose= false
                console.log('owari')
                console.log(this.datas)
            }

        },
    },
    created() {
        round = this.items.length
        itemlength = this.items.length
        idtachi = itemlength
        if (itemlength % 4 != 0) {
            alert("要4的倍數才能正常運行");
            $("#App").toggle()
        }

        this.team_pick()
    },
})