<template>
    <div class="login">
        <canvas ref="canvas" class="bg-canvas"></canvas>
        <div class="login-lgbox">
            <p class="login-wl fl">WELCOME</p>
            <p class="logo-bg fl"></p>
        </div>
        <div class="login-box">
            <div class="login-center">
                <el-form :model="loginFrom" :rules="loginRules" ref="loginForm">
                    <el-form-item>
                        <h5 class="login-title">Vue2.0 Echart Template</h5>
                    </el-form-item>
                    <el-form-item prop="account">
                        <el-input v-model="loginFrom.account" placeholder="请输入登录名">
                            <template slot="prefix">
                                <span class="el-icon-user-solid"></span>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginFrom.password" placeholder="请输入密码" type="password">
                            <template slot="prefix">
                                <span class="el-icon-lock"></span>
                            </template>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div>
                    <el-button type="primary" class="login-btn" :loading="logining" @click="login">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            logining: false,
            loginFrom: {
                account: 'admin',
                password: 'admin'
            },
            loginRules: {
                account: [{ required: true, message: '请输入登录名' }],
                password: [{ required: true, message: '请输入密码' }]
            }
        }
    },
    mounted () {
        this.renderBg()
    },
    methods: {
        async login () {
            const isValidate = await this.$refs.loginForm.validate().catch(() => -1)
            if (isValidate === -1) {
                return
            }
            this.logining = true
            const res = await this.$http.post('/login', this.loginFrom).catch(err => {
                this.$message.error(err.msg || '登录失败')
                return -1
            })
            if (res === -1) {
                this.logining = false
                return
            }
            this.$store.commit('setToken', res.obj.token)
            this.$router.push('/')
        },
        renderBg () {
            const scalcObj = {}
            scalcObj.cp1 = {
                x: 0.9,
                y: 0.4
            }
            scalcObj.cp2 = {
                x: 0.46,
                y: 0.80
            }
            const canvas = this.$refs.canvas
            const width = canvas.clientWidth
            const height = canvas.clientHeight
            canvas.width = width
            canvas.height = height
            const ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = '#cbd4ff'
            ctx.beginPath()
            ctx.moveTo(width * 0.19, 0)
            ctx.lineTo(width * 0.5, height)
            ctx.lineTo(width * 0.62, height)
            ctx.bezierCurveTo(width * scalcObj.cp1.x, height * scalcObj.cp1.y, width * scalcObj.cp2.x, height * scalcObj.cp2.y, width * 0.29, 0)
            ctx.lineTo(width * 0.19, 0)
            ctx.fill()
            ctx.closePath()

            ctx.fillStyle = '#1d3782'
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(0, height)
            ctx.lineTo(width * 0.5, height)
            ctx.bezierCurveTo(width * scalcObj.cp1.x, height * scalcObj.cp1.y, width * scalcObj.cp2.x, height * scalcObj.cp2.y, width * 0.19, 0)
            ctx.lineTo(0, 0)

            ctx.fill()
        }
    }
}
</script>
<style lang="scss" scoped>
.login-lgbox{
    position: absolute;
    top: 50px;
    left: 50px;
}
.login-wl{
    font-size: 60px;
    color: #cbd4ff;
    writing-mode: vertical-lr;
    // transform-origin: left bottom;
    // transform: rotate(90deg);
}
.logo-bg{
    width: 210px;
    height: 310px;
    background: url("~@/assets/logo.png") no-repeat center center;
}
.login{
    height: 100%;
}
.bg-canvas{
    width: 100%;
    height: 100%;
}
.login-box{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 482px;
    height: 440px;
    background: #fff;
    border-radius: 20px;
    margin-top: -200px;
    box-shadow: 0px 0px 5px 2px #edf8f8;
}
.login-center{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: calc(100% - 120px);
    height: 250px;
    margin: auto;
}
.login-title{
    font-size: 26px;
}
.login-btn{
    width: 100%;
    margin-top: 10px;
}
</style>
