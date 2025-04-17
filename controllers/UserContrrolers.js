

class UserContrrolers {

    static userLogin(req, res) {
        const {username, password} = req.body

        if (username === "danilaja" && password === "qwerty") {
            console.log("Berhasil login");
        }
        else {
            console.log("gagal login");
        }
    }

}

module.exports = UserContrrolers