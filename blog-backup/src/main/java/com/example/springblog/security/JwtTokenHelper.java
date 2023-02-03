package com.example.springblog.security;

import com.example.springblog.env.JwtEnvironment;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtTokenHelper {
    public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
    private String jwt_secret = JwtEnvironment.JWT_SECRET_KEY;

    /*
      Retrieve username from JWT token
     */
    public String getUsernameFromToken(String token) {
        return getClaimToken(token, Claims::getSubject);
    }


    //    Retrieve expiration date from token
    public Date getExpirationDateFromToken(String token) {
        return getClaimToken(token, Claims::getExpiration);
    }


    private <T> T getClaimToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }


//    For Retrieving any information from token that we will need to the secret key

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(jwt_secret).parseClaimsJws(token).getBody();
    }

    //    Check if the token has expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    //    Generate token for user
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    private String doGenerateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 100)).signWith(SignatureAlgorithm.HS512, jwt_secret).compact();

    }

    //    Valid Token
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}