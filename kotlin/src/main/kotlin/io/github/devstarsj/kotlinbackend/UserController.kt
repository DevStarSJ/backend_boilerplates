package io.github.devstarsj.kotlinbackend

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping("user")
class UserController(val userRepository: UserRepository) {
    @GetMapping(value= ["{id}"])
    fun getUser(@PathVariable id: Long): ResponseEntity<Optional<User>> {
        val user = userRepository.findById(id)

        return ResponseEntity(user, HttpStatus.OK)
    }
}