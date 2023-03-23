package com.example.bookmanageserver.dto;

import com.example.bookmanageserver.domain.BookEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SearchDTO<T> {
    private String point;
    private String value;
    private String nation;
    private String sub;

    public SearchDTO dtoToEntity() {
        return SearchDTO.builder()
                .point(point)
                .value(value)
                .nation(nation)
                .sub(sub)
                .build();
    }
}