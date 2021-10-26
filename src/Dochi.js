Vue.config.devtools = true;

let idtachi
let itemlength
let round
let pk = []
let next = []

var vm = new Vue({
    el: '#App',
    data: {
        ui: false,
        items: [{
                name: "a", //要顯示的名字
                id: "1", //id 照著123456789的順序打下去就好
                src: "", //圖片放置的連結
                class_name: "", //不用管他 直接複製就好
                view: false, //不用管他 直接複製就好
                lose: true, //不用管他 直接複製就好
                going: false, //不用管他 直接複製就好
            },
            {
                name: "b",
                id: "2",
                src: "",
                class_name: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "c",
                id: "3",
                src: "",
                class_name: "",
                view: false,
                lose: true,
                going: false,
            },
            {
                name: "d",
                id: "4",
                src: "",
                class_name: "",
                view: false,
                lose: true,
                going: false,
            },
        ],
        datas: [{

        }],
        winners: [{

        }],
    },

    methods: {
        team_pick() {
            let ran2 = parseInt(Math.random() * itemlength);

            if (round <= 0) {
                this.next_round()
            } else {
                if (this.items[ran2].going == false) {
                    this.items[ran2].view = true
                    this.items[ran2].going = true
                    this.datas.push(this.items[ran2])
                    pk.push(this.items[ran2].id)
                    round--
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
            this.ui = true
            eran_name--
            next.push(this.items[eran_name].id)
            this.winners.push(this.items[eran_name])
            // this.items[pk[0]-1].class_name="click"
            // this.items[pk[1]-1].class_name="click"
            pk = []

            // this.items[eran_name].class_name=""
            this.animation_time()

        },
        animation_time() {

        },
        animation_end() {
            motoda();
            this.datas = []
            this.team_pick()
        },
        next_round() {
            if (next.length > 0) {
                round = next.length
                next.forEach(element => {
                    element--
                    this.items[element].going = false
                });
                this.winners = []
                next = []
                this.team_pick()
            } else {
                this.ui = false
                this.datas[0].lose = false
            }

        },
    },
    created() {
        this.datas = []
        this.winners = []
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

$(".btn").click(function () {
    let target = $(this).parent().parent()
    target.attr("winner", 1)
    $("ul").not("[winner='1']").animate({
        width: "0%",
        opacity: "0"
    }, 500, function () {
        $(".animation_btn").removeClass("d_none")
        target.attr("winner", "")
    })
})

function motoda() {
    $(".animation_btn").addClass("d_none")
    $("ul").animate({
        width: "100%",
        opacity: "1"
    }, 0)
}