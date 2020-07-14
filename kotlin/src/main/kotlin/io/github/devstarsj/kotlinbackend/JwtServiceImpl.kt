package io.github.devstarsj.kotlinbackend

import javax.servlet.http.HttpServletRequest
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.stereotype.Component
import java.util.*
import javax.xml.bind.DatatypeConverter

@Component
class JwtServiceImpl : JwtService {
    private val secretKeyBase = "80998746e938c7ae390422fbe8f83a8c5df5233fd25afd910dff8368f446598669"
    private val tokenValidTime = 1000L * 60 * 60 * 24 // 1.day

    override fun makeJwt(): String {
        val claims = Jwts.claims().setSubject("TestToken")
        claims.put("user_id", 23223)
        claims.put("iss", "http://exchange:3001")
        claims.put("mfa", arrayOf("tel"))
        claims.put("amr", arrayOf(Amr("pwd", 1, "SUCCESS"), Amr("mfa", 2, "SUCCESS")))
        claims.put("version", Version(1, 0, 0))
        claims.put("session_key", "b40427161613934333032393437313c794a5c7135")
        val now = Date()
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(Date(now.getTime() + tokenValidTime))
                .signWith(SignatureAlgorithm.HS256, secretKeyBase)
                .compact()
    }

    override fun checkJwt(jwt: String): Boolean {
        val claims = Jwts.parser()
                .setSigningKey(DatatypeConverter.parseBase64Binary(secretKeyBase))
                .parseClaimsJws(jwt)
                .getBody()

        val expiration = claims.get("exp")
        val userId = claims.get("user_id")
        val amr = claims.get("amr")
        System.out.println(expiration)
        System.out.println(userId)
        System.out.println(amr)

        return true
    }
}