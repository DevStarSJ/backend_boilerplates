package io.github.devstarsj.kotlinbackend

import java.time.LocalDateTime

class ItemDto {
    val id: Long?
    val name: String
    val price: Int
    val userId: Long?
    val createdAt: LocalDateTime
    val updatedAt: LocalDateTime

    constructor(item: Item) {
        id = item.id
        name = item.name
        price = item.price
        userId = item.userId
        createdAt = item.createdAt
        updatedAt = item.updatedAt
    }
}