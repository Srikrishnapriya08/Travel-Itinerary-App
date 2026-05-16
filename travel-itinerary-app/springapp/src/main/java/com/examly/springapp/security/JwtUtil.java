// // // // package com.examly.springapp.security;

// // // // import io.jsonwebtoken.*;
// // // // import io.jsonwebtoken.security.Keys;
// // // // import org.springframework.beans.factory.annotation.Value;
// // // // import org.springframework.stereotype.Component;

// // // // import java.security.Key;
// // // // import java.util.Base64;
// // // // import java.util.Date;

// // // // @Component
// // // // public class JwtUtil {

// // // // 	private final Key key;

// // // // 	public JwtUtil(@Value("${jwt.secret}") String secret) {
// // // // 		this.key = Keys.hmacShaKeyFor(Base64.getDecoder().decode(secret));
// // // // 	}

// // // // 	public String generateToken(String username, String role) {
// // // // 		return Jwts.builder().setSubject(username).claim("role", role) // Add the role claim to the JWT
// // // // 				.setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
// // // // 																												// expiry
// // // // 				.signWith(key, SignatureAlgorithm.HS256).compact();
// // // // 	}

// // // // 	public String generateRefreshToken(String username) {
// // // // 		return Jwts.builder().setSubject(username).setIssuedAt(new Date())
// // // // 				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 7)) // 7 days expiry
// // // // 				.signWith(key, SignatureAlgorithm.HS256).compact();
// // // // 	}

// // // // 	public String getUsernameFromToken(String token) {
// // // // 		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
// // // // 	}

// // // // 	public boolean isTokenExpired(String token) {
// // // // 		return getClaimsFromToken(token).getExpiration().before(new Date());
// // // // 	}

// // // // 	private Claims getClaimsFromToken(String token) {
// // // // 		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
// // // // 	}

// // // // 	public String getRoleFromToken(String token) {
// // // // 		return (String) getClaimsFromToken(token).get("role");
// // // // 	}
// // // // }
// // // package com.examly.springapp.security;

// // // import java.security.Key;
// // // import java.util.Base64;
// // // import java.util.Date;

// // // import org.springframework.beans.factory.annotation.Value;
// // // import org.springframework.stereotype.Component;

// // // import io.jsonwebtoken.Claims;
// // // import io.jsonwebtoken.Jwts;
// // // import io.jsonwebtoken.SignatureAlgorithm;
// // // import io.jsonwebtoken.security.Keys;

// // // @Component
// // // public class JwtUtil {

// // //     private final Key key;

// // //     public JwtUtil(@Value("${jwt.secret}") String secret) {
// // //         this.key = Keys.hmacShaKeyFor(Base64.getDecoder().decode(secret));
// // //     }

// // //     public String generateToken(String username, String role) {
// // //         return Jwts.builder()
// // //                 .setSubject(username)
// // //                 .claim("role", role)
// // //                 .setIssuedAt(new Date())
// // //                 .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
// // //                 .signWith(key, SignatureAlgorithm.HS256)
// // //                 .compact();
// // //     }
// // // 	public String generateRefreshToken(String username) {
// // //         return Jwts.builder()
// // //                 .setSubject(username)
// // //                 .setIssuedAt(new Date())
// // //                 .setExpiration(new Date(System.currentTimeMillis() + 1000L * 60 * 60 * 24 * 7)) // 7 days
// // //                 .signWith(key, SignatureAlgorithm.HS256)
// // //                 .compact();
// // //     }
// // //     public String getUsernameFromToken(String token) {
// // //         return getClaimsFromToken(token).getSubject();
// // //     }

// // //     public String getRoleFromToken(String token) {
// // //         return (String) getClaimsFromToken(token).get("role");
// // //     }

// // //     public boolean isTokenExpired(String token) {
// // //         return getClaimsFromToken(token).getExpiration().before(new Date());
// // //     }

// // //     private Claims getClaimsFromToken(String token) {
// // //         return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
// // //     }
// // // }
// // package com.examly.springapp.security;

// // import java.security.Key;
// // import java.util.Base64;
// // import java.util.Date;

