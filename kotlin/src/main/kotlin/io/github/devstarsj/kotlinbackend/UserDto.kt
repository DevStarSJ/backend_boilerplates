package io.github.devstarsj.kotlinbackend

import java.time.LocalDateTime

class UserDto {
    val id: Long?
    val username: String?
    val password: String?
    val items: List<ItemDto>
    val createdAt: LocalDateTime?
    val updatedAt: LocalDateTime?

    constructor(user: User?) {
        id = user?.id
        username = user?.username
        password = user?.password
        createdAt = user?.createdAt
        updatedAt = user?.updatedAt
        items = user?.items?.map { ItemDto(it) } ?: arrayListOf()
    }
}