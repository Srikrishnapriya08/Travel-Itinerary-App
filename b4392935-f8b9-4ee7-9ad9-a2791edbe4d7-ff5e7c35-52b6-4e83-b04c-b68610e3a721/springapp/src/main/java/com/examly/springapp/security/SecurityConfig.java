// // // // // package com.examly.springapp.security;

// // // // // import java.util.List;

// // // // // import org.springframework.context.annotation.Bean;
// // // // // import org.springframework.context.annotation.Configuration;
// // // // // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// // // // // import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// // // // // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// // // // // import org.springframework.security.crypto.password.PasswordEncoder;
// // // // // import org.springframework.security.web.SecurityFilterChain;
// // // // // import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// // // // // import org.springframework.web.cors.CorsConfiguration;
// // // // // import org.springframework.web.cors.CorsConfigurationSource;
// // // // // import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// // // // // @Configuration
// // // // // @EnableWebSecurity
// // // // // public class SecurityConfig {

// // // // //     private final JwtAuthenticationFilter jwtAuthenticationFilter;

// // // // //     public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
// // // // //         this.jwtAuthenticationFilter = jwtAuthenticationFilter;
// // // // //     }
// // // // //     @Bean
// // // // //     public PasswordEncoder passwordEncoder() {
// // // // //         return new BCryptPasswordEncoder();
// // // // //     }
// // // // //     @Bean
// // // // //     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
// // // // //         http.csrf(csrf -> csrf.disable())
// // // // //             .cors(cors -> cors.configurationSource(corsConfigurationSource()))
// // // // //             .authorizeHttpRequests(auth -> auth
// // // // //                 .antMatchers(
// // // // //                     "/swagger-ui/**",
// // // // //                     "/v3/api-docs/**",
// // // // //                     "/swagger-resources/**",
// // // // //                     "/webjars/**"
// // // // //                 ).permitAll()

// // // // //                 .antMatchers("/auth/**").permitAll()

// // // // //                 .antMatchers("/admin/**").hasAuthority("ROLE_ADMIN")
// // // // //                 .antMatchers("/user/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")

// // // // //                 .anyRequest().authenticated()
// // // // //             )
// // // // //             .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

// // // // //         return http.build();
// // // // //     }

// // // // //     @Bean
// // // // //     public CorsConfigurationSource corsConfigurationSource() {
// // // // //         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
// // // // //         CorsConfiguration config = new CorsConfiguration();

// // // // //         config.setAllowCredentials(true);
// // // // //         config.setAllowedOrigins(List.of("http://127.0.0.1:3000")); // frontend
// // // // //         config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
// // // // //         config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
// // // // //         config.setExposedHeaders(List.of("Authorization"));

// // // // //         source.registerCorsConfiguration("/**", config);
// // // // //         return source;
// // // // //     }
// // // // // }
// // // // package com.examly.springapp.security;

// // // // import java.util.List;

// // // // import org.springframework.context.annotation.Bean;
// // // // import org.springframework.context.annotation.Configuration;
// // // // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// // // // import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// // // // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// // // // import org.springframework.security.crypto.password.PasswordEncoder;
// // // // import org.springframework.security.web.SecurityFilterChain;
// // // // import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// // // // import org.springframework.web.cors.CorsConfiguration;
// // // // import org.springframework.web.cors.CorsConfigurationSource;
// // // // import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// // // // @Configuration
// // // // @EnableWebSecurity
// // // // public class SecurityConfig {

// // // //     private final JwtAuthenticationFilter jwtAuthenticationFilter;

// // // //     public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
// // // //         this.jwtAuthenticationFilter = jwtAuthenticationFilter;
// // // //     }

// // // //     @Bean
// // // //     public PasswordEncoder passwordEncoder() {
// // // //         return new BCryptPasswordEncoder();
// // // //     }

// // // //     @Bean
// // // //     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
// // // //         http.csrf(csrf -> csrf.disable()) // disable CSRF
// // // //             .cors(cors -> cors.configurationSource(corsConfigurationSource())) // enable CORS
// // // //             .authorizeHttpRequests(auth -> auth
// // // //                 // Allow Swagger and Auth endpoints
// // // //                 .antMatchers(
// // // //                     "/swagger-ui/**",
// // // //                     "/v3/api-docs/**",
// // // //                     "/swagger-resources/**",
// // // //                     "/webjars/**",
// // // //                     "/auth/**"
// // // //                 ).permitAll()
// // // //                 // Example roles
// // // //                 .antMatchers("/admin/**").hasAuthority("ROLE_ADMIN")
// // // //                 .antMatchers("/user/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
// // // //                 .anyRequest().authenticated()
// // // //             )
// // // //             // JWT filter
// // // //             .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

// // // //         return http.build();
// // // //     }

