package com.example.bookmanageserver.dto;


import com.example.bookmanageserver.domain.BookEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class BookDTO {
    private String bookid;
    private String title;
    private String category;
    private String nation;
    private String genre;
    private Integer price;
    private LocalDateTime insertdate;
    private LocalDateTime updatedate;


    public BookDTO(final BookEntity entity) {
        this.bookid = entity.getBookid();
        this.title = entity.getTitle();
        this.category = entity.getCategory();
        this.nation = entity.getNation();
        this.genre = entity.getGenre();
        this.price = entity.getPrice();
        this.insertdate = entity.getInsertdate();
        this.updatedate = entity.getUpdatedate();
    }

    public static BookEntity dtoToEntity(final BookDTO dto) {
        return BookEntity.builder()
                .bookid(dto.getBookid())
                .title(dto.getTitle())
                .category(dto.getCategory())
                .nation(dto.getNation())
                .genre(dto.getGenre())
                .price(dto.getPrice())
                .insertdate(dto.getInsertdate())
                .updatedate(dto.getUpdatedate())
                .build();
    }

    public BookEntity dtoToEntity() {
        return BookEntity.builder()
                .bookid(bookid)
                .title(title)
                .category(category)
                .nation(nation)
                .genre(genre)
                .price(price)
                .insertdate(insertdate).updatedate(updatedate)
                .build();
    }
}
