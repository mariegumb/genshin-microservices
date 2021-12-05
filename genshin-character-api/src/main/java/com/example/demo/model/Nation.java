package com.example.demo.model;


public class Nation {

	private long id;

	private String name;

	private String archon;

	private String element;

	public Nation() {

	}

	public Nation(String name, String archon, String element) {
		this.name = name;
		this.archon = archon;
		this.element = element;
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

	public String getArchon() {
		return archon;
	}

	public void setArchon(String archon) {
		this.archon = archon;
	}
    
	public String getElement() {
		return element;
	}

	public void setElement(String element) {
		this.element = element;
	}

	@Override
	public String toString() {
		return "Nation [id=" + id + ", name=" + name + ", archon=" + archon + ", element=" + element + "]";
	}
}