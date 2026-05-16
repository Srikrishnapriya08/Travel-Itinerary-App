// // // package com.examly.springapp.controller;

// // // import com.examly.springapp.model.ExpenseEntity;
// // // import com.examly.springapp.service.ExpenseService;
// // // import org.springframework.http.ResponseEntity;
// // // import org.springframework.web.bind.annotation.*;

// // // import java.util.List;

// // // @RestController
// // // @RequestMapping("/api/expenses")
// // // public class ExpenseController {

// // //     private final ExpenseService expenseService;

// // //     public ExpenseController(ExpenseService expenseService) {
// // //         this.expenseService = expenseService;
// // //     }

// // //     @PostMapping
// // //     public ResponseEntity<ExpenseEntity> createExpense(@RequestBody ExpenseEntity expense) {
// // //         return ResponseEntity.ok(expenseService.addExpense(expense));
// // //     }

// // //     @GetMapping
// // //     public ResponseEntity<List<ExpenseEntity>> getAllExpenses() {
// // //         return ResponseEntity.ok(expenseService.getAllExpenses());
// // //     }

// // //     @GetMapping("/{id}")
// // //     public ResponseEntity<ExpenseEntity> getExpenseById(@PathVariable Long id) {
// // //         return expenseService.getExpenseById(id)
// // //                 .map(ResponseEntity::ok)
// // //                 .orElse(ResponseEntity.notFound().build());
// // //     }

// // //     @PutMapping("/{id}")
// // //     public ResponseEntity<ExpenseEntity> updateExpense(
// // //             @PathVariable Long id,
// // //             @RequestBody ExpenseEntity expenseDetails) {
// // //         return ResponseEntity.ok(expenseService.updateExpense(id, expenseDetails));
// // //     }

// // //     @DeleteMapping("/{id}")
// // //     public String deleteExpense(@PathVariable Long id) {
// // //         expenseService.deleteExpense(id);
// // //         return "Expense deleted successfully";
// // //     }
// // // }
// // package com.examly.springapp.controller;

// // import com.examly.springapp.dto.ExpenseDTO;
// // import com.examly.springapp.service.ExpenseService;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.List;

// // @RestController
// // @RequestMapping("/api/expenses")
// // @CrossOrigin(origins = "*")
// // public class ExpenseController {

// //     private final ExpenseService expenseService;

// //     public ExpenseController(ExpenseService expenseService) {
// //         this.expenseService = expenseService;
// //     }

// //     @GetMapping
// //     public List<ExpenseDTO> getAllExpenses() {
// //         return expenseService.getAllExpenses();
// //     }

// //     @GetMapping("/{id}")
// //     public ResponseEntity<ExpenseDTO> getExpenseById(@PathVariable Long id) {
// //         return expenseService.getExpenseById(id)
// //                 .map(ResponseEntity::ok)
// //                 .orElse(ResponseEntity.notFound().build());
// //     }

// //     @PostMapping
// //     public ExpenseDTO createExpense(@RequestBody ExpenseDTO dto) {
// //         return expenseService.addExpense(dto);
// //     }

// //     @PutMapping("/{id}")
// //     public ResponseEntity<ExpenseDTO> updateExpense(@PathVariable Long id,
// //                                                     @RequestBody ExpenseDTO dto) {
// //         try {
// //             return ResponseEntity.ok(expenseService.updateExpense(id, dto));
// //         } catch (RuntimeException e) {
// //             return ResponseEntity.notFound().build();
// //         }
// //     }

// //     @DeleteMapping("/{id}")
// //     public String deleteExpense(@PathVariable Long id) {
// //         expenseService.deleteExpense(id);
// //         return "Expense deleted successfully";
// //     }
// // }
// package com.examly.springapp.controller;

// import com.examly.springapp.dto.ExpenseDTO;
// import com.examly.springapp.service.ExpenseService;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.security.access.prepost.PreAuthorize;

// import java.util.List;

// @RestController
// @RequestMapping("/api/expenses")
// @CrossOrigin(origins = "*")
// public class ExpenseController {

//     private final ExpenseService expenseService;

//     public ExpenseController(ExpenseService expenseService) {
//         this.expenseService = expenseService;
//     }

//     @GetMapping
//     @PreAuthorize("hasAnyRole('BASIC_TRAVELER','PREMIUM_TRAVELER','ADMIN','TRAVEL_AGENT')")
//     public List<ExpenseDTO> getAllExpenses() {
//         return expenseService.getAllExpenses();
//     }

//     @GetMapping("/{id}")
//     @PreAuthorize("hasAnyRole('BASIC_TRAVELER','PREMIUM_TRAVELER','ADMIN')")
//     public ResponseEntity<ExpenseDTO> getExpenseById(@PathVariable Long id) {
//         return expenseService.getExpenseById(id)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     @PreAuthorize("hasAnyRole('BASIC_TRAVELER','PREMIUM_TRAVELER','ADMIN')")
//     public ExpenseDTO createExpense(@RequestBody ExpenseDTO dto) {
//         return expenseService.addExpense(dto);
//     }

//     @PutMapping("/{id}")
//     @PreAuthorize("hasAnyRole('BASIC_TRAVELER','PREMIUM_TRAVELER','ADMIN')")
//     public ResponseEntity<ExpenseDTO> updateExpense(@PathVariable Long id,
//                                                     @RequestBody ExpenseDTO dto) {
//         try {
//             return ResponseEntity.ok(expenseService.updateExpense(id, dto));
//         } catch (RuntimeException e) {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/{id}")
//     @PreAuthorize("hasRole('ADMIN')")
//     public String deleteExpense(@PathVariable Long id) {
//         expenseService.deleteExpense(id);
//         return "Expense deleted successfully";
//     }
// }



package com.examly.springapp.controller;

import com.examly.springapp.dto.ExpenseDTO;
import com.examly.springapp.service.ExpenseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_ADMIN','ROLE_TRAVEL_AGENT')")
    public List<ExpenseDTO> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_ADMIN')")
    public ResponseEntity<ExpenseDTO> getExpenseById(@PathVariable Long id) {
        return expenseService.getExpenseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_ADMIN')")
    public ExpenseDTO createExpense(@RequestBody ExpenseDTO dto) {
        return expenseService.addExpense(dto);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_ADMIN')")
    public ResponseEntity<ExpenseDTO> updateExpense(@PathVariable Long id,
                                                    @RequestBody ExpenseDTO dto) {
        try {
            return ResponseEntity.ok(expenseService.updateExpense(id, dto));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(id);
        return "Expense deleted successfully";
    }
}
