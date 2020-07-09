package io.github.devstarsj.kotlinbackend

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class HelloResource {
    @GetMapping(value =["/hello"])
    fun hello() = "Hello World"
}