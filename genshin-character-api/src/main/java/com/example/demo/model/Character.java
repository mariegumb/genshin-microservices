package com.example.demo.model;

import javax.persistence.*;


@Entity
@Table(name = "characters")
public class Character {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

	@Column(name = "vision")
	private String vision;

	@Column(name= "weapon")
	private String weapon;

	@Column(name= "rarity")
	private Integer rarity;

	@Column(name= "nation_id")
	private Integer nationId;

	@Transient
	private Nation nation;

	public Character() {

	}

	public Character(String name, String description, String vision,  Integer rarity, String weapon, Integer nationId) {
		this.name = name;
		this.description = description;
		this.vision = vision;
		this.rarity = rarity;
		this.nationId = nationId;
		this.weapon = weapon;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
    
	public String getVision() {
		return vision;
	}

	public void setVision(String vision) {
		this.vision = vision;
	}

	public String getWeapon() {
		return weapon;
	}

	public void setWeapon(String weaponType) {
		this.weapon = weaponType;
	}

	public Integer getRarity() {
		return rarity;
	}

	public void setRarity(Integer rarity) {
		this.rarity = rarity;
	}

	public Integer getNationId() {
		return nationId;
	}

	public void setNationId(Integer nationId) {
		this.nationId = nationId;
	}

	public Nation getNation() {
		return nation;
	}

	public void setNation(Nation nation) {
		this.nation = nation;
	}

	@Override
	public String toString() {
		return "Character [id=" + id + ", name=" + name + ", desc=" + description + ", vision=" + vision + "]";
	}
}