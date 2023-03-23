package com.example.bookmanageserver.repository;

import com.example.bookmanageserver.domain.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<BookEntity, String> {

    @Query(value = "select * from book order by updatedate DESC limit 0, 5;", nativeQuery = true)
    List<BookEntity> findRecentBooksQuery();

    List<BookEntity> findByTitleContaining(String title);

    List<BookEntity> findByCategoryContaining(String category);

    List<BookEntity> findByBookid(String bookid);

    List<BookEntity> findByBookidContaining(String bookid);

    @Query(value = "SELECT * FROM book WHERE nation= (:nation);", nativeQuery = true)
    List<BookEntity> findNationBooksQuery(@Param("nation") String nation);

    @Query(value = "SELECT * FROM book WHERE title LIKE %:title% and nation= (:nation);", nativeQuery = true)
    List<BookEntity> findNationTitleBooksQuery(@Param("title") String title, @Param("nation") String nation);


    @Query(value = "SELECT * FROM book WHERE nation= (:nation) and genre=(:genre);", nativeQuery = true)
    List<BookEntity> findNationGenreBooksQuery(@Param("nation") String nation, @Param("genre") String genre);


    @Query(value = "SELECT * FROM book WHERE title LIKE %:value% and nation=(:nation) and genre=(:genre);", nativeQuery = true)
    List<BookEntity> findNationGenreBooksTitleQuery(@Param("nation") String nation, @Param("value") String value ,@Param("genre") String genre);

    @Query(value = "SELECT * FROM book WHERE category LIKE %:category% and nation= (:nation);", nativeQuery = true)
    List<BookEntity> findNationCategoryBooksQuery(@Param("category") String category, @Param("nation") String nation);

    @Query(value = "SELECT * FROM book WHERE category LIKE %:value% and nation= (:nation) and genre=(:genre);", nativeQuery = true)
    List<BookEntity> findNationGenreCategoryBooksQuery(@Param("value") String value, @Param("nation") String nation, @Param("genre") String genre);

    @Query(value = "SELECT * FROM book WHERE price < (:price);", nativeQuery = true)
    List<BookEntity> findByPriceQuery(@Param("price") int price);

    @Query(value = "SELECT * FROM book WHERE price < (:price) and nation= (:nation);", nativeQuery = true)
    List<BookEntity> findByNationPriceQuery(@Param("price") int price , @Param("nation") String nation);

    @Query(value = "SELECT * FROM book WHERE price < (:value) and nation= (:nation) and genre=(:genre);", nativeQuery = true)
    List<BookEntity> findByNationGenrePriceQuery(@Param("value") int value, @Param("nation") String nation, @Param("genre") String genre);
}
