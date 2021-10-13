Vue.config.devtools = true;
var vm = new Vue({
    el: '#App',
    data: {
        items: [{
                name: "a",
                id: "1",
                src: "",
                team: ""
            },
            {
                name: "b",
                id: "2",
                src: "",
                team: ""
            },
            {
                name: "c",
                id: "3",
                src: "",
                team: ""
            },
            {
                name: "d",
                id: "4",
                src: "",
                team: ""
            },
        ],
    },
    methods: {
        team_pick() {

        }
    },
    created() {
        let ran = parseInt(Math.random() * 2);
        let itemlength = this.items.length
        console.log(itemlength % 2)
        if (itemlength % 2 == 1) {
            alert("要偶數才能正常運行");
            $("#App").toggle()
        }

    },
})