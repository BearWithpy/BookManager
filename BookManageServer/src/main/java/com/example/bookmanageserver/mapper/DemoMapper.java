package com.example.bookmanageserver.mapper;

import com.example.bookmanageserver.domain.DemoVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface DemoMapper {
    List<DemoVO> select();
    void insert(DemoVO vo);
}
