package com.example.bookmanageserver.controller;

import com.example.bookmanageserver.domain.DemoVO;
import com.example.bookmanageserver.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "*")
@RestController
public class DemoController {
    @Autowired
    private DemoService demoService;

    @GetMapping("select")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<DemoVO> getSelectList(){ return demoService.select(); }

    @PostMapping("insert")
    @CrossOrigin(origins = "http://localhost:3000")
    public void insertDemoVo(@RequestBody DemoVO vo){ demoService.insert(vo); }
}