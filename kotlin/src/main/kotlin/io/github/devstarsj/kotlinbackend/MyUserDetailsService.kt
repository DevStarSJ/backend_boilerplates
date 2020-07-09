package io.github.devstarsj.kotlinbackend

import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class MyUserDetailsService: UserDetailsService {
    override fun loadUserByUsername(username: String?): UserDetails = User("root", "admin", arrayListOf())
}