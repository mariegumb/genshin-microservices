package com.example.demo.repository;

import com.example.demo.model.Character;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CharacterRepository extends JpaRepository<Character, Long> {
  List<Character> findByNameContaining(String name);
}