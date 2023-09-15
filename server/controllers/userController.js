const { User, Role } = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, login) => {
    return jwt.sign({ id, login },
        process.env.SECRET_KEY,
        { expiresIn: '24h' },
    )
}



class UserController {
    async register(req, res) {
        try {
            const { login, password, lastName, firstName, middleName, previousSurname, dataOfBirth, email, phone, phoneSecond } = req.body.user;
            const userRole = new Role()
            // const admin = await Role.findOne({ where: { value: "ADMIN" } })
            // const moder = await Role.findOne({ where: { value: "MODERATOR" } })
            const candidate = await User.findOne({ where: { login } })
            const candidateToo = await User.findOne({ where: { email } })
            if (candidate) {
                return res.json({ message: `Пользователь с таким логином существует` })
            }
            if (candidateToo) {
                return res.json({ message: `Пользователь с таким email существует` })
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({ login, email, password: hashPassword, lastName, firstName, middleName, previousSurname, dataOfBirth, phone, phoneSecond, roles: [userRole.value], })
            const token = generateJwt(user.id, user.login)
            res.json({ user, token, message: 'Регистрация прошла успешна' })
        } catch (error) {
            console.log(error)
            res.json({ message: 'Ошибка при создании пользователя!' })
        }
    }
    async login(req, res) {
        try {
            const { login, password } = req.body
            const user = await User.findOne({ where: { login: login } })
            if (!user) {
                return res.json({ message: `Пользователя с таким Login не существует` })
            }
            const comparePassword = bcrypt.compareSync(password, user.password)
            // console.log(comparePassword)
            if (!comparePassword) {
                return res.json({ message: 'Неверный пароль!' })
            }
            const token = generateJwt(user.id, user.login)
            res.json({ token, user, message: 'Вы вошли в систему!' })
        } catch (error) {
            res.json({ message: 'Ошибка при авторизации!' })
        }
    }
    async getMe(req, res) {
        try {
            const user = await User.findOne({ where: { id: req.userId } })
            if (!user) {
                res.json({ message: 'Такого пользователя не существует!' })
            }
            const token = generateJwt(user.id, user.login)
            res.json({ token, user })
        } catch (error) {
            res.json({ message: 'Нет доступа!' })
        }
    }
    async updateOne(req, res) {
        try {
            const { passport, dataOfIssue, residenceAddress, residentialAddress, whoIssuedThePassport } = req.body.user
            await User.update({ passport, dataOfIssue, residenceAddress, residentialAddress, whoIssuedThePassport }, { where: { id: req.userId } })
            const user = await User.findOne({ where: { id: req.userId } })
            res.json({ user })
        } catch (error) {
            res.json({ message: 'Нет доступа!' })
        }
    }
    async updateTwo(req, res) {
        try {
            const { placeOfWorOrStudy, officePhone, positionOrSpecialty, howDidYouFindOut } = req.body.user
            await User.update({ placeOfWorOrStudy, officePhone, positionOrSpecialty, howDidYouFindOut }, { where: { id: req.userId } })
            const user = await User.findOne({ where: { id: req.userId } })
            res.json({ user })
        } catch (error) {
            res.json({ message: 'Нет доступа!' })
        }
    }
}


module.exports = new UserController()