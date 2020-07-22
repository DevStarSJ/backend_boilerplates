package io.github.devstarsj.kotlinbackend

import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name= "users")
class User(
        @Id
        @GeneratedValue
        var id: Long? = null,
        var username: String,
        var password: String,
        @OneToMany(mappedBy = "userId")
        val items: MutableList<Item> = mutableListOf<Item>(),
        @CreationTimestamp
        @Column(name = "created_at")
        var createdAt: LocalDateTime = LocalDateTime.now(),
        @UpdateTimestamp
        @Column(name = "updated_at")
        var updatedAt: LocalDateTime = LocalDateTime.now()
) {
        fun toDto(): UserDto? = UserDto(this)
}
