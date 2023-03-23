package com.example.bookmanageserver.service;

import com.example.bookmanageserver.domain.DemoVO;
import com.example.bookmanageserver.mapper.DemoMapper;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class DemoService {
    @Autowired
    private DemoMapper mapper;

    public List<DemoVO> select(){ return mapper.select(); }
    public void insert(DemoVO vo){ mapper.insert(vo);}
}