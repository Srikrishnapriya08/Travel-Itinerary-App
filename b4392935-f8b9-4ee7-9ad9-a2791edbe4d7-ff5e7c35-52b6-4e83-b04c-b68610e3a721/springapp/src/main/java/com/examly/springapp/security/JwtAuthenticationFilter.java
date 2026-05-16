// // // // // package com.examly.springapp.security;


// // // // // import org.springframework.beans.factory.annotation.Autowired;
// // // // // import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// // // // // import org.springframework.security.core.context.SecurityContextHolder;
// // // // // import org.springframework.security.core.authority.SimpleGrantedAuthority;
// // // // // import org.springframework.stereotype.Component;
// // // // // import org.springframework.web.filter.OncePerRequestFilter;

// // // // // import java.io.IOException;
// // // // // import java.util.Collections;
// // // // // import java.util.List;
// // // // // import java.util.Optional;

// // // // // import javax.servlet.*;
// // // // // import javax.servlet.http.*;

// // // // // import com.examly.springapp.model.UserEntity;
// // // // // import com.examly.springapp.repository.RevokedTokenRepository;
// // // // // import com.examly.springapp.repository.UserRepository;
// // // // // import com.examly.springapp.repository.UserRepository;

// // // // // @Component
// // // // // public class JwtAuthenticationFilter extends OncePerRequestFilter {

// // // // // 	@Autowired
// // // // // 	private JwtUtil jwtUtil;

// // // // // 	@Autowired
// // // // // 	private UserRepository userRepository;

// // // // // 	@Autowired
// // // // // 	private RevokedTokenRepository revokedTokenRepository;

// // // // // 	@Override
// // // // // 	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
// // // // // 			throws ServletException, IOException {

// // // // // 		String token = request.getHeader("Authorization");

// // // // // 		if (token != null && token.startsWith("Bearer ")) {
// // // // // 			token = token.substring(7);

// // // // // 			if (jwtUtil.isTokenExpired(token)) {
// // // // // 				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
// // // // // 				response.getWriter().write("Invalid or expired token.");
// // // // // 				return;
// // // // // 			}

// // // // // 			if (revokedTokenRepository.findById(token).isPresent()) {
// // // // // 				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
// // // // // 				response.getWriter().write("Token has been revoked.");
// // // // // 				return;
// // // // // 			}

// // // // // 			String username = jwtUtil.getUsernameFromToken(token);
// // // // // 			String role = jwtUtil.getRoleFromToken(token);

// // // // // 			Optional<UserEntity> user = userRepository.findByUsername(username);

// // // // // 			if (user.isPresent()) {
// // // // // 				List<SimpleGrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(role));

// // // // // 				SecurityContextHolder.getContext()
// // // // // 						.setAuthentication(new UsernamePasswordAuthenticationToken(username, null, authorities));

// // // // // 				System.out.println("Authorities: " + authorities);
// // // // // 			}
// // // // // 		}

// // // // // 		chain.doFilter(request, response);
// // // // // 	}
// // // // // }
// // // // package com.examly.springapp.security;

// // // // import java.io.IOException;
// // // // import java.util.Collections;
// // // // import java.util.List;
// // // // import java.util.Optional;

// // // // import javax.servlet.FilterChain;
// // // // import javax.servlet.ServletException;
// // // // import javax.servlet.http.HttpServletRequest;
// // // // import javax.servlet.http.HttpServletResponse;

// // // // import org.springframework.beans.factory.annotation.Autowired;
// // // // import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// // // // import org.springframework.security.core.authority.SimpleGrantedAuthority;
// // // // import org.springframework.security.core.context.SecurityContextHolder;
// // // // import org.springframework.stereotype.Component;
// // // // import org.springframework.web.filter.OncePerRequestFilter;

// // // // import com.examly.springapp.model.UserEntity;
// // // // import com.examly.springapp.repository.RevokedTokenRepository;
// // // // import com.examly.springapp.repository.UserRepository;

// // // // @Component
// // // // public class JwtAuthenticationFilter extends OncePerRequestFilter {

// // // //     @Autowired
// // // //     private JwtUtil jwtUtil;

