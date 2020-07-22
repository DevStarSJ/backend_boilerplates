package io.github.devstarsj.kotlinbackend

import com.fasterxml.jackson.annotation.JsonIgnore
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "items")
data class Item(
        @Id
        @GeneratedValue
        var id: Long? = null,
        var name: String,
        var price: Int,
        @Column(name="user_id")
        var userId: Long? = null,

        @ManyToOne(optional = true)
        @JoinColumn(name = "user_id", insertable = false, updatable = false)
        @JsonIgnore
        val user: User? = null,

        @CreationTimestamp
        @Column(name = "created_at")
        var createdAt: LocalDateTime = LocalDateTime.now(),
        @UpdateTimestamp
        @Column(name = "updated_at")
        var updatedAt: LocalDateTime = LocalDateTime.now()
)