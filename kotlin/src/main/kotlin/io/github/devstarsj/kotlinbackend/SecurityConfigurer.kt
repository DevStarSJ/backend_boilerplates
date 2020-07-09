package io.github.devstarsj.kotlinbackend

import io.netty.util.internal.NoOpTypeParameterMatcher
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.password.NoOpPasswordEncoder

@EnableWebSecurity
class SecurityConfigurer: WebSecurityConfigurerAdapter() {
    @Autowired
    private lateinit var myUserDetailsService: MyUserDetailsService

    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.userDetailsService(myUserDetailsService)
    }

//    @Bean
//    fun passwordEncoder(): PasswordEncoder = NoOpPasswordEncoder.getInstance()
}