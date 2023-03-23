package com.example.bookmanageserver.controller;

import com.example.bookmanageserver.domain.BookEntity;
import com.example.bookmanageserver.dto.BookDTO;
import com.example.bookmanageserver.dto.ResponseDTO;
import com.example.bookmanageserver.dto.SearchDTO;
import com.example.bookmanageserver.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService service;

    String temporaryUserId = "temporary-user";

    // 입력 기능
    @PostMapping
    public ResponseEntity<?> createBook(@RequestBody BookDTO dto) {
        try {
            BookEntity entity = dto.dtoToEntity();
            System.out.println(entity);

            entity.setBookid(null);

            List<BookEntity> entities = service.create(entity);
            List<BookDTO> dtos = entities.stream().map(BookDTO::new).collect(Collectors.toList());
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().data(dtos).build();

            return ResponseEntity.ok().body(response);

        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("/search/title")
    public ResponseEntity<?> searchBook(@RequestBody SearchDTO dto) {
//        SearchDTO entity = dto.dtoToEntity();
        System.out.println(dto);
        if(dto.getNation().equals("")){
            // System.out.println("Home");
            if(dto.getPoint().equals("title")){
                try {
                    List<BookEntity> entities = service.findTitle(dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }

            }
            else if(dto.getPoint().equals("price")){
                try {
                    List<BookEntity> entities = service.findPrice(dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }
            }
            else if(dto.getPoint().equals("category")){
                try {
                    List<BookEntity> entities = service.findCategory(dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }
            }

        }
        System.out.println(dto.getPoint());
        if(dto.getPoint().equals("title")){
            if(dto.getSub().equals("")){
                try {
                    List<BookEntity> entities = service.findNationTitle(dto.getNation(),dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }
            }else {
                try {
                    List<BookEntity> entities = service.findNationGenreTitle(dto.getNation(), dto.getSub(),dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }
            }

        } else if (dto.getPoint().equals("category")) {
            if(dto.getSub().equals("")){
                try {
                    List<BookEntity> entities = service.findNationCategory(dto.getNation(),dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }
            }else {
                try {
                    List<BookEntity> entities = service.findNationGenreCategory(dto.getNation(), dto.getSub(),dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }
            }
        }else if (dto.getPoint().equals("price")) {
            if(dto.getSub().equals("")){
                try {
                    List<BookEntity> entities = service.findNationPrice(dto.getNation(),dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }
            }else{
                try {
                    List<BookEntity> entities = service.findNationGenrePrice(dto.getNation(), dto.getSub(),dto.getValue());

                    List<BookDTO> todos = entities.stream()
                            .map(BookDTO::new).collect(Collectors.toList());
                    ResponseDTO<BookDTO> response = ResponseDTO
                            .<BookDTO>builder().data(todos).build();

                    return ResponseEntity.ok().body(response);
                } catch (Exception e) {
                    ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
                    return ResponseEntity.badRequest().body(res);
                }
            }
        }else {
            return null;
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updateBook(@RequestBody BookDTO dto) {
        try {
            BookEntity entity = dto.dtoToEntity();

            List<BookEntity> entities = service.update(entity);
            List<BookDTO> dtos = entities.stream().map(BookDTO::new).collect(Collectors.toList());
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().data(dtos).build();

            return ResponseEntity.ok().body(response);

        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }


    @GetMapping
    public ResponseEntity<?> selectAll() {
        try {
            List<BookEntity> entities = service.findAll();

            List<BookDTO> todos = entities.stream()
                    .map(BookDTO::new).collect(Collectors.toList());
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().data(todos).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
            return ResponseEntity.badRequest().body(res);
        }
    }

    @GetMapping("/recent")
    public ResponseEntity<?> selectFive() {
        try {
            List<BookEntity> entities = service.findRecent();

            List<BookDTO> todos = entities.stream()
                    .map(BookDTO::new).collect(Collectors.toList());
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().data(todos).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
            return ResponseEntity.badRequest().body(res);
        }
    }

    @GetMapping("/{nation}")
    public ResponseEntity<?> selectNation(@PathVariable String nation) {
        try {
            List<BookEntity> entities = service.findNation(nation);

            List<BookDTO> todos = entities.stream()
                    .map(BookDTO::new).collect(Collectors.toList());
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().data(todos).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
            return ResponseEntity.badRequest().body(res);
        }
    }

    @GetMapping("/{nation}/{sub}")
    public ResponseEntity<?> selectNationSub(@PathVariable String nation,  @PathVariable String sub) {
        try {
            List<BookEntity> entities = service.findNationGenre(nation, sub);

            List<BookDTO> todos = entities.stream()
                    .map(BookDTO::new).collect(Collectors.toList());
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().data(todos).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search all list 에러: "+ e.getMessage()).build();
            return ResponseEntity.badRequest().body(res);
        }
    }



    @GetMapping("/one")
    public ResponseEntity<?> selectOne(@RequestParam(value="id") String bookId) {
        try {
            List<BookEntity> entities = service.findByBookid(bookId);

            List<BookDTO> todos = entities.stream()
                    .map(BookDTO::new).collect(Collectors.toList());
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().data(todos).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search list 에러: "+ e.getMessage()).build();
            return ResponseEntity.badRequest().body(res);
        }
    }

    @RequestMapping(value="/one",method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteOne(@RequestBody BookDTO dto){
        try {
            BookEntity entity = dto.dtoToEntity();
            List<BookEntity> entities = service.deleteOne(entity);

            List<BookDTO> todos = entities.stream()
                    .map(BookDTO::new).collect(Collectors.toList());
            ResponseDTO<BookDTO> response = ResponseDTO
                    .<BookDTO>builder().data(todos).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            ResponseDTO<BookDTO> res = ResponseDTO.<BookDTO>builder().error("search list 에러: "+ e.getMessage()).build();
            return ResponseEntity.badRequest().body(res);
        }
    }
}
