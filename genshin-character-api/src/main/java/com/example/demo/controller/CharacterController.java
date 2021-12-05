package com.example.demo.controller;

import com.example.demo.model.Character;
import com.example.demo.model.Nation;
import com.example.demo.repository.CharacterRepository;
import com.example.demo.service.NationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CharacterController {

  @Autowired
  CharacterRepository characterRepository;

  @Autowired
  NationService nationService;

  @GetMapping("/characters")
  public ResponseEntity<List<Character>> getAllCharacters() {
    try {

      List<Character> characters = new ArrayList<Character>(characterRepository.findAll());

      characters.forEach(this::populateNations);

      if (characters.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(characters, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/characters/{id}")
  public ResponseEntity<Character> getCharacterById(@PathVariable("id") long id) {
    Optional<Character> characterData = characterRepository.findById(id);

    if (characterData.isPresent()) {
      Character character = characterData.get();
      populateNations(character);
      return new ResponseEntity<>(character, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/characters")
  public ResponseEntity<Character> createCharacter(@RequestBody Character character) {
    try {
      Character _character = characterRepository
          .save(new Character(
                  character.getName(),
                  character.getDescription(),
                  character.getVision(),
                  character.getRarity(),
                  character.getWeapon(),
                  character.getNationId()
          ));

      return new ResponseEntity<>(_character, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/characters/{id}")
  public ResponseEntity<Character> updateCharacter(@PathVariable("id") long id, @RequestBody Character character) {
    Optional<Character> characterData = characterRepository.findById(id);

    if (characterData.isPresent()) {
      Character _character = characterData.get();
      if(character.getName() != null){
        _character.setName(character.getName());
      }
      if(character.getDescription() != null){
        _character.setDescription(character.getDescription());
      }
      if(character.getVision() != null){
        _character.setVision(character.getVision());
      }
      if(character.getRarity() != null){
        _character.setRarity(character.getRarity());
      }
      if(character.getWeapon() != null){
        _character.setWeapon(character.getWeapon());
      }
      if(character.getNationId() != null){
        _character.setNationId(character.getNationId());
      }

      return new ResponseEntity<>(characterRepository.save(_character), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/characters/{id}")
  public ResponseEntity<HttpStatus> deleteCharacter(@PathVariable("id") long id) {
    try {
      characterRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/characters")
  public ResponseEntity<HttpStatus> deleteAllCharacters() {
    try {
      characterRepository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private void populateNations(Character character) {
    if(character.getNationId() != null){
        try{
          Nation nation = nationService.getNation(character.getNationId());
          character.setNation(nation);
        } catch (Exception e){
          System.out.println(e);
        }
    }
  }

  @PostConstruct
  public void initDatabase() {
    Character albedo = new Character(
            "Albedo",
            "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
            "Geo",
            5,
            "sword",
            3
            );

    Character amber = new Character(
            "Amber",
            "Always energetic and full of life, Amber's the best - albeit only - Outrider of the Knights of Favonius.",
            "Pyro",
            4,
            "Bow",
            3
    );
    Character ayaka = new Character(
            "Ayaka",
            "Daughter of the Yashiro Commission's Kamisato Clan. Dignified and elegant, as well as wise and strong.",
            "Cryo",
            5,
            "sword",
            1
    );
    Character barbara = new Character(
            "Barbara",
            "Every denizen of Mondstadt adores Barbara. However, she learned the word \"idol\" from a magazine.",
            "Hydro",
            4,
            "Catalyst",
            3
    );
    characterRepository.save(albedo);
    characterRepository.save(amber);
    characterRepository.save(ayaka);
    characterRepository.save(barbara);
  }
}