// // import org.springframework.beans.factory.annotation.Value;
// // import org.springframework.stereotype.Component;

// // import io.jsonwebtoken.Claims;
// // import io.jsonwebtoken.Jwts;
// // import io.jsonwebtoken.SignatureAlgorithm;
// // import io.jsonwebtoken.security.Keys;

// // @Component
// // public class JwtUtil {

// //     private final Key key;

// //     public JwtUtil(@Value("${jwt.secret}") String secret) {
// //         this.key = Keys.hmacShaKeyFor(Base64.getDecoder().decode(secret));
// //     }

// //     public String generateToken(String username, String role) {
// //         // role should already be with prefix e.g. ROLE_ADMIN
// //         return Jwts.builder()
// //                 .setSubject(username)
// //                 .claim("role", role)
// //                 .setIssuedAt(new Date())
// //                 .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour expiry
// //                 .signWith(key, SignatureAlgorithm.HS256)
// //                 .compact();
// //     }

// //     public String generateRefreshToken(String username) {
// //         return Jwts.builder()
// //                 .setSubject(username)
// //                 .setIssuedAt(new Date())
// //                 .setExpiration(new Date(System.currentTimeMillis() + 1000L * 60 * 60 * 24 * 7)) // 7 days expiry
// //                 .signWith(key, SignatureAlgorithm.HS256)
// //                 .compact();
// //     }

// //     public String getUsernameFromToken(String token) {
// //         return getClaimsFromToken(token).getSubject();
// //     }

// //     public String getRoleFromToken(String token) {
// //         return (String) getClaimsFromToken(token).get("role");
// //     }

// //     public boolean isTokenExpired(String token) {
// //         return getClaimsFromToken(token).getExpiration().before(new Date());
// //     }

// //     private Claims getClaimsFromToken(String token) {
// //         return Jwts.parserBuilder()
// //                 .setSigningKey(key)
// //                 .build()
// //                 .parseClaimsJws(token)
// //                 .getBody();
// //     }
// // }
// package com.examly.springapp.security;

// import io.jsonwebtoken.*;
// import org.springframework.stereotype.Component;
// import java.util.*;

// @Component
// public class JwtUtil {

//     private final String SECRET_KEY = "your_secret_key";
//     private final long EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour
//     private final long REFRESH_EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24h

//     public String generateToken(String username, String role) {
//         Map<String, Object> claims = new HashMap<>();
//         claims.put("role", role); // ✅ only role now

//         return Jwts.builder()
//                 .setClaims(claims)
//                 .setSubject(username)
//                 .setIssuedAt(new Date(System.currentTimeMillis()))
//                 .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
//                 .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
//                 .compact();
//     }

//     public String generateRefreshToken(String username) {
//         return Jwts.builder()
//                 .setSubject(username)
//                 .setIssuedAt(new Date(System.currentTimeMillis()))
//                 .setExpiration(new Date(System.currentTimeMillis() + REFRESH_EXPIRATION_TIME))
//                 .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
//                 .compact();
//     }

//     public String getUsernameFromToken(String token) {
//         return extractClaims(token).getSubject();
//     }

//     public String getRoleFromToken(String token) {
//         return (String) extractClaims(token).get("role");
//     }

//     public boolean isTokenExpired(String token) {
//         return extractClaims(token).getExpiration().before(new Date());
//     }

//     private Claims extractClaims(String token) {
//         return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
//     }
// }
package com.examly.springapp.security;

import java.security.Key;
import java.util.Base64;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    private final Key key;

    public JwtUtil(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(Base64.getDecoder().decode(secret));
    }

    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String generateRefreshToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000L * 60 * 60 * 24 * 7)) // 7 days
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String getUsernameFromToken(String token) {
        return getClaimsFromToken(token).getSubject();
    }

    public String getRoleFromToken(String token) {
        return (String) getClaimsFromToken(token).get("role");
    }

    public boolean isTokenExpired(String token) {
        return getClaimsFromToken(token).getExpiration().before(new Date());
    }

    private Claims getClaimsFromToken(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
    }
}
