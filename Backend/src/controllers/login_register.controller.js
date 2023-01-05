const usuarios = {
    1: "usuario1",
    2: "usuario2",
    3: "usuario3",
    4: "usuario4",
    5: "Isaí Figueroa",
    6: "usuario6",
    7: "usuario7",
    8: "usuario8",
    9: "usuario9",
    10: "usuario10"
}
const register = async (req, res) => {
    const { nombre, usuario, email, foto, password } = req.body;
    const user = usuarios[id];
    if (user) {
        res.json({
            status: true,
            msg: "Usuario encontrado",
            user
        });
    }else{
        res.json({
            status: false,
            msg: "Usuario no encontrado",
            user
        });
    }
}
module.exports = {
    register
}