// // // //     // CORS configuration to allow React frontend
// // // //     @Bean
// // // //     public CorsConfigurationSource corsConfigurationSource() {
// // // //         CorsConfiguration config = new CorsConfiguration();
// // // //         config.setAllowedOrigins(List.of("http://localhost:3000")); // React frontend URL
// // // //         config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
// // // //         config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
// // // //         config.setExposedHeaders(List.of("Authorization"));
// // // //         config.setAllowCredentials(true);

// // // //         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
// // // //         source.registerCorsConfiguration("/**", config);
// // // //         return source;
// // // //     }
// // // // }
// // // package com.examly.springapp.security;

// // // import java.util.List;

// // // import org.springframework.context.annotation.Bean;
// // // import org.springframework.context.annotation.Configuration;
// // // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// // // import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// // // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// // // import org.springframework.security.crypto.password.PasswordEncoder;
// // // import org.springframework.security.web.SecurityFilterChain;
// // // import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// // // import org.springframework.web.cors.CorsConfiguration;
// // // import org.springframework.web.cors.CorsConfigurationSource;
// // // import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// // // @Configuration
// // // @EnableWebSecurity
// // // public class SecurityConfig {

// // //     private final JwtAuthenticationFilter jwtAuthenticationFilter;

// // //     public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
// // //         this.jwtAuthenticationFilter = jwtAuthenticationFilter;
// // //     }

// // //     @Bean
// // //     public PasswordEncoder passwordEncoder() {
// // //         return new BCryptPasswordEncoder();
// // //     }

// // //     @Bean
// // //     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
// // //         http.csrf(csrf -> csrf.disable())
// // //             .cors(cors -> cors.configurationSource(corsConfigurationSource()))
// // //             .authorizeHttpRequests(auth -> auth
// // //                 // Swagger and auth open access
// // //                 .antMatchers(
// // //                     "/swagger-ui/**",
// // //                     "/v3/api-docs/**",
// // //                     "/swagger-resources/**",
// // //                     "/webjars/**",
// // //                     "/auth/**"
// // //                 ).permitAll()

// // //                 // Destinations accessible by everyone including guests
// // //                 .antMatchers("/destinations/**").hasAnyAuthority(
// // //                     "ROLE_GUEST",
// // //                     "ROLE_BASIC_TRAVELER",
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // Create Itinerary
// // //                 .antMatchers("/itineraries/create").hasAnyAuthority(
// // //                     "ROLE_BASIC_TRAVELER",
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // Basic Booking
// // //                 .antMatchers("/bookings/basic/**").hasAnyAuthority(
// // //                     "ROLE_BASIC_TRAVELER",
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // Advanced Booking
// // //                 .antMatchers("/bookings/advanced/**").hasAnyAuthority(
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // Budget Tracking
// // //                 .antMatchers("/budget/**").hasAnyAuthority(
// // //                     "ROLE_BASIC_TRAVELER",
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // Share Itineraries
// // //                 .antMatchers("/itineraries/share/**").hasAnyAuthority(
// // //                     "ROLE_BASIC_TRAVELER",
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // Collaborate
// // //                 .antMatchers("/collaborate/**").hasAnyAuthority(
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // Manage Clients
// // //                 .antMatchers("/clients/**").hasAnyAuthority(
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // System Config and User Management only Admin
// // //                 .antMatchers("/system/**").hasAuthority("ROLE_ADMIN")
// // //                 .antMatchers("/users/**").hasAuthority("ROLE_ADMIN")

// // //                 // Analytics Dashboard
// // //                 .antMatchers("/analytics/**").hasAnyAuthority(
// // //                     "ROLE_BASIC_TRAVELER",
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // Payment Processing
// // //                 .antMatchers("/payments/**").hasAnyAuthority(
// // //                     "ROLE_BASIC_TRAVELER",
// // //                     "ROLE_PREMIUM_TRAVELER",
// // //                     "ROLE_TRAVEL_AGENT",
// // //                     "ROLE_ADMIN"
// // //                 )

// // //                 // All other endpoints require authentication
// // //                 .anyRequest().authenticated()
// // //             )
// // //             .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

// // //         return http.build();
// // //     }

// // //     @Bean
// // //     public CorsConfigurationSource corsConfigurationSource() {
// // //         CorsConfiguration config = new CorsConfiguration();
// // //         config.setAllowedOrigins(List.of("http://localhost:3000")); // Update with your frontend origin
// // //         config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
// // //         config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
// // //         config.setExposedHeaders(List.of("Authorization"));
// // //         config.setAllowCredentials(true);

// // //         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
// // //         source.registerCorsConfiguration("/**", config);
// // //         return source;
// // //     }
// // // }
// // package com.examly.springapp.security;

