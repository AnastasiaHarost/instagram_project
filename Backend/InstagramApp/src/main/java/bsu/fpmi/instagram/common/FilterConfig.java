package bsu.fpmi.instagram.common;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class FilterConfig{
    private Date dateFrom;
    private Date dateTo;
    private String author;
    private ArrayList<String> hashtags;

    public FilterConfig() {
        this.dateFrom = new GregorianCalendar(1963, Calendar.FEBRUARY, 11).getTime();
        this.dateTo = new GregorianCalendar(2019, Calendar.MAY, 1).getTime();
        this.author = new String();
        this.hashtags = new ArrayList<>();
    }

    public Date getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public ArrayList<String> getHashtags() {
        return hashtags;
    }

    public void setHashtags(ArrayList<String> hashtags) {
        this.hashtags = hashtags;
    }
}
