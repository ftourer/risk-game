package fr.alma.risk;
import fr.alma.risk.utils.Common;

import java.util.ArrayList;

public class Player {

    private String sessionId;
    /**
     * return Id to player
     */
    private String userId;
    /**
     * return name to player
     */
    private String name;
    /**
     * return if the turn to current player
     */
    private boolean turn;

    /**
     * return if the turn to current player
     */
    private int availableTroops;

    private Common.Color color;
    private ArrayList<Country> countriesList = new ArrayList<>();
    private ArrayList<Continent> continentsList=new ArrayList<>();

    public Player(String name){
        this.name = name;
    }

    public Player(Player player) {
        this.availableTroops = player.availableTroops;
        this.countriesList = new ArrayList<>(player.countriesList);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public Common.Color getColor() {
        return color;
    }

    public void setColor(Common.Color color) {
        this.color = color;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public boolean isTurn() {
        return turn;
    }

    public void setTurn(boolean turn) {
        this.turn = turn;
    }



}
