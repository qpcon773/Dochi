Vue.config.devtools = true;

let debue=[]
let team = ""

var vm = new Vue({
    el: '#App',
    data: {
        number: 0,
        items: [{
                name: "a",
                id: "1",
                src: "",
                team: "",
                view: false,
                lose: true
            },
            {
                name: "b",
                id: "2",
                src: "",
                team: "",
                view: false,
                lose: true
            },
            {
                name: "c",
                id: "3",
                src: "",
                team: "",
                view: false,
                lose: true
            },
            {
                name: "d",
                id: "4",
                src: "",
                team: "",
                view: false,
                lose: true
            },
            {
                name: "e",
                id: "5",
                src: "",
                team: "",
                view: false,
                lose: true
            },
            {
                name: "f",
                id: "6",
                src: "",
                team: "",
                view: false,
                lose: true
            },
        ],
    },
    methods: {
        team_pick() {
            let itemlength = this.items.length
            for(j=1;j<=2;j++){
                let ran2 = parseInt(Math.random() * itemlength);
                if(this.items[ran2].lose){
                    this.items[ran2].lose=false
                    debue.push(ran2)
                    this.items[ran2].view=true
                }else{
                    if(j==0){
                        j=2
                    }else{
                        j--
                    }
                }
                console.log(debue,j)
            }
        },
        team_clear() {
            console.log('1')
            this.items[debue[0]].view=false
            this.items[debue[1]].view=false
            debue=[]
        }
    },
    created() {
        let base = []
        let even = []
        let itemlength = this.items.length
        if (itemlength % 2 == 1) {
            alert("要偶數才能正常運行");
            $("#App").toggle()
        }

        for (i = 1; i <= itemlength; i++) {
            let ran = parseInt(Math.random() * 2);

            if (base.length >= itemlength / 2) {
                ran = 0
            } else if (even.length >= itemlength / 2) {
                ran = 1
            }

            if (ran % 2 == 0) {
                even.push(ran)
                team = "blue"
            } else {
                base.push(ran)
                team = "red"
            }

            this.items[i - 1].team = team
        }
    },
})
