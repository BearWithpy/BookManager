package com.example.bookmanageserver.service;

import com.example.bookmanageserver.domain.BookEntity;
import com.example.bookmanageserver.repository.BookRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Slf4j
public class BookService {

    @Autowired
    private BookRepository repository;

    public void validate(final BookEntity entity) {
        if (entity == null) {
            log.warn("entity가 null입니다.");
            throw new RuntimeException("entity가 null입니다.");
        }
    }

    public List<BookEntity> create(final BookEntity entity) {
        validate(entity);
        repository.save(entity);
        log.info("Entity id: {} is saved.", entity.getBookid());

        return repository.findByBookid(entity.getBookid());
    }

    public List<BookEntity> findByBookid(final String bookid) {
        return repository.findByBookid(bookid);
    }

    public List<BookEntity> retrieve(final String id) {
        // containing을 사용하고 있기 때문에 모든 글자를 치지 않아도 검색이 가능함!
        return repository.findByBookidContaining(id == null ? "" : id);
    }

    public List<BookEntity> findAll() {
        return repository.findAll();
    }

    public List<BookEntity> deleteOne(final BookEntity entity) {
        validate(entity);
        try {
            repository.delete(entity);
        } catch (Exception e) {
            throw new RuntimeException(entity.getBookid() + " 삭제 시 에러 발생 >>> " + e.getMessage());
        }
        return retrieve(entity.getBookid());
    }

    public List<BookEntity> findRecent() {
        return repository.findRecentBooksQuery();
    }

    public List<BookEntity> findNation(String nation) {
        return repository.findNationBooksQuery(nation);
    }

    public List<BookEntity> findNationGenre(String nation, String genre) {
        return repository.findNationGenreBooksQuery(nation, genre);
    }

    public List<BookEntity> findNationGenreTitle(String nation, String genre, String value) {
        return repository.findNationGenreBooksTitleQuery(nation, value, genre);
    }

    public List<BookEntity> update(BookEntity entity) {
        final Optional<BookEntity> original = repository.findById(entity.getBookid());

        original.ifPresent(book -> {
            book.setCategory(entity.getCategory());
            book.setGenre(entity.getGenre());
            book.setTitle(entity.getTitle());
            book.setNation(entity.getNation());
            book.setPrice(entity.getPrice());

            repository.save(book);
        });

        return retrieve(entity.getBookid());
    }

    public List<BookEntity> findNationGenreCategory(String nation, String sub, String value) {
        return repository.findNationGenreCategoryBooksQuery(value, nation, sub);
    }

    public List<BookEntity> findNationGenrePrice(String nation, String sub, String value) {
        return repository.findByNationGenrePriceQuery(Integer.parseInt(value), nation, sub);
    }

    public List<BookEntity> findNationPrice(String nation, String value) {
        return repository.findByNationPriceQuery(Integer.parseInt(value), nation);
    }

    public List<BookEntity> findNationCategory(String nation, String value) {
        return repository.findNationCategoryBooksQuery(value, nation);
    }

    public List<BookEntity> findNationTitle(String nation, String value) {
        return repository.findNationTitleBooksQuery(value, nation);
    }

    public List<BookEntity> findTitle(String value) {
        return repository.findByTitleContaining(value);
    }

    public List<BookEntity> findPrice(String value) {
        return repository.findByPriceQuery(Integer.parseInt(value));
    }

    public List<BookEntity> findCategory(String value) {
        return repository.findByCategoryContaining(value);
    }
}
