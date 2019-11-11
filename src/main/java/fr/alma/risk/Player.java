package fr.alma.risk;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Observable;
import fr.alma.risk.utils.Common;

public class Player {

    private String sessionId;
    /**
     * return Id to player
     */
    private String userId;
    /**
     * return if the turn to current player
     */
    private boolean turn;

    private Common.Color color;
    private ArrayList<Country> countriesList = new ArrayList<>();
    private ArrayList<Continent> continentsList=new ArrayList<>();

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
