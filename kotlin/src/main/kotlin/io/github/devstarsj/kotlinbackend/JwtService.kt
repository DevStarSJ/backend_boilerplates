package io.github.devstarsj.kotlinbackend

import javax.servlet.http.HttpServletRequest

interface JwtService {
    fun makeJwt(): String
    fun checkJwt(jwt: String): Boolean
}