package io.github.devstarsj.kotlinbackend

import javax.servlet.http.HttpServletRequest
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.stereotype.Component
import java.util.*

@Component
class JwtServiceImpl : JwtService {
    private val secretKeyBase = "80998746e938c7ae390422fbe8f83a8c5df5233fd25afd910dff8368f44659866960d30e10eb7efe444ca54b9c96fbf23a49751deff4e6d120141cf5dafb2d06"
    private val tokenValidTime = 1000L * 60 * 60 * 24 // 1.day

    override fun makeJwt(): String {
        val claims = Jwts.claims().setSubject("TestToken")
        claims.put("user_id", 23223)
        val now = Date()
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(Date(now.getTime() + tokenValidTime))
                .signWith(SignatureAlgorithm.HS256, secretKeyBase)
                .compact()
    }

    override fun checkJwt(jwt: String): Boolean {
        TODO("Not yet implemented")
    }
}