// // import org.springframework.context.annotation.Bean;
// // import org.springframework.context.annotation.Configuration;
// // import org.springframework.security.authentication.AuthenticationManager;
// // import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// // import org.springframework.security.config.http.SessionCreationPolicy;
// // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// // import org.springframework.security.crypto.password.PasswordEncoder;
// // import org.springframework.security.web.SecurityFilterChain;
// // import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// // @Configuration
// // public class SecurityConfig {

// //     private final JwtAuthenticationFilter jwtAuthenticationFilter;

// //     public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
// //         this.jwtAuthenticationFilter = jwtAuthenticationFilter;
// //     }

// //     @Bean
// //     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
// //         http
// //             .csrf(csrf -> csrf.disable())
// //             .authorizeHttpRequests(auth -> auth
// //                 .antMatchers("/auth/**").permitAll() // login/register public
// //                 .antMatchers("/admin/**").hasRole("ADMIN")
// //                 .antMatchers("/agent/**").hasRole("TRAVEL_AGENT")
// //                 .antMatchers("/premium/**").hasRole("PREMIUM_TRAVELER")
// //                 .antMatchers("/basic/**").hasRole("BASIC_TRAVELER")
// //                 .anyRequest().authenticated()
// //             )
// //             .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
// //             .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

// //         return http.build();
// //     }

// //     @Bean
// //     public PasswordEncoder passwordEncoder() {
// //         return new BCryptPasswordEncoder();
// //     }

// //     // ✅ Needed if you want to use AuthenticationManager in login
// //     @Bean
// //     public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
// //         return config.getAuthenticationManager();
// //     }
// // }package com.examly.springapp.security;

// package com.examly.springapp.security;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// import java.util.List;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

//     private final JwtAuthenticationFilter jwtAuthenticationFilter;

//     public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
//         this.jwtAuthenticationFilter = jwtAuthenticationFilter;
//     }

//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http
//             .csrf().disable()
//             .cors().and()
//             .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//             .and()
//             .authorizeRequests()
//                 // Public endpoints
//                 .antMatchers("/auth/**").permitAll()
//                 .antMatchers("/swagger-ui/**", "/v3/api-docs/**", "/swagger-resources/**").permitAll()

//                 // Role-based access
//                 .antMatchers("/api/users/**").hasRole("ADMIN")
//                 .antMatchers("/api/itineraries/**")
//                     .hasAnyRole("ADMIN","BASIC_TRAVELER","PREMIUM_TRAVELER","TRAVEL_AGENT","GUEST")
//                 .antMatchers("/api/bookings/**")
//                     .hasAnyRole("ADMIN","BASIC_TRAVELER","PREMIUM_TRAVELER","TRAVEL_AGENT")
//                 .antMatchers("/api/destinations/**")
//                     .hasAnyRole("ADMIN","BASIC_TRAVELER","PREMIUM_TRAVELER","TRAVEL_AGENT","GUEST")
//                 .antMatchers("/api/expenses/**")
//                     .hasAnyRole("ADMIN","BASIC_TRAVELER","PREMIUM_TRAVELER","TRAVEL_AGENT")
//                 .antMatchers("/api/activities/**")
//                     .hasAnyRole("ADMIN","BASIC_TRAVELER","PREMIUM_TRAVELER","TRAVEL_AGENT","GUEST")

//                 // Any other request must be authenticated
//                 .anyRequest().authenticated()
//             .and()
//             // Add JWT filter
//             .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//     }

//     @Bean
//     @Override
//     public AuthenticationManager authenticationManagerBean() throws Exception {
//         return super.authenticationManagerBean();
//     }

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }
package com.examly.springapp.security;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeRequests(auth -> auth
                // Public endpoints
                .antMatchers("/swagger-ui/**", "/v3/api-docs/**", "/swagger-resources/**", "/webjars/**", "/auth/**").permitAll()
                
                // Role-based endpoints
                // .antMatchers("/api/users/**").hasRole("ADMIN")
                // .antMatchers("/api/itineraries/**").hasAnyRole("ADMIN","BASIC_TRAVELER","PREMIUM_TRAVELER","TRAVEL_AGENT","GUEST")
                // .antMatchers("/api/bookings/**").hasAnyRole("ADMIN","BASIC_TRAVELER","PREMIUM_TRAVELER","TRAVEL_AGENT")
                // .antMatchers("/api/destinations/**").hasAnyRole("ADMIN","PREMIUM_TRAVELER","TRAVEL_AGENT","BASIC_TRAVELER")
                // .antMatchers("/api/expenses/**").hasAnyRole("ADMIN","PREMIUM_TRAVELER","TRAVEL_AGENT")
                // .antMatchers("/api/activities/**").hasAnyRole("ADMIN","BASIC_TRAVELER","PREMIUM_TRAVELER","TRAVEL_AGENT","GUEST")

                // // All other requests need authentication
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:3000")); // React frontend URL
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        config.setExposedHeaders(List.of("Authorization"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
