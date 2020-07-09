package io.github.devstarsj.kotlinbackend

import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

@EnableWebSecurity
class SecurityConfig: WebSecurityConfigurerAdapter() {
    override fun configure(web: WebSecurity) {
        web.ignoring()
            .antMatchers("/**")
            .anyRequest()
    }

    override fun configure(http: HttpSecurity) {
        http.authorizeRequests()
            .antMatchers("/**")
            .permitAll()
        http.csrf()
            .disable()
            .authorizeRequests()
            .antMatchers("/**")
            .permitAll()
            .anyRequest()
            .authenticated()
            .and()
            .formLogin()
            .disable()
    }
}