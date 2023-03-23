package com.example.bookmanageserver.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenerationTime;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Date;
import java.time.LocalDateTime;

@Entity
@Table(name = "BOOK")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class BookEntity {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String bookid;

    private String title;
    private String category;
    private String nation;
    private String genre;
    private Integer price;

    @CreationTimestamp
    private LocalDateTime insertdate;

    @UpdateTimestamp
    private LocalDateTime updatedate;
}
