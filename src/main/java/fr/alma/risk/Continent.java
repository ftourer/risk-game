package fr.alma.risk;

import java.util.ArrayList;

public class Continent {
    /**
     * name of continent.
     */
    private String name;
    /**
     * ArrayList containing countries of this continent.
     */
    private ArrayList<Country> countries;

    public Continent (){

    }

    /**
     * return array of countries belong to this continent.
     */
    public Country[] getCountries() {
        return this.countries.toArray(new Country[this.countries.size()]);
    }

    /**
     * return name of continent.
     */
    public String getContinentName() {
        return this.name;
    }

}
