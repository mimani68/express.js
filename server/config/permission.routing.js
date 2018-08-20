
module.exports.router_object = {

    index_app:{
        main: ["user", "vip"],
        user: ["user", "vip"],
        ecu:  ["user", "vip"]
    },
    user_api: {
        main: ["user", "vip"],
        getAllUsers: ['admin', "vip"],
        show_me: ["user", "admin", "vip"],
    },
    

}