// // // //     @Autowired
// // // //     private UserRepository userRepository;

// // // //     @Autowired
// // // //     private RevokedTokenRepository revokedTokenRepository;

// // // //     @Override
// // // //     protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
// // // //             throws ServletException, IOException {

// // // //         String token = request.getHeader("Authorization");

// // // //         if (token != null && token.startsWith("Bearer ")) {
// // // //             token = token.substring(7);

// // // //             // Token expired or revoked
// // // //             if (jwtUtil.isTokenExpired(token) || revokedTokenRepository.findById(token).isPresent()) {
// // // //                 response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
// // // //                 response.getWriter().write("Invalid, expired, or revoked token.");
// // // //                 return;
// // // //             }

// // // //             String username = jwtUtil.getUsernameFromToken(token);
// // // //             String role = jwtUtil.getRoleFromToken(token);

// // // //             Optional<UserEntity> user = userRepository.findByUsername(username);

// // // //             if (user.isPresent()) {
// // // //                 List<SimpleGrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(role));
// // // //                 SecurityContextHolder.getContext()
// // // //                         .setAuthentication(new UsernamePasswordAuthenticationToken(username, null, authorities));
// // // //             }
// // // //         }

// // // //         chain.doFilter(request, response);
// // // //     }
// // // // }
// // // package com.examly.springapp.security;

// // // import java.io.IOException;
// // // import java.util.Collections;
// // // import java.util.List;
// // // import java.util.Optional;

// // // import javax.servlet.FilterChain;
// // // import javax.servlet.ServletException;
// // // import javax.servlet.http.HttpServletRequest;
// // // import javax.servlet.http.HttpServletResponse;

// // // import org.springframework.beans.factory.annotation.Autowired;
// // // import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// // // import org.springframework.security.core.authority.SimpleGrantedAuthority;
// // // import org.springframework.security.core.context.SecurityContextHolder;
// // // import org.springframework.stereotype.Component;
// // // import org.springframework.web.filter.OncePerRequestFilter;

// // // import com.examly.springapp.model.UserEntity;
// // // import com.examly.springapp.repository.RevokedTokenRepository;
// // // import com.examly.springapp.repository.UserRepository;

// // // @Component
// // // public class JwtAuthenticationFilter extends OncePerRequestFilter {

// // //     @Autowired
// // //     private JwtUtil jwtUtil;

// // //     @Autowired
// // //     private UserRepository userRepository;

// // //     @Autowired
// // //     private RevokedTokenRepository revokedTokenRepository;

// // //     @Override
// // //     protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
// // //             throws ServletException, IOException {

// // //         String token = request.getHeader("Authorization");

// // //         if (token != null && token.startsWith("Bearer ")) {
// // //             token = token.substring(7);

// // //             // Token expired or revoked
// // //             if (jwtUtil.isTokenExpired(token) || revokedTokenRepository.findById(token).isPresent()) {
// // //                 response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
// // //                 response.getWriter().write("Invalid, expired, or revoked token.");
// // //                 return;
// // //             }

// // //             String username = jwtUtil.getUsernameFromToken(token);
// // //             String roleFromToken = jwtUtil.getRoleFromToken(token);

// // //             // Ensure role string has prefix ROLE_
// // //             String role = roleFromToken.startsWith("ROLE_") ? roleFromToken : "ROLE_" + roleFromToken;

// // //             Optional<UserEntity> user = userRepository.findByUsername(username);

// // //             if (user.isPresent()) {
// // //                 List<SimpleGrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(role));
// // //                 SecurityContextHolder.getContext()
// // //                         .setAuthentication(new UsernamePasswordAuthenticationToken(username, null, authorities));
// // //             }
// // //         }

// // //         chain.doFilter(request, response);
// // //     }
// // // }
// // package com.examly.springapp.security;

// // import jakarta.servlet.FilterChain;
// // import jakarta.servlet.ServletException;
// // import jakarta.servlet.http.HttpServletRequest;
// // import jakarta.servlet.http.HttpServletResponse;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// // import org.springframework.security.core.context.SecurityContextHolder;
// // import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// // import org.springframework.stereotype.Component;
// // import org.springframework.web.filter.OncePerRequestFilter;

