const User = require("../models/user");
const axios = require("axios");


const profile_the_user = async (req, res) => {
    let result = [];
    for (let i = 0; i < req.session.user.watchLater.length; i++) {
        const id = req.session.user.watchLater[i];
        const title = `https://api.themoviedb.org/3/movie/${id}?api_key=9db36715f42a504baccc657a0d88c924&language=en-US`;
        const res = await axios.get(title);
        result[i] = res.data;
    }
    res.render('profile', {user: req.session.user, movies: result});
}

const profile_id = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    let result = [];
    for (let i = 0; i < user.watchLater.length; i++) {
        const id = user.watchLater[i];
        const title = `https://api.themoviedb.org/3/movie/${id}?api_key=9db36715f42a504baccc657a0d88c924&language=en-US`;
        const res = await axios.get(title);
        result[i] = res.data;
    }
    res.render('profile', {user: user, movies: result});
}

const profile_to_login = (req, res) => {
    res.redirect('login');
}

const profile_to_admin_panel = (req, res) => {
    console.log("look at admin");
    res.redirect('adminPanel');
}


const profile_delete = (req, res) => {

    User.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json( {redirect : '/adminPanel'} )
        })
        .catch((err) => console.log(err));
}

module.exports = {
    profile_id,
    profile_delete,
    profile_the_user,
    profile_to_login,
    profile_to_admin_panel
}