// // import java.io.IOException;
// // import java.util.Collections;

// // @Component
// // public class JwtAuthFilter extends OncePerRequestFilter {

// //     @Autowired
// //     private JwtUtil jwtUtil;

// //     @Override
// //     protected void doFilterInternal(HttpServletRequest request,
// //                                     HttpServletResponse response,
// //                                     FilterChain filterChain) throws ServletException, IOException {

// //         final String authHeader = request.getHeader("Authorization");
// //         String username = null;
// //         String role = null;
// //         String token = null;

// //         if (authHeader != null && authHeader.startsWith("Bearer ")) {
// //             token = authHeader.substring(7);

// //             try {
// //                 username = jwtUtil.getUsernameFromToken(token);
// //                 role = jwtUtil.getRoleFromToken(token);
// //             } catch (Exception e) {
// //                 logger.error("Invalid JWT: " + e.getMessage());
// //             }
// //         }

// //         // Only set Authentication if valid & no authentication exists yet
// //         if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
// //             UsernamePasswordAuthenticationToken authToken =
// //                     new UsernamePasswordAuthenticationToken(
// //                             username,
// //                             null,
// //                             Collections.singleton(() -> role) // ✅ SimpleGrantedAuthority
// //                     );

// //             authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
// //             SecurityContextHolder.getContext().setAuthentication(authToken);
// //         }

// //         filterChain.doFilter(request, response);
// //     }
// // }
// package com.examly.springapp.security;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import javax.servlet.FilterChain;
// import javax.servlet.ServletException;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;
// import java.util.Collections;

// @Component
// public class JwtAuthenticationFilter extends OncePerRequestFilter {

//     @Autowired
//     private JwtUtil jwtUtil;

//     @Override
//     protected void doFilterInternal(HttpServletRequest request,
//                                     HttpServletResponse response,
//                                     FilterChain filterChain) throws ServletException, IOException {

//         final String authHeader = request.getHeader("Authorization");
//         String username = null;
//         String role = null;
//         String token = null;

//         if (authHeader != null && authHeader.startsWith("Bearer ")) {
//             token = authHeader.substring(7);

//             try {
//                 username = jwtUtil.getUsernameFromToken(token);
//                 role = jwtUtil.getRoleFromToken(token);
//             } catch (Exception e) {
//                 logger.error("Invalid JWT: " + e.getMessage());
//             }
//         }

//         // Only set Authentication if valid & no authentication exists yet
//         if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//             UsernamePasswordAuthenticationToken authToken =
//                     new UsernamePasswordAuthenticationToken(
//                             username,
//                             null,
//                             Collections.singleton(new SimpleGrantedAuthority(role)) // ✅ FIX
//                     );

//             authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//             SecurityContextHolder.getContext().setAuthentication(authToken);
//         }

//         filterChain.doFilter(request, response);
//     }
// }
package com.examly.springapp.security;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.examly.springapp.model.UserEntity;
import com.examly.springapp.repository.RevokedTokenRepository;
import com.examly.springapp.repository.UserRepository;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RevokedTokenRepository revokedTokenRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        String token = request.getHeader("Authorization");

        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);

            if (jwtUtil.isTokenExpired(token) || revokedTokenRepository.findById(token).isPresent()) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Invalid, expired, or revoked token.");
                return;
            }

            String username = jwtUtil.getUsernameFromToken(token);
            String role = jwtUtil.getRoleFromToken(token);

            Optional<UserEntity> user = userRepository.findByUsername(username);

            if (user.isPresent()) {
                // Add ROLE_ prefix for antMatchers
                //String springRole = role.startsWith("ROLE_") ? role : "ROLE_" + role;

                List<SimpleGrantedAuthority> authorities =
                        Collections.singletonList(new SimpleGrantedAuthority(role));

                SecurityContextHolder.getContext()
                        .setAuthentication(new UsernamePasswordAuthenticationToken(username, null, authorities));
            }
        }

        chain.doFilter(request, response);
    }
}
